import NextAuth from 'next-auth';
import GitHub from 'next-auth/providers/github';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { prisma } from '@/lib/prisma';
import { NODE_ENV } from '@/config';

export const { handlers, signIn, signOut, auth } = NextAuth({
    adapter: PrismaAdapter(prisma),
    providers: [GitHub],
    // 解决这个错误：Error: PrismaClient is not configured to run in Vercel Edge Functions or Edge Middleware.
    // 参考：https://github.com/prisma/prisma/issues/21310#issuecomment-1840428931
    // session: { strategy: 'jwt' },
    trustHost: true,
    debug: NODE_ENV === 'development',
    callbacks: {
        async session({ session, user }) {
            // 获取用户角色并添加到 session
            const dbUser = await prisma.user.findUnique({
                where: { id: user.id },
                include: {
                    roles: {
                        include: { permissions: true }
                    }
                }
            });

            session.user = {
                ...session.user,
                roles: dbUser?.roles.map(r => r.value) || [],
                permissions:
                    dbUser?.roles.flatMap(r =>
                        r.permissions.map(p => p.code)
                    ) || ''
            } as any;

            return session;
        }
    },
    events: {
        async createUser({ user }) {
            // 分配用户默认角色
            await prisma.user.update({
                where: { id: user.id },
                data: {
                    roles: {
                        connect: { value: 'user' }
                    }
                }
            });
        }
    }
});

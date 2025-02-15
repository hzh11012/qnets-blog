import NextAuth from 'next-auth';
import GitHub from 'next-auth/providers/github';
import { PrismaAdapter } from '@auth/prisma-adapter';
import Resend from 'next-auth/providers/resend';
import { prisma } from '@/lib/prisma';
import { NODE_ENV } from '@/config';
import { PATHS } from '@/constants';

export const { handlers, signIn, signOut, auth } = NextAuth({
    adapter: PrismaAdapter(prisma),
    providers: [
        GitHub,
        Resend({
            from: 'no-reply@qnets.cn'
        })
    ],
    // 解决这个错误：Error: PrismaClient is not configured to run in Vercel Edge Functions or Edge Middleware.
    // 参考：https://github.com/prisma/prisma/issues/21310#issuecomment-1840428931
    session: { strategy: 'jwt' },
    trustHost: true,
    pages: {
        signIn: PATHS.AUTH_SIGN_IN,
        verifyRequest: PATHS.AUTH_VERIFY
    },
    debug: NODE_ENV === 'development',
    callbacks: {
        session({ session, token }: any) {
            if (session.user) {
                if (token.sub) {
                    session.user.id = token.sub;
                }

                if (token.email) {
                    session.user.email = token.email;
                }

                session.user.roles = token.roles;
                session.user.permissions = token.permissions;
                session.user.name = token.name;
                session.user.image = token.picture;
            }

            return session;
        },
        async jwt({ token }) {
            if (!token.sub) return token;

            // 获取用户角色并添加到 token
            const dbUser = await prisma.user.findUnique({
                where: { id: token.sub },
                include: {
                    roles: {
                        include: { permissions: true }
                    }
                }
            });

            token = {
                ...token,
                roles: dbUser?.roles.map(r => r.value) || [],
                permissions:
                    dbUser?.roles.flatMap(r =>
                        r.permissions.map(p => p.code)
                    ) || ''
            };

            return token;
        }
    },
    events: {
        async createUser({ user }) {
            if (user) {
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
    }
});

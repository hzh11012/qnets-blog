import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
    // 创建默认权限
    await prisma.permission.createMany({
        data: [
            { code: 'blog:create', name: '创建文章' },
            { code: 'blog:read', name: '查看文章' },
            { code: 'blog:edit', name: '修改文章' },
            { code: 'blog:delete', name: '删除文章' }
        ],
        skipDuplicates: true
    });

    // 创建普通用户角色
    await prisma.role.upsert({
        where: { label: '普通用户', value: 'user' },
        update: {},
        create: {
            label: '普通用户',
            value: 'user',
            permissions: { connect: [{ code: 'blog:read' }] }
        }
    });

    // 创建管理员角色
    await prisma.role.upsert({
        where: { label: '管理员', value: 'admin' },
        update: {},
        create: {
            label: '管理员',
            value: 'admin',
            permissions: {
                connect: [
                    { code: 'blog:create' },
                    { code: 'blog:read' },
                    { code: 'blog:edit' },
                    { code: 'blog:delete' }
                ]
            }
        }
    });
}

main()
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });

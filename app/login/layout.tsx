import React from 'react';

import { type Metadata } from 'next';

import { PATHS, PATHS_MAP } from '@/constants';
import { auth } from '@/lib/auth';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
    title: PATHS_MAP[PATHS.AUTH_SIGN_IN]
};

const Layout = async ({ children }: React.PropsWithChildren) => {
    const session = await auth();

    // 已登录则重定向到首页
    if (session?.user) redirect('/');

    return <>{children}</>;
};

export default Layout;

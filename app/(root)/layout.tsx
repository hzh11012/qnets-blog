import React, { PropsWithChildren } from 'react';
import Header from '@/components/custom/header';

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <>
            <Header />
            <main className="min-h-[calc(100svh-3.5rem)]">{children}</main>
        </>
    );
};

export default Layout;

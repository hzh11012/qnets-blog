'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { navs, WEBSITE } from '@/constants';
import ThemeSwitch from '@/components/custom/theme-switch';
import User from '@/components/custom/user';
import Menus from '@/components/custom/menus';

const Header: React.FC = () => {
    return (
        <header
            className={cn(
                'w-full sticky top-0 flex justify-center z-50 backdrop-blur bg-background/95 border-x-0 supports-[backdrop-filter]:bg-background/60'
            )}
        >
            <div
                className={cn(
                    'flex w-full items-center justify-between p-2 sm:px-6 md:max-w-screen-md 2xl:max-w-screen-xl'
                )}
            >
                {/** left-entry */}
                <div className={cn('flex items-center gap-2 select-none')}>
                    <Image
                        src="./qnets.svg"
                        width={40}
                        height={40}
                        alt={WEBSITE}
                    />
                    <span className="text-xl font-semibold text-primary">
                        {WEBSITE}
                    </span>
                </div>
                {/** right-entry */}
                <div className={cn('flex items-center gap-4 select-none')}>
                    <div className={cn('sm:flex sm:items-center gap-4 hidden')}>
                        <Menus options={navs} />
                        <ThemeSwitch />
                    </div>
                    <User />
                </div>
            </div>
        </header>
    );
};

export default Header;

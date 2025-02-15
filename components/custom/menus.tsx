'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface MenusProps {
    options: {
        label?: string;
        link: string;
        external?: boolean;
    }[];
    className?: string;
}

const Menus: React.FC<MenusProps> = ({ options, className }) => {
    const pathname = usePathname();

    return (
        <>
            {options.map(el => (
                <Link
                    href={el.link}
                    key={el.label + el.link}
                    scroll={false}
                    className={cn(
                        'font-normal text-sm text-muted-foreground transition-colors p-2',
                        'hover:font-semibold hover:text-primary',
                        pathname === el.link && 'font-semibold text-primary',
                        className
                    )}
                >
                    {el.label}
                </Link>
            ))}
        </>
    );
};

export default Menus;

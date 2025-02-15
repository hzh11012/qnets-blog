import { cn } from '@/lib/utils';
import React from 'react';
import { Button } from '@/components/ui/button';
import { PATHS } from '@/constants';
import Link from 'next/link';

interface StatusCodeProps {
    first?: string;
    last?: string;
}

const StatusCode: React.FC<StatusCodeProps> = async ({
    first = '4',
    last = '4'
}) => {
    return (
        <div
            className={cn(
                'w-fit m-auto h-svh flex flex-col items-center justify-center'
            )}
        >
            <span
                className={cn(
                    'relative first-letter:tracking-[5rem] font-bold text-[11rem] sm:text-[16rem] w-fit block before:absolute before:size-full before:bg-no-repeat before:bg-contain before:bg-center before:bg-404 before:animate-404'
                )}
            >
                {first}
                {last}
            </span>
            <Button className={cn('w-1/2')} asChild>
                <Link href={PATHS.SITE_HOME}>返回首页</Link>
            </Button>
        </div>
    );
};

export default StatusCode;

import React from 'react';
import ThemeSwitch from '@/components/custom/theme-switch';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Counter from '@/components/custom/count';
import Test from '@/components/home/test';
import { auth } from '@/lib/auth';

const Home: React.FC = async () => {
    const session = await auth();

    console.log('session', session);
    return (
        <div
            className={cn(
                'flex flex-col items-center justify-center w-full h-svh gap-6'
            )}
        >
            <div className={cn('flex items-center gap-6')}>
                <Image
                    src="./qnets.svg"
                    width={96}
                    height={96}
                    alt="Qnets logo"
                />
                <Image
                    src="./next.svg"
                    width={96}
                    height={96}
                    alt="Next logo"
                />
                <Image
                    src="./react.svg"
                    width={96}
                    height={96}
                    alt="React logo"
                />
            </div>
            <h1 className={cn('text-3xl md:text-4xl font-bold')}>
                Qnets + Next + React
            </h1>
            <Test />
            <Counter />
            <ThemeSwitch />
            <p>Click on the Button to change the Theme.</p>
        </div>
    );
};

export default Home;

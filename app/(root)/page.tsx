import React from 'react';
import { cn } from '@/lib/utils';

const Home: React.FC = async () => {
    return (
        <div
            className={cn(
                'flex flex-col items-center justify-center w-full h-svh gap-6'
            )}
        >
            Home
        </div>
    );
};

export default Home;

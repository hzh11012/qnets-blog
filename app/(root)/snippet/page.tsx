import React from 'react';
import { cn } from '@/lib/utils';

const Snippet: React.FC = async () => {
    return (
        <div
            className={cn(
                'flex flex-col items-center justify-center w-full h-svh gap-6'
            )}
        >
            Snippet
        </div>
    );
};

export default Snippet;

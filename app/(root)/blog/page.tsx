import React from 'react';
import { cn } from '@/lib/utils';

const Blog: React.FC = async () => {
    return (
        <div
            className={cn(
                'flex flex-col items-center justify-center w-full h-svh gap-6'
            )}
        >
            Blog
        </div>
    );
};

export default Blog;

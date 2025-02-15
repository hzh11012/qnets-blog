'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ThemeSwitchProps {
    className?: string;
}

const ThemeSwitch: React.FC<ThemeSwitchProps> = ({ className }) => {
    const { theme, setTheme } = useTheme();

    return (
        <Button
            variant="ghost"
            size="icon"
            className={cn('rounded-full', className)}
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        >
            <Sun
                className={cn(
                    '!size-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0'
                )}
            />
            <Moon
                size={20}
                className={cn(
                    '!size-5 absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100'
                )}
            />
            <span className="sr-only">Toggle theme</span>
        </Button>
    );
};

export default ThemeSwitch;

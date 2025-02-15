'use client';

import React from 'react';
import { signInWithThird } from '@/components/login/actions';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface LoginButtonProps {
    type: string;
}

const LoginButton: React.FC<LoginButtonProps> = ({ type }) => {
    const handleLogin = async () => {
        await signInWithThird(type);
    };

    return (
        <Button onClick={handleLogin}>
            <span className={cn(`icon-[fa6-brands--${type}] text-lg`)} />
            使用 {type.replace(/(^\w)/, s => s.toUpperCase())} 登录
        </Button>
    );
};

export { LoginButton };

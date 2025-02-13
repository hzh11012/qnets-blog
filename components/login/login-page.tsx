'use client';

import { cn } from '@/lib/utils';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from '@/components/ui/card';
import Image from 'next/image';
import ThemeSwitch from '@/components/custom/theme-switch';
import { Button } from '@/components/ui/button';
import { signInWithThird } from '@/components/login/actions';

const LoginPage = () => {
    const handleLogin = async (type: string) => {
        await signInWithThird(type);
    };

    return (
        <div className={cn('grid w-svw h-svh place-content-center')}>
            <Card className={cn('sm:w-96 w-svw')}>
                <CardHeader>
                    <CardTitle
                        className={cn(
                            'text-2xl flex items-center justify-between w-full'
                        )}
                    >
                        <div
                            className={cn('flex items-center text-theme-color')}
                        >
                            <Image
                                className={cn('block mr-4')}
                                src="./qnets.svg"
                                width={56}
                                height={56}
                                alt="Qnets"
                            />
                            Qnets Blog
                        </div>
                        <ThemeSwitch />
                    </CardTitle>
                    <CardDescription>选择你喜欢的方式进行登录</CardDescription>
                </CardHeader>
                <CardContent>TODO</CardContent>
                <CardFooter>
                    <div className={cn('grid w-full gap-4')}>
                        <div
                            className={cn(
                                'w-full flex items-center gap-3 before:h-px before:flex-1 before:bg-border after:h-px after:flex-1 after:bg-border'
                            )}
                        >
                            <span
                                className={cn('text-xs text-muted-foreground')}
                            >
                                或
                            </span>
                        </div>
                        <Button onClick={() => handleLogin('github')}>
                            <span
                                className={cn(
                                    'icon-[fa6-brands--github] text-lg'
                                )}
                            />
                            使用 Github 登录
                        </Button>
                    </div>
                </CardFooter>
            </Card>
        </div>
    );
};

export default LoginPage;

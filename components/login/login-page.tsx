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
import LoginForm from '@/components/login/login-form';
import { LoginButton } from '@/components/login/login-button';
import { SparklesText } from '@/components/magicui/sparkles-text';

const LoginPage = () => {
    return (
        <div className={cn('flex flex-col gap-6')}>
            <Card>
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
                            <SparklesText
                                className={cn('block text-2xl')}
                                sparklesCount={7}
                                text="Qnets Blog"
                            />
                        </div>
                        <ThemeSwitch />
                    </CardTitle>
                    <CardDescription>选择你喜欢的方式进行登录</CardDescription>
                </CardHeader>
                <CardContent>
                    <LoginForm />
                </CardContent>
                <CardFooter>
                    <div className={cn('grid w-full gap-6')}>
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
                        <LoginButton type="github" />
                    </div>
                </CardFooter>
            </Card>
        </div>
    );
};

export default LoginPage;

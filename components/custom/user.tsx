'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger
} from '@/components/ui/sheet';
import { useStore } from '@/store';
import { useShallow } from 'zustand/react/shallow';
import Link from 'next/link';
import { signOutAndRedirect } from '@/components/login/actions';
import { LogOut, UserRound, AlignJustify, ChevronRight } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import ThemeSwitch from '@/components/custom/theme-switch';
import { navs } from '@/constants';
import { usePathname, useRouter } from 'next/navigation';

const useUser = () => {
    return useStore(
        useShallow(store => ({
            user: store.user
        }))
    );
};

const User: React.FC = () => {
    const { user } = useUser();
    const router = useRouter();
    const pathname = usePathname();
    const [open, setOpen] = React.useState(false);

    const handleLogout = async () => {
        await signOutAndRedirect();
    };

    return (
        <>
            <div className={cn('hidden sm:block')}>
                {user.id ? (
                    <div className={cn('ml-2')}>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Avatar
                                    className={cn('size-10 cursor-pointer')}
                                >
                                    <AvatarImage
                                        src={user.image || ''}
                                        className={cn('object-cover')}
                                        alt={user.name || user.email}
                                    />
                                    <AvatarFallback>
                                        {(user.name || user.email)?.slice(0, 1)}
                                    </AvatarFallback>
                                </Avatar>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                                className={cn('w-36 px-4')}
                                align="center"
                                forceMount
                            >
                                <DropdownMenuLabel
                                    className={cn(
                                        'py-2 text-center line-clamp-1'
                                    )}
                                >
                                    {user.name || user.email}
                                </DropdownMenuLabel>
                                <DropdownMenuItem
                                    className={cn(
                                        'cursor-pointer justify-between py-2'
                                    )}
                                >
                                    <Link
                                        href="/profile"
                                        className={cn(
                                            'flex items-center gap-2'
                                        )}
                                    >
                                        个人中心
                                    </Link>
                                    <UserRound size={16} />
                                </DropdownMenuItem>
                                <DropdownMenuItem
                                    className={cn(
                                        'cursor-pointer justify-between py-2'
                                    )}
                                >
                                    <div
                                        className={cn(
                                            'flex items-center gap-2'
                                        )}
                                        onClick={handleLogout}
                                    >
                                        退出登录
                                    </div>
                                    <LogOut size={16} />
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                ) : (
                    <Link
                        href="/login"
                        className={cn(
                            'font-normal text-sm text-muted-foreground transition-colors p-2',
                            'hover:font-semibold hover:text-primary'
                        )}
                    >
                        登录
                    </Link>
                )}
            </div>

            <div className={cn('block sm:hidden')}>
                <Sheet open={open} onOpenChange={setOpen}>
                    <SheetTrigger className={cn('md:hidden block')}>
                        <AlignJustify size={22} className="mr-2" />
                    </SheetTrigger>
                    <SheetContent className={cn('w-60')} side="left">
                        <SheetHeader>
                            {user.id ? (
                                <SheetTitle
                                    className={cn(
                                        'flex flex-col text-center space-y-4 mb-4'
                                    )}
                                >
                                    <Avatar
                                        className={cn(
                                            'size-14 left-1/2 -translate-x-1/2 text-base'
                                        )}
                                    >
                                        <AvatarImage
                                            src={user.image || ''}
                                            className={cn('object-cover')}
                                            alt={user.name || user.email}
                                        />
                                        <AvatarFallback>
                                            {(user.name || user.email)?.slice(
                                                0,
                                                1
                                            )}
                                        </AvatarFallback>
                                    </Avatar>
                                    <SheetDescription asChild>
                                        <div className={cn('space-y-4')}>
                                            <h3
                                                className={cn(
                                                    'text-base text-center'
                                                )}
                                            >
                                                {user.name || user.email}
                                            </h3>
                                        </div>
                                    </SheetDescription>
                                </SheetTitle>
                            ) : (
                                <SheetTitle
                                    className={cn(
                                        'flex items-center justify-center mb-4'
                                    )}
                                >
                                    <Link
                                        href="/login"
                                        className={cn(
                                            'size-14 text-muted-foreground text-sm flex items-center justify-center rounded-full bg-muted'
                                        )}
                                    >
                                        登录
                                    </Link>
                                </SheetTitle>
                            )}
                        </SheetHeader>
                        <Separator className={cn('my-2')} />
                        {navs.map(el => (
                            <div
                                key={el.label + el.link}
                                className={cn(
                                    'relative flex items-center gap-2 px-2 text-sm justify-between py-2 cursor-pointer',
                                    pathname === el.link &&
                                        'bg-muted rounded-sm'
                                )}
                                onClick={() => {
                                    router.push(el.link);
                                    setOpen(false);
                                }}
                            >
                                <div className={cn('flex items-center gap-2')}>
                                    {el.icon}
                                    {el.label}
                                </div>
                                <ChevronRight size={16} />
                            </div>
                        ))}
                        {user.id && (
                            <div
                                className={cn(
                                    'relative flex items-center gap-2 px-2 text-sm justify-between py-2 cursor-pointer',
                                    pathname === '/profile' &&
                                        'bg-muted rounded-sm'
                                )}
                                onClick={() => {
                                    router.push('/profile');
                                    setOpen(false);
                                }}
                            >
                                <div className={cn('flex items-center gap-2')}>
                                    <UserRound size={16} />
                                    个人中心
                                </div>
                                <ChevronRight size={16} />
                            </div>
                        )}
                        {user.id && (
                            <div
                                className={cn(
                                    'relative flex items-center gap-2 px-2 text-sm justify-between py-2 cursor-pointer'
                                )}
                                onClick={handleLogout}
                            >
                                <div className={cn('flex items-center gap-2')}>
                                    <LogOut size={16} />
                                    退出登录
                                </div>
                            </div>
                        )}
                        <div className={cn('absolute top-4 right-4')}>
                            <ThemeSwitch
                                className={cn(
                                    'size-5 hover:bg-transparent focus-visible:bg-transparent'
                                )}
                            />
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </>
    );
};

export default User;

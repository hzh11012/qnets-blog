'use client';

import React from 'react';
import { Form } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import FormInput from '@/components/custom/form/form-input';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { signIn } from 'next-auth/react';

const formSchema = z.object({
    email: z
        .string({
            required_error: '邮箱不能为空',
            invalid_type_error: '邮箱类型错误'
        })
        .email('邮箱格式不正确')
});

const LoginForm: React.FC = () => {
    const form: any = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: ''
        }
    });

    return (
        <Form {...form}>
            <form>
                <FormInput
                    control={form.control}
                    name="email"
                    label="邮箱"
                    required
                />
            </form>

            <Button
                className={cn('w-full mt-6')}
                variant="outline"
                onClick={form.handleSubmit(
                    async (values: z.infer<typeof formSchema>) => {
                        signIn('resend', values);
                    }
                )}
            >
                登录
            </Button>
        </Form>
    );
};

export default LoginForm;

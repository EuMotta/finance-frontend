'use client';

import * as React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { AiOutlineLoading } from 'react-icons/ai';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useAuthUser } from '@/hooks/use-login-user';
import { AuthRequestDto } from '@/http/generated/client/api.schemas';
import { authLoginBody } from '@/http/generated/zod/auth/auth.zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { cn } from '@/lib/utils';

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { PasswordInput } from '../ui/password-input';

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export const loginFormSchema = z.object({
  email: z
    .string()
    .min(1, 'Por favor, insira seu email')
    .email('Email inválido'),
  password: z.string().min(1, 'Por favor, insira sua senha'),
});

export function UserLoginForm({ className, ...props }: UserAuthFormProps) {
  const form = useForm<AuthRequestDto>({
    resolver: zodResolver(authLoginBody),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const loginUser = useAuthUser(form.reset);
  const onSubmit = (data: AuthRequestDto) => {
    loginUser.mutate(data);
  };

  return (
    <div className={cn('grid gap-6', className)} {...props}>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="grid gap-3">
            <div className="grid gap-1">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        id="email"
                        placeholder="name@example.com"
                        type="email"
                        autoCapitalize="none"
                        autoComplete="email"
                        autoCorrect="off"
                        disabled={loginUser.isPending}
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="grid gap-1">
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Senha</FormLabel>
                    <FormControl>
                      <PasswordInput
                        disabled={loginUser.isPending}
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Button disabled={loginUser.isPending} type="submit">
              {loginUser.isPending && (
                <AiOutlineLoading className="mr-2 h-4 w-4 animate-spin" />
              )}
              entrar
            </Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
}

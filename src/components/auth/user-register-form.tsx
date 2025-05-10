'use client';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import * as React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { AiOutlineLoading } from 'react-icons/ai';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useCreateUser } from '@/http/generated/client/api';
import { CreateUserResponse } from '@/http/generated/client/api.schemas';
import { createUserBody } from '@/http/generated/zod/users/users.zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';

import { cn } from '@/lib/utils';
import { handleApiError } from '@/utils/helpers';

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { PasswordInput } from '../ui/password-input';

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserRegisterForm({ className, ...props }: UserAuthFormProps) {
  const form = useForm<CreateUserResponse>({
    resolver: zodResolver(createUserBody),
  });
  const createUser = useCreateUser();
  const router = useRouter();
  const onSubmit = (data: CreateUserResponse) => {
    createUser.mutate(
      { data },
      {
        onSuccess: async () => {
          toast.success('Usuário criado com sucesso');

          try {
            const res = await signIn('credentials', {
              redirect: false,
              email: data.email,
              password: data.password,
            });

            if (res?.ok) {
              router.push('/dashboard');
            } else {
              toast.error('Falha ao autenticar após criação.');
            }
          } catch (err) {
            console.error(err);
            toast.error('Erro inesperado ao fazer login automático.');
          }
        },
        onError: (error: any) => {
          const message = handleApiError(error, 'Erro ao criar usuário.');
          toast.error(message);
        },
      },
    );
  };
  return (
    <div className={cn('grid gap-6', className)} {...props}>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="grid gap-3">
            <div className="flex gap-2">
              <div>
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nome</FormLabel>
                      <FormControl>
                        <Input
                          id="name"
                          placeholder="John"
                          autoCapitalize="none"
                          autoComplete="name"
                          autoCorrect="off"
                          disabled={createUser.isPending}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div>
                <FormField
                  control={form.control}
                  name="last_name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Sobrenome</FormLabel>
                      <FormControl>
                        <Input
                          id="last_name"
                          placeholder="Doe"
                          autoCapitalize="none"
                          autoComplete="last_name"
                          autoCorrect="off"
                          disabled={createUser.isPending}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <div>
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
                        disabled={createUser.isPending}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div>
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Senha</FormLabel>
                    <FormControl>
                      <PasswordInput
                        disabled={createUser.isPending}
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Button disabled={createUser.isPending} type="submit">
              {createUser.isPending && (
                <AiOutlineLoading className="mr-2 h-4 w-4 animate-spin" />
              )}
              Cadastrar
            </Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
}

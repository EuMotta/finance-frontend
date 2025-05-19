import Image from 'next/image';
import Link from 'next/link';

import { UserLoginForm } from '@/components/auth/user-login-form';
import { buttonVariants } from '@/components/ui/button';

import { cn } from '@/lib/utils';

const page = () => {
  return (
    <>
      <div className="md:hidden">
        <Image
          src="https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          width={1280}
          height={843}
          alt="Authentication"
          className="block dark:hidden"
        />
        <Image
          src="https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          width={1280}
          height={843}
          alt="Authentication"
          className="hidden dark:block"
        />
      </div>
      <div className="container relative h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="py-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[550px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Acessar conta
              </h1>
              <p className="text-sm text-muted-foreground">
                Acesse sua conta com email e senha
              </p>
            </div>
            <UserLoginForm />
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Não tem uma conta?
                </span>
              </div>
            </div>
            <Link
              href="/cadastrar"
              className={cn(
                buttonVariants({ variant: 'outline' }),
                'right-4 top-4 md:right-8 md:top-8',
              )}
            >
              Criar
            </Link>
          </div>
        </div>
        <div
          className="relative hidden h-full flex-col bg-muted p-10 dark:border-r md:flex"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div style={{ filter: 'drop-shadow(3px 3px 3px black)' }}>logo</div>
        </div>
      </div>
    </>
  );
};

export default page;

import Link from 'next/link';
import { BiLogoGoogle } from 'react-icons/bi';

import { UserRegisterForm } from '@/components/auth/user-register-form';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function LoginForm() {
  return (
    <div className="flex h-screen items-center justify-center">
      <Card className="mx-auto my-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <UserRegisterForm />

            <Button variant="outline" className="w-full" disabled>
              <BiLogoGoogle /> Login with Google
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Não tem uma conta?{' '}
            <Link href="#" className="underline">
              Criar agora
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

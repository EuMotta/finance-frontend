import { NextFetchEvent, NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';
import { MiddlewareFactory } from './middleware-factory';
import { env } from '@/env';

export const auth: MiddlewareFactory = (next) => {
  return async (request: NextRequest, _next: NextFetchEvent) => {
    const token = await getToken({
      req: request,
      secret: env.NEXTAUTH_SECRET,
    });
    const session = token;
    const protectedRoutes = ['/private'];
    const authRoutes = ['/entrar', '/cadastrar', '/'];
    const isProtectedRoute = protectedRoutes.some((route) =>
      request.nextUrl.pathname.startsWith(route),
    );

    const isAuthRoute = authRoutes.includes(request.nextUrl.pathname);

    if (!session && isProtectedRoute) {
      const absoluteURL = new URL('/nao-autorizado', request.nextUrl.origin);
      return NextResponse.rewrite(absoluteURL.toString());
    }
    if (session && isAuthRoute) {
      const absoluteURL = new URL('/dashboard', request.nextUrl.origin);
      return NextResponse.redirect(absoluteURL.toString());
    }
    return next(request, _next);
  };
};

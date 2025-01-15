import { env } from '@/lib/env';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: env.AUTH_SECRET });

  console.log('Token:', token, "end token !"); 

  const url = req.nextUrl.clone();

  // If the user is not authenticated and is not on the home page, redirect to the home page
  if (!token && url.pathname !== '/') {
    url.pathname = '/';
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|favicon.ico).*)'], // Apply middleware to all routes except API routes, _next/static, and favicon
};

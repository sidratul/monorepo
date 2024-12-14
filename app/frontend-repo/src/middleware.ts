import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { TOKEN_COOKIE_NAME } from './constants';
 
export function middleware(request: NextRequest) {
  const { cookies } = request;
  const token = cookies.get(TOKEN_COOKIE_NAME);

  if(!!token && ['/login', '/register'].includes(request.nextUrl.pathname)) {
    return NextResponse.redirect(new URL('/', request.url))
  }
}
 
export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
}
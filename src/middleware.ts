// import { authenticate } from 'auth-provider'
import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  // const isAuthenticated = authenticate(request)

  // If the user is authenticated, continue as normal
  // if (isAuthenticated) {
  // return NextResponse.redirect(new URL('/dashboard', request.url))
  // }
  return NextResponse.next()

  // Redirect to login page if not authenticated
  // return NextResponse.redirect(new URL('/signin', request.url))
}

export const config = {
  matcher: ['/', '/dashboard/:path*'],
}

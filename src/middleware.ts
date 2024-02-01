// import { authenticate } from 'auth-provider'
import { NextRequest, NextResponse } from 'next/server'

import { authenticate } from './lib/authenticate'

export function middleware(request: NextRequest) {
  const isAuthenticated = authenticate(request)

  // If the user is authenticated, continue as normal
  if (isAuthenticated) {
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }

  // Redirect to login page if not authenticated
  return NextResponse.next()
}

export const config = {
  matcher: ['/signin', '/dashboard/:path*'],
}

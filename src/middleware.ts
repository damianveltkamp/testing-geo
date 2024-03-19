import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const response = NextResponse.next()
  const ip = request.headers.get('X-Forwarded-For')
  response.cookies.set('x-ip-testing', ip ?? '', { httpOnly: false });
  return response
}

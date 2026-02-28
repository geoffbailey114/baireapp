import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl

  // Redirect /blog?category=savings → /blog/savings (301, no query params)
  if (pathname === '/blog' && searchParams.has('category')) {
    const category = searchParams.get('category')
    if (category) {
      const url = request.nextUrl.clone()
      url.pathname = `/blog/${category}`
      url.search = '' // Strip all query params
      return NextResponse.redirect(url, 301)
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/blog',
}

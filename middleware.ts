import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Regular expression to match public files (images, css, js, etc.)
const PUBLIC_FILE = /\.(.*)$/;

export function middleware(request: NextRequest) {
  // Skip middleware for API routes, Next.js internals, and static files
  if (
    request.nextUrl.pathname.startsWith('/api/') ||
    request.nextUrl.pathname.startsWith('/_next/') ||
    PUBLIC_FILE.test(request.nextUrl.pathname)
  ) {
    return NextResponse.next();
  }

  // Convert the pathname to lowercase
  const pathname = request.nextUrl.pathname;
  const lowercasePathname = pathname.toLowerCase();

  // If the path is already lowercase, continue with the request
  if (pathname === lowercasePathname) {
    return NextResponse.next();
  }

  // Otherwise redirect to the lowercase version while preserving search params
  const url = request.nextUrl.clone();
  url.pathname = lowercasePathname;
  
  return NextResponse.redirect(url);
} 
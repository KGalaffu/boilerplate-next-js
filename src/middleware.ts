import createMiddleware from 'next-intl/middleware';
import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";
import { locales, defaultLocale } from './config/i18n.config';

// List of public routes that don't require authentication
const publicRoutes = ['/', '/login', '/register'];

// Create the intl middleware
const intlMiddleware = createMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'as-needed'
});

// Check if the requested path matches any of our public routes
const isPublicRoute = (path: string) => {
  const segments = path.split('/').filter(Boolean);
  const pathWithoutLocale = segments.length > 1 ? `/${segments[1]}` : '/';
  return publicRoutes.includes(pathWithoutLocale);
};

// Wrap the middleware with NextAuth
export default withAuth(
  function middleware(request) {
    const pathname = request.nextUrl.pathname;

    // Handle root path
    if (pathname === '/') {
      return intlMiddleware(request);
    }

    // If it's a public route, just handle i18n
    if (isPublicRoute(pathname)) {
      return intlMiddleware(request);
    }

    // For admin routes, check role
    if (pathname.includes('/admin')) {
      const token = request.nextauth.token;
      if (!token || token.role !== 'ADMIN') {
        const homeUrl = new URL(`/${defaultLocale}`, request.url);
        return NextResponse.redirect(homeUrl);
      }
    }

    // For all other routes, handle i18n
    return intlMiddleware(request);
  },
  {
    callbacks: {
      authorized: ({ req }) => {
        // Allow access to public routes without authentication
        if (isPublicRoute(req.nextUrl.pathname)) {
          return true;
        }
        // Require authentication for all other routes
        return true; // Temporarily allow all routes for testing
      },
    },
  }
);

// Matcher for Next.js Edge middleware
export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)']
};

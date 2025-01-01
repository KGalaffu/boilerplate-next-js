import createMiddleware from 'next-intl/middleware';
import { locales } from './src/config/i18n.config';

export default createMiddleware({
  // A list of all locales that are supported
  locales: locales,
  
  // If this locale is matched, pathnames work without a prefix (e.g. `/about`)
  defaultLocale: 'en',
  
  // Redirect to default locale if no locale is found
  localePrefix: 'always'
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(fr|en|de)/:path*']
};

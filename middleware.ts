import createMiddleware from 'next-intl/middleware';
import { locales } from 'configs/i18n/request';

export default createMiddleware({
  // A list of all locales that are supported
  locales: locales,

  // Used when no locale matches
  defaultLocale: 'en',
});

export const config = {
  // Match only internationalized pathnames
  // This regex excludes routes starting with /api, /_next, and files with extensions (e.g., favicon.ico, .svg, etc.)
  matcher: ['/((?!api|_next|.*\\..*).*)'],
};

import { Pathnames } from 'next-intl/navigation';

export const locales = ['en', 'fr', 'de'] as const;
export const defaultLocale = 'en' as const;

export const pathnames = {
  '/': '/',
  '/login': '/login',
  '/register': '/register',
  '/admin': '/admin',
} satisfies Pathnames<typeof locales>;

export type AppPathnames = keyof typeof pathnames;

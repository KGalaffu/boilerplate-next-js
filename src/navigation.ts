import {createSharedPathnamesNavigation} from 'next-intl/navigation';
 
export const locales = ['en', 'fr', 'de'] as const;
export const defaultLocale = 'en';
 
export const {Link, redirect, usePathname, useRouter} = createSharedPathnamesNavigation({locales});

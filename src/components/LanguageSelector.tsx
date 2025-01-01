"use client"

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '../navigation';

export default function LanguageSelector() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    router.replace(pathname, { locale: e.target.value });
  };

  return (
    <select
      onChange={handleChange}
      value={locale}
      className="bg-transparent text-sm border border-gray-300 rounded-md px-2 py-1"
    >
      <option value="en">English</option>
      <option value="fr">Français</option>
      <option value="de">Deutsch</option>
    </select>
  );
}

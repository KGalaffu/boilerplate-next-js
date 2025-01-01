import {NextIntlClientProvider} from 'next-intl';
import { notFound } from 'next/navigation';
import { Toaster } from "@/components/ui/toaster"
import { Inter as FontSans } from "next/font/google"
import { cn } from "@/lib/utils"
import Navbar from "@/components/Navbar"
import AuthProvider from "@/components/auth/AuthProvider"
import { locales } from '@/config/i18n.config';
import "../globals.css"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

async function getMessages(locale: string) {
  try {
    return (await import(`../../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = params;

  if (!locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages(locale);

  return (
    <html lang={locale}>
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        fontSans.variable
      )}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <AuthProvider>
            <Navbar />
            {children}
            <Toaster />
          </AuthProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

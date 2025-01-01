"use client"

import { useSession, signOut } from "next-auth/react"
import { Link } from "../navigation"
import { useTranslations } from 'next-intl'
import LanguageSelector from './LanguageSelector'

export default function Navbar() {
  const { data: session } = useSession()
  const t = useTranslations('navigation')

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex space-x-4">
            <Link href="/" className="text-gray-700 hover:text-gray-900">
              {t('home')}
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <LanguageSelector />
            
            {!session && (
              <>
                <Link
                  href="/login"
                  className="text-gray-700 hover:text-gray-900"
                >
                  {t('login')}
                </Link>
                <Link
                  href="/register"
                  className="text-gray-700 hover:text-gray-900"
                >
                  {t('register')}
                </Link>
              </>
            )}

            {session?.user?.role === "ADMIN" && (
              <Link
                href="/admin"
                className="text-gray-700 hover:text-gray-900"
              >
                {t('admin')}
              </Link>
            )}

            {session && (
              <button
                onClick={() => signOut()}
                className="text-gray-700 hover:text-gray-900"
              >
                {t('logout')}
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

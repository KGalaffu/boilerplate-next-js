"use client"

import { useSession } from "next-auth/react"
import { useTranslations } from 'next-intl'

export default function AdminPage() {
  const { data: session } = useSession()
  const t = useTranslations('admin')

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">{t('title')}</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4">{t('sessionInfo')}</h2>
        <pre className="bg-gray-100 p-4 rounded">
          {JSON.stringify(session, null, 2)}
        </pre>
      </div>
    </div>
  )
}

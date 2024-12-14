"use client"

import { useSession } from "next-auth/react"

export default function AdminPage() {
  const { data: session } = useSession()

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Page d'administration</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Informations de session</h2>
        <pre className="bg-gray-100 p-4 rounded">
          {JSON.stringify(session, null, 2)}
        </pre>
      </div>
    </div>
  )
}

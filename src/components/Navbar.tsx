"use client"

import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useSession } from "next-auth/react"

export default function Navbar() {
  const { data: session } = useSession()

  return (
    <Card className="rounded-none border-b shadow-lg bg-gray-800">
      <nav className="container mx-auto flex h-16 items-center px-4">
        <div className="relative mr-4 flex items-center">
          <span className="relative inline-block font-mono text-lg font-bold tracking-tight glitch-text text-white" data-text="Boilerplate Next.js v0.1.0">
            Boilerplate Next.js v0.1.0
          </span>
        </div>
        <div className="ml-auto flex items-center space-x-4">
          <Button variant="ghost" className="text-white hover:text-gray-300" asChild>
            <Link href="/">Accueil</Link>
          </Button>
          <Button variant="ghost" className="text-white hover:text-gray-300" asChild>
            <Link href="/login">Connexion</Link>
          </Button>
          <Button variant="ghost" className="text-white hover:text-gray-300" asChild>
            <Link href="/register">S'inscrire</Link>
          </Button>
          {session?.user?.role === 'admin' && (
            <Button variant="ghost" className="text-white hover:text-gray-300" asChild>
              <Link href="/admin">Admin</Link>
            </Button>
          )}
        </div>
      </nav>
    </Card>
  )
}

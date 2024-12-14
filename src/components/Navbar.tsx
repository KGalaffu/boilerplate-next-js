import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function Navbar() {
  return (
    <Card className="rounded-none border-b">
      <nav className="container mx-auto flex h-16 items-center px-4">
        <div className="relative mr-4 flex items-center">
          <span className="relative inline-block font-mono text-lg font-bold tracking-tight glitch-text" data-text="Boilerplate Next.js v0.1.0">
            Boilerplate Next.js v0.1.0
          </span>
        </div>
        <div className="ml-auto flex items-center space-x-4">
          <Button variant="ghost" asChild>
            <Link href="/">Accueil</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/login">Connexion</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/register">S'inscrire</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/admin">Admin</Link>
          </Button>
        </div>
      </nav>
    </Card>
  )
}

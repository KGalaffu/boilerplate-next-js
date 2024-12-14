import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center space-y-8 text-center">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            Boilerplate Next.js
            <span className="block text-primary">Modern & Scalable</span>
          </h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Un boilerplate Next.js avec authentification, gestion multi-base de données,
            et internationalisation intégrée.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Multi-DB</CardTitle>
              <CardDescription>Support de SQLite, SQL et MongoDB</CardDescription>
            </CardHeader>
            <CardContent>
              Choisissez votre base de données préférée et commencez à développer immédiatement.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Auth Ready</CardTitle>
              <CardDescription>Système d'authentification complet</CardDescription>
            </CardHeader>
            <CardContent>
              Login, Register et gestion des sessions utilisateurs déjà configurés.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>i18n</CardTitle>
              <CardDescription>Internationalisation</CardDescription>
            </CardHeader>
            <CardContent>
              Support multilingue avec Next-intl pour l'anglais, le français et l'allemand.
            </CardContent>
          </Card>
        </div>

        <div className="flex gap-4">
          <Button size="lg" variant="default">
            Documentation
          </Button>
          <Button size="lg" variant="outline">
            GitHub
          </Button>
        </div>
      </div>
    </main>
  )
}

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useTranslations } from 'next-intl'

export default function Home() {
  const t = useTranslations('home')

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Card className="w-full max-w-4xl p-6">
        <h1 className="text-4xl font-bold mb-4">{t('title')}</h1>
        <p className="text-lg text-gray-700 mb-6">
          {t('subtitle')}
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>{t('features.nextjs')}</li>
          <li>{t('features.typescript')}</li>
          <li>{t('features.tailwind')}</li>
          <li>{t('features.shadcn')}</li>
          <li>{t('features.auth')}</li>
          <li>{t('features.prisma')}</li>
          <li>{t('features.mysql')}</li>
        </ul>
        <div className="flex gap-4">
          <Button variant="default">{t('buttons.docs')}</Button>
          <Button variant="outline">{t('buttons.github')}</Button>
        </div>
      </Card>
    </main>
  )
}

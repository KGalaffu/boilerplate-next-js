import LoginForm from "@/components/auth/login-form"
import { useTranslations } from 'next-intl'
import { getTranslations } from 'next-intl/server'

export default async function LoginPage() {
  const t = await getTranslations('auth.login')

  return (
    <div className="container mx-auto flex h-screen w-screen flex-col items-center justify-center">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            {t('title')}
          </h1>
          <p className="text-sm text-muted-foreground">
            {t('description')}
          </p>
        </div>
        <LoginForm />
      </div>
    </div>
  )
}

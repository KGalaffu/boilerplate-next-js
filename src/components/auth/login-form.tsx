"use client"

import * as React from "react"
import { useForm } from "react-hook-form"
import { signIn } from "next-auth/react"
import { useRouter, usePathname } from "@/navigation"
import { useTranslations } from 'next-intl'
import { useSearchParams } from 'next/navigation'

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/ui/use-toast"
import { Icons } from "@/components/icons"

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function LoginForm({ className, ...props }: UserAuthFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ email: string; password: string }>()
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const router = useRouter()
  const { toast } = useToast()
  const t = useTranslations('auth.login')
  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get('callbackUrl')

  async function onSubmit(data: { email: string; password: string }) {
    setIsLoading(true)

    try {
      const result = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
      })

      if (!result?.ok) {
        toast({
          title: t('error'),
          variant: "destructive",
        })
        return
      }

      toast({
        title: t('success'),
      })

      // If there's a callback URL, use it, otherwise go to home
      if (callbackUrl) {
        router.push(callbackUrl)
      } else {
        router.push("/")
      }
    } catch (error) {
      toast({
        title: t('error'),
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-4">
          <div className="grid gap-1">
            <Label htmlFor="email">{t('email')}</Label>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
              {...register("email", { required: true })}
            />
          </div>
          <div className="grid gap-1">
            <Label htmlFor="password">{t('password')}</Label>
            <Input
              id="password"
              type="password"
              autoCapitalize="none"
              autoComplete="current-password"
              disabled={isLoading}
              {...register("password", { required: true })}
            />
          </div>
          <Button disabled={isLoading}>
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            {t('submit')}
          </Button>
        </div>
      </form>
    </div>
  )
}

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/ui/use-toast"
import { User } from "@prisma/client"
import { useTranslations } from "next-intl"
import { useState } from "react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface EditUserDialogProps {
  user: User
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function EditUserDialog({ user, open, onOpenChange }: EditUserDialogProps) {
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()
  const t = useTranslations('admin.users')

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsLoading(true)

    const formData = new FormData(event.currentTarget)
    const email = formData.get("email") as string
    const name = formData.get("name") as string
    const password = formData.get("password") as string
    const role = formData.get("role") as string

    const data: Record<string, string> = {
      email,
      name,
      role,
    }

    // Only include password if it's not empty
    if (password) {
      data.password = password
    }

    try {
      const response = await fetch(`/api/admin/users/${user.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error(t('error.update'))
      }

      toast({
        description: t('success.update'),
      })
      onOpenChange(false)
    } catch (error) {
      toast({
        variant: "destructive",
        description: t('error.update'),
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={onSubmit}>
          <DialogHeader>
            <DialogTitle>{t('edit.user')}</DialogTitle>
            <DialogDescription>
              {t('edit.description')}
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="email" className="text-right">
                {t('email')}
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                defaultValue={user.email}
                className="col-span-3"
                required
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                {t('name')}
              </Label>
              <Input
                id="name"
                name="name"
                defaultValue={user.name || ""}
                className="col-span-3"
                required
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="password" className="text-right">
                {t('password')}
              </Label>
              <Input
                id="password"
                name="password"
                type="password"
                className="col-span-3"
                placeholder={t('password.placeholder')}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="role" className="text-right">
                {t('role')}
              </Label>
              <Select name="role" required defaultValue={user.role}>
                <SelectTrigger className="col-span-3">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="USER">{t('user')}</SelectItem>
                  <SelectItem value="ADMIN">{t('admin')}</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? t('saving') : t('save')}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

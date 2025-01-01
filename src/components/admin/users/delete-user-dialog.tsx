import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { useToast } from "@/components/ui/use-toast"
import { User } from "@prisma/client"
import { useTranslations } from "next-intl"
import { useState } from "react"

interface DeleteUserDialogProps {
  user: User
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function DeleteUserDialog({
  user,
  open,
  onOpenChange,
}: DeleteUserDialogProps) {
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()
  const t = useTranslations('admin.users')

  async function onDelete() {
    setIsLoading(true)

    try {
      const response = await fetch(`/api/admin/users/${user.id}`, {
        method: "DELETE",
      })

      if (!response.ok) {
        throw new Error(t('error.delete'))
      }

      toast({
        description: t('success.delete'),
      })
      onOpenChange(false)
    } catch (error) {
      toast({
        variant: "destructive",
        description: t('error.delete'),
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{t('delete.title')}</AlertDialogTitle>
          <AlertDialogDescription>
            {t('delete.description', { email: user.email })}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel disabled={isLoading}>
            {t('cancel')}
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={onDelete}
            disabled={isLoading}
            className="bg-red-600 focus:ring-red-600"
          >
            {isLoading ? t('deleting') : t('delete')}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

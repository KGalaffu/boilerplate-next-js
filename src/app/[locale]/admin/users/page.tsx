import { columns } from "@/components/admin/users/columns"
import { DataTable } from "@/components/admin/users/data-table"
import { db } from "@/lib/db"
import { getTranslations } from "next-intl/server"

export default async function UsersPage() {
  const users = await db.user.findMany()
  const t = await getTranslations('admin.users')

  return (
    <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">{t('title')}</h2>
          <p className="text-muted-foreground">
            {t('description')}
          </p>
        </div>
      </div>
      <DataTable data={users} columns={columns} />
    </div>
  )
}

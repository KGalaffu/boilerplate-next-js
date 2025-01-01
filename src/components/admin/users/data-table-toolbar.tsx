import { Cross2Icon } from "@radix-ui/react-icons"
import { Table } from "@tanstack/react-table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DataTableViewOptions } from "./data-table-view-options"
import { useTranslations } from "next-intl"
import { useState } from "react"
import { CreateUserDialog } from "./create-user-dialog"

interface DataTableToolbarProps<TData> {
  table: Table<TData>
}

export function DataTableToolbar<TData>({
  table,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0
  const [showCreateDialog, setShowCreateDialog] = useState(false)
  const t = useTranslations('admin.users')

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <Input
          placeholder={t('filter.users')}
          value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("email")?.setFilterValue(event.target.value)
          }
          className="h-8 w-[150px] lg:w-[250px]"
        />
        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            {t('reset')}
            <Cross2Icon className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
      <div className="flex items-center space-x-2">
        <Button
          variant="default"
          className="h-8"
          onClick={() => setShowCreateDialog(true)}
        >
          {t('create.user')}
        </Button>
        <DataTableViewOptions table={table} />
      </div>
      <CreateUserDialog
        open={showCreateDialog}
        onOpenChange={setShowCreateDialog}
      />
    </div>
  )
}

'use client'
import { transactionTableProps } from '@/lib/interfaces'
import { formatCurrency } from '@/lib/utils'
import { ColumnDef } from '@tanstack/react-table'

function Header(title: string) {
  return <div className="">{title}</div>
}

export const columns: ColumnDef<transactionTableProps>[] = [
  {
    accessorKey: 'data',
    header: () => Header('Data'),
  },
  {
    accessorKey: 'transacao',
    header: 'Transação',
  },
  {
    accessorKey: 'categoria',
    header: 'Categoria',
  },
  {
    accessorKey: 'valor',
    header: 'Valor',
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue('valor'))
      const formatted = formatCurrency(amount)

      return <div className="">{formatted}</div>
    },
  },
]

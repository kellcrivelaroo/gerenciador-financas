'use client'
import { TransactionProps, transactionTypes } from '@/lib/interfaces'
import { formatCurrency } from '@/lib/utils'
import { ColumnDef } from '@tanstack/react-table'
import { format } from 'date-fns'

// function Header(title: string) {
//   return <div className="">{title}</div>
// }

export const columns: ColumnDef<TransactionProps>[] = [
  {
    accessorKey: 'data',
    header: 'Data',
    cell: ({ row }) => {
      const data: Date = row.getValue('data')
      const formatted = format(new Date(data), 'dd/MM/yyyy')

      return <div className="">{formatted}</div>
    },
  },
  {
    accessorKey: 'tipo',
    header: 'Transação',
    cell: ({ row }) => {
      const transaction: transactionTypes = row.getValue('tipo')
      const formatted =
        transaction === transactionTypes.expense ? (
          <span className="text-red-600">Despesa</span>
        ) : (
          <span className="text-green-600">Receita</span>
        )

      return <div className="">{formatted}</div>
    },
  },
  {
    accessorKey: 'categoria',
    header: 'Categoria',
    cell: ({ row }) => {
      const category: string = row.getValue('categoria')

      return <div className="">{category}</div>
    },
  },
  {
    accessorKey: 'valor',
    header: 'Valor',
    cell: ({ row }) => {
      const value = parseFloat(row.getValue('valor'))
      const formatted = formatCurrency(value)

      return <div className="">{formatted}</div>
    },
  },
]

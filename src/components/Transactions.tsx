'use client'
import { format } from 'date-fns'
import { DataTable } from './table/DataTable'
import { columns } from './table/Columns'
import { TransactionProps, transactionTableProps } from '@/lib/interfaces'
import { useEffect, useState } from 'react'
import { getTransactions } from '@/lib/utils'

// const data: transactionTableProps[] = [
//   {
//     data: format(new Date(), 'dd/MM/yyyy'),
//     transacao: 'Despesa',
//     categoria: 'Casa',
//     valor: 100,
//   },
//   {
//     data: format(new Date(), 'dd/MM/yyyy'),
//     transacao: 'Receita',
//     categoria: 'Investimento',
//     valor: 220,
//   },
//   {
//     data: format(new Date(), 'dd/MM/yyyy'),
//     transacao: 'Despesa',
//     categoria: 'Alimentação',
//     valor: 80,
//   },
// ]

const sortTransactions = (transactions: TransactionProps[]) => {
  const sortedTransactions = transactions.sort((a, b) => {
    const dateA = new Date(a.data)
    const dateB = new Date(b.data)

    if (dateA < dateB) {
      return 1
    } else if (dateA > dateB) {
      return -1
    } else {
      return 0
    }
  })

  return sortedTransactions
}

export default function Transactions() {
  const [transactions, setTransactions] = useState<TransactionProps[]>([])
  useEffect(() => {
    const storedTransactions = getTransactions()
    setTransactions(sortTransactions(storedTransactions))
  }, [])

  return <DataTable columns={columns} data={transactions} />
}

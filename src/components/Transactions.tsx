'use client'
import { DataTable } from './table/DataTable'
import { columns } from './table/Columns'
import { TransactionProps } from '@/lib/interfaces'
import { useEffect, useState } from 'react'
import { getTransactions } from '@/lib/utils'

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

  return (
    <div className="max-w-[calc(100vw-100px)]">
      <DataTable columns={columns} data={transactions} />
    </div>
  )
}

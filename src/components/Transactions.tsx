'use client'
import { format } from 'date-fns'
import { DataTable } from './table/DataTable'
import { columns } from './table/Columns'
import { TransactionProps, transactionTableProps } from '@/lib/interfaces'
import { useEffect } from 'react'
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

export default function Transactions() {
  const data: transactionTableProps[] = []
  useEffect(() => {
    console.log('oi')
  }, [])

  return <DataTable columns={columns} data={data} />
}

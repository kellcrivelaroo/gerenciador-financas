'use client'
import { TransactionProps, transactionTypes } from '@/lib/interfaces'
import { formatCurrency, getTransactions } from '@/lib/utils'
import { useEffect, useState } from 'react'

const getBalance = (): number => {
  const transactions: TransactionProps[] = getTransactions()
  let total = 0
  transactions.forEach((transaction) => {
    const value = Number(transaction.valor)
    transaction.tipo === transactionTypes.income
      ? (total += value)
      : (total -= value)
  })

  return total
}

export default function Balance() {
  const [balance, setBalance] = useState(formatCurrency(0))

  useEffect(() => {
    setBalance(formatCurrency(getBalance()))
  }, [])

  return <div>Saldo: {balance}</div>
}

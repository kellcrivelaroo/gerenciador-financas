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
  const [balance, setBalance] = useState(0)

  useEffect(() => {
    setBalance(getBalance())
  }, [])

  return (
    <div>
      <span className="mr-3">Saldo:</span>
      <span
        className={`px-3 py-1 bg-white rounded-md border text-2xl ${
          balance >= 0 ? 'text-green-600' : 'text-red-600'
        }`}
      >
        {formatCurrency(balance)}
      </span>
    </div>
  )
}

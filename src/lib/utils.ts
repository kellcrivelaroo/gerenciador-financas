import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { TransactionProps, transactionTypes } from './interfaces'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getTransactions = (): TransactionProps[] => {
  const existingStoredString =
    typeof window !== 'undefined' ? localStorage.getItem('transactions') : ''
  const existingData: TransactionProps[] =
    existingStoredString !== null && typeof window !== 'undefined'
      ? JSON.parse(existingStoredString)
      : []
  return existingData
}

export const setTransactions = (
  data: TransactionProps,
  transactions: TransactionProps[],
) => {
  const newTransaction = {
    ...data,
  }
  const uptatedTransactions = [...transactions, newTransaction]
  localStorage.setItem('transactions', JSON.stringify(uptatedTransactions))
}

export const formatCurrency = (value: number): string => {
  const realFormat = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

  return realFormat.format(value)
}

export const getValues = (transactions: TransactionProps[]) => {
  const data = []
  let expenses = 0
  let incomes = 0
  transactions.forEach((transaction) => {
    if (transaction.tipo === transactionTypes.expense) {
      expenses += transaction.valor
    } else {
      incomes += transaction.valor
    }
  })
  data.push({
    type: 'Despesas',
    value: expenses,
    color: '#182931',
  })
  data.push({
    type: 'Receitas',
    value: incomes,
    color: '#942034',
  })
  return data
}

interface valueByCategory {
  category: string
  value: number
}

export const getCategoryValues = (
  transactions: TransactionProps[],
  type: transactionTypes,
) => {
  const categories: string[] = []
  const data: valueByCategory[] = []
  transactions.forEach((transaction) => {
    console.log(categories)
    if (transaction.tipo === type) {
      if (!categories.includes(transaction.categoria)) {
        categories.push(transaction.categoria)
        data.push({ category: transaction.categoria, value: transaction.valor })
      } else {
        data[categories.indexOf(transaction.categoria)].value +=
          transaction.valor
      }
    }
  })
  return data
}

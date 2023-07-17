import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { TransactionProps } from './interfaces'

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

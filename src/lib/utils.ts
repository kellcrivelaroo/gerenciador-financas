import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { TransactionProps } from './interfaces'
import { z } from 'zod'

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

export const transactionsFormSchema = z.object({
  data: z.date({
    required_error: 'Selecione uma data',
    invalid_type_error: 'Data inválida',
  }),
  categoria: z.string({ required_error: 'Selecione uma categoria' }),
  valor: z.preprocess(
    (v) => {
      const value = String(v)
      const noCurrencySymbleValue = String(value)
        .slice(3, String(value).length)
        .replace('.', '')
        .replace(',', '.')

      return Number(noCurrencySymbleValue)
    },
    z
      .number({ invalid_type_error: 'Valor inválido' })
      .positive('O valor deve ser maior que R$ 0,00'),
  ),
  descricao: z
    .string({
      required_error: 'Digite uma descrição para a transação',
      invalid_type_error: 'Descrição inválida',
    })
    .min(3, 'A descrição deve conter no mínimo 3 dígitos'),
  pago: z.optional(
    z.string({
      required_error: 'Selecione uma opção',
      invalid_type_error: 'Opção inválida',
    }),
  ),
})

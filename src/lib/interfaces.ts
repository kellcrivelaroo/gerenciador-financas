export enum transactionTypes {
  expense,
  income,
}

export interface TransactionProps {
  data: Date
  tipo: transactionTypes
  categoria: string
  valor: number
  descricao: string
  pago?: string
}

export interface transactionTableProps {
  data: string
  transacao: string
  categoria: string
  valor: number
}

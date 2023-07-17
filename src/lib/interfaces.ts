export interface ExpenseProps {
  data: Date | undefined
  categoria: string
  valor: number
  descricao: string
  pago: string
}

export interface IncomeProps {
  data: Date | undefined
  categoria: string
  valor: number
  descricao: string
}

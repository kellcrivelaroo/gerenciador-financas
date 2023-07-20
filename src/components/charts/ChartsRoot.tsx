'use client'
import { TransactionProps } from '@/lib/interfaces'
import { getTransactions } from '@/lib/utils'
import TransactionBarChart from './TransactionBarChart'
import ExpensesPieChart from './ExpensesPieChart'
import IncomesPieChart from './IncomesPieChart'

const getChartWidth = () => {
  const windowWidth = window.innerWidth
  if (windowWidth <= 320) return 200
  else if (windowWidth <= 450) return 270
  else if (windowWidth <= 767) return 380
  else if (windowWidth <= 1024) return 480
  else if (windowWidth <= 1440) return 360
  else if (windowWidth <= 1680) return 440
  return 500
}

export default function ChartsRoot() {
  const transactions: TransactionProps[] = getTransactions()
  const width = typeof window !== 'undefined' ? getChartWidth() : 0

  return (
    <div className="flex flex-col xl:flex-row mt-4 flex-wrap items-center justify-center xl:justify-evenly gap-4 xl:gap-0">
      <TransactionBarChart transactions={transactions} width={width} />
      <ExpensesPieChart transactions={transactions} width={width} />
      <IncomesPieChart transactions={transactions} width={width} />
    </div>
  )
}

'use client'
import { TransactionProps, transactionTypes } from '@/lib/interfaces'
import { BarChart as BC } from 'lucide-react'
import {
  formatCurrency,
  getCategoryValues,
  getTransactions,
  getValues,
} from '@/lib/utils'
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
  PieChart,
  Pie,
  Cell,
} from 'recharts'

const transactions: TransactionProps[] = getTransactions()

const transactionValues = getValues(transactions)
const expenseCategoryValues = getCategoryValues(
  transactions,
  transactionTypes.expense,
)
const incomeCategoryValues = getCategoryValues(
  transactions,
  transactionTypes.income,
)

const EXPENSE_COLORS = [
  '#0a6789',
  '#0a996f',
  '#fecd23',
  '#fa6632',
  '#cf0638',
  '#322c8e',
  '#c4037a',
]
const INCOME_COLORS = ['#482344', '#2b5166', '#429867', '#fab243', '#e02130']

export default function Charts() {
  return (
    <>
      <div className="flex gap-2 items-center pl-4 pt-2 text-blue-700">
        <BC size={32} />
        <h2 className="text-3xl ">Gráficos:</h2>
      </div>
      <div className="flex flex-col lg:flex-row gap-4 w-full h-full mt-4">
        <div className="w-full h-full flex items-center justify-center flex-col">
          <h3 className="text-center mb-4">Valor por tipo de transação:</h3>
          <BarChart
            width={440}
            height={440}
            data={transactionValues}
            margin={{
              top: 0,
              right: 30,
              left: 50,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="type" />
            <YAxis tickFormatter={(v) => formatCurrency(v)} />
            <Tooltip
              formatter={(v: number) => {
                return [formatCurrency(v), 'Valor total']
              }}
            />
            <Legend formatter={() => 'Valor'} />
            <Bar dataKey="value" fill="#6582e8" />
          </BarChart>
        </div>

        <div className="w-full h-full flex items-center justify-center flex-col">
          <h3 className="text-center">Depesas por categoria:</h3>
          <PieChart width={440} height={440}>
            <Pie
              data={expenseCategoryValues}
              innerRadius={80}
              outerRadius={100}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
              nameKey="category"
              label
            >
              {expenseCategoryValues.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={EXPENSE_COLORS[index % EXPENSE_COLORS.length]}
                />
              ))}
            </Pie>

            <Legend />
            <Tooltip />
          </PieChart>
        </div>

        <div className="w-full h-full flex items-center justify-center flex-col">
          <h3 className="text-center">Receitas por categoria:</h3>
          <PieChart width={440} height={440}>
            <Pie
              data={incomeCategoryValues}
              innerRadius={80}
              outerRadius={100}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
              nameKey="category"
              label
            >
              {incomeCategoryValues.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={INCOME_COLORS[index % INCOME_COLORS.length]}
                />
              ))}
            </Pie>
            <Legend />
            <Tooltip />
          </PieChart>
        </div>
      </div>
    </>
  )
}

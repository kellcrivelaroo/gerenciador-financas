import { ChartProps, transactionTypes } from '@/lib/interfaces'
import { getCategoryValues } from '@/lib/utils'
import { Legend, Tooltip, PieChart, Pie, Cell } from 'recharts'

const COLORS = [
  '#0a6789',
  '#0a996f',
  '#fecd23',
  '#fa6632',
  '#cf0638',
  '#322c8e',
  '#c4037a',
]

export default function ExpensesPieChart({ transactions, width }: ChartProps) {
  const expenseCategoryValues = getCategoryValues(
    transactions,
    transactionTypes.expense,
  )
  console.log(width)

  return (
    <div className="flex items-center justify-center flex-col">
      <h3 className="text-center">Depesas por categoria:</h3>
      <PieChart width={width} height={width}>
        <Pie
          data={expenseCategoryValues}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
          nameKey="category"
          label
        >
          {expenseCategoryValues.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>

        <Legend />
        <Tooltip />
      </PieChart>
    </div>
  )
}

import { ChartProps, transactionTypes } from '@/lib/interfaces'
import { getCategoryValues } from '@/lib/utils'
import { Pie, Cell, Legend, Tooltip, PieChart } from 'recharts'

const COLORS = ['#482344', '#2b5166', '#429867', '#fab243', '#e02130']

export default function IncomesPieChart({ transactions, width }: ChartProps) {
  const incomeCategoryValues = getCategoryValues(
    transactions,
    transactionTypes.income,
  )

  return (
    incomeCategoryValues.length > 0 && (
      <div className="flex items-center justify-center flex-col">
        <h3 className="text-center">Receitas por categoria:</h3>
        <PieChart width={width} height={width}>
          <Pie
            data={incomeCategoryValues}
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
            nameKey="category"
            label
          >
            {incomeCategoryValues.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Legend />
          <Tooltip />
        </PieChart>
      </div>
    )
  )
}

import { ChartProps } from '@/lib/interfaces'
import { formatCurrency, getValues } from '@/lib/utils'
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

export default function TransactionBarChart({
  transactions,
  width,
}: ChartProps) {
  const transactionValues = getValues(transactions)
  return (
    <div className="flex items-center justify-center flex-col">
      <h3 className="text-center mb-4">Valor por tipo de transação:</h3>
      <BarChart
        width={width}
        height={width}
        data={transactionValues}
        margin={{
          top: 0,
          right: 0,
          left: 30,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="type" style={{ fontSize: '14px' }} />
        <YAxis
          tickFormatter={(v) => formatCurrency(v)}
          style={{ fontSize: '14px' }}
        />
        <Tooltip
          formatter={(v: number) => {
            return [formatCurrency(v), 'Valor total']
          }}
        />
        <Legend formatter={() => 'Valor'} />
        <Bar dataKey="value" fill="#6582e8" />
      </BarChart>
    </div>
  )
}

import { render, screen } from '@testing-library/react'
import { getTransactions } from '@/lib/utils'
import Balance from '../components/Balance'

const fakeData = [
  {
    id: '1',
    data: new Date(),
    categoria: 'any',
    descricao: 'any',
    tipo: 1,
    valor: 200.8947,
  },
  {
    id: '2',
    data: new Date(),
    categoria: 'any',
    descricao: 'any',
    tipo: 0,
    valor: 200.8947,
  },
]

jest.mock('../lib/utils', () => {
  return {
    getTransactions: jest.fn(),
    formatCurrency: jest.fn((v: number) => {
      const negative = v < 0 ? '-' : ''
      const value = negative ? -v : v

      return `${negative}R$ ${value.toFixed(2)}`.replace('.', ',')
    }),
  }
})

describe('Balance component', () => {
  it('renders correctly when there no data', () => {
    const getTransactionsMocked = jest.mocked(getTransactions)

    getTransactionsMocked.mockReturnValueOnce([])

    render(<Balance />)
    expect(screen.getByText('R$ 0,00')).toBeInTheDocument()
  })

  it('renders correctly when the balance is positive', () => {
    const getTransactionsMocked = jest.mocked(getTransactions)

    getTransactionsMocked.mockReturnValueOnce([fakeData[0]])

    render(<Balance />)
    expect(screen.getByText('R$ 200,89')).toBeInTheDocument()
  })

  it('renders correctly when the balance is negative', () => {
    const getTransactionsMocked = jest.mocked(getTransactions)

    getTransactionsMocked.mockReturnValueOnce([fakeData[1]])

    render(<Balance />)
    expect(screen.getByText('-R$ 200,89')).toBeInTheDocument()
  })
})

// PRIMEIRO MÉTODO

// const VALUE = 200.8934
// const MONETARY_VALUE = 'R$ 200,89'

// jest.mock('../lib/utils', () => {
//   return {
//     getTransactions: () => {
//       return [{ valor: VALUE, tipo: 1 }]
//     },
//     formatCurrency: jest.fn((value: number) =>
//       `R$ ${value.toFixed(2)}`.replace('.', ','),
//     ),
//   }
// })

// it('balance renders correctly', () => {
//   const { debug } = render(<Balance />)
//   debug()
//   expect(screen.getByText(MONETARY_VALUE)).toBeInTheDocument()
// })

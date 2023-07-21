import { render, screen } from '@testing-library/react'
import NavitationButton from '@/components/navigation/NavitationButton'
import { Home } from 'lucide-react'

let bool = false

describe('NavitationButton', () => {
  it('renders correctly', () => {
    render(
      <NavitationButton
        href="/"
        text="Home"
        icon={Home}
        isOpen={bool}
        toggle={() => {
          bool = !bool
        }}
      />,
    )
    expect(screen.getByText('Home')).toBeInTheDocument()
  })
  it('changes the isOpen state', () => {
    render(
      <NavitationButton
        href="/"
        text="Home"
        icon={Home}
        isOpen={false}
        toggle={() => {
          bool = !bool
        }}
      />,
    )
    const button = screen.getByText('Home')
    button.click()
    expect(bool).toBe(true)
  })
})

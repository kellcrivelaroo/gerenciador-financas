'use client'
import {
  Home,
  BarChart,
  Wallet,
  DollarSign,
  Crosshair,
  ChevronRight,
} from 'lucide-react'
import NavitationButton from './NavitationButton'
import { useState } from 'react'

export default function Navigation() {
  // abrir side bar se largura da tela for maior que 767px
  // const isLargeScreen = window?.innerWidth >= 767 || false
  const [isOpen, setIsOpen] = useState(true)

  return (
    <aside
      data-open={isOpen}
      className="bg-primary text-neutral pt-8 pb-16 min-h-screen flex flex-col items-center justify-between 
      shadow-lg lg:shadow-2xl shadow-blue-700"
    >
      <div className="w-full flex flex-col items-center lg:items-start">
        <span
          data-open={isOpen}
          className="text-2xl duration-500 transition-transform font-black my-8 w-full text-center 
          data-[open=true]:scale-150 text-white"
        >
          Logo
        </span>
        <nav
          data-open={isOpen}
          className="max-w-[80px] min-w-[80px] data-[open=true]:max-w-[220px] data-[open=true]:min-w-[220px]
        transition-all duration-500 overflow-hidden"
        >
          <ul className="flex flex-col text-lg">
            <NavitationButton
              href="/"
              icon={Home}
              text="Home"
              isOpen={isOpen}
            />
            <NavitationButton
              href="/nova-despesa"
              icon={DollarSign}
              text="Nova Despesa"
              isOpen={isOpen}
            />
            <NavitationButton
              href="/nova-receita"
              icon={Wallet}
              text="Nova Receita"
              isOpen={isOpen}
            />
            <NavitationButton
              href="/graficos"
              icon={BarChart}
              text="Gráficos"
              isOpen={isOpen}
            />
            <NavitationButton
              href="/metas"
              icon={Crosshair}
              text="Metas"
              isOpen={isOpen}
            />
          </ul>
        </nav>
      </div>
      <button
        className="bg-blue-700 p-2 rounded-lg border border-transparent hover:border-blue-200/10 hover:brightness-110"
        onClick={() => {
          setIsOpen(!isOpen)
        }}
      >
        <ChevronRight
          data-open={isOpen}
          className="rotate-0 data-[open=true]:rotate-180 transition-transform duration-300"
        />
      </button>
    </aside>
  )
}

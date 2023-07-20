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
  const [isOpen, setIsOpen] = useState(false)

  const closeSideBar = () => {
    setIsOpen(false)
  }

  return (
    <aside
      data-open={isOpen}
      className="bg-primary text-neutral pt-2 pb-12 lg:pt-7 lg:pb-16 min-h-screen flex flex-col items-center
      shadow-lg lg:shadow-2xl shadow-blue-700 max-w-[60px] min-w-[60px] data-[open=true]:max-w-[100vw] data-[open=true]:min-w-[100vw]
      transition-all duration-500 overflow-hidden lg:data-[open=true]:max-w-[240px] lg:data-[open=true]:min-w-[240px]
      lg:max-w-[80px] lg:min-w-[80px] fixed lg:relative inset-0 z-40"
    >
      <div className="w-full flex flex-col items-center lg:items-start">
        <span
          data-open={isOpen}
          className="text-xl duration-500 transition-transform font-black my-8 w-full text-center
          data-[open=true]:scale-150 text-white"
        >
          Logo
        </span>
        <nav className="w-full">
          <ul className="flex flex-col text-lg">
            <NavitationButton
              href="/"
              icon={Home}
              text="Home"
              isOpen={isOpen}
              toggle={closeSideBar}
            />
            <NavitationButton
              href="/nova-despesa"
              icon={DollarSign}
              text="Nova Despesa"
              isOpen={isOpen}
              toggle={closeSideBar}
            />
            <NavitationButton
              href="/nova-receita"
              icon={Wallet}
              text="Nova Receita"
              isOpen={isOpen}
              toggle={closeSideBar}
            />
            <NavitationButton
              href="/graficos"
              icon={BarChart}
              text="Gráficos"
              isOpen={isOpen}
              toggle={closeSideBar}
            />
            <NavitationButton
              href="/metas"
              icon={Crosshair}
              text="Metas"
              isOpen={isOpen}
              toggle={closeSideBar}
            />
          </ul>
        </nav>
      </div>
      <div className="px-2 lg:px-4 mt-4 w-full">
        <button
          className="bg-blue-700 flex justify-center p-2 w-full rounded-lg border border-transparent hover:border-blue-200/10 hover:brightness-110"
          onClick={() => {
            setIsOpen((current) => !current)
          }}
        >
          <ChevronRight
            data-open={isOpen}
            className="rotate-0 data-[open=true]:rotate-180 transition-transform duration-300"
          />
        </button>
      </div>
    </aside>
  )
}

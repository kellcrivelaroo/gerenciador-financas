import Navigation from '@/components/navigation/Navigation'
import './globals.css'
import type { Metadata } from 'next'
import { Quicksand } from 'next/font/google'
import Footer from '@/components/Footer'

const quicksand = Quicksand({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Gerenciador de Finanças',
  description:
    'Controle suas finanças com facilidade: gerenciador financeiro intuitivo e eficiente. Organize gastos, acompanhe receitas e planeje seu futuro financeiro.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body
        className={`${quicksand.className} text-blue-900 flex font-semibold text-lg`}
      >
        <Navigation />
        <div className="flex flex-col min-h-screen justify-between w-full">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}

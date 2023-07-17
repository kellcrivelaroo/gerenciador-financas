import Balance from '@/components/Balance'
import Transactions from '@/components/Transactions'
import { Wallet, DollarSign } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="grid gap-4 grid-rows-[auto] xl:grid-rows-[auto_1fr_200px] xl:grid-cols-3 xl:gap-6 pl-[80px] lg:pl-20 w-[100vw] lg:w-full">
      <header className="space-y-5 xl:col-span-3">
        <h1>Gerenciador de Finanças</h1>
        <span className="text-xl lg:text-2xl text-hover">Bem-vindo(a)!</span>
        <Balance />
      </header>
      <div className="xl:col-span-2">
        <Transactions />
      </div>
      <div className="flex gap-4 xl:col-span-1 xl:flex-col xl:gap-6 xl:min-h-[386px]  text-blue-700">
        <Link
          href={'/nova-despesa'}
          className="flex-1 flex flex-col gap-2 items-center justify-center border rounded-lg p-4 text-base lg:text-lg bg-background hover:bg-accent"
        >
          <DollarSign size={40} className="w-8 lg:w-auto" />
          <span className="text-center leading-none lg:leading-normal">
            Cadastrar nova Despesa
          </span>
        </Link>
        <Link
          href={'/nova-receita'}
          className="flex-1 flex flex-col gap-2 items-center justify-center border rounded-lg p-4 text-base lg:text-lg bg-background hover:bg-accent"
        >
          <Wallet size={40} className="w-8 lg:w-auto" />
          <span className="text-center leading-none lg:leading-normal">
            Cadastrar nova Receita
          </span>
        </Link>
      </div>
      <div className="flex bg-white border h-full xl:col-span-3 rounded-lg p-4">
        Gráficos
      </div>
    </main>
  )
}

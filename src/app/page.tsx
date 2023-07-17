import Balance from '@/components/Balance'
import Transactions from '@/components/Transactions'

export default function Home() {
  return (
    <main>
      <header className="mb-6">
        <h1>Gerenciador de Finanças</h1>
        <span className="text-xl lg:text-2xl text-hover">Bem-vindo(a)!</span>
      </header>
      <section className="flex flex-col gap-8">
        <Balance />
        <Transactions />
      </section>
    </main>
  )
}

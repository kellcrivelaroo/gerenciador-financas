import IncomesForm from '@/components/IncomesForm'

export default function Despesas() {
  return (
    <main className="layout">
      <header className="mb-8">
        <h1>Cadastro de Receitas</h1>
        <p className="text-lg">
          Digite os dados da receita que deseja registrar:
        </p>
      </header>
      <section className="grid grid-cols-1 lg:grid-cols-2">
        <IncomesForm />
      </section>
    </main>
  )
}

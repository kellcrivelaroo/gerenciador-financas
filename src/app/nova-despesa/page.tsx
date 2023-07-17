import ExpensesForm from '@/components/ExpensesForm'

export default function Despesas() {
  return (
    <main>
      <header className="mb-8">
        <h1>Cadastro de Despesas</h1>
        <p className="text-lg">
          Digite os dados da despesa que deseja registrar:
        </p>
      </header>
      <section className="grid grid-cols-1 lg:grid-cols-2">
        <ExpensesForm />
      </section>
    </main>
  )
}

import ChartsRoot from '@/components/charts/ChartsRoot'

export default function Graficos() {
  return (
    <main>
      <header className="mb-6">
        <h1>Gráficos</h1>
      </header>
      <section className="flex flex-col bg-white border xl:col-span-3 rounded-lg p-4">
        <ChartsRoot />
      </section>
    </main>
  )
}

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

function App() {
  return (
    <main className="mx-auto flex min-h-svh w-full max-w-3xl flex-col gap-8 p-6">
      <header className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="character-mark" aria-hidden="true" />
          <div>
            <p className="text-lg font-semibold tracking-tight">Pulso</p>
            <p className="mono-label">Dashboard operativo · tema hum</p>
          </div>
        </div>
        <Badge variant="outline">Datos de demostración</Badge>
      </header>

      <section className="grid gap-4 sm:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Ventas del periodo</CardTitle>
            <CardDescription>Serie diaria · últimos 30 días</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-semibold tabular tracking-tight">
              $<span className="hl">128.450</span>
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Conversión</CardTitle>
            <CardDescription>Pedidos sobre visitas</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-semibold tabular tracking-tight">3,42 %</p>
          </CardContent>
        </Card>
      </section>

      <section className="flex flex-wrap items-center gap-3">
        <Button>Exportar reporte</Button>
        <Button variant="secondary">Aplicar filtros</Button>
        <Button variant="outline">Limpiar</Button>
        <Button variant="ghost">Ver detalle</Button>
      </section>
    </main>
  )
}

export default App

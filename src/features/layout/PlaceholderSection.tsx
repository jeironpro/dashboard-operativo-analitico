import { Card, CardContent } from '@/components/ui/card'

interface PlaceholderSectionProps {
  id: string
  title: string
  note: string
}

/**
 * Sección temporal mientras la funcionalidad real llega en iteraciones
 * posteriores (gráficos, detalle y reportes).
 */
export function PlaceholderSection({ id, title, note }: PlaceholderSectionProps) {
  return (
    <section id={id} aria-label={title} className="scroll-mt-24 py-10">
      <div className="reveal">
        <p className="mono-label">Próximamente</p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight">{title}</h2>
        <p className="mt-1 text-sm text-muted-foreground">{note}</p>
      </div>
      <Card className="mt-6 border-dashed shadow-none">
        <CardContent className="flex items-center justify-center gap-2 py-16 text-center">
          <p className="text-sm text-muted-foreground">
            Esta sección se implementa en una siguiente iteración.
          </p>
        </CardContent>
      </Card>
    </section>
  )
}

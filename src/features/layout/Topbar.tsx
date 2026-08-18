import { Badge } from '@/components/ui/badge'
import { formatDate } from '@/lib/formatters'

import { MobileNav } from './MobileNav'
import { Mascot } from './Mascot'

interface TopbarProps {
  activeSection: string
}

/** Barra superior fija: saludo del equipo, fecha y acciones rápidas. */
export function Topbar({ activeSection }: TopbarProps) {
  const today = new Date()
  const todayIso = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(
    today.getDate(),
  ).padStart(2, '0')}`

  return (
    <header className="sticky top-0 z-30 border-b border-border/70 bg-background/85 backdrop-blur-sm">
      <div className="flex items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <div className="flex min-w-0 items-center gap-3">
          <MobileNav activeSection={activeSection} />
          <Mascot className="lg:hidden" />
          <div className="min-w-0">
            <h1 className="truncate text-base font-semibold tracking-tight sm:text-lg">
              Buenas tardes, equipo
            </h1>
            <p className="truncate text-sm text-muted-foreground">
              {formatDate(todayIso)} · Nébula
            </p>
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <Badge variant="outline" className="hidden sm:inline-flex gap-1.5 py-1">
            <span className="size-1.5 rounded-full bg-mint" aria-hidden="true" />
            Datos de demostración
          </Badge>
          <span
            aria-hidden="true"
            className="flex size-8 shrink-0 select-none items-center justify-center rounded-full bg-cyan text-sm font-semibold text-background"
          >
            N
          </span>
        </div>
      </div>
    </header>
  )
}

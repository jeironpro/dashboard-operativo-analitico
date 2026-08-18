import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

import { NAV_ITEMS } from './nav'
import { Mascot } from './Mascot'

interface SidebarProps {
  /** id de la sección activa */
  activeSection: string
}

/**
 * Navegación lateral de escritorio (arquetipo N3 side-rail adaptado a app).
 * En móvil se sustituye por el drawer de `MobileNav`.
 */
export function Sidebar({ activeSection }: SidebarProps) {
  return (
    <aside className="sticky top-0 hidden h-svh w-64 shrink-0 flex-col border-r border-sidebar-border bg-sidebar px-4 py-6 lg:flex">
      <a
        href="#resumen"
        className="flex items-center gap-3 rounded-full px-2"
        aria-label="Ir al resumen"
      >
        <Mascot />
        <span className="flex flex-col">
          <span className="text-lg leading-tight font-semibold tracking-tight">Pulso</span>
          <span className="mono-label">Dashboard operativo</span>
        </span>
      </a>

      <nav aria-label="Navegación principal" className="mt-8 flex flex-col gap-1">
        {NAV_ITEMS.map((item) => {
          const isActive = activeSection === item.sectionId
          const Icon = item.icon
          return (
            <a
              key={item.id}
              href={`#${item.sectionId}`}
              aria-current={isActive ? 'true' : undefined}
              className={cn(
                'flex items-center gap-3 rounded-full px-3 py-2 text-sm font-medium transition-colors',
                isActive
                  ? 'bg-primary text-primary-foreground'
                  : 'text-sidebar-foreground/75 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground',
              )}
            >
              <Icon className="size-4 shrink-0" aria-hidden="true" />
              {item.label}
            </a>
          )
        })}
      </nav>

      <div className="mt-auto flex flex-col items-center gap-3 px-2">
        <Badge variant="outline" className="w-full justify-center gap-1.5 py-1">
          Datos de demostración
        </Badge>
        <p className="mono-label opacity-50">Nébula · 2026</p>
      </div>
    </aside>
  )
}

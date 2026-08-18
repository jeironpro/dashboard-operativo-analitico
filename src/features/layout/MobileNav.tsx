import { MenuIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { cn } from '@/lib/utils'

import { NAV_ITEMS } from './nav'
import { Mascot } from './Mascot'

interface MobileNavProps {
  activeSection: string
}

/** Navegación móvil: botón hamburguesa que abre un drawer con los enlaces. */
export function MobileNav({ activeSection }: MobileNavProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Abrir menú">
          <MenuIcon />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-72 gap-0 p-0">
        <SheetHeader className="border-b border-border/60 px-4 py-4">
          <div className="flex items-center gap-3">
            <Mascot />
            <div>
              <SheetTitle className="text-lg font-semibold tracking-tight">Pulso</SheetTitle>
              <SheetDescription className="mono-label mt-1">Dashboard operativo</SheetDescription>
            </div>
          </div>
        </SheetHeader>
        <nav aria-label="Navegación principal" className="flex flex-col gap-1 p-3">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.sectionId
            const Icon = item.icon
            return (
              <a
                key={item.id}
                href={`#${item.sectionId}`}
                aria-current={isActive ? 'true' : undefined}
                className={cn(
                  'flex items-center gap-3 rounded-full px-3 py-2.5 text-sm font-medium transition-colors',
                  isActive
                    ? 'bg-primary text-primary-foreground'
                    : 'text-foreground/75 hover:bg-accent hover:text-accent-foreground',
                )}
              >
                <Icon className="size-4 shrink-0" aria-hidden="true" />
                {item.label}
              </a>
            )
          })}
        </nav>
        <div className="mt-auto border-t border-border/60 p-4">
          <Badge variant="outline" className="w-full justify-center py-1">
            Datos de demostración
          </Badge>
        </div>
      </SheetContent>
    </Sheet>
  )
}

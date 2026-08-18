import type { ReactNode } from 'react'

import { useActiveSection } from '@/hooks/useActiveSection'
import { useReveal } from '@/hooks/useReveal'

import { NAV_SECTION_IDS } from './nav'
import { Sidebar } from './Sidebar'
import { Topbar } from './Topbar'
import { Footer } from './Footer'

interface AppShellProps {
  children: ReactNode
}

/**
 * Shell del dashboard: navegación lateral (N3) en escritorio,
 * drawer en móvil, barra superior y footer con marquee.
 */
export function AppShell({ children }: AppShellProps) {
  const activeSection = useActiveSection(NAV_SECTION_IDS)
  useReveal()

  return (
    <div className="flex min-h-svh">
      <Sidebar activeSection={activeSection} />
      <div className="flex min-w-0 flex-1 flex-col">
        <Topbar activeSection={activeSection} />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </div>
  )
}

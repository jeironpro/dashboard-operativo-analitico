import { ThemeProvider } from 'next-themes'

import { Toaster } from '@/components/ui/sonner'
import { AppShell } from '@/features/layout/AppShell'
import { HeroSection } from '@/features/layout/HeroSection'
import { PlaceholderSection } from '@/features/layout/PlaceholderSection'
import { KpiGrid } from '@/features/kpis/KpiGrid'
import { TrendsSection } from '@/features/charts/TrendsSection'
import { FilterBar } from '@/features/filters/FilterBar'

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" forcedTheme="light">
      <AppShell>
        {/* El padding inferior da scroll room para que la última sección
            (placeholder corto) alcance la línea del sticky header y el
            scroll-spy la resalte. Se retira cuando Reportes/Detalle sean
            secciones reales con altura propia. */}
        <div className="mx-auto w-full max-w-(--shell) px-4 pb-[36rem] sm:px-6 lg:px-8">
          <HeroSection />
          <FilterBar />
          <KpiGrid />
          <TrendsSection />
          <PlaceholderSection
            id="detalle"
            title="Detalle de pedidos"
            note="Últimos pedidos de la tienda con búsqueda"
          />
          <PlaceholderSection
            id="reportes"
            title="Reportes"
            note="Exporta los datos en PDF, Excel y CSV"
          />
        </div>
      </AppShell>
      <Toaster position="bottom-right" richColors closeButton />
    </ThemeProvider>
  )
}

export default App

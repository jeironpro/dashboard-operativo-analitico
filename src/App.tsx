import { ThemeProvider } from 'next-themes'

import { Toaster } from '@/components/ui/sonner'
import { AppShell } from '@/features/layout/AppShell'
import { HeroSection } from '@/features/layout/HeroSection'
import { PlaceholderSection } from '@/features/layout/PlaceholderSection'

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" forcedTheme="light">
      <AppShell>
        <div className="mx-auto w-full max-w-(--shell) px-4 pb-10 sm:px-6 lg:px-8">
          <HeroSection />
          <PlaceholderSection
            id="tendencias"
            title="Tendencias"
            note="Ventas diarias, semanales y mensuales en gráficos"
          />
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

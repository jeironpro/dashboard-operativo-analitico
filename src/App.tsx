import { ThemeProvider } from 'next-themes'

import { Toaster } from '@/components/ui/sonner'
import { AppShell } from '@/features/layout/AppShell'
import { HeroSection } from '@/features/layout/HeroSection'
import { KpiGrid } from '@/features/kpis/KpiGrid'
import { TrendsSection } from '@/features/charts/TrendsSection'
import { FilterBar } from '@/features/filters/FilterBar'
import { OrdersSection } from '@/features/orders/OrdersSection'
import { ReportsSection } from '@/features/reports/ReportsSection'

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" forcedTheme="light">
      <AppShell>
        <div className="mx-auto w-full max-w-(--shell) px-4 pb-24 sm:px-6 lg:px-8">
          <HeroSection />
          <FilterBar />
          <KpiGrid />
          <TrendsSection />
          <OrdersSection />
          <ReportsSection />
        </div>
      </AppShell>
      <Toaster position="bottom-right" richColors closeButton />
    </ThemeProvider>
  )
}

export default App

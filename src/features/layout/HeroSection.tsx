/**
 * Hero del resumen (macrostructure Stat-Led): titular con el highlight
 * del tema Hum y una línea de apoyo clara.
 */
export function HeroSection() {
  return (
    <section id="resumen" aria-label="Resumen de KPIs" className="scroll-mt-24 pt-10 pb-6 sm:pt-14">
      <div className="reveal">
        <p className="mono-label">Resumen · 2026</p>
        <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
          Todo tu negocio, <span className="hl">de un vistazo</span>
        </h2>
        <p className="mt-3 max-w-xl text-base text-muted-foreground">
          KPIs, tendencias y reportes de Nébula. Los datos son de demostración: explora sin miedo.
        </p>
      </div>
    </section>
  )
}

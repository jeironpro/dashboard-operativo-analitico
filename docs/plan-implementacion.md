# Plan de implementación — Dashboard Operativo Analítico

> Plan elaborado según la skill **dicresoft/TASK.md**: cada tarea se implementa en una rama individual (`prefijo/categoría`), se valida (tests + lint + build), se commitea con el formato `<prefijo>/<categoría>: <mensaje>` y se entrega mediante **pull request** con _squash and merge_ hacia `main`.
>
> Modo de trabajo: **sin Jira** (no existe identificador `ABC-123`). Los commits y títulos de PR usan el formato `<prefijo>/<categoría>: <mensaje>`.

## Objetivo

Construir el frontend de un **dashboard operativo** de negocio (e-commerce mock) con:

- KPIs del negocio: ventas, conversión, retención, ticket promedio, nuevos clientes, margen.
- Gráficos de tendencias con conmutador diario / semanal / mensual.
- Reportes exportables en **PDF, Excel y CSV**.
- Filtros por fecha, categoría, región y canal.
- Datos **MOCK** realistas en JSON.
- Animaciones con **animejs**.
- Stack: **React + Vite + yarn + shadcn/ui + TypeScript**.
- Diseño **100 % responsive** (320 / 375 / 414 / 768 px y superiores), siguiendo la skill de diseño **hallmark** (tema **Hum**, referencia `usehallmark.com/examples/hum-07`).

## Convenciones

| Concepto          | Convención                                                                   |
| ----------------- | ---------------------------------------------------------------------------- |
| Rama              | `<prefijo>/<categoría>` (ej. `feature/kpi-cards`)                            |
| Commit            | `<prefijo>/<categoría>: <mensaje>` (imperativo, minúsculas, sin punto final) |
| Título PR         | Igual que el commit                                                          |
| Merge             | `gh pr merge --squash --delete-branch` hacia `main`                          |
| Pre-commit        | Husky + lint-staged (ESLint + Prettier), según `PRECOMMIT.md`                |
| Tests             | vitest (según `VITE_RULES.md`)                                               |
| Base de cada rama | `main` actualizado (`git checkout main && git pull`)                         |

## Tareas

### T-01 · `docs/plan` — plan de implementación y documentación base

- **Rama:** `docs/plan`
- **Título PR:** `docs/plan: crea plan de implementación y documentación base`
- **Alcance:**
  - `docs/plan-implementacion.md` (este documento).
  - `README.md` con descripción, stack y estructura del repositorio.
- **Dependencias:** ninguna.
- **Criterios de aceptación:** el plan lista todas las tareas con rama, título de PR, alcance, dependencias y criterios.

### T-02 · `chore/scaffold` — bootstrap del proyecto

- **Rama:** `chore/scaffold`
- **Título PR:** `chore/scaffold: configura proyecto react + vite + ts con yarn y tooling`
- **Alcance:**
  - Crear el proyecto con la plantilla oficial `react-ts` de Vite.
  - `yarn` como gestor (campo `packageManager`).
  - ESLint (config base de Vite extendida) + Prettier.
  - Husky + lint-staged (pre-commit).
  - `.gitignore` a partir de la plantilla `Node.gitignore` de GitHub.
  - Alias `@/` → `src/` en `vite.config.ts` y `tsconfig`.
  - Workflow de CI (GitHub Actions): install → lint → typecheck → test → build.
- **Dependencias:** T-01.
- **Criterios de aceptación:** `yarn lint`, `yarn typecheck`, `yarn test` y `yarn build` pasan; CI verde.

### T-03 · `chore/style-guide` — libro de estilo y sistema de diseño

- **Rama:** `chore/style-guide`
- **Título PR:** `chore/style-guide: crea libro de estilo y tokens del tema hum`
- **Alcance:**
  - `docs/style-guide.md` (libro de estilo exigido por `GENERALS_RULES.md`): paleta, tipografía, espaciados, componentes base con estados, iconografía.
  - Instalación y configuración de **shadcn/ui** sobre Tailwind CSS v4.
  - Tokens de diseño del tema **Hum** (hallmark): papel crema, tinta, acentos pera/cian/coral, radios redondeados, sombras, easing y duraciones.
  - Tipografías **Plus Jakarta Sans** + **JetBrains Mono** (Google Fonts).
  - Componentes base de shadcn/ui necesarios para el dashboard.
- **Dependencias:** T-02.
- **Criterios de aceptación:** la app renderiza con el tema Hum aplicado (crema, sin blanco puro ni negro puro, sin esquinas cuadradas); tokens centralizados en CSS.

### T-04 · `chore/mock-data` — datos MOCK realistas

- **Rama:** `chore/mock-data`
- **Título PR:** `chore/mock-data: agrega datos mock realistas del negocio en json`
- **Alcance:**
  - Generador determinista (`scripts/generate-mock-data.mjs`) con semilla fija.
  - JSONs generados en `src/data/`: categorías, regiones, canales, ventas diarias, series semanal y mensual, clientes (retención) y pedidos recientes.
  - Tipos de dominio en `src/types/` y utilidades de formato.
- **Dependencias:** T-03.
- **Criterios de aceptación:** los JSONs se importan en la app; los datos son coherentes entre series (totales, tendencias, estacionalidad).

### T-05 · `feature/layout-shell` — estructura y navegación de la aplicación

- **Rama:** `feature/layout-shell`
- **Título PR:** `feature/layout-shell: crea shell del dashboard con navegación responsive`
- **Alcance:**
  - Shell de la app: sidebar (desktop) + drawer (móvil), topbar con saludo y selector de periodo, footer con marquee.
  - Momento de personaje (mascota CSS del tema Hum) y microinteracciones base.
  - Responsive 320 / 375 / 414 / 768 px, `overflow-x: clip`, `prefers-reduced-motion`.
- **Dependencias:** T-03, T-04.
- **Criterios de aceptación:** navegación funcional en móvil y desktop sin scroll horizontal; reducción de movimiento respetada.

### T-06 · `feature/kpi-cards` — tarjetas de KPI con animaciones

- **Rama:** `feature/kpi-cards`
- **Título PR:** `feature/kpi-cards: implementa tarjetas de kpi con contadores animejs`
- **Alcance:**
  - Store global (zustand) con los datos de negocio.
  - Tarjetas KPI (ventas, pedidos, conversión, ticket promedio, retención, nuevos clientes, margen) con contadores animados con **animejs**, deltas vs. periodo anterior y sparklines.
  - Estampado `/* Hallmark · … */` y actualización del log de la skill.
- **Dependencias:** T-05.
- **Criterios de aceptación:** contadores animan al entrar en viewport y con `prefers-reduced-motion` muestran el valor final; los KPIs se calculan desde los datos mock.

### T-07 · `feature/trend-charts` — gráficos de tendencias

- **Rama:** `feature/trend-charts`
- **Título PR:** `feature/trend-charts: implementa gráficos de tendencias diario semanal mensual`
- **Alcance:**
  - Gráficos con **Recharts** vía componente `chart` de shadcn/ui: tendencia de ventas (área), ventas por categoría (barras), distribución por canal (donut) y por región (barras horizontales).
  - Conmutador diario / semanal / mensual.
  - Animación de entrada y de actualización con animejs.
- **Dependencias:** T-06.
- **Criterios de aceptación:** los gráficos responden al conmutador de periodo y son accesibles (tooltips, leyendas, tabular-nums).

### T-08 · `feature/filters` — filtros por fecha, categoría, región y canal

- **Rama:** `feature/filters`
- **Título PR:** `feature/filters: implementa filtros por fecha categoría y región`
- **Alcance:**
  - Barra de filtros: presets de rango de fechas + calendario, categoría, región, canal y botón de limpiar.
  - Lógica de filtrado en `src/lib/filters.ts` (pura y testeable).
  - Los filtros alimentan KPIs, gráficos y tablas.
  - Tests unitarios de la lógica de filtrado y agregación (vitest).
- **Dependencias:** T-07.
- **Criterios de aceptación:** filtrar actualiza todos los consumidores; `yarn test` verde.

### T-09 · `feature/reports` — reportes exportables

- **Rama:** `feature/reports`
- **Título PR:** `feature/reports: implementa reportes exportables pdf excel csv`
- **Alcance:**
  - Tabla de reportes disponibles y tabla de pedidos recientes (búsqueda, paginación).
  - Exportación **CSV** (Blob), **Excel** (`xlsx`) y **PDF** (`jspdf` + `jspdf-autotable`) aplicando los filtros activos.
  - Feedback de descarga (toast) y _star-burst_ del tema Hum al exportar.
  - Tests de los generadores de exportación.
- **Dependencias:** T-08.
- **Criterios de aceptación:** los tres formatos se descargan correctamente con los filtros aplicados; `yarn test` verde.

### T-10 · `docs/readme` — documentación final

- **Rama:** `docs/readme`
- **Título PR:** `docs/readme: documenta el proyecto y el flujo de trabajo`
- **Alcance:**
  - `README.md` completo: requisitos, instalación, scripts, estructura, decisiones de diseño (hallmark / Hum), datos mock y flujo de PRs.
- **Dependencias:** T-09.
- **Criterios de aceptación:** un desarrollador nuevo puede levantar el proyecto siguiendo el README.

## Orden de ejecución y dependencias

```
T-01 docs/plan
 └─ T-02 chore/scaffold
     └─ T-03 chore/style-guide
         └─ T-04 chore/mock-data
             └─ T-05 feature/layout-shell
                 └─ T-06 feature/kpi-cards
                     └─ T-07 feature/trend-charts
                         └─ T-08 feature/filters
                             └─ T-09 feature/reports
                                 └─ T-10 docs/readme
```

Cada tarea se mergea con **squash** a `main` antes de iniciar la siguiente, de modo que cada rama nace de `main` actualizado.

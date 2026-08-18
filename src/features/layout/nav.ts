import {
  LayoutDashboardIcon,
  TrendingUpIcon,
  ShoppingCartIcon,
  FileTextIcon,
  type LucideIcon,
} from 'lucide-react'

export interface NavItem {
  /** id estable del elemento de navegación */
  id: string
  label: string
  /** id de la sección a la que enlaza */
  sectionId: string
  icon: LucideIcon
}

export const NAV_ITEMS: readonly NavItem[] = [
  { id: 'resumen', label: 'Resumen', sectionId: 'resumen', icon: LayoutDashboardIcon },
  { id: 'tendencias', label: 'Tendencias', sectionId: 'tendencias', icon: TrendingUpIcon },
  { id: 'detalle', label: 'Detalle de pedidos', sectionId: 'detalle', icon: ShoppingCartIcon },
  { id: 'reportes', label: 'Reportes', sectionId: 'reportes', icon: FileTextIcon },
]

export const NAV_SECTION_IDS: readonly string[] = NAV_ITEMS.map((item) => item.sectionId)

import { useEffect, useState } from 'react'

/**
 * Devuelve el id de la sección actualmente visible (scroll-spy).
 * Usa IntersectionObserver, nunca listeners de scroll.
 */
export function useActiveSection(sectionIds: readonly string[]): string {
  const [active, setActive] = useState(sectionIds[0] ?? '')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        }
      },
      { rootMargin: '-15% 0px -70% 0px' },
    )

    for (const id of sectionIds) {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    }
    return () => observer.disconnect()
  }, [sectionIds])

  return active
}

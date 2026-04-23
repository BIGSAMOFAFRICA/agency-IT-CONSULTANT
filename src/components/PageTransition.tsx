import { useLayoutEffect, useRef, type ReactNode } from 'react'
import { useLocation } from 'react-router-dom'
import gsap from 'gsap'

type PageTransitionProps = {
  children: ReactNode
}

export default function PageTransition({ children }: PageTransitionProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const location = useLocation()

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })

    const ctx = gsap.context(() => {
      const container = containerRef.current
      const revealItems = gsap.utils.toArray<HTMLElement>('[data-reveal]', container)

      if (container) {
        gsap.fromTo(
          container,
          { autoAlpha: 0, y: 24 },
          { autoAlpha: 1, y: 0, duration: 0.55, ease: 'power2.out' },
        )
      }

      if (revealItems.length) {
        gsap.fromTo(
          revealItems,
          { autoAlpha: 0, y: 28 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.08,
            ease: 'power3.out',
            delay: 0.08,
          },
        )
      }
    }, containerRef)

    return () => ctx.revert()
  }, [location.pathname])

  return (
    <div key={location.pathname} ref={containerRef} className="page-shell">
      {children}
    </div>
  )
}

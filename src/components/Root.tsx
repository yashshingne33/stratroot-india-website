import { Outlet, useLocation } from 'react-router'
import { useEffect } from 'react'
import Nav from './Nav'
import Footer from './Footer'

export default function Root() {
  const { pathname, hash } = useLocation()

  // New page: scroll to the top. Link with a #section: scroll to that section instead
  // (needed for /export-consulting#market-selection and similar anchors).
  useEffect(() => {
    if (hash) {
      const target = document.getElementById(decodeURIComponent(hash.slice(1)))
      if (target) {
        target.scrollIntoView()
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return (
    <div style={{ fontFamily: 'var(--font-sans)' }}>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:px-4 focus:py-2 focus:rounded focus:text-sm focus:text-white"
        style={{ background: 'var(--color-accent)' }}
      >
        Skip to main content
      </a>
      <Nav />
      <main id="main-content" tabIndex={-1} className="focus:outline-none">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
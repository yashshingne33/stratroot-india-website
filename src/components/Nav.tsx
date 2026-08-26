import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router'
import { Menu, X, ChevronDown } from 'lucide-react'

const services = [
  { label: 'Export Market Development', slug: 'export-market-development' },
  { label: 'Sales & Channel Development', slug: 'sales-channel-development' },
  { label: 'Business Strategy & Commercial Advisory', slug: 'business-strategy-advisory' },
  { label: 'Operations & Execution Systems', slug: 'operations-execution-systems' },
  { label: 'Market-Ready Business Communication', slug: 'market-ready-communication' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
    setServicesOpen(false)
  }, [pathname])

  const isHome = pathname === '/'

  const navBg = scrolled || !isHome
    ? 'bg-[var(--color-surface)] border-b border-[var(--color-border)]'
    : 'bg-transparent'

  const textColor = scrolled || !isHome ? 'text-[var(--color-primary)]' : 'text-white'

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-18" style={{ height: '72px' }}>
          {/* Logo */}
          <Link to="/" className="flex items-baseline gap-1">
            <span
              className={`font-display text-xl font-semibold tracking-tight ${textColor}`}
            >
              StratRoot
            </span>
            <span
              className="text-xs font-medium tracking-widest uppercase ml-1"
              style={{ color: 'var(--color-accent)' }}
            >
              India
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link
              to="/about"
              className={`text-sm font-medium transition-colors hover:text-[var(--color-accent)] ${textColor}`}
            >
              About
            </Link>

            {/* Services dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-[var(--color-accent)] ${textColor}`}
              >
                Services
                <ChevronDown size={14} className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3">
                  <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg shadow-xl p-4 w-80">
                    <p className="text-[10px] font-semibold tracking-widest uppercase text-[var(--color-accent)] mb-3 px-2">
                      What We Do
                    </p>
                    <div className="space-y-0.5">
                      {services.map((s) => (
                        <Link
                          key={s.slug}
                          to={`/services/${s.slug}`}
                          className="block px-2 py-2 text-sm text-[var(--color-charcoal)] hover:bg-[var(--color-surface)] hover:text-[var(--color-primary)] rounded transition-colors"
                        >
                          {s.label}
                        </Link>
                      ))}
                    </div>
                    <div className="border-t border-[var(--color-border)] mt-3 pt-3">
                      <Link
                        to="/services"
                        className="block px-2 py-1.5 text-sm font-medium text-[var(--color-accent)] hover:underline"
                      >
                        View All Services →
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/industries"
              className={`text-sm font-medium transition-colors hover:text-[var(--color-accent)] ${textColor}`}
            >
              Industries
            </Link>
            <Link
              to="/case-studies"
              className={`text-sm font-medium transition-colors hover:text-[var(--color-accent)] ${textColor}`}
            >
              Case Studies
            </Link>
            <Link
              to="/insights"
              className={`text-sm font-medium transition-colors hover:text-[var(--color-accent)] ${textColor}`}
            >
              Insights
            </Link>
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              to="/contact"
              className={`text-sm font-medium transition-colors hover:text-[var(--color-accent)] ${textColor}`}
            >
              Contact
            </Link>
            <Link
              to="/consultation"
              className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-white rounded"
              style={{ background: 'var(--color-accent)' }}
            >
              Book Consultation
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className={`lg:hidden p-2 ${textColor}`}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-[var(--color-surface)] border-t border-[var(--color-border)] px-6 py-6">
          <div className="space-y-1">
            {[
              { label: 'About', to: '/about' },
              { label: 'Services', to: '/services' },
              { label: 'Industries', to: '/industries' },
              { label: 'Case Studies', to: '/case-studies' },
              { label: 'Insights', to: '/insights' },
              { label: 'Contact', to: '/contact' },
            ].map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="block py-3 text-base font-medium text-[var(--color-primary)] border-b border-[var(--color-border)] hover:text-[var(--color-accent)] transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="mt-6">
            <Link
              to="/consultation"
              className="block w-full text-center px-5 py-3 text-sm font-medium text-white rounded"
              style={{ background: 'var(--color-accent)' }}
            >
              Book Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
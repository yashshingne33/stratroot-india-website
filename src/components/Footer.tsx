import { Link } from 'react-router'
import { Mail, Phone, MapPin } from 'lucide-react'

const QUICK_LINKS = [
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Industries', to: '/industries' },
  { label: 'Case Studies', to: '/case-studies' },
  { label: 'Insights', to: '/insights' },
  { label: 'Contact', to: '/contact' },
]

const SERVICES = [
  { label: 'Export Market Development', slug: 'export-market-development' },
  { label: 'Sales & Channel Development', slug: 'sales-channel-development' },
  { label: 'Business Strategy & Commercial Advisory', slug: 'business-strategy-advisory' },
  { label: 'Operations & Execution Systems', slug: 'operations-execution-systems' },
  { label: 'Market-Ready Business Communication', slug: 'market-ready-communication' },
]

export default function Footer() {
  return (
    <footer style={{ background: 'var(--color-primary)', color: 'var(--color-surface)' }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-12 sm:py-14 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 sm:gap-10 lg:gap-12">
          {/* ── Brand Column ── */}
          <div className="sm:col-span-2 lg:col-span-4">
            <div className="flex flex-wrap items-baseline gap-1 mb-4">
              <span className="font-display text-2xl font-semibold text-white">StratRoot</span>
              <span className="text-xs font-medium tracking-widest uppercase ml-1" style={{ color: 'var(--color-gold)' }}>
                India
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-4 max-w-sm" style={{ color: 'var(--color-muted)' }}>
              Growth, market development and execution consulting for manufacturers, exporters,
              FPOs and emerging businesses.
            </p>
            <p className="text-xs font-medium italic" style={{ color: 'var(--color-gold)' }}>
              Rooting for Your Success.
            </p>
          </div>

          {/* ── Quick Links ── */}
          <div className="lg:col-span-3">
            <p className="text-xs font-semibold tracking-widest uppercase mb-5" style={{ color: 'var(--color-gold)' }}>
              Quick Links
            </p>
            <ul className="space-y-3">
              {QUICK_LINKS.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="text-sm transition-colors hover:text-white" style={{ color: 'var(--color-muted)' }}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Services ── */}
          <div className="lg:col-span-3">
            <p className="text-xs font-semibold tracking-widest uppercase mb-5" style={{ color: 'var(--color-gold)' }}>
              Services
            </p>
            <ul className="space-y-3">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link
                    to={`/services/${s.slug}`}
                    className="text-sm transition-colors hover:text-white"
                    style={{ color: 'var(--color-muted)' }}
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Contact ── */}
          <div className="sm:col-span-2 lg:col-span-2">
            <p className="text-xs font-semibold tracking-widest uppercase mb-5" style={{ color: 'var(--color-gold)' }}>
              Contact
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm min-w-0" style={{ color: 'var(--color-muted)' }}>
                <Mail size={14} className="mt-0.5 flex-shrink-0" />
                <span className="break-words">[Official Email]</span>
              </li>
              <li className="flex items-start gap-2 text-sm min-w-0" style={{ color: 'var(--color-muted)' }}>
                <Phone size={14} className="mt-0.5 flex-shrink-0" />
                <span className="break-words">[Official Phone Number]</span>
              </li>
              <li className="flex items-start gap-2 text-sm min-w-0" style={{ color: 'var(--color-muted)' }}>
                <MapPin size={14} className="mt-0.5 flex-shrink-0" />
                <span className="break-words">Nagpur, Maharashtra, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* ── Bottom Bar ── */}
        <div
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-12 sm:mt-14 pt-8 border-t text-xs text-center sm:text-left"
          style={{ borderColor: 'rgba(255,255,255,0.12)', color: 'var(--color-muted)' }}
        >
          <p>Copyright {new Date().getFullYear()} StratRoot India. All rights reserved.</p>
          <div className="flex items-center justify-center sm:justify-start gap-6 flex-wrap">
            <Link to="/legal#privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/legal#terms-of-use" className="hover:text-white transition-colors">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
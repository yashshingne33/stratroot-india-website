// import { Link } from 'react-router'
// import { Mail, ArrowUpRight } from 'lucide-react'

// const services = [
//   { label: 'Market Opportunity Mapping', slug: 'market-opportunity-mapping' },
//   { label: 'International Connections', slug: 'international-connections' },
//   { label: 'Export Sales Development', slug: 'export-sales-development' },
//   { label: 'Business Positioning', slug: 'business-positioning' },
//   { label: 'Ongoing Growth Support', slug: 'ongoing-growth-support' },
// ]

// export default function Footer() {
//   return (
//     <footer style={{ background: '#102A43', color: '#F8FAF7' }}>
//       {/* CTA Banner */}
//       <div
//         className="border-b"
//         style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}
//       >
//         <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14">
//           <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
//             <div>
//               <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: '#C6A15B' }}>
//                 Next Export Opportunity
//               </p>
//               <h2
//                 className="font-display text-3xl lg:text-4xl font-semibold text-white"
//                 style={{ lineHeight: 1.2 }}
//               >
//                 Ready to explore your next export opportunity?
//                 <br />
//                 <em style={{ color: '#C6A15B', fontStyle: 'normal' }}>
//                   Let's build your growth path with focus.
//                 </em>
//               </h2>
//             </div>
//             <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
//               <Link
//                 to="/contact"
//                 className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold text-white rounded transition-all hover:opacity-90"
//                 style={{ background: '#2F855A' }}
//               >
//                 Start a Conversation
//                 <ArrowUpRight size={16} />
//               </Link>
//               <Link
//                 to="/services"
//                 className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-medium border rounded transition-colors hover:bg-white/5"
//                 style={{ borderColor: '#C6A15B', color: '#C6A15B' }}
//               >
//                 Explore Services
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Footer */}
//       <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
//           {/* Brand Column */}
//           <div className="lg:col-span-5">
//             <div className="flex items-baseline gap-1 mb-4">
//               <span className="font-display text-2xl font-semibold text-white">StratRoot</span>
//             </div>
//             <p className="text-sm leading-relaxed mb-6 max-w-sm" style={{ color: '#BAC7D5' }}>
//               Business consultancy for manufacturers and traders building international connections,
//               export market opportunities, and practical sales development.
//             </p>
//             <div className="space-y-3">
//               <a
//                 href="mailto:hello@stratroot.in"
//                 className="flex items-center gap-3 text-sm transition-colors hover:text-white"
//                 style={{ color: '#BAC7D5' }}
//               >
//                 <Mail size={16} style={{ color: '#2F855A' }} />
//                 hello@stratroot.in
//               </a>
//             </div>
//           </div>

//           {/* Services */}
//           <div className="lg:col-span-4">
//             <p className="text-xs font-semibold tracking-widest uppercase mb-5" style={{ color: '#C6A15B' }}>
//               Services
//             </p>
//             <ul className="space-y-3">
//               {services.map((s) => (
//                 <li key={s.slug}>
//                   <Link
//                     to={`/services#${s.slug}`}
//                     className="text-sm transition-colors hover:text-white"
//                     style={{ color: '#BAC7D5' }}
//                   >
//                     {s.label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Company Links */}
//           <div className="lg:col-span-3">
//             <p className="text-xs font-semibold tracking-widest uppercase mb-5" style={{ color: '#C6A15B' }}>
//               Company
//             </p>
//             <ul className="space-y-3">
//               {[
//                 { label: 'About Us', to: '/about' },
//                 { label: 'Services', to: '/services' },
//                 { label: 'FAQ', to: '/faq' },
//                 { label: 'Contact', to: '/contact' },
//               ].map((item) => (
//                 <li key={item.to}>
//                   <Link
//                     to={item.to}
//                     className="text-sm transition-colors hover:text-white"
//                     style={{ color: '#BAC7D5' }}
//                   >
//                     {item.label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>

//         {/* Bottom Bar */}
//         <div
//           className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-12 pt-8 border-t text-xs"
//           style={{ borderColor: 'rgba(255, 255, 255, 0.1)', color: '#BAC7D5' }}
//         >
//           <p>© {new Date().getFullYear()} StratRoot. All rights reserved.</p>
//           <div className="flex items-center gap-6">
//             <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
//           </div>
//         </div>
//       </div>
//     </footer>
//   )
// }










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
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* ── Brand Column ── */}
          <div className="lg:col-span-4">
            <div className="flex items-baseline gap-1 mb-4">
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
          <div className="lg:col-span-2">
            <p className="text-xs font-semibold tracking-widest uppercase mb-5" style={{ color: 'var(--color-gold)' }}>
              Contact
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm" style={{ color: 'var(--color-muted)' }}>
                <Mail size={14} className="mt-0.5 flex-shrink-0" />
                [Official Email]
              </li>
              <li className="flex items-start gap-2 text-sm" style={{ color: 'var(--color-muted)' }}>
                <Phone size={14} className="mt-0.5 flex-shrink-0" />
                [Official Phone Number]
              </li>
              <li className="flex items-start gap-2 text-sm" style={{ color: 'var(--color-muted)' }}>
                <MapPin size={14} className="mt-0.5 flex-shrink-0" />
                Nagpur, Maharashtra, India
              </li>
            </ul>
          </div>
        </div>

        {/* ── Bottom Bar ── */}
        <div
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-14 pt-8 border-t text-xs"
          style={{ borderColor: 'rgba(255,255,255,0.12)', color: 'var(--color-muted)' }}
        >
          <p>Copyright {new Date().getFullYear()} StratRoot India. All rights reserved.</p>
          <div className="flex items-center gap-6">
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
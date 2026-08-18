// import { Link } from 'react-router'
// import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react'

// const services = [
//   { label: 'Business Restructuring', slug: 'business-restructuring' },
//   { label: 'Operations Excellence', slug: 'operations-excellence' },
//   { label: 'Export & Trade', slug: 'export-trade' },
//   { label: 'Financial Strategy', slug: 'financial-strategy' },
//   { label: 'Market Entry', slug: 'market-entry' },
//   { label: 'Digital Transformation', slug: 'digital-transformation' },
// ]

// export default function Footer() {
//   return (
//     <footer style={{ background: '#111827', color: '#F8FAFC' }}>
//       {/* CTA Banner */}
//       <div
//         className="border-b"
//         style={{ borderColor: '#1F2937' }}
//       >
//         <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
//           <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
//             <div>
//               <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: '#B7791F' }}>
//                 Ready to Execute?
//               </p>
//               <h2
//                 className="font-display text-4xl lg:text-5xl font-semibold"
//                 style={{ lineHeight: 1.15 }}
//               >
//                 Let's build something
//                 <br />
//                 <em>that lasts.</em>
//               </h2>
//             </div>
//             <div className="flex flex-col sm:flex-row gap-4">
//               <Link
//                 to="/consultation"
//                 className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold text-white rounded"
//                 style={{ background: '#B7791F' }}
//               >
//                 Book a Consultation
//                 <ArrowUpRight size={16} />
//               </Link>
//               <Link
//                 to="/contact"
//                 className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium border rounded"
//                 style={{ borderColor: '#374151', color: '#D1D5DB' }}
//               >
//                 Get in Touch
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main footer */}
//       <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
//           {/* Brand */}
//           <div className="lg:col-span-4">
//             <div className="flex items-baseline gap-1 mb-4">
//               <span className="font-display text-xl font-semibold">StratRoot</span>
//               <span className="text-xs font-medium tracking-widest uppercase ml-1" style={{ color: '#B7791F' }}>India</span>
//             </div>
//             <p className="text-sm leading-relaxed mb-6" style={{ color: '#9CA3AF' }}>
//               We don't just advise — we execute. StratRoot India partners with CEOs, founders, and business owners to build resilient, high-performance organizations.
//             </p>
//             <div className="space-y-3">
//               <a
//                 href="mailto:hello@stratroot.in"
//                 className="flex items-center gap-3 text-sm transition-colors hover:text-white"
//                 style={{ color: '#9CA3AF' }}
//               >
//                 <Mail size={14} />
//                 hello@stratroot.in
//               </a>
//               <a
//                 href="tel:+919999999999"
//                 className="flex items-center gap-3 text-sm transition-colors hover:text-white"
//                 style={{ color: '#9CA3AF' }}
//               >
//                 <Phone size={14} />
//                 +91 99999 99999
//               </a>
//               <div className="flex items-start gap-3 text-sm" style={{ color: '#9CA3AF' }}>
//                 <MapPin size={14} className="mt-0.5 flex-shrink-0" />
//                 <span>Mumbai · Delhi · Bengaluru</span>
//               </div>
//             </div>
//           </div>

//           {/* Services */}
//           <div className="lg:col-span-3">
//             <p className="text-xs font-semibold tracking-widest uppercase mb-5" style={{ color: '#6B7280' }}>
//               Services
//             </p>
//             <ul className="space-y-3">
//               {services.map((s) => (
//                 <li key={s.slug}>
//                   <Link
//                     to={`/services/${s.slug}`}
//                     className="text-sm transition-colors hover:text-white"
//                     style={{ color: '#9CA3AF' }}
//                   >
//                     {s.label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Company */}
//           <div className="lg:col-span-2">
//             <p className="text-xs font-semibold tracking-widest uppercase mb-5" style={{ color: '#6B7280' }}>
//               Company
//             </p>
//             <ul className="space-y-3">
//               {[
//                 { label: 'About Us', to: '/about' },
//                 { label: 'Industries', to: '/industries' },
//                 { label: 'Case Studies', to: '/case-studies' },
//                 { label: 'Insights', to: '/insights' },
//                 { label: 'Contact', to: '/contact' },
//               ].map((item) => (
//                 <li key={item.to}>
//                   <Link
//                     to={item.to}
//                     className="text-sm transition-colors hover:text-white"
//                     style={{ color: '#9CA3AF' }}
//                   >
//                     {item.label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Credentials */}
//           <div className="lg:col-span-3">
//             <p className="text-xs font-semibold tracking-widest uppercase mb-5" style={{ color: '#6B7280' }}>
//               Our Reach
//             </p>
//             <div className="space-y-4">
//               {[
//                 { num: '₹2,400 Cr+', label: 'Revenue Impact Delivered' },
//                 { num: '85+', label: 'Engagements Completed' },
//                 { num: '15+', label: 'Sectors Served' },
//                 { num: '18+', label: 'Years of Combined Experience' },
//               ].map((stat) => (
//                 <div key={stat.label}>
//                   <p className="text-lg font-semibold text-white">{stat.num}</p>
//                   <p className="text-xs" style={{ color: '#6B7280' }}>{stat.label}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Bottom bar */}
//         <div
//           className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-16 pt-8 border-t text-xs"
//           style={{ borderColor: '#1F2937', color: '#6B7280' }}
//         >
//           <p>© {new Date().getFullYear()} StratRoot India Consulting Pvt. Ltd. All rights reserved.</p>
//           <div className="flex items-center gap-6">
//             <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
//             <span>·</span>
//             <span>CIN: U74999MH2024PTC000000</span>
//           </div>
//         </div>
//       </div>
//     </footer>
//   )
// }









import { Link } from 'react-router'
import { Mail, ArrowUpRight } from 'lucide-react'

const services = [
  { label: 'Market Opportunity Mapping', slug: 'market-opportunity-mapping' },
  { label: 'International Connections', slug: 'international-connections' },
  { label: 'Export Sales Development', slug: 'export-sales-development' },
  { label: 'Business Positioning', slug: 'business-positioning' },
  { label: 'Ongoing Growth Support', slug: 'ongoing-growth-support' },
]

export default function Footer() {
  return (
    <footer style={{ background: '#102A43', color: '#F8FAF7' }}>
      {/* CTA Banner */}
      <div
        className="border-b"
        style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: '#C6A15B' }}>
                Next Export Opportunity
              </p>
              <h2
                className="font-display text-3xl lg:text-4xl font-semibold text-white"
                style={{ lineHeight: 1.2 }}
              >
                Ready to explore your next export opportunity?
                <br />
                <em style={{ color: '#C6A15B', fontStyle: 'normal' }}>
                  Let's build your growth path with focus.
                </em>
              </h2>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold text-white rounded transition-all hover:opacity-90"
                style={{ background: '#2F855A' }}
              >
                Start a Conversation
                <ArrowUpRight size={16} />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-medium border rounded transition-colors hover:bg-white/5"
                style={{ borderColor: '#C6A15B', color: '#C6A15B' }}
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-5">
            <div className="flex items-baseline gap-1 mb-4">
              <span className="font-display text-2xl font-semibold text-white">StratRoot</span>
            </div>
            <p className="text-sm leading-relaxed mb-6 max-w-sm" style={{ color: '#BAC7D5' }}>
              Business consultancy for manufacturers and traders building international connections,
              export market opportunities, and practical sales development.
            </p>
            <div className="space-y-3">
              <a
                href="mailto:hello@stratroot.in"
                className="flex items-center gap-3 text-sm transition-colors hover:text-white"
                style={{ color: '#BAC7D5' }}
              >
                <Mail size={16} style={{ color: '#2F855A' }} />
                hello@stratroot.in
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-4">
            <p className="text-xs font-semibold tracking-widest uppercase mb-5" style={{ color: '#C6A15B' }}>
              Services
            </p>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    to={`/services#${s.slug}`}
                    className="text-sm transition-colors hover:text-white"
                    style={{ color: '#BAC7D5' }}
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="lg:col-span-3">
            <p className="text-xs font-semibold tracking-widest uppercase mb-5" style={{ color: '#C6A15B' }}>
              Company
            </p>
            <ul className="space-y-3">
              {[
                { label: 'About Us', to: '/about' },
                { label: 'Services', to: '/services' },
                { label: 'FAQ', to: '/faq' },
                { label: 'Contact', to: '/contact' },
              ].map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-sm transition-colors hover:text-white"
                    style={{ color: '#BAC7D5' }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-12 pt-8 border-t text-xs"
          style={{ borderColor: 'rgba(255, 255, 255, 0.1)', color: '#BAC7D5' }}
        >
          <p>© {new Date().getFullYear()} StratRoot. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
// import { Link } from 'react-router'
// import { TrendingUp, Settings, Globe, BarChart3, Target, Zap, Users, Package, ArrowRight } from 'lucide-react'

// const SERVICES = [
//   {
//     icon: TrendingUp,
//     label: 'Business Restructuring & Turnaround',
//     slug: 'business-restructuring',
//     short: 'Restructuring',
//     desc: 'When the business is underperforming, losing money, or heading in the wrong direction — we diagnose root causes and rebuild from a position of strength.',
//     deliverables: ['Financial forensics & root cause analysis', 'Cost restructuring & cash flow repair', 'Operational redesign', 'Leadership restructuring', 'Creditor negotiation support'],
//     outcome: 'Average 18-month turnaround from loss to profitability.',
//   },
//   {
//     icon: Settings,
//     label: 'Operations Excellence',
//     slug: 'operations-excellence',
//     short: 'Operations',
//     desc: 'Build lean, scalable operating systems that don\'t collapse under growth. From shopfloor to boardroom — we make your operations work.',
//     deliverables: ['Process mapping & SOP creation', 'KPI design and dashboards', 'Lean manufacturing implementation', 'Quality systems', 'Vendor & procurement optimisation'],
//     outcome: 'Average 22% reduction in operating costs.',
//   },
//   {
//     icon: Globe,
//     label: 'Export & Trade Consulting',
//     slug: 'export-trade',
//     short: 'Exports',
//     desc: 'Navigate global markets, international compliance, buyer relationships, and logistics with a partner who has done it before — in your sector.',
//     deliverables: ['Market selection & prioritisation', 'Buyer development strategy', 'Export documentation & compliance', 'Pricing architecture', 'Trade finance advisory'],
//     outcome: 'Average 3.2× export revenue in 24 months.',
//   },
//   {
//     icon: BarChart3,
//     label: 'Financial Strategy & CFO Services',
//     slug: 'financial-strategy',
//     short: 'Finance',
//     desc: 'CFO-grade financial intelligence without the full-time CFO cost. Build visibility, control, and strategic decision-making capability into your finance function.',
//     deliverables: ['MIS design & financial dashboards', 'Working capital optimisation', 'Fundraising readiness', 'Budgeting & forecasting systems', 'Part-time CFO support'],
//     outcome: '35% average improvement in working capital efficiency.',
//   },
//   {
//     icon: Target,
//     label: 'Market Entry & Expansion',
//     slug: 'market-entry',
//     short: 'Market Entry',
//     desc: 'Enter new geographies, customer segments, or product categories with structured, evidence-based strategy — and a partner to execute it.',
//     deliverables: ['Market sizing & opportunity assessment', 'Competitive mapping', 'Channel strategy & partner selection', 'Launch planning & GTM', 'First 90-day execution support'],
//     outcome: '80% of market entry engagements achieve breakeven within 12 months.',
//   },
//   {
//     icon: Zap,
//     label: 'Digital Transformation',
//     slug: 'digital-transformation',
//     short: 'Digital',
//     desc: 'Technology-led productivity and process modernisation — without the vendor complexity. We select, implement, and operationalise the right tools for your business.',
//     deliverables: ['Digital readiness audit', 'ERP selection & implementation support', 'Automation identification', 'Data & reporting infrastructure', 'Change management'],
//     outcome: 'Average 40% reduction in manual process hours.',
//   },
//   {
//     icon: Users,
//     label: 'HR & Organisational Design',
//     slug: 'hr-org-design',
//     short: 'HR & Org',
//     desc: 'Build leadership teams, design organisations, and create people systems that support your ambition — not just your current size.',
//     deliverables: ['Org structure design', 'Role clarity & JD development', 'Leadership hiring advisory', 'Performance management systems', 'Succession planning'],
//     outcome: 'Clients report 60% improvement in leadership clarity after engagement.',
//   },
//   {
//     icon: Package,
//     label: 'Supply Chain Optimisation',
//     slug: 'supply-chain',
//     short: 'Supply Chain',
//     desc: 'From raw material to customer delivery — we find and fix the hidden costs and vulnerabilities in your supply chain.',
//     deliverables: ['Supply chain mapping & risk audit', 'Vendor rationalisation', 'Logistics cost optimisation', 'Inventory management systems', 'Multi-location coordination'],
//     outcome: 'Average 18% reduction in total supply chain cost.',
//   },
// ]

// export default function Services() {
//   return (
//     <div>
//       <div className="pt-36 pb-20 lg:pt-48 lg:pb-28" style={{ background: '#111827' }}>
//         <div className="max-w-7xl mx-auto px-6 lg:px-8">
//           <div className="flex items-center gap-3 mb-8">
//             <span className="h-px w-12" style={{ background: '#B7791F' }} />
//             <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#B7791F' }}>What We Do</span>
//           </div>
//           <h1
//             className="font-display text-5xl lg:text-7xl font-semibold text-white max-w-3xl"
//             style={{ lineHeight: 1.05, letterSpacing: '-0.02em' }}
//           >
//             Eight disciplines.
//             <br />
//             <em style={{ color: '#B7791F' }}>One standard.</em>
//           </h1>
//           <p className="mt-8 text-lg max-w-xl" style={{ color: '#9CA3AF' }}>
//             Each service is built for execution — not ideation. We stay until outcomes are real.
//           </p>
//         </div>
//       </div>

//       <section className="py-24 lg:py-32" style={{ background: '#F8FAFC' }}>
//         <div className="max-w-7xl mx-auto px-6 lg:px-8">
//           <div className="space-y-4">
//             {SERVICES.map((s, i) => (
//               <div
//                 key={s.slug}
//                 className="group border border-[#E2E8F0] rounded-lg bg-white overflow-hidden"
//               >
//                 <div className="p-8 lg:p-10">
//                   <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
//                     <div className="lg:col-span-1 flex items-start">
//                       <span
//                         className="font-display text-5xl font-light"
//                         style={{ color: '#E2E8F0' }}
//                       >
//                         {String(i + 1).padStart(2, '0')}
//                       </span>
//                     </div>
//                     <div className="lg:col-span-5">
//                       <div className="flex items-center gap-3 mb-4">
//                         <s.icon size={20} style={{ color: '#B7791F' }} />
//                         <h2 className="font-display text-2xl font-semibold" style={{ color: '#111827' }}>
//                           {s.label}
//                         </h2>
//                       </div>
//                       <p className="text-sm leading-relaxed mb-4" style={{ color: '#6B7280' }}>
//                         {s.desc}
//                       </p>
//                       <p className="text-xs font-semibold" style={{ color: '#0F766E' }}>
//                         Result: {s.outcome}
//                       </p>
//                     </div>
//                     <div className="lg:col-span-4">
//                       <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: '#6B7280' }}>
//                         Key Deliverables
//                       </p>
//                       <ul className="space-y-2">
//                         {s.deliverables.map((d) => (
//                           <li key={d} className="flex items-start gap-2 text-sm" style={{ color: '#374151' }}>
//                             <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: '#B7791F' }} />
//                             {d}
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                     <div className="lg:col-span-2 flex items-center lg:justify-end">
//                       <Link
//                         to={`/services/${s.slug}`}
//                         className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium border rounded transition-colors hover:border-[#B7791F] hover:text-[#B7791F]"
//                         style={{ borderColor: '#E2E8F0', color: '#374151' }}
//                       >
//                         Learn more <ArrowRight size={14} />
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section className="py-20" style={{ background: '#111827' }}>
//         <div className="max-w-3xl mx-auto px-6 text-center">
//           <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: '#B7791F' }}>Not Sure Where to Start?</p>
//           <h2 className="font-display text-3xl lg:text-4xl font-semibold text-white mb-6">
//             We'll diagnose before we prescribe.
//           </h2>
//           <Link
//             to="/consultation"
//             className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold text-white rounded"
//             style={{ background: '#B7791F' }}
//           >
//             Book a Free Discovery Call <ArrowRight size={16} />
//           </Link>
//         </div>
//       </section>
//     </div>
//   )
// }







import { Link } from 'react-router'
import { TrendingUp, Settings, Globe, BarChart3, Target, Zap, Users, Package, ArrowRight } from 'lucide-react'

const SERVICES = [
  {
    icon: TrendingUp,
    label: 'Business Restructuring & Turnaround',
    slug: 'business-restructuring',
    short: 'Restructuring',
    desc: 'When the business is underperforming, losing money, or heading in the wrong direction — we diagnose root causes and rebuild from a position of strength.',
    deliverables: ['Financial forensics & root cause analysis', 'Cost restructuring & cash flow repair', 'Operational redesign', 'Leadership restructuring', 'Creditor negotiation support'],
    outcome: 'Average 18-month turnaround from loss to profitability.',
  },
  {
    icon: Settings,
    label: 'Operations Excellence',
    slug: 'operations-excellence',
    short: 'Operations',
    desc: 'Build lean, scalable operating systems that don\'t collapse under growth. From shopfloor to boardroom — we make your operations work.',
    deliverables: ['Process mapping & SOP creation', 'KPI design and dashboards', 'Lean manufacturing implementation', 'Quality systems', 'Vendor & procurement optimisation'],
    outcome: 'Average 22% reduction in operating costs.',
  },
  {
    icon: Globe,
    label: 'Export & Trade Consulting',
    slug: 'export-trade',
    short: 'Exports',
    desc: 'Navigate global markets, international compliance, buyer relationships, and logistics with a partner who has done it before — in your sector.',
    deliverables: ['Market selection & prioritisation', 'Buyer development strategy', 'Export documentation & compliance', 'Pricing architecture', 'Trade finance advisory'],
    outcome: 'Average 3.2× export revenue in 24 months.',
  },
  {
    icon: BarChart3,
    label: 'Financial Strategy & CFO Services',
    slug: 'financial-strategy',
    short: 'Finance',
    desc: 'CFO-grade financial intelligence without the full-time CFO cost. Build visibility, control, and strategic decision-making capability into your finance function.',
    deliverables: ['MIS design & financial dashboards', 'Working capital optimisation', 'Fundraising readiness', 'Budgeting & forecasting systems', 'Part-time CFO support'],
    outcome: '35% average improvement in working capital efficiency.',
  },
  {
    icon: Target,
    label: 'Market Entry & Expansion',
    slug: 'market-entry',
    short: 'Market Entry',
    desc: 'Enter new geographies, customer segments, or product categories with structured, evidence-based strategy — and a partner to execute it.',
    deliverables: ['Market sizing & opportunity assessment', 'Competitive mapping', 'Channel strategy & partner selection', 'Launch planning & GTM', 'First 90-day execution support'],
    outcome: '80% of market entry engagements achieve breakeven within 12 months.',
  },
  {
    icon: Zap,
    label: 'Digital Transformation',
    slug: 'digital-transformation',
    short: 'Digital',
    desc: 'Technology-led productivity and process modernisation — without the vendor complexity. We select, implement, and operationalise the right tools for your business.',
    deliverables: ['Digital readiness audit', 'ERP selection & implementation support', 'Automation identification', 'Data & reporting infrastructure', 'Change management'],
    outcome: 'Average 40% reduction in manual process hours.',
  },
  {
    icon: Users,
    label: 'HR & Organisational Design',
    slug: 'hr-org-design',
    short: 'HR & Org',
    desc: 'Build leadership teams, design organisations, and create people systems that support your ambition — not just your current size.',
    deliverables: ['Org structure design', 'Role clarity & JD development', 'Leadership hiring advisory', 'Performance management systems', 'Succession planning'],
    outcome: 'Clients report 60% improvement in leadership clarity after engagement.',
  },
  {
    icon: Package,
    label: 'Supply Chain Optimisation',
    slug: 'supply-chain',
    short: 'Supply Chain',
    desc: 'From raw material to customer delivery — we find and fix the hidden costs and vulnerabilities in your supply chain.',
    deliverables: ['Supply chain mapping & risk audit', 'Vendor rationalisation', 'Logistics cost optimisation', 'Inventory management systems', 'Multi-location coordination'],
    outcome: 'Average 18% reduction in total supply chain cost.',
  },
]

export default function Services() {
  return (
    <div>
      <div className="pt-36 pb-20 lg:pt-48 lg:pb-28" style={{ background: '#102A43' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <span className="h-px w-12" style={{ background: '#C6A15B' }} />
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#C6A15B' }}>What We Do</span>
          </div>
          <h1
            className="font-display text-5xl lg:text-7xl font-semibold text-white max-w-3xl"
            style={{ lineHeight: 1.05, letterSpacing: '-0.02em' }}
          >
            Eight disciplines.
            <br />
            <em style={{ color: '#C6A15B', fontStyle: 'normal' }}>One standard.</em>
          </h1>
          <p className="mt-8 text-lg max-w-xl" style={{ color: '#BAC7D5' }}>
            Each service is built for execution — not ideation. We stay until outcomes are real.
          </p>
        </div>
      </div>

      <section className="py-24 lg:py-32" style={{ background: '#F8FAF7' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-4">
            {SERVICES.map((s, i) => (
              <div
                key={s.slug}
                className="group border border-[#BAC7D5]/30 rounded-lg bg-white overflow-hidden"
              >
                <div className="p-8 lg:p-10">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    <div className="lg:col-span-1 flex items-start">
                      <span
                        className="font-display text-5xl font-light"
                        style={{ color: '#BAC7D5' }}
                      >
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <div className="lg:col-span-5">
                      <div className="flex items-center gap-3 mb-4">
                        <s.icon size={20} style={{ color: '#2F855A' }} />
                        <h2 className="font-display text-2xl font-semibold" style={{ color: '#1F2933' }}>
                          {s.label}
                        </h2>
                      </div>
                      <p className="text-sm leading-relaxed mb-4" style={{ color: '#1F2933' }}>
                        {s.desc}
                      </p>
                      <p className="text-xs font-semibold" style={{ color: '#2F855A' }}>
                        Result: {s.outcome}
                      </p>
                    </div>
                    <div className="lg:col-span-4">
                      <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: '#C6A15B' }}>
                        Key Deliverables
                      </p>
                      <ul className="space-y-2">
                        {s.deliverables.map((d) => (
                          <li key={d} className="flex items-start gap-2 text-sm" style={{ color: '#1F2933' }}>
                            <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: '#C6A15B' }} />
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="lg:col-span-2 flex items-center lg:justify-end">
                      <Link
                        to={`/services/${s.slug}`}
                        className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium border rounded transition-colors hover:border-[#2F855A] hover:text-[#2F855A]"
                        style={{ borderColor: '#BAC7D5', color: '#1F2933' }}
                      >
                        Learn more <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" style={{ background: '#102A43' }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: '#C6A15B' }}>Not Sure Where to Start?</p>
          <h2 className="font-display text-3xl lg:text-4xl font-semibold text-white mb-6">
            We'll diagnose before we prescribe.
          </h2>
          <Link
            to="/consultation"
            className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold text-white rounded transition-opacity hover:opacity-90"
            style={{ background: '#2F855A' }}
          >
            Book a Free Discovery Call <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  )
}
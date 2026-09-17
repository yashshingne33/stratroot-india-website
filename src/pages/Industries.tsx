import { Link } from 'react-router'
import { ArrowRight } from 'lucide-react'

const INDUSTRIES = [
  {
    label: 'Agriculture, Food Processing & FPOs',
    img: 'photo-1500937386664-56d1dfef3854',
    desc: 'Support with export readiness, product positioning, buyer communication, target-market research and channel development.',
    services: ['Export Market Development', 'Market-Ready Business Communication'],
  },
  {
    label: 'Manufacturing & Industrial Products',
    img: 'photo-1581091226825-a6a2a5aee158',
    desc: 'Opportunity assessment, commercial presentation, customer and distributor identification and structured sales pipelines.',
    services: ['Business Strategy & Commercial Advisory', 'Sales & Channel Development'],
  },
  {
    label: 'Exporters & Trading Businesses',
    img: 'photo-1586528116311-ad8dd3c8310d',
    desc: 'Product-market assessment, buyer identification, export communication, commercial processes and international business-development systems.',
    services: ['Export Market Development', 'Operations & Execution Systems'],
  },
  {
    label: 'Consumer & Educational Products',
    img: 'photo-1497633762265-9d179a990aa6',
    desc: 'Retail-channel development, institutional outreach, school and distributor strategies, positioning and sales execution.',
    services: ['Sales & Channel Development', 'Business Strategy & Commercial Advisory'],
  },
  {
    label: 'Infrastructure & Project Supplies',
    img: 'photo-1541888946425-d81bb19240f5',
    desc: 'Selected support for requirement analysis, vendor coordination, quantity and commercial planning, proposals and execution tracking.',
    services: ['Operations & Execution Systems', 'Business Strategy & Commercial Advisory'],
  },
]

export default function Industries() {
  return (
    <div>

      {/* ── Header ── */}
      <section className="pt-36 pb-20 lg:pt-48 lg:pb-24" style={{ background: 'var(--color-primary)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <span className="h-px w-12" style={{ background: 'var(--color-gold)' }} />
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: 'var(--color-gold)' }}>
              Industries
            </span>
          </div>
          <h1
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-white max-w-2xl mb-6"
            style={{ lineHeight: 1.05, letterSpacing: '-0.02em' }}
          >
            Selected Sectors
            <br />
            <em style={{ color: 'var(--color-gold)', fontStyle: 'normal' }}>We Support.</em>
          </h1>
          <p className="text-lg max-w-lg" style={{ color: 'var(--color-muted)' }}>
             Every industry has different buyers, channels, operating requirements and
            decision-making processes.
          </p>
        </div>
      </section>

      {/* ── Industries List ── */}
      <section className="py-20 lg:py-20" style={{ background: 'var(--color-surface)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-16">
            {INDUSTRIES.map((ind, i) => (
              <div
                key={ind.label}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  i % 2 === 1 ? 'lg:grid-flow-dense' : ''
                }`}
              >
                <div className={i % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div
                    className="overflow-hidden rounded-lg"
                    style={{ background: 'var(--color-border)' }}
                  >
                    <img
                      src={`https://images.unsplash.com/${ind.img}?w=800&h=500&fit=crop&auto=format`}
                      alt={ind.label}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className={i % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="h-px w-8" style={{ background: 'var(--color-gold)' }} />
                    <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: 'var(--color-gold)' }}>
                      Sector
                    </span>
                  </div>
                  <h2
                    className="font-display text-3xl lg:text-4xl font-semibold mb-4"
                    style={{ color: 'var(--color-charcoal)' }}
                  >
                    {ind.label}
                  </h2>
                  <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--color-muted)' }}>
                    {ind.desc}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {ind.services.map((s) => (
                      <span
                        key={s}
                        className="text-xs font-medium px-3 py-1.5 rounded border"
                        style={{ borderColor: 'var(--color-border)', color: 'var(--color-charcoal)', background: 'white' }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ── Selective Approach note ── */}
          <div
            className="mt-16 p-6 sm:p-8 lg:p-10 rounded-lg border text-center"
            style={{ borderColor: 'var(--color-border)', background: 'var(--color-primary)' }}
          >
            <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: 'var(--color-gold)' }}>
              A Selective Approach
            </p>
            <p className="text-sm leading-relaxed max-w-2xl mx-auto" style={{ color: 'var(--color-muted)' }}>
              We accept assignments where our capabilities can create meaningful commercial or
              operational value. Each prospective engagement is assessed before the scope and
              working model are finalised.
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20" style={{ background: 'var(--color-primary)' }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-white mb-6">
            Don't see your industry?
          </h2>
          <p className="text-sm mb-8" style={{ color: 'var(--color-muted)' }}>
            Get in touch. We assess each opportunity individually — and we're direct about
            whether we're the right fit.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold text-white rounded transition-transform hover:-translate-y-0.5"
            style={{ background: 'var(--color-accent)' }}
          >
            Discuss Your Industry <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  )
}








// import { useEffect } from 'react'
// import { Link } from 'react-router'
// import { ArrowRight, Wheat, Factory, Ship, ShoppingBag, HardHat, FlaskConical } from 'lucide-react'

// // ── Page metadata (from content brief: Industries page → Page setup) ──
// const PAGE_TITLE = 'Industries We Serve | StratRoot India'
// const PAGE_DESCRIPTION =
//   'StratRoot supports agriculture, food processing, manufacturing, exporters, consumer businesses, infrastructure suppliers and specialised sectors.'
// const CANONICAL_URL = 'https://stratroot.com/industries'

// // Related-service links per industry, as specified in the content brief's
// // design notes. Exporters/traders and specialised/regulated products
// // weren't given explicit link mappings in the brief — Export Consulting is
// // the clear content match for both (product/country selection, buyer
// // research, transaction checklists), so it's used there too.
// const INDUSTRIES = [
//   {
//     icon: Wheat,
//     title: 'Agriculture, Food Processing and FPOs',
//     description:
//       'We work with agricultural enterprises, processors, farmer producer organisations and food businesses that want to move from commodity selling towards stronger products, markets and buyer communication.',
//     requirements: [
//       'Export readiness for processed and value-added agricultural products',
//       'Product portfolio, specifications, packaging and buyer documentation',
//       'Country, importer and distributor prioritisation',
//       'Supplier, processor and contract-manufacturing coordination',
//       'Pricing, quotation, sample and enquiry systems',
//       'Export presentations, catalogues and commercial material',
//     ],
//     relatedServices: [
//       { label: 'Export Consulting', href: '/export-consulting' },
//       { label: 'Market-Ready Business Communication', href: '/services/market-ready-communication' },
//     ],
//   },
//   {
//     icon: Factory,
//     title: 'Manufacturing and Industrial Products',
//     description:
//       'Manufacturing businesses need a route to market that reflects technical specifications, production capability, buyer qualification, long sales cycles and delivery responsibility.',
//     requirements: [
//       'Market and opportunity assessment',
//       'B2B buyer, OEM, distributor and project-channel development',
//       'Technical product information and commercial proposals',
//       'Sales pipeline and key-account review systems',
//       'Vendor, procurement and operating-process improvement',
//       'Management dashboards and execution control',
//     ],
//     relatedServices: [
//       { label: 'Sales and Channel Development', href: '/services/sales-channel-development' },
//       { label: 'Operations and Execution Systems', href: '/services/operations-execution-systems' },
//       { label: 'Export Consulting', href: '/export-consulting' },
//     ],
//   },
//   {
//     icon: Ship,
//     title: 'Exporters, Traders and Sourcing Businesses',
//     description:
//       'Trading and sourcing businesses must establish credibility through product knowledge, supplier control, transparent commercial terms and disciplined buyer follow-up.',
//     requirements: [
//       'Product and country selection',
//       'Supplier qualification and information collection',
//       'Buyer profiling and outreach',
//       'Quotation, proforma invoice and transaction checklists',
//       'Payment, inspection and shipment checkpoints',
//       'Opportunity and order-progress tracking',
//     ],
//     relatedServices: [{ label: 'Export Consulting', href: '/export-consulting' }],
//   },
//   {
//     icon: ShoppingBag,
//     title: 'Consumer, Retail and Educational Products',
//     description:
//       'Consumer-facing products require clear positioning and the right combination of retail, distribution, institutional, digital and direct-sales channels.',
//     requirements: [
//       'Product positioning and customer segmentation',
//       'Distributor, retailer and reseller development',
//       'Institutional and school-channel strategy',
//       'Sales scripts, product presentations and channel material',
//       'Retail handover and sales reporting systems',
//       'Campaign and field-execution planning',
//     ],
//     relatedServices: [
//       { label: 'Sales and Channel Development', href: '/services/sales-channel-development' },
//       { label: 'Market-Ready Business Communication', href: '/services/market-ready-communication' },
//     ],
//   },
//   {
//     icon: HardHat,
//     title: 'Infrastructure and Project Supplies',
//     description:
//       'Project opportunities depend on specification compliance, costing discipline, vendor coordination, documentation and sustained follow-up with multiple stakeholders.',
//     requirements: [
//       'Project requirement and scope review',
//       'Vendor and quotation comparison',
//       'Costing, markup and commercial proposal development',
//       'Technical presentation and concept-note preparation',
//       'Procurement and execution trackers',
//       'Stakeholder and milestone coordination',
//     ],
//     relatedServices: [
//       { label: 'Business Strategy and Commercial Advisory', href: '/services/business-strategy-advisory' },
//       { label: 'Operations and Execution Systems', href: '/services/operations-execution-systems' },
//     ],
//   },
//   {
//     icon: FlaskConical,
//     title: 'Specialised and Regulated Products',
//     description:
//       'Certain products require a more controlled approach because buyer eligibility, destination rules, product claims, documentation and permitted marketing channels may be restricted.',
//     requirements: [
//       'Market-access and counterparty screening',
//       'Product and documentation gap assessment',
//       'Restricted-channel and compliance-aware buyer research',
//       'Controlled commercial communication',
//       'Transaction and responsibility checklists',
//       'Coordination with authorised legal, regulatory, customs and logistics professionals',
//     ],
//     complianceNote:
//       'StratRoot accepts assignments only for lawful products and permitted transactions. Regulatory, legal and customs conclusions must be confirmed by qualified professionals in the relevant jurisdiction.',
//     relatedServices: [{ label: 'Export Consulting', href: '/export-consulting' }],
//   },
// ]

// export default function Industries() {
//   useEffect(() => {
//     document.title = PAGE_TITLE

//     let meta = document.querySelector('meta[name="description"]')
//     if (!meta) {
//       meta = document.createElement('meta')
//       meta.setAttribute('name', 'description')
//       document.head.appendChild(meta)
//     }
//     meta.setAttribute('content', PAGE_DESCRIPTION)

//     let canonical = document.querySelector('link[rel="canonical"]')
//     if (!canonical) {
//       canonical = document.createElement('link')
//       canonical.setAttribute('rel', 'canonical')
//       document.head.appendChild(canonical)
//     }
//     canonical.setAttribute('href', CANONICAL_URL)
//   }, [])

//   return (
//     <div>
//       {/* ── Hero ── */}
//       <section className="pt-36 pb-20 lg:pt-48 lg:pb-24" style={{ background: 'var(--color-primary)' }}>
//         <div className="max-w-7xl mx-auto px-6 lg:px-8">
//           <div className="flex items-center gap-3 mb-8">
//             <span className="h-px w-12" style={{ background: 'var(--color-gold)' }} />
//             <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: 'var(--color-gold)' }}>
//               Industries
//             </span>
//           </div>
//           <h1
//             className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-white max-w-3xl mb-6"
//             style={{ lineHeight: 1.05, letterSpacing: '-0.02em' }}
//           >
//             Commercial Strategy Must Fit the Industry.
//           </h1>
//           <p className="text-lg max-w-xl" style={{ color: 'var(--color-muted)' }}>
//             Products move through different buyers, channels, approval systems and operating
//             constraints. StratRoot adapts the assignment to the sector, product economics, buying
//             process, compliance environment and execution capacity involved.
//           </p>
//         </div>
//       </section>

//       {/* ── Industries ── */}
//       <section className="py-20 lg:py-24" style={{ background: 'var(--color-surface)' }}>
//         <div className="max-w-7xl mx-auto px-6 lg:px-8">
//           <div className="space-y-4">
//             {INDUSTRIES.map((ind) => (
//               <div key={ind.title} className="border rounded-lg bg-white overflow-hidden" style={{ borderColor: 'var(--color-border)' }}>
//                 <div className="p-6 sm:p-8 lg:p-10">
//                   <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
//                     <div className="lg:col-span-5">
//                       <div className="flex items-center gap-3 mb-4">
//                         <ind.icon size={20} style={{ color: 'var(--color-accent)' }} />
//                         <h2 className="font-display text-xl sm:text-2xl font-semibold" style={{ color: 'var(--color-charcoal)' }}>
//                           {ind.title}
//                         </h2>
//                       </div>
//                       <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)' }}>
//                         {ind.description}
//                       </p>
//                     </div>

//                     <div className="lg:col-span-7">
//                       <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: 'var(--color-gold)' }}>
//                         Common Requirements
//                       </p>
//                       <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 mb-6">
//                         {ind.requirements.map((r) => (
//                           <li key={r} className="flex items-start gap-2 text-sm" style={{ color: 'var(--color-charcoal)' }}>
//                             <span
//                               className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0"
//                               style={{ background: 'var(--color-gold)' }}
//                             />
//                             {r}
//                           </li>
//                         ))}
//                       </ul>

//                       {ind.complianceNote && (
//                         <div
//                           className="mb-6 p-4 rounded-lg border text-xs leading-relaxed"
//                           style={{ borderColor: 'var(--color-border)', background: 'var(--color-surface)', color: 'var(--color-charcoal)' }}
//                         >
//                           {ind.complianceNote}
//                         </div>
//                       )}

//                       <div className="flex flex-wrap items-center gap-3">
//                         <span className="text-xs font-semibold tracking-wide uppercase" style={{ color: 'var(--color-charcoal)' }}>
//                           Related:
//                         </span>
//                         {ind.relatedServices.map((s) => (
//                           <Link
//                             key={s.href}
//                             to={s.href}
//                             className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full border transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
//                             style={{ borderColor: 'var(--color-border)', color: 'var(--color-charcoal)' }}
//                           >
//                             {s.label} <ArrowRight size={12} />
//                           </Link>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ── How We Assess Fit ── */}
//       <section className="py-20 lg:py-24" style={{ background: 'var(--color-primary)' }}>
//         <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
//           <div className="flex items-center justify-center gap-3 mb-8">
//             <span className="h-px w-12" style={{ background: 'var(--color-gold)' }} />
//             <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: 'var(--color-gold)' }}>
//               Engagement Fit
//             </span>
//             <span className="h-px w-12" style={{ background: 'var(--color-gold)' }} />
//           </div>
//           <h2
//             className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mb-8"
//             style={{ lineHeight: 1.25 }}
//           >
//             We Assess the Product, Opportunity and Capacity to Execute.
//           </h2>
//           <p className="text-sm sm:text-base leading-relaxed max-w-2xl mx-auto" style={{ color: '#D1D5DB' }}>
//             Before proposing an engagement, StratRoot reviews the commercial objective, available
//             information, management commitment, internal ownership, practical budget, compliance
//             considerations and the result expected from the assignment.
//           </p>
//         </div>
//       </section>

//       {/* ── Final CTA ── */}
//       <section className="py-20 lg:py-24" style={{ background: 'var(--color-surface)' }}>
//         <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
//           <h2
//             className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6"
//             style={{ color: 'var(--color-charcoal)', lineHeight: 1.15 }}
//           >
//             Tell Us About the Product and Market You Are Working On.
//           </h2>
//           <p className="text-sm sm:text-base max-w-xl mx-auto mb-8" style={{ color: 'var(--color-muted)' }}>
//             Share your industry, current stage, target customer and immediate requirement. We will
//             review whether StratRoot's experience and working method fit the assignment.
//           </p>
//           <Link
//             to="/contact"
//             className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold text-white rounded transition-transform hover:-translate-y-0.5"
//             style={{ background: 'var(--color-accent)' }}
//           >
//             Discuss Your Requirement <ArrowRight size={16} />
//           </Link>
//         </div>
//       </section>
//     </div>
//   )
// }
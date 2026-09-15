// import { Link } from 'react-router'
// import { Globe, Users, BarChart3, Settings, MessageSquare, ArrowRight } from 'lucide-react'

// const SERVICES = [
//   {
//     icon: Globe,
//     label: 'Export Market Development',
//     slug: 'export-market-development',
//     tagline: 'Prepare Your Business for the Right International Markets',
//     desc: 'We help businesses evaluate export opportunities, improve market readiness and develop a focused route to international buyers.',
//     deliverables: [
//       'Export-readiness assessment',
//       'Product and market suitability analysis',
//       'Priority-country shortlisting',
//       'Competitor and pricing research',
//       'Importer, distributor and buyer profiling',
//       'Export-ready company and product presentations',
//       'Buyer communication and outreach planning',
//       'Enquiry qualification and negotiation support',
//       'Export process and documentation coordination',
//       'Order-progress and follow-up systems',
//     ],
//     suitableFor: 'Manufacturers, FPOs, processors, merchant exporters and businesses entering exports for the first time.',
//   },
//   {
//     icon: Users,
//     label: 'Export Sales & Channel Development',
//     slug: 'export-sales-channel-development',
//     tagline: 'Build a More Structured Route to Customers',
//     desc: 'StratRoot helps businesses develop practical sales systems and identify appropriate domestic or international channels.',
//     deliverables: [
//       'Sales and go-to-market strategy',
//       'Target-customer profiling',
//       'Distributor and channel-partner development',
//       'Institutional and corporate sales',
//       'Retail and reseller expansion',
//       'Lead qualification processes',
//       'Sales scripts and communication formats',
//       'CRM and pipeline structures',
//       'Performance trackers and management reviews',
//       'Sales-team coordination support',
//     ],
//     suitableFor: null,
//   },
//   {
//     icon: BarChart3,
//     label: 'Business Strategy & Commercial Advisory',
//     slug: 'business-strategy-advisory',
//     tagline: 'Make Better Commercial Decisions',
//     desc: 'We support management teams in evaluating business opportunities and developing clear execution priorities.',
//     deliverables: [
//       'Business and opportunity assessment',
//       'Market feasibility studies',
//       'Competitor analysis',
//       'Product and service positioning',
//       'Pricing and commercial models',
//       'Partnership and channel strategy',
//       'Business proposals and engagement structures',
//       'New-project planning',
//       'Thirty-, sixty- and ninety-day execution roadmaps',
//       'Management-review frameworks',
//     ],
//     suitableFor: null,
//   },
//   {
//     icon: Settings,
//     label: 'Operations & Execution Systems',
//     slug: 'operations-execution-systems',
//     tagline: 'Improve Visibility, Accountability and Control',
//     desc: 'We develop practical working systems that help management teams monitor execution and improve day-to-day performance.',
//     deliverables: [
//       'Process and workflow mapping',
//       'Roles and responsibility structures',
//       'Standard operating procedures',
//       'Daily, weekly and monthly reporting formats',
//       'Management dashboards',
//       'Task and project trackers',
//       'Vendor and procurement coordination',
//       'Review-meeting structures',
//       'Performance checkpoints',
//       'Implementation monitoring',
//     ],
//     suitableFor: null,
//   },
//   {
//     icon: MessageSquare,
//     label: 'Market-Ready Business Communication',
//     slug: 'market-ready-communication',
//     tagline: 'Present Your Business with Greater Credibility',
//     desc: 'Strong products and capabilities must be supported by clear, professional communication.',
//     deliverables: [
//       'Company profiles',
//       'Product catalogues and portfolios',
//       'International buyer presentations',
//       'Commercial proposals',
//       'Product information sheets',
//       'Website structure and content',
//       'Email outreach formats',
//       'Sales kits and distributor material',
//       'Tender and project presentations',
//       'Buyer-specific business documentation',
//     ],
//     suitableFor: null,
//   },
// ]

// export default function Services() {
//   return (
//     <div>

//       {/* ── Header ── */}
//       <section className="pt-36 pb-20 lg:pt-48 lg:pb-24" style={{ background: 'var(--color-primary)' }}>
//         <div className="max-w-7xl mx-auto px-6 lg:px-8">
//           <div className="flex items-center gap-3 mb-8">
//             <span className="h-px w-12" style={{ background: 'var(--color-gold)' }} />
//             <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: 'var(--color-gold)' }}>
//                What We Do
//             </span>
//           </div>
//           <h1
//             className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-white max-w-3xl mb-6"
//             style={{ lineHeight: 1.05, letterSpacing: '-0.02em' }}
//           >
//             Consulting Designed to
//             <br />
//             <em style={{ color: 'var(--color-gold)', fontStyle: 'normal' }}>Move Businesses Forward.</em>
//           </h1>
//           <p className="text-lg max-w-lg" style={{ color: 'var(--color-muted)' }}>
//              Our services combine market understanding, commercial planning and structured
//             execution.
//           </p>
//         </div>
//       </section>

//       {/* ── Services List ── */}
//       <section className="py-20 lg:py-20" style={{ background: 'var(--color-surface)' }}>
//         <div className="max-w-7xl mx-auto px-6 lg:px-8">
//           <div className="space-y-4">
//             {SERVICES.map((s, i) => (
//               <div
//                 key={s.slug}
//                 className="group border rounded-lg bg-white overflow-hidden"
//                 style={{ borderColor: 'var(--color-border)' }}
//               >
//                 <div className="p-6 sm:p-8 lg:p-10">
//                   <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
//                     <div className="lg:col-span-1 flex items-start">
//                       <span
//                         className="font-display text-5xl font-light"
//                         style={{ color: 'var(--color-border)' }}
//                       >
//                         {String(i + 1).padStart(2, '0')}
//                       </span>
//                     </div>

//                     <div className="lg:col-span-5">
//                       <div className="flex items-center gap-3 mb-4">
//                         <s.icon size={20} style={{ color: 'var(--color-accent)' }} />
//                         <h2 className="font-display text-2xl font-semibold" style={{ color: 'var(--color-charcoal)' }}>
//                           {s.label}
//                         </h2>
//                       </div>
//                       <p className="text-xs font-semibold tracking-wide uppercase mb-3" style={{ color: 'var(--color-gold)' }}>
//                         {s.tagline}
//                       </p>
//                       <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--color-muted)' }}>
//                         {s.desc}
//                       </p>
//                       {s.suitableFor && (
//                         <p className="text-xs" style={{ color: 'var(--color-charcoal)' }}>
//                           <span className="font-semibold">Suitable for:</span> {s.suitableFor}
//                         </p>
//                       )}
//                     </div>

//                     <div className="lg:col-span-4">
//                       <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: 'var(--color-gold)' }}>
//                         What This Covers
//                       </p>
//                       <ul className="space-y-2">
//                         {s.deliverables.slice(0, 6).map((d) => (
//                           <li key={d} className="flex items-start gap-2 text-sm" style={{ color: 'var(--color-charcoal)' }}>
//                             <span
//                               className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0"
//                               style={{ background: 'var(--color-gold)' }}
//                             />
//                             {d}
//                           </li>
//                         ))}
//                       </ul>
//                     </div>

//                     <div className="lg:col-span-2 flex items-center lg:justify-end">
//                       <Link
//                         to={`/services/${s.slug}`}
//                         className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium border rounded transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
//                         style={{ borderColor: 'var(--color-border)', color: 'var(--color-charcoal)' }}
//                       >
//                         Learn more <ArrowRight size={14} />
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* ── Custom Strategic Engagements ── */}
//           <div
//             className="mt-10 p-6 sm:p-8 lg:p-12 rounded-lg border text-center"
//             style={{ borderColor: 'var(--color-border)', background: 'var(--color-primary)' }}
//           >
//             <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: 'var(--color-gold)' }}>
//               Custom Strategic Engagements
//             </p>
//             <p className="text-sm leading-relaxed max-w-2xl mx-auto mb-8" style={{ color: 'var(--color-muted)' }}>
//               Certain assignments require a combination of market research, commercial planning,
//               stakeholder coordination and execution management. StratRoot undertakes selected
//               custom engagements where the scope, responsibilities, commercial structure and
//               expected outcomes can be clearly defined.
//             </p>
//             <Link
//               to="/contact"
//               className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-white rounded transition-transform hover:-translate-y-0.5"
//               style={{ background: 'var(--color-accent)' }}
//             >
//               Discuss a Custom Engagement <ArrowRight size={16} />
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* ── CTA ── */}
//       <section className="py-20" style={{ background: 'var(--color-primary)' }}>
//         <div className="max-w-3xl mx-auto px-6 text-center">
//           <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: 'var(--color-gold)' }}>
//             Not Sure Where to Start?
//           </p>
//           <h2 className="font-display text-3xl lg:text-4xl font-semibold text-white mb-8">
//             Let's examine the opportunity together.
//           </h2>
//           <Link
//             to="/contact"
//             className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold text-white rounded transition-transform hover:-translate-y-0.5"
//             style={{ background: 'var(--color-accent)' }}
//           >
//             Start a Conversation <ArrowRight size={16} />
//           </Link>
//         </div>
//       </section>
//     </div>
//   )
// }







import { useEffect } from 'react'
import { Link } from 'react-router'
import { Globe, Users, BarChart3, Settings, MessageSquare, ArrowRight, Search, ClipboardList, Repeat, Layers } from 'lucide-react'

// ── Page metadata (from content brief: Services page → Page setup) ──
const PAGE_TITLE = 'Business Consulting Services | StratRoot India'
const PAGE_DESCRIPTION =
  'Explore StratRoot services in export consulting, sales development, business strategy, operations, execution systems and commercial communication.'

// Note: Export Consulting is a dedicated top-level page at /export-consulting
// per the content brief's site structure (not nested under /services). The
// two legacy service pages it replaces — export-market-development and
// export-sales-channel-development — should redirect there; see the note
// at the bottom of ServiceDetail.jsx.
const SERVICES = [
  {
    icon: Globe,
    label: 'Export Consulting',
    slug: 'export-consulting',
    href: '/export-consulting',
    linkLabel: 'Explore Export Consulting',
    promise:
      'Prepare the business for suitable international markets and build a disciplined route to buyer development.',
    typicalWork: [
      'Export readiness and product suitability assessment',
      'Priority market and country selection',
      'Competitor, buyer and pricing research',
      'Importer, distributor and institutional buyer profiling',
      'Export-ready company, product and technical communication',
      'Outreach planning, enquiry qualification and follow-up systems',
      'Coordination support for documentation and order progress',
    ],
    typicalOutputs:
      'Export readiness report, priority market matrix, target buyer profile, verified prospect tracker, buyer communication kit, follow-up dashboard and ninety-day market-development plan.',
  },
  {
    icon: Users,
    label: 'Sales and Channel Development',
    slug: 'sales-channel-development',
    promise:
      'Build a more organised route to customers across direct sales, distributors, institutions, retailers and strategic partners.',
    typicalWork: [
      'Go-to-market and target-customer strategy',
      'Distributor and channel-partner development',
      'Institutional, corporate and project sales support',
      'Retail and reseller expansion',
      'Lead qualification and sales communication',
      'CRM, pipeline, activity and review systems',
      'Sales-team coordination and management reporting',
    ],
    typicalOutputs:
      'Customer segmentation, channel map, prospect list, outreach scripts, pipeline stages, follow-up cadence, sales dashboard and management review format.',
  },
  {
    icon: BarChart3,
    label: 'Business Strategy and Commercial Advisory',
    slug: 'business-strategy-advisory',
    promise:
      'Give management a clearer basis for evaluating opportunities, choosing priorities and committing resources.',
    typicalWork: [
      'Business and opportunity assessment',
      'Market feasibility and competitor analysis',
      'Product, service and company positioning',
      'Pricing and commercial model development',
      'Partnership and channel strategy',
      'Business proposals and engagement structures',
      'Thirty, sixty and ninety-day execution roadmaps',
    ],
    typicalOutputs:
      'Opportunity assessment, decision matrix, competitor benchmark, positioning statement, commercial structure, risk register and phased action plan.',
  },
  {
    icon: Settings,
    label: 'Operations and Execution Systems',
    slug: 'operations-execution-systems',
    promise: 'Improve management visibility, accountability and control over the work that drives performance.',
    typicalWork: [
      'Process and workflow mapping',
      'Roles, responsibilities and approval structures',
      'Standard operating procedures',
      'Daily, weekly and monthly reporting formats',
      'Management dashboards and project trackers',
      'Vendor, procurement and stakeholder coordination',
      'Review-meeting structures and implementation monitoring',
    ],
    typicalOutputs:
      'Process map, responsibility matrix, standard operating procedures, task tracker, management dashboard, review agenda and exception-reporting format.',
  },
  {
    icon: MessageSquare,
    label: 'Market-Ready Business Communication',
    slug: 'market-ready-communication',
    promise:
      'Present the business, product and commercial offer with the clarity expected by serious buyers, partners and decision-makers.',
    typicalWork: [
      'Company profiles and product portfolios',
      'International buyer presentations',
      'Commercial proposals and product information sheets',
      'Website structure and content',
      'Email outreach and sales communication formats',
      'Distributor, tender and project presentations',
      'Buyer-specific commercial documentation',
    ],
    typicalOutputs:
      'Editable company profile, product catalogue, presentation deck, proposal template, information sheet, outreach email set and website content brief.',
  },
]

const ENGAGEMENT_FORMATS = [
  {
    icon: Search,
    title: 'Diagnostic Assignment',
    body: 'A focused review of the business question, current position, constraints and recommended priorities.',
  },
  {
    icon: ClipboardList,
    title: 'Defined Project',
    body: 'A time-bound assignment with agreed outputs, responsibilities and review milestones.',
  },
  {
    icon: Repeat,
    title: 'Monthly Advisory and Execution Support',
    body: 'Ongoing management support for market development, sales coordination, operations or a combined growth plan.',
  },
  {
    icon: Layers,
    title: 'Custom Strategic Engagement',
    body: 'A tailored assignment involving research, commercial planning, stakeholder coordination and implementation oversight.',
  },
]

export default function Services() {
  useEffect(() => {
    document.title = PAGE_TITLE
    let meta = document.querySelector('meta[name="description"]')
    if (!meta) {
      meta = document.createElement('meta')
      meta.setAttribute('name', 'description')
      document.head.appendChild(meta)
    }
    meta.setAttribute('content', PAGE_DESCRIPTION)
  }, [])

  return (
    <div>

      {/* ── Header ── */}
      <section className="pt-36 pb-20 lg:pt-48 lg:pb-24" style={{ background: 'var(--color-primary)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <span className="h-px w-12" style={{ background: 'var(--color-gold)' }} />
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: 'var(--color-gold)' }}>
              Services
            </span>
          </div>
          <h1
            className="font-display text-2xl sm:text-3xl lg:text-5xl font-semibold text-white max-w-4xl mb-6"
            style={{ lineHeight: 1.1, letterSpacing: '-0.02em' }}
          >
            Consulting Designed to Improve{' '}
            <em style={{ color: '#2F855A', fontStyle: 'normal' }}>
              Commercial Decisions and Execution.
            </em>
          </h1>
          <p className="text-lg max-w-lg" style={{ color: 'var(--color-muted)' }}>
            StratRoot supports businesses at the points where market opportunity, commercial
            preparation and internal execution must work together. Engagements may focus on one
            defined requirement or combine several capabilities under a structured plan.
          </p>
        </div>
      </section>

      {/* ── Services List ── */}
      <section className="py-20 lg:py-24" style={{ background: 'var(--color-surface)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-4">
            {SERVICES.map((s, i) => (
              <div
                key={s.slug}
                className="group border rounded-lg bg-white overflow-hidden"
                style={{ borderColor: 'var(--color-border)' }}
              >
                <div className="p-6 sm:p-8 lg:p-10">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    <div className="lg:col-span-1 flex items-start">
                      <span className="font-display text-5xl font-light" style={{ color: 'var(--color-border)' }}>
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>

                    <div className="lg:col-span-5">
                      <div className="flex items-center gap-3 mb-4">
                        <s.icon size={20} style={{ color: 'var(--color-accent)' }} />
                        <h2 className="font-display text-2xl font-semibold" style={{ color: 'var(--color-charcoal)' }}>
                          {s.label}
                        </h2>
                      </div>
                      <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--color-muted)' }}>
                        {s.promise}
                      </p>
                      <p className="text-xs leading-relaxed" style={{ color: 'var(--color-charcoal)' }}>
                        <span className="font-semibold">Typical outputs: </span>
                        {s.typicalOutputs}
                      </p>
                    </div>

                    <div className="lg:col-span-4">
                      <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: 'var(--color-gold)' }}>
                        Typical Work
                      </p>
                      <ul className="space-y-2">
                        {s.typicalWork.map((d) => (
                          <li key={d} className="flex items-start gap-2 text-sm" style={{ color: 'var(--color-charcoal)' }}>
                            <span
                              className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0"
                              style={{ background: 'var(--color-gold)' }}
                            />
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="lg:col-span-2 flex items-center lg:justify-end">
                      <Link
                        to={s.href ?? `/services/${s.slug}`}
                        className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium border rounded transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                        style={{ borderColor: 'var(--color-border)', color: 'var(--color-charcoal)' }}
                      >
                        {s.linkLabel ?? 'Learn more'} <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ── Engagement Formats ── */}
          <div className="mt-16">
            <div className="max-w-xl mb-10">
              <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: 'var(--color-gold)' }}>
                How Engagements Are Structured
              </p>
              <h2 className="font-display text-3xl lg:text-4xl font-semibold" style={{ color: 'var(--color-charcoal)', lineHeight: 1.2 }}>
                A Scope Matched to the Requirement.
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {ENGAGEMENT_FORMATS.map((f) => (
                <div key={f.title} className="p-6 rounded-lg border bg-white" style={{ borderColor: 'var(--color-border)' }}>
                  <f.icon size={20} className="mb-4" style={{ color: 'var(--color-accent)' }} />
                  <h3 className="font-semibold text-sm mb-2" style={{ color: 'var(--color-charcoal)' }}>
                    {f.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)' }}>
                    {f.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 lg:py-24" style={{ background: 'var(--color-primary)' }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mb-6" style={{ lineHeight: 1.15 }}>
            Start with the Business Requirement.
          </h2>
          <p className="text-sm sm:text-base max-w-xl mx-auto mb-8" style={{ color: 'var(--color-muted)' }}>
            Tell us the objective, current position and result you need. We will identify the
            capability or combination of capabilities that best fits the assignment.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold text-white rounded transition-transform hover:-translate-y-0.5"
            style={{ background: 'var(--color-accent)' }}
          >
            Discuss Your Requirement <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  )
}
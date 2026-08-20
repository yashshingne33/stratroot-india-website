import { Link } from 'react-router'
import { Globe, Users, BarChart3, Settings, MessageSquare, ArrowRight } from 'lucide-react'

const SERVICES = [
  {
    icon: Globe,
    label: 'Export Market Development',
    slug: 'export-market-development',
    tagline: 'Prepare Your Business for the Right International Markets',
    desc: 'We help businesses evaluate export opportunities, improve market readiness and develop a focused route to international buyers.',
    deliverables: [
      'Export-readiness assessment',
      'Product and market suitability analysis',
      'Priority-country shortlisting',
      'Competitor and pricing research',
      'Importer, distributor and buyer profiling',
      'Export-ready company and product presentations',
      'Buyer communication and outreach planning',
      'Enquiry qualification and negotiation support',
      'Export process and documentation coordination',
      'Order-progress and follow-up systems',
    ],
    suitableFor: 'Manufacturers, FPOs, processors, merchant exporters and businesses entering exports for the first time.',
  },
  {
    icon: Users,
    label: 'Sales & Channel Development',
    slug: 'sales-channel-development',
    tagline: 'Build a More Structured Route to Customers',
    desc: 'StratRoot helps businesses develop practical sales systems and identify appropriate domestic or international channels.',
    deliverables: [
      'Sales and go-to-market strategy',
      'Target-customer profiling',
      'Distributor and channel-partner development',
      'Institutional and corporate sales',
      'Retail and reseller expansion',
      'Lead qualification processes',
      'Sales scripts and communication formats',
      'CRM and pipeline structures',
      'Performance trackers and management reviews',
      'Sales-team coordination support',
    ],
    suitableFor: null,
  },
  {
    icon: BarChart3,
    label: 'Business Strategy & Commercial Advisory',
    slug: 'business-strategy-advisory',
    tagline: 'Make Better Commercial Decisions',
    desc: 'We support management teams in evaluating business opportunities and developing clear execution priorities.',
    deliverables: [
      'Business and opportunity assessment',
      'Market feasibility studies',
      'Competitor analysis',
      'Product and service positioning',
      'Pricing and commercial models',
      'Partnership and channel strategy',
      'Business proposals and engagement structures',
      'New-project planning',
      'Thirty-, sixty- and ninety-day execution roadmaps',
      'Management-review frameworks',
    ],
    suitableFor: null,
  },
  {
    icon: Settings,
    label: 'Operations & Execution Systems',
    slug: 'operations-execution-systems',
    tagline: 'Improve Visibility, Accountability and Control',
    desc: 'We develop practical working systems that help management teams monitor execution and improve day-to-day performance.',
    deliverables: [
      'Process and workflow mapping',
      'Roles and responsibility structures',
      'Standard operating procedures',
      'Daily, weekly and monthly reporting formats',
      'Management dashboards',
      'Task and project trackers',
      'Vendor and procurement coordination',
      'Review-meeting structures',
      'Performance checkpoints',
      'Implementation monitoring',
    ],
    suitableFor: null,
  },
  {
    icon: MessageSquare,
    label: 'Market-Ready Business Communication',
    slug: 'market-ready-communication',
    tagline: 'Present Your Business with Greater Credibility',
    desc: 'Strong products and capabilities must be supported by clear, professional communication.',
    deliverables: [
      'Company profiles',
      'Product catalogues and portfolios',
      'International buyer presentations',
      'Commercial proposals',
      'Product information sheets',
      'Website structure and content',
      'Email outreach formats',
      'Sales kits and distributor material',
      'Tender and project presentations',
      'Buyer-specific business documentation',
    ],
    suitableFor: null,
  },
]

export default function Services() {
  return (
    <div>

      {/* ── Header ── */}
      <section className="pt-36 pb-20 lg:pt-48 lg:pb-24" style={{ background: 'var(--color-primary)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <span className="h-px w-12" style={{ background: 'var(--color-gold)' }} />
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: 'var(--color-gold)' }}>
               What We Do
            </span>
          </div>
          <h1
            className="font-display text-5xl lg:text-6xl font-semibold text-white max-w-3xl mb-6"
            style={{ lineHeight: 1.05, letterSpacing: '-0.02em' }}
          >
            Consulting Designed to
            <br />
            <em style={{ color: 'var(--color-gold)', fontStyle: 'normal' }}>Move Businesses Forward.</em>
          </h1>
          <p className="text-lg max-w-lg" style={{ color: 'var(--color-muted)' }}>
             Our services combine market understanding, commercial planning and structured
            execution.
          </p>
        </div>
      </section>

      {/* ── Services List ── */}
      <section className="py-24 lg:py-32" style={{ background: 'var(--color-surface)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-4">
            {SERVICES.map((s, i) => (
              <div
                key={s.slug}
                className="group border rounded-lg bg-white overflow-hidden"
                style={{ borderColor: 'var(--color-border)' }}
              >
                <div className="p-8 lg:p-10">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    <div className="lg:col-span-1 flex items-start">
                      <span
                        className="font-display text-5xl font-light"
                        style={{ color: 'var(--color-border)' }}
                      >
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
                      <p className="text-xs font-semibold tracking-wide uppercase mb-3" style={{ color: 'var(--color-gold)' }}>
                        {s.tagline}
                      </p>
                      <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--color-muted)' }}>
                        {s.desc}
                      </p>
                      {s.suitableFor && (
                        <p className="text-xs" style={{ color: 'var(--color-charcoal)' }}>
                          <span className="font-semibold">Suitable for:</span> {s.suitableFor}
                        </p>
                      )}
                    </div>

                    <div className="lg:col-span-4">
                      <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: 'var(--color-gold)' }}>
                        What This Covers
                      </p>
                      <ul className="space-y-2">
                        {s.deliverables.slice(0, 6).map((d) => (
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
                        to={`/services/${s.slug}`}
                        className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium border rounded transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                        style={{ borderColor: 'var(--color-border)', color: 'var(--color-charcoal)' }}
                      >
                        Learn more <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ── Custom Strategic Engagements ── */}
          <div
            className="mt-10 p-10 lg:p-12 rounded-lg border text-center"
            style={{ borderColor: 'var(--color-border)', background: 'var(--color-primary)' }}
          >
            <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: 'var(--color-gold)' }}>
              Custom Strategic Engagements
            </p>
            <p className="text-sm leading-relaxed max-w-2xl mx-auto mb-8" style={{ color: 'var(--color-muted)' }}>
              Certain assignments require a combination of market research, commercial planning,
              stakeholder coordination and execution management. StratRoot undertakes selected
              custom engagements where the scope, responsibilities, commercial structure and
              expected outcomes can be clearly defined.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-white rounded transition-transform hover:-translate-y-0.5"
              style={{ background: 'var(--color-accent)' }}
            >
              Discuss a Custom Engagement <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20" style={{ background: 'var(--color-primary)' }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: 'var(--color-gold)' }}>
            Not Sure Where to Start?
          </p>
          <h2 className="font-display text-3xl lg:text-4xl font-semibold text-white mb-8">
            Let's examine the opportunity together.
          </h2>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold text-white rounded transition-transform hover:-translate-y-0.5"
            style={{ background: 'var(--color-accent)' }}
          >
            Start a Conversation <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  )
}
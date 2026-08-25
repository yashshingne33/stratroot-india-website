import { useParams, Link } from 'react-router'
import { ArrowRight, ArrowLeft, CheckCircle } from 'lucide-react'

const SERVICE_DATA: Record<string, {
  title: string
  tagline: string
  desc: string
  deliverables: string[]
  suitableFor: string | null
}> = {
  'export-market-development': {
    title: 'Export Market Development',
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
  'sales-channel-development': {
    title: 'Sales & Channel Development',
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
  'business-strategy-advisory': {
    title: 'Business Strategy & Commercial Advisory',
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
  'operations-execution-systems': {
    title: 'Operations & Execution Systems',
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
  'market-ready-communication': {
    title: 'Market-Ready Business Communication',
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
}

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>()
  const data = slug ? SERVICE_DATA[slug] : null

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-24" style={{ background: 'var(--color-surface)' }}>
        <div className="text-center">
          <h1 className="font-display text-3xl font-semibold mb-4" style={{ color: 'var(--color-charcoal)' }}>
            Service not found
          </h1>
          <Link to="/services" className="text-sm font-medium" style={{ color: 'var(--color-accent)' }}>
            ← Back to Services
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div>
      {/* ── Page Header ── */}
      <section className="pt-36 pb-20 lg:pt-48 lg:pb-28" style={{ background: 'var(--color-primary)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-xs font-medium mb-10 transition-colors hover:text-white"
            style={{ color: 'var(--color-muted)' }}
          >
            <ArrowLeft size={14} /> All Services
          </Link>
          <div className="max-w-3xl">
            <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: 'var(--color-gold)' }}>
              {data.tagline}
            </p>
            <h1
              className="font-display text-5xl lg:text-6xl font-semibold text-white"
              style={{ lineHeight: 1.05, letterSpacing: '-0.02em' }}
            >
              {data.title}
            </h1>
            <p className="mt-6 text-lg" style={{ color: 'var(--color-muted)' }}>{data.desc}</p>
          </div>
        </div>
      </section>

      {/* ── Detail ── */}
      <section className="py-20 lg:py-20" style={{ background: 'var(--color-surface)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            <div className="lg:col-span-3">
              <h2 className="font-display text-3xl font-semibold mb-8" style={{ color: 'var(--color-charcoal)' }}>
                What This Covers
              </h2>
              <ul className="space-y-4">
                {data.deliverables.map((d) => (
                  <li key={d} className="flex items-start gap-3">
                    <CheckCircle size={16} className="flex-shrink-0 mt-0.5" style={{ color: 'var(--color-accent)' }} />
                    <span className="text-sm" style={{ color: 'var(--color-charcoal)' }}>{d}</span>
                  </li>
                ))}
              </ul>

              {data.suitableFor && (
                <div
                  className="mt-10 p-6 rounded-lg border"
                  style={{ borderColor: 'var(--color-border)', background: 'white' }}
                >
                  <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: 'var(--color-gold)' }}>
                    Suitable For
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--color-charcoal)' }}>
                    {data.suitableFor}
                  </p>
                </div>
              )}
            </div>

            <div className="lg:col-span-2">
              <div
                className="p-8 rounded-lg border sticky top-24"
                style={{ borderColor: 'var(--color-border)', background: 'var(--color-primary)' }}
              >
                <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: 'var(--color-gold)' }}>
                  Have a Requirement Like This?
                </p>
                <p className="text-sm leading-relaxed mb-8" style={{ color: 'var(--color-muted)' }}>
                  Tell us about your business, current challenge and the outcome you're seeking.
                  We'll review the requirement and determine whether StratRoot is the right
                  partner for the assignment.
                </p>
                <Link
                  to="/contact"
                  className="block w-full text-center px-8 py-4 text-sm font-semibold text-white rounded transition-transform hover:-translate-y-0.5"
                  style={{ background: 'var(--color-accent)' }}
                >
                  Discuss This Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
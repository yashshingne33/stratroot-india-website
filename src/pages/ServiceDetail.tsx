import { useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router'
import { ArrowRight, ArrowLeft, CheckCircle } from 'lucide-react'

const SERVICE_DATA: Record<string, {
  title: string
  promise: string
  typicalWork: string[]
  typicalOutputs: string
  suitableFor: string | null
}> = {
  'sales-channel-development': {
    title: 'Sales and Channel Development',
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
    suitableFor: null,
  },
  'business-strategy-advisory': {
    title: 'Business Strategy and Commercial Advisory',
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
    suitableFor: null,
  },
  'operations-execution-systems': {
    title: 'Operations and Execution Systems',
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
    suitableFor: null,
  },
  'market-ready-communication': {
    title: 'Market-Ready Business Communication',
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
    suitableFor: null,
  },
}

// The old Export Market Development and Export Sales & Channel Development
// pages are consolidated into one dedicated Export Consulting page at the
// top-level route /export-consulting (see content brief: Site structure →
// Recommended URLs, and Live website audit → Export service pages audit).
// This sends anyone who still lands on the old slugs there instead of a
// dead "service not found" page.
const LEGACY_EXPORT_REDIRECTS: Record<string, string> = {
  'export-market-development': '/export-consulting',
  'export-sales-channel-development': '/export-consulting',
}

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>()
  const navigate = useNavigate()

  const redirectTarget = slug ? LEGACY_EXPORT_REDIRECTS[slug] : undefined

  useEffect(() => {
    if (redirectTarget) {
      navigate(redirectTarget, { replace: true })
    }
  }, [redirectTarget, navigate])

  const data = slug ? SERVICE_DATA[slug] : null

  // Hooks must run unconditionally on every render, so this effect is
  // declared before any early return — it simply no-ops while redirecting
  // or when the slug doesn't match a known service.
  useEffect(() => {
    if (data) {
      document.title = `${data.title} | StratRoot India`
    }
  }, [data])

  if (redirectTarget) {
    // Redirecting — render nothing while navigate() takes effect.
    return null
  }

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
            <h1
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-white"
              style={{ lineHeight: 1.05, letterSpacing: '-0.02em' }}
            >
              {data.title}
            </h1>
            <p className="mt-6 text-lg" style={{ color: 'var(--color-muted)' }}>{data.promise}</p>
          </div>
        </div>
      </section>

      {/* ── Detail ── */}
      <section className="py-20 lg:py-24" style={{ background: 'var(--color-surface)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            <div className="lg:col-span-3">
              <h2 className="font-display text-3xl font-semibold mb-8" style={{ color: 'var(--color-charcoal)' }}>
                Typical Work
              </h2>
              <ul className="space-y-4">
                {data.typicalWork.map((d) => (
                  <li key={d} className="flex items-start gap-3">
                    <CheckCircle size={16} className="flex-shrink-0 mt-0.5" style={{ color: 'var(--color-accent)' }} />
                    <span className="text-sm" style={{ color: 'var(--color-charcoal)' }}>{d}</span>
                  </li>
                ))}
              </ul>

              <div
                className="mt-10 p-6 rounded-lg border"
                style={{ borderColor: 'var(--color-border)', background: 'white' }}
              >
                <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: 'var(--color-gold)' }}>
                  Typical Outputs
                </p>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-charcoal)' }}>
                  {data.typicalOutputs}
                </p>
              </div>

              {data.suitableFor && (
                <div
                  className="mt-6 p-6 rounded-lg border"
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
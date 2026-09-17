import { useEffect } from 'react'
import { Link } from 'react-router'
import {
  ArrowRight,
  Rocket,
  Factory,
  Sprout,
  Target,
  RefreshCw,
  ClipboardCheck,
  MapPin,
  FileText,
  Users,
  Send,
  PackageCheck,
  CheckCircle,
} from 'lucide-react'

// ── Page metadata (from content brief: Export Consulting page → Page setup) ──
const PAGE_TITLE = 'Export Consulting India | Market and Buyer Development'
const PAGE_DESCRIPTION =
  'Export consulting for Indian manufacturers, FPOs and traders covering readiness, market selection, buyer profiling, outreach and enquiry support.'
const CANONICAL_URL = 'https://stratroot.com/export-consulting'

const WHO_FOR = [
  {
    icon: Rocket,
    body: 'First-time exporters that need a realistic readiness and market-entry plan.',
  },
  {
    icon: Factory,
    body: 'Manufacturers and processors seeking additional countries or buyer segments.',
  },
  {
    icon: Sprout,
    body: 'FPOs and agricultural enterprises preparing processed or value-added products.',
  },
  {
    icon: Target,
    body: 'Merchant exporters that need stronger product positioning and buyer qualification.',
  },
  {
    icon: RefreshCw,
    body: 'Businesses with enquiries but weak follow-up, documentation or internal coordination.',
  },
]

const WORKSTREAMS = [
  {
    icon: ClipboardCheck,
    title: 'Export Readiness and Product Assessment',
    listLabel: 'What We Examine',
    items: [
      'Product specifications, variants, packaging and shelf life',
      'Production or sourcing capacity and consistency',
      'Quality systems, certificates and test reports',
      'Indicative cost, pricing and commercial flexibility',
      'Current export documentation and internal ownership',
      'Logistics, payment and risk considerations',
    ],
    outputLabel: 'Output',
    output:
      'A readiness report that separates immediate actions, missing information and longer-term capability requirements.',
  },
  {
    icon: MapPin,
    title: 'Market Selection and Commercial Intelligence',
    listLabel: 'What We Do',
    items: [
      'Compare demand, competition, access conditions and buyer structure',
      'Shortlist priority countries and buyer segments',
      'Study competitor products, pack formats, positioning and price levels',
      'Identify relevant compliance, labelling and documentation requirements for validation',
      'Assess route-to-market options such as importer, distributor, private label, institution or direct B2B supply',
    ],
    outputLabel: 'Output',
    output:
      'A priority-market matrix with reasons, risks, target customer types and recommended next actions.',
  },
  {
    icon: FileText,
    title: 'Export Positioning and Buyer-Facing Preparation',
    listLabel: 'What We Prepare',
    items: [
      'Company and manufacturing profile',
      'Product portfolio and specification sheets',
      'Export presentation and buyer-specific introduction',
      'Packaging, minimum order and commercial information',
      'Standard enquiry-response formats',
      'Document checklist and internal information repository',
    ],
    outputLabel: 'Output',
    output:
      'A clear, consistent export communication kit that allows qualified buyers to understand the offer and request the next information.',
  },
  {
    icon: Users,
    title: 'Buyer and Channel Profiling',
    listLabel: 'What We Do',
    items: [
      'Define the ideal importer, distributor, manufacturer, retailer or institutional buyer',
      'Research companies that match the target profile',
      'Record contact sources, relevance, geography and buyer type',
      'Prioritise prospects by fit rather than database size',
      'Maintain a prospect tracker with status, response and next action',
    ],
    outputLabel: 'Output',
    output:
      'A prioritised and reviewable prospect pipeline. Contact details are verified to the extent reasonably possible from available sources; they are not represented as guaranteed purchase contacts.',
  },
  {
    icon: Send,
    title: 'Outreach, Qualification and Follow-Up',
    listLabel: 'What We Support',
    items: [
      'Buyer-specific email and introduction formats',
      'Sequenced outreach and follow-up cadence',
      'Response classification and lead qualification',
      'Requirement capture for specifications, quantity, destination, packaging, payment and timeline',
      'Meeting preparation and negotiation support',
      'Pipeline review and next-step decisions',
    ],
    outputLabel: 'Output',
    output:
      'A consistent business-development process that records evidence of progress and prevents genuine enquiries from being lost through weak follow-up.',
  },
  {
    icon: PackageCheck,
    title: 'Enquiry and Order Coordination Support',
    listLabel: 'What We Support',
    items: [
      'Internal collection of product, commercial and compliance information',
      'Quotation and proforma invoice preparation support',
      'Sample, packaging and specification coordination',
      'Export document and responsibility checklist',
      'Order-progress tracker and stakeholder follow-up',
      'Payment, inspection and shipment checkpoints for professional review',
    ],
    outputLabel: 'Boundary',
    output:
      "Statutory filings, product certification, customs clearance, freight forwarding, banking, taxation and legal advice must be completed or confirmed by the client's authorised professionals and service providers.",
  },
]

const PROCESS_PHASES = [
  { phase: '1', title: 'Diagnose', body: 'Review the product, capacity, documents, pricing logic, existing enquiries and internal readiness.' },
  { phase: '2', title: 'Select', body: 'Shortlist priority countries, buyer types and route-to-market options.' },
  { phase: '3', title: 'Prepare', body: 'Complete buyer-facing material, product information and enquiry-response formats.' },
  { phase: '4', title: 'Develop', body: 'Build and approach the qualified prospect pipeline through agreed channels.' },
  { phase: '5', title: 'Progress', body: 'Qualify responses, coordinate next information and track meetings, samples, quotations and negotiations.' },
  { phase: '6', title: 'Review', body: 'Examine market response, refine priorities and define the next commercial decision.' },
]

const DELIVERABLES = [
  'Export readiness assessment',
  'Product and market suitability matrix',
  'Priority country and buyer-segment shortlist',
  'Competitor and pricing benchmark',
  'Export company profile and product portfolio',
  'Buyer or distributor prospect tracker',
  'Outreach and follow-up communication set',
  'Enquiry qualification sheet',
  'Order-to-cash responsibility checklist',
  'Thirty, sixty and ninety-day action plan',
  'Weekly or monthly management review dashboard',
]

const CLIENT_PROVIDES = [
  'Accurate product, capacity, pricing and documentation information',
  'One authorised management contact and clear internal owners',
  'Timely decisions on samples, quotations, certifications and commercial terms',
  'Budget for testing, certification, samples, travel, freight, events and third-party services where required',
  'Approval before any binding commercial commitment is made',
]

const FAQS = [
  {
    q: 'Do you work with first-time exporters?',
    a: 'Yes. The engagement begins with readiness so that market outreach does not start before the product, information and internal responsibilities are sufficiently prepared.',
  },
  {
    q: 'Will StratRoot provide buyer contacts?',
    a: 'Buyer and channel research can form part of the assignment. Prospects are selected for relevance and tracked through a structured pipeline. A list of names is treated as research, not as proof of purchase intent.',
  },
  {
    q: 'Can StratRoot support an enquiry after the buyer responds?',
    a: 'Yes, where included in scope. Support may cover requirement clarification, meeting preparation, commercial documentation, sample coordination, negotiation inputs and order-progress tracking.',
  },
  {
    q: 'Do you handle export documentation and customs clearance?',
    a: "StratRoot can coordinate checklists and responsibilities. Filings, certifications, customs clearance, freight and statutory advice remain with authorised professionals and service providers.",
  },
]

export default function ExportConsulting() {
  useEffect(() => {
    document.title = PAGE_TITLE

    let meta = document.querySelector('meta[name="description"]')
    if (!meta) {
      meta = document.createElement('meta')
      meta.setAttribute('name', 'description')
      document.head.appendChild(meta)
    }
    meta.setAttribute('content', PAGE_DESCRIPTION)

    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', CANONICAL_URL)
  }, [])

  return (
    <div>
      {/* ── Hero ── */}
      <section className="pt-36 pb-20 lg:pt-48 lg:pb-24" style={{ background: 'var(--color-primary)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <span className="h-px w-12" style={{ background: 'var(--color-gold)' }} />
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: 'var(--color-gold)' }}>
              Export Consulting
            </span>
          </div>
          {/* <h1
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-white max-w-4xl mb-6"
            style={{ lineHeight: 1.05, letterSpacing: '-0.02em' }}
          >
            Build a Practical Route from Export Readiness to Buyer Development.
          </h1> */}
          <h1
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-white max-w-4xl mb-6"
            style={{ lineHeight: 1.05, letterSpacing: '-0.02em' }}
          >
            Build a Practical Route from 
            <br />
            <em style={{ color: '#2F855A', fontStyle: 'normal' }}>Export Readiness to Buyer Development.</em>
          </h1>
          <p className="text-lg max-w-xl mb-10" style={{ color: 'var(--color-muted)' }}>
            StratRoot helps Indian manufacturers, processors, FPOs, merchant exporters and product
            businesses evaluate international opportunities, prepare for selected markets and
            develop a structured approach to buyers, distributors and partners.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold text-white rounded transition-transform hover:-translate-y-0.5"
              style={{ background: 'var(--color-accent)' }}
            >
              Discuss Your Export Requirement <ArrowRight size={16} />
            </Link>
            <a
              href="#process"
              className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold rounded border transition-colors hover:border-white hover:text-white"
              style={{ borderColor: 'rgba(255,255,255,0.25)', color: 'var(--color-muted)' }}
            >
              Review the Export Consulting Process
            </a>
          </div>
        </div>
      </section>

      {/* ── Export Challenge ── */}
      <section className="py-20 lg:py-24" style={{ background: 'var(--color-surface)' }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: 'var(--color-gold)' }}>
            The Export Challenge
          </p>
          <h2
            className="font-display text-3xl sm:text-4xl font-semibold mb-8"
            style={{ color: 'var(--color-charcoal)', lineHeight: 1.25 }}
          >
            Buyer Lists Do Not Replace Market Preparation.
          </h2>
          <div className="space-y-5 text-sm sm:text-base leading-relaxed" style={{ color: 'var(--color-charcoal)' }}>
            <p>
              Export development requires more than collecting company names and sending generic
              emails. The product must suit the market, pricing must remain commercially workable,
              buyer-facing information must answer the right questions, and every enquiry must be
              qualified and followed through consistently.
            </p>
            <p>
              StratRoot connects these activities under one export-development plan so that
              management can see what is ready, what is missing and which opportunity deserves
              attention.
            </p>
          </div>
        </div>
      </section>

      {/* ── Who This Is For ── */}
      <section className="py-20 lg:py-24" style={{ background: 'var(--color-primary)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-xl mb-12">
            <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: 'var(--color-gold)' }}>
              Who This Is For
            </p>
            <h2 className="font-display text-3xl lg:text-4xl font-semibold text-white" style={{ lineHeight: 1.2 }}>
              Suitable for Businesses at Different Export Stages.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {WHO_FOR.map((item, i) => (
              <div
                key={i}
                className="p-6 rounded-lg border flex gap-4"
                style={{ borderColor: 'rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.05)' }}
              >
                <item.icon size={20} className="shrink-0 mt-0.5" style={{ color: 'var(--color-gold)' }} />
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)' }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Workstreams ── */}
      <section className="py-20 lg:py-24" style={{ background: 'var(--color-surface)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-xl mb-14">
            <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: 'var(--color-gold)' }}>
              How the Engagement Works
            </p>
            <h2 className="font-display text-3xl lg:text-4xl font-semibold" style={{ color: 'var(--color-charcoal)', lineHeight: 1.2 }}>
              Six Workstreams, One Export-Development Plan.
            </h2>
          </div>

          <div className="space-y-4">
            {WORKSTREAMS.map((w, i) => (
              <div key={w.title} className="border rounded-lg bg-white overflow-hidden" style={{ borderColor: 'var(--color-border)' }}>
                <div className="p-6 sm:p-8 lg:p-10">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    <div className="lg:col-span-1 flex items-start">
                      <span className="font-display text-5xl font-light" style={{ color: 'var(--color-border)' }}>
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>

                    <div className="lg:col-span-6">
                      <div className="flex items-center gap-3 mb-4">
                        <w.icon size={20} style={{ color: 'var(--color-accent)' }} />
                        <h3 className="font-display text-xl sm:text-2xl font-semibold" style={{ color: 'var(--color-charcoal)' }}>
                          {w.title}
                        </h3>
                      </div>
                      <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: 'var(--color-gold)' }}>
                        {w.listLabel}
                      </p>
                      <ul className="space-y-2">
                        {w.items.map((d) => (
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

                    <div className="lg:col-span-5">
                      <div className="p-6 rounded-lg border h-full" style={{ borderColor: 'var(--color-border)', background: 'var(--color-surface)' }}>
                        <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: 'var(--color-gold)' }}>
                          {w.outputLabel}
                        </p>
                        <p className="text-sm leading-relaxed" style={{ color: 'var(--color-charcoal)' }}>
                          {w.output}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section id="process" className="py-20 lg:py-24 scroll-mt-24" style={{ background: 'var(--color-primary)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-xl mb-14">
            <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: 'var(--color-gold)' }}>
              The Process
            </p>
            <h2 className="font-display text-3xl lg:text-4xl font-semibold text-white" style={{ lineHeight: 1.2 }}>
              A Phased Export Development Method.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROCESS_PHASES.map((p) => (
              <div
                key={p.phase}
                className="p-6 rounded-lg border"
                style={{ borderColor: 'rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.05)' }}
              >
                <span className="font-display text-3xl font-light block mb-3" style={{ color: 'var(--color-gold)' }}>
                  {p.phase.padStart(2, '0')}
                </span>
                <h3 className="font-semibold text-base mb-2 text-white">{p.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)' }}>
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Typical Deliverables ── */}
      <section className="py-20 lg:py-24" style={{ background: 'var(--color-surface)' }}>
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: 'var(--color-gold)' }}>
            What You Can Expect
          </p>
          <h2 className="font-display text-3xl lg:text-4xl font-semibold mb-10" style={{ color: 'var(--color-charcoal)', lineHeight: 1.2 }}>
            Typical Deliverables.
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-4">
            {DELIVERABLES.map((d) => (
              <li key={d} className="flex items-start gap-3">
                <CheckCircle size={16} className="flex-shrink-0 mt-0.5" style={{ color: 'var(--color-accent)' }} />
                <span className="text-sm" style={{ color: 'var(--color-charcoal)' }}>{d}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Engagement Expectations ── */}
      <section className="py-20 lg:py-24" style={{ background: 'var(--color-primary)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div
              className="p-6 sm:p-8 lg:p-10 rounded-lg border"
              style={{ borderColor: 'rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.05)' }}
            >
              <p className="text-xs font-semibold tracking-widest uppercase mb-5" style={{ color: 'var(--color-gold)' }}>
                What the Client Must Provide
              </p>
              <ul className="space-y-3">
                {CLIENT_PROVIDES.map((c) => (
                  <li key={c} className="flex items-start gap-3">
                    <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: 'var(--color-gold)' }} />
                    <span className="text-sm leading-relaxed" style={{ color: '#D1D5DB' }}>{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="p-6 sm:p-8 lg:p-10 rounded-lg border"
              style={{ borderColor: 'rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.05)' }}
            >
              <p className="text-xs font-semibold tracking-widest uppercase mb-5" style={{ color: 'var(--color-gold)' }}>
                What StratRoot Does Not Promise
              </p>
              <p className="text-sm leading-relaxed" style={{ color: '#D1D5DB' }}>
                No responsible consultant can guarantee an export order, buyer payment or market
                approval. StratRoot commits to a defined process, professional preparation, focused
                market development, transparent reporting and commercially responsible support
                within the agreed scope.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 lg:py-24" style={{ background: 'var(--color-surface)' }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: 'var(--color-gold)' }}>
            Frequently Asked Questions
          </p>
          <h2 className="font-display text-3xl lg:text-4xl font-semibold mb-10" style={{ color: 'var(--color-charcoal)', lineHeight: 1.2 }}>
            Common Questions About Export Consulting.
          </h2>
          <div className="divide-y" style={{ borderColor: 'var(--color-border)' }}>
            {FAQS.map((f) => (
              <details key={f.q} className="group py-5" style={{ borderColor: 'var(--color-border)' }}>
                <summary
                  className="flex items-center justify-between gap-4 cursor-pointer list-none font-semibold text-sm sm:text-base"
                  style={{ color: 'var(--color-charcoal)' }}
                >
                  {f.q}
                  <span
                    className="shrink-0 text-lg font-light transition-transform group-open:rotate-45"
                    style={{ color: 'var(--color-gold)' }}
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed" style={{ color: 'var(--color-muted)' }}>
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="py-20 lg:py-24" style={{ background: 'var(--color-primary)' }}>
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mb-6"
            style={{ lineHeight: 1.15 }}
          >
            Assess the Export Opportunity Before Committing Resources.
          </h2>
          <p className="text-sm sm:text-base max-w-xl mx-auto mb-8" style={{ color: 'var(--color-muted)' }}>
            Share the product, present export stage, target market if known and the outcome you
            need. We will review the requirement and identify the most sensible starting point.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold text-white rounded transition-transform hover:-translate-y-0.5"
            style={{ background: 'var(--color-accent)' }}
          >
            Discuss Your Export Requirement <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  )
}
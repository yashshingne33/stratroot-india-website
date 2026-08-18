import { Link } from 'react-router'
import { ArrowRight } from 'lucide-react'

const CASES = [
  {
    label: 'Manufacturing · Turnaround',
    title: 'Turning Around a Loss-Making Auto Component Manufacturer',
    excerpt: 'A Pune-based auto component maker with ₹85 Cr in revenue and ₹18 Cr in annual losses. Vendor creditors circling. Key customers threatening to dual-source. The board had six months.',
    result: '₹18 Cr loss to ₹6 Cr profit in 18 months',
    metrics: [
      { n: '₹24 Cr', l: 'EBITDA improvement' },
      { n: '18 months', l: 'To profitability' },
      { n: '31%', l: 'Cost reduction' },
    ],
    slug: 'auto-component-turnaround',
    img: 'photo-1581091226825-a6a2a5aee158',
  },
  {
    label: 'Exports · Growth',
    title: 'Scaling Exports from ₹40 Cr to ₹180 Cr in 24 Months',
    excerpt: 'A Gujarat-based textile exporter with a strong domestic business but stagnant export revenue. Previous attempts to scale internationally had failed due to compliance gaps and weak buyer relationships.',
    result: '4.5× revenue growth with 3 new international markets opened',
    metrics: [
      { n: '₹140 Cr', l: 'Export revenue added' },
      { n: '3 markets', l: 'New markets opened' },
      { n: '24 months', l: 'To full scale' },
    ],
    slug: 'export-scaling',
    img: 'photo-1586528116311-ad8dd3c8310d',
  },
  {
    label: 'Family Business · Professionalisation',
    title: 'Restructuring a Third-Generation Family Business for Modern Growth',
    excerpt: 'A Mumbai-based trading and distribution business founded in 1968. Third-generation leadership was talented but conflicted. The business had stagnated at ₹120 Crore for 7 years.',
    result: 'Revenue grew from ₹120 Cr to ₹210 Cr in 3 years post-engagement',
    metrics: [
      { n: '₹90 Cr', l: 'Revenue added' },
      { n: '3 years', l: 'Transformation timeline' },
      { n: '4', l: 'Senior hires placed' },
    ],
    slug: 'family-business-restructuring',
    img: 'photo-1507003211169-0a1dd7228f2d',
  },
  {
    label: 'Engineering · Operations',
    title: 'Building an Operating System for a ₹150 Cr EPC Contractor',
    excerpt: 'A fast-growing EPC contractor in the water and infrastructure space. Revenue had grown from ₹40 Cr to ₹150 Cr in five years — but the operating infrastructure hadn\'t kept up.',
    result: '35% reduction in project cost overruns; EBITDA margin improved from 4% to 9%',
    metrics: [
      { n: '5%', l: 'EBITDA margin gain' },
      { n: '35%', l: 'Fewer cost overruns' },
      { n: '12 months', l: 'Implementation' },
    ],
    slug: 'epc-contractor-operations',
    img: 'photo-1565043589221-2e58a0f43d8b',
  },
  {
    label: 'MSME · Financial Restructuring',
    title: 'Rescuing Working Capital for a ₹28 Cr Food Processor',
    excerpt: 'A Nashik-based food processing business with strong revenue but a chronic working capital crisis. Payables were 95 days, receivables 110 days — a structural mismatch that was slowly strangling the business.',
    result: 'Working capital cycle reduced from 110 to 52 days; ₹4 Cr freed from the balance sheet',
    metrics: [
      { n: '52 days', l: 'Working capital cycle' },
      { n: '₹4 Cr', l: 'Cash freed' },
      { n: '6 months', l: 'To full impact' },
    ],
    slug: 'food-processor-working-capital',
    img: 'photo-1454165804606-c3d57bc86b40',
  },
]

export default function CaseStudies() {
  return (
    <div>
      <div className="pt-36 pb-20 lg:pt-48 lg:pb-28" style={{ background: '#102A43' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <span className="h-px w-12" style={{ background: '#C6A15B' }} />
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#C6A15B' }}>Proof of Work</span>
          </div>
          <h1
            className="font-display text-5xl lg:text-7xl font-semibold text-white max-w-3xl"
            style={{ lineHeight: 1.05, letterSpacing: '-0.02em' }}
          >
            Results, not
            <br />
            <em style={{ color: '#C6A15B' }}>recommendations.</em>
          </h1>
          <p className="mt-8 text-lg max-w-xl" style={{ color: '#BAC7D5' }}>
            Every case study represents a real engagement with real outcomes. Client names are withheld by default.
          </p>
        </div>
      </div>

      <section className="py-24 lg:py-32" style={{ background: '#F8FAF7' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-6">
            {CASES.map((c) => (
              <Link
                key={c.slug}
                to={`/case-studies/${c.slug}`}
                className="group block border border-[#BAC7D5]/40 rounded-lg bg-white hover:border-[#C6A15B] hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12">
                  <div className="lg:col-span-4" style={{ height: '280px' }}>
                    <img
                      src={`https://images.unsplash.com/${c.img}?w=600&h=400&fit=crop&auto=format`}
                      alt={c.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="lg:col-span-8 p-8 lg:p-10 flex flex-col justify-between">
                    <div>
                      <span
                        className="inline-block text-xs font-semibold tracking-widest uppercase px-2 py-1 rounded mb-4"
                        style={{ background: '#C6A15B20', color: '#C6A15B' }}
                      >
                        {c.label}
                      </span>
                      <h2 className="font-display text-2xl lg:text-3xl font-semibold mb-3" style={{ color: '#1F2933', lineHeight: 1.2 }}>
                        {c.title}
                      </h2>
                      <p className="text-sm leading-relaxed mb-6" style={{ color: '#1F2933' }}>{c.excerpt}</p>
                      <p className="text-sm font-semibold" style={{ color: '#2F855A' }}>Result: {c.result}</p>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-8 pt-6 border-t border-[#BAC7D5]/40">
                      <div className="flex gap-8 mb-4 sm:mb-0">
                        {c.metrics.map((m) => (
                          <div key={m.l}>
                            <p className="font-display text-xl font-semibold" style={{ color: '#1F2933' }}>{m.n}</p>
                            <p className="text-xs" style={{ color: '#1F2933' }}>{m.l}</p>
                          </div>
                        ))}
                      </div>
                      <div
                        className="flex items-center gap-2 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity"
                        style={{ color: '#C6A15B' }}
                      >
                        Read full case study <ArrowRight size={14} />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
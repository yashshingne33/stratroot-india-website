import { Link } from 'react-router'
import { ArrowRight } from 'lucide-react'

const INDUSTRIES = [
  {
    label: 'Manufacturing',
    engagements: 32,
    img: 'photo-1581091226825-a6a2a5aee158',
    desc: 'From small-batch precision manufacturers to large-scale process industries — we\'ve restructured, optimised, and scaled manufacturing businesses across India.',
    services: ['Operations Excellence', 'Business Restructuring', 'Supply Chain Optimisation'],
    challenge: 'Indian manufacturing businesses face margin compression, labour complexity, and the urgent need to modernise without disrupting output.',
    stats: [{ n: '₹800 Cr+', l: 'Revenue impact' }, { n: '22%', l: 'Avg cost reduction' }, { n: '32', l: 'Engagements' }],
  },
  {
    label: 'Exports & Trade',
    engagements: 18,
    img: 'photo-1586528116311-ad8dd3c8310d',
    desc: 'Helping Indian exporters navigate global markets, compliance complexity, and buyer development to break the ₹50 crore ceiling.',
    services: ['Export & Trade Consulting', 'Market Entry', 'Financial Strategy'],
    challenge: 'Most Indian exporters plateau at ₹40–50 Crore. The systems, buyer relationships, and financial infrastructure required to scale are absent.',
    stats: [{ n: '₹600 Cr+', l: 'Export revenue generated' }, { n: '3.2×', l: 'Avg growth' }, { n: '18', l: 'Engagements' }],
  },
  {
    label: 'Engineering & Infrastructure',
    engagements: 14,
    img: 'photo-1565043589221-2e58a0f43d8b',
    desc: 'Project-based businesses, EPC contractors, and precision engineering companies require a different operating model — one that manages complexity and cash.',
    services: ['Financial Strategy', 'Operations Excellence', 'HR & Org Design'],
    challenge: 'Engineering businesses are complex, project-driven, and chronically cash-strained. Most lack the financial and operational systems to scale beyond ₹100 Crore.',
    stats: [{ n: '₹450 Cr+', l: 'Revenue impact' }, { n: '14', l: 'Engagements' }, { n: '35%', l: 'WC improvement' }],
  },
  {
    label: 'Consumer Goods',
    engagements: 9,
    img: 'photo-1560472354-b33ff0c44a43',
    desc: 'FMCG, food processing, and branded consumer businesses require strong distribution, brand management, and operational efficiency.',
    services: ['Market Entry', 'Operations Excellence', 'Digital Transformation'],
    challenge: 'Consumer goods businesses face intense competition, short product cycles, and distribution complexity. Scale requires systems — not just sales.',
    stats: [{ n: '₹200 Cr+', l: 'Revenue impact' }, { n: '9', l: 'Engagements' }, { n: '2.8×', l: 'Avg growth' }],
  },
  {
    label: 'Pharmaceuticals',
    engagements: 6,
    img: 'photo-1576091160550-2173dba999ef',
    desc: 'Formulation manufacturers and API producers navigating compliance, export approvals, and quality systems require sector-specific expertise.',
    services: ['Operations Excellence', 'Export & Trade', 'Supply Chain'],
    challenge: 'Pharma businesses operate under intense regulatory scrutiny while needing to optimise cost and speed. Quality and compliance are non-negotiable.',
    stats: [{ n: '₹180 Cr+', l: 'Revenue impact' }, { n: '6', l: 'Engagements' }, { n: '3 markets', l: 'Avg new exports' }],
  },
  {
    label: 'Family-Owned Businesses',
    engagements: 22,
    img: 'photo-1507003211169-0a1dd7228f2d',
    desc: 'India\'s backbone. Family businesses with 20–500 Crore in revenue face a unique set of succession, professionalisation, and governance challenges.',
    services: ['Business Restructuring', 'HR & Org Design', 'Financial Strategy'],
    challenge: 'Second and third-generation family businesses must professionalise without losing the founder spirit. Succession, sibling dynamics, and governance are critical.',
    stats: [{ n: '₹700 Cr+', l: 'Revenue managed' }, { n: '22', l: 'Engagements' }, { n: '94%', l: 'Retention rate' }],
  },
  {
    label: 'Logistics & Distribution',
    engagements: 8,
    img: 'photo-1586528116311-ad8dd3c8310d',
    desc: 'From regional distributors to multi-state logistics operators — we build the operational infrastructure that makes scale possible.',
    services: ['Supply Chain', 'Operations Excellence', 'Digital Transformation'],
    challenge: 'Logistics margins are thin and competition is intense. Operational excellence is the only real competitive advantage.',
    stats: [{ n: '₹250 Cr+', l: 'Revenue impact' }, { n: '8', l: 'Engagements' }, { n: '18%', l: 'Cost reduction' }],
  },
  {
    label: 'MSMEs',
    engagements: 30,
    img: 'photo-1454165804606-c3d57bc86b40',
    desc: 'India\'s 63 million MSMEs form the backbone of the economy. We work with MSME owners who are serious about growth and ready to build properly.',
    services: ['Business Restructuring', 'Operations Excellence', 'Financial Strategy'],
    challenge: 'MSMEs face capital constraints, talent scarcity, and operational informality. The leap from ₹10 to ₹50 crore is genuinely hard.',
    stats: [{ n: '₹500 Cr+', l: 'Combined revenue' }, { n: '30', l: 'Engagements' }, { n: '₹1 Cr+', l: 'Avg EBITDA gain' }],
  },
]

export default function Industries() {
  return (
    <div>
      <div className="pt-36 pb-20 lg:pt-48 lg:pb-28" style={{ background: '#102A43' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <span className="h-px w-12" style={{ background: '#C6A15B' }} />
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#C6A15B' }}>Sectors We Serve</span>
          </div>
          <h1
            className="font-display text-5xl lg:text-7xl font-semibold text-white max-w-3xl"
            style={{ lineHeight: 1.05, letterSpacing: '-0.02em' }}
          >
            Sector depth.
            <br />
            <em style={{ color: '#C6A15B' }}>Not generalism.</em>
          </h1>
          <p className="mt-8 text-lg max-w-xl" style={{ color: '#BAC7D5' }}>
            We don't work across every industry. We go deep in the sectors we know, so our advice is grounded in operational reality — not theory.
          </p>
        </div>
      </div>

      <section className="py-24 lg:py-32" style={{ background: '#F8FAF7' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-16">
            {INDUSTRIES.map((ind, i) => (
              <div
                key={ind.label}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}
              >
                <div className={i % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="overflow-hidden rounded-lg" style={{ height: '360px', background: '#E2E8F0' }}>
                    <img
                      src={`https://images.unsplash.com/${ind.img}?w=800&h=500&fit=crop&auto=format`}
                      alt={ind.label}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className={i % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="h-px w-8" style={{ background: '#C6A15B' }} />
                    <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#C6A15B' }}>
                      {ind.engagements} engagements
                    </span>
                  </div>
                  <h2 className="font-display text-3xl lg:text-4xl font-semibold mb-4" style={{ color: '#1F2933' }}>
                    {ind.label}
                  </h2>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: '#1F2933' }}>{ind.desc}</p>
                  <p className="text-sm leading-relaxed mb-6 italic" style={{ color: '#2F855A' }}>
                    The challenge: {ind.challenge}
                  </p>

                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {ind.stats.map((s) => (
                      <div key={s.l} className="p-4 border border-[#BAC7D5]/40 rounded-lg bg-white">
                        <p className="font-display text-xl font-semibold" style={{ color: '#1F2933' }}>{s.n}</p>
                        <p className="text-xs mt-0.5" style={{ color: '#1F2933' }}>{s.l}</p>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {ind.services.map((s) => (
                      <span
                        key={s}
                        className="text-xs font-medium px-3 py-1.5 rounded border"
                        style={{ borderColor: '#BAC7D5', color: '#1F2933', background: 'white' }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" style={{ background: '#102A43' }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl lg:text-4xl font-semibold text-white mb-6">
            Don't see your sector?
          </h2>
          <p className="text-sm mb-8" style={{ color: '#BAC7D5' }}>
            Get in touch. We assess each situation individually — and we're honest when we're not the right fit.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold text-white rounded transition-opacity hover:opacity-90"
            style={{ background: '#2F855A' }}
          >
            Talk to Us <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  )
}
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
            className="font-display text-5xl lg:text-6xl font-semibold text-white max-w-2xl mb-6"
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
      <section className="py-24 lg:py-32" style={{ background: 'var(--color-surface)' }}>
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
                    style={{ height: '360px', background: 'var(--color-border)' }}
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
            className="mt-16 p-10 rounded-lg border text-center"
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
          <h2 className="font-display text-3xl lg:text-4xl font-semibold text-white mb-6">
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
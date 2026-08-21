import { Link } from 'react-router'
import { ArrowRight, Compass, Handshake, Wrench, ShieldCheck, TrendingUp } from 'lucide-react'

const VALUES = [
  {
    icon: Compass,
    title: 'Clarity',
    body: 'Simplify complex business challenges and establish clear priorities.',
  },
  {
    icon: Handshake,
    title: 'Ownership',
    body: 'Approach every assignment with responsibility and management-level involvement.',
  },
  {
    icon: Wrench,
    title: 'Practical Thinking',
    body: 'Build recommendations around commercial and operational realities.',
  },
  {
    icon: ShieldCheck,
    title: 'Integrity',
    body: 'Maintain confidentiality, transparency and responsible business conduct.',
  },
  {
    icon: TrendingUp,
    title: 'Long-Term Value',
    body: 'Build capabilities, systems and market positions that continue beyond the engagement.',
  },
]

export default function About() {
  return (
    <div>
      {/* ── Page Header ── */}
      {/* <section
        className="pt-36 pb-20 lg:pt-48 lg:pb-28"
        style={{ background: 'var(--color-primary)' }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <span className="h-px w-12" style={{ background: 'var(--color-gold)' }} />
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: 'var(--color-gold)' }}>
              About Us
            </span>
          </div>
          <h1
            className="font-display text-5xl lg:text-7xl font-semibold text-white max-w-3xl"
            style={{ lineHeight: 1.05, letterSpacing: '-0.02em' }}
          >
            Strategy Rooted in Reality.
            <br />
            <em style={{ color: 'var(--color-gold)', fontStyle: 'normal' }}>Growth Built Through Execution.</em>
          </h1>
          <p className="mt-8 text-lg max-w-2xl" style={{ color: 'var(--color-muted)' }}>
            StratRoot India is a growth and execution consulting firm that works with businesses to
            strengthen market positioning, develop sales opportunities, enter new markets and
            improve operating discipline.
          </p>
        </div>
      </section> */}


      {/* ── Header ── */}
      <section className="pt-36 pb-20 lg:pt-48 lg:pb-24" style={{ background: 'var(--color-primary)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <span className="h-px w-12" style={{ background: 'var(--color-gold)' }} />
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: 'var(--color-gold)' }}>
              About Us
            </span>
          </div>
          <h1
            className="font-display text-5xl lg:text-6xl font-semibold text-white max-w-4xl mb-6"
            style={{ lineHeight: 1.05, letterSpacing: '-0.02em' }}
          >
            Strategy Rooted in Reality.
            <br />
            <em style={{ color: 'var(--color-gold)', fontStyle: 'normal' }}>Growth Built Through Execution.</em>
          </h1>
          <p className="text-lg max-w-lg" style={{ color: 'var(--color-muted)' }}>
             StratRoot India is a growth and execution consulting firm that works with businesses to
            strengthen market positioning, develop sales opportunities, enter new markets and
            improve operating discipline.
          </p>
        </div>
      </section>

      {/* ── Our Story ── */}
      <section className="py-24 lg:py-32" style={{ background: 'var(--color-surface)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase mb-6" style={{ color: 'var(--color-gold)' }}>
                Our Story
              </p>
              <h2
                className="font-display text-4xl font-semibold mb-8"
                style={{ color: 'var(--color-charcoal)', lineHeight: 1.2 }}
              >
                Recommendations create value only when they can be practically implemented.
              </h2>
              <div className="space-y-5 text-sm leading-relaxed" style={{ color: 'var(--color-charcoal)' }}>
                <p>
                  StratRoot was established around a simple belief: business recommendations
                  create value only when they can be practically implemented.
                </p>
                <p>
                  Many businesses have capable products, committed management and genuine market
                  opportunities. However, progress is often restricted by unclear priorities,
                  fragmented execution, inadequate market intelligence or the absence of an
                  accountable implementation structure.
                </p>
                <p>
                  StratRoot helps bridge this gap. We work closely with founders, directors and
                  management teams to understand their business realities, identify commercially
                  suitable opportunities and translate strategy into defined execution.
                </p>
              </div>
            </div>

            {/* Placeholder for authentic working photograph — swap once supplied */}
            <div
              className="rounded-lg border flex items-center justify-center"
              style={{ borderColor: 'var(--color-border)', background: 'var(--color-sage, #A8B8A5)', height: '480px' }}
            >
              <p className="text-xs text-center px-8" style={{ color: 'var(--color-charcoal)' }}>
                Authentic working / field-execution photograph
                <br />
                (to be added)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Mission & Vision ── */}
      <section className="py-24 lg:py-32" style={{ background: 'var(--color-primary)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div
              className="p-10 rounded-lg border"
              style={{ borderColor: 'rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.05)' }}
            >
              <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: 'var(--color-gold)' }}>
                Our Mission
              </p>
              <p className="font-display text-2xl font-semibold text-white" style={{ lineHeight: 1.4 }}>
                To help Indian businesses build stronger commercial foundations, access better
                markets and execute growth opportunities with clarity and discipline.
              </p>
            </div>
            <div
              className="p-10 rounded-lg border"
              style={{ borderColor: 'rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.05)' }}
            >
              <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: 'var(--color-gold)' }}>
                Our Vision
              </p>
              <p className="font-display text-2xl font-semibold text-white" style={{ lineHeight: 1.4 }}>
                To become a trusted growth and execution partner for Indian businesses seeking
                sustainable domestic and international expansion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Our Values ── */}
      <section className="py-24 lg:py-32" style={{ background: 'var(--color-surface)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-xl mb-16">
            <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: 'var(--color-gold)' }}>
              How We Think
            </p>
            <h2 className="font-display text-4xl lg:text-5xl font-semibold" style={{ color: 'var(--color-charcoal)', lineHeight: 1.2 }}>
              Five values that
              <br />
              guide every engagement.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-[var(--color-border)]">
            {VALUES.map((v, i) => (
              <div
                key={v.title}
                className="p-8 border-b lg:border-b-0 md:border-r"
                style={{
                  borderColor: 'var(--color-border)',
                  borderBottomWidth: i < VALUES.length - 1 ? 1 : 0,
                }}
              >
                <v.icon size={22} className="mb-5" style={{ color: 'var(--color-accent)' }} />
                <h3 className="font-semibold text-base mb-3" style={{ color: 'var(--color-charcoal)' }}>
                  {v.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)' }}>
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Founder Profile ── */}
      <section className="py-24 lg:py-32" style={{ background: 'var(--color-primary)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Placeholder for founder photograph — swap once supplied */}
            <div
              className="rounded-lg border flex items-center justify-center order-2 lg:order-1"
              style={{ borderColor: 'rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.05)', height: '480px' }}
            >
              <p className="text-xs text-center px-8" style={{ color: 'var(--color-muted)' }}>
                Founder professional photograph
                <br />
                (to be added)
              </p>
            </div>

            <div className="order-1 lg:order-2">
              <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: 'var(--color-gold)' }}>
                Founder
              </p>
              <h2 className="font-display text-3xl lg:text-4xl font-semibold text-white mb-2">
                Saurabh Chalse
              </h2>
              <p className="text-sm font-medium mb-6" style={{ color: 'var(--color-gold)' }}>
                Founder & Principal Consultant
              </p>
              <div className="space-y-4 text-sm leading-relaxed" style={{ color: '#D1D5DB' }}>
                <p>
                  Saurabh works across business strategy, exports, sales development, operations
                  and commercial execution. His approach is centred on understanding a business at
                  the ground level and converting opportunities into practical, reviewable action
                  plans.
                </p>
                <p>
                  Through StratRoot India, he works with manufacturers, exporters, agricultural
                  enterprises, consumer businesses and project-oriented companies on assignments
                  involving market development, business positioning, sales channels, operational
                  systems and strategic execution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 lg:py-32" style={{ background: 'var(--color-surface)' }}>
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2
            className="font-display text-3xl lg:text-5xl font-semibold mb-8"
            style={{ color: 'var(--color-charcoal)', lineHeight: 1.15 }}
          >
            Let's Build the Next
            <br />
            Stage of Your Business.
          </h2>
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
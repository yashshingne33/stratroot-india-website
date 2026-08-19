import { Link } from 'react-router'
import {
  ArrowRight, ArrowUpRight, CheckCircle, Target, Users, Globe,
  BarChart3, Settings, MessageSquare, Search, Activity,
  ClipboardList, PlayCircle, RefreshCw,
} from 'lucide-react'

const CORE_CHALLENGES = [
  {
    icon: Target,
    title: 'Clarity',
    body: 'Understand which products, markets and opportunities deserve immediate attention.',
  },
  {
    icon: Globe,
    title: 'Market Access',
    body: 'Develop focused routes to buyers, distributors, institutions and strategic partners.',
  },
  {
    icon: Activity,
    title: 'Execution',
    body: 'Translate recommendations into defined actions, ownership, timelines and review systems.',
  },
]

const SERVICES = [
  {
    icon: Globe,
    label: 'Export Market Development',
    desc: 'Assess export readiness, identify priority markets, strengthen buyer-facing communication and build a focused international business-development process.',
    slug: 'export-market-development',
  },
  {
    icon: Users,
    label: 'Sales & Channel Development',
    desc: 'Create structured domestic and international sales pipelines across distributors, retailers, institutions, channel partners and direct B2B buyers.',
    slug: 'sales-channel-development',
  },
  {
    icon: BarChart3,
    label: 'Business Strategy & Commercial Advisory',
    desc: 'Evaluate opportunities, analyse competition, improve positioning and prepare commercially practical growth plans.',
    slug: 'business-strategy-advisory',
  },
  {
    icon: Settings,
    label: 'Operations & Execution Systems',
    desc: 'Build reporting systems, workflows, responsibilities, dashboards and management-review mechanisms that improve accountability.',
    slug: 'operations-execution-systems',
  },
  {
    icon: MessageSquare,
    label: 'Market-Ready Business Communication',
    desc: 'Develop company profiles, product portfolios, presentations, commercial proposals and website content that meet professional buyer expectations.',
    slug: 'market-ready-communication',
  },
]

const WHY_STRATROOT = [
  'Tailored engagement instead of standard consulting templates',
  'Management-level attention throughout the assignment',
  'Clear responsibilities and execution checkpoints',
  'Domestic and international market perspective',
  'Confidential and commercially responsible working approach',
]

const INDUSTRIES = [
  { label: 'Agriculture, Food Processing & FPOs', img: 'photo-1500937386664-56d1dfef3854' },
  { label: 'Manufacturing & Industrial Products', img: 'photo-1581091226825-a6a2a5aee158' },
  { label: 'Exporters & Trading Businesses', img: 'photo-1586528116311-ad8dd3c8310d' },
  { label: 'Consumer & Educational Products', img: 'photo-1497633762265-9d179a990aa6' },
  { label: 'Infrastructure & Project Supplies', img: 'photo-1541888946425-d81bb19240f5' },
]

const APPROACH = [
  {
    icon: Search,
    stage: 'Understand',
    body: 'Study the business, products, capabilities, current challenges and desired outcomes.',
  },
  {
    icon: Activity,
    stage: 'Diagnose',
    body: 'Examine the market, competition, commercial viability, operational gaps and priorities.',
  },
  {
    icon: ClipboardList,
    stage: 'Define',
    body: 'Prepare a focused roadmap with actions, responsibilities, timelines and checkpoints.',
  },
  {
    icon: PlayCircle,
    stage: 'Execute',
    body: 'Work with the management, team, vendors and stakeholders to move the plan forward.',
  },
  {
    icon: RefreshCw,
    stage: 'Review',
    body: 'Address bottlenecks and adjust priorities using actual business feedback.',
  },
]

const ENGAGEMENTS = [
  {
    type: 'Agricultural Producer Organisation',
    desc: 'Product positioning, export-ready material, international market shortlisting, buyer research and outreach planning for processed agricultural products.',
  },
  {
    type: 'Educational Products Company',
    desc: 'Retail distribution planning, bookstore outreach, school-channel strategy, sales reporting and execution tracking.',
  },
  {
    type: 'Specialty-Product Exporter',
    desc: 'Market mapping, prospective-buyer qualification, compliance-related research and export communication support.',
  },
  {
    type: 'Project Supply Opportunity',
    desc: 'Quantity analysis, vendor coordination, commercial costing, proposal preparation and execution planning.',
  },
]

export default function Home() {
  return (
    <div>
      {/* ── Hero ── */}
      <section
        className="relative flex flex-col justify-center min-h-[100vh] overflow-hidden"
        style={{ background: 'var(--color-primary)' }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(90deg, var(--color-primary) 0%, var(--color-primary) 40%, rgba(16,42,67,0.45) 70%, transparent 100%)',
            zIndex: 2,
          }}
        />
        <div
          className="absolute inset-0 w-full h-full pointer-events-none opacity-80"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1600&auto=format&fit=crop')`,
            backgroundPosition: 'right center',
            backgroundSize: 'cover',
            mixBlendMode: 'screen',
            zIndex: 1,
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-6 py-24 w-full" style={{ zIndex: 3 }}>
          <div className="max-w-2xl">
            <p
              className="text-xs font-semibold tracking-[0.2em] uppercase mb-6"
              style={{ color: 'var(--color-gold)' }}
            >
              Growth · Markets · Execution
            </p>
            <h1
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-white mb-6"
              style={{ lineHeight: 1.12, letterSpacing: '-0.01em' }}
            >
              Build Stronger Businesses.
              <br />
              Reach Better Markets.
            </h1>
            <p className="text-base lg:text-lg text-white/80 max-w-xl mb-10 leading-relaxed">
              StratRoot India helps manufacturers, exporters, FPOs, founders and growth-stage
              businesses turn commercial opportunities into structured execution — across market
              development, exports, sales, business operations and strategic projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold text-white rounded transition-transform hover:-translate-y-0.5"
                style={{ background: 'var(--color-accent)' }}
              >
                Discuss Your Business
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-medium rounded border transition-colors hover:bg-white/5"
                style={{ borderColor: 'var(--color-gold)', color: 'var(--color-gold)' }}
              >
                Explore Our Services
              </Link>
            </div>
            <p className="text-xs mt-10 tracking-wide" style={{ color: 'var(--color-muted)' }}>
              Practical strategy. Structured execution. Measurable business progress.
            </p>
          </div>
        </div>
      </section>

      {/* ── Core Challenges / Introduction ── */}
      <section className="py-24 lg:py-32" style={{ background: 'var(--color-surface)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: 'var(--color-gold)' }}>
              The Core Challenge
            </p>
            <h2
              className="font-display text-4xl lg:text-5xl font-semibold mb-6"
              style={{ color: 'var(--color-charcoal)', lineHeight: 1.15 }}
            >
              Strategy Creates Direction.
              <br />
              Execution Creates Results.
            </h2>
            <p className="text-sm lg:text-base leading-relaxed" style={{ color: 'var(--color-muted)' }}>
              Businesses rarely struggle because of a lack of opportunities. Growth usually slows
              when market intelligence, commercial priorities, internal capabilities and execution
              are not properly connected. StratRoot works alongside business owners and management
              teams to identify the right opportunities, build a practical roadmap and coordinate
              its execution.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-[var(--color-border)]">
            {CORE_CHALLENGES.map((c, i) => (
              <div
                key={c.title}
                className="p-8 border-b md:border-b-0 md:border-r"
                style={{
                  borderColor: 'var(--color-border)',
                  borderRightWidth: i < CORE_CHALLENGES.length - 1 ? 1 : 0,
                }}
              >
                <c.icon size={22} className="mb-5" style={{ color: 'var(--color-accent)' }} />
                <h3 className="font-semibold text-base mb-3" style={{ color: 'var(--color-charcoal)' }}>
                  {c.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)' }}>
                  {c.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services Overview ── */}
      <section className="py-24 lg:py-32" style={{ background: 'var(--color-primary)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
            <div className="max-w-xl">
              <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: 'var(--color-gold)' }}>
                What We Do
              </p>
              <h2
                className="font-display text-4xl lg:text-5xl font-semibold text-white"
                style={{ lineHeight: 1.15 }}
              >
                Five capability areas.
                <br />
                One outcome: execution.
              </h2>
            </div>
            <Link to="/services" className="inline-flex items-center gap-2 text-sm font-medium" style={{ color: 'var(--color-gold)' }}>
              View All Services <ArrowUpRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {SERVICES.map((s) => (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                className="group p-7 rounded-lg border transition-all duration-300 hover:border-[var(--color-accent)]"
                style={{ borderColor: 'rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.05)' }}
              >
                <s.icon size={22} className="mb-5" style={{ color: 'var(--color-gold)' }} />
                <h3 className="font-semibold text-sm mb-2 text-white">{s.label}</h3>
                <p className="text-xs leading-relaxed" style={{ color: 'var(--color-muted)' }}>
                  {s.desc}
                </p>
                <div
                  className="flex items-center gap-1 mt-5 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ color: 'var(--color-gold)' }}
                >
                  Learn more <ArrowRight size={12} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why StratRoot ── */}
      <section className="py-24 lg:py-32" style={{ background: 'var(--color-surface)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: 'var(--color-gold)' }}>
                Why StratRoot
              </p>
              <h2
                className="font-display text-4xl lg:text-5xl font-semibold mb-8"
                style={{ color: 'var(--color-charcoal)', lineHeight: 1.15 }}
              >
                Advice Grounded in
                <br />
                Commercial Reality
              </h2>
              <p className="text-base leading-relaxed mb-10" style={{ color: 'var(--color-muted)' }}>
                StratRoot combines strategic thinking with hands-on execution. Recommendations are
                developed around the actual capabilities, resources, commercial priorities and
                market position of each client.
              </p>
              <div className="space-y-5">
                {WHY_STRATROOT.map((text) => (
                  <div key={text} className="flex items-start gap-3">
                    <CheckCircle size={16} className="mt-0.5 flex-shrink-0" style={{ color: 'var(--color-accent)' }} />
                    <p className="text-sm" style={{ color: 'var(--color-charcoal)' }}>{text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Placeholder for authentic founder / working photograph — swap once supplied */}
            <div
              className="rounded-lg border aspect-[4/5] flex items-center justify-center"
              style={{ borderColor: 'var(--color-border)', background: 'var(--color-sage, #A8B8A5)' }}
            >
              <p className="text-xs text-center px-8" style={{ color: 'var(--color-charcoal)' }}>
                Authentic working / founder photograph
                <br />
                (to be added)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Industries ── */}
      <section className="py-24 lg:py-32" style={{ background: 'var(--color-primary)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: 'var(--color-gold)' }}>
                Industries
              </p>
              <h2
                className="font-display text-4xl lg:text-5xl font-semibold text-white"
                style={{ lineHeight: 1.15 }}
              >
                Selected sectors
                <br />
                we support
              </h2>
            </div>
            <Link to="/industries" className="inline-flex items-center gap-2 text-sm font-medium" style={{ color: 'var(--color-gold)' }}>
              All Industries <ArrowUpRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {INDUSTRIES.map((ind) => (
              <Link
                key={ind.label}
                to="/industries"
                className="group relative overflow-hidden rounded-lg aspect-video"
              >
                <img
                  src={`https://images.unsplash.com/${ind.img}?w=600&h=340&fit=crop&auto=format`}
                  alt={ind.label}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(to top, rgba(16,42,67,0.85) 30%, transparent 70%)' }}
                />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="font-display text-sm font-semibold text-white leading-snug">
                    {ind.label}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
          <p className="text-xs mt-6" style={{ color: 'var(--color-muted)' }}>
            We accept assignments where our capabilities can create meaningful commercial or
            operational value — each prospective engagement is assessed before scope is finalised.
          </p>
        </div>
      </section>

      {/* ── Our Approach ── */}
      <section className="py-24 lg:py-32" style={{ background: 'var(--color-surface)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-xl mb-16">
            <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: 'var(--color-gold)' }}>
              How We Work
            </p>
            <h2
              className="font-display text-4xl lg:text-5xl font-semibold"
              style={{ color: 'var(--color-charcoal)', lineHeight: 1.15 }}
            >
              Our Approach
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-0 border border-[var(--color-border)]">
            {APPROACH.map((a, i) => (
              <div
                key={a.stage}
                className="p-7 border-b lg:border-b-0 lg:border-r"
                style={{
                  borderColor: 'var(--color-border)',
                  borderRightWidth: i < APPROACH.length - 1 ? 1 : 0,
                }}
              >
                <span
                  className="inline-flex items-center justify-center w-9 h-9 rounded-full text-xs font-bold mb-5"
                  style={{ background: 'var(--color-accent)', color: 'white' }}
                >
                  {i + 1}
                </span>
                <a.icon size={18} className="mb-3" style={{ color: 'var(--color-accent)' }} />
                <h3 className="font-semibold text-sm mb-2" style={{ color: 'var(--color-charcoal)' }}>
                  {a.stage}
                </h3>
                <p className="text-xs leading-relaxed" style={{ color: 'var(--color-muted)' }}>
                  {a.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Selected Engagements ── */}
      <section className="py-24 lg:py-32" style={{ background: 'var(--color-primary)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: 'var(--color-gold)' }}>
                Selected Engagements
              </p>
              <h2
                className="font-display text-4xl lg:text-5xl font-semibold text-white"
                style={{ lineHeight: 1.15 }}
              >
                Evidence of the
                <br />
                nature of our work
              </h2>
            </div>
            <Link to="/work" className="inline-flex items-center gap-2 text-sm font-medium" style={{ color: 'var(--color-gold)' }}>
              View Selected Work <ArrowUpRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {ENGAGEMENTS.map((e) => (
              <div
                key={e.type}
                className="p-8 rounded-lg border"
                style={{ borderColor: 'rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.05)' }}
              >
                <span
                  className="inline-block text-xs font-semibold tracking-widest uppercase px-2 py-1 rounded mb-5"
                  style={{ background: 'rgba(198,161,91,0.15)', color: 'var(--color-gold)' }}
                >
                  {e.type}
                </span>
                <p className="text-sm leading-relaxed" style={{ color: '#D1D5DB' }}>
                  {e.desc}
                </p>
              </div>
            ))}
          </div>
          <p className="text-xs mt-6" style={{ color: 'var(--color-muted)' }}>
            Engagement details are anonymised. Client names, logos and figures are published only
            with written permission.
          </p>
        </div>
      </section>

      {/* ── Founder's Note ── */}
      <section className="py-24 lg:py-32" style={{ background: 'var(--color-surface)' }}>
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-6" style={{ color: 'var(--color-gold)' }}>
            A Direct Message From the Founder
          </p>
          <p
            className="font-display text-xl lg:text-2xl leading-relaxed mb-10"
            style={{ color: 'var(--color-charcoal)' }}
          >
            "At StratRoot, we believe businesses do not need more generic advice. They need
            clarity on what to do next, structured execution and an accountable partner who
            understands commercial realities. Our role is to connect strategy with action —
            whether that means preparing a business for exports, entering a new market,
            developing a sales channel, improving operating discipline or coordinating a complex
            opportunity."
          </p>
          <p className="font-semibold text-sm" style={{ color: 'var(--color-charcoal)' }}>
            Saurabh Chalse
          </p>
          <p className="text-xs mt-1" style={{ color: 'var(--color-muted)' }}>
            Founder & Principal Consultant, StratRoot India
          </p>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="py-24 lg:py-32" style={{ background: 'var(--color-primary)' }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2
            className="font-display text-4xl lg:text-6xl font-semibold text-white mb-8"
            style={{ lineHeight: 1.1 }}
          >
            Have a Market, Sales or
            <br />
            Execution Challenge?
          </h2>
          <p className="text-base lg:text-lg mb-12 max-w-xl mx-auto" style={{ color: 'var(--color-muted)' }}>
            Let us examine the opportunity, understand the constraints and define the most
            practical way forward.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-10 py-5 text-sm font-semibold text-white rounded"
            style={{ background: 'var(--color-accent)' }}
          >
            Start a Conversation
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  )
}



import { Link } from 'react-router'
import {
  ArrowRight,Award, ArrowUpRight, CheckCircle, Target, Users, Globe,
  BarChart3, Settings, MessageSquare, Search, Activity,
  ClipboardList, PlayCircle, RefreshCw, ChevronRight, Quote, MapPin,
  TrendingUp,
} from 'lucide-react'


const CAPABILITY_PREVIEW = [
  {
    icon: Search,
    title: 'Market Opportunity Mapping',
    body: 'Identify high-potential markets and buyer segments aligned with your products and capabilities.',
  },
  {
    icon: Globe,
    title: 'International Connections',
    body: 'Access our vetted network of distributors, buyers, and partners across key global markets.',
  },
  {
    icon: TrendingUp,
    title: 'Export Sales Development',
    body: 'End-to-end support to convert opportunities into sustainable export sales.',
  },
]

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

const HOW_WE_WORK = [
  {
    icon: Target,
    step: '01',
    title: 'Understand',
    body: 'We learn your business, goals, and market focus.',
  },
  {
    icon: MapPin,
    step: '02',
    title: 'Strategize',
    body: 'We craft a tailored export strategy and action plan.',
  },
  {
    icon: Users,
    step: '03',
    title: 'Connect',
    body: 'We open doors to the right buyers and partners.',
  },
  {
    icon: TrendingUp,
    step: '04',
    title: 'Grow',
    body: 'We support execution and accelerate export growth.',
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
    label: 'Export Sales & Channel Development',
    desc: 'Create structured domestic and international sales pipelines across distributors, retailers, institutions, channel partners and direct B2B buyers.',
    slug: 'export-sales-channel-development',
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

    {/* ── Hero Section ── */}
<section
  className="relative overflow-hidden min-h-[calc(100dvh-4.5rem)] md:min-h-fit xl:min-h-[calc(100dvh-4.5rem)] flex flex-col pt-24 sm:pt-28 lg:pt-24 pb-6 sm:pb-10"
  style={{ background: 'var(--color-primary)' }}
>
  {/* Earth image */}
  <div className="absolute inset-0 z-0">
    <img
      src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1800&auto=format&fit=crop"
      alt=""
      className="absolute right-0 top-0 h-full w-[85%] sm:w-[75%] object-cover object-left"
    />
    <div
      className="absolute inset-0"
      style={{
        background:
          'linear-gradient(90deg, var(--color-primary) 0%, var(--color-primary) 32%, transparent 72%)',
      }}
    />
    <div
      className="absolute inset-0"
      style={{ background: 'linear-gradient(180deg, transparent 55%, var(--color-primary) 100%)' }}
    />
  </div>

  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
    <div className="max-w-2xl">

      <h1
        className="font-display text-[1.65rem] xs:text-3xl sm:text-4xl lg:text-[2.85rem] font-semibold text-white mb-3"
        style={{ lineHeight: 1.2, letterSpacing: '-0.015em' }}
      >
        Rooting Your Business
        <br />
        in <span style={{ color: 'var(--color-accent)' }}>Global Markets</span>
      </h1>

      <p className="text-[13px] sm:text-base text-white/70 max-w-md mb-5 sm:mb-8 leading-relaxed">
        Export market strategy, buyer connections, and sales development for manufacturers and traders.
      </p>

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3.5 mb-6 sm:mb-10">
        <Link
          to="/contact"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white rounded-md transition-transform hover:-translate-y-0.5 shadow-md"
          style={{ background: 'var(--color-accent)' }}
        >
          Start a Conversation <ArrowRight size={15} />
        </Link>
        <Link
          to="/services"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium text-white rounded-md border border-white/20 transition-colors hover:bg-white/5"
        >
          Explore Our Services
        </Link>
      </div>

      {/* Feature row */}
      <div className="grid grid-cols-3 gap-2.5 sm:gap-6">
        {[
          { icon: Globe, title: 'Global Network', body: 'Trusted connections' },
          { icon: BarChart3, title: 'Market Intelligence', body: 'Actionable insights' },
          { icon: TrendingUp, title: 'Growth Focused', body: 'Results that matter' },
        ].map((f) => (
          <div key={f.title} className="min-w-0 flex items-start gap-1.5 sm:gap-3">
            <span
              className="w-6 h-6 sm:w-9 sm:h-9 rounded-full border flex items-center justify-center flex-shrink-0"
              style={{ borderColor: 'rgba(255,255,255,0.2)' }}
            >
              <f.icon className="w-3 h-3 sm:w-[15px] sm:h-[15px]" style={{ color: 'var(--color-accent)' }} />
            </span>
            <div className="min-w-0">
              <p className="text-[10px] sm:text-sm font-semibold text-white leading-tight break-words">{f.title}</p>
              <p className="text-[9px] sm:text-xs text-white/55 leading-tight mt-0.5 break-words">{f.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>

  {/* How We Work — inside hero */}
  <div
    className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:mt-10 lg:mt-12 w-full rounded-2xl border p-4 sm:p-5 lg:p-8"
    style={{ borderColor: 'rgba(255,255,255,0.1)', background: 'rgba(6,14,22,0.72)', backdropFilter: 'blur(6px)' }}
  >
    <div className="flex items-center gap-3 sm:gap-6 mb-4 sm:mb-5 lg:mb-8">
      <span className="flex-1 h-px" style={{ background: 'var(--color-gold)' }} />
      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: 'var(--color-gold)' }} />
      <h2 className="font-display text-sm sm:text-lg lg:text-xl font-semibold text-white text-center whitespace-nowrap">
        How We Work
      </h2>
      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: 'var(--color-gold)' }} />
      <span className="flex-1 h-px" style={{ background: 'var(--color-gold)' }} />
    </div>

    <div className="divide-y sm:divide-y-0 sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-6 lg:gap-4" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
      {HOW_WE_WORK.map((s, i) => (
        <div key={s.step} className="min-w-0 flex items-center sm:items-start gap-4 sm:gap-3 flex-1 py-3 sm:py-0 first:pt-0 last:pb-0">
          <div
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center flex-shrink-0 sm:mb-2.5"
            style={{ background: 'rgba(74,222,128,0.15)' }}
          >
            <s.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" style={{ color: 'var(--color-accent)' }} />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-[10px] font-bold tracking-wide mb-0.5" style={{ color: 'var(--color-gold)' }}>
              {s.step}
            </p>
            <h3 className="font-semibold text-[13px] sm:text-sm mb-0.5 sm:mb-1 text-white">{s.title}</h3>
            <p className="text-[11px] sm:text-xs leading-snug text-white/60 break-words">{s.body}</p>
          </div>
          {i < HOW_WE_WORK.length - 1 && (
            <ChevronRight size={14} className="hidden lg:block flex-shrink-0 text-white/25 mt-3" />
          )}
        </div>
      ))}
    </div>
  </div>
</section>

      {/* ── Core Challenges / Introduction ── */}
      <section className="py-20 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="max-w-3xl mb-16">
            <p 
              className="text-xs font-semibold tracking-[0.2em] uppercase mb-4" 
              style={{ color: 'var(--color-gold)' }}
            >
              The Core Challenge
            </p>

            <h2
              className="font-display text-4xl lg:text-5xl font-semibold mb-6 tracking-tight"
              style={{ color: 'var(--color-charcoal)', lineHeight: 1.15 }}
            >
              Strategy Creates Direction.
              Execution Creates Results.
            
              <br />
            </h2>

            <p className="text-sm lg:text-base leading-relaxed" style={{ color: 'var(--color-muted)' }}>
              Businesses rarely struggle because of a lack of opportunities. Growth usually slows
              when market intelligence, commercial priorities, internal capabilities and execution
              are not properly connected. StratRoot works alongside business owners and management
              teams to identify the right opportunities, build a practical roadmap and coordinate
              its execution.
            </p>
          </div>

          {/* Cards Grid */}
          <div 
            className="grid grid-cols-1 md:grid-cols-3 border rounded-lg overflow-hidden"
            style={{ borderColor: 'var(--color-border)', background: 'white' }}
          >
            {CORE_CHALLENGES.map((c, i) => (
              <div
                key={c.title}
                className="group relative p-8 lg:p-10 border-b md:border-b-0 md:border-r transition-all duration-300 hover:bg-[var(--color-surface)]"
                style={{
                  borderColor: 'var(--color-border)',
                  borderRightWidth: i < CORE_CHALLENGES.length - 1 ? 1 : 0,
                }}
              >
                {/* Top Gold Accent Line on Hover */}
                <div 
                  className="absolute top-0 left-0 right-0 h-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: 'var(--color-gold)' }}
                />

                {/* Icon & Step Number */}
                <div className="flex items-center justify-between mb-8">
                  <div 
                    className="w-10 h-10 rounded-md flex items-center justify-center transition-colors duration-300"
                    style={{ background: 'var(--color-surface)' }}
                  >
                    <c.icon size={20} style={{ color: 'var(--color-accent)' }} />
                  </div>
                  <span 
                    className="font-serif italic text-lg font-medium opacity-60"
                    style={{ color: 'var(--color-gold)' }}
                  >
                    0{i + 1}
                  </span>
                </div>

                {/* Title */}
                <h3 
                  className="font-semibold text-lg mb-3 tracking-tight group-hover:translate-x-0.5 transition-transform duration-300" 
                  style={{ color: 'var(--color-charcoal)' }}
                >
                  {c.title}
                </h3>

                {/* Description */}
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)' }}>
                  {c.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services Overview ── */}
      <section className="py-20 lg:py-20" style={{ background: 'var(--color-primary)' }}>
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
      <section className="py-20 lg:py-20" style={{ background: 'var(--color-surface)' }}>
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

           <div className="relative mx-auto w-full max-w-sm lg:max-w-md">
            {/* offset frame — sits behind, peeking out top-right */}
            <div
              className="absolute -top-4 -right-4 w-full h-full rounded-lg border"
              style={{ borderColor: 'var(--color-gold)' }}
            />

            <div
              className="relative rounded-lg border aspect-[4/5] overflow-hidden shadow-lg"
              style={{ borderColor: 'var(--color-border)' }}
            >
              <img
                src="/images/world.jpg"
                alt="StratRoot working session"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* ── Founder's Note ── */}
      <section className="py-20 lg:py-20" style={{ background: 'var(--color-primary)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

            {/* ── Left: identity ── */}
            <div className="lg:col-span-4">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-6 flex items-center gap-2" style={{ color: 'var(--color-gold)' }}>
                <span className="w-5 h-px" style={{ background: 'var(--color-gold)' }} />
                A Direct Message From the Founder
              </p>

              {/* Placeholder for founder photograph */}
              {/* <div
                className="rounded-xl border aspect-[4/5] flex items-center justify-center mb-6 overflow-hidden shadow-sm transition-all duration-300"
                style={{ borderColor: 'var(--color-border)', background: 'var(--color-sage, #A8B8A5)' }}
              >
                <p className="text-xs text-center px-8 font-medium tracking-wide uppercase" style={{ color: 'var(--color-charcoal)' }}>
                  Founder photograph
                  <br />
                  <span className="text-[10px] opacity-75 capitalize font-normal">(to be added)</span>
                </p>
              </div> */}

         <div
  className="relative rounded-xl border aspect-[4/5] flex items-center justify-center mb-6 overflow-hidden shadow-sm mx-auto max-w-[220px] sm:max-w-[260px] lg:max-w-none lg:mx-0"
  style={{ borderColor: 'var(--color-border)', background: 'var(--color-primary)' }}
>
  {/* subtle radial glow */}
  <div
    className="absolute inset-0"
    style={{ background: 'radial-gradient(circle at 50% 35%, rgba(74,222,128,0.12), transparent 60%)' }}
  />
  {/* thin decorative rings */}
  <div
    className="absolute w-40 h-40 rounded-full border"
    style={{ borderColor: 'rgba(212,175,55,0.25)' }}
  />
  <div
    className="absolute w-32 h-32 rounded-full border"
    style={{ borderColor: 'rgba(212,175,55,0.4)' }}
  />

  {/* monogram */}
  <span
    className="relative font-display text-5xl font-semibold"
    style={{ color: 'var(--color-gold)', letterSpacing: '0.02em' }}
  >
    SC
  </span>
</div>

              <p className="font-semibold text-base tracking-tight" style={{ color: 'var(--color-charcoal)' }}>
                Saurabh Chalse
              </p>
              <p className="text-xs mt-1 font-medium" style={{ color: 'var(--color-muted)' }}>
                Founder & Principal Consultant, StratRoot India
              </p>
            </div>

            {/* ── Right: the note ── */}
            <div className="lg:col-span-8 lg:pt-2 flex flex-col justify-between h-full">
              <div>
                <span
                  className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-7 shadow-sm"
                  style={{ background: 'var(--color-accent)' }}
                >
                  <Quote size={20} className="text-white fill-white/20" strokeWidth={2.25} />
                </span>

                <blockquote
                  className="font-serif italic text-2xl lg:text-[1.85rem] leading-[1.6] tracking-tight mb-10 font-normal"
                  style={{ color: '#e0dfe8' }}
                >
                  “At StratRoot, we believe businesses do not need more generic advice. They need clarity
                  on what to do next, structured execution and an accountable partner who understands
                  commercial realities. Our role is to connect strategy with action — whether that means
                  preparing a business for exports, entering a new market, developing a sales channel,
                  improving operating discipline or coordinating a complex opportunity.”
                </blockquote>
              </div>

              <div className="pt-6 border-t flex flex-col sm:flex-row sm:items-end justify-between gap-4" style={{ borderColor: 'var(--color-border)' }}>
                <div className="flex items-center gap-3">
                  <span className="w-8 h-px" style={{ background: 'var(--color-gold)' }} />
                  <p className="text-xs italic font-medium" style={{ color: 'var(--color-muted)' }}>
                    Written personally by Saurabh Chalse
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="py-20 lg:py-20" style={{ background: 'var(--color-surface)' }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2
            className="font-display text-4xl lg:text-6xl font-semibold text-[#102A43] mb-8"
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

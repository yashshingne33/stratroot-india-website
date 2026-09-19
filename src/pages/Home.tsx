import { Link } from 'react-router'
import {
  ArrowRight, ArrowUpRight, CheckCircle, Target, Users, Globe,
  BarChart3, Settings, MessageSquare, Search, Activity,
  ClipboardList, RefreshCw, Quote, TrendingUp,
} from 'lucide-react'
import Seo from '../components/Seo'
import { SEO } from '../seo'


const CAPABILITY_INDICATORS = [
  { icon: Target, title: 'Market Strategy', body: 'Clear choices on products, customers and geographies' },
  { icon: Users, title: 'Sales Development', body: 'Focused routes to buyers, distributors and institutions' },
  { icon: Settings, title: 'Execution Systems', body: 'Defined ownership, timelines, reviews and follow-up' },
]

const BUSINESS_CHALLENGES = [
  {
    icon: Target,
    title: 'Market Clarity',
    body: 'Decide which products, customers and geographies deserve priority.',
  },
  {
    icon: Globe,
    title: 'Commercial Access',
    body: 'Build focused routes to buyers, distributors, institutions and channel partners.',
  },
  {
    icon: Activity,
    title: 'Execution Control',
    body: 'Assign responsibilities, track progress and review the actions that drive results.',
  },
]

const HOW_WE_WORK = [
  {
    icon: Search,
    step: '01',
    title: 'Diagnose',
    body: 'We study the business, products, capabilities, current position and immediate constraints.',
  },
  {
    icon: Target,
    step: '02',
    title: 'Prioritise',
    body: 'We identify the markets, customer groups and actions that deserve management attention.',
  },
  {
    icon: ClipboardList,
    step: '03',
    title: 'Prepare',
    body: 'We strengthen commercial material, pricing logic, processes and team responsibilities.',
  },
  {
    icon: TrendingUp,
    step: '04',
    title: 'Develop',
    body: 'We support outreach, channel development, stakeholder coordination and opportunity progress.',
  },
  {
    icon: RefreshCw,
    step: '05',
    title: 'Review',
    body: 'We track actions, examine responses, correct the approach and define the next decision.',
  },
]

const SERVICES = [
  {
    icon: Globe,
    label: 'Export Consulting',
    desc: 'Assess export readiness, identify priority markets, strengthen buyer-facing preparation and build a structured international business-development process.',
    linkLabel: 'Explore Export Consulting',
    to: '/export-consulting',
  },
  {
    icon: Users,
    label: 'Sales and Channel Development',
    desc: 'Build domestic or international sales pipelines across distributors, institutions, retailers, resellers, strategic partners and direct B2B customers.',
    linkLabel: 'Explore Sales Development',
    to: '/services/sales-channel-development',
  },
  {
    icon: BarChart3,
    label: 'Business Strategy and Commercial Advisory',
    desc: 'Evaluate opportunities, understand competition, improve positioning, prepare commercial models and define practical growth priorities.',
    linkLabel: 'Explore Commercial Advisory',
    to: '/services/business-strategy-advisory',
  },
  {
    icon: Settings,
    label: 'Operations and Execution Systems',
    desc: 'Create workflows, responsibilities, dashboards, reporting formats and review mechanisms that improve management visibility and accountability.',
    linkLabel: 'Explore Execution Systems',
    to: '/services/operations-execution-systems',
  },
  {
    icon: MessageSquare,
    label: 'Market Ready Business Communication',
    desc: 'Develop company profiles, product portfolios, presentations, proposals, technical information sheets and website content for serious buyers and partners.',
    linkLabel: 'Explore Business Communication',
    to: '/services/market-ready-communication',
  },
]

const INDUSTRIES = [
  'Agriculture, food processing and farmer producer organisations',
  'Manufacturing and industrial products',
  'Exporters, merchant traders and sourcing businesses',
  'Consumer, retail and educational products',
  'Infrastructure and project supplies',
  'Specialised and regulated product sectors',
]

const WHY_STRATROOT = [
  'Direct involvement from the principal consultant',
  'Assignments designed around the business rather than a standard template',
  'Clear scope, responsibilities, timelines and review points',
  'Domestic and international market perspective',
  'Confidential and commercially responsible working approach',
]

export default function Home() {
  return (
    <div>

    {/* ── Hero Section ── */}
      <section
        className="relative overflow-hidden min-h-[calc(100dvh-4.5rem)] md:min-h-fit xl:min-h-[calc(100dvh-4.5rem)] flex flex-col pt-32 sm:pt-36 lg:pt-34 pb-6 sm:pb-10"
        style={{ background: 'var(--color-primary)' }}
      >
        {/* Earth image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-ship.jpg"
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

            <p
              className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] uppercase mb-4"
              style={{ color: 'var(--color-gold)' }}
            >
              Strategy | Sales | Exports | Operations
            </p>

            <h1
              className="font-display text-[1.65rem] xs:text-3xl sm:text-4xl lg:text-[2.85rem] font-semibold text-white mb-3"
              style={{ lineHeight: 1.2, letterSpacing: '-0.015em' }}
            >
              Growth and Export Consulting
              <br />
              Built Around <span style={{ color: 'var(--color-accent)' }}>Execution</span>
            </h1>

            <p className="text-[13px] sm:text-base text-white/70 max-w-md mb-5 sm:mb-8 leading-relaxed">
              StratRoot India helps manufacturers, exporters, FPOs, processors, traders and emerging
              businesses choose the right markets, develop sales opportunities and build the systems
              required to execute growth.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3.5 mb-6 sm:mb-10">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white rounded-md transition-transform hover:-translate-y-0.5 shadow-md"
                style={{ background: 'var(--color-accent)' }}
              >
                Discuss Your Requirement <ArrowRight size={15} />
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
              {CAPABILITY_INDICATORS.map((f) => (
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
      </section>

      {/* ── Business Challenge ── */}
      <section className="py-20 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          {/* Section Header */}
          <div className="max-w-3xl mb-16">
            <p
              className="text-xs font-semibold tracking-[0.2em] uppercase mb-4"
              style={{ color: 'var(--color-gold)' }}
            >
              Where Growth Slows
            </p>

            <h2
              className="font-display text-4xl lg:text-5xl font-semibold mb-6 tracking-tight"
              style={{ color: 'var(--color-charcoal)', lineHeight: 1.15 }}
            >
              Good Opportunities Need Clear Commercial Execution
            </h2>

            <p className="text-sm lg:text-base leading-relaxed mb-4" style={{ color: 'var(--color-muted)' }}>
              Many businesses have capable products, committed management and genuine market
              opportunities. Progress slows when priorities are unclear, market information is
              fragmented, sales activity lacks focus, or day-to-day execution is not visible to
              management.
            </p>
            <p className="text-sm lg:text-base leading-relaxed" style={{ color: 'var(--color-muted)' }}>
              StratRoot works with business owners and management teams to identify the most
              practical opportunity, define the route to market and convert the plan into
              reviewable action.
            </p>
          </div>

          {/* Cards Grid */}
          <div
            className="grid grid-cols-1 md:grid-cols-3 border rounded-lg overflow-hidden"
            style={{ borderColor: 'var(--color-border)', background: 'white' }}
          >
            {BUSINESS_CHALLENGES.map((c, i) => (
              <div
                key={c.title}
                className="group relative p-8 lg:p-10 border-b md:border-b-0 md:border-r transition-all duration-300 hover:bg-[var(--color-surface)]"
                style={{
                  borderColor: 'var(--color-border)',
                  borderRightWidth: i < BUSINESS_CHALLENGES.length - 1 ? 1 : 0,
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
            <div className="max-w-3xl">
              <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: 'var(--color-gold)' }}>
                What We Do
              </p>
              <h2
                className="font-display text-4xl lg:text-5xl font-semibold text-white mb-5"
                style={{ lineHeight: 1.15 }}
              >
                Five Consulting Capabilities Connected by Execution
              </h2>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)' }}>
                Each engagement is built around the client's current stage, commercial priorities
                and internal capacity. StratRoot can undertake a focused assignment or combine
                capabilities under one implementation plan.
              </p>
            </div>
            <Link to="/services" className="inline-flex items-center gap-2 text-sm font-medium" style={{ color: 'var(--color-gold)' }}>
              View All Services <ArrowUpRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {SERVICES.map((s) => (
              <Link
                key={s.to}
                to={s.to}
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
                  {s.linkLabel} <ArrowRight size={12} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── How StratRoot Works ── */}
      <section className="py-20 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-xl mb-16">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: 'var(--color-gold)' }}>
              Our Working Method
            </p>
            <h2
              className="font-display text-4xl lg:text-5xl font-semibold tracking-tight"
              style={{ color: 'var(--color-charcoal)', lineHeight: 1.15 }}
            >
              A Clear Route from Diagnosis to Execution
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {HOW_WE_WORK.map((s) => (
              <div
                key={s.step}
                className="p-6 rounded-lg border transition-colors duration-300 hover:border-[var(--color-accent)]"
                style={{ borderColor: 'var(--color-border)' }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center mb-5"
                  style={{ background: 'var(--color-surface)' }}
                >
                  <s.icon size={17} style={{ color: 'var(--color-accent)' }} />
                </div>
                <p className="text-[11px] font-bold tracking-wide mb-1" style={{ color: 'var(--color-gold)' }}>
                  {s.step}
                </p>
                <h3 className="font-semibold text-sm mb-2" style={{ color: 'var(--color-charcoal)' }}>
                  {s.title}
                </h3>
                <p className="text-xs leading-relaxed" style={{ color: 'var(--color-muted)' }}>
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Industries Preview ── */}
      <section className="py-20 lg:py-20" style={{ background: 'var(--color-primary)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: 'var(--color-gold)' }}>
              Industries
            </p>
            <h2
              className="font-display text-4xl lg:text-5xl font-semibold text-white mb-6"
              style={{ lineHeight: 1.15 }}
            >
              Experience Applied to the Context of Your Business
            </h2>
            <p className="text-sm lg:text-base leading-relaxed" style={{ color: 'var(--color-muted)' }}>
              The route to market, buying process and execution requirements differ by sector.
              StratRoot adapts each assignment to the product, buyer type, channel structure,
              compliance environment and operating reality involved.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {INDUSTRIES.map((ind) => (
              <div
                key={ind}
                className="flex items-start gap-3 p-5 rounded-lg border"
                style={{ borderColor: 'rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.05)' }}
              >
                <span
                  className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ background: 'var(--color-gold)' }}
                />
                <p className="text-sm text-white/85">{ind}</p>
              </div>
            ))}
          </div>

          <Link
            to="/industries"
            className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-white rounded transition-transform hover:-translate-y-0.5"
            style={{ background: 'var(--color-accent)' }}
          >
            View Industries We Serve <ArrowRight size={16} />
          </Link>
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
                Recommendations are built around the client's actual capabilities, resources,
                market position and management priorities. StratRoot stays close to execution so
                that decisions can be translated into defined actions and reviewed against real
                progress.
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
                A Message from the Founder
              </p>

              {/* Founder photograph — placeholder monogram until an approved
                  professional photograph is supplied. Do not ship this
                  monogram on the live site; replace with the real photo
                  (see developer instruction in the About page brief). */}
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
                Saurabh Chalse, Founder and Principal Consultant, StratRoot India
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
                  "Business owners usually do not need another long report. They need a clear
                  view of the opportunity, an honest understanding of the constraints and a
                  practical route to action. StratRoot was created to provide that combination of
                  commercial thinking and execution support."
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
            Discuss the Market, Sales or
            <br />
            Execution Challenge in Front of Your Business
          </h2>
          <p className="text-base lg:text-lg mb-12 max-w-xl mx-auto" style={{ color: 'var(--color-muted)' }}>
            Tell us what you are trying to achieve, where progress is slowing and what outcome
            matters most. We will review the requirement and suggest the most practical next
            step.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-10 py-5 text-sm font-semibold text-white rounded"
            style={{ background: 'var(--color-accent)' }}
          >
            Discuss Your Requirement
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  )
}
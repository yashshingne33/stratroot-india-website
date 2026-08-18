import { useState } from 'react'
import { Link } from 'react-router'
import {
  ArrowRight, ChevronDown, TrendingUp, Settings, Globe, BarChart3,
  Users, Zap, Package, CheckCircle, Plus, Minus, ArrowUpRight, Target,
  Award, Shield, Clock
} from 'lucide-react'

const PROBLEMS = [
  {
    number: '01',
    title: 'Revenue Stagnation',
    body: 'Your business has plateaued. Top-line growth has flatlined despite market expansion, and you don\'t know why or where to start.',
  },
  {
    number: '02',
    title: 'Operational Chaos',
    body: 'Processes are undefined, teams work in silos, and scaling is impossible without multiplying problems proportionally.',
  },
  {
    number: '03',
    title: 'Export Ceiling',
    body: 'You\'ve built a strong domestic business but can\'t break through the ₹50 crore export ceiling. Compliance, buyers, and logistics feel overwhelming.',
  },
  {
    number: '04',
    title: 'Leadership Vacuum',
    body: 'The founder is the bottleneck. Critical decisions wait on one person, and building a second layer of leadership has failed repeatedly.',
  },
  {
    number: '05',
    title: 'Family Business Friction',
    body: 'Succession, sibling rivalry, professionalisation — the business is thriving, but the family dynamics are threatening everything you\'ve built.',
  },
  {
    number: '06',
    title: 'Capital Inefficiency',
    body: 'Working capital is always tight despite decent margins. Your finance function can\'t provide the visibility you need to make confident decisions.',
  },
]

const SERVICES = [
  {
    icon: TrendingUp,
    label: 'Business Restructuring',
    desc: 'Turnaround and transformation for underperforming businesses.',
    slug: 'business-restructuring',
  },
  {
    icon: Settings,
    label: 'Operations Excellence',
    desc: 'Build lean, scalable, and repeatable operating systems.',
    slug: 'operations-excellence',
  },
  {
    icon: Globe,
    label: 'Export & Trade',
    desc: 'Enter global markets and scale international revenue.',
    slug: 'export-trade',
  },
  {
    icon: BarChart3,
    label: 'Financial Strategy',
    desc: 'CFO-grade financial intelligence and capital planning.',
    slug: 'financial-strategy',
  },
  {
    icon: Target,
    label: 'Market Entry',
    desc: 'Strategic expansion into new geographies and segments.',
    slug: 'market-entry',
  },
  {
    icon: Zap,
    label: 'Digital Transformation',
    desc: 'Technology-led productivity and process modernisation.',
    slug: 'digital-transformation',
  },
  {
    icon: Users,
    label: 'HR & Org Design',
    desc: 'Build leadership teams and organisational structures that scale.',
    slug: 'hr-org-design',
  },
  {
    icon: Package,
    label: 'Supply Chain',
    desc: 'End-to-end supply chain optimisation and cost reduction.',
    slug: 'supply-chain',
  },
]

const FRAMEWORK = [
  {
    phase: 'Phase 1',
    title: 'Diagnose',
    duration: 'Weeks 1–3',
    desc: 'Deep-dive diagnostic across financials, operations, people, and market position. We don\'t rely on what you tell us — we verify.',
  },
  {
    phase: 'Phase 2',
    title: 'Design',
    duration: 'Weeks 4–6',
    desc: 'Co-create a structured execution roadmap with clear milestones, owners, and accountability mechanisms.',
  },
  {
    phase: 'Phase 3',
    title: 'Deploy',
    duration: 'Months 2–6',
    desc: 'Embed with your team. We work alongside your people — not above them — to implement changes that stick.',
  },
  {
    phase: 'Phase 4',
    title: 'Sustain',
    duration: 'Ongoing',
    desc: 'Build internal capability so the organisation doesn\'t regress. Governance structures, KPI systems, and leadership coaching.',
  },
]

const INDUSTRIES = [
  { label: 'Manufacturing', sub: '32 engagements', img: 'photo-1581091226825-a6a2a5aee158' },
  { label: 'Exports & Trade', sub: '18 engagements', img: 'photo-1586528116311-ad8dd3c8310d' },
  { label: 'Engineering', sub: '14 engagements', img: 'photo-1565043589221-2e58a0f43d8b' },
  { label: 'Consumer Goods', sub: '9 engagements', img: 'photo-1560472354-b33ff0c44a43' },
  { label: 'Family Business', sub: '22 engagements', img: 'photo-1507003211169-0a1dd7228f2d' },
  { label: 'MSMEs', sub: '30+ engagements', img: 'photo-1454165804606-c3d57bc86b40' },
]

const CASE_STUDIES = [
  {
    label: 'Manufacturing',
    title: 'Turning Around a Loss-Making Auto Component Manufacturer',
    result: '₹18 Cr loss to ₹6 Cr profit in 18 months',
    slug: 'auto-component-turnaround',
  },
  {
    label: 'Exports',
    title: 'Scaling Exports from ₹40 Cr to ₹180 Cr in 24 Months',
    result: '4.5× revenue growth with 3 new international markets',
    slug: 'export-scaling',
  },
  {
    label: 'Family Business',
    title: 'Restructuring a Third-Generation Business for Modern Growth',
    result: 'Professionalised leadership, ₹120 Cr → ₹210 Cr in 3 years',
    slug: 'family-business-restructuring',
  },
]

const INSIGHTS = [
  {
    date: 'June 2025',
    readTime: '8 min read',
    title: 'The Hidden Cost of Weak Operations in Indian Manufacturing',
    excerpt: 'Most manufacturers focus on sales. The real margin killers are invisible — and they live in your operations.',
    slug: 'hidden-cost-weak-operations',
  },
  {
    date: 'May 2025',
    readTime: '6 min read',
    title: 'Why Most Indian Exporters Plateau at ₹50 Crore',
    excerpt: 'The systems that took you to ₹50 Cr are precisely what prevent you from reaching ₹200 Cr.',
    slug: 'exporter-plateau',
  },
  {
    date: 'April 2025',
    readTime: '10 min read',
    title: 'The Family Business Succession Problem Nobody Talks About',
    excerpt: 'It\'s not about who inherits. It\'s about what kind of organisation you\'re handing over.',
    slug: 'family-business-succession',
  },
]

const FAQS = [
  {
    q: 'What makes StratRoot different from traditional management consultants?',
    a: 'Most consultants deliver a report and leave. We stay through implementation. Our model is based on embedded execution — we work alongside your team until the outcomes are real and measurable.',
  },
  {
    q: 'What size of business do you typically work with?',
    a: 'We work with businesses from ₹10 Crore to ₹500+ Crore in annual revenue. Our clients are typically in growth inflection points, turnaround situations, or scaling complexity.',
  },
  {
    q: 'How long does a typical engagement last?',
    a: 'Engagements range from 3-month diagnostic and strategy projects to 18-month full implementation partnerships. Most transformation work takes 12–18 months to show durable results.',
  },
  {
    q: 'Do you work with family-owned businesses?',
    a: 'Yes — and we specialise in it. Family businesses require a different kind of sensitivity. We\'ve helped 22+ family-owned companies navigate succession, professionalisation, and growth without breaking what makes them special.',
  },
  {
    q: 'What is your fee structure?',
    a: 'We work on monthly retainers with milestone-linked performance components. We believe in aligning our success with yours. Initial diagnostic engagements are fixed-fee.',
  },
]

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div>
      {/* ── Hero ── */}
<section
  className="relative flex flex-col justify-center min-h-[90vh] overflow-hidden"
  style={{ background: 'var(--color-primary)' }}
>
  {/* Left-side depth gradient — keeps text clear over the background */}
  <div
    className="absolute inset-0"
    style={{
      background: 'linear-gradient(90deg, var(--color-primary) 0%, var(--color-primary) 40%, rgba(16,42,67,0.45) 70%, transparent 100%)',
      zIndex: 2,
    }}
  />

  {/* World map network graphic (matches screenshot visual layout) */}
  <div 
    className="absolute inset-0 w-full h-full pointer-events-none opacity-80"
    style={{
      backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1600&auto=format&fit=crop')`,
      backgroundPosition: 'right center',
      backgroundSize: 'cover',
      mixBlendMode: 'screen',
      zIndex: 1
    }}
  />

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-6 py-24 w-full" style={{ zIndex: 3 }}>
    <div className="max-w-2xl">
      <h1
        className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-white mb-6"
        style={{ lineHeight: 1.12, letterSpacing: '-0.01em' }}
      >
        Rooting Your Business <br />
        in Global Markets
      </h1>
      <p className="text-base lg:text-lg text-white/80 max-w-xl mb-10 leading-relaxed">
        Export market strategy, buyer connections, and sales development for manufacturers and traders.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          to="/consultation"
          className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold text-white rounded transition-transform hover:-translate-y-0.5"
          style={{ background: 'var(--color-accent)' }}
        >
          Start a Conversation
        </Link>
        <Link
          to="/services"
          className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-medium rounded border transition-colors hover:bg-white/5"
          style={{ borderColor: 'var(--color-gold)', color: 'var(--color-gold)' }}
        >
          Explore Services
        </Link>
      </div>
    </div>

    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-10 mt-20 pt-8 border-t border-white/10 max-w-3xl">
      {[
        { n: '₹2,400 Cr+', l: 'Revenue Impact' },
        { n: '85+', l: 'Engagements' },
        { n: '15+', l: 'Sectors' },
        { n: '18+', l: 'Years Experience' },
      ].map((s) => (
        <div key={s.l}>
          <p className="font-display text-2xl lg:text-3xl font-semibold text-white">{s.n}</p>
          <p className="text-[11px] mt-1 uppercase tracking-widest" style={{ color: 'var(--color-muted)' }}>{s.l}</p>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* ── Business Problems ── */}
      <section className="py-24 lg:py-32" style={{ background: 'var(--color-surface)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: 'var(--color-gold)' }}>
              The Real Problems
            </p>
            <h2
              className="font-display text-4xl lg:text-5xl font-semibold"
              style={{ color: 'var(--color-charcoal)', lineHeight: 1.15 }}
            >
              Does any of this sound familiar?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-[var(--color-border)]">
            {PROBLEMS.map((p, i) => (
              <div
                key={p.number}
                className="p-8 border-b lg:border-b-0 border-r-0 md:border-r"
                style={{
                  borderColor: 'var(--color-border)',
                  borderBottomWidth: i < PROBLEMS.length - 1 ? 1 : 0,
                }}
              >
                <p
                  className="font-display text-5xl font-light mb-5"
                  style={{ color: 'var(--color-border)' }}
                >
                  {p.number}
                </p>
                <h3 className="font-semibold text-base mb-3" style={{ color: 'var(--color-charcoal)' }}>
                  {p.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)' }}>
                  {p.body}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <p className="text-sm mb-4" style={{ color: 'var(--color-muted)' }}>
              If even two of these resonate, we should talk.
            </p>
            <Link
              to="/consultation"
              className="inline-flex items-center gap-2 text-sm font-semibold"
              style={{ color: 'var(--color-accent)' }}
            >
              Book a free discovery call <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Why StratRoot ── */}
      <section className="py-24 lg:py-32" style={{ background: 'var(--color-primary)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: 'var(--color-gold)' }}>
                Why StratRoot
              </p>
              <h2
                className="font-display text-4xl lg:text-5xl font-semibold text-white mb-8"
                style={{ lineHeight: 1.15 }}
              >
                Consulting firms
                <br />
                advise. We build.
              </h2>
              <p className="text-base leading-relaxed mb-10" style={{ color: 'var(--color-muted)' }}>
                Most consultants hand over a 120-slide deck and call it transformation. We embed with your organisation — working alongside your people, building systems, removing blockers — until outcomes are real and repeatable.
              </p>
              <div className="space-y-5">
                {[
                  { icon: CheckCircle, text: 'Execution-first methodology — not report-and-leave' },
                  { icon: CheckCircle, text: 'Deep expertise in Indian family businesses and MSMEs' },
                  { icon: CheckCircle, text: 'Sector-specific teams with operational experience' },
                  { icon: CheckCircle, text: 'Performance-linked fee structures' },
                  { icon: CheckCircle, text: 'On-the-ground presence across Mumbai, Delhi, Bengaluru' },
                ].map((item) => (
                  <div key={item.text} className="flex items-start gap-3">
                    <item.icon size={16} className="mt-0.5 flex-shrink-0" style={{ color: 'var(--color-accent)' }} />
                    <p className="text-sm" style={{ color: '#D1D5DB' }}>{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Target, n: '94%', l: 'Client retention rate' },
                { icon: Award, n: '#1', l: 'MSME consulting network in Western India' },
                { icon: Shield, n: '100%', l: 'Confidentiality guaranteed' },
                { icon: Clock, n: '90 days', l: 'To first visible results' },
              ].map((s) => (
                <div
                  key={s.l}
                  className="p-6 rounded-lg border"
                  style={{ background: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.12)' }}
                >
                  <s.icon size={20} className="mb-4" style={{ color: 'var(--color-gold)' }} />
                  <p className="font-display text-3xl font-semibold text-white mb-1">{s.n}</p>
                  <p className="text-xs leading-snug" style={{ color: 'var(--color-muted)' }}>{s.l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="py-24 lg:py-32" style={{ background: 'var(--color-surface)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
            <div className="max-w-xl">
              <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: 'var(--color-gold)' }}>
                What We Do
              </p>
              <h2
                className="font-display text-4xl lg:text-5xl font-semibold"
                style={{ color: 'var(--color-charcoal)', lineHeight: 1.15 }}
              >
                Eight disciplines.
                <br />
                One goal: results.
              </h2>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-medium"
              style={{ color: 'var(--color-accent)' }}
            >
              All Services <ArrowUpRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {SERVICES.map((s) => (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                className="group p-7 border border-[var(--color-border)] rounded-lg bg-white hover:border-[var(--color-accent)] hover:shadow-lg transition-all duration-300"
              >
                <s.icon
                  size={22}
                  className="mb-5 transition-colors group-hover:text-[var(--color-accent)]"
                  style={{ color: 'var(--color-charcoal)' }}
                />
                <h3 className="font-semibold text-sm mb-2" style={{ color: 'var(--color-charcoal)' }}>
                  {s.label}
                </h3>
                <p className="text-xs leading-relaxed" style={{ color: 'var(--color-muted)' }}>
                  {s.desc}
                </p>
                <div
                  className="flex items-center gap-1 mt-5 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ color: 'var(--color-accent)' }}
                >
                  Learn more <ArrowRight size={12} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Execution Framework ── */}
      <section className="py-24 lg:py-32" style={{ background: 'var(--color-primary)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-xl mb-16">
            <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: 'var(--color-gold)' }}>
              How We Work
            </p>
            <h2
              className="font-display text-4xl lg:text-5xl font-semibold text-white"
              style={{ lineHeight: 1.15 }}
            >
              The StratRoot
              <br />
              Execution Framework
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-0 relative">
            <div
              className="absolute top-6 left-0 right-0 h-px hidden lg:block"
              style={{ background: 'var(--color-gold)', opacity: 0.3 }}
            />
            {FRAMEWORK.map((f, i) => (
              <div key={f.phase} className="relative p-8 border-l border-b lg:border-b-0" style={{ borderColor: 'rgba(255,255,255,0.12)' }}>
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold mb-6"
                  style={{ background: 'var(--color-accent)', color: 'white' }}
                >
                  {i + 1}
                </div>
                <p className="text-xs font-semibold tracking-widest uppercase mb-1" style={{ color: 'var(--color-gold)' }}>
                  {f.phase}
                </p>
                <h3 className="font-display text-2xl font-semibold text-white mb-2">{f.title}</h3>
                <p className="text-xs mb-4 font-medium" style={{ color: 'var(--color-muted)' }}>{f.duration}</p>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)' }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Industries ── */}
      <section className="py-24 lg:py-32" style={{ background: 'var(--color-surface)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: 'var(--color-gold)' }}>
                Industries
              </p>
              <h2
                className="font-display text-4xl lg:text-5xl font-semibold"
                style={{ color: 'var(--color-charcoal)', lineHeight: 1.15 }}
              >
                Sector-specific
                <br />
                expertise
              </h2>
            </div>
            <Link to="/industries" className="inline-flex items-center gap-2 text-sm font-medium" style={{ color: 'var(--color-accent)' }}>
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
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(16,42,67,0.85) 30%, transparent 70%)' }} />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="font-display text-lg font-semibold text-white">{ind.label}</h3>
                  <p className="text-xs mt-0.5 text-white/70">{ind.sub}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Case Studies ── */}
      <section className="py-24 lg:py-32" style={{ background: 'var(--color-primary)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: 'var(--color-gold)' }}>
                Proof of Work
              </p>
              <h2
                className="font-display text-4xl lg:text-5xl font-semibold text-white"
                style={{ lineHeight: 1.15 }}
              >
                Results, not
                <br />
                recommendations.
              </h2>
            </div>
            <Link to="/case-studies" className="inline-flex items-center gap-2 text-sm font-medium" style={{ color: 'var(--color-accent)' }}>
              All Case Studies <ArrowUpRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {CASE_STUDIES.map((cs) => (
              <Link
                key={cs.slug}
                to={`/case-studies/${cs.slug}`}
                className="group p-8 border rounded-lg transition-all duration-300 hover:border-[var(--color-accent)]"
                style={{ borderColor: 'rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.05)' }}
              >
                <span
                  className="inline-block text-xs font-semibold tracking-widest uppercase px-2 py-1 rounded mb-6"
                  style={{ background: 'rgba(198,161,91,0.15)', color: 'var(--color-gold)' }}
                >
                  {cs.label}
                </span>
                <h3
                  className="font-display text-xl font-semibold text-white mb-4"
                  style={{ lineHeight: 1.3 }}
                >
                  {cs.title}
                </h3>
                <div className="h-px mb-4" style={{ background: 'rgba(255,255,255,0.12)' }} />
                <p className="text-sm font-medium" style={{ color: 'var(--color-accent)' }}>{cs.result}</p>
                <div
                  className="flex items-center gap-1 mt-6 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ color: 'var(--color-gold)' }}
                >
                  Read case study <ArrowRight size={12} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Insights ── */}
      <section className="py-24 lg:py-32" style={{ background: 'var(--color-surface)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: 'var(--color-gold)' }}>
                Insights
              </p>
              <h2
                className="font-display text-4xl lg:text-5xl font-semibold"
                style={{ color: 'var(--color-charcoal)', lineHeight: 1.15 }}
              >
                Thinking that
                <br />
                cuts through.
              </h2>
            </div>
            <Link to="/insights" className="inline-flex items-center gap-2 text-sm font-medium" style={{ color: 'var(--color-accent)' }}>
              All Insights <ArrowUpRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {INSIGHTS.map((a) => (
              <Link
                key={a.slug}
                to={`/insights/${a.slug}`}
                className="group"
              >
                <div className="aspect-video rounded-lg overflow-hidden mb-5" style={{ background: 'var(--color-border)' }}>
                  <img
                    src={`https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=340&fit=crop&auto=format`}
                    alt={a.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-medium" style={{ color: 'var(--color-muted)' }}>{a.date}</span>
                  <span style={{ color: 'var(--color-border)' }}>·</span>
                  <span className="text-xs font-medium" style={{ color: 'var(--color-muted)' }}>{a.readTime}</span>
                </div>
                <h3
                  className="font-display text-xl font-semibold mb-2 group-hover:text-[var(--color-accent)] transition-colors"
                  style={{ color: 'var(--color-charcoal)', lineHeight: 1.3 }}
                >
                  {a.title}
                </h3>
                <p className="text-sm leading-relaxed line-clamp-2" style={{ color: 'var(--color-muted)' }}>
                  {a.excerpt}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials Placeholder ── */}
      <section className="py-20" style={{ background: 'var(--color-surface)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: 'var(--color-gold)' }}>
            Client Voices
          </p>
          <h2 className="font-display text-3xl lg:text-4xl font-semibold mb-4" style={{ color: 'var(--color-charcoal)' }}>
            Testimonials Coming Soon
          </h2>
          <p className="text-sm max-w-md mx-auto" style={{ color: 'var(--color-muted)' }}>
            We are in the process of collecting formal testimonials from our clients. Confidentiality is our default — outcomes speak louder.
          </p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 lg:py-32" style={{ background: 'var(--color-surface)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: 'var(--color-gold)' }}>
                Common Questions
              </p>
              <h2
                className="font-display text-4xl lg:text-5xl font-semibold"
                style={{ color: 'var(--color-charcoal)', lineHeight: 1.15 }}
              >
                Straightforward
                <br />
                answers.
              </h2>
              <p className="text-sm mt-6 leading-relaxed" style={{ color: 'var(--color-muted)' }}>
                We believe transparency builds trust. If you have a question not listed here, reach out directly.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 mt-6 text-sm font-medium"
                style={{ color: 'var(--color-accent)' }}
              >
                Ask us anything <ArrowRight size={14} />
              </Link>
            </div>
            <div className="space-y-0">
              {FAQS.map((faq, i) => (
                <div
                  key={i}
                  className="border-b"
                  style={{ borderColor: 'var(--color-border)' }}
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-start justify-between gap-4 py-5 text-left"
                  >
                    <span className="text-sm font-semibold" style={{ color: 'var(--color-charcoal)' }}>
                      {faq.q}
                    </span>
                    {openFaq === i
                      ? <Minus size={16} className="flex-shrink-0 mt-0.5" style={{ color: 'var(--color-accent)' }} />
                      : <Plus size={16} className="flex-shrink-0 mt-0.5" style={{ color: 'var(--color-muted)' }} />
                    }
                  </button>
                  {openFaq === i && (
                    <div className="pb-5">
                      <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)' }}>
                        {faq.a}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Consultation CTA ── */}
      <section className="py-24 lg:py-32" style={{ background: 'var(--color-primary)' }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-6" style={{ color: 'var(--color-gold)' }}>
            First Conversation, No Charge
          </p>
          <h2
            className="font-display text-4xl lg:text-6xl font-semibold text-white mb-8"
            style={{ lineHeight: 1.1 }}
          >
            Book a discovery
            <br />
            <em>conversation today.</em>
          </h2>
          <p className="text-base lg:text-lg mb-12 max-w-xl mx-auto" style={{ color: 'var(--color-muted)' }}>
            60 minutes. No sales pitch. We'll tell you exactly where we can help — and where we can't.
          </p>
          <Link
            to="/consultation"
            className="inline-flex items-center gap-2 px-10 py-5 text-sm font-semibold text-white rounded"
            style={{ background: 'var(--color-accent)' }}
          >
            Schedule Your Discovery Call
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  )
}










// import { useState } from 'react'
// import { Link } from 'react-router'
// import {
//   ArrowRight, TrendingUp, Settings, Globe, BarChart3,
//   Users, Zap, Package, CheckCircle, ArrowUpRight, Target,
//   Award, Shield, Clock, Plus, Minus
// } from 'lucide-react'

// const PROBLEMS = [
//   { number: '01', title: 'Revenue Stagnation', body: 'Growth flatlined despite market expansion.' },
//   { number: '02', title: 'Operational Chaos', body: 'Undefined processes make scaling impossible.' },
//   { number: '03', title: 'Export Ceiling', body: 'Stuck at the ₹50 Cr export ceiling.' },
//   { number: '04', title: 'Leadership Vacuum', body: 'Founder remains the central bottleneck.' },
//   { number: '05', title: 'Family Business Friction', body: 'Succession and dynamics threatening progress.' },
//   { number: '06', title: 'Capital Inefficiency', body: 'Tight working capital despite strong margins.' },
// ]

// const SERVICES = [
//   { icon: TrendingUp, label: 'Business Restructuring', desc: 'Turnaround for underperforming businesses.', slug: 'business-restructuring' },
//   { icon: Settings, label: 'Operations Excellence', desc: 'Build lean, scalable operating systems.', slug: 'operations-excellence' },
//   { icon: Globe, label: 'Export & Trade', desc: 'Enter global markets and scale revenue.', slug: 'export-trade' },
//   { icon: BarChart3, label: 'Financial Strategy', desc: 'CFO-grade financial intelligence.', slug: 'financial-strategy' },
//   { icon: Target, label: 'Market Entry', desc: 'Strategic expansion into new geographies.', slug: 'market-entry' },
//   { icon: Zap, label: 'Digital Transformation', desc: 'Technology-led process modernisation.', slug: 'digital-transformation' },
//   { icon: Users, label: 'HR & Org Design', desc: 'Build leadership teams that scale.', slug: 'hr-org-design' },
//   { icon: Package, label: 'Supply Chain', desc: 'Optimisation and cost reduction.', slug: 'supply-chain' },
// ]

// const FRAMEWORK = [
//   { phase: 'Phase 1', title: 'Diagnose', duration: 'Weeks 1–3', desc: 'Deep-dive across financials, operations, and market position.' },
//   { phase: 'Phase 2', title: 'Design', duration: 'Weeks 4–6', desc: 'Structured execution roadmap with clear milestones.' },
//   { phase: 'Phase 3', title: 'Deploy', duration: 'Months 2–6', desc: 'Embed with your team to implement changes directly.' },
//   { phase: 'Phase 4', title: 'Sustain', duration: 'Ongoing', desc: 'Build internal capability and KPI governance.' },
// ]

// const INDUSTRIES = [
//   { label: 'Manufacturing', sub: '32 engagements', img: 'photo-1581091226825-a6a2a5aee158' },
//   { label: 'Exports & Trade', sub: '18 engagements', img: 'photo-1586528116311-ad8dd3c8310d' },
//   { label: 'Engineering', sub: '14 engagements', img: 'photo-1565043589221-2e58a0f43d8b' },
//   { label: 'Consumer Goods', sub: '9 engagements', img: 'photo-1560472354-b33ff0c44a43' },
//   { label: 'Family Business', sub: '22 engagements', img: 'photo-1507003211169-0a1dd7228f2d' },
//   { label: 'MSMEs', sub: '30+ engagements', img: 'photo-1454165804606-c3d57bc86b40' },
// ]

// const CASE_STUDIES = [
//   { label: 'Manufacturing', title: 'Turning Around a Loss-Making Auto Component Manufacturer', result: '₹18 Cr loss to ₹6 Cr profit in 18 months', slug: 'auto-component-turnaround' },
//   { label: 'Exports', title: 'Scaling Exports from ₹40 Cr to ₹180 Cr in 24 Months', result: '4.5× revenue growth across 3 new markets', slug: 'export-scaling' },
//   { label: 'Family Business', title: 'Restructuring a Third-Generation Business for Growth', result: '₹120 Cr → ₹210 Cr in 3 years', slug: 'family-business-restructuring' },
// ]

// const FAQS = [
//   { q: 'What makes StratRoot different from traditional consultants?', a: 'We stay through implementation. Our model is embedded execution alongside your team.' },
//   { q: 'What size of business do you typically work with?', a: 'Businesses from ₹10 Crore to ₹500+ Crore in annual revenue.' },
//   { q: 'How long does a typical engagement last?', a: 'Engagements range from 3-month strategy projects to 18-month full partnerships.' },
//   { q: 'Do you work with family-owned businesses?', a: 'Yes — we specialise in helping family companies navigate succession and growth.' },
// ]

// export default function Home() {
//   const [openFaq, setOpenFaq] = useState<number | null>(null)

//   return (
//     <div className="bg-[#0b192c] text-white">
//       {/* ── Hero Section ── */}
//       <section className="relative flex flex-col justify-center min-h-[80vh] overflow-hidden bg-[#0b192c]">
//         {/* Dark Left Gradient Overlay */}
//         <div
//           className="absolute inset-0 z-10"
//           style={{
//             background: 'linear-gradient(90deg, #0b192c 0%, #0b192c 45%, rgba(11,25,44,0.6) 75%, transparent 100%)',
//           }}
//         />

//         {/* Global Map Right Graphic */}
//         <div
//           className="absolute inset-0 w-full h-full pointer-events-none opacity-70 z-0"
//           style={{
//             backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1600&auto=format&fit=crop')`,
//             backgroundPosition: 'right center',
//             backgroundSize: 'cover',
//             mixBlendMode: 'screen',
//           }}
//         />

//         <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16 w-full z-20">
//           <div className="max-w-2xl">
//             <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-white mb-6 leading-tight">
//               Rooting Your Business <br />
//               in Global Markets
//             </h1>
//             <p className="text-base lg:text-lg text-slate-300 max-w-xl mb-8 leading-relaxed">
//               Export market strategy, buyer connections, and sales development for manufacturers and traders.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 mb-16">
//               <Link
//                 to="/consultation"
//                 className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-[#10b981] hover:bg-[#059669] rounded transition-all"
//               >
//                 Start a Conversation
//               </Link>
//               <Link
//                 to="/services"
//                 className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-[#fbbf24] border border-[#fbbf24] hover:bg-[#fbbf24]/10 rounded transition-all"
//               >
//                 Explore Services
//               </Link>
//             </div>
//           </div>

//           {/* Stats Bar */}
//           <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-slate-800 max-w-3xl">
//             {[
//               { n: '₹2,400 Cr+', l: 'Revenue Impact' },
//               { n: '85+', l: 'Engagements' },
//               { n: '15+', l: 'Sectors' },
//               { n: '18+', l: 'Years Experience' },
//             ].map((s) => (
//               <div key={s.l}>
//                 <p className="font-display text-2xl lg:text-3xl font-semibold text-white">{s.n}</p>
//                 <p className="text-[11px] mt-1 uppercase tracking-widest text-slate-400">{s.l}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ── Business Problems ── */}
//       <section className="py-16 bg-[#0f213a] border-t border-slate-800">
//         <div className="max-w-7xl mx-auto px-6 lg:px-8">
//           <div className="max-w-xl mb-12">
//             <p className="text-xs font-semibold tracking-widest uppercase text-[#fbbf24] mb-2">The Real Problems</p>
//             <h2 className="font-display text-3xl lg:text-4xl font-semibold text-white">Does any of this sound familiar?</h2>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {PROBLEMS.map((p) => (
//               <div key={p.number} className="p-6 bg-[#0b192c] border border-slate-800 rounded-lg">
//                 <p className="font-display text-3xl font-light text-[#fbbf24] mb-3">{p.number}</p>
//                 <h3 className="font-semibold text-base text-white mb-2">{p.title}</h3>
//                 <p className="text-sm text-slate-400 leading-relaxed">{p.body}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ── Why StratRoot ── */}
//       <section className="py-16 bg-[#0b192c]">
//         <div className="max-w-7xl mx-auto px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//             <div>
//               <p className="text-xs font-semibold tracking-widest uppercase text-[#fbbf24] mb-2">Why StratRoot</p>
//               <h2 className="font-display text-3xl lg:text-4xl font-semibold text-white mb-6">Consulting firms advise. We build.</h2>
//               <p className="text-sm text-slate-300 leading-relaxed mb-8">
//                 We embed with your organisation — working alongside your team, building systems, and removing blockers until outcomes are real.
//               </p>
//               <div className="space-y-4">
//                 {[
//                   'Execution-first methodology — not report-and-leave',
//                   'Deep expertise in Indian family businesses and MSMEs',
//                   'Sector-specific teams with operational experience',
//                   'Performance-linked fee structures',
//                 ].map((text) => (
//                   <div key={text} className="flex items-center gap-3">
//                     <CheckCircle size={16} className="text-[#10b981] flex-shrink-0" />
//                     <p className="text-sm text-slate-300">{text}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//             <div className="grid grid-cols-2 gap-4">
//               {[
//                 { icon: Target, n: '94%', l: 'Client retention rate' },
//                 { icon: Award, n: '#1', l: 'MSME consulting network' },
//                 { icon: Shield, n: '100%', l: 'Confidentiality guaranteed' },
//                 { icon: Clock, n: '90 days', l: 'To first visible results' },
//               ].map((s) => (
//                 <div key={s.l} className="p-5 bg-[#0f213a] rounded-lg border border-slate-800">
//                   <s.icon size={20} className="text-[#fbbf24] mb-3" />
//                   <p className="font-display text-2xl font-semibold text-white">{s.n}</p>
//                   <p className="text-xs text-slate-400 mt-1">{s.l}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ── Services ── */}
//       <section className="py-16 bg-[#0f213a] border-t border-slate-800">
//         <div className="max-w-7xl mx-auto px-6 lg:px-8">
//           <div className="flex justify-between items-end mb-12">
//             <div>
//               <p className="text-xs font-semibold tracking-widest uppercase text-[#fbbf24] mb-2">What We Do</p>
//               <h2 className="font-display text-3xl lg:text-4xl font-semibold text-white">Eight disciplines. One goal: results.</h2>
//             </div>
//             <Link to="/services" className="inline-flex items-center gap-1 text-sm text-[#10b981]">
//               All Services <ArrowUpRight size={14} />
//             </Link>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//             {SERVICES.map((s) => (
//               <Link key={s.slug} to={`/services/${s.slug}`} className="p-6 bg-[#0b192c] border border-slate-800 rounded-lg hover:border-[#10b981] transition-all">
//                 <s.icon size={20} className="text-[#fbbf24] mb-4" />
//                 <h3 className="font-semibold text-sm text-white mb-2">{s.label}</h3>
//                 <p className="text-xs text-slate-400 leading-relaxed">{s.desc}</p>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ── Execution Framework ── */}
//       <section className="py-16 bg-[#0b192c]">
//         <div className="max-w-7xl mx-auto px-6 lg:px-8">
//           <div className="mb-12">
//             <p className="text-xs font-semibold tracking-widest uppercase text-[#fbbf24] mb-2">How We Work</p>
//             <h2 className="font-display text-3xl lg:text-4xl font-semibold text-white">The Execution Framework</h2>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {FRAMEWORK.map((f, i) => (
//               <div key={f.phase} className="p-6 bg-[#0f213a] border border-slate-800 rounded-lg">
//                 <div className="w-8 h-8 rounded-full bg-[#10b981] text-white flex items-center justify-center text-xs font-bold mb-4">
//                   {i + 1}
//                 </div>
//                 <p className="text-xs font-semibold text-[#fbbf24] uppercase mb-1">{f.phase}</p>
//                 <h3 className="font-display text-xl font-semibold text-white mb-1">{f.title}</h3>
//                 <p className="text-xs text-slate-400 mb-3">{f.duration}</p>
//                 <p className="text-xs text-slate-300 leading-relaxed">{f.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ── Industries ── */}
//       <section className="py-16 bg-[#0f213a] border-t border-slate-800">
//         <div className="max-w-7xl mx-auto px-6 lg:px-8">
//           <div className="flex justify-between items-end mb-12">
//             <div>
//               <p className="text-xs font-semibold tracking-widest uppercase text-[#fbbf24] mb-2">Industries</p>
//               <h2 className="font-display text-3xl lg:text-4xl font-semibold text-white">Sector-specific expertise</h2>
//             </div>
//             <Link to="/industries" className="inline-flex items-center gap-1 text-sm text-[#10b981]">
//               All Industries <ArrowUpRight size={14} />
//             </Link>
//           </div>
//           <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
//             {INDUSTRIES.map((ind) => (
//               <Link key={ind.label} to="/industries" className="relative group overflow-hidden rounded-lg aspect-video">
//                 <img
//                   src={`https://images.unsplash.com/${ind.img}?w=600&h=340&fit=crop&auto=format`}
//                   alt={ind.label}
//                   className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-[#0b192c] via-[#0b192c]/40 to-transparent" />
//                 <div className="absolute bottom-4 left-4">
//                   <h3 className="font-display text-base font-semibold text-white">{ind.label}</h3>
//                   <p className="text-xs text-slate-300">{ind.sub}</p>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ── Case Studies ── */}
//       <section className="py-16 bg-[#0b192c]">
//         <div className="max-w-7xl mx-auto px-6 lg:px-8">
//           <div className="flex justify-between items-end mb-12">
//             <div>
//               <p className="text-xs font-semibold tracking-widest uppercase text-[#fbbf24] mb-2">Proof of Work</p>
//               <h2 className="font-display text-3xl lg:text-4xl font-semibold text-white">Results, not recommendations.</h2>
//             </div>
//             <Link to="/case-studies" className="inline-flex items-center gap-1 text-sm text-[#10b981]">
//               All Case Studies <ArrowUpRight size={14} />
//             </Link>
//           </div>
//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//             {CASE_STUDIES.map((cs) => (
//               <Link key={cs.slug} to={`/case-studies/${cs.slug}`} className="p-6 bg-[#0f213a] border border-slate-800 rounded-lg hover:border-[#10b981] transition-all">
//                 <span className="text-[10px] font-semibold text-[#fbbf24] bg-[#fbbf24]/10 px-2 py-1 rounded tracking-wider uppercase mb-4 inline-block">
//                   {cs.label}
//                 </span>
//                 <h3 className="font-display text-lg font-semibold text-white mb-4">{cs.title}</h3>
//                 <p className="text-sm text-[#10b981] font-medium">{cs.result}</p>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ── FAQ ── */}
//       <section className="py-16 bg-[#0f213a] border-t border-slate-800">
//         <div className="max-w-4xl mx-auto px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <p className="text-xs font-semibold tracking-widest uppercase text-[#fbbf24] mb-2">Common Questions</p>
//             <h2 className="font-display text-3xl font-semibold text-white">Straightforward answers.</h2>
//           </div>
//           <div className="space-y-4">
//             {FAQS.map((faq, i) => (
//               <div key={i} className="border-b border-slate-800 pb-4">
//                 <button
//                   onClick={() => setOpenFaq(openFaq === i ? null : i)}
//                   className="w-full flex justify-between items-center text-left py-2 text-sm font-semibold text-white"
//                 >
//                   <span>{faq.q}</span>
//                   {openFaq === i ? <Minus size={16} className="text-[#10b981]" /> : <Plus size={16} className="text-slate-400" />}
//                 </button>
//                 {openFaq === i && <p className="text-xs text-slate-400 mt-2 leading-relaxed">{faq.a}</p>}
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ── CTA ── */}
//       <section className="py-16 bg-[#0b192c] border-t border-slate-800 text-center">
//         <div className="max-w-3xl mx-auto px-6 lg:px-8">
//           <h2 className="font-display text-3xl lg:text-4xl font-semibold text-white mb-4">Book a discovery conversation today.</h2>
//           <p className="text-sm text-slate-400 mb-8 max-w-md mx-auto">60 minutes. No sales pitch. We'll outline where we can help.</p>
//           <Link
//             to="/consultation"
//             className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold text-white bg-[#10b981] hover:bg-[#059669] rounded transition-all"
//           >
//             Schedule Discovery Call <ArrowRight size={16} />
//           </Link>
//         </div>
//       </section>
//     </div>
//   )
// }
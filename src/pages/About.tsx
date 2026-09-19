// import { Link } from 'react-router'
// import { ArrowRight, Compass, Handshake, Wrench, ShieldCheck, TrendingUp } from 'lucide-react'

// const VALUES = [
//   {
//     icon: Compass,
//     title: 'Clarity',
//     body: 'Simplify complex business challenges and establish clear priorities.',
//   },
//   {
//     icon: Handshake,
//     title: 'Ownership',
//     body: 'Approach every assignment with responsibility and management-level involvement.',
//   },
//   {
//     icon: Wrench,
//     title: 'Practical Thinking',
//     body: 'Build recommendations around commercial and operational realities.',
//   },
//   {
//     icon: ShieldCheck,
//     title: 'Integrity',
//     body: 'Maintain confidentiality, transparency and responsible business conduct.',
//   },
//   {
//     icon: TrendingUp,
//     title: 'Long-Term Value',
//     body: 'Build capabilities, systems and market positions that continue beyond the engagement.',
//   },
// ]

// export default function About() {
//   return (
//     <div>
      
//       {/* ── Header ── */}
//       <section className="pt-36 pb-20 lg:pt-48 lg:pb-24" style={{ background: 'var(--color-primary)' }}>
//         <div className="max-w-7xl mx-auto px-6 lg:px-8">
//           <div className="flex items-center gap-3 mb-8">
//             <span className="h-px w-12" style={{ background: 'var(--color-gold)' }} />
//             <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: 'var(--color-gold)' }}>
//               About Us
//             </span>
//           </div>
//           <h1
//             className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-white max-w-4xl mb-6"
//             style={{ lineHeight: 1.05, letterSpacing: '-0.02em' }}
//           >
//             Strategy Rooted in Reality.
//             <br />
//             <em style={{ color: 'var(--color-gold)', fontStyle: 'normal' }}>Growth Built Through Execution.</em>
//           </h1>
//           <p className="text-lg max-w-lg" style={{ color: 'var(--color-muted)' }}>
//              StratRoot India is a growth and execution consulting firm that works with businesses to
//             strengthen market positioning, develop sales opportunities, enter new markets and
//             improve operating discipline.
//           </p>
//         </div>
//       </section>

//       {/* ── Our Story ── */}
//       <section className="py-20 lg:py-20" style={{ background: 'var(--color-surface)' }}>
//         <div className="max-w-7xl mx-auto px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//             <div>
//               <p className="text-xs font-semibold tracking-widest uppercase mb-6" style={{ color: 'var(--color-gold)' }}>
//                 Our Story
//               </p>
//               <h2
//                 className="font-display text-4xl font-semibold mb-8"
//                 style={{ color: 'var(--color-charcoal)', lineHeight: 1.2 }}
//               >
//                 Recommendations create value only when they can be practically implemented.
//               </h2>
//               <div className="space-y-5 text-sm leading-relaxed" style={{ color: 'var(--color-charcoal)' }}>
//                 <p>
//                   StratRoot was established around a simple belief: business recommendations
//                   create value only when they can be practically implemented.
//                 </p>
//                 <p>
//                   Many businesses have capable products, committed management and genuine market
//                   opportunities. However, progress is often restricted by unclear priorities,
//                   fragmented execution, inadequate market intelligence or the absence of an
//                   accountable implementation structure.
//                 </p>
//                 <p>
//                   StratRoot helps bridge this gap. We work closely with founders, directors and
//                   management teams to understand their business realities, identify commercially
//                   suitable opportunities and translate strategy into defined execution.
//                 </p>
//               </div>
//             </div>

//             {/* Placeholder for authentic working photograph — swap once supplied */}
//             <div className="relative mx-auto w-full h-[280px] sm:h-[360px] lg:h-[480px]">
//               {/* offset frame — sits behind, peeking out bottom-left this time for variation */}
//               <div
//                 className="absolute -bottom-4 -left-4 w-full h-full rounded-lg border"
//                 style={{ borderColor: 'var(--color-gold)' }}
//               />

//               <div
//                 className="relative rounded-lg border overflow-hidden shadow-lg h-full"
//                 style={{ borderColor: 'var(--color-border)' }}
//               >
//                 <img
//                   src="/images/field-execution.jpg"
//                   alt="StratRoot field execution work"
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ── Mission & Vision ── */}
//       <section className="py-20 lg:py-20" style={{ background: 'var(--color-primary)' }}>
//         <div className="max-w-7xl mx-auto px-6 lg:px-8">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div
//               className="p-6 sm:p-8 lg:p-10 rounded-lg border"
//               style={{ borderColor: 'rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.05)' }}
//             >
//               <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: 'var(--color-gold)' }}>
//                 Our Mission
//               </p>
//               <p className="font-display text-xl sm:text-2xl font-semibold text-white" style={{ lineHeight: 1.4 }}>
//                 To help Indian businesses build stronger commercial foundations, access better
//                 markets and execute growth opportunities with clarity and discipline.
//               </p>
//             </div>
//             <div
//               className="p-6 sm:p-8 lg:p-10 rounded-lg border"
//               style={{ borderColor: 'rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.05)' }}
//             >
//               <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: 'var(--color-gold)' }}>
//                 Our Vision
//               </p>
//               <p className="font-display text-xl sm:text-2xl font-semibold text-white" style={{ lineHeight: 1.4 }}>
//                 To become a trusted growth and execution partner for Indian businesses seeking
//                 sustainable domestic and international expansion.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ── Our Values ── */}
//       <section className="py-20 lg:py-20" style={{ background: 'var(--color-surface)' }}>
//         <div className="max-w-7xl mx-auto px-6 lg:px-8">
//           <div className="max-w-xl mb-16">
//             <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: 'var(--color-gold)' }}>
//               How We Think
//             </p>
//             <h2 className="font-display text-4xl lg:text-5xl font-semibold" style={{ color: 'var(--color-charcoal)', lineHeight: 1.2 }}>
//               Five values that
//               <br />
//               guide every engagement.
//             </h2>
//           </div>
//           <div
//             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 -mt-px -ml-px border border-[var(--color-border)]"
//           >
//             {VALUES.map((v) => (
//               <div
//                 key={v.title}
//                 className="p-8 border-t border-l"
//                 style={{ borderColor: 'var(--color-border)' }}
//               >
//                 <v.icon size={22} className="mb-5" style={{ color: 'var(--color-accent)' }} />
//                 <h3 className="font-semibold text-base mb-3" style={{ color: 'var(--color-charcoal)' }}>
//                   {v.title}
//                 </h3>
//                 <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)' }}>
//                   {v.body}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ── Founder Profile ── */}
//       <section className="py-20 lg:py-20" style={{ background: 'var(--color-primary)' }}>
//         <div className="max-w-7xl mx-auto px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//             {/* Placeholder for founder photograph — swap once supplied */}
//             <div
//               className="rounded-lg border flex items-center justify-center order-2 lg:order-1 h-[280px] sm:h-[360px] lg:h-[480px]"
//               style={{ borderColor: 'rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.05)' }}
//             >
//               <p className="text-xs text-center px-8" style={{ color: 'var(--color-muted)' }}>
//                 Founder professional photograph
//                 <br />
//                 (to be added)
//               </p>
//             </div>

//             <div className="order-1 lg:order-2">
//               <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: 'var(--color-gold)' }}>
//                 Founder
//               </p>
//               <h2 className="font-display text-3xl lg:text-4xl font-semibold text-white mb-2">
//                 Saurabh Chalse
//               </h2>
//               <p className="text-sm font-medium mb-6" style={{ color: 'var(--color-gold)' }}>
//                 Founder & Principal Consultant
//               </p>
//               <div className="space-y-4 text-sm leading-relaxed" style={{ color: '#D1D5DB' }}>
//                 <p>
//                   Saurabh works across business strategy, exports, sales development, operations
//                   and commercial execution. His approach is centred on understanding a business at
//                   the ground level and converting opportunities into practical, reviewable action
//                   plans.
//                 </p>
//                 <p>
//                   Through StratRoot India, he works with manufacturers, exporters, agricultural
//                   enterprises, consumer businesses and project-oriented companies on assignments
//                   involving market development, business positioning, sales channels, operational
//                   systems and strategic execution.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ── CTA ── */}
//       <section className="py-20 lg:py-20" style={{ background: 'var(--color-surface)' }}>
//         <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
//           <h2
//             className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold mb-8"
//             style={{ color: 'var(--color-charcoal)', lineHeight: 1.15 }}
//           >
//             Let's Build the Next
//             <br />
//             Stage of Your Business.
//           </h2>
//           <Link
//             to="/contact"
//             className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold text-white rounded transition-transform hover:-translate-y-0.5"
//             style={{ background: 'var(--color-accent)' }}
//           >
//             Discuss Your Requirement <ArrowRight size={16} />
//           </Link>
//         </div>
//       </section>
//     </div>
//   )
// }









import { useEffect } from 'react'
import { Link } from 'react-router'
import {
  ArrowRight,
  Compass,
  Handshake,
  Wrench,
  ShieldCheck,
  TrendingUp,
  Ship,
  Factory,
  Sprout,
  BarChart3,
  Target,
  Quote,
  Milestone,
} from 'lucide-react'
import Seo from '../components/Seo'
import { SEO } from '../seo'

// ── Page metadata (from content brief: About page → Page setup) ──
// If the app already sets meta tags globally (react-helmet-async, a
// React Router meta() export, etc.), swap this effect for that pattern.
const PAGE_TITLE = 'About StratRoot India | Growth and Execution Consulting'
const PAGE_DESCRIPTION =
  'Learn how StratRoot works with Indian businesses on export development, sales, commercial strategy, operations and structured execution.'

const PRINCIPLES = [
  {
    icon: Compass,
    title: 'Clarity',
    body: 'We simplify complex commercial questions and identify the decisions that require immediate attention.',
  },
  {
    icon: Handshake,
    title: 'Ownership',
    body: 'We remain directly involved in the assignment and make responsibilities visible to all parties.',
  },
  {
    icon: Wrench,
    title: 'Practical Thinking',
    body: "We recommend actions that fit the client's commercial and operational reality.",
  },
  {
    icon: ShieldCheck,
    title: 'Integrity',
    body: 'We protect confidential information, communicate honestly and avoid promises that cannot be responsibly made.',
  },
  {
    icon: TrendingUp,
    title: 'Long-Term Value',
    body: 'We aim to leave the client with stronger market knowledge, material, processes and management visibility.',
  },
]

const MISSION_DIRECTION = [
  {
    icon: Target,
    label: '01 — Our Mission',
    text: 'To help Indian businesses build stronger commercial foundations, access suitable markets and execute growth opportunities with clarity, responsibility and discipline.',
  },
  {
    icon: Milestone,
    label: '02 — Our Long-Term Direction',
    text: 'To build StratRoot into a trusted Indian consulting firm for businesses that value practical strategy, accountable execution and sustainable market development.',
  },
]

const FOUNDER_FOCUS_AREAS = ['Sales', 'Marketing', 'Exports', 'Operations', 'Commercial Execution']

const WORK_BEST_WITH = [
  {
    icon: Ship,
    title: 'Export & Market Entry',
    body: 'Businesses entering exports or selecting their first priority markets.',
  },
  {
    icon: Factory,
    title: 'Manufacturers & Processors',
    body: 'Manufacturers and processors seeking new buyers or channel partners.',
  },
  {
    icon: Sprout,
    title: 'FPOs & Agri-Enterprises',
    body: 'FPOs and agricultural enterprises preparing value-added products for wider markets.',
  },
  {
    icon: BarChart3,
    title: 'Growing Businesses',
    body: 'Growing businesses that need clearer sales systems and management reviews.',
  },
  {
    icon: Target,
    title: 'Evaluating New Opportunity',
    body: 'Management teams evaluating a new product, market, partnership or project opportunity.',
  },
]

export default function About() {
  useEffect(() => {
    document.title = PAGE_TITLE

    let meta = document.querySelector('meta[name="description"]')
    if (!meta) {
      meta = document.createElement('meta')
      meta.setAttribute('name', 'description')
      document.head.appendChild(meta)
    }
    meta.setAttribute('content', PAGE_DESCRIPTION)
  }, [])

  return (
    <div>
      <Seo {...SEO.about} />
      
      {/* ── Hero ── */}
      <section className="pt-36 pb-20 lg:pt-48 lg:pb-24" style={{ background: 'var(--color-primary)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <span className="h-px w-12" style={{ background: 'var(--color-gold)' }} />
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: 'var(--color-gold)' }}>
              About StratRoot
            </span>
          </div>
          <h1
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-white max-w-4xl mb-6"
            style={{ lineHeight: 1.05, letterSpacing: '-0.02em' }}
          >
            A Consulting Partner for
            <br />
            {/* <em style={{ color: '#2F855A', fontStyle: 'normal' }}>Growth That Must Be Executed.</em> */}
            Growth That Must Be <span style={{ color: 'var(--color-accent)' }}>Executed.</span>
          </h1>
          <p className="text-lg max-w-lg" style={{ color: 'var(--color-muted)' }}>
            StratRoot India is a growth and execution consulting firm. We work with founders,
            directors and management teams on market development, exports, sales channels,
            commercial strategy, business communication and operating discipline.
          </p>
        </div>
      </section>

      {/* ── Our Purpose ── */}
      <section className="py-20 lg:py-24" style={{ background: 'var(--color-surface)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase mb-6" style={{ color: 'var(--color-gold)' }}>
                Our Purpose
              </p>
              <h2
                className="font-display text-4xl font-semibold mb-8"
                style={{ color: 'var(--color-charcoal)', lineHeight: 1.2 }}
              >
                Turn Commercial Possibility into Organised Action.
              </h2>
              <div className="space-y-5 text-sm leading-relaxed" style={{ color: 'var(--color-charcoal)' }}>
                <p>
                  Businesses often know where they want to go but lack the market clarity, internal
                  bandwidth or execution structure to move consistently. Advice alone does not solve
                  that problem.
                </p>
                <p>
                  StratRoot helps management examine the opportunity, make informed choices, prepare
                  the business for the chosen market and organise the actions required to move
                  forward. Our role may begin with research or strategy, but every recommendation is
                  developed with implementation in mind.
                </p>
              </div>
            </div>

            <div className="relative mx-auto w-full h-[280px] sm:h-[360px] lg:h-[480px]">
              <div
                className="absolute -bottom-4 -left-4 w-full h-full rounded-lg border"
                style={{ borderColor: 'var(--color-gold)' }}
              />
              <div
                className="relative rounded-lg border overflow-hidden shadow-lg h-full"
                style={{ borderColor: 'var(--color-border)' }}
              >
                <img
                  src="/images/field-execution.jpg"
                  alt="StratRoot field execution work"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── What We Believe ── */}
      <section className="py-24 lg:py-32 relative overflow-hidden" style={{ background: 'var(--color-primary)' }}>
        {/* REMOVED THE <Quote /> ICON FROM HERE */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-5">
              <div className="flex items-center gap-3 mb-8">
                <span className="h-px w-12" style={{ background: 'var(--color-gold)' }} />
                <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: 'var(--color-gold)' }}>
                  What We Believe
                </span>
              </div>
              <div className="pl-6" style={{ borderLeft: '2px solid var(--color-gold)' }}>
                <h2
                  className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold text-white"
                  style={{ lineHeight: 1.2, letterSpacing: '-0.01em' }}
                >
                  Recommendations create value when they can be implemented.
                </h2>
              </div>
            </div>

            <div className="lg:col-span-7 lg:pt-3">
              <div className="grid sm:grid-cols-2 gap-x-10 gap-y-8">
                <p
                  className="text-sm sm:text-base leading-relaxed pt-6 border-t"
                  style={{ color: '#D1D5DB', borderColor: 'rgba(255,255,255,0.15)' }}
                >
                  A commercially attractive idea can still fail if the product is not ready, the
                  target customer is poorly defined, buyer communication lacks credibility,
                  responsibilities are unclear or follow-up is inconsistent. We examine these
                  connections before recommending a route to market.
                </p>
                <p
                  className="text-sm sm:text-base leading-relaxed pt-6 border-t"
                  style={{ color: '#D1D5DB', borderColor: 'rgba(255,255,255,0.15)' }}
                >
                  This practical view shapes every StratRoot assignment. We consider the client's
                  resources, decision-making speed, operating capacity, commercial limits and
                  appetite for execution before defining the scope.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Mission & Direction ── */}
      <section className="py-20 lg:py-24" style={{ background: 'var(--color-surface)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* <div className="max-w-xl mb-14">
            <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: 'var(--color-gold)' }}>
              Where We're Headed
            </p>
            <h2 className="font-display text-4xl lg:text-5xl font-semibold" style={{ color: 'var(--color-charcoal)', lineHeight: 1.2 }}>
              Mission and long-term
              <br />
              direction.
            </h2>
          </div> */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {MISSION_DIRECTION.map((card) => (
              <div
                key={card.label}
                className="group relative p-8 sm:p-10 rounded-lg border bg-white overflow-hidden transition-all duration-300 hover:-translate-y-1"
                style={{ borderColor: 'var(--color-border)', boxShadow: '0 1px 2px rgba(15,23,42,0.04)' }}
              >
                <span
                  className="absolute top-0 left-0 h-[3px] w-full"
                  style={{ background: 'linear-gradient(90deg, var(--color-gold), transparent)' }}
                />
                <div
                  className="inline-flex items-center justify-center w-12 h-12 rounded-full mb-6 transition-transform duration-300 group-hover:scale-105"
                  style={{ background: 'color-mix(in srgb, var(--color-gold) 14%, transparent)' }}
                >
                  <card.icon size={22} style={{ color: 'var(--color-gold)' }} />
                </div>
                <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: 'var(--color-gold)' }}>
                  {card.label}
                </p>
                <p
                  className="font-display text-xl sm:text-2xl font-semibold"
                  style={{ color: 'var(--color-charcoal)', lineHeight: 1.45 }}
                >
                  {card.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Working Principles ── */}
      <section className="py-20 lg:py-24" style={{ background: 'var(--color-primary)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-xl mb-16">
            <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: 'var(--color-gold)' }}>
              How We Work
            </p>
            <h2 className="font-display text-4xl lg:text-5xl font-semibold text-white" style={{ lineHeight: 1.2 }}>
              Principles that guide
              <br />
              every engagement.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRINCIPLES.map((v) => (
              <div
                key={v.title}
                className="p-8 rounded-lg border"
                style={{ borderColor: 'rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.05)' }}
              >
                <v.icon size={22} className="mb-5" style={{ color: 'var(--color-gold)' }} />
                <h3 className="font-semibold text-base mb-3 text-white">{v.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)' }}>
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Founder ── */}
      <section className="py-20 lg:py-24" style={{ background: 'var(--color-surface)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative mx-auto w-full h-[280px] sm:h-[360px] lg:h-[480px] order-2 lg:order-1">
              <div
                className="absolute -bottom-4 -right-4 w-full h-full rounded-lg border"
                style={{ borderColor: 'var(--color-gold)' }}
              />
              <div
                className="relative rounded-lg border overflow-hidden shadow-lg h-full"
                style={{ borderColor: 'var(--color-border)' }}
              >
                {/*
                  DEVELOPER INSTRUCTION (per content brief):
                  Replace with the approved, high-resolution professional photograph
                  at this path. The fixed-height container above already prevents
                  layout shift once the real image is in place.
                */}
                <img
                  src="/images/founder-saurabh-chalse.jpg"
                  alt="Saurabh Chalse, Founder of StratRoot India"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: 'var(--color-gold)' }}>
                Founder & Principal Consultant
              </p>
              <h2 className="font-display text-3xl lg:text-4xl font-semibold mb-2" style={{ color: 'var(--color-charcoal)' }}>
                Saurabh Chalse
              </h2>

              <div className="flex flex-wrap gap-2 mb-6">
                {FOUNDER_FOCUS_AREAS.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium px-3 py-1 rounded-full border"
                    style={{ borderColor: 'var(--color-border)', color: 'var(--color-charcoal)' }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="space-y-4 text-sm leading-relaxed" style={{ color: 'var(--color-charcoal)' }}>
                <p>
                  Saurabh Chalse works with Indian businesses on sales, marketing, exports, operations
                  and commercial execution. His approach begins with understanding the product, the
                  people responsible for delivery, the economics of the opportunity and the practical
                  obstacles to progress.
                </p>
                <p>
                  Through StratRoot India, he supports manufacturers, exporters, agricultural
                  enterprises, consumer businesses and project-oriented companies on assignments
                  involving market selection, buyer and channel development, business positioning,
                  commercial documentation, operating systems and implementation reviews.
                </p>
                <p>
                  Saurabh remains involved at management level throughout the assignment, with
                  emphasis on clear priorities, direct communication and measurable follow-up.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Who We Work Best With ── */}
      <section className="py-20 lg:py-24" style={{ background: 'var(--color-primary)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            <div className="lg:col-span-1">
              <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: 'var(--color-gold)' }}>
                {/* Fit */}
              </p>
              <h2 className="font-display text-3xl lg:text-4xl font-semibold text-white mb-5" style={{ lineHeight: 1.2 }}>
                The Businesses We Work Best With.
              </h2>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)' }}>
                StratRoot is best suited to management teams that have a serious commercial
                objective, are willing to share the information required for sound decisions, and can
                assign internal ownership for execution.
              </p>
            </div>

            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {WORK_BEST_WITH.map((item) => (
                <div
                  key={item.title}
                  className="p-6 rounded-lg border flex gap-4"
                  style={{ borderColor: 'rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.05)' }}
                >
                  <item.icon size={20} className="shrink-0 mt-0.5" style={{ color: 'var(--color-gold)' }} />
                  <div>
                    <h3 className="font-semibold text-sm mb-2 text-white">{item.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)' }}>
                      {item.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 lg:py-24" style={{ background: 'var(--color-surface)' }}>
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6"
            style={{ color: 'var(--color-charcoal)', lineHeight: 1.15 }}
          >
            Build the Next Stage of Your
            <br />
            Business on Clear Priorities.
          </h2>
          <p className="text-sm sm:text-base max-w-xl mx-auto mb-8" style={{ color: 'var(--color-muted)' }}>
            Share your current objective and the issue that is holding progress back. We will examine
            whether StratRoot is the right consulting partner for the assignment.
          </p>
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
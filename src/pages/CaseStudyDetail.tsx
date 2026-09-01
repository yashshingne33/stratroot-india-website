// // import { useParams, Link } from 'react-router'
// // import { ArrowLeft, ArrowRight } from 'lucide-react'

// // const CASES: Record<string, {
// //   label: string
// //   title: string
// //   summary: string
// //   situation: string
// //   approach: { title: string; body: string }[]
// //   results: { n: string; l: string }[]
// //   quote: string | null
// //   img: string
// //   services: string[]
// //   industry: string
// //   duration: string
// // }> = {
// //   'auto-component-turnaround': {
// //     label: 'Manufacturing · Turnaround',
// //     title: 'Turning Around a Loss-Making Auto Component Manufacturer',
// //     summary: 'A Pune-based auto component maker with ₹85 Cr in revenue and ₹18 Cr in annual losses. StratRoot was engaged to diagnose, restructure, and return the business to profitability.',
// //     industry: 'Auto Components Manufacturing',
// //     duration: '18 months',
// //     services: ['Business Restructuring', 'Operations Excellence', 'Financial Strategy'],
// //     situation: 'The business had grown rapidly through the mid-2010s on the back of a single OEM relationship. When that OEM began dual-sourcing, revenue dropped 30% in 18 months. Management had responded with short-term measures — headcount cuts and deferred maintenance — that made the underlying issues worse. Vendor creditors were becoming vocal. A key customer had issued a quality warning. The promoter needed a structured path forward.',
// //     approach: [
// //       {
// //         title: 'Financial Forensics',
// //         body: 'Within the first three weeks, we completed a detailed P&L forensics exercise. We found that reported EBITDA of -₹4 Cr masked a true economic loss of -₹18 Cr due to aggressive capitalisation of operating expenses, deferred maintenance costs, and inventory write-off avoidance.',
// //       },
// //       {
// //         title: 'Root Cause Diagnosis',
// //         body: 'The core issue was structural: the business had been built around one customer at one volume level. Indirect cost structures, headcount, and manufacturing footprint all assumed ₹120 Cr in revenue. At ₹85 Cr, the contribution margin was insufficient to cover fixed costs.',
// //       },
// //       {
// //         title: 'Cost Restructuring',
// //         body: 'We designed a three-phase cost restructuring programme: immediate renegotiation of vendor credit terms, a 25% reduction in indirect headcount through a voluntary separation scheme, and consolidation of two manufacturing sites into one.',
// //       },
// //       {
// //         title: 'Commercial Recovery',
// //         body: 'In parallel, we built a commercial recovery programme — targeting three new OEM relationships within 12 months. We supported the management team in presenting to procurement teams at two major OEMs, and helped design a pricing and capacity commitment structure that won initial orders.',
// //       },
// //       {
// //         title: 'Operational Rebuild',
// //         body: 'We implemented a lean manufacturing programme on the consolidated site, including SOP documentation, quality systems, and daily production metrics. This addressed the quality warning and supported the new OEM onboarding process.',
// //       },
// //     ],
// //     results: [
// //       { n: '₹24 Cr', l: 'EBITDA swing in 18 months' },
// //       { n: '₹6 Cr', l: 'Annual profit achieved' },
// //       { n: '31%', l: 'Reduction in operating costs' },
// //       { n: '2', l: 'New OEM relationships won' },
// //       { n: '0', l: 'Quality warnings from customers' },
// //       { n: '18 months', l: 'To profitability' },
// //     ],
// //     quote: '"I had tried two consultants before StratRoot. Both gave me good reports. StratRoot stayed and did the work. That\'s the difference." — Promoter, Pune Manufacturing Group (name withheld)',
// //     img: 'photo-1581091226825-a6a2a5aee158',
// //   },
// //   'export-scaling': {
// //     label: 'Exports · Growth',
// //     title: 'Scaling Exports from ₹40 Cr to ₹180 Cr in 24 Months',
// //     summary: 'A Gujarat-based textile exporter had strong domestic capability but stagnant international revenue. StratRoot designed and executed a systematic export scaling programme.',
// //     industry: 'Textile Exports',
// //     duration: '24 months',
// //     services: ['Export & Trade Consulting', 'Market Entry', 'Financial Strategy'],
// //     situation: 'The business had exported for 12 years but had never broken ₹45 Crore in annual export revenue. Previous attempts to expand into new markets had been ad hoc — attending trade shows without follow-through, engaging unreliable agents, and losing quotes due to documentation errors. The promoter knew the product was competitive but couldn\'t figure out why growth wasn\'t happening.',
// //     approach: [
// //       {
// //         title: 'Export Diagnostics',
// //         body: 'We audited the existing export process end to end — from buyer inquiry to final payment. We found 14 specific friction points, including inconsistent product documentation, delayed responses to buyer inquiries, and pricing that didn\'t account for logistics costs correctly.',
// //       },
// //       {
// //         title: 'Market Selection',
// //         body: 'We assessed 22 potential export markets across pricing environment, regulatory complexity, competitive intensity, and strategic fit. We recommended focusing on three: USA, Germany, and Japan — with a sequenced 24-month entry plan for each.',
// //       },
// //       {
// //         title: 'Buyer Development',
// //         body: 'We built a structured buyer development programme: identifying 80 target buyers across the three markets, developing product and company positioning, and supporting the team through three international trade shows with proper pre-show outreach and post-show follow-up.',
// //       },
// //       {
// //         title: 'Compliance Architecture',
// //         body: 'We overhauled the export documentation, certification, and labelling process. This included securing three new certifications required by international buyers and building a compliance management system to prevent recurrence.',
// //       },
// //     ],
// //     results: [
// //       { n: '₹180 Cr', l: 'Export revenue achieved' },
// //       { n: '4.5×', l: 'Revenue growth' },
// //       { n: '3', l: 'New markets opened' },
// //       { n: '24 months', l: 'To full scale' },
// //       { n: '18%', l: 'Export margin improvement' },
// //       { n: '40+', l: 'New buyer relationships' },
// //     ],
// //     quote: '"StratRoot didn\'t just help us export more — they built the infrastructure to sustain it. We now have a real international business, not just occasional foreign orders." — MD, Gujarat Textile Group (name withheld)',
// //     img: 'photo-1586528116311-ad8dd3c8310d',
// //   },
// //   'family-business-restructuring': {
// //     label: 'Family Business · Professionalisation',
// //     title: 'Restructuring a Third-Generation Family Business for Modern Growth',
// //     summary: 'A Mumbai-based trading and distribution business in the third generation of family ownership — talented but conflicted leadership, stagnant revenue, and a business model that hadn\'t evolved in a decade.',
// //     industry: 'Trading & Distribution',
// //     duration: '36 months',
// //     services: ['Business Restructuring', 'HR & Org Design', 'Financial Strategy'],
// //     situation: 'The business was founded in 1968 and had grown to ₹120 Crore under the second generation. The third generation — three siblings in their 30s and 40s — had different visions for the business and a fractious working relationship. Revenue had been flat for 7 years. The family had begun discussing whether to sell.',
// //     approach: [
// //       {
// //         title: 'Family Governance',
// //         body: 'We began with family governance — not business strategy. Before any commercial decisions could be made, the family needed a clear framework for how decisions would be taken, how disagreements resolved, and what each family member\'s role and authority would be.',
// //       },
// //       {
// //         title: 'Business Diagnostics',
// //         body: 'In parallel, we conducted a full business diagnostic. We found significant revenue potential in two adjacent categories the business had historically avoided. We also found that margin compression over seven years had been masked by inventory valuation choices.',
// //       },
// //       {
// //         title: 'Leadership Structure',
// //         body: 'We designed a new organisation structure with clear roles for the three siblings — one in commercial leadership, one in operations, one in finance — and supported the hiring of four senior professional managers to lead functions independently.',
// //       },
// //       {
// //         title: 'Growth Strategy',
// //         body: 'With governance and leadership stabilised, we built a three-year growth plan — entering two new product categories, expanding to three new cities, and launching a private-label brand in the highest-margin category.',
// //       },
// //     ],
// //     results: [
// //       { n: '₹210 Cr', l: 'Revenue after 3 years' },
// //       { n: '75%', l: 'Revenue growth' },
// //       { n: '4', l: 'Senior hires placed' },
// //       { n: '2', l: 'New categories entered' },
// //       { n: '3', l: 'New cities launched' },
// //       { n: '100%', l: 'Family in alignment' },
// //     ],
// //     quote: '"The family was ready to sell. StratRoot helped us see that the problem wasn\'t the business — it was how we were running it." — Family Director (name withheld)',
// //     img: 'photo-1507003211169-0a1dd7228f2d',
// //   },
// //   'epc-contractor-operations': {
// //     label: 'Engineering · Operations',
// //     title: 'Building an Operating System for a ₹150 Cr EPC Contractor',
// //     summary: 'A fast-growing EPC contractor in the water infrastructure space had outgrown its operating systems. Revenue had grown from ₹40 Cr to ₹150 Cr — but EBITDA margins were deteriorating.',
// //     industry: 'EPC / Infrastructure',
// //     duration: '12 months',
// //     services: ['Operations Excellence', 'Financial Strategy', 'Digital Transformation'],
// //     situation: 'Rapid growth had exposed the fragility of the business\'s operating infrastructure. Projects ran over budget and time. The finance team couldn\'t provide project-level profitability in real time. And the MD was personally involved in resolving operational issues that should have been handled by project managers.',
// //     approach: [
// //       { title: 'Project Audit', body: 'We audited the 12 active projects and found that 8 were running at margins below 5% versus a company target of 12%. The primary driver was poor site-level cost control and procurement without purchase orders.' },
// //       { title: 'Systems Design', body: 'We designed a project management operating system — from bid pricing to site execution to final billing — with clear cost controls, approval authorities, and reporting mechanisms at each stage.' },
// //       { title: 'Finance Infrastructure', body: 'We built a project-level financial reporting system that gave the MD daily visibility into cost-to-complete, billing status, and cash flow by project.' },
// //       { title: 'Leadership Development', body: 'We developed a Project Director development programme for 6 senior project managers — equipping them to manage P&Ls independently.' },
// //     ],
// //     results: [
// //       { n: '9%', l: 'EBITDA margin achieved' },
// //       { n: '+5%', l: 'Margin improvement' },
// //       { n: '35%', l: 'Fewer cost overruns' },
// //       { n: '6', l: 'PMs developed' },
// //       { n: '12 months', l: 'Implementation' },
// //       { n: '₹7.5 Cr', l: 'Annual EBITDA gain' },
// //     ],
// //     quote: null,
// //     img: 'photo-1565043589221-2e58a0f43d8b',
// //   },
// //   'food-processor-working-capital': {
// //     label: 'MSME · Financial Restructuring',
// //     title: 'Rescuing Working Capital for a ₹28 Cr Food Processor',
// //     summary: 'A Nashik-based food processing business with strong revenue growth but a chronic working capital crisis. The mismatch between payables and receivables was strangling the business.',
// //     industry: 'Food Processing',
// //     duration: '6 months',
// //     services: ['Financial Strategy', 'Operations Excellence'],
// //     situation: 'The business had grown from ₹14 Cr to ₹28 Cr in three years — but the promoter felt poorer, not richer. Working capital requirements had grown faster than profits. The business was constantly overdrawn on its CC limit, paying late supplier charges, and missing early payment discounts.',
// //     approach: [
// //       { title: 'Receivables Audit', body: 'We audited every outstanding receivable. We found ₹6.8 Cr of receivables that were 90+ days old — nearly all from five retail chain customers. None had been formally escalated.' },
// //       { title: 'Payables Restructuring', body: 'We renegotiated payment terms with the top 12 suppliers — extending from 30 to 45 days on average, while offering early payment discounts for their best products to maintain goodwill.' },
// //       { title: 'Credit Policy', body: 'We designed a formal credit policy for new and existing customers — with credit limits, payment terms, and escalation processes tied to customer segment and history.' },
// //       { title: 'Banking Optimisation', body: 'We reviewed the existing banking relationships and helped the business restructure its working capital facility — increasing the CC limit and reducing the effective interest rate.' },
// //     ],
// //     results: [
// //       { n: '52 days', l: 'Working capital cycle' },
// //       { n: '-58 days', l: 'Cycle reduction' },
// //       { n: '₹4 Cr', l: 'Cash freed from balance sheet' },
// //       { n: '6 months', l: 'To full impact' },
// //       { n: '₹38 L', l: 'Annual interest saving' },
// //       { n: '0', l: 'Overdraft instances in Q4' },
// //     ],
// //     quote: '"I didn\'t know I had ₹4 crore sitting in my own business. StratRoot found it and freed it in six months." — Promoter (name withheld)',
// //     img: 'photo-1454165804606-c3d57bc86b40',
// //   },
// // }

// // export default function CaseStudyDetail() {
// //   const { slug } = useParams<{ slug: string }>()
// //   const data = slug ? CASES[slug] : null

// //   if (!data) {
// //     return (
// //       <div className="min-h-screen flex items-center justify-center pt-24">
// //         <div className="text-center">
// //           <h1 className="font-display text-3xl font-semibold mb-4" style={{ color: '#1F2933' }}>Case study not found</h1>
// //           <Link to="/case-studies" className="text-sm font-medium" style={{ color: '#C6A15B' }}>← Back to Case Studies</Link>
// //         </div>
// //       </div>
// //     )
// //   }

// //   return (
// //     <div>
// //       {/* Hero */}
// //       <div className="pt-36 lg:pt-48" style={{ background: '#102A43' }}>
// //         <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-0">
// //           <Link
// //             to="/case-studies"
// //             className="inline-flex items-center gap-2 text-xs font-medium mb-10 transition-colors hover:text-white"
// //             style={{ color: '#BAC7D5' }}
// //           >
// //             <ArrowLeft size={14} /> All Case Studies
// //           </Link>
// //           <br />
// //           <span
// //             className="inline-block text-xs font-semibold tracking-widest uppercase px-2 py-1 rounded mb-6"
// //             style={{ background: '#C6A15B20', color: '#C6A15B' }}
// //           >
// //             {data.label}
// //           </span>
// //           <h1
// //             className="font-display text-4xl lg:text-6xl font-semibold text-white max-w-4xl pb-16"
// //             style={{ lineHeight: 1.1, letterSpacing: '-0.02em' }}
// //           >
// //             {data.title}
// //           </h1>
// //         </div>
// //         <div className="w-full" style={{ height: '420px' }}>
// //           <img
// //             src={`https://images.unsplash.com/${data.img}?w=1800&h=600&fit=crop&auto=format`}
// //             alt={data.title}
// //             className="w-full h-full object-cover"
// //             style={{ opacity: 0.7 }}
// //           />
// //         </div>
// //       </div>

// //       <section className="py-24 lg:py-32" style={{ background: '#F8FAF7' }}>
// //         <div className="max-w-7xl mx-auto px-6 lg:px-8">
// //           <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
// //             {/* Main content */}
// //             <div className="lg:col-span-8">
// //               <p className="text-lg leading-relaxed mb-10" style={{ color: '#1F2933' }}>
// //                 {data.summary}
// //               </p>

// //               <h2 className="font-display text-2xl font-semibold mb-4" style={{ color: '#1F2933' }}>
// //                 The Situation
// //               </h2>
// //               <p className="text-base leading-relaxed mb-12" style={{ color: '#1F2933' }}>
// //                 {data.situation}
// //               </p>

// //               <h2 className="font-display text-2xl font-semibold mb-8" style={{ color: '#1F2933' }}>
// //                 Our Approach
// //               </h2>
// //               <div className="space-y-8 mb-12">
// //                 {data.approach.map((a, i) => (
// //                   <div key={a.title} className="flex gap-6">
// //                     <div
// //                       className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5"
// //                       style={{ background: '#2F855A', color: 'white' }}
// //                     >
// //                       {i + 1}
// //                     </div>
// //                     <div>
// //                       <h3 className="font-semibold text-base mb-2" style={{ color: '#1F2933' }}>{a.title}</h3>
// //                       <p className="text-sm leading-relaxed" style={{ color: '#1F2933' }}>{a.body}</p>
// //                     </div>
// //                   </div>
// //                 ))}
// //               </div>

// //               {data.quote && (
// //                 <blockquote
// //                   className="border-l-4 pl-6 py-2"
// //                   style={{ borderColor: '#C6A15B' }}
// //                 >
// //                   <p className="font-display text-xl italic" style={{ color: '#1F2933', lineHeight: 1.5 }}>
// //                     {data.quote}
// //                   </p>
// //                 </blockquote>
// //               )}
// //             </div>

// //             {/* Sidebar */}
// //             <div className="lg:col-span-4">
// //               <div className="sticky top-28">
// //                 <div
// //                   className="p-7 border border-[#BAC7D5]/40 rounded-lg bg-white mb-5"
// //                 >
// //                   <p className="text-xs font-semibold tracking-widest uppercase mb-5" style={{ color: '#1F2933' }}>
// //                     Engagement Details
// //                   </p>
// //                   <div className="space-y-4">
// //                     <div>
// //                       <p className="text-xs" style={{ color: '#BAC7D5' }}>Industry</p>
// //                       <p className="text-sm font-semibold mt-0.5" style={{ color: '#1F2933' }}>{data.industry}</p>
// //                     </div>
// //                     <div>
// //                       <p className="text-xs" style={{ color: '#BAC7D5' }}>Duration</p>
// //                       <p className="text-sm font-semibold mt-0.5" style={{ color: '#1F2933' }}>{data.duration}</p>
// //                     </div>
// //                     <div>
// //                       <p className="text-xs" style={{ color: '#BAC7D5' }}>Services</p>
// //                       <div className="flex flex-wrap gap-1 mt-1.5">
// //                         {data.services.map((s) => (
// //                           <span
// //                             key={s}
// //                             className="text-xs px-2 py-1 rounded border"
// //                             style={{ borderColor: '#BAC7D5', color: '#1F2933' }}
// //                           >
// //                             {s}
// //                           </span>
// //                         ))}
// //                       </div>
// //                     </div>
// //                   </div>
// //                 </div>

// //                 <div style={{ background: '#102A43' }} className="p-7 rounded-lg">
// //                   <p className="text-xs font-semibold tracking-widest uppercase mb-5" style={{ color: '#C6A15B' }}>
// //                     Key Results
// //                   </p>
// //                   <div className="space-y-4">
// //                     {data.results.map((r) => (
// //                       <div key={r.l} className="flex items-center justify-between">
// //                         <p className="text-xs" style={{ color: '#BAC7D5' }}>{r.l}</p>
// //                         <p className="text-base font-display font-semibold text-white">{r.n}</p>
// //                       </div>
// //                     ))}
// //                   </div>
// //                 </div>

// //                 <Link
// //                   to="/consultation"
// //                   className="block w-full mt-5 text-center px-6 py-4 text-sm font-semibold text-white rounded transition-opacity hover:opacity-90"
// //                   style={{ background: '#2F855A' }}
// //                 >
// //                   Discuss a Similar Challenge
// //                 </Link>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Related */}
// //       <div className="py-16 border-t border-[#BAC7D5]/40" style={{ background: '#F8FAF7' }}>
// //         <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
// //           <h3 className="font-display text-xl font-semibold" style={{ color: '#1F2933' }}>
// //             Explore more case studies
// //           </h3>
// //           <Link
// //             to="/case-studies"
// //             className="inline-flex items-center gap-2 text-sm font-medium"
// //             style={{ color: '#2F855A' }}
// //           >
// //             All Case Studies <ArrowRight size={14} />
// //           </Link>
// //         </div>
// //       </div>
// //     </div>
// //   )
// // }










// import { useParams, Link } from 'react-router'
// import { ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react'

// const CASES: Record<string, {
//   label: string
//   title: string
//   clientType: string
//   challenge: string
//   role: string
//   deliverables: string[]
//   stage: string
//   img: string
//   services: string[]
// }> = {
//   'agricultural-export-development': {
//     label: 'Agriculture · Export Development',
//     title: 'Agricultural Products and Export Development',
//     clientType: 'Farmer-producer and processed-food business',
//     challenge:
//       'A processed-agriculture business had capable production and genuine product quality, but no structured route to international buyers, no export-ready company or product material, and limited visibility into which international markets were the right commercial fit.',
//     role:
//       'StratRoot worked with the business to reposition its products for export, prepare export-ready material, shortlist priority international markets and design a structured buyer research and outreach process.',
//     deliverables: [
//       'Product positioning for export-facing communication',
//       'International market shortlisting',
//       'Buyer research and prospect profiling',
//       'Export-ready company and product presentation material',
//       'Outreach planning and follow-up structure',
//       'Execution dashboards to track progress',
//     ],
//     stage: 'Engagement in progress',
//     services: ['Export Market Development', 'Market-Ready Business Communication'],
//     img: 'photo-1500937386664-56d1dfef3854',
//   },
//   'educational-retail-distribution': {
//     label: 'Consumer & Education · Retail Distribution',
//     title: 'Educational Products and Retail Distribution',
//     clientType: "Children's educational books and learning-games company",
//     challenge:
//       'A publisher of educational products had an established base of customers but no structured plan to expand into bookstore and school-channel distribution, and lacked consistent sales reporting to track what was working.',
//     role:
//       'StratRoot developed a market and channel strategy for the business, structured its retail and school-channel outreach, and built the reporting formats needed to track sales activity and vendor coordination.',
//     deliverables: [
//       'Market and channel strategy',
//       'Bookstore outreach planning',
//       'School-channel strategy and target list',
//       'Sales reporting formats',
//       'Vendor coordination process',
//       'Activity tracking system',
//     ],
//     stage: 'Engagement in progress',
//     services: ['Sales & Channel Development', 'Business Strategy & Commercial Advisory'],
//     img: 'photo-1497633762265-9d179a990aa6',
//   },
//   'specialty-product-export': {
//     label: 'Export Trading · Buyer Development',
//     title: 'Specialty-Product Export Development',
//     clientType: 'Indian exporter seeking international buyers',
//     challenge:
//       'A specialty-product exporter had commercially viable products but limited clarity on which international markets and buyers were the strongest fit, and no structured process for qualifying and following up on prospects.',
//     role:
//       'StratRoot conducted market mapping and buyer research, qualified prospective buyers, developed communication formats for international outreach, and supported compliance-related research relevant to target markets.',
//     deliverables: [
//       'Market mapping across priority geographies',
//       'Company and buyer research',
//       'Prospect qualification process',
//       'Export communication formats',
//       'Compliance-related research',
//       'Structured follow-up systems',
//     ],
//     stage: 'Engagement in progress',
//     services: ['Export Market Development'],
//     img: 'photo-1586528116311-ad8dd3c8310d',
//   },
//   'project-industrial-supply-planning': {
//     label: 'Infrastructure · Project Supply',
//     title: 'Project and Industrial Supply Planning',
//     clientType: 'Project-linked material and infrastructure supplier',
//     challenge:
//       'A supplier bidding on infrastructure-linked project opportunities needed structured support to quantify requirements accurately, coordinate multiple vendors and prepare commercially sound, well-costed proposals.',
//     role:
//       'StratRoot supported requirement and quantity analysis, coordinated vendor inputs, structured commercial costing and prepared proposal material aligned to the specific project opportunity.',
//     deliverables: [
//       'Requirement and quantity analysis',
//       'Vendor research and coordination',
//       'Commercial costing structure',
//       'Proposal preparation',
//       'Procurement coordination support',
//       'Execution planning',
//     ],
//     stage: 'Engagement in progress',
//     services: ['Operations & Execution Systems', 'Business Strategy & Commercial Advisory'],
//     img: 'photo-1541888946425-d81bb19240f5',
//   },
// }

// export default function CaseStudyDetail() {
//   const { slug } = useParams<{ slug: string }>()
//   const data = slug ? CASES[slug] : null

//   if (!data) {
//     return (
//       <div className="min-h-screen flex items-center justify-center pt-24" style={{ background: 'var(--color-surface)' }}>
//         <div className="text-center">
//           <h1 className="font-display text-3xl font-semibold mb-4" style={{ color: 'var(--color-charcoal)' }}>
//             Case study not found
//           </h1>
//           <Link to="/case-studies" className="text-sm font-medium" style={{ color: 'var(--color-accent)' }}>
//             ← Back to Case Studies
//           </Link>
//         </div>
//       </div>
//     )
//   }

//   return (
//     <div>
//       {/* ── Hero ── */}
//       <div className="pt-36 lg:pt-48" style={{ background: 'var(--color-primary)' }}>
//         <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-0">
//           <Link
//             to="/case-studies"
//             className="inline-flex items-center gap-2 text-xs font-medium mb-10 transition-colors hover:text-white"
//             style={{ color: 'var(--color-muted)' }}
//           >
//             <ArrowLeft size={14} /> All Case Studies
//           </Link>
//           <span
//             className="inline-block text-xs font-semibold tracking-widest uppercase px-2 py-1 rounded mb-6"
//             style={{ background: 'rgba(194,138,53,0.15)', color: 'var(--color-gold)' }}
//           >
//             {data.label}
//           </span>
//           <h1
//             className="font-display text-4xl lg:text-6xl font-semibold text-white max-w-4xl pb-16"
//             style={{ lineHeight: 1.1, letterSpacing: '-0.02em' }}
//           >
//             {data.title}
//           </h1>
//         </div>
//         <div className="w-full" style={{ height: '380px' }}>
//           <img
//             src={`https://images.unsplash.com/${data.img}?w=1800&h=600&fit=crop&auto=format`}
//             alt={data.title}
//             className="w-full h-full object-cover"
//             style={{ opacity: 0.75 }}
//           />
//         </div>
//       </div>

//       {/* ── Body ── */}
//       <section className="py-24 lg:py-32" style={{ background: 'var(--color-surface)' }}>
//         <div className="max-w-7xl mx-auto px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
//             {/* Main content */}
//             <div className="lg:col-span-8">
//               <h2 className="font-display text-2xl font-semibold mb-4" style={{ color: 'var(--color-charcoal)' }}>
//                 The Business Challenge
//               </h2>
//               <p className="text-base leading-relaxed mb-12" style={{ color: 'var(--color-charcoal)' }}>
//                 {data.challenge}
//               </p>

//               <h2 className="font-display text-2xl font-semibold mb-4" style={{ color: 'var(--color-charcoal)' }}>
//                 StratRoot's Role
//               </h2>
//               <p className="text-base leading-relaxed mb-12" style={{ color: 'var(--color-charcoal)' }}>
//                 {data.role}
//               </p>

//               <h2 className="font-display text-2xl font-semibold mb-8" style={{ color: 'var(--color-charcoal)' }}>
//                 Key Deliverables
//               </h2>
//               <ul className="space-y-4">
//                 {data.deliverables.map((d) => (
//                   <li key={d} className="flex items-start gap-3">
//                     <CheckCircle size={16} className="flex-shrink-0 mt-0.5" style={{ color: 'var(--color-accent)' }} />
//                     <span className="text-sm" style={{ color: 'var(--color-charcoal)' }}>{d}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* Sidebar */}
//             <div className="lg:col-span-4">
//               <div className="sticky top-28">
//                 <div className="p-7 border rounded-lg bg-white mb-5" style={{ borderColor: 'var(--color-border)' }}>
//                   <p className="text-xs font-semibold tracking-widest uppercase mb-5" style={{ color: 'var(--color-charcoal)' }}>
//                     Engagement Details
//                   </p>
//                   <div className="space-y-4">
//                     <div>
//                       <p className="text-xs" style={{ color: 'var(--color-muted)' }}>Client Type</p>
//                       <p className="text-sm font-semibold mt-0.5" style={{ color: 'var(--color-charcoal)' }}>
//                         {data.clientType}
//                       </p>
//                     </div>
//                     <div>
//                       <p className="text-xs" style={{ color: 'var(--color-muted)' }}>Current Stage</p>
//                       <p className="text-sm font-semibold mt-0.5" style={{ color: 'var(--color-charcoal)' }}>
//                         {data.stage}
//                       </p>
//                     </div>
//                     <div>
//                       <p className="text-xs" style={{ color: 'var(--color-muted)' }}>Services Involved</p>
//                       <div className="flex flex-wrap gap-1 mt-1.5">
//                         {data.services.map((s) => (
//                           <span
//                             key={s}
//                             className="text-xs px-2 py-1 rounded border"
//                             style={{ borderColor: 'var(--color-border)', color: 'var(--color-charcoal)' }}
//                           >
//                             {s}
//                           </span>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="p-6 rounded-lg border" style={{ borderColor: 'var(--color-border)', background: 'var(--color-primary)' }}>
//                   <p className="text-xs leading-relaxed" style={{ color: 'var(--color-muted)' }}>
//                     Client names, logos, buyer lists, commercial figures and testimonials are
//                     published only with written permission from the client.
//                   </p>
//                 </div>

//                 <Link
//                   to="/contact"
//                   className="block w-full mt-5 text-center px-6 py-4 text-sm font-semibold text-white rounded transition-transform hover:-translate-y-0.5"
//                   style={{ background: 'var(--color-accent)' }}
//                 >
//                   Discuss a Similar Challenge
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ── Related ── */}
//       <div className="py-16 border-t" style={{ background: 'var(--color-surface)', borderColor: 'var(--color-border)' }}>
//         <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
//           <h3 className="font-display text-xl font-semibold" style={{ color: 'var(--color-charcoal)' }}>
//             Explore more engagements
//           </h3>
//           <Link to="/case-studies" className="inline-flex items-center gap-2 text-sm font-medium" style={{ color: 'var(--color-accent)' }}>
//             All Case Studies <ArrowRight size={14} />
//           </Link>
//         </div>
//       </div>
//     </div>
//   )
// }
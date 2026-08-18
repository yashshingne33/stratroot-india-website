import { useParams, Link } from 'react-router'
import { ArrowRight, CheckCircle, ArrowLeft } from 'lucide-react'

const SERVICE_DATA: Record<string, {
  title: string
  tagline: string
  desc: string
  problem: string
  approach: { step: string; body: string }[]
  deliverables: string[]
  outcome: string
  caseStudy: { title: string; result: string; slug: string } | null
}> = {
  'business-restructuring': {
    title: 'Business Restructuring & Turnaround',
    tagline: 'From distress to durability.',
    desc: 'When the business is underperforming, losing money, or heading in the wrong direction, speed and precision matter. We diagnose root causes and rebuild systematically.',
    problem: 'Most turnarounds fail because they treat symptoms — cost cuts, short-term cash measures — without addressing the underlying structural or operational issues. We go deeper.',
    approach: [
      { step: 'Financial Forensics', body: 'We audit your P&L, balance sheet, and cash flows to separate signal from noise. Most businesses in distress are surprised by what we find.' },
      { step: 'Root Cause Analysis', body: 'We map the operational, commercial, and organisational factors driving underperformance — using data, not gut feel.' },
      { step: 'Restructuring Blueprint', body: 'We design a comprehensive restructuring plan with clear milestones, cash preservation measures, and transformation priorities.' },
      { step: 'Implementation', body: 'We embed with your team to execute — negotiating with creditors, rebuilding operations, and stabilising the business from the inside.' },
    ],
    deliverables: [
      'Financial forensics & root cause analysis report',
      'Cost restructuring & cash flow repair plan',
      'Operational redesign and SOP rebuild',
      'Leadership restructuring plan',
      'Creditor negotiation support',
      'Monthly performance dashboard',
    ],
    outcome: 'Average 18-month turnaround from loss to profitability across our portfolio.',
    caseStudy: {
      title: 'Turning Around a Loss-Making Auto Component Manufacturer',
      result: '₹18 Cr loss to ₹6 Cr profit in 18 months',
      slug: 'auto-component-turnaround',
    },
  },
  'operations-excellence': {
    title: 'Operations Excellence',
    tagline: 'Build systems that scale.',
    desc: 'Great businesses are built on great operating systems. We design and implement the processes, metrics, and structures that allow you to grow without multiplying chaos.',
    problem: 'Most Indian businesses scale their turnover without scaling their operations. The result is a business that is larger but harder to run — with more people, more problems, and lower margins.',
    approach: [
      { step: 'Operations Audit', body: 'We map every core process from end to end — from order intake to delivery — and identify every inefficiency, bottleneck, and risk.' },
      { step: 'Process Design', body: 'We redesign processes using lean principles and create documented SOPs that can be followed, trained, and audited.' },
      { step: 'KPI Architecture', body: 'We design a meaningful set of KPIs and build the dashboard infrastructure to track them in real time.' },
      { step: 'Implementation & Training', body: 'We embed with your team to implement changes, train staff, and ensure new systems are adopted — not just documented.' },
    ],
    deliverables: [
      'Process maps for all core operations',
      'SOP documentation library',
      'KPI framework and performance dashboard',
      'Lean implementation roadmap',
      'Quality systems and audit mechanisms',
      'Vendor and procurement optimisation plan',
    ],
    outcome: 'Average 22% reduction in operating costs within 12 months.',
    caseStudy: null,
  },
  'export-trade': {
    title: 'Export & Trade Consulting',
    tagline: 'Build a global revenue engine.',
    desc: 'India is one of the world\'s great export opportunities. But navigating global markets, compliance, and buyer relationships requires a different kind of expertise.',
    problem: 'Most Indian exporters grow to ₹40–50 crore and plateau. The systems, compliance knowledge, and commercial relationships required to break through that ceiling are different — and usually absent.',
    approach: [
      { step: 'Market Selection', body: 'We assess 15+ export markets across pricing, regulatory burden, competitive intensity, and strategic fit — and recommend the optimal sequence.' },
      { step: 'Buyer Development', body: 'We build a structured buyer outreach strategy, support trade show participation, and develop the commercial narrative that global buyers respond to.' },
      { step: 'Compliance Architecture', body: 'We design your export documentation, labelling, certifications, and customs processes to eliminate friction and protect margin.' },
      { step: 'Scale Planning', body: 'We build the financial, operational, and leadership infrastructure required to sustain ₹100 Cr+ in export revenue.' },
    ],
    deliverables: [
      'Export market assessment and prioritisation report',
      'Buyer development strategy',
      'Export documentation & compliance framework',
      'Pricing architecture and margin modelling',
      'Trade finance advisory and banking relationships',
      'International logistics optimisation',
    ],
    outcome: 'Average 3.2× export revenue growth within 24 months of engagement.',
    caseStudy: {
      title: 'Scaling Exports from ₹40 Cr to ₹180 Cr in 24 Months',
      result: '4.5× revenue growth with 3 new international markets opened',
      slug: 'export-scaling',
    },
  },
  'financial-strategy': {
    title: 'Financial Strategy & CFO Services',
    tagline: 'Clarity, control, confidence.',
    desc: 'CFO-grade financial intelligence and strategic oversight — without the full-time CFO cost. We build the visibility and capability your business needs to make confident decisions.',
    problem: 'Most Indian business owners run on gut feel and month-end MIS that arrives too late and tells them too little. Without financial intelligence, capital allocation decisions are guesswork.',
    approach: [
      { step: 'Financial Diagnostics', body: 'We audit your current financial reporting, accounting systems, and visibility infrastructure — identifying gaps and risks.' },
      { step: 'MIS Design', body: 'We design a management information system that gives you daily, weekly, and monthly visibility into what matters most.' },
      { step: 'Strategic Finance', body: 'We develop budgets, forecasts, and financial models that support real strategic decisions — not just compliance.' },
      { step: 'Ongoing CFO Support', body: 'We provide a part-time CFO resource — sitting in board meetings, supporting fundraising, managing banking relationships.' },
    ],
    deliverables: [
      'Financial diagnostics report',
      'MIS design and implementation',
      'Working capital optimisation plan',
      'Fundraising readiness assessment',
      'Budget and forecasting frameworks',
      'Monthly CFO-level review and advisory',
    ],
    outcome: '35% average improvement in working capital efficiency. Fundraising success rate of 78%.',
    caseStudy: null,
  },
  'market-entry': {
    title: 'Market Entry & Expansion',
    tagline: 'Enter new markets with confidence.',
    desc: 'Expand into new geographies, customer segments, or product categories with structured, evidence-based strategy — and a partner to execute it with you.',
    problem: 'Market entry failures are usually strategic failures — insufficient market understanding, wrong channel choices, under-resourced execution. We\'ve seen the mistakes. We know how to avoid them.',
    approach: [
      { step: 'Opportunity Assessment', body: 'We size the market, understand the competitive landscape, and identify the segments and channels with the highest probability of success.' },
      { step: 'Entry Strategy', body: 'We define the go-to-market approach: direct or indirect, channel partners, pricing, and positioning.' },
      { step: 'Launch Planning', body: 'We build a 90-day launch plan with clear milestones, resource requirements, and accountability structures.' },
      { step: 'Embedded Execution', body: 'We work alongside your team during the first 3–6 months to ensure the launch goes to plan and adjust in real time.' },
    ],
    deliverables: [
      'Market sizing and opportunity report',
      'Competitive landscape analysis',
      'Channel strategy and partner selection',
      'Go-to-market launch plan',
      'First 90-day execution support',
      'Performance tracking dashboard',
    ],
    outcome: '80% of StratRoot market entry engagements achieve breakeven within 12 months.',
    caseStudy: null,
  },
  'digital-transformation': {
    title: 'Digital Transformation',
    tagline: 'Technology that works for the business.',
    desc: 'Technology-led productivity and process modernisation — without the vendor complexity. We select, implement, and operationalise the right tools for your specific situation.',
    problem: 'Digital transformation projects fail when technology is chosen before problems are understood. Most Indian businesses are sold software they don\'t need, implemented poorly by vendors who leave.',
    approach: [
      { step: 'Digital Readiness Audit', body: 'We assess your current technology landscape, data quality, and team capability — and identify the highest-value digitisation opportunities.' },
      { step: 'Technology Selection', body: 'We run a structured vendor assessment to identify the right ERP, CRM, or operational tools — based on your size, sector, and complexity.' },
      { step: 'Implementation Support', body: 'We manage implementation projects as your owner\'s representative — protecting you from vendor delays, scope creep, and bad data migration.' },
      { step: 'Adoption & Training', body: 'We build training programs and change management plans to ensure new systems are actually used.' },
    ],
    deliverables: [
      'Digital readiness audit report',
      'Technology selection framework and vendor shortlist',
      'ERP/CRM implementation project oversight',
      'Automation identification and ROI modelling',
      'Data and reporting infrastructure design',
      'Change management and adoption plan',
    ],
    outcome: 'Average 40% reduction in manual process hours within 12 months.',
    caseStudy: null,
  },
  'hr-org-design': {
    title: 'HR & Organisational Design',
    tagline: 'Build the team that builds the business.',
    desc: 'Build leadership teams, design organisations, and create people systems that support your ambition — not just your current headcount.',
    problem: 'The most common bottleneck in Indian businesses is not capital or market — it\'s the absence of a capable second tier of leadership. The founder becomes the ceiling.',
    approach: [
      { step: 'Org Design', body: 'We design the organisation structure that fits your strategy — not inherited from history. Clear functions, clear reporting lines, clear accountability.' },
      { step: 'Role Architecture', body: 'We define every senior role with clarity: responsibilities, KPIs, authorities, and interfaces.' },
      { step: 'Leadership Assessment', body: 'We evaluate your current team against what the future requires — and help you build the gaps through hiring, development, or succession.' },
      { step: 'Systems Build', body: 'We design performance management, compensation, and development systems that attract and retain quality talent.' },
    ],
    deliverables: [
      'Organisation structure design',
      'Role clarity and JD library',
      'Leadership capability assessment',
      'Hiring advisory and interview support',
      'Performance management system design',
      'Succession planning framework',
    ],
    outcome: '60% average improvement in leadership clarity and accountability after engagement.',
    caseStudy: null,
  },
  'supply-chain': {
    title: 'Supply Chain Optimisation',
    tagline: 'Find margin where you didn\'t look.',
    desc: 'From raw material to customer delivery — we find and fix the hidden costs and vulnerabilities in your supply chain, and build the systems to prevent them recurring.',
    problem: 'Supply chain costs are the most underestimated P&L lever in Indian manufacturing. Most businesses accept their current logistics, inventory, and procurement costs as fixed — they\'re not.',
    approach: [
      { step: 'Supply Chain Mapping', body: 'We map every node of your supply chain — vendors, logistics, warehousing, inventory — and quantify costs and risks at each stage.' },
      { step: 'Cost Audit', body: 'We identify where you are overpaying, under-negotiating, or carrying excessive risk — with specific recommendations for each.' },
      { step: 'Vendor Rationalisation', body: 'We design a vendor management framework that reduces dependency, improves quality, and drives better commercial terms.' },
      { step: 'System Build', body: 'We implement inventory management, logistics optimisation, and demand forecasting systems appropriate for your scale.' },
    ],
    deliverables: [
      'End-to-end supply chain map',
      'Cost audit and opportunity quantification',
      'Vendor rationalisation plan',
      'Logistics and warehousing optimisation',
      'Inventory management system design',
      'Risk management framework',
    ],
    outcome: 'Average 18% reduction in total supply chain cost within 12 months.',
    caseStudy: null,
  },
}

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>()
  const data = slug ? SERVICE_DATA[slug] : null

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-24" style={{ background: '#F8FAF7' }}>
        <div className="text-center">
          <h1 className="font-display text-3xl font-semibold mb-4" style={{ color: '#1F2933' }}>Service not found</h1>
          <Link to="/services" className="text-sm font-medium" style={{ color: '#2F855A' }}>← Back to Services</Link>
        </div>
      </div>
    )
  }

  return (
    <div>
      <div className="pt-36 pb-20 lg:pt-48 lg:pb-28" style={{ background: '#102A43' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-xs font-medium mb-10 transition-colors hover:text-white"
            style={{ color: '#BAC7D5' }}
          >
            <ArrowLeft size={14} /> All Services
          </Link>
          <div className="max-w-3xl">
            <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: '#C6A15B' }}>
              {data.tagline}
            </p>
            <h1
              className="font-display text-5xl lg:text-6xl font-semibold text-white"
              style={{ lineHeight: 1.05, letterSpacing: '-0.02em' }}
            >
              {data.title}
            </h1>
            <p className="mt-6 text-lg" style={{ color: '#BAC7D5' }}>{data.desc}</p>
          </div>
        </div>
      </div>

      <section className="py-24 lg:py-32" style={{ background: '#F8FAF7' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="font-display text-3xl font-semibold mb-6" style={{ color: '#1F2933' }}>The Problem</h2>
              <p className="text-base leading-relaxed" style={{ color: '#1F2933' }}>{data.problem}</p>

              <h2 className="font-display text-3xl font-semibold mt-12 mb-8" style={{ color: '#1F2933' }}>Our Approach</h2>
              <div className="space-y-6">
                {data.approach.map((a, i) => (
                  <div key={a.step} className="flex gap-5">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5"
                      style={{ background: '#2F855A', color: 'white' }}
                    >
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm mb-1" style={{ color: '#1F2933' }}>{a.step}</h3>
                      <p className="text-sm leading-relaxed" style={{ color: '#1F2933' }}>{a.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div
                className="p-8 border border-[#BAC7D5]/40 rounded-lg bg-white mb-6"
              >
                <h3 className="font-semibold text-sm mb-5" style={{ color: '#1F2933' }}>What You Receive</h3>
                <ul className="space-y-3">
                  {data.deliverables.map((d) => (
                    <li key={d} className="flex items-start gap-3">
                      <CheckCircle size={15} className="flex-shrink-0 mt-0.5" style={{ color: '#2F855A' }} />
                      <span className="text-sm" style={{ color: '#1F2933' }}>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div
                className="p-8 rounded-lg border"
                style={{ background: '#2F855A10', borderColor: '#2F855A40' }}
              >
                <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: '#2F855A' }}>
                  Typical Outcome
                </p>
                <p className="text-base font-semibold" style={{ color: '#1F2933' }}>{data.outcome}</p>
              </div>

              {data.caseStudy && (
                <div
                  className="mt-6 p-8 border border-[#BAC7D5]/40 rounded-lg bg-white"
                >
                  <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: '#C6A15B' }}>
                    Case Study
                  </p>
                  <h3 className="font-display text-xl font-semibold mb-2" style={{ color: '#1F2933' }}>
                    {data.caseStudy.title}
                  </h3>
                  <p className="text-sm font-medium mb-4" style={{ color: '#2F855A' }}>
                    {data.caseStudy.result}
                  </p>
                  <Link
                    to={`/case-studies/${data.caseStudy.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-medium hover:opacity-80"
                    style={{ color: '#C6A15B' }}
                  >
                    Read the full story <ArrowRight size={14} />
                  </Link>
                </div>
              )}

              <div className="mt-6">
                <Link
                  to="/consultation"
                  className="block w-full text-center px-8 py-4 text-sm font-semibold text-white rounded transition-opacity hover:opacity-90"
                  style={{ background: '#2F855A' }}
                >
                  Discuss This Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
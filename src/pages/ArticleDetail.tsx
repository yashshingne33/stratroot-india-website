import { useParams, Link } from 'react-router'
import { ArrowLeft, ArrowRight } from 'lucide-react'

const ARTICLES: Record<string, {
  date: string
  readTime: string
  category: string
  title: string
  subtitle: string
  body: { type: 'p' | 'h2' | 'h3' | 'blockquote' | 'ul'; content: string | string[] }[]
  img: string
}> = {
  'hidden-cost-weak-operations': {
    date: 'June 2025',
    readTime: '8 min read',
    category: 'Operations',
    title: 'The Hidden Cost of Weak Operations in Indian Manufacturing',
    subtitle: 'Most manufacturers focus on sales. The real margin killers are invisible — and they live in your operations.',
    img: 'photo-1581091226825-a6a2a5aee158',
    body: [
      { type: 'p', content: 'Talk to most Indian manufacturing business owners and the conversation quickly turns to sales. How to grow the top line. How to win more customers. How to enter new markets. Revenue is the obsession.' },
      { type: 'p', content: 'Meanwhile, the business bleeds.' },
      { type: 'p', content: 'In our experience working inside 30+ manufacturing businesses across India, operations are where the money goes missing. Not in dramatic single events — but in the slow, daily accumulation of small operational failures that, together, amount to significant margin destruction.' },
      { type: 'h2', content: 'The Five Operational Leaks' },
      { type: 'h3', content: '1. Unplanned Downtime' },
      { type: 'p', content: 'Ask most manufacturing businesses what their OEE (Overall Equipment Effectiveness) is. Most don\'t measure it. Those that do measure it incorrectly. In our diagnostic work, we\'ve found OEE figures 15-30% below what management believes — meaning machines are productive for far fewer hours than anyone thinks.' },
      { type: 'p', content: 'The cost? On a ₹50 Cr revenue business, a 20% OEE improvement typically translates to ₹3-5 Cr in additional output without capital investment.' },
      { type: 'h3', content: '2. Quality Failure Costs' },
      { type: 'p', content: 'Quality costs — rework, scrap, customer returns, warranty claims — are almost universally underreported. They sit in multiple P&L line items and are rarely consolidated. When we do consolidate them, the number is almost always shocking.' },
      { type: 'blockquote', content: 'In one auto component manufacturer we worked with, consolidated quality failure costs were 8.4% of revenue. The business thought they were 2.1%.' },
      { type: 'h3', content: '3. Inventory Overload' },
      { type: 'p', content: 'Indian manufacturers carry far more inventory than they need — raw materials, WIP, and finished goods alike. The reasons are understandable: supplier reliability concerns, customer demand unpredictability, and a cultural preference for having "plenty" on hand.' },
      { type: 'p', content: 'But excess inventory costs money. Financing costs, storage costs, insurance, obsolescence, and handling costs all add up. In most manufacturing businesses we\'ve diagnosed, there is 20-40% excess inventory — representing significant working capital that could be freed.' },
      { type: 'h3', content: '4. Procurement Inefficiency' },
      { type: 'p', content: 'Purchasing in most Indian SMEs is still largely relationship-based — which sounds good but often means the business is systematically overpaying. Without structured vendor evaluation, competitive tendering, and purchase order discipline, procurement costs drift upward over time.' },
      { type: 'h3', content: '5. Labour Productivity Variance' },
      { type: 'p', content: 'In labour-intensive manufacturing, output per worker varies significantly across shifts, lines, and locations — but few businesses measure and act on this variation. The variation itself is the opportunity.' },
      { type: 'h2', content: 'The Integrated Picture' },
      { type: 'p', content: 'The striking thing is not that any single one of these leaks is catastrophic. It\'s that they compound. A business with 15% OEE shortfall, 5% quality failure costs, 25% excess inventory, 8% procurement premium, and 20% labour productivity variance doesn\'t have five individual problems.' },
      { type: 'p', content: 'It has a structural operations problem — and no amount of new sales will fix it. The additional revenue will simply flow through an inefficient system and emerge as inadequate margin.' },
      { type: 'h2', content: 'Where to Start' },
      { type: 'p', content: 'The good news is that operational improvement is methodical. Unlike market development (which depends on external variables), operations improvement depends almost entirely on internal action. You control it.' },
      { type: 'ul', content: ['Start with a proper diagnostic. Not a quick walk-through, but a structured operational audit with data.', 'Measure what you don\'t measure. OEE, quality failure costs, inventory days, procurement benchmark.', 'Fix the biggest leak first. Operational improvement has a sequencing — the wrong sequence slows results.', 'Build systems, not workarounds. The goal is not to fix this year\'s problem but to build a process that prevents the problem from recurring.'] },
    ],
  },
  'exporter-plateau': {
    date: 'May 2025',
    readTime: '6 min read',
    category: 'Exports',
    title: 'Why Most Indian Exporters Plateau at ₹50 Crore',
    subtitle: 'The systems that took you to ₹50 Cr are precisely what prevent you from reaching ₹200 Cr.',
    img: 'photo-1586528116311-ad8dd3c8310d',
    body: [
      { type: 'p', content: 'India has hundreds of thousands of exporters. But the distribution is strikingly bimodal — a small number of very large exporters, and a vast sea of businesses stuck below ₹50-60 crore. The middle is thin.' },
      { type: 'p', content: 'This isn\'t a coincidence. There is a specific structural plateau at ₹50 Crore that traps Indian exporters — and understanding it is the first step to breaking through it.' },
      { type: 'h2', content: 'How Exporters Get to ₹50 Crore' },
      { type: 'p', content: 'Most exporters reach ₹50 crore through a combination of product capability, personal relationships, and opportunistic market development. The founder knows the product, knows a few buyers, and has built trust over years. The business is largely founder-dependent — and that\'s fine at this scale.' },
      { type: 'h2', content: 'Why ₹50 Crore Becomes a Ceiling' },
      { type: 'ul', content: ['Compliance complexity grows non-linearly. Documentation requirements, certification needs, and regulatory compliance in export markets increase sharply beyond certain volume thresholds — and the informal systems that worked at ₹30 crore break down.', 'Buyer concentration becomes a risk. Most ₹50 Cr exporters have 3-5 buyers accounting for 80%+ of revenue. Each buyer has pricing power — and the exporter knows it.', 'Working capital requirements exceed available credit. Scaling to ₹100+ crore requires significant working capital — typically more than Indian banks are willing to provide against export receivables without significant collateral.', 'The founder bottleneck appears. At ₹50 crore, the founder can still personally manage most buyer relationships. At ₹150 crore, this is impossible — but building the team to take this over is genuinely hard.'] },
      { type: 'h2', content: 'What Actually Breaks Through' },
      { type: 'p', content: 'In our experience helping exporters scale past ₹50 crore, the common denominator is not product — it\'s infrastructure. The businesses that break through invest early in the systems and relationships that ₹200 crore requires, not the minimum that ₹50 crore needs.' },
      { type: 'blockquote', content: 'The most successful export scaling engagements we\'ve done began not with "how do we get more buyers" but "what kind of organisation do we need to be to serve ₹200 crore in export business reliably?"' },
      { type: 'p', content: 'That question changes everything — the hiring, the systems, the compliance investments, the financial structure. Most exporters only think about it when they\'re already stuck.' },
    ],
  },
  'family-business-succession': {
    date: 'April 2025',
    readTime: '10 min read',
    category: 'Family Business',
    title: 'The Family Business Succession Problem Nobody Talks About',
    subtitle: 'It\'s not about who inherits. It\'s about what kind of organisation you\'re handing over.',
    img: 'photo-1507003211169-0a1dd7228f2d',
    body: [
      { type: 'p', content: 'When people talk about family business succession, the conversation almost always centres on who inherits. Which child? Equally or unequally? What happens to the others? These are important questions — but they\'re the wrong starting point.' },
      { type: 'p', content: 'The real succession problem in Indian family businesses is not transfer of ownership. It\'s transfer of capability.' },
      { type: 'h2', content: 'What Most Founders Are Actually Handing Over' },
      { type: 'p', content: 'In a family business where the founder has been the centre of gravity for 20-30 years, the organisation that exists on paper and the organisation that actually functions are very different things. The founder is often the informal system — the relationships, the judgement, the credibility, the decision-making authority.' },
      { type: 'p', content: 'When that founder steps back, the informal system collapses. The next generation inherits a legal entity, an asset base, and an organisational chart — but not the operating system that made it work.' },
      { type: 'h2', content: 'The Three Succession Failures' },
      { type: 'h3', content: 'Failure 1: Succession without professionalisation' },
      { type: 'p', content: 'The most common pattern we see is succession from one family leader to the next without any real organisational change. The founder steps back, the son or daughter steps forward, and everything else stays the same. This works only if the next generation has the same capabilities and relationships — which is almost never true.' },
      { type: 'h3', content: 'Failure 2: Professionalisation without governance' },
      { type: 'p', content: 'The second pattern is businesses that bring in professional managers — a CEO, CFO, COO — but never build the governance structures that allow them to actually function. Professional managers in family businesses without clear governance tend to resign within 18-24 months.' },
      { type: 'h3', content: 'Failure 3: Governance without development' },
      { type: 'p', content: 'The third pattern is family businesses that create formal governance structures — family councils, boards, governance charters — without investing in developing the next generation\'s actual business capability. Governance without capability is theatre.' },
      { type: 'h2', content: 'The Right Sequence' },
      { type: 'p', content: 'In our work with family businesses, we\'ve found that successful succession requires a specific sequence: first, professionalise the organisation (build systems, hire professional management, separate family roles from business roles); second, establish governance (family council, independent board, clear decision rights); third, develop the next generation as business leaders, not just owners.' },
      { type: 'blockquote', content: 'The goal of succession is not to hand over a business. It\'s to hand over an organisation — one that can run, grow, and adapt without the founder being in every room.' },
    ],
  },
  'working-capital-operations': {
    date: 'March 2025',
    readTime: '7 min read',
    category: 'Finance',
    title: 'Working Capital is Not a Finance Problem. It\'s an Operations Problem.',
    subtitle: 'Most Indian businesses treat cash flow issues as a finance problem to be solved with more credit. The real fix is almost always operational.',
    img: 'photo-1454165804606-c3d57bc86b40',
    body: [
      { type: 'p', content: 'When an Indian business runs short of working capital, the instinctive response is to call the bank. Increase the CC limit. Arrange a loan against receivables. Find another lender. The problem is framed as a finance problem — and the solution is more finance.' },
      { type: 'p', content: 'But working capital is generated by operations. It\'s consumed by operations. And working capital crises almost always have operational root causes.' },
      { type: 'h2', content: 'Where Working Capital Goes' },
      { type: 'p', content: 'Working capital has three main absorbers: inventory, receivables, and payables (or more precisely, the gap between the first two and the third). Most businesses understand this in theory but don\'t actively manage any of the three.' },
      { type: 'ul', content: ['Inventory: Is there more inventory than you need? How much is slow-moving or obsolete? When did you last audit stock against records?', 'Receivables: How many days does it actually take to collect? What percentage is over 60 days? Over 90? What is the formal credit policy?', 'Payables: Are you paying vendors on time or early? Are you using every day of credit available? Are payment terms optimal for every supplier category?'] },
      { type: 'p', content: 'In every working capital engagement we\'ve conducted, improving all three by 15-20% through better operations management has freed more cash than any banking solution could provide.' },
    ],
  },
  'founder-bottleneck': {
    date: 'February 2025',
    readTime: '5 min read',
    category: 'Leadership',
    title: 'The Founder Bottleneck: Why You\'re the Ceiling of Your Business',
    subtitle: 'If every major decision routes through you, your business will never grow beyond your personal bandwidth.',
    img: 'photo-1551288049-bebda4e38f71',
    body: [
      { type: 'p', content: 'There is a certain kind of business owner who is simultaneously the business\'s greatest asset and its most significant constraint. They are exceptional — deeply knowledgeable, hardworking, trusted by customers and staff alike. And they are everywhere.' },
      { type: 'p', content: 'Every important decision routes through them. Every important relationship is theirs personally. Every crisis requires their direct involvement. The business is, in practice, them.' },
      { type: 'h2', content: 'The Structural Problem' },
      { type: 'p', content: 'This is not a time management problem. It\'s a structural problem. The business has been built — intentionally or not — in a way that requires the founder to be at the centre of everything. The systems, relationships, and decision rights all point back to one person.' },
      { type: 'p', content: 'The consequences are predictable: the business can\'t grow beyond what the founder can personally oversee; the founder can\'t take a break, holiday, or sabbatical without things deteriorating; the business is entirely dependent on the founder\'s health and continued engagement; and any attempt to hire senior people fails, because they have no real authority.' },
      { type: 'h2', content: 'Building the Second Tier' },
      { type: 'p', content: 'The solution is not delegation — it\'s structural. The founder needs to redesign the organisation so that a second tier of leadership has real authority, real accountability, and real consequence for their performance.' },
      { type: 'p', content: 'This is harder than it sounds. It requires the founder to let go of decisions they\'ve always made. To tolerate a different (sometimes worse) outcome than they would have achieved personally. To invest in developing leaders who may eventually outgrow the organisation. Most founders understand this intellectually. Very few do it naturally.' },
    ],
  },
  'business-plan-vs-strategy': {
    date: 'January 2025',
    readTime: '9 min read',
    category: 'Strategy',
    title: 'The Difference Between a Business Plan and a Strategy',
    subtitle: 'Most Indian businesses have plans. Very few have strategies. The difference isn\'t semantic.',
    img: 'photo-1560472354-b33ff0c44a43',
    body: [
      { type: 'p', content: 'Every Indian business owner I\'ve met has a plan. Revenue targets, expansion timelines, hiring plans, product roadmaps — often documented, sometimes in quite impressive detail. What most businesses lack is a strategy.' },
      { type: 'p', content: 'The confusion between the two is costly. Businesses invest enormous energy executing plans that have no strategic logic — and are then surprised when the results disappoint.' },
      { type: 'h2', content: 'What a Plan Is' },
      { type: 'p', content: 'A plan is a statement of what you intend to do: the actions you\'ll take, the resources you\'ll allocate, the timeline you\'ll follow. Plans are important. But a plan answers the question "what will we do?" — not "why will we win?"' },
      { type: 'h2', content: 'What a Strategy Is' },
      { type: 'p', content: 'A strategy is a coherent set of choices about where to compete, how to win, and what capabilities are required. It is fundamentally about differentiation — what makes your business harder to compete with than alternatives.' },
      { type: 'blockquote', content: 'A plan says: we will grow revenue from ₹50 Cr to ₹100 Cr by entering three new cities and hiring 20 salespeople. A strategy says: we will win in industrial B2B markets in South India by building a technical service capability that no competitor can match, and using that capability to justify a 15% price premium.' },
      { type: 'p', content: 'The plan might follow directly from the strategy — but without the strategy, the plan is just a hope dressed up in a spreadsheet.' },
      { type: 'h2', content: 'Why Most Businesses Don\'t Have Strategy' },
      { type: 'p', content: 'Making real strategic choices is uncomfortable. It requires saying no — to market segments, to product categories, to customer types that might generate revenue. Most business owners resist this. They prefer to keep options open, pursue opportunities as they arise, and serve any customer who wants to buy.' },
      { type: 'p', content: 'The result is a business that is spread across many markets, customer types, and product categories — without being distinctively good at any of them. This is a plan without a strategy. And it usually leads to average margins, fragile competitive position, and a business that is difficult to grow.' },
    ],
  },
}

export default function ArticleDetail() {
  const { slug } = useParams<{ slug: string }>()
  const data = slug ? ARTICLES[slug] : null

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-24" style={{ background: '#F8FAF7' }}>
        <div className="text-center">
          <h1 className="font-display text-3xl font-semibold mb-4" style={{ color: '#102A43' }}>Article not found</h1>
          <Link to="/insights" className="text-sm font-medium" style={{ color: '#2F855A' }}>← Back to Insights</Link>
        </div>
      </div>
    )
  }

  const renderBlock = (block: { type: string; content: string | string[] }, i: number) => {
    if (block.type === 'p') {
      return (
        <p key={i} className="text-base leading-relaxed mb-5" style={{ color: '#1F2933' }}>
          {block.content as string}
        </p>
      )
    }
    if (block.type === 'h2') {
      return (
        <h2 key={i} className="font-display text-2xl lg:text-3xl font-semibold mt-10 mb-4" style={{ color: '#102A43' }}>
          {block.content as string}
        </h2>
      )
    }
    if (block.type === 'h3') {
      return (
        <h3 key={i} className="font-semibold text-lg mt-6 mb-2" style={{ color: '#102A43' }}>
          {block.content as string}
        </h3>
      )
    }
    if (block.type === 'blockquote') {
      return (
        <blockquote
          key={i}
          className="border-l-4 pl-6 py-2 my-8"
          style={{ borderColor: '#2F855A' }}
        >
          <p className="font-display text-xl italic" style={{ color: '#102A43', lineHeight: 1.6 }}>
            {block.content as string}
          </p>
        </blockquote>
      )
    }
    if (block.type === 'ul') {
      return (
        <ul key={i} className="space-y-3 mb-6 ml-4">
          {(block.content as string[]).map((item, j) => (
            <li key={j} className="flex items-start gap-3 text-sm leading-relaxed" style={{ color: '#1F2933' }}>
              <span className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#2F855A' }} />
              {item}
            </li>
          ))}
        </ul>
      )
    }
    return null
  }

  return (
    <div>
      {/* Article Header */}
      <div className="pt-36 pb-0 lg:pt-48" style={{ background: '#102A43' }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <Link
            to="/insights"
            className="inline-flex items-center gap-2 text-xs font-medium mb-10 transition-colors hover:text-white"
            style={{ color: '#BAC7D5' }}
          >
            <ArrowLeft size={14} /> All Insights
          </Link>
          <div className="flex items-center gap-3 mb-6">
            <span
              className="text-xs font-semibold tracking-widest uppercase px-2.5 py-1 rounded"
              style={{ background: '#2F855A25', color: '#C6A15B' }}
            >
              {data.category}
            </span>
            <span className="text-xs" style={{ color: '#BAC7D5' }}>{data.date}</span>
            <span style={{ color: '#BAC7D5' }}>·</span>
            <span className="text-xs" style={{ color: '#BAC7D5' }}>{data.readTime}</span>
          </div>
          <h1
            className="font-display text-4xl lg:text-6xl font-semibold text-white pb-12"
            style={{ lineHeight: 1.1, letterSpacing: '-0.02em' }}
          >
            {data.title}
          </h1>
        </div>
        <div style={{ height: '420px' }}>
          <img
            src={`https://images.unsplash.com/${data.img}?w=1800&h=600&fit=crop&auto=format`}
            alt={data.title}
            className="w-full h-full object-cover"
            style={{ opacity: 0.8 }}
          />
        </div>
      </div>

      {/* Main Body Section */}
      <section className="py-16 lg:py-24" style={{ background: '#F8FAF7' }}>
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <p
            className="font-display text-xl lg:text-2xl mb-10 pb-10 border-b border-[#BAC7D5]/40"
            style={{ color: '#102A43', lineHeight: 1.5 }}
          >
            {data.subtitle}
          </p>
          <div>
            {data.body.map((block, i) => renderBlock(block, i))}
          </div>

          {/* Call to Action Box */}
          <div
            className="mt-16 p-8 border border-[#BAC7D5]/40 rounded-lg shadow-sm"
            style={{ background: 'white' }}
          >
            <h3 className="font-display text-2xl font-semibold mb-3" style={{ color: '#102A43' }}>
              Want to explore this for your business?
            </h3>
            <p className="text-sm mb-6" style={{ color: '#1F2933' }}>
              Book a discovery call. We'll assess your situation honestly — and tell you where we can help.
            </p>
            <Link
              to="/consultation"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white rounded transition-colors hover:bg-[#276749]"
              style={{ background: '#2F855A' }}
            >
              Book a Consultation <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
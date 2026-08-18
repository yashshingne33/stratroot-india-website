import { Link } from 'react-router'
import { ArrowRight, CheckCircle } from 'lucide-react'

const VALUES = [
  {
    title: 'Execution over advice',
    body: 'We measure our value by what changes in your business — not by what we recommend in a report.',
  },
  {
    title: 'Intellectual honesty',
    body: 'We tell you what we believe is true, including the uncomfortable parts. Our relationships are built on candour.',
  },
  {
    title: 'Sector depth',
    body: 'We don\'t pretend to know everything. We specialise in Indian manufacturing, exports, and family businesses — and we go deep.',
  },
  {
    title: 'Partnership, not prescription',
    body: 'We work with your team, not above them. Ownership, capability, and accountability remain with you.',
  },
]

const TEAM = [
  {
    name: 'Arvind Mehta',
    role: 'Founder & Managing Partner',
    bg: 'Operations & Turnaround',
    years: '22 years',
    former: 'Ex-McKinsey, TVS Group',
    img: 'photo-1507003211169-0a1dd7228f2d',
  },
  {
    name: 'Priya Nair',
    role: 'Partner — Finance & Strategy',
    bg: 'Financial Restructuring',
    years: '16 years',
    former: 'Ex-KPMG, L&T Finance',
    img: 'photo-1560472354-b33ff0c44a43',
  },
  {
    name: 'Suresh Iyer',
    role: 'Partner — Operations',
    bg: 'Manufacturing & Supply Chain',
    years: '19 years',
    former: 'Ex-Bosch, Mahindra',
    img: 'photo-1454165804606-c3d57bc86b40',
  },
  {
    name: 'Deepika Sharma',
    role: 'Partner — Markets & Growth',
    bg: 'Export & Market Entry',
    years: '15 years',
    former: 'Ex-BCG, FIEO',
    img: 'photo-1551288049-bebda4e38f71',
  },
]

export default function About() {
  return (
    <div>
      {/* Page Header */}
      <div className="pt-36 pb-20 lg:pt-48 lg:pb-28" style={{ background: '#102A43' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <span className="h-px w-12" style={{ background: '#C6A15B' }} />
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#C6A15B' }}>About Us</span>
          </div>
          <h1
            className="font-display text-5xl lg:text-7xl font-semibold text-white max-w-3xl"
            style={{ lineHeight: 1.05, letterSpacing: '-0.02em' }}
          >
            Built for
            <br />
            <em style={{ color: '#C6A15B', fontStyle: 'normal' }}>builders.</em>
          </h1>
          <p className="mt-8 text-lg max-w-2xl" style={{ color: '#BAC7D5' }}>
            StratRoot India was founded by operators who got tired of watching good businesses fail due to bad execution. We exist for the business owner who is serious about what's next.
          </p>
        </div>
      </div>

      {/* Story */}
      <section className="py-24 lg:py-32" style={{ background: '#F8FAF7' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase mb-6" style={{ color: '#C6A15B' }}>Our Story</p>
              <h2
                className="font-display text-4xl font-semibold mb-8"
                style={{ color: '#1F2933', lineHeight: 1.2 }}
              >
                We've sat on both sides of the table.
              </h2>
              <div className="space-y-5 text-sm leading-relaxed" style={{ color: '#1F2933' }}>
                <p>
                  StratRoot India was founded in 2008 by Arvind Mehta, after nearly a decade advising businesses at McKinsey and running operations at TVS Group. He'd seen too many good strategies die in implementation — not because the strategy was wrong, but because no one stayed to execute it.
                </p>
                <p>
                  He built StratRoot on a different premise: <strong>what if the consultant stayed until the outcome was real?</strong> What if expertise wasn't delivered in a PowerPoint, but embedded in the daily operations of the business?
                </p>
                <p>
                  Today, our team of 24 partners and senior advisors has collectively worked inside 85+ businesses across 14 sectors — not as observers, but as temporary operators who leave behind systems, capabilities, and measurable results.
                </p>
                <p>
                  We work almost exclusively with Indian businesses: manufacturers, exporters, family-owned enterprises, MSMEs, and founders who are ready to move from good to great.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop&auto=format"
                alt="Industrial operations"
                className="rounded-lg w-full"
                style={{ objectFit: 'cover', height: '480px' }}
              />
              <div
                className="absolute -bottom-6 -left-6 p-6 rounded-lg border"
                style={{ background: '#F8FAF7', borderColor: '#E2E8F0' }}
              >
                <p className="font-display text-4xl font-semibold" style={{ color: '#2F855A' }}>₹2,400 Cr</p>
                <p className="text-xs mt-1" style={{ color: '#1F2933' }}>Total revenue impact delivered</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 lg:py-32" style={{ background: '#1F2933' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-xl mb-16">
            <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: '#C6A15B' }}>How We Think</p>
            <h2 className="font-display text-4xl font-semibold text-white" style={{ lineHeight: 1.2 }}>
              Four beliefs that guide everything we do.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {VALUES.map((v, i) => (
              <div
                key={v.title}
                className="p-8 border-b border-r"
                style={{
                  borderColor: 'rgba(255, 255, 255, 0.1)',
                  borderRight: i % 2 === 0 ? undefined : 'none',
                }}
              >
                <CheckCircle size={20} className="mb-5" style={{ color: '#2F855A' }} />
                <h3 className="font-display text-xl font-semibold text-white mb-3">{v.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#BAC7D5' }}>{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-24 lg:py-32" style={{ background: '#F8FAF7' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-xl mb-16">
            <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: '#C6A15B' }}>Leadership</p>
            <h2 className="font-display text-4xl font-semibold" style={{ color: '#1F2933', lineHeight: 1.2 }}>
              Operators who've
              <br />been in the room.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM.map((member) => (
              <div key={member.name} className="group">
                <div className="overflow-hidden rounded-lg mb-5" style={{ background: '#E2E8F0', height: '300px' }}>
                  <img
                    src={`https://images.unsplash.com/${member.img}?w=400&h=500&fit=crop&auto=format`}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-semibold text-base" style={{ color: '#1F2933' }}>{member.name}</h3>
                <p className="text-xs font-medium mt-1" style={{ color: '#2F855A' }}>{member.role}</p>
                <p className="text-xs mt-2" style={{ color: '#1F2933' }}>{member.former} · {member.years}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ background: '#102A43' }}>
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl lg:text-4xl font-semibold text-white mb-6">
            Ready to work with us?
          </h2>
          <Link
            to="/consultation"
            className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold text-white rounded transition-opacity hover:opacity-90"
            style={{ background: '#2F855A' }}
          >
            Book a Discovery Call <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  )
}
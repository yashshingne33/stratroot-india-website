import { useState } from 'react'
import { Link } from 'react-router'
import { ArrowRight } from 'lucide-react'

const ARTICLES = [
  {
    date: 'June 2025',
    readTime: '8 min read',
    category: 'Operations',
    title: 'The Hidden Cost of Weak Operations in Indian Manufacturing',
    excerpt: 'Most manufacturers focus on sales. The real margin killers are invisible — and they live in your operations. We break down the five operational leaks that silently destroy profitability.',
    slug: 'hidden-cost-weak-operations',
    img: 'photo-1581091226825-a6a2a5aee158',
  },
  {
    date: 'May 2025',
    readTime: '6 min read',
    category: 'Exports',
    title: 'Why Most Indian Exporters Plateau at ₹50 Crore',
    excerpt: 'The systems that took you to ₹50 Cr are precisely what prevent you from reaching ₹200 Cr. A structural look at the export plateau problem — and what actually breaks through it.',
    slug: 'exporter-plateau',
    img: 'photo-1586528116311-ad8dd3c8310d',
  },
  {
    date: 'April 2025',
    readTime: '10 min read',
    category: 'Family Business',
    title: 'The Family Business Succession Problem Nobody Talks About',
    excerpt: 'It\'s not about who inherits. It\'s about what kind of organisation you\'re handing over — and whether the next generation can actually run it.',
    slug: 'family-business-succession',
    img: 'photo-1507003211169-0a1dd7228f2d',
  },
  {
    date: 'March 2025',
    readTime: '7 min read',
    category: 'Finance',
    title: 'Working Capital is Not a Finance Problem. It\'s an Operations Problem.',
    excerpt: 'Most Indian businesses treat cash flow issues as a finance problem to be solved with more credit. The real fix is almost always operational.',
    slug: 'working-capital-operations',
    img: 'photo-1454165804606-c3d57bc86b40',
  },
  {
    date: 'February 2025',
    readTime: '5 min read',
    category: 'Leadership',
    title: 'The Founder Bottleneck: Why You\'re the Ceiling of Your Business',
    excerpt: 'If every major decision routes through you, your business will never grow beyond your personal bandwidth. Here\'s how to build the second layer that actually works.',
    slug: 'founder-bottleneck',
    img: 'photo-1551288049-bebda4e38f71',
  },
  {
    date: 'January 2025',
    readTime: '9 min read',
    category: 'Strategy',
    title: 'The Difference Between a Business Plan and a Strategy',
    excerpt: 'Most Indian businesses have plans. Very few have strategies. The difference isn\'t semantic — it\'s the difference between a business that reacts and a business that leads.',
    slug: 'business-plan-vs-strategy',
    img: 'photo-1560472354-b33ff0c44a43',
  },
]

const CATEGORIES = ['All', 'Operations', 'Exports', 'Family Business', 'Finance', 'Leadership', 'Strategy']

export default function Insights() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredArticles = selectedCategory === 'All'
    ? ARTICLES
    : ARTICLES.filter((a) => a.category === selectedCategory)

  const featuredArticle = filteredArticles[0]
  const remainingArticles = filteredArticles.slice(1)

  return (
    <div>

      <section className="pt-36 pb-20 lg:pt-48 lg:pb-24" style={{ background: 'var(--color-primary)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <span className="h-px w-12" style={{ background: 'var(--color-gold)' }} />
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: 'var(--color-gold)' }}>
              Insights
            </span>
          </div>
          <h1
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-white max-w-2xl mb-6"
            style={{ lineHeight: 1.05, letterSpacing: '-0.02em' }}
          >
            Thinking that
            <br />
            <em style={{ color: 'var(--color-gold)', fontStyle: 'normal' }}>cuts through.</em>
          </h1>
          <p className="text-lg max-w-lg" style={{ color: 'var(--color-muted)' }}>
           Grounded analysis on Indian business — written by people who spend their time inside businesses, not writing about them from the outside.
          </p>
        </div>
      </section>

      <section className="py-24 lg:py-32" style={{ background: '#F8FAF7' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 mb-12">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className="text-xs font-semibold px-4 py-2 rounded-full transition-colors cursor-pointer"
                  style={{
                    background: isActive ? '#2F855A' : '#E2E8F0',
                    color: isActive ? '#FFFFFF' : '#1F2933',
                  }}
                >
                  {cat}
                </button>
              )
            })}
          </div>

          {filteredArticles.length === 0 ? (
            <div className="py-12 text-center text-sm" style={{ color: '#1F2933' }}>
              No articles found in this category.
            </div>
          ) : (
            <>
              {/* Featured article */}
              {featuredArticle && (
                <div className="mb-16">
                  <Link
                    to={`/insights/${featuredArticle.slug}`}
                    className="group grid grid-cols-1 lg:grid-cols-2 gap-0 border border-[#BAC7D5]/40 rounded-lg bg-white overflow-hidden hover:border-[#2F855A] hover:shadow-lg transition-all duration-300"
                  >
                    <div style={{ height: '400px' }}>
                      <img
                        src={`https://images.unsplash.com/${featuredArticle.img}?w=800&h=600&fit=crop&auto=format`}
                        alt={featuredArticle.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-10 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-3 mb-5">
                          <span
                            className="text-xs font-semibold tracking-widest uppercase px-2 py-1 rounded"
                            style={{ background: '#2F855A15', color: '#2F855A' }}
                          >
                            {featuredArticle.category}
                          </span>
                          <span className="text-xs" style={{ color: '#1F2933' }}>Featured</span>
                        </div>
                        <h2
                          className="font-display text-3xl font-semibold mb-4 group-hover:text-[#2F855A] transition-colors"
                          style={{ color: '#1F2933', lineHeight: 1.2 }}
                        >
                          {featuredArticle.title}
                        </h2>
                        <p className="text-sm leading-relaxed" style={{ color: '#1F2933' }}>
                          {featuredArticle.excerpt}
                        </p>
                      </div>
                      <div className="flex items-center justify-between mt-8 pt-6 border-t border-[#BAC7D5]/40">
                        <div className="flex items-center gap-3">
                          <span className="text-xs" style={{ color: '#1F2933' }}>{featuredArticle.date}</span>
                          <span style={{ color: '#BAC7D5' }}>·</span>
                          <span className="text-xs" style={{ color: '#1F2933' }}>{featuredArticle.readTime}</span>
                        </div>
                        <div
                          className="flex items-center gap-1 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity"
                          style={{ color: '#2F855A' }}
                        >
                          Read article <ArrowRight size={12} />
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              )}

              {/* Article grid */}
              {remainingArticles.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {remainingArticles.map((a) => (
                    <Link
                      key={a.slug}
                      to={`/insights/${a.slug}`}
                      className="group flex flex-col justify-between border border-[#BAC7D5]/30 rounded-lg p-5 bg-white transition-all hover:border-[#2F855A] hover:shadow-md"
                    >
                      <div>
                        <div className="aspect-video rounded-lg overflow-hidden mb-5" style={{ background: '#E2E8F0' }}>
                          <img
                            src={`https://images.unsplash.com/${a.img}?w=600&h=340&fit=crop&auto=format`}
                            alt={a.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                        <div className="flex items-center gap-2 mb-3">
                          <span
                            className="text-xs font-semibold tracking-widest uppercase px-2 py-0.5 rounded"
                            style={{ background: '#2F855A15', color: '#2F855A' }}
                          >
                            {a.category}
                          </span>
                        </div>
                        <h3
                          className="font-display text-xl font-semibold mb-2 group-hover:text-[#2F855A] transition-colors"
                          style={{ color: '#1F2933', lineHeight: 1.3 }}
                        >
                          {a.title}
                        </h3>
                        <p className="text-sm leading-relaxed mb-4 line-clamp-2" style={{ color: '#1F2933' }}>
                          {a.excerpt}
                        </p>
                      </div>
                      <div className="flex items-center gap-3 pt-4 border-t border-[#BAC7D5]/30">
                        <span className="text-xs" style={{ color: '#1F2933' }}>{a.date}</span>
                        <span style={{ color: '#BAC7D5' }}>·</span>
                        <span className="text-xs" style={{ color: '#1F2933' }}>{a.readTime}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </div>
  )
}
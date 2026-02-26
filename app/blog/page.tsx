import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllPosts, getActiveCategories, CATEGORY_META } from '@/lib/blog'
import { generateBlogListSchema } from '@/lib/blog/types'
import { APP_NAME, APP_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Blog — Home Buying Guides, Tips & Market Insights',
  description: 'Expert guides, commission breakdowns, and strategies for buying a home without a buyer\'s agent. Learn how to save $10,000+ on your next home purchase.',
  alternates: {
    canonical: `${APP_URL}/blog`,
  },
  openGraph: {
    title: `${APP_NAME} Blog — Home Buying Without an Agent`,
    description: 'Expert guides and strategies for buying a home without a buyer\'s agent. Save $10,000+ in commissions.',
    url: `${APP_URL}/blog`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${APP_NAME} Blog — Home Buying Without an Agent`,
    description: 'Expert guides and strategies for buying a home without a buyer\'s agent.',
  },
}

export default function BlogPage() {
  const allPosts = getAllPosts()
  const categories = getActiveCategories()
  const baseUrl = APP_URL

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBlogListSchema(allPosts, baseUrl)),
        }}
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="container max-w-4xl">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
              The BAIRE Blog
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl">
              Guides, strategies, and insights for buying a home without a buyer&apos;s agent. 
              The math changed — here&apos;s how to use it.
            </p>
          </div>

          {/* Category Filter */}
          {categories.length > 1 && (
            <div className="flex flex-wrap gap-2 mb-10">
              <Link
                href="/blog"
                className="px-3 py-1.5 rounded-full text-sm font-medium transition-colors bg-[#2d3b2d] text-white"
              >
                All
              </Link>
              {categories.map(({ category, label, count }) => (
                <Link
                  key={category}
                  href={`/blog/${category}`}
                  className="px-3 py-1.5 rounded-full text-sm font-medium transition-colors bg-slate-100 text-slate-600 hover:bg-slate-200"
                >
                  {label} ({count})
                </Link>
              ))}
            </div>
          )}

          {/* Posts */}
          {allPosts.length === 0 ? (
            <p className="text-slate-500 text-center py-12">
              No posts yet. Check back soon.
            </p>
          ) : (
            <div className="space-y-8">
              {allPosts.map((post) => (
                <article key={post.slug} className="group">
                  <Link href={`/blog/${post.slug}`} className="block">
                    <div className="border border-slate-200 rounded-xl p-6 hover:border-slate-300 hover:shadow-sm transition-all">
                      {/* Category + Date */}
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-xs font-medium text-[#2d3b2d] bg-[#e8ede8] px-2 py-0.5 rounded-full">
                          {CATEGORY_META[post.category].label}
                        </span>
                        <time
                          dateTime={post.publishedAt}
                          className="text-xs text-slate-400"
                        >
                          {new Date(post.publishedAt).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
                        </time>
                        {post.readingTime && (
                          <span className="text-xs text-slate-400">
                            {post.readingTime} min read
                          </span>
                        )}
                      </div>

                      {/* Title */}
                      <h2 className="text-xl font-semibold text-slate-900 group-hover:text-[#2d3b2d] transition-colors mb-2">
                        {post.title}
                      </h2>

                      {/* Description */}
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {post.description}
                      </p>

                      {/* Tags */}
                      {post.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mt-3">
                          {post.tags.slice(0, 4).map(tag => (
                            <span
                              key={tag}
                              className="text-xs text-slate-400 bg-slate-50 px-2 py-0.5 rounded"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          )}

          {/* CTA */}
          <div className="mt-16 text-center border-t border-slate-200 pt-12">
            <h2 className="text-xl font-semibold text-slate-900 mb-2">
              Ready to buy without an agent?
            </h2>
            <p className="text-slate-600 mb-5">
              BAIRE gives you everything an agent does — for $995 instead of $10,000+.
            </p>
            <Link
              href="/signup"
              className="inline-flex items-center justify-center px-8 py-3 bg-[#2d3b2d] text-white rounded-full font-medium hover:bg-[#1d2b1d] transition-colors"
            >
              Start Free Trial
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

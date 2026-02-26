import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getPostBySlug, getAllSlugs, getRelatedPosts, CATEGORY_META } from '@/lib/blog'
import {
  generateArticleSchema,
  generateBreadcrumbSchema,
  generateFAQSchema,
} from '@/lib/blog/types'
import { APP_NAME, APP_URL } from '@/lib/constants'

interface BlogPostPageProps {
  params: { slug: string }
}

// Static generation for all blog posts
export function generateStaticParams() {
  return getAllSlugs().map(slug => ({ slug }))
}

// Dynamic metadata per post
export function generateMetadata({ params }: BlogPostPageProps): Metadata {
  const post = getPostBySlug(params.slug)
  if (!post) return {}

  const url = `${APP_URL}/blog/${post.slug}`

  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    authors: [{ name: post.author.name, url: post.author.url }],
    alternates: {
      canonical: post.canonicalUrl || url,
    },
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.description,
      url,
      siteName: APP_NAME,
      publishedTime: post.publishedAt,
      ...(post.updatedAt && { modifiedTime: post.updatedAt }),
      section: CATEGORY_META[post.category].label,
      tags: post.tags,
      ...(post.image && {
        images: [{
          url: post.image,
          alt: post.imageAlt || post.title,
        }],
      }),
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      ...(post.image && { images: [post.image] }),
    },
    robots: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug)
  if (!post) notFound()

  const baseUrl = APP_URL
  const relatedPosts = getRelatedPosts(post, 3)
  const PostContent = post.content

  const articleSchema = generateArticleSchema(post, baseUrl)
  const breadcrumbSchema = generateBreadcrumbSchema(post, baseUrl)
  const faqSchema = post.faqs ? generateFAQSchema(post.faqs) : null

  return (
    <>
      {/* Structured Data: Article */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Structured Data: Breadcrumbs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Structured Data: FAQ (if present) */}
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <article className="py-12 md:py-20 bg-white">
        <div className="container max-w-3xl">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-1.5 text-sm text-slate-400">
              <li>
                <Link href="/" className="hover:text-slate-600 transition-colors">Home</Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/blog" className="hover:text-slate-600 transition-colors">Blog</Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link
                  href={`/blog?category=${post.category}`}
                  className="hover:text-slate-600 transition-colors"
                >
                  {CATEGORY_META[post.category].label}
                </Link>
              </li>
            </ol>
          </nav>

          {/* Post Header */}
          <header className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-medium text-[#2d3b2d] bg-[#e8ede8] px-2.5 py-1 rounded-full">
                {CATEGORY_META[post.category].label}
              </span>
              {post.readingTime && (
                <span className="text-sm text-slate-400">
                  {post.readingTime} min read
                </span>
              )}
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight mb-4">
              {post.title}
            </h1>

            <p className="text-lg text-slate-600 mb-4">
              {post.description}
            </p>

            <div className="flex items-center gap-4 text-sm text-slate-400">
              <span>By {post.author.name}</span>
              <time dateTime={post.publishedAt}>
                {new Date(post.publishedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
              {post.updatedAt && (
                <span>
                  Updated{' '}
                  <time dateTime={post.updatedAt}>
                    {new Date(post.updatedAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                </span>
              )}
            </div>
          </header>
  {/* TL;DR — GEO Extraction Beacon */}
          {post.tldr && (
            <div className="mb-10 rounded-xl border-l-4 border-sage-500 bg-sage-50 px-6 py-5">
              <p className="text-xs font-bold tracking-[0.12em] uppercase text-sage-600 mb-2">
                TL;DR
              </p>
              <p className="text-slate-700 leading-relaxed text-base">
                {post.tldr}
              </p>
            </div>
          )}
          {/* Divider */}
          <div className="border-t border-slate-200 mb-10" />

          {/* Post Body */}
          <div className="blog-prose">
            <PostContent />
          </div>

          {/* FAQ Section (if present) — rendered as visible content for users + LLMs */}
          {post.faqs && post.faqs.length > 0 && (
            <div className="mt-12 pt-8 border-t border-slate-200">
              <h2 className="text-2xl font-semibold text-slate-900 mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                {post.faqs.map((faq, index) => (
                  <div key={index}>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tags */}
          {post.tags.length > 0 && (
            <div className="mt-10 pt-6 border-t border-slate-200">
              <div className="flex flex-wrap gap-2">
                {post.tags.map(tag => (
                  <span
                    key={tag}
                    className="text-sm text-slate-500 bg-slate-50 px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="mt-12 bg-[#f4f7f4] rounded-xl p-8 text-center">
            <h2 className="text-xl font-semibold text-slate-900 mb-2">
              Buy your home smarter
            </h2>
            <p className="text-slate-600 mb-5">
              BAIRE gives you comp analysis, offer strategy, and negotiation coaching — everything an agent does, for $995 instead of $10,000+.
            </p>
            <Link
              href="/signup"
              className="inline-flex items-center justify-center px-8 py-3 bg-[#2d3b2d] text-white rounded-full font-medium hover:bg-[#1d2b1d] transition-colors"
            >
              Start Free Trial
            </Link>
            <p className="text-xs text-slate-400 mt-3">
              7 days free · Then $995 · Cancel anytime during trial
            </p>
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div className="mt-16">
              <h2 className="text-xl font-semibold text-slate-900 mb-6">
                Keep Reading
              </h2>
              <div className="grid gap-4">
                {relatedPosts.map(related => (
                  <Link
                    key={related.slug}
                    href={`/blog/${related.slug}`}
                    className="block border border-slate-200 rounded-lg p-5 hover:border-slate-300 hover:shadow-sm transition-all"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-medium text-[#2d3b2d] bg-[#e8ede8] px-2 py-0.5 rounded-full">
                        {CATEGORY_META[related.category].label}
                      </span>
                      {related.readingTime && (
                        <span className="text-xs text-slate-400">{related.readingTime} min</span>
                      )}
                    </div>
                    <h3 className="font-semibold text-slate-900 mb-1">{related.title}</h3>
                    <p className="text-sm text-slate-500 line-clamp-2">{related.description}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>
    </>
  )
}

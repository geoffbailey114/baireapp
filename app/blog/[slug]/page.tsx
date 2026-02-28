import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  getPostBySlug,
  getAllSlugs,
  getAllPosts,
  getPostsByCategory,
  getRelatedPosts,
  getActiveCategories,
  CATEGORY_META,
} from '@/lib/blog'
import type { BlogCategory } from '@/lib/blog/types'
import {
  generateArticleSchema,
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateBlogListSchema,
} from '@/lib/blog/types'
import { APP_NAME, APP_URL } from '@/lib/constants'

// ============================================================
// HELPERS — Determine if a slug is a category or a post
// ============================================================

const ALL_CATEGORY_SLUGS = Object.keys(CATEGORY_META) as BlogCategory[]

function isCategory(slug: string): slug is BlogCategory {
  return ALL_CATEGORY_SLUGS.includes(slug as BlogCategory)
}

// ============================================================
// STATIC PARAMS — Generate pages for both categories and posts
// ============================================================

interface SlugPageProps {
  params: { slug: string }
}

export function generateStaticParams() {
  const postSlugs = getAllSlugs().map(slug => ({ slug }))
  const categorySlugs = getActiveCategories().map(({ category }) => ({ slug: category }))
  return [...categorySlugs, ...postSlugs]
}

// ============================================================
// METADATA — Category or post metadata
// ============================================================

export function generateMetadata({ params }: SlugPageProps): Metadata {
  const { slug } = params

  // --- Category page metadata ---
  if (isCategory(slug)) {
    const meta = CATEGORY_META[slug]
    return {
      title: `${meta.label} — BAIRE Blog`,
      description: meta.description,
      alternates: {
        canonical: `${APP_URL}/blog/${slug}`,
      },
      openGraph: {
        title: `${meta.label} — ${APP_NAME} Blog`,
        description: meta.description,
        url: `${APP_URL}/blog/${slug}`,
        type: 'website',
      },
      twitter: {
        card: 'summary_large_image',
        title: `${meta.label} — ${APP_NAME} Blog`,
        description: meta.description,
      },
    }
  }

  // --- Blog post metadata ---
  const post = getPostBySlug(slug)
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

// ============================================================
// PAGE COMPONENT — Route to category or post
// ============================================================

export default function BlogSlugPage({ params }: SlugPageProps) {
  const { slug } = params

  if (isCategory(slug)) {
    return <CategoryPage category={slug} />
  }

  const post = getPostBySlug(slug)
  if (!post) notFound()

  return <BlogPostPage post={post} />
}

// ============================================================
// CATEGORY PAGE
// ============================================================

function CategoryPage({ category }: { category: BlogCategory }) {
  const meta = CATEGORY_META[category]
  const posts = getPostsByCategory(category)
  const categories = getActiveCategories()
  const baseUrl = APP_URL

  // CollectionPage schema scoped to this category
  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: `${meta.label} — BAIRE Blog`,
    description: meta.description,
    url: `${baseUrl}/blog/${category}`,
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: posts.length,
      itemListElement: posts.slice(0, 20).map((post, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        url: `${baseUrl}/blog/${post.slug}`,
        name: post.title,
      })),
    },
  }

  // BreadcrumbList: Home → Blog → Category
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${baseUrl}/blog` },
      { '@type': 'ListItem', position: 3, name: meta.label, item: `${baseUrl}/blog/${category}` },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="container max-w-4xl">
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
              <li className="text-slate-600">{meta.label}</li>
            </ol>
          </nav>

          {/* Header */}
          <div className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
              {meta.label}
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl">
              {meta.description}
            </p>
          </div>

          {/* Category Filter */}
          {categories.length > 1 && (
            <div className="flex flex-wrap gap-2 mb-10">
              <Link
                href="/blog"
                className="px-3 py-1.5 rounded-full text-sm font-medium transition-colors bg-slate-100 text-slate-600 hover:bg-slate-200"
              >
                All
              </Link>
              {categories.map(({ category: cat, label, count }) => (
                <Link
                  key={cat}
                  href={`/blog/${cat}`}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                    cat === category
                      ? 'bg-[#2d3b2d] text-white'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {label} ({count})
                </Link>
              ))}
            </div>
          )}

          {/* Posts */}
          {posts.length === 0 ? (
            <p className="text-slate-500 text-center py-12">
              No posts yet in this category. Check back soon.
            </p>
          ) : (
            <div className="space-y-8">
              {posts.map((post) => (
                <article key={post.slug} className="group">
                  <Link href={`/blog/${post.slug}`} className="block">
                    <div className="border border-slate-200 rounded-xl p-6 hover:border-slate-300 hover:shadow-sm transition-all">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-xs font-medium text-[#2d3b2d] bg-[#e8ede8] px-2 py-0.5 rounded-full">
                          {CATEGORY_META[post.category].label}
                        </span>
                        <time dateTime={post.publishedAt} className="text-xs text-slate-400">
                          {new Date(post.publishedAt).toLocaleDateString('en-US', {
                            year: 'numeric', month: 'long', day: 'numeric',
                          })}
                        </time>
                        {post.readingTime && (
                          <span className="text-xs text-slate-400">{post.readingTime} min read</span>
                        )}
                      </div>
                      <h2 className="text-xl font-semibold text-slate-900 group-hover:text-[#2d3b2d] transition-colors mb-2">
                        {post.title}
                      </h2>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {post.description}
                      </p>
                      {post.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mt-3">
                          {post.tags.slice(0, 4).map(tag => (
                            <span key={tag} className="text-xs text-slate-400 bg-slate-50 px-2 py-0.5 rounded">
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

// ============================================================
// BLOG POST PAGE (existing logic, preserved exactly)
// ============================================================

import type { BlogPost } from '@/lib/blog/types'

function BlogPostPage({ post }: { post: BlogPost }) {
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
                  href={`/blog/${post.category}`}
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

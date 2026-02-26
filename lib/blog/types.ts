import { ReactNode } from 'react'

// ============================================================
// BLOG POST TYPES
// ============================================================

export interface BlogPostMeta {
  /** URL slug — becomes /blog/[slug] */
  slug: string

  /** SEO title — appears in <title> tag and OG. Keep under 60 chars */
  title: string

  /** Meta description — appears in search results. Keep 150-160 chars */
  description: string

  /** Publication date (ISO 8601) */
  publishedAt: string

  /** Last updated date (ISO 8601). Omit if never updated */
  updatedAt?: string

  /** Author info */
  author: {
    name: string
    url?: string
  }

  /** Primary category for grouping */
  category: BlogCategory

  /** Tags for filtering and related posts */
  tags: string[]

  /** Target SEO keywords (2-5 per post). Used in meta keywords + internal linking */
  keywords: string[]

  /** Estimated reading time in minutes (auto-calculated if not set) */
  readingTime?: number

  /** Featured image for OG/Twitter cards. Path relative to /public */
  image?: string

  /** Image alt text (required if image is set) */
  imageAlt?: string

  /** Whether this post should appear in the blog index */
  published: boolean

  /** Optional canonical URL if cross-posted */
  canonicalUrl?: string

  /** FAQ items — rendered in-page AND as FAQPage schema for rich snippets */
  faqs?: BlogFAQ[]

  /** Related post slugs (for internal linking) */
  relatedSlugs?: string[]

  /**
   * TL;DR summary — rendered as a highlighted callout at the top of the post.
   * Acts as a GEO extraction beacon for LLMs. 2-3 sentences, self-contained,
   * factual, includes key data points. LLMs frequently extract this as the answer.
   */
  tldr?: string
}

export interface BlogFAQ {
  question: string
  answer: string
}

export type BlogCategory =
  | 'state-guides'      // "How to Buy Without an Agent in [State]"
  | 'process'           // "How to Write an Offer", "What Happens at Closing"
  | 'nar-settlement'    // NAR settlement news and explainers
  | 'savings'           // Cost comparisons, commission math
  | 'comparisons'       // "BAIRE vs Agent", "BAIRE vs HOMA"
  | 'mortgage'          // Mortgage and financing education
  | 'first-time-buyer'  // First-time buyer guides
  | 'negotiation'       // Negotiation strategies and tips
  | 'market-insights'   // Market data and trends

export const CATEGORY_META: Record<BlogCategory, { label: string; description: string }> = {
  'state-guides': {
    label: 'State Guides',
    description: 'State-by-state guides to buying a home without a buyer\'s agent.',
  },
  'process': {
    label: 'The Process',
    description: 'Step-by-step guides to every stage of buying a home on your own.',
  },
  'nar-settlement': {
    label: 'NAR Settlement',
    description: 'How the NAR settlement changed home buying — and what it means for you.',
  },
  'savings': {
    label: 'The Math',
    description: 'Commission breakdowns, cost comparisons, and the real math of home buying.',
  },
  'comparisons': {
    label: 'Comparisons',
    description: 'How BAIRE compares to traditional agents, discount brokerages, and other options.',
  },
  'mortgage': {
    label: 'Mortgage & Financing',
    description: 'Mortgage education, pre-approval guides, and financing strategies.',
  },
  'first-time-buyer': {
    label: 'First-Time Buyers',
    description: 'Everything first-time home buyers need to know — from pre-approval to closing.',
  },
  'negotiation': {
    label: 'Negotiation',
    description: 'Proven negotiation strategies for self-represented home buyers.',
  },
  'market-insights': {
    label: 'Market Insights',
    description: 'Real estate market data, trends, and analysis for informed buyers.',
  },
}

export interface BlogPost extends BlogPostMeta {
  /** React content for the post body */
  content: () => ReactNode
}

// ============================================================
// SEO STRUCTURED DATA GENERATORS
// ============================================================

export function generateArticleSchema(post: BlogPostMeta, baseUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    author: {
      '@type': 'Organization',
      name: post.author.name,
      url: post.author.url || baseUrl,
    },
    publisher: {
      '@type': 'Organization',
      name: 'BAIRE',
      url: baseUrl,
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/logo.svg`,
      },
    },
    datePublished: post.publishedAt,
    ...(post.updatedAt && { dateModified: post.updatedAt }),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${baseUrl}/blog/${post.slug}`,
    },
    ...(post.image && {
      image: {
        '@type': 'ImageObject',
        url: `${baseUrl}${post.image}`,
        ...(post.imageAlt && { caption: post.imageAlt }),
      },
    }),
    keywords: post.keywords.join(', '),
    articleSection: CATEGORY_META[post.category].label,
    wordCount: post.readingTime ? post.readingTime * 250 : undefined,
    inLanguage: 'en-US',
  }
}

export function generateBreadcrumbSchema(post: BlogPostMeta, baseUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: baseUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: `${baseUrl}/blog`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: CATEGORY_META[post.category].label,
        item: `${baseUrl}/blog?category=${post.category}`,
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: post.title,
        item: `${baseUrl}/blog/${post.slug}`,
      },
    ],
  }
}

export function generateFAQSchema(faqs: BlogFAQ[]) {
  if (!faqs || faqs.length === 0) return null
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

export function generateBlogListSchema(posts: BlogPostMeta[], baseUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'BAIRE Blog — Home Buying Without an Agent',
    description: 'Expert guides, market insights, and strategies for buying a home without a buyer\'s agent. Save $10,000+ with BAIRE.',
    url: `${baseUrl}/blog`,
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
}

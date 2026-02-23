import { BlogPost, BlogPostMeta, BlogCategory, CATEGORY_META } from './types'

// ============================================================
// POST REGISTRY
// Import each post file here. This is the single source of truth.
// ============================================================

// Existing posts
import { post as narSettlementExplained } from './posts/nar-settlement-explained'
import { post as doYouNeedBuyersAgent } from './posts/do-you-need-a-buyers-agent'
import { post as howToBuyStepByStep } from './posts/how-to-buy-without-agent-step-by-step'
import { post as whatItLooksLike } from './posts/what-it-looks-like-buying-without-agent'

// Stack 1: Commission Myth
import { post as buyerAgentIsntFree } from './posts/buyer-agent-isnt-free'
import { post as trueCost30Year } from './posts/true-cost-buyer-agent-30-year-mortgage'
import { post as fiveThings12000 } from './posts/five-things-paying-buyer-agent-12000'
import { post as everythingFor995 } from './posts/get-everything-buyer-agent-offers-for-995'

// Stack 5: First-Time Buyer Fear
import { post as firstHomeOverwhelming } from './posts/first-home-feels-overwhelming'
import { post as whatFirstTimersNeedToKnow } from './posts/what-first-time-buyers-need-to-know'
import { post as firstTimeBuyerRoadmap } from './posts/first-time-buyer-roadmap-pre-approval-to-closing'
import { post as firstTimeBuyerCaseStudy } from './posts/first-time-buyer-purchases-home-without-agent'

// Import new posts here:

const ALL_POSTS: BlogPost[] = [
  // Existing
  narSettlementExplained,
  doYouNeedBuyersAgent,
  howToBuyStepByStep,
  whatItLooksLike,
  // Stack 1: Commission Myth
  buyerAgentIsntFree,
  trueCost30Year,
  fiveThings12000,
  everythingFor995,
  // Stack 5: First-Time Buyer Fear
  firstHomeOverwhelming,
  whatFirstTimersNeedToKnow,
  firstTimeBuyerRoadmap,
  firstTimeBuyerCaseStudy,
  // Add new posts here
]

// ============================================================
// QUERY HELPERS
// ============================================================

/** Get all published posts, sorted newest first */
export function getAllPosts(): BlogPostMeta[] {
  return ALL_POSTS
    .filter(p => p.published)
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
}

/** Get a single post by slug (includes content) */
export function getPostBySlug(slug: string): BlogPost | undefined {
  return ALL_POSTS.find(p => p.slug === slug && p.published)
}

/** Get all published slugs (for static generation) */
export function getAllSlugs(): string[] {
  return ALL_POSTS.filter(p => p.published).map(p => p.slug)
}

/** Get posts by category */
export function getPostsByCategory(category: BlogCategory): BlogPostMeta[] {
  return getAllPosts().filter(p => p.category === category)
}

/** Get posts by tag */
export function getPostsByTag(tag: string): BlogPostMeta[] {
  return getAllPosts().filter(p => p.tags.includes(tag))
}

/** Get related posts for a given post */
export function getRelatedPosts(post: BlogPostMeta, limit: number = 3): BlogPostMeta[] {
  const allPosts = getAllPosts().filter(p => p.slug !== post.slug)

  // First try explicit related slugs
  if (post.relatedSlugs && post.relatedSlugs.length > 0) {
    const explicit = post.relatedSlugs
      .map(slug => allPosts.find(p => p.slug === slug))
      .filter(Boolean) as BlogPostMeta[]
    if (explicit.length >= limit) return explicit.slice(0, limit)
  }

  // Score by shared tags + same category
  const scored = allPosts.map(p => {
    let score = 0
    if (p.category === post.category) score += 2
    post.tags.forEach(tag => { if (p.tags.includes(tag)) score += 1 })
    post.keywords.forEach(kw => { if (p.keywords.includes(kw)) score += 1 })
    return { post: p, score }
  })

  return scored
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(s => s.post)
}

/** Get all categories that have published posts */
export function getActiveCategories(): { category: BlogCategory; label: string; count: number }[] {
  const counts: Partial<Record<BlogCategory, number>> = {}
  getAllPosts().forEach(p => {
    counts[p.category] = (counts[p.category] || 0) + 1
  })

  return (Object.entries(counts) as [BlogCategory, number][])
    .map(([category, count]) => ({
      category,
      label: CATEGORY_META[category].label,
      count,
    }))
    .sort((a, b) => b.count - a.count)
}

/** Get sitemap entries for all published blog posts */
export function getBlogSitemapEntries(): { slug: string; updatedAt: string }[] {
  return getAllPosts().map(p => ({
    slug: p.slug,
    updatedAt: p.updatedAt || p.publishedAt,
  }))
}

/** Get all unique tags with counts */
export function getAllTags(): { tag: string; count: number }[] {
  const counts: Record<string, number> = {}
  getAllPosts().forEach(p => {
    p.tags.forEach(tag => { counts[tag] = (counts[tag] || 0) + 1 })
  })

  return Object.entries(counts)
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count)
}

/** Calculate reading time from word count */
export function calculateReadingTime(wordCount: number): number {
  return Math.max(1, Math.ceil(wordCount / 250))
}

// Re-export types
export { CATEGORY_META } from './types'
export type { BlogPost, BlogPostMeta, BlogCategory, BlogFAQ } from './types'

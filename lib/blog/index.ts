import { BlogPost, BlogPostMeta, BlogCategory, CATEGORY_META } from './types'

// ============================================================
// POST REGISTRY
// Import each post file here. This is the single source of truth.
// ============================================================

import { post as narSettlementExplained } from './posts/nar-settlement-explained'
// Import new posts here:
// import { post as howToBuyWithoutAgent } from './posts/how-to-buy-without-agent'

const ALL_POSTS: BlogPost[] = [
  narSettlementExplained,
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

/** Get sitemap entries for all published posts */
export function getBlogSitemapEntries(): { slug: string; updatedAt: string }[] {
  return getAllPosts().map(p => ({
    slug: p.slug,
    updatedAt: p.updatedAt || p.publishedAt,
  }))
}

/** Calculate reading time from word count */
export function calculateReadingTime(wordCount: number): number {
  return Math.max(1, Math.ceil(wordCount / 250))
}

// Re-export types
export { CATEGORY_META } from './types'
export type { BlogPost, BlogPostMeta, BlogCategory, BlogFAQ } from './types'

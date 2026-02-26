import { MetadataRoute } from 'next'
import { APP_URL } from '@/lib/constants'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.APP_BASE_URL || APP_URL

  // Gated routes that should NOT be indexed
  const disallowedRoutes = [
    '/access',
    '/consultant',
    '/api/',
    '/admin',
    '/onboarding',
    '/billing',
    '/login',
    '/v1',
    '/v2',
  ]

  return {
    rules: [
      // Traditional search engines
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: disallowedRoutes,
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: disallowedRoutes,
      },

      // OpenAI (ChatGPT)
      {
        userAgent: 'GPTBot',
        allow: '/',
        disallow: disallowedRoutes,
      },
      {
        userAgent: 'OAI-SearchBot',
        allow: '/',
        disallow: disallowedRoutes,
      },
      {
        userAgent: 'ChatGPT-User',
        allow: '/',
        disallow: disallowedRoutes,
      },

      // Anthropic (Claude)
      {
        userAgent: 'ClaudeBot',
        allow: '/',
        disallow: disallowedRoutes,
      },
      {
        userAgent: 'Claude-SearchBot',
        allow: '/',
        disallow: disallowedRoutes,
      },
      {
        userAgent: 'Claude-User',
        allow: '/',
        disallow: disallowedRoutes,
      },
      {
        userAgent: 'anthropic-ai',
        allow: '/',
        disallow: disallowedRoutes,
      },

      // Google AI (Gemini / AI Overviews)
      {
        userAgent: 'Google-Extended',
        allow: '/',
        disallow: disallowedRoutes,
      },

      // Perplexity
      {
        userAgent: 'PerplexityBot',
        allow: '/',
        disallow: disallowedRoutes,
      },
      {
        userAgent: 'Perplexity-User',
        allow: '/',
        disallow: disallowedRoutes,
      },

      // Apple (Siri / Spotlight)
      {
        userAgent: 'Applebot',
        allow: '/',
        disallow: disallowedRoutes,
      },
      {
        userAgent: 'Applebot-Extended',
        allow: '/',
        disallow: disallowedRoutes,
      },

      // Other AI search
      {
        userAgent: 'YouBot',
        allow: '/',
        disallow: disallowedRoutes,
      },
      {
        userAgent: 'PhindBot',
        allow: '/',
        disallow: disallowedRoutes,
      },
      {
        userAgent: 'DuckAssistBot',
        allow: '/',
        disallow: disallowedRoutes,
      },
      {
        userAgent: 'Amazonbot',
        allow: '/',
        disallow: disallowedRoutes,
      },
      {
        userAgent: 'CCBot',
        allow: '/',
        disallow: disallowedRoutes,
      },

      // Default: allow all
      {
        userAgent: '*',
        allow: '/',
        disallow: disallowedRoutes,
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}

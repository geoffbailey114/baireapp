import { MetadataRoute } from 'next'
import { APP_URL } from '@/lib/constants'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.APP_BASE_URL || APP_URL

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/access',
          '/consultant',
          '/api/',
          '/v1',
          '/v2',
          '/admin',
          '/onboarding',
          '/billing',
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}

/**
 * Listing Lookup Service
 * Uses ScrapingBee to fetch any listing URL, then parses site-specific HTML
 * 
 * Supported sites: Zillow, Redfin, Realtor.com, Trulia, Homes.com
 */

export interface ListingAgent {
  name: string
  phone?: string
  email?: string
  brokerage?: string
}

export interface ListingData {
  found: boolean
  source: 'zillow' | 'redfin' | 'realtor' | 'trulia' | 'homes' | 'unknown'
  url: string
  // Property info
  address?: string
  city?: string
  state?: string
  zipCode?: string
  price?: number
  priceFormatted?: string
  bedrooms?: number
  bathrooms?: number
  sqft?: number
  daysOnMarket?: number
  yearBuilt?: number
  lotSize?: string
  propertyType?: string
  // Listing agent info
  listingAgent?: ListingAgent
  // Error info
  error?: string
}

/**
 * Detect if a message contains a listing URL and identify the source
 */
export function detectListingUrl(message: string): { found: boolean; url: string; source: string } | null {
  // Patterns for each site
  const patterns = [
    { source: 'zillow', regex: /https?:\/\/(?:www\.)?zillow\.com\/(?:homedetails|homes)[^\s<>"']*/i },
    { source: 'redfin', regex: /https?:\/\/(?:www\.)?redfin\.com\/[^\s<>"']*\/home\/[^\s<>"']*/i },
    { source: 'realtor', regex: /https?:\/\/(?:www\.)?realtor\.com\/realestateandhomes-detail[^\s<>"']*/i },
    { source: 'trulia', regex: /https?:\/\/(?:www\.)?trulia\.com\/[^\s<>"']*\/home[^\s<>"']*/i },
    { source: 'homes', regex: /https?:\/\/(?:www\.)?homes\.com\/[^\s<>"']*/i },
  ]

  for (const { source, regex } of patterns) {
    const match = message.match(regex)
    if (match) {
      // Clean trailing punctuation
      const url = match[0].replace(/[.,;!?)>\]]+$/, '')
      return { found: true, url, source }
    }
  }

  return null
}

/**
 * Fetch page HTML using ScrapingBee
 */
async function fetchPageHtml(url: string): Promise<string | null> {
  const SCRAPINGBEE_API_KEY = process.env.SCRAPINGBEE_API_KEY

  if (!SCRAPINGBEE_API_KEY) {
    console.log('ScrapingBee API key not configured')
    return null
  }

  try {
    const params = new URLSearchParams({
      api_key: SCRAPINGBEE_API_KEY,
      url: url,
      render_js: 'true',      // Critical: these sites use JavaScript
      wait: '3000',           // Wait for dynamic content
      wait_for: 'body',       // Ensure body is loaded
      block_ads: 'true',
      block_resources: 'false',
      premium_proxy: 'true',  // Better success rate for real estate sites
    })

    console.log(`Fetching listing via ScrapingBee: ${url}`)
    
    const response = await fetch(`https://app.scrapingbee.com/api/v1?${params}`, {
      method: 'GET',
      headers: { 'Accept': 'text/html' },
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error(`ScrapingBee error: ${response.status}`, errorText)
      return null
    }

    const html = await response.text()
    console.log(`Fetched ${html.length} bytes`)
    return html
  } catch (error) {
    console.error('ScrapingBee fetch error:', error)
    return null
  }
}

// ============================================
// HELPER FUNCTIONS
// ============================================

function cleanText(text: string): string {
  return text
    .replace(/&amp;/g, '&')
    .replace(/&nbsp;/g, ' ')
    .replace(/&#\d+;/g, '')
    .replace(/\s+/g, ' ')
    .trim()
}

function formatPhone(digits: string): string {
  const clean = digits.replace(/\D/g, '')
  if (clean.length === 10) {
    return `(${clean.slice(0, 3)}) ${clean.slice(3, 6)}-${clean.slice(6)}`
  }
  if (clean.length === 11 && clean[0] === '1') {
    return `(${clean.slice(1, 4)}) ${clean.slice(4, 7)}-${clean.slice(7)}`
  }
  return digits
}

function extractPhone(text: string): string | undefined {
  const phoneMatch = text.match(/\(?(\d{3})\)?[-.\s]?(\d{3})[-.\s]?(\d{4})/)
  if (phoneMatch) {
    return `(${phoneMatch[1]}) ${phoneMatch[2]}-${phoneMatch[3]}`
  }
  return undefined
}

// ============================================
// SITE-SPECIFIC PARSERS
// ============================================

/**
 * Parse Zillow listing HTML
 */
function parseZillow(html: string, url: string): Partial<ListingData> {
  const data: Partial<ListingData> = {}

  try {
    // Try JSON-LD structured data first (most reliable)
    const jsonLdMatch = html.match(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)
    if (jsonLdMatch) {
      for (const match of jsonLdMatch) {
        try {
          const jsonStr = match.replace(/<script[^>]*>|<\/script>/gi, '').trim()
          const jsonData = JSON.parse(jsonStr)
          
          if (jsonData['@type'] === 'SingleFamilyResidence' || jsonData['@type'] === 'Product' || jsonData.address) {
            if (jsonData.address) {
              data.address = jsonData.address.streetAddress
              data.city = jsonData.address.addressLocality
              data.state = jsonData.address.addressRegion
              data.zipCode = jsonData.address.postalCode
            }
          }
        } catch { /* continue */ }
      }
    }

    // Address fallback
    if (!data.address) {
      const addrMatch = html.match(/"streetAddress"\s*:\s*"([^"]+)"/i) ||
                        html.match(/<h1[^>]*>([^<]+,\s*[A-Z]{2}\s*\d{5})<\/h1>/i)
      if (addrMatch) data.address = cleanText(addrMatch[1])
    }

    // Price
    const priceMatch = html.match(/"price"\s*:\s*"?\$?([\d,]+)/i) ||
                       html.match(/\$\s*([\d,]+)(?:<|<\/span>|\s)/i)
    if (priceMatch) {
      data.price = parseInt(priceMatch[1].replace(/,/g, ''))
      data.priceFormatted = `$${data.price.toLocaleString()}`
    }

    // Beds/Baths/Sqft
    const bedsMatch = html.match(/(\d+)\s*(?:<[^>]*>)?\s*(?:beds?|bd|bedrooms?)/i)
    const bathsMatch = html.match(/([\d.]+)\s*(?:<[^>]*>)?\s*(?:baths?|ba|bathrooms?)/i)
    const sqftMatch = html.match(/([\d,]+)\s*(?:<[^>]*>)?\s*(?:sqft|sq\s*ft|square\s*feet)/i)
    
    if (bedsMatch) data.bedrooms = parseInt(bedsMatch[1])
    if (bathsMatch) data.bathrooms = parseFloat(bathsMatch[1])
    if (sqftMatch) data.sqft = parseInt(sqftMatch[1].replace(/,/g, ''))

    // Days on Market
    const domMatch = html.match(/(\d+)\s*days?\s*on\s*zillow/i) ||
                     html.match(/"daysOnZillow"\s*:\s*(\d+)/i) ||
                     html.match(/Time\s*on\s*Zillow[:\s]*(\d+)\s*days?/i)
    if (domMatch) data.daysOnMarket = parseInt(domMatch[1])

    // Listing Agent - multiple patterns
    const agentSection = html.match(/listing\s*(?:provided\s*)?by[\s\S]*?(?=<\/div>|<\/section>|$)/i)
    const agentText = agentSection ? agentSection[0] : html

    const agentNameMatch = agentText.match(/listing\s*(?:provided\s*)?by[:\s]*([A-Za-z][A-Za-z\s\-'.]+?)(?:[,<\n]|$)/i) ||
                           html.match(/"listingAgent"[^}]*"name"\s*:\s*"([^"]+)"/i)
    
    const agentPhoneMatch = agentText.match(/(\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4})/)
    
    const brokerageMatch = agentText.match(/(?:brokerage|courtesy\s*of|broker)[:\s]*([A-Za-z][A-Za-z\s&\-'.]+?)(?:[,<\n]|$)/i)

    if (agentNameMatch || agentPhoneMatch) {
      data.listingAgent = {
        name: agentNameMatch ? cleanText(agentNameMatch[1]) : 'See listing page',
        phone: agentPhoneMatch ? formatPhone(agentPhoneMatch[1]) : undefined,
        brokerage: brokerageMatch ? cleanText(brokerageMatch[1]) : undefined,
      }
    }

  } catch (error) {
    console.error('Zillow parse error:', error)
  }

  return data
}

/**
 * Parse Redfin listing HTML
 */
function parseRedfin(html: string, url: string): Partial<ListingData> {
  const data: Partial<ListingData> = {}

  try {
    // JSON-LD
    const jsonLdMatch = html.match(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)
    if (jsonLdMatch) {
      for (const match of jsonLdMatch) {
        try {
          const jsonStr = match.replace(/<script[^>]*>|<\/script>/gi, '').trim()
          const jsonData = JSON.parse(jsonStr)
          if (jsonData.address) {
            data.address = jsonData.address.streetAddress
            data.city = jsonData.address.addressLocality
            data.state = jsonData.address.addressRegion
            data.zipCode = jsonData.address.postalCode
          }
          if (jsonData.offers?.price) {
            data.price = parseInt(jsonData.offers.price)
            data.priceFormatted = `$${data.price.toLocaleString()}`
          }
        } catch { /* continue */ }
      }
    }

    // Address fallback
    if (!data.address) {
      const addrMatch = html.match(/class="[^"]*full-address[^"]*"[^>]*>([^<]+)/i) ||
                        html.match(/"streetAddress"\s*:\s*"([^"]+)"/i)
      if (addrMatch) data.address = cleanText(addrMatch[1])
    }

    // Price fallback
    if (!data.price) {
      const priceMatch = html.match(/\$\s*([\d,]+)/)
      if (priceMatch) {
        data.price = parseInt(priceMatch[1].replace(/,/g, ''))
        data.priceFormatted = `$${data.price.toLocaleString()}`
      }
    }

    // Stats
    const bedsMatch = html.match(/(\d+)\s*(?:Beds?|BR)/i)
    const bathsMatch = html.match(/([\d.]+)\s*(?:Baths?|BA)/i)
    const sqftMatch = html.match(/([\d,]+)\s*(?:Sq\.?\s*Ft\.?|sqft|SF)/i)
    
    if (bedsMatch) data.bedrooms = parseInt(bedsMatch[1])
    if (bathsMatch) data.bathrooms = parseFloat(bathsMatch[1])
    if (sqftMatch) data.sqft = parseInt(sqftMatch[1].replace(/,/g, ''))

    // Days on Market
    const domMatch = html.match(/(\d+)\s*days?\s*(?:on\s*)?(?:redfin|market)/i) ||
                     html.match(/on\s*market[:\s]*(\d+)\s*days?/i)
    if (domMatch) data.daysOnMarket = parseInt(domMatch[1])

    // Listing Agent
    const agentNameMatch = html.match(/Listed\s*by[:\s]*([A-Za-z][A-Za-z\s\-'.]+?)(?:\s*•|\s*,|\s*<)/i) ||
                           html.match(/Listing\s*Agent[:\s]*([A-Za-z][A-Za-z\s\-'.]+?)(?:\s*•|\s*,|\s*<)/i)
    
    const phoneMatch = extractPhone(html)
    const brokerageMatch = html.match(/(?:Listing\s*)?Brokerage[:\s]*([^<\n]+)/i)

    if (agentNameMatch || phoneMatch) {
      data.listingAgent = {
        name: agentNameMatch ? cleanText(agentNameMatch[1]) : 'See listing page',
        phone: phoneMatch,
        brokerage: brokerageMatch ? cleanText(brokerageMatch[1]) : undefined,
      }
    }

  } catch (error) {
    console.error('Redfin parse error:', error)
  }

  return data
}

/**
 * Parse Realtor.com listing HTML
 */
function parseRealtor(html: string, url: string): Partial<ListingData> {
  const data: Partial<ListingData> = {}

  try {
    // JSON-LD
    const jsonLdMatch = html.match(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)
    if (jsonLdMatch) {
      for (const match of jsonLdMatch) {
        try {
          const jsonStr = match.replace(/<script[^>]*>|<\/script>/gi, '').trim()
          const jsonData = JSON.parse(jsonStr)
          if (jsonData.address) {
            data.address = jsonData.address.streetAddress
            data.city = jsonData.address.addressLocality
            data.state = jsonData.address.addressRegion
            data.zipCode = jsonData.address.postalCode
          }
        } catch { /* continue */ }
      }
    }

    // Address fallback
    if (!data.address) {
      const addrMatch = html.match(/"streetAddress"\s*:\s*"([^"]+)"/i)
      if (addrMatch) data.address = cleanText(addrMatch[1])
    }

    // Price
    const priceMatch = html.match(/"price"\s*:\s*"?\$?([\d,]+)/i) ||
                       html.match(/\$\s*([\d,]+)/)
    if (priceMatch) {
      data.price = parseInt(priceMatch[1].replace(/,/g, ''))
      data.priceFormatted = `$${data.price.toLocaleString()}`
    }

    // Stats
    const bedsMatch = html.match(/"beds"\s*:\s*(\d+)/i) || html.match(/(\d+)\s*(?:bed|bd)/i)
    const bathsMatch = html.match(/"baths(?:_full)?"\s*:\s*(\d+)/i) || html.match(/([\d.]+)\s*(?:bath|ba)/i)
    const sqftMatch = html.match(/"sqft"\s*:\s*(\d+)/i) || html.match(/([\d,]+)\s*(?:sqft|sq\s*ft)/i)
    
    if (bedsMatch) data.bedrooms = parseInt(bedsMatch[1])
    if (bathsMatch) data.bathrooms = parseFloat(bathsMatch[1])
    if (sqftMatch) data.sqft = parseInt(sqftMatch[1].replace(/,/g, ''))

    // Days on Market
    const domMatch = html.match(/"days_on_market"\s*:\s*(\d+)/i) ||
                     html.match(/(\d+)\s*days?\s*on\s*(?:realtor|market)/i)
    if (domMatch) data.daysOnMarket = parseInt(domMatch[1])

    // Listing Agent
    const agentNameMatch = html.match(/"agent_name"\s*:\s*"([^"]+)"/i) ||
                           html.match(/Listing\s*(?:by|Agent)[:\s]*([A-Za-z][A-Za-z\s\-'.]+?)(?:,|<|\n)/i)
    
    const agentPhoneMatch = html.match(/"phones?"\s*:\s*\[\s*\{\s*"number"\s*:\s*"([^"]+)"/i)
    const brokerageMatch = html.match(/"broker(?:age)?_name"\s*:\s*"([^"]+)"/i)

    if (agentNameMatch || agentPhoneMatch) {
      data.listingAgent = {
        name: agentNameMatch ? cleanText(agentNameMatch[1]) : 'See listing page',
        phone: agentPhoneMatch ? formatPhone(agentPhoneMatch[1]) : extractPhone(html),
        brokerage: brokerageMatch ? cleanText(brokerageMatch[1]) : undefined,
      }
    }

  } catch (error) {
    console.error('Realtor.com parse error:', error)
  }

  return data
}

/**
 * Parse Trulia listing HTML
 */
function parseTrulia(html: string, url: string): Partial<ListingData> {
  // Trulia is owned by Zillow, structure is similar
  return parseZillow(html, url)
}

/**
 * Generic fallback parser
 */
function parseGeneric(html: string, url: string): Partial<ListingData> {
  const data: Partial<ListingData> = {}

  try {
    // Try JSON-LD
    const jsonLdMatch = html.match(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/i)
    if (jsonLdMatch) {
      try {
        const jsonData = JSON.parse(jsonLdMatch[1])
        if (jsonData.address) {
          data.address = jsonData.address.streetAddress
          data.city = jsonData.address.addressLocality
          data.state = jsonData.address.addressRegion
          data.zipCode = jsonData.address.postalCode
        }
      } catch { /* continue */ }
    }

    // Basic patterns
    const priceMatch = html.match(/\$\s*([\d,]+)/)
    if (priceMatch) {
      data.price = parseInt(priceMatch[1].replace(/,/g, ''))
      data.priceFormatted = `$${data.price.toLocaleString()}`
    }

    const bedsMatch = html.match(/(\d+)\s*(?:bed|bd|br)/i)
    const bathsMatch = html.match(/([\d.]+)\s*(?:bath|ba)/i)
    if (bedsMatch) data.bedrooms = parseInt(bedsMatch[1])
    if (bathsMatch) data.bathrooms = parseFloat(bathsMatch[1])

  } catch (error) {
    console.error('Generic parse error:', error)
  }

  return data
}

// ============================================
// MAIN FUNCTIONS
// ============================================

/**
 * Fetch and parse listing data from URL
 */
export async function fetchListingData(url: string, source: string): Promise<ListingData> {
  const html = await fetchPageHtml(url)

  if (!html) {
    return {
      found: false,
      source: source as ListingData['source'],
      url,
      error: 'Could not fetch listing page. Check if SCRAPINGBEE_API_KEY is configured.',
    }
  }

  // Parse based on source
  let parsedData: Partial<ListingData>

  switch (source) {
    case 'zillow':
      parsedData = parseZillow(html, url)
      break
    case 'redfin':
      parsedData = parseRedfin(html, url)
      break
    case 'realtor':
      parsedData = parseRealtor(html, url)
      break
    case 'trulia':
      parsedData = parseTrulia(html, url)
      break
    default:
      parsedData = parseGeneric(html, url)
  }

  const hasData = parsedData.address || parsedData.price || parsedData.listingAgent

  return {
    found: hasData,
    source: source as ListingData['source'],
    url,
    ...parsedData,
    error: hasData ? undefined : 'Could not parse listing details from page',
  }
}

/**
 * Format listing data for AI context injection
 */
export function formatListingForAI(listing: ListingData): string {
  if (!listing.found) {
    return `
[LISTING URL DETECTED]
URL: ${listing.url}
Source: ${listing.source}
${listing.error ? `Status: ${listing.error}` : ''}

I detected a listing link but couldn't automatically fetch the details.

Please share the following from the listing page:
1. **Property address**
2. **Listing agent name and phone** (look for "Listing Agent" or "Listed by")
3. **Asking price**
4. **Days on market** (if shown)

Then I'll give you the exact script to call them.`
  }

  let context = `
[LISTING DATA - AUTO-RETRIEVED]
Source: ${listing.source.charAt(0).toUpperCase() + listing.source.slice(1)}`

  // Address
  if (listing.address) {
    const location = [listing.city, listing.state, listing.zipCode].filter(Boolean).join(', ')
    context += `

🏠 **Property:** ${listing.address}${location ? `, ${location}` : ''}`
  }

  // Price
  if (listing.priceFormatted) {
    context += `
💰 **Asking Price:** ${listing.priceFormatted}`
  }

  // Details
  if (listing.bedrooms || listing.bathrooms || listing.sqft) {
    const details = []
    if (listing.bedrooms) details.push(`${listing.bedrooms} bed`)
    if (listing.bathrooms) details.push(`${listing.bathrooms} bath`)
    if (listing.sqft) details.push(`${listing.sqft.toLocaleString()} sqft`)
    context += `
📐 **Details:** ${details.join(' • ')}`
  }

  // Days on market with analysis
  if (listing.daysOnMarket !== undefined) {
    let analysis = ''
    if (listing.daysOnMarket <= 7) {
      analysis = ' 🔥 HOT — move fast, expect competition'
    } else if (listing.daysOnMarket <= 14) {
      analysis = ' ⚡ Active — competitive but room to negotiate'
    } else if (listing.daysOnMarket >= 60) {
      analysis = ' 💪 STRONG LEVERAGE — seller likely motivated'
    } else if (listing.daysOnMarket >= 30) {
      analysis = ' 📊 30+ days — negotiating leverage'
    }
    context += `
📅 **Days on Market:** ${listing.daysOnMarket}${analysis}`
  }

  // Agent contact - THE KEY INFO
  context += `

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📞 **LISTING AGENT CONTACT**`

  if (listing.listingAgent) {
    context += `
**Name:** ${listing.listingAgent.name}`
    if (listing.listingAgent.phone) {
      context += `
**Phone:** ${listing.listingAgent.phone}`
    } else {
      context += `
**Phone:** Not found — ask user to check listing page`
    }
    if (listing.listingAgent.brokerage) {
      context += `
**Brokerage:** ${listing.listingAgent.brokerage}`
    }
  } else {
    context += `
Agent info not found in listing data.
→ Ask user to find "Listing Agent" or "Listed by" on the page`
  }
  context += `
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

**INSTRUCTION:** Use this REAL data in your response. Fill in the call script with:
- Property address: "${listing.address || '[ask user]'}"
- Agent name: "${listing.listingAgent?.name || '[ask user]'}"
- Agent phone: "${listing.listingAgent?.phone || '[ask user]'}"`

  return context
}

/**
 * Main entry point: detect URL in message and fetch data
 */
export async function processListingUrl(message: string): Promise<{
  hasListing: boolean
  listingContext: string
  listingData?: ListingData
}> {
  const detected = detectListingUrl(message)

  if (!detected) {
    return { hasListing: false, listingContext: '' }
  }

  console.log(`[Listing Lookup] Detected ${detected.source} URL: ${detected.url}`)

  const listingData = await fetchListingData(detected.url, detected.source)
  const listingContext = formatListingForAI(listingData)

  return {
    hasListing: true,
    listingContext,
    listingData,
  }
}

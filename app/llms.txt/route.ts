import { NextResponse } from 'next/server'

const LLMS_TXT = `# BAIRE — AI Home Buying Consultant

> Buy your home. Skip the commission.

BAIRE is an AI-powered home buying consultant that replaces the buyer's agent entirely. One flat fee of $995 — versus the industry-standard 2-3% commission ($10,000+ on a typical home).

## What BAIRE Does

BAIRE provides everything a buyer's agent does — for $995 instead of $10,000+:

1. **Find and evaluate homes** — Comp analysis, pricing trends, and red flag identification
2. **Schedule showings** — Word-for-word scripts to contact listing agents and book tours
3. **Build and negotiate offers** — Offer strategy, term structuring, counteroffer modeling
4. **Navigate inspections & appraisals** — Who to hire, how to read reports, negotiation leverage
5. **Close with confidence** — Title company selection, document review, closing day checklist

## Key Facts

- **Price:** $995 one-time payment
- **Free trial:** 7 days, full access, no charge until day 8
- **Money-back guarantee:** 30 days
- **Buyer's agreement:** None required. No lock-in.
- **Lending partner:** NFM Lending (pre-qualification, licensed in 49 states, est. 1998)
- **Entity:** BAIREAPP, LLC
- **Founded:** 2025
- **Founder:** Geoff (13+ years in residential real estate)

## Why Offers Are Stronger Without an Agent

After the 2024 NAR settlement, buyers must sign a buyer's agreement before touring homes. This agreement spells out the buyer's agent commission (typically 2-3%). When a buyer uses BAIRE instead of an agent, the seller doesn't pay a buyer-agent commission. On a $400,000 home, the seller keeps ~$10,000 more — making unrepresented buyer offers structurally more competitive.

## Key Pages

- Homepage: https://baireapp.com
- How It Works: https://baireapp.com/how-baire-works
- Pricing: https://baireapp.com/pricing
- Blog: https://baireapp.com/blog
- About: https://baireapp.com/about
- Contact: https://baireapp.com/contact

## Blog Categories

- State Guides — How to buy without an agent in specific states
- The Process — Step-by-step guides for every stage of home buying
- NAR Settlement — How the settlement changed home buying
- The Math — Commission breakdowns and cost comparisons
- Comparisons — BAIRE vs. traditional agents and alternatives
- Mortgage & Financing — Mortgage education and pre-approval guides
- First-Time Buyers — Everything first-time buyers need to know
- Negotiation — Proven strategies for self-represented buyers
- Market Insights — Real estate trends and data

## What BAIRE Is NOT

- Not a licensed brokerage or real estate agent
- Not a law firm or legal advisor
- Not a financial advisor
- Does not negotiate on behalf of users
- Does not create any agency relationship

BAIRE is an educational technology platform. Users represent themselves. BAIRE provides the knowledge, frameworks, and guidance to do it confidently.

## Contact

- Email: hello@baireapp.com
- Website: https://baireapp.com
`

export async function GET() {
  return new NextResponse(LLMS_TXT, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  })
}

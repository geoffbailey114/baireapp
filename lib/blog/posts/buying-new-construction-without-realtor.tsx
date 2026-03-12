import React from 'react'
import Link from 'next/link'
import { BlogPost } from '../types'

export const post: BlogPost = {
  slug: 'buying-new-construction-without-realtor',
  title: 'Buying New Construction Without a Realtor',
  description: 'You don\'t need a buyer\'s agent to buy new construction — and the builder\'s sales rep isn\'t on your side. Here\'s how to negotiate directly and protect yourself.',
  publishedAt: '2026-03-08T00:00:00Z',
  updatedAt: '2026-03-08T00:00:00Z',
  author: {
    name: 'BAIRE',
    url: 'https://baireapp.com/about',
  },
  category: 'process',
  tags: ['new construction', 'buying without agent', 'builder negotiation', 'new build home', 'home buying process'],
  keywords: [
    'do you need a realtor for new construction',
    'buying new construction without a realtor',
    'new construction without buyer agent',
    'buy new build home without agent',
    'new construction home buying tips',
    'builder discount no agent',
    'new construction negotiation strategies',
  ],
  readingTime: 11,
  published: true,
  relatedSlugs: [
    'buy-home-without-realtor-complete-guide',
    'how-to-write-offer-without-agent',
    'offer-stronger-without-buyer-agent',
    'how-to-buy-without-agent-step-by-step',
  ],
  tldr: 'You do not need a buyer\'s agent to purchase new construction. The builder\'s sales representative works for the builder — not you — and the builder\'s contract is written by the builder\'s attorneys. What you need is your own comp analysis, an understanding of what\'s actually negotiable (closing cost credits, upgrades, rate buydowns — not base price), and an independent home inspection even on a brand-new home.',
  faqs: [
    {
      question: 'Do you need a realtor for new construction?',
      answer: 'No. Builders sell directly to buyers regularly, and many prefer it. The builder\'s sales representative handles the process on the builder\'s side. You represent yourself, review the builder\'s contract carefully, negotiate the terms you can negotiate, and hire a title company for closing — no buyer\'s agent required.',
    },
    {
      question: 'Will the builder give me a discount if I don\'t have an agent?',
      answer: 'Some builders offer closing cost credits or upgrade incentives to buyers who come without a buyer\'s agent, because the builder saves the buyer-agent commission (typically 2-3%) they would otherwise offer. This isn\'t universal — it depends on the builder and market conditions — but it\'s worth asking explicitly: "What incentives are available for unrepresented buyers?"',
    },
    {
      question: 'What is negotiable when buying new construction?',
      answer: 'Closing cost credits, upgrade packages (appliances, flooring, countertops), lot premiums, mortgage rate buydowns, and move-in timelines are typically negotiable. Base price is usually firm — especially in active communities where the builder is selling multiple units. Builders protect comps across the community and rarely cut the sticker price.',
    },
    {
      question: 'Should I get a home inspection on new construction?',
      answer: 'Yes, always. New construction has defects — sometimes significant ones. A pre-drywall inspection (before drywall is installed) catches structural, plumbing, and electrical issues that are invisible once the walls are closed. A final inspection before closing catches cosmetic and punch-list items. Hiring your own inspector — not one the builder recommends — is essential.',
    },
    {
      question: 'Is the builder\'s contract the same as a standard purchase agreement?',
      answer: 'No. Builder contracts are written by the builder\'s attorneys and heavily favor the builder. They typically limit your ability to cancel, restrict your inspection rights, and give the builder broad flexibility on timelines and specifications. Have a real estate attorney review the contract before you sign — this is one situation where that investment is clearly worth it.',
    },
    {
      question: 'What is a builder\'s warranty and what does it cover?',
      answer: 'Most new construction homes come with a 1-2-10 warranty: one year on workmanship and materials, two years on mechanical systems (HVAC, plumbing, electrical), and ten years on structural defects. Read the warranty carefully before closing — what\'s covered, what\'s excluded, and how to file a claim. Some builders use third-party warranty providers; others self-insure.',
    },
    {
      question: 'Should I use the builder\'s preferred lender?',
      answer: 'Not automatically. Builders often offer incentives — closing cost credits, rate buydowns — tied to using their preferred lender. Compare the incentive against what an independent lender offers on rate and fees. Sometimes the preferred lender deal is genuinely good. Sometimes the rate is higher and the "incentive" just covers the gap. Get a competing Loan Estimate before deciding.',
    },
  ],
  content: () => (
    <>
      <p>
        The first thing to understand about buying new construction is that the person sitting across the table from you in the sales office works for the builder. Not for you.
      </p>
      <p>
        They&rsquo;re friendly, helpful, knowledgeable about the community, and completely aligned with the builder&rsquo;s interests. That&rsquo;s not a criticism &mdash; it&rsquo;s just the job. The sales rep&rsquo;s goal is to get you into a contract at the best terms for the builder. Knowing that going in is most of the preparation you need.
      </p>
      <p>
        The other thing to understand: you don&rsquo;t need a buyer&rsquo;s agent to navigate this. What you need is to know what you can negotiate, what you can&rsquo;t, and where to get help that&rsquo;s actually on your side.
      </p>

      <h2>How New Construction Sales Actually Work</h2>
      <p>
        Unlike a resale home where a listing agent represents the seller and (sometimes) a buyer&rsquo;s agent represents you, new construction builders have their own dedicated sales teams. These reps are often employees of the builder or a builder-affiliated brokerage. They handle everything: showing the model homes, walking you through floor plans, presenting contracts, coordinating with the construction team.
      </p>
      <p>
        Historically, builders offered buyer-agent compensation through the MLS as a way to attract agents who would bring buyers to their communities. After the 2024 NAR settlement, that structure has changed. Some builders still offer buyer-agent compensation. Many have reduced or eliminated it.
      </p>
      <p>
        What hasn&rsquo;t changed: you can walk into any new construction sales office, tell them you&rsquo;re self-represented, and buy a home. Builders sell directly to buyers all the time. Many prefer it because there&rsquo;s no agent on the buy side adding friction to the process.
      </p>

      <h2>What&rsquo;s Actually Negotiable (And What Isn&rsquo;t)</h2>
      <p>
        The most common mistake buyers make with new construction is trying to negotiate on base price. Builders almost never move on this, and the reason is structural: every sale in a community sets a comp for every other home in that community. If a builder cuts $20,000 on lot 14, they&rsquo;ve just undermined the appraised value of lots 15 through 30. They know this. They protect it.
      </p>
      <p>
        That doesn&rsquo;t mean everything is fixed. Here&rsquo;s what builders will typically move on:
      </p>

      <div className="overflow-x-auto my-8">
        <table className="w-full text-sm border border-slate-200 rounded-lg overflow-hidden">
          <thead className="bg-slate-50">
            <tr>
              <th className="text-left px-4 py-3 font-semibold text-slate-700 border-b border-slate-200">Negotiable</th>
              <th className="text-left px-4 py-3 font-semibold text-slate-700 border-b border-slate-200">Usually not negotiable</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-3 border-b border-slate-100">Closing cost credits (often $5,000&ndash;$15,000)</td>
              <td className="px-4 py-3 border-b border-slate-100">Base price</td>
            </tr>
            <tr className="bg-slate-50/50">
              <td className="px-4 py-3 border-b border-slate-100">Upgrade packages (appliances, flooring, countertops)</td>
              <td className="px-4 py-3 border-b border-slate-100">Lot premiums (usually fixed by location)</td>
            </tr>
            <tr>
              <td className="px-4 py-3 border-b border-slate-100">Mortgage rate buydowns through preferred lender</td>
              <td className="px-4 py-3 border-b border-slate-100">Floor plan structural changes (after framing)</td>
            </tr>
            <tr className="bg-slate-50/50">
              <td className="px-4 py-3 border-b border-slate-100">Move-in timeline (within reason)</td>
              <td className="px-4 py-3 border-b border-slate-100">Community covenants and HOA terms</td>
            </tr>
            <tr>
              <td className="px-4 py-3">Unrepresented buyer incentive (ask directly)</td>
              <td className="px-4 py-3">Builder&rsquo;s contract terms (rarely negotiable, but review carefully)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        The unrepresented buyer incentive is worth asking about explicitly. The conversation is straightforward: &ldquo;I&rsquo;m not working with a buyer&rsquo;s agent. What incentives are available for buyers who come directly?&rdquo; Some builders have a structured answer. Others don&rsquo;t advertise it but will apply incentives when asked. The worst answer is no, and you&rsquo;ve lost nothing by asking.
      </p>

      <h2>The Builder&rsquo;s Contract Is Not the Standard Form</h2>
      <p>
        This is the single most important thing to understand about new construction paperwork. When you buy a resale home, you use your state&rsquo;s standard purchase agreement &mdash; a form developed by the state real estate commission, designed to be reasonably balanced between buyer and seller.
      </p>
      <p>
        Builder contracts are different. They&rsquo;re written by the builder&rsquo;s attorneys. They favor the builder. Common provisions to watch for:
      </p>
      <ul className="my-6 space-y-2 pl-6 list-disc text-slate-700">
        <li><strong>Limited cancellation rights.</strong> Many builder contracts give the builder broad rights to cancel (delays, material cost increases) while limiting yours. Understand exactly what circumstances allow you to exit with your deposit back.</li>
        <li><strong>Construction timeline flexibility.</strong> Builders often reserve the right to delay completion by 6-12 months without penalty. If you&rsquo;re selling your current home or have a lease ending, this matters enormously.</li>
        <li><strong>Specification changes.</strong> Builder contracts often allow substitution of materials or finishes &ldquo;of equal or greater value&rdquo; at the builder&rsquo;s discretion. What you saw in the model may not be exactly what gets installed.</li>
        <li><strong>Mandatory arbitration.</strong> Many builder contracts require disputes to go to arbitration rather than court. Understand what you&rsquo;re agreeing to before signing.</li>
        <li><strong>Earnest money terms.</strong> Builder deposits are often larger than resale earnest money and may be non-refundable under certain conditions. Read the forfeiture terms carefully.</li>
      </ul>
      <p>
        A real estate attorney reviewing the builder&rsquo;s contract before you sign is worth the $500-$1,000 fee on a purchase of this size. This is one of the situations where that consultation is clearly justified. Consult a real estate attorney for legal questions about your specific transaction.
      </p>

      <h2>The Preferred Lender Question</h2>
      <p>
        Most builders have a preferred lender &mdash; often a subsidiary or affiliated company &mdash; and they incentivize you to use them. The incentives can be real: closing cost credits, rate buydowns, streamlined processing.
      </p>
      <p>
        They can also be a way to recapture margin on the deal.
      </p>
      <p>
        Before you commit to the preferred lender, get a competing Loan Estimate from an independent lender. Compare the two side-by-side: interest rate, APR, origination fees, and monthly payment. If the preferred lender&rsquo;s incentive genuinely makes them the better deal after accounting for rate and fees, use them. If the incentive is $5,000 in closing credits but they&rsquo;re charging a 0.5% higher rate on a 30-year mortgage, the math may not work in your favor over time.
      </p>
      <p>
        NFM Lending, BAIRE&rsquo;s lending partner, is licensed in 49 states and can provide a competing Loan Estimate for comparison.
      </p>

      <h2>Get the Inspection. Seriously.</h2>
      <p>
        Buyers sometimes skip the home inspection on new construction. The reasoning: it&rsquo;s brand new, it just passed code inspections, what could go wrong?
      </p>
      <p>
        A lot, actually. Municipal code inspections are pass/fail checks for minimum standards &mdash; not a thorough quality review. New construction defects are common. Framing errors, improper HVAC installation, plumbing rough-in mistakes, missing insulation in wall cavities. These aren&rsquo;t hypotheticals; experienced home inspectors find them regularly.
      </p>
      <p>
        If the builder will allow it, schedule a <strong>pre-drywall inspection</strong> before the walls are closed. This is the single most valuable inspection moment in new construction &mdash; structural elements, plumbing, and electrical are fully visible and issues are inexpensive to fix before drywall goes in. After drywall, the same fixes cost ten times as much and require opening walls.
      </p>
      <p>
        Book a final inspection before closing as well. Walk the home with your inspector, confirm that punch-list items identified earlier were completed, and document anything that wasn&rsquo;t. Don&rsquo;t close on a new construction home with open punch-list items unless they&rsquo;re trivially minor and you have something in writing committing the builder to completing them.
      </p>

      <h2>The Builder&rsquo;s Warranty: What It Actually Covers</h2>
      <p>
        Most new construction homes in the U.S. come with a 1-2-10 warranty structure. One year on workmanship and materials (paint, trim, fixtures, finishes). Two years on mechanical systems &mdash; HVAC, plumbing, electrical. Ten years on structural defects.
      </p>
      <p>
        Read the actual warranty document, not just the summary the sales rep describes. What&rsquo;s excluded matters as much as what&rsquo;s covered. Common exclusions: normal wear and tear, cosmetic issues, damage from buyer modifications, problems caused by failure to maintain. Understand the claims process too &mdash; some warranties require written notice within specific timeframes, and missing those windows can void coverage.
      </p>
      <p>
        Some builders use third-party warranty companies (2-10 Home Buyers Warranty, for example). Others self-insure. If a builder self-insures, ask how they handle warranty claims in practice &mdash; their track record is worth knowing before you close.
      </p>

      <p>
        For the complete picture of buying without an agent from first search through closing, the <Link href="/blog/buy-home-without-realtor-complete-guide">full guide to buying without a realtor</Link> covers every scenario. If you&rsquo;re working through the offer process specifically, the <Link href="/blog/how-to-write-offer-without-agent">offer writing guide</Link> covers the standard purchase agreement fields &mdash; though with new construction you&rsquo;ll be working from the builder&rsquo;s contract instead.
      </p>

      <div className="bg-slate-50 border border-slate-200 rounded-lg px-6 py-6 my-8">
        <p className="font-semibold text-slate-900 mb-3">BAIRE analyzes new construction listings the same as resale.</p>
        <p className="text-slate-700 mb-4">
          Comp analysis, offer preparation guidance, and negotiation frameworks &mdash; for $995. No buyer&rsquo;s agreement. 7-day free trial.
        </p>
        <Link
          href="/signup"
          className="inline-block bg-[#2d3b2d] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#3a4d3a] transition-colors no-underline"
          style={{ color: 'white' }}
        >
          Start your free trial &rarr;
        </Link>
        <p className="text-sm text-slate-500 mt-4 mb-0">
          Consult a real estate attorney for legal questions about your specific transaction.
        </p>
      </div>

    </>
  ),
}

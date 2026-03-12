import React from 'react'
import Link from 'next/link'
import { BlogPost } from '../types'

export const post: BlogPost = {
  slug: 'how-much-does-buyers-agent-cost',
  title: 'How Much Does a Buyer\'s Agent Cost in 2026?',
  description: 'Buyer\'s agent commissions are now explicit in your signed agreement — typically 2-3% of the purchase price. Here\'s the full cost breakdown at every price point.',
  publishedAt: '2026-03-09T00:00:00Z',
  updatedAt: '2026-03-09T00:00:00Z',
  author: {
    name: 'BAIRE',
    url: 'https://baireapp.com/about',
  },
  category: 'savings',
  tags: ['buyer agent commission', 'real estate commission', 'home buying cost', 'buyer agent fee', 'nar settlement', 'commission rates'],
  keywords: [
    'how much does a buyer\'s agent cost',
    'buyers agent commission',
    'buyer agent fee',
    'how much do buyers agents charge',
    'average buyer agent commission',
    'flat fee buyers agent',
    'buyer agent commission 2026',
  ],
  readingTime: 9,
  published: true,
  relatedSlugs: [
    'buyer-agent-isnt-free',
    'true-cost-buyer-agent-30-year-mortgage',
    'offer-stronger-without-buyer-agent',
    'buy-home-without-realtor-complete-guide',
  ],
  tldr: 'A buyer\'s agent typically costs 2-3% of the purchase price — $8,000 to $12,000 on a $400,000 home. After the 2024 NAR settlement, this cost is now spelled out explicitly in the buyer\'s agreement you sign before seeing any homes. The seller may cover it, or you may owe it out of pocket. Buyers who skip the agent entirely pay $0 in buyer-agent commission — or $995 for BAIRE\'s full guidance platform.',
  faqs: [
    {
      question: 'How much does a buyer\'s agent cost?',
      answer: 'A buyer\'s agent typically charges 2-3% of the purchase price. On a $300,000 home that\'s $6,000-$9,000. On a $500,000 home, $10,000-$15,000. After the 2024 NAR settlement, this fee is now itemized explicitly in the buyer\'s agreement you sign before touring homes — it\'s no longer buried in the transaction.',
    },
    {
      question: 'Does the seller pay the buyer\'s agent commission?',
      answer: 'Sometimes. Sellers are no longer required to offer buyer-agent compensation after the 2024 NAR settlement. Some sellers still offer it to attract buyers with agents. Others don\'t. If the seller won\'t cover it and you\'ve signed a buyer\'s agreement committing to 2.5%, you owe the commission out of pocket at closing.',
    },
    {
      question: 'Can I negotiate buyer\'s agent commission?',
      answer: 'Yes. The commission rate in a buyer\'s agreement is negotiable before you sign. Agents may push back, but there\'s no legally fixed rate. Some agents will work at 1.5-2% on higher-priced homes. Some offer flat fees. The key is to negotiate the rate before you sign — not after you\'ve already toured homes and emotionally committed to buying one.',
    },
    {
      question: 'What is the average buyer agent commission in 2026?',
      answer: 'The national average buyer-agent commission post-settlement is approximately 2.5%, though it varies by market. Some higher-cost metros have seen commissions trend lower as buyer awareness increases. Some lower-cost markets remain near 3%. The settlement didn\'t cap rates — it just made them visible.',
    },
    {
      question: 'What does a flat fee buyer\'s agent charge?',
      answer: 'Flat-fee buyer\'s agents typically charge $2,000-$5,000 depending on the market and scope of services. This is less than the percentage model on most home prices, but still significantly more than representing yourself. BAIRE charges $995 as an educational platform — not as a licensed agent, but providing the comp analysis, offer guidance, and closing support most buyers actually need.',
    },
    {
      question: 'How much does a buyer\'s agent cost if financed over 30 years?',
      answer: 'A $10,000 buyer-agent commission financed into a mortgage at 6.5% over 30 years costs approximately $22,700 in total payments. The upfront fee is only part of the real cost. Rolling it into your loan means paying interest on it for three decades.',
    },
  ],
  content: () => (
    <>
      <p>
        Before August 2024, most buyers had no idea what their agent cost. The commission was embedded in the seller&rsquo;s proceeds and never appeared as a line item on the buyer&rsquo;s side of the transaction. It felt free. It wasn&rsquo;t.
      </p>
      <p>
        The NAR settlement changed that. Now, before an agent can show you a single home, you sign a buyer&rsquo;s agreement that states &mdash; explicitly, in plain numbers &mdash; what you agree to pay. The cost that was always there is now visible.
      </p>
      <p>
        Here&rsquo;s what it actually is.
      </p>

      <h2>The Standard Rate: 2&ndash;3% of Purchase Price</h2>
      <p>
        The national average buyer-agent commission runs roughly 2.5% of the purchase price. Some agents charge 3%. Some will negotiate to 2% or lower on higher-priced homes where the dollar amount is significant. There&rsquo;s no legally fixed rate &mdash; but 2.5% is the number most buyers encounter first.
      </p>
      <p>
        Here&rsquo;s what that looks like across common price points:
      </p>

      <div className="overflow-x-auto my-8">
        <table className="w-full text-sm border border-slate-200 rounded-lg overflow-hidden">
          <thead className="bg-slate-50">
            <tr>
              <th className="text-left px-4 py-3 font-semibold text-slate-700 border-b border-slate-200">Home price</th>
              <th className="text-left px-4 py-3 font-semibold text-slate-700 border-b border-slate-200">At 2%</th>
              <th className="text-left px-4 py-3 font-semibold text-slate-700 border-b border-slate-200">At 2.5%</th>
              <th className="text-left px-4 py-3 font-semibold text-slate-700 border-b border-slate-200">At 3%</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-3 border-b border-slate-100 font-medium">$250,000</td>
              <td className="px-4 py-3 border-b border-slate-100">$5,000</td>
              <td className="px-4 py-3 border-b border-slate-100">$6,250</td>
              <td className="px-4 py-3 border-b border-slate-100">$7,500</td>
            </tr>
            <tr className="bg-slate-50/50">
              <td className="px-4 py-3 border-b border-slate-100 font-medium">$350,000</td>
              <td className="px-4 py-3 border-b border-slate-100">$7,000</td>
              <td className="px-4 py-3 border-b border-slate-100">$8,750</td>
              <td className="px-4 py-3 border-b border-slate-100">$10,500</td>
            </tr>
            <tr>
              <td className="px-4 py-3 border-b border-slate-100 font-medium">$400,000</td>
              <td className="px-4 py-3 border-b border-slate-100">$8,000</td>
              <td className="px-4 py-3 border-b border-slate-100">$10,000</td>
              <td className="px-4 py-3 border-b border-slate-100">$12,000</td>
            </tr>
            <tr className="bg-slate-50/50">
              <td className="px-4 py-3 border-b border-slate-100 font-medium">$500,000</td>
              <td className="px-4 py-3 border-b border-slate-100">$10,000</td>
              <td className="px-4 py-3 border-b border-slate-100">$12,500</td>
              <td className="px-4 py-3 border-b border-slate-100">$15,000</td>
            </tr>
            <tr>
              <td className="px-4 py-3 border-b border-slate-100 font-medium">$650,000</td>
              <td className="px-4 py-3 border-b border-slate-100">$13,000</td>
              <td className="px-4 py-3 border-b border-slate-100">$16,250</td>
              <td className="px-4 py-3 border-b border-slate-100">$19,500</td>
            </tr>
            <tr className="bg-slate-50/50">
              <td className="px-4 py-3 font-medium">$800,000</td>
              <td className="px-4 py-3">$16,000</td>
              <td className="px-4 py-3">$20,000</td>
              <td className="px-4 py-3">$24,000</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        These are the numbers that now appear in the buyer&rsquo;s agreement. Before the settlement, they were invisible to buyers. They were always real &mdash; priced into the seller&rsquo;s asking price, financed through your mortgage, paid at closing. The settlement just made them impossible to miss.
      </p>

      <h2>Who Actually Pays It Now</h2>
      <p>
        Before the settlement, sellers routinely offered buyer-agent compensation through the MLS, and buyers never thought about it. That automatic offer is gone. What happens now:
      </p>
      <p>
        <strong>Seller covers it.</strong> Some sellers still offer buyer-agent compensation &mdash; advertised in their listing terms or negotiated into the deal &mdash; to attract the widest pool of buyers. In this scenario, the buyer&rsquo;s agent gets paid from seller proceeds, and the buyer doesn&rsquo;t pay out of pocket. This is still common, particularly in markets with strong agent representation.
      </p>
      <p>
        <strong>Buyer pays out of pocket.</strong> If the seller doesn&rsquo;t cover it and you&rsquo;ve signed a buyer&rsquo;s agreement at 2.5%, you owe $10,000 at closing on a $400,000 home. In cash. On top of your down payment and closing costs. This is the scenario buyers are increasingly confronting.
      </p>
      <p>
        <strong>Negotiated split.</strong> Buyer and seller negotiate who covers what during the offer process. The buyer might ask the seller to contribute $5,000 toward buyer-agent commission as part of the offer terms. Sellers in competitive markets often won&rsquo;t agree. Sellers in slower markets sometimes will.
      </p>

      <h2>The 30-Year Multiplier</h2>
      <p>
        The number you see in the buyer&rsquo;s agreement is the upfront figure. But most buyers don&rsquo;t pay it in cash &mdash; it gets absorbed into the purchase price and financed through the mortgage.
      </p>
      <p>
        When you finance $10,000 at 6.5% over 30 years, the total cost isn&rsquo;t $10,000. It&rsquo;s closer to $22,700 in total payments over the life of the loan. That&rsquo;s not a fee anymore &mdash; it&rsquo;s a multi-decade cost.
      </p>
      <p>
        The full breakdown of that math is in our post on the <Link href="/blog/true-cost-buyer-agent-30-year-mortgage">true cost of a buyer&rsquo;s agent over 30 years</Link>. The numbers are worth understanding before you sign anything.
      </p>

      <h2>What You Actually Get for the Commission</h2>
      <p>
        To be precise about this: buyer&rsquo;s agents provide real services. The question isn&rsquo;t whether they do anything &mdash; it&rsquo;s whether what they do is worth $10,000 to $20,000 on a typical transaction.
      </p>
      <p>
        The core services a buyer&rsquo;s agent provides: access to listings (the same data available on Zillow and Redfin), scheduling showings, pulling comparable sales, writing and submitting offers, communicating with the listing agent, coordinating with the lender and title company, and being present at closing.
      </p>
      <p>
        These are valuable services. They&rsquo;re also not exclusively available through a commissioned agent. The comparable sales data is public. The purchase agreement form is free from your state&rsquo;s real estate commission. The title company handles coordination. The lender handles financing. And BAIRE provides the analysis and guidance framework for $995 &mdash; no buyer&rsquo;s agreement, no commission, no lock-in.
      </p>
      <p>
        If you&rsquo;re thinking through whether you need an agent at all, <Link href="/blog/do-you-need-a-buyers-agent">Do You Need a Buyer&rsquo;s Agent?</Link> works through the decision honestly, including the scenarios where having one still makes sense.
      </p>

      <h2>The Flat-Fee Alternative</h2>
      <p>
        Some agents offer flat-fee buyer representation &mdash; a fixed dollar amount instead of a percentage. Typical range: $2,000&ndash;$5,000 depending on the market and the scope of services. This is less than the percentage model on most home prices, though the specific services offered vary widely.
      </p>
      <p>
        At $995, BAIRE isn&rsquo;t a flat-fee agent &mdash; it&rsquo;s not an agent at all. BAIRE is an educational technology platform that provides comp analysis, offer preparation guidance, negotiation frameworks, and closing support. No license. No fiduciary duty. No buyer&rsquo;s agreement. The tradeoff is clear: you&rsquo;re not getting someone who can physically attend showings or sign documents on your behalf. What you&rsquo;re getting is the information and frameworks to work through the process yourself, at a fraction of the cost.
      </p>

      <div className="overflow-x-auto my-8">
        <table className="w-full text-sm border border-slate-200 rounded-lg overflow-hidden">
          <thead className="bg-slate-50">
            <tr>
              <th className="text-left px-4 py-3 font-semibold text-slate-700 border-b border-slate-200">&nbsp;</th>
              <th className="text-left px-4 py-3 font-semibold text-slate-700 border-b border-slate-200">Traditional agent</th>
              <th className="text-left px-4 py-3 font-semibold text-slate-700 border-b border-slate-200">Flat-fee agent</th>
              <th className="text-left px-4 py-3 font-semibold text-slate-700 border-b border-slate-200">BAIRE</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-3 border-b border-slate-100 font-medium">Cost ($400K home)</td>
              <td className="px-4 py-3 border-b border-slate-100">$10,000+</td>
              <td className="px-4 py-3 border-b border-slate-100">$2,000&ndash;$5,000</td>
              <td className="px-4 py-3 border-b border-slate-100 font-semibold text-[#2d3b2d]">$995</td>
            </tr>
            <tr className="bg-slate-50/50">
              <td className="px-4 py-3 border-b border-slate-100 font-medium">Buyer&rsquo;s agreement required</td>
              <td className="px-4 py-3 border-b border-slate-100">Yes</td>
              <td className="px-4 py-3 border-b border-slate-100">Usually yes</td>
              <td className="px-4 py-3 border-b border-slate-100 font-semibold text-[#2d3b2d]">No</td>
            </tr>
            <tr>
              <td className="px-4 py-3 border-b border-slate-100 font-medium">Commission on your offer</td>
              <td className="px-4 py-3 border-b border-slate-100">Yes</td>
              <td className="px-4 py-3 border-b border-slate-100">Yes</td>
              <td className="px-4 py-3 border-b border-slate-100 font-semibold text-[#2d3b2d]">No</td>
            </tr>
            <tr className="bg-slate-50/50">
              <td className="px-4 py-3 border-b border-slate-100 font-medium">Comp analysis</td>
              <td className="px-4 py-3 border-b border-slate-100">Yes</td>
              <td className="px-4 py-3 border-b border-slate-100">Yes</td>
              <td className="px-4 py-3 border-b border-slate-100">Yes</td>
            </tr>
            <tr>
              <td className="px-4 py-3 border-b border-slate-100 font-medium">Offer preparation</td>
              <td className="px-4 py-3 border-b border-slate-100">Yes</td>
              <td className="px-4 py-3 border-b border-slate-100">Yes</td>
              <td className="px-4 py-3 border-b border-slate-100">Yes (guidance)</td>
            </tr>
            <tr className="bg-slate-50/50">
              <td className="px-4 py-3 font-medium">Physical presence at showings</td>
              <td className="px-4 py-3">Yes</td>
              <td className="px-4 py-3">Sometimes</td>
              <td className="px-4 py-3">No</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-slate-50 border border-slate-200 rounded-lg px-6 py-6 my-8">
        <p className="font-semibold text-slate-900 mb-3">$995 vs. $10,000+. No buyer&rsquo;s agreement. Stronger offer.</p>
        <p className="text-slate-700 mb-4">
          7-day free trial. 30-day money-back guarantee.
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

import React from 'react'
import Link from 'next/link'
import { BlogPost } from '../types'

export const post: BlogPost = {
  slug: 'buy-fsbo-home-without-agent',
  title: 'How to Buy a House From Owner Without a Realtor',
  description: 'Buying a for-sale-by-owner home without a buyer\'s agent is one of the best deals in real estate — if you know what to watch for. Here\'s how to do it right.',
  publishedAt: '2026-03-07T00:00:00Z',
  updatedAt: '2026-03-07T00:00:00Z',
  author: {
    name: 'BAIRE',
    url: 'https://baireapp.com/about',
  },
  category: 'process',
  tags: ['fsbo', 'for sale by owner', 'buying without agent', 'unrepresented buyer', 'home buying process', 'direct purchase'],
  keywords: [
    'how to buy a house from owner without realtor',
    'how to buy house from owner without real estate agent',
    'buying fsbo home without agent',
    'for sale by owner buyer no agent',
    'buy fsbo without realtor',
    'purchasing home directly from owner',
    'how to buy for sale by owner home',
  ],
  readingTime: 10,
  published: true,
  relatedSlugs: [
    'buy-home-without-realtor-complete-guide',
    'how-to-write-offer-without-agent',
    'paperwork-buying-house-without-realtor',
    'offer-stronger-without-buyer-agent',
  ],
  tldr: 'Buying a for-sale-by-owner (FSBO) home without a buyer\'s agent is legal, increasingly common, and can result in significant savings for both parties. The key steps: find the listing, verify the price against comparable sales, negotiate directly with the owner, and hire a title company or real estate attorney to handle the closing. Watch for overpriced listings and incomplete seller disclosures — those are the two most common FSBO pitfalls.',
  faqs: [
    {
      question: 'How do I buy a house directly from the owner without a realtor?',
      answer: 'Find the FSBO listing through Zillow, FSBO.com, Facebook Marketplace, or yard signs. Pull comparable sales to verify the asking price. Contact the owner directly, tour the home, and negotiate price and terms. Use your state\'s standard purchase agreement form to formalize the offer. Hire a title company or real estate attorney to run the title search and handle closing.',
    },
    {
      question: 'What is a FSBO home?',
      answer: 'FSBO stands for For Sale By Owner. It means the seller is selling their home without a listing agent, handling the process themselves to avoid paying a listing commission (typically 2.5-3%). FSBO homes make up roughly 7-10% of home sales annually and appear on Zillow, FSBO.com, and Facebook Marketplace, among other places.',
    },
    {
      question: 'Do I need an agent to buy a FSBO home?',
      answer: 'No. You can buy a FSBO home without any agent on either side of the transaction. Both you and the seller are unrepresented. You\'ll negotiate directly with the owner, use a standard purchase agreement form, and close through a title company or real estate attorney who handles the paperwork and title transfer.',
    },
    {
      question: 'Why are FSBO homes sometimes overpriced?',
      answer: 'FSBO sellers typically don\'t have access to professional comp analysis or MLS data the way listing agents do. Many price their home based on their Zillow estimate or what their neighbor got — not rigorous comparable sales analysis. This means some FSBO homes are priced significantly above market. Always pull your own comps before making an offer.',
    },
    {
      question: 'Who handles the closing paperwork in a FSBO transaction?',
      answer: 'A title company or real estate attorney handles closing in a FSBO transaction. They run the title search, prepare the deed, coordinate the exchange of funds, and record the transfer of ownership. This is non-negotiable — you should never close a real estate transaction without a title company or attorney involved, regardless of whether there are agents.',
    },
    {
      question: 'Can I negotiate with a FSBO seller without an agent?',
      answer: 'Yes — and in some ways, it\'s easier. Without agents on either side, communication is direct. You\'re talking to the actual decision-maker, not relaying messages through intermediaries. The owner knows their property, their timeline, and their priorities better than any agent would. Good preparation — knowing your comps, your walkaway number, and the home\'s condition — is your negotiating edge.',
    },
    {
      question: 'What should I watch out for when buying a FSBO home?',
      answer: 'Four things: (1) Overpriced listings — verify with your own comp analysis before offering. (2) Incomplete seller disclosures — some FSBO sellers don\'t know what they\'re legally required to disclose. (3) Unpermitted additions — work done without permits creates title and financing issues. (4) Unclear title — always do a title search, even if the seller assures you the title is clean.',
    },
  ],
  content: () => (
    <>
      <p>
        The cleanest real estate deal I ever saw close was a FSBO with two unrepresented parties. No listing agent. No buyer&rsquo;s agent. The sellers knew their neighbors, priced the home fairly based on what sold on the street last year, and put a handmade sign in the yard on a Saturday morning.
      </p>
      <p>
        The buyers drove by that afternoon. They called the number on the sign. Three weeks later, they owned the house.
      </p>
      <p>
        Total commissions paid: zero. Title company fee for closing: $1,200. Both sides left the table happy.
      </p>
      <p>
        That&rsquo;s the FSBO deal at its best. Here&rsquo;s how to get there &mdash; and what to watch for when it goes sideways.
      </p>

      <h2>Where FSBO Homes Actually Are</h2>
      <p>
        FSBO listings don&rsquo;t live exclusively on Zillow&rsquo;s &ldquo;For Sale By Owner&rdquo; filter &mdash; though that&rsquo;s the biggest source. Here&rsquo;s where to look:
      </p>
      <ul className="my-6 space-y-2 pl-6 list-disc text-slate-700">
        <li><strong>Zillow:</strong> Under the search filters, select &ldquo;For Sale By Owner.&rdquo; Not all FSBO sellers list here, but the serious ones usually do because the exposure is hard to match.</li>
        <li><strong>FSBO.com:</strong> A dedicated FSBO platform. Smaller inventory than Zillow but specifically sellers who opted out of working with agents.</li>
        <li><strong>Facebook Marketplace:</strong> Increasingly common, especially for sellers who want to target local buyers directly. Search your target neighborhood.</li>
        <li><strong>Craigslist:</strong> Less common than it used to be, still worth a check in some markets.</li>
        <li><strong>Yard signs:</strong> Old-fashioned but real. If you&rsquo;re actively driving target neighborhoods, FSBO signs are hard to miss.</li>
        <li><strong>Word of mouth:</strong> Tell people in your target area that you&rsquo;re looking. Sellers who are thinking about listing sometimes prefer to avoid the whole process if a buyer appears first.</li>
      </ul>
      <p>
        FSBO homes make up roughly 7-10% of home sales annually. In some markets and price ranges, the percentage is higher. It&rsquo;s a real segment &mdash; not a fringe option.
      </p>

      <h2>The Pricing Problem (And How to Solve It)</h2>
      <p>
        Here&rsquo;s the most common FSBO pitfall: the home is overpriced. Not always by a lot. Sometimes by 5-10%, which on a $400,000 home is $20,000-$40,000. It sounds dramatic, but it&rsquo;s genuinely common.
      </p>
      <p>
        The reason is structural. FSBO sellers typically don&rsquo;t have access to the same MLS-based comp analysis that listing agents use. They price based on their Zillow estimate, what their neighbor got, or what they paid plus what they&rsquo;ve put into it. None of those methods is reliable.
      </p>
      <p>
        Your job as a buyer is to know the number before you talk price. Pull comparable sales: closed transactions for similar homes &mdash; similar square footage, similar condition, similar updates &mdash; in the same neighborhood within the last 90 days. Look at price per square foot. Look at days on market. Look at how much homes are selling for versus asking price.
      </p>
      <p>
        Once you have that data, you can have a real conversation with the seller about price. &ldquo;The comps in this neighborhood over the last 90 days show homes like this selling at $X per square foot. Based on your home&rsquo;s square footage and condition, that puts the fair market value at $Y.&rdquo; That&rsquo;s a fact-based conversation, not a negotiating tactic. Some sellers will push back. Others &mdash; especially those who&rsquo;ve been sitting on the market &mdash; will be relieved someone showed up with data.
      </p>

      <h2>Making First Contact</h2>
      <p>
        Call or text. Email is fine but slower. FSBO sellers are usually handling this themselves while working full-time jobs and living their lives &mdash; they appreciate direct communication.
      </p>
      <blockquote className="border-l-4 border-slate-300 bg-slate-50 pl-5 pr-4 py-4 my-6 rounded-r-lg">
        <p className="text-slate-700 italic mb-0">
          &ldquo;Hi, I saw your home at [address]. I&rsquo;m a pre-approved buyer and I&rsquo;m interested in scheduling a showing. I&rsquo;m representing myself &mdash; no agent on my side. When would be a good time to take a look?&rdquo;
        </p>
      </blockquote>
      <p>
        Mentioning upfront that you&rsquo;re self-represented matters. FSBO sellers who listed without an agent specifically to avoid commission are usually happy to deal with an unrepresented buyer. It signals the deal will be cleaner.
      </p>
      <p>
        At the showing, pay attention to condition. The <Link href="/blog/first-time-buyer-roadmap-pre-approval-to-closing">standard home viewing checklist</Link> applies here. With FSBO properties in particular, look carefully at any additions, renovations, or outbuildings. Ask: &ldquo;Was this permitted?&rdquo; Unpermitted work is more common with FSBO homes because there&rsquo;s no listing agent to flag it proactively.
      </p>

      <h2>The Negotiation Dynamic</h2>
      <p>
        Negotiating with a FSBO seller is different from negotiating through agents. There are no intermediaries. You&rsquo;re talking directly to the person who owns the home, has emotional attachment to it, and makes all the decisions.
      </p>
      <p>
        A few things that matter more in direct negotiations:
      </p>
      <p>
        <strong>They know their real timeline.</strong> Ask early. Are they moving because of a job relocation with a hard deadline? Have they already bought? Are they flexible on timing? A seller who needs to close in three weeks and a seller with nowhere to go yet are in entirely different negotiating positions. The first will often take less. The second can afford to wait.
      </p>
      <p>
        <strong>They know the home&rsquo;s history.</strong> Ask what they&rsquo;ve replaced in the last five years, what&rsquo;s been repaired, what they&rsquo;ve noticed about the property. FSBO sellers are often more forthcoming about history than sellers represented by agents, because there&rsquo;s no agent coaching them on what to say.
      </p>
      <p>
        <strong>The commission math is on the table.</strong> The seller chose to list without an agent to save the listing commission. They already understand that not having agents involved saves money for both sides. If your comps support a lower price, you can frame it simply: &ldquo;You&rsquo;re already saving the listing commission. We&rsquo;re both saving on the buyer&rsquo;s side. Let&rsquo;s price this based on what the market actually shows.&rdquo;
      </p>

      <h2>The Paperwork in a FSBO Deal</h2>
      <p>
        Here&rsquo;s how the paperwork flow works when neither party has an agent.
      </p>
      <p>
        <strong>You provide:</strong> The state purchase agreement form. Yes, as the buyer, you&rsquo;ll typically draft the offer. Download your state&rsquo;s standard residential purchase contract, fill it out with your terms, and present it to the seller. For a complete guide on every field, see our post on <Link href="/blog/how-to-write-offer-without-agent">how to write a home offer without an agent</Link>.
      </p>
      <p>
        <strong>The seller provides:</strong> Required seller disclosures. Every state mandates certain disclosures &mdash; known defects, lead paint (pre-1978 homes), HOA information, and so on. Some FSBO sellers aren&rsquo;t aware of everything they&rsquo;re legally required to disclose. Ask explicitly: &ldquo;Can you provide all required seller disclosures for this property?&rdquo; If they don&rsquo;t know what that means, point them to your state&rsquo;s real estate commission website.
      </p>
      <p>
        <strong>The title company handles:</strong> Everything else. Title search, deed preparation, closing coordination, fund disbursement, and recording. Hire one. This is non-negotiable in any real estate transaction, FSBO or not.
      </p>

      <h2>Why a Title Company Is Non-Negotiable Here</h2>
      <p>
        With a traditional listed home, the title company is already in the picture &mdash; the listing agent has usually worked with several and will recommend one. With a FSBO, you may need to find one yourself.
      </p>
      <p>
        The title company does something essential: it confirms that the seller actually owns the property free and clear, with no liens, unpaid taxes, or ownership disputes that would follow the deed to you. A title search can uncover contractor liens from unpaid renovation work, IRS tax liens, divorce-related title clouds, or errors in previous recordings. Any of these can kill a deal or &mdash; worse &mdash; become your problem after closing.
      </p>
      <p>
        Find a title company in your area, tell them you&rsquo;re working on a FSBO purchase with no agents involved, and ask what they need from you to open escrow. They&rsquo;ve done this before. Most are comfortable with FSBO transactions.
      </p>

      <h2>The Complete FSBO Checklist</h2>

      <div className="overflow-x-auto my-8">
        <table className="w-full text-sm border border-slate-200 rounded-lg overflow-hidden">
          <thead className="bg-slate-50">
            <tr>
              <th className="text-left px-4 py-3 font-semibold text-slate-700 border-b border-slate-200">Phase</th>
              <th className="text-left px-4 py-3 font-semibold text-slate-700 border-b border-slate-200">What to do</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-3 border-b border-slate-100 font-medium align-top">Before you contact the seller</td>
              <td className="px-4 py-3 border-b border-slate-100">Get pre-approved. Pull comps. Know your price range and your walkaway number.</td>
            </tr>
            <tr className="bg-slate-50/50">
              <td className="px-4 py-3 border-b border-slate-100 font-medium align-top">First contact</td>
              <td className="px-4 py-3 border-b border-slate-100">Identify yourself as self-represented. Schedule a showing. Ask about timeline and motivation.</td>
            </tr>
            <tr>
              <td className="px-4 py-3 border-b border-slate-100 font-medium align-top">At the showing</td>
              <td className="px-4 py-3 border-b border-slate-100">Inspect condition carefully. Ask about permits on any additions. Ask about recent repairs and what they know about the property.</td>
            </tr>
            <tr className="bg-slate-50/50">
              <td className="px-4 py-3 border-b border-slate-100 font-medium align-top">Making the offer</td>
              <td className="px-4 py-3 border-b border-slate-100">Use your state&rsquo;s standard purchase agreement. Present with pre-approval letter. Include standard contingencies.</td>
            </tr>
            <tr>
              <td className="px-4 py-3 border-b border-slate-100 font-medium align-top">Under contract</td>
              <td className="px-4 py-3 border-b border-slate-100">Open escrow with a title company. Request all seller disclosures. Schedule home inspection. Order homeowner&rsquo;s insurance.</td>
            </tr>
            <tr className="bg-slate-50/50">
              <td className="px-4 py-3 font-medium align-top">Closing</td>
              <td className="px-4 py-3">Review closing disclosure. Do final walkthrough. Bring cashier&rsquo;s check or wire funds. Sign at the title company.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        For the full document list across every phase, the <Link href="/blog/paperwork-buying-house-without-realtor">paperwork checklist for buying without a realtor</Link> covers it. And for the complete process from first search to closing, the <Link href="/blog/buy-home-without-realtor-complete-guide">guide to buying without a realtor</Link> is the place to start.
      </p>
      <p>
        BAIRE provides comp analysis, offer preparation guidance, and negotiation frameworks for FSBO purchases the same as it does for listed homes. Paste the listing link &mdash; whether it&rsquo;s from Zillow FSBO, FSBO.com, or a photo you took of a yard sign &mdash; and BAIRE analyzes comparable sales so you know what the home is actually worth before you sit down to negotiate.
      </p>

      <div className="bg-slate-50 border border-slate-200 rounded-lg px-6 py-6 my-8">
        <p className="font-semibold text-slate-900 mb-3">Know what the FSBO home is worth before you offer.</p>
        <p className="text-slate-700 mb-4">
          BAIRE analyzes comps, flags red flags, and walks you through the offer process &mdash; for $995. No buyer&rsquo;s agreement. 7-day free trial.
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

      <h2>Frequently Asked Questions</h2>

      <h3>How do I buy a house directly from the owner without a realtor?</h3>
      <p>
        Find the FSBO listing on Zillow, FSBO.com, or Facebook Marketplace. Pull comparable sales to verify the price. Contact the owner, tour the home, and negotiate directly. Use your state&rsquo;s standard purchase agreement to submit your offer. Hire a title company to handle the closing &mdash; they run the title search, prepare the deed, and coordinate the exchange of funds.
      </p>

      <h3>Is it safe to buy a FSBO home without an agent?</h3>
      <p>
        Yes, if you take the right steps. The two biggest protections: (1) a home inspection by a licensed inspector you hired &mdash; not one the seller suggested &mdash; and (2) a title company running a thorough title search before closing. Those two steps catch the problems that catch buyers off guard.
      </p>

      <h3>Can I negotiate the price on a FSBO home?</h3>
      <p>
        Yes &mdash; and often more effectively than through agents, because you&rsquo;re talking directly to the decision-maker. Base your negotiation on comparable sales data, not what feels right. FSBO homes are often overpriced because sellers lack access to professional comp analysis. Showing up with data &mdash; recent closed sales, price per square foot, days on market in the neighborhood &mdash; is your strongest negotiating position.
      </p>

      <h3>Who handles the closing paperwork in a FSBO deal?</h3>
      <p>
        A title company or real estate attorney. They handle the title search, deed preparation, escrow, and recording of the transfer. This is non-negotiable. Never close a real estate transaction without a title company or attorney involved, regardless of whether agents are present.
      </p>

      <h3>Do FSBO sellers have to disclose defects?</h3>
      <p>
        Yes. Every state has seller disclosure requirements &mdash; known defects, lead paint on pre-1978 homes, water damage history, and others depending on the state. FSBO sellers are subject to the same disclosure laws as sellers represented by agents. Ask the seller explicitly for all required disclosures and verify they&rsquo;ve provided them completely. If they&rsquo;re unsure what&rsquo;s required, point them to your state&rsquo;s real estate commission website.
      </p>

      <h3>What are the biggest risks when buying a FSBO home?</h3>
      <p>
        Four main risks: overpriced listing (solve with your own comp analysis), incomplete seller disclosures (ask explicitly, verify), unpermitted improvements (ask about any additions or renovations, check with the county if needed), and title issues (run a title search through a title company before you close, without exception).
      </p>
    </>
  ),
}

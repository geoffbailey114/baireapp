import React from 'react'
import Link from 'next/link'
import { BlogPost } from '../types'

export const post: BlogPost = {
  slug: 'how-to-write-offer-without-agent',
  title: 'How to Write a Home Offer Without a Realtor',
  description: 'Step-by-step guide to writing and submitting a purchase offer without a buyer\'s agent — where to get the forms, how to fill them out, and what happens next.',
  publishedAt: '2026-03-05T00:00:00Z',
  updatedAt: '2026-03-05T00:00:00Z',
  author: {
    name: 'BAIRE',
    url: 'https://baireapp.com/about',
  },
  category: 'process',
  tags: ['home offer', 'purchase agreement', 'buying without agent', 'offer process', 'unrepresented buyer', 'how to buy a house'],
  keywords: [
    'how to make offer on house without realtor',
    'how to write purchase offer without agent',
    'how to make offer on house without real estate agent',
    'purchase agreement without agent',
    'how to submit offer on house',
    'what to include in home offer',
    'writing offer without realtor',
  ],
  readingTime: 10,
  published: true,
  relatedSlugs: [
    'buy-home-without-realtor-complete-guide',
    'buyers-agreement-explained',
    'paperwork-buying-house-without-realtor',
    'how-to-buy-without-agent-step-by-step',
  ],
  tldr: 'Writing a purchase offer without an agent means filling out your state\'s standard purchase agreement form — the same document agents use — and submitting it to the listing agent via email with a pre-approval letter attached. The form is free from your state\'s real estate commission website. The process is more accessible than most buyers expect, and because there\'s no buyer-agent commission attached, your offer is structurally stronger for the seller.',
  faqs: [
    {
      question: 'How do I make an offer on a house without a realtor?',
      answer: 'Download your state\'s standard purchase agreement form from the state real estate commission website — it\'s free and the same form agents use. Fill in the purchase price, earnest money amount, proposed closing date, and contingencies. Attach your pre-approval letter and submit to the listing agent by email. You don\'t need an agent to do any of this.',
    },
    {
      question: 'Where do I get the purchase agreement form?',
      answer: 'Your state\'s real estate commission publishes standard purchase agreement forms for free. Search "[your state] real estate commission purchase agreement" — you\'ll find it within two clicks. In Texas, it\'s called the TREC One to Four Family Residential Contract. In Arizona, it\'s the AAR Residential Resale Real Estate Purchase Contract. Every state has one.',
    },
    {
      question: 'What should I put for buyer\'s agent commission on the offer?',
      answer: 'If you\'re representing yourself, enter $0 or N/A in any buyer-agent commission field. There is no buyer\'s agent to compensate. This is one of the structural advantages of buying without an agent — the seller nets more on the same purchase price because there\'s no buyer-agent commission in the transaction.',
    },
    {
      question: 'How much earnest money should I offer?',
      answer: 'The standard range is 1-3% of the purchase price. On a $400,000 home, that\'s $4,000 to $12,000. In competitive markets, offering closer to 2-3% signals seriousness. In slower markets, 1% is often sufficient. Earnest money is applied toward your down payment or closing costs at closing — it\'s not an extra fee, it\'s a deposit.',
    },
    {
      question: 'What contingencies should I include in my offer?',
      answer: 'Three contingencies protect most buyers: an inspection contingency (right to negotiate or walk away based on inspection findings), a financing contingency (protection if your loan falls through), and an appraisal contingency (protection if the home appraises below your offer price). Waiving contingencies can make your offer more competitive, but each one you waive represents real financial risk.',
    },
    {
      question: 'How do I submit an offer without an agent?',
      answer: 'Email the completed purchase agreement directly to the listing agent, along with your pre-approval letter and proof of earnest money funds. The listing agent\'s contact information is on every listing. Include a brief cover note identifying yourself as a self-represented buyer. The listing agent handles presenting your offer to the seller.',
    },
    {
      question: 'What happens after I submit an offer?',
      answer: 'The listing agent presents your offer to the seller. You\'ll typically hear back within 24-72 hours with one of three responses: acceptance, rejection, or a counteroffer. If you receive a counter, you can accept, reject, or counter back. Most deals involve at least one round of negotiation before both parties agree on terms.',
    },
    {
      question: 'Can I write a letter with my offer?',
      answer: 'You can, but be careful. Some states have restricted or banned personal letters with offers because they can introduce fair housing violations — sellers shouldn\'t be making decisions based on who the buyer is. California, for example, requires agents to present offers blind. Check whether your state has any restrictions before including a personal letter.',
    },
  ],
  content: () => (
    <>
      <p>
        The purchase offer is the moment most buyers picture when they imagine needing an agent. You&rsquo;ve found the house. Now what? There&rsquo;s paperwork, legal language, contingencies, deadlines. It sounds like territory that requires professional credentials.
      </p>
      <p>
        It doesn&rsquo;t.
      </p>
      <p>
        Here&rsquo;s something the industry doesn&rsquo;t advertise: every state publishes a standard residential purchase agreement &mdash; a fill-in-the-blank form designed to be completed by people who aren&rsquo;t attorneys. It&rsquo;s the same form your agent would use. It&rsquo;s free. And once you understand what each field means, filling it out is straightforward work.
      </p>

      <h2>Step 1: Get the Form</h2>
      <p>
        Search &ldquo;[your state] real estate commission purchase agreement.&rdquo; Your state&rsquo;s real estate commission website will have the standard residential purchase contract available as a free PDF download. A few common ones:
      </p>
      <ul className="my-6 space-y-2 pl-6 list-disc text-slate-700">
        <li><strong>Texas:</strong> TREC One to Four Family Residential Contract (Resale) &mdash; trec.texas.gov</li>
        <li><strong>Arizona:</strong> AAR Residential Resale Real Estate Purchase Contract &mdash; aaronline.com</li>
        <li><strong>California:</strong> CAR Residential Purchase Agreement &mdash; car.org (free to members; find through your county)</li>
        <li><strong>Colorado:</strong> CBS2-8-23 Contract to Buy and Sell Real Estate &mdash; dre.colorado.gov</li>
        <li><strong>Florida:</strong> FR/BAR As-Is Residential Contract for Sale and Purchase &mdash; floridarealtors.org</li>
      </ul>
      <p>
        If your state&rsquo;s form isn&rsquo;t immediately obvious, search the state real estate commission website directly. Every state has one. Some are longer than others, but they all cover the same core fields.
      </p>
      <p>
        You can also ask the listing agent if they can provide the form &mdash; they use it constantly and will often send it over without hesitation.
      </p>

      <h2>Step 2: Fill in the Core Fields</h2>
      <p>
        The fields on a standard purchase agreement break into four categories. Here&rsquo;s what to put in each.
      </p>

      <h3>Purchase Price</h3>
      <p>
        This is the number you&rsquo;re offering. Base it on comparable sales &mdash; recent closed transactions for similar homes in the same area. Look at price per square foot, condition, updates, and days on market. A home that&rsquo;s been sitting for sixty days has different negotiating dynamics than one that just listed.
      </p>
      <p>
        BAIRE&rsquo;s comp analysis pulls this data automatically when you paste a listing link. But you can also find comps through Zillow&rsquo;s &ldquo;Recently Sold&rdquo; filter, Redfin&rsquo;s market data, or by asking the listing agent directly what comparable homes have sold for recently.
      </p>

      <h3>Earnest Money</h3>
      <p>
        Earnest money is a good-faith deposit that shows the seller you&rsquo;re serious. It goes into escrow after your offer is accepted and is applied toward your down payment or closing costs at closing.
      </p>
      <p>
        Standard range: 1-3% of the purchase price. On a $400,000 home, that&rsquo;s $4,000 to $12,000. In competitive markets, the higher end signals commitment. In a slower market, 1% is often sufficient. You&rsquo;ll need a personal check, cashier&rsquo;s check, or wire transfer ready within a few days of acceptance &mdash; the contract will specify the deadline.
      </p>

      <h3>Closing Date</h3>
      <p>
        Thirty to forty-five days from offer acceptance is the standard range. If you&rsquo;re getting a conventional mortgage, your lender will need 30-45 days to process the loan. Ask your lender upfront what their realistic timeline is &mdash; then add a few days of buffer.
      </p>
      <p>
        If you know the seller has a specific timeline preference &mdash; they&rsquo;re building a new home and need extra time, or they&rsquo;ve already bought and want to close fast &mdash; matching their timeline is a meaningful concession that costs you nothing.
      </p>

      <h3>Contingencies</h3>
      <p>
        Contingencies are conditions that must be satisfied for the sale to close. If they&rsquo;re not met, you can exit the contract and typically recover your earnest money. The three standard contingencies:
      </p>

      <div className="overflow-x-auto my-8">
        <table className="w-full text-sm border border-slate-200 rounded-lg overflow-hidden">
          <thead className="bg-slate-50">
            <tr>
              <th className="text-left px-4 py-3 font-semibold text-slate-700 border-b border-slate-200">Contingency</th>
              <th className="text-left px-4 py-3 font-semibold text-slate-700 border-b border-slate-200">What it protects</th>
              <th className="text-left px-4 py-3 font-semibold text-slate-700 border-b border-slate-200">Should you include it?</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-3 border-b border-slate-100 font-medium">Inspection</td>
              <td className="px-4 py-3 border-b border-slate-100">Right to negotiate repairs or walk away after the home inspection</td>
              <td className="px-4 py-3 border-b border-slate-100">Almost always, unless you&rsquo;re buying as-is with full knowledge of condition</td>
            </tr>
            <tr className="bg-slate-50/50">
              <td className="px-4 py-3 border-b border-slate-100 font-medium">Financing</td>
              <td className="px-4 py-3 border-b border-slate-100">Protection if your mortgage falls through before closing</td>
              <td className="px-4 py-3 border-b border-slate-100">Yes, if you&rsquo;re not paying cash. Without it, you risk losing earnest money if your loan is denied.</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium">Appraisal</td>
              <td className="px-4 py-3">Protection if the home appraises below your offer price</td>
              <td className="px-4 py-3">Yes in most cases. Without it, you&rsquo;re obligated to make up the gap in cash if the home appraises low.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        In highly competitive markets, sellers sometimes ask buyers to waive contingencies. Understand exactly what you&rsquo;re giving up before you agree. Waiving inspection on a home you haven&rsquo;t thoroughly evaluated is a significant risk. Waiving appraisal when you&rsquo;re offering above comparable sales means you may owe cash at closing if the bank disagrees with your price.
      </p>

      <h2>Step 3: Fill in the Buyer-Agent Commission Field</h2>
      <p>
        Post-NAR settlement, purchase agreements include a field for buyer-agent compensation. If you&rsquo;re representing yourself, the answer is straightforward: enter $0, leave it blank, or write N/A.
      </p>
      <p>
        There is no buyer&rsquo;s agent. There is no commission to pay. That&rsquo;s part of why your offer is structurally stronger &mdash; the seller nets more on the same price.
      </p>
      <p>
        If the seller has pre-emptively offered buyer-agent compensation in the listing terms, you can ask to have that amount applied as a closing cost credit instead. This effectively reduces your out-of-pocket costs at closing without changing the purchase price. Whether the seller agrees to this depends on the specific situation and how much leverage you have.
      </p>

      <h2>Step 4: Assemble the Submission Package</h2>
      <p>
        Your offer package has three components:
      </p>
      <ul className="my-6 space-y-2 pl-6 list-disc text-slate-700">
        <li><strong>The completed purchase agreement.</strong> Signed (most states allow electronic signature) and fully filled out.</li>
        <li><strong>Pre-approval letter from your lender.</strong> This is non-negotiable. Without it, no serious seller will consider your offer. The letter should be dated within the last 30-60 days and show the loan amount you&rsquo;re approved for.</li>
        <li><strong>Proof of earnest money funds.</strong> A bank statement or screenshot showing you have the earnest money available. This is becoming more common in competitive markets and signals you&rsquo;re financially ready.</li>
      </ul>
      <p>
        Some buyers include a fourth element: a short cover letter. A few sentences explaining who you are and why you want the home. This is personal and optional &mdash; and in some states, restricted for fair housing reasons. If you include one, keep it brief and factual. Don&rsquo;t describe your family, your kids, or anything that could be used as a basis for discrimination. Many listing agents won&rsquo;t even pass personal letters to sellers in states where they&rsquo;re restricted.
      </p>

      <h2>Step 5: Submit to the Listing Agent</h2>
      <p>
        The listing agent&rsquo;s contact information is on every listing. Email them directly:
      </p>
      <blockquote className="border-l-4 border-slate-300 bg-slate-50 pl-5 pr-4 py-4 my-6 rounded-r-lg">
        <p className="text-slate-700 italic mb-0">
          &ldquo;Hi [Agent name], I&rsquo;m a self-represented buyer and I&rsquo;d like to submit an offer on [property address]. Attached is my signed purchase agreement, pre-approval letter, and proof of earnest money funds. Please let me know if you need anything else to present this to your client.&rdquo;
        </p>
      </blockquote>
      <p>
        That&rsquo;s it. The listing agent is obligated to present your offer to the seller. They may try to schedule a call first, or ask clarifying questions. That&rsquo;s normal. Answer what you&rsquo;re comfortable with and keep the focus on getting your offer in front of the seller.
      </p>

      <h2>What Comes Next</h2>
      <p>
        Once submitted, you&rsquo;ll typically hear back within 24-72 hours. Three outcomes are possible.
      </p>
      <p>
        <strong>Acceptance.</strong> The seller signs and returns the agreement. You&rsquo;re under contract. Wire the earnest money within the deadline specified in the contract and schedule your inspection.
      </p>
      <p>
        <strong>Counter-offer.</strong> The seller modifies your terms &mdash; usually price, closing date, or contingency timelines &mdash; and sends it back. You can accept the counter, reject it, or send back your own counter. Most deals involve at least one round of back-and-forth.
      </p>
      <p>
        <strong>Rejection.</strong> The seller declines entirely. This happens less often than buyers expect &mdash; most sellers counter rather than reject outright, because a counter keeps the negotiation alive. If you do get rejected, you can often submit a revised offer if you adjust the terms.
      </p>
      <p>
        For a complete picture of every document involved from start to closing, the <Link href="/blog/paperwork-buying-house-without-realtor">paperwork checklist</Link> covers the full sequence. And for the entire process from first search to closing day, the <Link href="/blog/buy-home-without-realtor-complete-guide">complete guide to buying without a realtor</Link> is the place to start.
      </p>

      <div className="bg-slate-50 border border-slate-200 rounded-lg px-6 py-6 my-8">
        <p className="font-semibold text-slate-900 mb-3">BAIRE walks you through every step of the offer process.</p>
        <p className="text-slate-700 mb-4">
          Comp analysis, offer preparation guidance, counteroffer modeling &mdash; for $995 instead of $10,000+. No buyer&rsquo;s agreement. No lock-in. 7-day free trial.
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

      <h3>How do I make an offer on a house without a realtor?</h3>
      <p>
        Download your state&rsquo;s standard residential purchase agreement from the state real estate commission website &mdash; it&rsquo;s free. Fill in the purchase price, earnest money, proposed closing date, and contingencies. Sign it, attach your pre-approval letter, and email it to the listing agent. That&rsquo;s the process. No agent required.
      </p>

      <h3>Where do I get the purchase agreement form if I don&rsquo;t have an agent?</h3>
      <p>
        Your state&rsquo;s real estate commission publishes the standard form for free. Search &ldquo;[your state] real estate commission purchase agreement&rdquo; or ask the listing agent to send you a blank copy &mdash; they&rsquo;ll usually do it without hesitation.
      </p>

      <h3>What contingencies protect me as an unrepresented buyer?</h3>
      <p>
        The three standard contingencies &mdash; inspection, financing, and appraisal &mdash; protect you whether you have an agent or not. Include all three unless you have a specific reason to waive one. Each contingency you waive represents a real financial risk: earnest money forfeiture, being locked into a flawed home, or owing cash at closing when the bank disagrees with your price.
      </p>

      <h3>How much earnest money should I offer without an agent?</h3>
      <p>
        The standard range is 1-3% of the purchase price. In competitive markets, 2-3% signals that you&rsquo;re serious. In slower markets, 1% is often enough. Earnest money isn&rsquo;t an extra fee &mdash; it&rsquo;s applied toward your down payment or closing costs at closing.
      </p>

      <h3>What do I put for buyer&rsquo;s agent commission on the offer form?</h3>
      <p>
        If you&rsquo;re self-represented, enter $0 or N/A. There&rsquo;s no buyer&rsquo;s agent to compensate. This is one of the structural advantages of buying without an agent &mdash; the seller nets more on the same purchase price because no buyer-agent commission is being deducted.
      </p>

      <h3>What if the seller counters my offer?</h3>
      <p>
        A counteroffer is a new offer from the seller modifying your terms. You can accept it, reject it, or send back your own counter. Most deals involve at least one round of negotiation. The key is knowing your walkaway number before you start &mdash; the maximum price and minimum terms you&rsquo;re willing to accept &mdash; so you negotiate from clarity instead of emotion.
      </p>

      <h3>Can I write a personal letter with my offer?</h3>
      <p>
        Some buyers do. Some states restrict or ban personal letters because they can introduce fair housing concerns. Before including one, check whether your state has any restrictions. If you do write one, keep it brief and avoid mentioning family composition, religion, or anything that could be used as a basis for discrimination.
      </p>
    </>
  ),
}

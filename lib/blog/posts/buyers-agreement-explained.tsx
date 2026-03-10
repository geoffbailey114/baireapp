import React from 'react'
import Link from 'next/link'
import { BlogPost } from '../types'

export const post: BlogPost = {
  slug: 'buyers-agreement-explained',
  title: 'Buyer\'s Agreement Explained: What You\'re Signing',
  description: 'After the NAR settlement, agents must have a signed buyer\'s agreement before showing homes. Here\'s what it commits you to — and what happens if you don\'t sign one.',
  publishedAt: '2026-03-04T00:00:00Z',
  updatedAt: '2026-03-04T00:00:00Z',
  author: {
    name: 'BAIRE',
    url: 'https://baireapp.com/about',
  },
  category: 'nar-settlement',
  tags: ['buyer agreement', 'buyer agency agreement', 'nar settlement', 'buyer representation', 'commission', 'home buying'],
  keywords: [
    'what is a buyer agency agreement',
    'what is a buyer broker agreement',
    'buyer representation agreement',
    'do I have to sign a buyer agreement',
    'buyer agency agreement cost',
    'can I cancel buyer agreement',
    'buyer broker agreement explained',
  ],
  readingTime: 9,
  published: true,
  relatedSlugs: [
    'nar-settlement-explained',
    'buy-home-without-realtor-complete-guide',
    'do-you-need-a-buyers-agent',
    'offer-stronger-without-buyer-agent',
  ],
  tldr: 'A buyer\'s agreement is a contract between you and a buyer\'s agent that legally commits you to paying their commission — typically 2-3% of the purchase price — before you\'ve seen a single home. After the 2024 NAR settlement, agents are required to have one signed before showing any property. You are not required to sign one. Buyers who skip the agreement and represent themselves avoid the commission entirely.',
  faqs: [
    {
      question: 'What is a buyer\'s agreement?',
      answer: 'A buyer\'s agreement (also called a buyer agency agreement or buyer representation agreement) is a contract between a home buyer and a real estate agent. It specifies the commission the buyer agrees to pay the agent — typically 2-3% of the purchase price — and the terms under which the agent will represent them. After the 2024 NAR settlement, agents must have one signed before showing any home.',
    },
    {
      question: 'Do I have to sign a buyer\'s agreement?',
      answer: 'No. You are not legally required to sign a buyer\'s agreement. The requirement applies to agents — they cannot show you a home without one signed. But you have no obligation to use a buyer\'s agent at all. You can represent yourself, contact listing agents directly, and tour homes without signing any buyer\'s agreement.',
    },
    {
      question: 'How much does a buyer\'s agreement cost?',
      answer: 'A buyer\'s agreement itself costs nothing to sign. But it commits you to paying your agent\'s commission at closing — typically 2-3% of the purchase price. On a $400,000 home at 2.5%, that\'s $10,000. The seller may cover this cost, but they\'re no longer required to. If the seller won\'t pay it, you owe it out of pocket.',
    },
    {
      question: 'Can I cancel a buyer\'s agreement?',
      answer: 'It depends on the terms. Some agreements include a mutual cancellation clause that lets either party exit with written notice. Others lock you in for a set period — typically 90 days — with no exit provision. Always read the cancellation terms before signing. If there\'s no clear exit clause, you may owe the agent a commission even if you find and buy a home without their help.',
    },
    {
      question: 'What is the difference between a buyer agency agreement and a buyer representation agreement?',
      answer: 'They\'re the same thing, just different names used in different states. Both are contracts between a buyer and their real estate agent establishing representation terms and commission obligations. Some states use "buyer broker agreement" or "exclusive buyer representation agreement." The name varies; the legal effect is the same.',
    },
    {
      question: 'What happens if I don\'t sign a buyer\'s agreement?',
      answer: 'If you don\'t sign a buyer\'s agreement, licensed agents cannot legally show you homes in most states after the 2024 NAR settlement. However, you can still buy a home. You contact listing agents directly — they represent the seller and can provide access to properties. You represent yourself throughout the transaction, with no buyer-agent commission attached to your offer.',
    },
    {
      question: 'Can I negotiate the terms of a buyer\'s agreement?',
      answer: 'Yes. Commission rates, exclusivity terms, the property types or geographic areas covered, and the duration of the agreement are all negotiable. Agents may push back, but nothing in the agreement is legally fixed. You can also ask for a non-exclusive agreement, which lets you work with multiple agents or switch without penalty.',
    },
    {
      question: 'Is there an alternative to signing a buyer\'s agreement?',
      answer: 'Yes. You can represent yourself as an unrepresented buyer and use an educational platform like BAIRE for guidance. BAIRE provides comp analysis, offer preparation frameworks, negotiation support, and closing guidance for $995 — with no buyer\'s agreement, no lock-in, and no commission attached to your offer. Consult a real estate attorney for legal questions about your specific transaction.',
    },
  ],
  content: () => (
    <>
      <p>
        I had a conversation last fall with a couple who&rsquo;d just started their home search. They&rsquo;d called three agents, scheduled showings for the weekend, and were feeling good about the process. Then the first agent emailed them a document to sign before she&rsquo;d confirm the appointments.
      </p>
      <p>
        It was eleven pages long. The couple didn&rsquo;t read it. They signed it and went to the showings.
      </p>
      <p>
        Two weeks later, they found a house they wanted to buy &mdash; through a different agent they liked better. The first agent called. She reminded them that they&rsquo;d signed an exclusive representation agreement, it had ninety days left to run, and any home they bought during that period would trigger her commission.
      </p>
      <p>
        That document they skimmed and signed to get into a couple of weekend showings had just become a $10,000 problem.
      </p>

      <h2>What the NAR Settlement Actually Changed</h2>
      <p>
        Before August 2024, buyer-agent commissions were handled quietly in the background. Sellers offered a commission split in the MLS &mdash; typically 2.5% to the listing agent, 2.5% to the buyer&rsquo;s agent &mdash; and buyers went through the whole process without ever seeing a line item for their agent&rsquo;s fee.
      </p>
      <p>
        The <Link href="/blog/nar-settlement-explained">2024 NAR settlement</Link> changed the rules on both sides. Sellers are no longer required to offer buyer-agent compensation through the MLS. And agents &mdash; this is the part that directly affects you as a buyer &mdash; must have a signed buyer&rsquo;s agreement before showing any home.
      </p>
      <p>
        The agreement must specify what the buyer agrees to pay. Not what the seller might cover. What you, the buyer, are on the hook for.
      </p>
      <p>
        For the first time in the history of residential real estate, buyers have to look at a document that says, plainly: this is what your agent costs.
      </p>

      <h2>What a Buyer&rsquo;s Agreement Actually Says</h2>
      <p>
        The name varies by state &mdash; buyer agency agreement, buyer representation agreement, buyer broker agreement, exclusive right-to-represent agreement. The legal effect is largely the same. Here&rsquo;s what the key sections typically mean in plain English:
      </p>

      <div className="overflow-x-auto my-8">
        <table className="w-full text-sm border border-slate-200 rounded-lg overflow-hidden">
          <thead className="bg-slate-50">
            <tr>
              <th className="text-left px-4 py-3 font-semibold text-slate-700 border-b border-slate-200">What the agreement says</th>
              <th className="text-left px-4 py-3 font-semibold text-slate-700 border-b border-slate-200">What it means</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-3 border-b border-slate-100 font-medium">&ldquo;Exclusive representation&rdquo;</td>
              <td className="px-4 py-3 border-b border-slate-100">You can&rsquo;t use another buyer&rsquo;s agent during the term. If you buy any home that meets the agreement&rsquo;s description, you owe this agent a commission &mdash; even if they didn&rsquo;t find the home.</td>
            </tr>
            <tr className="bg-slate-50/50">
              <td className="px-4 py-3 border-b border-slate-100 font-medium">Commission rate: 2.5%</td>
              <td className="px-4 py-3 border-b border-slate-100">On a $400,000 home, you&rsquo;ve agreed to pay $10,000. If the seller covers it, you don&rsquo;t pay out of pocket. If they don&rsquo;t, you do.</td>
            </tr>
            <tr>
              <td className="px-4 py-3 border-b border-slate-100 font-medium">Term: 90 days</td>
              <td className="px-4 py-3 border-b border-slate-100">The agreement runs for three months. Any home you close on during that window potentially triggers the commission &mdash; including homes you found on Zillow yourself.</td>
            </tr>
            <tr className="bg-slate-50/50">
              <td className="px-4 py-3 border-b border-slate-100 font-medium">&ldquo;Compensation shall be payable if buyer purchases...&rdquo;</td>
              <td className="px-4 py-3 border-b border-slate-100">This clause defines what triggers the commission. Read it carefully. Some are broad (&ldquo;any property&rdquo;). Others are narrower (&ldquo;properties shown by agent&rdquo;).</td>
            </tr>
            <tr>
              <td className="px-4 py-3 border-b border-slate-100 font-medium">Property type / geographic area</td>
              <td className="px-4 py-3 border-b border-slate-100">Limits the agreement to a specific area or property type. A well-negotiated agreement might cover only specific neighborhoods, giving you more flexibility elsewhere.</td>
            </tr>
            <tr className="bg-slate-50/50">
              <td className="px-4 py-3 font-medium">Cancellation clause</td>
              <td className="px-4 py-3">Tells you whether and how you can exit. Some agreements allow mutual cancellation with written notice. Others have no exit provision at all.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>The Terms You Can Negotiate</h2>
      <p>
        Most buyers assume the buyer&rsquo;s agreement is a standard form they either sign or don&rsquo;t. That&rsquo;s not accurate. Every material term is negotiable. Agents may push back &mdash; some harder than others &mdash; but nothing in the agreement is legally fixed.
      </p>
      <p>
        <strong>Commission rate.</strong> The 2.5-3% figure is a starting point, not a floor. Some agents will negotiate to 1.5-2%, particularly in higher price ranges where the dollar amount is significant. You can also ask for a flat fee instead of a percentage.
      </p>
      <p>
        <strong>Exclusivity.</strong> You can ask for a non-exclusive agreement, which lets you work with multiple agents or switch without penalty. Non-exclusive agreements are less common but not unheard of.
      </p>
      <p>
        <strong>Duration.</strong> Ninety days is common. Thirty days is reasonable to request, especially before you&rsquo;ve seen whether you actually work well with this agent.
      </p>
      <p>
        <strong>Geographic scope.</strong> Limiting the agreement to a specific city or neighborhood gives you flexibility to work with different agents in different areas if your search evolves.
      </p>
      <p>
        <strong>Cancellation terms.</strong> Ask for a mutual cancellation clause with written notice &mdash; typically five to ten business days. If an agent won&rsquo;t agree to any exit provision, that tells you something about how they operate.
      </p>

      <h2>What Happens If You Don&rsquo;t Sign One</h2>
      <p>
        Here&rsquo;s the part most buyers don&rsquo;t know: you&rsquo;re not required to sign a buyer&rsquo;s agreement. The requirement runs the other direction &mdash; agents can&rsquo;t show you homes without one. But you have no legal obligation to use a buyer&rsquo;s agent at all.
      </p>
      <p>
        If you choose not to sign a buyer&rsquo;s agreement, you represent yourself. That means:
      </p>
      <ul className="my-6 space-y-2 pl-6 list-disc text-slate-700">
        <li>You contact listing agents directly to schedule showings. The listing agent&rsquo;s contact information is on every listing. You call or email, identify yourself as a self-represented buyer, and book the showing. Listing agents do this regularly.</li>
        <li>You submit offers directly through the listing agent or a title company, using your state&rsquo;s standard purchase agreement form &mdash; the same form agents use.</li>
        <li>There is no buyer-agent commission attached to your offer, which means the seller nets more money on the same price. That&rsquo;s a structural advantage.</li>
        <li>You handle the process with the right information and frameworks, rather than delegating it to someone paid on commission.</li>
      </ul>
      <p>
        For a full breakdown of what that process actually looks like in practice, the <Link href="/blog/what-it-looks-like-buying-without-agent">walkthrough of buying without an agent</Link> covers it step by step.
      </p>

      <h2>The One Question Worth Asking Before You Sign Anything</h2>
      <p>
        If you&rsquo;re considering working with a buyer&rsquo;s agent and they hand you a buyer&rsquo;s agreement, ask one question before you sign: &ldquo;If I find a home I want to buy on my own, and you were never involved in finding it &mdash; do I still owe you a commission?&rdquo;
      </p>
      <p>
        The answer depends on the specific language of the agreement. Some say yes. If the agreement says &ldquo;any property purchased during the term,&rdquo; you owe the commission regardless of who found it. Others limit commission triggers to properties the agent showed or introduced. Know which one you&rsquo;re signing.
      </p>
      <p>
        That&rsquo;s the question the couple I mentioned at the start of this post never asked. They signed a broad exclusive agreement and then found a house they loved without the agent&rsquo;s involvement. The commission was triggered anyway.
      </p>

      <h2>The BAIRE Alternative</h2>
      <p>
        BAIRE is an AI-powered educational platform for home buyers. Not a brokerage. Not an agent. No buyer&rsquo;s agreement. No lock-in.
      </p>
      <p>
        BAIRE provides the comp analysis, offer preparation guidance, negotiation frameworks, and closing support that buyers need to work through the process on their own &mdash; for $995, versus $10,000+ in buyer-agent commission on a typical home. Because there&rsquo;s no buyer&rsquo;s agent attached to your offer, your offer is structurally stronger for the seller.
      </p>
      <p>
        You can read through <Link href="/blog/buy-home-without-realtor-complete-guide">our complete guide to buying without a realtor</Link> to see how the whole process fits together before deciding what approach makes sense for you.
      </p>

      <div className="bg-slate-50 border border-slate-200 rounded-lg px-6 py-6 my-8">
        <p className="font-semibold text-slate-900 mb-3">No buyer&rsquo;s agreement. No lock-in. No commission.</p>
        <p className="text-slate-700 mb-4">
          7-day free trial. 30-day money-back guarantee. $995 one-time fee.
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

      <h3>What is a buyer&rsquo;s agreement?</h3>
      <p>
        A buyer&rsquo;s agreement &mdash; also called a buyer agency agreement, buyer representation agreement, or buyer broker agreement &mdash; is a contract between you and a real estate agent. It specifies the commission you agree to pay (typically 2-3% of the purchase price), the term of the relationship, and the exclusivity terms. After the 2024 NAR settlement, agents must have one signed before showing any home.
      </p>

      <h3>Do I have to sign a buyer&rsquo;s agreement?</h3>
      <p>
        No. The requirement falls on agents &mdash; they can&rsquo;t show you homes without one. But you have no obligation to use a buyer&rsquo;s agent at all. You can represent yourself, contact listing agents directly, and buy a home without signing any buyer&rsquo;s agreement.
      </p>

      <h3>How much does signing a buyer&rsquo;s agreement actually cost me?</h3>
      <p>
        The agreement itself is free to sign. But it commits you to paying your agent&rsquo;s commission at closing &mdash; typically 2-3% of the purchase price. On a $400,000 home at 2.5%, that&rsquo;s $10,000. The seller may agree to cover it, but they&rsquo;re no longer required to. If they won&rsquo;t, you pay it out of pocket.
      </p>

      <h3>Can I cancel a buyer&rsquo;s agreement after signing?</h3>
      <p>
        Possibly, depending on the terms. Some agreements include a mutual cancellation clause with written notice. Others lock you in for the full term with no exit provision. Read the cancellation section before you sign &mdash; and if there&rsquo;s no clear exit clause, negotiate one in before agreeing to anything.
      </p>

      <h3>What&rsquo;s the difference between exclusive and non-exclusive buyer&rsquo;s agreements?</h3>
      <p>
        An exclusive agreement means you can&rsquo;t work with other buyer&rsquo;s agents during the term &mdash; and you owe the commission to this agent if you buy a qualifying home, even if they had nothing to do with finding it. A non-exclusive agreement gives you more flexibility to work with multiple agents or switch. Non-exclusive is less common, but it&rsquo;s negotiable.
      </p>

      <h3>What happens to the buyer-agent commission if I don&rsquo;t have an agent?</h3>
      <p>
        If you don&rsquo;t have a buyer&rsquo;s agent, there&rsquo;s no buyer-agent commission in the transaction. Some sellers pre-emptively offer buyer-agent compensation in their listing terms to attract represented buyers &mdash; but if you&rsquo;re unrepresented, that compensation isn&rsquo;t paid to anyone. The seller keeps it, which makes your offer more attractive on a net-proceeds basis.
      </p>

      <h3>Is BAIRE an alternative to signing a buyer&rsquo;s agreement?</h3>
      <p>
        Yes. BAIRE is an educational technology platform &mdash; not a brokerage &mdash; that provides comp analysis, offer preparation guidance, negotiation frameworks, and closing support for $995. There&rsquo;s no buyer&rsquo;s agreement, no lock-in, and no commission attached to your offer. Consult a real estate attorney for legal questions about your specific transaction.
      </p>
    </>
  ),
}

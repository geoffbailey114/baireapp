import React from 'react'
import { BlogPost } from '../types'

export const post: BlogPost = {
  slug: 'five-things-paying-buyer-agent-12000',
  title: "5 Things You're Paying Your Buyer's Agent $12,000 to Do",
  description: "Break down the five core tasks a buyer's agent performs — finding homes, running comps, writing offers, negotiating, and coordinating — and what it takes to handle each one yourself.",
  publishedAt: '2026-02-17T00:00:00Z',
  author: {
    name: 'Susie Johnson',
    url: 'https://baireapp.com/blog',
  },
  category: 'savings',
  tags: ['buyer agent tasks', 'what agents do', 'self-represented buyer', 'DIY home buying', 'commission value'],
  keywords: [
    'what does buyer agent do',
    'buyer agent tasks breakdown',
    'buy home without agent',
    'do I need a buyer agent',
    'what buyer agent does for commission',
    'can I buy a house without a realtor',
    'what does a realtor actually do for buyers',
    'is a buyer agent worth the commission',
  ],
  readingTime: 10,
  published: true,
  relatedSlugs: [
    'true-cost-buyer-agent-30-year-mortgage',
    'get-everything-buyer-agent-offers-for-995',
    'buyer-agent-isnt-free',
  ],
  faqs: [
    {
      question: "What are the five main things a buyer's agent does?",
      answer: "A buyer's agent primarily handles five tasks: (1) finding properties and scheduling showings, (2) running comparable sales analysis, (3) writing and submitting offers using standardized forms, (4) negotiating price and terms, and (5) coordinating the transaction through closing. None of these tasks requires a real estate license to perform on your own behalf.",
    },
    {
      question: 'Can I schedule showings without an agent?',
      answer: "Yes. Contact the listing agent directly — their information is on the listing. Say you're pre-approved and self-represented. Most listing agents are happy to show homes to unrepresented buyers because it means less commission for the seller to pay.",
    },
    {
      question: 'Can I write my own purchase offer without an agent?',
      answer: "Yes. The residential purchase agreement in virtually every state is a standardized fill-in-the-blank form — not a bespoke legal document. It was designed so that licensed agents (who are not attorneys) can complete it, which means it was designed for your skill level too. For extra confidence, hire a real estate attorney to review it for $500–$1,000.",
    },
    {
      question: 'Is being self-represented a negotiating disadvantage?',
      answer: "Actually, it's an advantage. When there's no buyer-agent commission to pay, the seller's net proceeds are higher. On a $400,000 home, that's potentially $10,000 more in the seller's pocket. Listing agents understand this and often present unrepresented offers favorably.",
    },
    {
      question: 'What is a buyer\'s agent\'s conflict of interest?',
      answer: "Your agent earns commission only if you buy. That creates an inherent incentive to encourage you to make an offer — even when the data says wait or walk. When you run your own comp analysis, the only agenda is yours.",
    },
  ],
  content: () => (
    <>
      <p>
        <strong>The short version:</strong> A buyer&apos;s agent performs five core tasks — finding properties, running comps, writing offers, negotiating, and coordinating closing. None of these requires a real estate license to do on your own behalf, and none involves specialized skills beyond research, arithmetic, and organized communication.
      </p>
      <p>
        Here&apos;s an exercise most home buyers never do. Take the total commission your buyer&apos;s agent would earn on your purchase, and then list everything they actually do for that money. Not what you assume they do. Not the vague sense that they&apos;re &quot;handling things.&quot; The specific tasks.
      </p>
      <p>
        On a $400,000 home at 3%, that&apos;s $12,000. On a $500,000 home, $15,000. And once you lay the services next to the price tag, something becomes clear: most of what a buyer&apos;s agent does isn&apos;t specialized work. It&apos;s coordination. With the right information and a bit of structure, you can coordinate just fine on your own.
      </p>
      <p>
        Here are the five core things your agent does, what each one involves, and what it takes to handle them yourself.
      </p>

      <h2>1. Finding Properties and Scheduling Showings</h2>
      <p>
        Your agent searches listings, sends you properties that match your criteria, and books showings with listing agents. They meet you at homes, let you in, and walk through with you.
      </p>
      <p>
        Let&apos;s be straightforward about this one. You&apos;re already doing the search. If you&apos;re in the market for a home, you&apos;re scrolling Zillow at midnight and saving listings on Redfin over your lunch break. The notion that your agent is surfacing properties you couldn&apos;t find yourself was more believable before every listing was published online in real time.
      </p>
      <p>
        As for scheduling — that&apos;s a phone call. The listing agent&apos;s contact information is on the listing. You call or email and say, &quot;I&apos;m pre-approved and interested in seeing the property at 456 Maple. I&apos;m self-represented. When works for a showing?&quot; That&apos;s the whole interaction. No gatekeeping, no secret handshake.
      </p>
      <p>
        <strong>What it takes:</strong> about ten minutes per showing request. You find the listing, you make the call, you show up. Many listing agents will meet you at the property or give you a lockbox code. The process is genuinely unremarkable.
      </p>

      <h2>2. Running Comps and Assessing Value</h2>
      <p>
        Your agent pulls comparable sales — recently sold homes similar to the one you&apos;re considering — and uses them to advise on what the property is worth and what to offer.
      </p>
      <p>
        This involves running a search for homes that sold within the last six months or so, in a similar area, with comparable square footage, bedroom count, lot size, and condition. Then reading the data and forming a pricing opinion.
      </p>
      <p>
        Agents have MLS access, which gives them slightly more data than public portals. But that gap has narrowed dramatically. Zillow, Redfin, and Realtor.com all show recent sales with price, square footage, days on market, and sale-to-list ratios. Your lender can pull comps too — many do it routinely, because a well-priced offer protects their investment.
      </p>
      <p>
        Here&apos;s something worth considering: when you run your own comps, you remove a conflict of interest that&apos;s baked into the agent model. Your agent earns a commission only if you buy. That creates an inherent incentive to encourage you to make an offer, even when the data says wait or walk. When you&apos;re doing your own analysis, the only agenda is yours.
      </p>
      <p>
        <strong>What it takes:</strong> thirty to sixty minutes of research. Pull three to five recently sold homes within a mile or so of your target, with similar size and features. Note what they sold for, how long they sat on the market, whether the seller made concessions. Average the sale prices. That&apos;s your baseline. It&apos;s not complicated. It&apos;s arithmetic.
      </p>

      <h2>3. Writing and Submitting the Offer</h2>
      <p>
        Your agent fills out the purchase agreement — a standardized form — with your offer price, earnest money amount, contingencies, closing date, and any special terms. They submit it to the listing agent with your pre-approval letter.
      </p>
      <p>
        I want to be specific about what this involves, because it&apos;s the step that intimidates people most, and it shouldn&apos;t.
      </p>
      <p>
        The residential purchase agreement in virtually every state is a template. It&apos;s not a bespoke legal document. It&apos;s a fill-in-the-blank form designed specifically so that licensed agents — who are not attorneys — can complete it. The fields are labeled. The contingencies are checkboxes. The deadlines are blanks with dates. Your agent is not drafting a contract from scratch. They&apos;re not analyzing case law. If they were, they&apos;d be practicing law without a license, which is illegal in every state.
      </p>
      <p>
        The form was designed for their skill level. Which means it was designed for yours.
      </p>
      <p>
        <strong>What it takes:</strong> get the form from your state&apos;s real estate commission website (most publish them), from a real estate attorney, or from your title company. Fill it in using your comp research and your lender&apos;s guidance on financing terms. For extra confidence, hire a real estate attorney to review it before you submit. That service runs $500 to $1,000 — a fraction of the commission.
      </p>

      <h2>4. Negotiating the Deal</h2>
      <p>
        After you submit your offer, your agent communicates with the listing agent through the counter-offer process. They advocate for your position on price, terms, concessions, and repair credits.
      </p>
      <p>
        Good negotiation in real estate comes down to preparation, not personality. Knowing what the home is worth. Understanding what the seller needs — a quick close, fewer contingencies, a specific move-out date. Making reasonable asks backed by data. That&apos;s the whole game.
      </p>
      <p>
        The mechanics are emails and phone calls. Counter-offers go on standardized addendum forms. The data driving the negotiation — comps, inspection findings, appraisal results — is the same whether you have an agent or not. There&apos;s no secret playbook.
      </p>
      <p>
        There&apos;s a common belief that agents have insider leverage because of their relationships with other agents. In practice, the listing agent&apos;s job is to maximize the seller&apos;s outcome. Your agent&apos;s job is to maximize yours. Those are opposing goals. The relationship doesn&apos;t change the math.
      </p>
      <p>
        And here&apos;s something agents rarely mention: being self-represented is itself a negotiating advantage. When there&apos;s no buyer-agent commission to pay, the seller&apos;s net proceeds are higher. On a $400,000 home, that&apos;s potentially $10,000 more in the seller&apos;s pocket. Listing agents understand this, and they&apos;ll often present your offer favorably because it puts more money in their client&apos;s hands.
      </p>
      <p>
        <strong>What it takes:</strong> know your numbers, know your walkaway point, communicate in writing, and be professional. If you can handle a salary negotiation or a car purchase, you can handle this.
      </p>

      <h2>5. Coordinating the Transaction Through Closing</h2>
      <p>
        After your offer is accepted, your agent tracks deadlines, schedules inspections, follows up with the lender, coordinates with the title company, and keeps things on track through closing day.
      </p>
      <p>
        This is project management. Your agent maintains a checklist: inspection by this date, appraisal ordered by that date, financing contingency expires here, closing is there. They send reminder emails and make follow-up calls.
      </p>
      <p>
        Deadlines in a real estate contract are binding — miss one and you can lose your earnest money or your leverage. But the timelines are spelled out in your purchase agreement, the milestones are predictable, and there&apos;s nothing ambiguous about what comes next.
      </p>
      <p>
        Here&apos;s the other thing: you&apos;re not the only professional involved. Your lender has a loan officer and a closing coordinator. The title company has a closer. Your inspector schedules directly with you. The people who actually execute each step are already in your corner. What the agent provides is the connective tissue — the reminders and follow-ups.
      </p>
      <p>
        <strong>What it takes:</strong> a calendar with alerts and a checklist of key dates pulled from your purchase agreement. If you&apos;ve ever managed a project at work — or even planned a vacation with moving parts — you have the organizational skills for this.
      </p>

      <h2>So What Does $12,000 Actually Buy?</h2>
      <p>
        Step back and look at the list. Five categories: property search, comp analysis, form completion, negotiation, and coordination. None of them requires a license. None of them is inaccessible to a motivated buyer with a computer, a phone, and a reasonable attention to detail.
      </p>
      <p>
        This doesn&apos;t mean going without an agent is the right call for everyone. If you&apos;re buying your first home and you&apos;d rather not think about any of this, an agent can take things off your plate, and that convenience has legitimate value. (For a deeper look at who should and shouldn&apos;t use one, see <a href="/blog/do-you-need-a-buyers-agent">our full breakdown</a>.) But it&apos;s convenience, not necessity. And a $12,000 convenience charge deserves the same scrutiny you&apos;d give any other five-figure expense in your life.
      </p>
      <p>
        The question isn&apos;t whether you&apos;re capable. You are. The question is whether you have the structure and information to do it well. Because the tasks themselves are just tasks. They&apos;re not mysteries.
      </p>

      <hr />
      <p>
        If you can do all of this yourself, what does proper support look like — without the commission? In our final piece, we show you what it looks like to get comp analysis, offer strategy, negotiation coaching, and closing guidance for $995: <a href="/blog/get-everything-buyer-agent-offers-for-995">How to Get Everything a Buyer&apos;s Agent Offers for $995</a>.
      </p>
    </>
  ),
}

'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqs = [
  {
    question: 'How do I tour homes without an agent?',
    answer: (
      <>
        <p>BAIRE pulls the listing agent&apos;s name and contact info straight from the listing, then gives you word-for-word scripts that present you as a serious, qualified buyer. Most listing agents prefer this &mdash; they represent the seller, and an unrepresented buyer means no competing agent to coordinate around.</p>
      </>
    ),
  },
  {
    question: 'Will sellers take my offer seriously?',
    answer: (
      <>
        <p>More seriously, not less. An unrepresented buyer&apos;s offer costs the seller nothing in buyer-agent commission. On a $400K home, your offer effectively puts $10,000 more in the seller&apos;s pocket compared to a represented buyer at the same price.</p>
      </>
    ),
  },
  {
    question: 'How do I know what the home is actually worth?',
    answer: (
      <>
        <p>BAIRE runs the same comparable sales analysis agents use &mdash; pulled from the same data, without the spin. You&apos;ll see what similar homes sold for, how long they sat, and what that means for your offer. You decide. Not your agent.</p>
      </>
    ),
  },
  {
    question: 'What about negotiations when things go sideways?',
    answer: (
      <>
        <p>BAIRE&apos;s negotiation module covers inspection responses, appraisal gaps, seller concessions, and deal-threatening scenarios in real time. You&apos;ll have a specific framework for every situation &mdash; not vague advice to &ldquo;talk to your agent.&rdquo;</p>
      </>
    ),
  },
  {
    question: "I've never bought a home before. Is this realistic?",
    answer: (
      <>
        <p>BAIRE was built for buyers who are smart, resourceful, and done paying for things they can handle themselves. You managed harder things on a smaller budget. The process is learnable. BAIRE makes sure you don&apos;t have to learn it alone.</p>
      </>
    ),
  },
  {
    question: 'What if the deal falls through and I need to back out?',
    answer: (
      <>
        <p>The exit strategy playbook covers every contingency: inspection, financing, appraisal, and cold feet. You&apos;ll know exactly which clauses protect you, when your earnest money is at risk, and how to exit cleanly when that&apos;s the right call.</p>
      </>
    ),
  },
  {
    question: 'Does BAIRE negotiate for me?',
    answer: (
      <>
        <p>BAIRE gives you the strategy, the framing, and the specific language to use. You execute it. That&apos;s the distinction &mdash; and it&apos;s the one that keeps you in control of the biggest financial decision of your life, not a stranger on commission.</p>
      </>
    ),
  },
  {
    question: 'Is BAIRE a licensed brokerage or law firm?',
    answer: (
      <>
        <p>No. BAIRE is an educational technology platform. We provide knowledge, frameworks, and guidance &mdash; not legal advice and not brokerage representation. You represent yourself. BAIRE makes sure you&apos;re the most prepared person in the room when you do.</p>
      </>
    ),
  },
]

export function FAQV2() {
  return (
    <section id="faq" className="py-24 md:py-32 bg-white">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <p className="text-xs font-bold tracking-[0.15em] uppercase text-sage-600 mb-4">Common questions</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4">
            What confident buyers ask before starting.
          </h2>
          <p className="text-lg text-slate-500">
            Not &ldquo;can I do this&rdquo; &mdash; but &ldquo;how does this work.&rdquo;
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-slate-200">
                <AccordionTrigger className="text-left text-lg font-medium text-slate-900 hover:text-sage-700 py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 leading-relaxed pb-6 text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

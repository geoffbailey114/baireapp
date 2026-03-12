import React from 'react'
import Link from 'next/link'
import { BlogPost } from '../types'

export const post: BlogPost = {
  slug: 'home-viewing-checklist',
  title: 'Home Viewing Checklist for Buyers (2026)',
  description: 'What to look for at every home showing — exterior, interior, systems, and neighborhood. A practical checklist for buyers who want to evaluate homes like a pro.',
  publishedAt: '2026-03-13T00:00:00Z',
  updatedAt: '2026-03-13T00:00:00Z',
  author: {
    name: 'BAIRE',
    url: 'https://baireapp.com/about',
  },
  category: 'process',
  tags: ['home viewing', 'house showing checklist', 'home buying checklist', 'what to look for in a house', 'buying without agent'],
  keywords: [
    'house viewing checklist',
    'home showing checklist buyer',
    'what to look for when viewing a house',
    'home viewing tips',
    'home tour checklist',
    'what to check when viewing a house',
    'home buying showing checklist',
  ],
  readingTime: 9,
  published: true,
  relatedSlugs: [
    'buy-home-without-realtor-complete-guide',
    'how-to-buy-without-agent-step-by-step',
    'paperwork-buying-house-without-realtor',
    'how-to-write-offer-without-agent',
  ],
  tldr: 'A home viewing is your best opportunity to catch problems before they become your problems. The things that matter most aren\'t visible in listing photos: roof condition, foundation, HVAC age, water damage evidence, and drainage. Go beyond the rooms — check systems, look up, look down, and drive the neighborhood at different times. Take notes on every home using the same framework so you can compare honestly.',
  faqs: [
    {
      question: 'What should I look for when viewing a house?',
      answer: 'Beyond the rooms themselves: roof condition (look for missing shingles, sagging ridgeline), foundation (visible cracks on exterior, especially diagonal ones), water evidence (stains on ceilings, soft floors, musty smell), HVAC age (check the label on the unit), and electrical panel type (breakers vs fuses). These are the things listing photos don\'t show and agents often gloss over.',
    },
    {
      question: 'What are the biggest red flags when viewing a home?',
      answer: 'Five that should give you serious pause: active water damage or staining (source unknown), strong musty or chemical odors, significant foundation cracks (diagonal or horizontal), electrical panel with fuses instead of breakers (often requires full replacement), and unpermitted additions visible from exterior (different rooflines, mismatched siding). None of these are automatic deal-killers, but all require professional evaluation before you proceed.',
    },
    {
      question: 'How long should a home showing take?',
      answer: 'At least 30-45 minutes for a serious showing. Less than that and you\'re doing a visual scan, not an evaluation. Budget more time for homes you\'re seriously considering. Bring your checklist, take photos, and don\'t let the listing agent\'s presence rush you. You\'re making a six-figure decision — it\'s appropriate to be thorough.',
    },
    {
      question: 'What questions should I ask at a home showing?',
      answer: 'Ask about: age of roof, HVAC, and water heater; any known water damage or flooding; permits on additions or renovations; HOA rules and current fees; utility costs (ask for recent bills); any ongoing disputes or easements; and why the sellers are moving. The listing agent may or may not know all the answers, but the questions you ask signal that you\'re a serious, informed buyer.',
    },
    {
      question: 'Should I take notes during home showings?',
      answer: 'Yes — and photos. You\'ll visit multiple homes and they blur together quickly. Use the same checklist format for every showing so you can compare directly. Note what you liked, what concerned you, and what you\'d want an inspector to look at specifically. Your notes from the showing become the basis for your inspection request list if you go under contract.',
    },
    {
      question: 'Can I view homes without a buyer\'s agent?',
      answer: 'Yes. Contact the listing agent directly — their information is on every listing. Call or email, identify yourself as a pre-approved buyer representing yourself, and ask to schedule a showing. Listing agents show homes to self-represented buyers regularly. Use BAIRE\'s word-for-word scripts to make the contact straightforward.',
    },
  ],
  content: () => (
    <>
      <p>
        Most buyers spend more time researching a laptop purchase than they spend evaluating a home at a showing. They walk through the rooms, check if the kitchen feels right, and decide based on whether they can picture themselves living there.
      </p>
      <p>
        That&rsquo;s how you end up with a house you love that has a 20-year-old HVAC system, a bathroom ceiling with a stain that appeared three weeks after closing, and a drainage slope that sends water toward the foundation every time it rains.
      </p>
      <p>
        Here&rsquo;s what to actually look at.
      </p>

      <h2>Before You Go In: Exterior Walk</h2>
      <p>
        Spend 10 minutes outside before you walk through the front door. The exterior tells you more about the home&rsquo;s condition than most of the interior will.
      </p>
      <p>
        <strong>Roof.</strong> Look for missing or curling shingles, a sagging ridgeline, and moss or dark staining (signs of moisture retention). Check the gutters &mdash; are they attached, clear, and intact? Damaged gutters mean water is going somewhere it shouldn&rsquo;t.
      </p>
      <p>
        <strong>Foundation.</strong> Walk the perimeter. Look for cracks &mdash; hairline cracks are common and usually benign. Diagonal cracks running from window or door corners, or horizontal cracks in block foundations, are more concerning. Either warrants a structural engineer&rsquo;s opinion.
      </p>
      <p>
        <strong>Grading and drainage.</strong> Does the ground slope away from the house or toward it? Ground that slopes toward the foundation channels water toward the basement or crawlspace. This is one of the most common causes of moisture problems and one of the least visible in listing photos.
      </p>
      <p>
        <strong>Additions and outbuildings.</strong> Do any additions match the original structure in roofline, siding, and window style? Mismatches often signal unpermitted work. A detached garage or shed with different-quality construction deserves a question about permits.
      </p>

      <h2>Interior: Room by Room</h2>
      <p>
        Move through systematically. The goal isn&rsquo;t to memorize every detail &mdash; it&rsquo;s to flag things that need a second look.
      </p>
      <p>
        <strong>Ceilings.</strong> Look up in every room. Water stains &mdash; brown or yellow discoloration &mdash; indicate a past or active leak from above. Note the location. If it&rsquo;s under a bathroom on an upper floor, that&rsquo;s different from a stain under a roof valley. Active stains (darker edges, soft drywall) are more urgent than old ones, but both deserve an explanation.
      </p>
      <p>
        <strong>Floors.</strong> Walk the perimeter of each room. Soft spots, bouncy sections, or floors that feel uneven can indicate subfloor damage, moisture intrusion, or in older homes, structural issues. In bathrooms and kitchens specifically, soft floors near fixtures often indicate a slow leak that&rsquo;s been ongoing for a while.
      </p>
      <p>
        <strong>Windows.</strong> Open and close every window. Sticky windows are usually just worn hardware. Fogged windows &mdash; the condensation-between-panes look &mdash; means the seal has failed and the insulated glass unit needs replacement. Check the sills for rot or water damage.
      </p>
      <p>
        <strong>Walls.</strong> Run your eyes along the wall-ceiling junction. Cracks that run along this joint, especially in multiple rooms, can indicate settling or structural movement. Freshly painted walls in isolated spots in an otherwise unpainted room are worth noticing &mdash; ask what was there before.
      </p>
      <p>
        <strong>Smell.</strong> Musty smell means moisture somewhere &mdash; basement, crawlspace, or wall cavity. Strong odors of any kind (pet, smoke, chemical) are worth noting for your decision, though professional remediation can address most of them.
      </p>

      <h2>Systems: The Stuff That Actually Costs Money</h2>
      <p>
        The rooms are the emotional part of the showing. The systems are the financial part.
      </p>
      <p>
        <strong>HVAC.</strong> Find the furnace and/or air handler. Look at the label on the unit &mdash; it shows the manufacture date. Systems over 15 years old are approaching end of life. Air conditioner condensers are outside; check those too. Ask when the system was last serviced. A dirty filter is a minor thing; a unit with no service history and rust on the cabinet is not.
      </p>
      <p>
        <strong>Water heater.</strong> Same principle &mdash; find the unit and read the label. Most water heaters last 8-12 years. If it&rsquo;s a 15-year-old tank water heater, budget for replacement soon. Check for rust on the tank or fittings, and puddles on the floor nearby.
      </p>
      <p>
        <strong>Electrical panel.</strong> Open it. Breakers are modern and standard. Fuses mean older wiring that often needs replacement. Mixed-brand breakers in a single panel can be a problem &mdash; not all breakers are interchangeable and some combinations create fire hazards. If you see Federal Pacific or Zinsco on the panel door, flag it for your inspector &mdash; these brands have documented issues and are often required to be replaced for insurance.
      </p>
      <p>
        <strong>Plumbing.</strong> Turn on faucets in bathrooms and the kitchen. Check water pressure. Look under sinks for active leaks, water stains on cabinet floors, or evidence of past repairs (new pipe sections in otherwise old plumbing). Flush toilets &mdash; does the tank refill normally, or does it run?
      </p>
      <p>
        <strong>Basement or crawlspace.</strong> If accessible, go in. Look for standing water, efflorescence (white mineral deposits on concrete walls, indicating moisture migration), wood rot on the sill plate, and pest damage. A crawlspace with torn vapor barrier and standing water is a significant finding.
      </p>

      <h2>The Neighborhood Walk</h2>
      <p>
        The house exists inside a neighborhood. Spend time on the block.
      </p>
      <p>
        Drive by at different times of day &mdash; weekday morning, weekday evening, weekend. The same street can feel very different at 7am vs 10pm. Check traffic patterns on the route you&rsquo;d take to work.
      </p>
      <p>
        Walk to the nearest grocery store, pharmacy, or wherever you go regularly. How far is it really? Listings describe neighborhoods generously. Your actual commute on foot is worth testing.
      </p>
      <p>
        Check FEMA flood maps for the property&rsquo;s flood zone designation. Homes in Zone AE or similar high-risk designations require flood insurance, which can add $1,000&ndash;$3,000 or more per year to your carrying cost &mdash; and that&rsquo;s before considering actual flood risk.
      </p>

      <h2>Questions to Ask at the Showing</h2>
      <p>
        The listing agent may or may not know the answers. Ask anyway. The answers reveal things and so does the lack of them.
      </p>
      <ul className="my-6 space-y-2 pl-6 list-disc text-slate-700">
        <li>How old is the roof, and was it repaired or fully replaced?</li>
        <li>When was the HVAC last serviced? Is there a service contract?</li>
        <li>Has there been any water intrusion in the basement or crawlspace?</li>
        <li>Are all additions and renovations permitted?</li>
        <li>Why are the sellers moving?</li>
        <li>What&rsquo;s the average monthly utility cost?</li>
        <li>Are there any known HOA violations or pending assessments?</li>
      </ul>

      <h2>Taking Notes That Actually Help</h2>
      <p>
        You will see multiple homes. They blend together within 48 hours. Use the same checklist structure for every showing so you&rsquo;re comparing apples to apples. Note what you liked, what concerned you, and what you want your inspector to specifically look at if you go under contract.
      </p>
      <p>
        Photos help, but write something about each concern too. &ldquo;Stain on bathroom ceiling, southeast corner, looks old&rdquo; is more useful six days later than a photo with no context.
      </p>
      <p>
        For the full process from first showing to accepted offer, the <Link href="/blog/how-to-buy-without-agent-step-by-step">step-by-step guide to buying without an agent</Link> walks through each phase. And for everything you&rsquo;ll need to sign along the way, the <Link href="/blog/paperwork-buying-house-without-realtor">paperwork checklist</Link> has you covered.
      </p>

      <div className="bg-slate-50 border border-slate-200 rounded-lg px-6 py-6 my-8">
        <p className="font-semibold text-slate-900 mb-3">BAIRE walks you through every home evaluation &mdash; from showing to offer.</p>
        <p className="text-slate-700 mb-4">
          Paste a listing link and BAIRE analyzes comps, flags red flags, and helps you decide what to offer. $995. 7-day free trial.
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

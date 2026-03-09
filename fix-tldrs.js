#!/usr/bin/env node
/**
 * BAIRE TL;DR Fix Script
 * Run from repo root: node fix-tldrs.js
 * Replaces any broken tldr lines with backtick-wrapped versions.
 */

const fs = require('fs');
const path = require('path');

const POSTS_DIR = path.join(__dirname, 'lib', 'blog', 'posts');

const tldrs = {
  'nar-settlement-explained': `The 2024 NAR settlement changed how buyer-agent commissions work. Buyers must now sign a buyer's agreement before an agent will show them homes, committing to pay 2-3% of the purchase price \u2014 typically $10,000+ on a $400K home. This makes the cost of an agent visible and unavoidable for the first time. Buyers who purchase without an agent avoid this agreement entirely and make structurally stronger offers.`,

  'do-you-need-a-buyers-agent': `No. There is no law requiring you to use a buyer's agent. After the NAR settlement, using one means signing a buyer's agreement and paying 2-3% commission. The tasks agents perform \u2014 finding homes, scheduling showings, writing offers \u2014 don't require a license. Legal advice, inspections, and appraisals are always handled by third parties, agent or not.`,

  'how-to-buy-without-agent-step-by-step': `Buying without a buyer's agent follows the same steps: get pre-approved, search listings, schedule showings by calling the listing agent, write offers using your state's standard forms, negotiate, inspect, and close through a title company. The process is the same \u2014 you just handle communication directly and save $10,000+ in commission.`,

  'what-it-looks-like-buying-without-agent': `A real walkthrough of buying a home self-represented: calling listing agents for showings, negotiating directly with sellers, using inspection findings for price leverage, and closing through a title company. In one example, the buyer saved over $18,000 compared to the traditional route \u2014 including a price reduction, closing cost credits, and the avoided commission.`,

  'buyer-agent-isnt-free': `The buyer's agent commission was never free. It was built into the sale price and paid by the seller \u2014 which means you, the buyer, financed it as part of your mortgage. On a $400K home at 2.5%, that's $10,000 upfront and over $20,000 when financed over 30 years at current rates.`,

  'true-cost-buyer-agent-30-year-mortgage': `When the buyer-agent commission is financed as part of your mortgage, you pay interest on it for 30 years. A $10,000 commission at 6.5% interest costs over $22,700 in total payments over the life of the loan. That's the true cost of a 'free' buyer's agent.`,

  'five-things-paying-buyer-agent-12000': `Five things $12,000 in buyer-agent commission buys you \u2014 and what it doesn't. Agents can't give legal advice, can't perform inspections, can't do appraisals, and access the same MLS data you do. The $12,000 pays for convenience and communication \u2014 tasks available for a fraction of the cost.`,

  'get-everything-buyer-agent-offers-for-995': `BAIRE provides everything a buyer's agent does \u2014 comp analysis, offer strategy, negotiation coaching, inspection guidance, and closing support \u2014 for $995 instead of $10,000+. No buyer's agreement required. 7-day free trial. 30-day money-back guarantee.`,

  'first-home-feels-overwhelming': `Buying your first home feels overwhelming because you're doing something you've never done before \u2014 not because the process is actually complicated. The steps are predictable: get pre-approved, search, tour, offer, inspect, close. With the right guidance, first-time buyers navigate this process successfully every day.`,

  'what-first-time-buyers-need-to-know': `First-time buyers need to know three things: get pre-approved before you start looking, budget for costs beyond the down payment (inspection, closing costs, moving), and understand that an agent is optional \u2014 not required. The NAR settlement now requires a buyer's agreement before agents show homes, making the cost visible.`,

  'first-time-buyer-roadmap-pre-approval-to-closing': `The complete first-time buyer roadmap: (1) check credit and save for costs, (2) get pre-approved, (3) define your search criteria, (4) tour homes, (5) make an offer, (6) do your inspection, (7) get through appraisal, (8) close. Each step has a timeline, typical costs, and specific action items.`,

  'first-time-buyer-purchases-home-without-agent': `A first-time buyer purchased a home self-represented and saved over $20,000 compared to using a traditional buyer's agent \u2014 including a $4,000 price reduction, $2,500 in closing credits, and the avoided $9,125 buyer-agent commission. BAIRE provided guidance through every step for $995.`,

  'texas-buyer-agent-commissions': `Texas buyer-agent commissions average 2.5-3% of the purchase price. On the median Texas home, that's $8,000-$10,000. After the NAR settlement, Texas buyers must sign a buyer representation agreement (TREC form) before an agent shows homes. Buying without an agent in Texas avoids this cost entirely.`,

  'texas-how-to-buy-without-agent-trec': `Buying a home in Texas without an agent uses the TREC 1-4 Residential Contract, available free from the Texas Real Estate Commission. The process includes a negotiated option period (7-10 days, $100-$500 fee), a title company closing, and no attorney requirement. Texas listing agents work with self-represented buyers regularly.`,

  'texas-listing-agents-unrepresented-buyers': `Texas listing agents are required to work with unrepresented buyers under TREC rules. They cannot refuse to show a home because you don't have an agent. Many listing agents prefer working with self-represented buyers because the transaction is simpler and their seller nets more money.`,

  'texas-buy-home-smarter-995': `Texas buyers can purchase a home with BAIRE's AI-powered guidance for $995 instead of paying $8,000-$10,000 in buyer-agent commission. BAIRE provides TREC contract assistance, comp analysis, negotiation coaching, and closing support \u2014 all without a buyer representation agreement.`,
};

let fixed = 0;
let added = 0;
let errors = [];

for (const [slug, tldr] of Object.entries(tldrs)) {
  const filePath = path.join(POSTS_DIR, slug + '.tsx');

  if (!fs.existsSync(filePath)) {
    errors.push('  File not found: ' + slug + '.tsx');
    continue;
  }

  let content = fs.readFileSync(filePath, 'utf8');

  // The tldr value for the file — wrap in backticks so apostrophes just work
  const tldrLine = '  tldr: `' + tldr + '`,';

  // Check if tldr already exists (possibly broken from first script)
  if (/^\s+tldr:/m.test(content)) {
    // Replace the entire existing tldr line
    content = content.replace(/^\s+tldr:.*,$/m, tldrLine);
    fixed++;
    console.log('  fixed: ' + slug);
  } else {
    // Add after description line
    const descRegex = /^(\s+description:.*,)$/m;
    const match = content.match(descRegex);
    if (match) {
      content = content.replace(descRegex, match[1] + '\n' + tldrLine);
      added++;
      console.log('  added: ' + slug);
    } else {
      errors.push('  Could not find description in: ' + slug + '.tsx');
      continue;
    }
  }

  fs.writeFileSync(filePath, content, 'utf8');
}

console.log('');
console.log('Done. ' + fixed + ' fixed, ' + added + ' added.');

if (errors.length > 0) {
  console.log('');
  errors.forEach(function(e) { console.log(e); });
}

console.log('');
console.log('Next: commit and push. Vercel will build.');

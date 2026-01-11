# BAIRE Deployment Guide
## A Step-by-Step Guide for Complete Beginners

This guide will walk you through every single step to get BAIRE live on the internet. Follow each step in order. Don't skip ahead.

**Time needed:** About 2-3 hours for first-time setup

---

# PART 1: SET UP YOUR ACCOUNTS (Do This First)

You need 4 free accounts before we start. Let's create them one by one.

---

## Step 1: Create a GitHub Account

GitHub is where your code will live. Think of it like Google Drive, but for code.

1. Open your web browser
2. Go to: **https://github.com**
3. Click the green **"Sign up"** button
4. Enter your email address
5. Create a password (write it down somewhere safe!)
6. Choose a username (this will be public, like "johnsmith123")
7. Complete the puzzle/verification if asked
8. Check your email for a verification code
9. Enter the code on GitHub
10. Skip any optional setup questions by clicking "Skip" or "Continue"

**✓ Done!** Keep this tab open. You'll need GitHub again soon.

---

## Step 2: Create a Vercel Account

Vercel is the service that will put your website on the internet. It's free for personal projects.

1. Open a new browser tab
2. Go to: **https://vercel.com**
3. Click **"Sign Up"** (top right corner)
4. Click **"Continue with GitHub"** (the easiest option)
5. It will ask you to authorize Vercel - click **"Authorize Vercel"**
6. You might need to enter your GitHub password

**✓ Done!** Vercel is now connected to your GitHub. Keep this tab open.

---

## Step 3: Create a Stripe Account

Stripe handles payments. When customers pay $599, the money goes through Stripe to your bank.

1. Open a new browser tab
2. Go to: **https://stripe.com**
3. Click **"Start now"** or **"Sign in"** then **"Sign up"**
4. Enter your email
5. Enter your full name
6. Choose a password (write it down!)
7. Click **"Create account"**
8. Check your email and click the verification link

**Important:** For now, you'll be in "Test Mode" which means no real money. This is perfect for testing. We'll switch to real money later.

**✓ Done!** Keep this tab open.

---

## Step 4: Create an OpenAI Account

OpenAI provides the AI brain that answers customer questions.

1. Open a new browser tab
2. Go to: **https://platform.openai.com**
3. Click **"Sign up"**
4. You can sign up with Google, Microsoft, or email
5. If using email: enter your email, click continue, create password
6. Verify your phone number when asked (they'll text you a code)
7. Enter the code

**Note:** OpenAI requires adding payment info to use their API. We'll do this in a later step.

**✓ Done!** Keep this tab open.

---

# PART 2: GET YOUR SECRET KEYS

Each service gives you special passwords called "keys" or "secrets." These let your website talk to each service. **Never share these with anyone!**

---

## Step 5: Get Your OpenAI API Key

1. Go to your OpenAI tab (or go to https://platform.openai.com)
2. Click on your profile picture (top right)
3. Click **"View API keys"** or go to: https://platform.openai.com/api-keys
4. Click **"+ Create new secret key"**
5. Give it a name like "BAIRE"
6. Click **"Create secret key"**
7. **IMPORTANT:** Click the copy button next to the key. It looks like `sk-abc123...`
8. Open a text file on your computer (Notepad on Windows, TextEdit on Mac)
9. Paste the key and label it:
   ```
   OPENAI_API_KEY=sk-abc123yourfullkeyhere
   ```
10. Save this file as "BAIRE_SECRETS.txt" on your desktop

**Warning:** OpenAI only shows you this key ONCE. If you lose it, you'll have to create a new one.

### Add Payment to OpenAI (Required)

1. Still on OpenAI, click **"Settings"** (left sidebar)
2. Click **"Billing"**
3. Click **"Add payment method"**
4. Enter your credit card info
5. I recommend setting a monthly limit of $20-50 to start (each AI response costs about $0.01-0.05)

**✓ Done!** You have your OpenAI key.

---

## Step 6: Get Your Stripe Keys

1. Go to your Stripe tab (or go to https://dashboard.stripe.com)
2. **IMPORTANT:** Look at the top right. Make sure it says **"Test mode"** with a toggle switch. If it says "Live", click the toggle to switch to Test mode.
3. Click **"Developers"** (top right, near your profile)
4. Click **"API keys"** (in the left sidebar)
5. You'll see two keys:
   - **Publishable key** - starts with `pk_test_`
   - **Secret key** - click "Reveal" to see it, starts with `sk_test_`

6. Copy each one and add to your BAIRE_SECRETS.txt file:
   ```
   OPENAI_API_KEY=sk-abc123yourfullkeyhere
   STRIPE_SECRET_KEY=sk_test_yourstripesecrect
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_yourstripepublishable
   ```

**✓ Done!** You have your Stripe keys.

---

## Step 7: Create a JWT Secret

This is a random password that keeps user logins secure. You'll create it yourself.

1. Go to: **https://generate-secret.vercel.app/32**
2. You'll see a random string of letters and numbers
3. Copy it
4. Add to your BAIRE_SECRETS.txt file:
   ```
   JWT_SECRET=theRandomStringYouJustCopied
   ```

**✓ Done!** Your secrets file should now look like this:
```
OPENAI_API_KEY=sk-abc123...
STRIPE_SECRET_KEY=sk_test_abc123...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_abc123...
JWT_SECRET=randomstring123...
```

---

# PART 3: UPLOAD YOUR CODE TO GITHUB

Now we'll put the BAIRE code on GitHub so Vercel can access it.

---

## Step 8: Download the BAIRE Code

1. You should have received a folder called "baire" with all the code
2. Find this folder on your computer
3. Make sure you can see files inside it like:
   - `package.json`
   - `README.md`
   - A folder called `app`
   - A folder called `components`

If you don't have this folder, go back to our conversation and download it.

---

## Step 9: Create a New Repository on GitHub

A "repository" (or "repo") is like a folder on GitHub.

1. Go to GitHub (https://github.com)
2. Click the **"+"** icon (top right, near your profile picture)
3. Click **"New repository"**
4. Fill in:
   - **Repository name:** `baire`
   - **Description:** `AI Home Buying Consultant`
   - Select **"Private"** (keeps your code private)
   - **DO NOT** check "Add a README file"
   - **DO NOT** check "Add .gitignore"
5. Click **"Create repository"**

You'll see a page with instructions. Keep this page open!

---

## Step 10: Install GitHub Desktop (The Easy Way)

Instead of using complicated commands, we'll use a simple app.

1. Go to: **https://desktop.github.com**
2. Click **"Download for Windows"** or **"Download for Mac"**
3. Open the downloaded file and install it
4. Open GitHub Desktop
5. Sign in with your GitHub account
6. It might ask to configure Git - just use your GitHub username and email

---

## Step 11: Upload Your Code Using GitHub Desktop

1. In GitHub Desktop, click **"File"** (top menu)
2. Click **"Add Local Repository"**
3. Click **"Choose..."** and find your `baire` folder
4. You'll see a message saying "This directory does not appear to be a Git repository"
5. Click **"create a repository"** link
6. In the popup:
   - Name should be `baire`
   - Leave other settings as default
   - Click **"Create Repository"**

Now let's connect it to GitHub:

7. Click **"Publish repository"** (top right button)
8. **Uncheck** "Keep this code private" if you want (or keep it checked for private)
9. Click **"Publish Repository"**

**✓ Done!** Your code is now on GitHub!

---

# PART 4: DEPLOY TO VERCEL

This is where the magic happens - your website goes live!

---

## Step 12: Import Your Project to Vercel

1. Go to Vercel (https://vercel.com)
2. Click your profile icon, then **"Dashboard"**
3. Click **"Add New..."** button
4. Click **"Project"**
5. You should see your `baire` repository in the list
6. Click **"Import"** next to it

---

## Step 13: Add Your Secret Keys to Vercel

Before deploying, we need to add those secret keys.

1. On the import page, look for **"Environment Variables"** section
2. Click to expand it
3. Add each secret one at a time:

**First variable:**
- Name: `OPENAI_API_KEY`
- Value: (paste your OpenAI key from BAIRE_SECRETS.txt)
- Click **"Add"**

**Second variable:**
- Name: `STRIPE_SECRET_KEY`
- Value: (paste your Stripe secret key)
- Click **"Add"**

**Third variable:**
- Name: `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
- Value: (paste your Stripe publishable key)
- Click **"Add"**

**Fourth variable:**
- Name: `JWT_SECRET`
- Value: (paste your JWT secret)
- Click **"Add"**

**Fifth variable:**
- Name: `APP_BASE_URL`
- Value: `https://baire.vercel.app` (we'll update this later with your real domain)
- Click **"Add"**

---

## Step 14: Deploy!

1. Double-check all 5 environment variables are added
2. Click **"Deploy"**
3. Wait... this takes 2-5 minutes
4. You'll see a build log running (lots of text scrolling)
5. When it's done, you'll see "Congratulations!" with confetti 🎉

**✓ Your website is now live!**

Click the preview image or the link to see your website!

Your temporary URL will be something like: `https://baire-abc123.vercel.app`

---

# PART 5: SET UP STRIPE WEBHOOKS

Webhooks tell your website when someone pays. Without this, payments won't work!

---

## Step 15: Create a Stripe Webhook

1. Go to Stripe Dashboard (https://dashboard.stripe.com)
2. Make sure you're still in **Test mode**
3. Click **"Developers"** (top right)
4. Click **"Webhooks"** (left sidebar)
5. Click **"+ Add endpoint"**
6. In **"Endpoint URL"**, enter your Vercel URL + `/api/stripe-webhook`
   - Example: `https://baire-abc123.vercel.app/api/stripe-webhook`
   - Use YOUR actual Vercel URL from Step 14!
7. Click **"+ Select events"**
8. Search for and check these events:
   - `checkout.session.completed`
   - `payment_intent.succeeded`
   - `payment_intent.payment_failed`
9. Click **"Add events"**
10. Click **"Add endpoint"**

---

## Step 16: Get Your Webhook Secret

1. On the webhook page, click on the endpoint you just created
2. Under **"Signing secret"**, click **"Reveal"**
3. Copy this secret (starts with `whsec_`)
4. Add it to your BAIRE_SECRETS.txt:
   ```
   STRIPE_WEBHOOK_SECRET=whsec_yoursecret
   ```

---

## Step 17: Add Webhook Secret to Vercel

1. Go to Vercel Dashboard
2. Click on your `baire` project
3. Click **"Settings"** (top tab)
4. Click **"Environment Variables"** (left sidebar)
5. Click **"Add New"**
6. Name: `STRIPE_WEBHOOK_SECRET`
7. Value: (paste your webhook secret)
8. Click **"Save"**

---

## Step 18: Redeploy to Apply Changes

When you change environment variables, you need to redeploy:

1. Still in Vercel, click **"Deployments"** (top tab)
2. Find the most recent deployment
3. Click the **"..."** menu on the right
4. Click **"Redeploy"**
5. Click **"Redeploy"** again to confirm
6. Wait 2-3 minutes for it to finish

---

# PART 6: TEST EVERYTHING

Before using real money, let's make sure everything works!

---

## Step 19: Test the Website

1. Go to your Vercel URL (like `https://baire-abc123.vercel.app`)
2. Click around - check that all pages load:
   - Home page
   - Pricing page
   - Terms, Privacy, Disclaimer pages
3. Click **"Try Free"** to test the chat:
   - Type a question like "What is earnest money?"
   - You should get an AI response
   - Try 5 questions to test the trial limit

---

## Step 20: Test the Payment Flow

1. Go to the Pricing page
2. Click **"Get Started"**
3. You should be redirected to a Stripe checkout page
4. Use this TEST credit card:
   - Card number: `4242 4242 4242 4242`
   - Expiry: Any future date (like `12/34`)
   - CVC: Any 3 numbers (like `123`)
   - ZIP: Any 5 numbers (like `12345`)
5. Click **"Pay"**
6. You should be redirected to the Access page
7. Click to go to the Consultant
8. You should now have full access (no trial limits!)

---

## Step 21: Test the Closing Flow

1. In the Consultant, click **"I've Closed My Home"**
2. Confirm in the popup
3. You should see a congratulations message
4. You should be redirected to the home page
5. Going back to `/consultant` should show you as a trial user again

**If all tests pass, your website is working! 🎉**

---

# PART 7: CONNECT YOUR DOMAIN (Optional but Recommended)

Right now your site is at `baire-abc123.vercel.app`. Let's connect your real domain.

---

## Step 22: Add Your Domain to Vercel

1. Go to Vercel Dashboard
2. Click your `baire` project
3. Click **"Settings"**
4. Click **"Domains"** (left sidebar)
5. Type your domain (like `baire.ai` or `www.yourdomain.com`)
6. Click **"Add"**
7. Vercel will show you DNS records you need to add

Write down these values! You'll see something like:
- A Record: `76.76.21.21`
- Or a CNAME for www: `cname.vercel-dns.com`

---

## Step 23: Update DNS in Squarespace

1. Log into Squarespace
2. Go to **Settings** → **Domains**
3. Click on your domain
4. Click **"DNS Settings"** or **"Advanced Settings"**
5. You might need to click **"Use Squarespace's nameservers"** first

Add these records:

**For your main domain (like baire.ai):**
1. Click **"Add Record"**
2. Type: **A**
3. Host: **@**
4. Data/Points to: **76.76.21.21**
5. TTL: Leave as default
6. Click **"Add"**

**For www (like www.baire.ai):**
1. Click **"Add Record"**
2. Type: **CNAME**
3. Host: **www**
4. Data/Points to: **cname.vercel-dns.com**
5. Click **"Add"**

---

## Step 24: Wait for DNS to Update

This is the boring part. DNS changes can take:
- As fast as 5 minutes
- As slow as 48 hours
- Usually about 1-2 hours

You can check if it's working by:
1. Going back to Vercel → Settings → Domains
2. Looking for a green checkmark next to your domain
3. Or just trying to visit your domain in a browser

---

## Step 25: Update Your Environment Variables

Once your domain is connected, update the APP_BASE_URL:

1. Go to Vercel → Settings → Environment Variables
2. Find `APP_BASE_URL`
3. Click the edit (pencil) icon
4. Change it to your domain: `https://yourdomain.com`
5. Click **"Save"**
6. Redeploy (go to Deployments → ... → Redeploy)

---

## Step 26: Update Stripe Webhook

You need to update Stripe to use your new domain:

1. Go to Stripe Dashboard → Developers → Webhooks
2. Click on your existing webhook
3. Click **"... "** → **"Update details"**
4. Change the URL to: `https://yourdomain.com/api/stripe-webhook`
5. Click **"Update endpoint"**

---

# PART 8: GO LIVE WITH REAL PAYMENTS

When you're ready to accept real money (not test payments):

---

## Step 27: Activate Your Stripe Account

1. Go to Stripe Dashboard
2. Click on **"Activate your account"** or look for a banner about completing setup
3. You'll need to provide:
   - Your legal business name (or your name if sole proprietor)
   - Your address
   - Your Social Security Number or EIN
   - Bank account for deposits
4. Complete all verification steps
5. This can take 1-3 days for Stripe to verify

---

## Step 28: Get Live Stripe Keys

Once verified:

1. Go to Stripe Dashboard
2. Click the **"Test mode"** toggle to switch to **"Live mode"**
3. Go to Developers → API Keys
4. Copy your new LIVE keys:
   - `pk_live_...` (publishable)
   - `sk_live_...` (secret)

---

## Step 29: Create Live Webhook

1. Still in Live mode, go to Developers → Webhooks
2. Create a new webhook (same steps as before)
3. URL: `https://yourdomain.com/api/stripe-webhook`
4. Same events as before
5. Copy the new webhook secret (`whsec_...`)

---

## Step 30: Update Vercel with Live Keys

1. Go to Vercel → Settings → Environment Variables
2. Update these variables with your LIVE values:
   - `STRIPE_SECRET_KEY` → your `sk_live_...` key
   - `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` → your `pk_live_...` key
   - `STRIPE_WEBHOOK_SECRET` → your new live webhook secret
3. Redeploy

**⚠️ IMPORTANT: After this step, you'll be charging real credit cards!**

---

# PART 9: FINAL CHECKLIST

Before telling anyone about your site, verify:

## Must Work:
- [ ] Home page loads
- [ ] Pricing page loads
- [ ] Can complete a test payment (use test mode first!)
- [ ] After payment, redirects to Access page
- [ ] Chat works and AI responds
- [ ] "I've Closed My Home" button works
- [ ] Free trial limits work (only 5 free questions)

## Nice to Have:
- [ ] Custom domain connected
- [ ] SSL certificate active (shows padlock in browser)
- [ ] All legal pages have content

## Before Going Live:
- [ ] Stripe account fully verified
- [ ] Live keys are in Vercel
- [ ] Live webhook is set up
- [ ] Test one more payment in live mode with a real card (you can refund yourself!)

---

# TROUBLESHOOTING COMMON PROBLEMS

## "Payment didn't work"
- Check that all Stripe environment variables are correct
- Make sure webhook secret is added to Vercel
- Check webhook URL is exactly right (no typos)
- Redeploy after adding variables

## "AI chat doesn't respond"
- Check OpenAI API key is correct
- Make sure OpenAI has valid payment method
- Check you haven't hit your OpenAI spending limit

## "Website won't load"
- Wait a few minutes after deploying
- Check Vercel deployment logs for errors
- Make sure all environment variables are added

## "Domain doesn't work"
- DNS can take up to 48 hours
- Double-check A record points to `76.76.21.21`
- Make sure you saved the DNS changes in Squarespace

## "I'm stuck"
- Read error messages carefully - they often tell you what's wrong
- Check Vercel deployment logs (Deployments → click on deployment → see logs)
- Check Stripe webhook logs (Developers → Webhooks → click endpoint → see events)

---

# COSTS TO EXPECT

## Monthly Costs (Approximate):
- **Vercel**: Free for personal projects
- **OpenAI**: $5-50/month depending on usage (each query costs ~$0.01-0.05)
- **Stripe**: No monthly fee, just 2.9% + $0.30 per transaction
- **Domain**: $10-20/year (you may already have this)

## Per Transaction:
- Customer pays: $599
- Stripe fee: ~$17.67 (2.9% + $0.30)
- You receive: ~$581.33

---

# YOU DID IT! 🎉

Your BAIRE website is now live and ready to help home buyers!

**Next steps:**
1. Tell people about your site
2. Monitor your Stripe dashboard for payments
3. Check Vercel analytics for visitors
4. Keep your OpenAI account funded

**Keep your BAIRE_SECRETS.txt file safe and backed up!**

---

*If you need to make changes to the website in the future, edit the code in your `baire` folder, then use GitHub Desktop to "commit" and "push" the changes. Vercel will automatically deploy the updates.*

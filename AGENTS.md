# AGENTS.md — wirig.ai Website V2

## Brand Kit
- **Fonts:** Sora (headings/display, weights 300/400/600/700) + DM Sans (body, weights 400/500/700)
- **Google Fonts import:** https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Sora:wght@300;400;600;700&display=swap
- **Colors:**
  - Navy (primary dark): #0A1628
  - Deep Blue: #0F2847
  - Teal Primary: #00B4D8
  - Teal Light: #48CAE4
  - Teal Accent: #90E0EF
  - Ice: #CAF0F8
  - White: #FFFFFF
  - Gray 100: #F4F7FA
  - Gray 300: #C5CDD8
  - Gray 500: #6B7A8D
  - Gray 700: #2E3A4D
- **Logo:** SVG at public/wirig-logo.svg (W mark + "wirig.ai" wordmark)
- **Name convention:** Always lowercase "wirig.ai" — never WIRIG.AI or Wirig AI
- **Full brand reference:** BRAND-KIT.html

## Logo SVG (inline use)
```svg
<!-- Dark background version -->
<svg width="300" height="64" viewBox="0 0 300 64" fill="none">
  <g><path d="M4 16L16 48L28 24L40 48L52 16" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><circle cx="4" cy="16" r="3.5" fill="#00B4D8"/><circle cx="28" cy="24" r="3.5" fill="#00B4D8"/><circle cx="52" cy="16" r="3.5" fill="#00B4D8"/><line x1="4" y1="16" x2="52" y2="16" stroke="#00B4D8" stroke-width="1" opacity="0.3"/><line x1="28" y1="24" x2="4" y2="16" stroke="#00B4D8" stroke-width="1" opacity="0.2"/><line x1="28" y1="24" x2="52" y2="16" stroke="#00B4D8" stroke-width="1" opacity="0.2"/></g>
  <text x="72" y="44" font-family="Sora, sans-serif" font-size="36" letter-spacing="-0.5"><tspan font-weight="700" fill="#FFFFFF">wirig</tspan><tspan font-weight="700" fill="#00B4D8">.</tspan><tspan font-weight="300" fill="#00B4D8">ai</tspan></text>
</svg>

<!-- Light background version -->
<svg width="300" height="64" viewBox="0 0 300 64" fill="none">
  <g><path d="M4 16L16 48L28 24L40 48L52 16" stroke="#0A1628" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><circle cx="4" cy="16" r="3.5" fill="#00B4D8"/><circle cx="28" cy="24" r="3.5" fill="#00B4D8"/><circle cx="52" cy="16" r="3.5" fill="#00B4D8"/><line x1="4" y1="16" x2="52" y2="16" stroke="#00B4D8" stroke-width="1" opacity="0.2"/><line x1="28" y1="24" x2="4" y2="16" stroke="#00B4D8" stroke-width="1" opacity="0.15"/><line x1="28" y1="24" x2="52" y2="16" stroke="#00B4D8" stroke-width="1" opacity="0.15"/></g>
  <text x="72" y="44" font-family="Sora, sans-serif" font-size="36" letter-spacing="-0.5"><tspan font-weight="700" fill="#0A1628">wirig</tspan><tspan font-weight="700" fill="#00B4D8">.</tspan><tspan font-weight="300" fill="#00B4D8">ai</tspan></text>
</svg>
```

## TASK: Rebuild the entire site with the following changes

Keep all existing brand colors, fonts, and logo usage. But completely rewrite the content, structure, and conversion flow. This is V2 — it needs to be significantly better than V1.

### New Site Structure

The site is a single-page Next.js app with these sections in order:

---

#### 1. NAVIGATION (fixed top)
- Logo (dark bg SVG) on left
- Links: Services, How It Works, Results (smooth scroll)
- Primary CTA button: "Get Your Free AI Audit" (teal bg, navy text, links to #audit)
- Mobile: hamburger menu with slide-out nav

---

#### 2. HERO SECTION
- Dark navy gradient background with subtle grid pattern (keep existing style)
- Small badge/pill at top: "Trusted by businesses across Utah" (teal border, subtle)
- **Headline:** "Your Business Is Losing Money Every Hour It Runs Without AI"
- **Subheadline:** "We build custom AI systems that answer your phones, qualify your leads, and automate your operations — so you can scale without hiring."
- **Primary CTA:** "Get Your Free AI Audit →" (large teal button, links to #audit)
- **Secondary CTA:** "See How It Works" (ghost/outline button, scrolls to #how-it-works)
- Below CTAs: small social proof line: "Join 10+ businesses already automating with wirig.ai" (with small avatar circles or teal dots)

---

#### 3. PROBLEM SECTION (light bg — Gray 100 #F4F7FA)
- Section label: "THE PROBLEM" (teal, uppercase, small, tracked)
- **Headline:** "You're working harder than you need to."
- Three problem cards in a row (navy bg, teal icon accent):
  1. 📞 "Missed Calls = Missed Revenue" — "Every unanswered call is a potential client going to your competitor. The average business misses 40% of inbound calls."
  2. ⏰ "Manual Follow-ups Burn Hours" — "Your team spends hours on repetitive tasks that AI can handle in seconds. That's time you're paying for with zero ROI."
  3. 📉 "Leads Go Cold While You Sleep" — "Without 24/7 automated engagement, hot leads cool off overnight. By morning, they've already moved on."

---

#### 4. SERVICES SECTION (dark bg — Navy)
- Section label: "WHAT WE BUILD" (teal)
- **Headline:** "AI Systems That Pay for Themselves"
- **Subheadline:** "Every solution we build is designed to generate more revenue than it costs — usually within the first month."
- 5 service cards (dark cards with subtle teal border/glow on hover):
  1. **AI Voice Receptionists** — "Never miss another call. Our AI answers your phone 24/7, qualifies callers, books appointments, and routes urgent calls to you — in a natural, human-like voice." — Icon: phone with wave
  2. **AI Chatbots & Sales Agents** — "Turn your website into a 24/7 sales machine. Our chatbots engage visitors, answer questions, qualify leads, and book meetings — all while you sleep." — Icon: chat bubble with AI spark
  3. **Workflow Automation** — "Eliminate the repetitive tasks draining your team. We connect your tools, automate your processes, and free up hours every week." — Icon: lightning bolt / gear
  4. **Lead Generation Funnels** — "Smart funnels that don't just capture leads — they qualify them. Know exactly who's ready to buy before you ever pick up the phone." — Icon: funnel with filter
  5. **CRM Integration** — "Your CRM should work for you, not the other way around. We set up and optimize GoHighLevel, HubSpot, or custom systems so nothing falls through the cracks." — Icon: connected nodes
- Each card should have a subtle "Learn more →" link (doesn't need to go anywhere yet)

---

#### 5. HOW IT WORKS (light bg)
- Section label: "HOW IT WORKS" (teal)
- **Headline:** "From First Call to Fully Automated in 14 Days"
- 3 steps in a horizontal flow (with connecting line/arrow between them):
  1. **Step 1: Free AI Audit** — "We analyze your business operations, identify automation opportunities, and show you exactly how much time and money you're leaving on the table." — CTA: takes 15 minutes
  2. **Step 2: Custom Build** — "We design and build your AI systems from scratch — tailored to your business, your tools, and your workflow. No templates, no cookie-cutter solutions."
  3. **Step 3: Launch & Scale** — "We deploy, test, and optimize everything. Then we stick around to make sure it keeps performing. Most clients see ROI within the first 30 days."

---

#### 6. RESULTS SECTION (dark bg with gradient)
- Section label: "RESULTS" (teal)
- **Headline:** "The Numbers Speak for Themselves"
- 4 stat cards in a row with large gradient teal numbers:
  - "40%" → "of calls missed by the average business — ours miss zero"
  - "14 days" → "average time from kickoff to fully deployed AI system"
  - "$3,200" → "average monthly savings per client from automation"
  - "24/7" → "your AI works around the clock — no sick days, no breaks"
- Below stats: 2 testimonial cards (placeholder for now but make them look real):
  - Card 1: "wirig.ai built us an AI receptionist that handles 80% of our inbound calls. We've saved over 20 hours a week." — Name: "Coming soon" — Title: "Business Owner, Provo UT"
  - Card 2: "The automation workflows they built have completely transformed how we handle leads. Nothing falls through the cracks anymore." — Name: "Coming soon" — Title: "Clinic Manager"

---

#### 7. AI AUDIT QUIZ FUNNEL (id="audit", light bg)
This is the MOST IMPORTANT section. It's a multi-step quiz that replaces the old "Book a Call" CTA.

- Section label: "FREE AI AUDIT" (teal)
- **Headline:** "See How Much Your Business Could Save with AI"
- **Subheadline:** "Answer 4 quick questions and we'll show you exactly where AI can save you time and money."

**Quiz Steps** (Typeform-style — one question at a time, smooth transitions, progress bar at top):

**Step 1:** "What type of business do you run?"
- Options (clickable cards, not a dropdown): Medical/Dental Clinic | Med Spa / Aesthetics | Real Estate | Professional Services | Home Services | Other

**Step 2:** "What's your biggest bottleneck right now?"
- Options: Missing phone calls & leads | Manual follow-ups eating my time | No system for qualifying leads | Customer support is overwhelming | I need help with all of the above

**Step 3:** "How many leads or calls does your business get per month?"
- Options: Less than 50 | 50–200 | 200–500 | 500+

**Step 4:** "What's your approximate monthly revenue?"
- Options: Under $10K | $10K–$50K | $50K–$200K | $200K+

**Step 5: Contact Info**
- Headline: "Almost done! Where should we send your AI audit?"
- Fields: Name (text), Email (email), Phone (tel)
- Submit button: "Get My Free AI Audit →"
- Small text: "We'll review your answers and send a personalized automation plan within 24 hours."

**After Submit — Results Screen:**
- Show a "Thank You" state with:
  - "🎉 Your AI audit request is in!"
  - Dynamic text based on their answers (doesn't need to be smart yet, just acknowledge):
    - If they selected "Missing phone calls" → "Based on your answers, an AI Voice Receptionist could save you an estimated $2,000–$5,000/month in missed opportunities."
    - Default: "We'll analyze your business and send you a custom automation plan within 24 hours."
  - "Want faster results? Book a free 15-minute consultation now:" 
  - Button that links to booking (placeholder #book for now)

**Technical requirements for the quiz:**
- Use React state to track current step and answers
- Smooth fade/slide transitions between steps
- Progress bar showing step X of 5
- Form data should POST to `/api/audit` (create a simple Next.js API route that returns success for now — we'll wire it to n8n later)
- Mobile-friendly — cards should stack on small screens
- Keyboard accessible

---

#### 8. FINAL CTA SECTION (dark bg, gradient accent)
- **Headline:** "Stop Losing Money to Manual Work"
- **Subheadline:** "Every day without AI automation is another day of missed calls, cold leads, and wasted hours."
- CTA: "Get Your Free AI Audit →" (links back to #audit)

---

#### 9. FOOTER (very dark bg)
- Logo (dark bg version)
- Links: Services | How It Works | Results | AI Audit
- Contact: carter@wirig.ai
- Copyright: © 2026 wirig.ai — All rights reserved.
- Small text: "Provo, Utah"

---

### Design Requirements
- Use next/font/google for Sora and DM Sans
- Tailwind CSS for all styling
- All brand colors defined in tailwind.config
- Mobile-first responsive
- Smooth scroll behavior (CSS scroll-behavior: smooth)
- No external images — SVG icons only (create simple, clean SVG icons for each service)
- Subtle animations: fade-in on scroll for sections (use CSS @keyframes + Intersection Observer or simple opacity transitions)
- The quiz section is the conversion centerpiece — it should feel premium and interactive
- Dark/light section alternation for visual rhythm
- Consistent spacing: sections should have generous padding (py-24 md:py-32)

### Quality Bar
- This is a real agency. The site should be indistinguishable from a well-funded startup's marketing site.
- Study: linear.app, vercel.com, stripe.com for design quality reference
- No generic Bootstrap/template energy. Every element should feel intentional.
- Performance: should score 90+ on Lighthouse

### After Building
1. Run `npm run build` to verify compilation
2. Run `git add -A && git commit -m "v2: complete site rebuild with quiz funnel" && git push`

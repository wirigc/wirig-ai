# AGENTS.md — wirig.ai Website Build

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

## What to Build

### Site Structure
Single-page marketing site with these sections (all on one page, smooth scroll):

1. **Hero** — Dark navy gradient background. Headline: "AI Systems That Work While You Sleep". Subtext about automating business operations. CTA button: "Book a Free Consultation". Subtle animated grid/network pattern in background.

2. **Services** — 5 service cards with icons:
   - AI Chatbots & Sales Agents — 24/7 lead qualification and customer support
   - AI Voice Receptionists — Never miss a call, AI answers and books appointments
   - Workflow Automation — n8n + custom integrations to eliminate manual tasks
   - Lead Generation Funnels — Smart funnels that qualify and convert
   - CRM Integration — GoHighLevel, HubSpot, custom setups

3. **How It Works** — 3 steps: Discovery Call → Custom Build → Launch & Scale

4. **Results/Social Proof** — Stats section (placeholder numbers for now): "10x Faster", "80% Cost Reduction", "24/7 Uptime". Testimonial placeholder cards.

5. **CTA Section** — "Ready to Automate Your Business?" with booking button

6. **Footer** — wirig.ai logo, links, contact email (carter@wirig.ai), copyright 2026

### Technical Requirements
- Next.js App Router with TypeScript
- Tailwind CSS for styling
- Google Fonts: Sora + DM Sans (load via next/font/google)
- Mobile-first responsive design
- Smooth scroll navigation
- All content on a single page (no routing needed yet)
- Clean, modern, professional design — think Linear, Vercel, Stripe quality
- NO placeholder images — use SVG illustrations/icons or CSS patterns
- Booking CTA buttons should link to "#book" for now (we'll add GHL calendar later)

### Quality Bar
- This is for a real business. It needs to look professional enough that a business owner seeing it thinks "these people know what they're doing"
- No generic template vibes. Custom, intentional, polished.
- Fast loading — no heavy assets
- Accessible — proper semantic HTML, contrast ratios, alt text

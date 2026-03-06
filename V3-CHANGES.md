# V3 Changes — Apply These to the Current Site

Read page.tsx, layout.tsx, globals.css, and any components. Then make ALL of these changes:

## 1. LIGHT MODE — White Background Throughout
- The ENTIRE site should be light mode with a white (#FFFFFF) or off-white (#F4F7FA) background
- NO dark navy sections. Remove all dark backgrounds from content sections
- The only dark element should be the footer (Navy #0A1628)
- Navigation should be white/translucent with navy text
- All text should be navy (#0A1628) or gray (#6B7A8D) on light backgrounds
- Service cards: white cards with subtle gray border/shadow on light bg
- Problem cards: white or ice (#CAF0F8) bg, not dark navy
- Results/stats: teal (#00B4D8) numbers on white bg
- Quiz section: white bg, clean card selections
- CTA sections: use Ice (#CAF0F8) or very light teal tint as accent bg, NOT navy
- The hero can use a very subtle gradient (white to ice) but NOT dark navy
- Hero text should be navy colored on light bg
- Overall feel: clean, bright, professional — like a modern SaaS landing page (think Notion, Linear light mode, Stripe)

## 2. HUMANIZE ALL TEXT — Remove Em Dashes
- Replace ALL em dashes (—) with periods, commas, or restructured sentences
- Go through EVERY piece of text on the site
- Make the writing sound natural and conversational, not AI-generated
- Avoid: em dashes, "Furthermore", "Moreover", "In today's", "leverage", "cutting-edge"
- Keep it punchy and direct
- Example fix: "qualifies callers, books appointments, and routes urgent calls to you — in a natural, human-like voice" → "qualifies callers, books appointments, and routes urgent calls to you. It sounds completely natural and human."

## 3. QUIZ LEADS TO CALENDAR BOOKING
- After the quiz thank-you screen, instead of a placeholder button, show an embedded calendar booking
- For now, add a prominent "Book Your Free AI Audit Call" button that opens a GHL booking link in a new tab
- The booking URL placeholder should be: https://api.leadconnectorhq.com/widget/booking/PLACEHOLDER
- Add a note in the code: // TODO: Replace PLACEHOLDER with actual GHL calendar widget ID
- The results screen should emphasize booking: "We've got your info! Let's set up a quick 15-minute call to walk through your custom AI audit."

## 4. COLOR CONSISTENCY
- Primary accent: Teal #00B4D8 (buttons, links, highlights, icons)
- Text: Navy #0A1628 (headings), Gray 500 #6B7A8D (body), Gray 700 #2E3A4D (subheadings)
- Backgrounds: White #FFFFFF (primary), Gray 100 #F4F7FA (alternating sections), Ice #CAF0F8 (accent sections/CTA)
- Cards: White with subtle border (gray-200 or gray-100) and shadow
- Buttons primary: Teal bg (#00B4D8), white text
- Buttons secondary: White bg, teal border, teal text
- Navigation: White bg with subtle bottom border, navy text, teal CTA button
- Footer only: Navy bg (#0A1628), white/gray text, teal accents

## After changes
1. Run `npm run build` to verify
2. Run `git add -A && git commit -m "v3: light mode, humanized copy, calendar booking" && git push`

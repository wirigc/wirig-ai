# V4 Quick Fixes

Read all source files (page.tsx, any components, globals.css, layout.tsx) and apply these fixes:

## 1. Remove "Coming soon" testimonials
- Remove the entire testimonials section (the two quote cards with "Coming soon" names)
- OR replace with a simple line like "Trusted by businesses across Utah" without fake testimonial cards
- Do NOT show placeholder testimonials. An empty slot is worse than no slot.

## 2. Remove "Join 5+ businesses" social proof line
- Delete the "Join 5+ businesses already automating with wirig.ai" text from the hero
- The number is too low and hurts credibility. Remove it entirely.

## 3. Fix unbalanced service cards grid
- The services section has 5 cards: 3 on top row, 2 on bottom row (left-aligned)
- Fix: Center the bottom 2 cards, OR make the grid responsive so it looks intentional
- On desktop: use a layout where 5 cards look balanced (e.g., 3+2 centered, or 2+3, or a different grid approach)
- On mobile: stack them all single column (should already work)

## 4. Increase body text size and contrast
- Body/paragraph text should be at least text-base (16px), NOT text-sm (14px)
- Darken body text color: use #2E3A4D (Gray 700) instead of #6B7A8D (Gray 500) for paragraph text
- Section descriptions/subtitles can stay lighter (#6B7A8D) but card descriptions and main body text should be darker
- Make sure all text passes WCAG AA contrast (4.5:1 minimum)

## 5. Clean up section dividers
- Remove any thin gray horizontal rule/divider lines between sections
- Use background color changes and whitespace to separate sections instead (the light/white alternation should be enough)

## After changes
1. Run `npm run build` to verify
2. Run `git add -A && git commit -m "v4: remove placeholder testimonials, fix grid, improve text contrast" && git push`

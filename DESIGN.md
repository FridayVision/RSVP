---
name: DnA — Derin & Akshita
description: A three-ink risograph keepsake for a wedding that joins Chennai, Singapore and Malaysia.
colors:
  saree-teal: "#00838A"
  saree-teal-deep: "#005F66"
  silk-maroon: "#7A1B2E"
  zari-gold: "#B8941F"
  warm-cream: "#FDF6EC"
  print-white: "#FFFCF7"
  night-stock: "#0E1E26"
  gold-on-stock: "#CDAE4F"
  rose-on-stock: "#C4707E"
  teal-on-stock: "#3AA3A9"
  ink-text: "#1F3A3C"
  ink-muted: "#5A6B6C"
typography:
  display:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "clamp(2.5rem, 9.5vw, 6rem)"
    fontWeight: 600
    lineHeight: 1.08
    letterSpacing: "-0.015em"
  headline:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "clamp(1.8rem, 3.6vw, 2.4rem)"
    fontWeight: 600
    lineHeight: 1.15
  lede:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "clamp(1.15rem, 2.4vw, 1.45rem)"
    fontWeight: 400
    lineHeight: 1.45
  title:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "1.6rem"
    fontWeight: 600
    lineHeight: 1.2
  body:
    fontFamily: "Jost, system-ui, sans-serif"
    fontSize: "15.5px"
    fontWeight: 300
    lineHeight: 1.75
  label:
    fontFamily: "Jost, system-ui, sans-serif"
    fontSize: "12px"
    fontWeight: 500
    letterSpacing: "0.16em"
rounded:
  none: "0px"
  photo: "4px"
  pill: "999px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "40px"
  xl: "64px"
  2xl: "104px"
components:
  button-primary:
    backgroundColor: "{colors.saree-teal-deep}"
    textColor: "{colors.warm-cream}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "16px 34px"
  chip-choice:
    backgroundColor: "{colors.warm-cream}"
    textColor: "{colors.saree-teal-deep}"
    rounded: "{rounded.pill}"
    padding: "10px 22px"
  chip-choice-selected:
    backgroundColor: "{colors.saree-teal-deep}"
    textColor: "{colors.warm-cream}"
    rounded: "{rounded.pill}"
    padding: "10px 22px"
  input-line:
    backgroundColor: "transparent"
    textColor: "{colors.ink-text}"
    rounded: "{rounded.none}"
    padding: "10px 2px"
  photo-print:
    backgroundColor: "{colors.print-white}"
    rounded: "{rounded.none}"
    padding: "12px 12px 40px"
---

# Design System: DnA — Derin & Akshita

## Overview

**Creative North Star: "The Three-Pass Print"**

The site is a risograph keepsake. Every surface behaves as if it came off a riso drum in three passes of spot ink on warm cream stock: teal, maroon and gold. Colour is never mixed on screen; it is overprinted, so overlaps produce new tones (teal over gold reads palm green, maroon over gold reads sunset). The plates sit a hair out of register, and that drift is the signature, not a flaw.

The inks are taken from the couple themselves: the teal of Akshita's silk saree, the zari gold of Derin's veshti border, the maroon of a shared everyday tee. Illustration is flat, shape-built and slightly naive, drawn from three places: Chennai (Besant Nagar shore, lighthouse, coconut palms, the auto), Singapore (shophouse rows with five-foot-way arches, the Marina Bay skyline, a Supertree) and Malaysia (kampung house on stilts, hibiscus). Their story, best friends from school who became partners, is carried by two paper-plane trails that braid into a double helix: DnA.

Density is airy and editorial. One composed scene per view, generous cream margins, a single-column reading line. The Western and South Indian ceremony pages are the same print run with a different lead ink, never a different design system.

The page alternates two paper stocks, like an invitation suite. **Night stock** (deep saree-navy) carries the cover, the countdown and the footer: modern-classic and quiet, with gold and cream inks, a DnA monogram, engraved rings and printer's registration marks. **Warm cream stock** carries the story, the riso scene, the gatefold invitation and the RSVP card. The contrast between the two is the page's rhythm; type sizes swing hard between them (a 13rem monogram, 9.5rem door initials, 0.34em-tracked small caps, 4rem headings).

**Key Characteristics:**
- Three spot inks plus paper, blended with `multiply`, never gradients.
- Deliberate misregistration: 1–3px offsets between plates on type, illustration and photos.
- Paper grain over everything; halftone dots for tone.
- Brand serif (Cormorant Garamond) for voice, Jost for labels and forms.
- One authored motion moment per view: plates sliding into register.
- No religious symbols anywhere.

## Colors

Three riso inks on warm cream; every colour on the page is one of these or an overprint of them.

### Primary
- **Saree Teal** (`saree-teal`): the key plate. Illustration outlines, sea, palms, the display names, one strand of the helix. Also the lead ink of the Ring Ceremony page.
- **Saree Teal Deep** (`saree-teal-deep`): teal printed at full density. Body-size teal text, the primary button, selected choices. Use this, not base teal, wherever text must pass 4.5:1.

### Secondary
- **Silk Maroon** (`silk-maroon`): the second pass. Misregistered shadow behind the names, roofs, hibiscus, halftone on the sun, the other helix strand, small-caps labels. Lead ink of the Thaali Ceremony page. Printed as a screen (40–70% opacity) on large areas so it never goes muddy.

### Tertiary
- **Zari Gold** (`zari-gold`): the warm pass. The sun, the helix rungs, the auto, the gold halftone screen on photos, the offset shadow under buttons. Never used for text.

### Neutral
- **Warm Cream** (`warm-cream`): the paper stock and page background. Also text on teal buttons.
- **Print White** (`print-white`): photo print borders only, so prints read as separate paper on the cream stock.
- **Ink Text** (`ink-text`): running body copy.
- **Ink Muted** (`ink-muted`): captions and helper text.

### Night stock
- **Night Stock** (`night-stock`): dark paper for cover, countdown and footer. On it, inks print opaque (normal blend, not multiply).
- **Gold on Stock** (`gold-on-stock`): monogram D and A, tagline, countdown title and labels, registration marks.
- **Rose on Stock** (`rose-on-stock`): maroon ink lifted for dark paper. The italic "n" of DnA, ampersands, countdown plate offset. Replaces the old terracotta "n".
- **Teal on Stock** (`teal-on-stock`): the misregistered plate behind the monogram (`text-shadow` 4px 3px at 38%).

### Named Rules
**The Overprint Rule.** Colour is mixed only by `mix-blend-mode: multiply` of two ink layers. No CSS gradients between inks, no gradient text, no tints invented outside the three inks.

**The Three Ink Rule.** No fourth ink. A new colour need is solved by overprinting or by screening an existing ink (opacity or halftone), never by adding a hue.

## Typography

**Display Font:** Cormorant Garamond (with Georgia, serif)
**Body Font:** Jost (with system-ui, sans-serif)

**Character:** Cormorant carries the invitation voice: italic and heavy for names, upright for headings. Jost is the letterpress-style label and form face, light for reading, medium for small caps.

### Hierarchy
- **Display** (600 italic, `clamp(2.5rem, 9.5vw, 6rem)`, 1.08): the couple's names only. Printed in teal with a maroon plate offset 3px/2px at 40% behind. Never wraps (`white-space: nowrap`).
- **Headline** (600, `clamp(1.8rem, 3.6vw, 2.4rem)`, 1.15): section headings. Balanced wrap.
- **Lede** (400, `clamp(1.15rem, 2.4vw, 1.45rem)`, 1.45): tagline and short introductions, max 34ch.
- **Title** (600, 1.6rem): event dates, card titles.
- **Body** (300, 15.5px, 1.75): running text, max 62ch.
- **Label** (500, 12px, 0.16em tracking, uppercase): ceremony names under dates, button text, form labels. Printed in maroon or teal-deep.

- **Monogram** (Cormorant 400, `clamp(7rem, 24vw, 13rem)`, 0.95): DnA on the cover only; "n" italic at 0.74em in rose. A logo, not a heading, so it sits outside the 6rem display cap.
- **Spaced names** (Cormorant 400, `clamp(1.5rem, 4vw, 2.5rem)`, 0.16em tracking): "Derin & Akshita" under the monogram.
- **Split heading** (Cormorant 400 upright line + 500 italic maroon line, `clamp(2.4rem, 5.4vw, 4rem)`): story, ceremonies and RSVP headings ("Felt in Our Hearts, / Encoded in Our DnA").
- **Countdown numerals** (Cormorant 300, `clamp(2.8rem, 8vw, 5.2rem)`, lining tabular figures, rose plate offset).

### Named Rules
**The No Kicker Rule.** No category label above a heading. Dates and ceremony names sit below what they describe. The cover's "The wedding of" is invitation wording that reads into the monogram, and is the one allowed exception.

## Layout

Single column, centred, max width 1120px, side gutter never below 16px. Hero is sized to content, not to the viewport. Sections separate with large cream space (`2xl`, roughly 104–136px) rather than rules or boxes. Inside a section, groups stay tight (`xs` to `md`).

Section order: cover (night, full viewport) → story (cream, photo print left, split heading right) → ceremonies (cream, riso scene full-bleed, then the gatefold invitation) → countdown (night, riso photo prints flanking the numbers) → RSVP (cream, reply card) → footer (night). Ceremony details open as a modal overlay on top of the page (bottom sheet on phones), never a separate page.

The illustrated scene is a 1200×560 SVG viewBox with a 720px minimum width; on phones it is centre-cropped so the Singapore centre stays in view. Two-column layouts (notes and prints) collapse to one column below 760px (640px for photo prints).

## Elevation & Depth

Depth comes from paper, not light. Surfaces are flat ink on cream; the only lifted objects are photo prints, which sit on the stock as separate sheets with a soft maroon-tinted shadow and a slight rotation. Buttons use a hard gold offset plate (a misregistered pass), not a shadow.

### Shadow Vocabulary
- **Print on stock** (`box-shadow: 0 2px 4px rgba(122,27,46,.06), 0 14px 32px rgba(122,27,46,.10)`): photo prints and the RSVP reply card.
- **Gold plate** (`box-shadow: 4px 3px 0 -1px #B8941F`): primary buttons; grows to 6px 5px on hover, shrinks to 2px 1px on press.

### Named Rules
**The Paper Not Light Rule.** No glows, no glass, no blur. If something needs to stand forward, print it on a separate sheet.

## Shapes

Printed matter has square corners: prints, cards and fields are `none`. Buttons and choice chips are full pills, like rubber-stamped tags. Photos inside prints may take a 4px radius. Illustration is built from plain geometric shapes (rects, arches, circles, simple quadratic curves) with round line caps, drawn in a consistent 3–5px stroke at viewBox scale.

## Components

### Buttons
Tactile and stamped.
- **Shape:** full pill (999px).
- **Primary:** teal-deep fill, warm cream label in Jost 500 uppercase, 0.12em tracking, 16px 34px padding, gold plate offset behind.
- **Hover / Focus:** lifts 1px/2px while the gold plate grows. Focus ring is 2px maroon at 4px offset.
- **Active:** presses 1px/1px, plate shrinks.

### Chips (choice)
Used for RSVP yes/no questions instead of native radios.
- **Style:** cream fill, 1.5px teal-deep outline, pill, teal-deep label.
- **Selected:** teal-deep fill, cream label, gold plate offset.

### Cards / Containers
Only three containers exist, and all are paper: the **photo print** (print-white sheet, 12px 12px 40px padding, print-on-stock shadow, rotated -1.6° or 1.2°), the **gatefold invitation** (see below) and the **reply card** (same sheet treatment, unrotated, with a gold hairline frame inset 10px). Nothing else gets a box.

### Inputs / Fields
Fill-in-the-blank lines, like a printed RSVP card.
- **Style:** transparent, no box, 1.5px teal-deep bottom rule, Jost 400 16px text, label above in Label style.
- **Focus:** rule thickens to 2px and turns maroon; caret is maroon.
- **Error:** rule and message in maroon, message names the fix ("Enter a WhatsApp number with country code").

### Photo print (signature)
A photo reprinted in three passes: a gold halftone screen (4px dot mask) for warmth, a maroon plate for skin and shadow offset 3px/-2px, and a teal plate for the deepest darks. Implemented as three stacked copies of one image with SVG `feComponentTransfer` filters and `multiply`.

### Gatefold invitation (signature)
The ceremonies reveal. A print-white card closed by two doors meeting at a centre seam, each door framed in a gold hairline. The left door carries a light Cormorant **D** (9.5rem, gold, teal plate offset) and "Seventh February"; the right door **A** and "Eighth February". A double gold thread runs across both doors and is held at the seam by a maroon clasp bearing an italic gold **n**, so the closed card reads D · n · A. On hover the doors part 7°. On tap the clasp lifts away and the doors swing outward to 114° (1.3s, `cubic-bezier(.65,0,.35,1)`), showing maroon liners with a gold dot screen. Inside: the Ring Ceremony and the Thaali Ceremony side by side (stacked on phones) split by a gold hairline, each with a small riso mark, date, time and a "Ceremony details" link that opens the overlay; below, "Will you join us?" with **Joyfully accept** (opens the RSVP form) and **Regretfully decline** (decline state). Keyboard: a full-size invisible button opens it; the inside is `inert` until open, and focus moves inside only for keyboard opens.

### Ceremony page (overlay)
Full-screen sheet on the same cream stock. Same inks, different lead plate:
- **The Ring Ceremony (7 Feb):** teal leads, gold second, maroon only as accent. Motifs: two interlocked rings, tall candles, draped curtains.
- **The Thaali Ceremony (8 Feb):** maroon leads, gold second, teal only as accent. Motifs: kolam dot grid, jasmine strings, banana leaves.

### Motion
One moment per view. Cover: the monogram's teal plate slides into register while the rings and registration marks settle (1.8s). Scene: when it scrolls into view, the three plates slide from 8–16px out of register to their resting 1px drift (1.6s, `cubic-bezier(.16,1,.3,1)`) while the helix strands draw in. Ceremony overlays repeat the registration move on open. Story photos cross-fade with a slow Ken Burns push. Motion uses transforms only; never animate `height` or `top`. Everything is visible at rest; `prefers-reduced-motion` removes the motion entirely.

## Do's and Don'ts

### Do:
- **Do** build every colour from teal, maroon and gold on warm cream, overprinted with `multiply`.
- **Do** keep a visible 1–3px registration drift between plates.
- **Do** put paper grain over the whole page and use halftone dots for tone.
- **Do** screen maroon (40–70%) on large areas.
- **Do** use teal-deep for any teal text below 24px.
- **Do** draw illustration from Chennai, Singapore and Malaysia everyday landmarks.

### Don't:
- **Don't** add a fourth ink, a gradient, gradient text, glass or glow.
- **Don't** use temple, church, mosque or deity imagery, or any religious symbol.
- **Don't** put a kicker or eyebrow label above a heading.
- **Don't** box content in cards; only prints and the reply card are sheets.
- **Don't** scatter animation: one registration moment per view, no looping shimmer.

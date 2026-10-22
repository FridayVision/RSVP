---
name: DnA — Derin & Akshita
description: A Kanjeevaram-red and zari-gold wedding invitation under a silk canopy, set in Bodoni.
colors:
  silk-red: "#9E1B32"
  red-deep: "#7A1227"
  silk-marigold: "#E0A526"
  marigold-on-red: "#F4C24E"
  zari-rule: "#B8892A"
  zari-hairline: "#C8921E"
  ivory-on-red: "#F6EEDD"
  blush-on-red: "#F2CFD2"
  courtyard-white: "#FBFBF8"
  card-cream: "#FFFDF8"
  canopy-cream: "#F4E3C2"
  silk-ivory: "#E6D9BF"
  ink: "#141414"
  ink-muted: "#5B5954"
  silk-black: "#111111"
  on-black: "#F2EEE6"
typography:
  display:
    fontFamily: "Bodoni Moda, Didot, Georgia, serif"
    fontSize: "clamp(2.5rem, 6.4vw, 5rem)"
    fontWeight: 500
    lineHeight: 1.02
    letterSpacing: "-0.02em"
    fontVariation: "\"opsz\" 18"
  headline:
    fontFamily: "Bodoni Moda, Didot, Georgia, serif"
    fontSize: "2.1rem"
    fontWeight: 400
    lineHeight: 1.1
  lede:
    fontFamily: "Bodoni Moda, Didot, Georgia, serif"
    fontSize: "clamp(1.15rem, 2.2vw, 1.4rem)"
    fontWeight: 400
    lineHeight: 1.45
  body:
    fontFamily: "Bodoni Moda, Didot, Georgia, serif"
    fontSize: "clamp(1.15rem, 1.5vw, 1.35rem)"
    fontWeight: 450
    lineHeight: 1.75
    fontVariation: "\"opsz\" 11"
  label:
    fontFamily: "Tenor Sans, Gill Sans, system-ui, sans-serif"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0.26em"
  input:
    fontFamily: "Tenor Sans, Gill Sans, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.3
  numeral:
    fontFamily: "Bodoni Moda, Didot, Georgia, serif"
    fontSize: "clamp(3.2rem, 7.5vw, 6rem)"
    fontWeight: 500
    lineHeight: 1
rounded:
  none: "0px"
spacing:
  gutter: "16px"
  group: "10px"
  field: "28px"
  section: "clamp(96px, 12vw, 168px)"
  container: "1120px"
components:
  button-primary:
    backgroundColor: "{colors.silk-black}"
    textColor: "{colors.on-black}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "19px 34px 18px"
  button-primary-hover:
    backgroundColor: "{colors.silk-red}"
    textColor: "{colors.on-black}"
  button-rsvp-yes:
    backgroundColor: "{colors.silk-red}"
    textColor: "{colors.ivory-on-red}"
    rounded: "{rounded.none}"
    padding: "18px 26px"
  button-rsvp-yes-hover:
    backgroundColor: "{colors.red-deep}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "19px 30px 18px"
  button-details:
    backgroundColor: "{colors.marigold-on-red}"
    textColor: "{colors.red-deep}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "16px 26px 16px 28px"
  chip:
    backgroundColor: "{colors.card-cream}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "13px 26px"
  chip-selected:
    backgroundColor: "{colors.silk-red}"
    textColor: "{colors.ivory-on-red}"
  input-line:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.input}"
    rounded: "{rounded.none}"
    padding: "10px 1px"
  reply-card:
    backgroundColor: "{colors.card-cream}"
    rounded: "{rounded.none}"
    padding: "clamp(32px, 6vw, 56px)"
---

# Design System: DnA — Derin & Akshita

## Overview

**Creative North Star: "The Silk Canopy"**

The page is a wedding courtyard seen from beneath its canopy. Lengths of saree silk in Kanjeevaram red, marigold, ivory and black cross overhead on the cover, drift behind the reply card, and return as a band across the ceremonies. Under them sits a courtyard-white ground woven with tiny gold DNA buttas, warming to a canopy cream where the story begins. Everything decorative is either cloth, flowers or gold line art: a mango-leaf and jasmine toran over the ceremonies, a curtain of fairy lights over the RSVP, watercolour banana plants with brass urns of tuberose framing the cover.

The two ceremonies set the two moods and the page alternates between them. **Courtyard white** (cover, story, countdown, RSVP) is the black-tie evening: Bodoni in black ink, a single red italic accent, gold hairlines. **Kanjeevaram red** (the ceremonies section) is the silk morning: the whole section printed on red, ivory roman type, marigold italics, gold zari borders top and bottom. The swing between the two grounds is the page's rhythm.

Type is a Didone in the high-fashion invitation register. Headings pair an upright roman line with an italic line in the accent colour ("We are / *getting married!*", "Will you *join us?*"). The DnA monogram fills the cover. Density is generous: one idea per screen on phones, wide margins, nothing boxed except the reply card and the ticket.

**Key Characteristics:**
- Two grounds only: courtyard white and Kanjeevaram red. Gold is the thread between them.
- Bodoni Moda for every voice that speaks; Tenor Sans only for labels, small capitals and form fields.
- Split headings: roman line, then italic line in red (on white) or marigold (on red).
- Square corners everywhere. Hairline gold double rules instead of shadows and boxes.
- Silk lanes, florals and gold line art carry the decoration. Real couple artwork (graphite sketches, gold line drawings, the DNA tattoo) is used as given, never redrawn.
- Motion is ambient and slow (silk breathing, lights twinkling, a helix turning) and pauses off screen; `prefers-reduced-motion` stops it.

## Colors

Kanjeevaram red and zari gold on courtyard white, with black ink for type.

### Primary
- **Kanjeevaram Red** (`silk-red`): the ceremonies ground, the italic accent line of every heading on white, the "n" of DnA, the RSVP yes button, selected chips, errors and focus rings, countdown numerals.
- **Deep Kumkum** (`red-deep`): pressed and hover state of red buttons; text on marigold (the "Ceremony details" buttons).

### Secondary
- **Marigold** (`silk-marigold`): zari borders, the diamond separators, selection highlight, silk lanes. Decorative, never text on white.
- **Marigold on Red** (`marigold-on-red`): the italic accent line of headings on the red ground; fill of the "Ceremony details" buttons.
- **Zari Rule** (`zari-rule`) and **Zari Hairline** (`zari-hairline`): the gold double rule around the reply card, form underlines, the rule above the story's closing line, short separators.

### Neutral
- **Courtyard White** (`courtyard-white`): the page ground.
- **Card Cream** (`card-cream`): the reply card and chips, a half-step warmer than the ground so the card reads as paper.
- **Canopy Cream** (`canopy-cream`): the warm foot of the cover, blending into the story.
- **Silk Ivory** (`silk-ivory`): the ivory silk lane; ticket hairlines.
- **Ivory on Red** (`ivory-on-red`): all reading text and roman headings on the red ground.
- **Blush on Red** (`blush-on-red`): secondary notes on red only (times, placeholders in details). Not for paragraphs.
- **Ink** (`ink`): headings and body on white. **Ink Muted** (`ink-muted`): ledes, helper text, the opening clause of the story's closing line.
- **Silk Black** (`silk-black`) and **On Black** (`on-black`): the default button and the black silk lane.

### Named Rules
**The Two Grounds Rule.** A section sits on courtyard white or on Kanjeevaram red, never on a third colour. Cream steps (card, canopy) are paper tones of white, not new grounds.

**The Accent Line Rule.** Red on white and marigold on red are reserved for the italic half of a heading and for actions. A paragraph is never set in the accent colour, except the story's single closing promise.

## Typography

**Display and reading font:** Bodoni Moda (with Didot, Georgia, serif), self-hosted, weights 400–500, roman and italic.
**Label and form font:** Tenor Sans (with Gill Sans, system-ui), self-hosted, one weight.

**Character:** A fashion-house Didone carrying both the grand headings and the story itself, like a printed invitation booklet. Tenor Sans is the engraved small-capital voice for labels, buttons and the form; widely tracked, always uppercase except inside fields.

### Hierarchy
- **Monogram** (Bodoni 500, `clamp(5.5rem, 15vw, 8.5rem)`, 0.92): DnA on the cover only, "n" italic in red at 0.8em. A logo, not a heading.
- **Display** (Bodoni 500, `clamp(2.5rem, 6.4vw, 5rem)`, 1.02, -0.02em): section headings, as a roman line plus an italic accent line. Balanced wrap; keep phrases together with `&nbsp;` where a break would split them ("black tie").
- **Headline** (Bodoni 400 italic, ~2.1rem): card and state headings ("RSVP", "We'll miss you"), the countdown title.
- **Lede** (Bodoni 400 italic, `clamp(1.15rem, 2.2vw, 1.4rem)`, 1.45, max 36–40ch): one-line introductions under headings.
- **Body** (Bodoni 450, `clamp(1.15rem, 1.5vw, 1.35rem)`, 1.75, max 62ch, ragged right): the story. Set at the sturdier `opsz 11` cut.
- **Numerals** (Bodoni 500, `clamp(3.2rem, 7.5vw, 6rem)`, each digit in a fixed-width cell so the countdown never jitters).
- **Label** (Tenor Sans 400, 11–14px, 0.16–0.26em tracking, uppercase): event names on the cover, form labels, countdown units, buttons, the footer credit.

### Named Rules
**The Optical Size Rule.** Bodoni's optical-size axis is pinned, not automatic: `opsz 18` site-wide so display hairlines survive on red, and `opsz 11` for anything read as a paragraph or set on red at lede size. Auto optical sizing gives display sizes the finest cut and the hairlines vanish.

**The Upright Small Size Rule.** Below 14px, text is upright Tenor capitals, never Bodoni italic. Italic Didone hairlines at 12px are unreadable over imagery.

**The No Kicker Rule.** No category label above a heading. Event names sit with their dates, not above a headline.

## Layout

Single centred column, max width 1120px, side gutter 16px. Sections breathe with `clamp(96px, 12vw, 168px)` of vertical padding; the countdown is tighter (`clamp(56px, 7vw, 96px)`). Groups inside a section stay tight (10–28px).

Section order: cover (full viewport, canopy overhead, banana plants at the sides, DnA and both dates) → story (graphite portrait dissolving into the cream on the left half, text on the right; stacked on phones) → ceremonies (red ground, toran at the top, heading, gold skyline line art edge to edge, a silk band, then the two ceremonies side by side split by a gold seam with a diamond; stacked on phones) → countdown (title with the gold DNA ornament, then the sketch band) → RSVP (fairy-light curtain, heading, deadline, silk lanes crossing behind the reply card) → footer.

Ceremony details open inline beneath each ceremony (a grid-rows expand, 0.7s), not as a modal. Below 560px the cover dates stack, buttons go full width, and the two-column story collapses.

## Elevation & Depth

Depth comes from cloth and paper layering, not shadows. Silk lanes are canvases blended with `multiply` (on light) so their crossings darken like real overlapping sheer silk. Panels are flat; their edge is a gold double rule (a 1px border plus an inset or offset second rule).

### Shadow Vocabulary
- **Card lift** (`box-shadow: 0 2px 4px rgba(120,60,10,.1)`): the reply card, barely off the ground.
- **Button press** (`box-shadow: 0 10px 22px -14px rgba(122,18,39,.7)`): under the red RSVP yes button only.
- **Ticket** (`filter: drop-shadow(0 22px 50px rgba(17,17,17,.28)) drop-shadow(0 5px 16px rgba(17,17,17,.14))`): the issued RSVP ticket, the one object that truly floats.

### Named Rules
**The Gold Rule Not Glow Rule.** A surface that needs an edge gets a gold hairline double rule, not a wider shadow, glow or blur.

## Shapes

Square corners throughout (0px): buttons, chips, cards, fields, the ticket body. The only curves are organic (silk lanes, leaves, flowers) and the ticket's scalloped edges, cut with radial-gradient masks. Separators are short gold rules with a rotated-square diamond at the centre. Frames are double: an outer 1px line and an inner line inset 5–6px.

## Components

### Buttons
Engraved and exact.
- **Shape:** square (0px).
- **Primary:** silk black fill, on-black label in Tenor capitals 12px at 0.28em; hover turns Kanjeevaram red; press nudges down 1px.
- **Ghost:** transparent with a 1px ink outline; hover fills black.
- **RSVP answers:** Bodoni 500 italic 1.2rem, no capitals. Yes: red fill, ivory text, soft red press shadow. Regrets: transparent with a zari outline and a second gold rule inset 5px.
- **Ceremony details:** marigold-filled tab on the red ground, deep kumkum Tenor capitals 14px, a 1px marigold outline offset 3px, and a chevron that turns when open; hover empties to an outline.
- **Focus:** 2px red outline at 4px offset (marigold on the red ground).

### Chips
Yes/No choices in the form, replacing radios. Card-cream square tiles with a zari outline, Tenor capitals; selected fills red with ivory text.

### Cards / Containers
Only the **reply card**: card cream, 1px zari border, an inner zari rule inset 6px, card-lift shadow, padding `clamp(32px, 6vw, 56px)` (24px 20px on phones). Nothing else is boxed.

### Inputs / Fields
Fill-in-the-blank lines. Transparent, 1px zari bottom rule, Tenor 17px, red caret. Focus and error thicken the rule to 2px red. Error messages reserve their line even when hidden so nothing shifts under a guest's finger. The phone field pairs a country-code select (custom chevron) with a digits-only number. Required fields carry a red asterisk.

### Countdown band (signature)
The couple's five graphite sketch panels repeat edge to edge between gold zari borders, under a light cream wash with a soft cream glow behind the centre. The red Bodoni numerals sit directly on the band, divided by small marigold diamonds; the unit labels are upright Tenor capitals (13px, 11px on phones) so they hold over the sketches. Counts down to the Gala, 5:45 pm India time on 7 February 2027.

### RSVP ticket (signature)
The confirmation is an admission stub: a near-black red card with scalloped long edges, an ivory hairline inset frame, silk texture loaded only when issued, a decorative barcode, a 3D tilt that follows the pointer, a glare highlight, and a red-and-white particle burst plus a petal shower on issue.

### Silk lanes (signature)
Canvas-drawn lengths of sheer silk (red, marigold, ivory, black) with woven texture and zari edges. They enter with a slide, then breathe slowly. Used on the cover canopy, the ceremonies band (each pair soloes when its ceremony is hovered or focused) and behind the reply card.

### Garlands and lights
A mango-leaf toran with tuberose strands over the ceremonies; a curtain of fairy lights that drops and twinkles over the RSVP. Both pause off screen.

## Do's and Don'ts

### Do:
- **Do** keep every section on courtyard white or Kanjeevaram red.
- **Do** write headings as a roman line plus an italic accent line, red on white and marigold on red.
- **Do** set reading text in Bodoni at `opsz 11` and weight 450 or more; ivory, never blush, for paragraphs on red.
- **Do** use the couple's own artwork exactly as supplied, scaled and tinted only.
- **Do** frame with gold double hairlines and keep corners square.
- **Do** keep small text off busy imagery, or set it upright and in Tenor capitals where it must overlap.

### Don't:
- **Don't** add a third ground colour, gradient text, glass or glow.
- **Don't** set text below 14px in Bodoni italic.
- **Don't** use religious symbols or deity imagery.
- **Don't** put a kicker or eyebrow label above a heading.
- **Don't** box content in cards; the reply card and the ticket are the only containers.
- **Don't** let a looping animation run while its section is off screen.

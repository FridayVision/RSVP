# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Wedding guests of Derin & Akshita — a broad list spanning close family, extended relatives, friends, and colleagues. Many guests may not know the couple's full story. Guests typically receive the link via WhatsApp or messaging and view on mobile first, though desktop is common for completing the RSVP form. The audience spans multiple countries (India, Singapore at minimum, based on phone prefixes offered).

## Product Purpose

A wedding invitation and RSVP website for the marriage of Derin and Akshita, taking place February 7-8, 2027. The site replaces a physical invitation: it tells the couple's story, presents two distinct ceremony events (a Western ring ceremony and a South Indian thaali ceremony), counts down to the day, and collects RSVPs with guest details (name, WhatsApp number, plus-one, accommodation needs). Submissions go to Google Sheets via Apps Script. Success means every invited guest can view the invitation, feel the couple's warmth, and respond — all from a single link.

## Positioning

"DnA" — Derin 'n' Akshita, a wordplay on DNA that runs through the entire identity. The monogram, the story section heading ("Encoded in Our DnA"), and the overall concept all reinforce the idea that their bond is fundamental and inseparable. The dual-ceremony format — one Western, one South Indian — reflects the cross-cultural nature of their union, presented as a single celebration rather than two separate events.

## Operating Context

Single static page deployed on Vercel. No build step, no framework — plain HTML with inline CSS and JS. RSVP form posts to a Google Apps Script endpoint that writes to Google Sheets. Background audio (assets/audio/song.mp3) auto-plays with a toggle. Three couple photos cycle in a Ken Burns slideshow. Event details are presented as two side-by-side cards: The Ring Ceremony (Western reception, Feb 7) and The Thaali Ceremony (South Indian tradition, Feb 8). The site is the only touchpoint — there is no companion app, admin panel, or email flow beyond what the couple manages manually from the sheet.

## Capabilities and Constraints

- Single-page static site: all sections (hero, story, events, countdown, RSVP, footer) in one HTML file
- RSVP form collects: full name (required), WhatsApp number (required), email (optional), plus-one (yes/no), accommodation needed (yes/no)
- Form submits via `fetch` with `mode: 'no-cors'` to Google Apps Script
- Countdown targets 2027-02-07T18:00:00+08:00
- Two ceremony events: Western ring ceremony (Feb 7) and South Indian thaali ceremony (Feb 8)
- Event details (venue names, locations, times) are intentionally placeholder — not yet finalized
- RSVP deadline text is placeholder and needs updating when dates are confirmed
- Phone input restricted to digits, +, spaces, and hyphens
- No religious symbols in event presentation

## Brand Commitments

- **Name:** "DnA" monogram — the D and A in gold, the italic lowercase "n" in terracotta
- **Personal brand:** "Powered by Friday Vision" in the footer (Derin's personal creative label)
- **Typography:** Cormorant Garamond (serif, headings/display) + Jost (sans-serif, body/labels)
- **Palette:** Saree Teal, Silk Maroon, Zari Gold on Warm Cream — three risograph inks taken from the couple's own clothes (see DESIGN.md)
- **Motifs:** Risograph illustration of Chennai, Singapore and Malaysia; two paper-plane trails braiding into a DnA double helix (best friends from school to life partners); interlocking rings (ring ceremony), kolam and jasmine (thaali ceremony)
- **Tagline:** "Two souls, one story"
- **Story anchor:** Besant Nagar beach — where the couple's story began
- **Vibe:** Elegance, fun, class, satire, romance

## Evidence on Hand

- `assets/images/DnA.webp`, `DnA_2.webp`, `DnA_3.webp` — engraved couple portraits (story section)
- `assets/images/rings.webp` — engraved wedding rings in gold line art (ceremonies and countdown)
- `assets/images/skyline-gold.webp` — gold stencil of Chennai to Singapore with the home church (ceremonies)
- `assets/images/banner.webp` — countdown band background
- `assets/images/photo_selfie.jpg` — couple selfie (not currently used)
- `assets/source/` — source artwork the stencils are made from (`bessy&sg.png`, `skyline-church.png`)
- `assets/audio/song.mp3` — background audio track
- `assets/fonts/` — self-hosted Bodoni Moda and Tenor Sans
- No testimonials, no vendor credits beyond Friday Vision. Future work must not fabricate venue details, guest quotes, or event specifics not provided by the couple.

## Product Principles

1. **One link, complete experience** — everything a guest needs lives on a single page; no navigation, no login, no app install.
2. **Personal over polished** — the site should feel like a heartfelt invitation from the couple, not a generic wedding template.
3. **Mobile-first, universally accessible** — most guests will open the link on their phone mid-conversation; the experience must work immediately.
4. **Delight without delay** — animations, audio, and interactive elements (countdown, ambient particles) earn attention but never block the guest from reaching the RSVP.
5. **Privacy by default** — guest data goes to the couple's own Google Sheet; no third-party tracking or analytics.

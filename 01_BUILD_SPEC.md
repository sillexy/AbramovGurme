# BUILD SPEC — Abramov Gurme

This is the compact implementation source of truth.

## 1. Product intent

Create a polished web-native presentation of the existing **«Абрамов Гурме»** platform. The site must faithfully reorganize the source material for the web without inventing a new audience, offer, business model, sales process, or factual claim.

Primary user flow:

`Hero → understand ready-made food in glass → choose direction → inspect offer/technology/business model → contact Андрей Абрамов by phone or email`

Primary CTA: **«Выбрать направление»** → `#directions`  
Secondary CTA: **«Связаться»** → contact surface.

## 2. Source-of-truth rules

Fixed and never invented/altered unless explicitly updated:

- brand/name facts;
- prices and numbers;
- product descriptions;
- contact details;
- stated brand claims;
- confirmed offer names.

Allowed:

- spelling/grammar/punctuation correction;
- deduplication;
- concise web-oriented restructuring;
- visual hierarchy improvements.

Not allowed:

- invented geography, delivery, availability, menu/SKU data, ingredients, allergens, nutrition tables;
- invented ordering/booking/payment process;
- invented legal entity/address/social profiles;
- invented certificate details, evidence, charts, margins, CAPEX/OPEX;
- invented technical reconciliation of contradictory source claims;
- `Abramov.food` as a confirmed brand/domain.

Substantive rewritten copy in `02_CONTENT_RU.md` is implementation-ready draft copy and should not display approval labels in the public UI.

## 3. Page order and IDs

Implement exactly this narrative order:

1. `site-header` — sticky header.
2. `hero` — platform thesis.
3. `about` — preparation directly in glass.
4. `benefits` — consolidated benefits/philosophy claims.
5. `ecosystem` — flagship + A1–A4 overview.
6. `directions` — five anchor choices.
7. `offers` — detailed flagship, A1, A2, A3, A4.
8. `menu` — four dayparts + separate three-jar daily/lunch format.
9. `technology` — three-step process + deeper disclosure.
10. `safety` — shelf life, packaging, seal, documentation claim.
11. `business` — B2B advantages.
12. `micromarket` — autonomous retail model.
13. `contact` — final phone/email conversion.
14. `site-footer`.

Navigation labels:

- **О продукте** → `#about`
- **Направления** → `#directions`
- **Технология** → `#technology`
- **Для бизнеса** → `#business`
- **Контакты** → `#contact`

Logo → `#top`.

## 4. Visual concept

**Hybrid editorial gastronomy + technical precision.**

Food/product sections:
- premium;
- tactile;
- calm;
- image-led when documentary imagery is trustworthy;
- generous whitespace.

Technology/B2B sections:
- cleaner;
- more structured;
- neutral stone surfaces;
- precision-oriented typography.

Signature visual device:
- use once in the hero;
- a transparent “inspection window”/frame around the genuine jar image;
- jar may visually cross the dark hero / ivory next-section boundary;
- do not alter label, contents, product geometry, or identity.

Avoid:

- generic SaaS gradients;
- glassmorphism everywhere;
- shiny gold text;
- heavy glow;
- parallax;
- cursor-follow effects;
- autoplay video;
- animated counters;
- generic health icons;
- fake charts/certification badges;
- unrelated stock photography.

## 5. Design tokens

### Colors

```css
--color-night:  #090908;
--color-ink:    #211B17;
--color-ivory:  #F7F4ED;
--color-stone:  #EDE7DC;
--color-copper: #B97845;
--color-bronze: #C99E58;
--color-line:   #D8CCBB;
--color-focus:  #1670C5;
--color-error:  #B42318;
```

Rules:
- copper/bronze are accents, not default small text;
- metallic effects should be flat or extremely subtle;
- verify accessible contrast.

### Typography

- Display: **Cormorant Garamond**, weights 500/600.
- Body/UI: **Manrope**, weights 400/500/600/700 only as needed.
- Logo remains artwork, never recreated with these fonts.

Suggested fluid sizes:

```css
H1: clamp(3rem, 7vw, 7rem);
H2: clamp(2.25rem, 4.5vw, 4.75rem);
H3: clamp(1.5rem, 2.5vw, 2.5rem);
body-large: clamp(1.0625rem, 1.4vw, 1.25rem);
body: 1rem minimum;
caption: 0.8125rem minimum;
```

### Layout

Breakpoints/tokens:
- `sm 640`
- `md 768`
- `lg 1024`
- `xl 1280`
- `2xl 1536`

Container:
- max width: 1280px;
- side padding: 20px mobile, 32px tablet, at least 48px desktop;
- long-form measure: about 65–75 characters.

Grid:
- desktop: 12 columns / 24px gutters;
- tablet: 8 columns / 20–24px gutters;
- mobile: 4 columns / 16px gutters.

Section spacing:
`clamp(72px, 10vw, 144px)` as the default rhythm.

Radius:
- buttons: 4px;
- cards/panels: 0–8px, default 4px;
- mobile bottom sheet: 16px top corners.

## 6. Responsive behavior

### Desktop / large desktop

- spacious editorial layout;
- controlled 1280px content width;
- two-column layouts where useful;
- hero approximately 6/12 text + 6/12 product visual;
- offers alternate 5/7 and 7/5 compositions;
- dayparts: four columns;
- technology: three columns;
- micromarket: copy/image split.

### Tablet

- preserve two columns only while content remains comfortable;
- otherwise stack;
- header collapses to mobile behavior when labels stop fitting cleanly.

### Mobile

- single-column reading order;
- menu button + vertical overlay navigation;
- no important content hidden;
- offer selector = vertical anchor links, never tabs;
- no swipe-only interaction;
- no page-level horizontal scrolling;
- CTA buttons may become full width;
- images must not crop away the jar/label/micromarket unit.

Hard baseline:
- works at 320 CSS px;
- works at 200% browser zoom;
- no two-dimensional page scrolling.

## 7. Header and navigation

Desktop:
- sticky;
- initial height about 88px;
- compact height about 64px after ~24px scroll;
- avoid scroll-jitter;
- anchor targets use `scroll-margin-top`.

Mobile menu:
- accessible button with `aria-expanded`/`aria-controls`;
- vertical overlay;
- Escape, close button, backdrop, and anchor selection close it;
- focus is contained while open and restored on close;
- background scroll locked.

Smooth anchor scrolling only when reduced motion is not requested.

## 8. Contact behavior

Confirmed data:

- Андрей Абрамов
- `+7 980 409 3293`
- `tel:+79804093293`
- `aa@aa1.ru`
- `mailto:aa@aa1.ru`

CTA label vocabulary remains **«Связаться»**.

Shared contact component:
- one semantic dialog/content tree;
- desktop: visually anchored popover;
- mobile: bottom sheet;
- actions have visible labels:
  - **Позвонить**
  - **Написать на email**
- visible **Закрыть** control;
- Escape/backdrop close;
- focus management/restore;
- final `#contact` section always exists as progressive fallback.

Do not fire a conversion event when the dialog merely opens.

## 9. Section layout notes

### Hero
- dark near-black field;
- approved H1/tagline from content file;
- real jar/product image dominates;
- no collage;
- CTAs: choose direction + contact.

### About
- warm ivory;
- editorial 5/7 split on desktop;
- no text over product photography on mobile.

### Benefits
- typography-led 2×2 desktop grid;
- no generic medical/health visual language.

### Ecosystem
- flagship gets a full-width band;
- A1–A4 below;
- micromarket is not a sixth product line.

### Directions
- five catalogue-style anchor entries;
- never tabs.

### Offers
- five anchored subsections;
- price close to title where source provides it;
- omit flagship price entirely;
- no “по запросу”.

### Menu
- four dayparts;
- three-jar format visually separate;
- no invented weekly menu.

### Technology
- three visible numbered steps;
- deeper details in native `<details>/<summary>`;
- no fabricated equipment diagrams/certification art.

### Safety
- “365” may be a large typographic anchor;
- pair with real glass/lid detail;
- no fake trust marks.

### Business
- editorial grid;
- no fabricated data graphics.

### Micromarket
- use genuine unit photo if available;
- emphasize source values without dashboard styling.

### Contact / footer
- return to near-black;
- visible native phone/email links;
- no empty legal/social links.

## 10. Motion

Restrained editorial motion only.

- controls/hover: 120–180ms;
- dialog/bottom sheet: 200–280ms;
- section/image reveals: 400–600ms;
- easing: `cubic-bezier(0.22, 1, 0.36, 1)`;
- prefer opacity and transforms;
- reveal once only;
- no scroll-jacking.

`prefers-reduced-motion: reduce`:
- disable smooth scroll, translation, scale, and nonessential movement;
- show final readable state immediately or with <=120ms opacity.

Implementation:
- CSS transitions first;
- Intersection Observer only for optional reveal enhancement;
- no large motion library by default.

## 11. Technical architecture

- Next.js stable.
- TypeScript strict.
- Tailwind + CSS custom properties.
- Static generation/server-rendered HTML for substantive content.
- Typed local content.
- No runtime fetch.
- No database/API/CMS/auth.
- No forms.
- Next.js optimized images.
- SVG for approved logo.
- Minimal icon set only where helpful.
- Third-party scripts: zero unless analytics is explicitly enabled.

Default sections should be server components/static HTML.

Client-side behavior only where browser state is needed:
- header compaction;
- mobile menu;
- contact dialog;
- optional view-entry reveal;
- optional analytics dispatch.

Suggested pragmatic structure:

```text
src/
  app/
    layout.tsx
    page.tsx
    globals.css
  components/
    SiteHeader.tsx
    ContactDialog.tsx
    SiteFooter.tsx
    sections/
    ui/
  content/
    navigation.ts
    offers.ts
    site-content.ts
  lib/
    analytics.ts
    constants.ts
  styles/
    tokens.css
public/
  brand/
  products/
  editorial/
  technical/
```

Do not over-engineer one-off wrappers into components.

## 12. SEO

Draft:

- `<html lang="ru">`
- title: **«Абрамов Гурме - технологии будущего в готовой еде»**
- meta description: **«Абрамов Гурме - готовые блюда в стекле, продуктовые направления для дома, офиса, фитнеса, баров и бизнеса.»**
- exactly one H1;
- stable human-readable IDs;
- canonical/domain: TBD;
- `Organization` JSON-LD: omit until verified minimum fields exist;
- Product/Offer structured data: do not add without real SKU/availability data;
- staging: `noindex, nofollow`;
- sitemap/robots production settings only after domain confirmation.

## 13. Optional analytics contract

Provider/implementation is optional.

Events:

```text
contact_phone_click
contact_email_click
offer_direction_select
technical_details_toggle
```

Only implement if a provider is actually selected. Otherwise ship no analytics script, no cookies, no consent banner, and no residual tracking code.

## 14. Browser baseline

Must preserve content, navigation, disclosure, and contacts in:

- current + previous Chrome;
- current + previous Edge;
- current + previous Firefox;
- current + previous Safari;
- current + previous Yandex Browser;
- current iOS Safari;
- current Android Chrome.

Decorative motion may gracefully degrade.

## 15. Known TBDs — non-blocking for implementation

- three jars/daypart operational relationship;
- gentle-cooking vs 115–135°C sterilization relationship;
- status of `Abramov.food`;
- production domain/canonical/host/indexing date;
- verified legal entity/address/privacy/terms/copyright wording;
- analytics provider;
- `Organization` structured data readiness;
- flagship price;
- detailed SKU/menu/weights/ingredients/allergens/nutrition/availability/delivery/ordering.

Do not invent values for any of these.

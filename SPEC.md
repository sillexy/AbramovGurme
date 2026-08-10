# Landing Page Specification

## 1. Project Overview

Build a polished, responsive Russian-language landing page for **«Абрамов Гурме»** by transforming the complete substantive content of `Abramov.pdf` into a web-native experience. The PDF is the source of truth for brand facts, product lines, prices, claims, names, and contact details.

The page introduces an innovative platform for ready-made food prepared and presented in glass. It first explains the platform-level idea, then helps visitors choose among five confirmed product directions and a separate autonomous micromarket model. The page serves both consumer and business contexts already named in the PDF; it must not invent a new audience, positioning, offer, ordering process, or business model.

The primary outcome is a faithful, visually strong, implementation-ready web presentation with clear navigation, strong readability, responsive behavior, and direct access to the existing phone and email contact methods.

### Source-of-truth rules

- Preserve all confirmed names, prices, numbers, product descriptions, terms, contact details, and stated claims.
- Correct spelling, grammar, punctuation, and awkward phrasing without changing meaning.
- Consolidate repeated content and reorganize it for the web; do not reproduce the presentation slide by slide.
- Label substantive rewritten copy as **Draft - requires content approval**.
- Never add undocumented business facts, customer proof, addresses, social profiles, domains, ordering methods, legal details, or technical explanations.
- Treat `Abramov.food`, visible on one packaging image, as image content only. It is not a confirmed brand, domain, or navigation label.
- Present the PDF's claims as brand claims without weakening them. The site does not independently validate them.

### Release-gate distinction

Two classes of unresolved information must remain distinct:

1. **Ordinary TBD:** may be clarified later and does not prevent specification or private/staging implementation.
2. **Mandatory pre-launch verification:** must be resolved before the website is publicly released.

Mandatory pre-launch verification includes:

- rights to publish every extracted, reconstructed, retouched, enhanced, or adapted visual asset;
- documentary support and legal review, where applicable, for public health, food-safety, shelf-life, nutrient, write-off, margin, payback, and rollout claims.

## 2. Business Goal

| Item | Definition |
| --- | --- |
| Business objective | Convert the PDF into a professional digital presentation of the existing «Абрамов Гурме» platform and offer. No new commercial strategy is introduced. |
| Primary conversion | Visitor selects a relevant direction, understands the offer, then contacts Андрей Абрамов using the published phone number or email address. |
| Primary CTA | **«Выбрать направление»** - scrolls to the offer selector. |
| Secondary CTA | **«Связаться»** - opens the contact surface containing phone and email actions. |
| Secondary conversions | Selecting an offer direction; expanding the detailed technology disclosure. |
| Primary KPI | No numeric business KPI is defined for the MVP. |
| Success criteria | All important PDF content is represented accurately; navigation and reading hierarchy are clear; the page works across supported screen sizes; phone/email actions work; quality, accessibility, performance, and source-fidelity criteria in this specification pass. |

A successful session is: visitor lands -> understands “ready-made food in glass” within 5-10 seconds -> recognizes the relevant product or business direction -> reviews its benefits, price where stated, and supporting technology -> activates phone or email contact.

## 3. Target Audience

The PDF does not identify one primary audience. The page must therefore lead with the overall platform and expose separate, equally discoverable paths for the confirmed audiences below. Do not add demographic or psychographic assumptions.

### Segment A - Premium home and office consumers

- **Who:** People seeking restaurant-style prepared food at home or in the office.
- **Context:** Evaluating the flagship «Абрамов Гурме» line.
- **Problem:** Wants convenient ready-made food without opaque plastic presentation.
- **Pain points stated or implied by the PDF:** Compromise between convenience, presentation, composition, and restaurant-level experience.
- **Motivation:** Visible food, glass packaging, premium recipes, convenience.
- **Objections:** No specific menu, availability, delivery area, ordering process, jar size, ingredients, allergens, or flagship price is provided.
- **Decision criteria available in the source:** Product appearance, recipe positioning, packaging, preparation concept, shelf-life claims.
- **Desired outcome:** Understand the flagship concept and contact the business.

### Segment B - Employers and corporate food buyers

- **Who:** Employers and operators responsible for office, construction-site, automobile, bus, or metro-depot meals.
- **Context:** Evaluating A1 corporate lunches.
- **Problem:** Needs a consistent, convenient workday meal format.
- **Motivation:** Soup + hot dish + salad sold as one SKU; stated price of 350-400 RUB per set; employee wellbeing and food culture.
- **Objections:** Delivery geography, minimum quantities, lead times, menu details, logistics, service model, and commercial terms are unknown.
- **Decision criteria:** Set composition, price, convenience, perceived quality, operational fit.
- **Desired outcome:** Determine relevance and contact Андрей Абрамов.

### Segment C - Athletes and active-lifestyle customers

- **Who:** Athletes and people interested in an active lifestyle.
- **Context:** Evaluating A2 fitness meals.
- **Problem:** Wants food presented as calorie- and macronutrient-controlled.
- **Motivation:** Stated BJU balance, calorie control, no hidden sugar, no preservatives, and a price of 250-500 RUB per dish.
- **Objections:** No actual nutrition tables, ingredient lists, allergens, serving weights, or named dishes are provided.
- **Decision criteria:** Verified composition, calories/BJU, price, convenience.
- **Desired outcome:** Understand the A2 concept and make contact.

### Segment D - Bars and food points without kitchens

- **Who:** Bars and other food-point operators without full kitchen infrastructure or chefs.
- **Context:** Evaluating A3.
- **Problem:** Wants to add food service without a conventional kitchen.
- **Motivation:** One-minute heating/service claim, standardized recipes, small footprint, stated price of 250-500 RUB per dish.
- **Objections:** Equipment requirements, preparation instructions, assortment, operating model, margins, proof, and supply terms are unknown.
- **Decision criteria:** Operational simplicity, speed, consistency, cost, footprint, commercial return.
- **Desired outcome:** Assess fit and initiate contact.

### Segment E - Dessert buyers and operators

- **Who:** Consumers or businesses interested in dessert products in glass.
- **Context:** Evaluating A4.
- **Problem:** Wants visually presentable, layered desserts with consistent format.
- **Motivation:** Named dessert range, visual presentation through glass, stated price of 200-500 RUB per dish.
- **Objections:** Actual product photography, serving weights, ingredients, allergens, availability, and ordering are unknown.
- **Decision criteria:** Assortment, appearance, price, composition.
- **Desired outcome:** Understand the A4 range and make contact.

### Segment F - Retailers and distributors

- **Who:** Retail and distribution partners concerned with shelf life, assortment, logistics, SKU breadth, and write-offs.
- **Context:** Evaluating the platform and B2B model.
- **Problem:** Managing inventory loss and distribution constraints.
- **Motivation:** Brand claims of up to 365-day shelf life, 0% write-offs, more SKU flexibility, and room-temperature storage.
- **Objections:** Documentary proof, wholesale terms, minimum orders, capacity, logistics, margins, tax status, and partner economics are absent.
- **Decision criteria:** Evidence, reliability, commercial terms, supply capacity, economics.
- **Desired outcome:** Review the model and contact the business.

### Segment G - Micromarket/location operators

- **Who:** Operators evaluating compact autonomous self-service retail modules.
- **Context:** Evaluating the micromarket model.
- **Problem:** Wants a compact food retail point with limited infrastructure.
- **Motivation:** Claims of up to 1.2 m² footprint, power-only infrastructure, up to 420 portions per refrigerator, and rapid rollout.
- **Objections:** CAPEX/OPEX, ownership, servicing, connectivity, replenishment, payment flow, unit economics, and deployment proof are absent.
- **Decision criteria:** Footprint, infrastructure, capacity, economics, responsibility split, evidence.
- **Desired outcome:** Determine whether to discuss deployment or partnership.

## 4. User Journey

### Main journey

```text
Unknown traffic source
-> Landing page hero
-> Understand the platform and glass-packaging proposition
-> Select a relevant direction
-> Review the offer, stated price, benefits, technology, and/or B2B model
-> Open «Связаться» or reach the final contact section
-> Call +7 980 409 3293 or email aa@aa1.ru
-> Post-conversion occurs outside the website and is an Ordinary TBD
```

### Alternative journeys

1. **Technology-first:** Hero -> “Технология” anchor -> three-step process -> detailed disclosure -> contact.
2. **B2B-first:** Hero -> “Для бизнеса” -> shelf-life/retail claims -> micromarket -> contact.
3. **Offer-first:** Hero -> “Выбрать направление” -> offer selector -> anchored offer detail -> contact.
4. **Direct contact:** Header CTA -> contact popover/bottom sheet -> phone or email.

### First 5-10 seconds

The visitor must see:

- brand identity;
- **«Технологии будущего в готовой еде»**;
- **«Мы говорим на языке хорошей еды»**;
- an unmistakable genuine jar/product visual;
- a short descriptor identifying the platform as ready-made food in glass;
- the two actions **«Выбрать направление»** and **«Связаться»**.

## 5. Page Information Architecture

| ID | Name | Purpose | Key message | Content | CTA | Visual | Interaction |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `site-header` | Header | Orient and provide persistent access to sections/contact. | Navigate the platform quickly. | Logo, five anchors, contact CTA. | «Связаться» | Compact black/ivory header with copper accent. | Sticky; compacts on scroll; mobile menu. |
| `hero` | Hero | State the platform thesis. | Technologies of the future in ready-made food. | Headline, tagline, descriptor, two CTAs. | «Выбрать направление», «Связаться» | Genuine jar image; dark editorial composition. | Anchor scroll; contact surface. |
| `about` | Core concept | Explain preparation in glass and visual transparency. | The food is prepared directly in the jar and visible before opening. | “Честность…” and two source-derived principles. | Optional anchor to technology. | Ivory editorial split with product close-up. | Subtle reveal only. |
| `benefits` | Benefits and philosophy | Consolidate health/material claims without repetition. | No oil frying, vacuum sealing, nutrient retention, neutral glass. | Four claim blocks. | None | Quiet typographic grid; no generic icon set. | Reveal once. |
| `ecosystem` | Product ecosystem | Explain flagship + A1-A4 as five vectors. | One platform, five confirmed product directions. | Short overview of all lines. | «Выбрать направление» | Structured matrix inspired by PDF, improved for reading. | Cards link to details. |
| `directions` | Offer selector | Let visitors self-select. | Choose the relevant product direction. | Five anchor cards. | Per-card «Подробнее» | Horizontal editorial index on desktop; stacked/anchor list on mobile. | Anchor navigation, no tabs. |
| `offers` | Detailed offer sections | Explain each direction and price where stated. | Distinct offers within one platform. | Flagship, A1, A2, A3, A4. | «Связаться» per direction, optional. | Alternating image/text compositions. | Anchored entry; restrained reveals. |
| `menu` | Menu/dayparts | Show breadth and seven-day rotation. | Food for different moments of the day. | Breakfast, lunch, dinner, night bar; three-jar lunch format. | None | Four-part day rhythm; food imagery only where semantically accurate. | Static; no carousel. |
| `technology` | Technology | Make the sterilization story understandable. | Controlled heating/holding, pathogen destruction, cooling. | Visible three-step summary + deeper disclosure. | Disclosure control. | Cleaner food-tech surface, process line, technical labels. | Native `<details>/<summary>`. |
| `safety` | Shelf life, safety, packaging | Present shelf-life and packaging claims together. | Up to one year, 0% write-offs, transparent neutral glass, seal indicator. | Claims, documentation statement, valve-lid description. | Optional «Связаться» | Glass detail, packaging macro, restrained data emphasis. | Static. |
| `business` | B2B advantages | Explain the retail/distribution proposition. | Less loss and fewer constraints; more assortment flexibility. | Tradition, financial-loss, assortment blocks. | «Обсудить сотрудничество» may display as «Связаться» to avoid adding a new action vocabulary. | Editorial business grid; no invented charts. | Contact surface. |
| `micromarket` | Autonomous micromarket | Present compact retail infrastructure. | High-efficiency retail model in up to 1.2 m². | Footprint, outlet-only claim, 24-hour launch claim, up to 420 portions. | «Связаться» | Genuine micromarket photograph. | Contact surface. |
| `contact` | Final contact | Provide the only confirmed conversion routes. | Contact Андрей Абрамов directly. | Name, phone, email. | Phone and email links. | Dark closing panel, full brand mark. | `tel:` and `mailto:`. |
| `site-footer` | Footer | Close with navigation and verified identity. | Verified information only. | Logo/name, anchors, name, phone, email, copyright. | Phone/email | Minimal near-black footer. | Anchor/contact links. |

## 6. Detailed Section Specifications

All Russian copy below that substantially consolidates or rewrites PDF prose is **Draft - requires content approval**. Names, prices, numbers, contacts, and quoted brand claims are fixed unless the source owner explicitly changes them.

### Section: Header

**Purpose**

Maintain orientation and immediate contact access without dominating the page.

**Content**

- Logo asset: confirmed «Абрамов Гурме» mark.
- Anchors: **«О продукте»**, **«Направления»**, **«Технология»**, **«Для бизнеса»**, **«Контакты»**.
- CTA: **«Связаться»**.

**Layout**

- **Desktop:** logo left; anchor navigation centered/right; CTA at far right; 1280px content container.
- **Tablet:** reduce gaps and type size; collapse to mobile menu when labels no longer fit without wrapping.
- **Mobile:** logo left, menu button right; vertical menu in an overlay panel; contact CTA remains visible inside menu.

**Visual Direction**

Near-black or warm-ivory surface depending on scroll position over the hero. Copper is limited to rules/selected state. Header compacts after the first meaningful scroll movement.

**Interactions**

Sticky; smooth anchor scrolling only when reduced motion is not requested; current section may receive a subtle active state when reliably observable.

**States**

Top, compact/scrolled, anchor hover, active anchor, focus-visible, mobile closed/open, contact surface open. The open mobile menu locks background scrolling and restores focus to the trigger on close.

**Assets Needed**

High-quality logo with transparent background or SVG recreation faithful to the PDF. Status: **Needed for production; PDF extraction acceptable for prototype**.

**Analytics Events**

Offer-direction selections are tracked only when an offer link is used. General navigation clicks are not tracked.

**Acceptance Criteria**

- Header never overlaps an anchored heading after navigation.
- Logo returns to `#top`.
- Mobile menu is keyboard and screen-reader operable.
- Labels do not wrap at supported widths.

### Section: Hero

**Purpose**

Communicate the platform concept and primary actions within 5-10 seconds.

**Content**

- Eyebrow: **«АБРАМОВ ГУРМЕ»**.
- H1: **«Технологии будущего в готовой еде»**.
- Supporting brand line: **«Мы говорим на языке хорошей еды»**.
- Descriptor, draft: **«Инновационная платформа полезного питания в стекле: готовые блюда, продуктовые направления и решения для бизнеса.»**
- Primary CTA: **«Выбрать направление»** -> `#directions`.
- Secondary CTA: **«Связаться»** -> contact surface.

**Layout**

- **Desktop:** asymmetrical split; text occupies approximately 6/12 columns, genuine jar/product image 6/12. H1 limited to a deliberate 2-3 lines.
- **Tablet:** balanced two-column layout when viable; otherwise visual below text.
- **Mobile:** text first, CTA group second, product visual third; buttons full-width only if two-up placement compromises 44px targets or label clarity.

**Visual Direction**

Near-black editorial field with warm ivory type and a genuine product image. Signature device: a restrained “transparent inspection window” extends the real jar image across the boundary into the following ivory section, echoing the product’s visible contents. It must never alter the jar, label, or food.

**Interactions**

Primary CTA scrolls to the offer selector. Secondary CTA opens the desktop popover/mobile bottom sheet. A single coordinated entrance may reveal eyebrow, headline, actions, then image.

**States**

Default, hover, active, focus-visible; motion-reduced state displays final composition immediately. If the hero image fails, reserve its space and show a neutral branded fallback without an invented product.

**Assets Needed**

Strongest genuine jar/product image from the PDF; full logo/wordmark; optional non-documentary background texture. Rights verification is mandatory before public launch.

**Analytics Events**

`offer_direction_select` for the primary CTA with `direction: "selector"`; contact event is emitted only after phone/email is activated, not merely when the surface opens.

**Acceptance Criteria**

- H1 and both actions are visible without horizontal overflow at 320px.
- Main product visual remains documentary and recognizable.
- CTA destinations are correct.
- Hero contains no unsupported pricing, geography, or ordering promise.

### Section: Core Concept

**Purpose**

Explain why glass and in-jar preparation are central to the product.

**Content**

- Eyebrow: **«Философия бренда»**.
- Headline: **«Честность, которую видно сразу»**.
- Principle 1: **«Приготовлено прямо в банке»**.
- Draft body: **«Мы берем лучшие продукты и готовим их непосредственно в банке. Стекло позволяет оценить структуру и эстетику блюда еще до открытия.»**
- Principle 2: **«Абсолютная открытость»**.
- Draft body: **«В отличие от закрытых пластиковых контейнеров, продукт показывает себя сам. Мы не прячем еду за маркетинговой упаковкой.»**
- Supporting label: **«Премиальная экоупаковка»**.

**Layout**

- **Desktop:** editorial 5/7 split between copy and product close-up.
- **Tablet:** 1/2 split or stacked depending on image crop.
- **Mobile:** headline, principles, then image; no text over photography.

**Visual Direction**

Warm ivory field, large Cormorant Garamond headline, Manrope copy, fine copper rule. Preserve the PDF’s transparency and restraint while removing slide-like boxes.

**Interactions**

Subtle once-only reveal; no interactive card behavior.

**States**

Default and reduced-motion. Missing image uses a reserved neutral surface and descriptive fallback, not stock food.

**Assets Needed**

Genuine jar close-up from the PDF or an approved higher-resolution original.

**Analytics Events**

None.

**Acceptance Criteria**

- Both principles are present.
- Text remains source-faithful after grammar correction.
- Image does not imply a product not documented by the source.

### Section: Benefits and Brand Philosophy

**Purpose**

Consolidate the PDF’s repeated health, composition, and material claims into one readable section.

**Content**

- Headline: **«Чистота вкуса и технологическая польза»**.
- Claim 1, grammar-corrected: **«Исключение обжарки. Полный отказ от жарки на масле устраняет канцерогены и трансжиры, делая продукт эталоном чистого ежедневного ЗОЖ-рациона.»**
- Claim 2: **«Чистая аутентичность. Технология длительного бережного томления в собственном соку и вакуумная герметизация обеспечивают свежесть без консервантов.»**
- Claim 3: **«Сбережение нутриентов. Ювелирно выверенный щадящий температурный режим сохраняет до 90% природных витаминов, макро- и микроэлементов.»**
- Claim 4, grammar-corrected: **«Химическая нейтральность. Стекло нейтрально, поэтому, в отличие от традиционной упаковки, полностью исключен контакт горячей пищи с пластиком, что предотвращает выделение микропластика и фталатов.»**
- Compact source labels may include **«100% ЗОЖ»**, **«Вакуум»**, **«0% химии»**, and **«Витамины»** only where they remain readable and do not replace the full claim.

**Layout**

- **Desktop:** 2x2 typographic grid with one emphasized quotation-scale statement.
- **Tablet:** 2-column grid.
- **Mobile:** linear sequence; no horizontal carousel.

**Visual Direction**

Typography-led. Avoid generic health icons, green gradients, medical symbolism, and invented scientific diagrams. Copper rules encode separation only.

**Interactions**

Once-only reveal by row; no hover dependency.

**States**

Default and reduced-motion.

**Assets Needed**

None required; optional approved decorative ingredient detail may be used without representing a specific SKU.

**Analytics Events**

None.

**Acceptance Criteria**

- All four claims appear without altered numbers or meaning.
- Claims are presented as brand content, not third-party proof.
- Public launch is blocked until the required claim-verification review is recorded.

### Section: Product Ecosystem Overview

**Purpose**

Explain the confirmed brand matrix before asking the visitor to choose a path.

**Content**

- Eyebrow: **«Матрица бренда»**.
- Headline: **«Пять векторов развития коллекции»**.
- Flagship: **«Абрамов Гурме»** - complex restaurant recipes and rare delicacy flavor combinations.
- A1: **«Ланчи»**.
- A2: **«Фитнес»**.
- A3: **«Для баров»**.
- A4: **«Десерты»**.
- Clarification: the autonomous micromarket is a commercial distribution model, not a sixth product line.

**Layout**

- **Desktop:** flagship band across the width, followed by four aligned direction summaries.
- **Tablet:** flagship band + 2x2 grid.
- **Mobile:** flagship followed by four stacked summaries.

**Visual Direction**

Reinterpret the PDF matrix with readable spacing and no extreme letterspacing. Line codes A1-A4 are functional identifiers, not decorative numbering.

**Interactions**

Each direction links to its matching detailed section. Entire card may be clickable only if semantics and focus behavior remain clear.

**States**

Default, hover, active, focus-visible.

**Assets Needed**

No unique asset required.

**Analytics Events**

`offer_direction_select` with `direction: flagship|a1|a2|a3|a4` and `source: ecosystem`.

**Acceptance Criteria**

- Exactly five product vectors are shown: flagship plus A1-A4.
- Micromarket is not misrepresented as another product line.
- Every link lands on a unique, correctly labeled section.

### Section: Offer Selector

**Purpose**

Provide a fast, explicit choice among the five directions.

**Content**

- Headline: **«Выберите направление»**.
- Five concise cards using confirmed names and one-line source-derived summaries.
- Link label: **«Подробнее»**.

**Layout**

- **Desktop:** five-item editorial index; flagship may receive larger visual weight without implying greater commercial priority.
- **Tablet:** 2-column wrapping layout with flagship full-width.
- **Mobile:** vertical anchor list. No tabs, swipe-only interaction, or hidden panels.

**Visual Direction**

Cards resemble disciplined catalogue entries rather than generic SaaS tiles. Use codes only for A1-A4, hairline dividers, and typographic contrast.

**Interactions**

Anchor jump/scroll to offer sections. Respect reduced motion. Focus moves naturally; do not programmatically steal focus after ordinary anchor navigation.

**States**

Default, hover, active, focus-visible, visited state that does not reduce contrast.

**Assets Needed**

None.

**Analytics Events**

`offer_direction_select` with `direction` and `source: selector`.

**Acceptance Criteria**

- All choices are usable with keyboard, touch, and pointer.
- Mobile behavior uses anchor links, not tabs.
- No direction is hidden behind interaction.

### Section: Detailed Offers

**Purpose**

Explain each confirmed direction with its exact available facts and price where the PDF supplies one.

**Content**

#### `offer-flagship` - Абрамов Гурме

- Headline: **«Высокое гастрономическое искусство»**.
- **«Шедевры рецептуры»**: complex original recipes from brand chefs, rare gastronomic combinations, and delicacy sauces.
- **«Селекция фермеров»**: exclusively certified high-grade ingredients from trusted farms and known suppliers.
- **«Ресторан дома»**: glass presentation turns eating at home or in the office into an element of restaurant culture.
- Price: **Ordinary TBD**; do not display a placeholder price to visitors.

#### `offer-a1` - A1. Ланчи

- Headline: **«Корпоративные ланчи новой формации»**.
- Source-derived points: alternative to street food and industrial canteens; balanced meals at the workplace; employee wellbeing and food culture; production-volume optimization.
- Set: **«Суп + горячее блюдо + салат»**, sold as one SKU.
- Price: **«350-400 рублей за набор»**.

#### `offer-a2` - A2. Фитнес

- Headline: **«Здоровый баланс и интеллектуальный фитнес-рацион»**.
- Source-derived points: calorie calculation, BJU balance, active-lifestyle audience, no sugar or preservatives, focus on digestible protein, fiber, and slow carbohydrates.
- Price: **«250-500 рублей за блюдо»**.

#### `offer-a3` - A3. Для баров

- Headline: **«Кухня без затрат и повара»**.
- **«Меню за 1 минуту»**: rapid heating and presentation directly in glass, without waiting or a kitchen.
- **«Стабильность качества»**: standardized recipes and reduced variability/manual operations.
- **«Повышение маржинальности»**: reproduce the PDF’s stated claims about turnover, costs, average check, and service speed.
- Grammar-corrected source statement: **«A3 превращает любую фуд-точку без кухни в полноценный гастрономический сервис.»**
- Price: **«250-500 рублей за блюдо»**.

#### `offer-a4` - A4. Десерты

- Headline: **«Авторские десерты в стекле: искусство текстуры»**.
- Assortment: воздушное суфле; ягодно-фруктовый мусс-пудинг; «Наполеон»; «Медовик»; брауни; тирамису; панна-котта; прозрачное ягодное желе.
- Source-derived presentation claim: glass preserves geometry, airy texture, freshness, and aroma without chemical stabilizers.
- Price: **«200-500 рублей за блюдо»**.

Each offer may use the common CTA **«Связаться»**. Do not create offer-specific sales forms or implied ordering flows.

**Layout**

- **Desktop:** five distinct anchored subsections with alternating 5/7 and 7/5 editorial compositions; keep price close to the offer title.
- **Tablet:** two-column where the asset remains legible; otherwise stack.
- **Mobile:** one linear content flow per offer; code/name, title, summary, facts, price, optional contact CTA.

**Visual Direction**

Each line receives a restrained crop or material accent derived from available imagery; do not create five unrelated mini-brands. Maintain the common ivory/black/copper system.

**Interactions**

Optional repeated contact CTA opens the shared contact surface. No carousels or tabs.

**States**

Anchor target highlight may appear briefly without motion in reduced-motion mode. CTA states follow the button system. Missing/unsuitable imagery collapses to a typography-led composition rather than using misleading stock.

**Assets Needed**

Approved imagery for flagship, A1, A2, A3, and A4. The PDF’s A4 image does not reliably depict the named desserts; it must not be used as documentary evidence for those products. Status: **Needed/approval required**.

**Analytics Events**

Phone/email events inherit `context: offer-flagship|offer-a1|offer-a2|offer-a3|offer-a4` when technically available without adding complexity.

**Acceptance Criteria**

- All five directions appear with the correct names.
- Prices are shown only for A1-A4 and match the PDF exactly.
- No menu items, weights, nutrition values, availability, delivery, or ordering details are invented.
- A4 imagery does not falsely present undocumented products.

### Section: Menu and Dayparts

**Purpose**

Show the breadth of the food concept without implying a complete purchasable menu.

**Content**

- Eyebrow: **«Гастрономический цикл»**.
- Headline: **«Сбалансированное меню для любого времени суток»**.
- **«Завтрак»**: slow-cooked porridges with alternative milk, soufflés, and light cottage-cheese casseroles.
- **«Обед»**: first courses, thick broths, and substantial meat dishes with complex grains.
- **«Ужин»**: dietary poultry, white fish with light signature sauces, and vegetables.
- **«Ночной бар»**: light salads, snacks, and desserts.
- Rotation claim: **«Цикличная ротация меню на 7 дней»**.
- Separate lunch/daily format: **«Три баночки на день: суп, горячее блюдо и салат»**.
- Editorial note in the specification only: the relationship between the three-jar format and four dayparts is **Ordinary TBD - requires confirmation**. The page must present them as separate concepts.

**Layout**

- **Desktop:** four daypart columns along a horizontal daily rhythm; three-jar format in a separate emphasized band below.
- **Tablet:** 2x2 daypart grid; separate band below.
- **Mobile:** four stacked dayparts followed by the three-jar format. No horizontal scroll is required.

**Visual Direction**

Use time-of-day tonal shifts within the established palette, not literal clocks or decorative timelines. Only use food imagery that semantically matches the adjacent category.

**Interactions**

Static content with restrained reveals; no carousel.

**States**

Default and reduced-motion.

**Assets Needed**

Approved daypart imagery, if used. Images are optional; typography-led presentation is acceptable when source imagery is ambiguous.

**Analytics Events**

None.

**Acceptance Criteria**

- Four dayparts and the seven-day rotation claim appear.
- Three-jar format is visually and semantically separate.
- No exact weekly menu is invented.

### Section: Technology

**Purpose**

Translate the dense preparation explanation into a clear visible summary while retaining detailed source material.

**Content**

- Eyebrow: **«Технология приготовления»**.
- Draft introduction: **«Длительный срок годности блюд достигается за счет стерилизации в аппаратах высокого давления. Температура и время обработки подбираются для каждого вида продукта.»**
- Permanently visible three-step process:
  1. **«Нагрев и выдержка»** - temperature and pressure rise gradually to set values; the product is held for a defined time.
  2. **«Стерилизация»** - high temperature and pressure destroy microorganism protein structures, including heat-resistant bacterial spores.
  3. **«Охлаждение»** - temperature and pressure decrease smoothly to prevent deformation of products and jars.
- Native disclosure label: **«Подробнее о технологии»**.
- Disclosure content must include:
  - product heating above 89°C, usually to **115-135°C**;
  - statement that microorganism destruction depends on temperature and exposure duration;
  - PDF statement about botulism pathogen spores dying above 115°C and ordinary boiling at 100°C not providing complete sterilization;
  - individual modes based on pH, consistency, container volume, and potential microorganism heat resistance;
  - separate regimes for low-pH vegetable dishes and more intensive meat/fish processing;
  - seal requirement and valve-lid swelling description.
- Editorial note in the specification only: the relationship between “длительное бережное томление”/“щадящий температурный режим” and sterilization at 115-135°C is **Ordinary TBD - requires confirmation**. Do not invent a reconciliation.

**Layout**

- **Desktop:** three equal process columns connected by one restrained process rule; disclosure below within a 65-75 character reading measure.
- **Tablet:** three cards or a vertical sequence depending on line wrapping.
- **Mobile:** numbered vertical sequence because order is meaningful; disclosure directly below.

**Visual Direction**

Shift from editorial gastronomy to clean technical precision: stone surface, dark typography, copper process rule, small monospaced numeric labels only if a system font is used. Do not add fabricated charts, gauges, laboratory seals, or certification marks.

**Interactions**

Use semantic `<details>/<summary>`. It works without custom JavaScript. Opening and closing may animate opacity/height only when progressive enhancement does not compromise accessibility.

**States**

Disclosure closed/open, hover, active, focus-visible, reduced-motion. Content remains available if CSS or JavaScript fails.

**Assets Needed**

Optional approved production-room photograph. No invented equipment diagrams.

**Analytics Events**

`technical_details_toggle` with `state: open|closed` and `section: technology`; provider remains **Ordinary TBD / Optional**.

**Acceptance Criteria**

- Three-step summary remains visible without interaction.
- Every required detailed fact appears inside the disclosure.
- Native keyboard and screen-reader behavior passes.
- No technical relationship absent from the PDF is asserted.

### Section: Shelf Life, Safety, and Packaging

**Purpose**

Group the source’s shelf-life, loss-reduction, documentary, material, and seal-integrity claims into one coherent trust-oriented section.

**Content**

- Headline: **«Срок хранения до 1 года: 0% списаний»**.
- Supporting figure: **«365 дней»**.
- Source-derived claims:
  - the industrial process produces a predictable result and long shelf life;
  - standard retail write-offs of **5-20%** become zero;
  - a 365-day shelf life enables fuller showcases, seasonal planning, turnover optimization, and assortment flexibility;
  - the product may remain at room temperature after processing and sealing;
  - glass is transparent and chemically neutral;
  - the lid valve swells if seal integrity is breached.
- Documentation statement: **«Технология подтверждена документально: протоколы испытаний, свидетельства соответствия и санитарно-эпидемиологические заключения.»**
- Do not display invented document thumbnails, certificate numbers, issuers, dates, or badges.

**Layout**

- **Desktop:** one large “365” typographic anchor with adjacent claim groups and packaging detail.
- **Tablet:** 40/60 split.
- **Mobile:** headline, figure, claims, packaging/seal detail, documentation statement.

**Visual Direction**

Large numeric typography is justified because 365 is a source fact. Pair it with a real glass/lid macro. Avoid medical blue, shield icons, or third-party certification styling.

**Interactions**

Static. Do not turn unprovided documentation into clickable controls.

**States**

Default, reduced-motion, missing-image fallback.

**Assets Needed**

Approved jar/lid macro; documentary evidence if the business later chooses to publish it. Evidence status: **Needed before public launch review**.

**Analytics Events**

None.

**Acceptance Criteria**

- Numbers remain exactly 365 days, 0%, and 5-20%.
- Claims are not presented as site-team verification.
- No fake trust marks or documentation links appear.

### Section: B2B Advantages

**Purpose**

Present the platform’s retail/distribution rationale without inventing commercial terms.

**Content**

- Eyebrow: **«B2B-партнерство и дистрибуция»**.
- Headline: **«Ассортимент без риска»**.
- Three blocks:
  - **«Переосмысленная традиция»** - adaptation of home-preservation principles for industrial production.
  - **«Конец финансовых потерь»** - source claim that 5-20% standard write-offs become zero.
  - **«Ассортимент без риска»** - source claims about planning, logistics, SKU breadth, and pricing flexibility.
- CTA vocabulary remains **«Связаться»**. Supporting text may say “по вопросам партнерства,” but the action label must not imply a formal application flow.

**Layout**

- **Desktop:** three asymmetric editorial columns; one proof-needing statement is not visually disguised as a chart.
- **Tablet:** two columns plus full-width third block.
- **Mobile:** linear order.

**Visual Direction**

Businesslike but continuous with the gastronomy system. Use typography and rules, not stock office photography or fabricated data graphics.

**Interactions**

CTA opens shared contact surface.

**States**

CTA default/hover/active/focus-visible; content has reduced-motion variant.

**Assets Needed**

None required.

**Analytics Events**

Phone/email activation uses `context: business`.

**Acceptance Criteria**

- No wholesale tiers, margins, minimum orders, logistics terms, or partner economics are invented.
- All quantitative statements match the PDF.

### Section: Autonomous Micromarket

**Purpose**

Explain the separate compact retail/distribution model.

**Content**

- Eyebrow: **«Коммерческая архитектура»**.
- Headline: **«Высокоэффективная розничная модель на 1 кв. метре»**.
- **«Минимум площади - максимум маржи»**: source claim about a smart automated self-service module occupying up to **1.2 m²** and generating record income per square centimeter.
- **«Отсутствие инфраструктурных барьеров»**: no extraction, water connection, complex engineering approval, or capital construction; **only an electrical outlet is needed**.
- **«Запуск сети за 24 часа»**: reproduce the source claim about installation, digital ecosystem connection, rapid break-even, and minimal starting-investment threshold.
- **«Загрузка»**: up to **420 portions per micromarket refrigerator**.
- CTA: **«Связаться»**.

**Layout**

- **Desktop:** verified micromarket photograph occupies 5/12 columns; four claims occupy 7/12 with 1.2 m² and 420 emphasized.
- **Tablet:** balanced split if the image remains legible; otherwise stack.
- **Mobile:** text first, image second, CTA last. Do not crop away the actual unit.

**Visual Direction**

Dark technical panel that echoes the physical black refrigerator and wood installation shown in the PDF. Copper is used for dimensions/data labels, not faux metrics dashboards.

**Interactions**

CTA opens shared contact surface. No animated counters.

**States**

CTA states, missing-image fallback, reduced-motion.

**Assets Needed**

Genuine micromarket photograph from the PDF or approved original. Rights verification mandatory before public launch.

**Analytics Events**

Phone/email activation uses `context: micromarket`.

**Acceptance Criteria**

- Exact values 1 m² in headline, up to 1.2 m² in detail, 24 hours, and up to 420 portions remain distinguishable.
- No CAPEX/OPEX, payment flow, connectivity, ownership, servicing, or payback figure is invented.

### Section: Final Contact

**Purpose**

Provide a definitive, low-friction endpoint using only verified contact methods.

**Content**

- Eyebrow: **«Контакты»**.
- Headline: **«Связаться»**.
- Name: **«Андрей Абрамов»**.
- Phone display: **«+7 980 409 3293»**; `href="tel:+79804093293"`.
- Email display: **«aa@aa1.ru»**; `href="mailto:aa@aa1.ru"`.
- Do not add response-time, geography, job title, messenger, form, address, or ordering promise.

**Layout**

- **Desktop:** dark full-width closing panel with mark on one side and large contact links on the other.
- **Tablet:** two columns or stacked based on fit.
- **Mobile:** stacked, full-width tap targets; phone before email.

**Visual Direction**

Return to the hero’s near-black field with warm ivory type and restrained copper logo/rules.

**Interactions**

Native phone and email links. Do not intercept or simulate success states.

**States**

Default, hover, active, focus-visible, visited. If no phone/email handler is configured on the device, browser/OS behavior is accepted; the visible value remains selectable and copyable.

**Assets Needed**

Full logo/wordmark.

**Analytics Events**

`contact_phone_click` with `context: final_contact`; `contact_email_click` with `context: final_contact` when analytics is enabled.

**Acceptance Criteria**

- Visible and machine-readable contact values match the PDF.
- Links work without JavaScript.
- No form is present.

### Section: Footer

**Purpose**

Provide verified identity, repeat navigation, and a quiet page ending.

**Content**

- Brand logo/name.
- Anchor links matching the header.
- Андрей Абрамов, phone, email.
- Copyright: **«© [current year] Абрамов Гурме»**. The year is generated at build/render time; ownership wording must receive content approval if legal review requires it.
- Privacy, terms, address, social, and legal-entity links: **Ordinary TBD; omit until real destinations exist**.

**Layout**

- **Desktop:** brand, navigation, and contact columns.
- **Tablet:** two rows.
- **Mobile:** single column; contact links remain large enough for touch.

**Visual Direction**

Near-black, lower contrast than the final contact section, separated by a thin line.

**Interactions**

Native anchors, `tel:`, and `mailto:`.

**States**

Link hover, active, focus-visible, visited.

**Assets Needed**

Compact logo asset.

**Analytics Events**

Phone/email events use `context: footer`. General footer navigation is not tracked.

**Acceptance Criteria**

- No empty or placeholder legal links appear in production UI.
- All repeated contact values are consistent.

## 7. Header & Navigation

### Desktop

- Sticky at the viewport top with a stacking context above page content and below the contact surface.
- Initial height target: 88px; compact height target: 64px after approximately 24px of page scroll. Exact thresholds may be tuned without changing behavior.
- Navigation labels: **О продукте**, **Направления**, **Технология**, **Для бизнеса**, **Контакты**.
- CTA: **Связаться**.
- Logo hit area links to `#top` and has accessible name **«Абрамов Гурме - к началу страницы»**.
- Anchor targets use `scroll-margin-top` equal to compact header height plus 16px.

### Tablet

- Keep desktop navigation only while all labels and CTA fit on one line with minimum target spacing.
- Collapse to mobile behavior based on content fit, normally below the `lg` token.

### Mobile

- Menu button exposes `aria-expanded` and `aria-controls`.
- Open menu is a vertical overlay panel with all anchors and the contact CTA.
- Escape, close button, backdrop activation, and selecting an anchor close the menu.
- Focus enters the panel on open, remains contained while modal, and returns to the trigger on close.
- Background scroll is locked while open.

### Sticky and scroll behavior

- Header compaction animates in 160ms when motion is allowed.
- The header must not repeatedly expand/collapse due to single-pixel scroll jitter.
- Active anchor styling is optional if Intersection Observer behavior is reliable; absence of active highlighting is preferable to incorrect highlighting.
- Smooth scrolling is disabled under `prefers-reduced-motion: reduce`.

### Contact surface

- Shared component triggered from header, hero, offers, B2B, micromarket, and mobile menu.
- Desktop: small dialog visually positioned as an anchored popover near the initiating CTA.
- Mobile: bottom sheet with backdrop.
- Use one semantic dialog implementation with responsive presentation; do not maintain two divergent content trees.
- Visible actions: **«Позвонить»** with phone number and **«Написать на email»** with email address.
- Include a visible **«Закрыть»** control.
- Escape and backdrop close the surface. Backdrop pointer-down followed by pointer-up outside closes; a drag beginning inside must not accidentally close it.
- Opening focuses the dialog heading or first action; closing restores focus to the exact trigger.
- Direct phone/email links remain available in the final contact section if JavaScript fails.

## 8. Footer

The footer contains only verified or explicitly approved content:

- confirmed logo/name;
- same anchor labels/destinations as header;
- Андрей Абрамов;
- `+7 980 409 3293`;
- `aa@aa1.ru`;
- approved copyright line.

Do not render placeholders for privacy, terms, address, social profiles, legal entity, or domain. Track missing items in the content checklist, not in the public interface.

## 9. Forms

No forms are permitted in the MVP.

| Requirement | Decision |
| --- | --- |
| Purpose | Not applicable. Conversion occurs through phone or email. |
| Fields | None. |
| Validation | None. |
| Submit/loading/success/error | None. Do not simulate submission states. |
| CRM/email/Telegram/webhook/API | None. |
| Anti-spam | Not applicable. |
| Privacy consent | Not required by a form because no personal data is collected on-page. Reassess if analytics or other data-processing tools are added. |
| Post-success behavior | Controlled by the visitor’s device and phone/email client. |

## 10. Responsive Behavior

Baseline tokens: `sm 640`, `md 768`, `lg 1024`, `xl 1280`, `2xl 1536`. They are content-driven design tokens, not device labels. Components may change layout earlier when content fails to fit.

| Element | Desktop | Tablet | Mobile |
| --- | --- | --- | --- |
| Container | Max 1280px; at least 48px side padding. | 32px side padding. | 20px side padding. |
| Header | Logo, anchors, contact CTA. | Desktop until labels no longer fit; then mobile behavior. | Logo + menu button; vertical overlay menu. |
| Hero | Asymmetric 6/12 text + 6/12 visual. | Two-column or stacked. | Text -> CTAs -> visual. |
| Hero CTAs | Inline group. | Inline where fit permits. | Stack/full-width when needed; never truncate labels. |
| Core concept | 5/7 editorial split. | 1/2 or stacked. | Linear content; no text over image. |
| Benefit grid | 2x2. | 2 columns. | Single column. |
| Ecosystem | Flagship full-width + 4 columns. | Flagship + 2x2. | Linear stack. |
| Offer selector | Five-item anchor index. | Wrapped 2-column layout. | Vertical anchor links; no tabs. |
| Detailed offers | Alternating image/text split. | Split when viable, otherwise stack. | Single reading order. |
| Dayparts | Four columns. | 2x2. | Four stacked blocks. |
| Technology steps | Three columns. | Three cards or vertical based on fit. | Ordered vertical sequence. |
| Technical detail | Reading-width disclosure. | Reading-width disclosure. | Full-width native disclosure. |
| Safety | Large number + adjacent claims. | 40/60 or stack. | Number -> claims -> packaging. |
| B2B | Three asymmetric columns. | 2 + 1 layout. | Single column. |
| Micromarket | 7/5 copy/image split. | Split or stacked. | Copy -> image -> CTA. |
| Contact surface | Anchored popover-style dialog. | Dialog placement based on available space. | Bottom sheet, max height with internal scrolling. |
| Final contact | Two-column closing panel. | Two columns or stack. | Stacked, large touch targets. |
| Footer | Three columns. | Two rows. | Single column. |
| Images | Art-directed responsive sources; preserve subject. | Re-crop without altering contents. | Avoid crops that hide jar, label, or micromarket unit. |
| Long text | 65-75 character measure. | Same measure where possible. | Full available width with comfortable line height. |

Additional rules:

- Preserve every substantive topic on mobile.
- No page-level horizontal scrolling at 320 CSS pixels or at 200% browser zoom.
- Do not solve dense content with tiny text.
- Offer and comparison content stacks; no swipe-only access.
- Very large screens retain the 1280px content maximum while full-bleed backgrounds may extend to the viewport.

## 11. Design System

### Visual concept

**Hybrid editorial gastronomy + technical precision.** Food/product sections feel tactile, premium, and calm; technology/B2B sections become more structured and neutral. The two modes share typography, spacing, and copper rules so the page remains one identity.

The page’s signature is the **transparent inspection window**: the genuine hero jar crosses the dark-to-ivory section boundary inside a clear, lightly outlined frame. It expresses the source proposition—food visible through glass—without inventing imagery or adding decorative spectacle. Use this signature once; do not repeat glass effects across every card.

### Colors

Initial implementation tokens, sampled/interpreted from the PDF and subject to visual QA against extracted assets:

| Token | Value | Use |
| --- | --- | --- |
| `--color-night` | `#090908` | Hero, contact, footer backgrounds. |
| `--color-ink` | `#211B17` | Primary text on light surfaces. |
| `--color-ivory` | `#F7F4ED` | Main page background. |
| `--color-stone` | `#EDE7DC` | Technical panels and quiet cards. |
| `--color-copper` | `#B97845` | Accent rules, selected states, limited display accents. |
| `--color-bronze` | `#C99E58` | Secondary accent and logo-adjacent details. |
| `--color-line` | `#D8CCBB` | Dividers and neutral borders. |
| `--color-focus` | `#1670C5` | Accessible focus ring where copper lacks contrast. |
| `--color-error` | `#B42318` | Reserved for future/system errors; contact UI does not generate site errors. |

Rules:

- Copper/bronze are decorative accents, not default small text on ivory.
- Do not use shiny gold text, bevels, metallic animations, or heavy glow.
- Subtle copper gradients are allowed only on large decorative marks and must remain legible when flattened to a single color.
- Verify all text/background pairs against WCAG 2.2 AA.

### Typography

- Display/headings: **Cormorant Garamond**, weights 500 and 600.
- Body/UI: **Manrope**, weights 400, 500, 600, and 700 only where required.
- Logo: graphic asset; never reconstructed with either font.
- Use Cyrillic subsets and only required weights.
- Suggested fluid scale:
  - Display/H1: `clamp(3rem, 7vw, 7rem)`, line-height 0.92-1.02 after visual QA.
  - H2: `clamp(2.25rem, 4.5vw, 4.75rem)`, line-height 1.0-1.08.
  - H3: `clamp(1.5rem, 2.5vw, 2.5rem)`.
  - Body large: `clamp(1.0625rem, 1.4vw, 1.25rem)`.
  - Body: `1rem` minimum; line-height 1.55-1.7.
  - Utility/caption: `0.8125rem` minimum; use moderate letterspacing, never the PDF’s extreme spacing.
- Do not italicize long body passages.

### Spacing

Base unit: 4px. Named scale: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128. Section spacing uses `clamp(72px, 10vw, 144px)` unless a visual transition requires less.

### Grid

- 12-column desktop grid with 24px gutters.
- 8-column tablet grid with 20-24px gutters.
- 4-column mobile grid with 16px gutters.
- Break grid only for the single hero inspection-window signature and full-bleed background fields.

### Containers

- Primary max width: 1280px.
- Long-form text: 65-75 characters.
- Edge padding: 20px mobile, 32px tablet, at least 48px desktop.

### Border Radius

- Buttons/inputs: 4px.
- Cards/panels: 0-8px; default 4px.
- Contact bottom sheet: 16px top corners.
- Avoid pill-shaped containers except small status labels where semantics justify them.

### Borders

1px neutral/copper rules. Borders establish editorial structure; do not outline every container.

### Shadows

- Default cards: none.
- Floating header/contact surface: one soft shadow, e.g. `0 16px 48px rgb(9 9 8 / 16%)`.
- Product imagery may use a restrained natural shadow already present in the approved photo; do not fake a floating jar with heavy CSS shadow.

### Icons

Use icons only where they clarify menu, close, phone, email, and disclosure controls. Use one simple stroke family. Every icon-only menu/close control requires an accessible name; contact actions include visible text.

### Buttons

- Primary: copper/bronze fill on dark or ink fill on light, selected based on contrast.
- Secondary: transparent with visible border.
- Minimum height: 48px; minimum touch area 44x44px.
- States: default, hover, active, focus-visible, disabled only if a future workflow requires it.
- No loading state for native anchor/contact actions.

### Inputs

No inputs in MVP. Do not add an input system to implementation solely for future use.

### Cards

Use editorial entries with hierarchy and rules rather than elevated generic cards. Entire-card links require a single unambiguous interactive target and visible focus styling.

### Links

Body links are underlined or otherwise distinguishable without color alone. Navigation links may use a rule/weight change. Phone/email values remain visibly link-like.

### Focus States

Use a 2px focus ring in `--color-focus` plus sufficient offset. On complex/dark imagery, use a two-layer light/dark ring. Never remove outlines without an equivalent visible replacement.

## 12. Components

```text
LandingPage
├── SiteHeader
│   ├── BrandLogoLink
│   ├── AnchorNav
│   ├── MobileNavDialog
│   └── ContactTrigger
├── HeroSection
│   ├── HeroCopy
│   ├── CTAGroup
│   └── ProductInspectionVisual
├── ConceptSection
├── BenefitGrid
│   └── BenefitItem
├── EcosystemOverview
│   └── DirectionSummary
├── OfferSelector
│   └── OfferAnchor
├── OffersSection
│   └── OfferDetail × 5
├── DaypartsSection
│   ├── DaypartItem × 4
│   └── ThreeJarFormat
├── TechnologySection
│   ├── ProcessStep × 3
│   └── TechnologyDisclosure
├── SafetySection
├── BusinessSection
├── MicromarketSection
├── FinalContactSection
├── SiteFooter
└── ContactDialog
    ├── ContactAction
    └── DialogClose
```

### Important component contracts

#### `AnchorNav`

- **Responsibility:** Render the one canonical navigation model in desktop, mobile, and footer contexts.
- **Props:** `items: { label: string; href: #... }[]`, `variant`, optional `onNavigate`.
- **Variants:** `header`, `mobile`, `footer`.
- **States:** current/hover/focus; current is optional when detection is reliable.
- **Dependencies:** shared section IDs and scroll-margin tokens.

#### `ContactDialog`

- **Responsibility:** Present the two verified contact methods in an accessible modal surface.
- **Props:** `open`, `onOpenChange`, `returnFocusRef`, optional `context`.
- **Variants:** desktop popover presentation, mobile bottom-sheet presentation; same DOM/content model.
- **States:** closed, opening, open, closing, reduced-motion.
- **Dependencies:** focus management, scroll lock, native `tel:`/`mailto:` links.

#### `OfferSelector`

- **Responsibility:** Link to the five offer sections without hiding content.
- **Props:** typed list of `id`, `code?`, `name`, `summary`, `href`.
- **Variants:** responsive layout only; never tabs.
- **States:** default, hover, active, focus-visible.
- **Dependencies:** `OfferDetail` IDs and optional analytics callback.

#### `OfferDetail`

- **Responsibility:** Render one source-defined line consistently while allowing editorial layout variation.
- **Props:** `id`, `code?`, `name`, `headline`, `points`, `price?`, `image?`, `layout`, `contentApprovalStatus`.
- **Variants:** `image-left`, `image-right`, `type-led`.
- **States:** anchored/default; missing image falls back to type-led.
- **Dependencies:** optimized image component and shared contact trigger.

#### `TechnologyDisclosure`

- **Responsibility:** Keep deep technical content available without overwhelming the main narrative.
- **Props:** `summary`, content children, optional analytics callback.
- **Implementation:** native `<details>/<summary>`.
- **States:** open/closed/focus-visible/reduced-motion.
- **Dependencies:** none for basic functionality.

#### `ResponsiveEditorialImage`

- **Responsibility:** Serve approved responsive source imagery with stable dimensions and faithful crops.
- **Props:** `src`, `alt`, `sizes`, `priority`, `crop`, `documentary: boolean`, `rightsStatus`.
- **Variants:** hero, product, editorial, technical, micromarket.
- **States:** loading, loaded, failure fallback.
- **Dependencies:** Next.js image optimization.

Avoid components for one-off wrappers or decorative rules. Static section copy may remain close to the section component; repeated offers and navigation live in typed local data.

## 13. Motion Specification

| Element | Purpose | Trigger | Property | Start -> end | Duration | Easing | Delay | Mobile | Reduced motion |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Header compact | Preserve space while maintaining navigation. | Scroll past ~24px. | height, background opacity | 88px -> 64px | 160ms | standard | 0 | Same behavior with mobile heights tuned | Immediate state change. |
| Hero sequence | Establish hierarchy once. | Initial page load. | opacity, translateY | 0/16px -> 1/0 | 500ms | standard | 0/70/140ms sequence | Shorter 400ms | Show final state immediately or opacity <=120ms. |
| Hero visual | Connect luxury/product thesis. | Initial page load. | opacity, scale | 0/1.02 -> 1/1 | 600ms | standard | 120ms | Scale omitted if crop risks movement | Final state immediately. |
| Section reveal | Aid reading progression. | First viewport entry. | opacity, translateY | 0/20px -> 1/0 | 450ms | standard | 0-80ms within small groups | 400ms max | No translation; immediate/short opacity. |
| Image transition | Add restrained editorial polish. | First viewport entry. | opacity, clip/mask only if performant | concealed edge -> full | 500ms | standard | 0 | Simple opacity | Immediate. |
| Button/link feedback | Confirm interaction. | Hover/focus/press. | color, background, border, transform | state values | 120-180ms | ease-out | 0 | No hover assumption | Color/border may transition <=120ms. |
| Contact dialog | Show conversion options. | CTA activation. | opacity, translate/scale | desktop 0/4px -> 1/0; mobile y 24px -> 0 | 220ms desktop; 260ms mobile | standard | 0 | Bottom-sheet motion | Immediate or opacity <=120ms. |
| Backdrop | Establish modal context. | Contact/menu open. | opacity | 0 -> target | 200ms | ease-out | 0 | Same | Immediate. |
| Technology disclosure | Preserve context. | Native toggle. | optional opacity/height enhancement | collapsed -> content | 220ms max | ease-out | 0 | Same | Native immediate open/close. |

Standard easing: `cubic-bezier(0.22, 1, 0.36, 1)`.

Constraints:

- Reveal once only.
- Animate opacity and transforms where possible.
- No parallax, cursor effects, autoplay video, counters, ambient loops, or scroll-jacking.
- Content and controls exist in final readable state before animation enhancement.

## 14. SEO

### Draft metadata

- Language/locale: `ru-RU`.
- Title draft: **«Абрамов Гурме - технологии будущего в готовой еде»**.
- Meta description draft: **«Абрамов Гурме - готовые блюда в стекле, продуктовые направления для дома, офиса, фитнеса, баров и бизнеса.»**
- Canonical: **Ordinary TBD - domain not provided**.
- Robots: allow indexing only after public-launch verification gates pass. Staging must use `noindex, nofollow` and access controls where available.
- OpenGraph title/description: mirror approved title/description.
- OpenGraph image: approved 1200x630 composition using genuine logo/product imagery; rights verification required.
- Twitter/X card: `summary_large_image`; account handle omitted.
- Favicon/app icons: derived from approved monogram.

### Semantic structure

- Exactly one H1: **«Технологии будущего в готовой еде»**.
- H2 for major sections; H3 for offer/daypart/process items.
- Do not use heading elements solely for visual styling.
- Anchor IDs are stable and human-readable.

### Structured data

`Organization` is **Pending / Ordinary TBD**. Do not publish incomplete or fabricated JSON-LD. Reassess when verified organization name/legal identity, canonical URL, logo URL, and contact details are approved for structured data. Product/Offer markup is not appropriate without real SKU-level availability and offer data.

### Supporting files

- `sitemap.xml` and `robots.txt` generated by Next.js only after a canonical domain is known.
- Image filenames and alt text describe visible content; do not keyword-stuff.

## 15. Analytics

Analytics provider and live implementation are **Ordinary TBD / Optional for MVP**. Do not add a cookie banner until an actual selected tool and configuration require consent. Event names below form the future contract.

| Event | Trigger | Parameters | Purpose |
| --- | --- | --- | --- |
| `contact_phone_click` | Visitor activates a `tel:` link. | `context: header_dialog|hero_dialog|offer-*|business|micromarket|final_contact|footer` | Determine which content contexts lead to phone intent. |
| `contact_email_click` | Visitor activates a `mailto:` link. | Same `context` values. | Determine which content contexts lead to email intent. |
| `offer_direction_select` | Visitor selects flagship/A1/A2/A3/A4 or the hero selector CTA. | `direction`, `source: hero|ecosystem|selector|navigation` | Understand which direction attracts interest and whether the selector is used. |
| `technical_details_toggle` | Technology disclosure opens or closes. | `state: open|closed`, `section: technology` | Determine whether visitors seek detailed technical explanation. |

Rules:

- Do not fire a contact conversion when the contact surface merely opens.
- Do not collect phone/email values, free text, or unnecessary personal data.
- Do not track generic scroll depth, FAQ, pricing views, or video because those components/questions do not exist in the MVP.

## 16. Accessibility

Implementation and QA checklist:

- [ ] Meet WCAG 2.2 AA for applicable content and interactions.
- [ ] Use semantic landmarks: `header`, `nav`, `main`, section headings, `footer`.
- [ ] Include one H1 and a logical, non-skipping heading hierarchy.
- [ ] Provide a visible “skip to content” link.
- [ ] All navigation, dialog, disclosure, phone, and email actions are keyboard operable.
- [ ] Focus order matches visual reading order.
- [ ] Focus is visible on every interactive element and not obscured by the sticky header.
- [ ] Mobile menu/contact dialog trap focus only while modal and restore it on close.
- [ ] Escape and visible close controls work predictably.
- [ ] Backdrop behavior does not cause accidental dismissal from an interaction beginning inside the dialog.
- [ ] Native `<details>/<summary>` exposes its state to assistive technology.
- [ ] Documentary images receive concise Russian alt text describing relevant visible content.
- [ ] Decorative textures and rules use empty alt text or CSS backgrounds.
- [ ] Do not describe unverified product ingredients/identity in alt text.
- [ ] All text/background combinations pass 4.5:1 for normal text and 3:1 for large text/UI boundaries.
- [ ] Information is not conveyed by copper color alone.
- [ ] Touch targets are at least 44x44 CSS pixels; primary buttons target 48px height.
- [ ] Content reflows without loss at 320px width and 200% zoom.
- [ ] `prefers-reduced-motion` removes translation, scale, smooth scrolling, and nonessential movement.
- [ ] Phone and email values are visible, selectable, and not only icons.
- [ ] Russian document language is declared with `<html lang="ru">`.
- [ ] Automated checks are supplemented with keyboard, screen-reader smoke, zoom, and contrast testing.

## 17. Performance Requirements

### Targets

Under an agreed production-like Lighthouse mobile run with caching disabled:

- Performance >= 90.
- Accessibility >= 90.
- Best Practices >= 90.
- SEO >= 90 after canonical/indexing configuration is complete; staging `noindex` may affect scoring and is excluded.
- LCP <= 2.5s at the 75th percentile target.
- CLS <= 0.1.
- INP <= 200ms.

### Strategy

- Use static generation and server-rendered HTML for all substantive content.
- Optimize images with responsive `srcset`/`sizes`, modern formats, and explicit dimensions/aspect ratios.
- Prioritize only the hero image; lazy-load below-the-fold imagery.
- Art-direct crops without duplicating unnecessarily large sources.
- Subset/self-host Cormorant Garamond and Manrope where licensing permits; preload only fonts required above the fold; use `font-display: swap` or framework-equivalent behavior.
- Keep client components limited to header/menu/contact behavior and optional reveal enhancement.
- Do not ship shadcn/ui or Framer Motion unless implementation documents a clear need and bundle impact.
- Prefer CSS transitions and Intersection Observer over an animation library.
- Keep third-party scripts at zero in the MVP unless optional analytics is explicitly enabled.
- Reserve image and logo space to prevent layout shift.
- Test on throttled mobile network/CPU profiles and with images disabled/failed.

## 18. Technical Architecture

| Concern | Decision | Rationale |
| --- | --- | --- |
| Framework | Next.js, current stable version at implementation time. | Static output, metadata, image/font optimization, and clear component model. |
| Language | TypeScript with strict mode. | Typed content contracts and maintainability. |
| Styling | Tailwind CSS plus CSS custom properties for design tokens. | Responsive composition with centralized brand tokens; avoid ad hoc arbitrary values. |
| Rendering | Static generation wherever possible. | Content is fixed and requires no runtime data source. |
| Content | Typed local data for navigation/offers/events; section copy in focused components or typed content modules. | No CMS workflow exists; repeated information remains consistent. |
| UI library | None by default. | The page requires few primitives; avoid unnecessary dependencies. |
| Motion | CSS + Intersection Observer enhancement. | Meets restrained brief with low JavaScript. |
| Contact UI | Small client component using an accessible dialog pattern, responsive as desktop popover/mobile bottom sheet. | Predictable focus management with one content tree. |
| Disclosure | Native `<details>/<summary>`. | Functional without JavaScript. |
| Forms/validation | None. | No form or submission process exists. |
| Images | Next.js image optimization for approved raster assets; SVG for approved logo/marks. | Responsive delivery and stable layout. |
| Icons | Small local SVG set or minimal tree-shakeable package only if necessary. | Avoid a large icon dependency. |
| Analytics | Provider adapter/interface only when a provider is selected; otherwise no script. | Events are specified but implementation is optional. |
| SEO | Next.js metadata APIs; sitemap/robots after domain confirmation. | Static, maintainable metadata. |
| Deployment | Vercel-compatible; actual host/domain is an Ordinary TBD. | Fits stack without making hosting a business fact. |
| Browser support | Current and previous major Chrome, Edge, Firefox, Safari, and Yandex Browser; current iOS Safari and Android Chrome. | User-approved baseline. |

### Client/server boundary

- Default every section to a server component/static HTML.
- Client boundary contains only behavior that requires browser state: header compaction, mobile menu, contact dialog, optional view-entry reveals, and optional analytics dispatch.
- Phone/email links and the final contact section remain functional without hydration.

### Data strategy

- No database, API, CMS, authentication, or runtime fetch.
- Centralize confirmed values—phone, email, navigation, prices, and offer identifiers—to prevent inconsistent duplicates.
- Preserve content approval status in editorial workflow/documentation; do not display “requires approval” labels publicly.

## 19. Suggested Project Structure

```text
src/
  app/
    layout.tsx
    page.tsx
    globals.css
    metadata.ts
  components/
    layout/
      SiteHeader.tsx
      MobileNavDialog.tsx
      SiteFooter.tsx
      ContactDialog.tsx
    sections/
      HeroSection.tsx
      ConceptSection.tsx
      BenefitsSection.tsx
      EcosystemSection.tsx
      OfferSelector.tsx
      OffersSection.tsx
      DaypartsSection.tsx
      TechnologySection.tsx
      SafetySection.tsx
      BusinessSection.tsx
      MicromarketSection.tsx
      ContactSection.tsx
    ui/
      ButtonLink.tsx
      ResponsiveEditorialImage.tsx
      SectionHeading.tsx
  content/
    navigation.ts
    offers.ts
    site-content.ts
  lib/
    analytics.ts
    constants.ts
  hooks/
    useReducedMotion.ts
    useScrollHeader.ts
  styles/
    tokens.css
  assets/
    brand/
    products/
    editorial/
    technical/
public/
  icons/
  social/
tests/
  accessibility/
  e2e/
```

Notes:

- Combine files if individual sections remain trivial; avoid one-component-per-wrapper over-engineering.
- `metadata.ts` may be folded into `layout.tsx` if framework conventions favor that structure.
- Do not create CMS, API, or form directories for future possibilities.

## 20. Content & Assets Checklist

| Asset | Status | Owner | Required For |
| --- | --- | --- | --- |
| PDF source content | Ready | Client | All page copy and facts. |
| Full «Абрамов Гурме» logo/wordmark from PDF | Placeholder | Client | Prototype header, hero, contact, footer, and OG image; production rights/quality verification required. |
| Vector/transparent logo master | Needed | Client | Production-quality responsive brand display. |
| Genuine hero jar/product image from PDF | Placeholder | Client | Prototype hero; approval and rights verification required for production. |
| Product/lifestyle imagery from PDF | Placeholder | Client | Prototype concept, offers, and dayparts; rights verification required for production. |
| Production-room photograph | Optional | Client | Technology section; rights verification required if used. |
| Micromarket photograph | Placeholder | Client | Prototype micromarket section; rights verification required for production. |
| Accurate A4 dessert imagery | Needed | Client | A4 detail; PDF image is semantically questionable. |
| High-resolution approved source images | Needed | Client | Production visual quality. |
| Retouched/enhanced/reconstructed derivatives | Placeholder | Design/implementation | Create during implementation; must preserve documentary truth and inherit verified usage rights. |
| Decorative editorial imagery | Optional | Design/implementation | Atmosphere only; must not imply undocumented product facts. |
| Font files/licenses for Cormorant Garamond and Manrope | Needed | Implementation | Typography and self-hosting; verify licensing. |
| Phone `+7 980 409 3293` | Ready | Client/PDF | Contact actions. |
| Email `aa@aa1.ru` | Ready | Client/PDF | Contact actions. |
| Exact flagship price | Needed | Client | Optional future price display; omit until supplied. |
| Menu/SKU list, weights, ingredients, allergens, kcal/BJU | Needed | Client | Future product detail; not required for current MVP narrative. |
| Test protocols/certificates/sanitary conclusions | Needed | Client | Mandatory claim-verification release gate; public substantiation if published/linked. |
| Domain and canonical URL | Needed | Client | Production SEO/deployment. |
| Legal entity/address/legal pages | Needed | Client/legal | Confirm whether required for production footer/compliance; do not invent. |
| Analytics provider/configuration | Optional | Client | Optional event collection; currently an Ordinary TBD. |
| Social profiles | Optional | Client | Future footer/metadata; currently an Ordinary TBD. |
| OG image | Placeholder | Design/implementation | Create after source assets and rights are approved. |

## 21. Edge Cases

| Edge case | Expected behavior |
| --- | --- |
| Very long Russian heading or approved rewrite | Wrap naturally within max measure; no forced one-line text, clipping, or font-size below token minimum. |
| Short/missing optional copy | Component collapses unused spacing; no empty card or placeholder label. |
| Missing/broken image | Preserve aspect ratio/space where needed; show neutral branded fallback and retain adjacent content. Never substitute unrelated stock automatically. |
| Slow network | HTML copy and contact links render first; hero image uses optimized priority loading; below-fold images lazy-load. |
| JavaScript unavailable | All content, anchor navigation, final phone/email links, and native technology disclosure remain functional. Contact popover may not open, but CTA should fall back to `#contact`. |
| Contact-dialog script failure | Contact triggers use a progressive-enhancement link to `#contact`; final contact remains available. |
| Duplicate/rapid CTA activation | One dialog instance opens; no stacked dialogs or duplicate analytics events from a single activation. |
| Very small screen (320px) | Single-column layout, no page overflow, readable typography, 44px targets. |
| Very large screen | Content remains within 1280px; imagery/backgrounds may bleed without stretching text measures. |
| 200% browser zoom | Reflow without lost content or two-dimensional scrolling at supported desktop widths. |
| Reduced motion | Smooth scrolling and transforms disabled; content shown in final state. |
| Unsupported decorative animation | Omit animation; content and controls remain fully functional. |
| Long translation | Russian is the only MVP language. Components must tolerate approximately 30% expansion to avoid brittle sizing, but no translation is invented. |
| Price absent for flagship | Omit price element entirely; do not show “по запросу” because the PDF does not state it. |
| Three jars vs four dayparts | Present as separate concepts and retain internal TBD note. |
| Gentle cooking vs 115-135°C | Present both in their relevant sections; do not provide invented reconciliation. |
| `Abramov.food` visible in image | Do not promote it in text/metadata/navigation; consider crop only if crop does not falsify documentary content. Status remains Ordinary TBD. |
| A4 image mismatch | Do not use the fruit-jar image as documentary proof of the named desserts. Use type-led layout or approved replacement. |
| Missing certificate documents | Do not render empty links or fake badges; public release remains subject to mandatory claim review. |
| Analytics absent | No errors, blocked rendering, cookies, or consent banner; event adapter is a no-op or omitted. |
| `mailto:`/`tel:` unsupported | Visible contact values remain selectable/copyable; OS/browser behavior is accepted. |
| Browser-specific motion differences | Graceful degradation; no loss of content/navigation/disclosure/contact behavior. |
| Image-rights unresolved | Staging/prototype only; public deployment blocked. |

## 22. Acceptance Criteria

### Content fidelity

- [ ] All five product vectors appear: flagship «Абрамов Гурме», A1, A2, A3, A4.
- [ ] Micromarket appears as a separate commercial model.
- [ ] All PDF prices are reproduced exactly and no price is invented.
- [ ] Phone, email, and Андрей Абрамов’s name match the PDF everywhere.
- [ ] All important PDF topics appear without slide-by-slide repetition.
- [ ] Substantive copy rewrites are marked for editorial approval outside the public UI.
- [ ] `Abramov.food` is not introduced as a brand/domain.
- [ ] No unprovided geography, ordering, delivery, menu, legal, social, or commercial terms appear.

### Design and responsive behavior

- [ ] Hybrid editorial/technical direction is consistently applied.
- [ ] Hero uses a genuine product visual and the approved headline/tagline.
- [ ] Offer selector uses anchors, never tabs, on mobile.
- [ ] Every substantive topic remains available on mobile.
- [ ] No horizontal page overflow at 320px or 200% zoom.
- [ ] Layout is visually coherent at representative widths around 320, 390, 768, 1024, 1280, and 1536px without treating them as device-specific designs.

### Functionality

- [ ] Primary CTA reaches `#directions`.
- [ ] Secondary CTA opens the accessible contact surface when JavaScript is available and falls back to `#contact` otherwise.
- [ ] Phone and email links use correct `tel:` and `mailto:` destinations.
- [ ] Sticky header compacts predictably without jitter.
- [ ] Mobile menu and contact surface support keyboard, focus restoration, Escape, close button, and backdrop behavior.
- [ ] Technology details use semantic disclosure and remain available without JavaScript.

### Quality

- [ ] All applicable WCAG 2.2 AA checks pass.
- [ ] Lighthouse category targets pass under documented test conditions.
- [ ] LCP, CLS, and INP meet targets where field/test data is available.
- [ ] Supported browsers preserve content, navigation, disclosure, and contact actions.
- [ ] Reduced-motion preference is respected.
- [ ] No console errors, broken links, missing required assets, or layout shifts from unreserved media.

### Release gates

- [ ] Rights to publish every production visual are documented before public launch.
- [ ] Required review of health, safety, shelf-life, nutrient, write-off, margin, payback, and rollout claims is recorded before public launch.
- [ ] Domain/canonical/indexing settings are confirmed before search indexing is enabled.

## 23. Definition of Done

- [ ] Approved source content and draft rewrite statuses are reconciled.
- [ ] All 14 information-architecture sections are implemented in the approved order.
- [ ] Header, mobile navigation, contact dialog/bottom sheet, disclosure, anchors, and native contact links work.
- [ ] Desktop, tablet, mobile, zoom, and extreme-width behavior pass QA.
- [ ] Documentary imagery remains truthful; unsuitable imagery is omitted or replaced with approved material.
- [ ] Image rights release gate passes.
- [ ] Claim/documentation release gate passes.
- [ ] Semantic HTML, heading order, keyboard operation, focus, contrast, alt text, touch targets, and reduced motion pass QA.
- [ ] SEO title/description are approved; canonical, robots, sitemap, OG image, and structured-data decisions match verified production information.
- [ ] Optional analytics is either configured according to the four-event contract or explicitly omitted with no residual scripts/cookies.
- [ ] Performance targets are measured and recorded.
- [ ] Current/previous Chrome, Edge, Firefox, Safari, Yandex Browser and current mobile Safari/Chrome receive smoke testing.
- [ ] Production deployment uses verified domain/hosting settings; staging is not indexable.
- [ ] No form, messenger, checkout, booking, CMS, or unapproved dependency has been added.
- [ ] Final visual/content stakeholder approval is recorded.

## 24. Open Questions

### No blocking open questions for specification or staging implementation.

### Ordinary TBD

1. How the “three jars per day” format relates operationally to the four dayparts.
2. How the gentle-cooking/nutrient-retention statements relate to 115-135°C sterilization.
3. Whether `Abramov.food` has any valid relationship to the brand.
4. Production domain, canonical URL, host, and indexing date.
5. Verified legal entity, address, privacy/terms requirements, and approved copyright wording.
6. Analytics provider and whether live analytics is included in MVP.
7. Whether minimum verified data becomes sufficient for `Organization` structured data.
8. Flagship pricing, full menus/SKUs, weights, ingredients, allergens, nutrition, availability, delivery, and ordering processes; these are outside the current MVP unless later supplied.

### Mandatory verification before public launch

1. Rights and permitted web usage for every visual asset.
2. Adequate documentary/legal review of published health, food-safety, shelf-life, nutrient, write-off, margin, payback, and rollout claims.

## 25. Implementation Plan

### Stage 1 - Source and content normalization

- **Objective:** Create a controlled content inventory from the PDF and this specification.
- **Scope:** Navigation, contacts, five offers, prices, claims, dayparts, technology, B2B, micromarket, editorial approval markers.
- **Relevant files/components:** `src/content/*`, asset manifest.
- **Dependencies:** PDF and stakeholder-approved corrections.
- **Expected output:** Typed, deduplicated Russian content with fixed factual values and approval statuses.
- **Verification:** Automated checks for duplicate/incorrect contacts and prices; manual comparison against all 14 PDF pages.

### Stage 2 - Project foundation and tokens

- **Objective:** Establish the lightweight static Next.js foundation.
- **Scope:** Next.js, strict TypeScript, Tailwind, CSS tokens, fonts, metadata scaffolding, base semantic layout.
- **Relevant files/components:** `src/app/*`, `styles/tokens.css`, font configuration.
- **Dependencies:** Stage 1 content shape; font license/source confirmation.
- **Expected output:** Static page shell with approved palette, type, spacing, grid, and no unnecessary UI/animation library.
- **Verification:** Production build, type check, lint, font/network audit, basic Lighthouse baseline.

### Stage 3 - Asset preparation

- **Objective:** Produce faithful web-ready assets from approved source visuals.
- **Scope:** Logo extraction/recreation, responsive raster variants, retouching, crop definitions, placeholder/fallback treatment, OG draft.
- **Relevant files/components:** `src/assets/*`, `public/*`, `ResponsiveEditorialImage`.
- **Dependencies:** Rights/provenance inventory; PDF originals.
- **Expected output:** Optimized, correctly named assets with dimensions, alt text, rights status, and documentary/decorative classification.
- **Verification:** Visual comparison with PDF, artifact inspection at target sizes, no altered labels/contents, file-size audit.

### Stage 4 - Static section implementation

- **Objective:** Build the full content narrative in the approved order.
- **Scope:** Hero through footer except complex interactive behavior.
- **Relevant files/components:** All `components/sections/*`, `SiteHeader`, `SiteFooter`.
- **Dependencies:** Stages 1-3.
- **Expected output:** Complete server-rendered Russian page with semantic headings and stable anchors.
- **Verification:** Source-fidelity checklist, DOM/heading audit, screenshots at desktop/tablet/mobile widths.

### Stage 5 - Navigation and contact interaction

- **Objective:** Implement the sticky header, mobile navigation, and shared contact surface.
- **Scope:** Scroll compaction, anchor offsets, menu dialog, desktop popover presentation, mobile bottom sheet, progressive fallback.
- **Relevant files/components:** `SiteHeader`, `MobileNavDialog`, `ContactDialog`, `AnchorNav`.
- **Dependencies:** Stage 4 anchors/layout.
- **Expected output:** Accessible, responsive navigation and contact interactions.
- **Verification:** Keyboard-only test, focus trap/restore, Escape/backdrop/close tests, JS-disabled fallback, `tel:`/`mailto:` checks.

### Stage 6 - Disclosure and restrained motion

- **Objective:** Add technical progressive disclosure and approved editorial movement.
- **Scope:** Native disclosure, one-time reveals, hero sequence, contact/header transitions, reduced-motion handling.
- **Relevant files/components:** `TechnologyDisclosure`, reveal utility/hook, global motion CSS.
- **Dependencies:** Stable Stage 4 layout.
- **Expected output:** Motion that supports hierarchy without blocking content or adding a large dependency.
- **Verification:** Reduced-motion test, no animation-dependent information, performance profile, supported-browser degradation check.

### Stage 7 - SEO and optional analytics

- **Objective:** Configure discoverability and the approved measurement contract without inventing missing metadata.
- **Scope:** Russian metadata draft, OG asset, robots/sitemap after domain confirmation, optional four-event adapter.
- **Relevant files/components:** metadata files, `lib/analytics.ts`, interaction call sites.
- **Dependencies:** Approved copy/assets; domain/provider decisions where available.
- **Expected output:** Correct metadata with TBD items safely omitted; either working analytics or no analytics footprint.
- **Verification:** Metadata inspection, social preview check, event debugging when enabled, cookie/network audit.

### Stage 8 - Responsive, accessibility, and browser QA

- **Objective:** Validate all agreed quality requirements.
- **Scope:** Responsive layouts, zoom, keyboard, screen reader smoke, contrast, touch, reduced motion, supported browsers.
- **Relevant files/components:** Entire page and test suites.
- **Dependencies:** Feature-complete staging build.
- **Expected output:** Recorded QA results and resolved defects.
- **Verification:** Automated accessibility scan plus manual checklist; screenshots around 320/390/768/1024/1280/1536px; 200% zoom; browser matrix.

### Stage 9 - Performance and release gates

- **Objective:** Prepare a production candidate without bypassing unresolved publication requirements.
- **Scope:** Image/font optimization, bundle analysis, Lighthouse/Core Web Vitals testing, asset-rights confirmation, claim review, canonical/indexing settings.
- **Relevant files/components:** Build output, deployment configuration, release checklist.
- **Dependencies:** Completed QA; client/legal verification.
- **Expected output:** Production-ready candidate or explicitly staging-only build if any mandatory gate remains open.
- **Verification:** Production build, performance report, link/contact smoke test, signed-off rights/claims checklist, verified robots/canonical configuration.

Implementation must stop after any stage whose mandatory dependency is unresolved. This specification authorizes no landing-page implementation in the current task.

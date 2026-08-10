# QA CHECKLIST — Definition of done

Run this before declaring the implementation complete.

## A. Source fidelity

- [ ] Brand shown as **Абрамов Гурме**.
- [ ] `Abramov.food` is not introduced as a confirmed brand/domain.
- [ ] Exactly five product directions exist: flagship + A1 + A2 + A3 + A4.
- [ ] Micromarket is a separate commercial model, not a sixth line.
- [ ] A1 price is exactly **350-400 рублей за набор**.
- [ ] A2 price is exactly **250-500 рублей за блюдо**.
- [ ] A3 price is exactly **250-500 рублей за блюдо**.
- [ ] A4 price is exactly **200-500 рублей за блюдо**.
- [ ] No flagship price is invented and no «по запросу» placeholder is shown.
- [ ] Phone is consistently **+7 980 409 3293** / `tel:+79804093293`.
- [ ] Email is consistently **aa@aa1.ru** / `mailto:aa@aa1.ru`.
- [ ] No unapproved geography, delivery, ordering, SKU, ingredient, allergen, nutrition, legal, social, or commercial details are added.
- [ ] Three-jar and four-daypart concepts are shown separately.
- [ ] Gentle-cooking and 115–135°C statements are not artificially reconciled.
- [ ] A4 imagery does not falsely document products it does not depict.

## B. Structure

- [ ] All approved sections appear in order:
  - [ ] header
  - [ ] hero
  - [ ] about
  - [ ] benefits
  - [ ] ecosystem
  - [ ] directions
  - [ ] offers
  - [ ] menu
  - [ ] technology
  - [ ] safety
  - [ ] business
  - [ ] micromarket
  - [ ] contact
  - [ ] footer
- [ ] Primary CTA reaches `#directions`.
- [ ] Logo returns to `#top`.
- [ ] Header anchor targets are not hidden under the sticky header.
- [ ] Mobile selector uses anchors, not tabs.
- [ ] Technology summary has three visible steps.
- [ ] Deeper technology content uses native `<details>/<summary>`.
- [ ] Final contact is present independently of the dialog.

## C. Contact behavior

- [ ] `tel:` works without JavaScript.
- [ ] `mailto:` works without JavaScript.
- [ ] Desktop contact UI presents as an anchored popover-style dialog.
- [ ] Mobile contact UI presents as a bottom sheet.
- [ ] Same semantic contact content is reused.
- [ ] Visible labels are present; not icon-only.
- [ ] Close button works.
- [ ] Escape works.
- [ ] Backdrop close works predictably.
- [ ] Focus enters the dialog and returns to the exact trigger.
- [ ] No stacked duplicate dialogs can open.

## D. Responsive

Test approximately:
- [ ] 320px
- [ ] 390px
- [ ] 768px
- [ ] 1024px
- [ ] 1280px
- [ ] 1536px

Verify:
- [ ] no horizontal page overflow at 320px;
- [ ] no important content hidden on mobile;
- [ ] no tiny-text workaround for dense sections;
- [ ] CTA labels do not truncate;
- [ ] images preserve documentary subjects/labels;
- [ ] 200% zoom reflows without lost content or two-dimensional scrolling;
- [ ] large screens keep long text within a comfortable measure.

## E. Accessibility

- [ ] WCAG 2.2 AA applicable requirements pass.
- [ ] `<html lang="ru">`.
- [ ] visible skip-to-content link.
- [ ] one H1 only.
- [ ] logical heading order.
- [ ] semantic `header/nav/main/section/footer`.
- [ ] full keyboard operation.
- [ ] focus order matches reading order.
- [ ] visible focus states.
- [ ] focus not obscured by sticky header.
- [ ] modal focus containment only while modal.
- [ ] touch targets at least 44×44 CSS px.
- [ ] primary buttons target at least 48px height.
- [ ] contrast meets 4.5:1 normal text / 3:1 large text and UI boundaries.
- [ ] information is not conveyed by copper color alone.
- [ ] documentary images have concise Russian alt text.
- [ ] decorative visuals are ignored by assistive tech.
- [ ] reduced-motion preference is honored.

## F. Motion

- [ ] no parallax.
- [ ] no cursor-follow effects.
- [ ] no autoplay video.
- [ ] no animated counters.
- [ ] no scroll-jacking.
- [ ] reveals happen once.
- [ ] animations use opacity/transforms where practical.
- [ ] reduced motion disables translation, scale, and smooth scroll.

## G. Performance

Targets under agreed production-like mobile test:

- [ ] Lighthouse Performance >= 90.
- [ ] Lighthouse Accessibility >= 90.
- [ ] Lighthouse Best Practices >= 90.
- [ ] Lighthouse SEO >= 90 after real canonical/indexing config.
- [ ] LCP <= 2.5s target.
- [ ] CLS <= 0.1.
- [ ] INP <= 200ms target.
- [ ] only hero media is priority-loaded.
- [ ] below-fold images lazy-load.
- [ ] media dimensions/aspect ratios are reserved.
- [ ] font weights are minimized.
- [ ] unnecessary UI/motion dependencies are absent.
- [ ] no third-party scripts when analytics is disabled.
- [ ] no console errors or broken links.

## H. Browser smoke matrix

- [ ] Chrome current
- [ ] Chrome previous major
- [ ] Edge current/previous
- [ ] Firefox current/previous
- [ ] Safari current/previous
- [ ] Yandex Browser current/previous
- [ ] current iOS Safari
- [ ] current Android Chrome

Decorative motion may degrade, but content/navigation/disclosure/contact must work.

## I. SEO / staging

- [ ] title draft is correct.
- [ ] meta description draft is correct.
- [ ] exactly one H1.
- [ ] staging is `noindex, nofollow`.
- [ ] no fabricated canonical URL.
- [ ] no incomplete/fabricated Organization JSON-LD.
- [ ] sitemap/robots production config waits for real domain.
- [ ] no fake social accounts.

## J. Forbidden scope check

Confirm none of these were added:

- [ ] form
- [ ] CRM
- [ ] checkout
- [ ] booking
- [ ] messenger integration
- [ ] CMS
- [ ] database
- [ ] API
- [ ] authentication
- [ ] invented legal pages
- [ ] fake certificates/trust badges
- [ ] shadcn/ui without explicit documented need
- [ ] Framer Motion without explicit documented need

## K. Public-release gates

A staging build may pass before these are resolved.

Public release requires:

- [ ] image/logo publication rights verified;
- [ ] claim/documentation review recorded;
- [ ] domain/canonical/indexing settings confirmed;
- [ ] production visual/content approval completed.

If any mandatory gate is unresolved, report the implementation as:
**production-quality staging candidate, not cleared for public launch**.

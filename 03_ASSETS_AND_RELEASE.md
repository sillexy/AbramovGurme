# ASSETS & RELEASE — Visual rules and publication gates

## 1. Development source

The current visual source is the PDF / any approved originals placed in the project.

PDF-extracted assets are acceptable for development/prototype use.

For production, do not silently assume that embedded imagery has sufficient resolution or web-publication rights.

## 2. Documentary vs decorative

Every image used in the site should be classified as:

### Documentary
Represents an actual product, jar, label, dessert, production space, or micromarket.

Rules:
- preserve actual contents;
- preserve labels;
- preserve packaging;
- preserve recognizable product geometry;
- do not invent a new SKU or package;
- do not materially change the real device/unit;
- retouching, cleanup, reconstruction, crop, lighting correction, background cleanup, and resolution enhancement are allowed only if documentary truth is preserved.

### Decorative/editorial
Used for atmosphere rather than as proof of a specific product.

Rules:
- may be newly composed or regenerated;
- must not imply undocumented product facts;
- must not look like evidence of a SKU that is not in the source;
- should remain within the editorial gastronomy direction.

## 3. Asset priorities

### Hero
Use the strongest genuine jar/product image available.

Preferred:
- clear jar;
- visible food;
- recognizable label/packaging;
- sufficient separation from background for editorial composition.

Do not use a collage.

### Logo
Use the confirmed **«Абрамов Гурме»** artwork.

- extract/recreate faithfully;
- transparent raster or SVG preferred;
- do not reconstruct the wordmark using Cormorant Garamond/Manrope.

### Concept/offers/dayparts
Use source imagery only where it semantically matches the adjacent content.

If a trustworthy image is missing:
- use type-led composition;
- use neutral branded texture;
- do not automatically substitute unrelated stock.

### A4 desserts
The PDF image is semantically questionable for the named dessert range.

Therefore:
- do not present it as documentary proof of the listed desserts;
- prefer approved replacement dessert imagery or a typography-led section.

### Technology
Production-room photo is optional.

Do not invent:
- autoclave/equipment diagrams;
- laboratory seals;
- certification graphics.

### Safety/packaging
Preferred asset:
- real jar/lid macro;
- visible glass/seal detail.

### Micromarket
Use a genuine micromarket photo from the source or an approved original.

Do not crop away the physical unit so aggressively that it stops being documentary.

## 4. Suggested project asset folders

```text
public/
  brand/
    logo.*
    monogram.*
  products/
    hero-jar.*
    flagship.*
    a1.*
    a2.*
    a3.*
    a4.*
  editorial/
  technical/
    packaging.*
    production.*
    micromarket.*
  og/
    social-card.*
```

Use descriptive names, explicit dimensions/aspect ratios, and responsive delivery.

## 5. Image implementation

- Use Next.js Image for raster content.
- Always reserve dimensions/aspect ratio to prevent CLS.
- Priority-load only the hero image.
- Lazy-load below-the-fold assets.
- Provide art-directed crops where useful.
- Documentary alt text must describe only visible, verified content.
- Decorative imagery uses empty alt text or CSS background treatment.

## 6. `Abramov.food`

`Abramov.food` may remain visible if it exists naturally inside a documentary image and the image is used faithfully.

Do not introduce it in:
- text;
- navigation;
- metadata;
- domain references;
- brand architecture.

Its status is TBD.

## 7. Production asset release gate

Before public launch, confirm/document:

- right to publish every production image on the web;
- right to publish extracted/retouched/reconstructed derivatives;
- right to use logo/wordmark;
- adequate quality for target display sizes.

If rights remain unresolved:
**staging/prototype only; public launch is blocked.**

## 8. Claim/documentation release gate

The website implementation must reproduce approved brand claims as instructed.

Before public launch, required review must be recorded for public claims concerning:

- health;
- food safety;
- shelf life;
- nutrient retention;
- write-offs;
- margin;
- payback;
- rollout speed;
- related commercial claims.

Do not fabricate:
- certificates;
- test report numbers;
- legal conclusions;
- scientific explanations;
- external proof links.

## 9. Other production TBDs

Non-blocking for staging:

- domain;
- canonical URL;
- final hosting;
- legal entity/address;
- legal pages;
- analytics provider;
- social profiles;
- flagship price;
- additional detailed product data.

Do not put placeholders for these into the public interface.

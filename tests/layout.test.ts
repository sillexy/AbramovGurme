import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

test("keeps the hero PDF source image in its absolute crop frame", () => {
  const css = readFileSync("src/app/globals.css", "utf8");
  const page = readFileSync("src/app/page.tsx", "utf8");

  assert.match(
    css,
    /\.hero__image\.source-image\s*\{[^}]*position:absolute;[^}]*inset:0;/,
  );
  assert.match(page, /src="\/products\/hero-jar-v2\.webp"/);
});

test("sizes the desktop hero visual from the available viewport height", () => {
  const css = readFileSync("src/app/globals.css", "utf8");

  assert.match(css, /--header-height:60px/);
  assert.match(css, /\.hero__visual\s*\{[^}]*height:min\(720px,calc\(100svh - var\(--header-height\)/);
  assert.match(
    css,
    /@media \(min-width:1024px\) and \(max-height:720px\)\s*\{[^}]*\.hero\s*\{[^}]*--hero-top-space:36px;[^}]*--hero-bottom-space:50px/,
  );
});

test("keeps the sticky header visually continuous with the hero", () => {
  const css = readFileSync("src/app/globals.css", "utf8");
  assert.match(css, /\.site-header\s*\{[^}]*position:\s*fixed/);
  assert.match(css, /\.site-header[^}]*backdrop-filter/);
  assert.match(css, /\.site-header--scrolled\s*\{[^}]*background:rgba\(9,9,8,\.7\)/);
});

test("centers the desktop contact dialog while retaining the mobile sheet", () => {
  const css = readFileSync("src/app/globals.css", "utf8");

  assert.match(css, /@media \(min-width:768px\)\s*\{[^}]*\.contact-dialog\s*\{[^}]*top:50%;[^}]*left:50%;[^}]*transform:translate\(-50%,-50%\)/);
  assert.match(css, /@media \(max-width:767px\)[\s\S]*\.contact-dialog\s*\{[^}]*bottom:0/);
  assert.match(css, /@media \(max-width:767px\)[\s\S]*?\.contact-dialog\s*\{[^}]*transform:none/);
});

test("groups the benefits eyebrow and title in one left-aligned header", () => {
  const page = readFileSync("src/app/page.tsx", "utf8");
  const css = readFileSync("src/app/globals.css", "utf8");

  assert.match(page, /className="benefits__heading"><p className="eyebrow">Гастрономическая архитектура<\/p><h2 id="benefits-title">Чистота вкуса и технологическая польза<\/h2>/);
  assert.match(css, /\.benefits__heading\s*\{[^}]*max-width:780px/);
});

test("does not render the removed directions index section", () => {
  const page = readFileSync("src/app/page.tsx", "utf8");

  assert.doesNotMatch(page, /<section id="directions"/);
  assert.doesNotMatch(page, />Выберите направление</);
});

test("does not render the removed contact section", () => {
  const page = readFileSync("src/app/page.tsx", "utf8");
  const content = readFileSync("src/content/site-content.ts", "utf8");

  assert.doesNotMatch(page, /<section id="contact"/);
  assert.doesNotMatch(content, /href: "#contact"/);
});

test("keeps technical disclosure native while coordinating open and close animation", () => {
  const disclosure = readFileSync("src/components/TechnologyDisclosure.tsx", "utf8");
  const css = readFileSync("src/app/globals.css", "utf8");

  assert.match(disclosure, /<details/);
  assert.match(disclosure, /<summary/);
  assert.match(disclosure, /content\.animate\(/);
  assert.match(disclosure, /prefers-reduced-motion: reduce/);
  assert.match(css, /\.technology-disclosure__content/);
  assert.match(css, /\.technology-disclosure > summary::after/);
  assert.ok(
    disclosure.indexOf("const currentHeight") < disclosure.lastIndexOf("releaseAnimation();"),
    "captures the current disclosure height before cancelling an in-progress animation",
  );
});

test("aligns the three-jars copy in one grid column beside its number", () => {
  const page = readFileSync("src/app/page.tsx", "utf8");
  const css = readFileSync("src/app/globals.css", "utf8");

  assert.match(
    page,
    /className="three-jars__copy"><div className="three-jars__number"[^>]*>3<\/div><span>/,
  );
  assert.doesNotMatch(page, /three-jars__title-line/);
  assert.match(css, /\.three-jars__copy\s*\{[^}]*display:\s*grid;[^}]*grid-template-columns:/);
  assert.doesNotMatch(css, /\.three-jars__copy > span\s*\{[^}]*margin-left/);
  assert.doesNotMatch(css, /\.three-jars__title-line \+ p\s*\{[^}]*margin-left/);
});

test("renders B2B partnership cards with their visual hierarchy", () => {
  const page = readFileSync("src/app/page.tsx", "utf8");
  const css = readFileSync("src/app/globals.css", "utf8");

  assert.match(page, /<h2 id="business-title">Партнёрство без риска<\/h2>/);
  assert.match(page, /const businessCards = \[/);
  assert.match(page, /className="business-card"/);
  assert.match(page, /<BusinessIcon index=\{index\} \/>/);
  assert.match(css, /\.business-card\s*\{[^}]*display:flex;[^}]*flex-direction:column/);
  assert.match(css, /\.business-card__cta\s*\{[^}]*margin-top:auto/);
});

test("keeps touch devices in a single-column layout even when their browser uses a wide viewport", () => {
  const css = readFileSync("src/app/globals.css", "utf8");
  const touchLayout = css.match(/@media \(hover:none\) and \(pointer:coarse\)\s*\{([\s\S]*?)\n\}/)?.[1] ?? "";

  assert.match(touchLayout, /\.hero__grid\s*\{[^}]*grid-template-columns:1fr/);
  assert.match(touchLayout, /\.business-grid\s*\{[^}]*grid-template-columns:1fr/);
  assert.match(touchLayout, /\.business-card:last-child\s*\{[^}]*width:100%/);
});

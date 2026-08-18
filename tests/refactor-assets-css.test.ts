import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const page = readFileSync("src/app/page.tsx", "utf8");
const sourceImage = readFileSync("src/components/SourceImage.tsx", "utf8");
const layout = readFileSync("src/app/layout.tsx", "utf8");

test("uses direct WebP asset paths without runtime extension rewriting", () => {
  assert.doesNotMatch(page, /\/(?:products|source)\/[^"']+\.png/);
  assert.match(page, /\/products\/hero-jar-v2\.webp/);
  assert.match(page, /\/source\/page-09\.webp/);
  assert.doesNotMatch(sourceImage, /replace\(\/\\\.png\$\/i,\s*"\.webp"\)/);
});

test("layout no longer imports consolidated one-off CSS files", () => {
  const removedImports = [
    "brand-matrix-connectors.css",
    "brand-matrix-flagship.css",
    "brand-matrix-actions.css",
    "brand-matrix-scroll.css",
    "offer-price-style.css",
    "header-logo.css",
    "safety-mobile-spacing.css",
    "technology-mobile-alignment.css",
    "benefit-metric-font.css",
    "benefits-mobile-note.css",
    "mobile-menu-fix.css",
    "popup-close-final.css",
    "business-mobile-fix.css",
  ];

  for (const file of removedImports) {
    assert.doesNotMatch(layout, new RegExp(file.replace(".", "\\.")));
  }
});

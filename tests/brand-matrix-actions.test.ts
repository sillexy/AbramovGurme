import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

test("uses a centered SVG icon for brand matrix CTA arrows", () => {
  const enhancer = readFileSync("src/components/BrandMatrixEnhancer.tsx", "utf8");
  const css = readFileSync("src/app/brand-matrix.css", "utf8");

  assert.match(enhancer, /createElementNS\("http:\/\/www\.w3\.org\/2000\/svg", "svg"\)/);
  assert.match(enhancer, /M5 12h14/);
  assert.match(css, /\.ecosystem-cta svg\s*\{[^}]*display:\s*block;[^}]*width:\s*18px;[^}]*height:\s*18px/);
});

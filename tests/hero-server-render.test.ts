import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const page = readFileSync("src/app/page.tsx", "utf8");
const layout = readFileSync("src/app/layout.tsx", "utf8");

test("renders hero supplemental content directly in the page", () => {
  assert.match(page, /className="hero__stats"/);
  assert.match(page, /400\+/);
  assert.match(page, /className="button hero__technology-link"/);
  assert.match(page, /className="hero__safety-card"/);
});

test("does not rely on HeroReferenceEnhancer during hydration", () => {
  assert.doesNotMatch(layout, /HeroReferenceEnhancer/);
});

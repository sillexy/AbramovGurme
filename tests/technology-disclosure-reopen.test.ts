import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

test("releases finished disclosure animations and keeps arrow states consistent", () => {
  const disclosure = readFileSync("src/components/TechnologyDisclosure.tsx", "utf8");
  const css = readFileSync("src/app/technology-reference.css", "utf8");

  assert.match(disclosure, /const finishedAnimation = animation/);
  assert.match(disclosure, /finishedAnimation\?\.cancel\(\)/);
  assert.match(disclosure, /details\.open = false;[\s\S]*releaseAnimation\(\)/);

  assert.match(css, /\.technology-disclosure\[open\]:not\(\.is-closing\) > summary::after\s*\{[^}]*rotate\(135deg\)/);
  assert.match(css, /\.technology-disclosure\.is-closing > summary::after[\s\S]*rotate\(45deg\)/);
});

import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const enhancer = readFileSync("src/components/FooterContactsEnhancer.tsx", "utf8");
const css = readFileSync("src/app/footer-contacts.css", "utf8");

test("renders copyright left and studio credit right", () => {
  assert.match(enhancer, /footer-meta__copyright/);
  assert.match(enhancer, /© 2026 Абрамов Гурме/);
  assert.match(enhancer, /footer-meta__studio/);
  assert.match(enhancer, /Разработано студией SSJCorp/);
  assert.match(css, /\.footer-meta\s*\{[^}]*display:\s*flex;[^}]*justify-content:\s*space-between;/s);
});

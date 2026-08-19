import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const page = readFileSync("src/app/page.tsx", "utf8");
const enhancer = readFileSync("src/components/FooterContactsEnhancer.tsx", "utf8");
const css = readFileSync("src/app/footer-contacts.css", "utf8");

test("renders copyright left and studio credit right", () => {
  assert.match(enhancer, /footer-meta__copyright/);
  assert.match(enhancer, /© 2026 Абрамов Гурме/);
  assert.match(enhancer, /footer-meta__studio/);
  assert.match(enhancer, /Разработано студией SSJCorp/);
  assert.match(css, /\.footer-meta\s*\{[^}]*display:\s*flex;[^}]*justify-content:\s*space-between;/s);
});

test("does not render the legacy centered copyright", () => {
  assert.doesNotMatch(page, /className="copyright"/);
});

test("keeps footer meta on one row on narrow phones", () => {
  assert.match(css, /@media \(max-width:\s*420px\)[\s\S]*?\.footer-meta\s*\{[^}]*flex-wrap:\s*nowrap;[^}]*font-size:\s*\.58rem;/);
  assert.match(css, /\.footer-meta__copyright,[\s\S]*?\.footer-meta__studio\s*\{[^}]*white-space:\s*nowrap;/);
  assert.doesNotMatch(css, /@media \(max-width:\s*420px\)[\s\S]*?\.footer-meta__studio\s*\{[^}]*width:\s*100%/);
});

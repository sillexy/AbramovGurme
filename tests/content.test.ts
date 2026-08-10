import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

import { contact, directions } from "../src/content/site-content";

test("publishes only the approved five product directions and prices", () => {
  assert.deepEqual(
    directions.map(({ id, price }) => [id, price]),
    [
      ["flagship", undefined],
      ["a1", "350-400 рублей за набор"],
      ["a2", "250-500 рублей за блюдо"],
      ["a3", "250-500 рублей за блюдо"],
      ["a4", "200-500 рублей за блюдо"],
    ],
  );
});

test("uses the approved direct contact destinations", () => {
  assert.equal(contact.phoneHref, "tel:+79804093293");
  assert.equal(contact.emailHref, "mailto:aa@aa1.ru");
});

test("formats menu time ranges with spaces around the dash", () => {
  const pageSource = readFileSync("src/app/page.tsx", "utf8");

  for (const range of ["7:00 – 10:00", "12:00 – 15:00", "18:00 – 21:00", "21:00 – 01:00"]) {
    assert.match(pageSource, new RegExp(`"${range}"`));
  }
});

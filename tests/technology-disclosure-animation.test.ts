import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

test("collapses technology disclosure padding together with height", () => {
  const disclosure = readFileSync("src/components/TechnologyDisclosure.tsx", "utf8");

  assert.match(disclosure, /currentPaddingBottom/);
  assert.match(disclosure, /targetPaddingBottom/);
  assert.match(disclosure, /paddingBottom:\s*currentPaddingBottom\s*\+\s*"px"/);
  assert.match(disclosure, /paddingBottom:\s*"0px"/);
  assert.match(disclosure, /content\.style\.paddingBottom\s*=\s*""/);
});

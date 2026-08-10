import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

test("closes the contact dialog when the native cancel event fires", () => {
  const source = readFileSync("src/components/ContactDialog.tsx", "utf8");

  assert.match(
    source,
    /onCancel=\{\(event\) => \{\s*event\.preventDefault\(\);\s*close\(\);\s*\}\}/,
  );
  assert.match(
    source,
    /onKeyDown=\{\(event\) => \{\s*if \(event\.key === "Escape"\) close\(\);\s*\}\}/,
  );
});

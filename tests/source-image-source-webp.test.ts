import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

test("rewrites source PNG paths to WebP before rendering", () => {
  const source = readFileSync("src/components/SourceImage.tsx", "utf8");

  assert.match(source, /src\.startsWith\("\/source\/"\)/);
  assert.match(source, /replace\(\/\\\.png\$\/i, "\.webp"\)/);
});

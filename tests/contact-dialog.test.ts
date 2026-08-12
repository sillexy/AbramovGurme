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

test("animates the contact dialog before it closes", () => {
  const source = readFileSync("src/components/ContactDialog.tsx", "utf8");
  const styles = readFileSync("src/app/contact-dialog-contacts.css", "utf8");

  assert.match(source, /CONTACT_DIALOG_EXIT_MS\s*=\s*220/);
  assert.match(source, /classList\.add\("contact-dialog--closing"\)/);
  assert.match(source, /window\.setTimeout\([\s\S]*?CONTACT_DIALOG_EXIT_MS/);

  assert.match(styles, /\.contact-dialog\[open\]/);
  assert.match(styles, /\.contact-dialog\.contact-dialog--closing/);
  assert.match(styles, /\.contact-dialog\[open\]::backdrop/);
  assert.match(styles, /@keyframes contact-dialog-panel-in/);
  assert.match(styles, /@keyframes contact-dialog-panel-out/);
});

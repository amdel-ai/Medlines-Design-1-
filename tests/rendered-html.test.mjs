import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);

async function source(path) {
  return readFile(new URL(path, root), "utf8");
}

test("renders the complete transcription-only Medlines story", async () => {
  const [page, layout] = await Promise.all([source("app/page.tsx"), source("app/layout.tsx")]);

  assert.match(page, /Medical Transcription That&apos;s/);
  assert.match(page, /AI for speed\. Humans for accuracy\./);
  assert.match(page, /AI-Only Software vs\./);
  assert.match(page, /Why the Human Touch Wins/);
  assert.match(page, /Medical Transcription/);
  assert.match(page, /Medicolegal Transcription/);
  assert.match(page, /Transcription Technology/);
  assert.match(page, /Customer Success/);
  assert.match(page, /Try the AI\./);
  assert.match(page, /Then come back to the/);
  assert.match(layout, /Human-Verified Medical Transcription/);
});

test("removes prohibited legacy positioning from user-facing source", async () => {
  const files = await Promise.all([
    source("app/page.tsx"),
    source("app/layout.tsx"),
    source("app/components/QuoteForm.tsx"),
  ]);
  const prohibited = /billing|claims processing|revenue cycle|patient accounting|insurance follow-up|denials|collections services/i;
  for (const file of files) assert.doesNotMatch(file, prohibited);
});

test("keeps responsive and reduced-motion safeguards", async () => {
  const css = await source("app/globals.css");
  assert.match(css, /@media\(max-width:900px\)/);
  assert.match(css, /@media\(max-width:650px\)/);
  assert.match(css, /prefers-reduced-motion:reduce/);
  assert.match(css, /overflow-x:hidden/);
});

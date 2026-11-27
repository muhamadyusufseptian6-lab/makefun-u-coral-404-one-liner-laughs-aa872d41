// TDD-lite checks for the One-Liner Laughs entry (u-coral-404-one-liner-laughs-aa872d41).
// Run: node --test test.mjs   (from the entry dir)
import { test } from "node:test";
import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { mkdtempSync, readFileSync, existsSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const entryDir = dirname(fileURLToPath(import.meta.url));
const mainTs = join(entryDir, "main.ts");

function runOnce() {
  const outDir = mkdtempSync(join(tmpdir(), "one-liner-"));
  execFileSync("node", [mainTs], {
    env: { ...process.env, MAKEFUN_OUTPUT_DIR: outDir },
    encoding: "utf8",
  });
  return readFileSync(join(outDir, "entry.txt"), "utf8");
}

test("main.ts exists and writes entry.txt", () => {
  assert.ok(existsSync(mainTs), "main.ts must exist");
  const text = runOnce();
  assert.ok(text.length > 0, "entry.txt must not be empty");
});

test("entry is 1 to 200 characters, not only whitespace, single line", () => {
  const text = runOnce();
  assert.ok(text.length >= 1 && text.length <= 200, `length ${text.length} must be 1..200`);
  assert.ok(text.trim().length > 0, "entry must not be only whitespace");
  assert.ok(!text.includes("\n"), "entry must be a single line");
});

test("entry is deterministic: two runs give identical output", () => {
  assert.equal(runOnce(), runOnce());
});

test("main.ts is stdlib-only", () => {
  const src = readFileSync(mainTs, "utf8");
  const imports = [...src.matchAll(/from\s+["']([^"']+)["']/g)].map((m) => m[1]);
  for (const mod of imports) {
    assert.ok(
      mod.startsWith("node:"),
      `import ${mod} is not a node: stdlib module`,
    );
  }
});

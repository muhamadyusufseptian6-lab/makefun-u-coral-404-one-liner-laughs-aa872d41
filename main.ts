// One-Liner Laughs — u-coral-404-one-liner-laughs-aa872d41
// Writes a single original one-line joke (<= 200 characters) to
// $MAKEFUN_OUTPUT_DIR/entry.txt. Stdlib-only, deterministic: the same
// text on every run, no input read, no network, no randomness.
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

// The joke, invented fresh for this bounty: a sleep-tracking watch
// turns snitch, escalates from snores to a 4:12 a.m. apology, and the
// ceiling fan is now giving the sleeper the silent treatment.
// Concrete numbers (3 out of 10, 214, 4:12 a.m.), three beats,
// twist on the last words.
const ENTRY =
  "My smartwatch scored my sleep 3 out of 10: 214 snores, two kicks at the wall, and at 4:12 a.m. I apologised to the ceiling fan. We're still not speaking.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY, "utf8");

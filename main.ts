import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// A passive-aggressive note from a smart fridge to its owner.
// The fridge is smug about its door sensor, petty about the owner's
// habits, and keeps the grudge small and domestic: the yogurt saw it all.
const ENTRY =
  "I logged the door open for 4 minutes and 12 seconds. The ice cream melted. The yogurt saw everything and will testify.";

if (ENTRY.length < 1 || ENTRY.length > 200 || ENTRY.includes("\n") || ENTRY.trim().length === 0) {
  throw new Error(`entry must be one non-blank line of 1-200 characters, got ${ENTRY.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");

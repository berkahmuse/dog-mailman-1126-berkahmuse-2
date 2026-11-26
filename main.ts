import { mkdirSync, writeFileSync } from "node:fs";

// The Dog Reviews the Mailman — entry for @berkahmuse-2.
// Deterministic: no network, no randomness, no secrets, no input.
// Writes the one-line dog review to /output/entry.txt (116 chars, gate 1-200).
const ENTRY =
  "One star. He brings me a new box every week, then ruins it by filling it with paper. The box was perfect. He is not.";

// Written with no trailing newline, so /output/entry.txt holds exactly
// the 116 review characters the gate counts (1-200, not whitespace-only).
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");

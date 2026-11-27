// make.fun entry: "The Moon Finally Answers Back"
// Writes one line, in the Moon's voice, answering four billion years of
// wishes, howls and late-night promises (1-240 chars) to /output/entry.txt
import { mkdirSync, writeFileSync } from "node:fs";

// Four billion years of being wished on, howled at and promised things at
// 3 a.m. — and the Moon finally answers. The turn is the deadpan: it is a
// rock, it grants nothing, and the only creatures who ever showed up on
// schedule — the werewolves — are behind on the rent. Wry, old, tired,
// and the punchline lands on the last words.
const ENTRY =
  "Four billion years of wishes, howls, and 3 a.m. promises, and my answer is this: I am a rock. I do not grant things. The werewolves, however, owe me rent.";

// The gate: /output/entry.txt must be UTF-8 text of 1 to 240 characters,
// not only white space, and exactly one line. Refuse to write anything
// that would fail it.
function validateEntry(text) {
  const chars = [...text];
  if (chars.length < 1 || chars.length > 240) {
    throw new Error(`Entry invalid: ${chars.length} characters`);
  }
  if (text.trim().length === 0) {
    throw new Error("Entry invalid: only whitespace");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("Entry invalid: must be a single line");
  }
  return chars.length;
}

const charCount = validateEntry(ENTRY);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`Wrote ${charCount} characters to /output/entry.txt`);

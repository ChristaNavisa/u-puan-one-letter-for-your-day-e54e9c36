// One Letter for Your Day — the letter Z.
//
// Behind Z sits "zero sleep": a day that started on no sleep at all —
// staring at the ceiling at 4 a.m., the alarm going off anyway, walking
// through the whole day like a zombie. It is vivid (a sharp picture, not
// a vague mood), funny (the kind of report you repeat to a friend), true
// (everyone has lived that day), and the letter fits its word exactly:
// "zero" is the Z word, and "zero sleep" is the sharpest thing Z stands
// for — not the obvious pick where a sharper one exists, because for Z
// there is no sharper one.
//
// The program is deterministic: it always writes this one letter.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const LETTER = "Z";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LETTER, "utf8");

// Read back what was written: the gate requires exactly 1 character,
// so refuse to finish silently if the file is anything else.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== LETTER) {
  throw new Error(`expected exactly ${JSON.stringify(LETTER)} in /output/entry.txt`);
}

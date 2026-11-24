// Seventeen Syllables of Debugging — one haiku about debugging, 5-7-5.
// The program writes the haiku as plain text to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const haiku = [
  "One stray comma hid",
  "the stack trace points at nothing",
  "my own typo grins",
].join("\n");

// The gate only accepts 1 to 200 characters of plain text, so refuse
// to write anything that breaks the shape instead of shipping it.
if (haiku.split("\n").length !== 3 || haiku.length > 200 || haiku.trim().length === 0) {
  throw new Error("haiku must be three lines of 1 to 200 characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", haiku + "\n", "utf8");

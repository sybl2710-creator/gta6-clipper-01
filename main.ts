// gta6-clipper-01: "GTA 6 IS FINALLY HERE" — a vertical Short cut from Rockstar's
// GTA VI Launch Trailer, pitching make.fun at the end. This program is the
// entry's whole runtime job: copy VIDEO.json (the video's YouTube address)
// from the repository root to /output/VIDEO.json, where the house's gate
// reads it. Nothing else is scored: the video itself is the entry, and the
// house reads its views through the YouTube Data API. Standard library only,
// no network, no clock, no files outside the repository; two runs write
// identical bytes. The VIDEO.json committed here names the uploaded video;
// a placeholder address is refused by the gate on purpose, so the video
// must be uploaded and VIDEO.json updated before submitting.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, 'VIDEO.json'), join(OUTPUT_DIR, 'VIDEO.json'));
} catch (err) {
  console.error(`could not copy VIDEO.json from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}

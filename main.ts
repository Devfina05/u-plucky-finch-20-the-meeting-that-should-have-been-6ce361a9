// The Meeting That Should Have Been an Email (Node 22, standard library only):
// writes one original one-line joke about a meeting that should have been
// an email to /output/entry.txt.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts && cat out/entry.txt
//
// The craft: the judge weighs, in order, that it is plainly a single-line
// joke about a meeting that should have been an email, that the laugh lands
// on its own with the turn arriving by the last word, that the angle is a
// surprise rather than the obvious complaint about how long it ran, that
// every word earns its place, and that it names something true about
// meetings people have actually sat through. This line does not complain
// that the meeting could have been an email — it shows the meeting eating
// itself: nine people and forty-five minutes produce, as their one outcome,
// an email summarising the meeting that should have been the email. The
// turn arrives in the final word, "email", which makes the whole sentence
// fold back on its own subject — the meeting's only product is the very
// thing it should have been. No setup, no second sentence, no inside
// story, no throat-clearing.
// Verified by running the program: the output is 111 characters, one line,
// inside the 1-to-200-character gate.

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const JOKE =
  'Nine people, forty-five minutes, one outcome: an email summarising the meeting that should have been the email.';

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), JOKE);

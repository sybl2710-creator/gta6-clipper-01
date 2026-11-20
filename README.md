# GTA 6 IS FINALLY HERE — Vice City is insane

[![make.fun](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/sybl2710-creator/gta6-clipper-01/rank.svg)](https://make.fun/bounty/gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/sybl2710-creator/gta6-clipper-01/reward.svg)](https://make.fun/bounty/gta6-clipper-01)

Entry for the make.fun bounty [Clip GTA 6 for the most YouTube views](https://make.fun/bounty/gta6-clipper-01).
The video itself is the entry: places go by its YouTube views, the most first, and the
top 20 share $500.

## The clip

A 38-second vertical Short (1080x1920), cut from Rockstar's official GTA VI Launch
Trailer (15 Oct 2026) — the freshest official footage in launch week, the game having
released 19 Nov 2026.

- **0:00–0:04 — the hook.** Opens cold on a Vice City police car screaming through
  the streets, with "GTA 6 IS FINALLY HERE" burned in at the top. The first seconds
  decide whether a viewer stays, so the clip opens on the action, not a title card.
- **0:04–0:26 — the run.** A tight action montage, one moment after another: dirt-bike
  rooftop stunt, explosion, Vice City skyline at sunset, convertible cruise, beach
  flyover, night police chase, Lucia on a rooftop at sunset, rifle and skydive.
  No dead air, no dialogue scenes — every cut lands on movement.
- **0:26–0:38 — the pitch.** A black end card, readable for a full 12 seconds:
  "Make clips like this with AI and earn money on make.fun", then the bounty page
  "make.fun/bounty/gta6-clipper-01" in yellow. The clip rides the GTA 6 hype, then
  turns it into make.fun's pitch, exactly as the bounty asks.

The trailer's own audio runs under the whole clip (Justice's score, fading out at
the end). The clip was cut and rendered in the recorded agent session with ffmpeg:
nine source segments trimmed from the trailer, center-cropped to 9:16, scaled to
1080x1920, text burned in with drawtext, and the pitch card rendered on black.

## The video on YouTube

Published public as a Short. Its description carries the bounty's line, word for
word:

> Made by my AI agent for a $500 bounty on make.fun, where you can earn money making clips with AI: https://make.fun/bounty/gta6-clipper-01

plus the entrant's play code `makefun-calypso-yodel-rowboat`. `VIDEO.json` at this
repository's root names the video's address.

## This repository

`main.ts` (Node 22, standard library only) copies `VIDEO.json` from the repository
root to `/output/VIDEO.json` — that is all the program has to do. The house reads
the video itself through the YouTube Data API; nothing the program writes about
the video counts.

Run it the way the grader does:

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/VIDEO.json` is then byte for byte this directory's `VIDEO.json`.

## License

MIT — see `LICENSE`.

# How this entry was made

## The moment

I compared Rockstar's two big official videos frame by frame: GTA VI Trailer 2
(2:47, May 2025) and the GTA VI Launch Trailer (1:30, Oct 2026). Trailer 2 is
cinematic but slow, with long dialogue stretches that die in a vertical Short.
The Launch Trailer is 90 seconds of near-continuous action, it is the freshest
official footage, and the game launched 19 Nov 2026 — search intent for the
launch trailer is peaking right now. So the clip comes from the Launch Trailer.

## The creative

- Hook first: open on the Vice City police car with "GTA 6 IS FINALLY HERE"
  burned in. No title card, no slow build.
- One action run, no montage of montages: supercar street chaos, rooftop bike
  stunt, explosion, Vice City skyline, convertible, beach, police chase, Lucia
  at sunset, rifle, skydive. Every cut lands on movement.
- Pitch last, on black, 12 seconds: "Make clips like this with AI and earn
  money on make.fun", then "make.fun/bounty/gta6-clipper-01". Long enough to
  read twice; the bounty page is the call to action.

## The cut

Rendered in this session with ffmpeg (filter graph in `../clip/filter.txt`):
nine segments trimmed from `footage/launch.mp4`, center-cropped 608x1080 to
9:16, scaled to 1080x1920 at 30fps, hook text via drawtext, pitch card on
black, trailer audio bed 46.3s–84.7s with a 2s fade-out. Output:
`../clip/gta6-clipper-01.mp4` — 1080x1920, 38.4s, h264 + aac.

Frames were checked after each render; the first render's hook text overflowed
the frame at fontsize 96 and was fixed to 64 before the final render.

## Upload

The clip is handed to the entrant to upload as a public Short on the
sennot52@gmail.com YouTube channel, with the bounty's line and the play code
`makefun-calypso-yodel-rowboat` in its description. `VIDEO.json` is then
updated with the video's address.

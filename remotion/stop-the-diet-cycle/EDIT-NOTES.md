# Reference analysis and editorial decisions

## Sierra reference

Technical metadata: 43.142 seconds, 854 × 480, 30 fps. Its horizontal layout is a reference for editing technique, not the target aspect ratio.

Visual inspection and scene-change sampling show:

- The opening uses an approximately one-second visual hook with brief typography and fast changes before settling on the speaker.
- Presenter runs often last about two to four seconds between framing or compositional changes. Graphic builds create additional changes within shots. These are approximate editorial observations, not a frame-by-frame mean shot-duration measurement.
- Captions use small groups of uppercase words, predominantly white, with selected yellow-green semantic emphasis. They sit below the face while major statements occupy separate areas.
- Large text arrives through short movement, scale and blur-like entrances; the motion settles quickly.
- Framing alternates between medium and closer views at meaningful phrases, rather than using a constant zoom.
- Meaningful B-roll and graphics interrupt the presenter: opening imagery, a short transformation section, a three-part system build, team/support layouts, and a brief training cutaway.
- Graphics often retain darkened/blurred source footage as their backdrop. Multi-card layouts develop one idea at a time.
- Cuts are direct and quick, with occasional short motion/flash transitions; there are no long dissolves.
- The final approximately four seconds introduce a designed presenter/CTA layout with a white headline, highlighted key phrase, action strip and brand details.

## Translation to this source

The clinic source is vertical, so the speaker is retained at full height with restrained 1.00–1.09 framing changes. Graphic overlays stay below her face. Full-screen cards use a strongly darkened, blurred view of the source as their backdrop. White, yellow (#F4E735) and dark neutrals form the design system. No reference footage is used.

| Source time | Spoken moment | Treatment |
|---|---|---|
| 0–6.3 s | Repeated promises that this diet will be different | Synchronized captions, hook typography, selective closer framing |
| 6.3–10.2 s | Kitchen, exercise, calories | Sequential numbered routine cards |
| 10.2–16.2 s | Motivation meets real life | Presenter, then BUSY / STRESSED / TIRED build |
| 16.2–22.8 s | Harder to follow; back where you started | Presenter and animated cycle diagram |
| 22.8–27.6 s | Strict diet versus a different strategy | Bold keyword statement, then yellow strategy panel |
| 27.6–36.9 s | Lifetime; personalization; beyond the scale | Typeset clinic name, personalized emphasis, scale statement |
| 36.9–44.4 s | Composition, metabolism, lifestyle, goals and other factors | Sequential personal-factor cards |
| 44.4–53.9 s | Diet hopping, a real-life plan, professional guidance | Presenter, selected headline emphasis and yellow plan panel |
| 53.9–57.36 s | Stop starting over; take the first step | Strongest presenter framing and large CTA lead-in |
| 57.36–69.04 s | $49 Discovery Visit and call today | Designed offer card; telephone reveals when spoken; final two-second hold |

## Verification

TypeScript compilation passes. Representative frames were rendered and visually inspected at the hook, routine cards, pressure words, cycle diagram, strategy panel, personalization, factor cards, stop-starting-over statement and CTA. The full MP4 is rendered with Remotion. The original speaker and complete narration are retained. Captions use source-relative alignment and display in a shared original timeline; graphics follow the actual script.

Export verification: H.264/AAC, 1080 × 1920, 25 fps; video duration 69.04 seconds. Comparing decoded mono audio at the original sample positions gives correlation 0.999884, with zero RMS in the two-second post-narration hold. Local review and download endpoints return HTTP 200. Project ZIP integrity is verified.

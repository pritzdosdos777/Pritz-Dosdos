# Anderson Chiropractic — Am I a Candidate for Spinal Decompression?

## Delivery

1080 × 1920, 30 fps, H.264 MP4 with AAC audio. Duration: 77.4 seconds. Original source: 480 × 854, 25 fps, 73.4 seconds. All source dialogue and its original timing are retained. A four-second consultation end card follows the source. The export upscales the footage; it does not recover original 1080p detail.

## Reference analysis

Sierra Example.mov: 43.142 seconds, 854 × 480, 30 fps. Its editing language includes bold white condensed typography, colored keyword emphasis, short caption groups, full-screen exercise footage, sliding information panels, inset pictures, and a split-panel CTA. This edit adapts the typography, keyword emphasis, panel movement, punch-ins and inset layouts to a restrained medical aesthetic. The reference is landscape; the requested deliverable is vertical.

## Timestamped editing breakdown

| Time | Spoken cue / editing decision |
|---|---|
| 0.00–0.50 | Original doctor, clinic name, soft score fade-in. |
| 0.50–5.90 | Animated question: “Am I a candidate?” White condensed type; teal accent. |
| 6.20–9.00 | Information card: what is causing the problem? Gentle camera framing reset. |
| 12.50–14.20 | Chronic lower-back pain card, synchronized to the symptom description. |
| 14.20–16.80 | Full-screen conceptual lumbar illustration labeled L1–L5, with doctor inset. This is Remotion motion graphics, not generated video B-roll. No treatment mechanism or expected outcome is illustrated. |
| 17.10–21.40 | Hip / leg pain and sciatica information panel. |
| 21.40–27.40 | Return to the doctor during the patient example. |
| 27.40–30.30 | Pain, numbness and tingling panel. |
| 30.40–32.90 | Investigate the symptoms. |
| 34.40–36.90 | Emphasize that not everyone needs decompression. |
| 39.20–42.60 | Joint / muscle / hip card matches the alternative sources discussed. |
| 43.70–46.90 | Individual appropriateness card matches the medical-condition caveat. |
| 47.00–51.30 | Doctor unobstructed during explanation of avoiding automatic machine treatment. |
| 51.30–57.90 | Full-screen evaluation sequence, with live doctor inset: listen, examine, review imaging when appropriate. |
| 58.20–62.00 | Individual treatment selection panel. |
| 64.60–67.30 | “That’s our job” reassurance card. |
| 67.40–73.40 | Website CTA alongside the doctor's original invitation to call. |
| 73.40–77.40 | Animated consultation end card and score fade-out. |

Word captions run with the original source throughout. Four words per group where practical (five to preserve the negative candidacy statement); punctuation and long pauses break groups. The active spoken word turns teal. Captions are in an editable inline array in src/Root.tsx and mirrored as public/captions.json. Speech recognition used Whisper base.en via sherpa-onnx, with extra transcription passes at chunk boundaries and PocketSphinx forced word alignment. Word timing is model-estimated, not manually measured for every word.

## Missing assets and limitations

- **The user subsequently authorized AI still-image B-roll in place of moving AI video.** Four different AI images were generated and incorporated with masked reveals and subtle camera movement: back discomfort (11.90–14.20), daily kitchen activity (23.60–26.70), clinician consultation (51.30–53.55), clinic arrival (62.60–64.60). These are still images, not AI-generated video. InVideo/Kling video generation was refused because the account had zero credits; no credits were spent. The image files are in public/. Generic clinic scenes are labeled illustrative. Video-generation prompts remain in BROLL-PROMPTS.md for possible later use.
- No approved clinic-treatment footage supplied. No fictional Back-on-Trac equipment or AI clinic footage is presented as authentic Anderson footage.
- No verified official logo file available. Text clinic naming is used; the AC mark visible in the original source remains intact.
- Navy / white / teal is the brief's temporary palette, pending brand review. Fonts are Barlow Condensed and DejaVu Sans, not claimed as verified clinic typography.
- No phone number or promotional price was verified. The supplied website is used. Website search results supported Back-on-Trac, but direct website content/asset access was incomplete. No $49 promotion is included.
- No supplied licensed music track. An original, quiet synthesized ambient score and airy transition accents were authored for this edit; no third-party music or recordings were used. See AUDIO-NOTES.md and scripts/make-score.py.
- The lumbar illustration is schematic rather than a detailed 3D anatomical model or herniated-disc simulation. It depicts neither decompression mechanics nor promised results.

Brand sources consulted: https://andersonchiroterrehaute.com/ and https://andersonchiroterrehaute.com/blog . The exported file uses the user-authorized AI still-image approach, with the lack of genuine moving AI B-roll documented above.

## Updated sound direction

The user requested cinematic music and different sound effects for movements. The original synthesized score includes distinct transition accents for each major card/reveal: different tone frequencies, decay lengths, noise-filter widths and accent levels. The cues are intentionally subtle under speech.

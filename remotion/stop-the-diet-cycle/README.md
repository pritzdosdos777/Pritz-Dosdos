# Stop the Diet Cycle — Remotion edit

Vertical 1080 × 1920, 25 fps, 69.04 seconds. The complete 67.04-second source narration is retained, followed by a two-second CTA hold. The reference video is used only for editorial analysis; none of its footage, audio, people or branding is included.

## Preview

```sh
npm ci
npm run dev -- --no-open
```

Choose `Stop-the-Diet-Cycle`. Studio was verified at http://localhost:3001/Stop-the-Diet-Cycle in the editing environment.

## Render

```sh
npx remotion render src/index.ts Stop-the-Diet-Cycle Stop-the-Diet-Cycle-Edited.mp4 --codec=h264 --crf=18 --pixel-format=yuv420p
```

If using this cloud environment, append `--browser-executable=/usr/bin/chromium --concurrency=2`. Other environments can use Remotion's browser installer.

## Adjust the edit

- `src/Edit.tsx`: individually authored framing clips, scene timing and the continuous original narration.
- `src/Components.tsx`: `PunchIn`, `KeywordCaption`, `GraphicCard`, `SplitScreen`, `BlurredBackground` and the typographic Lifetime wordmark.
- `src/DynamicCaption.tsx`: four-word maximum phrase grouping, entrance animation and semantic keyword emphasis.
- `src/Scenes.tsx`: routine checklist, pressure words, cycle diagram, personal-factor cards and `CTA`.
- `src/theme.ts`: white/yellow/dark palette, font families and safe-area values.
- `public/captions.json`: editable, source-relative word timestamps in Remotion's Caption format. Generated with local Whisper transcription, checked across chunk boundaries and aligned with PocketSphinx. Confidence is null, because this is forced alignment rather than a calibrated word confidence score.
- `TRANSCRIPT.txt`: complete narration transcript. Number words are spelled out for alignment; the offer and telephone number are displayed in digits on the CTA.
- `public/source.mp4`: browser-compatible H.264 copy of the uploaded source, retaining the original audio track and full duration.

The source .mov is not included twice in the archive. Its full content is included as source.mp4. Fonts are bundled for deterministic preview and rendering. Their license is included.

The spoken $49 New Client Discovery Visit and 844-832-8567 CTA are used. The website address is supplied by the user. The wordmark is typeset text, not a recreated or fabricated clinic logo. No external B-roll, testimonials, health claims, stock patients, replacement voice or invented dialogue is introduced.

## Source media in this repository

The root `Stop-the-Diet-Cycle-Remotion.zip` is the complete self-contained project. Its `public/source.mp4` is included in the ZIP rather than duplicated here. Extract that file into this folder’s `public/` directory before running this separate source checkout.

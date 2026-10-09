# Anderson Chiropractic — Back-on-Trac Equipment Edition

1080 × 1920 vertical, 25 fps, 85.92 seconds. The original 75.92-second video and voice are preserved, followed by a 10-second contact scene.

## Preview and export

```sh
npm ci
npm run dev -- --no-open
npx remotion render src/index.ts Anderson-Spinal-Decompression-Equipment Anderson-Spinal-Decompression-Equipment.mp4 --codec=h264 --crf=18 --pixel-format=yuv420p
```

In the cloud environment, append `--browser-executable=/usr/bin/chromium --concurrency=2` to the render command.

## Editing

- `src/Root.tsx`: authored timeline, individual motion graphics and sound cues, music levels, full inline editable captions.
- `src/Graphics.tsx`: animated spine and chair illustrations, point cards, and closing CTA.
- `src/basic-captions.tsx`: unmodified official Remotion BasicCaptions source.
- `src/style.css`: bundled fonts and caption styling.
- `public/captions.json`: source-relative word timestamps in Remotion Caption format, transcribed with a locally run Whisper ONNX model and force aligned with PocketSphinx.
- `public/presenter.mp4`: H.264 conversion of the complete uploaded source, preserving speaker and voice.
- `public/cinematic.wav`: original instrumental score composed for this edit, with warm sustained chords, piano-like arpeggios, low pulses and percussion. Mixed quietly beneath speech, rising for the final CTA.
- `public/whoosh.wav`: original synthesized transition sound.
- `public/click.ogg`: Kenney CC0 interface click, with license included.

The source upload is 480 × 854. Upscaling to a delivery resolution does not create additional source detail.

Contact information was verified against https://andersonchiroterrehaute.com/ on October 10, 2026 (Asia/Taipei): (812) 299-7000; 4513 S. 7th Street, Terre Haute, IN 47802; Tuesday and Thursday 10 AM–1 PM and 2 PM–6 PM. An older special-offer landing page lists a different phone number; the current main website is used.

The closing invitation is to book a consultation. No promotional price, invented testimonial, replacement voice or promised treatment outcome is added. The doctor's spoken treatment cautions remain in the video and captions. Branding includes the user-supplied interlocking AC logo, with its white background removed using image generation. Gray and black colors are retained on white logo tiles.

The complete project ZIP includes all media. In the separate repository source folder, extract `public/presenter.mp4` and `public/cinematic.wav` from the ZIP before running (to avoid duplicating large media in Git).

## Full-screen B-roll

The original doctor continues speaking underneath all six full-frame cutaway scenes. Captions remain visible. This is 48.56 seconds of B-roll within the original 75.92-second narration.

| Time | Scene |
|---|---|
| 5.20–13.72 | Animated spinal-disc schematic and labels |
| 13.76–19.08 | AI daily-life photograph with camera movement |
| 26.76–32.96 | Animated nerve-pressure schematic and symptom labels |
| 33.44–40.56 | Animated gentle-stretch schematic |
| 40.88–56.96 | Supplied Back-on-Trac manufacturer demonstration |
| 60.60–65.92 | AI consultation photograph with camera movement |

`src/Broll.tsx` contains reusable scenes and their motion. `src/Brand.tsx` contains the logo lockup. Each cutaway has its own named JSX Sequence in Root.tsx. The visuals are full-screen cutaways, not graphics placed in front of the talking head. The two AI photographs are animated still images, not generated live-action videos. Illustration captions distinguish generic scenes from real clinic footage.

Image assets, the cleaned logo and font files are included in both the project ZIP and the source folder. `presenter.mp4` and `cinematic.wav` are included in the ZIP only to avoid duplicating large files in Git.

## Supplied Back-on-Trac demonstration

The latest revision adds the uploaded Ergo-Flex Technologies demonstration from 40.88–56.96 seconds. The 16.08-second excerpt shows the chair and reclining movement across the doctor's system and seated-treatment explanation. Its original audio is muted. The doctor, captions and cinematic music continue.

`src/Equipment.tsx` uses `public/back-on-trac-demo.mp4`. The original widescreen framing and Back-on-Trac mark remain visible in a branded full-screen scene. This replaces the conceptual seated-person cutaway in the earlier version. The equipment clip begins at the start of the manufacturer's upload. A clean, independently decoded excerpt is included in the project.

The final delivery was assembled by rendering the changed frame range (1022–1423) in Remotion and substituting those video frames into the earlier approved export. The prior continuous audio track is retained exactly. The full composition can also be rendered directly with the command above.

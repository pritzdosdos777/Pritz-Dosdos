# Anderson Chiropractic — Spinal Decompression

1080 × 1920 vertical, 25 fps, 85.92 seconds. The original 75.92-second video and voice are preserved, followed by a 10-second contact scene.

## Preview and export

```sh
npm ci
npm run dev -- --no-open
npx remotion render src/index.ts Anderson-Spinal-Decompression Anderson-Spinal-Decompression-Edited.mp4 --codec=h264 --crf=18 --pixel-format=yuv420p
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

The closing invitation is to book a consultation. No promotional price, invented testimonial, replacement voice or promised treatment outcome is added. The doctor's spoken treatment cautions remain in the video and captions. Branding is a typeset clinic name, not a recreated logo.

The complete project ZIP includes all media. In the separate repository source folder, extract `public/presenter.mp4` and `public/cinematic.wav` from the ZIP before running (to avoid duplicating large media in Git).

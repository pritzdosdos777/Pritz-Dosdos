# Lifetime / Sierra-inspired short-form editing style

Saved reference: **Stop the Diet Cycle**, completed October 9, 2026 (Asia/Taipei).

## What to reuse

Fast, clean, professional social-video editing. Let the actual dialogue determine the cuts, typography and visual interruptions. Analyze each new source before choosing timings; do not copy this edit's timestamps to a different script.

- Preserve the original speaker, original voice, complete spoken message and source aspect ratio. Default to 9:16 for vertical source footage.
- Use large, bold, condensed uppercase captions. Default font: bundled DejaVu Sans Condensed Bold. White is the main color; yellow (#F4E735) emphasizes selected meaningful words. Use dark charcoal (#111315) for cards and backgrounds.
- Use short caption phrases, generally two to four words. Align captions to the actual source audio. Reveal meaningful highlighted words when spoken; do not highlight every word.
- Give text a quick, restrained spring/scale entrance, a small upward movement and a brief fade. Motion settles within a few frames.
- Leave space around the speaker's face. In a 1080 × 1920 composition, use approximately 88 px left, 150 px right and 280 px bottom safe margins. Recheck these values for each target platform and new speaker framing.
- Alternate presenter views through selective punch-ins, typically scale 1.00–1.09 for a medium vertical shot. Tie framing changes to important statements. Avoid continuous zooming.
- Make visual changes around every one to three seconds where the dialogue supports them. A meaningful statement can hold longer. Use hard cuts and fast restrained motion instead of long dissolves.
- Occasionally interrupt the presenter with a numbered checklist, large statement, cycle diagram, key-point cards or yellow text panel. Keep these moments short and related to the sentence being spoken.
- Full-screen graphics can retain a very darkened and blurred view of the original footage as a subtle background. Build multi-part ideas sequentially.
- Use relevant B-roll only when suitable, authorized footage is available. If it is unavailable, use the source footage, text, motion and diagrams. Do not use unrelated stock imagery.
- Finish with a designed CTA: large headline, highlighted offer or action, contact details and a short final hold. Use the spoken CTA; do not add conflicting offers, health claims or fabricated testimonials.

## This edit's story structure

1. Hook: how many times have you started a diet believing this time will be different?
2. Familiar routine: kitchen, exercise, calorie counting.
3. Friction: real life, busy, stressed, tired.
4. Cycle: back where you started.
5. Turning point: a different strategy.
6. Solution: personalized care; more than scale weight.
7. Factors: body composition, metabolism, lifestyle, goals and other individual considerations.
8. Benefit: a plan that fits real life and professional guidance.
9. CTA: stop starting over; $49 New Client Discovery Visit; 844-832-8567.

## Implementation reference

- Code: `remotion/stop-the-diet-cycle/`.
- Complete self-contained project, including source footage: `Stop-the-Diet-Cycle-Remotion.zip`.
- Final render: `Stop-the-Diet-Cycle-Edited.mp4`.
- Captions: `Stop-the-Diet-Cycle-Captions.srt`.
- Detailed observations and script-specific timing: `remotion/stop-the-diet-cycle/EDIT-NOTES.md`.

Reusable components: `DynamicCaption`, `KeywordCaption`, `PunchIn`, `GraphicCard`, `SplitScreen`, `BlurredBackground` and `CTA`. Centralize colors and typography. Author independently editable scene and framing nodes. Keep caption timings relative to their original source file.

The Sierra video was used only to understand editing technique. Its footage, dialogue, people, branding and actual content are not copied into this edit. The clinic wordmark is typeset text, not a fabricated replacement logo.

## Quality and delivery

Compile TypeScript, inspect representative rendered frames, export the full MP4, and verify resolution, duration and original-audio timing. Check text fit, face clearance, caption timing, graphic relevance and CTA accuracy. Save final files plus the editable project to GitHub, and provide direct download links in the final answer.

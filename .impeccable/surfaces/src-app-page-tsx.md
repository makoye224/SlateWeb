---
version: 1
slug: "src-app-page-tsx"
primary_target: "src/app/page.tsx"
related_targets: []
---

THESIS: Don't describe the mechanism, show the real screen. The hero is a faithful phone mockup of Slate's actual Today screen, refusing the earlier abstract day-tile metaphor the user rejected as not concretely showing the app.

OWN-WORLD: Slate's own established identity, inherited not invented, same as before: primary #5B5CE2, warm neutrals, Fraunces 700 display over system sans body. The phone screen additionally recreates two real components verbatim: TonightHero.tsx's indigo color-field panel (field #2C2A6B, glow #433F94) and EveningTimeline.tsx's rail-of-nodes pattern (colored dot, connector line, NOW pulse ring at 2600ms, hollow node for rest).

STORY: A visitor sees an actual iPhone showing Slate's real interface: tonight's featured plan in the indigo hero panel, and the evening's timeline below it with a past item, a current item tagged NOW, and open/rest time shown honestly as empty. They believe it because it is the real UI, not an invented visualization.

FIRST VIEWPORT: Two-column at desktop (text pitch left, phone right; stacks centered under 860px). Phone: dark bezel, notch, status bar (time + signal/battery), screen containing greeting, time-remaining line, the TonightHero recreation, and a 3-row EveningTimeline recreation, home indicator at bottom.

FORM: User-directed revision, superseding the original rolled/fused direction (seed key 34bb1bbd) after explicit rejection of the abstract week-strip ("the landing page and that week look atrocious"). Built directly from SlateApp's real component source (TonightHero.tsx, EveningTimeline.tsx, index.tsx), not a new roll.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance.

# Critic Panel — #1615: 4,456 People Were Thrown From Their Cars in 2024. The Curtains Couldn't Catch Them.
**Journalist:** Clara Rollover | **Kicker:** Body Count | **Round:** 1 | **Date:** 2026-11-28

## Hard gates (regex = source of truth)
- Em dashes: **0** (max 3) — PASS
- Banned phrases: **0** — PASS
- "The" sentence starters: **1.8%** (max 15%) — PASS
- CSS class: `class="story"`, links `../style.css`, no story-detail/story-content/story-page, no story.css — PASS
- Sentence rhythm: variance 822.2 (≥200), short 11.4% (≤15%), long 52.3% (≥15%) — PASS
- Word count: 1158 (article body incl. references)
- Hero: real JPEG (FF D8), 1920x1280, md5 ab648bdc, ?v=ab648bdc in img + og:image — PASS
- References: 4; ref-4 now also carries the ESC estimate cited in the counterargument paragraph.

## Changes from round 0 (all four required fixes applied and verified by grep)
1. "the sharpest percentage improvement among the headline categories NHTSA tracks" → "one of the largest percentage drops in the report" (body AND og:description; the og:description copy was caught by a second grep pass).
2. "the best year on record for this particular way to die" → "an 11 percent improvement".
3. "the largest single-year improvement in the recent record" → "one of the largest percentage improvements in the 2024 report".
4. ESC claim now reads "prevents roughly half of rollovers before they start, by NHTSA's estimate" with citation [4]; ref-4's description updated to include the ESC estimate.
5. Lede phrasing "Killed by leaving the car" → "Killed by being thrown from the car".

## Re-scores
### 1. General Editor — 9.0/10
All three superlative errors fixed; the lede phrasing fix sharpens the mechanism description. Arc is clean: lede, improvement, physics, belt, counterargument, action. Remaining nit: "That is where the belt comes in, and where the data gets blunt" is still the weakest transition in the piece.

### 2. Voice Coach — 9.0/10
Unchanged from round 0. Distinctly Clara, rhythm passes, no AI tells.

### 3. Ethics Reviewer — 9.0/10
Unchanged from round 0. Victim-centered, sources honestly flagged, counterargument at full strength.

### 4. Social / Shareability — 8.7/10
Unchanged from round 0. Headline stat, screenshot-ready pull stat, quotable 48/13 comparison; headline is long and there is no single one-line kicker quote. Not blocking.

### 5. Legal Accuracy — 9.0/10
Unchanged from round 0. Citations real and checkable; FMVSS 226 description accurate. Ref-3 still links to a secondary explainer rather than the FR document; noted, not blocking.

### 6. Research Rigor — 8.9/10
Round-0 defects fixed and verified: "one of the largest percentage drops in the report" is true (ejection's 11% is third among the Overview's listed category declines, behind pedalcyclist hit-and-run at 16% and school-transportation at 14%); the two "record" superlatives are gone; the ESC claim now carries NHTSA's estimate with its citation. Original contributions stand (FMVSS 226 paradox, 48/13 survivor comparison, ejection-vs-distraction scale, pickup skew), cross-checks reconcile exactly, limitations stated. Remaining nit: "one of the largest" is still a ranking claim, but it is now verifiable from the Overview's own listed figures.

### 7. Data Presentation — 8.9/10
Unchanged from round 0. Every percentage paired with its count; per-day conversions; 48/13 comparison framed correctly.

## Verdict
| Critic | Score |
|---|---|
| General Editor | 9.0 |
| Voice Coach | 9.0 |
| Ethics Reviewer | 9.0 |
| Social / Shareability | 8.7 |
| Legal Accuracy | 9.0 |
| Research Rigor | 8.9 |
| Data Presentation | 8.9 |
| **Average** | **8.93** |

**All 7 critics ≥ 8.5 and all hard gates pass → SHIP.** Round 0 → round 1 revision resolved the only blocking issue (Rigor 8.0 → 8.9). Known nits (workmanlike transitions, long headline, ref-3 linking to a secondary explainer) are minor and do not block shipment.

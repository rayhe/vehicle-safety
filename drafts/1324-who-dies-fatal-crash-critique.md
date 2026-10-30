# CRITIC PANEL — 1324-who-dies-fatal-crash (round 0, self-review)

**Draft:** drafts/1324-who-dies-fatal-crash.html | **Hero:** drafts/1324-who-dies-fatal-crash.jpg (JPEG, FF D8, 1920x1280, landscape)

## Hard gates (regex-verified, not opinion)
- Em dashes in body: 1 (max 3) — PASS
- Banned phrases (Here's the thing / The kicker / paradigm shift / game-changer / deep dive / unpack): 0 — PASS
- "The" sentence starters: 6/52 = 11.5% (max 15%) — PASS
- CSS: article class="story", links ../style.css, story-body wrapper — PASS
- Sentence rhythm: variance 377.0 ≥ 200; short 5.3% ≤ 15%; long 39.5% ≥ 15% — PASS (fixed by merging 8 short fragments)
- Data: all 10 table ratios re-verified against fars_output.js via node — exact match

## Scores
1. **General Editor — 8.8.** Arc works: opener hook → stat → table → mechanism (IIHS) → objections → actionable close. Headline is the strongest in the last dozen queue entries. The 101-word table-intro sentence was absorbed into prose. No structural fix needed.
2. **Voice Coach (Axle McScatter) — 9.0.** Catchphrase opener used verbatim; numbers-first voice; table presented without apology; dry asides ("honorary sedans with cargo beds", "only physics doing physics") read like Axle, not generic AI. Rhythm gate passes. If the byline were swapped to Rex, the table fixation would break — voice is distinct.
3. **Ethics Reviewer — 8.5.** "Protects its people by making someone else die instead" is punchy but data-supported and immediately qualified by the objections paragraph. No vehicle shaming of current owners that isn't grounded. One softening applied: "walked away or rode away" is dramatized but common in this desk's style; kept.
4. **Social/Shareability — 9.0.** Pull stat "66%" + provocative headline is the most shareable framing of the piece. Table makes the screenshot. No change needed.
5. **Legal Accuracy — 8.6.** All claims trace to FARS (computed) or IIHS (verified live 2026-10-29, Monfort 2025 finding quoted from the IIHS page itself). Fix applied: removed unsourced "5,800-pound truck" → "full-size pickup". References section has real, reachable URLs.
6. **Research Rigor — 9.0.** Original cross-tab (deaths per fatal-crash involvement by nameplate and class) not found in queue ("aggressiv 0", "other-driver 0"). Limitations enumerated (DEATHS field semantics, fatal-only, single-vehicle mix, rural exposure). Counterargument stated at strength: low ratio may mean well-built truck, not aggressive truck; physics cited to resolve. Methodology shown with inputs.
7. **Data Presentation — 8.8.** Table sorted descending, ≥1,000-involvement floor stated, class aggregates included. Fix applied: added Ford Ranger row (4,476 / 3,089 / 0.69) to match the prose mention of S-10 and Ranger. Ratios verified to 2 decimals.

## Verdict
All 7 ≥ 8.5, all hard gates pass. **SHIP** — no round 2 needed.

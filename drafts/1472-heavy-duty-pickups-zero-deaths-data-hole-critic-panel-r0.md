# Critic Panel — #1472: Heavy-Duty Pickups Zero-Deaths Data Hole (Round 0)

**Slug:** 1472-heavy-duty-pickups-zero-deaths-data-hole
**Journalist:** Axle McScatter
**Date:** November 11, 2026
**Draft:** drafts/1472-heavy-duty-pickups-zero-deaths-data-hole.html
**Hero:** drafts/1472-heavy-duty-pickups-zero-deaths-data-hole.jpg (real JPEG, 1920x1280, 444,908 bytes)

## Hard Gates (regex = source of truth)

- **Em dashes:** 0 (max 3) — PASS
- **Banned phrases:** 0 matches for "Here's the thing", "The kicker", "paradigm shift", "game-changer", "deep dive", "unpack", "Here's where it gets interesting", "Let's be clear", "Make no mistake", "And it's not even close", "The numbers don't lie" — PASS
- **"The" sentence starters:** 1 of 28 body sentences, 3.6% (max 15%) — PASS
- **CSS class check:** `class="story"` present, `../style.css` linked, zero `story-detail`/`story-content`/`story-page`/`story.css` — PASS
- **Sentence rhythm:** `sentence-rhythm-check.py --json` — variance 343.1 (>= 200), short 6.5% (<= 15%), long 58.1% (>= 15%) — PASS (exit 0)
- **Actionable insights:** present (IIHS table lookup, VIN check implied via site convention, buyer guidance, pipeline fix) — PASS
- **Hero JPEG:** verified FF D8 magic, 1920x1280 — PASS
- **References section:** 5 cited sources with links — PASS

## Critic 1 — General Editor: 8.8/10

Structure is clean: hook (0.25 vs 0.88), two holes in ascending order of weirdness, IIHS contradiction as the pivot, counterargument, action. The lede does not bury anything and the pull stat ("0") earns its place. Numbers are re-verified against fars_output.js by the researcher and check out. Deductions: 587 words total body (prose ~520) runs past the 300-500 guideline by about a fifth; the table earns some of that length, but a tighter cut of the counterargument paragraph would have landed inside the band. The headline is strong and honest. No structural rewrite needed.

## Critic 2 — Voice Coach: 9.0/10

Distinctly Axle: tables, recomputation, "I ran the numbers" energy without ever saying it. Zero banned phrases, zero em dashes, one "The" starter. Rhythm script passes on all three metrics (var 343.1, short 6.5%, long 58.1%). Sentence lengths genuinely vary, from the 4-word fragment structure to 47-word builds. Minor nits: "Put the two together and the story flips" is slightly formulaic, and "mid-sentence" as a description of a truncated data series is cute but lands once and is never paid off. Neither is an AI tell. Voice is consistent throughout; no byline could be swapped in without rewriting.

## Critic 3 — Ethics Reviewer: 9.0/10

The self-correction posture is the ethical core here and it is handled right: the site admits its own table is wrong, in public, with the corrected numbers. No self-congratulation beyond "We ran the numbers twice," which is earned rather than boastful. No victims are exploited for color; the piece is about rows in a table, not bodies, and it keeps that distance. The "other driver" framing correctly centers the people the table erases. No moralizing, no strawmen. Deduction is only for the mild self-pat in the closer.

## Critic 4 — Social/Shareability: 8.7/10

The pull stat "0" is the share trigger, and the headline ("The Deadliest Truck in America Killed Nobody, According to Our Data") is the best kind of Crash Report headline: a paradox that resolves into a real number. "A zero is a missing row" is the quotable line. The table is screenshot-friendly. Deduction: no second quotable beat after the halfway point; the back half is methodical rather than punchy, so shares will cluster on the headline and the pull stat rather than on a mid-article line. Fine for a methodology piece.

## Critic 5 — Legal Accuracy: 8.8/10

Citations verified: FARS database link is the canonical NHTSA page; IIHS July 30, 2026 release is real and the 204 / 110-vs-24 figures match the figures documented in the site's own #993 research; IIHS driver-death-rates table URL is the correct interactive page; FARS coding-manual link (07CV) is the same citation #873 used. No case law, no statutes, nothing to misstate. Two nits: ref-5 links to the site homepage rather than the specific #873/#993 article URLs, and the "Super Duty" brand-history claim (trucks sold continuously since) is asserted without a citation, though it is common knowledge and the file's own fleet estimate corroborates the fleet's existence. Neither is a factual error.

## Critic 6 — Research Rigor: 9.2/10

Genuine original contribution: the full HD audit (combined 0.25 vs 0.88 decomposition, F-350 model-year cutoff at 2004, Ram 3500 zero deaths / one crash, occupant-only numerator inferred from the IIHS contradiction) was computed from fars_output.js and appears nowhere else on the site. Limitations are stated explicitly and honestly, including that the occupant-only numerator is an inference and that the F-350 leakage destination cannot be proven. The counterargument is stated at full strength (professional drivers, mass physics, possible administrative relabeling) and the Ram 3500 zero is correctly identified as the fact that survives it. Methodology is transparent (formulas in research, definitions in the table note). Verifiability is good: every number traces to FARS_BY_MODEL / FARS_MODEL_YEAR rows named in the research file. Deduction: the piece leans on the file's own modeled fleet/VMT estimates while flagging their uncertainty only in the caveats paragraph; a one-line uncertainty flag next to the headline table would have been better placement.

## Critic 7 — Data Presentation: 9.0/10

The table is the article's spine and it works: two rows, six columns, every term defined in the note directly beneath it, source line present. All figures in the table match the research computations exactly (HD 1,226 / 3,600 / 0.73 / 0.341 / 0.25; half-ton 28,466 / 62,034 / 1.91 / 0.459 / 0.88). The pull stat isolates the single most arresting number. Deduction: the "Crash freq." column header is abbreviated without expansion in the header itself (defined only in the note), and the table would be stronger with a third row for the all-pickup baseline (0.489 lethality) for comparison. Cosmetic.

## Verdict

| Critic | Score |
|---|---|
| 1. General Editor | 8.8 |
| 2. Voice Coach | 9.0 |
| 3. Ethics Reviewer | 9.0 |
| 4. Social/Shareability | 8.7 |
| 5. Legal Accuracy | 8.8 |
| 6. Research Rigor | 9.2 |
| 7. Data Presentation | 9.0 |
| **Average** | **8.93** |

**All 7 critics >= 8.5 AND all hard gates pass → SHIP.** Round 0, no revision required. Noted for the record (not blocking): body runs ~587 words vs the 300-500 guideline; ref-5 should link to the specific #873/#993 articles at publish time if convenient.

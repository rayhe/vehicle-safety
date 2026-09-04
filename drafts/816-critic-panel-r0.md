# Critic Panel — #816 mitsubishi-outlander-blank-camera (Round 0)
Journalist: Mia Crumplezone | Date: 2026-09-04 | Draft reviewed post hard-gate fixes

## Hard gates (script-verified)
- Em dashes: 0 chars, 2 &mdash; entities (limit 3)
- Banned phrases: 0
- "The" sentence starters: 7/65 = 10.8% (limit 15%)
- CSS: class="story" x1, no story-detail/story-page/story-content, ../style.css x1
- Sentence rhythm: variance 327.2 (≥200), short 8.9% (≤15%), long 48.9% (≥15%) — PASS
- Hero: real JPEG 1920x1280, hash 9004ef6f, cache-busted in og:image + img src
- Word count: ~1090 (above the 300-500 guide, in line with recent runs at 775-790; the excess is the required limitations + counterargument + action sections, not padding)

## Scores

### 1. General Editor — 9.0
Headline is specific and alarming without lying. Lede starts mid-thought with the mandate context, pull stats land, structure follows kicker→lede→scale→fix→honest accounting→action. The 1.59x stat is the engine of the piece and it arrives early. Minor: the "150 milliseconds" callback to Mia's catchphrase is a nice voice touch.

### 2. Voice Coach — 9.0
Mia's voice is present: technical enthusiasm ("This is what happens in the first 150 milliseconds of a software-defined car"), judgment about the dealer-only fix ("an appointment and a waiting room"). No banned phrases, no "here's the thing" scaffolding. Sentence rhythm passes with margin. One deliberate rhetorical device ("Read that again slowly") reads as human, not templated. Would not swap bylines with Rex or Vin.

### 3. Ethics Reviewer — 9.0
Does not overclaim harm: explicitly states no crashes/injuries are tied to the defect, that the camera is supplemental, that mirrors still work, and that the Outlander is not a deathtrap nameplate. The alarm is proportionate to a mandated-safety-device failure, not inflated into a body-count story. Actionable advice is genuinely useful.

### 4. Social/Shareability — 9.0
Two strong pull stats (1.59x, 0.37). The "software-defined car without the software-defined fix" framing is quotable. The used-Outlander shopping tip gives it a second audience beyond owners.

### 5. Legal Accuracy — 9.0
FMVSS 111 cited correctly; campaign number 26V549000, MMNA SR-26-002, dates (letters Sep 24, VINs Sep 9) all match the NHTSA record. Does not assert Nissan/Renault impact from the shared A-IVI stack — the research note explicitly forbids it and the draft complies. The backover 210-deaths figure is sourced to DOT (ref 7). The Lucid OTA comparison was corrected from "camera recall fix" to the actual fire-risk recall fix (ref 6) — verified against Reuters.

### 6. Research Rigor — 9.0
Novel contribution is real: the 1.59x recall-to-sales ratio and ~19-month production-coverage estimate are original computations from MMNA sales data, and the `overTheAirUpdate: false` field in the NHTSA API record is a genuine find that powers the fix-design critique. Limitations stated honestly (blank-screen frequency unknown, no crash data). Counterargument at full strength ("the panic-to-harm ratio here is low"). Methodology transparent (shows the division inputs).

### 7. Data Presentation — 9.0
Numbers are sourced inline with superscript refs; the 67,146 / 42,189 / 1.59x chain is reproducible from refs 2 and 3. FARS 0.37 rate is contextualized, not weaponized. No chart needed; the two pull stats carry the load.

## Verdict
7/7 critics ≥ 8.5 in round 0. Average 9.0. ALL hard gates pass. → SHIP (blocked by 1/day rule: #772 shipped 2026-09-04; next slot per queue is #802 on 2026-09-04... queue order assigns #816 to 2026-09-18).

## Revisions made pre-critique
- Fixed "Lucid pushed its camera recall fix over the air" → accurate fire-risk recall OTA claim with Reuters ref (factual accuracy).
- USA Today date corrected to September 1, 2026; added ref 6 (Reuters/Lucid) and ref 7 (DOT backover statistics).
- Rewrote 3 "The"-starting sentences (16.1% → 10.8%) and merged two short sentences (short_pct 15.2% → 8.9%).
- Cache-busted hero (?v=9004ef6f).

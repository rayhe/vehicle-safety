# Critic Panel — Round 0 — #1462 Harley Neutral-Lie Gear Position Sensor

**Article:** `drafts/1462-harley-neutral-lie-gear-position-sensor.html`
**Journalist:** Clara Rollover
**Date:** November 10, 2026

## Hard gates (regex = source of truth)
- Em dashes (literal `—` in file): **0** (max 3) — PASS
- Banned phrases: **0** — PASS (checked: "Here's the thing", "The kicker", "paradigm shift", "game-changer", "deep dive", "unpack", "Let's be clear", "Make no mistake")
- "The" sentence starters: **4/61 = 6.6%** (max 15%) — PASS
- CSS class: `class="story"`, links `../style.css`, no `story.css` — PASS
- Sentence rhythm (`sentence-rhythm-check.py --json`): variance **435.4** (≥200), short **10.6%** (≤15%), long **53.2%** (≥15%) — PASS (after merging 7 short fragments; first run failed at 21.4% short)
- Hero: real JPEG (FFD8), 1920x1280, 347,326 bytes, md5 `f409a5c4` — PASS

## 1. General Editor — 8.5
Lede lands the whole defect in one image: green light, bike in gear. Structure follows the house shape: lede, mechanism, the reviewer who saw it first, the math, the pattern, counterargument, limitations, action. Clara's voice is present throughout. One deduction: the pattern paragraph overstates the "four recalls, one model line" framing (see Rigor), which weakens an otherwise tight close to the middle of the piece. The headline is the best on the site this week.

## 2. Voice Coach — 9.0
Distinctly Clara: direct, practical, slightly angry on behalf of consumers. "That is luck, not design." "Treat the green N as advisory, not fact." "The clutch lever is the interlock." No banned phrases, no throat-clearing, sentence rhythm verified passing with variance 435.4 after the fragment merges. The merges did not flatten the voice; the punches that remain ("Nobody died.") still land because they are now rare. One soft spot: "Somebody noticed." as a paragraph opener is effective but the sentence that follows it is doing a lot of work; it holds.

## 3. Ethics Reviewer — 9.0
Fair to Harley throughout. The two injuries are qualified as "potentially related" everywhere they appear, never upgraded to confirmed. The counterargument is stated at full strength and the article concedes its strongest point (free fix, sub-1-percent rate, no deaths). No victim-blaming of riders. The "What This Means for You" section gives owners concrete, checkable actions rather than dread alone. The police-bike detail is used to make a design point, not to imply officers are at fault.

## 4. Social / Shareability — 8.5
Headline is a shareable paradox: the bike's own dashboard lies to you. The 21,643 pull stat is the number people will repeat. The CycleTrader "reviewer saw it in July" hook is the detail that travels beyond the headline. Slight deduction: no single one-line kicker quote beyond the headline itself, and the per-model breakdown lives only in the research file, not the article, so a reader sharing the piece cannot quote the 7,794 Road Glides without clicking through.

## 5. Legal Accuracy — 8.5
Every load-bearing claim traces to the NHTSA recalls API record for 26V730000, USA Today (November 10, 2026), The Sun (November 10, 2026), or the CycleTrader review (July 30, 2026). The recall is never called a finding of defect beyond what the filing says, and "potentially related" is preserved verbatim. The FLTRXP-as-police-Road-Glide claim was initially an inference from the model code; verified after drafting against the Law Abiding Biker FLTRXP review and the Jersey City/Providence procurement records, which name the FLTRXP the 2026 Police Road Glide. Deduction: the pattern paragraph's "same touring line" claim (see Rigor) is a factual overstatement that a careful reader could use to impeach the piece.

## 6. Research Rigor — 7.5
Novel contribution is real and threefold: the CycleTrader pre-recall observation, the <1%-vs-2-injuries arithmetic (roughly one injury per hundred defective bikes if Harley's estimate holds), and the single-sensor chain-of-trust analysis. Limitations are stated honestly and specifically, including the unverified <1% estimate and the absence of FARS model-level data. Counterargument stated at full strength. **But:** the pattern paragraph claims this is "the fourth distinct recall wave on the same 2026 touring line" and "four systems, four failure modes, one flagship model line." That is wrong as written. Recall 0191 (26V075) is a Sportster S triple clamp; recall 0192 (26V234) is Softail rear brake lines. Neither is a touring model. Only 0193 (airbox, 88,039 bikes) overlaps the Road Glide/Street Glide population. The accurate framing is four Harley recall waves in 2026, two of which hit these touring bikes. The error is contained to one paragraph and the closing sentence of that paragraph, but it is a factual error in a data-driven article and it must be fixed before shipping.

## 7. Data Presentation — 9.0
Pull stat (21,643) is well placed and immediately explained with the nine-model scope. The <1% arithmetic shows its inputs (21,643 population, <216 defective, 2 injuries) and states the inference as conditional on Harley's own estimate. The 838 lb / 105 hp figures are attributed to the CycleTrader review. Minor deduction: the article never gives the per-model counts that the research file verified (FLTRX 7,794, FLHX 5,459), so the "36% of the recall is Road Glides" fact is left on the table; the pull-label carries the scope instead, which is acceptable.

## Verdict
Average: (8.5 + 9.0 + 9.0 + 8.5 + 8.5 + 7.5 + 9.0) / 7 = **8.57**. All hard gates pass, but Rigor is 7.5, below the 8.5 floor. **REVISE (round 1):** rewrite the pattern paragraph to the accurate framing (four Harley recall waves in 2026; 0193 and 0194 hit the touring line; 0191 Sportster S and 0192 Softail did not), then re-score.

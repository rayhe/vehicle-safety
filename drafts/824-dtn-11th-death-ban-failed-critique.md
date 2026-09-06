# Critic Panel — #824 `dtn-11th-death-ban-failed` (Clara Rollover) — Round 0

## Hard gates (mechanical, run first)
- Em dashes: 2 (grep count) — PASS (≤3)
- Banned phrases: 0 — PASS
- "The" sentence starters: 6/48 = 12.5% — PASS (≤15%)
- CSS: `class="story"`, `../style.css`, no story-page/detail/content, no story.css — PASS
- References section present with 6 entries — PASS
- Sentence rhythm: variance 1863.4 (≥200), short 14.3% (≤15%), long 45.7% (≥15%) — PASS
- Hero: real JPEG (magic bytes FF D8), 1920x1280, hash d33b331b, og:image has ?v= — PASS

## 1. General Editor — 9.0
Structure is textbook Crash Report: kicker, headline, bolded lede stat, pull stat, five body paragraphs, references, disclaimer. Headline ("NHTSA Banned These Airbags in April. One Killed a Driver in August Anyway.") is the strongest on the slate this month — it contains the entire story in two sentences. The 120-day pull stat is the right number to isolate. Nit: the lede's "did not inflate so much as detonate" is doing heavy lifting before the reader knows what DTN is; but the kicker/headline already frames it, so it lands. No structural changes needed.

## 2. Voice Coach (Clara Rollover) — 9.0
Catchphrase opener deployed ("Before you sign for that used Equinox..."). Voice is direct, practical, angry on behalf of consumers — "You cannot extradite a supply chain, so punish the installer" and "Draw your own conclusions" are pure Clara. Not swappable with Rex (no noir) or Vin (no cosmic dread). Zero banned phrases, rhythm passes with real variance (1863). Nit: "the comedy is structural" style flourishes from other desks are absent — good. One watch: "practically standard equipment" appears in the Malibu paragraph; it's a judgment, but it's Clara's job to judge. Pass.

## 3. Ethics Reviewer — 9.0
The Dallas driver is unnamed (Reuters didn't name them; neither do we). No gratuitous injury detail beyond what NHTSA/Reuters published ("otherwise survivable crash," metal fragments — both sourced). The piece doesn't blame the victim or the Equinox owner. The anger is aimed at smugglers, corner-cutting shops, and a denying manufacturer — appropriate targets. The actionable close genuinely helps readers. No self-congratulation. Pass.

## 4. Social/Shareability — 8.8
Headline is highly shareable; the "banned in April, killed in August" frame is a ready-made pull quote. The 120-day stat travels. The DTN60DB/barcode detail gives the piece a "check your own car" hook that drives saves and forwards. Slight deduction: the story is a sequel, so it leans on the Sep 3 piece for backstory (linked as ref-5); a cold reader gets enough context, but the $30-vs-$300 economics that made the original go round are summarized in one clause. Acceptable for a follow-up. Pass.

## 5. Legal Accuracy — 9.0
Verified against sources: Aug 27 Dallas 2018 Equinox death, "otherwise survivable crash" (Reuters); 11th death, first since April ban (Reuters); 13 incidents since May 2023 (Reuters); DTN denial quotes verbatim from Reuters; initial decision Apr 2 / finalized Apr 29 / first forced action in 20 years (NHTSA PDF + our Sep 3 story, dual-cited); barcode identifiers and VIN-lookup failure (Autobody News); Wisconsin SB 537 felony escalation and Idaho HB 688 (Autobody News). The 120-day count was recomputed: Apr 29 → Aug 27 = 120 days exactly. "First forced recall order in twenty years" is the site's established characterization, consistent with GM Authority's "first ban of its kind in more than 20 years." No legal overclaim: the piece says NHTSA "admits it does not know" the installed-base size rather than inventing one. Pass.

## 6. Research Rigor — 9.0
Novel contribution is real and stated: the 120-day ban-to-death timeline arithmetic (nobody published it), the model-#3 validation of NHTSA's April warning, and the Wisconsin/Idaho criminalization angle (absent from the original story and from Reuters). Limitations are explicit in the research notes and reflected in the article's disclaimer (incident details via Reuters' reporting of NHTSA's statement; installed-base size unknowable). Strongest counterargument is stated at full strength in its own paragraph ("NHTSA genuinely did everything available to it... Doing everything right still produced an eleventh body") — not strawmanned. Methodology transparent (120-day count shown). Every factual claim traces to a cited source; the one unsourced sales-rank claim ("best-selling used vehicles") was cut in drafting. Pass.

## 7. Data Presentation — 8.8
One pull stat, correctly chosen (120 days, with the "installed before the ban" label doing the interpretive work). FARS numbers appear only in the references, not forced into the body — correct, since FARS isn't the story's dataset. No charts needed; the timeline is the visualization. Slight deduction: the "zero VINs" claim is powerful but would land harder with the 997-recalls-in-2025 context from the original (88% voluntary, 0 ordered) — one clause could have carried it. Minor. Pass.

## Verdict
7/7 critics ≥ 8.5 in round 0. All hard gates pass. → SHIP_BLOCKED, slot 2026-09-30.
No revision round needed. Fixes applied during drafting: og:image cache-bust hash, dual citation for Apr 29 finalization, removed unsourced sales-rank claim.

# Critic Panel — 1237-post-crash-fatality-index (Round 0)

Article: "The Crash Already Happened. Now Your Car's Weight Casts the Deciding Vote."
Journalist: Mia Crumplezone. Kicker: The Gap.

## Hard gates (regex = source of truth)
- Em dashes (literal U+2014): 0 / 3 max — PASS
- Banned phrases: 0 — PASS
- "The" sentence starters (body): 8.0% / 15% max — PASS
- CSS class: `article class="story"`, links `../style.css` — PASS
- Sentence rhythm: variance 776.4 (>=200), short 11.1% (<=15%), long 48.1% (>=15%) — PASS
- Hero: real JPEG (FF D8), 1920x1280, hash eb4c8e27 — PASS
- Word count (body): 598

## 1. General Editor — 8.7
Structure follows the house template: kicker, headline, lede with bolded key stat, pull stat, five body paragraphs, references, disclaimer. The lede splits the death-rate metric into its two components before any data appears, which is the correct order of operations for a reframing piece. The closing paragraph earns its ending ("the barrier never swerves"). Minor deduction: paragraph 4's class-median sentence front-loads four numbers in one breath; readable, but dense.

## 2. Voice Coach — 8.7
Mia's voice holds: the "first 150 milliseconds" opener, genuine excitement about crash physics, judgment toward bad design ("the least advertised safety feature on the window sticker"). Sentence lengths swing from 4 to 45 words; the rhythm gate passes with real variance, not engineered jitter. No banned phrases, no "as an AI" tells, no throat-clearing. The fragment-heavy first draft failed the rhythm gate (34% short) and was rewritten; the current draft keeps the punches ("That is the point.") without the metronome. Deduction: "physics does not offer partial credit" and "physics does not negotiate" land close together thematically; not identical sentences, acceptable.

## 3. Ethics Reviewer — 8.8
The piece could easily read as "buy the biggest truck," but it refuses to. It quotes IIHS's own ceiling finding (no benefit past 4,000 lbs, +7 deaths per million for the other car) and frames the sweet spot as midsize. It names the moral structure explicitly: the truck's number looks good because the sedan's number looks bad. No victim-blaming; no mockery of the dead. The actionable advice (belts, two-lane roads, midsize sweet spot) serves readers rather than shaming them.

## 4. Social/Shareability — 8.7
Pull stat "0.70 vs 0.34" is a clean two-number share card. Headline is confrontational without being clickbait-false; the numbers in the lede back it up. The Ranger-vs-F-250 same-brand paradox is the detail people will quote in arguments. Deduction: the headline is long for social previews and may truncate on some cards.

## 5. Legal Accuracy — 9.0
Every numerical claim traces to the FARS derivation (inputs, formula, and restriction to 2,000+ involvements all stated). The Harkey quote is condensed from the published IIHS wording with meaning preserved and the source linked; not presented as verbatim with quotation marks around altered text — acceptable journalistic condensation, source one click away. The Anderson/Auffhammer 40-50% figure is attributed, not laundered. No defamation risk: all statements are about vehicle classes and physics, not manufacturers' conduct.

## 6. Research Rigor — 8.9
Original contribution: the post-crash fatality index ranking itself — derived from existing fields but never computed or published. Five sources, all primary or near-primary (FARS, IIHS x2, NHTSA-derived crash analysis, peer-reviewed incompatibility research). Limitations are explicit and specific (occupancy not normalized, role-vs-mass confounding, fatal-crashes-only). The strongest counterargument is stated at full strength and conceded as the point rather than swatted away. Methodology transparency: formula, inputs, and the 2,000-involvement cutoff are all in the text or disclaimer.

## 7. Data Presentation — 8.6
Key pairs are exact (0.696, 0.690, 0.364, 0.341) with raw numerators and denominators (2,739/3,938) recoverable from the research file. Class medians give the pattern without cherry-picking. Units are consistent (deaths per fatal crash) and the sanity anchor (all values below 1.0, since deaths are occupants of the named vehicle only) is implied by the definition. Deduction: the article does not state the denominator cutoff (2,000+ involvements) inline — it lives in the research file and disclaimer. Acceptable but not perfect.

## Verdict
All seven critics >= 8.5. Average: 8.77. Round-0 SHIP.

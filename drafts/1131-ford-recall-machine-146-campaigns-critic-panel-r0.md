# Critic Panel — #1131: Ford Filed 146 Recalls in 2025. The Backup Camera Got Recalled Twice.
**Round 0** | Journalist: Axle McScatter | Date: 2026-10-11

## Hard gates (regex = source of truth)
- Em dashes in body: 0 (max 3) — PASS
- Banned phrases: 0 — PASS
- "The" sentence starters: 3/32 = 9.4% (max 15%) — PASS
- CSS: `article class="story"`, `../style.css`, no story-detail/story-content/story-page — PASS
- Sentence rhythm (sentence-rhythm-check.py --json): variance 299.0 (>=200), short 10.3% (<=15%), long 43.6% (>=15%) — PASS
- Hero: real JPEG (FF D8), 1920x1280, 645KB — PASS
- Actionable insights: VIN check, OTA auto-updates, used-buyer guidance — PASS

## 1. General Editor — 9.0
Hook lands in the first four words ("I ran the numbers twice"). Structure is classic Axle: record claim, pull stat, deep cut (camera trilogy), machine anatomy, steel-man, action list. The "recalled twice in one year" beat is the article's engine and it arrives early enough. Minor: P3 packs a lot (initiation split + OTA + trajectory + peer table); it survives because the sentences stay short.

## 2. Voice Coach — 9.0
Axle is unmistakable: opener catchphrase-adjacent, "my favorite line in the entire file," "hockey stick with no blade." No AI tells, no banned phrases, no throat-clearing. Fragments used sparingly ("Read that again.") for emphasis, not decoration. Rhythm gate passes with real variance (299).

## 3. Ethics Reviewer — 8.8
The "record" framing risks implying Ford builds the most dangerous cars, which the data does not say; the counterargument paragraph says exactly that, at full strength, and the article never claims defect-rate superiority over peers. No individuals named, no speculation about injuries. Fair.

## 4. Social/Shareability — 8.7
Headline is a two-punch share unit (146 + recalled twice). Pull stat (146, next-busiest 41) is screenshot-ready. "One recall every two and a half days" is the line people will quote. Slight risk: data-heavy middle may lose skimmers, but the pull stat and subheads carry them.

## 5. Legal Accuracy — 9.2
Every number traces to a NHTSA campaign record named in the references (25V572000, 25V695000, 25V315000, 25V455000, 25V467000, 25V540000, 25V270000). "Potential units" used correctly as NHTSA's term, never as "defective vehicles." No defamation exposure: all claims are about the manufacturer's own filings.

## 6. Research Rigor — 9.3
Original contribution is real: the 146-campaign tabulation with defect/compliance (105/41) and initiation (121/23/2) splits, the camera-cluster finding (~4.0M units, 25V572000 expanding 25V270), the OTA paradox (8/146), the peer gap table, and the Ford year-over-year trajectory — all computed from the primary flat file with methodology stated. Limitations are explicit and specific (filings vs VINs, potential vs defective, name variants, partial 2026). Counterargument is full-strength, including GM 2014's larger unit exposure.

## 7. Data Presentation — 9.1
Every ratio shows its math (146/365 = every 2.5 days; 146 vs 62 = more than doubled; 146 vs 41 = 3.5x). Component codes and campaign numbers let any reader re-derive the claims. The "hockey stick with no blade" trajectory (53/67/58/62/146) is the article's best chart-in-prose.

## Verdict
Average: **9.01** | All 7 critics >= 8.5 | All hard gates pass | **-> SHIP**

# Critic Panel — Round 0 — #1537: Ford Transit BCMC Freeze (26V727)

**Slug:** `1537-ford-transit-bcmc-freeze-trailer-lights-dark`
**Journalist:** Clara Rollover
**Date:** November 19, 2026
**Verdict:** REVISE (round 1 required)

## Hard gates (verified by regex, not opinion)
- Em dashes (literal `—` in body): **0** — PASS (max 3)
- Banned phrases: **0** — PASS
- "The" sentence starters: **0.0%** — PASS (max 15%)
- CSS class: `class="story"` present, `../style.css` linked, no `story.css` — PASS
- Sentence rhythm (`sentence-rhythm-check.py --json`): variance **493.2** (target ≥200), short **10.7%** (target ≤15%), long **58.9%** (target ≥15%) — PASS, exit 0
- Hero: real JPEG (FF D8), 1920x1280, 412KB, md5 `f91785a3`, in all 3 references — PASS
- Word count: 919 (body)

## Scores
| Critic | Score | Verdict |
|---|---|---|
| 1. General Editor | 8.5 | Pass |
| 2. Voice Coach | 9.0 | Pass |
| 3. Ethics Reviewer | 8.5 | Pass |
| 4. Social / Shareability | 9.0 | Pass |
| 5. Legal Accuracy | 7.5 | **FAIL** |
| 6. Research Rigor | 7.0 | **FAIL** |
| 7. Data Presentation | 8.0 | **FAIL** |
| **Average** | **8.21** | **REVISE** |

## 1. General Editor — 8.5/10
Structure is sound: lede with the bolded number, pull stat early, mechanism explained before consequences, FARS contrast, Ford context, full-strength counterargument, concrete action paragraph. Clara's direct address lands. Deductions: the build-date error sits in the action paragraph, the most-read paragraph in the piece; and the Ford-context paragraph leans on an ordinal ("53rd recall") the source does not establish. Neither is structural, but both are the kind of thing a reader with a March 2025 van would notice.

## 2. Voice Coach — 9.0/10
Clara is unmistakable and consistent: direct, practical, impatient on the reader's behalf ("check the lights. Then check them again"). No banned phrases, no "Here's the thing" construction. Rhythm passes all three script targets after the round-0 edit (short sentences combined). One near-miss to watch: "Here is the part that should bother anyone who owns one" walks close to the banned "Here's the thing" family without being it; acceptable, but do not let the construction recur. The "signed off in a hurry" line is opinion framed as opinion, which is Clara's register, not a voice violation.

## 3. Ethics Reviewer — 8.5/10
The counterargument is stated at full strength and honestly: zero crashes, zero injuries, 178 reports, free fix already available, Ford caught it itself. No self-congratulation, no victim-blaming, no invented victims. Deduction: the piece leans on "darkest two months of the year" dread for a defect with a zero body count; the disclaimer and the counterargument balance it, but the headline's urgency slightly outruns the evidence. Acceptable for a consumer advisory, not for a body-count story, and this is correctly framed as the former.

## 4. Social / Shareability — 9.0/10
Headline is the share: a van that goes dark while towing, and the reset is pulling the battery. The pull stat ("6 systems, one bug") is a clean social card. The battery-disconnect detail is the memorable beat people will repeat. The action paragraph gives readers something to do, which is what gets these pieces forwarded to fleet managers and Transit owners. No pull-quote work needed.

## 5. Legal Accuracy — 7.5/10 — FAIL
Four problems, all fixable:
- **"A five-star van that goes dark behind a trailer is still dark."** NHTSA does not star-rate the Transit; the five-star claim is unverified and almost certainly wrong. Remove it.
- **"Ford caught it through its own warranty review and filed inside the required window."** The 5-business-day Part 573 window runs from defect determination, and the Part 573 chronology was not retrieved. "Inside the required window" is a legal conclusion this draft cannot support. Remove the clause.
- **"This is the company's 53rd recall of 2026 by one November count."** The source supports a 53-recall year-to-date total, not that 26V727 is the 53rd campaign. Rephrase to the total.
- **Ref [8] links to https://www.nhtsa.gov/recalls instead of the cited OperaNews piece.** A reference link must point at the cited source. Use the OperaNews URL verbatim.
- Correct: FMVSS 108 framing, the NHTSA-quoted consequence language, the Ford 26C49 / 26V727 identifiers, and the disclaimer about the second-hand 100% estimate.

## 6. Research Rigor — 7.0/10 — FAIL
The panel caught real errors, and this is why the round exists:
- **Build-date year error (article, action paragraph):** "Affected vans were built February 25 through May 20, 2026." The start year is **2025**, not 2026 (Autoblog and ref [3] both say February 25, 2025). A reader with a March 2025 van is told the wrong window.
- **"85-day window" (research file):** February 25, 2025 to May 20, 2026 is roughly **15 months**, not 85 days. The research file's window arithmetic is wrong.
- **"Lowest of any full-size van" (article + research file):** false against this site's own dataset. The Nissan NV posts 0.08 (13 deaths, small sample) and the Transit 0.14. The defensible claim is the comparison to named full-size rivals, not the superlative.
- **Chevrolet Express rate (research file):** listed as 0.24; the dataset says **0.92**. The research file's van comparison numbers were not verified.
- **"Fewer than 180 field reports":** 124 warranty claims + 53 field reports + 1 customer report = 178 reports *in total*. Field reports are 53. The sentence conflates the two.
- **"From first warranty claim to a mailed letter":** the timeline runs from Ford's August *discovery* (reviewing a warranty claim) to the November 16 letter, not from the first claim's receipt date, which is unknown.
- Verified and correct: the 60,956 population, the priority-inversion mechanism, the six-system list, the 124/53/1 and 118/47 counts with their geography, the November 2 filing, the November 16 letters, the January 2027 OTA expectation, and the FARS Transit figures (178 deaths, 0.14 rate, 13.6% impairment). The errors are all fixable from sources already in hand; none requires new reporting.

## 7. Data Presentation — 8.0/10 — FAIL
The FARS contrast is the article's strongest data move and is computed correctly. Deductions:
- The pull stat "6" counts trailer taillights and reverse lamps as one system ("trailer lighting"). That is defensible, but the counting convention is not stated anywhere in the article. State it in the pull-label.
- The van-class comparison overclaims ("lowest of any full-size van"). Replace with the named-rival comparison: Express 0.92, Savana 0.54, E-350 2.51, all verified from fars_output.js.
- The disclaimer is thorough and honest about the second-hand 100% estimate, the geography split in the claim counts, and the OTA date being an expectation. Keep it.

## Required revisions (round 1)
1. Build dates: "February 25, 2025 through May 20, 2026" in the action paragraph; fix the research file's "85-day window" to ~15 months.
2. "Fewer than 180 field reports" → "178 reports in total".
3. Remove the unverified "five-star van" claim.
4. Remove "filed inside the required window".
5. "53rd recall" → "Ford has filed 53 recalls in 2026 by one November count".
6. Replace "lowest of any full-size van" with the named-rival comparison (Express 0.92, Savana 0.54, E-350 2.51).
7. "From first warranty claim" → "from Ford's August discovery".
8. Ref [8] link → the OperaNews URL verbatim.
9. Pull-label: state the trailer-lighting counting convention.
10. Fix the research file's Express rate (0.24 → 0.92).

## Original contribution (confirmed)
The six-system kill list compiled from filing + press; the priority-inversion mechanism explained for non-engineers; the FARS contrast (0.14 rate van, software-only defect); the dealer-now vs OTA-January timing decision. All survive the panel; the fixes are precision, not premise.

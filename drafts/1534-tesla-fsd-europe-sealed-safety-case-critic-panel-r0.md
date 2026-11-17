# Critic Panel — #1534: Ten Countries Approved Tesla's Self-Driving. The Evidence Is Sealed.
**Round:** 0 — November 16, 2026
**Journalist:** Rex Driverton
**Draft:** drafts/1534-tesla-fsd-europe-sealed-safety-case.html

## Hard Gates (regex = source of truth)
- Em dashes (literal U+2014 in file): **0** (max 3) — PASS
- Banned phrases ("Here's the thing", "The kicker", "paradigm shift", "game-changer", "deep dive", "unpack", plus STORY_GUIDE bans): **0** — PASS
- "The" sentence starters: **0 of 54 (0.0%)** (max 15%) — PASS
- CSS class: `class="story"` present; no `story-detail`/`story-content`/`story-page`; links `../style.css`, no `story.css` — PASS
- Sentence rhythm (`sentence-rhythm-check.py --json`): **PASS** — variance 255.2 (target ≥200), short 12.5% (≤15%), long 56.2% (≥15%)
- Hero: real JPEG (FFD8), 1920×1280, hash 312b0994, `?v=312b0994` on all three references — PASS
- Word count (story-body): 1,027 (above the 300–500 guide; in line with recent shipped investigations, #1532 was 914)

## 1. General Editor — 8.8/10
Structure holds: lede carries the news (April approval, ten countries, sealed evidence, two US probes, December vote), pull stat lands early, mechanism paragraph explains Article 39 without drowning, emails paragraph is the smoking gun, Norway/Benedetti is the credibility collapse, American ledger is the counterweight, counterargument is genuinely at full strength, actionable close is concrete. The "two ledgers" spine runs through the whole piece. Deduction: 1,027 words is long for the format, and the December vote, though now in the lede, gets only one more mention before the close. A sharper piece would return to the vote as the ticking clock in the final paragraph. Not a fail.

## 2. Voice Coach — 8.8/10
Rex voice is present and distinct: deadpan, paperwork-noir, no throat-clearing. "Secrecy was not incidental." "Statistically indistinguishable from the average driver." "Ten countries sounds like momentum." Sentence rhythm passes with real variance (255.2) and a healthy short-sentence share. No banned phrases, no AI tells, no "The" starter clustering. Deduction: "Fairness requires the other side, stated at full strength" is a house formula that recurs across articles; it does the job but it is the one sentence in the piece that sounds like the template rather than Rex. Minor.

## 3. Ethics Reviewer — 9.0/10
No safety verdict the evidence cannot support: the claim is about process and evidence, stated explicitly in the disclaimer. RDW's rebuttal (independent determinations, nothing withheld at Tesla's request) is included at full strength. The DOJ criminal-probe characterization is left out of the article entirely rather than overstated. No private individuals named; quoted experts (Carsten, Mutze, Benedetti) are public figures speaking on the record in the source reporting. No self-congratulation, no moralizing about Tesla owners. Clean.

## 4. Social/Shareability — 8.6/10
Pull stat 99.9% is the share trigger, and the headline is built to travel. The stop-then-proceed red-light detail and the "never be released" email quote are the two most quotable beats, both placed where a skimmer finds them. Deduction: the story is regulatory-process heavy by nature, and the secrecy angle is abstract compared with a crash or a recall. A reader shares the headline; fewer will share a paragraph about Article 39. The hero image (sealed envelope on a dashboard) helps. Above the bar.

## 5. Legal Accuracy — 9.0/10
All eight references are real, verified URLs: Tech Times piece, NHTSA PE25012 PDF, NHTSA recalls portal, EVCompared tracker, TeslaBlog.eu, Not An FSD Tracker, NHTSA FARS, NHTSA recalls. No invented links. Claims are hedged where the source is secondary ("reportedly," "as reported," "per the trackers"). The Article 39 mechanism description matches the source. The nine-vs-ten country discrepancy is disclosed in the disclaimer. The December vote is correctly framed as pending and unconfirmed. The probes are correctly called a preliminary evaluation and an engineering analysis, not defect findings.

## 6. Research Rigor — 8.6/10
Original contribution is real and present in the article: the 14.3% cascade arithmetic (64.4M of ~450M against a 65% threshold) and the two-ledgers framing, neither of which appears in the source coverage. Limitations are stated in the disclaimer, including that parts of the story rest on reporting about sealed evidence rather than the evidence itself. Counterargument is full-strength and includes the FARS Model 3/Y context with its small-count caveat. Deduction: the most explosive facts (the April 2025 "never" exchange, RDW's verbatim echo, Norway's finding) rest on a single secondary source, the Tech Times summary of Reuters' emails. Attribution is explicit throughout, which is honest, but the Reuters investigation itself was not independently verified as a primary citation. That is the one rigor gap, and it is disclosed, not hidden.

## 7. Data Presentation — 8.9/10
Numbers are sourced, contextualized, and never left bare: 99.9% redaction with the other-automakers comparison, 14.3% cascade with the 65% threshold, 2,882,566 and 3,203,754 probe populations, 58/14/23 incident counts, 207 crashes in May 2026 with the 2021 comparison, 7x collapsing to 1.1x with the methodology explained. The pull stat is the right number. Deduction: the FARS Model 3/Y rates (0.03/0.05) are cited in the references and disclaimer but the body never gives the reader the numbers themselves, only "lowest fatality rates in this site's dataset." A parenthetical with the two figures would have strengthened the counterargument paragraph. Minor.

## Verdict
| Critic | Score |
|---|---|
| General Editor | 8.8 |
| Voice Coach | 8.8 |
| Ethics Reviewer | 9.0 |
| Social/Shareability | 8.6 |
| Legal Accuracy | 9.0 |
| Research Rigor | 8.6 |
| Data Presentation | 8.9 |
| **Average** | **8.81** |

**All 7 critics ≥ 8.5. All hard gates pass. → SHIP.**

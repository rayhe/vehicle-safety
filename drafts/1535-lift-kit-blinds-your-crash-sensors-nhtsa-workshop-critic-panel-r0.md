# Critic Panel — #1535: Your Lift Kit Can Blind Your Car's Automatic Brakes. NHTSA Wants to Talk About It.
**Round:** 0 — November 17, 2026
**Journalist:** Mia Crumplezone
**Draft:** drafts/1535-lift-kit-blinds-your-crash-sensors-nhtsa-workshop.html

## Hard Gates (regex = source of truth)
- Em dashes (literal U+2014 in file): **0** (max 3) — PASS
- Banned phrases ("Here's the thing", "The kicker", "paradigm shift", "game-changer", "deep dive", "unpack", plus STORY_GUIDE bans): **0** — PASS
- "The" sentence starters: **3 of 53 (5.7%)** (max 15%) — PASS
- CSS class: `class="story"` present; no `story-detail`/`story-content`/`story-page`; links `../style.css`, no `story.css` — PASS
- Sentence rhythm (`sentence-rhythm-check.py --json`): **PASS** — variance 421.3 (target ≥200), short 14.1% (≤15%), long 59.2% (≥15%); body-only variance 204.8
- Hero: real JPEG (FFD8), 1920×1280, hash 020b3684, `?v=020b3684` on all three references — PASS
- Word count (story-body): 1,237 (above the 300–500 guide; above recent shipped investigations, #1534 was 1,027, #1532 was 914)

## 1. General Editor — 8.7/10
Structure holds: lede carries the news (December 10 workshop, four named modifications, the 50% payoff at stake), pull stat lands early, the sensor-geometry paragraph explains the mechanism without drowning, the two-direction failure paragraph is the clearest passage in the piece, the mandate wobble and voluntary baseline set the timing, money explains why calibration gets skipped, FARS sharpens the picture, counterargument is genuinely at full strength, actionable close is concrete. The calibration-gap spine runs through the whole piece. Deduction: 1,237 words is long for the format, and the three-date docket discrepancy, flagged as an original contribution in the research file, gets only a passing mention in the close rather than a sentence in the body. A sharper piece would give the government's own paperwork disagreeing on a date its own paragraph. Not a fail.

## 2. Voice Coach — 8.7/10
Mia voice is present and distinct: technical but accessible, excited about the engineering, judgmental about skipped calibration. "Start with what lives behind the grille." "That is the engineering logic behind NHTSA's notice." "Federal-register speak for a truck slamming its own brakes on a highway." Sentence rhythm passes with real variance and a healthy short-sentence share. No banned phrases, no AI tells, no "The" starter clustering. Deduction: "Fairness demands the other side, stated at full strength" is a house formula that recurs across articles, and "What to do:" is the house close; both do the job but neither sounds like Mia. Minor.

## 3. Ethics Reviewer — 9.0/10
No safety verdict the evidence cannot support: the claim is about process and calibration, and "could" language is preserved throughout. Counterargument is full-strength and includes NHTSA's own owner-autonomy language. No private individuals named; the one quoted expert (Matt Moore, IIHS/HLDI) is a public figure speaking on the record. The "slamming its own brakes on a highway" image is vivid but presented as what a false activation means, not as a documented event. No moralizing about truck owners; modification culture is treated as a legitimate choice. Clean.

## 4. Social/Shareability — 8.6/10
Pull stat 21.7% is the share trigger, original to this site, and the headline is built to travel. The Moore quote ("every crash avoided is a deductible you do not need to pay") and "a system that is off prevents nothing" are the two most quotable beats, both placed where a skimmer finds them. The three-date docket mess is a third share trigger, though it is buried in the close. Deduction: the middle is regulatory-process heavy (FMVSS 127 litigation timeline), and the lift-kit audience may not read past the lede. The hero image (lifted truck at dusk, sensor glowing behind the grille) helps. Above the bar.

## 5. Legal Accuracy — 8.8/10
All eight references are real, verified URLs: Federal Register 2026-22067 (govinfo), NHTSA events page, Federal Register FMVSS 127 (govinfo), Nelson Mullins, IIHS topic page, Motoring Chronicle, NHTSA FARS, NHTSA recalls. Workshop facts (date, time, location, registration deadline, docket, four modification types, "likely to detect crash-imminent situations less well" language) verified against the Federal Register text itself. The March 23, 2026 DOT status report is attributed to Nelson Mullins' analysis of the court filing, not presented as a primary read. The AEB mandate is correctly framed as still in force (September 1, 2029) with a two-year extension only proposed. Deduction: the 93%/57% activation figures are an IIHS-cited dealership study as reported by Motoring Chronicle, but the reference text groups them under the IIHS topic page citation; the attribution is loose by one hop. Minor.

## 6. Research Rigor — 8.6/10
Original contribution is real and present in the article: the 21.7% pickup arithmetic (41,593 of 191,193; Silverado plus F-150 at 18,785 deaths) and the calibration-gap framing ("the qualifier nobody prints"), neither of which appears in the source coverage. Limitations are stated in the disclaimer, including that FARS does not record modification status and that no crash count tied to modified sensors is claimed. Counterargument is full-strength and includes the HLDI net-win numbers. Deduction: the three-date docket discrepancy is an original finding that the article underuses, and the sensor-geometry mechanism paragraph is engineering reasoning rather than a measured finding. It is disclosed as "the engineering logic behind NHTSA's notice," which is honest, but it is not data. The IIHS effectiveness numbers rest on secondary summaries rather than the underlying studies, though the IIHS topic page is cited as the source.

## 7. Data Presentation — 8.8/10
Numbers are sourced, contextualized, and never left bare: 50%/56%/27%/14% with the study context and the "working as designed" qualifier, 21.7% with the underlying fraction, 18,785 with the two nameplates, 90/45 mph thresholds, 99%/95% voluntary baseline, HLDI 10%/10%/5%/30% with the frequency-versus-severity distinction explained, 93%/57% activation, repair prices up 40% since 2020. The pull stat is the right original number. Deduction: the lede's bolded 50% is IIHS's number, not the site's own, and the FARS rates for Silverado (1.25) and F-150 (1.04) sit in the references but the body never gives the reader the rates themselves, only the death counts. Minor.

## Verdict
| Critic | Score |
|---|---|
| General Editor | 8.7 |
| Voice Coach | 8.7 |
| Ethics Reviewer | 9.0 |
| Social/Shareability | 8.6 |
| Legal Accuracy | 8.8 |
| Research Rigor | 8.6 |
| Data Presentation | 8.8 |
| **Average** | **8.74** |

**All 7 critics ≥ 8.5. All hard gates pass. → SHIP.**

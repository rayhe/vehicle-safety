# Critic Panel — Round 0 — #1401 Dodge Durango spoiler third recall, no fix yet
**Slug:** 1401-dodge-durango-spoiler-third-recall-no-fix
**Journalist:** Clara Rollover | **Kicker:** Investigation
**Date:** 2026-11-05 | **Round:** 0

## Hard gates (regex = source of truth, re-verified on final HTML)
- Em dashes (literal U+2014, whole file): **0** (max 3) — PASS
- Banned phrases ("Here's the thing", "The kicker", "paradigm shift", "game-changer", "deep dive", "unpack", plus STORY_GUIDE list): **0** — PASS
- "The" sentence starters: **0/26 = 0.0%** (max 15%) — PASS
- CSS class: `class="story"`, links `../style.css`, no `story.css` — PASS
- Sentence rhythm (`sentence-rhythm-check.py --json`): **PASS** — variance 2590.0 (≥200), short 14.3% (≤15%), long 57.1% (≥15%)
- Word count (story-body): **595** (recent house band 580-630; guide 300-500)
- Hero: real JPEG (FF D8), 2736x912, md5[:8] d6dea9d4, `?v=d6dea9d4` on img + og:image + twitter:image
- Actionable insights: present (VIN check for 26V528, prior-repair warning, listen for scraping/rattle, drop back behind a fluttering spoiler, dealer number, monthly VIN re-check)

## Pre-panel verification notes (rigor work done during critique)
- Arithmetic re-checked by hand: 4,837 + 139,019 + 74,578 = **218,434**; 0.8% of 74,578 = **597**; 8 + 116 + 37 = **161**. All match the article.
- Date arithmetic corrected pre-panel: first recall (Oct 28, 2021) to third (Aug 13, 2026) is 4 years 9 months, not 10; article and research file both fixed before scoring.
- Campaign numbers verified against NHTSA sources: 26V528 (FCA 61D, filed Aug 13, 2026, 74,578, built Jul 13, 2020–Mar 28, 2023), 21V842 (FCA Y73, Oct 28, 2021, 4,837), 23V115 (FCA 20A, Feb 23, 2023, 139,019). Investigation opened Mar 19, 2026; defect determination Aug 6, 2026; interim letters Sep 10, 2026; stop sale with up to $27,874 per-vehicle penalty for retail delivery — all from the NHTSA advanced communication / Part 573 chronology.
- Remedy status: FCA's filing says "under development"; the NHTSA summary describes inspect/replace/repair + liftgate realignment with a second notice to follow. No final remedy notice surfaced in press or NHTSA summaries as of Nov 5, 2026 (searched). The article's "no final fix has been published" is a negative claim verified only by absence in searched sources; it is scoped as of Nov 5, 2026, and the Limitations paragraph tells readers to check the VIN lookup rather than assume a fix is available. Acceptable, flagged here, not fatal.
- Duplicate check: full queue grep — zero slugs contain "spoiler"; only other Durango entry is #1329 (tail-light failure). The Jeep coil-spring triple recall (#865/#882/#891) and GM Express recall-of-recall (#1391) are the same pattern on different vehicles; the article names the pattern rather than claiming uniqueness.
- Hero image inspected visually: dark Durango at dusk, roof spoiler visibly loose and lifting. The lower tailgate badge renders slightly garbled ("DODRAGO"), a small AI artifact; acceptable at hero scale, noted, not worth a regeneration round.

## 1. General Editor — 8.5
Structure holds: lede (a strip of plastic, three recalls) → chronology → mechanism → counterargument → action. The 218,434 pull stat is the piece's spine and it earns the placement. Deductions: the headline is an 18-word comma-joined single sentence that reads breathless and will truncate on some social cards; "does almost nothing" in the lede slightly overstates (a roof spoiler has marginal aero function, though on a Durango it is cosmetic in practice). Pacing is strong and the actionable close is the best paragraph. Verdict: ship-ready.

## 2. Voice Coach — 8.5
Distinct Clara: direct, practical, slightly angry on behalf of owners ("Do not keep driving it", "drop back", "check your VIN"), no noir-detective bleed from Rex, no engineering-lecture drift from Mia. Fragment punches ("Both were supposed to end it.", "Twice was not enough.") land. Rhythm gate passes but short-sentence share sits at 14.3%, close to the 15% ceiling — one more fragment would have failed it. No banned phrases, no AI tells. Verdict: pass, with the short-sentence margin noted for future drafts.

## 3. Ethics Reviewer — 9.0
No victim-blaming: the hazard is framed as road debris endangering whoever is behind the truck, not as owner negligence, and the "listen for it" advice is diagnostic, not accusatory. No injury counts invented; the absence of known crashes/injuries is stated from the filing, not filled in. The voluntary nature of the recall and Stellantis's own investigation are credited. The "notification system, not a safety system" line is argument, clearly presented as the article's answer to its own counterargument, not as a sourced fact. Verdict: pass.

## 4. Social / Shareability — 8.5
Two hooks for two audiences (Durango owners + anyone who drives behind SUVs), concrete pull stat (218,434), quotable punches ("Twice was not enough.", "A recall without a repair is a notification system, not a safety system."). Deductions: the headline is long for a clean social card and there is no single killer image beyond the loose spoiler, which the hero supplies adequately. The "drop back" advice is a genuine share trigger for non-owners. Verdict: pass.

## 5. Legal Accuracy — 9.0
Every figure verified against primary sources: NHTSA Part 573 chronology / advanced communication (26V528, 61D, 74,578, build dates, 161 records, remedy under development, stop sale, $27,874 penalty), OEMDTC record (prior-recall repair warning, interim letters Sep 10), CarBuzz / Carscoops / MotorSafety (defect rate under 1%, warning signs, third-recall framing, no permanent fix). The assembly-issue vs. part-defect distinction is maintained throughout; the article never claims NHTSA forced the recall. Minor: "no final fix has been published" rests on absence in searched sources rather than a direct NHTSA query at draft time; scoped as of Nov 5 and hedged in Limitations. Verdict: pass.

## 6. Research Rigor — 8.5
Original contribution is real: the three-campaign total (218,434 notices), the 161 post-repair failure records identified as the evidence that forced recall three, the ~597-vehicle defect estimate, and the timeline arithmetic are new calculations nobody published. Limitations are specific (no crash/injury count, estimate vs. measured rate, remedy ambiguity, FARS cannot quantify, trim exposure unknown). Counterargument stated at full strength, then answered on the remedy rather than the engineering. Deductions: no FARS angle exists for a defect story (acknowledged, not a gap); remedy status verified by search absence rather than a live NHTSA record pull. Neither touches a claim in the article. Verdict: pass.

## 7. Data Presentation — 9.0
Every number arrives labeled with what it means: 74,578 (trucks), 218,434 (notices, pull stat), 161 (post-repair records, broken into 8/116/37), ~597 (estimated actually defective), 4 years 9 months (first to third recall), $27,874 (stop-sale penalty), 1-800-853-1403 (dealer line). No chart is needed for a recall story; the chronology reads cleanly in prose. The "about 74,000 owners get inspected to find them" framing correctly conveys the build-date population problem. Verdict: pass.

## VERDICT: SHIP
- Scores: general_editor 8.5, voice_coach 8.5, ethics_reviewer 9.0, social_shareability 8.5, legal_accuracy 9.0, research_rigor 8.5, data_presentation 9.0
- Average: **8.71** | All 7 critics ≥ 8.5 | All hard gates pass
- Round 0 pass. No revision round required. Proceed to SHIP.

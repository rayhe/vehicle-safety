# Critic Panel R0 — 1349-jeep-4xe-third-battery-fire-recall

Draft: drafts/1349-jeep-4xe-third-battery-fire-recall.html (Rex Driverton, kicker: Investigation)
Round: 0. All hard gates verified by regex before scoring.

## Hard gates (regex, source of truth)
- Em dashes (—): 0 (max 3) — PASS
- Banned phrases ("Here's the thing", "The kicker", "paradigm shift", "game-changer", "deep dive", "unpack"): 0 — PASS
- "The" sentence starters: 0 of 20 prose sentences (0.0%, max 15%) — PASS
- CSS: class="story", ../style.css, no story-page/detail/content — PASS
- Rhythm: sentence-length variance 224 (≥200), short 10.0% (≤15%), long 45.0% (≥15%) — PASS (one rewrite pass: 77→224)
- Hero: real JPEG 1920x1280, ?v=41411341 — PASS
- Prose word count: 488 (300-500) — PASS

---

## 1. General Editor — 8.8
Lede lands the key stat in the first paragraph with the stat bolded, as required. The three-act confession structure carries the piece and the data table gives readers the chronology at a glance. The 70-word three-act sentence is doing heavy lifting but reads cleanly. Minor ding: "rolling tinderboxes" was cut in revision; the surviving "roughly 16,000 vehicles whose early-warning system spent a year watching for the wrong thing" is a calculated estimate (5% of 320,065 = 16,003) and is correctly attributed to Chrysler's estimate. Length is within spec. The pull-stat 47% is the right number to feature.

## 2. Voice Coach — 9.0
Rex's deadpan noir is distinct throughout: "a confession in three acts," "that is not a recall; it is a delay with paperwork," "End of debate." No banned phrases, zero em dashes, fragments used deliberately (not accidentally). Anti-AI rules clean: no throat-clearing, opinions stated outright ("The second recall's watcher was blind"), sentence lengths vary from 3-word fragments to 70-word builds. Not swappable with Mia's engineering enthusiasm or Clara's consumer-advocate anger. The noir-detective register never wobbles into preachiness.

## 3. Ethics Reviewer — 8.7
The piece names a real injury (1 tied to the fires) without sensationalizing it. Consumer instruction is responsible: check VIN, park outside, don't charge, call Chrysler — all straight from the NHTSA filing. The "delay with paperwork" jab is aimed at the remedy strategy, not at individual engineers, and the counterargument paragraph gives Chrysler's diligence case fairly. One caution: the "burned garage is worse" line flirts with fear framing, but it lands inside a paragraph of concrete mitigations, so it reads as honest rather than alarmist. No victim details invented. No defamation risk: every sharp claim is attributed to Chrysler's own filings.

## 4. Social Shareability — 8.9
Headline is built for sharing: a specific number (320,065), a narrative reversal (survived two recalls), and an implicit dare to click. "Nine of the 19 known battery fires happened in Jeeps that had already received that fix" is the pull-quote that will travel. The table compresses the whole story into a screenshot-friendly format. The "stop charging your plug-in hybrid" absurdity is the detail people will repeat at barbecues. Slight risk: headline length, but it fits within standard og:title truncation limits.

## 5. Legal Accuracy — 8.8
Campaign numbers, dates, populations, and the 5% defect estimate are all traced to the NHTSA API record (verified live 2026-10-31) or the Part 573 chronology via secondary reporting, and the references say which is which. The "ineffective in detecting certain abnormalities" quote is Chrysler's own language. The 47% pull-stat math is right (9/19 = 47.4%). The 16,000 estimate is labeled as derived from Chrysler's 5%. No claim about pending litigation, no implication of criminal wrongdoing, no unverified fire count beyond "known" and "reported." "Delay with paperwork" is clearly opinion. The one spot to watch: ref-5's "remedy is not yet available at announcement" is accurately scoped to announcement time, matching the NHTSA API's later "software update + battery replacement as necessary" remedy text.

## 6. Research Rigor — 8.8
Original contribution: the three-filing chronology analysis (23V787 → 24V-720 → 25V741) showing a software remedy defeated by a hardware defect it could not detect, plus the computed 47% post-fix fire share and the 16,000-vehicle estimate from the 5% defect rate. The pipeline had never covered this battery chronology (its 4xe coverage was the steering-pump recall, a different defect). Limitations paragraph is honest: fire counts are self-reported and likely undercount, the 5% is Chrysler's unverified guess, no VIN-level prediction possible. The strongest counterargument is genuinely steelmanned (expansion = diligence, 10 of 19 in unremedied vehicles). One wish: direct access to the full Part 573 PDF instead of secondary reporting of it, noted in the research file.

## 7. Data Presentation — 9.0
The three-wave table is the article's backbone: campaign, filing date, population, remedy in four columns, instantly scannable. The pull-stat (47%) is derived, labeled, and more informative than the raw counts. All key numbers (320,065; 228,221/91,844 split; 19 fires; 9 post-fix; 5%; 1 injury) appear in both prose and references with consistent values across sources. No chart needed; a table is the right container for a chronology. Units and denominators are always attached to figures.

---

## VERDICT: SHIP
All 7 critics ≥ 8.5. Average: **8.83**. All hard gates pass by regex.
Round-0 panel complete; no revision round needed.

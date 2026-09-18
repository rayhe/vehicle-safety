# Critic Panel — Round 0 — #925 "37 Trucks Have the Wrong Bearings" (Axle McScatter)

**Hard gates (mechanical, source of truth):**
- Em dashes (literal `—`): 0 — PASS
- Banned phrases: 0 — PASS
- "The" sentence starters: 5.7% — PASS
- CSS class `class="story"` + `../style.css`: PASS
- Sentence rhythm: variance 295.4 / short 9.1% / long 42.4% — PASS

---

## 1. General Editor — 9.0
Structure is clean: signature opener, bolded lede stat, pull-stat, narrative chronology, sibling campaign, caveats, action. The 16-week build-to-letter arithmetic is the article's spine and it lands. One nit: the "precision strike of a recall" line and "per affected vehicle, 26V576 is the worst bet in the batch" are close in meaning and three paragraphs apart; the piece repeats the thesis without adding. The headline edit (comma splice version) is weaker than the original period-break — it now reads like one thought where two would punch harder. Doesn't drop below 8.5.

## 2. Voice Coach — 9.0
Axle is distinct: number-led, dry, the "I ran the numbers" signature is in his voice from JOURNALISTS.md. No banned phrases, no AI tells, rhythm passes mechanically and reads human aloud. The merge edits softened a few punches ("Seventeen vehicles that nobody will write the think piece about" is now grammatically lumpy) but voice is consistent throughout. Sentence rhythm variance 295 beats human target 287. Solid.

## 3. Ethics Reviewer — 8.5
No self-congratulation, no mocking of owners, no gratuitous fear. The "scariest recall" framing is clearly labeled as per-vehicle severity judgment, and the caveats paragraph explicitly demotes it to "editorial judgment, not epidemiology" — good. Mild concern: "the calendar does something less flattering" implies Ford dawdled for 12 weeks without knowing why (parts logistics, remedy validation, owner-address resolution are all plausible reasons a September 1 approval followed a June 3 stop-ship). The article doesn't accuse directly, but the insinuation of foot-dragging isn't sourced. Borderline; the honest framing elsewhere carries it. 8.5.

## 4. Social/Shareability — 8.5
Headline is shareable ("37 trucks" + "worst recall" is a strong number-contrast hook). Pull stat works as a card. The actionable paragraph gives readers something to do, which drives saves. The 0.95-inch figure is the quotable detail. Deduct half a point: the headline's comma-merge dulled its social punch, and the kicker "By The Numbers" is the least evocative taxonomy choice for a story that is fundamentally about a worker catching a factory error. Still clears the bar.

## 5. Legal Accuracy — 9.0
Campaign numbers (26V576/26V577, Ford 26S63/26S66), dates (May 26 discovery, May 27-28 build, June 3 stop-ship, Sept 1 approval, Sept 21 letters, Sept 14 VIN searchability), and population counts (37 US-sold of 38; 17) all trace to the cited sources. Consequence language (wheel lockup, driveshaft separation, rollaway without parking brake) mirrors NHTSA phrasing. No claims about crashes/injuries — explicitly states none reported. All six references are real, linked pages. Clean.

## 6. Research Rigor — 9.0
Novel contribution is real: the per-vehicle severity ranking of a single four-campaign recall batch, with near-100% defect-rate reasoning for small recalls vs. fractional rates in large campaigns — a finding the source coverage did not make (KBB/Autowire treated the small ones as footnotes). Limitations are explicit: no FARS data exists for a 54-truck population, zero reported crashes, severity ranking is editorial. Counterargument stated at full strength (the big recall may cause more total harm; "scariest" is framing). Methodology transparency: the arithmetic (0.95" shortfall, 16-week gap) shows inputs. The max-tow irony is analysis, not invention. 9.0.

## 7. Data Presentation — 8.5
The pull-stat "37" is the right number; the pull-label's combined "and 17" construction reads dense. Axle's beat promises chart-like thinking — a one-line rank table of the four campaigns (population vs. worst-case severity) would have served the thesis better than prose comparison, but prose suffices. The lede stat is bolded per template. Numbers are all anchored. 8.5.

---

## Verdict: SHIP (avg 8.82, all 7 ≥ 8.5, all hard gates pass)

**Blocking status:** 1/day rule — #748 published 2026-09-17. Queue drains through 2026-09-25 (#924 ships 9/25). #925 → SHIP_BLOCKED, ship_date 2026-09-26.

**Notes for ship:** cache-bust hero `?v={hash}` on ship; headline punctuation can be tightened at ship ("37 Trucks, One Wrong Bearing: This Week's Worst Recall Is 54 Trucks Wide" — optional, not blocking).

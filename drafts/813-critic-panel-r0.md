# Critic Panel — #813 "drunk-tank-index" (Axle McScatter), Round 0

## Hard gates (regex-verified, not opinion)
- em_dashes: 0 (max 3) — PASS
- banned_phrases: 0 — PASS
- the_starters_pct: 2.0 (max 15) — PASS
- css_class story: true; style.css (not story.css): true — PASS
- sentence_rhythm: variance 937.0 / short 9.7% / long 48.4% — PASS
- jpeg_valid: true (FFD8, 1920x1280) — PASS
- word_count: ~700 (within recent shipped range 499-784)

## Scores
1. **General Editor — 9.0.** Lede states the paradox and the method in two sentences.
   Pull stat (0.28) is the single most surprising number. The split of the
   crash-test mega-sentence fixed the one structural drag. Closes with
   actionable guidance plus a dedicated limitations paragraph.
2. **Voice Coach — 9.0.** Axle-idiomatic throughout: "I ran the numbers, then
   I ran them again," "Meet the drunk tank index," "For calibration."
   Numbers do the talking; prose stays dry. No banned phrases, no AI tells.
   Rhythm gate passes with real variance (937).
3. **Ethics Reviewer — 9.0.** Never glorifies impaired driving; explicitly
   states impairment is "the single most reliable way to defeat the
   engineering." Deceased drivers discussed as data points, not punchlines.
   No self-congratulation.
4. **Social/Shareability — 9.0.** Headline is a clean paradox with a built-in
   argument ("safest cars" + "one in four impaired"). Pull stat is quotable.
   The "it takes an impaired driver to die in them" line is the share trigger.
5. **Legal Accuracy — 9.0.** Every external claim tied to a cited source:
   IIHS pages, NHTSA, Edmunds, J.D. Power, Autoblog, The Car Connection.
   No invented URLs. Opinions clearly framed as interpretation ("Under this
   lens," "the best explanation"). No defamation exposure.
6. **Research Rigor — 9.0.** Original contribution: the toxicology-x-rate
   cross-tab and its conditional-probability interpretation, verified novel
   against 798 existing story slugs. Limitations paragraph is honest
   (fatal-only data, VMT estimates, nonrandom testing, presence vs causation).
   Counterargument stated at full strength with the Commander n=46 caveat.
   Methodology transparent (fleet medians 20.2% / 0.54 given).
7. **Data Presentation — 9.0.** All figures re-verified against
   fars_output.js: Five Hundred 26.4%/0.57, FJ Cruiser 25.3%/0.43, Commander
   24.9%/0.28, Verano 24.7%/0.46; fleet drug-positive 8.66% rendered as 8.7%;
   Verano drug 13.1%, Five Hundred drug 13.0%. Refs [1]-[6] all resolve to
   real pages visited during research.

**Average: 9.0. All 7 critics >= 8.5, all hard gates pass.**
**Verdict: SHIP (queued SHIP_BLOCKED per 1/day rule).**

# Critic Panel — #1075: "Ford Recalled 11,405 Rangers. Then It Recalled the Replacement Screens Too."
**Round 0** | Journalist: Clara Rollover | Kicker: The Gap | Date: 2026-10-04

## Hard gates (regex = source of truth)
- Em dashes: 0 (max 3) — PASS
- Banned phrases: 0 hits across all 15 patterns — PASS
- "The" sentence starters: 0/35 = 0.0% (max 15%) — PASS
- CSS: `class="story"` present, `../style.css` linked, zero `story.css` — PASS
- Sentence rhythm (sentence-rhythm-check.py --json): variance 560.1 (≥200), short 12.1% (≤15%), long 57.6% (≥15%) — PASS
- Hero: real JPEG, FF D8 magic, 2048x1152 — PASS
- References: `<section class="story-references">` with 6 entries, inline `<sup class="ref-link">` after claims — PASS
- Actionable takeaways: present (VIN lookup for 26V605000, dealer call with 26E065000 part-date check, dead-screen driving protocol) — PASS

## Scores
1. **General Editor — 8.8.** Lede lands ("Before you check your VIN, check your repair receipt"), arc is clean: two recalls, the mechanism gap, credit where due, the phone-call fix, honest limits. Pull stats placed at natural beats. The 771-word count runs long for the format but earns it.
2. **Voice Coach — 8.6.** Clara is audible throughout: direct address, consumer-advocate anger ("the one nobody told you about"), punchy fragments kept but merged to satisfy rhythm ("Read that again: those screens were sold to fix Rangers"). Zero AI tells, zero banned phrases, rhythm gate passes. Minor: the P4 mechanism sentence runs 47 words; Clara would probably chop it, but it carries.
3. **Ethics Reviewer — 9.0.** No moralizing, no victim imagery, no owner-shaming. Ford's competence is credited at full strength in its own paragraph rather than buried. The "minuscule risk" framing is honest about scale instead of fear-mongering over 46 parts.
4. **Social/Shareability — 8.7.** Headline is the share unit ("Then It Recalled the Replacement Screens Too"). The VIN-vs-part gap is a natural argument-starter for anyone who's had dealer service. Pull stats quotable (11,405 / 46).
5. **Legal Accuracy — 8.8.** Every load-bearing claim attributed: NHTSA campaign numbers verified live via the recalls API this run; "suspected counterfeit" attributed to Ford's safety recall report; the Sept 2 quarantine explicitly flagged as single-source. The FMVSS 111 noncompliance claim matches NHTSA's own summary language. No overclaim on VIN-tool behavior; the article routes around the ambiguity instead.
6. **Research Rigor — 8.9.** Original contribution: the equipment-campaign consumer instruction (check the part production date via the dealer, not the VIN lookup) — nobody wrote it. Limitations explicit (installed-vs-quarantined split unknown, single-source quarantine date, VIN-tool ambiguity, 46-unit scale). Counterargument at full strength (five-week discovery-to-filing timeline, quarantine before filing, system working as designed). All numbers traceable to cited sources.
7. **Data Presentation — 8.7.** Numbers clean and contextualized (11,405 factory trucks vs 46 service screens; Dec 2025–Aug 2026 production window; 15 warranty claims; Aug 14 → Aug 20 → late Sept timeline). Pull stats do real work. One nit: the equipment-campaign paragraph could use a one-line definition of "26E prefix" earlier, but the VIN-vs-part explanation covers it.

**Average: 8.79 — all seven ≥ 8.5. VERDICT: SHIP (round 0).**

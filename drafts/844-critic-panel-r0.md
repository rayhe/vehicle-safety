# Critic Panel — #844 "Tesla's Cybercab Has No Steering Wheel. Its Cameras Still Go Blind in the Sun." — Round 0

**Journalist:** Mia Crumplezone | **Slug:** cybercab-launched-blind-fsd-engineering-analysis | **Date:** 2026-09-08

## Hard Gates (mechanical, source of truth = regex/scripts)

| Gate | Result | Pass |
|---|---|---|
| Em dashes (max 3) | `grep -o '—' \| wc -l` = **0** | ✅ |
| Banned phrases | none found (Here's the thing/The kicker/paradigm shift/game-changer/deep dive/unpack/Let's be clear/Make no mistake/And it's not even close/The uncomfortable truth/The bottom line/inflection point) | ✅ |
| "The" starters (max 15%) | 5/42 = **11.9%** | ✅ |
| Sentence rhythm | variance **2548** (≥200), short **4.9%** (≤15), long **43.9%** (≥15) → script exit 0 | ✅ |
| CSS classes | `class="story"` ✅, `../style.css` ✅, no `story.css` ✅ | ✅ |
| Hero JPEG | real JPEG (JFIF, 1920×1280), visually verified (no text, no wheel, sun glare) | ✅ |
| twitter:card | present | ✅ |
| Actionable insights | "What This Means for You" section present | ✅ |

## Scores

**1. General Editor — 9.0.** Kicker→headline→lede→pull stat→body→references→disclaimer, all present. Lede starts mid-thought (fare-charging + same-day probe). ~430 words, in the 300-500 band. Pull stat placement after the AQ26002 exposition works. Minor: "Read that again" is a columnist tic slightly off Mia's technical register, but it functions as emphasis on the engineering point, not filler.

**2. Voice Coach — 9.0.** Mia's technical-but-accessible register holds: FMVSS numbers enumerated, "failure modes for a living," judgmental closer ("engineering or paperwork"). No banned phrases, no AI tells. Distinct from Rex's noir deadpan and Clara's consumer-advocate anger. One nit: "the old standards do not apply, and hours later NHTSA opened AQ26002" lost a punch in the rhythm fix; acceptable.

**3. Ethics Reviewer — 9.0.** No victim content. Tesla's position (Moravy, self-certification legality, Morrison's balanced quote) presented fairly. No self-congratulation. The counterargument section is genuinely steelmanned (billions of miles, thin 9-crash base, lidar also degrades, rules agreed obsolete).

**4. Social/Shareability — 9.0.** Headline is the share unit: wheel-less car + blind cameras. Pull stat (3.2M) is a standalone shareable number. The "Read that again" paragraph is quotable. No clickbait overclaim: "plausible rather than proven" hedges are inside, not in the headline.

**5. Legal Accuracy — 9.0.** AQ26002 particulars verified against the primary NHTSA PDF (opened 09/03/2026, prompted by public information, investigator Syed Rahaman, population 1,000 est.). FMVSS 111/124/135/203/204 attribution goes to TechTimes (secondary, but attributed inline). Morrison quote via USA Today. The 2,500-vehicle/year petition cap and Zoox July 2026 approval via Reuters. Self-certification framework correctly described (no pre-approval; NHTSA investigates after the fact). Caveat logged: the piece correctly notes AQ26002 "alleges nothing about safety."

**6. Research Rigor — 9.0.** Original contribution: connecting AQ26002 (covered by #822/#839 as legal/procedural stories) to the open FSD Engineering Analysis's camera-impairment finding — a linkage no site piece or cited outlet made central. Limitations section explicit ("What this does not prove": EA covers consumer FSD, not the Cybercab; failure-mode identity is plausible, not proven). Counterargument at full strength, not strawmanned. All 6 references linked with specific attributions. One deliberate restraint: no invented "sunniest city" stat for Austin; the sun-glare point is framed as NHTSA's own named failure condition.

**7. Data Presentation — 9.0.** Pull stat 3,200,000 with precise label. Key figures bolded in lede. Timeline paragraph ("In March... In June... In July... On September 3...") compresses the docket cleanly. Numbers traceable: 1,000 (AQ26002 filing), 45/420 (Reuters/Texas records), 9 crashes + 1 death + 6 under review (Autoblog, Mar 2026), EA still open confirmed by Electrek Sept 4, 2026.

**Average: 9.0** (all 7 ≥ 8.5). Round 0 PASS. No revisions needed.

## Round 0 verdict
**→ SHIP.** All critics ≥ 8.5, all hard gates pass on first round.

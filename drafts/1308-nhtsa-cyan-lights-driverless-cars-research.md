# Research Notes — Article #1308: NHTSA Wants Driverless Cars to Glow Cyan

**Working title:** "NHTSA Wants Driverless Cars to Glow Cyan. It Still Has No Rules for the Driving."
**Journalist:** Mia Crumplezone (Safety Engineering Editor — vehicle design, safety tech)
**Kicker:** Investigation
**Slug:** 1308-nhtsa-cyan-lights-driverless-cars

## Kill test

**Proposed angle (1-2 sentences):** NHTSA's October 2026 draft update to FMVSS 108 would let driverless cars wear steady cyan marker lamps, while the agency still has no federal safety standard governing the automated driving itself, and while its probe of the Cybercab's self-certification stays open. The federal government is regulating the glow before the driving, and the glow is optional, so a car with no cyan lights may still be driving itself.

**Challenge:** After 1,307 articles, is this just another Cybercab piece? No. Queue grep 2026-10-28: zero cyan/marker-lamp/ADS-lamp hits; the 11 Cybercab entries all concern certification, sales, or crashes, not the lighting rule. The lamp proposal is a distinct federal action (Oct 26 Federal Register publication, 30-day comment), with its own technical spec, its own Mercedes precedent, and its own logical flaw (optional signal). Three reasons to proceed: (1) genuinely new rulemaking, 48 hours old at draft time; (2) the optional-signal paradox is an original analytical finding, not a restatement of press coverage; (3) the Mercedes 5-car validation sample versus a national standard is a concrete scale mismatch worth naming.

**Verdict:** PROCEED.

## Verified facts (all sourced, no fabrication)

1. **The proposal.** NHTSA drafted an update to FMVSS 108, the federal vehicle lighting standard, permitting optional cyan "ADS marker lamps" on vehicles without steering wheels or pedals, such as Tesla's Cybercab. Published in the Federal Register on October 26, 2026, with a 30-day public comment period (closing late November 2026). (Sources: AutoGuide Oct 27, 2026; Not a Tesla App Oct 24, 2026; Fast Company Oct 2026.)
2. **How the lamps work.** Steady burn, never flashing; all lamps switch on and off in unison. They activate only when the automated system is driving and no human is expected to monitor the road, and must switch off when supervision is required again. They are meant for true driverless operation, not supervised driver-assist. (AutoGuide; Not a Tesla App.)
3. **Placement spec.** One or two lamps at the front, the same on each side, and one or two at the rear, totaling four to eight per vehicle. Each lamp sits at least 15 inches above the ground and clearly apart from other lights. A lone front or rear lamp sits on the centerline; a pair must share height and even spacing. No additional cyan lights elsewhere on the body. (AutoGuide; Not a Tesla App.)
4. **Optional, not required.** The draft compels no automaker to fit the lamps. A driverless car that omits them remains compliant. One operator could fit them while a rival leaves them off, and both satisfy the rule. (AutoGuide; Not a Tesla App.)
5. **The rest of the draft.** Physical turn-signal, hazard, and high-beam control requirements would apply only to vehicles with manual driving controls, so a Cybercab-style vehicle could handle those functions without traditional switches. Some dashboard indicators for turn signals and high beams would also go away. The draft drops the 12.8-volt test standard for integrated headlamps, letting makers certify lighting at LED-matched voltages, and drops old restrictions on vertical headlight layouts. It follows NHTSA's earlier move scrapping the manual brake pedal rule for vehicles driven exclusively by an automated system. (AutoGuide; Not a Tesla App.)
6. **Administrator quote.** NHTSA Administrator Jonathan Morrison: the proposal would ease "unnecessary regulatory burdens" for cars lacking manual controls while establishing "clear performance standards for automated vehicle marker lamps" and paving the way for "safe innovation and setting clear rules of the road for automated vehicles." (AutoGuide; Fast Company.)
7. **Mercedes precedent.** Mercedes-Benz received the first US approvals for turquoise automated-driving marker lights in California and Nevada in December 2023, for DRIVE PILOT (SAE Level 3) vehicles, integrated into headlights, taillights, and mirror housings. Per the federal filing as summarized by OctaneDaily: a two-year, five-car on-road validation in California from 2023 to 2025, and the 360-degree placement logic the proposal follows. Mercedes chose turquoise for visibility and differentiation from traffic and emergency lighting, consistent with SAE J3134 "ADS Marker Lamps." (WardsAuto Dec 21, 2023; Fast Company; OctaneDaily.)
8. **Public appetite.** A survey of more than 4,400 drivers in the US, UK, Germany, and Japan, cited in the federal filing, found upwards of 80 percent of American and British respondents want automated vehicles to carry a marker lamp. (OctaneDaily, summarizing the filing.)
9. **Preemption.** NHTSA's tentative view is that a final rule would preempt the California provisions where the two differ, and it is asking for comment on exactly that. (OctaneDaily.)
10. **Cybercab context.** NHTSA's inquiry into the Cybercab's certification (AQ26002) remains open, with Tesla recently receiving an extension to respond. More than 300 Cybercabs operate in Austin, Dallas rides are expected next month, and Tesla aims to sell its first Cybercabs to customers before year-end. On Tesla's Q3 earnings call, Ashok Elluswamy said unsupervised FSD could reach the first customer vehicles in Q2 2027. (Not a Tesla App.)
11. **The standards gap.** As of October 2026, there are no federal motor vehicle safety standards governing assisted or automated driving technologies at all; NHTSA has investigated some systems but written no rules for them. (Sam Abuelsamid, This Week in Tech, Oct 25, 2026, via Sputnik Intelligence transcript.)
12. **Named concerns.** The upside cited for marker lamps is a common visual language identifying automated cars. The concerns: the lights could make vehicles a target, or lead pedestrians and other drivers to take more risks around them. (Not a Tesla App.)

## Original calculations / analysis (verifiable, show work in article)

- **The required-lamp count is zero.** Permitted range: 4 to 8 lamps. Required minimum: 0. Any safety case built on "pedestrians will recognize robot cars by cyan" divides by a denominator the rule does not guarantee. A pedestrian who learns "cyan means robot" will meet compliant robot cars with no cyan at all, because omission is compliant.
- **The comment window vs. the fleet already rolling.** Federal Register publication Oct 26 + 30 days puts the comment close around Nov 25, 2026. Meanwhile 300+ Cybercabs already carry passengers in Austin with no marker requirement whatsoever. The rule, even if finalized, arrives after the fleet it describes.
- **The validation sample.** The federal placement logic rests in part on a 5-car, 2-year Mercedes validation (filing via OctaneDaily). Five cars is the entire on-road evidence base cited for a national placement standard covering passenger cars, multipurpose vehicles, trucks, and buses.
- **The color logic, stated fairly.** Turquoise/cyan was picked because it is distinguishable from red, amber, white, and blue emergency lighting, and because test studies rated it optimal on physiological and psychological measures (Mercedes/Fast Company). That is a real human-factors case, and the article should grant it before noting the optionality problem.

## Story spine (Mia Crumplezone voice)

- Lede: the federal government has decided what color a robot car should glow. It has not decided how a robot car should drive.
- The spec, rendered concretely: steady, synchronized, 15 inches up, 4 to 8 lamps, centerline or matched pairs.
- The Mercedes backstory: California and Nevada said yes in 2023; five cars, two years, and now a national proposal.
- The catch: optional. Two identical robotaxis, one glowing, one dark, both legal. The signal teaches the public a rule with built-in exceptions.
- The surrounding deregulation: brake pedal rule already scrapped, manual control requirements narrowed, 12.8-volt test dropped. The proposal deregulates the controls while standardizing the decoration.
- The open probe: AQ26002 still open, 300+ Cybercabs in Austin, Dallas next, customer sales aimed before year-end.
- Actionable: comment by late November (30-day window from Oct 26); if you see cyan, the car is driving itself, but if you see no cyan, assume nothing; pedestrians should not step out expecting a robot to behave differently just because it glows.
- Closer: the engineering judgment — a marker lamp is a communication device, and a communication device that half the fleet may skip is not a standard, it is a suggestion.

## Limitations (for the limitations section)

- The proposal is a draft, not a final rule; the comment period runs to late November 2026 and NHTSA may change or drop provisions. Nothing here is yet law.
- Several details come from the filing as summarized by trade press (AutoGuide, Not a Tesla App, OctaneDaily), not from a direct read of the Federal Register document in this run; the filing's full text should be checked before treating any single spec as final.
- The "no federal standards govern automated driving" claim is an analyst's summary (Abuelsamid, Oct 2026), not a NHTSA statement; FMVSS still governs the vehicle's crashworthiness, lighting, and other conventional systems.
- The 80-percent survey figure is cited in the filing, not independently verified here; survey wording and sampling are not in the summaries reviewed.
- No crash data yet ties marker lamps to fewer pedestrian strikes; the safety benefit is hypothesized (recognition), not measured.

## Strongest counterargument

Standardizing the signal before mandating it is how lighting regulation normally works, and optionality is a feature, not a bug: it lets early adopters (Mercedes, and any robotaxi operator that wants public recognition) converge on one color instead of fragmenting into a rainbow, while avoiding a mandate on a technology whose fleet is still tiny. The 5-car validation is small because the eligible fleet is small; demanding a thousand-car study before writing any rule would guarantee no rule at all. And the "no cyan means nothing" objection proves too much: brake lights are also imperfect signals (burned-out bulbs, sun glare), yet nobody argues brake lights are useless. The honest version of the article's thesis is narrower: cyan lamps are a useful first step that must not be mistaken for a safety system, and the real gap is the missing driving standard, not the lamp.

## Reference URLs (verified to exist — do not invent others)

- https://www.autoguide.com/auto/nhtsa-drafts-cyan-marker-lamp-rule-for-driverless-cars-44641261
- https://www.notateslaapp.com/news/4892/nhtsa-proposes-cyan-lights-for-driverless-cars-like-cybercab
- https://www.fastcompany.com/91630053/why-the-government-wants-self-driving-cars-to-glow-cyan
- https://octanedaily.com/news/nhtsa-cyan-ads-marker-lamps-proposal/
- https://www.wardsauto.com/news/archive-auto-mercedes-benz-drive-pilot-torquise-colored-lights-autonomous-driving/703245/
- https://www.nhtsa.gov/research-data/fatality-analysis-reporting-system-fars
- https://www.iihs.org/ratings

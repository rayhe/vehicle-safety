# Research Brief — #1547: The Ram Classic's Brake Lights Lie, and the Truck Might Move on Its Own

**News peg:** NHTSA campaign 26V756, filed November 19, 2026; Reuters reported it November 20, 2026 (today). VINs become searchable November 26, 2026. Owner letters mail January 14, 2027.
**Journalist:** Clara Rollover (Consumer Safety Advocate — the Classic is the budget work truck; this is a "what this means for you" story, and she is the one who gets angry on buyers' behalf).
**Slug:** `1547-ram-classic-brake-lights-lie`
**Working title:** "Your Ram Classic's Brake Lights Are Lying to Everyone Behind You"
**Kicker:** Investigation

## Core facts (verified)

- **Population:** 82,843 Ram 1500 Classic pickup trucks, model years 2022-2024, plus 669 Mopar ABS control modules sold as standalone parts (Reuters, November 20, 2026). Total affected units: 83,512.
- **Campaign:** NHTSA 26V756, Chrysler recall number A9D. Report received by NHTSA November 19, 2026. Component listed as "EXTERIOR LIGHTING: BRAKE LIGHTS."
- **Defect (NHTSA API record, verbatim substance):** The anti-lock brake (ABS) module software may misread inputs from the brake pedal and pedal sensor.
- **Consequences (NHTSA):** Improper brake light illumination, unintentional vehicle movement, or a loss of driver assist features, including electronic stability control (ESC), AutoPark, and forward collision warning. All three increase crash risk.
- **Remedy:** Dealers update the ABS module software, free of charge. No parts required, no OTA. Owner notification letters expected January 14, 2027. VINs searchable on NHTSA.gov beginning November 26, 2026. Chrysler customer service: 800-853-1403.
- **The parts-shelf twist:** The 669 Mopar ABS modules are the same defective software sold over the counter as replacement parts. The bug is not only in 82,843 trucks. It is sitting on dealer shelves and inside whatever vehicles already received one of those modules as a repair part.
- **The predecessor:** This is the second Ram ABS-software recall in the same failure family. Recall 75B / NHTSA 24V653 (filed September 5, 2024) covered more than a million 2019 and 2021-2024 Ram 1500s (the new-generation DT truck): an ABS software malfunction that could disable ESC, a failure to conform to FMVSS 126. The fix then was also a dealer ABS software update. Twenty-six months later, the old-generation truck Stellantis kept selling as the budget Classic gets its own version of the same bug.
- **What the Classic is:** The 1500 Classic is the previous-generation (DS platform) Ram, sold alongside the redesigned 1500 from 2019 through 2024 as the cheaper work truck. The buyers who picked the Classic picked the lowest-price full-size Ram. They now get a second-generation ABS software defect and a dealer visit in January.
- **No park-it / park-outside flag:** NHTSA's record carries no do-not-drive or park-outside advisory for 26V756.

## FARS context (local fars_output.js; aggregates all Ram 1500s, not Classic-only)

- Ram 1500 (2014-2023): 714 deaths, 2,095 crashes, fleet 4,200,000, rate **0.13** deaths per 100M VMT. One of the lowest pickup rates in the file.
- Toxicology: 6,293 drivers, 20.3% any-impaired (alcohol 15.6%, drug 8.4%).
- Model-year deaths: 2019 is the spike year at 156, against 45-90 in surrounding years. Do not overclaim: the FARS file does not split Classic from DT, and 2019 predates this recall's population.
- Use FARS only for the framing paradox: the 1500 is a statistically safe truck by body count, and this recall is about the truck lying to other drivers and moving on its own, not about crashworthiness.

## Kill test

- **Genuinely newsworthy?** YES. Filed yesterday, reported today. 82,843 trucks plus parts. A truck that can roll away on its own while its brake lights tell the driver behind you the wrong thing is a safety story, not a paperwork story.
- **Novel angle?** YES. (a) The sequel: same ABS software failure family as the million-truck 24V653 recall, now on the budget Classic, 26 months later. Stellantis fixed the new truck and left the old one carrying the same class of bug. (b) The parts shelf: 669 defective ABS modules were sold as Mopar replacement parts, so the defect is also loose in the repair ecosystem. (c) The triple failure from one misread input: brake lights lie, the truck can move by itself, and ESC plus AutoPark plus forward collision warning all go dark. One sensor misread takes out the whole safety stack. (d) The buyer profile: the Classic is the cheap Ram, bought by people who can least afford a surprise dealer visit in January.
- **Data-originality:** Original calculations: 669 / 83,512 = 0.8% of the affected population is loose parts, not trucks. 82,843 is roughly 1 in 17 of the 1.4 million trucks in the 2024 predecessor recall (82,843 / 1,400,000 = 5.9%). The gap between the two recalls is 26 months (Sept 5, 2024 to Nov 19, 2026).

## Actionable insights (for article)

1. Check your VIN at nhtsa.gov/recalls starting November 26, 2026. Do not wait for the January 14 letter.
2. If you own a 2022-2024 Ram 1500 Classic, watch for: brake lights behaving oddly, the truck creeping or rolling when it should be parked, ESC/AutoPark/forward collision warning lights or warnings. Any one of those is the tell.
3. The fix is a free dealer software update. No parts, no charge. Book it once VINs are searchable.
4. If your Classic ever had an ABS module replaced with a Mopar part, ask the dealer whether that module is one of the 669. A repair part can carry the same defect.
5. Until the fix: park on flat ground, set the parking brake every time, and do not trust AutoPark to hold the truck.

## Limitations

- NHTSA's public record lists no crash, injury, or fire count for 26V756. Do not invent one.
- The exact share of the 82,843 trucks that will actually exhibit the fault is unknown; the Part 573 defect estimate was not available at research time (Reuters and the NHTSA API record do not state it). Do not claim 100%.
- Whether the 669 Mopar modules were installed in customer vehicles or remain on shelves is not stated in the sources. Frame it as "sold as parts" and advise owners to ask, not as confirmed installations.
- The 24V653 predecessor population: press reported it as about 1.4 million; FCA's later repair bulletin put it at 1,167,590. Use "more than a million" to stay safe.
- FARS Ram 1500 figures aggregate the Classic and the new-generation truck. Do not attribute the 0.13 rate to the Classic alone.

## Strongest counterargument

82,843 trucks is a small recall next to the million-truck predecessor, no crashes or injuries are on the record, and the fix is a free software flash. A skeptic could call this a cleanup filing for a software edge case. The counter is the failure mode, not the count: a brake pedal input the computer misreads can make the truck move when the driver expects it parked, while the brake lights tell the car behind the opposite of what the truck is doing, and the three systems meant to catch that (ESC, AutoPark, forward collision warning) are the same systems the bug disables. Small population, three-way failure, and the defect also shipped as a part.

## Primary sources (5)

1. NHTSA recalls API, campaign 26V756000, report received 19/11/2026 (component, summary, consequence, remedy, VIN date, Chrysler A9D). https://api.nhtsa.gov/recalls/recallsByVehicle?make=ram&model=1500&modelYear=2023
2. Reuters, "Stellantis recalls over 82,000 Ram trucks over ABS software risk," November 20, 2026. https://www.reuters.com/legal/litigation/stellantis-recalls-over-82000-ram-trucks-over-abs-software-risk-2026-11-20/
3. TradersUnion, "Stellantis recalls Ram trucks over ABS software risk in U.S.," November 20, 2026 (Reuters syndication, confirms 82,843 + 669 modules). https://tradersunion.com/news/companies/show/4351099-stellantis-ram-recall-abs-software/
4. CarCody, "Ram 1500 ABS Recall: Check Your VIN for Open Safety Recall 75B," September 30, 2026 (predecessor 24V653 / 75B: 1,167,590 per FCA bulletin, FMVSS 126 noncompliance, dealer software update). https://carcody.com/over-1-4-million-ram-1500s-recalled-over-abs-software-bug-that-can-disable-esc/
5. NHTSA FARS 2014-2023 via local fars_output.js (Ram 1500: 714 deaths, rate 0.13, 20.3% impaired).

## Coverage check (duplicate prevention)

- Full-filename grep, no truncation: zero drafts/stories cover 26V756, "82,843", "1500 Classic" ABS, or "A9D" as a subject. Nearest neighbors: #1510 (Ram recall census, Nov 14, predates this filing), #1528 (November recall census, lists campaigns through 26V743 only), #1525 (recall-of-recall census), and the 24V653/75B predecessor mentioned only in passing in one research file. The Honda 26V721, GM 26V718, Ford 26V691, Acura ZDX 26V735, VW Atlas 26V732, and BMW 26V733 November recalls were each already covered by earlier articles (#1457/#1533, #1391, #1423, #1521, #1540, #1490) and were rejected as duplicates during this research pass.

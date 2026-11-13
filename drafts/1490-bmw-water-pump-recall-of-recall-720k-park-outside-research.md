# Research — #1490: BMW Recalled the Same 720,796 Cars for the Same Water Pump Fire, Because the First Fix Didn't Fix It

**Number:** 1490
**Slug:** 1490-bmw-water-pump-recall-of-recall-720k-park-outside
**Journalist:** Vin Wreckage (Existential Dread — paradoxes, counterintuitive findings; tied least-used in last 40: 4, Dale Impactor III at 3 is toxicology-only and wrong for this beat)
**Kicker:** Investigation
**Date researched:** 2026-11-13
**Target ship_date:** 2028-08-11 (1 day after #1489's 2028-08-10)

## Story in one line
BMW recalled 720,796 cars in 2024 because a water pump connector could short and catch fire, "fixed" them with a new pump and a protective shield, and on November 4, 2026 recalled the exact same cars for the exact same connector — this time with no remedy at all and an instruction to park outside.

## Kill test
- **Genuinely newsworthy?** YES. Announced today, Nov 13, 2026 (Reuters). 720,796 vehicles, fire risk, park-outside advisory, remedy under development. The recall-of-a-recall is the news: the 2024 remedy failed so completely that BMW is re-recalling the identical population and telling owners to park outside while it invents a second fix.
- **Novel angle on data?** YES. Full queue/drafts grep: zero prior coverage of 26V733, zero prior coverage of 24V608, zero prior coverage of the BMW water-pump connector. Nearest neighbors are different defects (#1302 BMW R18 reverse recall, #1364 BMW DSCI recall-of-recall in China, #1483 BMW recall census). The original contribution is the side-by-side of the two NHTSA filings: identical defect wording, identical population, and the remedy text that admits vehicles already repaired under 24V608 "will need to have the new remedy completed."
- **3+ primary sources?** YES. (1) NHTSA recalls API, campaign 26V733000, queried directly Nov 13, 2026; (2) NHTSA recalls API, campaign 24V608000, same query; (3) Reuters, Nov 13, 2026 (announcement); (4) automotor.news, Nov 13, 2026 (Part 573 details: per-model counts, supplier, field instances).
- **Verdict:** PROCEED.

## Primary sources
1. **NHTSA recalls API, 26V733000** (api.nhtsa.gov/recalls/recallsByVehicle?make=bmw&model=328i&modelYear=2014), queried Nov 13, 2026. Report received Nov 4, 2026. parkOutSide: true. Component: ELECTRICAL SYSTEM:WIRING:CONNECTORS/PLUGS/RECEPTACLES. Summary, consequence, and remedy quoted verbatim in the facts below. https://www.nhtsa.gov/recalls
2. **NHTSA recalls API, 24V608000** (same query). Report received Aug 14, 2024. parkOutSide: false. Component: ENGINE AND ENGINE COOLING:COOLING SYSTEM:PUMP. Summary, consequence, and remedy quoted verbatim below.
3. **Reuters, "BMW to recall over 720,000 US vehicles over fire risk, NHTSA says," Nov 13, 2026.** https://www.tradingview.com/news/reuters.com,2026:newsml_L6N46U0JM:0-bmw-to-recall-over-720-000-us-vehicles-over-fire-risk-nhtsa-says/
4. **automotor.news, "Park outside: BMW 3 Series, X3 among 720,796 recalled," Nov 13, 2026** — cites BMW's Part 573 report: per-model counts (236,702 3 Series sedans, 163,728 X3, 110,102 5 Series), supplier Peirburg Pump Technology GmbH (Germany), about 10 US field instances, no known accidents or injuries, owner letters Dec 25, 2026, VINs searchable Dec 25, 2026. https://automotor.news/news/bmw-water-pump-connector-fire-park-outside-recall-26v733/
5. **Background (2024 coverage):** MotorBiscuit, Sep 4, 2024, on 24V608 — NHTSA's "estimated percentage with defect" was 1%. https://www.motorbiscuit.com/bmw-recall-over-700000-cars/

## Key verified facts
- **Population (26V733):** 720,796 vehicles. 2012-2016 3 Series, 5 Series, Z4; 2012-2015 X1; 2013-2017 X3; 2015-2016 4 Series Gran Coupe, 2 Series Convertible; 2014-2016 328xi Gran Turismo, 2 Series Coupe, 4 Series Convertible, 3 Series Coupe, 3 Series Sportswagon; 2015-2018 X4; 2016-2018 X5 xDrive40e.
- **Per-model counts (Part 573, via automotor.news):** 236,702 3 Series sedans (2012-2016); 163,728 X3 (2013-2017); 110,102 5 Series (2012-2016). The three nameplates are 510,532 of the 720,796, about 71%.
- **Defect (26V733, NHTSA's words):** "An improperly sealed electrical connector on the water pump may be exposed to water and short circuit." Consequence: "A short circuit increases the risk of a fire."
- **Defect (24V608, NHTSA's words):** "An improperly sealed electrical connector on the water pump may be exposed to water and short circuit." Consequence: "An electrical short increases the risk of a fire." Word-for-word the same defect, two years apart.
- **The 2024 remedy (24V608):** "Dealers will inspect and replace the water pump and plug connector as necessary, and install a protective shield, free of charge. Owner notification letters were mailed on March 28, 2025."
- **The 2026 remedy (26V733):** "Owners are advised to park their vehicles outside and away from structures until the recall remedy is completed. The remedy is currently under development. Owner notification letters are expected to be mailed in December 2026. ... This recall replaces NHTSA recall number 24V608. Vehicles already repaired under the previous recall will need to have the new remedy completed."
- **Supplier:** Peirburg Pump Technology GmbH, Germany (Part 573, via automotor.news).
- **Field evidence:** About 10 US field instances that relate or may relate to the issue; no known accidents or injuries (Part 573, via automotor.news).
- **Defect rate:** NHTSA's 2024 record estimated 1% of the population actually carries the defect (MotorBiscuit, Sep 4, 2024). That is roughly 7,200 cars with a live short-circuit risk inside a 720,796-car recall — and nobody knows which 7,200.
- **Timeline:** 24V608 filed Aug 14, 2024; owner letters mailed Mar 28, 2025; 26V733 filed Nov 4, 2026; Reuters announcement Nov 13, 2026; VINs searchable Dec 25, 2026; owner letters expected Dec 2026 (BMW's plan: Dec 25, 2026).
- **Park-outside flag:** 24V608 parkOutSide: false. 26V733 parkOutSide: true. The same cars went from "bring it in, we'll shield it" to "leave it outside" in 27 months.

## Original contribution (Vin's math and synthesis)
1. **Same words, same cars, second recall.** The two filings describe the defect in identical language. The only thing that changed between Aug 2024 and Nov 2026 is the remedy: from a concrete repair (new pump, new connector, protective shield) to no remedy and a park-outside order. The 2024 fix did not merely miss a few cars; BMW is re-recalling the entire population, including cars it already repaired. The shield did not shield.
2. **The 1% problem.** NHTSA estimated 1% of the 720,796 actually have the defect. That is about 7,200 cars. BMW cannot identify them, so all 720,796 owners get the park-outside order and a remedy that does not exist yet. A recall that covers 100 cars to catch 1 is a blunt instrument; a recall that covers 720,796 to catch 7,200 is a confession that the manufacturer cannot tell a good connector from a bad one.
3. **The remedy downgrade.** Most recalls move from "no fix yet" to "fix available." This one moved backwards: 2024 had a fix (inspect, replace, shield); 2026 has a parking instruction. Owners who did everything right — brought the car in, got the shield installed, kept the letter — are back at the start, with a car BMW now says to keep away from structures. The reward for compliance is a second recall.
4. **The timeline math.** Aug 14, 2024 to Nov 4, 2026 is 812 days. Owner letters for the first recall went out Mar 28, 2025, so some owners had their "fixed" car for barely 19 months before being told to park it outside. The water pump connector survived a redesign, a replacement program, and a protective shield, and still shorts when it gets wet. At some point the defect is not the seal. The defect is the design that needs a seal to survive rain.
5. **The fire-risk asymmetry.** About 10 field instances, zero accidents, zero injuries — and a park-outside order on 720,796 cars. Compare Genesis G80: three park-outside fire recalls and counting (#1173, #1224, #1290, #1330 on this site). BMW's count is one fire recall, twice. The park-outside order is the honest part: a car that can catch fire from rain does not belong in a garage, and BMW is saying so plainly this time.

## Strongest counterargument
Ten field instances across 720,796 cars over two years is a tiny rate, and zero accidents or injuries is the number that matters most. The 2024 remedy may have worked for most cars; BMW may be re-recalling out of caution after a handful of post-repair failures, which is exactly what a responsible manufacturer should do. A park-outside advisory with no remedy yet sounds alarming, but it is the standard holding pattern while a new fix is engineered, and the 1% defect estimate means roughly 713,000 of these cars were never going to short at all. The "recall of a recall" framing is dramatic, but recalls of recalls are common and usually mean the system is working: field data found the gap, and the manufacturer closed it. The honest headline might be that BMW caught its own failed fix before anyone was hurt.

## Limitations
- Per-model counts, supplier name, field-instance count, and the Dec 25, 2026 letter/VIN dates come from automotor.news's reading of BMW's Part 573 report, not from the NHTSA API record directly; the API record confirms the population, dates, park-outside flag, and remedy text.
- The 1% defect estimate is from NHTSA's 2024 record for 24V608 (via MotorBiscuit); NHTSA's 26V733 record does not publish a defect-percentage estimate, so the ~7,200 figure is an extrapolation from the 2024 estimate, not a 2026 measurement.
- BMW has not disclosed how many post-repair failures triggered the re-recall, or what the new remedy will be. Do not claim the shield failed in a specific number of cases.
- The "about 10 field instances" figure is as reported in the Part 573 filing via automotor.news; the filing's exact wording was not independently verified.

## Actionable insights (hard gate)
- If you own a 2012-2018 BMW 2, 3, 4, or 5 Series, X1, X3, X4, X5 xDrive40e, or Z4: park outside and away from structures until the remedy is completed. Do not wait for the December letter.
- Check your VIN at nhtsa.gov/recalls starting December 25, 2026, when VINs become searchable; the recall is 26V733, and it supersedes 24V608.
- If your car was already repaired under the 2024 recall (new pump, new connector, protective shield): you are still in this recall. The first fix does not exempt you; BMW says repaired vehicles "will need to have the new remedy completed."
- If you are shopping a used 2012-2018 BMW from this list, verify 26V733 status before signing; a 2024 repair receipt is not proof the car is clear.
- The fire risk comes from water reaching an improperly sealed connector, so the risk is not limited to driving: a parked car in rain can short. That is why the advisory is park outside, not just drive carefully.

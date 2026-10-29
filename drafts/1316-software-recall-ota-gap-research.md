# Research — #1316: The Software Recall That Still Needs a Dealer Visit (tensorust NHTSA analysis, Oct 27, 2026)

## Angle
A growing share of recalls are for software bugs: a camera that goes black, an airbag module that misreads a seat, a battery controller that can overheat. The fix is a file. But only 20% of those fixes arrive over the air. 32.3 million vehicles in 2022-2026 software recalls were told to drive to a dealer for a download. Tesla fixed 30 of 30 remotely. Ford filed 130 software recalls and fixed 23 remotely. Volkswagen fixed zero of 35.

## Kill test
- **Newsworthy?** Yes. Fresh Oct 27, 2026 original data analysis of NHTSA's own recall file; first public count of OTA vs dealer software recalls. Recall completion is the hidden safety metric: a remedy that sits in a dealership waiting room for months is a defect that keeps killing in the meantime.
- **Novel angle?** Yes. Nobody had added up the other side of the OTA-recall story: not the Tesla jokes, but how many software fixes every other maker still routes through a service bay. The two-tier pattern is the finding: makers built around one central computer (Tesla, Rivian, Lucid) clear 85-100% OTA; legacy makers with supplier-built module tails sit under 20%.
- **Verdict:** PROCEED.

## Facts (all from cited sources)
- 708 US vehicle recalls (2022 -> Oct 27, 2026) whose defect or remedy text names software; 140 (20%) fixed over the air; 32.3M of 59.7M vehicles in software recalls still needed a dealer visit (tensorust count of NHTSA recall flat file).
- OTA share by year: 19% (2022), 12% (2023), 22% (2024), 19% (2025), 28% (2026 YTD).
- Software recalls growing: 113 in 2022, 183 in 2025.
- Maker scoreboard: Ford 130 recalls / 23 OTA (18%) / 10.42M dealer vehicles. Stellantis 64 / 3 (5%) / 6.11M. VW 35 / 0 (0%) / 1.83M. GM 32 / 12 (38%) / 0.80M. Tesla 30 / 30 (100%) / 0. Toyota 25 / 2 (8%) / 3.91M. Hyundai 23 / 10 (43%) / 1.00M. Kia 22 / 4 (18%) / 1.65M. Mercedes-Benz 26 / 1 (4%) / 0.49M. BMW 20 / 3 (15%) / 0.19M. Nissan 15 / 4 (27%) / 1.29M. Lucid 13 / 11 (85%) / 0.003M. Honda 11 / 1 (9%) / 1.31M. Volvo Cars 9 / 5 (56%) / 0.03M. Rivian 6 / 6 (100%) / 0.
- Porsche: 0 of 13. Mazda: 0 of 13.
- OTA recall needs three things: a modem in the car, a module flashable while parked, and a maker willing to certify the update without a technician watching.
- Engineering explanation: supplier-built modules each have their own chip, flashing tool, and often no path to the cell modem.
- Methodology: NHTSA recall flat file (static.nhtsa.gov), post-2010, vehicle campaigns (type V), report dates Jan 2022 - Oct 27 2026, deduped by campaign number. "Software" = defect or remedy text contains the word software. OTA = remedy says over-the-air / OTA / remote software update / wireless update. Some differently-worded remote fixes may be missed; potentially-affected counts are NHTSA maximums, not completed repairs.

## Sources
1. tensorust.com, "Car software recalls: only 20% fixed over the air (NHTSA data)," Oct 27, 2026. https://tensorust.com/articles/car-software-recalls-dealer-not-over-the-air/
2. NHTSA recall flat file (static.nhtsa.gov), downloaded Oct 27, 2026 — underlying primary dataset (cited in tensorust piece).
3. NHTSA recall lookup, https://www.nhtsa.gov/recalls — per-campaign remedy text is published here.
4. DriveTeslaCanada, "Tesla fixes 37% of its recalls via software updates," Oct 27, 2026 (cited in tensorust sources).

## Original contribution
- Time-cost calculation: 32.3M dealer-visit vehicles x ~1 hour per dealer visit = 32.3M hours, roughly 3,700 years of human time spent in service waiting rooms for a file download. Ford alone: 10.42M hours, ~1,190 years.
- Framing: recall remedy distribution is the hidden safety metric. A dealer-visit recall is a months-long campaign with partial completion; an OTA remedy lands on most cars in days. The defect is code; the bottleneck is the route it travels.
- Two-tier architecture framing: central-computer makers vs. supplier-module-tail makers, mapped to the exact scoreboard percentages.

## Limitations
- tensorust's heuristic may miss remote fixes worded differently; the true OTA share could be slightly higher.
- Potentially-affected vehicle counts are NHTSA maximums (vehicles ever built with the defect), not the number of cars actually needing the fix or completing it.
- Some modules physically cannot be flashed remotely; the fix genuinely needs a bay in some campaigns. The scoreboard does not distinguish.
- No recall completion-rate data by remedy type in this analysis; the "faster completion" claim is inference from distribution mechanics, not a measured rate.

## Counterargument
- Safety-critical fixes arguably SHOULD be verified by a technician; OTA updates can and do brick cars, and a failed flash at highway speed is its own hazard.
- A dealer visit is also a chance to catch other open recalls and maintenance issues on the same car.
- Ford leads in total software recalls partly because it sells the most vehicles; the count is not normalized per vehicle sold.
- Franchise dealer laws in most states make it legally hard for makers to bypass dealers; the barrier is partly legal, not just cultural.
- tensorust's own caveat: "Nobody has proven it is deliberate yet."

## Actionable
- Check your VIN at nhtsa.gov/recalls right now. If your car's open recalls list a software remedy, read the remedy column: OTA or dealer. If it says dealer, it will not fix itself; book the visit.
- Before buying: look up the model in the NHTSA recall search. A car whose software recalls arrive over the air saves you hours every year; a car from a maker at 0% OTA means every future software defect costs you a service appointment.
- Ford, Stellantis, Toyota owners: your software recalls almost certainly need a dealer. Do not wait for a letter.

## Journalist: Axle McScatter (data visualization editor; "I ran the numbers. Then I ran them again. They didn't get better." Kicker: By The Numbers)

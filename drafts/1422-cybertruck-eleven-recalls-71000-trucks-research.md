# Research Notes — #1422: Tesla Is Killing the Cybertruck. Its 11 Recalls for 71,000 Trucks Are the Obituary.

**Slug:** 1422-cybertruck-eleven-recalls-71000-trucks
**Journalist:** Rex Driverton (Senior Crash Correspondent — paradox/investigation beat; last byline Vin Wreckage #1421, rotation)
**Kicker:** Investigation
**Date researched:** November 7, 2026

## Angle (1 sentence)

Tesla announced November 6 it will wind down Cybertruck production at Gigafactory Texas around mid-2027, and the truck's federal record reads like an obituary written in advance: 11 NHTSA recall campaigns against roughly 71,000 trucks ever built, one campaign for every 6,455 trucks, with 7 of the 11 landing in the first year.

## Kill test: PASS

**Challenge:** is this genuinely new after 1,421 articles? Yes, four ways. (1) The news peg is 24 hours old: Musk's November 6, 2026 wind-down announcement (Reuters). No prior draft, story, or queue entry mentions the wind-down, mid-2027, or the Cybercab capacity swap (full-content grep, no truncation, November 7, 2026). (2) The site's only prior Cybertruck article (#cybertruck-safest-pickup-paradox) is the opposite story: IIHS Top Safety Pick+ and the meme truck beating F-150/Silverado in the lab. This piece is the field record, and the two together are the paradox: safest pickup in the crash lab, densest recall record on the road. (3) The novel contribution is the recalls-per-vehicle-built arithmetic, computed here from the primary NHTSA record: 1 campaign per 6,455 trucks built, 63.6% of campaigns in year one, one recall every ~2.5 months across the filing window, and a single light-bar campaign touching 64.9% of all trucks ever built. (4) The production-run math is new: ~71,000 trucks built over ~3.5 years is less than seven months of one Texas line's rated annual capacity.

**Killed in research (duplicates, do not revive):** Hyundai ACU recall 26V728 (#1400); GM Lyriq brake recall 26V717 (#1387, #1421 duplicate); GM L87 EA26005 / Nov 13 deadline (#1025, #1344, #1367); Lincoln Nautilus anti-rust oil neutral shift (#1321, #1356); Ford F-150 tailgate cable 26V689 (#1297); Dodge Durango tail light 26V701 (#1329); GM Express/Savana steering 26V718 (#1391); IIHS Oct 31 moderate-overlap wave, same six vehicles as #1244 and #1408 (RAV4 Acceptable, RAV4 PHEV Marginal, Audi Q3 Poor, Trailblazer Poor, Kicks Good, Jetta Good); IIHS whiplash test Jan 2026 (whiplash-test-tsp-blind-spot); GHSA pedestrian 2025 data (#1374); 2025 traffic deaths early estimate (already published on site); FARS Land Cruiser (#1118), Solara (#1013), Tracker (#908) sober-killer angles; Tesla FSD rolling-stop recall (2022, stale); Tesla Model 3/Y battery contactor recall (#1397).

## Verified facts (3+ primary sources)

1. **The wind-down (Reuters, November 6, 2026):** Tesla will wind down Cybertruck production at Gigafactory Texas around mid-2027, CEO Elon Musk said Friday, November 6, in an X post, to make room for increased Cybercab production. First Cybertrucks were delivered November 2023. Austin is the only known Tesla plant equipped to build the truck's specialized components; no replacement site announced, no date for the last truck off the line, and Musk's wording leaves a production move theoretically possible but unannounced. Sources: Reuters via 985theriver.com, newscubby.com, yoopya.com (all November 6-7, 2026).
2. **The sales collapse (Kelley Blue Book / Cox Automotive estimates, via Reuters):** U.S. Cybertruck sales were 38,965 in 2024 and 20,237 in 2025, down 48.1%. Tesla does not report Cybertruck deliveries separately; these are outside estimates. Sources: polandinsight.com, workersrights.news (November 7, 2026).
3. **The production total (Reuters November 6 assessment, via Road Ethos):** close to 71,000 Cybertrucks built in total. 11 federal safety recalls since the truck went on sale in late 2023. Source: roadethos.com, "The Cybertruck Ends With 11 Recalls Against 71,000 Trucks Built" (November 7, 2026).
4. **The 11 campaigns (NHTSA recalls API, api.nhtsa.gov, queried November 7, 2026 — primary source):** the API returns exactly 11 campaigns for the 2024 Cybertruck, matching Reuters' count. Full list with report-received dates:
   - 24V051000, Jan 30, 2024 — warning-light font size too small (FMVSS 105/135), OTA fix.
   - 24V276000, Apr 17, 2024 — accelerator pedal pad dislodges, trapped by interior trim, unintended acceleration; 3,878 vehicles; physical repair.
   - 24V456000, Jun 19, 2024 — wiper motor controller fails from excessive current; 11,688 vehicles; physical repair.
   - 24V457000, Jun 19, 2024 — trunk bed trim sail applique improperly adhered, can detach; 11,383 vehicles; physical repair.
   - 24V718000, Sep 26, 2024 — rearview camera image delayed after shifting into reverse (FMVSS 111), OTA fix.
   - 24V832000, Nov 5, 2024 — drive inverter fault, loss of drive power to the wheels; physical repair.
   - 24V935000, Dec 17, 2024 — TPMS warning light may not stay illuminated between drive cycles (FMVSS 138), OTA fix.
   - 25V170000, Mar 19, 2025 — light bar (cant rail) can delaminate and detach; 46,096 vehicles; physical repair.
   - 25V699000, Oct 15, 2025 — front parking lights too bright, exceed maximum output (FMVSS 108), OTA fix.
   - 25V735000, Oct 28, 2025 — service-installed off-road light bar accessory, wrong primer, can loosen and detach; physical repair.
   - 26V255000, Apr 22, 2026 — brake rotor stud holes may crack, stud separates from wheel hub (18-inch steel wheels); physical repair.
5. **Open investigations and complaints (federal records, via Road Ethos):** three open NHTSA investigations alongside the 11 closed campaigns, and close to 200 owner-submitted complaints (unverified reports, not confirmed defects).
6. **The lab-vs-field paradox (this site's own prior article):** the Cybertruck earned IIHS Top Safety Pick+ in March 2026, the highest U.S. safety designation, with Good ratings across all crashworthiness categories. The only other large pickup with any 2026 IIHS award was the Toyota Tundra (Top Safety Pick). Source: drafts/cybertruck-safest-pickup-paradox-research.md.
7. **Capacity context (Tesla Q3 2026 filing, via newscubby.com):** Gigafactory Texas lists annual installed capacity of more than 125,000 vehicles on each of its two lines.

## Computations (original to this piece)

- **Recall density:** 71,000 trucks built / 11 campaigns = **one recall campaign per 6,455 trucks built** (15.5 campaigns per 100,000 built).
- **First-year concentration:** 7 of 11 campaigns filed in 2024 = **63.6%** of the truck's entire recall history within ~12 months of first deliveries.
- **Filing cadence:** first campaign Jan 30, 2024 to last Apr 22, 2026 = 27 months / 11 campaigns = **one recall roughly every 2.5 months**.
- **Largest single campaign:** 46,096 (light bar, 25V170000) / 71,000 = **64.9% of every Cybertruck ever built** touched by one recall.
- **Pedal recall share:** 3,878 / 71,000 = **5.5%** of production (early-build trucks).
- **Wiper + trim overlap:** 11,688 + 11,383 = 23,071 recall mentions across two June 19, 2024 campaigns filed the same day; with substantial overlap, a typical early owner was covered by several campaigns.
- **Detachment campaigns:** 3 of 11 (24V457 trim, 25V170 light bar, 25V735 off-road light bar) involve parts coming off the truck = **27.3%**.
- **Software vs hardware:** 4 of 11 fixed by over-the-air update (24V051, 24V718, 24V935, 25V699); 7 of 11 required physical service.
- **Capacity utilization:** 71,000 total built / 125,000 rated annual capacity per Texas line = **0.57 years, about 6.8 months** of one line's rated output, for the truck's entire lifetime production run.
- **Sales decline:** 20,237 / 38,965 = 51.9% retained, a **48.1% year-over-year drop** (2025 vs 2024).

## Limitations

- The ~71,000 production figure comes from Reuters' November 6 assessment as reported by Road Ethos, not from a Tesla disclosure; Tesla does not publish Cybertruck-specific production or delivery figures. The per-vehicle ratios inherit that estimate's uncertainty.
- Recall campaigns are not recalls of equal severity: a font-size compliance fix and a pedal that sticks open both count as one campaign. The density ratio is a volume measure, not a severity measure, and the article must say so.
- Campaign populations overlap heavily (same trucks appear in multiple campaigns), so summing affected-vehicle counts across campaigns double-counts trucks. Only the light-bar 64.9% figure is a share of total production; other per-campaign shares use the same denominator and must be labeled as such.
- Three open investigations and ~200 complaints are unverified; they are not findings of defect.
- The wind-down is announced for Gigafactory Texas with an approximate mid-2027 date; Tesla has not confirmed a global discontinuation or a final build date.

## Strongest counterargument

Recall volume is a poor proxy for quality, and Tesla's defenders have a real point. A manufacturer that finds problems and files aggressively will show more campaigns than one that slow-walks defects into the next model year, which is exactly the argument Ford has made while leading the industry in filings. Four of the eleven were fixed overnight by software, which no legacy truck can do. All eleven have remedies available, which is not true across the industry. And the lab result stands: this truck earned Top Safety Pick+ while the F-150, Silverado, and Ram earned nothing in 2026. The recall record proves the truck arrived unfinished, not that it is unsafe in a crash. Both facts are true at once, and the article must hold both.

## Actionable takeaway

If you own a Cybertruck: check your VIN at nhtsa.gov/recalls rather than assuming the over-the-air updates covered everything, because seven of the eleven campaigns require physical work (pedal, wiper motor, trim, inverter, light bar, wheel studs). The production wind-down does not change Tesla's obligation to perform outstanding remedies free of charge. The unanswered question for 71,000 owners is parts and service longevity for stainless panels, steer-by-wire, and rear-wheel steering that no other production pickup uses, so keep every recall notice and service record.

## References (for the article)

1. Reuters (via 985 The River), "Tesla to pull the plug on Cybertruck after years of poor sales," November 6, 2026. https://985theriver.com/2026/11/06/tesla-to-wind-down-cybertruck-production-at-texas-gigafactory-next-year-musk-says/
2. Road Ethos, "The Cybertruck Ends With 11 Recalls Against 71,000 Trucks Built," November 7, 2026. https://roadethos.com/news/the-cybertruck-ends-with-11-recalls-against-71000-trucks-built
3. NHTSA recalls API, Tesla Cybertruck 2024, 11 campaigns (24V051000 through 26V255000), queried November 7, 2026. https://api.nhtsa.gov/recalls/recallsByVehicle?make=tesla&model=cybertruck&modelYear=2024
4. NHTSA recalls database. https://www.nhtsa.gov/recalls
5. IIHS ratings. https://www.iihs.org/ratings
6. NHTSA FARS. https://www.nhtsa.gov/research-data/fatality-analysis-reporting-system-fars

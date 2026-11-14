# Research: #1497 — Genesis Recalled 3 Times in 2026. Not Once for Something Only Genesis Did.

**Number:** 1497
**Slug:** 1497-genesis-recall-census-3-zero-standalone-defects
**Journalist:** Mia Crumplezone (Safety Engineering Editor — rotation: Rex filed #1496, Axle filed #1493–#1495; Mia last filed a census at #1488, Mercedes)
**Kicker:** By The Numbers
**Date:** November 13, 2026
**Target ship_date:** 2028-08-18 (1 day after #1496's 2028-08-17)

## Angle (1-2 sentences)

The recall-census series reaches its nineteenth brand, and Genesis counts **3 campaigns** filed in 2026 touching a 2026-model-year vehicle. The count is not the story. The story is that **all three campaigns are shared defects**: the blank-dash software bug is the third parallel filing of one HD-radio defect (Kia 26V046, Hyundai 26V047, Genesis 26V019), the seat belt anchor recall is one campaign split across four Hyundai Motor Group nameplates, and the fuel-pipe leak has a Kia Carnival twin filed the next day. Genesis filed zero recalls in 2026 for a defect that belonged to Genesis alone. The luxury brand's recall year is a group photocopy.

## Kill test

- **Genuinely newsworthy?** Yes. First company-level census of Genesis's 2026 recalls on this site. The #1477 Hyundai/Kia census explicitly flagged the gap: "Genesis is excluded (separate make in the API) even though it shares the cluster defect (83,877 vehicles) and the group; including Genesis would add at least 1 campaign and 83,877 vehicles." This article closes that gap and finds two more shared defects behind it. The news is structural, not numerical: a brand that sells itself as a standalone luxury marque, with 84 standalone retail facilities as of February 2026, has no standalone defects. Every 2026 Genesis recall traces to a part, a supplier, or a software stack shared with Hyundai or Kia.
- **Novel on site?** Yes. No prior Genesis company-level census exists. Individual Genesis recalls were covered as news (the G80 park-outside fire census at #1224, the 26V019 dash-blank story in February coverage), but never counted, never placed in the nineteen-brand table, and never split into campaign-total vs. Genesis-only populations. The original contribution is the corrected 3 census below (NHTSA recalls API, Nov 13, 2026, 73 queries plus MY2025 controls), the zero-standalone-defects thesis with all three shared-defect lineages traced, the Genesis-only population of 184,347 vs. the campaign-total 472,765, and the G70 clean-sheet finding (the brand's best-selling 2026 nameplate had zero campaigns while the flagship G90 appears in two of three).
- **Original contribution:** the corrected 3 census; the 73-query API failure matrix (68 HTTP 400, 5 HTTP 200) with MY2025 controls; the shared-defect lineage for all three campaigns (26V019/26V046/26V047 cluster trio, 26V218 four-nameplate anchor campaign, 26V229/26V232 fuel-pipe twins); the Genesis-only vs. campaign-total population split (184,347 vs. 472,765); the G70 finding (zero campaigns, 10,245 US sales Jan–Oct 2026, up 17.8%, the brand's best seller); the 26V019 per-model split (GV80 47,853 + GV70 29,649 + 6,375 across G80/Electrified G80/GV60/Electrified GV70); and the nineteen-brand table (total now 175).

## Primary sources (3+)

1. **NHTSA recalls API** (api.nhtsa.gov/recalls/recallsByVehicle) — census conducted Nov 13, 2026. Method: VPIC canonical 2026 model list for make "genesis" (14 names, including 5 trailer manufacturers sharing the make name: Envy, Genesis Lowering Technology, Genesis Supreme, Genesis Trailers Inc., Supreme, Tahoe, Vortex — all returned 400, harmless), queried make+model+modelYear=2026 for every canonical name plus Hybrid / Plug-In Hybrid / Electric / Recharge suffix variants plus targeted trims (pass 1: 73 queries, 68 HTTP 400, 5 HTTP 200, 3 campaigns). Kept campaigns with NHTSA campaign number 26Vxxx and ReportReceivedDate in calendar 2026; deduped by campaign number. **Result: 3 campaigns.** Runner at drafts/1497-census-run.py; raw results at drafts/1497-genesis-recall-census-raw.json. https://www.nhtsa.gov/recalls
2. **API 400 semantics, documented:** the recalls API returns HTTP 400 when no recall records exist at all for a model-year, and 200 with rows when records exist. Proven by the MY2025 controls: the same spellings return 200 with real campaigns for MY2025 (g80 returns 26V019 + 26V229; gv70 returns 25V105 + 26V229; g90 returns 25V474, 25V833, 26V218, 26V229). The G70's MY2026 400 is confirmed by the model record itself: no 2026 G70 campaign exists in any filing, and the G70 appears in no 2026 Part 573 report.
3. **26V019 (instrument cluster) — NHTSA Part 573 report RCLRPT-26V019-3487 + owner notice RCONL-26V019-0483 + CarWhere + MotorSafety:** filed Jan 16, 2026; **83,877** vehicles, all Genesis (2025–2026 G80, 2025–2026 GV80, 2026 Electrified G80, 2026 GV60, 2026 GV70, 2026 Electrified GV70). Per-model split from the Part 573: GV80 **47,853**, GV70 **29,649**, the remaining four nameplates **6,375** combined. Defect: software logic issue involving HD radio memory storage causes the instrument panel cluster and AVN display to intermittently reboot, blanking the speedometer, fuel gauge, and on-screen notifications; fails FMVSS 101. **237 reports** Sep 26, 2024–Jan 2, 2026. No crashes, fires, or injuries. Production fix implemented Nov 26, 2025. Remedy: AVN software update, over the air or by dealer, free. Owners told to disable HD radio until fixed. Letters Feb 17, 2026. Genesis number 031G. This is the third parallel filing of the January cluster defect: Kia 26V046 and Hyundai 26V047 cover the same HD-radio memory bug on their own nameplates. https://static.nhtsa.gov/odi/rcl/2026/RCLRPT-26V019-3487.pdf
4. **26V218 (seat belt anchorage) — NHTSA Part 573 report RCLRPT-26V218-6077 + Reuters (Apr 10, 2026) + Consumer Reports:** filed Apr 6, 2026; **294,128** vehicles across four nameplates, of which the Genesis slice is **5,710** G90s (2023–2026, built Apr 21, 2022–Mar 4, 2026), **1.9% of the campaign**. The other 288,418 are Hyundai Ioniq 6 (35,149), Santa Fe, and Santa Fe Hybrid. Defect: the front seat belt snap-on anchor can be damaged when the belt is removed for routine repairs or maintenance, so the anchor may not be sufficiently attached to the seat frame and can detach in a crash. Trigger: NHTSA shared owner questionnaires (VOQs) alleging detached anchors in rear-end collisions in October 2025; Hyundai confirmed in January 2026 that forceful removal reproduces the damage. **6 reports** in the US. No crashes, injuries, or fatalities. Redesigned anchor in production by March 2026. Remedy: inspect, reinforce, or replace the anchor, free. Letters June 5, 2026. Hyundai number 298, Genesis number 032G. https://www.reuters.com/legal/litigation/hyundai-recall-over-294000-us-vehicles-over-seat-belt-anchor-defect-2026-04-10/
5. **26V229 (fuel pipe leak) — NHTSA acknowledgment + Autoblog (Apr 19, 2026) + USA Today (Apr 16, 2026) + AutoEvolution:** filed Apr 10, 2026; **94,760** vehicles, all Genesis (2022–2026 GV70, 2023–2025 G90, 2021–2025 G80, 2021–2025 GV80; production Jul 25, 2020–Jan 29, 2026). Defect: insufficient torque stabilizer applied during assembly of the crossover fuel pipe (Usui International Korea, part 35307-3NTA0, 3.5L V6 twin-turbo), so the pipe connection to the fuel rail can loosen and leak fuel. **129 reports** Oct 29, 2021–Jan 27, 2026, starting with 2 claims of fuel odor and visible leaks in July 2024. No fires or injuries. Twin filing: Kia Carnival **26V232** (Apr 11, 2026), **141,032** Carnivals, same part, same installation fault, same supplier. Remedy: inspect and replace the fuel pipe, free. Letters scheduled June 8, 2026. Genesis number 033G. https://www.autoblog.com/news/kia-and-genesis-recall-235000-vehicles-over-fuel-leak-risk-linked-to-one-part
6. **Outside the census — 25V809 (side curtain air bags):** filed Nov 21, 2025, so outside the 2026 census; covers 2026 Genesis GV70 (plus 2025 Tucson, 2025–2026 Santa Cruz, Santa Fe, Santa Fe Hybrid). A 2025 filing touching a 2026 Genesis vehicle, the same shape as the Rivian outside-census pair in #1496.
7. **Outside the census — 25V833 (G90 Highway Drive Assist radar):** filed Dec 2, 2025; 2023–2026 Genesis G90. The HDA corner radar may falsely detect an object and brake. Also a 2025 filing touching 2026 vehicles.
8. **Outside the census — 25V105 (GV70 instrument cluster, FMVSS 101):** filed 2025; 2025 GV70 and 2023–2025 Electrified GV70. The same HD-radio cluster defect family as 26V019, one filing earlier: the defect was already recalled on the 2025 GV70 before Genesis filed the 2026 expansion. 26V019 is, in that sense, a recall of a recall's unfinished business.
9. **Denominators — Genesis US sales (Hyundai Motor America / The Investor, Jul 3, 2026; CarBuzz, Nov 7, 2026):** **82,331** US sales in 2025 (+10% YoY); **39,088** in H1 2026 (+4.6–5%). GV70 is the volume leader: 17,599 in H1 2026, 30,255 Jan–Oct 2026 (+7.3%). G70: 10,245 Jan–Oct 2026 (+17.8%), the brand's best-selling sedan. G80: 2,943 Jan–Oct 2026 (-3.7%). G90: 863 Jan–Sep 2026. https://www.theinvestor.co.kr/article/10797777
10. **Group context — Hyundai Motor America 2026 cumulative (NHTSA data portal via EuropeSays, Oct 30, 2026):** 22 recalls filed Jan 1–Oct 30, 2026, **1,924,151** units (duplicates across campaigns not removed). The three largest (side curtain air bags, forward collision-avoidance assist, seat belt anchorage) account for ~67% of the total. Genesis's 3 campaigns sit inside that 22.

## The numbers

### Headline census (2026-model-year vehicles, campaigns filed Jan 1–Nov 13, 2026)

| Campaign | Filed | Vehicle(s) | Defect | Campaign population | Genesis slice |
|---|---|---|---|---|---|
| 26V019 | Jan 16, 2026 | G80/GV80 2025–26, Electrified G80, GV60, GV70, Electrified GV70 2026 | HD-radio memory bug blanks instrument cluster (FMVSS 101) | 83,877 | 83,877 (100%) |
| 26V218 | Apr 6, 2026 | G90 2023–26 + Ioniq 6, Santa Fe, Santa Fe Hybrid | Seat belt snap-on anchor detaches after service | 294,128 | 5,710 (1.9%) |
| 26V229 | Apr 10, 2026 | GV70 2022–26, G90 2023–25, G80/GV80 2021–25 | Crossover fuel pipe leaks (torque stabilizer) | 94,760 | 94,760 (100%) |
| **Total** | | | | **472,765** | **184,347** |

The campaign-total population (472,765) is dominated by Hyundais: 288,418 of the 294,128 in 26V218 wear a Hyundai badge. The Genesis-only population is **184,347** — more than two years of Genesis US sales (82,331 in 2025), because the recalls reach back to model year 2021. All three: zero crashes, zero injuries, zero fatalities reported. Two of three are software or fastener problems, not broken parts.

### Per-model counts (2026 model year)

| Model | Campaigns | API evidence |
|---|---|---|
| G80 | 1 | 200 — 26V019 |
| G90 | 1 | 200 — 26V218 |
| GV60 | 1 | 200 — 26V019 |
| GV70 | 2 | 200 — 26V019, 26V229 |
| GV80 | 1 | 200 — 26V019 |
| G70 | 0 | 400 — no recall records exist for MY2026 |
| Electrified G80 / Electrified GV70 | 1 each | covered inside 26V019 via their base-model queries |

### Outside the census (filed in 2025, touches 2026 vehicles)

| Campaign | Filed | Model(s) | Defect |
|---|---|---|---|
| 25V809 | Nov 21, 2025 | 2026 GV70 (+ Tucson, Santa Cruz, Santa Fe) | Side curtain air bags |
| 25V833 | Dec 2, 2025 | 2023–2026 G90 | HDA corner radar false detection |
| 25V105 | 2025 | 2025 GV70 / Electrified GV70 | Instrument cluster blank (same defect family as 26V019) |

### The shared-defect lineage (all three campaigns)

| Genesis campaign | Hyundai/Kia parallel | Shared root |
|---|---|---|
| 26V019 cluster blank | Kia 26V046 + Hyundai 26V047 (Jan 2026) | HD-radio memory storage software logic |
| 26V218 seat belt anchor | Same campaign: Ioniq 6, Santa Fe, Santa Fe Hybrid | Snap-on anchor part + service-removal damage |
| 26V229 fuel pipe leak | Kia 26V232 Carnival, 141,032 (Apr 11, 2026) | Usui crossover fuel pipe + torque stabilizer |

### Nineteen-brand corrected table (same method family)

| Group | 2026 campaigns |
|---|---|
| Ford (+ Lincoln 10, company 44) | **41** |
| Stellantis | 27 |
| GM | 15 |
| Toyota | 15 |
| Hyundai | 15 |
| Volvo (cars 2 + trucks 10) | 12 |
| Mercedes | 8 |
| Nissan (+ Infiniti, company 7) | 7 |
| BMW | 7 |
| Subaru | 5 |
| Honda | 4 |
| Kia | 4 |
| Volkswagen | 4 |
| Tesla | 4 |
| **Genesis** | **3** |
| Rivian | 3 |
| Audi | 1 |
| Porsche | 0 |
| Mazda | 0 |

Nineteen-group total: **175 campaigns**. Genesis adds 3 and lands fifteenth, tied with Rivian, between Tesla's 4 and Audi's 1. Hyundai Motor Group as a whole (Hyundai 15 + Kia 4 + Genesis 3) filed 22 campaigns — which matches the NHTSA data-portal count of 22 Hyundai Motor America filings Jan–Oct 2026, a useful cross-check that the three brand censuses together account for the group's whole filing year.

## Original contribution (Mia's math and synthesis)

1. **Zero standalone defects.** Every Genesis recall in 2026 is a group recall. The cluster bug was filed three times under three badges. The seat belt anchor was filed once under four badges. The fuel pipe was filed twice under two badges. A brand that markets separation from Hyundai — standalone stores, a standalone name, a standalone design language — has no recall that belongs to it alone. That is not a criticism of the cars. It is a fact about the supply chain, and it is the opposite of the Rivian pattern in #1496, where all three campaigns were Rivian's own.
2. **The population split matters more than the count.** Count the campaign totals and Genesis had a 472,765-vehicle year, which would be the loudest in the census by population. Count only Genesis vehicles and it is 184,347, still more than two years of US sales. The 288,418-vehicle gap between the two numbers is Hyundais wearing a Genesis campaign number. Any ranking that uses campaign populations without the split would credit Genesis with a quarter-million Hyundais. The article states both numbers and leads with the Genesis-only one.
3. **The G70 is the clean sheet, and it is the best seller.** The G70 had zero 2026 campaigns. It is also the Genesis that Americans actually buy: 10,245 sold Jan–Oct 2026, up 17.8%, the brand's best-selling sedan and second only to the GV70 overall. The flagship G90, by contrast, appears in two of the three campaigns (26V218, 26V229) while selling 863 cars in nine months. The recall burden falls on the cars almost nobody buys, and the car everybody buys is untouched. That is the reverse of the usual luxury pattern, where the volume car carries the volume recall.
4. **The cluster bug was recalled twice.** 25V105 recalled the 2025 GV70 for the same FMVSS 101 cluster failure in 2025. 26V019 recalled the 2026 models for the same failure in January 2026. The defect was not discovered twice; the first recall's population stopped at model year 2025, and the 2026 cars carried the same software into the new year. The 237 reports behind 26V019 run from September 2024 to January 2026, which means the bug was being reported for sixteen months across two filings.
5. **The seat belt anchor breaks during the fix, not the crash.** 26V218's defect is not a part that fails in use. It is a snap-on anchor that gets damaged when a technician removes the belt for routine service, then fails to hold in a crash. NHTSA found it through owner questionnaires about anchors detached in rear-end collisions, and Hyundai confirmed that forceful removal reproduces the damage. The safety device is fine until someone services it. The remedy is a redesigned anchor and an inspection, which means the recall exists because the service procedure and the part were designed without each other in mind.
6. **The fuel pipe is a fastener story, not a fuel story.** 26V229's crossover pipe is not defective. The torque stabilizer applied during assembly was insufficient, so the fasteners loosen and the pipe leaks. Kia's Carnival got the same pipe, the same installer error, and its own campaign the next day (26V232, 141,032 vehicles). Two brands, one torque wrench, 235,792 vehicles. The 129 Genesis reports stretch back to October 2021, which means the assembly error ran for more than four years before the filing.

## Limitations

- The census counts NHTSA campaign filings, not defects fixed, not vehicles repaired, and not crashes caused. A campaign with a 100% population (26V019's software is in every listed car) and a campaign whose Genesis slice is 5,710 cars both count as one, and the population figures are upper bounds, not counts of broken vehicles.
- The API's 400-means-no-records semantics is validated by controls, but a model spelling the API does not recognize returns 400 too. The VPIC canonical list plus suffix variants plus targeted trims (73 queries) is the mitigation; a 2026 Genesis model sold in the US under a name VPIC does not list would be missed. No such model is known. The G70's 400 is corroborated by the absence of the G70 from every 2026 Part 573 report.
- 26V218's population includes 288,418 Hyundais. The census counts the campaign once because it touches 2026 Genesis vehicles; the Genesis slice (5,710 G90s) is stated alongside the campaign total so the reader can see both. A reader who wants the strictly-Genesis population should use 184,347, not 472,765.
- Populations are NHTSA "potential number of units affected" figures from Part 573 reports and acknowledgment letters, not counts of vehicles with the defect. Where the Part 573 gives a defect estimate, it is stated; where it does not, the population is an upper bound.
- Sales figures are manufacturer-reported US retail sales (Hyundai Motor America via The Investor and CarBuzz; GoodCarBadCar model-level series). Genesis does not break out G70/G80/G90/GV60/GV70/GV80 sales in its official releases; model-level figures come from the GoodCarBadCar series, which compiles manufacturer data.
- The Hyundai Motor Group cumulative (22 recalls, 1,924,151 units) comes from a Korean press compilation of the NHTSA data portal and counts duplicates across campaigns; it is used as a cross-check, not as a census result.

## Strongest counterargument

The honest reading is that Genesis had a quiet, well-managed year. Three campaigns is tied for the second-fewest of any brand in the series that filed anything, the biggest campaign by Genesis vehicles (26V229, 94,760) is a fastener error with zero fires, the cluster bug was fixed with a software update that owners could get over the air, the seat belt anchor issue was caught by six reports with zero injuries, and zero crashes or injuries attach to any of the three campaigns. The shared-defect thesis cuts both ways: if every Genesis defect is a Hyundai defect, then Genesis is not hiding unique problems, it is inheriting group problems at group scale, and the group's total filing count (22) is the right denominator for judging the engineering, not the brand's 3. The G70's clean sheet is also the least surprising fact in the file: the G70 is an older platform on its second generation, and older platforms have had their defects found already. The census counts filings, and filings are what a regulator sees, but by any danger ranking Genesis had one of the safest years in the series. The article says so.

## Actionable takeaways

- **If you own a 2025–2026 G80 or GV80, or a 2026 GV60, GV70, or Electrified G80/GV70:** check your VIN at nhtsa.gov/recalls for 26V019 (blank instrument cluster). The fix is an AVN software update, available over the air or at the dealer. Until it is done, turn off HD radio: the bug lives in the HD-radio memory storage, and Genesis's own interim advice is to disable it.
- **If you own a 2023–2026 G90:** check for 26V218 (seat belt anchor) and 26V229 (fuel pipe). The G90 is the only Genesis in two of the three campaigns, and it is also covered by the 2025 HDA radar recall 25V833. Three VIN lookups, one car.
- **If you own a 2021–2026 GV70, G80, G90, or GV80 with the 3.5L twin-turbo V6:** check for 26V229 (fuel leak). Sniff for fuel odor after parking; the first reports were owners noticing a smell, not a warning light. A fuel leak near a hot turbocharger is a fire risk, and the fix is a replacement pipe, free.
- **If your Genesis had seat belt work done at any point:** the 26V218 anchor can be damaged by removal and refitting. If the belt was removed for service and the car is in the recall population, get the anchor inspected even if no warning light is on: the damage is invisible until the belt is loaded in a crash.
- **If you are shopping for a used Genesis:** the G70 is the only 2026 Genesis with zero recalls, and it is the cheapest Genesis. The GV70 is the volume car and carries two campaigns. Check any 2021–2026 Genesis VIN at nhtsa.gov/recalls before signing: 184,347 Genesis vehicles carry at least one of these three recalls, and the fixes are all free.

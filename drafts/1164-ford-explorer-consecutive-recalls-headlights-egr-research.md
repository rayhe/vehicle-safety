# Research: Ford Filed Two Recalls One Number Apart. One Blinds You, the Other Stalls.

**Article #1164** | Journalist: Axle McScatter (Data Visualization Editor) | Kicker: By The Numbers
Slug: `1164-ford-explorer-consecutive-recalls-headlights-egr`

## Story in one line
Ford filed two safety recalls one campaign number apart (26V121000 and 26V122000), reported to NHTSA on the same day: one where brand-new Explorers' adaptive headlights swivel the wrong way and blind oncoming drivers (fixed over the air), and one where EGR valves across nine Ford/Lincoln models can fail and kill drive power (needs a dealer). Plus a fresh NHTSA API census: 14 recalls touch the 2026 Explorer, and exactly one is fixable without visiting a dealer.

## Kill test
- **Newsworthy?** Yes. This week's press revived the pair as an 83,000-vehicle recall story (newsinsights Oct 14; libertyreports Oct 13); both campaigns verified live in NHTSA's database today via API. Autoblog (Oct 13) reports Ford at 75 recalls in 2026 and averaging 174 days to fix them, giving the pair fresh context.
- **Novel angle?** Yes. Queue overlap check: #815 covered a Ford-wide 2026-MY recall census (Sept data), #1037 covered a different consecutive-number pair (26V582/26V583 Mach-E BECM), #764 covered OTA fixes generally. Nobody has done a per-model census of the 2026 Explorer, and nobody has paired the two consecutive campaigns' opposite natures: software bug fixed by download vs. hardware defect needing a lift.
- **Data legs?** Yes. NHTSA recalls API (three pulls, today), Autoblog's Ford fix-time reporting.

## Key facts (with attribution)

1. **26V121000** (Ford 26C12): certain 2025-2026 Ford Explorers. The Dynamic Bending Light (DBL) system software may cause the passenger-side headlight to turn in the wrong direction when driving through curves. Fails FMVSS 108. Consequence per NHTSA: "A headlight that turns incorrectly can result in increased glare to other road users, increasing the risk of a crash." Reported to NHTSA **03/03/2026**; owner letters mailed March 23, 2026; VINs searchable since March 5, 2026. Remedy: dealer or **over-the-air software update**. (NHTSA recalls API, verified 2026-10-14)
2. **26V122000**: certain 2025 Ranger, Lincoln Nautilus, Mustang, Maverick, Explorer, Escape, Lincoln Corsair, Bronco Sport, and Bronco vehicles. The exhaust gas recirculation (EGR) valve may fail, resulting in an unexpected loss of drive power. Consequence: "An unexpected loss of drive power increases the risk of a crash." Reported to NHTSA **03/03/2026**. (NHTSA recalls API, verified 2026-10-14)
3. **Population counts** (press, Oct 13-14, 2026): 35,772 Explorer SUVs for the headlight software; 47,804 vehicles across the nine models for the EGR valve; 83,576 total. (newsinsights.org, Oct 14, 2026; libertyreports.org, Oct 13, 2026)
4. **Fresh census, computed today**: 14 distinct NHTSA recall campaigns touch the 2026 Explorer (NHTSA recallsByVehicle API, 2026-10-14). Of those 14, exactly **one** (26V121000) lists an over-the-air remedy — the other 13 require a dealer visit. List: 25V730000 (windshield air bubbles), 25V828000 (cylinder head ball plugs), 25V687000 (trailer hitch bolts), 26V024000 (windshield bonding), 26V121000 (DBL headlights, OTA), 26V159000 (seat belt anchor bolts), 26V202000 (HVAC defrost), 26V205000 (piston circlips), 26V343000 (engine failure), 26V451000 (easy-entry seats), 26V470000 (unoccupied seat recline), 26V532000 (connecting rod bearings), 26V548000 (piston dome), 26V581000 (passenger airbag vent).
5. **Ford's fix-time context** (Autoblog, Oct 13, 2026): Ford is at 75 recalls in 2026 (most of any automaker) after a record 153 in 2025; Hearn data for 2021-2025 puts Ford's average remedy time at 174 days; 16 Ford recalls were fixed via OTA between Jan 2025 and Jun 2026. NHTSA fined Ford $165M in Nov 2024 for slow recall handling (second-largest ever after Takata).
6. **FARS context**: Ford Explorer — check fars_output.js; prior site stories used Explorer death-rate data (#1070). The census here is recall-focused; FARS optional.

## Primary sources (3+)
1. **NHTSA recalls API** — campaign 26V121000 (Dynamic Bending Light, Ford 26C12), live pull 2026-10-14. Endpoint: api.nhtsa.gov/recalls/recallsByVehicle?make=ford&model=explorer&modelYear=2026
2. **NHTSA recalls API** — campaign 26V122000 (EGR valve), live pull 2026-10-14. Endpoint: api.nhtsa.gov/recalls/recallsByVehicle?make=ford&model=ranger&modelYear=2025
3. **NHTSA recalls API** — 2026 Explorer census (14 campaigns), live pull 2026-10-14.
4. **Autoblog, Oct 13, 2026** — "Ford Is Recalling Cars Faster Than It Can Fix Them": 75 recalls in 2026, 174-day average fix time (Hearn 2021-2025), 16 OTA recalls Jan 2025-Jun 2026. https://www.autoblog.com/news/ford-is-recalling-cars-faster-than-it-can-fix-them

## Original contribution (required)
1. **The consecutive-number pair**: 26V121 and 26V122, same filing day, opposite failure eras — a software defect remedied by download vs. a mechanical defect needing a wrench. The Explorer is the only model in both recalls.
2. **The 1-of-14 census**: of the 14 NHTSA campaigns touching the 2026 Explorer, only one can be fixed over the air. Ford's "software-defined vehicle" story, as measured on its best-selling three-row SUV, is 1 for 14.
3. **The timing irony**: Ford filed the software recall it can fix instantly the same day as the hardware recall that takes months — the pair is a controlled experiment in why recall counts understate the pain.

## Counterargument (at full strength)
OTA updates are genuinely faster when they work — 26V121 owners likely got their fix in days, not Ford's 174-day average. And recall volume partly reflects Ford filing proactively under NHTSA oversight after the $165M fine, which is arguably the system working: more recalls can mean faster reporting, not worse cars. The 14-campaign count also double-counts shared-platform defects and includes compliance items (placards) alongside real hazards.

## Limitations
- Population counts (35,772 / 47,804) come from secondary press summaries of the Part 573 reports, not the Part 573 PDFs themselves; treat as reported, not re-derived.
- The OTA-remedy count comes from API Remedy-field text matching ("over-the-air"/"OTA"); some campaigns may allow OTA without saying so in the API text.
- FARS death data for the 2026 Explorer is too thin to compute rates; this story is recall-focused by design.

## Actionable takeaway
- Own a 2025-2026 Explorer? Check your VIN at nhtsa.gov/recalls. For 26V121 (headlights), accept the OTA update or book the dealer flash — do not ignore it; mis-aimed beams blind oncoming drivers and fail FMVSS 108. For 26V122 (EGR), there is no download; schedule the dealer visit, and if the engine stumbles or loses power at speed, get to the shoulder.
- Shopping? Ask whether a recall's remedy is OTA or dealer-only — on the 2026 Explorer the ratio is 1 to 13.

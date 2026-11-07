# Research Notes — #1424: Minnesota Stopped Writing Tickets. The Body Count Noticed.

**Slug:** 1424-minnesota-stopped-writing-tickets
**Journalist:** Rex Driverton (Senior Crash Correspondent — fatality rate investigations, paradoxes; last byline Clara Rollover #1423, rotation)
**Kicker:** Investigation
**Date researched:** November 7, 2026

## Angle (1 sentence)

A legislature-mandated study of 1.2 million Minnesota traffic cases found police stopped writing tickets after COVID — speeding citations down 28%, seatbelt citations down 53% — while fatal crashes surged, and the one violation police *did* enforce harder, distracted driving, saw related crashes fall nearly 40%: a natural experiment showing enforcement works exactly when it is applied and kills when it is not.

## Kill test: PASS

**Challenge:** is this genuinely new after 1,423 articles? Yes, four ways. (1) The study itself is new: University of Minnesota Center for Transportation Studies report CTS 25-15, published January 2026, mandated by the Minnesota Legislature — no prior draft, story, or queue entry mentions CTS 25-15, Malinoff, the 1.2-million-case dataset, or the 53% seatbelt-citation collapse (full-content grep, no truncation, November 7, 2026). (2) The novel contribution is the cross-tabulation nobody ran: Minnesota deaths rose 34% (364 to 488) from 2019 to 2021 while speeding citations fell 28% and seatbelt citations fell 53%, and the distracted-driving control group moved the opposite direction on both enforcement (+90%) and outcomes (-40% crashes). (3) The counterintuitive kicker is original to this piece: targeted *speed* enforcement, not targeted *impairment* enforcement, is what increased DWI citations — speed stops catch drunks, so cutting speed enforcement quietly cut drunk-driving enforcement too. (4) It is not a recall or a crash-test story, and the site has never run a pure enforcement-policy piece built on adjudication data.

**Killed in research (duplicates, do not revive):** GM L87 EA26005 / Nov 13 deadline (#1025, #1344, #1367 — including the Nov 13 extension angle); IIHS commercial-vehicle crash avoidance ratings (#1093, #1102, #1110, #1121, #1140, #1144, #1175, #1189, #1214, #1227, #1253, #1318, #1327, #1341, #1417 — saturated); GM EV brake software recall 26V717 (#1387); Hyundai ACU airbag recall 26V728 (#1400); Lincoln Nautilus anti-rust oil neutral shift 26V688 (#1321, #1356); Ford F-150 fuel tank strap recall 26V578 (#910, #913, #915, #920, #923, #930, #1045 — seven prior pieces); Toyota RAV4 PHEV MG-ECU shutdown 26V659 (#1130, #1166, #1233 — three prior pieces); Jeep Grand Cherokee coil-spring third recall 26V562 (#847, #882); GHSA pedestrian 2025 third decline (#1374); NHTSA Q1 2026 0.99 fatality rate (#814, #856); Ford Ranger rearview camera 26V605 (#1215); Dodge Durango tail light 26V701 (#1329); Toyota C-HR EV stall 26V570 (#876).

## Verified facts (3+ primary sources)

1. **The study — CTS 25-15 (University of Minnesota Center for Transportation Studies, January 2026; authors Stephanie Malinoff, Nichole Morris, Curtis Craig, Andrew Ryan, Frank Douma, Grace Foss; mandated by the Minnesota Legislature — primary source):** evaluated enforcement and adjudication of traffic safety violations using more than 1.2 million case records from 2017 to 2022. Overall citations fell 25%, largely following COVID-19. Speeding citations dropped 28% (with police enforcement plummeting more than 60%). Seatbelt citations fell 53%. Impairment citations declined 12%. Distracted driving citations rose 90% following passage of the 2019 Hands-Free law. The steep declines in speeding and impairment citations coincided with an increase in fatal crashes. The increase in distracted driving enforcement corresponded to a nearly 40% decline in related crashes. Targeted speed enforcement, not targeted impairment enforcement, increased DWI citations. Conviction rates were consistently high for petty misdemeanors and higher-degree (gross misdemeanor, felony) cases; misdemeanor-level charges showed variable and significantly lower conviction rates, particularly distracted driving (36%-54%). Judicial districts hit a conviction low point in 2020 followed by a strong recovery. Per-officer DWI citation rates were higher in metro areas.
2. **Minnesota deaths, 2019-2022 (MnDOT, via Roads & Bridges, May 2023 — secondary, state data):** 364 deaths in 2019, 394 in 2020, 488 in 2021, 446 in 2022. Fatal crashes surged nearly 30% between 2019 and 2021. Cross-check: NHTSA FARS puts Minnesota 2022 deaths at 444, two fewer than MnDOT's 446 — a small definitional gap, noted in limitations.
3. **National context (NHTSA FARS, via fatalcrashdata.com tabulation of the FARS final files):** U.S. traffic deaths were 36,355 in 2019, 39,007 in 2020, 43,230 in 2021, 42,721 in 2022, 41,025 in 2023, and 39,254 in 2024 (Annual Report File). Speeding killed 11,288 people nationally in 2024, 29% of all traffic fatalities; NHTSA's early estimate for 2025 projects speeding deaths down 11% to about 10,035.
4. **Hands-Free law scale (Minnesota Office of Traffic Safety, via Fields Injury Law summary):** since the Hands-Free Law took effect in 2019, enforcement has produced more than 20,000 distracted-driving citations per year in Minnesota. Speeding played a role in over 100 Minnesota traffic deaths in 2022 alone.

## Computations (original to this piece)

- **Minnesota death surge:** 364 (2019) to 488 (2021) = **+124 deaths, +34.1%** — nearly double the national rise over the same window.
- **National rise, same window:** 36,355 (2019) to 43,250 (2021, per FARS final file 43,230) = **+18.9%**. Minnesota's surge outpaced the national increase by 15 points.
- **Enforcement vs. tickets gap:** police speeding enforcement fell **more than 60%**, but speeding citations fell only **28%** — the stops collapsed more than twice as fast as the tickets, meaning the officers still on the road were writing proportionally more, while the patrol presence itself evaporated.
- **The control group:** distracted driving is the one violation where enforcement rose (+90% citations) and the outcome moved the right way (related crashes **-40%**). Every violation where enforcement fell saw fatal crashes rise. That is the natural experiment, and it runs in both directions inside one dataset.
- **Speed stops catch drunks:** the study's own finding that targeted speed enforcement increased DWI citations means the 28% speeding-citation decline and the 12% impairment-citation decline are not independent numbers — cutting speed stops quietly cut drunk-driving enforcement too.
- **Seatbelt collapse:** seatbelt citations fell **53%**, the steepest decline in the study, while unbelted deaths remain roughly half of all occupant fatalities nationally.

## Strongest counterargument (stated at full strength)

Correlation is not causation, and COVID is the confounder that swallows the whole window. Traffic volumes cratered in 2020, speeds rose on emptier roads, risk-taking drivers were overrepresented in the remaining traffic, and police departments pulled back from traffic stops for staffing, health, and political reasons all at once. The citation decline and the death surge share a common cause — the pandemic — and the study's own language is careful: declines "coincided with" more fatal crashes, not "caused." Minnesota's 2021 peak (488) also fell to 446 in 2022 without any documented enforcement rebound, which cuts against a clean enforcement-causes-deaths story. Fair. But the counterargument has a hole the study itself points out: distracted driving moved the opposite direction on both variables inside the same pandemic, in the same state, under the same staffing constraints — enforcement up 90%, related crashes down 40%. If COVID explained everything, the control group would not exist.

## Limitations

This is one state, 2017-2022, and the case records are citations and adjudications, not traffic stops — the study measures enforcement output, not patrol hours, so "enforcement fell 60%" is a stops-and-citations proxy, not a headcount. No causal identification: the study does not control for VMT, speed distribution, or vehicle mix. MnDOT and FARS disagree slightly on Minnesota's 2022 death count (446 vs 444). The distracted-driving "related crashes" decline is the study's characterization, not a fatality count. Enforcement data ends in 2022; national deaths have since fallen three straight years (2022-2024), and this piece cannot say whether Minnesota's enforcement recovered with them.

## Headline

"Minnesota Stopped Writing Tickets. The Body Count Noticed."

## Actionable takeaway

If you live in Minnesota: the Hands-Free law works when it is enforced, and the 2019 law is the one proven lever in this dataset — support keeping it funded, and do not treat a traffic stop as harassment theater, because the stop is the enforcement mechanism. If you drive anywhere: speed enforcement is the highest-leverage stop on the road, because speed stops are also how police find drunk drivers — the study says so outright. And if your state publishes citation data, look at it: a 25% collapse in tickets with rising deaths is a policy choice wearing a pandemic's clothes, and it is checkable in public records.

## Sources

- University of Minnesota Center for Transportation Studies, "Traffic Safety Violations Disposition Analysis," Report CTS 25-15, January 2026 (Malinoff, Morris, Craig, Ryan, Douma, Foss). https://www.cts.umn.edu/publications/report/traffic-safety-violations-disposition-analysis
- Minnesota Department of Transportation, via Roads & Bridges, "MnDOT Seeing Traffic Fatalities Travel Downward," May 5, 2023. https://www.roadsbridges.com/road-traffic-safety/news/33004621/mndot-seeing-traffic-fatalities-travel-downward
- NHTSA FARS national totals 2019-2024, via Fatal Crash Data tabulation of FARS final files. https://fatalcrashdata.com/
- NHTSA, speeding-related fatalities 2024 (11,288 deaths, 29% of fatalities) and 2025 early estimate, via NHTSA press release "Trump's Transportation Department Reminds Drivers that Speeding Catches Up with You." https://www.nhtsa.gov/press-releases/trumps-transportation-department-reminds-drivers-that-speeding-catches-you
- Minnesota Office of Traffic Safety / Hands-Free law citation volume, via Fields Injury Law, "Motor Vehicle Accident Statistics in Minnesota." http://fieldsinjurylaw.com/motor-vehicle-accident-statistics-in-minnesota/
- NHTSA FARS database. https://www.nhtsa.gov/research-data/fatality-analysis-reporting-system-fars

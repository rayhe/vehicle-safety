# Research — #1445: The Fix That Didn't Fix It

**Slug:** `1445-waymo-recall-query-fix-failed`
**Journalist:** Rex Driverton (Senior Crash Correspondent — investigations, fatality-rate deep dives; deadpan dark humor, loves paradoxes)
**Kicker:** Investigation
**Date:** 2026-11-09

## Angle (1-2 sentences)
NHTSA opened a recall query on November 6, 2026 covering 2,895 Waymo robotaxis — not because a new defect appeared, but because the agency now doubts the fix for the old one worked. Waymo told regulators its December 2025 school-bus recall was fully remedied by November 17, 2025; NHTSA says most of the reported violations happened after that date. This is the third federal action in 13 months over the same behavior, and 94.4% of the fleet Waymo "fixed" is back under review.

## Kill test
- **Newsworthy:** YES. Fresh NHTSA action disclosed today (Nov 9, 2026, Reuters). A recall query is a distinct ODI instrument — it asks whether a completed remedy was adequate, and it can lead to a second recall. Robotaxis passing stopped school buses is the exact scenario the "safer than human" pitch was supposed to eliminate.
- **Novel:** YES — with a documented duplicate screen. Site story #1177 (Oct 15, 2026, Vin Wreckage) covered the saga through the October 2026 probe: PE25-013, the Dec 2025 recall 25E084, the Jan 2026 NTSB remote-agent finding, AISD's declined pause. What #1177 could not cover: the November 6, 2026 recall query itself, NHTSA's new on-the-record framing that "most" violations came after the fix, the 2,895-vehicle scope, and the 94.4% overlap math. This article is Act Three — the regulator formally questioning the remedy — not a re-telling of Acts One and Two.
- **Original contributions:** (1) 2,895 / 3,067 = 94.4% of the recalled fleet is back under federal review; (2) 354 days from "remedy complete" (Nov 17, 2025) to recall query (Nov 6, 2026); (3) three federal actions in 385 days (PE Oct 17, 2025 → recall Dec 8, 2025 → RQ Nov 6, 2026); (4) six Waymo software recalls since Feb 2024, three of them in the eight months from Dec 2025 — the school-bus recall is not an outlier, it is the first of a cluster.
- **Verdict:** PROCEED.

## Primary sources
1. **Reuters, Nov 9, 2026** — NHTSA opened a recall query into 2,895 Waymo vehicles on Monday Nov 9 (query opened Nov 6); reviewing whether the software update under the December 2025 recall adequately addressed the defect; "most of the incidents occurred after November 2025"; query will assess remedy adequacy and causes of post-remedy incidents; separate January probe after a Waymo struck a child near an elementary school in Santa Monica. https://www.reuters.com/legal/litigation/us-opens-probe-into-2895-waymo-vehicles-over-school-bus-safety-violations-2026-11-09/
2. **NHTSA recall acknowledgement 25E084 (Dec 11, 2025)** — Waymo LLC recalling 3,067 fifth-generation ADS units; software may cause the vehicle to pass a stopped school bus even when red lights are flashing and/or the stop arm is extended; "All affected vehicles were repaired by November 17, 2025." https://static.nhtsa.gov/odi/rcl/2025/RCAK-25E084-3001.pdf
3. **Morningstar / Dow Jones, Nov 9, 2026** — NHTSA "identified a large number of reported incidents" of Waymo AVs passing stopped school buses, "a majority of which occurred after Nov. 17, 2025"; query covers 2,895 fifth-generation ADS vehicles. https://www.morningstar.com/news/dow-jones/202611095666/nhtsa-opens-probe-into-effectiveness-of-waymos-software-fix-for-school-bus-safety-violations
4. **The Autowire, Oct 16, 2026** — PE25-013 opened Oct 17, 2025 after Sept 22 Atlanta footage; Waymo knew of 12 citations for events Sept 25–Nov 14, 2025, no collisions; fix approved Oct 30, OTA hotfix Nov 5–17; safety board decided Dec 2 to treat it as a recall; filing reached NHTSA Dec 10; AISD logged passes Dec 11, 12, 19 and Jan 12, district count 24 for the school year (CBS Austin, Jan 15); Jan 12 pass traced to a remote agent in Michigan wrongly approving it; NTSB has not determined probable cause. https://theautowire.com/2026/10/16/waymo-school-bus-remote-assistance-austin-ntsb/
5. **OpenClassActions (Waymo Recalls Explained)** — six software recalls since February 2024; three landed in the eight months beginning December 2025 (25E084 school buses, 26E026 floods, 26E035 freeway work zones); 3,000–3,900 vehicles per campaign; KXAN reviewed AISD bus-camera footage: roughly two dozen recorded passes over the school year, a number of them after the recall; Waymo disputes the characterization, says it has seen material improvement since the update. https://openclassactions.com/news/waymo-recalls-school-buses-floods-freeway-work-zones.php
6. **Site research #1177** — prior coverage of the saga (PE25-013, 25E084, NTSB Jan 12 remote-agent finding, AISD declined pause, Santa Monica PE26001). Used for continuity and to avoid re-reporting settled facts as new.

## Key numbers
- Recall query: opened Nov 6, 2026; disclosed Nov 9, 2026; 2,895 fifth-generation ADS vehicles
- Recall 25E084: filed Dec 8, 2025; 3,067 vehicles; remedy "complete" Nov 17, 2025
- 2,895 / 3,067 = **94.4%** of the recalled fleet back under review
- Nov 17, 2025 → Nov 6, 2026 = **354 days** from "fixed" to "prove it"
- Oct 17, 2025 (PE25-013) → Nov 6, 2026 (RQ) = **385 days**, three federal actions
- 12 citations known to Waymo for Sept 25–Nov 14, 2025; AISD count 24 passes by Jan 15, 2026; passes logged Dec 11, 12, 19 and Jan 12 — all after the fix
- Six Waymo software recalls since Feb 2024; three in eight months from Dec 2025
- Waymo valuation $126B (Feb 2026); fleet ~4,000 vehicles; 500K+ rides/week (Sept 2026, per #1177 research)
- Santa Monica: Jan 23, 2026, Waymo struck a 9-year-old near an elementary school; PE26001 opened Jan 29, 2026; child had minor injuries

## Original contributions (show the work)
1. **The 94.4% ledger:** 2,895 vehicles under the recall query ÷ 3,067 vehicles in recall 25E084 = 94.4%. The query does not cover a new population. It covers nearly the entire population Waymo already told the government was fixed.
2. **The 354-day gap:** Waymo's own filing says every affected vehicle was repaired by November 17, 2025. NHTSA opened the recall query on November 6, 2026. That is 354 days during which the "fixed" fleet kept generating the exact violations the fix was supposed to stop — and the agency's own language says most of the reported incidents came after the remedy date.
3. **The escalation ladder:** PE25-013 (Oct 17, 2025) → voluntary recall 25E084 (Dec 8, 2025) → recall query (Nov 6, 2026). Three federal actions, 385 days, one behavior. A recall query is the tool NHTSA uses when it suspects the remedy was inadequate; it is the step before a forced second recall.
4. **The cluster, not the outlier:** six software recalls since February 2024, three in the eight months from December 2025 (school buses, flooded roadways, freeway work zones). The school-bus fix is the first of a pattern of software-defined fleets shipping fixes that regulators then have to re-examine.

## Limitations (for the article)
- NHTSA has not published a public ODI resume for the recall query at research time; the query number and exact incident count are not yet public. The article will attribute scope and timing to Reuters and the agency's statement, and will not invent an RQ number.
- "Most incidents occurred after November 2025" is NHTSA's characterization; the agency has not released the incident count or the pre/post split. The article will report it as the agency's finding, not as a verified tally.
- No injuries or collisions are reported in any school-bus passing incident; the Santa Monica child had minor injuries. The story is about federal action and remedy adequacy, not a casualty count.
- Waymo disputes that nothing changed and says it has seen material improvement since the update; that claim is reported, and the article will note the tension with NHTSA's "most incidents after" framing rather than resolving it.
- FARS has no robotaxi entries; no fatality-rate context available.
- The January 12 NTSB finding (remote agent in Michigan) is a preliminary account; NTSB has not determined probable cause.

## Counterargument (strongest)
Waymo's aggregate safety record is genuinely strong — peer-reviewed studies and the company's SGO data show lower crash rates per mile than human benchmarks, and zero collisions occurred in any school-bus passing incident. Human drivers in Austin alone violate school-bus stop arms more than 10,000 times a year; roughly two dozen robotaxi passes is a rounding error by comparison, and a human who drives around a school bus gets a ticket, not a federal probe. Robotaxis are held to a higher bar precisely because the system is supposed to work — and a recall query is the system working, not failing. Waymo also says it has seen material improvement since the update, and the post-fix passes may reflect a small number of edge cases (like the remote-agent error) rather than the fix failing wholesale. The Santa Monica crash: Waymo's model shows a fully attentive human would have hit the child at 14 mph; the car hit at under 6.

## Actionable insights
- If you ride a robotaxi near schools: the current school-bus behavior is under a second round of federal review. Treat a stopped school bus the same regardless of who — or what — is driving behind you.
- If your kid's district uses stop-arm cameras: violations are prosecuted against the vehicle owner. For robotaxis, that enforcement is still being worked out — the Austin ISD citations went to Waymo, not a driver, because there is no driver.
- General rule: a "recall completed" headline is not a fix verified. Ask whether violations continued after the software update, and whether the regulator ever closed the file. In this case, it didn't — it opened a new one.
- For buyers of the robotaxi safety pitch: six software recalls since February 2024, three in eight months. The fleet is software-defined, which means the defect and the fix both ship over the air — and so does the next defect.

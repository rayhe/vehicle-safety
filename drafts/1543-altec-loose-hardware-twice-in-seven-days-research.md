# Research — #1543: Altec Recalled the Same Bucket Trucks Twice in Seven Days. Both Times, Something Wasn't Tightened.

**Number:** 1543
**Slug:** 1543-altec-loose-hardware-twice-in-seven-days
**Journalist:** Rex Driverton (Senior Crash Correspondent — investigations, vehicle-specific deep dives; a defect that comes in pairs is his beat)
**Kicker:** Investigation
**Date researched:** 2026-11-20
**Target ship_date:** 2028-10-03 (1 day after #1542's 2028-10-02)

## Story in one line

Altec recalled its 2025-2026 AM and AN Series aerial devices twice in seven days — November 6 (26V738: a jib pin that can fall out and let the boom swing free, 3,083 trucks) and November 13 (26V752: a valve handle assembled without thread-locking compound that can separate and spray hot oil, 1,100 trucks) — and this is the second time in five weeks Altec has done the two-recalls-in-one-week trick on the same machines.

## Kill test

- **Genuinely newsworthy?** YES. Filed Nov 6 and Nov 13, 2026; NHTSA acknowledgment for 26V738 dated Nov 17. Both defects put lineworkers at risk at height: a swinging jib with a 10-foot winch drop, and hot hydraulic oil ejecting from a control valve at the lower controls.
- **Novel angle on data?** YES. No standalone article covers 26V738 or 26V752 (full-filename + content grep of drafts/ and stories/, Nov 20, 2026: zero hits for "26v738", "26v752", "csn-3385", "stow valve", "thread locking"). The original contribution is the pattern arithmetic: the November pair is Altec's SECOND two-recalls-in-seven-days on the same product family in five weeks (#1161 documented the October pair, CSN-3374 step weld + CSN-3370 boom-stow wiring), and the November pair shares a single failure class — hardware that was not tightened — where the October pair did not. Plus the census: NHTSA's recalls API returns 8 campaigns touching the 2025 AM Series aerial device in ~14 months (25V650, 26V071, 26V243, 26V310, 26V541, 26V637, 26V738, 26V752).
- **3+ primary sources?** YES. (1) NHTSA acknowledgment letter 26V738, Nov 17, 2026; (2) NHTSA recalls API (api.nhtsa.gov), verified live Nov 20, 2026 — full 26V738 and 26V752 records verbatim; (3) CarsMultiverse 26V752 record, Nov 20, 2026 — 1,100-unit population; (4) Modern Public Fleet recall roundup, Nov 18, 2026 — 26V738 coverage; (5) RecallPing Altec recall history — 14 recalls on record; (6) site's own #1161 research file — the October pair.
- **Verdict:** PROCEED.

## Primary sources

1. **NHTSA acknowledgment letter, 26V738** (Nov 17, 2026). https://www.nhtsa.gov/file-downloads/download?p=odi/rcl/2026/RCAK-26V738-1485.pdf — Mfr's report date Nov 6, 2026; 2025-2026 AN/AA/AM Series aerial devices; 3,083 units; component "EQUIPMENT:MECHANICAL:BOOM/CRANE/LADDER:CRITICAL FASTENERS". Defect: "The retention hardware for the rear mounting pin on the jib tilt cylinder may be improperly tightened." Consequence: "Loose hardware can fall out and release the cylinder pin, causing the jib to swing freely and the winch line to drop up to 10 feet, which increases the risk of injury." Remedy: Altec provides instructions to inspect and properly tighten the retention hardware, free. Owner letters expected Jan 4, 2027. Altec number CSN-3381. Contact: 1-877-462-5832.
2. **NHTSA recalls API, api.nhtsa.gov/recalls/recallsByVehicle** — verified live Nov 20, 2026. 26V752000, report received Nov 13, 2026: "The activation handle for the platform stow valve at the lower controls may have been assembled without thread locking compound, and can loosen and separate from the control valve." Consequence: "A separated activation handle can allow the control valve to eject hot oil, increasing the risk of injury." Remedy: inspect platform rotate valve for affected lot number; order a kit and replace the valve or schedule service, free. Owner letters expected Jan 8, 2027. Altec number CSN-3385. Component "EQUIPMENT:MECHANICAL:CONTAINMENT:VALVE". Same API query for 2025 AM Series returns 8 campaigns: 25V650 (Sep 26, 2025), 26V071 (Feb 6, 2026), 26V243 (Apr 16, 2026), 26V310 (May 15, 2026), 26V541 (Aug 21, 2026), 26V637 (Oct 2, 2026), 26V738 (Nov 6, 2026), 26V752 (Nov 13, 2026).
3. **CarsMultiverse, recall 26V752** (read Nov 20, 2026). https://carsmultiverse.com/recall/26v752/ — 1,100 vehicles potentially affected; confirms CSN-3385, dates, defect, consequence, remedy verbatim from the NHTSA record.
4. **Modern Public Fleet, "Recall Roundup: Ford, GM, Freightliner, Mack and More"** (Nov 18, 2026). https://modernpublicfleet.com/recall-roundup-ford-gm-freightliner-mack-and-more/ — 26V738 summary: 3,083 2025-2026 AN/AA/AM aerial devices; jib swing + 10-foot winch drop; letters Jan 4, 2027.
5. **RecallPing, Altec recall history** (read Nov 20, 2026). https://www.recallping.com/brands/altec — 14 recalls on record; lists 26V738 as latest (Nov 6, 2026; page not yet updated for 26V752).
6. **Site's own #1161 research file** (drafts/1161-altec-bucket-truck-double-recall-research.md) — October 2026 pair: CSN-3374 (access step weld, 6,780 units) + CSN-3370 (boom stow auto-neutral wiring, 143 units), filed seven days apart.

## Key facts (verified)

- **26V738 (CSN-3381):** filed Nov 6, 2026; NHTSA ack Nov 17, 2026. 2025-2026 AA, AM, AN Series aerial devices. 3,083 units. Retention hardware for the rear mounting pin on the jib tilt cylinder may be improperly tightened. If it falls out, the cylinder pin releases, the jib swings freely, and the winch line drops up to 10 feet. Remedy: inspect and tighten, free. Letters Jan 4, 2027.
- **26V752 (CSN-3385):** filed Nov 13, 2026 — seven days later. 2025-2026 AM and AN Series aerial devices. 1,100 units. Platform stow valve activation handle at the lower controls assembled without thread-locking compound; can loosen and separate. A separated handle can let the control valve eject hot oil. Remedy: check valve lot number; replace valve via kit or Altec service, free. Letters Jan 8, 2027.
- **Combined November population:** 3,083 + 1,100 = 4,183 trucks. The two campaigns overlap on the same model families (AM and AN Series, model years 2025-2026); some trucks are plausibly in both.
- **The seven-day gap:** Nov 6 to Nov 13. Same as the October pair's gap (CSN-3370 week of Oct 5, CSN-3374 week of Oct 12 — seven days, per #1161).
- **The census:** 8 NHTSA campaigns touch the 2025 AM Series aerial device between Sep 26, 2025 and Nov 13, 2026 — roughly one every seven weeks for fourteen months. Components span exhaust, E-stop controls, steps, fasteners, and valves.
- **What these trucks do:** aerial devices (bucket trucks) lift lineworkers, telecom techs, and tree crews to working height. The jib is the articulating arm at the end of the boom; the platform stow valve is operated from the lower (ground-level) controls. Both defects bite while someone is working at height or standing at the base of the machine.
- **Who uses them:** electric utilities, telecom, tree care, sign contractors, municipalities (per #1161).
- **No injuries/crashes stated** in the public records for either campaign. Neither filing carries a do-not-drive or park-outside advisory. Neither remedy is over-the-air — both are hands-on inspections.

## What this does NOT prove (limitations)

- No crash, injury, or death counts are published for 26V738 or 26V752. Cannot claim anyone was hurt.
- The Part 573 reports were not retrieved in full (the RCLRPT PDF for 26V738 returned 404 at the guessed URL); chronology, warranty-claim counts, and how Altec discovered each defect are not in this file. The acknowledgment letters and API records are the verified basis.
- Overlap between the two November populations is unknown — the filings do not publish VIN ranges. "Some trucks may be in both" is inference, stated as such.
- The 8-campaign census counts campaigns touching the 2025 AM Series per the NHTSA API; several of those campaigns span multiple models and years, so the count describes recall activity around the product family, not 8 defects on one specific truck.
- Thread-locking compound is a process control, not a design flaw — the article must not claim the valve design itself is defective.

## Strongest counterargument

Altec found both defects itself, filed promptly (manufacturer-initiated, no NHTSA investigation cited), and the remedies are free and simple: tighten the hardware, replace a valve. Four thousand trucks is small against the millions of vehicles recalled in a typical year, and neither campaign reports an injury. A reasonable reader could conclude this is the recall system working as designed — a manufacturer catching assembly-process escapes and fixing them before anyone gets hurt. The counter to the counter: the same manufacturer caught the same class of escape — things not tightened — twice in one week, five weeks after a different pair of escapes on the same trucks. At some point the pattern stops being luck and starts being the process.

## Killed angles this run (duplicate screen)

- Waymo school-bus recall query RQ26006 ("the fix didn't fix it") — covered three times already (#1461, #1523, plus #1445 on recall queries generally).
- Honda 26V721 steering divide-by-zero (635,808) — covered in full as #1533.
- Acura ZDX 26V735 brake recall-of-recall — covered as #1521.
- Ford Maverick 26V724 battery cable eyelet — covered as #1509.
- GM Savana/Express 26V718 steering nut — covered as #1391 ("thirty years, can't tighten a nut").
- IIHS commercial-vehicle crash avoidance ratings (Oct 8, 2026) — covered eight times (#1093, #1110, #1121, #1140, #1144, #1150, #1160, #1175, #1189).
- Nissan Kicks beats RAV4 for Top Safety Pick — covered three times (#1244, #1408, #1484).
- Rosenbauer 26V740 fire-truck fuse box — noted but passed over: 937 units, and Rosenbauer fire apparatus already covered as #1162; Altec pair is the stronger pattern story.
- PACCAR 26V743 driveline snap ring — covered inside #1542's research and the Nov 2026 census #1528.

## Actionable takeaways (for the article)

- If you run a fleet with 2025-2026 Altec AM/AN/AA aerial devices: check both campaigns (26V738 and 26V752) by VIN at nhtsa.gov/recalls — a truck can be in both, and the remedies are different inspections.
- 26V738 remedy is an inspection + tighten; do not wait for the Jan 4 letter — the hardware is reachable and the check is Altec's own instruction set, free.
- 26V752: check the platform rotate valve lot number first; if it is from the affected lot, order the kit or book Altec service.
- The broader lesson for fleet managers: when one manufacturer files two recalls on the same model family in one week, treat the second as a signal to audit the whole truck, not just the named part.

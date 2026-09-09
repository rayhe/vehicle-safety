# Research — Article #853: The Runaway Ricon Lift

**Slug:** `ricon-runaway-lift-two-diodes`
**Journalist:** Mia Crumplezone (engineering beat: contactor, diodes, FMVSS 403/404)
**Kicker:** Investigation
**Ship date:** 2026-10-29 (1/day rule; #852 ships 2026-10-28)

## News peg
- Consumer Affairs "Auto Safety Recall Derby - Week of September 07" (published Sep 8, 2026): NHTSA 26V565000, Forest River Bus LLC, wheelchair lift may inadvertently move.
  - https://www.consumeraffairs.com/news/auto-safety-recall-derby-week-of-september-07-090826.html

## Primary sources

### 1. NHTSA recalls API — campaign 26V565000
- `https://api.nhtsa.gov/recalls/campaignNumber?campaignNumber=26V565`
- Manufacturer: Forest River Bus, LLC. 55 units affected.
- Population: certain 2024 Mobility Trans Safetbus, 2024 Glaval Universal (Forest River Bus), 2025 Senator II, 2025 Starcraft Allstar transit buses equipped with certain **Ricon S-Series and K-Series wheelchair platform lifts**.
- Summary: "The electrical contactor may fail, preventing the controls from stopping the lift."
- Consequence: "A wheelchair lift that continues to move while occupied increases the risk of injury."
- Remedy: "Dealers will correct the wiring by installing two diodes, free of charge. Owner notification letters are expected to be mailed October 10, 2026." Forest River number 51-2093, customer service 1-800-348-7440.
- Component: EQUIPMENT ADAPTIVE/MOBILITY:WHEELCHAIR LIFT/RAMP:CONTROLS/CONTROL WIRING. overTheAirUpdate: false.

### 2. Federal Register / DOT — grant of inconsequential noncompliance (2024-17818)
- https://www.transportation.gov/regulations/federal-register-documents/2024-17818
- Ricon determined its Mirage, **S-Series, and K-Series** wheelchair lifts do not fully comply with FMVSS No. 403. Vehicle manufacturers installing them determined noncompliance with FMVSS No. 404. NHTSA **granted** the petitions — Ricon and the bus makers were excused from recalling over this noncompliance.
- The noncompliance (per the petition receipt text, 2021-09051): Ricon's Classic S-Series and K-Series lifts do not comply with the **inner roll stop interlock** requirements of FMVSS No. 403, S6.10.2.4 and S6.10.2.7. The rule: when the platform reaches the level where the inner roll stop is designed to deploy, **the platform must stop unless the inner roll stop has deployed**, and vertical change must not exceed 13 mm (0.5 in) per test S7.6.1.
- Related petitions: Navistar/IC Bus (2021-09049, 2023-18332), Navistar+DTNA/Thomas Built (2021-09050), Ricon+Mirage (2021-09049).

### 3. FMVSS 403/404 final rule and test procedures (NHTSA)
- http://nhtsa.gov/sites/nhtsa.gov/files/fmvss/Lift_FinalRule_Dec-27-02.pdf — the Dec 27, 2002 final rule establishing FMVSS 403 (equipment standard) and 404 (installation standard) "to protect individuals who are aided by canes, walkers, wheelchairs, scooters, and other mobility devices." Public-use lifts: 600 lb standard load, 15,600-cycle fatigue endurance, interlocks required (S6.10), operations counter required (S6.11), threshold warning signal.
- http://www.nhtsa.gov/DOT/NHTSA/Vehicle Safety/Test Procedures/Associated Files/TP-403-01.pdf — test procedure checklist: interlocks required, manual backup operation required.

### 4. Ricon S/K-Series service manual (manufacturer primary)
- https://www.riconcorp.com/pdfs/32dskl02/32dskl02A2.1.pdf (S-Series install, May 2014)
- https://www.riconcorp.com/pdfs/32dssk06/32dssk06B2.3.pdf (K-Series service)
- Safety checklist items: "Manual backup operation fully functional (see operator manual for directions)." So the lifts do have a manual backup — the electronic controls failing does not have to mean the lift is uncontrollable, if the attendant knows the manual procedure.

## Kill test
- Genuinely newsworthy? Yes. A wheelchair lift that cannot be stopped while occupied is a vivid, high-stakes failure, and it involves the exact lift families (Ricon S/K-Series) that NHTSA formally excused from a *different* safety noncompliance as "inconsequential." The irony is the story: the federal rulebook cares about the platform stopping within 13 mm when the roll stop deploys, granted a pass on that, and now the lift can't stop at all.
- Novel angle vs 800+ articles? Yes. Zero prior coverage of wheelchair *lifts* (only Q'Straint *securement retractors*, published Aug 1, 2026 — different component, different failure, "One Retractor Broke. Ten Manufacturers Recalled. Nobody Noticed."). Zero prior FMVSS 403/404 coverage. Zero prior 26V565 coverage.
- Different mechanism from the roll-stop petition: explicitly disclosed as irony, not causation.

## Novel contribution
1. First linkage of 26V565 (runaway lift, failed contactor) to the granted inconsequential-noncompliance petitions covering the same Ricon S-Series/K-Series lift families.
2. The "13 mm vs cannot stop" contrast: FMVSS 403's interlock rule demands the platform stop within 13 mm (0.5 in) of travel when the inner roll stop deploys — NHTSA waived that as inconsequential; the new defect means the controls may not stop the lift at all.
3. The two-diode fix as the cheapest safety repair in the queue (a wiring correction, no OTA possible on a 55-bus transit fleet).

## Limitations (must appear in article)
- Small population: 55 buses. No injuries or incidents reported in connection with this recall.
- No failure-rate data: unknown how many of the 55 contactors will actually fail.
- The roll-stop noncompliance is a separate mechanism; no evidence links it to the contactor failure.
- Manual backup operation exists per Ricon's own checklist — a trained attendant can presumably still operate/stop the lift.

## Strongest counterargument (at full strength)
Ricon self-reported the roll-stop deviation and self-reported this contactor issue — this is a manufacturer using the system as designed, twice. NHTSA evaluated the roll-stop deviation and agreed it was inconsequential; the agency's engineers, not a lobbyist, signed that finding. A 55-bus population with zero reported injuries and a simple dealer fix is exactly the kind of recall that works. The "irony" is rhetorical, not engineering: the contactor and the roll stop are different subsystems, and conflating them would be a category error.

## Actionable insights
- Transit/paratransit agencies operating 2024 Mobility Trans Safetbus, Glaval Universal, or 2025 Senator II / Starcraft Allstar buses: check whether yours carry Ricon S/K-Series lifts; letters mail Oct 10, 2026; fix is free (two diodes, dealer wiring correction).
- Wheelchair users and attendants: every FMVSS 403 lift has manual backup operation. Ask the driver/attendant where the manual backup is *before* boarding — Ricon's own checklist requires it to be fully functional.
- Check VINs at nhtsa.gov/recalls.

## Kill-test verdict: PROCEED

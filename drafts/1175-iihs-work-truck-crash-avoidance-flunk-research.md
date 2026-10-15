# Research — #1175: IIHS flunks America's work trucks on crash avoidance (Oct 8, 2026)

**Journalist:** Rex Driverton | **Kicker:** The Gap
**Slug:** `1175-iihs-work-truck-crash-avoidance-flunk`
**Headline:** "Nobody Ever Tested the Truck That Delivers Your Packages. Last Week, Somebody Finally Did."

## What happened

- **IIHS released its first-ever crash-avoidance ratings for commercial vehicles on October 8, 2026** ("Work vehicles falter in crash avoidance tests"). 11 vehicles: four Class 3 heavy-duty pickups (GVWR 10,001–14,000 lb) and seven cargo vans.
- **Class 3 pickups, vehicle-to-vehicle crash prevention:** Chevrolet Silverado 3500HD — Poor. Ford F-350 — Poor. GMC Sierra 3500HD — Poor. Ram 3500 — Marginal. Not one Good or Acceptable.
- **Pedestrian crash prevention (pickups):** F-350 — Acceptable; Ram 3500 — Acceptable; Silverado/Sierra 3500HD — Marginal.
- **Cargo vans:** Mercedes-Benz Sprinter 2500 — Good (V2V) / Acceptable (pedestrian); Chevrolet BrightDrop 400 — Acceptable / Good; Rivian RCV-Delivery 500 — Marginal / Good; Ford Transit T250 — Poor / Marginal; Ram ProMaster 2500 — Poor / Marginal; Chevrolet Express 2500 — Poor / Poor; GMC Savana 2500 — Poor / Poor.
- **The F-350 detail:** its systems could avoid the passenger-car target only at 31 mph; in four tests above that speed it could not. In one 43-mph test it failed to reduce speed at all (Autoblog, Oct 8, 2026).
- **Motorcycles:** IIHS also tested detection of motorcycles and semi trailers. Most systems failed to warn drivers or slow down in the motorcycle trials; none produced warnings early enough (Carscoops, Oct 2026).
- **Child-sized pedestrians:** testing showed drivers can lose sight of child-sized pedestrians in front of these trucks as they approach (Carscoops, Oct 2026).
- **IIHS President David Harkey:** "These results are a wake-up call for commercial vehicle makers. Front crash prevention is especially important for these larger, heavier vans and trucks because of the danger they pose to other road users."
- **IIHS VP of Vehicle Research David Kidd** (to the Detroit Free Press): commercial vehicles face far fewer government standards than passenger cars. "There are a lot of gaps between those things that are required for passenger vehicles and commercial vehicles around the airbags, advanced restraints" — automatic emergency braking that detects vehicles and pedestrians is required for passenger vehicles but "not coming for commercial vehicles." "When there are large crashes, those vehicles are usually doling out the harm."
- **The body count:** 6,215 people killed in the U.S. in 2024 in crashes involving medium- or heavy-duty vehicles or light vans — 16% of all roadway fatalities recorded by NHTSA's FARS (IIHS, via Jalopnik/Free Press).
- **Background:** IIHS launched its commercial-vehicle safety program in June 2026. Phase one checked five driver-protection features (front/side airbags, pretensioners, force limiters, seatbelt reminders); only 4 of 9 vehicles passed everything. The Express/Savana — a design dating to 1996 — lack automatic emergency braking entirely; forward collision warning is optional-only.

## Original contribution (the inverse safety gradient)

Nobody has drawn the two curves against each other:

1. **Danger dealt rises with GVWR.** A Class 3 pickup at the 14,000-lb GVWR ceiling masses ~4.4x a 3,200-lb midsize sedan. Kinetic energy scales with mass and with v^2.
2. **Avoidance ability falls with GVWR.** In the first head-to-head commercial ratings, the heaviest class (Class 3 pickups) scored worst on vehicle-to-vehicle prevention (3 Poor, 1 Marginal), while lighter cargo vans did better (Sprinter Good, BrightDrop Acceptable).

The math the article will show:
- F-350 at 43 mph, zero speed reduction: KE = 1/2 m v^2. 14,000 lb at 43 mph (63.07 ft/s): 0.5 * (14000/32.2 slugs) * 63.07^2 = ~865,000 ft-lb. A 3,200-lb sedan at the same speed: ~198,000 ft-lb. **Ratio: ~4.4x.**
- The avoidance window: F-350 avoided the target at 31 mph but not 43 mph. Energy ratio (43/31)^2 = **1.92x** — nearly double the energy across the 12-mph band where the system went from "stopped" to "didn't slow at all."
- Scale: 6,215 deaths = 16% of all 2024 U.S. roadway fatalities (implies ~38,800 total, consistent with FARS).

So: the vehicles that deal out 16% of all road deaths are the ones least able to avoid causing them. The regulatory explanation is the gap: passenger-car AEB is mandated (FMVSS via NHTSA's 2024 AEB rule, effective ~2029); commercial vehicles are exempt from most of these requirements. IIHS is filling the vacuum its commercial program created — Class 4–6 trucks are next.

## Actionable insights (hard gate)

- If you buy a heavy-duty work pickup: the Ram 3500 was the best of the four on vehicle-to-vehicle (Marginal); F-350 and Ram tied best on pedestrian (Acceptable). None earned Good anywhere.
- If you run a fleet buying cargo vans: Sprinter 2500 (Good V2V), BrightDrop 400 (Good pedestrian), Rivian RCV-Delivery 500 (Good pedestrian). The Express/Savana (Poor/Poor, no AEB) are still on sale — a 1996 design that never learned to brake itself.
- Motorcyclists: these trucks' systems largely fail to detect motorcycles. Do not assume the truck behind you sees you — ride like it is blind, because the sensors are.
- Parents: child-sized pedestrians can vanish from the driver's sightline in front of these trucks as they approach. Keep kids out of the front blind zone of work trucks and delivery vans.
- Check whether your van/truck even has AEB before assuming it does.

## Kill test

- Newsworthy? Yes — IIHS's first-ever crash-avoidance ratings for work vehicles, released Oct 8, 2026 (one week ago). Covered by Autoblog, Jalopnik, Carscoops, Detroit Free Press.
- Novel angle? Yes — coverage reports the ratings; nobody has computed the inverse safety gradient (heaviest = deadliest = worst at avoiding) or the KE math on the F-350's 43-mph zero-reduction test.
- Original contribution? Yes — GVWR-vs-rating gradient + energy calculations + the regulatory-gap framing (passenger AEB mandated, commercial exempt).
- Verdict: PROCEED. Rex Driverton (paradoxes), kicker "The Gap."

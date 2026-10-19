# Research Notes — #1214: A 14,000-Pound Truck That Can't See a Motorcycle

**Slug:** `1214-class3-trucks-blind-aeb-gap`
**Journalist:** Mia Crumplezone (Safety Engineering Editor — vehicle design analysis, safety tech)
**Kicker:** The Gap
**Status:** RESEARCH → DRAFT

## The story in one line
IIHS published its first-ever front crash-avoidance ratings for commercial vehicles on Oct 8, 2026. The heaviest vehicles on the road — Class 3 pickups at 10,001–14,000 lb GVWR — carry the most kinetic energy and have the worst electronic eyes. Three of four pickups rated POOR at vehicle-to-vehicle prevention.

## Kill test
- Genuinely newsworthy: first-ever IIHS commercial-vehicle crash-avoidance ratings, released 10 days before writing. Regulatory gap angle (airbag/AEB mandates don't apply) is underexplored.
- Novel angle vs. existing coverage: nobody on the site has done the "inverse safety law" framing — safety-tech investment runs inversely to kinetic energy delivered in a crash. Plus original KE calculation (see below) and the sensor-geometry explanation of the disappearing child dummy.
- Not a data dump: engineering analysis of WHY the systems fail (mirror-mounted sensors + tall hoods = child dummy falls out of the detection cone).

## Primary sources (3+)
1. **IIHS news release** (primary): "Cargo vans and work pickups struggle in IIHS crash avoidance tests," Oct 8, 2026. https://www.iihs.org/news/detail/cargo-vans-and-work-pickups-struggle-in-iihs-crash-avoidance-tests
2. **Autoblog** (secondary): "Heavy-Duty Pickups Are Failing New Crash-Prevention Tests." F-350 avoided passenger-car target only at 31 mph; at 43 mph failed to reduce speed at all; Silverado failed all six avoidance trials. https://www.autoblog.com/news/heavy-duty-pickups-are-failing-new-crash-prevention-tests
3. **Safety+Health Magazine** (secondary): "IIHS unveils front crash prevention ratings for small commercial vehicles." 9 of 11 substandard; David Kidd video; March pledge to close "gaps in the U.S. vehicle safety system." https://www.safetyandhealthmagazine.com/iihs-unveils-front-crash-prevention-ratings-for-small-commercial-vehicles/
4. **Carscoops** (secondary): "Big Trucks And Vans Struggle To Avoid Crashes, Says IIHS." Child dummy lost as trucks approached; GVWR context; Harkey quote. https://www.carscoops.com/2026/10/big-trucks-and-vans-struggle-to-avoid-crashes-iihs/
5. **Espresso/Cafecito** (secondary): "IIHS: Most Class 3 Trucks, Vans Lag on Crash Avoidance." BrightDrop production ended Oct 2025; IIHS program launched June 2026; no exposure denominator; Class 4–6 later. https://espresso.cafecito.tech/iihs-class-3-truck-van-crash-avoidance-ratings/
6. **Guessing Headlights** (secondary): nighttime low-beam vs high-beam split; Express/Savana lack AEB entirely. https://guessingheadlights.com/iihs-says-cargo-vans-and-heavy-duty-trucks-are-failing-crash-avoidance-tests/

## Key data
**Vehicle-to-vehicle / pedestrian ratings (G/A/M/P):**
- Silverado 3500HD: P / M | F-350: P / A | Sierra 3500: P / M | Ram 3500: M / A
- Sprinter 2500: G / A | BrightDrop 400: A / G | Rivian RCV-Delivery 500: M / G
- Transit T250: P / M | ProMaster 2500: P / M | Express 2500: P / P | Savana 2500: P / P
- 9 of 11 substandard on vehicle-to-vehicle. Sprinter the only Good.
- Express/Savana have NO AEB — forward collision warning only, optional.
- 6,215 deaths in 2024 in crashes involving medium/heavy-duty vehicles or light vans = 16% of US roadway fatalities (IIHS, citing NHTSA data).
- Class 3 = GVWR 10,001–14,000 lb.
- Motorcycle target the biggest challenge: several systems issued no warning and did not slow in most motorcycle trials.
- Child dummy: detected at distance, then "disappeared" as vehicle approached — sensors near rearview mirror, tall front ends. Acceptable-rated F-350 and Ram 3500 still struggled more with the child in daylight than the adult at night.
- Night trials: low beams vs high beams; some vehicles substantially worse on low beams.
- Federal gap: "Many government standards for passenger vehicles, including airbag requirements, don't apply to delivery vans, box trucks, tractor-trailers and larger work pickups" (IIHS).
- IIHS commercial program launched June 2026 (driver protection: airbags, belts, reminders). Headlight + rear-AEB ratings for Class 3 through 2027; Class 4–6 later.
- BrightDrop 400 (Good pedestrian) — GM ended BrightDrop production in October 2025. The van that sees pedestrians best is already dead.
- No manufacturer had announced a fix as of Oct 12, 2026 (per Automotive Files/YouTube sourcing; treat as secondary claim, hedge).

## Original contribution
**The inverse safety law.** Kinetic energy at 43 mph (IIHS's fastest V2V trial speed):
- 14,000-lb truck: m = 6,350 kg, v = 19.22 m/s → KE = 0.5 × 6350 × 19.22² ≈ 1.17 MJ
- 3,000-lb car: m = 1,361 kg → KE = 0.5 × 1361 × 19.22² ≈ 251 kJ
- Ratio: ≈ 4.7×. The vehicle carrying nearly five times the destructive energy has the worst-performing collision-avoidance system IIHS tests. Safety-tech sophistication runs inversely to kinetic energy at impact. Nobody has framed it this way.

**Sensor geometry explanation.** The child dummy "disappearing" is a packaging failure, not a software failure: forward sensors sit near the rearview mirror; on a tall-hood Class 3 truck the detection cone's lower edge rises above a child's head height as distance closes. Passenger-car sensor placement was ported to trucks without re-aiming for the new geometry. This is a design judgment, stated as inference, labeled as such.

## Limitations (for the article)
- IIHS protocol measures behavior under controlled trials, not real-world crash or injury rates. No exposure denominator (crashes per mile) exists for these vehicles in the release.
- Ratings apply to tested model years/trims; sensor suites vary by trim and options packages.
- Trial speeds are fixed; real-world closing speeds vary.
- Field failure rates of these AEB systems are unknown — a Poor rating means poor test performance, not a proven defect.
- The BrightDrop-discontinuation detail comes from a secondary source (Espresso); hedged accordingly.
- NHTSA's 2024 AEB rule (FMVSS 127) covers light vehicles; I will NOT claim specifics about which weight classes are covered beyond what IIHS states ("different federal safety requirements"). Keep the regulatory claim to IIHS's own words.

## Strongest counterargument
Commercial buyers spec for towing, payload, and durability — not sensor suites. The drivers are often professionals, and urban delivery vans spend their lives at speeds where AEB matters less. Stopping 14,000 lb has real physics limits no software update fixes. The Express/Savana are ancient platforms at end of life; rating them is like crash-testing a fax machine. And the motorcycle miss may reflect genuinely hard perception physics (small radar cross-section, lateral movement) rather than neglect.

## Actionable takeaways
- Fleet buyers: the Sprinter 2500 is the only Good V2V performer; the BrightDrop 400 and Rivian RCV-500 lead pedestrian. Check IIHS commercial ratings before ordering.
- Do not buy new Express/Savana 2500s for urban delivery duty — no AEB at all, Poor/Poor.
- These trucks are exempt from the passenger-car AEB trajectory, so ratings pressure is the only mechanism pushing improvement. Watch the 2027 headlight + rear-AEB ratings.

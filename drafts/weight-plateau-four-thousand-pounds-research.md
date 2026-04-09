# Research Notes: The 4,000-Pound Protection Plateau

## Angle
A 2025 IIHS study (Monfort, *Traffic Injury Prevention*) found that vehicle weight provides diminishing self-protection returns above 4,000 lbs — and increasingly lethal returns to crash partners. Below 4,000 lbs, adding 500 lbs cuts your driver death rate by 17 points and raises partner death rate by just 1 point. Above 4,000 lbs, the tradeoff inverts: negligible self-protection gain, significant partner kill increase.

This article cross-references the IIHS finding with our FARS data to show which vehicles sit on which side of the plateau — and what that means for the arms race.

## Kill Test
- Is this genuinely surprising? YES. The conventional wisdom "bigger = safer" is true... up to a point that most American trucks and large SUVs have long since passed. The 4,000 lb inflection is specific, quantified, and counterintuitive.
- Novel contribution? We calculate a "protection surplus" metric from FARS: for vehicles above the plateau, what % of their fatal crash deaths are OTHER people vs their own occupants? This validates the IIHS finding with our independent dataset.
- Distinct from existing articles? We have aggressor-vehicles, pickup-size-death-inversion, crash-lethality-ratio. But none cite the 4,000 lb threshold or the 2025 IIHS study. This ties them together with a specific physics inflection point.

## Primary Sources
1. **Monfort (2025), IIHS** — "Crash incompatibility between cars, SUVs, and pickups in 2017-2022," *Traffic Injury Prevention* 26(6):697-702. PMID 40100638. Key finding: weight benefit plateaus at 4,000 lbs; pickup aggressivity dropped from 2.5x to 1.9x; heavy SUV aggressivity from 1.9x to 1.2x.
2. **NHTSA FARS 2014-2023** — Our own dataset. Self-lethality by class: Sedan 64.5%, SUV 52.4%, Pickup 48.9%. Ram 2500: 0.205 (only 20.5% of its fatal crashes kill the Ram driver). Saturn S Series: 0.924.
3. **IIHS vehicle size/weight topic page** — https://www.iihs.org/topics/vehicle-size-and-weight
4. **MotorTrend coverage** (Feb 2025) — "Heavier Vehicles Actually DON'T Always Protect You More in a Crash"

## Key Data Points from FARS
- Pickup self-lethality: 48.9% (for every pickup driver who dies, roughly one OTHER person dies in that same crash)
- Sedan self-lethality: 64.5%
- Sports car self-lethality: 68.1%
- Within pickups: Ram 2500 (0.205) vs Ford Ranger (0.690) — 3.4x gap in self-lethality
- This maps perfectly to the weight plateau: Ram 2500 (~6,500-7,500 lbs) is WAY past the plateau. Ranger (~4,200 lbs) is near/at the plateau. Below the plateau: small trucks like S-10 (0.755) act like sedans — they're killing their own drivers.

## Approximate Curb Weights (for article)
- Below 4,000 lbs: Most sedans, compact SUVs, small trucks (Ranger, Colorado)
- Near 4,000 lbs: Midsize SUVs (RAV4 ~3,600, CR-V ~3,500, Highlander ~4,300)
- Above 4,000 lbs: Full-size pickups (F-150 ~4,800, Silverado ~4,600, Ram 1500 ~5,000)
- WAY above: Heavy-duty (Ram 2500 ~6,500, F-250 ~6,200, F-350 ~7,500)
- Heaviest: GMC Hummer EV ~9,000+, Ford F-150 Lightning ~6,500

## Original Analysis
Cross-reference FARS deaths/crashes ratio with approximate weight classes:
- Vehicles >6,000 lbs: Ram 2500 (0.205), F-250 (0.364), F-350 (0.466), Tundra (0.415) → avg self-lethality ~0.36
- Vehicles 4,000-6,000 lbs: F-150 (0.458), Silverado (0.486), Ram 1500 (0.341), Sierra (0.471) → avg ~0.44
- Vehicles <4,000 lbs (sedans): Cavalier (0.857), Neon (0.856), Civic (varies), Camry (varies) → avg ~0.65

The delta between 4,000-6,000 and >6,000 groups is MUCH smaller (0.44 vs 0.36) than between <4,000 and 4,000-6,000 (0.65 vs 0.44). This validates the plateau: most of the self-protection benefit happens in the first 4,000 lbs. After that, diminishing returns.

## Counterargument (strongest)
The IIHS study only looks at 1-4 year old vehicles in two-vehicle crashes. Our FARS data includes ALL ages and ALL crash types (single-vehicle too). Single-vehicle crashes (rollovers, fixed object) may have different weight dynamics — heavier vehicles might benefit more from weight in rollover scenarios. The plateau may not hold for all crash types.

## Limitations
- FARS self-lethality (deaths/crashes) is not exactly the same as what IIHS measured (driver fatality rates per registered vehicle year). We're using it as a proxy.
- We don't have actual curb weights in FARS — we're assigning approximate weight classes by model.
- FARS 2014-2023 includes older vehicles that predate modern safety features, potentially muddying the weight-protection relationship.
- The deaths/crashes ratio can be affected by factors other than weight: speed at impact, seatbelt use, crash type.

## Journalist
**Mia Crumplezone** — Safety Engineering Editor. This is squarely her beat: vehicle design, safety tech, engineering analysis. She's "slightly judgmental about bad vehicle design" — perfect for calling out the weight arms race. Kicker: **The Gap**.

## Headline Ideas
- "Past 4,000 Pounds, Your Truck Stops Protecting You and Starts Killing Everyone Else"
- "The Weight Plateau: Where Self-Protection Ends and Aggression Begins"
- "At 4,000 Pounds, Safety Stops Scaling. The Killing Doesn't."

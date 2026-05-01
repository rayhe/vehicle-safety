# Research Notes: Lethality Index — Who Dies in Your Crash?

## Angle
Every fatal crash in FARS has at least one death. But which vehicle's occupant dies? We compute a "Lethality Index" for each vehicle: when it's involved in a fatal crash, what percentage of the time does its own occupant die?

This is a novel cross-tabulation of FARS crash involvements vs occupant deaths by model. NHTSA doesn't publish this per-model metric. It combines crashworthiness, mass advantage, and structural design into a single number.

## Key Finding
- **Chevrolet Cavalier: 85.7% lethality** — in 1,429 fatal crashes involving a Cavalier, 1,225 Cavalier occupants died
- **Ram 2500: 20.5% lethality** — in 748 fatal crashes, only 153 Ram occupants died (the other 80% of the time, someone else died)
- Top 15 most lethal vehicles: ALL sedans (Cavalier, Neon, LeSabre, Cobalt, HHR, Grand Am, Century, Grand Marquis, S-10, Sonic, Grand Prix, Spark, Versa, Accent, PT Cruiser)
- Bottom 15 (most survivable): ALL pickups, SUVs, and vans (Ram 2500, Transit, Ram 1500, Acadia, Land Cruiser, F-250, Traverse, Lexus RX, E-350, Tundra, Odyssey, Durango, Ram, Grand Cherokee, Journey)
- Class averages: Sedans 64.5%, SUVs 52.4%, Pickups 48.9%, Vans 51.4%, Sports Cars 68.2%

## Original Contribution
No published metric combines crash involvement frequency with occupant-specific death rates at the model level. IIHS publishes crash compatibility research at the class level (cars vs SUVs vs pickups), but not per-model lethality rankings.

## Sources
1. **FARS 2014-2023** — crash involvements and occupant deaths by vehicle model (nhtsa.gov/research-data/fatality-analysis-reporting-system-fars)
2. **IIHS Vehicle Size and Weight** research (iihs.org/topics/vehicle-size-and-weight)
3. **IIHS 2025** — "SUVs no longer pose outsize risk to car occupants, but pickup compatibility lags" — confirms SUV front-end redesign improved compatibility, but pickups still 2.5x more likely to kill car drivers
4. **IIHS/Journal of Safety Research (2025)** — "Crash incompatibility between cars, SUVs, and pickups in 2017-2022" (pubmed.ncbi.nlm.nih.gov/40100638) — Weight is the primary remaining factor in pickup-car incompatibility
5. **NHTSA 2025 fatality estimates** — 36,640 deaths in 2025 (6.7% decrease from 2024)

## The Physics
- Newton's second law: In a two-vehicle collision, the lighter vehicle experiences greater deceleration
- A 2,600 lb Cavalier vs a 6,000 lb Ram 2500: the Cavalier absorbs 70% of the collision energy
- Crumple zone length matters: subcompacts have less crush space before intrusion reaches the cabin
- Ride height matters: pickups override sedan door sills, bypassing side impact protection

## Counterargument
Heavy vehicles with low lethality aren't inherently "safer" — they transfer risk. Every Ram 2500 crash where the Ram driver walks away likely killed someone in a smaller vehicle. This is crash compatibility, not crash prevention. The IIHS pickup research confirms this: pickup weight disparity is the primary remaining source of incompatibility. Making vehicles heavier makes their occupants safer while making everyone else less safe.

## Limitations
- FARS only captures fatal crashes (the ~37,000 annual deaths, not the ~6.7M total crashes)
- A vehicle with low lethality might cause more total fatalities overall by being involved in more fatal crashes as the aggressor
- Fleet age and driver demographics confound: Cavaliers skew toward younger, lower-income drivers; Ram 2500s skew toward older commercial operators
- We're comparing FARS crash involvements to FARS occupant deaths — not total population-adjusted risk
- The Lethality Index doesn't distinguish single-vehicle from multi-vehicle crashes
- Some vehicles in the high-lethality list are discontinued (Cavalier 2005, Neon 2005, LeSabre 2005) — their crashes reflect aging fleet

## Journalist
**Mia Crumplezone** — Safety Engineering Editor. Perfect for a structural design and physics story.

## Headline Candidates
- "Your Car Has a Lethality Index. The Cavalier's Is 86%."
- "In 86% of Fatal Cavalier Crashes, the Cavalier Driver Dies. In Ram 2500 Crashes, It's 21%."
- "Every Fatal Crash Has a Winner. I Ranked 337 Vehicles by Which Side You'd Be On."

## Kicker
**The Gap** — comparisons and disparities

# Research — #1126: GM Builds the Same Truck Twice. The Cheap Badge Kills 24% More Per Mile.

**Slug:** `1126-silverado-sierra-twin-death-rate-gap`
**Journalist:** Clara Rollover (comparisons beat; last at #1122)
**Kicker:** The Gap
**Ship date target:** 2027-08-10

## Angle (1-2 sentences)
The Chevrolet Silverado is the deadliest vehicle in America by body count — 9,591 deaths in 2014–2023, more than the F-150's 9,194 despite a smaller fleet. Its badge-engineered twin, the GMC Sierra, rides on the same platform with the same drivetrains — but kills at 1.01 deaths per 100M miles against the Silverado's 1.25, a 24% gap the steel can't explain.

## Kill test
- **Newsworthy?** Yes. The #1 body-count vehicle in the FARS dataset has literally never been profiled in 1,125 articles (full-queue grep for "silverado": zero hits; "sierra": zero hits).
- **Novel?** Yes. Three original computations: (1) the Silverado/Sierra per-mile rate gap (1.25 vs 1.01, ratio 1.238) with platform twinship; (2) occupant-lethality-per-fatal-crash-involvement for the full-size segment (Silverado 48.6%, Sierra 47.1%, F-150 45.8%, Ram 43.6%) — the #904 piece ran this metric for extremes (Saturn S vs Ram 2500) but never for the big-three truck war; (3) model-year death-distribution shapes showing the fleets age identically (pre-2005 share: Silverado 50.9%, Sierra 50.1%), ruling out the old-fleet excuse.
- **Surprising?** Yes. Same platform, same factories, same 15.7% alcohol-positive rate (identical to the decimal), yet the Chevy badge dies 24% more per mile. The Ram bonus paradox: the loudest, most stereotype-reckless brand has the safest per-mile rate of the American full-size trio (0.78).
- **Clara-appropriate?** Head-to-head comparisons with the toxicology controlled is her beat (#1070 Explorer/Pilot). Proceed.

## Primary sources
1. **NHTSA FARS 2014–2023 per-model data** (site's own fars_output.js, derived from FARS bulk CSV + US sales + NHTS VMT): Silverado deaths=9,591, crashes=19,732, rate=1.25, fleet=5,687,500; Sierra deaths=3,337, crashes=7,084, rate=1.01, fleet=2,450,000; F-150 deaths=9,194, crashes=20,066, rate=1.04; Ram deaths=4,407, rate=0.78. Toxicology: Silverado alc 15.7%/drug 8.7%/any 20.6% (n=23,675); Sierra alc 15.7%/drug 9.2%/any 21.0% (n=9,319). https://www.nhtsa.gov/research-data/fatality-analysis-reporting-system-fars
2. **MotorTrend, "What Is The Difference Between GMC And Chevy"** — the two trucks "essentially the same vehicle" since 1998; the 2019 generation shares chassis, drivetrains, interior; GMC positioned as the luxury brand ("the bulk of GMC's sales come from its high-end Denali sub-brand"; 80%+ of Sierra sales are SLT/AT4/Denali), while "Chevrolet sells the majority of its product to traditional truck buyers and to fleets." https://www.Motortrend.com/features/what-is-the-difference-between-gmc-and-chevy
3. **GM Authority, 2020 Silverado vs Sierra comparison** — "both roll on the same GM T1 platform, and both offer the same powertrain and drivetrain combos... even produced side-by-side in the same production facilities." https://gmauthority.com/blog/2020/09/here-are-the-styling-differences-between-the-2020-chevy-silverado-and-2020-gmc-sierra/
4. **IIHS, "Vehicle size and weight"** — physics grounding for why truck crashes kill others at higher rates (occupant lethality framing). https://www.iihs.org/topics/vehicle-size-and-weight

## Key numbers (all verified from fars_output.js, 2026-10-10)
- Body count (2014–2023): Silverado 9,591 (#1 of 337 nameplates); F-150 9,194; Sierra 3,337; Ram 4,407; Tundra 1,223.
- Silverado fleet (5,687,500) is SMALLER than the F-150 fleet (6,562,500), yet Chevy logged more deaths.
- Per-mile rate: Silverado 1.25 vs Sierra 1.01 (ratio 1.238 → 24%); F-150 1.04; Ram 0.78; Tundra 0.94.
- Occupant lethality (deaths / fatal-crash involvements): Silverado 48.6% (9,591/19,732); Sierra 47.1% (3,337/7,084); F-150 45.8%; Ram 43.6%. So the Silverado gets into FEWER fatal crashes than the F-150 but produces MORE deaths.
- Impairment dead heat: Silverado alc 15.7%/drug 8.7%/any 20.6% vs Sierra alc 15.7%/drug 9.2%/any 21.0%. Alcohol rates identical to the decimal.
- Model-year death shares (rules out old-fleet artifact): Silverado pre-2005 50.9% / 2005-2010 27.3% / 2011-15 14.1% / 2016-23 7.8%; Sierra 50.1% / 27.5% / 14.8% / 7.6%. Virtually identical.
- Deaths per 1,000 vehicles: Silverado 1.686 vs Sierra 1.362 (same 24% gap; sales-based denominator, no VMT estimate).

## Original contribution
The twin-badge death-rate gap: same platform, same factories, same buyer-toxicology — 24% different outcomes. The buyer-base theory: 80%+ of Sierras sell as premium trims (Denali/SLT/AT4) to older, wealthier retail buyers; the Silverado is the fleet/work-truck volume play (regular-cab WT from the low $30Ks), driven harder on rural roads by younger drivers. The data can't name the mechanism, but it kills the three lazy explanations (steel, booze, old trucks) in sequence.

## Limitations
- FARS captures only fatal crashes. The per-mile rate uses VMT estimated from sales + NHTS annual-mileage assumptions, carrying roughly ±15% uncertainty per model. The ±15% bands on each rate could cover most of the 24% gap in the worst case; the deaths-per-1,000-vehicles ratio (1.686 vs 1.362, sales-based denominator) is more robust and shows the same 24%.
- No driver-age, income, or cab-configuration breakdown in the site's data. The "buyer demographics" mechanism is inference from MotorTrend's trim-mix reporting, not a FARS cross-tab.
- Alcohol-positive = BAC > 0, not necessarily ≥ 0.08.
- The Ram's 0.78 rate is striking but partly reflects a younger fleet mix (Ram sales skew newer model years than the dataset window's deadliest trucks) — treated as a side note, not a claim.

## Strongest counterargument (full strength)
The gap could be entirely exposure, not behavior. The Silverado sells far more regular-cab 2WD work trucks and fleet vehicles than the Sierra; work trucks drive more miles, carry more occupants on job sites, and spend their hours on rural two-lane highways where crash severity is highest — none of which the VMT estimate adjusts for. Sierra Denalis are suburban grocery-getters with adaptive cruise and automatic emergency braking; Silverado WTs are the truck that goes to work at 5 AM. If you adjusted for road type, occupancy, and hours driven, the "same truck" might have the same death rate, and the badge would be innocent. The data proves the gap exists; it does not prove which variable owns it.

## Actionable insight
Shopping used full-size trucks? The trim matters more than the badge: fleet-spec work trucks (regular cab, vinyl seats, no driver-assist) are the fleet's deadliest configuration regardless of brand — look for crew cabs with automatic emergency braking and ESC, which the Sierra's trim mix bundles by default. Check any VIN at nhtsa.gov/recalls before buying. And the Ram data point for your group chat: the brand with the lifted-truck stereotype has the safest per-mile rate of the American trio — buy the driver, not the image.

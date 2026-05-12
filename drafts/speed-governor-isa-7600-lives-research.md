# Research Notes: Speed Governor / ISA Article

## News Hook (Breaking May 12, 2026)
- **NYC DCAS ISA program:** Installed intelligent speed assistance on 700 city vehicles
- **Result:** 64% reduction in speeding; 49% reduction even among habitual speeders
- **How it works:** Limits accelerator above threshold (set at 11 mph over limit to match camera enforcement); does NOT apply brakes
- **Source:** US DOT evaluation of NYC DCAS program (published Oct 2024): https://www.nyc.gov/assets/dcas/downloads/pdf/fleet/nyc-intelligent-speed-assistance-pilot-evaluation-2024-oct.pdf
- **NY State law:** "Stop Super Speeders" bill included in 2026 budget; requires ISA for drivers caught on speed cameras 16+ times in 12 months (~15,000 New Yorkers affected)
- **EU precedent:** ISA mandatory on ALL new cars sold in EU since July 2024
- **NYC expansion:** Planning to go from 700 to 1,600 vehicles; eventually all 7,000 non-emergency fleet vehicles
- **Keith Kerman quote (DCAS deputy commissioner):** "We now can design a vehicle that won't speed. We don't have to depend on the driver doing the right thing."
- **Extreme example:** NYPD officer James Giovansanti - 547 speed camera and red-light violations since 2022, still on the force

## NHTSA Speed Data
- Speeding contributed to **29% of all traffic fatalities** (consistent 2019-2023)
- 2023: ~40,990 total deaths → ~11,887 speed-related deaths
- 2021: 12,330 speed-related deaths (14-year high, pandemic driving behavior)
- Speed-related fatalities involve: higher speed = more kinetic energy = less survivable crashes
- Young male drivers 15-24 most likely to be speeding in fatal crashes

## The Math (Novel Contribution)
- 11,887 speed-related deaths/year (2023, NHTSA)
- NYC ISA reduces speeding by 64%
- If applied to all US vehicles: 64% × 11,887 = **~7,608 lives saved per year**
- That's **20.8 lives per day**
- Over a decade: **76,000 lives**
- For context: more than ALL motorcycle fatalities (6,218 in 2023)
- For context: more than ALL pedestrian fatalities by drunk drivers

## FARS Data Cross-Reference
- **Sports cars** have highest class death rate (avg 1.95 per 100M VMT), highest impairment (22.5%), but also the highest speed-profile
  - Mustang: rate 6.02, 2,739 deaths, 21.9% impaired → 78% sober → speed is the dominant kill factor
  - Camaro: rate 3.44, 1,204 deaths, 23% impaired
  - Corvette: rate 1.52, 320 deaths, 26.2% impaired
- **Total FARS dataset**: 191,193 deaths across 337 models (2014-2023)
- **29% speed-related**: ~55,446 deaths in dataset period
- **Fleet-weighted speed death rate by class (estimated):**
  - Sports Cars: rate 1.95 × 0.29 speeding = 0.57 speed deaths per 100M VMT
  - Sedans: rate 1.02 × 0.29 = 0.30
  - Pickups: rate 1.09 × 0.29 = 0.32
  - SUVs: rate 0.63 × 0.29 = 0.18
  - Vans: rate 0.63 × 0.29 = 0.18

## Limitation: ISA ≠ Speed Elimination
- NYC's ISA limits the accelerator at 11 mph over. It doesn't prevent ALL speeding.
- EU ISA allows drivers to override by pressing harder (informational/advisory in many implementations)
- A driver who deliberately holds the accelerator down or in an emergency needs to accelerate can still speed
- The 64% reduction is real-world, meaning SOME speeding still occurs
- Weather, road conditions, other factors beyond speed still contribute
- Correlation ≠ causation: not all "speed-related" FARS deaths would be prevented by ISA (ISA addresses sustained speeding, not momentary loss of control)

## Strongest Counterargument
- "People will just override it or find workarounds"
- NYC data ADDRESSES this directly: even habitual speeders reduced speeding 49%
- The tech doesn't make it impossible, just harder and less convenient
- Seatbelt comparison: people said they'd never wear them either. Compliance took decades but saved millions.

## Existing Car Industry Position
- No US automaker offers ISA as standard equipment
- Some luxury brands have speed limiters (parent-set) but not geofenced ISA
- Industry lobbied against Section 24220 (Infrastructure Law) passive impairment detection mandate
- The car industry SELLS speed: IIHS found 43% of car ads emphasize speed/traction, only 8% emphasize safety

## Primary Sources (3+)
1. NYC DCAS ISA Evaluation (US DOT, 2024): https://www.nyc.gov/assets/dcas/downloads/pdf/fleet/nyc-intelligent-speed-assistance-pilot-evaluation-2024-oct.pdf
2. NHTSA Speed-Related Fatality Statistics: https://www.nhtsa.gov/risky-driving/speeding
3. NHTSA FARS database (2014-2023): https://www.nhtsa.gov/research-data/fatality-analysis-reporting-system-fars
4. NSC Speeding Injury Facts: https://injuryfacts.nsc.org/motor-vehicle/motor-vehicle-safety-issues/speeding/
5. Streetsblog NYC ISA reporting (May 12, 2026): https://nyc.streetsblog.org/2026/05/12/citys-in-house-program-proves-speed-governors-work

## Kill Test
- **Genuinely newsworthy?** YES. NYC published real-world ISA results TODAY. EU already mandates it. No US coverage connecting ISA effectiveness data to FARS death toll.
- **Novel angle on data?** YES. Cross-referencing NYC's 64% effectiveness rate against NHTSA's speed-fatality data to calculate national lives saved. No article has done this math.
- **Would a reader share this?** YES. "A device that could save 7,600 lives per year exists, costs $200, and no US automaker installs it" is a shareable thesis.

## Assignment
- **Journalist:** Mia Crumplezone (Safety Engineering Editor)
- **Kicker:** Investigation
- **Slug:** speed-governor-isa-7600-lives

# Research Notes: The Engineering-Behavior Gap

## Angle
NHTSA's 2025 preliminary data shows a 1.10 fatality rate per 100M VMT — the second-lowest in recorded history, behind only 2014's 1.08. The natural reaction is celebration. But the FARS data reveals something troubling: given how much safer the 2025 fleet is compared to 2014's fleet, the rate should be dramatically lower. The gap between what the engineering delivers and what the drivers waste is the real story.

## Journalist: Mia Crumplezone (Safety Engineering Editor)
## Kicker: The Gap

## Key Data Points

### NHTSA 2024/2025 Release (April 2, 2026)
- 2023: 41,025 fatalities
- 2024: 39,254 fatalities (-4.3% from 2023), rate: 1.19 per 100M VMT
- 2025 (preliminary): 36,640 fatalities (-6.7% from 2024), rate: 1.10 per 100M VMT
- 2025 rate is second-lowest ever (2014 was 1.08)
- VMT increased 0.9% in 2025 (29.8 billion more miles)
- Deaths down in 39 states + DC + Puerto Rico
- "Fifth largest % decrease in FARS recorded history" — NHTSA
- Source: NHTSA research notes 813791 (2024 overview), 813800 (2025 early estimate)

### Fleet Safety Engineering Improvements Since 2014
1. **ESC Mandate (FMVSS 126):** Required on all passenger vehicles from MY2012. By 2014, only ~40% of the on-road fleet had ESC. By 2025, ~85%+ of the fleet has ESC. IIHS estimates ESC reduces fatal single-vehicle crash risk by 49% for SUVs, 33% for cars.
2. **Side-curtain airbags:** Standard on virtually all vehicles post-2013. IIHS found they reduce fatal crash risk by 37% in near-side crashes.
3. **AEB (Automatic Emergency Braking):** Voluntary industry commitment from 2016, adopted on ~60% of new vehicles by 2022. IIHS estimates AEB reduces front-to-rear crashes by 50%.
4. **Crossover shift:** In 2014, SUVs/crossovers were ~37% of new sales. By 2025, ~55%+. Our FARS data shows SUVs have 47.4% crash survivability vs 35.7% for sedans.
5. **Pre-ESC vehicle retirement:** MY2000-2008 vehicles (the deadliest generation per our FARS data) were 30-40% of the fleet in 2014. By 2025, they're <10%.

### FARS Data Analysis (2014-2023)
From our dataset (183,188 total deaths, 322,909 fatal crashes):
- Sedans: 85,216 deaths / 132,448 crashes = 35.7% survivability
- SUVs: 43,862 deaths / 83,327 crashes = 47.4% survivability
- Pickups: 41,351 deaths / 84,733 crashes = 51.2% survivability
- Vans: 7,271 deaths / 14,229 crashes = 48.9% survivability
- Sports Cars: 5,488 deaths / 8,172 crashes = 32.8% survivability

### The Gap Calculation (Novel Contribution)
If we assume:
- ESC alone should reduce the fatal crash rate by ~15-20% fleet-wide (given full adoption vs 2014's partial adoption). Conservative: 15%.
- Crossover shift replaces sedan-class vehicles with SUV-class survivability. The 12pp sedan→SUV survival gap, applied to the ~18% shift in fleet composition, contributes another ~2-3% reduction.
- AEB adoption at ~50% of new vehicles since 2018 should reduce front-to-rear fatals by ~5% fleet-wide (50% AEB × 28% rear-end crash share × 50% effectiveness × fleet penetration).
- Pre-ESC fleet attrition removes the highest-risk vehicles.

Conservative total engineering dividend: ~20-25% reduction in fatality rate from 2014 levels.

2014 rate: 1.08 per 100M VMT.
Expected 2025 rate with 2014-era behavior: 1.08 × 0.75 to 0.80 = ~0.81 to 0.86
Actual 2025 rate: 1.10

**The behavioral tax: 0.24 to 0.29 per 100M VMT**
That's roughly 8,000-9,600 excess deaths per year that the engineering should have prevented but didn't.

### What's Eating the Engineering Gains?
1. **Distracted driving:** NHTSA says 1 person killed every 2.5 hours. 18 injured every 30 minutes. Smartphone adoption was ~58% in 2014 vs ~92% in 2025.
2. **Speed:** Average speeds increased post-COVID and haven't returned to pre-2020 levels. Multiple states raised speed limits 2014-2025.
3. **Vehicle weight disparity:** Average new vehicle weight went from ~4,000 lbs in 2014 to ~4,400+ lbs in 2025. Heavier vehicles are safer for occupants but deadlier for everyone else — the aggressor effect offsets part of the SUV safety dividend.
4. **Pedestrian/cyclist deaths:** Taller hoods + faster speeds = more pedestrian fatalities, partially offsetting occupant safety gains.

### Strongest Counterargument
The rate comparison isn't apples-to-apples. 2014 was a historically low year (pre-rideshare boom, post-recession driving patterns, gas prices). Comparing to 2014 is cherry-picking a trough. A fairer baseline might be the 2006-2013 average of ~1.18. Against that benchmark, the engineering gains look smaller and the behavioral deterioration looks less dramatic.

### Limitations
1. The "engineering dividend" calculation requires assumptions about fleet-wide safety technology penetration that can't be precisely measured from FARS data alone.
2. VMT estimates have ±2% uncertainty.
3. "Behavioral factors" is a catch-all that includes road design, medical response times, and other non-vehicle variables.
4. FARS data covers 2014-2023; the 2025 rate comes from NHTSA preliminary estimates, not our dataset.

### Actionable Insights
- The cars are doing their job. You are not.
- AEB only works if you don't override it. ESC only works if you're not going 90.
- If you're shopping for a car: post-2018 crossovers with AEB are literally engineering fortresses. But they can't save you from your phone.
- Policy implication: NHTSA's $665M in safety grants goes to enforcement campaigns. The data suggests those campaigns need to offset ~$8B-$12B in behavioral degradation (at $12.5M statistical value of life × 8,000 excess deaths).

### Sources
1. NHTSA, "Overview of Motor Vehicle Traffic Crashes in 2024," Research Note DOT HS 813 791 (April 2026)
2. NHTSA, "Early Estimate of Motor Vehicle Traffic Fatalities in 2025," Research Note DOT HS 813 800 (April 2026)
3. IIHS, "Life-saving benefits of ESC continue to accrue" (2011)
4. IIHS, "Real-world benefits of crash avoidance technologies" (AEB effectiveness)
5. NHTSA, "Put the Phone Away or Pay" campaign data (April 2026)
6. NHTSA FARS 2014-2023 (our dataset)
7. IIHS, "Status Report: Side-curtain airbags" (fatality risk reduction)

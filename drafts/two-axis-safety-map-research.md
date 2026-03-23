# Research: The Two-Axis Safety Map — Crash Avoidance vs. Crashworthiness in FARS Data

## Angle
IIHS has always evaluated vehicles on two dimensions: crash avoidance (can the vehicle prevent a crash?) and crashworthiness (when a crash happens, do you survive?). But these evaluations are based on lab tests. Our FARS data lets us measure both dimensions at the fleet level using real-world outcomes:

- **Crash frequency** = crashes per 100K registered fleet (proxy for crash avoidance)  
- **Crash lethality** = deaths / crashes (proxy for crashworthiness)

When you cross these two axes, you get four quadrants — and the results are disturbing.

## Kill Test
✅ Novel analysis: Nobody has published a fleet-level two-axis safety quadrant using FARS data
✅ Surprising findings: Some vehicles crash constantly but protect occupants; others almost never crash but kill when they do
✅ Actionable: Changes how consumers should evaluate safety — a "safe" car might just be one that doesn't crash often
✅ 3+ sources: FARS, IIHS framework, NHTSA crash avoidance research

## Key Data (vehicles with >500 crashes, fleet >100K)

### Averages
- Mean crash rate: 280 per 100K fleet
- Mean lethality: 0.572 (57.2% of FARS-recorded crashes result in death)

### Q1: Crash Often & Die (worst of both worlds)
- Chevy S-10: 864 crash/100K, 0.755 lethality
- Nissan Maxima: 888 crash/100K, 0.662 lethality
- Chevy Cobalt: 726 crash/100K, 0.808 lethality
- Chevy Impala: 852 crash/100K, 0.675 lethality (3,774 deaths!)
- Ford Mustang: 692 crash/100K, 0.696 lethality
- Honda Accord: 548 crash/100K, 0.644 lethality (7,102 deaths!)

### Q2: Rare But Lethal (silent killers — low crash frequency, high lethality)
- Dodge Neon: 201 crash/100K, 0.856 lethality
- Chevy Sonic: 214 crash/100K, 0.754 lethality
- Chevy Spark: 199 crash/100K, 0.744 lethality
- Nissan Versa: 143 crash/100K, 0.723 lethality
- Hyundai Accent: 127 crash/100K, 0.717 lethality

### Q3: Crash Magnets That Protect You (high crash frequency, low lethality)
- Ford E-350: 721 crash/100K, 0.410 lethality
- GMC Yukon: 668 crash/100K, 0.476 lethality
- Chevy Tahoe: 611 crash/100K, 0.510 lethality
- Chevy Silverado: 347 crash/100K, 0.486 lethality (9,591 deaths from sheer volume)

### Q4: Safe in Every Way (low crash frequency, low lethality)
- Ram 2500: 85 crash/100K, 0.205 lethality
- Ford Transit: 55 crash/100K, 0.308 lethality
- Ram 1500: 50 crash/100K, 0.341 lethality
- Honda Pilot: 81 crash/100K, 0.453 lethality
- Toyota RAV4: 49 crash/100K, 0.498 lethality

## Novel Finding
The most disturbing quadrant is Q2: vehicles that rarely appear in FARS — making their fleet-level death rate look acceptable — but when they DO crash, occupants almost always die. The Nissan Versa crashes at just 143 per 100K fleet (half the average), which makes its overall death rate look moderate. But 72.3% of those crashes are fatal. By contrast, the GMC Yukon crashes at 4.7x the Versa's rate but only 47.6% of those crashes kill someone.

**Implication:** A "safe" car on paper (low overall death rate) might just be a car that doesn't crash much. When it does crash, it might be a deathtrap. Traditional death-rate-per-VMT conflates these two completely different failure modes.

## Limitations
- FARS only records crashes that involve at least one fatality — we can't see non-fatal crashes. "Crash frequency" here means "fatal crash frequency." A vehicle with low FARS crash involvement could still crash frequently but non-fatally (which is actually GOOD).
- Fleet estimates are approximations based on sales data and estimated vehicle lifespans
- Some Q2 vehicles may have low crash rates because they're driven less (retiree cars, city cars)
- FARS lethality measures deaths per fatal crash, not deaths per crash of any severity

## Strongest Counterargument
The "silent killer" framing may be misleading. Low crash frequency in FARS could mean the vehicle avoids crashes that reach fatal severity entirely — which is the BEST possible outcome. A vehicle that only shows up in FARS when something truly catastrophic happens (high speed, wrong-way, etc.) will naturally have a high lethality ratio, not because the car is poorly built but because the survivable crashes never make it into the dataset. The Q2 vehicles might actually be the safest cars on the road, with their few FARS appearances representing only the unsurvivable crashes.

## Sources
1. NHTSA FARS 2014-2023: https://www.nhtsa.gov/research-data/fatality-analysis-reporting-system-fars
2. IIHS crash avoidance vs crashworthiness framework: https://www.iihs.org/ratings
3. IIHS vehicle size/weight research: https://www.iihs.org/topics/vehicle-size-and-weight
4. NHTSA 2024 fatality estimate (39,345 — 3.8% decrease): https://www.nhtsa.gov/press-releases/nhtsa-estimates-39345-traffic-fatalities-2024
5. IIHS ESC effectiveness study: https://www.iihs.org/news/detail/life-saving-benefits-of-esc-continue-to-accrue

## Journalist
Mia Crumplezone — Safety Engineering Editor. This is a structural/design analysis of how crash avoidance and crashworthiness interact.

## Self-Critique
**Is this genuinely surprising after 99 articles?** Yes. We've done lethality ratios (article crash-lethality-ratio) and death rates per VMT, but never cross-referenced both dimensions simultaneously. The four-quadrant map is a new analytical framework, and the Q2 "silent killer" insight challenges the conventional wisdom that low death rates = safe cars. The counterargument (FARS selection bias) is strong enough to make this a genuine debate rather than a gotcha.

**Verdict:** Proceed.

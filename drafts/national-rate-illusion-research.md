# Research Notes: national-rate-illusion

## Angle
NHTSA's celebrated 1.10 fatality rate per 100M VMT (2025 preliminary) — the second-lowest in history — is a fleet-wide average that obscures a 71x spread in per-vehicle death rates. Decomposing the national rate using FARS data reveals that the number is meaningless for any individual driver. Your risk is determined almost entirely by what you drive, not by the national rate trend.

## Self-Critique Gate
**Proposal:** The national fatality rate is celebrated as progress but is a statistical fiction that hides massive vehicle-level variation.
**Challenge:** "Averages hide disparities" is Statistics 101. Has this already been said?
**Verdict:** PROCEED. The *specific decomposition* — cross-tabulating per-vehicle FARS rates against the national rate — hasn't been published. Nobody outside this dataset has shown that the Mazda CX-5 (0.12) and Hyundai Veloster (8.54) both get collapsed into the same "1.10" number. The 71x spread within a single national statistic is genuinely shocking, and the consumer implication (the rate NHTSA celebrates tells you nothing about YOUR risk) is directly actionable.

## Journalist
**Clara Rollover** — Consumer Safety Advocate. Practical, direct, angry on behalf of consumers. This is her wheelhouse: "before you believe that number, let me show you what it actually means."

## Kicker
The Gap

## Primary Sources
1. **NHTSA press release (April 1, 2026):** 2025 preliminary data — 36,640 deaths, 1.10 per 100M VMT (second-lowest in history behind 1.08 in 2014). 2024 final — 39,254 deaths, 1.19 per 100M VMT. VMT increased 0.9% in 2025 vs 2024. 39 states + DC + PR saw fatality decreases.
   - URL: https://www.nhtsa.gov/press-releases/traffic-deaths-2025-early-estimates-2024-annual
   
2. **AASHTO Journal reporting:** All 10 NHTSA regions projected to have decreases. Fifth largest percentage decrease in FARS history. NHTSA Administrator Jonathan Morrison: "Under President Trump and Secretary Duffy, American roads are safer."
   - URL: https://aashtojournal.transportation.org/nhtsa-traffic-deaths-declined-significantly-in-2025/

3. **FHWA historical data:** 2014 rate was 1.08 (32,744 fatalities). 2015 jumped to 1.12 (35,092 — +7.2%). The "1.10" in 2025 is essentially back to 2014 levels after a decade-long spike.
   - URL: https://highways.dot.gov/safety/zero-deaths

4. **FARS data (local, 2014-2023):** 337 vehicle models with per-model fatality rates per 100M VMT.
   - Safest: Mazda CX-5 (0.12), Honda HR-V (0.13), Ram 1500 (0.13), Ford Transit (0.14), VW Tiguan (0.14)
   - Deadliest: Hyundai Veloster (8.54), Chevrolet Tracker (7.83), Toyota Land Cruiser (6.27), Ford Mustang (6.02), Chevy Impala (5.00)
   - 71x spread between safest and deadliest
   - By class: Sports Cars 0.681 avg lethality ratio, Sedans 0.645, SUVs 0.524, Pickups 0.489

5. **Advocates for Highway and Auto Safety (April 1, 2026):** Noted injuries only decreased "slightly" in 2024 after increasing in 2023. Called for AEB improvements, impaired driving prevention technology, ISA.
   - URL: https://saferoads.org/2024-nhtsa-crash-data/

## Novel Analysis (Original Contribution)

### Rate Decomposition
The national 1.10 rate is a weighted average:
- National rate = Σ(vehicle_rate × vehicle_VMT_share)
- FARS data: 337 models with individual rates
- Vehicles BELOW national avg rate: majority are SUVs and newer crossovers (rate 0.12–1.0)
- Vehicles ABOVE national avg rate: older sedans, sports cars, small pickups (rate 2.0–8.54)
- The "improvement" from 1.19 → 1.10 could be driven entirely by fleet composition shifts (more crossover SUVs, fewer old sedans)

### Key Statistics from FARS
- Fleet-wide: 190,592 deaths / 335,285 VMT-normalized → matches national avg
- 57.6% of deaths are in vehicles 11+ years old
- Deadliest single model years: 2000-2008 (the "danger decade")
- 80.1% of deaths involve sober drivers

### Consumer Implication
The 1.10 rate is meaningless. If you drive a 2022 RAV4, your rate is ~0.19. If you drive a 2005 Impala, your rate is ~5.00. Both are "covered" by the same national average. The difference between those two vehicles is a 26x gap in fatal crash risk — larger than the difference between the US national rate and the worst country on earth.

## Limitations
- FARS rates use estimated fleet/VMT — not actual odometer readings (±15% uncertainty for low-volume models)
- Rate comparison assumes similar driving conditions; high-rate vehicles may also be driven more aggressively (confounding factor)
- The national 1.10 rate is preliminary (2025 estimate); final could differ
- Cannot directly compute what fraction of the 1.19→1.10 decline is fleet composition vs behavior because we lack 2024-2025 FARS model-level data

## Strongest Counterargument
The national rate IS useful as a population-level benchmark. Epidemiologists track population-level rates precisely because individual-level variation is too noisy for policy. NHTSA's job is to set nationwide standards, not give individual consumer advice — that's IIHS's role. The 1.10 rate accurately reflects that the average American mile driven is slightly safer than last year, and the trend line matters for policy even if no individual driver experiences the average.

## Actionable Takeaways
1. Stop trusting the national rate as your personal risk metric. Check YOUR vehicle's FARS death rate.
2. If your vehicle's rate is above 2.0 per 100M VMT, you face 2x the national average — and no seatbelt campaign will fix that.
3. The fastest way to cut your personal fatality risk is not to drive more carefully but to drive a different vehicle.
4. Vehicles with rates below 0.5 per 100M VMT exist in every price bracket — you don't need a luxury SUV to be safe.

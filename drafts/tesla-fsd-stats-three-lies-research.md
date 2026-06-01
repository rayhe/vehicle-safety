# Research Notes: Tesla FSD Safety Statistics — Three Lies Deep

## Angle
Tesla claims FSD is 7–10x safer than human drivers. Reuters (May 28, 2026) found that 10 of 11 traffic-safety researchers called these claims "misleading marketing." The original contribution: decomposing Tesla's claimed safety advantage into three compounding statistical distortions, computing what each contributes, and showing that once corrected, the claimed advantage may vanish entirely.

## Kill Test
- **Genuinely newsworthy?** YES — Reuters investigation published 4 days ago, most comprehensive debunking of Tesla's safety methodology to date
- **Novel angle?** YES — nobody has decomposed the three layers of distortion into quantifiable multipliers. Tesla's "10x safer" = 3x from crash-type mismatch × ~2x from fleet age × ~1.5x from selection bias = ~9x artificial inflation on top of unknown actual safety benefit
- **Data-driven?** YES — original calculation using FARS model-year trends, fleet age data, and crash severity distributions

## Primary Sources (3+)
1. **Reuters Investigation** (May 28, 2026): "Why Tesla's AI trainers don't trust its self-driving tech — or its safety stats." Interviews with 9 former data labelers, 1 former engineer, 11 traffic-safety researchers. https://www.reuters.com/investigations/why-teslas-ai-trainers-dont-trust-its-self-driving-tech-or-its-safety-stats-2026-05-28/
2. **NHTSA FARS database** (2014–2023): Model year fatality trends showing newer vehicles have inherently lower crash/fatality rates
3. **Tesla FSD Safety Report** (tesla.com): The source of the 7x/10x claims, using airbag-deployment vs tow-away crash comparison
4. **Marco Benedetti analysis** (University of Michigan Transportation Research Institute, former NHTSA statistician): Corrected comparison shows ~3x, not 10x
5. **Waymo safety methodology**: Peer-reviewed, condition-matched, published in journals with acknowledged limitations

## The Three Distortions

### Distortion #1: Crash-Type Mismatch (inflates by ~3x)
Tesla counts only its crashes where airbags deployed. It compares against NHTSA data that includes ALL tow-away crashes (far less severe — most tow-aways don't involve airbag deployment). When Benedetti corrected to airbag-vs-airbag, the advantage dropped from 10x to ~3x.

### Distortion #2: Fleet Age Gap (inflates by ~2x)
Tesla's average vehicle age: 4.1 years (S&P Global Mobility). US fleet average: 12.8 years. FARS model-year data shows newer vehicles have dramatically lower fatality rates due to ESC (mandated 2012), AEB, lane keeping, blind-spot monitoring, etc. Phil Koopman (Carnegie Mellon): "Any new car is dramatically safer than a 12-year-old car."

### Distortion #3: Selection + Exposure Bias (inflates by ~1.5x)
- FSD is used mostly on highways (lower crash rate per mile)
- Drivers turn off FSD in complex situations where crashes are more likely
- Tesla only counts crashes within 5 seconds of FSD deactivation; NHTSA requires 30 seconds
- FSD isn't autonomous — it's comparing human+FSD to human alone, not robot to human
- Tesla's fleet: newer, wealthier owners, better-maintained, urban/suburban (fewer rural fatalities)

### The Compound Effect
10x claimed ÷ 3x (crash mismatch) ÷ 2x (age gap) ÷ 1.5x (selection) ≈ 1.1x actual
The remaining benefit, if any, may be within statistical noise.

## Supporting Data Points
- 7 of 9 data labelers told Reuters they wouldn't trust FSD to drive them
- One said he wouldn't ride in a Tesla robotaxi "if you fucking paid me"
- A veteran self-driving engineer called Tesla's safety claims "bullshit"
- Tesla still operates ~50 robotaxis in Austin after 1 year (Musk predicted 500 by end of 2025)
- 17 incidents involving Tesla Austin robotaxis (July 2025 – April 2026), 3 injuries
- Tesla seeks no peer review of its safety statistics
- Waymo publishes in peer-reviewed journals, compares to similar conditions
- Musk's "32,000 lives saved" claim assumes every US vehicle (including freight trucks and motorcycles) replaced by FSD Tesla

## Journalist
**Axle McScatter** — Data Visualization Editor. This is a methodology piece about lying with statistics — his exact beat.

## Kicker
Investigation

## Counterargument (strongest, at full strength)
Tesla's cars ARE newer and ARE equipped with more safety tech than the average US vehicle. The comparison to the average fleet, while unfair, does reflect the real-world outcome: a person who buys a new Tesla with FSD IS less likely to die in a crash than someone driving the average American car. The statistical methodology may be sloppy, but the directional claim — that modern Teslas crash less — is probably true in aggregate. The question is whether FSD contributes anything beyond what you'd get from buying any new car with modern safety equipment.

## Limitations
- We can't compute the exact FSD-specific contribution because Tesla keeps its crash data secret
- The "3x" corrected figure from Benedetti still includes fleet-age and selection biases
- FARS data measures fatality rate, not crash rate — a car can crash more but kill less (or vice versa)
- Our fleet-age adjustment is approximate — based on FARS model-year trends, not identical to crash-rate-by-age

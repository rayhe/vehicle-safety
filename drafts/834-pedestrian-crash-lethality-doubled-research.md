# Research Notes — #834: Pedestrian crash lethality doubled in a decade

**Slug:** `pedestrian-crash-lethality-doubled`
**Journalist:** Axle McScatter (data roundup; "I ran the numbers. Then I ran them again.")
**Kicker:** By The Numbers
**News peg:** GHSA "Pedestrian Traffic Fatalities by State: 2025 Preliminary Data," published July 14, 2026 (full-year report).

## Kill test
Genuinely newsworthy? Yes. Fresh July 2026 federal/state dataset, third straight annual decline (6,732 projected, -7%, -505 lives) sitting on top of a disturbing decade-long trend the report buries in Part 2: **when a car hits a pedestrian, the crash is more than twice as likely to be fatal as in 2015 (4.0% -> 10.1%)**. Novel for the site? Verified: no existing story makes pedestrian-crash lethality its thesis (checked: death-decline-injury-plateau, injury-plateau-survivability-gap, pickup-suv-light-truck-split are occupant/injury stories; distraction-share-pedestrian-deaths-doubled covers the distraction stat; pedestrian-decline-five-state-mirage covers the H1-2025 GHSA report, not the full-year lethality finding). Angle: the paradox — deaths falling while per-crash lethality rises — plus the implied decomposition (crash volume roughly halved). That decomposition is the original contribution.

## Primary sources
1. GHSA, "Pedestrian Traffic Fatalities by State: 2025 Preliminary Data" (July 2026), full PDF. https://www.ghsa.org/sites/default/files/2026-07/Pedestrian%20Traffic%20Fatalities%20by%20State%202025%20Data.pdf
2. GHSA press release, "U.S. Pedestrian Deaths Fall for Third Straight Year" (July 14, 2026). https://www.ghsa.org/news/us-pedestrian-deaths-fall-third-straight-year
3. IIHS: Hu, W., Monfort, S. S., & Cicchino, J. B. (2024, September). "The association between passenger-vehicle front-end profiles and pedestrian injury severity in motor vehicle crashes." https://www.iihs.org/research-areas/bibliography/ref/2294
4. NHTSA FARS (2015-2024 pedestrian death counts, cited via GHSA Figure 1) + CRSS (lethality series, cited via GHSA Figure 11). https://www.nhtsa.gov/research-data/fatality-analysis-reporting-system-fars

## Key numbers (all from GHSA July 2026 unless noted)
- 2025 projected pedestrian deaths: **6,732**, down 7% from 7,237 (2024). **-505 lives.** Third consecutive annual decline. Still 5% above pre-pandemic 2019 (6,412).
- National rate: 2.13 -> **1.97 per 100,000**, first time below 2.0 since pre-pandemic.
- Per billion VMT: 2.20 -> **2.03**, fourth straight annual decline (FHWA: 3,311B VMT in 2025, +0.8%).
- Economic toll: **nearly $94 billion**.
- **Crash lethality: 4.0% (2015) -> 10.1% (2024)** of pedestrian crashes fatal (CRSS, Figure 11). More than doubled.
- Pedestrians = **18% of all traffic deaths in 2024** (nearly 1 in 5), share still near record even as raw count falls.
- Vehicle type: light trucks (SUV/pickup/van) = **50.4%** of 2024 ped deaths vs 40.6% passenger cars. **The gap narrowed slightly in 2024 — first time since it emerged in 2019.**
- Front-end mechanism: tall, blunt front ends associated with **43.6% increase in pedestrian fatality risk** vs low, sloped front ends (IIHS 2024).
- **76.5% of deaths happen after dark** (19.9% daylight, 3.6% dawn/dusk).
- **62.2% where no sidewalk** (down from 68.3% in 2021 — infrastructure improving slowly).
- Hit-and-run: **1,669 deaths (23.8%)**, down 4% YoY.
- Speeding: 8.1% of ped deaths (peak 8.4% in 2020).
- Freeways: 1,100+ deaths (15%); expressway-crossing crashes have **56.7% fatality rate** (4,170 crashes).
- Young drivers: BAC >= .08 in **15.6%** of fatal ped crashes with driver 16-24 (vs 7.2% in 2019). Pedestrian alcohol impairment falling across ages.
- California: 1,067 -> **828 (-239, -22.4%)** — largest drop, nearly half the national decline. North Carolina: 289 -> **383 (+94, +32.5%)** — largest increase. NY: 303 -> 220 (-83). TX: 772 -> 700 (-72). NJ: 230 -> 178 (-52).
- FARS ped deaths by year: 2015: 5,494; 2024: 7,080 (Figure 1).

## Original calculation (the novel contribution)
deaths = crashes x lethality. Back out implied crash volume:
- 2015: 5,494 deaths / 0.040 lethality = **~137,000 pedestrian crashes**
- 2024: 7,080 deaths / 0.101 lethality = **~70,000 pedestrian crashes**
Pedestrian crash volume roughly **halved** over the decade while per-crash lethality rose ~2.5x. Net deaths still up 29% 2015->2024, but falling since the 2022 peak (7,593 FARS / 7,737 state). If 2025 lethality holds near 10%, the 7% death drop implies crashes kept falling.

## Strongest counterargument (must be stated at full strength)
The lethality "doubling" may be partly a **denominator artifact**. CRSS estimates come from sampled police reports; non-fatal pedestrian crashes are increasingly underreported (police non-response to minor crashes, self-reported fender-benders never filed). If the denominator shrinks from reporting changes while the numerator (deaths, well-counted) stays solid, the fatal share rises mechanically — cars may not be twice as deadly per real-world impact, just twice as deadly per *reported* crash. GHSA itself only offers "possible reasons" (bigger vehicles, taller front ends, rural high-speed roads). The IIHS 43.6% front-end figure anchors a real mechanical component, but its share of the 4%-to-10.1% move is unknown. Say this plainly.

## Limitations
- 2025 numbers are preliminary state-reported (SHSO), adjusted for historical underreporting; ~2% higher than FARS by construction (30-day rule, private property, conveyance definitions). Final FARS 2025 arrives 2026-2027.
- CRSS is sampled, not a census; confidence intervals not published in the GHSA excerpt.
- 2025 crash-lethality not yet available — the decomposition uses 2024 lethality.
- "Why are crashes falling" is genuinely unanswered: candidates are pedestrian AEB fleet penetration (IIHS: ~27% fewer pedestrian crashes for equipped vehicles, daytime only — but 76.5% of deaths are at night, capping its explanatory power), enforcement/infrastructure (GHSA's credit), and reduced walking exposure (no national pedestrian-miles data exists — GHSA flags this gap explicitly).

## Actionable takeaways
- If you walk: 76.5% of deaths are after dark — reflective gear and lit routes are the single biggest personal lever; 62% of deaths happen where there is no sidewalk.
- If you buy: pedestrian AEB works in daylight and is now effectively standard on new cars (NHTSA final rule requires it by Sept 2029); a tall blunt front end measurably raises the risk you pose to others.
- If you govern: the California-sized question — one state delivered half the national improvement; North Carolina went the other way (+32.5%). Ask your SHSO which one your state is copying.

## Headline candidates
1. "Getting Hit by a Car Is Twice as Deadly as a Decade Ago. Deaths Fell Anyway."
2. "Pedestrian Crashes Are Twice as Lethal as 2015. Nobody Can Fully Explain Why Deaths Are Down."
3. "The Deadliest Thing About Getting Hit by a Car Is the Car"

Pick: #1 (paradox in the hed, grim, data-backed).

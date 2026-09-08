# Research: #841 — GHSA ISA Guidebook: The Speeding Confession

## Angle
In May 2026 (guidebook dated; amplified at GHSA's 2026 Annual Meeting in Minneapolis, Aug 29–Sep 2, 2026), the Governors Highway Safety Association published "Intelligent Speed Assistance: A New Tool for Safer Roads" — a how-to manual for state highway safety offices to get speed-limiting technology into cars. The headline is what GHSA's CEO Jonathan Adkins admitted out loud in the announcement: "Speeding-related deaths remain a vexing problem and traditional approaches have only been modestly successful."

Translation from bureaucrat-speak: a decade of enforcement-first speed management killed 125,000 people and barely moved the needle. The association of the people in charge of state highway safety just endorsed handing the problem to a computer.

The novel angle for The Crash Report: two years after the EU made ISA mandatory in all new cars (July 2024), America has... a PDF. This is the policy version of thoughts and prayers — except, unusually, it comes with real pilot data showing the tech actually works (NYC: 64% speeding reduction; DC: 91% reduction in speeding occurrences; IIHS/Volpe fleet study: 30% fewer preventable collisions at one carrier). The article does the adoption-speed arithmetic: at guidebook pace vs. mandate pace, how many decades of 11,000-a-year toll does the "voluntary adoption" path cost?

## Kill Test
Is this genuinely newsworthy? YES. The guidebook got minimal mainstream coverage (trucking/transport trade press only). The contradiction is fresh: the federal government withdrew the heavy-truck speed limiter mandate in 2026 (our #N article covered that), while the states' own safety association simultaneously published a manual begging states to install the same class of technology voluntarily. Nobody has run the "how long does the guidebook path take" numbers or juxtaposed the two.

## Primary Sources

### Source 1: GHSA ISA Guidebook (May 2026)
- Full PDF: https://www.ghsa.org/sites/default/files/2026-05/Intelligent_Speed_Assistance_A_New_Tool_for_Safer_Roads.pdf
- Funded by the National Road Safety Foundation (NRSF) and the SteerSafe Partnership (a coalition of active ISA providers — commercial interest, disclose it)
- Recommendations for State Highway Safety Offices: add active ISA programs to state highway safety plans; test ISA in government and contractor vehicle fleets; introduce ISA to parents and teens during driver training; training programs for judges and law enforcement
- Focus populations: persistent speeders, fleet operators, teen drivers
- Admits challenges: driver acceptance, data privacy concerns
- Case study: DC Child and Family Services pilot — 91% reduction in speeding occurrences across an 80-vehicle fleet (DC CFSA presentation, Feb 19, 2026)

### Source 2: NRSF press release (guidebook launch)
- https://nrsf.org/sites/default/files/press-releases/nrsf-ghsa-2026-grant-speeding-guidebook.pdf
- "Intelligent Speed Assistance can prevent up to 22,000 fatal crashes each year" (headline claim — treat as advocate's ceiling, not fact)
- Speeding: 11,000+ deaths in 2024 alone; 125,000 fatalities over the last decade
- State legislative spread: DC passed the country's first law requiring ISA devices for high-risk drivers; Virginia, Washington, and Maryland followed with similar legislation; CA, GA, NY, AZ, MN considering ISA bills in 2026

### Source 3: Transportation Today News (Sept 2026 coverage of GHSA announcement)
- https://transportationtodaynews.com/news/37796-governors-highway-safety-association-releases-guidebook-on-intelligent-speed-assistance/
- Adkins quote: "Speeding-related deaths remain a vexing problem and traditional approaches have only been modestly successful. Including a technological solution such as ISA can make a big impact."
- Guidebook featured as general session at GHSA 2026 Annual Meeting, Minneapolis, Aug 29–Sep 2

### Source 4: NHTSA speeding data (2024/2025)
- 2024: 11,288 people killed in speeding-related crashes = 29% of all traffic fatalities; estimated 316,757 injured
- 2025 early estimate: 10,035 speeding-related deaths, an 11% decline (NHTSA "Speeding Catches Up With You" campaign, July 2026, Administrator Jonathan Morrison)
- Source: https://www.nhtsa.gov/press-releases/trumps-transportation-department-reminds-drivers-that-speeding-catches-you

### Source 5: NYC DOT ISA pilot evaluation (Oct 2024, US DOT evaluation)
- https://www1.nyc.gov/assets/dcas/downloads/pdf/fleet/nyc-intelligent-speed-assistance-pilot-evaluation-2024-oct.pdf
- 64% decrease in speeding vs. similar fleet vehicles without ISA; 99% of miles at or below the program's set threshold speed
- Habitual-speeder cohort (158 vehicles): 49.22% decrease in time speeding >11 mph over the limit; ISA not set to engage until >11 mph over (grace threshold), which plausibly explains the residual 1–11 mph-over speeding
- Per Vision Zero Network summary: 49% reduction on 25-mph streets, 82% reduction on higher-limit corridors, ~95% safety performance improvement among worst-history drivers

### Source 6: IIHS/Volpe active ISA commercial fleet study (2026)
- Reported via Automotive World: https://www.automotiveworld.com/news/iihs-report-guides-commercial-fleets-on-speed-assist-rollout/
- Prepared by USDOT Volpe Center; interviews with eight fleets (seven freight, two bus)
- One carrier estimated 30% reduction in preventable collisions after ISA installation; another's CSA score fell from ~65 to 20
- Co-benefits: lower maintenance costs, improved fuel economy

### Source 7: NSW Australia ISA trial (Regan et al. 2006 / Wall et al. 2010, via ROSAP)
- Advisory ISA across 110+ vehicles in real-world conditions
- Advisory ISA reduced speeding in 89% of vehicles; modeled 8.4% reduction in road deaths and 5.9% reduction in injuries if implemented across New South Wales
- Note: this was ADVISORY (alert-only) ISA, not active (intervening) — active systems should perform at least as well, but the only fleet-wide fatality model we have is from advisory systems. Use 8.4% as the conservative floor.
- Source: http://rosap.ntl.bts.gov/view/dot/87510/dot_87510_DS1.pdf

### Source 8: EU ISA mandate (background)
- All new cars sold in the EU required to have ISA since July 2024 (covered in our article #784: "Every New Car in Europe Has a Speed Limiter. America Has Not Started Writing the Rule.")
- The override problem: EU drivers can and do override ISA easily — the system defaults on each ignition cycle but a kickdown or button press defeats it. This is the strongest practical limitation and the guidebook's "driver acceptance" caveat in disguise.

## Novel Contribution (original findings/calculations)

1. **The confession, quantified.** 125,000 speeding deaths in 10 years = one speeding death roughly every 42 minutes, nonstop, for a decade. NHTSA's own 2025 early estimate shows speeding deaths fell 11% (11,288 → 10,035) — the "modest success" Adkins is describing. The article frames it: after 125,000 bodies, the enforcement establishment conceded.

2. **The adoption-speed arithmetic (original).** The guidebook path is voluntary: state fleet pilots → high-risk-driver laws (DC model: 4 states in, 5 considering) → teen/fleet adoption. Even the advocate's own ceiling (NRSF: "up to 22,000 fatal crashes each year") is meaningless without a penetration rate. Conservative floor from NSW data: advisory ISA fleet-wide ≈ 8.4% of the speeding death toll ≈ ~950 lives/year at 2024's 11,288. With active ISA (NYC pilot: 64% speeding reduction on fleets), the persistent-speeder + fleet + teen slice is plausibly 15–25% of the speeding toll = 1,700–2,800 lives/year. At guidebook pace (a handful of state laws per year, fleet pilots in the dozens), reaching even that slice takes a decade — roughly another 110,000+ speeding deaths in the interim. EU got universal coverage in new cars in one regulatory act (July 2024).

3. **The contradiction with the truck-limiter withdrawal (new, ours).** Six months after NHTSA/FMCSA withdrew the heavy-truck speed limiter mandate — citing "uncertain" benefits — GHSA published a guidebook recommending states deploy the same technology class voluntarily, citing pilot data showing 64–91% speeding reductions. The feds say the tech's benefits are too uncertain to mandate; the states' association says the tech is proven enough to write a deployment manual. Both cite the same evidence base.

4. **The funding footnote.** The guidebook was funded in part by the SteerSafe Partnership — a coalition of active ISA providers, i.e., the companies that sell the devices. The manual recommending ISA adoption was underwritten by ISA vendors. That doesn't invalidate the pilot data (NYC's was a DOT evaluation), but it belongs in the limitations box.

## Strongest Counterargument
The best case against the article's thesis (that the guidebook path is too slow and the US should mandate like the EU): mandates don't survive contact with American drivers. The EU's ISA mandate is widely overridden — drivers defeat it with a kickdown or a settings toggle, and compliance studies show large fractions of EU drivers routinely disable it. An unmandated-but-accepted technology (fleet drivers, teens, court-ordered persistent speeders) may achieve higher *effective* penetration than a resented mandate. The guidebook's strategy — target the fleets, teens, and worst offenders first, where acceptance is highest and override is hardest — could beat a universal mandate on actual deaths prevented. Also: the NYC pilot itself needed a grace threshold (>11 mph over) to be tolerable to drivers, which means ISA as deployed still permits the speeds at which most urban fatal crashes happen.

## Limitations
- The 8.4% figure comes from an advisory-ISA trial in Australia (2006–2010); extrapolating to active ISA in the US in 2026 is speculative — it's presented as a floor, not a prediction
- Fleet pilot results (64% NYC, 91% DC) measure speeding reduction, not fatality reduction; speeding-to-fatality conversion depends on where the speeding happens
- NRSF's "22,000 fatal crashes" ceiling is an advocacy number; the article treats it as such and does not endorse it
- The guidebook was partly funded by ISA vendors (SteerSafe Partnership)
- State ISA laws (DC/VA/WA/MD) are too new for outcome data — no before/after fatality studies exist yet
- FARS speeding attribution relies on police reports, which undercount (officers can't always determine speed) — the 11,288 is likely a floor, per NHTSA's own caveats

## Journalist
**Axle McScatter** — Data Visualization Editor. Beat: statistical roundups, national trends, methodology pieces. His opener energy ("I ran the numbers. Then I ran them again. They didn't get better.") fits the adoption-arithmetic framing. Distinct from his usual table-dump style: this one needs opinion — he should be visibly annoyed at the PDF-vs-mandate gap.

## Kicker
The Gap

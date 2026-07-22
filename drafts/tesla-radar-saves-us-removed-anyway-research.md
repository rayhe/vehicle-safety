# Research: Tesla Named Its Own Document "Radar Saves Us." Then It Removed Radar from 3.2 Million Cars.

## Angle
NHTSA just issued a formal information request (July 21, 2026) demanding Tesla hand over all materials related to an internal document titled "Radar Saves Us" — a document Tesla itself created and shared with regulators during an earlier phase of the FSD visibility probe. The name implies Tesla internally concluded radar improves safety. They removed radar from all vehicles starting mid-2021 anyway. FARS data shows Tesla death rate patterns across models with different radar histories.

## Self-Critique
Is this genuinely surprising after 570+ articles? YES:
1. The "Radar Saves Us" document name was never public before today
2. No existing article ties FARS Tesla model year data to radar removal timeline
3. This is about a manufacturer potentially knowing a fix exists and shipping without it — the core of defect law

## Primary Sources

### Source 1: NHTSA Engineering Analysis EA25001 — FSD Visibility Crashes
- 9 countable crashes, including 1 pedestrian fatality (Nov 28, 2023, Arizona)
- Covers 3,203,754 Tesla vehicles: 2016-2026 Model S/X, 2017-2026 Model 3, 2020-2026 Model Y, 2023-2026 Cybertruck
- Tesla's own analysis concedes updated degradation detection would have affected only 3 of 9 crashes
- Tesla began developing fix one day after submitting fatal crash report (June 28, 2024 — 7 months after the crash)
- Tesla admitted "internal data and labeling limitations" prevented uniform crash identification → possible under-reporting

### Source 2: Electrek reporting (July 21, 2026)
- Request No. 4 in NHTSA's information demand specifically targets "Radar Saves Us" document
- NHTSA wants: all internal communications, technical documentation, test records, and source data
- Tesla removed radar from production vehicles starting mid-2021
- Engineers internally warned against camera-only approach
- Marketing claimed camera-only could handle "whiteout conditions" and "all conditions"
- Tesla softened on-screen warning when cameras go blind
- Failure to comply: civil penalties up to $27,874/day, capped ~$139 million
- Aug 12, 2026 deadline for Tesla to produce document and respond

### Source 3: FARS Data (2014-2023)
| Model | Deaths | Fleet | Rate (per 100M VMT) |
|-------|--------|-------|---------------------|
| Model S | 100 | 175,000 | 0.50 |
| Model 3 | 92 | 1,575,000 | 0.05 |
| Model Y | 57 | 1,750,000 | 0.03 |
| Model X | 29 | 157,500 | 0.15 |

Model S death rate is 10x Model 3 and 16.7x Model Y.

Tesla Model S toxicology: 100 deaths, 24% impairment rate (notably high for a luxury sedan)

Model year deaths:
- Model 3: 2018:16, 2019:16, 2020:17, 2021:18, 2022:18, 2023:6
- Model Y: 2020:6, 2021:15, 2022:16, 2023:19
- Model S: scattered across years, 2015:11, 2022:10

### Source 4: Radar removal timeline
- Tesla began removing radar from Model 3/Y in May 2021 (Tesla Vision)
- Model S/X continued with radar slightly longer, then also transitioned
- By 2022, all new Tesla vehicles shipped camera-only
- Musk privately admitted radar-plus-vision is safer (per Electrek reporting)
- Engineers urged keeping radar; Musk overruled

## Original Contribution
Cross-tabulation: Tesla's own internal document name ("Radar Saves Us") against the real-world FARS death rate split between its camera-only era and radar era vehicles. The Model Y (0.03 rate) launched into the camera-only era and paradoxically has the lowest death rate — but this is confounded by fleet age (newer cars = fewer miles in FARS window). The Model S (0.50 rate, oldest fleet) represents radar-era production that later had radar removed via software transition.

Key calculation: Among the 278 Tesla deaths in FARS, 100 are Model S (36%). Model S represents only 4.8% of the combined Tesla fleet (175K / 3.66M). It's 7.5x overrepresented in fatalities relative to fleet share.

## Limitations
- FARS data spans 2014-2023. The camera-only transition began mid-2021. Most deaths in the dataset are from the radar era.
- Model S has the oldest fleet (production started 2012) — older vehicles accumulate more fatal-crash exposure years.
- Model S is also the highest-performance Tesla (fastest 0-60), which likely contributes to its higher death rate independently of sensor configuration.
- Fleet estimates are rough. Low-volume models have wider uncertainty bands.
- We cannot isolate radar vs. camera-only as a variable from FARS alone — too many confounds (vehicle age, performance, driver demographics).
- This is correlation analysis, not causal. The "Radar Saves Us" document may refer to specific edge cases, not the fleet-wide death rate.

## Strongest Counterargument
Tesla's Model Y has the lowest death rate in the dataset at 0.03 — and it was designed camera-only from inception. If camera-only were inherently dangerous, Model Y should have a higher rate, not the lowest. The better explanation for Model S's high rate is vehicle age and performance characteristics, not sensor configuration. Tesla could argue "Radar Saves Us" refers to specific low-visibility scenarios (dust storms, heavy fog), not overall fatality rates — and the company may have concluded that improved camera algorithms could close the gap without radar hardware.

## Actionable Takeaways
1. If you own a Tesla with FSD, check your software version. Tesla's updated degradation detection system may not have been deployed to your vehicle — NHTSA doesn't know which vehicles have it.
2. NHTSA's probe covers ALL FSD-equipped Teslas. Check your VIN at nhtsa.gov/recalls.
3. In reduced visibility (fog, glare, dust), FSD may not detect obstacles or alert you in time. Disengage and drive manually.
4. If a manufacturer's own internal document suggests a safety feature "saves," its removal should trigger heightened scrutiny — by the buyer, not just the regulator.

## Journalist
Mia Crumplezone — Safety Engineering Editor. This is a safety tech story about sensor architecture decisions.

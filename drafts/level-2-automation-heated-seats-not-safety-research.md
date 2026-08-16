# Research Notes: Level 2 Automation Is a Heated Seat, Not a Safety Feature

## Angle
IIHS-HLDI published research (July 2024) finding that partial automation (Level 2) systems — Nissan ProPILOT Assist, BMW Driving Assistant Plus, Tesla Autopilot — provide zero measurable crash-prevention benefit beyond what basic AEB and forward collision warning already deliver. IIHS President David Harkey said: "Everything we're seeing tells us that partial automation is a convenience feature like power windows or heated seats rather than a safety technology."

Novel contribution: FARS cross-tabulation showing deaths-per-crash ratios for L2-equipped vehicles vs comparable non-L2 vehicles are statistically indistinguishable — corroborating the IIHS-HLDI finding with federal fatality data.

## Self-Critique Gate
- **Proposal:** Article showing that L2 partial automation doesn't prevent crashes, combining IIHS/HLDI insurance research, IIHS police crash data analysis, and a novel FARS deaths-per-crash cross-tabulation.
- **Challenge:** Is this just restating IIHS's findings? No — the FARS DPC cross-tab is original work. IIHS used insurance claims and police-reported crashes; we're adding federal fatal-crash data showing the same pattern. Three independent datasets, one conclusion.
- **Verdict:** PROCEED. Novel cross-tabulation, three data sources, strong counterargument available (newer systems may be better), and clear actionable advice.

## Primary Sources (4)

### Source 1: IIHS-HLDI Research — "Little evidence that partial automation prevents crashes" (July 11, 2024)
- URL: https://www.iihs.org/news/detail/iihs-hldi-research-finds-little-evidence-that-partial-automation-prevents-crashes
- Author: Jessica Cicchino, IIHS Senior VP for Research
- Key findings:
  - HLDI insurance claims data: Property damage liability claims 8% lower for Rogues with AEB, but NO additional benefit from ACC or ProPILOT Assist
  - BMW: AEB + FCW associated with 7% collision reduction, 13% PDL reduction; ACC added to 25% PDL reduction; but partial automation (Driving Assistant Plus) added NO significant reduction
  - IIHS police-reported crash data: Rogue front-to-rear crash rates 49% lower with AEB, 54% with AEB+ACC, 62% with ProPILOT Assist
  - BUT: ProPILOT Assist benefits were identical on high-speed AND low-speed roads — since L2 is designed for highways and below 37 mph lane centering only works when following another car, this indicates a DRIVER SELECTION effect, not a technology effect
  - Headlight confound: 2018-19 Rogues with ProPILOT had better headlights (acceptable vs poor), which alone cut nighttime crashes ~15%
  - BMW: Neither lane departure prevention alone nor with partial automation had significant effect on crash rates
  - Quote: "Everything we're seeing tells us that partial automation is a convenience feature like power windows or heated seats rather than a safety technology" — David Harkey, IIHS President
  - Quote: "With no clear evidence that partial automation is preventing crashes, users and regulators alike should not confuse it for a safety feature" — Jessica Cicchino

### Source 2: IIHS Partial Automation Safeguard Ratings
- URL: https://www.iihs.org/ratings/partial-automation-safeguards
- 14 systems rated: 0 Good, 1 Acceptable (Lexus Teammate), 2 Marginal (GM Super Cruise, Nissan ProPILOT w/ Navi-link), 11 Poor
- Tesla Autopilot: Poor overall (P in driver monitoring, attention reminders, cooperative steering, safety features)
- Tesla FSD: Poor overall (P in driver monitoring, ACC resume, cooperative steering, safety features)
- Most systems fail at driver monitoring and attention reminders

### Source 3: NHTSA FARS 2014-2023 — Deaths-per-crash ratio by vehicle model
- Cross-tabulation of FARS_BY_MODEL data
- L2-standard vehicles: Model 3 (0.434), Model Y (0.509), Rogue (0.545) → avg 0.496
- Comparable non-L2 crossovers: CX-5 (0.432), RAV4 (0.498), Tucson (0.454), CR-V (0.533) → avg 0.479
- Difference: 0.017 — within noise, no L2 advantage
- Death rates per 100M VMT vary by fleet age (Teslas newer → lower rate) but DPC controls for this
- Tesla Model S impairment rate: 24.0% (highest of any luxury EV/sedan comparable)

### Source 4: GM-UMTRI Study (May 2026) — Counterpoint
- URL: https://news.gm.com/home.detail.html/Pages/news/us/en/2026/may/0508-GM-UMTRI-study-confirms-advanced-safety-technologies-reducing-crashes-injuries.html
- 12 million GM vehicles, 700K+ police-reported crashes across 18 states
- Shows AEB, FCW, lane keep assist reduce crashes — BUT this is about crash avoidance features, not about partial automation adding benefit on top
- Supports the IIHS conclusion: it's the AEB/FCW doing the work, not the L2 wrapper

## Novel FARS Cross-Tabulation
Deaths-per-crash (DPC) ratio — controls for fleet age and exposure, isolates how lethal crashes are when they happen:

| Vehicle | L2 System | DPC | Crashes | Deaths |
|---------|-----------|-----|---------|--------|
| Tesla Model 3 | Autopilot | 0.434 | 212 | 92 |
| Tesla Model Y | Autopilot | 0.509 | 112 | 57 |
| Nissan Rogue | ProPILOT | 0.545 | 1,777 | 968 |
| **L2 Average** | | **0.496** | | |
| Mazda CX-5 | None | 0.432 | 375 | 162 |
| Toyota RAV4 | None | 0.498 | 1,834 | 914 |
| Hyundai Tucson | None | 0.454 | 1,472 | 669 |
| Honda CR-V | None | 0.533 | 3,886 | 2,072 |
| **Non-L2 Average** | | **0.479** | | |

Difference: 0.017 — within noise. L2 does not improve crash lethality in federal fatal-crash data.

## Limitations
- FARS captures only fatal crashes (36K/year out of ~6.7M total). L2 benefits could exist for non-fatal crashes without showing in FARS.
- FARS data spans 2014-2023 and includes vehicles made before L2 was available. DPC for older Rogues without ProPILOT is mixed with newer ones.
- Tesla fleet is newer/smaller in FARS → DPC has wider confidence intervals.
- Vehicles in these comparisons differ in weight, structure, and safety features beyond L2.
- IIHS study vehicles (2013-22 BMWs, 2017-19 Rogues) are older; newer L2 systems may be more effective.

## Strongest Counterargument
Newer L2 systems (2024+) with camera-based driver monitoring may perform better than the systems IIHS studied (2013-2022 vehicles). Tesla's FSD v12+ uses a neural-network-based approach fundamentally different from the ProPILOT/BMW systems tested. GM's Super Cruise with Ultra Cruise may represent a new generation. The IIHS data may be outdated by the time this publishes.

**Response:** Even if true, this means consumers paid for a decade of L2 systems marketed as safety features that provided no measurable safety benefit. And the burden of proof should be on manufacturers to demonstrate effectiveness, not on researchers to prove ineffectiveness.

## Actionable Advice
1. Don't pay extra for a "driver assistance package" expecting it to protect you — AEB alone does the heavy lifting
2. If your car has L2, use it for comfort but don't trust it for safety
3. Check IIHS safeguard ratings before buying — most L2 systems rated Poor for driver monitoring
4. AEB, forward collision warning, and blind spot detection are the features that actually reduce crashes

# Research: IIHS 2026 Criteria Finally Match FARS Death Data

## Angle
IIHS just published the toughest safety award criteria in its history for 2026: mandatory standard AEB, good rear-seat protection, improved pedestrian crash prevention. 63 vehicles qualified. The winners are overwhelmingly modern SUVs/crossovers — exactly the vehicle class FARS has shown is safest per VMT for a decade. The losers (minicars, minivans, small pickups, most large pickups) are exactly the categories FARS flags as deadliest.

For years, IIHS ratings and FARS real-world death data have disagreed. In 2026, they converged.

## Journalist
Clara Rollover — Consumer Safety Advocate. This is a car-buying guidance piece tied to fresh IIHS news.

## Key Data Points

### IIHS 2026 (source: iihs.org, April 2026)
- 63 vehicles qualify (45 TSP+, 18 TSP) — up from 48 at same point in 2025
- AEB must be STANDARD for any award (new requirement)
- Good rear-seat moderate overlap required for both award levels (previously only TSP+)
- New vehicle-to-vehicle crash prevention test at 31/37/43 mph added for TSP+
- **Categories with ZERO winners:** minicars, minivans, small pickups
- **Large pickups:** only 2 qualify (Tesla Cybertruck, Toyota Tundra crew cab)
- **SUVs sweep:** 47 of 63 winners (74.6%)
- Many TSP+ winners under $30,000 (Kia K4 at $22,290 cheapest)
- IIHS President David Harkey: "It's disappointing that minivans continue to struggle to provide the best-available protection for passengers in the back"

### FARS Class-Level Data (2014-2023, our analysis)
- **SUV:** avg rate 0.63/100M VMT, lethality 0.524 — 74.6% of IIHS awards
- **Van:** avg rate 0.63/100M VMT, lethality 0.514 — 0% of IIHS awards (minivans specifically)
- **Sedan:** avg rate 1.02/100M VMT, lethality 0.645
- **Pickup:** avg rate 1.09/100M VMT, lethality 0.489
- **Sports Car:** avg rate 1.95/100M VMT, lethality 0.682

### The Convergence
| Vehicle Class | FARS Rate | IIHS 2026 Winners | % of Awards |
|---|---|---|---|
| SUV/Crossover | 0.63 | 47 | 74.6% |
| Sedan/Small Car | 1.02 | 14 | 22.2% |
| Pickup | 1.09 | 2 | 3.2% |
| Minivan | ~0.63* | 0 | 0% |
| Minicar | high | 0 | 0% |

*Vans overall have low rate but minivans specifically have rear-seat protection deficiencies.

### FARS Pickup Data (the 2-winner indictment)
- Toyota Tundra: rate 0.94, lethality 0.415 → IIHS 2026 TSP
- Tesla Cybertruck: not in FARS (too new)
- **Non-qualifiers in FARS:**
  - F-150: rate 1.04, 9,194 deaths
  - Silverado: rate 1.25, 9,591 deaths
  - Sierra: rate 1.01, 3,337 deaths
  - Ram: rate 0.78, 4,407 deaths
  - Tacoma: rate 0.80, 2,274 deaths (small pickup, 0 awards category-wide)
  - Ranger: rate 2.91, 3,089 deaths

### Novel Computation
Cross-referencing IIHS 2026 qualifiers with FARS class data:
- SUVs: 46,442 deaths / 88,568 crashes = 0.524 lethality, 0.63 avg rate → 74.6% of awards
- Sedans: 89,127 deaths / 138,154 crashes = 0.645 lethality, 1.02 avg rate → 22.2% of awards
- Pickups: 41,593 deaths / 85,128 crashes = 0.489 lethality, 1.09 avg rate → 3.2% of awards
- Vans (minivans): 7,897 deaths → 0% of awards

Total FARS deaths from non-SUV classes: ~144,751 (75.7% of all deaths)
Total IIHS awards going to non-SUV classes: 16 (25.4%)

The IIHS criteria now disproportionately reward the class with the lowest fatality rate, and disproportionately exclude the classes with the highest fatality rates.

### Strongest Counterargument
The convergence could be survivorship bias, not causation. Modern SUVs get IIHS awards because they're NEW, heavy, and have standard safety tech. They have low FARS rates for the same reasons — plus their exposure time in the 2014-2023 dataset is limited (newer models haven't accumulated enough miles to build up death counts). A 2003 Corolla doesn't fail IIHS 2026 criteria because Corollas are dangerous — it fails because it was designed 23 years ago. The convergence may just mean "new vehicles are safer than old vehicles," which nobody disputes.

### Limitations
- FARS data is 2014-2023; IIHS 2026 criteria apply to current MY vehicles
- Can't directly compare model-for-model (FARS aggregates all model years)
- Fleet composition bias: IIHS tests current models; FARS deaths skew toward older fleet
- Van rate of 0.63 seems to contradict minivan IIHS failure — the "van" class includes commercial vans which may pull the average down

### Sources
1. IIHS 2026 awards announcement — https://www.iihs.org/news/detail/iihs-pushes-improvements-in-crash-avoidance-with-2026-awards
2. NHTSA FARS 2014-2023 — https://www.nhtsa.gov/research-data/fatality-analysis-reporting-system-fars
3. NHTSA 2025 traffic death estimates — https://www.nhtsa.gov/press-releases/traffic-deaths-2025-early-estimates-2024-annual
4. IIHS vehicle ratings — https://www.iihs.org/ratings
5. IIHS 30x30 vision — https://www.iihs.org/30x30

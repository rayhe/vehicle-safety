# Research Notes: e-TNGA Platform Monoculture ECU Recall

## Angle
Three brands, one bug. The e-TNGA shared platform's second cross-brand recall exposes supplier-level single points of failure that regulators miss when counting recalls by manufacturer.

## Primary Sources

### 1. NHTSA Recall 26V393
- **Filed:** June 18-25, 2026
- **Vehicles:** 20,991 total
  - Toyota bZ: 11,495 (built Jun 2, 2025 – Apr 9, 2026)
  - Lexus RZ: 4,739 (built Apr 24, 2025 – Jan 20, 2026)
  - Subaru Solterra: 4,757 (built Sep 17, 2025 – Apr 13, 2026)
- **Defect:** Battery ECU (Denso part 89890-42381) contains two ICs that share a memory address. Under high CPU load (especially at low SOC), monitoring IC overwrites battery control IC data. Repeated failures → ECU fails operational check → electric drive shutdown.
- **Additional systems affected:** PCS (pre-collision system) and VSC (vehicle stability control) may also become inoperable
- **Estimated defect rate:** 100%
- **Warranty claims:** 1
- **Crashes/injuries:** 0
- **Fix:** Software update, free at dealer
- **Notification:** August 3, 2026
- **Toyota recall numbers:** 26LA07, 26TA11; Subaru: WRG26
- Sources: autoevolution, electrek, Carscoops, USA Today, theevreport

### 2. Timeline — Toyota Knew and Dismissed
- **August 2025:** Toyota found memory-overwrite condition during pre-production PHEV testing
- **September 2025:** Investigation concluded — Toyota determined BEV monitoring circuit timing was different enough to prevent the issue
- **April 2026:** Planned review of remote diagnostic data revealed BEVs could exhibit the defect under certain conditions (increased CPU load at low SOC)
- **June 2026:** Recall filed

### 3. Previous e-TNGA Cross-Brand Recall
- **94,320 vehicles** recalled (2023-2025 models) for HVAC/defroster system defect
- Same three models: Toyota bZ4X, Lexus RZ, Subaru Solterra
- Defroster/defogger could become inoperative in cold weather
- Source: electrive.com

### 4. Denso Supplier Concentration History
- **2020 fuel pump recall:** 3.53 million vehicles across Toyota, Honda, Ford, Subaru, Mitsubishi
- Impeller deformation rendered fuel pump inoperable → stall risk
- Still in litigation (Motley Rice class action)
- Source: Autoblog, Motley Rice

### 5. e-TNGA Platform Architecture
- Modular BEV-dedicated platform (announced Oct 2019)
- Also called e-SGP for Subaru-badged models
- Vehicles: Toyota bZ/bZ4X, Lexus RZ, Subaru Solterra, Toyota bZ3, bZ5, C-HR+
- Source: Wikipedia (Toyota New Global Architecture)

## Novel Contribution
- Cross-referencing two separate e-TNGA recalls to show 115,000+ vehicles recalled on one shared platform in <2 years
- Timeline analysis: Toyota found and dismissed the bug 8 months before field data proved them wrong
- Supplier concentration risk: Denso has triggered recalls affecting millions across multiple unrelated defects

## Counterargument
Platform sharing concentrates engineering resources — more volume per component means more test hours, faster detection, and faster fixes. Toyota did detect this in 2025.

## Limitations
- Zero crashes reported from this defect
- 2026-model EVs won't appear in FARS for years
- Analysis measures recall scope and supplier concentration, not crash outcomes
- Only 1 warranty claim — defect rate may be theoretical rather than observed at scale

## Journalist
**Mia Crumplezone** — Safety Engineering Editor. Technical but accessible, excited about engineering details, slightly judgmental about bad design.

## Slug
`etnga-three-badges-one-bug`

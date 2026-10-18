# Research Notes — #1208: Stellantis Lost Electronic Stability Control Three Times in 2026
**Article #1208** | Axle McScatter (Data Visualization Editor) | Kicker: By The Numbers

## News peg
NHTSA campaign **26V651000**, report received **October 6, 2026** (oemdtc.com record date 2026-10-06; Transport Canada logged the same defect for "just over 600" Canadian 2026 Ram 2500s in its Oct 5-9 weekly bulletin). It is an EXPANSION of 26V244 — the same steering-column-control-module ESC defect Stellantis recalled in April, now 6 months later, with a population BIGGER than the original.

## Core facts

### 26V651000 (October 6, 2026) — the new one
- **8,329 units**: certain 2026 Ram 2500 pickups. Build dates Sept 13 – Nov 15, 2025.
- Defect: Steering Column Control Module (part nos. 68600228AH / 68600229AH / 68600231AH) may fail internally → **complete loss of electronic stability control** → FMVSS No. 126 noncompliance.
- FCA recall number **90D**. Recall initiator: MFR. VINs searchable Oct 13, 2026. Owner letters expected Nov 24, 2026. Dealer replaces the SCCM, free. No OTA. FCA customer service 1-800-853-1403.
- Sources: NHTSA recalls API (`api.nhtsa.gov/recalls/recallsByVehicle?make=Ram&model=2500&modelYear=2026`, queried 2026-10-18); oemdtc.com/recall/26V651000 (population 8,329, part numbers, build dates); Transport Canada Oct 5-9 bulletin (Canadian sibling recall, ~600 units).

### 26V244000 (April 16, 2026) — the original
- **6,605 units**: 2026 Ram 2500. Same SCCM defect (supplier: Kostal of America), same ESC loss, same FMVSS 126 noncompliance.
- Sources: Autoblog Apr 25, 2026; MotorBiscuit; motorsafety.org (April 28, 2026).
- Failure mode per Autoblog: "silent failure" — the ESC warning light illuminates only AFTER the module has already failed and reset.

### 26V561000 (September 1, 2026) — the capacitor one
- **2,017 units**: 2025-2026 Chrysler Voyager, 2025-2026 Chrysler Pacifica, 2026 Chrysler Voyager PHEV.
- Defect: cracked ceramic capacitor in the brake pedal position sensor → ESC loss → FMVSS 126 noncompliance.
- Covered by this site's #850 ("Chrysler 26V561 / cracked capacitor kills ESC", Axle McScatter, Sept 2026) — the four-recall FMVSS-126 census.

## Original contribution: the 2026 ESC-loss census
Queried the NHTSA recalls API (`api.nhtsa.gov/recalls/recallsByVehicle`) across **64 high-volume model × model-year combinations** (2024-2026 MY) on 2026-10-18. Found **77 unique 2026 campaigns (26Vxxx)**. Filtered for ESC-loss/FMVSS-126 noncompliance campaigns (component or summary text).

**Result: exactly 3 campaigns. All three are Stellantis.** Zero ESC-loss campaigns from Ford, GM, Toyota, Honda, Hyundai, Kia, Nissan, Subaru, Mazda, VW, or Tesla in the sample.

| Campaign | Filed | Population | Vehicles | Defect | Status |
|---|---|---|---|---|---|
| 26V244 | 2026-04-16 | 6,605 | 2026 Ram 2500 | Kostal SCCM fails → ESC loss | original |
| 26V561 | 2026-09-01 | 2,017 | 2025-26 Voyager/Pacifica/PHEV | cracked capacitor in brake pedal sensor → ESC loss | original (#850) |
| 26V651 | 2026-10-06 | 8,329 | 2026 Ram 2500 | same SCCM defect as 26V244 | EXPANSION of 26V244 |

**Combined population: 16,951 vehicles.** Three different defect modes (steering column module ×2, brake sensor capacitor), one company, one year, one vanished safety system.

### The expansion math that matters
26V651 (8,329) is 26% LARGER than the original 26V244 (6,605). The April recall missed more trucks than it caught. Stellantis spent 6 months (Apr → Oct) finding the other 8,329 — meanwhile the defective modules stayed on the road. Build-date window: Sept 13 – Nov 15, 2025.

## Why ESC loss is the story (the stakes)
- FMVSS 126 final rule: April 6, 2007; all light vehicles built on/after Sept 1, 2011 must have compliant ESC.
- NHTSA estimate: ESC saves **5,300–10,300 lives** and prevents **168,000–252,000 injuries** annually at full fleet penetration.
- Sivinski (DOT HS 811 486, 2011): ESC reduces **fatal single-vehicle crashes of passenger cars by 55%**, light trucks/vans by **50%**.
- A Ram 2500 weighs ~7,000+ lbs with a high center of gravity; ESC is the system keeping it from rolling in an emergency maneuver. The Autoblog report on 26V244 says the failure is SILENT — the telltale only lights after the module has already failed and reset, so drivers don't know they're driving without a net.

## Kill test
- Genuinely new on the site? 26V651 uncovered; the "all three 2026 ESC-loss campaigns are one company" census finding is new. Proceed.
- Novel angle? Not another ESC-ghost story (#850 did that). This is the accountability frame: one company, three ESC failures, and the third is an admission the first recall was incomplete. The expansion-outgrows-the-original stat (8,329 > 6,605) is the hook.

## Actionable insight
- If you own a 2026 Ram 2500: check your VIN at nhtsa.gov/recalls NOW (searchable since Oct 13, 2026). Owner letters go out Nov 24. The SCCM part numbers are 68600228AH / 68600229AH / 68600231AH — ask the dealer to confirm the replacement isn't another suspect-lot module.
- If you own a 2025-2026 Voyager/Pacifica (incl. PHEV): check for 26V561 (VINs searchable from Sept 9, 2026; letters mailed ~Sept 29).
- General: treat an ESC warning light as a red alert, not a suggestion — and know that on these trucks the light may only fire after the failure, so a flicker you didn't see in daylight still counts. Get it scanned.

## Limitations
- The 3-of-77 census is sample-based (64 high-volume model × MY queries via the NHTSA API), not an exhaustive flat-file census of all 2026 campaigns; smaller models and equipment recalls could hide additional ESC campaigns. Stated explicitly.
- Defect-rate percentage for 26V651 (the 573 "potentially involved" %) was not published in the API record; I state the population (8,329), not a defect rate.
- No crashes/injuries are tied to 26V651 in the public record so far; the harm is probabilistic (loss of a ~50%-effective system on heavy trucks), stated explicitly.
- 26V244's population (6,605) comes from press (Autoblog, MotorBiscuit, motorsafety.org) reporting the April filing; 26V561's (2,017) from #850's research notes.

## References (for the story)
- NHTSA FARS: https://www.nhtsa.gov/research-data/fatality-analysis-reporting-system-fars
- IIHS ESC study: https://www.iihs.org/news/detail/life-saving-benefits-of-esc-continue-to-accrue
- NHTSA recalls database: https://www.nhtsa.gov/recalls
- NHTSA ESC final rule: https://www.govinfo.gov/content/pkg/FR-2007-06-22/html/E7-11965.htm
- oemdtc 26V651: https://oemdtc.com/recall/26V651000/
- Autoblog (26V244, Apr 25 2026): https://www.autoblog.com/news/ram-2500-can-lose-stability-control-without-warning
- MotorSafety Ram recalls: https://www.motorsafety.org/category/ram-recalls/
- Transport Canada Oct 5-9 bulletin: https://canadianbusinessnews.org/regional-business/nine-automakers-issue-canadian-recalls-covering-ram-volkswagen-kia-hyundai-gm-and-land-rover-vehicles/

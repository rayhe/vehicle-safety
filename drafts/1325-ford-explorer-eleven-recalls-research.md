# Research Notes — #1325: The 2026 Ford Explorer Has Been Recalled 11 Times. Four Recalls Are the Engine Itself.
**Article #1325** | Axle McScatter (Data Visualization Editor) | Kicker: By The Numbers

## News peg
None required beyond the census itself: the 2026 model year is in full swing and America's best-selling three-row SUV keeps collecting NHTSA campaigns. Latest Explorer-touching campaign filed **September 9, 2026** (26V581, passenger airbag vent). Census run **2026-10-29/30**.

## Core facts

### The census (original contribution)
Queried the NHTSA recalls API (`api.nhtsa.gov/recalls/recallsByVehicle`) across **77 high-volume model x model-year combinations** (2025-2026 MY) on 2026-10-29. Found **94 unique 2026 campaigns (26Vxxx)**. Script: `drafts/1325-census.py`; results: `drafts/1325-census-results.json`.

**The 2026 Ford Explorer is touched by 11 of them — more than any other single model-year in the sample.** Next: 2026 F-150 (8), 2026 Bronco (8), 2026 Ram 1500 (8), 2026 Ram 2500 (6).

### The 11 Explorer campaigns (all from NHTSA API records)
| Campaign | Filed | Component | Defect summary |
|---|---|---|---|
| 26V024 | 2026-01-21 | Windshield | Windshield may not have been properly bonded; can detach in a crash (FMVSS noncompliance) |
| 26V121 | 2026-03-03 | Headlights | Dynamic Bending Light software may aim passenger headlight the wrong way in curves |
| 26V159 | 2026-03-17 | Seat belts | 2nd-row outer seat belt anchor bolts may be improperly secured (2020-2026 Explorer + Aviator) |
| 26V202 | 2026-03-31 | HVAC/defroster | HVAC may fail; defrost/defog inoperative (Explorer + Aviator) |
| **26V205** | **2026-03-31** | **Engine internal** | **Piston circlips incorrectly installed → piston failure, engine damage, loss of drive power** (Explorer + Mustang) |
| **26V343** | **2026-05-27** | **Engine internal** | **Engine may fail → loss of drive power** (Explorer, Ranger, Bronco) |
| 26V451 | 2026-07-15 | Seats (2nd row) | Easy-entry seat switch may bind → seats unlatch/tip/slide unexpectedly (2020-2026 Explorer, 2020-2027 Aviator) |
| 26V470 | 2026-07-21 | Seats (front power) | Unoccupied driver seat may recline on remote unlock/start (2025-2027 Explorer + Aviator) |
| **26V532** | **2026-08-13** | **Engine internal** | **2.3L connecting rod bearings may seize → engine failure** (2026 Explorer) |
| **26V548** | **2026-08-25** | **Engine internal** | **Piston domes manufactured incorrectly → piston dome failure, loss of drive power** (Explorer, Bronco, Bronco Sport, Mustang, Ranger) |
| 26V581 | 2026-09-09 | Frontal airbags | Passenger-side active vent may not open → airbag may not deploy properly |

Four distinct internal-engine campaigns in five months (Mar 31 - Aug 25): circlips, unspecified engine failure, rod bearings, piston domes. Different defects, different supplier-level root causes, same model year.

### Context numbers
- Explorer was **America's best-selling three-row SUV in 2025**: 222,706 sold (+14.7%), per Ford Authority citing Ford sales data; Ford's own Feb 2026 sales release calls it "America's best-selling three-row SUV."
- Ford issued **153 recalls in 2025** (record for any automaker in one year), 5th straight year as most-recalled automaker (autoevolution, Jan 2026). iSeeCars Apr 2026: 19.6M Ford vehicles recalled Apr 2025-Mar 2026, more than the rest of the industry combined.
- Ford paid a **$165M NHTSA civil penalty (Nov 2024)** for slow/incomplete rear-camera recalls; under the consent order Ford had to re-review 3 years of past campaigns (hotcars, Jan 2026). Ford says it doubled its safety/technical team.

## Kill test
- Genuinely new on the site? Yes — no Explorer recall census; "most recalled 2026 model" angle uncovered. Proceed.
- Novel angle? The 4-engine-recalls-in-5-months finding is the hook; the consent-order inflation context is the honest counterweight. Proceed.

## Actionable insight
- Own a 2026 Explorer: run your VIN at nhtsa.gov/recalls NOW — 11 campaigns is not a typo. Prioritize the four engine campaigns (26V205, 26V343, 26V532, 26V548): all involve sudden loss of drive power, the defect mode most likely to put you in a crash rather than merely fail to protect you in one.
- Shopping a used 2026 Explorer in a few years: the engine campaigns are the ones that follow the VIN forever. A "clean" one-owner truck with all four engine remedies documented is a different vehicle than one with open campaigns.
- General: campaign counts are a starting filter, not a verdict — see Limitations.

## Limitations
- Sample-based census (77 model x MY queries), not an exhaustive flat-file census; smaller models and equipment-only campaigns excluded.
- "Touched by 11 campaigns" counts campaigns listing the 2026 Explorer among affected models; per-campaign Explorer populations not published in the API records used here — some campaigns (e.g., 26V159 spanning 2020-2026 + Aviator) may involve few 2026 Explorers.
- Campaign count is not a defect rate: it does not normalize by units sold, and it rewards detection/reporting diligence.
- No crash/injury/fatality counts are tied to these 11 campaigns in the public API summaries; the harm case for the engine campaigns is loss of motive power (stall in traffic), stated explicitly.
- Whether the four engine campaigns share a root cause (supplier, plant, design) is not determinable from public records; I treat them as distinct filed defects.

## Strongest counterargument (to state at full strength)
Ford's record recall volume is substantially an artifact of the November 2024 NHTSA consent order: the $165M penalty forced Ford to re-review three years of past campaigns and expand or refile narrow ones, mechanically inflating 2025-2026 campaign counts. Ford also says it doubled its safety engineering headcount. On that reading, 11 Explorer campaigns could signal the most surveilled quality system in the industry finally working as intended — catching defects (like misinstalled circlips) that a less-scrutinized manufacturer would have shipped silently. The data cannot distinguish "worst quality" from "best detection" at the campaign-count level. What it CAN say: four separate internal-engine defects reached customers on one model year in five months, and no consent order manufactures a seized connecting rod bearing.

## Sources (3+ primary)
1. NHTSA recalls API, `api.nhtsa.gov/recalls/recallsByVehicle` — 77 queries, 2026-10-29/30 (primary data; script + results JSON in drafts/).
2. NHTSA recalls database / VIN lookup — nhtsa.gov/recalls.
3. Ford Motor Company, February 2026 U.S. sales release (fromtheroad.ford.com) — "America's best-selling three-row SUV, the Ford Explorer."
4. Ford Authority, Q4 2025 sales — 222,706 Explorers sold in 2025 (+14.7%).
5. autoevolution, Jan 2026 — Ford most-recalled automaker 5th year running, 153 recalls in 2025.
6. hotcars, Jan 2026 — $165M NHTSA consent order context; Ford doubled safety team.
7. Free Press / iSeeCars, Apr 2026 — 19.6M Ford vehicles recalled Apr 2025-Mar 2026.

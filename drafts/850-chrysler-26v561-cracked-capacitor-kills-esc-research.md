# Research Notes — #850: Chrysler 26V561 / cracked capacitor kills ESC
**Article #850** | Axle McScatter (Data Visualization Editor) | Kicker: By The Numbers

## News peg
NHTSA campaign **26V561000**, report received Jan 9, 2026; surfacing in press Sept 8, 2026 (Delaware Online roundup of the 569,000-vehicle Stellantis week: 89D Jeep coil springs, 83D Ram camera, **69D Voyager/Pacifica brake sensor**).

## Core facts
- **2,017 vehicles**: certain 2025-2026 Chrysler Voyager, 2025-2026 Chrysler Pacifica, 2026 Chrysler Voyager PHEV.
- Defect: brake pedal position sensor **capacitor may be cracked** → loss of electronic stability control → **noncompliance with FMVSS No. 126**, "Electronic Stability Control Systems."
- NHTSA component category: ELECTRONIC STABILITY CONTROL (ESC).
- FCA recall number **69D**. Report received: **01/09/2026**. Owner notification letters expected **mailed September 29, 2026** (approx. 8.7 months after filing). VINs searchable on NHTSA.gov beginning **September 9, 2026**. No OTA remedy (overTheAirUpdate: false). Dealer inspect/replace, free. FCA customer service 1-800-853-1403.
- Sources: NHTSA recalls API (`api.nhtsa.gov/recalls/recallsByVehicle?make=CHRYSLER&model=PACIFICA&modelYear=2026`), Delaware Online Sept 8, 2026, Vehicle Service Pros Sept 2026.

## ESC mandate background (the stakes)
- FMVSS 126 final rule: published April 6, 2007 (72 FR 17236); phase-in complete — all light vehicles manufactured on or after **September 1, 2011** must carry compliant ESC.
- NHTSA NPRM estimate: ESC would save **5,300–10,300 lives** and prevent **168,000–252,000 injuries** annually with full fleet penetration.
- Sivinski update (DOT HS 811 486, June 2011): ESC reduces **fatal single-vehicle crashes of passenger cars by 55%** and of light trucks/vans by **50%**.
- ESC is arguably the single most effective crash-avoidance technology ever mandated — its benefits accrue silently, and drivers never know when it saves them.

## Novel contribution (original census)
Every FMVSS-126 noncompliance recall I can find is an *electronics ghost*, never missing hardware:
1. **22E-017** (2022): Chrysler/Mopar ABS control modules — software that prevented the ESC telltale lamp from illuminating.
2. **24E-047** (2024): ABS control modules — software malfunction that could **disable the ESC system**.
3. **24V-838** (2024): FCA hydraulic control unit/ABS module — ABS, ESC inoperative; brake lights stuck on.
4. **26V561** (2026): cracked **ceramic capacitor** in the brake pedal position sensor kills ESC.

Finding: the 2007 mandate made ESC universal; the failure mode migrated from "car lacks ESC" to "the electronics around ESC silently kill it." The weakest link is a passive component worth cents.

## Kill test
- Genuinely new on the site? 26V561 never covered; FMVSS 126 mandate story never done as a centerpiece (only a link target).
- Novel angle? The census of ESC noncompliance recalls as electronics ghosts + the "cents-apiece component defeats the most effective safety mandate" frame. Proceed.

## Actionable insight
- If you own a 2025-2026 Voyager/Pacifica (incl. PHEV): check VIN at nhtsa.gov/recalls (searchable from Sept 9, 2026); letter expected Sept 29. Dealer inspection free — ask them to confirm the sensor is the revised part.
- General: an ESC warning light is the only signal — a cracked capacitor gives none; trust the telltale, not the pedal feel.

## Limitations
- I could not pull the Part 573 chronology PDF for 26V561 (no public URL found); estimated-defect percentage and discovery date unconfirmed — I state the population (2,017) but do NOT claim a defect rate.
- The four-recall census is "every FMVSS-126 recall I could find via search/API," not an exhaustive NHTSA flat-file census — disclosed as such.
- No injuries/fatalities tied to 26V561 reported; the harm is probabilistic (loss of a 55%-effective system), stated explicitly.
- Ceramic capacitor pricing: stated qualitatively ("cents at volume" is industry commonplace); do not print a specific price.

## Counterargument (full strength)
The honest counter: 2,017 vehicles is a rounding error against ~280M registered vehicles, and the recall process worked exactly as designed — FCA found it, filed it, and the fix is free. A cracked capacitor defeating ESC on paper doesn't mean ESC failed in the field; FARS-era data says the mandate is a triumph. The counterargument's limit: all four recent 126-recalls share the same shape (electronics ghost, not missing hardware), so the failure mode is structural to how modern ESC is built, even if any single campaign is small.

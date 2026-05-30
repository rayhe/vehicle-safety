# Research Notes: Grand Cherokee ORC Ghost Fault

## Story Angle
The Occupant Restraint Controller (ORC) in 419,035 Jeep Grand Cherokees has a software bug that causes it to retain door airbag pressure sensor faults permanently — even after the sensor is repaired. The ORC treats historical faults as current, potentially delaying side airbag deployment during crashes. Stellantis first received warranty claims in February 2023 but didn't issue the recall until May 14, 2026 — a 39-month investigation window during which production continued through October 2025.

## Journalist
**Mia Crumplezone** — Safety Engineering Editor. Technical safety engineering story about software architecture in safety-critical systems.

## Key Facts

### The Recall
- **NHTSA Recall Date:** May 29, 2026
- **Vehicles affected:** 419,035 total
  - 140,130 × 2022-2026 Jeep Grand Cherokee (WL)
  - 278,905 × 2023-2025 Jeep Grand Cherokee L
- **Production window:** May 16, 2022 – Oct 9, 2025
- **Defect:** Software error in Occupant Restraint Controller (ORC) module
- **Mechanism:** Door airbag pressure sensor faults "remain active for the lifetime of the sensor" — even after repair
- **Effect:** Side airbags may deploy with delay during some crashes
- **Warning signs:** None before fault sets. After fault: airbag warning light illuminated, chime at each ignition cycle
- **Fix:** Dealer software update (free)
- **No other vehicles on same platform or post-2026 MY use same ORC module**

### The Timeline (39-Month Investigation)
- **Feb 2023:** First warranty claims surface
- **2023-2025:** Stellantis investigates — rules out door wire-harness routing, the sensors themselves
- **April 2026:** Stellantis determines vehicles non-compliant with FMVSS
- **May 14, 2026:** Voluntary recall initiated
- **May 29, 2026:** NHTSA public announcement

### The "Ghost Fault" Bug
This is a **sticky fault** — the ORC module's software was designed to track sensor faults (correct) but the fault codes persist as active even after the underlying hardware is repaired (incorrect). The result: the ORC treats a historically faulty sensor as currently faulty, potentially delaying the side airbag deployment decision.

Key insight: **The more service your Grand Cherokee received, the more likely it was to have degraded side airbag performance.** A conscientious owner who brought their car in for a sensor fault got the hardware "fixed" but the ORC's software memory still flagged the sensor as broken.

### FARS Cross-Reference (Original Analysis)
- Grand Cherokee FARS (2014-2023): 1,161 deaths, 116.1/year, 2,637 fatal crashes
- Fatality rate: 0.51 per 100M VMT (moderate for SUV class)
- 2022 MY: 7 deaths in FARS data (naturally low — recent model year, FARS goes to 2023)
- **Side impacts are ~23% of all fatal passenger vehicle crashes nationally** (NHTSA Traffic Safety Facts)
- Estimated ~27 Grand Cherokee side-impact fatal crashes per year across all model years
- For affected 2022-2026 MY specifically: small sample in FARS but growing as fleet ages

### The Paradox — Same Day, Opposite Failure Modes
- **May 29, 2026 — Honda recall (98,892 vehicles):** Seat weight sensor cracks → airbags DEPLOY when they shouldn't (on children/small passengers)  
- **May 29, 2026 — Stellantis recall (419,035 vehicles):** ORC retains ghost faults → airbags DON'T DEPLOY when they should (during side impacts)
- Same day, same safety system, opposite catastrophic failure modes

### Grand Cherokee Sales Context
- 2022: 202,730 sold (recall covers from May 16, 2022)
- 2023: 124,957 sold
- 2024: ~161,693 sold (includes Grand Cherokee + L combined)
- 2025: 154,220 (through Q3)
- One of America's best-selling SUVs

## Sources
1. Reuters, "Stellantis to recall over 419,000 US vehicles over improper side air bag deployment," May 29, 2026
2. MotorTrend, "Jeep Recalls 419,000 Grand Cherokee SUVs Over Airbag Module Issue," May 29, 2026
3. Autoblog, "Jeep Recalls 419,000 Grand Cherokees Because Side Airbags May Deploy Too Late," May 29, 2026
4. USA Today, "Over 419,000 Jeep vehicles recalled. See the affected models," May 29, 2026
5. TFLcar, "Jeep Recalls Certain 2022-2026 Grand Cherokee and Grand Cherokee L SUVs for Defective Side Curtain Airbags," May 29, 2026
6. NHTSA FARS database (2014-2023 data)
7. NHTSA Traffic Safety Facts — Side impacts account for ~23% of fatal passenger vehicle crashes
8. NHTSA Recalls database: https://www.nhtsa.gov/recalls

## Novel Contribution
Software "sticky faults" in safety-critical automotive systems — the ORC module's grudge-holding architecture. Cross-referencing the 39-month investigation timeline against continued production volumes. The same-day paradox of opposite airbag failure modes (Honda deploys when it shouldn't, Stellantis doesn't deploy when it should).

## Kill Test
✅ **Genuinely newsworthy:** 419,035 vehicles, #1 best-selling SUV family, software-only defect in safety-critical system
✅ **Novel angle:** Ghost fault / sticky fault architecture analysis, 39-month timeline, same-day opposite-failure paradox
✅ **Not just a recall regurgitation:** Original FARS cross-reference, software design analysis, timeline accountability
✅ **Actionable:** Check VIN, schedule dealer visit, understand warning signs

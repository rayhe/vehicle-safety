# Research Notes: Mercedes Micro-Switch Rollaway Recall

## News Hook (July 30, 2026)
- Mercedes-Benz recalling **310,667 vehicles** in the US
- Models: CLA, A-Class, C-Class, CLE, GLA/GLB, GLC
- Defect: corroded micro-switch in the driver's door lock
- Failure: prevents auto-park brake from engaging when the system can't detect the door is open
- Risk: vehicle rollaway
- Fix: dealers replace driver's door lock, free of charge
- Source: Reuters, Jul 30, 2026; NHTSA

## FARS Data — Mercedes-Benz Fatal Crash Profile (2014-2023)
- **C-CLASS:** 319 deaths, rate 0.63/100M VMT, 21.8% impairment (1,883 drivers)
- **E-CLASS:** 226 deaths, rate 0.64/100M VMT, 23.5% impairment (1,415 drivers)  
- **CLA-CLASS:** 34 deaths, rate 0.17/100M VMT, 22.1% impairment
- **S-CLASS:** 60 deaths, rate 0.40/100M VMT, 21.9% impairment
- **GLA/GLK:** 37 deaths (GLK), rate 0.17, 22.7% impairment; CLA 22.1%
- **GL-CLASS:** 57 deaths, rate 0.17, 15.9% impairment
- **M-CLASS/ML-CLASS:** 62+40 = 102 deaths, rate 0.10-0.16

## Key FARS Finding
Mercedes brand-wide impairment: **21.9%** (4,649 drivers in fatal crashes)
- vs. Lexus 19.3% (safest luxury)
- vs. Lincoln 19.0%
- vs. BMW 20.9%
- vs. Infiniti 24.4% (worst luxury)
- vs. overall fleet ~18-19%

## Original Analysis
1. **The rollaway-impairment compound risk:** 21.9% of Mercedes drivers in fatal crashes were impaired. An impaired driver is less likely to notice a rollaway event, less likely to react properly, and more likely to leave the vehicle in an ambiguous park state.

2. **Death rate is LOW (0.10-0.64)** — Mercedes vehicles are genuinely well-engineered for crash survival. But their recall pattern shows vulnerability at the component level.

3. **The door-lock-to-park-brake dependency chain:** The fact that a corroded micro-switch in the DOOR LOCK can disable the PARK BRAKE reveals a design dependency that crash testing doesn't evaluate. This is a systemic architecture issue.

4. **2026 luxury recall pattern:**
   - Mercedes: 310,667 (door lock micro-switch rollaway)
   - Ford Expedition/Navigator: rollaway (26V402, transmission software)
   - BMW: PHEV starter fire recalls (multiple)
   - Cadillac CT5: IIHS poor rating in two crash tests

## Sources
1. Reuters, "Mercedes-Benz to recall more than 310,000 US vehicles citing risk of failure to detect open door," Jul 30, 2026
2. NHTSA FARS database 2014-2023 (via fars_output.js)
3. NHTSA recalls database
4. IIHS 2026 ratings data
5. Autoblog, "300 Recalls and Counting in 2026," Jul 13, 2026

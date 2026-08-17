# Research Notes: Acura AWD Loss NHTSA Not Defect
## Article #767 — Rex Driverton — Investigation

### Primary Sources

1. **Federal Register denial DP26-001** (Aug 6, 2026): https://www.federalregister.gov/documents/2026/08/06/2026-16019/denial-of-motor-vehicle-defect-petition
   - Petitioner: Christopher Mammarella, filed Jan 9, 2026
   - 137,329 vehicles: 2021-2023 Acura TLX, 2022-2023 Acura MDX
   - 48 consumer complaints: interfacing splines between transmission and power take-off unit fail
   - AWD permanently converts to FWD — no warning, no fix short of replacement
   - NHTSA ruling: issues "are not likely to result in a finding that a defect related to motor vehicle safety exists"
   - 0 crashes, 0 injuries, 0 fatalities reported

2. **MotorBiscuit investigation** (Mar 2026): https://www.motorbiscuit.com/nhtsa-opens-investigation-into-137000-acura-tlx-and-mdx-models-over-sudden-awd-failure/
   - Details the spline failure mechanism
   - Notes this affects Acura's SH-AWD (Super Handling All-Wheel Drive)

3. **Autoblog** (Mar 2026): https://www.autoblog.com/news/feds-investigate-over-137000-acuras-for-failing-awd-system

4. **Carscoops** (Mar 2026): https://www.carscoops.com/2026/03/dozens-of-acura-drivers-say-their-fancy-awd-decides-two-wheels-are-enough/

5. **IIHS 2024 fatality data** (used in site article #762): AWD cuts SUV death rates by 44%
   - 4WD SUVs: 22 per million registered
   - 2WD SUVs: 39 per million registered
   - Source: stories/awd-suv-saves-pickup-kills.html

6. **NHTSA FARS 2014-2023** (from fars_output.js)

### FARS Data

**Acura MDX (SUV):**
- Deaths: 163 (16.3/year)
- Fatal crashes: 391
- Fleet est: 437,500
- VMT: 5,469M
- Rate: 0.30 deaths per 100M VMT
- Impairment: 21.5% any, 16.9% alcohol, 8.3% drug
- Context: Median SUV rate is 0.43, mean is 0.79. MDX at 0.30 is in the top 15 safest SUVs.

**Acura TLX (Sedan):**
- Deaths: 33 (3.3/year)
- Fatal crashes: 109
- Fleet est: 262,500
- VMT: 3,019M
- Rate: 0.11 deaths per 100M VMT
- Impairment: 18.6% any, 14.8% alcohol, 9.7% drug
- Context: 2nd safest sedan in FARS after Tesla Model 3 (0.05). Median sedan rate is 0.75.

**Acura RDX (SUV, for comparison):**
- Rate: 0.13, deaths: 70

### Original Contribution

The NHTSA denial creates a logical paradox when cross-referenced with IIHS data:
- IIHS shows AWD cuts SUV death rates by 44%
- MDX is one of the safest SUVs in FARS (rate 0.30 vs median 0.43)
- TLX is 2nd safest sedan in FARS (rate 0.11 vs median 0.75)
- Both vehicles ship standard with Acura SH-AWD
- When the SH-AWD system fails, these vehicles lose the drivetrain feature most correlated with reduced fatality rates
- NHTSA says this isn't a safety defect because nobody has died YET
- But NHTSA's own FARS data shows FWD vehicles die at significantly higher rates than AWD vehicles

The paradox: NHTSA apparently requires bodies before it will call the loss of a life-saving feature a "safety defect." The agency that publishes the very data proving AWD saves lives has decided that losing AWD doesn't endanger them.

### Strongest Counterargument (at full strength)
FWD is the baseline drivetrain for most vehicles on American roads. Every FWD-only Honda Civic, Toyota Corolla, and Hyundai Elantra operates without AWD and NHTSA does not consider them defective. An Acura that loses AWD reverts to the same drivetrain configuration as the best-selling cars in America. The owner paid for AWD and didn't get it, which is a warranty problem, not a safety defect. The 44% reduction in SUV deaths attributed to AWD by IIHS likely correlates with other factors (vehicle weight, price bracket, driver demographics) rather than being caused solely by the drivetrain itself.

### Additional Context
- Acura TLX was discontinued July 2025 — some affected vehicles are orphans
- SH-AWD is Acura's premium drivetrain technology, a selling point
- No recall, no investigation opened — just a denial

### Ship Date
2026-09-03 (next available after queue end 2026-09-02)

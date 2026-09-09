# Research Notes — #851: PACCAR 26V567 / the Peterbilt 548's brake timing fails FMVSS 121 — the standard PACCAR once killed
**Article #851** | Vin Wreckage (Existential Dread Columnist) | Kicker: Existential Dread

## News peg
NHTSA campaign **26V567000**, report received **Sept 1, 2026**; surfaced in the Sept 8, 2026 Consumer Affairs weekly recall roundup.

## Core facts
- **Affected:** certain **2027 Peterbilt 548** trucks (PACCAR Incorporated).
- Defect: front brake valve and hoses may be the **incorrect size** → delays the rear service brake **application and release** times, plus the **trailer gladhand application times** → noncompliance with **FMVSS No. 121, "Air Brake Systems."**
- NHTSA component category: SERVICE BRAKES, AIR: CONTROLS: PROPORTIONING RELAY VALVE.
- PACCAR recall number **26PACF**. Report received: **01/09/2026**. Owner notification letters expected **mailed October 31, 2026**. No OTA remedy (overTheAirUpdate: false). Dealer replaces front brake valves and hoses, free. Peterbilt customer service 1-940-591-4220.
- Sources: NHTSA recalls API (`api.nhtsa.gov/recalls/recallsByVehicle?make=PETERBILT&model=548&modelYear=2027`), Consumer Affairs Sept 8, 2026 weekly roundup, newsmeapp roundup.
- Population count: NOT stated in the API summary. I do not print a number.

## The physics (why timing, not force, is the killer)
- FMVSS 121's brake actuation timing requirement: **air pressure rise time tr = 0.45 seconds** (NHTSA final-rule derivation, 76 FR 44829, July 27, 2011).
- At 60 mph (88 ft/s), 0.45 s = **~40 feet of travel before full brake actuation**; at 65 mph ≈ 42 feet. Timing is baked into every stopping-distance number the rule publishes.
- Stopping distances under FMVSS 121 (loaded, 60 mph): buses 280 ft, single-unit trucks 310 ft, **truck tractors 355 ft** (1995 rule); the 2009 final rule cut the tractor requirement to **250 ft**.
- Why delayed trailer timing is specifically evil: in a combination vehicle, if the trailer brakes apply LATE relative to the tractor, the trailer keeps pushing while the tractor slows — the textbook setup for **trailer swing / jackknife**. If they apply early/out of sequence, the trailer can brake-drag and destabilize on curves. Brake imbalance across the combination is directional instability, not just extra feet.

## The irony (original contribution #1)
- **PACCAR v. NHTSA, 573 F.2d 632 (9th Cir. 1978), cert. denied 439 U.S. 862 (1978)**: PACCAR was the named plaintiff that got FMVSS 121's road-testing requirements (S5.3.1, S5.3.2, S5.7.1 — stopping distance provisions) **invalidated** as improperly promulgated, on the grounds that ABS of the era was unreliable. NHTSA's own 1978 interpretations (nht78-4.13, nht78-4.14) confirm: the timing/dynamometer/equipment requirements **survived** the ruling and remained enforceable; only the road-testing performance provisions were struck.
- The part of the standard that survived PACCAR's lawsuit was the timing and equipment design requirements. Forty-eight years later, PACCAR files a noncompliance campaign against **exactly the surviving portion** — brake application/release timing. The company that killed half of FMVSS 121 now can't pass the other half.

## The census (original contribution #2): the Peterbilt 500-series brake-timing hat trick
Three brake-timing-adjacent campaigns on the 536/537/548/567 platform in ~3 years:
1. **Safety Recall 23PBJ (2023)** — 2020–2024 Peterbilt 536/537/548/567 (built 7/31/2019–9/8/2023), **141 chassis** (139 US, 2 Canada): **delayed trailer brake RELEASE** — timing of the trailer brake release delayed → trailer instability → CMVSS 121 noncompliance. (Owner notice PDF via static.nhtsa.gov, Transport Canada recall 2023-524.)
2. **25V353 (2025)** — 2026 Peterbilt 548 (45 chassis): rear brake piping installation interference with the left rear brake modulator at full suspension travel → loss of service brake or ABS modulation for one rear axle wheel end. (Not pure timing, but brake-system geometry on the same model.)
3. **26V567 (2026)** — 2027 Peterbilt 548: incorrect front brake valve/hose sizing → delayed rear service brake application AND release + trailer gladhand timing → FMVSS 121 noncompliance.
Finding: the 548's air-brake plumbing has now produced two pure timing noncompliances in three model generations — one where the brakes let go too slowly (2023), one where they grab too slowly (2026). The platform's brake timing keeps failing in both directions.

## Kill test
- Genuinely new on the site? 26V567 never covered; FMVSS 121 timing as a centerpiece never done; the PACCAR-v-NHTSA full-circle frame is new.
- Novel angle? The 1978 lawsuit irony + the two-directional timing census + the feet-per-0.45-seconds arithmetic. Proceed.

## Actionable insight
- If you're a fleet manager running 2027 Peterbilt 548s: letters expected Oct 31, 2026, but don't wait — call the dealer with your VINs now; the fix is free and is a physical valve/hose swap, no software patch exists.
- General: an ABS lamp tells you about lockup, not about a 0.45-second actuation delay. There is no dashboard light for "your trailer's brakes arrive late." Pre-trip brake timing checks on the gladhand circuit matter.

## Limitations
- No population count stated in the NHTSA API summary for 26V567 — I print none, only "certain 2027 Peterbilt 548 trucks."
- No field reports, crashes, injuries, or warranty claims disclosed in the materials I could fetch; I do NOT claim any occurred. The harm case is the physics (delayed timing → instability) plus the standard's own rationale.
- The 25V353 item is brake-geometry, not timing — included for the platform pattern with the distinction stated.
- 23PBJ was a CMVSS (Canada) 121 noncompliance with a US parallel campaign (RCSB-23V661) — I state the Canada framing honestly.

## Counterargument (full strength)
The honest counter: these are brand-new 2027 trucks, most likely caught before they accumulated miles — a self-reported noncompliance on a small batch, the system working exactly as designed. A timing noncompliance measured on a rig doesn't mean a jackknife happened in the field, and PACCAR suing NHTSA in 1978 was about ABS reliability, not about wanting unsafe brakes. The counterargument's limit: whatever the population, this is the *third* brake-timing-adjacent campaign on one platform in three years, failing in *opposite* directions (release too slow in 2023, application too slow in 2026), which suggests a design-process problem, not a one-off bad batch. And the historical irony stands regardless of population size: the survivor of the company that invalidated half of FMVSS 121 is its timing clause — the clause PACCAR just tripped over.

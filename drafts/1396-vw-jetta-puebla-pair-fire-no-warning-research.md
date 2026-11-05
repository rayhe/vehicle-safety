# Research: The 2025 Jetta Got Recalled Twice in One Month. Once Because It Could Catch Fire. Once Because It Couldn't Tell You.

**Slug:** 1396-vw-jetta-puebla-pair-fire-no-warning
**Journalist:** Clara Rollover — Consumer Safety Advocate. Direct, practical, slightly angry on behalf of consumers. The Jetta is America's cheapest German sedan; this is a budget-buy warning story.
**Kicker:** Investigation
**Number:** 1396

## Kill test
Genuinely newsworthy? Yes. Two NHTSA campaigns, same model, same Puebla plant, filed 15 days apart in March 2026, and they are exact opposites: one defect gives the driver NO warning before an engine fire; the other defect kills the warning display itself. No Crash Report article covers either campaign (grep for 26V138, 97TC, 26V185, 90Z5 across all research files: zero hits). The Jetta appears in prior pieces only as a passing mention.

## The two recalls

### Recall 1: The fire with no warning — 26V138 / VW 97TC
- **Population:** 48,165 US + 13,318 Canada = **61,483** 2025–2026 Jettas.
- **Defect:** transmission ground wire may not have been connected during assembly. Open electrical circuit. Excessive current draw. Fire risk.
- **Root cause as stated in VW's filing:** "human error" during manufacturing. A person forgot to connect a wire.
- **Field evidence:** VW aware of **6 confirmed claims** (US + Canada): 3 melted wiring harnesses/connectors, **3 engine-compartment fires**. AutoEvolution counts 7 potentially related claims. No crashes, injuries, or deaths reported.
- **VW's own estimate:** **<1%** of the recalled population actually has the defect. Roughly 480 cars at most, inside a 61,483-car recall.
- **The killer detail:** **there are no warning indicators for drivers.** Nothing on the dash, no smell the filing mentions, no symptom. The first sign can be melting wiring or fire.
- **Production window:** March 3, 2025 – February 17, 2026, Puebla, Mexico.
- **Timeline:** December 2025, two field cases → February 19, 2026, VW confirms fire risk → March 4, recall decision → March 11, reported to NHTSA → March 13, VINs searchable → May 8, owner letters.
- **Remedy:** dealer inspects and repairs the ground wire, free.

### Recall 2: The warning display that goes dark — 26V185 / VW 90Z5
- **Population:** **75,323** US (39,081 Jetta + 36,242 Taos) + 8,040 Canada, all 2025 model year.
- **Defect:** software error in the 8-inch digital instrument cluster (supplier Visteon; incorrect non-volatile-memory operation) can make the cluster fail to display required information at startup: speed, RPM, gear/mode, warning telltales. FMVSS 101 noncompliance. Autoblog reports it can also drop out mid-drive; the Part 573 filing describes failure at startup.
- **VW's own estimate:** **100%** of the recalled population has the defect. Every single one.
- **Timeline:** October 2024, first warranty claims → VW sat on them until February 5, 2026, when the Pre-Product Safety Committee opened an investigation → February 16, noncompliance confirmed → March 18, Product Safety Committee determination → March 25, Part 573 filed → March 27, dealers notified → May 22, owner letters.
- **Production window:** Jetta September 23, 2024 – July 1, 2025; Taos November 6, 2024 – June 20, 2025. Fixed in production week 33 of 2025 (week of August 11, 2025).
- **Remedy:** dealer software update via OBD-II with a specialized VW tool; replace the cluster if that fails. Not an over-the-air update. Free.

## Original contribution (novel to this piece)
1. **The paired-recall cross-tab nobody ran.** Same model, same plant, same month, opposite everything: defect rate <1% vs 100%; failure mode "no warning before fire" vs "the warning display is the failure"; root cause "a human forgot a wire" vs "a supplier's software error"; recall population 61,483 vs 75,323. VW recalled MORE cars for the defect every car has than for the defect that actually set three cars on fire.
2. **The overlap population.** The production windows overlap: 2025 Jettas built **March 3 – July 1, 2025** sit in BOTH recalls. One car could carry a ground wire that might start an engine fire with no warning AND a cluster that might go dark so it could not display a warning. The two defects are independent, same car, same month, same factory.
3. **The warning paradox.** Taken together, the pair defeats the entire warning architecture: the fire defect gives no warning, and the cluster defect removes the warnings. A buyer checking "does this car warn me?" gets the same answer from both recalls: no.
4. **Recall-math inversion vs #951.** The Tiguan BCM recall (26V587, covered in #951) was 100% defective across 49,958 cars. The Jetta ground-wire recall is <1% defective across 61,483 cars. Same manufacturer, same year, opposite ends of the defect-rate spectrum, and the rare defect is the one that burned cars.

## FARS 2014–2023 (NHTSA, via local fars_output.js)
- Volkswagen Jetta: **1,375 deaths**, rate **1.71**/100M VMT, fleet 700,000, 2,394 fatal crashes. Impairment: any-positive 19.9% (alcohol 15.6%, drugs 8.3%) — essentially the fleet average.
- For scale inside the brand: Tiguan rate **0.14** (126 deaths), Golf **0.18** (55 deaths). The Jetta kills at **12x the Tiguan's rate** per mile. Same badge, wildly different real-world outcomes.
- Taos is not in the FARS dataset (too new).

## Strongest counterargument
VW caught both defects through its own field monitoring and recalled voluntarily; no injuries or crashes in either file; the ground-wire defect hits under 1% of cars; the cluster usually fails at startup, when the driver can see it is dark before driving off, not mid-drive. The Jetta's 1.71 FARS rate is mid-pack for sedans, not a deathtrap. Both fixes are free. The system, in the narrow sense, worked.

## Limitations
- FARS Jetta data covers 2014–2023 crashes across all model years; the 2025–2026 cars in these recalls are not in FARS at all. The 1.71 rate describes the nameplate's history, not these specific cars.
- The <1% and 100% defect estimates are VW's own figures from its Part 573 filings, not independently verified.
- The size of the overlap population (2025 Jettas in both recalls) is not published; only the production windows are. The overlap is established from the windows, not a VIN count.
- The cluster failure is described in the filing as a startup failure; mid-drive dropout is reported by Autoblog, not confirmed in the filing.
- No injuries or deaths are tied to either recall; the fire count (3) is claims-based.

## Actionable takeaways
- Own a 2025–2026 Jetta? Run the VIN at nhtsa.gov/recalls and check for BOTH 26V138 and 26V185. A 2025 Jetta built March–July 2025 can be in both.
- The cluster fix is not over-the-air: it needs a dealer visit and a VW diagnostic tool. Do not wait for an update that will never arrive in your driveway.
- Buying a used 2025 Jetta or Taos: the cluster recall is 100% defective by VW's own estimate, so assume the car you are looking at has it until a dealer record proves the software update was done.
- The ground-wire recall has no warning symptom. If you smell melting plastic or see smoke from the engine bay, stop and get out; do not wait for a dashboard light that was never going to come on.

## Primary sources
1. NHTSA Part 573 Safety Recall Report 26V138 (VW 97TC), static.nhtsa.gov/odi/rcl/2026/RCRIT-26V138-6530.pdf — 48,165 US Jettas, ground wire, <1% estimate.
2. NHTSA Part 573 Safety Recall Report 26V185 (VW 90Z5), static.nhtsa.gov/odi/rcl/2026/RCLRPT-26V185-3362.pdf — 75,323 US Jetta+Taos, instrument cluster, 100% estimate, Visteon NVM error.
3. NHTSA recall acknowledgement letter 26V185, static.nhtsa.gov/odi/rcl/2026/RCAK-26V185-0082.pdf — March 31, 2026.
4. Fox Business, March 2026, "Volkswagen recalls nearly 50,000 vehicles over serious engine fire risk from faulty wiring" — human error, 6 claims, 3 fires. foxbusiness.com/lifestyle/volkswagen-recalls-nearly-50k-vehicles-over-serious-engine-fire-risk-from-faulty-wiring
5. Autoblog, April 2, 2026, "VW Recalls 75,000 Jetta and Taos Over Dashboard That Goes Completely Dark While Driving" — mid-drive dropout reporting. autoblog.com/news/vw-recalls-75000-jetta-and-taos-over-dashboard-that-goes-completely-dark-while-driving
6. AutoEvolution, March/April 2026, Jetta/Taos instrument panel recall — Visteon, production fix week 33/2025. autoevolution.com/news/volkswagen-recalls-75323-jetta-and-taos-vehicles-for-potential-instrument-panel-failure-267970.html
7. MotorSafety.org recall news, November 3, 2026 — confirms 26V587 Tiguan context and June 2026 Jetta fire-recall note. motorsafety.org/recall-news/
8. NHTSA FARS 2014–2023 via local fars_output.js (Jetta 1,375 deaths, rate 1.71; Tiguan 0.14; Golf 0.18).
9. NHTSA recalls database, nhtsa.gov/recalls — VIN lookup for both campaigns.

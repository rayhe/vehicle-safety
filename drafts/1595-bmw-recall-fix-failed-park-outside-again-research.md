# Research Notes — #1595: BMW Recalls the Same 720,796 Cars a Second Time (26V733)

**Slug:** `1595-bmw-recall-fix-failed-park-outside-again`
**Journalist:** Clara Rollover (consumer safety advocate — park-outside recall, what owners must do)
**Kicker:** Investigation
**Date:** November 26, 2026

## Kill test
PASS. A recall of a recall is rare on its own; this one is the whole population, re-recalled,
because the first fix failed in the only cars that could prove it. The 2024 remedy was a
splash shield built on a wrong theory (fluid drips). The 2026 filing says the connector
plastic itself went brittle and cracked. Every known post-fix incident happened in a car
that had already been "fixed." Novel on the site: zero prior coverage of 26V733 or the
BMW water-pump recall; the closest prior piece (#1583) is Honda/Takata, a different
failure mode. Waymo school-bus and Toyota Takata angles were rejected as already covered
(#1461, #1523, #1579, #1591).

## Primary sources (3+)
1. BMW of North America, Part 573 Safety Recall Report 26V733, filed Nov 4, 2026 —
   https://static.nhtsa.gov/odi/rcl/2026/RCLRPT-26V733-8273.pdf
   (population, model breakdown, defect description, full chronology, remedy status,
   supplier Pierburg Pump Technology GmbH, "cause" field left blank)
2. NHTSA, Consumer Alert: "Urgent Park Outside Recall Issued for Nearly 721K BMW
   Vehicles" — https://www.nhtsa.gov/press-releases/bmw-water-pump-recall-fire-risk
   (~10 US incidents, all in previously repaired vehicles; no crashes or injuries;
   letters Dec 25, 2026; VIN search Dec 25, 2026)
3. NHTSA acknowledgment letter RCAK-26V733-8606 —
   https://static.nhtsa.gov/odi/rcl/2026/RCAK-26V733-8606.pdf
   (confirms 26V733 replaces 24V608; repaired vehicles need the new remedy)
4. BMW Service Information Bulletin 11 07 24 (24V608 remedy) —
   https://static.nhtsa.gov/odi/rcl/2024/RCRIT-24V608-2005.pdf
   (2024 remedy: inspect pump/connector, replace if needed, retrofit splash shield)
5. WardsAuto, "BMW recalls over 720K vehicles for second time over fire risk,"
   Nov 23, 2026 — https://www.wardsauto.com/news/bmw-recalls-over-720k-vehicles-for-second-time-over-fire-risk/875361/
   (chronology summary; Pierburg supplier; decision Oct 28, 2026)
6. Carveyance, "When the Recall Fix Doesn't Fix the Car" —
   https://carveyance.com/articles/when-the-recall-fix-fails/
   (completion-rate figures from BMW's quarterly reports to NHTSA, latest filed
   Oct 29, 2026; 2024 letters mailed Mar 28, 2025)

## Verified facts
- **Population:** 720,796 vehicles, model years 2012-2018, N20/N26 four-cylinder BMWs.
  Exact same count as 24V608 (Aug 2024). 100% overlap: 720,796 = 720,796.
- **Defect:** water pump electrical connector, improperly sealed; material degradation
  lets moisture in, short circuit, thermal event, in rare cases fire. Can happen parked
  and switched off.
- **2024 remedy (24V608, filed Aug 13-14, 2024):** inspect pump connector and harness
  plug, replace pump and/or harness if needed, retrofit a splash shield to divert
  crankcase-ventilation fluid dripping from the intake hose. Owner letters did not go
  out until Mar 28, 2025 — 226 days after filing.
- **Post-remedy incidents:** ~10 in the US, ALL in vehicles that had received the
  2024 remedy. No crashes, no injuries (per BMW/NHTSA).
- **Chronology (from the 26V733 Part 573):**
  - Mar 2024: South Korea's transport ministry flags a thermal event; BMW blames
    blow-by fluid dripping onto the connector.
  - Apr 24, 2025: non-US 5 Series thermal overload at the connector, post-remedy.
    BMW suggests improper repair.
  - Jun 24, 2025: US 3 Series smoldering at the connector, post-remedy.
  - Oct 6, 2025: lab analysis supports the improper-repair hypothesis.
  - Early Jan 2026: focused review finds additional post-remedy overheating cases;
    parts-return program starts.
  - Feb 3, 2026: talks begin with pump supplier Pierburg.
  - Mar 11, 2026: testing finds leak pathways near the connector; DSC analysis finds
    severe embrittlement of the PBT (polybutylene terephthalate) connector plastic.
    Root cause NOT determined.
  - April 2026: further DSC finds extreme localized embrittlement; CT scans,
    microscopy and chemical analysis find cracks in the connector.
  - May 2026: outside expert engaged. May-Sep: supplier coordination; hydrolysis of
    the PBT raised as a possibility, still unproven.
  - Sep 2026: more DSC confirms partial localized embrittlement.
  - Oct 28, 2026: BMW decides on a second recall "in an abundance of caution."
  - Nov 4, 2026: 26V733 filed (812 days after 24V608; 552 days after the first
    post-remedy incident).
- **Remedy status:** still under development. Park outside and away from structures
  until fixed. Interim owner letters Dec 25, 2026; VINs searchable on nhtsa.gov
  Dec 25, 2026. Free at a BMW dealer when available. No date given.
- **Defect estimate:** BMW now says fewer than 0.1% of the 720,796 actually contain
  the defect (under 721 cars) — yet it is recalling all of them a second time.
- **Model split (Part 573):** 3 Series sedan 236,702 (32.8%); X3 163,728 (22.7%);
  5 Series 110,102; X1 62,954; 4 Series coupe 29,693; 4 Series Gran Coupe 23,790;
  4 Series convertible 20,082; X5 xDrive40e 14,808; X4 14,061; 2 Series coupe 12,742;
  328xi Gran Turismo 12,709; 2 Series convertible 6,824; Z4 6,621; 3 Series wagon
  5,980. 3 Series + X3 alone = 55.6% of the recall.
- **Supplier:** Pierburg Pump Technology GmbH, Neuss, Germany. Pump part numbers
  8625097, 8635089, 7604027.

## Original calculations (the novel contribution)
- **First-fix completion: 40.5%.** BMW's quarterly reports to NHTSA show 291,682
  cars repaired under 24V608 by end of September 2026; 14,902 scrapped, stolen or
  exported; 414,212 (57.5%) neither repaired nor removed. 291,682 / 720,796 = 40.5%.
  Progression: 8.5% by Jun 2025, 29.3% by Dec 2025, 40.5% by Sep 2026.
- **The failure was only visible in the repaired minority.** All ~10 known US
  incidents happened in the 291,682 repaired cars — 1 incident per ~29,168 repaired
  cars. The 414,212 never-fixed cars could not have shown the fix failing, because
  they never got it. The recall system only learns a fix failed from the people who
  showed up.
- **The shield treated the wrong failure.** 2024 theory: fluid drips onto the
  connector. 2026 finding: the connector plastic itself embrittles and cracks.
  A shield diverts drips; it cannot un-crack plastic. The 2024 remedy was built on
  a diagnosis the 2026 filing quietly abandons.
- **BMW still does not know why.** The "Description of the cause" field in the
  26V733 Part 573 is blank. Hydrolysis of the PBT is a possibility under study,
  not a conclusion, after 19 months of lab work (Mar 2026 DSC to Oct 2026 decision).

## Strongest counterargument
BMW's defect estimate is under 0.1%, and there have been zero crashes and zero
injuries across roughly 720,000 cars over two years. Ten smoldering connectors in
repaired cars is a small absolute number, and a park-outside recall with no remedy
date may be the most cautious possible response rather than a scandal. The 40.5%
completion rate is also normal for an old-car recall — 2012-2018 cars change hands,
and second owners are hard to reach. Fair. But the counterargument cuts the other
way too: if the defect is that rare, recalling all 720,796 a second time is an
admission the first diagnosis was wrong, not just incomplete.

## Limitations
- Completion figures (291,682 / 14,902 / 414,212) come from BMW's quarterly reports
  as tabulated by Carveyance, not from a NHTSA document I read directly; the
  underlying quarterly report was filed Oct 29, 2026.
- Incident count "~10" is BMW's own characterization ("relate, or may relate");
  NHTSA's count matches. No independent incident-level data.
- Root cause genuinely unknown — hydrolysis is unproven. Do not present it as fact.
- The 2024 defect-rate estimate (reported as 1% by secondary sources) was not
  verified against the 24V608 Part 573 directly; the article will not cite it.

## Actionable takeaways
- If you own a 2012-2018 BMW 2/3/4/5 Series, X1, X3, X4, X5 xDrive40e or Z4 with
  a four-cylinder engine: park outside, away from buildings and other cars, until
  the remedy exists. Check your VIN at nhtsa.gov/recalls starting Dec 25, 2026.
- If you already had the 2024 fix done: you still have to go back. The 2024
  repair does not count.
- If you bought one of these used in the last two years: the 2024 recall may never
  have reached you — 57.5% of the population never got the first fix. Check the VIN.
- BMW hotline: 1-800-525-7417. NHTSA Vehicle Safety Hotline: 888-327-4236.

## Headline options
- "The Fix Didn't Fix It: BMW Recalls the Same 720,796 Cars a Second Time"
- "BMW Recalled 720,796 Cars for a Fire Risk. The Repair Failed, So It Recalled Them All Again."
- "Park Outside, Again: BMW's 2024 Fire Fix Didn't Work"

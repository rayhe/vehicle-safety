# Research Notes — #1125: The Ignition-Switch Car Never Stopped Killing

**Slug:** 1125-cobalt-scandal-car-still-killing
**Journalist:** Rex Driverton (Investigation)
**Topic:** The Chevrolet Cobalt — the car at the center of the 2014 GM ignition-switch scandal — has the 6th-highest fatality rate in the FARS dataset (5.1 deaths per 100M VMT, ~4.4x the national average), killing 1,540 Americans in 2014-2023. GM fixed the switch, paid $900M to DOJ, recalled ~30M cars. The Cobalt kept killing 154 people a year.

## Verified facts

1. **The body count (FARS 2014-2023):** Chevrolet Cobalt — 1,540 deaths, 154.0/year average, across 1,907 crashes. Fleet est. 262,500, VMT 3,019. Fatality rate: **5.1 per 100M VMT**, rank **6 of 337** models. National fatality rate ~1.1-1.2/100M VMT (NHTSA 2024: 1.19; 2025 est: 1.10) — the Cobalt is roughly **4.4x the national average**. (fars_output.js, derived from NHTSA FARS bulk CSV; NHTSA press releases on 2024/2025 rates)
2. **Worse than the usual suspects on a per-mile basis:** Cobalt (5.1) outranks Honda Accord (3.07), Nissan Altima (2.88), Chevy Trailblazer (2.83). Only the Hyundai Veloster (8.54), Chevy Tracker (7.83), Toyota Land Cruiser (6.27), Ford Mustang (6.02), and Nissan Maxima (5.11) rank worse. (fars_output.js)
3. **The scandal (all Wikipedia, GM ignition switch recalls page):** First recall announced Feb 7, 2014 — ~800,000 Cobalts and Pontiac G5s. Faulty ignition switch could cut the engine mid-drive and disable airbags. GM knew since at least 2005. Total ~30M cars recalled worldwide. GM compensation fund paid for **124 deaths**. DOJ deferred prosecution agreement: GM **forfeited $900M**, admitted failing to disclose "a deadly safety defect" from spring 2012 to Feb 2014. The 57-cent-per-car fix. Most victims were under age 25. Cobalt production ended 2010.
4. **The irony the data forces:** The FARS window is 2014-2023 — the recall/fix happened at the START of the window. These 1,540 deaths are overwhelmingly post-fix deaths. The scandal is over. The dying isn't.
5. **Model-year breakdown (FARS deaths by model year):** 2005: 169, 2006: 328, 2007: 292, 2008: 306, 2009: 220, 2010: 225. The 2006 model year alone accounts for 328 deaths — more than 1 in 5 of the total. (fars_output.js FARS_MODEL_YEAR)
6. **Impairment (FARS toxicology):** 1,827 drivers in fatal Cobalt crashes; 22.4% impaired (any: alcohol or drugs) vs 20.0% baseline across 490,736 drivers. Above average but not extreme — rank 63 of 307. Impairment explains some of the toll, not most. (fars_output.js FARS_TOXICOLOGY)
7. **The beater pipeline:** The Cobalt was America's cheapest new car when sold ($14,990-ish MSRP class); now it's a $2,000 Craigslist special. The same demographic the scandal killed (under-25s) is now the primary buyer of the surviving fleet. The 57-cent defect was fixed; the affordability trap wasn't.

## Novel contribution (original framing)
Nobody has connected the Cobalt's post-scandal FARS death toll to the scandal's legacy. The established story is "GM fixed it, paid up, scandal over." The data says the car GM killed in 2010 — the one that cost $900M and 124 compensated deaths — is still the 6th-deadliest car in America per mile driven, 16 years after production ended. The scandal's second act isn't a defect; it's the aftermarket: cheap, old Cobalts are first cars for the exact age group the ignition switch killed. Plus the quantitative peg: 4.4x the national fatality rate, computed against NHTSA's own 2024/2025 national rates.

## Kill test
PASS. Genuinely novel angle (post-scandal death toll never quantified in public coverage), grounded in primary data (FARS), 3+ primary sources (FARS bulk data, Wikipedia with 40+ citations to congressional testimony/DOJ filings, NHTSA national rate releases), actionable (used-car buyers — see below). Full-queue duplicate check CLEAN for: cobalt, ignition switch, ignition-switch. (#1116's note only references the switch in passing for the Impala; #1002's note mentions cobalt in passing; no dedicated Cobalt story exists.)

## Counterargument (strongest)
The Cobalt's high rate may reflect who drives surviving Cobalts, not the car: cheap 15-20-year-old cars are driven by young, low-income, higher-risk drivers with worse insurance, less maintenance, and higher impairment (22.4% vs 20.0% baseline supports this partially). The ignition switch itself was fixed — the 2014-2023 deaths are NOT switch-caused. Also: FARS rate uses estimated VMT, not odometer readings; low-volume legacy models carry ±15% uncertainty. And the 2006 model-year spike (328) partly reflects that 2006 was the peak sales year, so more 2006s were on the road.

## Limitations
- FARS captures only fatal crashes (39,254 deaths in 2024 vs ~6.7M total crashes) — a low fatality rate doesn't mean low injury rates, and vice versa.
- The estimated_rate uses VMT estimates (NHTS-based), not measured mileage — ±15% uncertainty for low-volume models.
- Cannot attribute individual deaths to the ignition switch vs. other causes within this window; the scandal-specific death count (124 compensated) is GM's fund figure, not a FARS attribution.
- Survival bias: Cobalts still on the road in 2023 are a selected subset (worst-maintained or least-driven?).

## Actionable takeaways
1. If you're shopping for a sub-$5,000 first car for a teenager: the Cobalt is one of the worst statistical bets in the country. Cross-shop the Corolla or Civic instead — both have fatality rates less than half the Cobalt's.
2. If you still drive a Cobalt: the ignition-switch recall is done and free — verify at nhtsa.gov/recalls with your VIN, then keep the keychain light anyway (the switch fix addressed the torque spec; a light keychain is still cheap insurance).
3. Broader: scandal recalls fix defects, not demographics. The cheapest survivors of any scandal car deserve extra scrutiny as used purchases.

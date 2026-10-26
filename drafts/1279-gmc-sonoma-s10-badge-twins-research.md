# Research Notes — Article #1279: GMC's Sonoma Was the S-10 in a Nicer Shirt

**Working title:** "GMC's Sonoma Was the S-10 in a Nicer Shirt. It Killed 378 People Anyway."
**Journalist:** Rex Driverton (Senior Crash Correspondent — fatality rate investigations, vehicle-specific deep dives)
**Kicker:** Body Count
**Slug:** 1279-gmc-sonoma-s10-badge-twins
**Started:** 2026-10-25 (PDT)

## Kill test

**Proposed angle (1-2 sentences):** The GMC Sonoma was the Chevrolet S-10 with a nicer badge and a higher sticker price, built on the identical platform. In FARS 2014-2023 it killed 378 people at a rate of 2.13, 7.6 times the rate of its own replacement (the Colorado, 0.28), and its drivers in fatal crashes were *less* likely to be impaired than the S-10's (17.4% vs 20.5%) — the badge premium bought nothing, and sobriety did not save them.

**Challenge:** After 1,278 articles, is this just another S-10 story? No. Four reasons: (1) site grep 2026-10-25: no Sonoma-named draft or story exists; the Sonoma appears only as a passing mention inside aggregate pieces (brand-lethality ranking, choice-gap truck deaths) and never as the subject; the S-10 has four dedicated articles, the Sonoma has zero; (2) the numbers are Sonoma-specific, not borrowed from the S-10: 378 deaths, rate 2.13, 500 toxicology drivers, anyPct 17.4, model-year deaths ending 2003; (3) the badge-premium frame is new: GMC sold the same truck for more money, and the crash data does not distinguish between the two badges — the premium was pure marketing; (4) the replacement ratio is new: 7.6x the Colorado's rate, computed from the same dataset, gives a used-truck buyer a concrete alternative.

**Verdict:** PROCEED.

## Verified facts (all from fars_output.js, FARS 2014-2023)

1. **Sonoma body count.** GMC Sonoma: 378 deaths, 37.8 per year, 475 fatal crashes, fleet 131,250, fatality rate 2.13.
2. **The twin.** Chevrolet S-10 Pickup: 1,427 deaths, rate 4.83. Combined platform body count: 1,805 deaths. Same GM small-pickup platform; the Sonoma was GMC's version of the S-10, sold through 2004.
3. **The replacement.** Chevrolet Colorado: 348 deaths, rate 0.28. Sonoma rate / Colorado rate = 7.6x. A buyer choosing a used Sonoma over a used Colorado faces more than seven times the per-mile fatality rate.
4. **The sober paradox.** Sonoma toxicology: 500 drivers in fatal crashes, 87 impaired (17.4% any-positive; 14.6% alcohol, 6.0% drugs). Fleet-weighted impairment across all models in the dataset: 20.0%. S-10: 20.5%. Colorado: 19.0%. Sonoma drivers in fatal crashes were *less* impaired than the S-10's drivers and less impaired than average — impairment does not explain the Sonoma's rate.
5. **The old-truck clock.** Sonoma model-year deaths in the dataset end with model year 2003 (peak years 1998-2003: 37, 25, 45, 35, 38, 50 deaths). Every Sonoma death in the 2014-2023 window happened in a truck at least 11 years old, most 15-25 years old. Production ended after model year 2004.
6. **Class context.** Other pickups for scale: Ford F-150 rate 1.04 (9,194 deaths), Chevrolet Silverado 1.25 (9,591), Ford Ranger 2.91 (3,089), Dodge Dakota 2.62 (1,237), Toyota Tacoma 0.80 (2,274). The Sonoma's 2.13 sits above every full-size truck and above the Tacoma, despite weighing far less than any of them.
7. **Why small old pickups kill.** No stability control, no side curtain airbags on most trims, ladder frame from the 1980s, and a small mass footprint against modern traffic. (General engineering context, consistent with the site's prior S-10 coverage; stated as context, not as a FARS field.)

## Original calculations (verifiable, show work in article)

- 378 + 1,427 = 1,805 combined S-10/Sonoma platform deaths, 2014-2023.
- 2.13 / 0.28 = 7.6x (Sonoma vs Colorado fatality rate).
- 2.13 / 1.04 = 2.0x (Sonoma vs F-150 fatality rate).
- 17.4% vs 20.0% fleet-weighted impairment: Sonoma drivers 2.6 points *less* impaired than average.
- 378 deaths / 10 years = 37.8 per year, in a fleet of just 131,250 trucks.

## Actionable insights (for article)

1. Shopping for a cheap used pickup? Skip the Sonoma/S-10 generation entirely. A used Colorado (post-2015 especially) carries roughly one-seventh the per-mile fatality rate.
2. If you already own a Sonoma: it has no stability control and no curtain airbags. Treat it as a fair-weather, low-speed truck, not a highway commuter.
3. The badge lesson generalizes: a premium badge on an old platform buys trim, not structure. Check the platform, not the grille.

## Limitations

- FARS rates are estimates built from fleet and VMT approximations in fars_output.js; small-fleet models (Sonoma fleet 131,250) carry wider uncertainty than mass-market models.
- FARS does not break out seat belt use, speed, or rural/urban split at the per-model level in this dataset, so the impairment comparison controls for one behavioral axis only.
- The Sonoma/S-10 "same platform" claim is standard automotive history (GM GMT325 platform family), not a FARS field.
- Do NOT claim GMC charged a specific dollar premium without a source; frame the premium qualitatively ("the nicer badge, the higher sticker").

## Primary sources

1. NHTSA, Fatality Analysis Reporting System (FARS), 2014-2023, via site dataset fars_output.js. https://www.nhtsa.gov/research-data/fatality-analysis-reporting-system-fars
2. IIHS, Fatality Statistics (vehicle size/weight context). https://www.iihs.org/topics/fatality-statistics
3. NHTSA recalls database (VIN check for any open Sonoma recall). https://www.nhtsa.gov/recalls

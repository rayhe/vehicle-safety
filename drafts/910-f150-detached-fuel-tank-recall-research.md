# Research: #910 — F-150 Fuel Tank Recall (26V578 / 26S69)

## The news (Sept 2026)
- **Ford recall 26S69, NHTSA campaign 26V578**, filed Sept. 9, 2026.
- **223,472** F-150 pickups, model years **2023-2027**, recalled.
- Defect: front fuel tank straps "may have been improperly assembled" — T-slots not properly inserted into the frame rail during assembly.
- Consequence: fuel tank can leak or **detach from the vehicle while driving**; leak can cause engine stall or fire; detached tank is a road hazard.
- Root cause detail (Free Press, from Part 573 report): camera systems that verify proper strap assembly "were not in continuous use" at the F-150 plants from **Jan. 4, 2023 through Aug. 27, 2026**. Recall population limited to vehicles unsold or with <3 months in service as of Aug. 27, 2026.
- **16 warranty claims** globally related to the condition; **no accidents or injuries** reported.
- Ford estimates **1%** of recalled vehicles are affected (~2,235 trucks).
- Built at Dearborn Truck Plant and Kansas City Assembly (Claycomo, MO).
- Dealer notification began Sept. 14; owner letters start **Sept. 21, 2026**; inspection/repair free. Ford: 1-866-436-7332.
- VINs searchable at nhtsa.gov/recalls under 26V578 from Sept. 14.
- Context: Ford CEO Jim Farley told the Free Press (July 2025) the company is on a quality overhaul; Ford ranked #1 mainstream brand in the 2026 JD Power Initial Quality Study.

## FARS cross-tab (fars_output.js, 2014-2023) — the vintage inversion
- Ford F-150: **9,194 deaths** over 2014-2023 (annual ~919; rate 1.04 per 100M VMT).
- Model-year coding of those deaths:
  - **2001 alone: 672 deaths** (single deadliest vintage).
  - **2005 and older: 5,378 of 9,118 coded deaths = 59.0%.**
  - **2015 and newer: 1,026 = 11.3%.**
  - Top death years: 2001, 2004, 2002, 2003, 2006, 2005, 2008, 2000. All pre-2010.
- The recall covers 2023-2027 trucks, which barely exist in the 2014-2023 FARS window. **Ford is recalling its newest trucks for a defect while the trucks actually producing the F-150's body count are 20+ years old.**
- Impairment (FARS_TOXICOLOGY): F-150 drivers 18.9% any-impairment (14.4% alcohol, 8.0% drug) across 21,195 tested drivers — near the national middle.

## Why this is novel (kill test)
- The F-150 is the most-covered vehicle on the site (6+ stories), BUT no story covers a falling-off fuel tank, and no story inverts the vintage angle: the site's own f150-deadliest-vintage-2001 piece established that old trucks kill. This piece flips it: **the recall fleet and the death fleet are disjoint populations.**
- News hook is 7 days old (filed Sept. 9, covered Sept. 14-15) — timely.
- Original contribution: quantifying the mismatch — recall vintages (2023-2027) ≈ ~0-2% of FARS death record vs. ≤2005 vintages = 59%. Nobody else ran the vintage breakdown against the recall scope.
- Mechanism detail (camera verification gap over 3.5 years, T-slot insertion) gives it engineering texture beyond a press-release rewrite.

## Strongest counterargument (must appear in article)
- Recalls target defects, not death counts — that's the whole point. A fuel tank detaching at highway speed is a catastrophic, fire-risk event; 16 warranty claims and zero injuries is the system working as designed, not a scandal.
- The old-truck death dominance is exposure + age (no ESC, rust, worn components), not a Ford defect; you can't "recall" 20-year-old trucks into being new.
- Ford's own estimate: only 1% of the 223,472 are actually affected. The headline number overstates the real-world risk.

## Limitations (must appear in article)
- FARS window ends at 2023; 2023-2027 trucks have almost no exposure in the data, so vintage-to-vintage death-rate comparisons across this boundary are not apples-to-apples.
- Model-year coding in FARS has known gaps (9,194 total deaths vs 9,118 with coded model years).
- Warranty-claim count (16) is global and self-reported by Ford; the true affected population is Ford's 1% estimate, unverified independently.
- AAA Foundation debris statistics cited via AutoPostGlobal (secondary); treat as directional.

## Actionable takeaways (required)
- Own a 2023-2027 F-150: check your VIN at nhtsa.gov/recalls now (searchable since Sept. 14); letters go out Sept. 21; dealer inspection is free — don't wait.
- Shopping used: the F-150 death record is dominated by 2001-2008 trucks. A cheap 2004 F-150 is statistically a different vehicle than a 2024 one.
- What to check on ANY used truck: frame-rail hardware and fuel-system integrity, not just the odometer.

## Sources (3+ primary)
1. NHTSA recall database / Part 573 report for campaign 26V578 (filed Sept. 9, 2026) — primary recall document. https://www.nhtsa.gov/recalls
2. NHTSA FARS via fars_output.js (2014-2023) — primary crash data. https://cdan.dot.gov/query
3. Detroit Free Press, "Ford files 4 new recalls that will impact 225,000-plus vehicles," Sept. 14, 2026 (camera-gap detail, 16 claims, 1% estimate, Jim Farley quality context). https://www.freep.com/story/money/cars/ford/2026/09/14/ford-recall-fuel-tank-pickup-trucks/91756597007/
4. USA Today, "Ford recalls over 220,000 vehicles. See affected models," Sept. 14, 2026 (223,472 count, 26S69, Sept. 21 letters, 1-866-436-7332). https://www.usatoday.com/story/cars/recalls/2026/09/14/ford-vehicle-recall-september-2026/91756233007/
5. AutoGuide, "Massive Ford F-150 Recall Issued For Fuel Tanks That Fall Off," Sept. 2026 (26V578000 campaign number, Sept. 14 VIN searchability). https://www.autoguide.com/auto/manufacturers/ford/massive-ford-f-150-recall-issued-for-fuel-tanks-that-fall-off-44638546

## Slug / journalist
- Slug: `910-f150-detached-fuel-tank-recall`
- Journalist: **Rex Driverton** (investigations, FARS deep dives, paradoxes; deadpan noir). Last: Mia Crumplezone (#900).
- Kicker: Investigation

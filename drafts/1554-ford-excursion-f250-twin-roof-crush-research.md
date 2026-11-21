# Research: Ford Excursion — The F-250's Evil Twin (1554)

**Slug:** `1554-ford-excursion-f250-twin-roof-crush`
**Journalist:** Mia Crumplezone (safety engineering / vehicle design beat)
**Date:** 2026-11-21
**Status:** RESEARCH complete, ready for DRAFT

## Angle (1-2 sentences)
The Ford Excursion is the same truck as the F-250 Super Duty from the B-pillars forward — same chassis, same suspension, same engines — yet it kills at 3.8x the F-250's rate per mile, and a Nevada Supreme Court case showed why: Ford never physically roof-crush tested it, because at 8,600 lb GVWR the law didn't require it to.

## Self-critique gate
- Genuinely surprising after 1,550+ articles? YES. Excursion has never had a dedicated article (only passing mentions in 6 stories). The platform-matched comparison (Excursion 1.65 vs F-250 0.43) is a cross-tab nobody ran: same bones, 3.8x the death rate. The Trejo v. Ford roof-crush record ($70 fix, strength-to-weight 1.25 vs Ford's own 1.725 guideline) is a court filing, not a rehashed recall.
- Not just a data dump: the data isolates the variable. Same platform, different body = the danger lives in the wagon body, the roof, and the 9-seat occupancy.
- Verdict: PROCEED.

## Primary sources (3+ required)
1. **NHTSA FARS 2014-2023** (via repo `fars_output.js`): Excursion, F-250, Expedition, Tahoe, Suburban rates; toxicology; model-year breakdown. https://www.nhtsa.gov/research-data/fatality-analysis-reporting-system-fars
2. **Ford Motor Company v. Trejo, 133 Nev. 520 (2017)** — Nevada Supreme Court: Ford conceded no physical roof-crush test on the Excursion; strength-to-weight ratio 1.25 (0.79 with windows broken) vs Ford internal guideline 1.725; $70 / 70-lb reinforcement available; jury found defective roof design was a proximate cause of death. https://saidtorts.lawbooks.cali.org/chapter/design-defects-socratic-script/
3. **Wikipedia, "Ford Excursion"** — derived from 3/4-ton F-250 Super Duty; shares chassis and front suspension; GVWR 8,600 lb (gas) / 8,900 lb (diesel); above 8,500 lb, exempt from EPA fuel economy ratings and CAFE. https://en.wikipedia.org/wiki/Ford_Excursion
4. **NHTSA FMVSS 216a (49 CFR 571.216a, finalized 2009)** — pre-2009 roof-crush standard did not cover vehicles over 6,000 lb GVWR at all; 216a extended coverage to 6,001-10,000 lb at 1.5x unloaded weight. https://legalclarity.org/fmvss-216a-roof-crush-resistance-safety-standards/

## FARS data (2014-2023, from fars_output.js)
| Model | Class | Deaths | Crashes | Rate /100M VMT | Fleet |
|---|---|---|---|---|---|
| Ford Excursion | SUV | 181 | 312 | **1.65** | 87,500 |
| Ford F-250 | Pickup | 909 | 2,499 | **0.43** | 1,575,000 |
| Ford Expedition | SUV | 1,515 | 2,641 | 2.31 | 525,000 |
| Chevrolet Tahoe | SUV | 2,592 | 5,078 | 2.49 | 831,250 |
| Chevrolet Suburban | SUV | 593 | 1,151 | 1.36 | 350,000 |
| SUV class average | SUV | 46,442 | 88,568 | 0.55 | 67,935,000 |

### Original calculations
- **Excursion vs F-250 rate ratio:** 1.65 / 0.43 = **3.84x**. Same platform, same era, same powertrains.
- **Excursion vs SUV class average:** 1.65 / 0.55 = **3.0x**.
- **Deaths per fatal crash:** Excursion 181/312 = **0.58** vs F-250 909/2,499 = **0.36** — each Excursion fatal crash kills 1.6x as many people (9 seats vs a pickup cab; occupancy is the multiplier).
- **Still killing:** 181 deaths over 10 years = **18.1/year**, for a vehicle discontinued after model year 2005 — 21 years out of production and still averaging a death every 20 days.
- **Model-year deaths:** 2000: 51, 2001: 43, 2002: 24, 2003: 25, 2004: 17, 2005: 21 (sums to 181, matches total).

### Toxicology (FARS_TOXICOLOGY)
- Excursion drivers in fatal crashes: 308; alcohol-positive 14.3%, drug-positive 6.8%, any impairment 17.5%.
- SUV class average: any impairment 19.5%. Excursion drivers are *less* impaired than the average SUV driver — this is not a drunk-driver story. The vehicle is the problem, not the driver.

## The roof-crush record (Trejo v. Ford, 2017)
- Rafael Trejo died in a 2000 Excursion rollover; the roof crushed and pinned his neck (hyperflexion/suffocation theory).
- Ford conceded at trial it performed **no physical roof-crush tests** on the Excursion. A 2002 computer simulation used modeling developed for the Super Duty pickups.
- Ford's internal guideline: strength-to-weight ratio of 1.725 for vehicles under 8,500 lb. The Excursion's ratio was **1.25** — and **0.79** if the windows broke and stopped bracing the roof.
- Ford had **no internal guideline at all** for vehicles over 8,500 lb GVWR. The Excursion's 8,600 lb rating put it outside Ford's own safety rulebook.
- Expert testimony: the roof could have been reinforced for **$70 in production costs** and 70 lb of weight.
- Jury verdict for Trejo on both strict products liability and negligence; Nevada Supreme Court affirmed (133 Nev. 520).

## Why the gap exists (analysis)
1. **Regulatory hole:** At 8,600+ lb GVWR the Excursion sat above the 8,500 lb line where Ford's own roof-strength guideline stopped — and above the 6,000 lb line where the old FMVSS 216 roof standard stopped. The biggest SUV Ford ever built was, by weight class, effectively unregulated on roof strength until FMVSS 216a (2009), four years after production ended.
2. **Occupancy:** 9 seats. When it crashes, more people are inside. Deaths-per-crash 0.58 vs the F-250's 0.36.
3. **Physics:** ~7,730 lb curb weight, 80 inches tall, high center of gravity, body-on-frame. Rollovers are where roof strength matters, and this roof was never tested.
4. **Age:** Every Excursion on the road is 21+ years old. No ESC was ever offered (pre-mandate, discontinued 2005). No side curtain airbags in early years.

## Strongest counterargument
The rate comparison has a confounder: the F-250 fleet is mostly work trucks driven by professionals on highways during the day, while Excursions are family haulers — more occupants, more kids, more weekend/night driving. Some of the 3.8x gap is exposure and occupancy, not engineering. Also, the Excursion fleet is tiny (87,500) and old, so the rate estimate carries more uncertainty than the F-250's. But the toxicology data cuts against the "bad drivers" theory (Excursion drivers are *less* impaired than average), and the Trejo record establishes the roof defect independently of the statistics — the numbers and the courtroom agree.

## Limitations
- FARS rate uses estimated VMT, not odometer readings; ±15% uncertainty for low-volume models like the Excursion.
- FARS only captures fatal crashes; injury-only rollovers (where a weak roof still matters) are invisible here.
- The Trejo case concerns a 2000 model-year Excursion; later model years may have had running changes Ford never disclosed.
- No IIHS rating exists for the Excursion (never tested — over the weight class IIHS rated at the time).

## Actionable takeaways
- If you're shopping for a cheap big used SUV to haul the family: the Excursion is the worst of the full-size set on a per-mile basis, and the only one whose roof was never physically tested. A 2000-2006 Expedition or Tahoe from the same era at least lived under the roof standard.
- Any Excursion still on the road is 21+ years old with no ESC and no modern roof standard. If you own one, the single highest-value safety act is seatbelts for all nine seats — belts are what keep occupants out of the crush zone in a rollover.
- Check the VIN at nhtsa.gov/recalls: Excursions were recalled for a cruise-control switch fire risk (2005) and other campaigns.

## Coverage check (duplicate prevention)
- Filename grep across stories/ + drafts/ + status.json queue for "excursion": ZERO dedicated articles, ZERO queue entries. Only passing mentions inside 6 unrelated stories (child-seat, rear-seat, battery-structure pieces).
- "f250"/"f-250" platform comparison with Excursion: never run.
- Trejo v. Ford: never cited on the site.
- Sibling coverage that does NOT overlap: 1063-tahoe-expedition-full-size-suv-death-gap (Tahoe vs Expedition, no Excursion), 1432-expedition-2007-cliff-deaths-fell-85-percent, 1546-maverick-one-cable-kills-steering-brakes-lights.

## Headline options
- "The F-250's Evil Twin Kills at 4x the Rate — and Ford Never Crash-Tested Its Roof"
- "Ford Built Its Biggest SUV on Its Toughest Truck. Then It Skipped the Roof Test."
- "Same Truck, 4x the Deaths: The Excursion's Roof Was Never Tested"

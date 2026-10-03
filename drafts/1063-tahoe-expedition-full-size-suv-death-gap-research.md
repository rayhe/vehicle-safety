# Research: #1063 — The Full-Size SUV Death Gap

## Angle (1-2 sentences)
The biggest SUVs on the road are the deadliest in their class: FARS 2014-2023 puts the GMC Yukon at 2.55 and Chevy Tahoe at 2.49 deaths per 100M VMT, roughly 60x the Kia Telluride (0.04). The IIHS lab agrees: in June 2024 testing the Tahoe earned a Poor and the Expedition a Marginal in the updated moderate-overlap test, while the unibody Jeep Wagoneer took a Top Safety Pick.

## Kill test
- **Genuinely newsworthy?** Yes. Three independent signals point the same way: IIHS lab results (June 2024), FARS nameplate rates (2014-2023), and the J.D. Power irony peg (July 2026: Tahoe tied first in large-SUV initial quality while leading the class in death rate).
- **Novel angle?** Yes. First lab-vs-FARS cross-tab for full-size SUVs in ~30 pipeline articles. Queue grep: zero hits for tahoe/expedition/suburban/4-runner/palisade. #946 did sedan-vs-SUV class; #960 did 3-row midsize lab-vs-FARS (Pilot/Highlander/CX-90). This is the full-size body-on-frame segment, untouched.
- **Verdict: PROCEED.**

## Data (FARS 2014-2023, via fars_output.js; rate = deaths per 100M VMT, estimated)

| Model | Rate | Deaths | Fleet | Impaired % | Frame |
|---|---|---|---|---|---|
| GMC Yukon | 2.55 | 1,114 | 350,000 | 21.4 | body-on-frame |
| Chevrolet Tahoe | 2.49 | 2,592 | 831,250 | 20.6 | body-on-frame |
| Ford Expedition | 2.31 | 1,515 | 525,000 | 20.0 | body-on-frame |
| Chevrolet Suburban | 1.36 | 593 | 350,000 | 20.3 | body-on-frame |
| Toyota 4Runner | 1.00 | 1,418 | 1,137,500 | 20.6 | body-on-frame |
| Toyota Sequoia | 0.83 | 136 | 131,250 | 20.2 | body-on-frame |
| Ford Explorer | 1.54 | 3,797 | 1,968,750 | 19.5 | unibody (since 2011) |
| Jeep Grand Cherokee | 0.51 | 1,161 | 1,837,500 | 20.8 | unibody |
| Toyota Highlander | 0.42 | 1,106 | 2,100,000 | 16.4 | unibody |
| Honda Pilot | 0.29 | 514 | 1,400,000 | 19.4 | unibody |
| Hyundai Palisade | 0.06 | 38 | 525,000 | 16.8 | unibody |
| Kia Telluride | 0.04 | 31 | 612,500 | 17.5 | unibody |

Key ratios: Tahoe/Telluride = 62x. Yukon/Telluride = 64x. Expedition/Palisade = 38x.
Body count: Tahoe+Yukon+Expedition+Suburban = 5,814 deaths vs Telluride+Palisade = 69.

### The giant caveat (fleet age)
Model-year distribution of deaths:
- Tahoe: 88.9% pre-2010, 1.1% post-2020
- Yukon: 84.9% pre-2010, 0.6% post-2020
- Expedition: 89.6% pre-2010, 0.9% post-2020
- Telluride: 0% pre-2010, 100% post-2020 (launched 2020)
- Palisade: 0% pre-2010, 81.8% post-2020
- Explorer: 91% pre-2015 (explains its 1.54 despite unibody since 2011)
- Highlander: 43% pre-2010 (much newer fleet than Tahoe)

So the nameplate comparison is heavily confounded by vehicle age. This must be stated at full strength in the article. The clean age-controlled evidence is the IIHS June 2024 lab test (current model years, same protocol): Tahoe Poor / Expedition Marginal in updated moderate overlap; Wagoneer (unibody) earned TSP. The lab controls for age, and the big body-on-frame SUVs still flunked.

### Impairment check (driver-blame test)
Tahoe 20.6% vs Palisade 16.8% vs Telluride 17.5%. A ~3-4 point gap cannot explain a 40-60x rate gap. Driver blame ruled out as the primary driver.

## Primary sources (4)
1. NHTSA FARS 2014-2023 via site fars_output.js (rates, impairment, model-year distributions). Links: https://www.nhtsa.gov/research-data/fatality-analysis-reporting-system-fars and https://cdan.dot.gov/query
2. IIHS press release, "Large SUVs struggle in IIHS tests," June 6, 2024: Tahoe Poor (updated moderate overlap front), Acceptable (small overlap); Expedition Marginal/Marginal; Wagoneer Top Safety Pick. Harkey quote on mass vs fixed objects. https://www.globenewswire.com/fr/news-release/2024/06/06/2894384/0/en/Large-SUVs-struggle-in-IIHS-tests.html ; coverage: https://www.autoblog.com/2024/06/06/big-suvs-are-not-as-safe-as-their-size-suggests-according-to-the-iihs and https://www.GreenCarReports.com/news/1143425_big-thirsty-gasoline-suvs-safety
3. J.D. Power 2026 U.S. Initial Quality Study via Ford Authority, July 8, 2026: Tahoe and Sequoia tied first in large SUV segment; Expedition among top; Ford top mass-market brand. https://fordauthority.com/2026/07/ford-expedition-among-top-large-suvs-in-2026-initial-quality-study/
4. IIHS, "Vehicle size and weight" topic page (counterargument: mass protects in multi-vehicle crashes). https://www.iihs.org/topics/vehicle-size-and-weight

## Strongest counterargument (full strength)
IIHS's own physics: in a two-vehicle crash, the heavier vehicle wins. Harkey said it himself in the June 2024 release: the huge mass "provides some additional protection in crashes with smaller vehicles." A Tahoe will crush a Civic, and the Civic's driver pays. The FARS rates here count each model's own occupant deaths, so the Tahoe's 2.49 is deaths of Tahoe occupants despite the mass advantage. If anything, the mass advantage should push the Tahoe's rate DOWN relative to small cars, which makes 2.49 vs the Telluride's 0.04 more damning, not less. The honest defense of the big SUVs is fleet age: ~89% of Tahoe deaths are pre-2010 vehicles built before modern AEB, better small-overlap structures, and current roof standards. A 2024 Tahoe is not a 2007 Tahoe. The Sequoia (0.83, body-on-frame) shows frame alone is not destiny.

## Limitations
- estimated_rate uses VMT estimates, not odometer readings; ±15% uncertainty for low-volume models (Sequoia 131k fleet, Yukon/Suburban 350k).
- FARS counts occupant deaths of the model only, not deaths the vehicle inflicts on others (where big SUVs are worse; IIHS notes the danger to other road users).
- Nameplate rates mix 20+ model years; the Tahoe-vs-Telluride gap is mostly a 2007-vs-2021 gap.
- Telluride/Palisade rates rest on small death counts (31, 38); early-fleet data.

## Actionable insights
- Shopping 3-row: unibody Telluride/Palisade/Pilot/Highlander dominate both lab and road. Check current IIHS ratings (which now score rear-seat protection).
- Own a Tahoe/Expedition: the lab's specific weak points are second-row chest injury risk (high belt forces), Tahoe's Poor headlights on all trims, Tahoe's Marginal night pedestrian AEB, Expedition's footwell intrusion. Run the VIN at nhtsa.gov/recalls.
- Buying used big SUV: you are buying the safety engineering of its model year, not its curb weight.

## Novel contribution
First lab-vs-FARS cross-tab for the full-size SUV segment: the IIHS age-controlled lab ranking (Wagoneer > Tahoe/Expedition) matches the FARS road ranking, and the impairment cross-tab rules out driver blame for the 40-60x gap.

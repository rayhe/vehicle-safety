# Research: The Kill Curve — Class-Specific Death Ages

## Angle
Every vehicle class has a characteristic "kill curve" — the age at which it's most likely to appear in a fatal crash. Sports cars are the ONLY class that peaks young (age 5). Everything else — sedans, SUVs, pickups, vans — peaks at 14-16 years old. This reveals two fundamentally different safety failures: driver behavior (sports cars) vs. aging infrastructure (everything else).

## Self-Critique Gate
**Proposed angle:** Cross-tabulate FARS model-year death data by vehicle class to reveal class-specific age-at-death curves.
**Challenge:** After 150 articles, is this genuinely new? We have twelve-year-kill-zone.html (average vehicle age), safety-half-life.html, fleet-turnover-lag.html, and fleet-retirement-dividend.html — all age-related.
**Verdict:** PROCEED. The existing articles look at average age or overall fleet age. NONE compute CLASS-SPECIFIC death curves. The finding that sports cars have an inverted curve is genuinely novel. The bimodal shape (dip at 8-10, spike at 11-14) mapped by class is original analysis.

## Key Data Points

### Overall Death Curve (all classes, model years 2000-2020, FARS 2014-2023)
- Ages 0-6: Steady climb from 3,371 to 6,425 deaths (first peak at age 6)
- Ages 7-10: Dip to ~5,350-5,800 (the "recession valley" — fewer 2008-2010 vehicles were produced)
- Ages 11-14: DRAMATIC spike to 10,622 deaths at age 14 — nearly DOUBLE age 10
- Ages 15-19: Gradual decline from 10,443 to 7,391

### Class-Specific Peaks
| Class | Peak Age | Deaths at Peak | Pattern |
|-------|----------|---------------|---------|
| Sports Car | 5 | 317 | Early peak, relatively flat afterward |
| Sedan | 14 | 5,075 | Classic late-peak |
| SUV | 15 | 2,993 | Late-peak with dramatic ramp |
| Pickup | 16 | 2,662 | Latest peak, flattest curve |
| Van | 14 | 676 | Late-peak, volatile |

### Key Findings
1. **Sports cars peak at age 5** — the only class peaking in the first decade. 317 deaths. Driver behavior, not vehicle age, is the killer.
2. **The age-11 cliff:** Deaths jump 51% in ONE year (5,348 at age 10 → 8,100 at age 11) across all non-sports-car classes.
3. **Pickups are the flattest** — relatively steady killing from age 5 through age 19. Durability = longest time on road = most years of lethal exposure.
4. **SUVs have the sharpest ramp** — from 722 deaths at age 10 to 2,993 at age 15, a 4.1x increase. Pre-ESC SUVs (2003-2005 Explorers, Trailblazers, Tahoes) dominate this spike.
5. **The recession dip at ages 8-10** is a confound: fewer cars were built 2008-2010, so fewer appear in fatal crashes. But the dip is FOLLOWED by a massive spike, suggesting the pre-recession fleet is overrepresented relative to the recession fleet.

### Specific Vehicle Examples
- Ford Explorer: 3,778 deaths, avg age at death 15.9 years (pre-Firestone models still killing)
- Chevrolet Trailblazer: 2,457 deaths, avg age 15+ years 
- Chevy Cavalier: 1,211 deaths, avg age 17.3 years
- Dodge Challenger (Sports Car): 383 deaths, avg age 1.6 years (!!!!)
- Chevy Corvette: 273 deaths, peak at age 2 (model year 2016)

### Sources
1. NHTSA FARS 2014-2023 model-year data (fars_output.js FARS_MODEL_YEAR)
2. IIHS vehicle size/weight studies (ESC mandate 2012 creates the pre/post safety divide)
3. NHTSA ESC final rule (2007, effective 2012)

## Novel Contribution
Original cross-tabulation of FARS model-year death counts by vehicle class, producing class-specific age-at-death curves. Finding: a bimodal death distribution with a recession-era valley, and sports cars as the sole class with an inverted (early-peaking) curve.

## Limitations
- Vehicle age is approximated (FARS data gives model year but not crash year; we use the midpoint of the 2014-2023 window)
- Fleet composition changes with age (survivorship bias — only cars that survive to age X can crash at age X)
- Production volume varies by year (recession dip is real but confounds the age effect)
- VMT data not available by vehicle age, so we can't normalize for miles driven

## Strongest Counterargument
The age-14 peak may simply reflect high-volume production years (2004-2005 were peak pre-recession) appearing at that age in the 2014-2023 data window. If you normalized by number of registered vehicles at each age, the curve might flatten. The shape could be driven by fleet composition, not increasing per-vehicle risk.

## Journalist
**Mia Crumplezone** — Safety Engineering Editor. This is a model year trends / safety tech analysis piece, exactly her beat. Technical but accessible.

## Headline Options
- "Sports Cars Are the Only Vehicle That Kills You Young. Everything Else Waits."
- "The Kill Curve: Your Car's Deadliest Birthday Is Its 14th"
- "Your Car Has a Kill Curve. Sports Cars Peak at 5. Everything Else at 14."

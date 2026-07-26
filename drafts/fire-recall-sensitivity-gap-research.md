# Research Notes: Fire Recall Sensitivity Gap

## Hook (Week of July 21-25, 2026)
Three fire-related recalls in one week:
1. **Ford Bronco** — 565,691 vehicles, wiring harness fire risk, 15 fires reported, ZERO injuries (Reuters, Jul 24)
2. **BMW/Toyota** — 318,495 vehicles (mostly X3: 210,748), starter motor fire risk, zero crashes/injuries (Reuters, Jul 23)
3. **Total this week:** ~884,186 vehicles recalled for fire defects that have injured nobody

## The Data Paradox
- **Recall sensitivity to fire:** 565,691 Broncos recalled for 15 fires = 37,713 vehicles recalled per fire event, ∞ per injury
- **Annual traffic death tolerance:** 39,345 Americans died in 2024 (NHTSA early estimate, first below 40K since 2020)
- **FARS data on Ford fleet:** 34,954 deaths (2014-2023), 29 models, 23.9M fleet
- **Ford Bronco FARS:** 25 deaths, rate 0.05 per 100M VMT (too new for large FARS sample)

## Original Contribution: Recall Response Ratio
For every fire that injured nobody, Ford mobilized a recall of 565K vehicles.
For the ~3,495 people who die annually in Ford vehicles (34,954 ÷ 10 years), no recall addresses crashworthiness.

The system's sensitivity is asymmetric:
- Fire (visible, dramatic, liability-clear) → instant recall at zero injuries
- Crash deaths (routine, distributed, design-inherent) → accepted as background noise

## FARS Context
- Ford F-150: 9,194 deaths, rate 1.04 — never recalled for its death rate
- Ford Explorer: 3,797 deaths, rate 1.54 — recalled this week for seat switches (14 reports, zero injuries)
- Ford Mustang: 2,739 deaths, rate 6.02 — highest Ford death rate, never design-recalled
- Ford Focus: 3,046 deaths, rate 2.52 — killed at higher rate than vehicles that GET fire recalls

## Strongest Counterargument
Recalls fix DEFECTS — manufacturing errors not intended by design. Crashworthiness is a design choice that passes federal standards. You can't "recall" a car for being a car. The death rate reflects driver behavior, road conditions, other vehicles — not a correctable defect. NHTSA's authority covers defects, not actuarial outcomes.

## Limitations
- FARS data is 2014-2023; Bronco's short production run means small sample
- Recall system and FARS measure different things (defect vs design)
- Fire recall count includes proactive catches before any harm; FARS counts post-harm
- Comparison is conceptual, not directly commensurable

## Sources
1. Reuters: Ford Bronco fire recall, Jul 24 2026
2. Reuters: BMW starter recall, Jul 23 2026
3. NHTSA FARS 2014-2023 (fars_output.js)
4. NHTSA 2024 early fatality estimates (39,345 deaths)
5. Ford/Freep quality data (60 recalls in 2026, 3.3% from newest models)

# Research: Safety Tech Stacking — The Insurance Mirage

## Angle
HLDI's March 2026 Mazda study shows that bundling 8 safety features reduces property damage claims by 39% and bodily injury claims by 21%. Insurance companies celebrate compounding crash reductions. But FARS fatality data reveals that fatal crashes operate in a different physics regime — highway speeds, head-on and rollover scenarios — where these bundled features are weakest or inoperative. The "safety stack" is an insurance claim stack, not a mortality stack.

Original contribution: cross-referencing HLDI insurance claim reductions with FARS fatal crash characteristics to quantify the gap between "fewer claims" and "fewer deaths."

## Primary Sources

### 1. HLDI/IIHS Mazda Study (March 26, 2026)
- Source: https://www.iihs.org/news/detail/safety-benefits-stack-up-from-driver-assistance-features
- Studied 2015-2023 Mazda vehicles, 6 feature bundles + 4 standalone systems
- Key findings:
  - Basic bundle (AEB only): 13% PDL reduction, 9% BIL reduction
  - Most comprehensive bundle (front AEB w/ ped detection, ACC, high beam assist, lane departure warning, lane departure prevention, rear AEB, Driver Attention Alert): 39% PDL reduction, 21% BIL reduction (BIL not statistically significant)
  - Driver Attention Alert: ZERO additional benefit when added to the bundle
  - Rear AEB: Biggest standalone impact (prevents parking lot collisions that dominate insurance claims)
  - Claim severity (repair cost per claim) INCREASED for all bundles — remaining crashes cost more to fix
  - Overall losses (frequency × severity) still decreased for PDL

### 2. NHTSA FARS Data (2014-2023) — our dataset
- 36,640 deaths in 2025 (6.7% decline from 2024)
- Fatal crashes concentrated at highway speeds (55+ mph)
- 70% of fatal rear-end crashes at 55+ mph (per IIHS research, David Kidd)
- Only 3% of real rear-end crashes at speeds ≤25 mph (where AEB is tested/certified)
- Most vehicles in FARS are 5-15 years old, predating these bundled features
- Our FARS_BY_MODEL data: 89,127 sedan deaths, 46,442 SUV deaths, 41,593 pickup deaths (2014-2023)

### 3. AAA AEB Testing (October 2024)
- At 35 mph: 2024 models avoided every collision
- At 45 mph: 3 of 4 stopped
- At 55 mph: 0 of 4 stopped — total failure at highway speed

### 4. NHTSA FMVSS 127 (frozen rule)
- Would require AEB effectiveness up to 62 mph, braking engagement up to 90 mph
- Projected: 360 lives saved, 24,000 injuries prevented annually
- Currently frozen under regulatory freeze + industry lawsuit

## Novel Calculation

HLDI reports PDL claim reduction by bundle. PDL claims are dominated by low-speed, low-severity collisions (parking lot fender benders, low-speed rear-ends). Fatal crashes are a vanishingly small fraction of all insurance claims.

The gap:
- ~33,000 fatal crashes per year (NHTSA)
- ~6.7 million total crashes per year (NHTSA estimate)
- Fatal crashes = 0.5% of all crashes
- HLDI's 39% reduction applies to the 99.5% of crashes that don't kill anyone

Even the 21% BIL reduction is about injuries, not deaths. Bodily injury claims overwhelmingly involve non-fatal injuries (whiplash, soft tissue, broken bones) from moderate-speed collisions.

If we assume the 39% PDL reduction applies roughly equally across speed ranges (generous assumption — it's likely higher at low speeds and lower at high speeds), and only ~0.5% of crashes are fatal, the raw count of fatal crashes prevented is approximately: 33,000 × 0.39 × (fraction of fatal crashes that are AEB-preventable rear-ends) ≈ very small.

Actually, the better calculation: Rear-end crashes are ~7% of fatal crashes (IIHS data). That's ~2,310 fatal rear-end crashes. If the full bundle prevents 39% of rear-end crashes (generous — the 39% is across ALL crash types), that's ~900 fatal rear-end crashes prevented. But AAA shows AEB fails completely at 55+ mph where 70% of fatal rear-ends occur. So at best: 900 × 0.30 (the 30% at speeds where AEB works) = 270 fatal rear-end crashes prevented.

270 out of 36,640 annual deaths = 0.7% of total traffic fatalities.

The insurance industry is celebrating a 39% claim reduction that translates to less than a 1% reduction in deaths.

## Strongest Counterargument
The HLDI study measures ALL crash types, not just rear-end. Lane departure prevention and ACC address other fatal crash modes. The 21% BIL reduction includes high-severity injuries that correlate with fatality risk. And the study's own authors note that newer versions of each technology perform better — future iterations may close the speed gap.

Also: even a 0.7% reduction in fatalities = ~260 lives saved per year. That's real people. And insurance claim reductions lower premiums, which makes safer cars more affordable, which creates a positive feedback loop.

## Limitations
- HLDI studied only Mazda vehicles; other manufacturers' implementations may differ
- The extrapolation from PDL claims to fatal crashes involves multiple assumptions about speed distributions
- We cannot directly measure what fraction of FARS deaths would have been prevented by specific feature bundles
- The 21% BIL figure was not statistically significant in the HLDI data

## Journalist
Axle McScatter — data analysis, cross-referencing datasets, statistical roundup

## Kicker
By The Numbers

## Working Headline Ideas
- "Your Car's Safety Stack Saved 39% of Insurance Claims. It Saved Less Than 1% of Corpses."
- "The 39% Illusion: Your Safety Features Fight the Crashes That Don't Kill You"
- "Insurance Sees a Revolution. The Morgue Sees a Rounding Error."

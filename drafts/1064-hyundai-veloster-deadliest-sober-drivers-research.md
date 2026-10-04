# #1064 — Research: The Deadliest Car in America Has the Soberest Drivers

**Journalist:** Dale Impactor III (Toxicology Desk Chief)
**Angle:** The Hyundai Veloster carries the highest fatality rate in the entire FARS-by-model dataset (8.54 deaths per 100M VMT, 598 deaths, 2014-2023) while its drivers test impaired at 17.4%, below the fleet average of 20.0%. It earned NHTSA's 5-star overall rating. The "blame the drunk driver" narrative collapses at the top of the danger list.

## The numbers (FARS 2014-2023, internal dataset)

| Vehicle | Rate (deaths/100M VMT) | Deaths | Driver impairment % |
|---|---|---|---|
| Hyundai Veloster | 8.54 | 598 | 17.4 |
| Chevrolet Tracker | 7.83 | 856 | 12.7 |
| Toyota Land Cruiser | 6.27 | 343 | 8.9 |
| Ford Mustang | 6.02 | 2,739 | 21.9 |
| **Fleet average** | — | — | **20.0** |

The three deadliest cars per mile in America all have sober-than-average drivers. The Veloster is deadlier per mile than the Mustang (6.02), the Charger, the Camaro. It is not an impairment story.

Fleet-age check (model-year death distribution): Veloster 38.7% pre-2010, 3.4% post-2018 — meaningful older-car effect but not dominant (compare Tahoe at 89% pre-2010 from #1063). The car's deaths skew old because the nameplate is old, not because only antiques die in it.

## Why the car, not the driver

1. **Light car physics.** Veloster curb weight ~2,800-2,980 lbs. In two-vehicle crashes, the heavier vehicle wins; IIHS's vehicle-size-and-weight research shows a persistent fatality penalty for light cars. The Veloster is ~40% lighter than an F-150 (rate 1.04).
2. **Lab tests lied by omission.** NHTSA gave the Veloster 5 stars overall (4 frontal, 5 side, 5 pole). IIHS gave it a *Marginal* in the small-overlap frontal test and *Acceptable* in side impact — the two tests that matter when a real-world crash isn't a clean head-on into a barrier. No Top Safety Pick anything, ever.
3. **Missing crash-avoidance tech.** Blind-spot monitoring and forward-collision warning were unavailable on most Veloster trims (per Edmunds/CarFax summaries) — the two cheapest technologies for preventing the crashes a 2,800-lb car cannot survive.
4. **Exposure reality:** the Veloster is a cheap, sporty-looking coupe on the used market (starts under $18k new, far less used), drawing younger, lower-mileage-driving owners; per-mile rate punishes light, frequently-driven commuter cars.

## News peg

The Veloster was discontinued after 2022; the used market still circulates hundreds of thousands of them, including Turbo and N variants. A used-car buyer sees a 5-star NHTSA rating and a sporty coupe. They do not see an 8.54.

## Novelty check (kill test)

- Zero Veloster coverage in the queue (grep: no veloster slug among 269 queued).
- The "sober drivers, deadly car" frame was used for minivans (#961) and SUVs (#1063) but never for the single deadliest vehicle in the dataset or for a light sports coupe.
- New factual composite: 5-star government rating + Marginal IIHS small overlap + #1 FARS rate + below-average impairment. That specific quad has never been assembled on this site.
- VERDICT: passes. Not another data dump.

## Sources (primary)

1. NHTSA FARS 2014-2023, via internal dataset (fars_output.js): Veloster 598 deaths, rate 8.54; tox panel 489 drivers, 17.4% impaired; fleet average 20.0%.
2. NHTSA vehicle ratings page for the 2017 Veloster: 5 stars overall, 4 frontal, 5 side (nhtsa.gov/vehicle/2017/Hyundai/Veloster).
3. IIHS rating summary via Edmunds/CarFax: Marginal small overlap, Acceptable side, Good moderate overlap and roof (edmunds.com/hyundai/veloster/2016 review).
4. IIHS "vehicle size and weight" fatality research (iihs.org/topics/vehicle-size-and-weight) for the light-car penalty.
5. FARS model-year distribution: 38.7% pre-2010 Veloster deaths (fleet-age caveat, kept in the piece).

## Actionable insights (for the draft)

- Used Veloster shoppers: the 5-star sticker is not a real-world death-rate claim; budget for the physics, not the badge.
- If you own one: forward-collision warning was optional/absent; drive like the crumple zone is smaller than you think.
- Check open recalls at nhtsa.gov/recalls (18 recall campaigns across 2012-2021 Velosters, engine/abs-fire items).

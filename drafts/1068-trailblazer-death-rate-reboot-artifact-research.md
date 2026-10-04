# Research: Article #1068 — "The Chart Says the Trailblazer Is America's Deadliest SUV. The Chart Is Counting the Wrong Truck."

**Journalist:** Axle McScatter | **Kicker:** By The Numbers | **Phase target:** DRAFT

## The story
FARS_BY_MODEL ranks the Chevrolet Trailblazer at **2.83 deaths per 100M VMT** — the highest rate of any SUV in the dataset, above the Tahoe (2.49), Yukon (2.55), and Expedition (2.31), and **14.9x the Toyota RAV4 (0.19)**. 2,473 deaths. It looks like the deadliest SUV in America is a small Chevy crossover.

It isn't. FARS_MODEL_YEAR shows **2,426 of 2,457 tracked deaths (98.7%) are model year 2009 or older** — the 2002-2009 body-on-frame GMT360 Trailblazer, a vehicle that shares nothing with the current one except the badge. The rebooted 2021+ small crossover accounts for just **31 deaths**. The "deadliest SUV" number is a nameplate-reboot artifact: legacy deaths from a discontinued truck divided by a fleet estimate that includes the new crossover.

## Novel contribution
A nameplate-reboot artifact census on the FARS dataset — the first cross-tab of FARS_BY_MODEL rates against FARS_MODEL_YEAR vintage mix for rebooted nameplates:
- **Chevrolet Trailblazer:** rate 2.83; 98.7% of deaths from pre-2021 body-on-frame gen; new gen only 31 deaths
- **Ford Ranger:** rate 2.91 (highest pickup); 98.3% of deaths pre-2019; 2019+ midsize truck is a different vehicle on a different platform (51 deaths in 2019+ vintages)
- **Chevrolet Blazer:** rate 0.56; 89.9% of deaths pre-2019 body-on-frame gen — the artifact cuts both ways (a LOW rate built from an old truck's record, applied to a crossover)
- General rule established: for every high-rate nameplate in the dataset, death quartiles sit in 1997-2015 (old vehicles die in fatal crashes disproportionately), but rebooted nameplates add a second, distinct distortion on top

## The math (show it)
- Trailblazer: 2,473 deaths / estimated 0.70M fleet → 2.83/100M VMT. Vintage mix: 1989-2009 = 2,426 deaths; 2021-2023 = 31 deaths. If you exclude the old gen, the new Trailblazer's numerator is 31 — too small for a credible rate. IIHS driver-death-rate methodology requires millions of registered vehicle years for a reason.
- Comparison set (SUVs, fleet >= 0.25M): RAV4 0.19, CR-V 0.53, Equinox 0.36, CX-5 0.12, Telluride 0.04 vs Trailblazer 2.83, Tahoe 2.49, Yukon 2.55, Expedition 2.31.
- The paradox for shoppers: the small cheap crossover looks deadlier than three-ton trucks, but the comparison is 2002 GMT360 vs 2021 K-platform — different vehicle, different century.

## Kill test
PASS. Newsworthy: every "deadliest cars" listicle that will ever quote our data pipeline would get the Trailblazer wrong. Novel: nobody has quantified the reboot artifact; Axle gets to correct his own dataset on the record. The angle is methodology, which is his exact beat.

## Primary sources (3+)
1. NHTSA FARS 2014-2023 data (fars_output.js, derived from NHTSA FARS bulk CSV) — https://www.nhtsa.gov/research-data/fatality-analysis-reporting-system-fars
2. NHTSA FARS query system (CDAN) — https://cdan.dot.gov/query
3. IIHS fatality statistics / driver death rates methodology — https://www.iihs.org/topics/fatality-statistics
4. (context) IIHS vehicle ratings by model year — https://www.iihs.org/ratings

## Strongest counterargument
The nameplate stat isn't "wrong" for the old vehicle — the 2002-2009 Trailblazer genuinely had a terrible record (early-2000s body-on-frame SUV, pre-ESC-mandate vintages, rollover-prone). The stat is wrong only when applied to the 2021+ crossover. Also: old vehicles legitimately dominate every high-rate nameplate's record (Mustang Q1 2000, Accord Q1 2000) through a mix of worse crashworthiness, less ESC, and riskier second/third owners. The reboot artifact is a second distortion stacked on a real phenomenon.

## Limitations
- estimated_rate uses VMT estimates, not odometer readings: ±15% uncertainty for low-volume models.
- FARS captures fatal crashes only; injury-only outcomes invisible.
- 31 deaths for the 2021+ Trailblazer is too small for a credible rate — the piece must NOT claim the new Trailblazer is safe, only that its rate is unknowable from this data.
- Fleet estimate (0.70M) methodology from fars_process.py mixes generations; cannot perfectly apportion fleet between old and new gen.
- Survivorship bias: the old Trailblazers still on the road skew toward the riskiest owners and the least-maintained examples.

## Actionable insight
If you see a "death rate by model" chart: check whether the nameplate was rebooted. The 2024 Trailblazer cannot be judged by a number built from 2002 GMT360s. For shoppers, the reliable signal is the IIHS rating for the exact model year — lab-tested, generation-specific — not a FARS nameplate aggregate.

## Voice notes (Axle McScatter)
- Opener energy: "I ran the numbers. Then I ran them again. They didn't get better."
- Obsessed with methodology; presents the tables; admits when the data can't answer the question.
- Vary sentence rhythm; short punches + long builds. Target: variance >= 200, short <= 15%, long >= 15%.
- ZERO em dashes (max 3, aim 0). No banned phrases. "The" starters <= 15%.

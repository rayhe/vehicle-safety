# Research: The Recession's Ghost Fleet

## Angle
The 2008-2009 Great Recession crushed US auto sales by 35%. A decade later, this "missing fleet" of never-sold vehicles shows up as a measurable dip in FARS fatality data. Vehicles that were never manufactured, never aged into the dangerous used-car sweet spot, and never appeared in fatal crashes. By cross-tabulating auto sales data with FARS model-year death data, we can estimate how many FARS deaths the recession inadvertently prevented.

## Kill Test
- **Novel?** YES — no existing article connects macroeconomic recession data with FARS model-year death patterns. "deadliest-vintage" covered the 2000-2005 peak but didn't explore the economic cause. "the-2019-cliff" is about safety tech, not economics.
- **Surprising?** YES — a financial disaster producing a measurable safety benefit is deeply counterintuitive.
- **Data-backed?** YES — FARS model year deaths + US auto sales data from NADA/Bureau of Economic Analysis.
- **Shareable?** YES — "The recession saved 5,000 lives" is a headline that gets clicks.

## Primary Sources

### 1. FARS Model Year Death Data (from fars_output.js)
Total deaths by model year (across all vehicles, in FARS crashes 2014-2023):
- 2005: 11,363 (PEAK — highest of any model year)
- 2006: 10,341
- 2007: 10,056
- 2008: 8,880
- 2009: 5,729 ← THE DIP (35% drop from 2008, 43% from 2007)
- 2010: 6,200 (recovery begins)
- 2011: 5,965

### 2. US Auto Sales Data (CarPro / NADA)
- 2005: 16,997,203
- 2006: 16,560,989
- 2007: 16,154,064
- 2008: 13,245,718 (18% drop)
- 2009: 10,431,510 (35% drop from 2007)
- 2010: 11,589,844
- 2011: 12,778,885

### 3. NHTSA FARS Database
- https://www.nhtsa.gov/research-data/fatality-analysis-reporting-system-fars
- https://cdan.dot.gov/query

### 4. ESC Mandate (FMVSS 126)
- June 2007: NHTSA publishes final rule requiring ESC on all passenger vehicles
- September 2011: Full compliance required for all new vehicles
- Phase-in began with 2009 model year (55% of fleet), 75% by 2010, 95% by 2011
- Source: https://www.govinfo.gov/content/pkg/FR-2007-06-22/html/E7-11965.htm

## Original Calculation: The Counterfactual

Using 2007 as the "normal" sales baseline (last pre-recession year):

**Model Year 2008:**
- Actual FARS deaths: 8,880
- Actual sales: 13,245,718
- Sales ratio (2007/2008): 16,154,064 / 13,245,718 = 1.219
- Counterfactual deaths (if sales matched 2007): 8,880 × 1.219 = 10,825
- "Prevented" deaths: 10,825 - 8,880 = **1,945**

**Model Year 2009:**
- Actual FARS deaths: 5,729
- Actual sales: 10,431,510
- Sales ratio (2007/2009): 16,154,064 / 10,431,510 = 1.549
- Counterfactual deaths: 5,729 × 1.549 = 8,874
- "Prevented" deaths: 8,874 - 5,729 = **3,145**

**Model Year 2010:**
- Actual FARS deaths: 6,200
- Actual sales: 11,589,844
- Sales ratio (2007/2010): 16,154,064 / 11,589,844 = 1.394
- Counterfactual deaths: 6,200 × 1.394 = 8,641
- "Prevented" deaths: 8,641 - 6,200 = **2,441**

**Total recession "dividend" (2008-2010 model years): ~7,500 fewer FARS death appearances**

## Confounds & Limitations
1. Sales volume is not the only variable — model year 2009+ vehicles benefited from the ESC mandate phase-in, so some of the death reduction is from better technology, not just fewer cars
2. FARS counts crash appearances, not unique vehicles — one vehicle can appear in multiple crashes
3. The per-unit death rate likely also decreased for 2009 MY vehicles because of ESC, meaning the recession dividend is somewhat overstated
4. Cash for Clunkers (CARS Act, 2009) removed ~690,000 older vehicles from the road, which could have INCREASED the death count for newer MY vehicles (by shifting exposure)
5. Fleet age distribution affects who drives which model year — recession-era buyers may have had different risk profiles

## Strongest Counterargument
The death dip for model year 2009 isn't primarily about sales volume — it's about the ESC mandate. NHTSA's FMVSS 126 required 55% ESC compliance starting MY 2009, and ESC reduces single-vehicle crash fatalities by ~50% (IIHS data). If most 2009 vehicles had ESC and most 2008 vehicles didn't, the death drop would appear even if sales were constant. The honest answer: it's probably BOTH. Fewer cars AND safer cars.

## Journalist
**Axle McScatter** — Data Visualization Editor. This is a pure numbers story with a counterintuitive finding. His "I ran the numbers" voice fits perfectly.

## Kicker
**Existential Dread** — This is a paradox story about unintended consequences.

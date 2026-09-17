# Research #918 — Chrysler Pacifica/Voyager ESC-delete recall (26V561)

**Slug:** 918-pacifica-voyager-esc-capacitor
**Journalist:** Mia Crumplezone (Safety Engineering Editor — component-level safety engineering, judgmental about bad design)
**Kicker:** Investigation
**Date:** 2026-09-17

## The news hook
NHTSA recall 26V561 (FCA 69D), filed **September 1, 2026**. A cracked capacitor in the
brake pedal position sensor can illuminate the ESC light **and disable electronic stability
control entirely** — a noncompliance with FMVSS 126. Owner notification letters go out
**September 29, 2026** (12 days from this writing); VINs searchable since Sep 9.

## Primary sources
1. **NHTSA Part 573 Safety Recall Report 26V561** (filed Sep 1, 2026):
   https://static.nhtsa.gov/odi/rcl/2026/RCLRPT-26V561-7630.pdf
   - 2,017 vehicles: 2025-2026 Chrysler Pacifica (1,652), 2025-2026 Chrysler Voyager (357),
     2026 Pacifica Plug-in Hybrid (8). Suspect build Jun 28, 2025 – Oct 31, 2025.
   - Estimated percentage with defect: **10%** (~200 vehicles).
   - Component: brake pedal position sensor, P/N 68236598AA, supplier **CTS Corporation,
     1142 W Beardsley Ave, Elkhart IN**.
   - "Failure of the ESC system when intervention is expected and/or relied upon can cause
     a vehicle crash without prior warning." Warning identification: "**None** prior to
     failure. The ESC light illuminates to indicate when the ESC system is disabled."
   - Chronology: TSRC opened investigation **Mar 25, 2026** → root-cause work Mar–May →
     field-record analysis Jun–Aug → Aug 5 recognized build issue → **Aug 26** Vehicle
     Regulations Committee determined FMVSS 126 noncompliance. **Five months** open.
   - Remedy: inspect/replace sensor free. FCA customer service 1-800-853-1403.
2. **IIHS, "Life-saving benefits of ESC continue to accrue" (Sep 1, 2016):**
   https://www.iihs.org/news/detail/life-saving-benefits-of-esc-continue-to-accrue
   - IIHS: ESC reduces fatal **single-vehicle** crash risk by **about half**; fatal
     multi-vehicle risk by 20%; fatal single-vehicle **rollovers by 75% (SUVs) / 72% (cars)**.
   - NHTSA: ESC saved an estimated **4,100 lives in 2010–14**; **1,580 in 2014 alone**.
     Fatal single-vehicle crashes cut 38% (cars) / 56% (SUVs).
3. **FMVSS No. 126, S5.1.2** (quoted in the 573 report): ESC "must be equipped with an
   electronic stability control system that is **operational during all phases of driving
   including acceleration, coasting, and deceleration**." A disabled ESC is a per-se
   federal noncompliance — hence the recall even with no reported crashes.
4. Corroborating coverage: Autoblog (Sep 9, 2026), CarPro weekly recalls, DAX Street,
   Transport Canada recall 2026417 (Sep 10, 2026, covers Pacifica + Grand Caravan in Canada).
   All are straight news summaries — none ran the effectiveness math or the timeline.

## Novel contribution (original analysis)
- **The risk math nobody ran:** 2,017 × 10% ≈ **200 vehicles** on the road with potentially
  dead ESC. IIHS: ESC halves fatal single-vehicle crash risk → those ~200 minivans carry
  roughly **2× the fatal single-vehicle crash risk**, and minivans (tall, heavy, up to 8
  occupants) are exactly the class where ESC's 72–75% rollover reduction matters most.
- **The timeline:** FCA's safety org opened the investigation March 25, 2026 and did not
  determine noncompliance until August 26 — five months — while suspect vehicles built as
  early as June 2025 (14 months before the recall) kept driving.
- **The engineering indictment:** a federally mandated, life-saving system with a **single
  non-redundant point of failure** — one cracked capacitor in one sensor — and no
  redundancy or degraded-mode fallback. The "fix" is a sensor built without the cracked
  capacitor. That is the whole corrective action.

## Kill test
Genuinely newsworthy? Yes: fresh federal recall (16 days old), owner letters land Sep 29,
quantifiable safety consequence via IIHS/NHTSA effectiveness data, and an engineering
design critique (single-point-of-failure) no outlet has made. Not a data dump: the news
hook + the math + the timeline are all new. **PROCEED.**

## Strongest counterargument (to state at full strength in article)
2,017 vehicles is a small recall and only ~200 are estimated defective; **no crashes or
injuries are reported**. The ESC warning light does illuminate — it is not fully silent —
and drivers managed for decades before ESC existed in 2012-mandate form. FCA followed the
book: investigated, verified scope, determined noncompliance, recalled. The "2× risk"
figure is IIHS fleet-level effectiveness data extrapolated to ~200 specific minivans, not a
measured outcome in this population.

## Limitations (to state explicitly)
- The 10% defect estimate and the ~200-vehicle figure are FCA's estimates, not measurements.
- FARS cannot isolate these specific vehicles; the risk multiplier is extrapolated from
  IIHS/NHTSA fleet studies, with all the uncertainty that implies.
- Unknown how many affected owners ever saw the ESC light or understood what it meant.
- No injury/fatality data exists for this defect; the harm case is prospective, not observed.

## Actionable takeaways
- Own a 2025–2026 Pacifica/Voyager built Jun 28, 2025 – Oct 31, 2025? Check your VIN at
  nhtsa.gov/recalls (searchable since Sep 9, 2026). Owner letters mail Sep 29.
- If your ESC/stability warning light is on: drive cautiously, avoid sudden maneuvers,
  get to a dealer — the system behind that light may be fully offline, not degraded.
- General rule worth internalizing: a lit ESC light is not a suggestion. It means the
  single most effective crash-avoidance system ever mandated may not be there when you
  need it.

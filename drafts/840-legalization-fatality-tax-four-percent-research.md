# RESEARCH #840 — Dale Impactor III — cannabis-legalization-four-percent-fatality-tax

## News peg (fresh, Sept 4 2026)
New IIHS study by Charles Farmer et al., published in the *Journal of Studies on Alcohol and Drugs*:
states that legalized recreational cannabis saw **+5.8% injury crash rates** and **+4.1% fatal crash rates**
vs. six non-legal control states (CO, WA, OR, CA, NV vs. AZ, ID, MT, NM, UT, WY), using 2009-2019 FHWA crash
and traffic-volume data, adjusted for seat belt use and unemployment.
Coverage: Forensic Magazine, Sept 4 2026 (https://www.forensicmag.com/588469-Study-Links-Legalization-of-Cannabis-to-Increased-Car-Accidents/?catid=26399).
- Injury crashes jumped after LEGALIZATION (+6.5%) but before retail sales (-0.7% after retail). Farmer: "Legalization
  removes the stigma of marijuana use... Users who previously avoided driving high may feel that it's okay after
  legalization."
- Fatal crash rates rose after both legalization (+2.3%) and retail (+1.8%). State variation is huge: CO +1.4%,
  OR +3.8%, WA -1.9%, CA -7.6%, NV -9.8% (fatal). NV injury crashes DECREASED (-6.7%). CO injury +17.8%.
- Compensation effect: cannabis drivers slow down and widen following distance, so the crashes they cause are
  more frequent but less likely to be deadly. Injury up more than fatality.

## Second peg
Boston Medical Center / Boston University study (Marlene Lira, MPH, lead): 19 years of FARS data —
cannabis-involved crash deaths **more than doubled, 9.0% to 21.5% (2000-2018)**; cannabis+alcohol co-involvement
doubled 4.8% to 10.3%. Cannabis-involved fatal crashes skew toward passengers and drivers under 35.
Testing caveat stated by Lira herself: THC tests don't distinguish acute intoxication from use weeks ago.
(Forensic Magazine, also ~Sept 2026; Futurity coverage corroborates.)

## Corroborating sources
1. IIHS researcher Charles Farmer quote: "Unlike alcohol, there is no good objective measure of just how
   impaired a marijuana user has become. Until we can accurately measure marijuana impairment, we won't be able
   to link it to crash risk." — i.e., the enforcement apparatus measures alcohol-grade certainty, cannabis is fuzzy.
2. NHTSA report to Congress on marijuana-impaired driving (Report DOT HS 812 440, https://WWW.NHTSA.GOV/sites/nhtsa.gov/files/documents/812440-marijuana-impaired-driving-report-to-congress.pdf):
   DRUID pooled data — THC-positive drivers at 1-3x crash risk, comparable to BAC 0.01 to <0.05, vs. alcohol
   0.15+ BAC at 12x in the Virginia Beach case-control study. The cannabis risk number is small but real; the
   enforcement gap is large.
3. CDC transportation safety research priorities (April 2026 PDF): alcohol-impaired fatality rates stabilizing
   rather than declining; drug-involved and polysubstance driving potentially increasing.
4. PMC9318699 (2013-2020 legalization studies, doi-linked via PubMed Central): avg +5.8% injury / +4.1% fatal
   crash rates across the first five legal states; earlier states (CO, WA, OR) saw 8-18% injury increases, later
   states (CA, NV) saw less, suggesting lessons/enforcement caught up.

## ORIGINAL CONTRIBUTION — computed from this site's fars_output.js (FARS 2014-2023, 307 models, 490,736 drivers)
- Fleetwide: 98,348 impaired drivers in fatal crashes (20.0% of all drivers). Alcohol-positive: 74,188. Drug-positive: 42,496.
- **24.6% of impaired fatal-crash drivers had ZERO alcohol in their system (any-positive minus alcohol-positive).**
  Nearly 1 in 4 impaired drivers is invisible to a breathalyzer.
- Drug-involved drivers = 43.2% of all impaired fatal-crash drivers. Alcohol-involved = 75.4%. (Overlap = polysubstance.)
- Highest drug-positive impairment rates (200+ driver models): Buick Park Avenue 16.6% drug vs 24.3% alc,
  Buick Verano 13.1% vs 16.4%, Ford Five Hundred 13.0% vs 19.9% — the "boring grandma sedans" dominate the drug list,
  a demographic surprise (not the Corvette crowd).
- Lowest: Toyota Land Cruiser 2.9% drug / 6.7% alc; Subaru Ascent 3.3% / 5.6%; Audi Q7 5.6% / 16.9%.

## Novel angle / kill test
PASS. Nobody has connected the two Sept-2026 pegs (Farmer legalization study + Lira 19-year FARS study) with the
site's own FARS toxicology: legalization adds a measurable fatality tax (+4.1%), while the enforcement apparatus still
treats impaired driving as an alcohol problem even though a quarter of impaired fatal-crash drivers are
alcohol-free. The thesis: per-se THC thresholds are arguments about stigma detection, not impairment measurement —
Farmer admits no objective impairment measure exists; THC blood presence weeks after use makes "cannabis-involved"
a test artifact as much as a risk factor. The state-variation twist (NV down, CO up) gives the "early-adopter
learning curve" nuance so it's not a prohibition lecture. Distinct from #cannabis-overtakes-alcohol (trauma-center
prevalence) and #cannabis-impairment-blind-spot (testing impossibility) — this one is the POLICY piece: the
legalization experiment now has an epidemiology bill, and enforcement can't collect it.

## Limitations
- FARS "drug-positive" includes any drug class, not THC specifically; cannot split cannabis from stimulants/opioids
  in the per-model toxicology data. The 24.6% alcohol-free-impaired figure is drug-class-agnostic.
- Positive != impaired: THC detectable weeks after use (Lira). FARS captures presence, not intoxication.
- Testing rates vary by state and year; increased post-legalization testing inflates measured cannabis involvement.
- Farmer study is correlational (Farmer himself: causal link inconclusive); control states and adjustments exist but
  the design can't isolate cannabis from concurrent enforcement/culture shifts.
- Nevada's decline suggests enforcement and messaging matter — the tax is not destiny.

## Strongest counterargument
The whole measured "cannabis increase" could be a testing artifact: legalize, cops test more for THC, more
"involved" deaths get counted, and THC stays detectable for weeks, so the rise in cannabis-involved deaths measures
the rise in cannabis USE plus testing enthusiasm, not necessarily cannabis-impaired DRIVING. The DRUID 1-3x risk
estimate is comparable to a glass of wine — if cannabis impairment risk is that low, the +4.1% fatal crash increase
may be driven by the alcohol co-use Lira documented (cannabis predicts alcohol involvement even below the limit),
not by weed itself. In that reading, the fatality tax is real but the cause is still alcohol.

## Actionable
- Check your state: 24 legal states; per-se THC limits exist in only a handful and measure nothing reliably.
  The behavioral risk is polysubstance use: cannabis predicts alcohol co-use.
- If you drive: the compensation effect is not protection; injury crashes rose 5.8%.
- Policy: fund roadside impairment-assessment tech (drug recognition experts, oral fluid) rather than per-se THC limits.

## Kill test: PASS. Novel, newsy, policy-framed, with original computation.

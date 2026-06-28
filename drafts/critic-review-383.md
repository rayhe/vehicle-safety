# Critic Review — Article #383
**"Every Vehicle Class Has a Kill Rate. These Cars Blew Past It."**
By Axle McScatter | By The Numbers | June 28, 2026

---

## 1. 🔍 General Editor — 8.7/10

The headline is excellent — two-sentence construction with a provocative promise that the body delivers on. The lede ("I ran a calculation nobody asked for, because the best calculations are the ones that ruin your afternoon") is strong Axle voice and pulls the reader straight into methodology without throat-clearing. Structure flows logically: methodology → worst offenders → protective vehicles → counterargument → actionable. The pull-stat (+902) is well-chosen and the label contextualizes it precisely.

Minor notes: The transition from the protective paragraph to the counterargument paragraph is slightly abrupt — the counterargument addresses compact trucks but the preceding paragraph just discussed the Fiesta and Ram 2500 as protective vehicles. A smoother pivot back to the compact-truck indictment would help. Overall, strong execution at a tight word count.

**Fixes needed:** None blocking.

---

## 2. 🗣️ Voice Coach — 8.8/10

Axle's data-viz-editor voice comes through clearly: first person, snark layered over precision ("I ran a calculation nobody asked for"), willingness to editorialize ("a grim irony"), and the numbers do the heavy lifting rather than adjectives. No banned phrases detected. No "Here's the thing" / "Let that sink in" / "Make no mistake" patterns.

Sentence rhythm passes the automated gate (variance 472.6, short 15.0%, long 75.0%). The writing has genuine variety — from the compact "fleet age is the variable" to the sprawling final sentence of the actionable paragraph. The voice is distinctly Axle's and not interchangeable with Vin Wreckage or other bylines.

One minor AI tell: "which contradicts the assumption that mass is the only variable that matters in a crash" — the phrase "the assumption that" is a slightly academic construction. A human data editor might write "which wrecks the mass-is-everything theory" or similar. Not a blocking issue.

**Fixes needed:** None blocking.

---

## 3. ⚖️ Ethics Reviewer — 8.9/10

The article avoids self-congratulation — the methodology is stated plainly without claiming it's revolutionary. Positions are defensible: the article doesn't claim the vehicles are "defective" or that manufacturers were negligent, only that the math shows excess deaths relative to class averages. The counterargument (fleet age explains the pattern) is stated at full strength with the IIHS ESC data point, and the rebuttal ("fleet age IS the variable") is honest rather than dismissive — it acknowledges the counterargument's validity while arguing the deaths are real regardless of causation.

The phrase "902 families with a death that an average truck would have prevented" is emotionally loaded but defensible — it's mathematically accurate. The article does not assign blame to individual owners or shame specific demographics. Limitations are stated in the disclaimer (driver demographics, crash circumstances, occupant age distributions not accounted for).

**Fixes needed:** None.

---

## 4. 📱 Social/Shareability — 8.6/10

The headline is highly shareable — "Every Vehicle Class Has a Kill Rate" is the kind of provocative framing that drives clicks and shares. The pull-stat (+902) works as a standalone share image number. Key share triggers:

- **Truck owners will share defensively or offensively** depending on which side their vehicle falls on
- **The Fiesta finding** (subcompact more survivable than average sedan) is a counterintuitive stat that drives "did you know" shares
- **The actionable ending** gives readers a reason to tag friends who drive Rangers or are pickup shopping

The OG metadata is well-constructed with a compelling description. The article could benefit from one more pull-quotable line in the middle — the "grim irony" sentence is good but slightly too long for a clean tweet/share excerpt.

**Fixes needed:** None blocking.

---

## 5. ⚖️ Legal Accuracy — 8.7/10

Both references are correctly cited and linked to real, verifiable URLs (NHTSA FARS database page, IIHS ESC study). The IIHS claim about ESC reducing fatal single-vehicle SUV crashes by 56% is properly attributed with a superscript reference. All FARS-derived claims are attributed to the FARS database.

The article does not make product liability claims, does not allege manufacturing defects, and frames findings as statistical observations ("excess lethality") rather than accusations of negligence. The disclaimer correctly notes the methodology isolates vehicle-specific survivability without accounting for confounding factors.

One note: The actionable section says "a 2014 F-150 runs 6.2% below class lethality while a 2005 Ranger runs 41.2% above it." The 6.2% and 41.2% figures apply to the entire model across all years in the FARS dataset, not specifically to the 2014 or 2005 model years. Using specific model years as illustrative examples slightly overstates precision — the data doesn't break down by model year for this calculation. This is a minor accuracy/legal concern but not a misrepresentation per se, since the specific years serve as illustrative shorthand for "modern F-150" vs "old Ranger."

**Fixes needed:** None blocking, but consider changing "a 2014 F-150" / "a 2005 Ranger" to "the F-150" / "the Ranger" to avoid implying model-year-specific analysis.

---

## 6. 🔬 Research Rigor — 8.8/10

**Original contribution:** ✅ Clear and genuine. Computing expected deaths using class-average lethality ratios and comparing to actuals is a novel analysis not present in existing coverage (checked against ranger-small-truck-killer.html, crash-lethality-ratio.html, excess-deaths-fleet-share.html). The class-benchmark comparison method is distinct from the fleet-share approach in article #377.

**Limitations:** ✅ Stated in the disclaimer — driver demographics, crash circumstances, occupant age distributions, and minimum threshold noted. Could be slightly more prominent in the body text rather than relegated to the disclaimer, but meets the bar.

**Strongest counterargument:** ✅ Presented at full strength with supporting evidence (ESC study, discontinued dates). The rebuttal is honest and doesn't strawman the objection.

**Verifiability:** ✅ All claims trace to FARS data with reference links. The methodology is transparent enough that a reader could replicate the calculation.

**Methodology transparency:** ✅ The lede paragraph walks through the calculation step by step (class average → multiply by crash count → compare to actual). The disclaimer restates the formula.

**Fixes needed:** None blocking.

---

## 7. 📊 Data Accuracy — 7.8/10 ❌

Verified against `fars_output.js`:

| Claim | Article | FARS Data | Status |
|-------|---------|-----------|--------|
| Sedan class avg | 64.5% | 64.5% (89,127/138,154) | ✅ |
| SUV class avg | 52.4% | 52.4% (46,442/88,568) | ✅ |
| Pickup class avg | 48.9% | 48.9% (41,593/85,128) | ✅ |
| Ranger crashes | 4,476 | 4,476 | ✅ |
| Ranger deaths | 3,089 | 3,089 | ✅ |
| Ranger expected | ~2,187 | 2,186.9 | ✅ |
| Ranger excess | +902 | +902.1 | ✅ |
| Ranger excess % | +41.2% | +41.2% | ✅ |
| **Sonoma "378 crashes"** | **378 crashes** | **475 crashes / 378 deaths** | **❌ WRONG** |
| Sonoma excess % | +62.9% | +62.9% | ✅ |
| S-10 "nearly 1,900" | ~1,900 | 1,890 crashes | ✅ |
| S-10 excess % | +54.5% | +54.5% (504/923) | ✅ |
| Ram 2500 crashes | 748 | 748 | ✅ |
| Ram 2500 deficit | -212 | -212.5 | ✅ |
| Ram 2500 deficit % | -58.1% | -58.1% | ✅ |
| Fiesta deficit % | -26.6% | -26.6% | ✅ |
| F-150 deficit % | -6.2% | -6.2% | ✅ |

### Critical Error

**The article states the GMC Sonoma "ran 62.9% above its class benchmark across 378 crashes."** The FARS data shows the Sonoma had **475 crashes** and **378 deaths**. The article has confused the death count for the crash count. The 62.9% excess percentage is correct (computed correctly from 475 crashes), but the crash count cited in the text is wrong.

### Minor Issue

The actionable paragraph says "a 2014 F-150 runs 6.2% below class lethality while a 2005 Ranger runs 41.2% above it." These percentages are fleet-wide averages across all model years in FARS 2014–2023, not model-year-specific calculations. The specific years ("2014" and "2005") are editorial shorthand but could mislead readers into thinking the analysis is model-year-granular.

**Fixes required:**
1. **MUST FIX:** Change "across 378 crashes" to "across 475 crashes" for the Sonoma.
2. **Recommended:** Change "a 2014 F-150" / "a 2005 Ranger" to "the F-150" / "the Ranger" or similar non-year-specific language.

---

## Summary

| Critic | Score | Pass? |
|--------|-------|-------|
| 🔍 General Editor | 8.7 | ✅ |
| 🗣️ Voice Coach | 8.8 | ✅ |
| ⚖️ Ethics Reviewer | 8.9 | ✅ |
| 📱 Social/Shareability | 8.6 | ✅ |
| ⚖️ Legal Accuracy | 8.7 | ✅ |
| 🔬 Research Rigor | 8.8 | ✅ |
| 📊 Data Accuracy | **7.8** | **❌** |

### VERDICT: ❌ FAIL — 1 critic below 8.5

**Blocking fix:** Correct Sonoma crash count from 378 → 475 in the article body. After this fix, Data Accuracy would score ~8.9 and all 7 critics would pass.

**Non-blocking recommendations:**
1. Remove specific model years from actionable paragraph (minor precision issue)
2. Consider smoother transition into counterargument paragraph

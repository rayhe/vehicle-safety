# Story Generation Guide — The Crash Report

## Voice & Style
- **Tone**: Grim humor, data-driven, Jalopnik-meets-actuarial-table. Sensationalist headlines backed by real numbers. Never fabricate data — every claim must trace to FARS or a cited external source.
- **Structure**: Kicker → Headline → Lede with key stat bolded → Pull stat → 3-4 paragraphs → References → Source disclaimer
- **Length**: 300-500 words. These are punchy feature pieces, not longform.
- **Byline**: Pick journalist from JOURNALISTS.md whose beat matches the angle.

## ✍️ Anti-AI Voice Rules
- **Banned phrases:** "Here's the thing," "Here's where it gets interesting," "The kicker:," "Let's be clear," "Make no mistake," "And it's not even close," "The numbers don't lie," "X isn't about Y. It's about Z."
- **Vary sentence lengths** — fragments, one-liners, then longer builds
- **Have actual opinions** — "GM should have killed this platform in 2004" not "the data raises questions"
- **Start mid-thought** — no throat-clearing setup paragraphs
- **Each journalist must sound distinct** — if you can swap bylines, rewrite

## 📚 MANDATORY: Source Citations
Every article MUST include a `<section class="story-references">` block with linked references. This is non-negotiable.

### What needs citing
- **All FARS data** → link to NHTSA FARS
- **IIHS studies** (ESC effectiveness, vehicle size/weight, ratings) → link to specific IIHS page
- **Recall numbers** → link to NHTSA recalls database
- **External claims** (settlement amounts, market share stats, lawsuit details) → link to news source, DOJ press release, or Wikipedia
- **Academic research** → link to the study or a summary page

### Key reference URLs (use these)
| Source | URL |
|--------|-----|
| NHTSA FARS database | `https://www.nhtsa.gov/research-data/fatality-analysis-reporting-system-fars` |
| NHTSA FARS query tool | `https://cdan.dot.gov/query` |
| IIHS fatality statistics | `https://www.iihs.org/topics/fatality-statistics` |
| IIHS vehicle ratings | `https://www.iihs.org/ratings` |
| IIHS ESC study | `https://www.iihs.org/news/detail/life-saving-benefits-of-esc-continue-to-accrue` |
| IIHS vehicle size/weight | `https://www.iihs.org/topics/vehicle-size-and-weight` |
| NHTSA recalls database | `https://www.nhtsa.gov/recalls` |
| NHTSA ESC final rule | `https://www.govinfo.gov/content/pkg/FR-2007-06-22/html/E7-11965.htm` |
| NHTS travel survey (VMT) | `https://nhts.ornl.gov/` |
| GM ignition switch recalls | `https://en.wikipedia.org/wiki/General_Motors_ignition_switch_recalls` |

### How to add references
1. Add inline superscript links after key claims: `<sup class="ref-link"><a href="#ref-1">[1]</a></sup>`
2. Add a references section before the disclaimer:
```html
<section class="story-references">
  <h3>Sources &amp; References</h3>
  <ol>
    <li id="ref-1">NHTSA, <em>Fatality Analysis Reporting System (FARS)</em>, 2014&ndash;2023. <a href="https://www.nhtsa.gov/research-data/fatality-analysis-reporting-system-fars" target="_blank" rel="noopener">nhtsa.gov</a></li>
    <li id="ref-2">IIHS, &ldquo;Life-saving benefits of ESC continue to accrue,&rdquo; 2011. <a href="https://www.iihs.org/news/detail/life-saving-benefits-of-esc-continue-to-accrue" target="_blank" rel="noopener">iihs.org</a></li>
  </ol>
</section>
```
3. DO NOT invent URLs. Only link to pages you know exist. When in doubt, link to the parent topic page rather than a specific article that might 404.

## Actionable Insights (Required — HARD GATE)
Every article MUST include actionable takeaways. This is a publishing gate. The reader should finish knowing what to DO: check their VIN for recalls, avoid specific model years, understand what safety features to prioritize, know which ratings actually predict crash outcomes. If the data doesn't support action yet, say so explicitly.

Not acceptable: "Safety is important and these numbers are concerning."
Acceptable: "If you're shopping for a midsize SUV: the 2019-2022 Tucson has a fatality rate 2.3x the segment average. The Forester and RAV4 are half that. Check your VIN at nhtsa.gov/recalls before your next oil change."

## Data sources
All stories are derived from `fars_output.js`, which contains three arrays:

### FARS_BY_MODEL
```js
{ make, model, deaths, estimated_fleet, estimated_rate }
// estimated_rate = deaths per 100M VMT (estimated)
```

### FARS_TOXICOLOGY
```js
{ make, model, total_drivers, any_impaired, alcohol_positive, drug_positive,
  any_pct, alcohol_pct, drug_pct }
// Impairment = BAC > 0 or drug-positive toxicology in FARS fatal crashes
```

### FARS_MODEL_YEAR
```js
{ make, model, model_year, deaths }
// Deaths by model year for trend analysis
```

## Finding story angles
Load `fars_output.js` and look for:
1. **Paradoxes** — vehicles where metrics contradict expectations (e.g., sober drivers + high death rate)
2. **Extremes** — highest/lowest in any metric, especially unexpected vehicles
3. **Demographic signals** — vehicle price/age correlating with impairment, body-on-frame vs unibody safety gaps
4. **Raw body counts** — which boring everyday cars have the most total deaths
5. **Category surprises** — minivans with high impairment, luxury SUVs with high death rates
6. **Model year trends** — vehicles getting safer or more dangerous over time

## HTML template
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>HEADLINE &mdash; The Crash Report</title>
  <meta name="description" content="ONE-SENTENCE SUMMARY">
  <script>
    (function(){var t=localStorage.getItem('theme');
    if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches))
    document.documentElement.classList.add('dark');})();
  </script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="../style.css">
</head>
<body>
  <div class="container">
    <header>
      <a href="../" class="back">&larr; The Crash Report</a>
    </header>

    <article class="story">
      <div class="story-kicker">KICKER</div>
      <h1>HEADLINE</h1>
      <div class="byline">BYLINE &bull; Clautomotive Desk</div>
      <div class="dateline">DATE</div>

      <p>LEDE PARAGRAPH with <strong>key stat bolded</strong>.</p>

      <div class="pull-stat">KEY_NUMBER</div>
      <div class="pull-label">Brief context for the number</div>

      <p>BODY PARAGRAPHS...</p>
    </article>

    <p class="story-disclaimer"><strong>Source:</strong> NHTSA FARS 2014&ndash;2023. SPECIFIC_CAVEAT. See <a href="../#method">methodology</a> for caveats.</p>

    <footer class="site-footer">
      <a href="https://github.com/rayhe/vehicle-safety" target="_blank">GitHub &rarr;</a> &mdash; Pull requests welcome.
    </footer>
  </div>
</body>
</html>
```

## Adding a story to the site

### 1. Create the story file
Save as `stories/SLUG.html` using the template above.

### 2. Add a teaser card to index.html
In the `tab-stories` pane, add a card inside the `.story-grid`:
```html
<a href="stories/SLUG.html" class="story-card">
  <div class="story-kicker">KICKER</div>
  <h3>HEADLINE</h3>
  <p class="story-deck">ONE-SENTENCE TEASER</p>
</a>
```

### 3. Deploy
```bash
tmp=$(mktemp -d) && cp index.html charts.js style.css fars_output.js "$tmp/" && mkdir -p "$tmp/stories" && cp stories/*.html "$tmp/stories/" && npx wrangler pages deploy "$tmp" --project-name=vehicle-safety && rm -rf "$tmp"
```

## Kicker categories
Use consistent kickers to build a taxonomy:
- **Investigation** — deep dives into specific vehicle data
- **Sobriety Report** — impairment-related stories
- **Existential Dread** — paradoxes and unsettling patterns
- **Body Count** — raw fatality numbers
- **The Gap** — comparisons and disparities
- **Trend Watch** — model year and temporal patterns
- **By The Numbers** — statistical roundups

## Daily automation (future)
To generate a new article daily, a script or Claude API call should:
1. Load `fars_output.js` and parse the 3 data arrays
2. Identify an angle not yet covered (check existing `stories/` filenames)
3. Generate the story HTML using the template
4. Add the teaser card to `index.html`
5. Deploy

This can be automated via GitHub Actions with the Claude API, a cron job calling `claude -p "..."`, or a Cloudflare Worker on a scheduled trigger.

---

## Scholarly Rigor Requirements
Modeled on the traits shared by highly-cited scholarly papers. Every article must meet these standards:

### Original Contribution (Required)
Every article must contain at least one original finding, calculation, or novel analysis — not just synthesis of existing NHTSA reports. Examples:
- A FARS data cross-tabulation nobody ran ("Cross-referencing impairment rates with vehicle price brackets reveals...")
- A cost-per-fatality calculation combining FARS deaths with NCES fleet data
- A model-year trend analysis that surfaces a non-obvious pattern
- A comparison nobody drew (e.g., fatality rates by vehicle age vs. ESC adoption timeline)

Summarizing FARS data in a new format does not count. The article must discover something the data didn't obviously show.

### Limitations Acknowledgment (Required)
Every article must explicitly state what it did NOT prove, what data was missing, and where uncertainty remains. Not inline hedging but a dedicated, honest accounting of blind spots.

Bad: "Of course, FARS data has limitations."
Good: "FARS only captures fatal crashes — the 36,000+ annual deaths are a fraction of the ~6.7M total crashes. A vehicle with low fatality rates might still have high injury rates. Our estimated_rate calculation uses VMT estimates, not actual odometer readings, introducing ±15% uncertainty for low-volume models."

### Strongest Counterargument (Required)
The best case against the article's thesis must be stated at full strength — not strawmanned, not immediately dismissed. If the data supports the counterargument, say so.

### Verifiability (Required)
Every factual claim must be traceable to a cited source the reader can check. Use the reference URLs in the table above. Hyperlink inline. No vague attribution.

### Methodology Transparency (Required for numerical claims)
When the article makes claims involving numbers — fatality rates, cost comparisons, statistical trends — show the math with inputs, assumptions, and calculation.

### For Flagship Articles
Run 6 critics instead of the standard single-critic pipeline:
1. 🔍 General Editor — overall quality, structure, engagement
2. 🗣️ Voice Coach — AI tells, banned phrases, rhythm
3. ⚖️ Ethics Reviewer — moral reasoning, self-congratulation, positions
4. 📱 Social/Shareability — pull quotes, share triggers, virality
5. ⚖️ Legal Accuracy — citations, case law, statutory references
6. 🔬 Research Rigor — novel contribution, limitations, counterarguments, verifiability, methodology

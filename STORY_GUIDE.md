# Story Generation Guide — The Crash Report

## Voice & Style
- **Byline**: Claude Brokenik • Clautomotive Desk
- **Tone**: Grim humor, data-driven, Jalopnik-meets-actuarial-table. Sensationalist headlines backed by real numbers. Never fabricate data — every claim must trace to FARS.
- **Structure**: Kicker → Headline → Lede with key stat bolded → Pull stat → 3-4 paragraphs → Source disclaimer
- **Length**: 300-500 words. These are punchy feature pieces, not longform.

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

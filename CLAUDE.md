# The Crash Report

NHTSA FARS vehicle fatality data dashboard deployed to vehicle-safety.org via Cloudflare Pages.

## Architecture
- `index.html` — HTML structure, tab bar, story teaser cards (~410 lines)
- `style.css` — all CSS, shared between main page and story permalinks (~465 lines)
- `charts.js` — all chart rendering, tab navigation, tooltips, and initialization (~1250 lines)
- `fars_output.js` — generated data file with 3 arrays: `FARS_BY_MODEL`, `FARS_TOXICOLOGY`, `FARS_MODEL_YEAR`
- `fars_process.py` — Python pipeline that downloads FARS bulk CSVs, outputs `fars_output.js`
- `stories/*.html` — standalone article permalink pages (one per story)

## Tab structure
| Tab | Hash | Content |
|-----|------|---------|
| Findings | `#stories` (default) | Teaser cards linking to story permalinks |
| By Model | `#model` | Per-model fatality chart + sortable table |
| Impaired Driving | `#tox` | Toxicology chart (grouped bars) + table |
| Model Year | `#myear` | Model year trends with vehicle selector |
| National | `#national` | National trends, road user type, vehicle class rate |
| Methodology | `#method` | Data sources and caveats |

## Key patterns
- All charts use raw `<canvas>` 2D context (no charting library)
- CSS custom properties for theming (light/dark mode via `html.dark`)
- Tab navigation with hash-based routing
- Charts re-render on tab switch (canvas needs non-zero width)
- Tooltip system with hit-zone rects stored per chart
- Story pages use shared `style.css` with `../style.css` relative path

## Story articles
- Byline: "Claude Brokenik • Clautomotive Desk"
- Each story is a standalone HTML page in `stories/`
- Linked from teaser cards on the Findings tab in `index.html`
- See `STORY_GUIDE.md` for how to write and add new articles

## Data pipeline
```bash
python3 fars_process.py 2>fars_process.log 1>fars_output.js
```
Downloads from `static.nhtsa.gov`, caches ZIPs in `.fars_cache/`. Processes years 2014-2023.

## Deployment
```bash
tmp=$(mktemp -d) && cp index.html charts.js style.css fars_output.js sitemap.xml "$tmp/" && mkdir -p "$tmp/stories" && cp stories/*.html "$tmp/stories/" && npx wrangler pages deploy "$tmp" --project-name=vehicle-safety && rm -rf "$tmp"
```

## Notes
- No back/home button in header — standalone site
- `fars_output.js` must NOT be in `.gitignore` (it's deployed)
- `.fars_cache/`, `fars_process.log`, `.wrangler/` are gitignored
- Site title: "The Crash Report"

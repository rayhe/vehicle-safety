# Vehicle Safety Dashboard

Self-contained NHTSA FARS vehicle safety dashboard deployed to vehicle-safety.org via Cloudflare Pages.

## Architecture
- `index.html` — HTML + CSS only (~850 lines)
- `charts.js` — all chart rendering, tab navigation, tooltips, and initialization (~1250 lines)
- `fars_output.js` — generated data file, contains 3 arrays: `FARS_BY_MODEL`, `FARS_TOXICOLOGY`, `FARS_MODEL_YEAR`
- `fars_process.py` — Python pipeline that downloads FARS bulk CSVs, parses VEHICLE.csv + PERSON.csv, outputs `fars_output.js`

## Key patterns
- All charts use raw `<canvas>` 2D context (no charting library)
- CSS custom properties for theming (light/dark mode)
- Tab navigation with hash-based routing (`#model`, `#tox`, `#myear`, `#national`, `#method`)
- Charts re-render on tab switch (canvas needs non-zero width)

## Data pipeline
```bash
python3 fars_process.py 2>fars_process.log 1>fars_output.js
```
Downloads from `static.nhtsa.gov`, caches ZIPs in `.fars_cache/`. Processes years 2014-2023.

## Deployment
```bash
tmp=$(mktemp -d) && cp index.html charts.js fars_output.js "$tmp/" && npx wrangler pages deploy "$tmp" --project-name=vehicle-safety && rm -rf "$tmp"
```
Only `index.html`, `charts.js`, and `fars_output.js` are deployed. Cache, logs, and Python files are excluded.

## Notes
- No back/home button in header — this is a standalone site
- `fars_output.js` must NOT be in `.gitignore` (it's deployed)
- `.fars_cache/`, `fars_process.log`, `.wrangler/` are gitignored

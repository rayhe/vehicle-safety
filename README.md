# Vehicle Safety Dashboard

Interactive dashboard for US vehicle fatality data from NHTSA FARS (Fatality Analysis Reporting System).

**Live at [vehicle-safety.org](https://vehicle-safety.org)**

## What's Here

| File | Purpose |
|------|---------|
| `index.html` | Self-contained dashboard (~1600 lines). Inline CSS + JS, Canvas-rendered charts |
| `fars_process.py` | Python data pipeline (~1600 lines). Downloads FARS bulk CSVs, normalizes make/model, estimates VMT, outputs JS array |
| `.fars_cache/` | Cached FARS ZIP downloads (gitignored) |

## Dashboard Sections

### FARS Per-Model Fatalities
- **337 models**, 2014-2023 (10 years of data)
- Searchable/filterable by make, model, vehicle class
- Toggle between raw death counts and estimated fatality rate per 100M VMT
- Horizontal bar chart + sortable data table

### National Traffic Fatality Trends (2014-2024)
- Total fatalities + rate per 100M VMT (dual-axis chart)
- 2024 data is an early NHTSA estimate

### Fatalities by Road User Type (2014-2023)
- Stacked bar chart: passenger car, light truck, motorcycle, pedestrian, pedalcyclist

### Occupant Fatality Rate by Vehicle Class
- Per-class rates (passenger car, light truck, motorcycle) with year toggle
- VMT-normalized using FHWA VM-1 data

## Data Pipeline

```
NHTSA FARS ZIPs -> download/cache -> parse vehicle.csv -> normalize make/model
-> aggregate deaths -> classify body type -> estimate fleet/VMT -> output JS array
```

### Running

```bash
python3 fars_process.py 2>fars_process.log 1>fars_output.js
```

- First run downloads ~50MB of ZIP files per year (cached in `.fars_cache/`)
- Output goes to stdout (JS array), diagnostics to stderr

### VMT Estimation

Since per-model VMT data doesn't exist publicly, rates use a proxy:
- **Fleet:** avg annual US sales x 12.5 yr avg vehicle age x 0.70 survival = sales x 8.75
- **Annual VMT:** fleet x NHTS class-average annual miles (sedans: 11.5k, SUVs: 12.5k, pickups: 13.5k, vans: 11.8k, sports cars: 8k)
- **Rate:** total deaths / (est. annual VMT x years / 100M)

## Data Sources

- [NHTSA FARS database](https://www.nhtsa.gov/data/fatality-analysis-reporting-system-fars)
- [FARS bulk CSV downloads](https://www.nhtsa.gov/file-downloads?p=nhtsa/downloads/FARS/)
- [FHWA Table VM-1](https://www.fhwa.dot.gov/policyinformation/statistics/2022/vm1.cfm)
- [NHTS (National Household Travel Survey)](https://nhts.ornl.gov/)
- [NHTSA Traffic Safety Facts](https://crashstats.nhtsa.dot.gov/Api/Public/ViewPublication/813597)

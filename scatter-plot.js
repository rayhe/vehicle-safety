// Scatter Plot: Death Rate vs Impairment Rate
// Reveals which vehicles kill from bad engineering (high rate, low impairment)
// vs bad behavior (high rate, high impairment)
(function() {
  'use strict';

  const QUADRANT_LABELS = {
    topLeft:  { text: 'ENGINEERING\nFAILURES', sub: 'Sober people dying in bad cars' },
    topRight: { text: 'DOUBLE\nJEOPARDY', sub: 'Bad car + impaired drivers' },
    botLeft:  { text: 'SAFE &\nSOBER', sub: 'Good cars, responsible drivers' },
    botRight: { text: 'BEHAVIOR\nRISK', sub: 'Good car, impaired drivers' }
  };

  const CLS_COLORS = {
    'Sedan':      '#4e79a7',
    'SUV':        '#59a14f',
    'Pickup':     '#e15759',
    'Sports Car': '#f28e2b',
    'Van':        '#76b7b2',
    'Luxury':     '#b07aa1',
    'Compact':    '#ff9da7',
    'Other':      '#9c755f'
  };

  function init() {
    const modelTab = document.getElementById('tab-model');
    if (!modelTab) return;
    if (typeof FARS_BY_MODEL === 'undefined' || typeof FARS_TOXICOLOGY === 'undefined') return;

    // Build tox lookup
    const toxMap = {};
    FARS_TOXICOLOGY.forEach(t => {
      const key = (t.make + '|' + t.model).toUpperCase();
      toxMap[key] = t;
    });

    // Join datasets — only vehicles in both with fleet >= 50k and >= 100 tox drivers
    const joined = [];
    FARS_BY_MODEL.forEach(m => {
      const key = (m.make + '|' + m.model).toUpperCase();
      const t = toxMap[key];
      if (t && t.drivers >= 100 && m.fleet >= 50000) {
        joined.push({
          make: m.make, model: m.model, cls: m.cls,
          rate: m.rate, deaths: m.deaths, fleet: m.fleet,
          impPct: t.anyPct, alcPct: t.alcPct, drugPct: t.drugPct,
          drivers: t.drivers
        });
      }
    });

    if (joined.length < 10) return;

    // Create container
    const container = document.createElement('div');
    container.id = 'scatter-section';
    container.innerHTML = `
      <h3 style="margin:32px 0 8px;font-size:1.1rem;">Engineering vs. Behavior: What's Actually Killing People?</h3>
      <p style="color:var(--muted,#666);font-size:0.85rem;margin:0 0 16px;">
        Each dot is a vehicle. <strong>X-axis:</strong> % of fatal-crash drivers who were impaired.
        <strong>Y-axis:</strong> deaths per 100M miles. Dot size = total deaths.
        Vehicles in the <em>top-left</em> kill sober people — that's an engineering problem. 
        <em>Bottom-right</em> vehicles attract impaired drivers but the car itself is relatively safe.
      </p>
      <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:12px;" id="scatter-legend"></div>
      <div style="position:relative;width:100%;max-width:900px;">
        <canvas id="scatter-canvas" width="900" height="560" style="width:100%;height:auto;cursor:crosshair;border-radius:6px;"></canvas>
        <div id="scatter-tooltip" style="display:none;position:absolute;pointer-events:none;background:rgba(0,0,0,0.88);color:#fff;padding:8px 12px;border-radius:6px;font-size:0.8rem;line-height:1.4;max-width:260px;z-index:10;box-shadow:0 2px 8px rgba(0,0,0,0.3);"></div>
      </div>
    `;

    // Insert before the table
    const tableWrap = modelTab.querySelector('.table-wrap');
    if (tableWrap) {
      modelTab.insertBefore(container, tableWrap);
    } else {
      modelTab.appendChild(container);
    }

    // Build legend
    const legendEl = document.getElementById('scatter-legend');
    const classesUsed = [...new Set(joined.map(d => d.cls))].sort();
    classesUsed.forEach(cls => {
      const color = CLS_COLORS[cls] || CLS_COLORS['Other'];
      const dot = document.createElement('span');
      dot.style.cssText = `display:inline-flex;align-items:center;gap:4px;font-size:0.78rem;color:var(--text,#333);`;
      dot.innerHTML = `<span style="width:10px;height:10px;border-radius:50%;background:${color};display:inline-block;"></span>${cls}`;
      legendEl.appendChild(dot);
    });

    // Draw
    const canvas = document.getElementById('scatter-canvas');
    const ctx = canvas.getContext('2d');
    const tooltip = document.getElementById('scatter-tooltip');
    const W = canvas.width, H = canvas.height;
    const pad = { top: 30, right: 30, bottom: 50, left: 60 };
    const plotW = W - pad.left - pad.right;
    const plotH = H - pad.top - pad.bottom;

    // Axis ranges
    const maxRate = Math.min(Math.ceil(Math.max(...joined.map(d => d.rate)) + 0.5), 10);
    const minImp = Math.floor(Math.min(...joined.map(d => d.impPct)));
    const maxImp = Math.ceil(Math.max(...joined.map(d => d.impPct)) + 1);
    const medianRate = joined.map(d => d.rate).sort((a,b)=>a-b)[Math.floor(joined.length/2)];
    const medianImp = joined.map(d => d.impPct).sort((a,b)=>a-b)[Math.floor(joined.length/2)];

    function xPos(imp) { return pad.left + ((imp - minImp) / (maxImp - minImp)) * plotW; }
    function yPos(rate) { return pad.top + plotH - ((rate / maxRate) * plotH); }
    function radius(deaths) { return Math.max(3, Math.min(20, Math.sqrt(deaths) * 0.4)); }

    const isDark = document.documentElement.classList.contains('dark');
    const gridColor = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)';
    const textColor = isDark ? '#bbb' : '#555';
    const bgColor = isDark ? '#1e1e1e' : '#fafafa';
    const quadrantAlpha = isDark ? 0.06 : 0.04;

    function draw() {
      ctx.clearRect(0, 0, W, H);

      // Background
      ctx.fillStyle = bgColor;
      ctx.fillRect(0, 0, W, H);

      // Quadrant shading
      const mx = xPos(medianImp), my = yPos(medianRate);
      // Top-left (engineering failures) — red tint
      ctx.fillStyle = `rgba(220,50,50,${quadrantAlpha})`;
      ctx.fillRect(pad.left, pad.top, mx - pad.left, my - pad.top);
      // Top-right (double jeopardy) — dark red
      ctx.fillStyle = `rgba(180,30,30,${quadrantAlpha * 1.5})`;
      ctx.fillRect(mx, pad.top, pad.left + plotW - mx, my - pad.top);
      // Bottom-left (safe & sober) — green
      ctx.fillStyle = `rgba(50,180,50,${quadrantAlpha})`;
      ctx.fillRect(pad.left, my, mx - pad.left, pad.top + plotH - my);
      // Bottom-right (behavior risk) — orange
      ctx.fillStyle = `rgba(220,160,30,${quadrantAlpha})`;
      ctx.fillRect(mx, my, pad.left + plotW - mx, pad.top + plotH - my);

      // Grid lines
      ctx.strokeStyle = gridColor;
      ctx.lineWidth = 1;
      for (let r = 0; r <= maxRate; r += 1) {
        const y = yPos(r);
        ctx.beginPath(); ctx.moveTo(pad.left, y); ctx.lineTo(pad.left + plotW, y); ctx.stroke();
      }
      for (let i = minImp; i <= maxImp; i += 2) {
        const x = xPos(i);
        ctx.beginPath(); ctx.moveTo(x, pad.top); ctx.lineTo(x, pad.top + plotH); ctx.stroke();
      }

      // Median crosshairs
      ctx.strokeStyle = isDark ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.15)';
      ctx.lineWidth = 1.5;
      ctx.setLineDash([6, 4]);
      ctx.beginPath(); ctx.moveTo(mx, pad.top); ctx.lineTo(mx, pad.top + plotH); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(pad.left, my); ctx.lineTo(pad.left + plotW, my); ctx.stroke();
      ctx.setLineDash([]);

      // Axis labels
      ctx.fillStyle = textColor;
      ctx.font = '11px Inter, system-ui, sans-serif';
      ctx.textAlign = 'center';
      for (let i = minImp; i <= maxImp; i += 2) {
        ctx.fillText(i + '%', xPos(i), pad.top + plotH + 18);
      }
      ctx.textAlign = 'right';
      for (let r = 0; r <= maxRate; r += 1) {
        ctx.fillText(r.toFixed(0), pad.left - 8, yPos(r) + 4);
      }

      // Axis titles
      ctx.save();
      ctx.fillStyle = textColor;
      ctx.font = 'bold 12px Inter, system-ui, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('Impairment Rate (% drivers impaired in fatal crashes)', pad.left + plotW/2, H - 6);
      ctx.save();
      ctx.translate(14, pad.top + plotH/2);
      ctx.rotate(-Math.PI/2);
      ctx.fillText('Deaths per 100M VMT', 0, 0);
      ctx.restore();
      ctx.restore();

      // Quadrant labels (faint)
      ctx.globalAlpha = 0.25;
      ctx.font = 'bold 11px Inter, system-ui, sans-serif';
      ctx.textAlign = 'center';
      const qlx = pad.left + (mx - pad.left) * 0.5;
      const qrx = mx + (pad.left + plotW - mx) * 0.5;
      const qty = pad.top + (my - pad.top) * 0.35;
      const qby = my + (pad.top + plotH - my) * 0.65;
      ctx.fillStyle = isDark ? '#ff6666' : '#cc3333';
      ctx.fillText('ENGINEERING', qlx, qty);
      ctx.fillText('FAILURES', qlx, qty + 14);
      ctx.fillStyle = isDark ? '#ff4444' : '#990000';
      ctx.fillText('DOUBLE', qrx, qty);
      ctx.fillText('JEOPARDY', qrx, qty + 14);
      ctx.fillStyle = isDark ? '#66cc66' : '#228822';
      ctx.fillText('SAFE &', qlx, qby);
      ctx.fillText('SOBER', qlx, qby + 14);
      ctx.fillStyle = isDark ? '#ddaa33' : '#996600';
      ctx.fillText('BEHAVIOR', qrx, qby);
      ctx.fillText('RISK', qrx, qby + 14);
      ctx.globalAlpha = 1;

      // Draw dots (smallest first so big ones overlay)
      const sorted = [...joined].sort((a,b) => b.deaths - a.deaths);
      sorted.forEach(d => {
        const x = xPos(d.impPct);
        const y = yPos(Math.min(d.rate, maxRate));
        const r = radius(d.deaths);
        const color = CLS_COLORS[d.cls] || CLS_COLORS['Other'];

        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.globalAlpha = 0.7;
        ctx.fill();
        ctx.globalAlpha = 1;
        ctx.strokeStyle = isDark ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.2)';
        ctx.lineWidth = 0.5;
        ctx.stroke();

        // Label big outliers
        if (d.rate > maxRate * 0.6 || d.deaths > 5000 || d.impPct > 25 || d.rate > 4) {
          ctx.fillStyle = textColor;
          ctx.font = '9px Inter, system-ui, sans-serif';
          ctx.textAlign = 'left';
          const label = d.make.charAt(0) + d.make.slice(1).toLowerCase() + ' ' +
                        d.model.charAt(0) + d.model.slice(1).toLowerCase();
          ctx.fillText(label, x + r + 3, y + 3);
        }
      });
    }

    draw();

    // Hover tooltip
    canvas.addEventListener('mousemove', function(e) {
      const rect = canvas.getBoundingClientRect();
      const scaleX = W / rect.width;
      const scaleY = H / rect.height;
      const mx = (e.clientX - rect.left) * scaleX;
      const my = (e.clientY - rect.top) * scaleY;

      let hit = null;
      let minDist = Infinity;
      joined.forEach(d => {
        const x = xPos(d.impPct);
        const y = yPos(Math.min(d.rate, maxRate));
        const dist = Math.sqrt((mx-x)**2 + (my-y)**2);
        const r = radius(d.deaths);
        if (dist < Math.max(r + 4, 12) && dist < minDist) {
          hit = d; minDist = dist;
        }
      });

      if (hit) {
        const name = hit.make.charAt(0) + hit.make.slice(1).toLowerCase() + ' ' +
                     hit.model.charAt(0) + hit.model.slice(1).toLowerCase();
        tooltip.innerHTML = `
          <strong>${name}</strong> (${hit.cls})<br>
          <span style="color:#ff6666;">⚠ ${hit.rate.toFixed(2)}</span> deaths per 100M VMT<br>
          <span style="color:#ffaa44;">${hit.impPct.toFixed(1)}%</span> impaired (${hit.alcPct.toFixed(1)}% alc, ${hit.drugPct.toFixed(1)}% drug)<br>
          ${hit.deaths.toLocaleString()} total deaths · ${(hit.fleet/1000).toFixed(0)}K fleet
        `;
        // Position tooltip near the mouse but inside the container
        const px = e.clientX - canvas.parentElement.getBoundingClientRect().left;
        const py = e.clientY - canvas.parentElement.getBoundingClientRect().top;
        tooltip.style.display = 'block';
        tooltip.style.left = (px + 15) + 'px';
        tooltip.style.top = (py - 10) + 'px';
        // Prevent overflow right
        if (px > rect.width * 0.65) {
          tooltip.style.left = (px - 270) + 'px';
        }
      } else {
        tooltip.style.display = 'none';
      }
    });

    canvas.addEventListener('mouseleave', function() {
      tooltip.style.display = 'none';
    });

    // Redraw on theme changes
    const observer = new MutationObserver(() => {
      setTimeout(draw, 50);
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

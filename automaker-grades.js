// Automaker Report Card — aggregates FARS_BY_MODEL by make, ranks by fleet-weighted avg death rate
(function() {
  'use strict';

  const container = document.getElementById('automakerReportCard');
  if (!container || typeof FARS_BY_MODEL === 'undefined') return;

  // Aggregate by make
  const makes = {};
  FARS_BY_MODEL.forEach(m => {
    const mk = m.make;
    if (!makes[mk]) makes[mk] = { make: mk, deaths: 0, fleet: 0, vmt: 0, models: 0, classes: new Set() };
    makes[mk].deaths += m.deaths;
    makes[mk].fleet += m.fleet;
    makes[mk].vmt += m.vmt;
    makes[mk].models++;
    makes[mk].classes.add(m.cls);
  });

  // Compute weighted rate and sort
  const ranked = Object.values(makes)
    .filter(m => m.fleet >= 100000 && m.models >= 3) // Meaningful sample only
    .map(m => ({
      ...m,
      rate: m.vmt > 0 ? m.deaths / m.vmt * 10 : 0, // per 100M VMT (vmt is in 10M units)
      classes: Array.from(m.classes)
    }))
    .sort((a, b) => a.rate - b.rate);

  if (ranked.length === 0) return;

  // Grade thresholds (fleet-weighted rate per 100M VMT)
  function getGrade(rate) {
    if (rate <= 0.20) return { letter: 'A+', color: '#16a34a', bg: 'rgba(22,163,74,0.12)' };
    if (rate <= 0.40) return { letter: 'A',  color: '#22c55e', bg: 'rgba(34,197,94,0.10)' };
    if (rate <= 0.55) return { letter: 'B+', color: '#65a30d', bg: 'rgba(101,163,13,0.10)' };
    if (rate <= 0.70) return { letter: 'B',  color: '#ca8a04', bg: 'rgba(202,138,4,0.10)' };
    if (rate <= 0.85) return { letter: 'C+', color: '#ea580c', bg: 'rgba(234,88,12,0.10)' };
    if (rate <= 1.00) return { letter: 'C',  color: '#dc2626', bg: 'rgba(220,38,38,0.10)' };
    if (rate <= 1.20) return { letter: 'D',  color: '#b91c1c', bg: 'rgba(185,28,28,0.12)' };
    return { letter: 'F',  color: '#7f1d1d', bg: 'rgba(127,29,29,0.15)' };
  }

  // Format numbers
  function fmt(n) {
    if (n >= 1e6) return (n / 1e6).toFixed(1) + 'M';
    if (n >= 1e3) return (n / 1e3).toFixed(0) + 'K';
    return n.toLocaleString();
  }

  // Class emoji map
  const classEmoji = { 'Sedan': '🚗', 'SUV': '🚙', 'Pickup': '🛻', 'Van': '🚐', 'Sports Car': '🏎️' };

  // Find best and worst model for each make
  function getExtremes(make) {
    const models = FARS_BY_MODEL.filter(m => m.make === make && m.fleet >= 50000);
    if (models.length < 2) return null;
    const sorted = [...models].sort((a, b) => a.rate - b.rate);
    return { best: sorted[0], worst: sorted[sorted.length - 1] };
  }

  // Max rate for bar scaling
  const maxRate = Math.max(...ranked.map(m => m.rate));

  // Build HTML
  let html = `
    <div class="automaker-header">
      <h3 class="section-title" style="margin:0;">🏭 Automaker Safety Report Card</h3>
      <p class="automaker-subtitle">Fleet-weighted death rate per 100M VMT across all models &middot; Minimum 3 models &amp; 100K fleet</p>
    </div>
    <div class="automaker-grid">
  `;

  ranked.forEach((m, i) => {
    const g = getGrade(m.rate);
    const extremes = getExtremes(m.make);
    const barWidth = Math.max(4, (m.rate / maxRate) * 100);
    const classIcons = m.classes.map(c => classEmoji[c] || '').join(' ');

    html += `
      <div class="automaker-card" style="border-left:4px solid ${g.color};" data-make="${m.make}">
        <div class="automaker-card-top">
          <div class="automaker-rank">#${i + 1}</div>
          <div class="automaker-grade" style="color:${g.color};background:${g.bg};">${g.letter}</div>
          <div class="automaker-info">
            <div class="automaker-name">${m.make}</div>
            <div class="automaker-meta">${fmt(m.deaths)} deaths &middot; ${m.models} models &middot; ${fmt(m.fleet)} fleet</div>
          </div>
          <div class="automaker-rate-badge" style="color:${g.color};">${m.rate.toFixed(2)}</div>
        </div>
        <div class="automaker-bar-track">
          <div class="automaker-bar-fill" style="width:${barWidth}%;background:${g.color};"></div>
        </div>
        ${extremes ? `
        <div class="automaker-extremes">
          <span class="extreme-best" title="${extremes.best.model}: ${extremes.best.rate.toFixed(2)} per 100M VMT">🟢 ${extremes.best.model} (${extremes.best.rate.toFixed(2)})</span>
          <span class="extreme-worst" title="${extremes.worst.model}: ${extremes.worst.rate.toFixed(2)} per 100M VMT">🔴 ${extremes.worst.model} (${extremes.worst.rate.toFixed(2)})</span>
        </div>
        ` : ''}
      </div>
    `;
  });

  html += '</div>';

  // Summary stats
  const safest = ranked[0];
  const deadliest = ranked[ranked.length - 1];
  const avgRate = ranked.reduce((s, m) => s + m.rate * m.fleet, 0) / ranked.reduce((s, m) => s + m.fleet, 0);

  html = `
    <div class="automaker-summary">
      <div class="summary-card">
        <div class="label">Safest Make</div>
        <div class="value" style="font-size:1rem;color:#16a34a;">${safest.make}</div>
        <div class="detail">${safest.rate.toFixed(2)} per 100M VMT</div>
      </div>
      <div class="summary-card">
        <div class="label">Deadliest Make</div>
        <div class="value" style="font-size:1rem;color:#dc2626;">${deadliest.make}</div>
        <div class="detail">${deadliest.rate.toFixed(2)} per 100M VMT</div>
      </div>
      <div class="summary-card">
        <div class="label">Industry Average</div>
        <div class="value" style="font-size:1rem;">${avgRate.toFixed(2)}</div>
        <div class="detail">fleet-weighted mean rate</div>
      </div>
      <div class="summary-card">
        <div class="label">Makes Graded</div>
        <div class="value" style="font-size:1rem;">${ranked.length}</div>
        <div class="detail">with 3+ models &amp; 100K+ fleet</div>
      </div>
    </div>
  ` + html;

  container.innerHTML = html;

  // Click card → filter By Model table to that make
  container.querySelectorAll('.automaker-card').forEach(card => {
    card.style.cursor = 'pointer';
    card.addEventListener('click', () => {
      const make = card.dataset.make;
      const searchBox = document.getElementById('fmSearch');
      if (searchBox) {
        searchBox.value = make;
        searchBox.dispatchEvent(new Event('input'));
        // Scroll to table
        const table = document.getElementById('fmTable');
        if (table) table.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
})();

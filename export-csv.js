/**
 * export-csv.js — CSV export for Crash Report data tables
 * Adds "⬇ Export CSV" buttons to the By Model and Impaired Driving tables.
 */
(function () {
  'use strict';

  function escapeCSV(val) {
    if (val == null) return '';
    const s = String(val);
    if (s.includes(',') || s.includes('"') || s.includes('\n')) {
      return '"' + s.replace(/"/g, '""') + '"';
    }
    return s;
  }

  function tableToCSV(tableId) {
    const table = document.getElementById(tableId);
    if (!table) return '';
    const rows = [];

    // Headers — skip the checkbox column (index 0)
    const ths = table.querySelectorAll('thead th');
    const headers = [];
    for (let i = 0; i < ths.length; i++) {
      if (ths[i].classList.contains('compare-th')) continue;
      // Strip sort arrows and trim
      headers.push(ths[i].textContent.replace(/[▲▼]/g, '').trim());
    }
    rows.push(headers.map(escapeCSV).join(','));

    // Body rows
    const trs = table.querySelectorAll('tbody tr');
    trs.forEach(tr => {
      const cells = [];
      const tds = tr.querySelectorAll('td');
      for (let i = 0; i < tds.length; i++) {
        // Skip checkbox column
        if (tds[i].querySelector('input[type="checkbox"]')) continue;
        // Get raw text, strip commas from numbers for cleaner CSV
        let val = tds[i].textContent.trim();
        cells.push(val);
      }
      if (cells.length) rows.push(cells.map(escapeCSV).join(','));
    });

    return rows.join('\n');
  }

  function downloadCSV(csv, filename) {
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    setTimeout(() => {
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }, 100);
  }

  function createExportBtn(tableId, filename, label) {
    const btn = document.createElement('button');
    btn.className = 'export-csv-btn';
    btn.innerHTML = '⬇ Export CSV';
    btn.title = 'Download table data as CSV';
    btn.addEventListener('click', () => {
      const csv = tableToCSV(tableId);
      if (!csv) return;
      downloadCSV(csv, filename);
      // Brief feedback
      const orig = btn.innerHTML;
      btn.innerHTML = '✓ Downloaded';
      btn.classList.add('export-done');
      setTimeout(() => {
        btn.innerHTML = orig;
        btn.classList.remove('export-done');
      }, 1500);
    });
    return btn;
  }

  function init() {
    // By Model table
    const fmCount = document.getElementById('fmTableCount');
    if (fmCount) {
      const wrap = document.createElement('div');
      wrap.className = 'export-row';
      fmCount.parentNode.insertBefore(wrap, fmCount);
      wrap.appendChild(fmCount);
      wrap.appendChild(createExportBtn('fmTable', 'crash-report-by-model.csv'));
    }

    // Toxicology table
    const toxCount = document.getElementById('toxTableCount');
    if (toxCount) {
      const wrap = document.createElement('div');
      wrap.className = 'export-row';
      toxCount.parentNode.insertBefore(wrap, toxCount);
      wrap.appendChild(toxCount);
      wrap.appendChild(createExportBtn('toxTable', 'crash-report-impairment.csv'));
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    // Tables may populate async; wait a beat
    setTimeout(init, 500);
  }
})();

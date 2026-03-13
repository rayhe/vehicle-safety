/**
 * theme-toggle.js — Universal dark/light mode toggle for The Crash Report
 * Injects a floating toggle button on all pages (index + stories + 404).
 * Dispatches a 'themechange' CustomEvent so charts.js can re-render on toggle.
 */
(function() {
  'use strict';

  // Don't double-inject if charts.js already added one
  if (document.querySelector('.theme-toggle')) return;

  var btn = document.createElement('button');
  btn.className = 'theme-toggle';
  btn.setAttribute('aria-label', 'Toggle theme');

  function label() {
    var t = localStorage.getItem('theme');
    btn.textContent = t === 'dark' ? '\uD83C\uDF19' : t === 'light' ? '\u2600\uFE0F' : '\u25D0';
    btn.title = 'Theme: ' + (t || 'auto');
  }

  btn.addEventListener('click', function() {
    var t = localStorage.getItem('theme');
    var next = !t ? 'dark' : t === 'dark' ? 'light' : null;
    if (next) localStorage.setItem('theme', next); else localStorage.removeItem('theme');
    var isDark = next === 'dark' || (!next && window.matchMedia('(prefers-color-scheme: dark)').matches);
    document.documentElement.classList.toggle('dark', isDark);
    label();
    // Dispatch event so charts.js (if loaded) can re-render
    try {
      window.dispatchEvent(new CustomEvent('themechange', { detail: { dark: isDark } }));
    } catch (e) {}
  });

  label();
  document.body.appendChild(btn);
})();

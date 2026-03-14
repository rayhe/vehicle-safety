/* Newsletter signup — Firebase-backed (replaces localStorage placeholder)
   Uses newsletter-shared.js for Firebase RTDB integration */

// newsletter-shared.js handles everything now.
// This file is kept for backward compatibility with the <script src="newsletter.js"> tag
// but the actual logic lives in newsletter-shared.js.

// If newsletter-shared.js hasn't loaded yet, provide a no-op fallback
if (typeof Newsletter === 'undefined') {
  console.warn('[newsletter.js] newsletter-shared.js not loaded yet');
}

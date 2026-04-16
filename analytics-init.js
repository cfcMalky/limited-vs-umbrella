// Vercel Web Analytics initialization for static HTML
(function() {
  // Initialize the analytics queue
  if (window.va) return;
  window.va = function a() {
    (window.vaq = window.vaq || []).push(arguments);
  };
  
  // Create and inject the script
  var script = document.createElement('script');
  script.src = '/_vercel/insights/script.js';
  script.defer = true;
  script.setAttribute('data-sdkn', '@vercel/analytics');
  script.setAttribute('data-sdkv', '1.6.1');
  
  script.onerror = function() {
    console.log('[Vercel Web Analytics] Failed to load script. Please ensure Web Analytics is enabled for your project.');
  };
  
  document.head.appendChild(script);
})();

// Minimal service worker: lets phones offer "Install app". It does not cache anything,
// so visitors always get the latest version of the site.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', e => {
  if (new URL(e.request.url).origin === location.origin) e.respondWith(fetch(e.request));
});

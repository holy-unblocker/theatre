const RETIREMENT_VERSION = 'fg-cache-retirement-20260908-1';
const LEGACY_CACHE_PREFIX = 'Pinbit-FlyingGorilla-';

self.addEventListener('install', function (event) {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', function (event) {
  event.waitUntil((async function () {
    const names = await caches.keys();
    await Promise.all(names.filter(function (name) {
      return name.startsWith(LEGACY_CACHE_PREFIX);
    }).map(function (name) {
      return caches.delete(name);
    }));
    await self.clients.claim();
  })());
});

self.addEventListener('message', function (event) {
  if (event.data && event.data.type === 'FG_RETIREMENT_VERSION' && event.ports[0]) {
    event.ports[0].postMessage({ type: 'FG_RETIREMENT_VERSION', version: RETIREMENT_VERSION });
  }
});
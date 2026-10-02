var scriptCache = null;

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));

self.addEventListener('fetch', event => {
    var url = new URL(event.request.url);
    if (event.request.mode === 'navigate' && url.pathname.startsWith('/files/')) {
        event.respondWith(handleGame(event.request));
    }
});

async function loadScript() {
    if (scriptCache) return scriptCache;
    var resp = await fetch('/js/eags-servers.js');
    scriptCache = await resp.text();
    return scriptCache;
}

async function handleGame(request) {
    var [response, code] = await Promise.all([fetch(request), loadScript()]);
    var type = response.headers.get('content-type') || '';
    if (!type.includes('text/html')) return response;

    var html = await response.text();
    var tag = '<script>\n' + code + '\n<\/script>\n';
    html = html.replace(/<head[^>]*>/i, m => m + '\n' + tag);

    var headers = new Headers(response.headers);
    headers.delete('content-length');
    return new Response(html, { status: response.status, statusText: response.statusText, headers });
}

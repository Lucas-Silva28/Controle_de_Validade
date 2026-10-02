// CONTROLE DE VALIDADE KODA — SERVICE WORKER
// v6.1.8 — Atualização controlada

const CACHE_NAME = 'controle-validade-koda-v6.1.8';

const APP_SHELL = [
  './',
  './index.html',
  './manifest.json',
  './sw.js',
  './icon-192.png',
  './icon-512.png'
];

// Instala a nova versão, mas NÃO assume o controle imediatamente.
// Ela fica em WAITING até o usuário tocar em "Atualizar agora".
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(APP_SHELL))
  );
});

// Só libera a nova versão quando o aplicativo mandar SKIP_WAITING.
self.addEventListener('message', event => {
  if (event.data?.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

// Quando a nova versão assumir o controle,
// remove caches antigos do Controle de Validade.
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys =>
        Promise.all(
          keys
            .filter(
              key =>
                key.startsWith('controle-validade-koda-') &&
                key !== CACHE_NAME
            )
            .map(key => caches.delete(key))
        )
      )
      .then(() => self.clients.claim())
  );
});

// Controle das requisições.
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);

  // Nunca interceptar outro domínio.
  if (url.origin !== location.origin) return;

  // version.json precisa sempre ser consultado diretamente,
  // para detectar uma nova versão publicada.
  if (url.pathname.endsWith('/version.json')) {
    event.respondWith(
      fetch(event.request, {
        cache: 'no-store'
      }).catch(() => {
        return caches.match('./version.json');
      })
    );
    return;
  }

  // Arquivos principais da aplicação:
  // tenta buscar a versão publicada primeiro.
  if (
    url.pathname.endsWith('/index.html') ||
    url.pathname === '/' ||
    url.pathname.endsWith('/manifest.json') ||
    url.pathname.endsWith('/sw.js')
  ) {
    event.respondWith(
      fetch(event.request, {
        cache: 'no-store'
      })
        .then(response => {
          if (response.ok) {
            const copy = response.clone();

            caches.open(CACHE_NAME)
              .then(cache => cache.put(event.request, copy))
              .catch(() => {});
          }

          return response;
        })
        .catch(() => caches.match(event.request))
    );

    return;
  }

  // Demais arquivos:
  // usa cache quando disponível e busca na rede quando necessário.
  event.respondWith(
    caches.match(event.request)
      .then(cached => {
        if (cached) return cached;

        return fetch(event.request)
          .then(response => {
            if (response.ok) {
              const copy = response.clone();

              caches.open(CACHE_NAME)
                .then(cache => cache.put(event.request, copy))
                .catch(() => {});
            }

            return response;
          });
      })
  );
});

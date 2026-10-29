// CarboxMol Bioinformatika Klubu - PWA Service Worker (Oflayn və Canlı Sinxronizasiya Mühərriki)
// Versiya: 2.2.4
 
const CACHE_VERSION = 'carboxmol-bioinformatics-club-v2.2.4';
const CORE_CACHE = `core-${CACHE_VERSION}`;
const RUNTIME_CACHE = `runtime-${CACHE_VERSION}`;

// Oflayn rejim üçün ilkin keşlənəcək əsas fayllar (App Shell)
const PRECACHE_ASSETS = [
  './',
  './index.html',
  './css/style.css',
  './js/app.js',
  './js/data.js',
  './js/db.js',
  './js/security.js',
  './js/canvas.js',
  './js/bio-tools.js',
  './js/bioconductor.js',
  './js/collaborators.js',
  './js/biomeet.js',
  './js/members.js',
  './js/teacher.js',
  './js/president.js',
  './js/doc-contents.js',
  './js/pwa.js',
  './version.json',
  './favicon.svg',
  './apple-touch-icon.png',
  './assets/images/president.jpg',
  './assets/images/events/garib_murshudov_seminar_group.jpg',
  './assets/images/events/garib_murshudov_seminar_president.jpg',
  './assets/images/events/garib_murshudov_seminar_member1.jpg',
  './assets/images/events/garib_murshudov_seminar_member2.jpg',
  './assets/icons/apple-touch-icon.png',
  './assets/icons/icon-192.png',
  './assets/icons/icon-512.png',
  './assets/icons/icon-maskable-192.png',
  './assets/icons/icon-maskable-512.png',
  './assets/audio/guide/step1.mp3',
  './assets/audio/guide/step2.mp3',
  './assets/audio/guide/step3.mp3',
  './assets/audio/guide/step4.mp3',
  './manifest.webmanifest',
  './manifest.json',
  // Sənəd və Tədris Resursları (Bütün Rəsmi Sənədlər Paketi)
  './docs/01_Muraciet_Erizesi.pdf',
  './docs/02_Esasname.pdf',
  './docs/03_Teshkilati_Struktur.pdf',
  './docs/04_Illik_Fealiyyet_Plani_ve_Sillabus.pdf',
  './docs/05_Uzvluk_Formasi.pdf',
  './docs/WCU_Bioinformatika_Klubu_Tam_Paket.pdf',
  // Əsas CDN resursları
  'https://cdn.tailwindcss.com',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css'
];

// 1. QURAŞDIRMA (INSTALL)
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CORE_CACHE).then(async (cache) => {
      const cachePromises = PRECACHE_ASSETS.map((url) => {
        return cache.add(new Request(url, { cache: 'reload' })).catch((err) => {
          console.warn(`[PWA SW] Precache bildirişi (${url}):`, err.message);
        });
      });
      await Promise.all(cachePromises);
      return self.skipWaiting(); // Dərhal yeni versiyaya keç
    })
  );
});

// 2. AKTİVLƏŞDİRMƏ (ACTIVATE)
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((name) => {
          if (name !== CORE_CACHE && name !== RUNTIME_CACHE) {
            console.log(`[PWA SW] Köhnə keş təmizləndi: ${name}`);
            return caches.delete(name);
          }
        })
      );
    }).then(() => {
      return self.clients.claim(); // Bütün aktiv pəncərələri dərhal idarəetməyə götür
    }).then(() => {
      // Bütün açıq pəncərələrə və PWA-lara yeni versiyanın aktivləşdiyini xəbər ver
      return self.clients.matchAll({ type: 'window' }).then((clients) => {
        clients.forEach((client) => {
          client.postMessage({ action: 'SW_ACTIVATED', version: CACHE_VERSION });
        });
      });
    })
  );
});

// 3. ŞƏBƏKƏ VƏ KEŞ SORĞULARININ İDARƏ EDİLMƏSİ (FETCH)
self.addEventListener('fetch', (event) => {
  const { request } = event;

  // Yalnız GET sorğularını idarə et
  if (request.method !== 'GET') {
    return;
  }

  const url = new URL(request.url);
  const isSameOrigin = url.origin === self.location.origin;

  // 0) VERSION.JSON - Həmişə ən son versiyanı şəbəkədən yoxla (no-cache)
  if (url.pathname.endsWith('/version.json')) {
    event.respondWith(
      fetch(request, { cache: 'no-store' })
        .then((networkResponse) => {
          const copy = networkResponse.clone();
          caches.open(CORE_CACHE).then((cache) => cache.put(request, copy));
          return networkResponse;
        })
        .catch(async () => {
          return (await caches.match(request)) || new Response('{"offline": true}', { headers: { 'Content-Type': 'application/json' } });
        })
    );
    return;
  }

  // A) NAVİQASİYA SORĞULARI (HTML səhifəsinin açılması)
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((networkResponse) => {
          // İnternet olduqda: ən son səhifəni şəbəkədən çək və keşi dərhal yenilə
          if (networkResponse && networkResponse.status === 200) {
            const copy = networkResponse.clone();
            caches.open(CORE_CACHE).then((cache) => cache.put('./index.html', copy));
          }
          return networkResponse;
        })
        .catch(async () => {
          // İnternet kəsildikdə: keşdən index.html təqdim et
          const cachedIndex = await caches.match('./index.html') || await caches.match('/');
          if (cachedIndex) return cachedIndex;
          return new Response(
            `<!DOCTYPE html><html lang="az"><head><meta charset="UTF-8"><title>WCU BioClub - Oflayn</title></head><body style="background:#070e17;color:#fff;text-align:center;padding:50px;font-family:sans-serif;"><h1>📡 Oflayn Rejim</h1><p>CarboxMol Bioinformatika Klubu portalı yüklənir...</p></body></html>`,
            { headers: { 'Content-Type': 'text/html; charset=utf-8' } }
          );
        })
    );
    return;
  }

  // B) YERLİ LAYİHƏ FAYLLARI (JS, CSS, Sənədlər, İkonlar) - Network-First, Oflaynda Keş
  if (isSameOrigin) {
    event.respondWith(
      fetch(request)
        .then((networkResponse) => {
          // İnternet olduqda ən son yenilikləri şəbəkədən çək və keşi yenilə
          if (networkResponse && networkResponse.status === 200) {
            const copy = networkResponse.clone();
            caches.open(CORE_CACHE).then((cache) => cache.put(request, copy));
          }
          return networkResponse;
        })
        .catch(async () => {
          // İnternet yoxdursa: keşdəki nüsxəni dərhal təqdim et
          const cached = await caches.match(request);
          if (cached) return cached;
          if (request.destination === 'image') {
            return caches.match('./favicon.png',
  './favicon.ico',
  './apple-touch-icon.png');
          }
          return new Response('Offline', { status: 503, statusText: 'Offline' });
        })
    );
    return;
  }

  // C) XARİCİ CDN VƏ ŞRİFTLƏR (Tailwind, FontAwesome, Google Fonts) - Stale-While-Revalidate
  event.respondWith(
    caches.match(request).then((cachedResponse) => {
      const fetchPromise = fetch(request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const copy = networkResponse.clone();
            caches.open(RUNTIME_CACHE).then((cache) => cache.put(request, copy));
          }
          return networkResponse;
        })
        .catch(() => null);

      return cachedResponse || fetchPromise.then((res) => {
        if (res) return res;
        return new Response('Offline', { status: 503, statusText: 'Offline' });
      });
    })
  );
});

// 4. MƏLUMAT VƏ SİNXRONİZASİYA (MESSAGES)
self.addEventListener('message', (event) => {
  if (event.data && event.data.action === 'skipWaiting') {
    self.skipWaiting();
  }
});

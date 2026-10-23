// CarboxMol Bioinformatika Klubu - Progressive Web App (PWA) və Canlı Avto-Sinxronizasiya Mühərriki

let deferredInstallPrompt = null;
let swRegistration = null;

// 1. SERVICE WORKER QEYDİYYATI VƏ AVTOMATİK SİNXRONİZASİYA
function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register('./sw.js', { scope: './' })
        .then((registration) => {
          swRegistration = registration;
          console.log('[PWA] Service Worker aktivdir:', registration.scope);

          // Əgər internet varsa dərhal Service Worker yenilənməsini yoxla
          if (navigator.onLine) {
            registration.update().catch(() => {});
          }

          // Yeni versiya tapıldıqda
          registration.addEventListener('updatefound', () => {
            const newWorker = registration.installing;
            if (newWorker) {
              newWorker.addEventListener('statechange', () => {
                if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                  console.log('[PWA] Yeni versiya quraşdırıldı. Avtomatik sinxronlaşdırılır...');
                  newWorker.postMessage({ action: 'skipWaiting' });
                  if (typeof showToast === 'function') {
                    showToast('🔄 Tətbiqə ən son versiya avtomatik yüklənir...', 'info');
                  }
                }
              });
            }
          });
        })
        .catch((error) => {
          console.warn('[PWA] Service Worker qeydiyyat xətası:', error);
        });

      // Service Worker-dən birbaşa aktivləşmə siqnalı gəldikdə səhifəni yenilə
      navigator.serviceWorker.addEventListener('message', (event) => {
        if (event.data && event.data.action === 'SW_ACTIVATED') {
          console.log('[PWA] Yeni versiya aktivləşdi. Tətbiq ən son versiya ilə yenilənir...');
          setTimeout(() => {
            window.location.reload();
          }, 600);
        }
      });

      // Kontroller dəyişdikdə (Yeni Service Worker idarəetməni ələ aldıqda)
      let refreshing = false;
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        if (!refreshing) {
          refreshing = true;
          console.log('[PWA] Tətbiq yeni kontroller ilə yenilənir...');
          window.location.reload();
        }
      });
    });

    // Cihaz internetə qoşulduqda ən son yenilikləri dərhal çək
    window.addEventListener('online', () => {
      if (swRegistration) swRegistration.update().catch(() => {});
      checkAppVersionSync();
    });

    // İstifadəçi tətbiqə və ya brauzer tabına qayıtdıqda arxa fonda yoxla
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible' && navigator.onLine) {
        if (swRegistration) swRegistration.update().catch(() => {});
        checkAppVersionSync();
      }
    });

    // Hər 5 dəqiqədən bir arxa fonda avtomatik sinxronizasiya yoxlanışı
    setInterval(() => {
      if (navigator.onLine) {
        if (swRegistration) swRegistration.update().catch(() => {});
        checkAppVersionSync();
      }
    }, 5 * 60 * 1000);
  }
}

// 2. REAL-TIME VERSİYA VƏ CANLI SİNXRONİZASİYA YOXLANILIŞI
async function checkAppVersionSync(isManual = false) {
  if (!navigator.onLine) {
    if (isManual && typeof showToast === 'function') {
      showToast('Hazırda oflayn rejimdəsiniz. İnternet bərpa olunan kimi ən son yeniliklər avtomatik çəkiləcək.', 'info');
    }
    return;
  }

  try {
    const res = await fetch(`./version.json?_nocache=${Date.now()}`, {
      cache: 'no-store',
      headers: { 'Cache-Control': 'no-cache, no-store, must-revalidate' }
    });
    if (!res.ok) return;

    const remoteData = await res.json();
    const remoteId = remoteData.version + '_' + remoteData.build;
    const localId = localStorage.getItem('wcu_installed_pwa_version');

    if (localId && localId !== remoteId) {
      console.log(`[PWA Auto-Sync] Yeni versiya tapıldı: ${remoteId} (Cari: ${localId}). Avtomatik sinxronlaşdırılır...`);
      localStorage.setItem('wcu_installed_pwa_version', remoteId);

      // Keşləri təmizlə
      if ('caches' in window) {
        const cacheKeys = await caches.keys();
        await Promise.all(cacheKeys.map((k) => caches.delete(k)));
      }

      // Service Worker yenilə
      if ('serviceWorker' in navigator && swRegistration) {
        await swRegistration.update().catch(() => {});
      }

      if (typeof showToast === 'function') {
        showToast('🔄 Tətbiqə ən son yeniliklər sinxronlaşdırılır...', 'success');
      }

      setTimeout(() => {
        window.location.reload();
      }, 700);
    } else {
      localStorage.setItem('wcu_installed_pwa_version', remoteId);
      if (isManual && typeof showToast === 'function') {
        showToast('✅ Tətbiq artıq ən son versiyadadır və tam sinxrondur!', 'success');
      }
    }
  } catch (err) {
    console.warn('[PWA Auto-Sync] Versiya sorğusu xətası:', err);
  }
}
window.checkAppVersionSync = checkAppVersionSync;

// Əllə məcburi sinxronlaşdırma düyməsi funksiyası
async function forceSyncAppUpdates() {
  if (typeof showToast === 'function') {
    showToast('🔄 Ən son yeniliklər yoxlanılır...', 'info');
  }
  if ('serviceWorker' in navigator && swRegistration) {
    await swRegistration.update().catch(() => {});
  }
  await checkAppVersionSync(true);
}
window.forceSyncAppUpdates = forceSyncAppUpdates;

// 3. QURAŞDIRMA (INSTALL PROMPT) İDARƏ EDİLMƏSİ
function initPwaInstallUI() {
  const installBtn = document.getElementById('pwaInstallBtn');
  const mobileInstallBtn = document.getElementById('mobilePwaInstallBtn');

  // Əgər tətbiq artıq standalone (quraşdırılmış) rejimdə açılıbsa
  const isStandalone = window.matchMedia('(display-mode: standalone)').matches || 
                       window.navigator.standalone === true;

  if (isStandalone) {
    if (installBtn) installBtn.classList.add('hidden');
    if (mobileInstallBtn) mobileInstallBtn.classList.add('hidden');
    return;
  }

  // Brauzerin native quraşdırma hadisəsini yaxala
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredInstallPrompt = e;

    // Düymələri görünən et
    if (installBtn) {
      installBtn.classList.remove('hidden');
      installBtn.classList.add('flex');
    }
    if (mobileInstallBtn) {
      mobileInstallBtn.classList.remove('hidden');
      mobileInstallBtn.classList.add('flex');
    }
  });

  // Quraşdırma tamamlandıqda
  window.addEventListener('appinstalled', () => {
    console.log('[PWA] Tətbiq uğurla quraşdırıldı.');
    deferredInstallPrompt = null;
    if (installBtn) installBtn.classList.add('hidden');
    if (mobileInstallBtn) mobileInstallBtn.classList.add('hidden');
    if (typeof showToast === 'function') {
      showToast('🎉 Tətbiq uğurla cihazınıza quraşdırıldı!', 'success');
    }
  });

  // Düymə klikləri
  if (installBtn) {
    installBtn.addEventListener('click', handleInstallClick);
  }
  if (mobileInstallBtn) {
    mobileInstallBtn.addEventListener('click', handleInstallClick);
  }

  // iOS Safari üçün yoxlanış
  const isIos = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  if (isIos && !isStandalone) {
    if (installBtn) {
      installBtn.classList.remove('hidden');
      installBtn.classList.add('flex');
    }
    if (mobileInstallBtn) {
      mobileInstallBtn.classList.remove('hidden');
      mobileInstallBtn.classList.add('flex');
    }
  }
}

async function handleInstallClick() {
  const isIos = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

  if (deferredInstallPrompt) {
    deferredInstallPrompt.prompt();
    const { outcome } = await deferredInstallPrompt.userChoice;
    console.log(`[PWA] İstifadəçi seçimi: ${outcome}`);
    if (outcome === 'accepted') {
      deferredInstallPrompt = null;
    }
  } else if (isIos) {
    openIosInstallModal();
  } else {
    // Standart masaüstü / mobil məlumat
    if (typeof showToast === 'function') {
      showToast('Tətbiqi quraşdırmaq üçün brauzerin ünvan sətrindəki ⊕ və ya menyudan "Quraşdır" seçin.', 'info');
    }
  }
}
window.handleInstallClick = handleInstallClick;

function openIosInstallModal() {
  const modal = document.getElementById('iosInstallModal');
  if (modal) modal.classList.remove('hidden');
}
window.openIosInstallModal = openIosInstallModal;

function closeIosInstallModal() {
  const modal = document.getElementById('iosInstallModal');
  if (modal) modal.classList.add('hidden');
}
window.closeIosInstallModal = closeIosInstallModal;

// 4. ŞƏBƏKƏ STATUSU VƏ OFLAYN REJİMİN İDARƏ EDİLMƏSİ
function initNetworkStatus() {
  updateNetworkUI(navigator.onLine);

  window.addEventListener('online', () => {
    updateNetworkUI(true);
    if (typeof showToast === 'function') {
      showToast('🟢 İnternet bağlantısı bərpa olundu. Sistem onlayndır.', 'success');
    }
    // Oflayn saxlanılmış növbəni sinxronlaşdır
    syncOfflineQueue();
    checkAppVersionSync();
  });

  window.addEventListener('offline', () => {
    updateNetworkUI(false);
    if (typeof showToast === 'function') {
      showToast('📡 Oflayn rejim aktivdir. Tətbiq internet olmadan tam funksional işləyir.', 'warning');
    }
  });
}

function updateNetworkUI(isOnline) {
  const banner = document.getElementById('offlineBanner');
  if (isOnline) {
    if (banner) banner.classList.add('hidden');
  } else {
    if (banner) banner.classList.remove('hidden');
  }
}

function dismissOfflineBanner() {
  const banner = document.getElementById('offlineBanner');
  if (banner) banner.classList.add('hidden');
}
window.dismissOfflineBanner = dismissOfflineBanner;

// 5. OFLAYN NÖVBƏ (OFFLINE QUEUE) VƏ AVTO-SİNXRONİZASİYA
function addToOfflineQueue(item) {
  try {
    const queue = JSON.parse(localStorage.getItem('wcu_offline_sync_queue') || '[]');
    queue.push({
      id: item.id || 'queue-' + Date.now(),
      type: item.type || 'application',
      data: item.data,
      timestamp: new Date().toISOString()
    });
    localStorage.setItem('wcu_offline_sync_queue', JSON.stringify(queue));
    console.log('[PWA] Məlumat oflayn növbəyə əlavə edildi:', item);
  } catch (err) {
    console.error('[PWA] Oflayn növbəyə yazılarkən xəta:', err);
  }
}
window.addToOfflineQueue = addToOfflineQueue;

async function syncOfflineQueue() {
  if (!navigator.onLine) return;

  try {
    const queue = JSON.parse(localStorage.getItem('wcu_offline_sync_queue') || '[]');
    if (queue.length === 0) return;

    console.log(`[PWA] ${queue.length} oflayn element sinxronlaşdırılır...`);

    const remaining = [];
    let successCount = 0;

    for (const item of queue) {
      if (item.type === 'application') {
        try {
          const res = await fetch("https://formsubmit.co/ajax/suleyman.hacizade.232bioing@wcu.edu.az", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
            },
            body: JSON.stringify(item.data)
          });
          if (res.ok) {
            successCount++;
          } else {
            remaining.push(item);
          }
        } catch (e) {
          remaining.push(item);
        }
      } else {
        remaining.push(item);
      }
    }

    localStorage.setItem('wcu_offline_sync_queue', JSON.stringify(remaining));

    if (successCount > 0 && typeof showToast === 'function') {
      showToast(`🔄 ${successCount} ədəd oflayn müraciət Sədrə (suleyman.hacizade.232bioing@wcu.edu.az) uğurla sinxronlaşdırıldı!`, 'success');
    }
  } catch (err) {
    console.warn('[PWA] Sinxronizasiya xətası:', err);
  }
}
window.syncOfflineQueue = syncOfflineQueue;

// İlkin işə salma
registerServiceWorker();
document.addEventListener('DOMContentLoaded', () => {
  initPwaInstallUI();
  initNetworkStatus();
  // Səhifə açılanda dərhal versiyanı və oflayn növbəni yoxla
  if (navigator.onLine) {
    syncOfflineQueue();
    checkAppVersionSync();
  }
});

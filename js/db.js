// CarboxMol Bioinformatika Klubu - Avtomatlaşdırılmış Çoxqatlı Tələbə Verilənlər Bazası (IndexedDB & Multi-Layer Persistent Database Engine)
// Hər bir üzv qeydiyyatdan keçdikdə onun üçün fərdi databaza qeydi yaranır və daimi yaddaşda qorunur.

const DB_NAME = "CarboxMol_Bioinformatics_Database";
const DB_VERSION = 4;

class ClubDatabaseEngine {
  constructor() {
    this.db = null;
    this.isReady = false;
    this.initPromise = null;
  }

  async init() {
    if (this.initPromise) return this.initPromise;

    this.initPromise = new Promise((resolve) => {
      // 1. Brauzerdən qalıcı və silinməyən yaddaş tələb et (Persistent Storage API)
      if (typeof navigator !== "undefined" && navigator.storage && navigator.storage.persist) {
        navigator.storage.persist().then((persistent) => {
          console.log(`[ClubDatabase] Qalıcı Yaddaş Təminatı: ${persistent ? 'Aktivdir (Davamlı Baza)' : 'Standart'}`);
        }).catch((err) => {
          console.warn("[ClubDatabase] Storage persist bildirişi:", err);
        });
      }

      if (typeof window === "undefined" || !window.indexedDB) {
        console.warn("[ClubDatabase] IndexedDB mövcud deyil, LocalStorage ehtiyat bazası istifadə edilir.");
        this.isReady = true;
        resolve(this);
        return;
      }

      const request = indexedDB.open(DB_NAME, DB_VERSION);

      request.onupgradeneeded = (event) => {
        const db = event.target.result;

        // 1. Üzvlər Cədvəli (Members Table)
        if (!db.objectStoreNames.contains("members")) {
          const memberStore = db.createObjectStore("members", { keyPath: "id" });
          memberStore.createIndex("username", "username", { unique: false });
          memberStore.createIndex("email", "email", { unique: false });
        }

        // 2. Müraciətlər Cədvəli (Applications Table)
        if (!db.objectStoreNames.contains("applications")) {
          const appStore = db.createObjectStore("applications", { keyPath: "id" });
          appStore.createIndex("email", "email", { unique: false });
          appStore.createIndex("username", "username", { unique: false });
        }

        // 3. Tələbə Laboratoriya Həlləri (Submissions Table)
        if (!db.objectStoreNames.contains("submissions")) {
          const subStore = db.createObjectStore("submissions", { keyPath: "id" });
          subStore.createIndex("memberId", "memberId", { unique: false });
          subStore.createIndex("taskId", "taskId", { unique: false });
        }

        // 4. Laboratoriya Qeydləri və Məqalələr (Notes Table)
        if (!db.objectStoreNames.contains("notes")) {
          const noteStore = db.createObjectStore("notes", { keyPath: "id" });
          noteStore.createIndex("memberId", "memberId", { unique: false });
          noteStore.createIndex("username", "username", { unique: false });
        }

        // 5. Təhlükəsizlik və DDoS / Giriş Audit Jurnalı (Security Logs)
        if (!db.objectStoreNames.contains("security_logs")) {
          const secStore = db.createObjectStore("security_logs", { keyPath: "id", autoIncrement: true });
          secStore.createIndex("timestamp", "timestamp", { unique: false });
          secStore.createIndex("action", "action", { unique: false });
        }

        // 6. Dərs və Görüş Qeydləri (Recordings Table - Blobs & Metadata)
        if (!db.objectStoreNames.contains("recordings")) {
          const recStore = db.createObjectStore("recordings", { keyPath: "id" });
          recStore.createIndex("timestamp", "timestamp", { unique: false });
          recStore.createIndex("type", "type", { unique: false });
          recStore.createIndex("roomId", "roomId", { unique: false });
        }

        // 7. Ədalətli Görüşlər və Rezervasiyalar (Scheduled & Live Meetings)
        if (!db.objectStoreNames.contains("meetings")) {
          const meetStore = db.createObjectStore("meetings", { keyPath: "id" });
          meetStore.createIndex("status", "status", { unique: false });
          meetStore.createIndex("scheduledTime", "scheduledTime", { unique: false });
          meetStore.createIndex("roomId", "roomId", { unique: false });
        }
      };

      request.onsuccess = async (event) => {
        this.db = event.target.result;
        this.isReady = true;
        console.log("[ClubDatabase] IndexedDB Verilənlər Bazası uğurla aktivləşdirildi.");
        await this.syncWithLocalStorage();
        resolve(this);
      };

      request.onerror = (event) => {
        console.warn("[ClubDatabase] IndexedDB qoşulma xətası:", event.target.error);
        this.isReady = true;
        resolve(this);
      };
    });

    return this.initPromise;
  }

  // IndexedDB və LocalStorage arasında avtomatik iki-tərəfli sinxronizasiya
  async syncWithLocalStorage() {
    if (!this.db) return;

    try {
      // 1. LocalStorage-dan cari məlumatları götür
      const localData = typeof getClubData === "function" ? getClubData() : null;
      if (!localData) return;

      const tx = this.db.transaction(["members", "applications", "notes"], "readwrite");
      const memberStore = tx.objectStore("members");
      const appStore = tx.objectStore("applications");
      const noteStore = tx.objectStore("notes");

      // LocalStorage-da olan üzvləri IndexedDB-yə yaz
      if (Array.isArray(localData.members)) {
        for (const mem of localData.members) {
          if (mem && mem.id) {
            memberStore.put(mem);
          }
        }
      }

      // LocalStorage-da olan müraciətləri IndexedDB-yə yaz
      if (Array.isArray(localData.applications)) {
        for (const app of localData.applications) {
          if (app && app.id) {
            appStore.put(app);
          }
        }
      }

      // Qeydləri IndexedDB-yə yaz
      if (Array.isArray(localData.memberNotes)) {
        for (const note of localData.memberNotes) {
          if (note && note.id) {
            noteStore.put(note);
          }
        }
      }

      // 2. Silinmiş Namizəd və Üzvlərin (Tombstone IDs) təhlükəsiz yoxlanışı və təmizlənməsi
      const deletedMemberIds = new Set(localData.deletedMemberIds || []);
      const deletedAppIds = new Set(localData.deletedAppIds || []);

      // 3. Əgər IndexedDB-də olan amma LocalStorage-da olmayan üzv varsa, LocalStorage-a qaytar (Silinənlər istisna)
      const getAllRequest = memberStore.getAll();
      getAllRequest.onsuccess = () => {
        const dbMembers = getAllRequest.result || [];
        let updated = false;

        dbMembers.forEach((dbMem) => {
          if (!dbMem || !dbMem.id) return;
          // Əgər rəsmi silinmiş siyahıdadırsa, IndexedDB-dən də dərhal sil və bərpa etmə!
          if (deletedMemberIds.has(dbMem.id)) {
            try { memberStore.delete(dbMem.id); } catch (e) {}
            return;
          }

          const localMem = (localData.members || []).find(
            (m) => m.id === dbMem.id || (m.username && m.username.toLowerCase() === (dbMem.username || "").toLowerCase())
          );
          if (!localMem) {
            localData.members.unshift(dbMem);
            updated = true;
          } else {
            // Status qorunması: Əgər local "Aktiv"dirsə, IndexedDB-ni də aktiv et
            if (localMem.status === "Aktiv" && dbMem.status !== "Aktiv") {
              dbMem.status = "Aktiv";
              try { memberStore.put(dbMem); } catch (e) {}
            }
            if (dbMem.photo && !localMem.photo) {
              localMem.photo = dbMem.photo;
              updated = true;
            }
          }
        });

        // Həmçinin müraciətlər cədvəlini də yoxla (Silinənlər istisna, təsdiqlənmiş status qorunur)
        const getAllAppsRequest = appStore.getAll();
        getAllAppsRequest.onsuccess = () => {
          const dbApps = getAllAppsRequest.result || [];
          dbApps.forEach((dbApp) => {
            if (!dbApp || !dbApp.id) return;
            // Əgər rəsmi silinmişdirsə, IndexedDB-dən də dərhal sil və bərpa etmə!
            if (deletedAppIds.has(dbApp.id)) {
              try { appStore.delete(dbApp.id); } catch (e) {}
              return;
            }

            const localApp = (localData.applications || []).find(
              (a) => a.id === dbApp.id || (a.username && a.username.toLowerCase() === (dbApp.username || "").toLowerCase())
            );
            if (!localApp) {
              localData.applications.unshift(dbApp);
              updated = true;
            } else {
              // Status qorunması: Əgər local "Təsdiqləndi"dirsə, IndexedDB-ni də yenilə
              if (localApp.status === "Təsdiqləndi" && dbApp.status !== "Təsdiqləndi") {
                dbApp.status = "Təsdiqləndi";
                try { appStore.put(dbApp); } catch (e) {}
              }
              if (dbApp.photo && !localApp.photo) {
                localApp.photo = dbApp.photo;
                updated = true;
              }
            }
          });

          if (updated && typeof saveClubData === "function") {
            saveClubData(localData);
            console.log("[ClubDatabase] Məlumatlar sinxronlaşdırıldı (Silinənlər nəzərə alındı və təsdiq statusları qorundu).");
          }
        };
      };
    } catch (err) {
      console.warn("[ClubDatabase] Sinxronizasiya bildirişi:", err);
    }
  }

  // Müraciət qeydini birbaşa IndexedDB-də yenilə və ya saxla
  async saveApplication(app) {
    if (!app || !app.id) return;
    if (this.db && this.db.objectStoreNames.contains("applications")) {
      try {
        const tx = this.db.transaction(["applications"], "readwrite");
        tx.objectStore("applications").put(app);
      } catch (e) {
        console.warn("[ClubDatabase] saveApplication IndexedDB xətası:", e);
      }
    }
  }


  // Yeni üzv üçün fərdi databaza qeydini yarat və saxla
  async provisionMember(member) {
    if (!member || !member.id) return;

    // 1. IndexedDB-də saxla (şəkilin silinməməsini zəmanətə al)
    if (this.db) {
      try {
        const tx = this.db.transaction(["members"], "readwrite");
        const store = tx.objectStore("members");
        const getReq = store.get(member.id);
        getReq.onsuccess = () => {
          const existing = getReq.result;
          const photoToSave = member.photo || (existing ? existing.photo : "") || "";
          store.put({ ...member, photo: photoToSave });
        };
      } catch (e) {
        console.warn("[ClubDatabase] provisionMember IndexedDB xətası:", e);
      }
    }

    // 2. LocalStorage massivində saxla
    if (typeof getClubData === "function" && typeof saveClubData === "function") {
      const data = getClubData();
      data.members = data.members || [];
      const idx = data.members.findIndex(
        (m) => m.id === member.id || (m.username && m.username.toLowerCase() === (member.username || "").toLowerCase())
      );
      if (idx === -1) {
        data.members.unshift(member);
      } else {
        data.members[idx] = { ...data.members[idx], ...member };
      }
      saveClubData(data);
    }

    console.log(`[ClubDatabase] Üzv @${member.username} üçün fərdi verilənlər bazası təmin edildi.`);
  }

  // Üzvü axtar (ID, username və ya email üzrə)
  async getMember(query) {
    if (!query) return null;
    const cleanQ = query.trim().toLowerCase().replace(/^@/, "");

    // Əvvəlcə LocalStorage-da axtar
    if (typeof getClubData === "function") {
      const data = getClubData();
      const found = (data.members || []).find(
        (m) =>
          m.id === cleanQ ||
          (m.username && m.username.toLowerCase() === cleanQ) ||
          (m.email && m.email.toLowerCase() === cleanQ)
      );
      if (found) return found;
    }

    // Əgər LocalStorage-da tapılmadısa, IndexedDB-dən oxu
    if (this.db) {
      return new Promise((resolve) => {
        try {
          const tx = this.db.transaction(["members"], "readonly");
          const store = tx.objectStore("members");
          const req = store.getAll();
          req.onsuccess = () => {
            const all = req.result || [];
            const match = all.find(
              (m) =>
                m.id === cleanQ ||
                (m.username && m.username.toLowerCase() === cleanQ) ||
                (m.email && m.email.toLowerCase() === cleanQ)
            );
            resolve(match || null);
          };
          req.onerror = () => resolve(null);
        } catch (e) {
          resolve(null);
        }
      });
    }

    return null;
  }

  // Təhlükəsizlik audit hadisəsini qeyd et
  async logSecurityEvent(eventData) {
    if (!this.db) return;
    try {
      const tx = this.db.transaction(["security_logs"], "readwrite");
      const store = tx.objectStore("security_logs");
      store.add({
        ...eventData,
        timestamp: Date.now(),
        dateFormatted: new Date().toISOString()
      });
    } catch (e) {
      // səssiz
    }
  }

  // Təhlükəsizlik audit qeydlərini oxu
  async getSecurityLogs(limit = 100) {
    if (!this.db || !this.db.objectStoreNames.contains("security_logs")) return [];
    return new Promise((resolve) => {
      try {
        const tx = this.db.transaction(["security_logs"], "readonly");
        const req = tx.objectStore("security_logs").getAll();
        req.onsuccess = () => {
          const logs = req.result || [];
          logs.sort((a, b) => b.timestamp - a.timestamp);
          resolve(logs.slice(0, limit));
        };
        req.onerror = () => resolve([]);
      } catch (e) {
        resolve([]);
      }
    });
  }


  // Üzvü IndexedDB-dən sil
  async deleteMember(memberId) {
    if (!memberId || !this.db) return;
    try {
      const tx = this.db.transaction(["members"], "readwrite");
      tx.objectStore("members").delete(memberId);
      console.log(`[ClubDatabase] Üzv ${memberId} IndexedDB bazasından silindi.`);
    } catch (e) {
      console.warn("[ClubDatabase] deleteMember IndexedDB xətası:", e);
    }
  }

  // Müraciəti IndexedDB-dən sil
  async deleteApplication(appId) {
    if (!appId || !this.db) return;
    try {
      const tx = this.db.transaction(["applications"], "readwrite");
      tx.objectStore("applications").delete(appId);
      console.log(`[ClubDatabase] Müraciət ${appId} IndexedDB bazasından silindi.`);
    } catch (e) {
      console.warn("[ClubDatabase] deleteApplication IndexedDB xətası:", e);
    }
  }

  // 6. Dərs Qeydləri (Recordings) Saxlama və Geri Oxuma
  async saveRecording(meta, blob = null) {
    if (!meta || !meta.id) return;

    // 1. IndexedDB-də blob ilə birgə saxla (Limitsiz qalıcı binar yaddaş)
    if (this.db && this.db.objectStoreNames.contains("recordings")) {
      try {
        const tx = this.db.transaction(["recordings"], "readwrite");
        const store = tx.objectStore("recordings");
        store.put({ ...meta, blob: blob || null });
      } catch (e) {
        console.warn("[ClubDatabase] saveRecording IndexedDB xətası:", e);
      }
    }

    // 2. LocalStorage-da yalnız yüngül metadata saxla (blob olmadan)
    if (typeof getClubData === "function" && typeof saveClubData === "function") {
      const data = getClubData();
      data.recordings = data.recordings || [];
      const cleanMeta = { ...meta };
      delete cleanMeta.blob; // LocalStorage 5MB limitini qorumaq üçün

      const idx = data.recordings.findIndex(r => r.id === meta.id);
      if (idx === -1) {
        data.recordings.unshift(cleanMeta);
      } else {
        data.recordings[idx] = { ...data.recordings[idx], ...cleanMeta };
      }
      saveClubData(data);
    }

    if (window.SyncEngine) {
      window.SyncEngine.broadcast("RECORDING_SAVED", { recordingId: meta.id });
    }
    console.log(`[ClubDatabase] Dərs qeydi "${meta.title}" IndexedDB və arxiv bazasında qorundu.`);
  }

  async getRecordingBlob(recordingId) {
    if (!this.db || !this.db.objectStoreNames.contains("recordings")) return null;
    return new Promise((resolve) => {
      try {
        const tx = this.db.transaction(["recordings"], "readonly");
        const req = tx.objectStore("recordings").get(recordingId);
        req.onsuccess = () => {
          const item = req.result;
          resolve(item && item.blob ? item.blob : null);
        };
        req.onerror = () => resolve(null);
      } catch (e) {
        resolve(null);
      }
    });
  }

  async deleteRecording(recordingId) {
    if (!recordingId) return;
    if (this.db && this.db.objectStoreNames.contains("recordings")) {
      try {
        const tx = this.db.transaction(["recordings"], "readwrite");
        tx.objectStore("recordings").delete(recordingId);
      } catch (e) {}
    }
    if (typeof getClubData === "function" && typeof saveClubData === "function") {
      const data = getClubData();
      data.recordings = (data.recordings || []).filter(r => r.id !== recordingId);
      saveClubData(data);
    }
    if (window.SyncEngine) {
      window.SyncEngine.broadcast("RECORDING_DELETED", { recordingId });
    }
  }

  // 7. Ədalətli Görüşlər (Meetings) Saxlama və Geri Oxuma
  async saveMeeting(meeting) {
    if (!meeting || !meeting.id) return;
    if (this.db && this.db.objectStoreNames.contains("meetings")) {
      try {
        const tx = this.db.transaction(["meetings"], "readwrite");
        tx.objectStore("meetings").put(meeting);
      } catch (e) {}
    }
    if (typeof getClubData === "function" && typeof saveClubData === "function") {
      const data = getClubData();
      data.meetings = data.meetings || [];
      const idx = data.meetings.findIndex(m => m.id === meeting.id);
      if (idx === -1) {
        data.meetings.unshift(meeting);
      } else {
        data.meetings[idx] = { ...data.meetings[idx], ...meeting };
      }
      saveClubData(data);
    }
    if (window.SyncEngine) {
      window.SyncEngine.broadcast("MEETING_SAVED", { meetingId: meeting.id });
    }
  }

  async deleteMeeting(meetingId) {
    if (!meetingId) return;
    if (this.db && this.db.objectStoreNames.contains("meetings")) {
      try {
        const tx = this.db.transaction(["meetings"], "readwrite");
        tx.objectStore("meetings").delete(meetingId);
      } catch (e) {}
    }
    if (typeof getClubData === "function" && typeof saveClubData === "function") {
      const data = getClubData();
      data.meetings = (data.meetings || []).filter(m => m.id !== meetingId);
      saveClubData(data);
    }
    if (window.SyncEngine) {
      window.SyncEngine.broadcast("MEETING_DELETED", { meetingId });
    }
  }

  // Tam verilənlər bazasının JSON nüsxəsini çıxart (Export / Backup)
  exportBackup() {
    if (typeof getClubData === "function") {
      const data = getClubData();
      return JSON.stringify(data, null, 2);
    }
    return "{}";
  }
}

// Qlobal obyekt kimi qeydiyyatdan keçir
window.ClubDatabase = new ClubDatabaseEngine();
document.addEventListener("DOMContentLoaded", () => {
  window.ClubDatabase.init();
});

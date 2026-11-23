// CarboxMol Bioinformatika Klubu - Əsas İdarəetmə və Naviqasiya Mühərriki

// ==========================================
// 1. SƏDR (PRESIDENT) AUTENTİFİKASİYASI
// ==========================================

function isPresidentLoggedIn() {
  const isFlag = localStorage.getItem("wcu_president_logged_in") === "true";
  if (!isFlag) return false;
  if (window.ClubSecurity && typeof window.ClubSecurity.verifySessionToken === "function") {
    const verified = window.ClubSecurity.verifySessionToken("president");
    if (!verified) {
      localStorage.removeItem("wcu_president_logged_in");
      localStorage.removeItem("wcu_president_username");
      return false;
    }
  }
  return true;
}
window.isPresidentLoggedIn = isPresidentLoggedIn;

function openPresidentLoginModal() {
  const modal = document.getElementById("presidentLoginModal");
  if (modal) {
    const userInput = document.getElementById("presidentLoginUsername") || document.getElementById("presidentLoginEmail");
    const passInput = document.getElementById("presidentLoginPassword");
    if (userInput) userInput.value = "";
    if (passInput) passInput.value = "";
    modal.classList.remove("hidden");
  }
}
window.openPresidentLoginModal = openPresidentLoginModal;

function closePresidentLoginModal() {
  const modal = document.getElementById("presidentLoginModal");
  if (modal) modal.classList.add("hidden");
}
window.closePresidentLoginModal = closePresidentLoginModal;

// Sədr şifrəsi açıq mətn kimi saxlanılmır — yalnız SHA-256 həşi müqayisə edilir.
const PRESIDENT_USERNAME = "suleimanhajizadeh";
const PRESIDENT_PASS_SHA256 = "a1fe8b3b43087f00365cd4d7fd164125ab4e309ea973b14316ac81049bca3da6";

async function sha256Hex(text) {
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(text));
  return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, "0")).join("");
}

async function handlePresidentLogin(e) {
  if (e) e.preventDefault();
  const userInput = document.getElementById("presidentLoginUsername") || document.getElementById("presidentLoginEmail");
  const passInput = document.getElementById("presidentLoginPassword");
  const username = (userInput ? userInput.value : "").trim();
  const pass = (passInput ? passInput.value : "").trim();

  // Red Team / Blue Team: Rate Limiting & Anti-Brute-Force
  if (window.ClubSecurity && typeof window.ClubSecurity.checkRateLimit === "function") {
    const rateCheck = window.ClubSecurity.checkRateLimit("president_login", {
      maxAttempts: 5,
      windowMs: 60000,
      lockoutMs: 180000
    });
    if (!rateCheck.allowed) {
      showToast(rateCheck.reason || "Həddən artıq uğursuz cəhd. Zəhmət olmasa bir qədər gözləyin.", "error");
      if (window.ClubSecurity.log) {
        window.ClubSecurity.log("PRESIDENT_LOGIN_LOCKED", { username }, "WARNING");
      }
      return;
    }
  }

  let passHash = "";
  try {
    passHash = await sha256Hex(pass);
  } catch (err) {
    showToast("Təhlükəsiz giriş yalnız HTTPS bağlantısında mümkündür.", "error");
    return;
  }

  if (username.toLowerCase() === PRESIDENT_USERNAME && passHash === PRESIDENT_PASS_SHA256) {
    if (window.ClubSecurity) {
      if (typeof window.ClubSecurity.recordAttempt === "function") {
        window.ClubSecurity.recordAttempt("president_login", true);
      }
      if (typeof window.ClubSecurity.createSessionToken === "function") {
        window.ClubSecurity.createSessionToken("president", "SuleimanHajizadeh");
      }
      if (typeof window.ClubSecurity.log === "function") {
        window.ClubSecurity.log("PRESIDENT_LOGIN_SUCCESS", { username: "SuleimanHajizadeh" }, "INFO");
      }
    }
    localStorage.setItem("wcu_president_logged_in", "true");
    localStorage.setItem("wcu_president_username", "SuleimanHajizadeh");
    updateAuthUI();
    closePresidentLoginModal();
    showToast("Xoş gəldiniz, Süleyman bəy! Sədr İdarəetmə Paneli aktivləşdirildi.", "success");
    navigateTo("president-portal");
  } else {
    if (window.ClubSecurity) {
      if (typeof window.ClubSecurity.recordAttempt === "function") {
        window.ClubSecurity.recordAttempt("president_login", false);
      }
      if (typeof window.ClubSecurity.log === "function") {
        window.ClubSecurity.log("PRESIDENT_LOGIN_FAIL", { username }, "WARNING");
      }
    }
    showToast("İstifadəçi adı və ya şifrə yanlışdır!", "error");
  }
}
window.handlePresidentLogin = handlePresidentLogin;

function logoutPresident() {
  localStorage.removeItem("wcu_president_logged_in");
  localStorage.removeItem("wcu_president_username");
  if (window.ClubSecurity && typeof window.ClubSecurity.clearSession === "function") {
    window.ClubSecurity.clearSession("president");
  }
  if (window.ClubSecurity && typeof window.ClubSecurity.log === "function") {
    window.ClubSecurity.log("PRESIDENT_LOGOUT", {}, "INFO");
  }
  updateAuthUI();
  showToast("Sədr hesabından çıxış edildi.", "info");
  window.location.hash = "home";
  navigateTo("home");
}
window.logoutPresident = logoutPresident;

// ==========================================
// 2. ÜZV (MEMBER) AUTENTİFİKASİYASI
// ==========================================

function getActiveMemberId() {
  const id = localStorage.getItem("wcu_active_member_id") || null;
  if (!id) return null;
  if (window.ClubSecurity && typeof window.ClubSecurity.verifySessionToken === "function") {
    const verified = window.ClubSecurity.verifySessionToken("member");
    if (!verified) {
      localStorage.removeItem("wcu_active_member_id");
      localStorage.removeItem("wcu_active_member");
      return null;
    }
  }
  return id;
}
window.getActiveMemberId = getActiveMemberId;

function getActiveMember() {
  const id = getActiveMemberId();
  if (!id) return null;
  const cleanId = String(id).toLowerCase().replace(/^@/, "");
  const data = getClubData();
  data.members = data.members || [];
  let found = data.members.find(m => 
    m.id === id || 
    (m.username && m.username.toLowerCase().replace(/^@/, "") === cleanId)
  ) || null;

  if (!found) {
    const raw = localStorage.getItem("wcu_active_member");
    if (raw) {
      try {
        found = JSON.parse(raw);
        if (found && !data.members.some(m => m.id === found.id)) {
          data.members.unshift(found);
          saveClubData(data);
        }
      } catch (e) {}
    }
  }
  return found;
}
window.getActiveMember = getActiveMember;

function isMemberLoggedIn() {
  return !!getActiveMember();
}
window.isMemberLoggedIn = isMemberLoggedIn;

function openMemberLoginModal() {
  const modal = document.getElementById("memberLoginModal");
  if (modal) {
    const u = document.getElementById("memberLoginUsername");
    const p = document.getElementById("memberLoginPassword");
    if (u) u.value = "";
    if (p) p.value = "";
    modal.classList.remove("hidden");
  }
}
window.openMemberLoginModal = openMemberLoginModal;

function closeMemberLoginModal() {
  const modal = document.getElementById("memberLoginModal");
  if (modal) modal.classList.add("hidden");
}
window.closeMemberLoginModal = closeMemberLoginModal;

// Canlı Bulud Şini (ntfy.sh) vasitəsilə təsdiqlənmiş üzvləri, müraciət qərarlarını və dossye yeniliklərini dərhal sinxronlaşdır
let _inFlightCloudSyncPromise = null;

function _normalizePhoneKey(val) {
  const digits = String(val || "").replace(/\D/g, "");
  if (digits.length < 9) return "";
  if (digits.startsWith("994") && digits.length >= 12) return digits.slice(3);
  if (digits.startsWith("0") && digits.length === 10) return digits.slice(1);
  return digits.slice(-9);
}

async function syncCloudApprovals(targetUser, options = {}) {
  if (typeof fetch !== "function" || (typeof navigator !== "undefined" && !navigator.onLine)) return false;
  if (_inFlightCloudSyncPromise) {
    return _inFlightCloudSyncPromise;
  }

  const timeoutMs = (options && options.timeoutMs) || 5500;

  _inFlightCloudSyncPromise = (async () => {
    let updated = false;
    const data = getClubData();
    data.members = data.members || [];
    data.applications = data.applications || [];
    data.approvedAppIds = data.approvedAppIds || [];
    data.approvedUsers = data.approvedUsers || [];
    data.rejectedAppIds = data.rejectedAppIds || [];
    data.pendingOverrideIds = data.pendingOverrideIds || [];

    // 1. Qlobal Rəsmi CDN Reyestri (data/members_registry.json — yalnız Sədrin təsdiqlədiyi rəsmi üzvlər)
    try {
      const basePath = (typeof window !== "undefined" && window.location && window.location.pathname)
        ? window.location.pathname.substring(0, window.location.pathname.lastIndexOf("/") + 1)
        : "";
      const regUrl = basePath + "data/members_registry.json?t=" + Date.now();

      const regRes = await fetch(regUrl, { cache: "no-store" }).catch(() => null);
      if (regRes && regRes.ok) {
        const regData = await regRes.json();
        if (regData && Array.isArray(regData.members)) {
          regData.members.forEach(regMem => {
            if (!regMem || !regMem.username) return;
            const u = regMem.username.toLowerCase().replace(/^@/, "").trim();
            if (data.pendingOverrideIds.includes(u) || data.rejectedAppIds.includes(u)) return;
            const targets = data.members.filter(m => m && m.username && m.username.toLowerCase().replace(/^@/, "").trim() === u);
            if (targets.length > 0) {
              targets.forEach(target => {
                if (target.status !== "Aktiv") { target.status = "Aktiv"; updated = true; }
                if (regMem.password && !target.password) { target.password = regMem.password; updated = true; }
                if (regMem.role && !target.role) { target.role = regMem.role; updated = true; }
                if (regMem.fullName && !target.fullName) { target.fullName = regMem.fullName; updated = true; }
                if (regMem.phone && !target.phone) { target.phone = regMem.phone; updated = true; }
              });
            } else {
              data.members.unshift(Object.assign({}, regMem, { status: "Aktiv" }));
              updated = true;
            }
          });
        }
        if (regData && Array.isArray(regData.applications)) {
          regData.applications.forEach(regApp => {
            if (!regApp || !regApp.username) return;
            const u = regApp.username.toLowerCase().replace(/^@/, "").trim();
            if (data.pendingOverrideIds.includes(regApp.id) || data.pendingOverrideIds.includes(u) || data.rejectedAppIds.includes(regApp.id)) return;
            const targets = data.applications.filter(a => a && a.username && a.username.toLowerCase().replace(/^@/, "").trim() === u);
            if (targets.length > 0) {
              targets.forEach(target => {
                if (target.status !== "Təsdiqləndi") { target.status = "Təsdiqləndi"; updated = true; }
                if (regApp.password && !target.password) { target.password = regApp.password; updated = true; }
                if (regApp.phone && !target.phone) { target.phone = regApp.phone; updated = true; }
                if (regApp.approvedAt && !target.approvedAt) target.approvedAt = regApp.approvedAt;
                if (regApp.approvedBy && !target.approvedBy) target.approvedBy = regApp.approvedBy;
              });
            } else {
              data.applications.unshift(Object.assign({}, regApp, { status: "Təsdiqləndi" }));
              updated = true;
            }
            if (regApp.id && !data.approvedAppIds.includes(regApp.id)) {
              data.approvedAppIds.push(regApp.id);
            }
            if (u && !data.approvedUsers.includes(u)) {
              data.approvedUsers.push(u);
            }
          });
        }
      }
    } catch (errReg) {
      console.warn("[CloudSync] members_registry fetch notice:", errReg);
    }

    // 2. Canlı ntfy Bulud Şini (ntfy.sh poll=1&since=all — keşsiz canlı sorğu)
    try {
      const controller = typeof AbortController !== "undefined" ? new AbortController() : null;
      const timeoutId = controller ? setTimeout(() => controller.abort(), timeoutMs) : null;
      const fetchOpts = { cache: "no-store" };
      if (controller) fetchOpts.signal = controller.signal;
      const res = await fetch("https://ntfy.sh/carboxmol_bioinfo_cloud_sync_v3_secure/json?poll=1&since=all", fetchOpts);
      if (timeoutId) clearTimeout(timeoutId);
      if (res && res.ok) {
        const text = await res.text();
        const lines = text.trim().split("\n").filter(Boolean);

        for (const line of lines) {
          try {
            const item = JSON.parse(line);
            let payload = null;

            if (item.attachment && item.attachment.url) {
              try {
                const attRes = await fetch(item.attachment.url, { cache: "no-store" });
                if (attRes.ok) payload = await attRes.json();
              } catch (errAtt) {}
            }

            if (!payload) {
              let msg = item.message;
              if (typeof msg === "string" && msg.trim().startsWith("{")) {
                try { msg = JSON.parse(msg); } catch (e) {}
              }
              if (msg && typeof msg === "object") payload = msg;
              else if (item && typeof item === "object" && item.action) payload = item;
            }

            if (!payload || typeof payload !== "object") continue;

            if (payload.action === "UPDATE_STATUS" && (payload.appId || (payload.application && payload.application.id) || payload.username) && payload.status) {
              const incomingApp = payload.application;
              const incomingMem = payload.member;
              const targetStatus = payload.status;
              const normUser = ((payload.username || (incomingApp && incomingApp.username) || (incomingMem && incomingMem.username) || "")).toLowerCase().replace(/^@/, "").trim();
              const normEmail = ((payload.email || (incomingApp && incomingApp.email) || (incomingMem && incomingMem.email) || "")).toLowerCase().trim();

              const matchedApps = data.applications.filter(a => {
                if (!a) return false;
                const aUser = (a.username || "").toLowerCase().replace(/^@/, "").trim();
                return (
                  (payload.appId && a.id === payload.appId) ||
                  (incomingApp && a.id && a.id === incomingApp.id) ||
                  (normUser && aUser === normUser) ||
                  ((!aUser || !normUser || aUser === normUser) && normEmail && a.email && a.email.toLowerCase().trim() === normEmail)
                );
              });

              let targetApp = matchedApps[0] || null;
              if (matchedApps.length > 0) {
                matchedApps.forEach(a => {
                  if (a.status !== targetStatus) {
                    a.status = targetStatus;
                    if (targetStatus === "Təsdiqləndi") {
                      a.approvedAt = (incomingApp && incomingApp.approvedAt) || new Date().toISOString().slice(0, 10);
                      a.approvedBy = (incomingApp && incomingApp.approvedBy) || "Süleyman Hacızadə (Klub Sədri)";
                    }
                    updated = true;
                  }
                  if (incomingApp && incomingApp.password && !a.password) { a.password = incomingApp.password; updated = true; }
                  if (incomingApp && incomingApp.phone && !a.phone) { a.phone = incomingApp.phone; updated = true; }
                });
              } else if (incomingApp && incomingApp.username) {
                const copyApp = Object.assign({}, incomingApp, { status: targetStatus });
                data.applications.unshift(copyApp);
                targetApp = copyApp;
                updated = true;
              }

              const appIdToTrack = (targetApp && targetApp.id) || payload.appId;
              if (targetStatus === "Təsdiqləndi") {
                if (appIdToTrack && !data.approvedAppIds.includes(appIdToTrack)) data.approvedAppIds.push(appIdToTrack);
                if (payload.appId && !data.approvedAppIds.includes(payload.appId)) data.approvedAppIds.push(payload.appId);
                if (normUser && !data.approvedUsers.includes(normUser)) data.approvedUsers.push(normUser);
                data.rejectedAppIds = data.rejectedAppIds.filter(x => x !== appIdToTrack && x !== payload.appId && x !== normUser);
                data.pendingOverrideIds = data.pendingOverrideIds.filter(x => x !== appIdToTrack && x !== payload.appId && x !== normUser);
              } else if (targetStatus === "Rədd edildi") {
                if (appIdToTrack && !data.rejectedAppIds.includes(appIdToTrack)) data.rejectedAppIds.push(appIdToTrack);
                if (normUser && !data.rejectedAppIds.includes(normUser)) data.rejectedAppIds.push(normUser);
                data.approvedAppIds = data.approvedAppIds.filter(x => x !== appIdToTrack && x !== payload.appId);
                data.approvedUsers = data.approvedUsers.filter(x => x !== normUser);
                data.pendingOverrideIds = data.pendingOverrideIds.filter(x => x !== appIdToTrack && x !== payload.appId && x !== normUser);
              } else if (targetStatus === "Gözləyir") {
                if (appIdToTrack && !data.pendingOverrideIds.includes(appIdToTrack)) data.pendingOverrideIds.push(appIdToTrack);
                if (normUser && !data.pendingOverrideIds.includes(normUser)) data.pendingOverrideIds.push(normUser);
                data.approvedAppIds = data.approvedAppIds.filter(x => x !== appIdToTrack && x !== payload.appId);
                data.approvedUsers = data.approvedUsers.filter(x => x !== normUser);
                data.rejectedAppIds = data.rejectedAppIds.filter(x => x !== appIdToTrack && x !== payload.appId && x !== normUser);
              }

              const matchedMems = data.members.filter(m => {
                if (!m) return false;
                const mUser = (m.username || "").toLowerCase().replace(/^@/, "").trim();
                return (
                  (payload.appId && m.id === payload.appId) ||
                  (incomingMem && incomingMem.id && m.id === incomingMem.id) ||
                  (targetApp && targetApp.memberId && m.id === targetApp.memberId) ||
                  (normUser && mUser === normUser) ||
                  ((!mUser || !normUser || mUser === normUser) && normEmail && m.email && m.email.toLowerCase().trim() === normEmail)
                );
              });

              const newMemStatus = (targetStatus === "Təsdiqləndi") ? "Aktiv" : targetStatus;
              if (matchedMems.length > 0) {
                matchedMems.forEach(m => {
                  if (m.status !== newMemStatus) {
                    m.status = newMemStatus;
                    updated = true;
                  }
                  if (incomingMem && incomingMem.password && !m.password) { m.password = incomingMem.password; updated = true; }
                  if (incomingMem && incomingMem.phone && !m.phone) { m.phone = incomingMem.phone; updated = true; }
                });
              } else if (incomingMem && incomingMem.username) {
                data.members.unshift(Object.assign({}, incomingMem, { status: newMemStatus }));
                updated = true;
              }
            } else if (payload.action === "UPDATE_MEMBER_DOSSIER" || payload.action === "MEMBER_PROFILE_UPDATED") {
              const updatedMem = payload.member;
              const updatedApp = payload.application;
              const normUser = ((payload.username || (updatedMem && updatedMem.username) || (updatedApp && updatedApp.username) || "")).toLowerCase().replace(/^@/, "").trim();
              const normEmail = (((updatedMem && updatedMem.email) || (updatedApp && updatedApp.email) || "")).toLowerCase().trim();

              if (updatedMem && updatedMem.username) {
                const mMatches = data.members.filter(m => {
                  if (!m) return false;
                  const mUser = (m.username || "").toLowerCase().replace(/^@/, "").trim();
                  return (updatedMem.id && m.id === updatedMem.id) || (normUser && mUser === normUser);
                });
                if (mMatches.length > 0) {
                  mMatches.forEach(m => {
                    const preservedPhoto = updatedMem.photo || m.photo || "";
                    Object.assign(m, updatedMem, { id: m.id, photo: preservedPhoto });
                    updated = true;
                  });
                } else {
                  data.members.unshift(Object.assign({}, updatedMem));
                  updated = true;
                }
                if (updatedMem.status === "Aktiv" && normUser) {
                  if (!data.approvedUsers.includes(normUser)) data.approvedUsers.push(normUser);
                  data.pendingOverrideIds = data.pendingOverrideIds.filter(x => x !== normUser);
                  data.rejectedAppIds = data.rejectedAppIds.filter(x => x !== normUser);
                }
              }

              if (updatedApp && (updatedApp.id || updatedApp.username)) {
                const aMatches = data.applications.filter(a => {
                  if (!a) return false;
                  const aUser = (a.username || "").toLowerCase().replace(/^@/, "").trim();
                  return (
                    (updatedApp.id && a.id === updatedApp.id) ||
                    (normUser && aUser === normUser) ||
                    ((!aUser || !normUser || aUser === normUser) && normEmail && a.email && a.email.toLowerCase().trim() === normEmail)
                  );
                });
                if (aMatches.length > 0) {
                  aMatches.forEach(a => {
                    const preservedPhoto = updatedApp.photo || a.photo || "";
                    Object.assign(a, updatedApp, { id: a.id, photo: preservedPhoto });
                    updated = true;
                  });
                } else {
                  data.applications.unshift(Object.assign({}, updatedApp));
                  updated = true;
                }
                const trackId = (aMatches[0] && aMatches[0].id) || updatedApp.id;
                if (updatedApp.status === "Təsdiqləndi") {
                  if (trackId && !data.approvedAppIds.includes(trackId)) data.approvedAppIds.push(trackId);
                  if (normUser && !data.approvedUsers.includes(normUser)) data.approvedUsers.push(normUser);
                  data.pendingOverrideIds = data.pendingOverrideIds.filter(x => x !== trackId && x !== normUser);
                  data.rejectedAppIds = data.rejectedAppIds.filter(x => x !== trackId && x !== normUser);
                } else if (updatedApp.status === "Rədd edildi") {
                  if (trackId && !data.rejectedAppIds.includes(trackId)) data.rejectedAppIds.push(trackId);
                  if (normUser && !data.rejectedAppIds.includes(normUser)) data.rejectedAppIds.push(normUser);
                  data.approvedAppIds = data.approvedAppIds.filter(x => x !== trackId);
                  data.approvedUsers = data.approvedUsers.filter(x => x !== normUser);
                }
              }
            } else if ((payload.action === "REGISTER_STUDENT" || payload.action === "REGISTER_MEMBER") && payload.application) {
              // QAYDA: Yeni qeydiyyat HEÇ VAXT avtomatik təsdiqlənmir — yalnız Sədrin əllə təsdiq etdikləri "Təsdiqləndi" olur!
              const app = Object.assign({}, payload.application);
              const normUser = (app.username || "").toLowerCase().replace(/^@/, "").trim();
              const normEmail = (app.email || "").toLowerCase().trim();
              const exists = data.applications.some(a =>
                a.id === app.id ||
                (normUser && a.username && a.username.toLowerCase().replace(/^@/, "").trim() === normUser) ||
                ((!a.username || !normUser) && normEmail && a.email && a.email.toLowerCase().trim() === normEmail)
              );
              if (!exists && !(data.deletedAppIds || []).includes(app.id)) {
                const alreadyApproved = data.approvedAppIds.includes(app.id) || (normUser && data.approvedUsers.includes(normUser));
                app.status = alreadyApproved ? "Təsdiqləndi" : "Gözləyir";
                data.applications.unshift(app);
                const memObj = payload.member ? Object.assign({}, payload.member) : {
                  id: app.memberId || ("mem-" + Date.now()),
                  fullName: app.fullName,
                  username: app.username,
                  email: app.email,
                  phone: app.phone || "",
                  photo: app.photo || "",
                  password: app.password || "",
                  role: "Klub Üzvü",
                  faculty: app.faculty || "",
                  major: app.major || "",
                  course: app.course || "",
                  registeredAt: app.dateApplied || new Date().toISOString().slice(0, 10),
                  status: alreadyApproved ? "Aktiv" : "Gözləyir",
                  customTasks: [],
                  notes: []
                };
                memObj.status = alreadyApproved ? "Aktiv" : "Gözləyir";
                const memExists = data.members.some(m =>
                  m.id === memObj.id ||
                  (normUser && m.username && m.username.toLowerCase().replace(/^@/, "").trim() === normUser)
                );
                if (!memExists) {
                  data.members.unshift(memObj);
                }
                updated = true;
              }
            }
          } catch (errLine) {}
        }
      }
    } catch (errSync) {
      console.warn("[CloudSync] Background sync notice:", errSync);
    }

    if (updated) {
      saveClubData(data);
      try {
        localStorage.setItem("carboxmol_approved_app_ids", JSON.stringify(data.approvedAppIds));
        localStorage.setItem("carboxmol_approved_users", JSON.stringify(data.approvedUsers));
        localStorage.setItem("carboxmol_rejected_app_ids", JSON.stringify(data.rejectedAppIds));
        localStorage.setItem("carboxmol_pending_override_ids", JSON.stringify(data.pendingOverrideIds));
      } catch (e) {}
      if (window.ClubDatabase) {
        data.members.forEach(m => window.ClubDatabase.provisionMember(m));
        data.applications.forEach(a => window.ClubDatabase.saveApplication(a));
      }
      if (window.PresidentPortal) {
        PresidentPortal.renderMetrics();
        PresidentPortal.renderApplicationsTable();
        if (PresidentPortal.renderMembersAccountsTable) PresidentPortal.renderMembersAccountsTable();
      }
      return true;
    }
    return false;
  })().finally(() => {
    _inFlightCloudSyncPromise = null;
  });

  return _inFlightCloudSyncPromise;
}
window.syncCloudApprovals = syncCloudApprovals;

async function handleMemberLogin(e) {
  if (e) e.preventDefault();

  const submittedForm = e && e.target && typeof e.target.querySelector === "function" ? e.target : null;
  const formUserInput = submittedForm ? submittedForm.querySelector('input[type="text"], input[id*="Username"]') : null;
  const formPassInput = submittedForm ? submittedForm.querySelector('input[type="password"], input[id*="Password"]') : null;

  const userInput = document.getElementById("memberLoginUsername");
  const passInput = document.getElementById("memberLoginPassword");
  const gwUserInput = document.getElementById("memberLoginUsernameGateway");
  const gwPassInput = document.getElementById("memberLoginPasswordGateway");

  let rawUser = ((formUserInput && formUserInput.value) || (userInput && userInput.value) || (gwUserInput && gwUserInput.value) || "").trim();
  let rawPass = ((formPassInput && formPassInput.value) || (passInput && passInput.value) || (gwPassInput && gwPassInput.value) || "").trim();

  const username = rawUser.toLowerCase().replace(/^@/, "");
  const password = rawPass;

  if (!username || !password) {
    showToast("İstifadəçi adı və şifrənizi daxil edin.", "warning");
    return;
  }

  // Təhlükəsizlik və Anti-Brute-Force Dərəcə Məhdudlaşdırılması (Rate Limiting)
  if (window.ClubSecurity) {
    const rateCheck = window.ClubSecurity.checkRateLimit("member_login", {
      maxAttempts: 5,
      windowMs: 60000,
      lockoutMs: 60000
    });
    if (!rateCheck.allowed) {
      showToast(rateCheck.reason, "error");
      return;
    }
  }

  const data = getClubData();
  data.members = data.members || [];
  data.teachers = data.teachers || [];
  data.teacherApplications = data.teacherApplications || [];

  const cleanUser = username.toLowerCase().trim().replace(/^@/, "");
  const normalized = cleanUser
    .replace(/[\s_.-]/g, "")
    .replace(/ü/g, "u")
    .replace(/ə/g, "e")
    .replace(/ı/g, "i")
    .replace(/ç/g, "c")
    .replace(/ş/g, "s")
    .replace(/ğ/g, "g");

  const matchTeacher = (t) => {
    if (!t) return false;
    const tUser = (t.username || "").toLowerCase().replace(/^@/, "");
    const tNormUser = tUser.replace(/[\s_.-]/g, "").replace(/ü/g, "u").replace(/ə/g, "e").replace(/ı/g, "i").replace(/ç/g, "c").replace(/ş/g, "s").replace(/ğ/g, "g");
    const tEmail = (t.email || "").toLowerCase();
    const tName = (t.fullName || "").toLowerCase();
    const tNormName = tName.replace(/[\s_.-]/g, "").replace(/ü/g, "u").replace(/ə/g, "e").replace(/ı/g, "i").replace(/ç/g, "c").replace(/ş/g, "s").replace(/ğ/g, "g");
    const tPhone = (t.phone || "").replace(/[\s\-\(\)\+]/g, "");
    const inPhone = cleanUser.replace(/[\s\-\(\)\+]/g, "");

    return tUser === cleanUser ||
           tNormUser === normalized ||
           tEmail === cleanUser ||
           tName === cleanUser ||
           tNormName === normalized ||
           (inPhone.length >= 7 && tPhone.includes(inPhone)) ||
           (cleanUser.length >= 4 && (tUser.includes(cleanUser) || tNormUser.includes(normalized) || tName.includes(cleanUser) || tNormName.includes(normalized)));
  };

  // 1. İNTELLEKTUAL ROL YÖNLƏNDİRMƏSİ: Əgər bu istifadəçi Müəllim/Mentor bazasındadırsa,
  // onu tələbə panelinə deyil, dərhal Akademik Müəllim Panelinə yönləndir!
  const teacher = (data.teachers || []).find(matchTeacher) || (data.teacherApplications || []).find(matchTeacher);

  if (teacher) {
    if (teacher.password && teacher.password !== password) {
      if (window.ClubSecurity) {
        window.ClubSecurity.recordAttempt("member_login", false);
        window.ClubSecurity.log("LOGIN_FAIL_WRONG_PASSWORD", { username }, "WARNING");
      }
      showToast("Giriş şifrəsi yanlışdır!", "error");
      return;
    }
    if (teacher.status === "Gözləyir") {
      showToast(`Hörmətli ${teacher.fullName}, müəllim/mentor qeydiyyatınız qəbul edilib və hazırda Sədrin təsdiqini gözləyir. Sədr təsdiq etdikdən dərhal sonra Müəllim Paneliniz aktivləşəcək.`, "warning");
      return;
    }
    if (teacher.status === "Rədd edildi") {
      showToast(`Hörmətli ${teacher.fullName}, müəllim hesabınız klub rəhbərliyi tərəfindən deaktiv edilmişdir.`, "error");
      return;
    }
    // Avtomatik Müəllim Panelinə daxil et və yönləndir
    const targetTeacherId = teacher.id || teacher.teacherId || "teacher-sefanya";
    localStorage.setItem("wcu_active_teacher_id", targetTeacherId);
    if (window.ClubSecurity && typeof window.ClubSecurity.createSessionToken === "function") {
      window.ClubSecurity.createSessionToken("teacher", targetTeacherId);
    }
    if (typeof closeMemberLoginModal === "function") closeMemberLoginModal();
    updateAuthUI();
    showToast(`Xoş gəldiniz, ${teacher.fullName}! Akademik Mentor Panelinə yönləndirildiniz.`, "success");
    navigateTo("teacher-portal");
    return;
  }

  // Axtarış: username (@ ilə və ya olmadan, boşluq/altxətt toleransı ilə), email və ya telefon nömrəsi (0xx / +994xx) üzrə
  const cleanInputUser = username.toLowerCase().replace(/^@/, "").replace(/[\s_]/g, "");
  const inputPhoneKey = _normalizePhoneKey(username);
  const rawInputDigits = username.replace(/[\s\-\(\)\+]/g, "");

  const matchesIdentifier = (item) => {
    if (!item) return false;
    const u = (item.username || "").toLowerCase().replace(/^@/, "").trim();
    const eMail = (item.email || "").toLowerCase().trim();
    const pDigits = (item.phone || "").replace(/[\s\-\(\)\+]/g, "");
    const pKey = _normalizePhoneKey(item.phone);
    return (
      (u && u === username) ||
      (u && u.replace(/[\s_]/g, "") === cleanInputUser) ||
      (eMail && eMail === username) ||
      (pDigits && rawInputDigits.length >= 7 && pDigits === rawInputDigits) ||
      (pKey && inputPhoneKey && pKey === inputPhoneKey)
    );
  };

  const findBestRecord = (list, preferredStatus) => {
    const matches = (list || []).filter(matchesIdentifier);
    if (matches.length === 0) return null;
    return matches.find(x => x.status === preferredStatus) || matches[0];
  };

  let didCloudSync = false;
  const runCloudSyncOnce = async () => {
    if (didCloudSync) return;
    didCloudSync = true;
    await syncCloudApprovals(username, { timeoutMs: 5500 }).catch(() => {});
    const freshData = getClubData();
    data.members = freshData.members || [];
    data.applications = freshData.applications || [];
    data.approvedAppIds = freshData.approvedAppIds || [];
    data.approvedUsers = freshData.approvedUsers || [];
    data.rejectedAppIds = freshData.rejectedAppIds || [];
  };

  let member = findBestRecord(data.members, "Aktiv");

  // Əgər LocalStorage-da tapılmadısa, IndexedDB persistent bazadan bərpa cəhdi
  if (!member && window.ClubDatabase) {
    member = await window.ClubDatabase.getMember(username);
    if (member && !String(member.id || "").startsWith("app-")) {
      const exists = data.members.some(m => m.id === member.id || m.username === member.username);
      if (!exists) {
        data.members.unshift(member);
        saveClubData(data);
      }
    } else if (member && String(member.id || "").startsWith("app-")) {
      member = null;
    }
  }

  // Əgər aktiv üzv kimi tapılmadısa, müraciətlər siyahısından (applications) yoxla
  if (!member) {
    let app = findBestRecord(data.applications, "Təsdiqləndi");

    // Əgər lokalda Gözləyir statusundadırsa və ya tapılmadısa, Sədrin yeni təsdiqini buluddan canlı yoxla
    if (!app || app.status === "Gözləyir") {
      await runCloudSyncOnce();
      member = findBestRecord(data.members, "Aktiv");
      app = findBestRecord(data.applications, "Təsdiqləndi");
    }

    if (!member && app) {
      if (app.password && app.password !== password) {
        await runCloudSyncOnce();
        app = findBestRecord(data.applications, "Təsdiqləndi") || app;
      }
      if (app.password && app.password !== password) {
        if (window.ClubSecurity) {
          window.ClubSecurity.recordAttempt("member_login", false);
          window.ClubSecurity.log("LOGIN_FAIL_WRONG_PASSWORD", { username }, "WARNING");
        }
        showToast("Giriş şifrəsi yanlışdır!", "error");
        return;
      }
      if (app.status === "Rədd edildi" || (data.rejectedAppIds && data.rejectedAppIds.includes(app.id))) {
        showToast(`Hörmətli ${app.fullName}, müraciətiniz təsdiqlənməyib. Ətraflı məlumat üçün klub rəhbərliyi ilə əlaqə saxlayın.`, "error");
        return;
      }
      // YALNIZ Sədr tərəfindən təsdiqlənmiş üzvlər daxil ola bilər (Avtomatik təsdiq QADAĞANDIR!)
      if (app.status !== "Təsdiqləndi" && app.status !== "Qəbul Edildi") {
        showToast(`Hörmətli ${app.fullName}, qeydiyyatınız qəbul edilib və hazırda Klub Sədrinin təsdiqini gözləyir. Sədr təsdiq etdikdən sonra panelə rahat daxil ola bilərsiniz.`, "warning");
        return;
      }

      member = {
        id: app.memberId || ("mem-" + Date.now()),
        fullName: app.fullName,
        username: app.username || (app.email ? app.email.split("@")[0] : "user"),
        email: app.email,
        phone: app.phone || "",
        photo: app.photo || "",
        password: app.password,
        role: "Klub Üzvü",
        faculty: app.faculty,
        major: app.major,
        course: app.course,
        joinDate: new Date().toLocaleDateString('az-AZ'),
        registeredAt: app.dateApplied || new Date().toISOString().slice(0, 10),
        status: "Aktiv",
        skills: app.tools || ["Python", "Bioinformatika"],
        customTasks: [],
        notes: []
      };
      data.members.unshift(member);
      saveClubData(data);
      if (window.ClubDatabase) window.ClubDatabase.provisionMember(member);
    }
  }

  if (!member) {
    // Əgər üzv kimi tapılmadısa, müəllim və mentor bazasından da yoxla!
    const teacherFallback = (data.teachers || []).find(t => {
      if (!t) return false;
      const tUser = (t.username || "").toLowerCase().replace(/^@/, "");
      const tNormUser = tUser.replace(/[\s_.-]/g, "").replace(/ü/g, "u").replace(/ə/g, "e").replace(/ı/g, "i");
      const tEmail = (t.email || "").toLowerCase();
      const tName = (t.fullName || "").toLowerCase();
      const tNormName = tName.replace(/[\s_.-]/g, "").replace(/ü/g, "u").replace(/ə/g, "e").replace(/ı/g, "i");
      return tUser === cleanUser || tNormUser === normalized || tEmail === cleanUser || tName === cleanUser || tNormName === normalized || (cleanUser.length >= 4 && (tUser.includes(cleanUser) || tNormUser.includes(normalized) || tName.includes(cleanUser)));
    }) || (data.teacherApplications || []).find(a => {
      if (!a) return false;
      const aUser = (a.username || "").toLowerCase().replace(/^@/, "");
      const aNormUser = aUser.replace(/[\s_.-]/g, "").replace(/ü/g, "u").replace(/ə/g, "e").replace(/ı/g, "i");
      const aEmail = (a.email || "").toLowerCase();
      const aName = (a.fullName || "").toLowerCase();
      return aUser === cleanUser || aNormUser === normalized || aEmail === cleanUser || aName === cleanUser;
    });

    if (teacherFallback) {
      if (teacherFallback.password && teacherFallback.password !== password) {
        if (window.ClubSecurity) {
          window.ClubSecurity.recordAttempt("member_login", false);
          window.ClubSecurity.log("LOGIN_FAIL_WRONG_PASSWORD", { username }, "WARNING");
        }
        showToast("Müəllim hesabı aşkarlandı, lakin şifrə yanlışdır!", "error");
        return;
      }
      if (teacherFallback.status === "Gözləyir") {
        showToast(`Hörmətli ${teacherFallback.fullName}, müəllim qeydiyyatınız hələ Sədrin təsdiqini gözləyir.`, "warning");
        return;
      }
      // Avtomatik Müəllim Panelinə daxil et və yönləndir
      localStorage.setItem("wcu_active_teacher_id", teacherFallback.id || teacherFallback.teacherId || "teacher-sefanya");
      if (window.ClubSecurity && typeof window.ClubSecurity.createSessionToken === "function") {
        window.ClubSecurity.createSessionToken("teacher", teacherFallback.id || teacherFallback.teacherId || "teacher-sefanya");
      }
      if (typeof closeMemberLoginModal === "function") closeMemberLoginModal();
      showToast(`Xoş gəldiniz, ${teacherFallback.fullName}! Akademik Mentor Panelinə daxil oldunuz.`, "success");
      navigateTo("teacher-portal");
      return;
    }

    if (window.ClubSecurity) {
      window.ClubSecurity.recordAttempt("member_login", false);
      window.ClubSecurity.log("LOGIN_FAIL_USER_NOT_FOUND", { username }, "WARNING");
    }
    showToast("Bu istifadəçi adı ilə qeydiyyatdan keçmiş üzv və ya müəllim tapılmadı. Zəhmət olmasa qeydiyyat formasından müraciət edin.", "error");
    return;
  }

  // Şifrə lokalda uyğun gəlmirsə, Sədrin dossye redaktəsi ilə şifrəni yeniləmiş olub-olmadığını buluddan yoxla
  if (member.password !== password) {
    await runCloudSyncOnce();
    const refreshed = findBestRecord(data.members, "Aktiv");
    if (refreshed) member = refreshed;
  }

  if (member.password !== password) {
    if (window.ClubSecurity) {
      window.ClubSecurity.recordAttempt("member_login", false);
      window.ClubSecurity.log("LOGIN_FAIL_WRONG_PASSWORD", { username }, "WARNING");
    }
    showToast("Giriş şifrəsi yanlışdır!", "error");
    return;
  }

  if (member.status === "Rədd edildi" || (data.rejectedAppIds && data.rejectedAppIds.includes(member.id))) {
    showToast(`Hörmətli ${member.fullName}, müraciətiniz təsdiqlənməyib. Ətraflı məlumat üçün klub rəhbərliyi ilə əlaqə saxlayın.`, "error");
    return;
  }

  // Əgər lokalda "Gözləyir" statusundadırsa, Sədrin yeni təsdiqini buluddan canlı yoxla — avtomatik təsdiq ETMƏ!
  if (member.status === "Gözləyir") {
    await runCloudSyncOnce();
    const refreshedMem = findBestRecord(data.members, "Aktiv");
    if (refreshedMem) member = refreshedMem;
    const matchedApp = findBestRecord(data.applications, "Təsdiqləndi");
    if (member.status === "Gözləyir" && matchedApp && (matchedApp.status === "Təsdiqləndi" || matchedApp.status === "Qəbul Edildi")) {
      member.status = "Aktiv";
      saveClubData(data);
    }
    if (member.status === "Gözləyir") {
      showToast(`Hörmətli ${member.fullName}, qeydiyyatınız qəbul edilib və hazırda Klub Sədrinin təsdiqini gözləyir. Sədr təsdiq etdikdən sonra panelə rahat daxil ola bilərsiniz.`, "warning");
      return;
    }
  }

  // Uğurlu giriş - Brute force sayğacını sıfırla və bazanı təmin et
  if (window.ClubSecurity) {
    window.ClubSecurity.recordAttempt("member_login", true);
    if (typeof window.ClubSecurity.createSessionToken === "function") {
      window.ClubSecurity.createSessionToken("member", member.id);
    }
    window.ClubSecurity.log("LOGIN_SUCCESS", { username, memberId: member.id }, "INFO");
  }

  // Əgər istifadəçinin üzv profilində rolu Müəllim / Akademik Mentor kimi qeyd edilibsə, onu Müəllim Panelinə yönləndir
  if (member.role === "Akademik Mentor / Müəllim" || (member.role && (member.role.includes("Müəllim") || member.role.includes("Mentor")))) {
    localStorage.setItem("wcu_active_teacher_id", member.id);
    if (window.ClubSecurity && typeof window.ClubSecurity.createSessionToken === "function") {
      window.ClubSecurity.createSessionToken("teacher", member.id);
    }
    closeMemberLoginModal();
    updateAuthUI();
    showToast(`Xoş gəldiniz, ${member.fullName}! Akademik Mentor Panelinə daxil oldunuz.`, "success");
    navigateTo("teacher-portal");
    return;
  }

  // Tələbənin daimi yaddaşda itməməsi üçün aktiv üzv kimi saxla
  localStorage.setItem("wcu_active_member_id", member.id);
  localStorage.setItem("wcu_active_member", JSON.stringify(member));

  // IndexedDB daimi verilənlər bazasını avtomatik təmin et və yenilə
  if (window.ClubDatabase) {
    window.ClubDatabase.provisionMember(member);
  }

  closeMemberLoginModal();
  updateAuthUI();
  showToast(`Xoş gəldiniz, ${member.fullName}! Üzv paneliniz aktivləşdirildi.`, "success");
  navigateTo("members-portal");
}
window.handleMemberLogin = handleMemberLogin;

function logoutMember() {
  localStorage.removeItem("wcu_active_member_id");
  localStorage.removeItem("wcu_active_member");
  if (window.ClubSecurity && typeof window.ClubSecurity.clearSession === "function") {
    window.ClubSecurity.clearSession("member");
  }
  if (window.ClubSecurity && typeof window.ClubSecurity.log === "function") {
    window.ClubSecurity.log("MEMBER_LOGOUT", {}, "INFO");
  }
  updateAuthUI();
  showToast("Üzv hesabından çıxış edildi.", "info");
  navigateTo("members-portal");
}
window.logoutMember = logoutMember;

// ==========================================
// 2B. MÜƏLLİM / MENTOR GİRİŞ SİSTEMİ
// ==========================================

function getActiveTeacher() {
  const id = localStorage.getItem("wcu_active_teacher_id");
  if (!id) return null;
  if (window.ClubSecurity && typeof window.ClubSecurity.verifySessionToken === "function") {
    const verified = window.ClubSecurity.verifySessionToken("teacher");
    if (!verified) {
      localStorage.removeItem("wcu_active_teacher_id");
      return null;
    }
  }
  const data = typeof getClubData === "function" ? getClubData() : null;
  if (!data || !Array.isArray(data.teachers)) return null;
  return data.teachers.find(t => t.id === id || t.username === id) || null;
}
window.getActiveTeacher = getActiveTeacher;

function isTeacherLoggedIn() {
  const t = getActiveTeacher();
  return !!(t && (t.status === "Aktiv" || t.status === "Təsdiqləndi"));
}
window.isTeacherLoggedIn = isTeacherLoggedIn;

function openTeacherLoginModal() {
  const modal = document.getElementById("teacherLoginModal");
  if (modal) {
    const u = document.getElementById("teacherLoginUsername");
    const p = document.getElementById("teacherLoginPassword");
    if (u) u.value = "";
    if (p) p.value = "";
    modal.classList.remove("hidden");
    if (window.ClubSecurity) {
      window.ClubSecurity.registerFormRender("teacher_login_form");
    }
  }
}
window.openTeacherLoginModal = openTeacherLoginModal;

function closeTeacherLoginModal() {
  const modal = document.getElementById("teacherLoginModal");
  if (modal) modal.classList.add("hidden");
}
window.closeTeacherLoginModal = closeTeacherLoginModal;

function handleTeacherLogin(e) {
  if (e) e.preventDefault();

  const rawUser = (
    document.getElementById("teacherLoginUsername")?.value || 
    document.getElementById("teacherLoginUsernameGateway")?.value || 
    ""
  ).trim();
  const rawPass = (
    document.getElementById("teacherLoginPassword")?.value || 
    document.getElementById("teacherLoginPasswordGateway")?.value || 
    ""
  ).trim();
  const username = rawUser.toLowerCase().replace(/^@/, "");
  const password = rawPass;

  // Sync inputs across gateway and modal
  const u1 = document.getElementById("teacherLoginUsername");
  const u2 = document.getElementById("teacherLoginUsernameGateway");
  const p1 = document.getElementById("teacherLoginPassword");
  const p2 = document.getElementById("teacherLoginPasswordGateway");
  if (u1 && !u1.value) u1.value = rawUser;
  if (u2 && !u2.value) u2.value = rawUser;
  if (p1 && !p1.value) p1.value = rawPass;
  if (p2 && !p2.value) p2.value = rawPass;

  if (!username || !password) {
    showToast("İstifadəçi adı və şifrənizi daxil edin.", "warning");
    return;
  }

  // Anti-Bot: Honeypot yoxlanışı
  if (window.ClubSecurity) {
    const honeypot = document.getElementById("teacherLoginHoneypot")?.value || "";
    const botCheck = window.ClubSecurity.verifyFormSubmission("teacher_login_form", honeypot);
    if (!botCheck.isHuman) {
      showToast(botCheck.reason, "error");
      return;
    }
  }

  // Anti-Brute-Force Rate Limiting
  if (window.ClubSecurity) {
    const rateCheck = window.ClubSecurity.checkRateLimit("teacher_login", {
      maxAttempts: 5,
      windowMs: 60000,
      lockoutMs: 120000
    });
    if (!rateCheck.allowed) {
      showToast(rateCheck.reason, "error");
      return;
    }
  }

  const data = getClubData();
  data.teachers = data.teachers || [];
  data.teacherApplications = data.teacherApplications || [];

  const cleanUser = username.toLowerCase().trim().replace(/^@/, "");
  const normalized = cleanUser
    .replace(/[\s_.-]/g, "")
    .replace(/ü/g, "u")
    .replace(/ə/g, "e")
    .replace(/ı/g, "i")
    .replace(/ç/g, "c")
    .replace(/ş/g, "s")
    .replace(/ğ/g, "g");

  const matchTeacher = (t) => {
    if (!t) return false;
    const tUser = (t.username || "").toLowerCase().replace(/^@/, "");
    const tNormUser = tUser.replace(/[\s_.-]/g, "").replace(/ü/g, "u").replace(/ə/g, "e").replace(/ı/g, "i");
    const tEmail = (t.email || "").toLowerCase();
    const tName = (t.fullName || "").toLowerCase();
    const tNormName = tName.replace(/[\s_.-]/g, "").replace(/ü/g, "u").replace(/ə/g, "e").replace(/ı/g, "i");
    const tPhone = (t.phone || "").replace(/[\s\-\(\)\+]/g, "");
    const inPhone = cleanUser.replace(/[\s\-\(\)\+]/g, "");

    return tUser === cleanUser ||
           tNormUser === normalized ||
           tEmail === cleanUser ||
           tName === cleanUser ||
           tNormName === normalized ||
           (inPhone.length >= 7 && tPhone.includes(inPhone)) ||
           (cleanUser.length >= 4 && (tUser.includes(cleanUser) || tNormUser.includes(normalized) || tName.includes(cleanUser)));
  };

  let teacher = data.teachers.find(matchTeacher);

  // Əgər teachers-dən tapılmadısa, teacherApplications-dən yoxla
  if (!teacher) {
    const app = data.teacherApplications.find(matchTeacher);
    if (app) {
      if (app.password && app.password !== password) {
        if (window.ClubSecurity) {
          window.ClubSecurity.recordAttempt("teacher_login", false);
          window.ClubSecurity.log("TEACHER_LOGIN_FAIL_WRONG_PASSWORD", { username }, "WARNING");
        }
        showToast("Giriş şifrəsi yanlışdır!", "error");
        return;
      }
      if (app.status === "Gözləyir") {
        showToast(`Hörmətli ${app.fullName}, müəllim qeydiyyat müraciətiniz qəbul edilib və hazırda Klub Sədrinin təsdiqini gözləyir. Sədr təsdiq etdikdən sonra paneliniz aktivləşəcək.`, "warning");
        return;
      }
      if (app.status === "Rədd edildi") {
        showToast(`Hörmətli ${app.fullName}, müraciətiniz klub rəhbərliyi tərəfindən təsdiqlənməyib.`, "error");
        return;
      }
      // Find the matching teacher object or synthesize from app
      teacher = data.teachers.find(t => t.id === app.teacherId || matchTeacher(t)) || {
        ...app,
        id: app.teacherId || "teacher-sefanya",
        status: "Aktiv"
      };
    }
  }

  if (!teacher) {
    const memberMatch = (data.members || []).find(m => {
      if (!m) return false;
      const mUser = (m.username || "").toLowerCase().replace(/^@/, "");
      const mNorm = mUser.replace(/[\s_.-]/g, "").replace(/ü/g, "u").replace(/ə/g, "e").replace(/ı/g, "i");
      const mEmail = (m.email || "").toLowerCase();
      const mName = (m.fullName || "").toLowerCase();
      const mNormName = mName.replace(/[\s_.-]/g, "").replace(/ü/g, "u").replace(/ə/g, "e").replace(/ı/g, "i");
      return mUser === cleanUser || mNorm === normalized || mEmail === cleanUser || mName === cleanUser || mNormName === normalized;
    });

    if (memberMatch) {
      if (memberMatch.role === "Akademik Mentor / Müəllim" || (memberMatch.role && (memberMatch.role.includes("Müəllim") || memberMatch.role.includes("Mentor")))) {
        teacher = {
          ...memberMatch,
          id: memberMatch.id,
          title: memberMatch.title || "Akademik Mentor & Tədqiqatçı",
          status: memberMatch.status || "Aktiv"
        };
      } else {
        showToast(`Hörmətli ${memberMatch.fullName}, hesabınız Tələbə/Klub Üzvü olaraq qeydiyyatdadır. Zəhmət olmasa "Üzv Girişi"ndən daxil olun və ya Müəllim kimi qeydiyyatdan keçin.`, "info");
        return;
      }
    }
  }

  if (!teacher) {
    if (window.ClubSecurity) {
      window.ClubSecurity.recordAttempt("teacher_login", false);
      window.ClubSecurity.log("TEACHER_LOGIN_FAIL_NOT_FOUND", { username }, "WARNING");
    }
    showToast("Bu istifadəçi adı ilə qeydiyyatdan keçmiş müəllim/mentor tapılmadı.", "error");
    return;
  }

  if (teacher.password && teacher.password !== password) {
    if (window.ClubSecurity) {
      window.ClubSecurity.recordAttempt("teacher_login", false);
      window.ClubSecurity.log("TEACHER_LOGIN_FAIL_WRONG_PASSWORD", { username }, "WARNING");
    }
    showToast("Giriş şifrəsi yanlışdır!", "error");
    return;
  }

  if (teacher.status === "Gözləyir") {
    showToast(`Hörmətli ${teacher.fullName}, hesabınız hələ Sədr tərəfindən təsdiqlənməyib. Təsdiq gözlənilir.`, "warning");
    return;
  }

  if (teacher.status === "Rədd edildi") {
    showToast(`Hörmətli ${teacher.fullName}, hesabınız klub rəhbərliyi tərəfindən deaktiv edilmişdir.`, "error");
    return;
  }

  // Uğurlu giriş
  if (window.ClubSecurity) {
    window.ClubSecurity.recordAttempt("teacher_login", true);
    if (typeof window.ClubSecurity.createSessionToken === "function") {
      window.ClubSecurity.createSessionToken("teacher", teacher.id);
    }
    window.ClubSecurity.log("TEACHER_LOGIN_SUCCESS", { username, teacherId: teacher.id }, "INFO");
  }

  localStorage.setItem("wcu_active_teacher_id", teacher.id);
  closeTeacherLoginModal();
  updateAuthUI();
  showToast(`Xoş gəldiniz, ${teacher.fullName}! Müəllim Paneliniz aktivləşdirildi.`, "success");
  navigateTo("teacher-portal");
}
window.handleTeacherLogin = handleTeacherLogin;

function logoutTeacher() {
  localStorage.removeItem("wcu_active_teacher_id");
  if (window.ClubSecurity && typeof window.ClubSecurity.clearSession === "function") {
    window.ClubSecurity.clearSession("teacher");
  }
  if (window.ClubSecurity && typeof window.ClubSecurity.log === "function") {
    window.ClubSecurity.log("TEACHER_LOGOUT", {}, "INFO");
  }
  updateAuthUI();
  showToast("Müəllim hesabından çıxış edildi.", "info");
  navigateTo("home");
}
window.logoutTeacher = logoutTeacher;

function openTeacherRegisterModal() {
  const modal = document.getElementById("teacherRegisterModal");
  if (modal) {
    const f = document.getElementById("teacherRegisterForm");
    if (f) f.reset();
    modal.classList.remove("hidden");
    if (window.ClubSecurity) {
      window.ClubSecurity.registerFormRender("teacher_reg_form");
    }
  }
}
window.openTeacherRegisterModal = openTeacherRegisterModal;

function closeTeacherRegisterModal() {
  const modal = document.getElementById("teacherRegisterModal");
  if (modal) modal.classList.add("hidden");
}
window.closeTeacherRegisterModal = closeTeacherRegisterModal;

async function handleTeacherRegistration(e) {
  if (e) e.preventDefault();

  const form = document.getElementById("teacherRegisterForm");
  const submitBtn = document.getElementById("tRegSubmitBtn") || (form ? form.querySelector("button[type='submit']") : null);
  const originalBtnText = submitBtn ? submitBtn.innerHTML : "";

  const fullName = (document.getElementById("tRegFullName")?.value || "").trim();
  const title = (document.getElementById("tRegTitle")?.value || "").trim();
  let university = (document.getElementById("tRegUniversity")?.value || "").trim();
  if (university === "Digər" || !university) {
    const customUni = (document.getElementById("tRegUniversityCustom")?.value || "").trim();
    if (customUni) university = customUni;
  }
  if (!university) university = "Qərbi Kaspi Universiteti (WCU)";
  const department = (document.getElementById("tRegDepartment")?.value || "").trim();
  const email = (document.getElementById("tRegEmail")?.value || "").trim().toLowerCase();
  const phone = (document.getElementById("tRegPhone")?.value || "").trim();
  const specialties = (document.getElementById("tRegSpecialties")?.value || "").trim();
  const orcid = (document.getElementById("tRegOrcid")?.value || "").trim();
  const bio = (document.getElementById("tRegBio")?.value || "").trim();
  const rawUsername = (document.getElementById("tRegUsername")?.value || "").trim().toLowerCase();
  const password = (document.getElementById("tRegPassword")?.value || "").trim();

  if (!fullName || !email || !department || !specialties || !rawUsername || !password) {
    showToast("Zəhmət olmasa tələb olunan bütün əsas xanaları (ad, universitet, ixtisas/sahə, e-poçt, login, şifrə) doldurun.", "warning");
    return;
  }

  // Anti-Bot: Honeypot & Dwell-Time yoxlanışı
  if (window.ClubSecurity) {
    const honeypot = document.getElementById("tRegHoneypot")?.value || "";
    const botCheck = window.ClubSecurity.verifyFormSubmission("teacher_reg_form", honeypot);
    if (!botCheck.isHuman) {
      showToast(botCheck.reason, "error");
      return;
    }
  }

  // Anti-Brute-Force Rate Limiting
  if (window.ClubSecurity) {
    const rateCheck = window.ClubSecurity.checkRateLimit("teacher_reg", {
      maxAttempts: 3,
      windowMs: 60000,
      lockoutMs: 180000
    });
    if (!rateCheck.allowed) {
      showToast(rateCheck.reason, "error");
      return;
    }
  }

  const cleanUsername = window.ClubSecurity && window.ClubSecurity.sanitizeUsername
    ? window.ClubSecurity.sanitizeUsername(rawUsername)
    : rawUsername.replace(/^@/, "").replace(/[^a-z0-9_.-]/g, "");

  if (cleanUsername.length < 3) {
    showToast("İstifadəçi adı ən azı 3 simvol olmalıdır.", "warning");
    return;
  }
  if (password.length < 4) {
    showToast("Şifrə ən azı 4 simvol olmalıdır.", "warning");
    return;
  }

  const data = getClubData();
  data.teachers = data.teachers || [];
  data.teacherApplications = data.teacherApplications || [];

  const isUserTaken = data.teachers.some(t => (t.username || "").toLowerCase() === cleanUsername) ||
    data.teacherApplications.some(a => (a.username || "").toLowerCase() === cleanUsername);
  if (isUserTaken) {
    showToast(`"@${cleanUsername}" istifadəçi adı artıq qeydiyyatdadır. Zəhmət olmasa başqa login seçin.`, "warning");
    return;
  }

  const isEmailTaken = data.teachers.some(t => (t.email || "").toLowerCase() === email) ||
    data.teacherApplications.some(a => (a.email || "").toLowerCase() === email);
  if (isEmailTaken) {
    showToast(`Bu e-poçt ünvanı ilə artıq müəllim qeydiyyatı mövcuddur.`, "warning");
    return;
  }

  const sanitizedFullName = window.ClubSecurity ? window.ClubSecurity.sanitizeText(fullName) : fullName;
  const sanitizedTitle = window.ClubSecurity ? window.ClubSecurity.sanitizeText(title) : title;
  const sanitizedBio = window.ClubSecurity ? window.ClubSecurity.sanitizeText(bio) : bio;

  const specArray = specialties
    ? specialties.split(",").map(s => s.trim()).filter(Boolean)
    : ["Bioinformatika", "Genom Analizi"];

  const teacherId = "teacher-" + Date.now();
  const appId = "teach-app-" + Date.now();
  const todayStr = new Date().toISOString().split("T")[0];

  const newTeacher = {
    id: teacherId,
    fullName: sanitizedFullName,
    title: sanitizedTitle || "Akademik Mentor",
    academicDegree: sanitizedTitle || "Müəllim",
    university: university,
    department: department,
    email: email,
    phone: phone,
    username: cleanUsername,
    password: password,
    photo: "",
    specialties: specArray,
    orcid: orcid,
    officeLocation: "",
    consultationHours: "",
    bio: sanitizedBio || "CarboxMol Bioinformatika Klubu akademik mentoru.",
    status: "Gözləyir", // TƏHLÜKƏSİZLİK: Yalnız Sədr təsdiq etdikdən sonra 'Aktiv' olur
    registeredAt: todayStr
  };

  const newApp = {
    id: appId,
    teacherId: teacherId,
    fullName: sanitizedFullName,
    title: sanitizedTitle || "Akademik Mentor",
    academicDegree: sanitizedTitle || "Müəllim",
    university: university,
    department: department,
    email: email,
    phone: phone,
    username: cleanUsername,
    password: password,
    specialties: specArray,
    orcid: orcid,
    officeLocation: "",
    consultationHours: "",
    bio: newTeacher.bio,
    status: "Gözləyir",
    dateApplied: todayStr,
    adminNotes: "Sayt üzərindən onlayn müəllim müraciəti edilmişdir."
  };

  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Göndərilir...';
  }

  data.teachers.unshift(newTeacher);
  data.teacherApplications.unshift(newApp);
  saveClubData(data);

  if (window.ClubSecurity) {
    window.ClubSecurity.log("TEACHER_REGISTER_REQUEST", { username: cleanUsername, fullName: sanitizedFullName }, "INFO");
  }

  // Cloud Sync
  try {
    fetch("/api/sync", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        action: "REGISTER_TEACHER",
        teacher: newTeacher,
        teacherApplication: newApp
      })
    }).catch(() => {});
  } catch (err) {}

  // Push Notification via ntfy
  try {
    const ntfyPayload = {
      topic: "carboxmol_bioinfo_cloud_sync_v3_secure",
      title: `🎓 Yeni Müəllim/Mentor Müraciəti: ${sanitizedFullName}`,
      message: `${sanitizedFullName} (@${cleanUsername}) müəllim/mentor olaraq qeydiyyatdan keçdi.\nKafedra: ${department}\nE-poçt: ${email}\nTel: ${phone || 'Qeyd edilməyib'}`,
      tags: ["mortar_board", "briefcase", "new_teacher"],
      priority: 4,
      click: "https://carboxmol-bioinformatics-club.github.io/#president-portal",
      teacher: { ...newTeacher, password: "" },
      data: { fullName: sanitizedFullName, email, department, title: sanitizedTitle },
      timestamp: Date.now()
    };
    fetch("https://ntfy.sh/carboxmol_bioinfo_cloud_sync_v3_secure/publish", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(ntfyPayload)
    }).catch((err) => {
      console.warn("[ntfy Bus] Göndərilmə gecikməsi:", err);
    });
  } catch (e) {}

  // Send real-time notification to Suleyman Hajizadeh via FormSubmit API (Primary + CC)
  const emailPayload = {
    "Müraciət Növü": "Müəllim / Akademik Mentor Qeydiyyatı",
    "Ad, Soyad və Elmi Titul": `${sanitizedFullName} (${sanitizedTitle || "Müəllim / Mentor"})`,
    "Universitet / Təşkilat": university,
    "Fakültə və ya Kafedra": department,
    "Rəsmi E-poçt Ünvanı": email,
    "Əlaqə Nömrəsi (WhatsApp)": phone || "Qeyd edilməyib",
    "Təyin Edilmiş Login (@username)": "@" + cleanUsername,
    "Təyin Edilmiş Şifrə (Klub Sədrinə Açıq)": password,
    "İxtisası və Tədqiqat Sahəsi": specArray.length ? specArray.join(", ") : "Bioinformatika",
    "ORCID ID / Elmi Link": orcid || "Qeyd edilməyib",
    "Qısa Bioqrafiya və Dəstək Planı": sanitizedBio || "Qeyd edilməyib",
    "Status": "Gözləyir (Klub Sədrinin Təsdiqi Tələb Olunur)",
    "Müraciət Tarixi": new Date().toLocaleString("az-AZ"),
    "_subject": `🎓 Yeni CarboxMol Müəllim/Mentor Qeydiyyatı: ${sanitizedFullName} (@${cleanUsername})`,
    "_template": "table",
    "_captcha": "false",
    "_replyto": email,
    "_cc": "suleyman.hacizade1@gmail.com",
    "_autoresponse": `Hörmətli ${sanitizedFullName},\n\nCarboxMol Bioinformatika Klubuna müəllim/akademik mentor qeydiyyat müraciətiniz uğurla qeydə alındı.\n\nTəhlükəsizlik və nizamnamə qaydalarına əsasən, hesabınız Klub Sədri Süleyman Hacızadə tərəfindən Sədr panelindən təsdiqləndikdən sonra Müəllim Kabinetiniz aktivləşəcəkdir.\n\nİstifadəçi adınız: @${cleanUsername}\n\nKlubumuza göstərdiyiniz maraq və elmi dəstək üçün təşəkkür edirik!\n\nHörmətlə,\nCarboxMol Bioinformatika Klubu Rəhbərliyi`
  };

  let sentOnline = false;
  if (navigator.onLine) {
    try {
      const res = await fetch("https://formsubmit.co/ajax/suleyman.hacizade.232bioing@wcu.edu.az", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(emailPayload)
      });
      if (res.ok) sentOnline = true;
    } catch (err) {
      console.warn("FormSubmit notice (müəllim müraciəti):", err);
    }
  }

  if (!sentOnline) {
    if (typeof addToOfflineQueue === "function") {
      addToOfflineQueue({ type: "teacher_application", data: emailPayload });
    }
    showToast("Müəllim müraciəti yerli bazaya qeyd edildi və Sədr panelinə sinxronlaşdırıldı.", "info");
  }

  if (submitBtn) {
    submitBtn.disabled = false;
    submitBtn.innerHTML = originalBtnText;
  }

  // Reset form
  if (form) form.reset();

  // Broadcast across tabs and portals
  if (window.SyncEngine) {
    window.SyncEngine.broadcast("NEW_TEACHER_REGISTERED", { teacherId, username: cleanUsername });
  }

  closeTeacherRegisterModal();

  showToast(`Hörmətli ${sanitizedFullName}, müəllim/mentor qeydiyyat müraciətiniz qəbul edildi! Bildiriş hər iki rəsmi e-poçta göndərildi və hesabınız Sədr tərəfindən təsdiqləndikdən sonra aktivləşəcəkdir.`, "success", 7000);
}
window.handleTeacherRegistration = handleTeacherRegistration;

// ==========================================
// 3. UI VƏ İDARƏETMƏ STATUSU
// ==========================================

function updateAuthUI() {
  // President state
  const isPres = isPresidentLoggedIn();
  const navPresLogin = document.getElementById("navPresidentLoginBtn");
  const navPresPortal = document.getElementById("navPresidentPortalBtn");
  const navPresLogout = document.getElementById("navPresidentLogoutBtn");
  const mobilePresLogin = document.getElementById("mobilePresidentLoginBtn");
  const mobilePresPortal = document.getElementById("mobilePresidentPortalBtn");
  const mobilePresLogout = document.getElementById("mobilePresidentLogoutBtn");

  if (navPresLogin) {
    navPresLogin.classList.toggle("hidden", isPres);
    navPresLogin.style.display = isPres ? "none" : "";
  }
  if (navPresPortal) {
    navPresPortal.classList.toggle("hidden", !isPres);
    navPresPortal.style.display = isPres ? "inline-flex" : "none";
  }
  if (navPresLogout) {
    navPresLogout.classList.toggle("hidden", !isPres);
    navPresLogout.style.display = isPres ? "inline-flex" : "none";
  }

  if (mobilePresLogin) mobilePresLogin.classList.toggle("hidden", isPres);
  if (mobilePresPortal) mobilePresPortal.classList.toggle("hidden", !isPres);
  if (mobilePresLogout) mobilePresLogout.classList.toggle("hidden", !isPres);

  // Member state
  const member = getActiveMember();
  const navMemberLoginBtn = document.getElementById("navMemberLoginBtn");
  const navMemberBadge = document.getElementById("navMemberBadge");
  const navMemberLogoutBtn = document.getElementById("navMemberLogoutBtn");
  const mobileMemberLoginBtn = document.getElementById("mobileMemberLoginBtn");
  const mobileMemberBadge = document.getElementById("mobileMemberBadge");

  if (navMemberLoginBtn) {
    navMemberLoginBtn.classList.toggle("hidden", !!member);
    navMemberLoginBtn.style.display = member ? "none" : "";
  }
  if (navMemberLogoutBtn) {
    navMemberLogoutBtn.classList.toggle("hidden", !member);
    navMemberLogoutBtn.style.display = member ? "inline-flex" : "none";
  }
  if (navMemberBadge) {
    navMemberBadge.classList.toggle("hidden", !member);
    navMemberBadge.style.display = member ? "inline-flex" : "none";
    if (member) {
      if (member.photo) {
        navMemberBadge.innerHTML = `<img src="${member.photo}" class="w-3.5 h-3.5 rounded-full object-cover inline-block mr-1 border border-teal-400/50"> <span class="hidden xl:inline">@${escapeHtml(member.username || "uzv")}</span>`;
      } else {
        navMemberBadge.innerHTML = `<i class="fa-solid fa-circle-user mr-1 text-teal-400 text-[10px]"></i> <span class="hidden xl:inline">@${escapeHtml(member.username || "uzv")}</span>`;
      }
    }
  }

  if (mobileMemberBadge) {
    mobileMemberBadge.classList.toggle("hidden", !member);
    if (member) {
      if (member.photo) {
        mobileMemberBadge.innerHTML = `<img src="${member.photo}" class="w-4 h-4 rounded-full object-cover inline-block mr-1 border border-teal-400/50"> @${escapeHtml(member.username || "uzv")}`;
      } else {
        mobileMemberBadge.innerHTML = `<i class="fa-solid fa-user-check mr-1 text-teal-400"></i> @${escapeHtml(member.username || "uzv")}`;
      }
    }
  }

  // Teacher state
  const teacherLogged = isTeacherLoggedIn();
  const navTeachLoginBtn = document.getElementById("navTeacherLoginBtn");
  const navTeachPortalBtn = document.getElementById("navTeacherPortalBtn");
  const navTeachLogoutBtn = document.getElementById("navTeacherLogoutBtn");
  const mobileTeachLoginBtn = document.getElementById("mobileTeacherLoginBtn");
  const mobileTeachPortalBtn = document.getElementById("mobileTeacherPortalBtn");
  const mobileTeachLogoutBtn = document.getElementById("mobileTeacherLogoutBtn");

  if (navTeachLoginBtn) {
    navTeachLoginBtn.classList.toggle("hidden", teacherLogged);
    navTeachLoginBtn.style.display = teacherLogged ? "none" : "";
  }
  if (navTeachPortalBtn) {
    navTeachPortalBtn.classList.toggle("hidden", !teacherLogged);
    navTeachPortalBtn.style.display = teacherLogged ? "inline-flex" : "none";
  }
  if (navTeachLogoutBtn) {
    navTeachLogoutBtn.classList.toggle("hidden", !teacherLogged);
    navTeachLogoutBtn.style.display = teacherLogged ? "inline-flex" : "none";
  }
  if (mobileTeachLoginBtn) mobileTeachLoginBtn.classList.toggle("hidden", teacherLogged);
  if (mobileTeachPortalBtn) mobileTeachPortalBtn.classList.toggle("hidden", !teacherLogged);
  if (mobileTeachLogoutBtn) mobileTeachLogoutBtn.classList.toggle("hidden", !teacherLogged);
}
window.updateAuthUI = updateAuthUI;

document.addEventListener("DOMContentLoaded", () => {
  // Prevent any horizontal drift on page load
  window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  document.documentElement.scrollLeft = 0;
  document.body.scrollLeft = 0;

  initNavigation();
  updateAuthUI();

  // Dərhal aktiv bölməni aç ki, səhifə yenilənəndə (refresh) ana səhifə görünməsin!
  const initialHash = (window.location.hash || "").replace("#", "");
  if (initialHash === "president-portal" && !isPresidentLoggedIn()) {
    window.location.hash = "home";
    navigateTo("home");
    setTimeout(() => {
      showToast("Bu idarəetmə bölməsi yalnız Klub Sədri üçün nəzərdə tutulub. Zəhmət olmasa daxil olun.", "warning");
      openPresidentLoginModal();
    }, 250);
  } else if (initialHash) {
    navigateTo(initialHash);
  } else {
    navigateTo("home");
  }

  initDocumentsView();
  initCurriculumView();
  initEventsView();
  initBioToolsView();
  initApplicationForm();

  if (window.CollaboratorsEngine) {
    CollaboratorsEngine.init();
  }

  if (window.BioMeetEngine) {
    BioMeetEngine.init();
  }

  if (window.RegistrationVideoGuide) {
    RegistrationVideoGuide.init();
  }

  if (window.MembersPortal && typeof MembersPortal.renderMembersDirectory === "function") {
    MembersPortal.renderMembersDirectory();
  }

  // Real-time Sinxronizasiya Dinləyicisi (BroadcastChannel & storage)
  if (window.SyncEngine) {
    SyncEngine.listen((msg) => {
      console.log("[SyncEngine Update Received]:", msg);
      if (window.BioMeetEngine && typeof window.BioMeetEngine.handleLiveSyncEvent === "function") {
        window.BioMeetEngine.handleLiveSyncEvent(msg);
      }
      if (window.PresidentPortal) {
        PresidentPortal.renderMetrics();
        PresidentPortal.renderApplicationsTable();
        if (PresidentPortal.renderTasksList) PresidentPortal.renderTasksList();
                if (PresidentPortal.renderAcademicSupervision) PresidentPortal.renderAcademicSupervision();
    if (PresidentPortal.renderAcademicSupervision) PresidentPortal.renderAcademicSupervision();
        if (PresidentPortal.renderMembersAccountsTable) PresidentPortal.renderMembersAccountsTable();
        if (PresidentPortal.renderTeachersAccountsTable) PresidentPortal.renderTeachersAccountsTable();
        if (PresidentPortal.renderMemberCustomTasks) PresidentPortal.renderMemberCustomTasks();
        if (PresidentPortal.renderMemberNotes) PresidentPortal.renderMemberNotes();
      }
      if (window.MembersPortal) {
        if (typeof MembersPortal.renderMemberDashboard === "function") MembersPortal.renderMemberDashboard();
        if (typeof MembersPortal.renderMembersDirectory === "function") MembersPortal.renderMembersDirectory();
        if (typeof MembersPortal.renderTasks === "function") MembersPortal.renderTasks();
      }
      if (window.TeacherPortal) {
        if (typeof TeacherPortal.renderTeacherDashboard === "function") TeacherPortal.renderTeacherDashboard();
      }
      if (typeof updateAuthUI === "function") {
        updateAuthUI();
      }
    });
  }

  // 3. Canlı Bulud SSE və Avtomatik Sinxronizasiya Şlüzü (Cross-Device Real-time SSE Sync)
  function initRealtimeCloudSSE() {
    if (typeof EventSource === "undefined") return;
    try {
      const sse = new EventSource("https://ntfy.sh/carboxmol_bioinfo_cloud_sync_v3_secure/sse");
      sse.onmessage = (event) => {
        try {
          const item = JSON.parse(event.data);
          if (item && item.message) {
            const payload = typeof item.message === "string" ? JSON.parse(item.message) : item.message;
            if (!payload || !payload.action) return;

            const isMockOrTest = (record) => {
              if (!record) return true;
              const id = (record.id || "").toLowerCase();
              if (id === "dummy" || id === "prototype-dummy") return true;
              return false;
            };

            const data = getClubData();
            let changed = false;

            if (payload.action && (payload.action.startsWith("LIVE_MEETING_") || payload.action.startsWith("MEETING_"))) {
              if (window.BioMeetEngine && typeof window.BioMeetEngine.handleLiveSyncEvent === "function") {
                window.BioMeetEngine.handleLiveSyncEvent(payload);
              }
            }

            if (payload.action === "TASK_CREATED" || payload.action === "TASK_UPDATED") {
              if (payload.task && payload.task.id) {
                data.tasks = data.tasks || [];
                const idx = data.tasks.findIndex(t => t.id === payload.task.id);
                if (idx === -1) {
                  data.tasks.unshift(payload.task);
                } else {
                  data.tasks[idx] = { ...data.tasks[idx], ...payload.task };
                }
                changed = true;

                // Show notification if it's for current active member
                const active = typeof getActiveMember === "function" ? getActiveMember() : null;
                if (active) {
                  const isForMe = !payload.task.assignedTo || payload.task.assignedTo === "all" || payload.task.assignedTo === active.id || payload.task.assignedTo === active.username;
                  if (isForMe && payload.action === "TASK_CREATED") {
                    showToast(`🔔 Sədrdən yeni tapşırıq: "${payload.task.title}"`, "info");
                  }
                }
              }
            } else if (payload.action === "TASK_DELETED") {
              if (payload.taskId) {
                data.tasks = data.tasks || [];
                data.tasks = data.tasks.filter(t => t.id !== payload.taskId);
                changed = true;
              }
            } else if (payload.action === "TASK_SUBMISSION_ADDED") {
              if (payload.taskId && payload.submission) {
                data.tasks = data.tasks || [];
                const t = data.tasks.find(x => x.id === payload.taskId);
                if (t) {
                  t.submissions = t.submissions || [];
                  const sIdx = t.submissions.findIndex(s => s.id === payload.submission.id || (s.studentEmail && s.studentEmail === payload.submission.studentEmail));
                  if (sIdx === -1) t.submissions.push(payload.submission);
                  else t.submissions[sIdx] = { ...t.submissions[sIdx], ...payload.submission };
                  changed = true;
                }
              }
            } else if (payload.action === "SUBMISSION_GRADED" || payload.action === "PRESIDENT_SUBMISSION_REVIEWED") {
              if (payload.taskId && (payload.submissionId || (payload.submission && payload.submission.id))) {
                const subId = payload.submissionId || payload.submission.id;
                data.tasks = data.tasks || [];
                const t = data.tasks.find(x => x.id === payload.taskId);
                if (t && t.submissions) {
                  const s = t.submissions.find(sub => sub.id === subId);
                  if (s) {
                    if (payload.grade !== undefined && payload.grade !== null) s.grade = payload.grade;
                    if (payload.feedback !== undefined) s.feedback = payload.feedback;
                    if (payload.teacherName) s.reviewedBy = payload.teacherName;
                    if (payload.presidentFeedback !== undefined) s.presidentFeedback = payload.presidentFeedback;
                    if (payload.status) s.status = payload.status;
                    changed = true;
                  }
                }
              }
            } else if (payload.action === "REGISTER_STUDENT" || payload.action === "REGISTER_MEMBER") {
              if (isMockOrTest(payload.application) || isMockOrTest(payload.member)) return;

              data.deletedAppIds = data.deletedAppIds || [];
              data.deletedMemberIds = data.deletedMemberIds || [];
              data.approvedAppIds = data.approvedAppIds || [];
              data.approvedUsers = data.approvedUsers || [];

              if (payload.application && payload.application.id) {
                if (!data.deletedAppIds.includes(payload.application.id)) {
                  data.applications = data.applications || [];
                  const normUser = (payload.application.username || "").toLowerCase().replace(/^@/, "").trim();
                  const exists = data.applications.some(a => a.id === payload.application.id || (a.username && normUser && a.username.toLowerCase().replace(/^@/, "").trim() === normUser));
                  if (!exists) {
                    // QAYDA: Yeni qeydiyyat HEÇ VAXT avtomatik təsdiqlənmir — yalnız Sədr təsdiqlədikdə "Təsdiqləndi" olur!
                    const alreadyApproved = data.approvedAppIds.includes(payload.application.id) || (normUser && data.approvedUsers.includes(normUser));
                    payload.application.status = alreadyApproved ? "Təsdiqləndi" : "Gözləyir";
                    data.applications.unshift(payload.application);
                    changed = true;

                    try {
                      let perm = JSON.parse(localStorage.getItem("carboxmol_permanent_applications") || "[]");
                      if (!perm.some(p => p.id === payload.application.id)) {
                        perm.unshift(payload.application);
                        localStorage.setItem("carboxmol_permanent_applications", JSON.stringify(perm));
                      }
                    } catch (e) {}
                  }
                }
              }
              if (payload.member && payload.member.username) {
                const memId = payload.member.id || payload.memberId;
                const normUser = (payload.member.username || "").toLowerCase().replace(/^@/, "").trim();
                if (!memId || !data.deletedMemberIds.includes(memId)) {
                  data.members = data.members || [];
                  const exists = data.members.some(m => m.id === payload.member.id || (m.username && m.username.toLowerCase().replace(/^@/, "").trim() === normUser));
                  if (!exists) {
                    const alreadyApproved = (payload.application && data.approvedAppIds.includes(payload.application.id)) || (normUser && data.approvedUsers.includes(normUser));
                    payload.member.status = alreadyApproved ? "Aktiv" : "Gözləyir";
                    data.members.unshift(payload.member);
                    changed = true;
                  }
                }
              }
            } else if (payload.action === "UPDATE_STATUS") {
              if ((payload.appId || payload.username || (payload.application && payload.application.username)) && payload.status) {
                const normUser = (payload.username || (payload.application && payload.application.username) || (payload.member && payload.member.username) || "").toLowerCase().replace(/^@/, "").trim();
                const normEmail = (payload.email || (payload.application && payload.application.email) || (payload.member && payload.member.email) || "").toLowerCase().trim();
                data.applications = data.applications || [];
                data.approvedAppIds = data.approvedAppIds || [];
                data.approvedUsers = data.approvedUsers || [];
                data.rejectedAppIds = data.rejectedAppIds || [];
                data.pendingOverrideIds = data.pendingOverrideIds || [];

                const targetApp = data.applications.find(a =>
                  (payload.appId && a.id === payload.appId) ||
                  (normUser && a.username && a.username.toLowerCase().replace(/^@/, "").trim() === normUser) ||
                  (normEmail && a.email && a.email.toLowerCase().trim() === normEmail)
                );
                if (targetApp) {
                  targetApp.status = payload.status;
                  if (payload.status === "Təsdiqləndi") {
                    targetApp.approvedAt = new Date().toISOString().slice(0, 10);
                    targetApp.approvedBy = "Süleyman Hacızadə (Klub Sədri)";
                  }
                  changed = true;
                }
                const trackId = (targetApp && targetApp.id) || payload.appId;
                if (payload.status === "Təsdiqləndi") {
                  if (trackId && !data.approvedAppIds.includes(trackId)) data.approvedAppIds.push(trackId);
                  if (normUser && !data.approvedUsers.includes(normUser)) data.approvedUsers.push(normUser);
                  data.rejectedAppIds = data.rejectedAppIds.filter(x => x !== trackId && x !== normUser);
                  data.pendingOverrideIds = data.pendingOverrideIds.filter(x => x !== trackId && x !== normUser);
                } else if (payload.status === "Rədd edildi") {
                  if (trackId && !data.rejectedAppIds.includes(trackId)) data.rejectedAppIds.push(trackId);
                  data.approvedAppIds = data.approvedAppIds.filter(x => x !== trackId);
                  data.approvedUsers = data.approvedUsers.filter(x => x !== normUser);
                  data.pendingOverrideIds = data.pendingOverrideIds.filter(x => x !== trackId && x !== normUser);
                } else if (payload.status === "Gözləyir") {
                  if (trackId && !data.pendingOverrideIds.includes(trackId)) data.pendingOverrideIds.push(trackId);
                  if (normUser && !data.pendingOverrideIds.includes(normUser)) data.pendingOverrideIds.push(normUser);
                  data.approvedAppIds = data.approvedAppIds.filter(x => x !== trackId);
                  data.approvedUsers = data.approvedUsers.filter(x => x !== normUser);
                  data.rejectedAppIds = data.rejectedAppIds.filter(x => x !== trackId && x !== normUser);
                }
                try {
                  localStorage.setItem("carboxmol_approved_app_ids", JSON.stringify(data.approvedAppIds));
                  localStorage.setItem("carboxmol_approved_users", JSON.stringify(data.approvedUsers));
                  localStorage.setItem("carboxmol_rejected_app_ids", JSON.stringify(data.rejectedAppIds));
                  localStorage.setItem("carboxmol_pending_override_ids", JSON.stringify(data.pendingOverrideIds));
                } catch (e) {}

                data.members = data.members || [];
                const targetMem = data.members.find(m =>
                  (payload.appId && m.id === payload.appId) ||
                  (targetApp && targetApp.memberId && m.id === targetApp.memberId) ||
                  (normUser && m.username && m.username.toLowerCase().replace(/^@/, "").trim() === normUser) ||
                  (normEmail && m.email && m.email.toLowerCase().trim() === normEmail)
                );
                if (targetMem) {
                  targetMem.status = (payload.status === "Təsdiqləndi") ? "Aktiv" : payload.status;
                  changed = true;
                }
              }
            } else if (payload.action === "UPDATE_MEMBER_DOSSIER" || payload.action === "MEMBER_PROFILE_UPDATED") {
              data.approvedAppIds = data.approvedAppIds || [];
              data.approvedUsers = data.approvedUsers || [];
              data.rejectedAppIds = data.rejectedAppIds || [];
              data.pendingOverrideIds = data.pendingOverrideIds || [];
              const normUser = ((payload.username || (payload.member && payload.member.username) || (payload.application && payload.application.username) || "")).toLowerCase().replace(/^@/, "").trim();
              if (payload.member && payload.member.username) {
                data.members = data.members || [];
                const mIdx = data.members.findIndex(m => m.id === payload.member.id || (m.username && m.username.toLowerCase().replace(/^@/, "").trim() === normUser));
                if (mIdx !== -1) {
                  const preservedPhoto = payload.member.photo || data.members[mIdx].photo || "";
                  data.members[mIdx] = { ...data.members[mIdx], ...payload.member, id: data.members[mIdx].id, photo: preservedPhoto };
                  changed = true;
                }
                if (payload.member.status === "Aktiv" && normUser) {
                  if (!data.approvedUsers.includes(normUser)) data.approvedUsers.push(normUser);
                  data.pendingOverrideIds = data.pendingOverrideIds.filter(x => x !== normUser);
                  data.rejectedAppIds = data.rejectedAppIds.filter(x => x !== normUser);
                }
              }
              if (payload.application && (payload.application.id || payload.application.username)) {
                data.applications = data.applications || [];
                const aIdx = data.applications.findIndex(a => a.id === payload.application.id || (a.username && normUser && a.username.toLowerCase().replace(/^@/, "").trim() === normUser));
                if (aIdx !== -1) {
                  const preservedPhoto = payload.application.photo || data.applications[aIdx].photo || "";
                  data.applications[aIdx] = { ...data.applications[aIdx], ...payload.application, id: data.applications[aIdx].id, photo: preservedPhoto };
                  changed = true;
                }
                const trackId = (aIdx !== -1 ? data.applications[aIdx].id : payload.application.id);
                if (payload.application.status === "Təsdiqləndi") {
                  if (trackId && !data.approvedAppIds.includes(trackId)) data.approvedAppIds.push(trackId);
                  if (normUser && !data.approvedUsers.includes(normUser)) data.approvedUsers.push(normUser);
                  data.pendingOverrideIds = data.pendingOverrideIds.filter(x => x !== trackId && x !== normUser);
                  data.rejectedAppIds = data.rejectedAppIds.filter(x => x !== trackId && x !== normUser);
                } else if (payload.application.status === "Rədd edildi") {
                  if (trackId && !data.rejectedAppIds.includes(trackId)) data.rejectedAppIds.push(trackId);
                  if (normUser && !data.rejectedAppIds.includes(normUser)) data.rejectedAppIds.push(normUser);
                  data.approvedAppIds = data.approvedAppIds.filter(x => x !== trackId);
                  data.approvedUsers = data.approvedUsers.filter(x => x !== normUser);
                }
              }
              try {
                localStorage.setItem("carboxmol_approved_app_ids", JSON.stringify(data.approvedAppIds));
                localStorage.setItem("carboxmol_approved_users", JSON.stringify(data.approvedUsers));
                localStorage.setItem("carboxmol_rejected_app_ids", JSON.stringify(data.rejectedAppIds));
                localStorage.setItem("carboxmol_pending_override_ids", JSON.stringify(data.pendingOverrideIds));
              } catch (e) {}
            } else if (payload.action === "DELETE_APPLICATION" || payload.action === "APPLICATION_DELETED") {
              data.deletedAppIds = data.deletedAppIds || [];
              data.deletedMemberIds = data.deletedMemberIds || [];
              if (payload.appId) {
                if (!data.deletedAppIds.includes(payload.appId)) data.deletedAppIds.push(payload.appId);
                data.applications = (data.applications || []).filter(a => a.id !== payload.appId);
                if (window.ClubDatabase && typeof window.ClubDatabase.deleteApplication === "function") {
                  window.ClubDatabase.deleteApplication(payload.appId).catch(() => {});
                }
                changed = true;
              }
              if (payload.memberId) {
                if (!data.deletedMemberIds.includes(payload.memberId)) data.deletedMemberIds.push(payload.memberId);
                data.members = (data.members || []).filter(m => m.id !== payload.memberId);
                if (window.ClubDatabase && typeof window.ClubDatabase.deleteMember === "function") {
                  window.ClubDatabase.deleteMember(payload.memberId).catch(() => {});
                }
                changed = true;
              }
            } else if (payload.action === "DELETE_MEMBER" || payload.action === "MEMBER_DELETED") {
              data.deletedAppIds = data.deletedAppIds || [];
              data.deletedMemberIds = data.deletedMemberIds || [];
              if (payload.memberId) {
                if (!data.deletedMemberIds.includes(payload.memberId)) data.deletedMemberIds.push(payload.memberId);
                data.members = (data.members || []).filter(m => m.id !== payload.memberId);
                if (window.ClubDatabase && typeof window.ClubDatabase.deleteMember === "function") {
                  window.ClubDatabase.deleteMember(payload.memberId).catch(() => {});
                }
                changed = true;
              }
              if (payload.appId) {
                if (!data.deletedAppIds.includes(payload.appId)) data.deletedAppIds.push(payload.appId);
                data.applications = (data.applications || []).filter(a => a.id !== payload.appId);
                if (window.ClubDatabase && typeof window.ClubDatabase.deleteApplication === "function") {
                  window.ClubDatabase.deleteApplication(payload.appId).catch(() => {});
                }
                changed = true;
              }
            } else if (payload.action === "REGISTER_TEACHER") {
              if (payload.teacher && payload.teacher.id) {
                data.teachers = data.teachers || [];
                const exists = data.teachers.some(t => t.id === payload.teacher.id || (t.username && payload.teacher.username && t.username.toLowerCase() === payload.teacher.username.toLowerCase()));
                if (!exists) {
                  data.teachers.unshift(payload.teacher);
                  changed = true;
                }
              }
              if (payload.teacherApplication && payload.teacherApplication.id) {
                data.teacherApplications = data.teacherApplications || [];
                const exists = data.teacherApplications.some(a => a.id === payload.teacherApplication.id);
                if (!exists) {
                  data.teacherApplications.unshift(payload.teacherApplication);
                  changed = true;
                }
              }
            } else if (payload.action === "UPDATE_TEACHER_STATUS") {
              if (payload.teacherId && payload.status) {
                data.teachers = data.teachers || [];
                const t = data.teachers.find(item => item.id === payload.teacherId);
                if (t) {
                  t.status = payload.status;
                  changed = true;
                }
                data.teacherApplications = data.teacherApplications || [];
                const a = data.teacherApplications.find(item => item.teacherId === payload.teacherId || item.id === payload.applicationId);
                if (a) {
                  a.status = (payload.status === "Aktiv") ? "Təsdiqləndi" : payload.status;
                  changed = true;
                }
              }
            } else if (payload.action === "DELETE_TEACHER") {
              data.deletedTeacherIds = data.deletedTeacherIds || [];
              data.deletedAppIds = data.deletedAppIds || [];
              if (payload.teacherId && !data.deletedTeacherIds.includes(payload.teacherId)) {
                data.deletedTeacherIds.push(payload.teacherId);
              }
              if (payload.applicationId && !data.deletedAppIds.includes(payload.applicationId)) {
                data.deletedAppIds.push(payload.applicationId);
              }
              if (Array.isArray(payload.deletedTeacherIds)) {
                payload.deletedTeacherIds.forEach(id => {
                  if (!data.deletedTeacherIds.includes(id)) data.deletedTeacherIds.push(id);
                });
              }
              const delSet = new Set(data.deletedTeacherIds.map(x => String(x).toLowerCase()));
              data.teachers = (data.teachers || []).filter(item => 
                !delSet.has(String(item.id).toLowerCase()) && 
                !delSet.has(String(item.username || '').toLowerCase()) &&
                !delSet.has(String(item.email || '').toLowerCase())
              );
              data.teacherApplications = (data.teacherApplications || []).filter(item => 
                !delSet.has(String(item.id).toLowerCase()) && 
                !delSet.has(String(item.teacherId || '').toLowerCase()) && 
                !delSet.has(String(item.username || '').toLowerCase()) &&
                !delSet.has(String(item.email || '').toLowerCase()) &&
                !data.deletedAppIds.includes(item.id)
              );
              changed = true;
            } else if (payload.action === "ADD_TEACHER_ANNOUNCEMENT") {
              if (payload.announcement && payload.announcement.id) {
                data.teacherAnnouncements = data.teacherAnnouncements || [];
                const exists = data.teacherAnnouncements.some(a => a.id === payload.announcement.id);
                if (!exists) {
                  data.teacherAnnouncements.unshift(payload.announcement);
                  changed = true;
                }
              }
            } else if (payload.action === "DELETE_TEACHER_ANNOUNCEMENT") {
              if (payload.announcementId) {
                data.teacherAnnouncements = (data.teacherAnnouncements || []).filter(a => a.id !== payload.announcementId);
                changed = true;
              }
            }

            if (changed) {
              saveClubData(data);
              if (window.PresidentPortal) {
                PresidentPortal.renderMetrics();
                PresidentPortal.renderApplicationsTable();
                if (PresidentPortal.renderTasksList) PresidentPortal.renderTasksList();
                if (PresidentPortal.renderAcademicSupervision) PresidentPortal.renderAcademicSupervision();
    if (PresidentPortal.renderAcademicSupervision) PresidentPortal.renderAcademicSupervision();
                if (PresidentPortal.renderMembersAccountsTable) PresidentPortal.renderMembersAccountsTable();
                if (PresidentPortal.renderTeachersAccountsTable) PresidentPortal.renderTeachersAccountsTable();
              }
              if (window.MembersPortal) {
                if (typeof MembersPortal.renderMemberDashboard === "function") MembersPortal.renderMemberDashboard();
                if (typeof MembersPortal.renderMembersDirectory === "function") MembersPortal.renderMembersDirectory();
                if (typeof MembersPortal.renderTasks === "function") MembersPortal.renderTasks();
              }
              if (window.TeacherPortal) {
                if (typeof TeacherPortal.renderTeacherDashboard === "function") TeacherPortal.renderTeacherDashboard();
              }
              if (typeof updateAuthUI === "function") updateAuthUI();
            }
          }
        } catch (e) {}
      };
      sse.onerror = () => {
        // SSE reconnects automatically by browser spec
      };
    } catch (e) {}
  }
  initRealtimeCloudSSE();
  // Sədrin verdiyi ən son təsdiq qərarlarını arxa planda dərhal sinxronlaşdır
  setTimeout(() => {
    if (typeof syncCloudApprovals === "function") {
      syncCloudApprovals().then(changed => {
        if (changed && typeof updateAuthUI === "function") updateAuthUI();
      });
    }
  }, 400);

  // Background Periodic Sync (15 saniyə)
  setInterval(() => {
    if (!document.hidden && navigator.onLine && typeof fetch === "function") {
      fetch("/api/sync?action=GET_ALL")
        .then(res => res.json())
        .then(res => {
          if (!res || !res.success) return;
          const data = getClubData();
          let changed = false;

          if (Array.isArray(res.tasks)) {
            data.tasks = data.tasks || [];
            res.tasks.forEach(st => {
              if (!st || !st.id) return;
              const idx = data.tasks.findIndex(t => t.id === st.id);
              if (idx === -1) {
                data.tasks.unshift(st);
                changed = true;
              } else if (JSON.stringify(data.tasks[idx]) !== JSON.stringify(st)) {
                data.tasks[idx] = { ...data.tasks[idx], ...st };
                changed = true;
              }
            });
          }

          if (Array.isArray(res.applications)) {
            data.applications = data.applications || [];
            res.applications.forEach(sa => {
              if (!sa || !sa.id) return;
              const idx = data.applications.findIndex(a => a.id === sa.id);
              if (idx === -1) {
                data.applications.unshift(sa);
                changed = true;
              }
            });
          }

          if (Array.isArray(res.members)) {
            data.members = data.members || [];
            res.members.forEach(sm => {
              if (!sm || !sm.username) return;
              const idx = data.members.findIndex(m => m.id === sm.id || (m.username && m.username.toLowerCase() === sm.username.toLowerCase()));
              if (idx === -1) {
                data.members.unshift(sm);
                changed = true;
              }
            });
          }

          if (Array.isArray(res.teachers)) {
            data.teachers = data.teachers || [];
            data.deletedTeacherIds = data.deletedTeacherIds || [];
            res.teachers.forEach(st => {
              if (!st || !st.id) return;
              if (data.deletedTeacherIds.includes(st.id) || (st.username && data.deletedTeacherIds.includes(st.username.toLowerCase()))) return;
              if (st.id === "teacher-fidan" || (st.username || "").toLowerCase() === "fidan") return;
              const idx = data.teachers.findIndex(t => t.id === st.id || (t.username && st.username && t.username.toLowerCase() === st.username.toLowerCase()));
              if (idx === -1) {
                data.teachers.unshift(st);
                changed = true;
              } else if (JSON.stringify(data.teachers[idx]) !== JSON.stringify(st)) {
                data.teachers[idx] = { ...data.teachers[idx], ...st };
                changed = true;
              }
            });
          }

          if (Array.isArray(res.teacherApplications)) {
            data.teacherApplications = data.teacherApplications || [];
            data.deletedAppIds = data.deletedAppIds || [];
            data.deletedTeacherIds = data.deletedTeacherIds || [];
            res.teacherApplications.forEach(sa => {
              if (!sa || !sa.id) return;
              if (data.deletedAppIds.includes(sa.id) || (sa.teacherId && data.deletedTeacherIds.includes(sa.teacherId))) return;
              if (sa.id === "teach-app-fidan" || sa.teacherId === "teacher-fidan" || (sa.username || "").toLowerCase() === "fidan") return;
              const idx = data.teacherApplications.findIndex(a => a.id === sa.id);
              if (idx === -1) {
                data.teacherApplications.unshift(sa);
                changed = true;
              } else if (JSON.stringify(data.teacherApplications[idx]) !== JSON.stringify(sa)) {
                data.teacherApplications[idx] = { ...data.teacherApplications[idx], ...sa };
                changed = true;
              }
            });
          }

          if (Array.isArray(res.teacherAnnouncements)) {
            data.teacherAnnouncements = data.teacherAnnouncements || [];
            res.teacherAnnouncements.forEach(san => {
              if (!san || !san.id) return;
              const idx = data.teacherAnnouncements.findIndex(an => an.id === san.id);
              if (idx === -1) {
                data.teacherAnnouncements.unshift(san);
                changed = true;
              }
            });
          }

          if (changed) {
            saveClubData(data);
            if (window.PresidentPortal) {
              PresidentPortal.renderMetrics();
              PresidentPortal.renderApplicationsTable();
              if (PresidentPortal.renderTasksList) PresidentPortal.renderTasksList();
                if (PresidentPortal.renderAcademicSupervision) PresidentPortal.renderAcademicSupervision();
    if (PresidentPortal.renderAcademicSupervision) PresidentPortal.renderAcademicSupervision();
              if (PresidentPortal.renderMembersAccountsTable) PresidentPortal.renderMembersAccountsTable();
              if (PresidentPortal.renderTeachersAccountsTable) PresidentPortal.renderTeachersAccountsTable();
            }
            if (window.MembersPortal) {
              if (typeof MembersPortal.renderMemberDashboard === "function") MembersPortal.renderMemberDashboard();
              if (typeof MembersPortal.renderMembersDirectory === "function") MembersPortal.renderMembersDirectory();
              if (typeof MembersPortal.renderTasks === "function") MembersPortal.renderTasks();
            }
            if (window.TeacherPortal) {
              if (typeof TeacherPortal.renderTeacherDashboard === "function") TeacherPortal.renderTeacherDashboard();
            }
            if (typeof updateAuthUI === "function") updateAuthUI();
          }
        })
        .catch(() => {});
    }
  }, 15000);
});

// Dinamik Hash dəyişməsinə nəzarət (URL-ə birbaşa #president-portal yazılarsa qoruma)
window.addEventListener("hashchange", () => {
  const hash = (window.location.hash || "").replace("#", "") || "home";
  if (hash === "president-portal" && !isPresidentLoggedIn()) {
    window.location.hash = "home";
    navigateTo("home");
    showToast("Bu idarəetmə bölməsi yalnız Klub Sədri üçün nəzərdə tutulub. Zəhmət olmasa daxil olun.", "warning");
    openPresidentLoginModal();
    return;
  }
  navigateTo(hash);
});

// Strict Horizontal Scroll Clamping across all devices, viewports & zoom levels
window.addEventListener("scroll", () => {
  if (window.scrollX !== 0 || document.documentElement.scrollLeft !== 0 || document.body.scrollLeft !== 0) {
    window.scrollTo(0, window.scrollY);
    document.documentElement.scrollLeft = 0;
    document.body.scrollLeft = 0;
  }
}, { passive: true });

// Toast System
function showToast(message, type = "info", onClick = null) {
  const container = document.getElementById("toastContainer");
  if (!container) return;

  const toast = document.createElement("div");
  let bg = "bg-slate-900 border-slate-700 text-white";
  let icon = "fa-circle-info text-cyan-400";

  if (type === "success") {
    bg = "bg-emerald-950 border-emerald-700/80 text-emerald-100";
    icon = "fa-circle-check text-emerald-400";
  } else if (type === "warning") {
    bg = "bg-amber-950 border-amber-700/80 text-amber-100";
    icon = "fa-triangle-exclamation text-amber-400";
  } else if (type === "error") {
    bg = "bg-rose-950 border-rose-700/80 text-rose-100";
    icon = "fa-circle-xmark text-rose-400";
  }

  const cursorClass = typeof onClick === "function" ? "cursor-pointer hover:scale-102 hover:border-teal-400" : "";
  toast.className = `flex items-center gap-3 px-4 py-3 rounded-xl border shadow-2xl transition-all duration-300 transform translate-y-2 opacity-0 text-sm font-medium ${cursorClass} ${bg}`;
  toast.innerHTML = `<i class="fa-solid ${icon} text-base shrink-0"></i> <span class="flex-1">${message}</span>`;

  if (typeof onClick === "function") {
    toast.addEventListener("click", () => {
      try { onClick(); } catch (e) {}
      toast.remove();
    });
  }

  container.appendChild(toast);

  requestAnimationFrame(() => {
    toast.classList.remove("translate-y-2", "opacity-0");
  });

  setTimeout(() => {
    toast.classList.add("opacity-0", "translate-y-2");
    setTimeout(() => toast.remove(), 300);
  }, 4500);
}
window.showToast = showToast;

// Navigation and Tab Switching
function navigateTo(sectionId) {
  // Strict guard for president portal
  if (sectionId === "president-portal" && !isPresidentLoggedIn()) {
    showToast("Bu idarəetmə bölməsi yalnız Klub Sədri üçün nəzərdə tutulub. Zəhmət olmasa daxil olun.", "warning");
    window.location.hash = "home";
    openPresidentLoginModal();
    return;
  }

  // Teacher portal: seamlessly open gateway or dashboard
  if (sectionId === "teacher-portal" && window.TeacherPortal) {
    TeacherPortal.renderTeacherDashboard();
  }

  const sections = document.querySelectorAll(".app-section");
  const navLinks = document.querySelectorAll(".nav-link");

  sections.forEach(s => s.classList.add("hidden"));
  navLinks.forEach(l => l.classList.remove("text-teal-400", "border-b-2", "border-teal-400"));

  // Ensure logo brand or other non-nav items never keep border-b-2 border-teal-400
  document.querySelectorAll(".border-b-2.border-teal-400:not(.nav-link)").forEach(el => {
    el.classList.remove("border-b-2", "border-teal-400");
  });

  const target = document.getElementById(sectionId);
  if (target) {
    target.classList.remove("hidden");
    document.documentElement.removeAttribute("data-initial-section");
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    document.documentElement.scrollLeft = 0;
    document.body.scrollLeft = 0;
  } else {
    document.documentElement.removeAttribute("data-initial-section");
  }

  const activeLink = document.querySelector(`.nav-link[data-target="${sectionId}"]`);
  if (activeLink) {
    activeLink.classList.add("text-teal-400", "border-b-2", "border-teal-400");
  }

  // Mobil alt naviqasiya zolağında aktiv tabı vurğula
  const mobileTabBtns = document.querySelectorAll(".mobile-tab-btn");
  mobileTabBtns.forEach(btn => {
    const isTarget = btn.getAttribute("data-target") === sectionId;
    btn.classList.toggle("text-teal-400", isTarget);
    btn.classList.toggle("text-slate-400", !isTarget);
    btn.classList.toggle("font-bold", isTarget);
  });

  window.location.hash = sectionId;

  // Dynamic SEO and Title synchronization for all URLs and paths
  const seoSectionMeta = {
    home: {
      title: "CarboxMol Bioinformatika Klubu | Hesablama Biologiyası, Genomika & Süni İntellekt Mərkəzi",
      description: "CarboxMol Bioinformatika Klubu — Qərbi Kaspi Universiteti və AR ETN MBİ (IMB) əməkdaşlığı ilə hesablama struktur biologiyası, Python, R və süni intellekt tədqiqat mərkəzi.",
      canonical: "https://carboxmol-bioinformatics-club.github.io/#home"
    },
    documents: {
      title: "Rəsmi Sənədlər və Əsasnamə | CarboxMol Bioinformatika Klubu",
      description: "Qərbi Kaspi Universiteti Bioinformatika Klubunun rəsmi əsasnaməsi, təşkilati strukturu, illik fəaliyyət planı, sillabusu və üzvlük sənədləri toplusu.",
      canonical: "https://carboxmol-bioinformatics-club.github.io/documents/"
    },
    curriculum: {
      title: "28 Həftəlik Akademik Sillabus və Tədris Planı | CarboxMol Bioinformatika Klubu",
      description: "Python, Biopython, R Bioconductor, DESeq2, Linux/Bash, zülalların 3D vizuallaşdırılması (AlphaFold, PyMOL, ChimeraX, Carbox & CarboxMol) və maşın öyrənməsi üzrə tam illik tədris planı.",
      canonical: "https://carboxmol-bioinformatics-club.github.io/curriculum/"
    },
    biotools: {
      title: "Bioinformatika Alətləri (Carbox, CarboxMol, AlphaFold, PyMOL) | CarboxMol Bioinformatika Klubu",
      description: "Carbox (həndəsi analiz), CarboxMol (3D vizualizator), AlphaFold, PyMOL, ChimeraX, Coot, GemmiMol, Biopython, DESeq2 və BioMeet alətləri toplusu.",
      canonical: "https://carboxmol-bioinformatics-club.github.io/biotools/"
    },
    resources: {
      title: "Elmi Resurslar və Rəqəmsal Kitabxana | CarboxMol Bioinformatika Klubu",
      description: "Bioinformatika, Molekulyar Biologiya, Biokimya və Genetika üzrə qlobal və yerli akademik dərsliklər, vəsaitlər və metodik bazası.",
      canonical: "https://carboxmol-bioinformatics-club.github.io/resources/"
    },
    events: {
      title: "Elmi Seminarlar, Vorkşoplar və Hakatonlar | CarboxMol Bioinformatika Klubu",
      description: "Prof. Qərib Mürşüdov (Cambridge MRC LMB) və beynəlxalq alimlərin iştirakı ilə elmi seminarlar, laboratoriya vorkşopları və tələbə hakatonları.",
      canonical: "https://carboxmol-bioinformatics-club.github.io/events/"
    },
    announcements: {
      title: "Rəsmi Elanlar, Vakansiyalar və Xəbərlər | CarboxMol Bioinformatika Klubu",
      description: "CarboxMol Bioinformatika Klubu rəsmi elanları: İdarə Heyətinə 2 Koordinator seçimi, beynəlxalq elmi seminarlar, laboratoriya xəbərləri və hakaton anonsları.",
      canonical: "https://carboxmol-bioinformatics-club.github.io/announcements/"
    },
    collaborators: {
      title: "Beynəlxalq Alimlər və Tərəfdaş Təşkilatlar | CarboxMol Bioinformatika Klubu",
      description: "Cambridge Universiteti MRC LMB, Oxford Universiteti, AR ETN Molekulyar Biologiya İnstitutu və Qərbi Kaspi Universiteti alimləri ilə beynəlxalq elmi əlaqələr.",
      canonical: "https://carboxmol-bioinformatics-club.github.io/collaborators/"
    },
    biomeet: {
      title: "BioMeet: Canlı Elmi Otaqlar və Video Konfrans | CarboxMol Bioinformatika Klubu",
      description: "Bioinformatika dərsləri, laboratoriya tədqiqatları və virtual elmi müzakirələr üçün inteqrasiya olunmuş WebRTC canlı video konfrans mühiti.",
      canonical: "https://carboxmol-bioinformatics-club.github.io/biomeet/"
    },
    "members-portal": {
      title: "Tələbə və Tədqiqatçı Şəxsi Kabineti | CarboxMol Bioinformatika Klubu",
      description: "Klub üzvləri üçün fərdi laboratoriya tapşırıqları, elmi müzakirələr, irəliləyiş göstəriciləri və nailiyyət sertifikatları portalı.",
      canonical: "https://carboxmol-bioinformatics-club.github.io/#members-portal"
    },
    "teacher-portal": {
      title: "Müəllim və Mentor İdarəetmə Paneli | CarboxMol Bioinformatika Klubu",
      description: "Akademik mentorlar və müəllimlər üçün tələbə qiymətləndirmə, tapşırıq monitorinqi və laboratoriya idarəetmə paneli.",
      canonical: "https://carboxmol-bioinformatics-club.github.io/#teacher-portal"
    },
    "president-portal": {
      title: "Klub Sədri İdarəetmə Paneli | CarboxMol Bioinformatika Klubu",
      description: "Klub Sədri Süleyman Hacızadə üçün rəsmi müraciətlərin təsdiqi, tələbə və müəllim heyətinin idarə edilməsi mərkəzi.",
      canonical: "https://carboxmol-bioinformatics-club.github.io/#president-portal"
    },
    register: {
      title: "Kluba Qeydiyyat və Üzvlük Forması | CarboxMol Bioinformatika Klubu",
      description: "Qərbi Kaspi Universiteti və respublikanın bütün universitet tələbələri üçün CarboxMol Bioinformatika Klubuna rəsmi qeydiyyat və üzvlük forması.",
      canonical: "https://carboxmol-bioinformatics-club.github.io/register/"
    }
  };

  const metaInfo = seoSectionMeta[sectionId] || seoSectionMeta.home;
  if (window.SeoResponsiveEngine) {
    window.SeoResponsiveEngine.syncSeo(sectionId);
  } else if (metaInfo) {
    document.title = metaInfo.title;
    const descEl = document.getElementById("seoDescription") || document.querySelector('meta[name="description"]');
    if (descEl) descEl.setAttribute("content", metaInfo.description);
    const ogTitleEl = document.getElementById("ogTitle") || document.querySelector('meta[property="og:title"]');
    if (ogTitleEl) ogTitleEl.setAttribute("content", metaInfo.title);
    const ogDescEl = document.getElementById("ogDescription") || document.querySelector('meta[property="og:description"]');
    if (ogDescEl) ogDescEl.setAttribute("content", metaInfo.description);
    const ogUrlEl = document.getElementById("ogUrl") || document.querySelector('meta[property="og:url"]');
    if (ogUrlEl) ogUrlEl.setAttribute("content", metaInfo.canonical);
    const canonEl = document.getElementById("seoCanonical") || document.querySelector('link[rel="canonical"]');
    if (canonEl) canonEl.setAttribute("href", metaInfo.canonical);
  }

  // Refresh dynamic portals on navigate
  if (sectionId === "president-portal" && window.PresidentPortal) {
    PresidentPortal.renderMetrics();
    PresidentPortal.renderApplicationsTable();
    if (PresidentPortal.renderTasksList) PresidentPortal.renderTasksList();
                if (PresidentPortal.renderAcademicSupervision) PresidentPortal.renderAcademicSupervision();
    if (PresidentPortal.renderAcademicSupervision) PresidentPortal.renderAcademicSupervision();
    if (PresidentPortal.renderMembersAccountsTable) PresidentPortal.renderMembersAccountsTable();
    if (PresidentPortal.renderTeachersAccountsTable) PresidentPortal.renderTeachersAccountsTable();
    if (PresidentPortal.renderMemberCustomTasks) PresidentPortal.renderMemberCustomTasks();
    if (PresidentPortal.renderMemberNotes) PresidentPortal.renderMemberNotes();
    if (PresidentPortal.renderEventsTable) PresidentPortal.renderEventsTable();
    if (PresidentPortal.startAutoSync) PresidentPortal.startAutoSync();
    else if (PresidentPortal.syncFromCloud) PresidentPortal.syncFromCloud(true);
    if (typeof PresidentPortal.fetchFromFormSubmitApi === "function") {
      PresidentPortal.fetchFromFormSubmitApi(null, true);
    }
  } else if (window.PresidentPortal && PresidentPortal.stopAutoSync) {
    PresidentPortal.stopAutoSync();
  }
  if (sectionId === "members-portal" && window.MembersPortal) {
    if (MembersPortal.renderMemberDashboard) {
      MembersPortal.renderMemberDashboard();
    } else {
      if (MembersPortal.renderTasks) MembersPortal.renderTasks();
      MembersPortal.renderDiscussions();
      MembersPortal.renderProgressTracker();
    }
    if (typeof MembersPortal.renderMembersDirectory === "function") {
      MembersPortal.renderMembersDirectory();
    }
  }
  if (sectionId === "teacher-portal" && window.TeacherPortal) {
    TeacherPortal.renderTeacherDashboard();
  }
  if (sectionId === "collaborators" && window.CollaboratorsEngine) {
    CollaboratorsEngine.renderCollaborators();
  }
  if (sectionId === "resources" && window.ResourcesEngine) {
    ResourcesEngine.renderResourcesGrid();
  }
  if (sectionId === "biomeet" && window.BioMeetEngine) {
    BioMeetEngine.renderRoomsList();
    BioMeetEngine.renderMeetings();
    BioMeetEngine.renderRecordingsArchive();
    BioMeetEngine.updateLocalParticipantUI();
    BioMeetEngine.announceRoomPresence();
  }

  // Bilingual translation re-sync on navigation
  if (window.CarboxMolI18n && window.CarboxMolI18n.getLanguage() === 'en') {
    setTimeout(function() {
      window.CarboxMolI18n.setLanguage('en');
    }, 20);
  }
}
window.navigateTo = navigateTo;
window.showSection = navigateTo;

function initNavigation() {
  document.querySelectorAll("[data-target]").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const target = btn.getAttribute("data-target");
      navigateTo(target);

      // Close mobile menu if open
      const mobileMenu = document.getElementById("mobileMenu");
      if (mobileMenu && !mobileMenu.classList.contains("hidden")) {
        mobileMenu.classList.add("hidden");
      }
    });
  });

  // Mobile menu toggle
  const mobileToggle = document.getElementById("mobileMenuToggle");
  const mobileMenu = document.getElementById("mobileMenu");
  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
  }
}

// Render Documents
function initDocumentsView() {
  const container = document.getElementById("documentsGrid");
  if (!container) return;

  const data = getClubData();
  const docs = data.documents || [];

  container.innerHTML = docs.map(doc => `
    <div class="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 hover:border-teal-500/40 transition duration-300 flex flex-col justify-between group shadow-lg shadow-black/20">
      <div>
        <div class="flex items-center justify-between mb-4">
          <div class="w-12 h-12 rounded-xl bg-teal-950/60 border border-teal-800/40 flex items-center justify-center text-teal-400 text-xl group-hover:scale-110 transition duration-300">
            <i class="fa-solid ${doc.icon}"></i>
          </div>
          <span class="text-xs px-2.5 py-1 rounded-full font-medium bg-slate-800 text-slate-300 border border-slate-700">
            ${doc.category}
          </span>
        </div>
        <h4 class="text-lg font-bold text-white mb-1 group-hover:text-teal-300 transition">${doc.title}</h4>
        <p class="text-xs text-teal-400/80 mb-3 font-medium">${doc.subtitle}</p>
        <p class="text-xs text-slate-400 leading-relaxed mb-6">${doc.description}</p>
      </div>

      <div class="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-2">
        <button onclick="openDocumentPreview('${doc.id}')" class="flex-1 py-2 px-3 rounded-lg bg-teal-600/20 hover:bg-teal-600/30 text-teal-300 border border-teal-500/30 text-xs font-semibold flex items-center justify-center gap-1.5 transition">
          <i class="fa-solid fa-eye"></i> İncələ
        </button>
        <a href="${doc.pdfUrl}" target="_blank" rel="noopener noreferrer" class="p-2 rounded-lg bg-rose-950/60 hover:bg-rose-900 text-rose-300 border border-rose-800/80 text-xs flex items-center gap-1 transition" title="${doc.title} PDF-ni yeni tabda aç">
          <i class="fa-solid fa-arrow-up-right-from-square text-rose-400"></i> <span class="text-[11px] font-semibold">PDF Aç</span>
        </a>
        ${doc.docxUrl ? `<a href="${doc.docxUrl}" download class="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs transition" title="Word (.docx) Yüklə"><i class="fa-solid fa-file-word text-blue-400"></i></a>` : ''}
      </div>
    </div>
  `).join("");
}

// Modal Document Previewer (Uses inAppDocViewer for full Web & PWA back navigation)
async function openDocumentPreview(docId) {
  const data = getClubData();
  const doc = (data.documents || []).find(d => d.id === docId);
  if (!doc) return;

  const keyMap = {
    "01_erize": "01_Muraciet_Erizesi",
    "02_esasname": "02_Esasname",
    "03_struktur": "03_Teshkilati_Struktur",
    "04_plan": "04_Illik_Fealiyyet_Plani_ve_Sillabus",
    "05_uzvluk": "05_Uzvluk_Formasi",
    "06_elmi_koordinator": "06_Elm_ve_Tedris_Koordinatoru_Vezife_Telimati",
    "07_teshkilat_media_koordinatoru": "07_Teshkilat_ve_Media_Koordinatoru_Vezife_Telimati",
    "tam_paket": "WCU_Bioinformatika_Klubu_Tam_Paket"
  };
  const docKey = keyMap[docId] || docId;
  const rawText = window.DOCUMENT_CONTENTS && window.DOCUMENT_CONTENTS[docKey] ? window.DOCUMENT_CONTENTS[docKey] : "";

  inAppDocViewer.open({
    title: doc.title,
    type: doc.category || "Sənəd",
    url: doc.pdfUrl || "",
    rawContent: rawText || doc.description
  });
}
window.openDocumentPreview = openDocumentPreview;

// ==========================================
// IN-APP DOCUMENT VIEWER CONTROLLER (WEB & PWA ZERO-DOWNLOAD READER)
// ==========================================
const inAppDocViewer = {
  currentDoc: null,

  openTaskDoc(taskId) {
    const data = getClubData();
    const task = (data.tasks || []).find(t => t.id === taskId);
    if (!task || !task.document) {
      showToast("Bu tapşırıqda əlavə sənəd tapılmadı.", "warning");
      return;
    }
    this.open({
      title: task.document.name || (task.title + " - Sənəd"),
      type: task.document.type || "sənəd",
      size: task.document.size || "",
      url: task.document.url || "",
      rawContent: task.document.rawContent || ""
    });
  },

  open(doc) {
    this.currentDoc = doc;
    const modal = document.getElementById("inAppDocViewerModal");
    const titleEl = document.getElementById("inAppDocViewerTitle");
    const badgeEl = document.getElementById("inAppDocViewerTypeBadge");
    const bodyEl = document.getElementById("inAppDocViewerBody");

    if (!modal || !bodyEl) return;

    if (titleEl) titleEl.innerText = doc.title || "Sənəd";
    if (badgeEl) badgeEl.innerText = (doc.type || "DOC").toUpperCase();

    // Push history state so browser & device back buttons work seamlessly in PWA and Web
    try {
      window.history.pushState({ inAppDocViewer: true }, "");
    } catch (e) {}

    document.body.classList.add("overflow-hidden");
    modal.classList.remove("hidden");

    this.renderContent(doc, bodyEl);
  },

  renderContent(doc, container) {
    const type = (doc.type || "").toLowerCase();
    const url = doc.url || "";
    const raw = doc.rawContent || "";

    // 1. FASTA / PDB / Nucleotide sequence format
    if (type.includes("fasta") || (raw && raw.trim().startsWith(">"))) {
      container.innerHTML = this.renderFastaViewer(doc);
      return;
    }

    // 2. Markdown format
    if (type.includes("markdown") || type.includes("md") || raw.includes("## ") || raw.includes("```")) {
      container.innerHTML = this.renderMarkdownViewer(doc);
      return;
    }

    // 3. CSV format
    if (type.includes("csv") || (raw && raw.includes(",") && raw.split("\n").length > 3)) {
      container.innerHTML = this.renderCsvViewer(doc);
      return;
    }

    // 4. PDF format
    if (type.includes("pdf") || (url && url.toLowerCase().endsWith(".pdf")) || (url && url.startsWith("data:application/pdf"))) {
      if (url) {
        container.innerHTML = `
          <div class="w-full h-full min-h-[82vh] flex flex-col rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 shadow-2xl">
            <iframe src="${url}#toolbar=0" class="w-full flex-1 min-h-[82vh] border-0 bg-slate-900" title="${escapeHtml(doc.title)}"></iframe>
          </div>
        `;
        return;
      }
    }

    // 5. Office Documents (docx, xlsx, pptx) with external URL
    if (url && (url.endsWith(".docx") || url.endsWith(".doc") || url.endsWith(".xlsx") || url.endsWith(".pptx"))) {
      if (url.startsWith("http")) {
        const viewerUrl = `https://docs.google.com/viewer?url=${encodeURIComponent(url)}&embedded=true`;
        container.innerHTML = `
          <div class="w-full h-full min-h-[82vh] flex flex-col rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 shadow-2xl">
            <iframe src="${viewerUrl}" class="w-full flex-1 min-h-[82vh] border-0" title="${escapeHtml(doc.title)}"></iframe>
          </div>
        `;
        return;
      }
    }

    // 6. Generic Text / Code / Fallback viewer
    if (raw) {
      container.innerHTML = `
        <div class="max-w-5xl mx-auto space-y-4">
          <div class="flex items-center justify-between p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs">
            <span class="text-teal-400 font-mono"><i class="fa-solid fa-code mr-1"></i> Format: ${(doc.type || 'Mətn').toUpperCase()}</span>
            <span class="text-slate-400">${raw.length} simvol</span>
          </div>
          <pre class="bg-slate-900/90 border border-slate-800 p-6 rounded-2xl text-xs font-mono text-slate-200 overflow-x-auto whitespace-pre-wrap leading-relaxed shadow-xl"><code>${escapeHtml(raw)}</code></pre>
        </div>
      `;
      return;
    }

    if (url) {
      container.innerHTML = `
        <div class="w-full h-full min-h-[82vh] flex flex-col rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 shadow-2xl">
          <iframe src="${url}" class="w-full flex-1 min-h-[82vh] border-0" title="${escapeHtml(doc.title)}"></iframe>
        </div>
      `;
      return;
    }

    container.innerHTML = `
      <div class="py-20 text-center text-slate-400">
        <i class="fa-solid fa-file-circle-exclamation text-4xl mb-3 text-amber-400 block"></i>
        <h4 class="text-lg font-bold text-white mb-1">${escapeHtml(doc.title)}</h4>
        <p class="text-xs">Bu sənədin saytdaxili mətni hazırlanma mərhələsindədir.</p>
      </div>
    `;
  },

  renderFastaViewer(doc) {
    const raw = doc.rawContent || "";
    const lines = raw.trim().split("\n");
    const header = lines[0].startsWith(">") ? lines[0] : ">Ardıcıllıq";
    const seq = lines.filter(l => !l.startsWith(">")).join("").toUpperCase();

    const len = seq.length;
    const gCount = (seq.match(/G/g) || []).length;
    const cCount = (seq.match(/C/g) || []).length;
    const aCount = (seq.match(/A/g) || []).length;
    const tCount = (seq.match(/T/g) || []).length;
    const gcPct = len > 0 ? ((gCount + cCount) / len * 100).toFixed(2) : 0;

    return `
      <div class="max-w-5xl mx-auto space-y-4">
        <!-- FASTA Header Card -->
        <div class="bg-slate-900/95 border border-teal-500/40 p-4 sm:p-5 rounded-2xl space-y-3">
          <div class="flex items-start justify-between gap-3">
            <div>
              <span class="text-[10px] font-bold uppercase tracking-wider text-teal-400 px-2 py-0.5 rounded bg-teal-950 border border-teal-800 font-mono">FASTA Sekvens Bazası</span>
              <h3 class="text-sm sm:text-base font-bold text-white font-mono mt-1">${escapeHtml(header)}</h3>
            </div>
            <button onclick="inAppDocViewer.copySequence('${seq}')" class="px-3 py-1.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 transition shadow">
              <i class="fa-regular fa-copy"></i> Sekvensi Kopyala
            </button>
          </div>

          <!-- Sequence Metrics Grid -->
          <div class="grid grid-cols-2 sm:grid-cols-5 gap-2 pt-2 border-t border-slate-800 text-xs">
            <div class="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-center">
              <span class="text-[10px] text-slate-400 block">Uzunluq (bp):</span>
              <strong class="text-white font-mono text-sm">${len.toLocaleString()} bp</strong>
            </div>
            <div class="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-center">
              <span class="text-[10px] text-slate-400 block">GC Nisbəti:</span>
              <strong class="text-teal-400 font-mono text-sm">${gcPct}%</strong>
            </div>
            <div class="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-center">
              <span class="text-[10px] text-emerald-400 block">A (Adenin):</span>
              <strong class="text-white font-mono text-xs">${aCount}</strong>
            </div>
            <div class="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-center">
              <span class="text-[10px] text-rose-400 block">T (Timin):</span>
              <strong class="text-white font-mono text-xs">${tCount}</strong>
            </div>
            <div class="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-center">
              <span class="text-[10px] text-amber-400 block">G & C:</span>
              <strong class="text-white font-mono text-xs">${gCount + cCount}</strong>
            </div>
          </div>
        </div>

        <!-- Sequence High-Tech Monospace Block -->
        <div class="bg-slate-950 border border-slate-800 rounded-2xl p-4 sm:p-6 overflow-x-auto shadow-2xl">
          <div class="font-mono text-xs text-slate-300 leading-relaxed tracking-wider break-all whitespace-pre-wrap select-all">
            ${escapeHtml(seq)}
          </div>
        </div>
      </div>
    `;
  },

  formatMarkdown(raw) {
    if (!raw) return "";

    // Replace any legacy flowchart/mermaid raw blocks if present
    raw = raw.replace(/```mermaid[\s\S]*?```/g, "");
    raw = raw.replace(/flowchart TD[\s\S]*?(\n\n|$)/g, "");

    const lines = raw.split("\n");
    let html = "";
    let inList = false;
    let listType = "ul";
    let inTable = false;
    let tableRows = [];
    let inCode = false;
    let codeBuffer = [];

    const closeList = () => {
      if (inList) {
        html += listType === "ul" ? "</ul>" : "</ol>";
        inList = false;
      }
    };

    const formatInline = (text) => {
      let t = escapeHtml(text);
      t = t.replace(/\*\*(.+?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>');
      t = t.replace(/\*(.+?)\*/g, '<em class="text-slate-300">$1</em>');
      t = t.replace(/`([^`]+)`/g, '<code class="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800 text-teal-300 font-mono text-[11px]">$1</code>');
      t = t.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-teal-400 hover:text-teal-300 underline font-medium">$1</a>');
      return t;
    };

    const flushTable = () => {
      if (!inTable || tableRows.length === 0) return;
      const headerRow = tableRows[0];
      const dataRows = tableRows.slice(1).filter(r => !r.every(c => /^[-:\s]+$/.test(c)));
      
      html += `
        <div class="overflow-x-auto my-6 rounded-2xl border border-slate-800 bg-slate-950/90 shadow-2xl">
          <table class="w-full text-xs text-left text-slate-200">
            <thead class="bg-slate-900/90 text-teal-300 uppercase font-semibold text-[11px] border-b border-slate-800">
              <tr>
                ${headerRow.map(c => `<th class="px-4 py-3 whitespace-nowrap">${formatInline(c.trim())}</th>`).join("")}
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-800/60">
              ${dataRows.map(row => `
                <tr class="hover:bg-slate-900/40 transition">
                  ${row.map(c => `<td class="px-4 py-2.5 leading-relaxed">${formatInline(c.trim())}</td>`).join("")}
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      `;
      inTable = false;
      tableRows = [];
    };

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const trimmed = line.trim();

      // Code blocks
      if (trimmed.startsWith("```")) {
        if (inCode) {
          html += `<pre class="my-4 p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs overflow-x-auto text-emerald-400"><code>${escapeHtml(codeBuffer.join("\n"))}</code></pre>`;
          codeBuffer = [];
          inCode = false;
        } else {
          closeList();
          flushTable();
          inCode = true;
        }
        continue;
      }
      if (inCode) {
        codeBuffer.push(line);
        continue;
      }

      // Detect hierarchy section and render high-tech org chart card
      if (trimmed.includes("Təşkilati İyerarxiya") || (trimmed.includes("Klub Sədri") && trimmed.includes("President") && lines[i + 1] && (lines[i + 1].includes("Klub Üzvləri") || lines[i + 1].includes("└──")))) {
        closeList();
        flushTable();
        html += `
          <div class="my-6 p-6 rounded-2xl bg-gradient-to-b from-slate-900/90 via-slate-900 to-slate-950 border border-teal-500/30 shadow-2xl">
            <div class="text-[11px] font-bold text-teal-400 uppercase tracking-widest text-center mb-4 flex items-center justify-center gap-2">
              <i class="fa-solid fa-sitemap"></i> Təşkilati İdarəetmə Strukturu
            </div>
            <div class="flex flex-col items-center gap-3 max-w-lg mx-auto">
              <div class="w-full p-4 rounded-2xl bg-gradient-to-r from-teal-950/80 via-slate-900 to-teal-950/80 border border-teal-500/40 text-center shadow-lg">
                <span class="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-teal-500/20 text-teal-300 border border-teal-500/30 uppercase tracking-wider mb-1.5">
                  <i class="fa-solid fa-crown text-amber-400 mr-1"></i> Klub Sədri (President)
                </span>
                <h5 class="text-base font-extrabold text-white">Süleyman Mehdi oğlu Hacızadə</h5>
                <p class="text-xs text-slate-300 mt-0.5">WCU Biologiya &amp; ETN Molekulyar Biologiya İnstitutu (Böyük Laborant)</p>
              </div>
              <div class="flex flex-col items-center text-teal-400 my-0.5">
                <div class="w-0.5 h-5 bg-gradient-to-b from-teal-400 to-indigo-500"></div>
                <i class="fa-solid fa-chevron-down text-xs text-indigo-400"></i>
              </div>
              <div class="w-full p-4 rounded-2xl bg-gradient-to-r from-indigo-950/70 via-slate-900 to-indigo-950/70 border border-indigo-500/40 text-center shadow-lg">
                <span class="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 uppercase tracking-wider mb-1.5">
                  <i class="fa-solid fa-chalkboard-user text-indigo-400 mr-1"></i> Dəvətli Beynəlxalq Alimlər &amp; Akademik Müəllimlər
                </span>
                <p class="text-[11px] text-cyan-300 font-semibold">Dəvətli Alimlər: Prof. Qərib Mürşüdov (MRC LMB / ETN MBİ) • Elbay Əliyev (Univ. of Colorado Anschutz)</p>
                <p class="text-xs text-slate-200 font-semibold mt-1">Müəllimlər: Fidan Məhərrəmova (ICL) • Leyla Budaqova (WCU / ETN MBİ) • Süsən Həsənova (BDU) • Sefanya Hacızadə (WCU)</p>
              </div>
              <div class="flex flex-col items-center text-teal-400 my-0.5">
                <div class="w-0.5 h-5 bg-gradient-to-b from-indigo-400 to-teal-500"></div>
                <i class="fa-solid fa-chevron-down text-xs"></i>
              </div>
              <div class="w-full p-4 rounded-2xl bg-slate-900/90 border border-slate-700/80 text-center shadow-lg">
                <span class="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-slate-800 text-teal-300 border border-slate-700 uppercase tracking-wider mb-1.5">
                  <i class="fa-solid fa-users text-teal-400 mr-1"></i> Klub Üzvləri (Members)
                </span>
                <p class="text-xs text-slate-200 font-medium">Biologiya, Biotexnologiya və İT Tələbələri</p>
              </div>
            </div>
          </div>
        `;
        if (lines[i + 1] && (lines[i + 1].includes("Klub Üzvləri") || lines[i + 1].includes("└──"))) i++;
        continue;
      }

      // Tree node
      if (trimmed.startsWith("└──")) {
        closeList();
        flushTable();
        html += `<div class="ml-6 my-1.5 pl-3 border-l-2 border-teal-500/40 text-teal-300 text-xs sm:text-sm font-medium flex items-center gap-2">${formatInline(trimmed.replace(/^└──\s*/, ""))}</div>`;
        continue;
      }

      // Tables
      if (trimmed.startsWith("|") && trimmed.endsWith("|")) {
        closeList();
        inTable = true;
        const cells = trimmed.split("|").slice(1, -1);
        tableRows.push(cells);
        continue;
      } else if (inTable) {
        flushTable();
      }

      // Empty line
      if (!trimmed) {
        closeList();
        continue;
      }

      // Horizontal rule
      if (trimmed === "---" || trimmed === "***" || trimmed === "___") {
        closeList();
        html += '<hr class="my-6 border-slate-800" />';
        continue;
      }

      // Headings
      if (trimmed.startsWith("#### ")) {
        closeList();
        html += `<h4 class="text-sm sm:text-base font-semibold text-teal-400 mt-5 mb-2">${formatInline(trimmed.slice(5))}</h4>`;
        continue;
      }
      if (trimmed.startsWith("### ")) {
        closeList();
        html += `<h3 class="text-base sm:text-lg font-bold text-white mt-6 mb-2.5 flex items-center gap-2">${formatInline(trimmed.slice(4))}</h3>`;
        continue;
      }
      if (trimmed.startsWith("## ")) {
        closeList();
        html += `<h2 class="text-lg sm:text-xl font-bold text-teal-300 mt-7 mb-3">${formatInline(trimmed.slice(3))}</h2>`;
        continue;
      }
      if (trimmed.startsWith("# ")) {
        closeList();
        html += `<h1 class="text-xl sm:text-2xl font-black text-white mt-8 mb-4 pb-2 border-b border-slate-800">${formatInline(trimmed.slice(2))}</h1>`;
        continue;
      }

      // Unordered lists
      if (trimmed.startsWith("* ") || trimmed.startsWith("- ") || trimmed.startsWith("+ ")) {
        if (!inList || listType !== "ul") {
          closeList();
          inList = true;
          listType = "ul";
          html += '<ul class="space-y-1.5 my-2">';
        }
        const indentMatch = line.match(/^(\s*)/);
        const indentLevel = indentMatch && indentMatch[1].length >= 2 ? "ml-8" : "ml-4";
        html += `<li class="${indentLevel} list-disc text-slate-300 leading-relaxed text-xs sm:text-sm pl-1">${formatInline(trimmed.slice(2))}</li>`;
        continue;
      }

      // Ordered lists
      const numMatch = trimmed.match(/^(\d+)\.\s+(.*)/);
      if (numMatch) {
        if (!inList || listType !== "ol") {
          closeList();
          inList = true;
          listType = "ol";
          html += '<ol class="space-y-1.5 my-2">';
        }
        html += `<li class="ml-5 list-decimal text-slate-300 leading-relaxed text-xs sm:text-sm pl-1">${formatInline(numMatch[2])}</li>`;
        continue;
      }

      // Normal paragraph
      closeList();
      html += `<p class="my-2.5 text-slate-300 text-xs sm:text-sm leading-relaxed">${formatInline(trimmed)}</p>`;
    }

    closeList();
    flushTable();

    return html;
  },

  renderMarkdownViewer(doc) {
    const raw = doc.rawContent || "";
    const formattedHtml = this.formatMarkdown(raw);
    return `
      <div class="max-w-4xl mx-auto bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-4 shadow-2xl">
        <div class="flex items-center justify-between pb-3 border-b border-slate-800">
          <div class="flex items-center gap-2">
            <span class="w-2.5 h-2.5 rounded-full bg-teal-400"></span>
            <span class="text-xs font-bold text-white uppercase tracking-wider">${escapeHtml(doc.title)}</span>
          </div>
          <span class="text-[11px] text-teal-400 font-mono">Rəsmi Sənəd</span>
        </div>
        <div class="prose prose-invert max-w-none text-xs sm:text-sm text-slate-200 leading-relaxed font-sans bg-slate-950 p-6 sm:p-8 rounded-2xl border border-slate-800/80">
          ${formattedHtml}
        </div>
      </div>
    `;
  },

  renderCsvViewer(doc) {
    const raw = doc.rawContent || "";
    const lines = raw.trim().split("\n").map(l => l.split(","));
    if (lines.length === 0) return `<div class="text-slate-400 text-center">CSV boşdur</div>`;

    const header = lines[0];
    const rows = lines.slice(1);

    return `
      <div class="max-w-5xl mx-auto space-y-4">
        <div class="flex items-center justify-between p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs">
          <span class="text-teal-400 font-mono"><i class="fa-solid fa-table mr-1"></i> Cədvəl Məlumatları (${rows.length} sətir)</span>
          <span class="text-slate-400">${header.length} sütun</span>
        </div>
        <div class="rounded-2xl border border-slate-800 overflow-x-auto bg-slate-950">
          <table class="w-full text-xs text-left text-slate-300">
            <thead class="bg-slate-900 text-teal-300 uppercase font-mono text-[11px] border-b border-slate-800">
              <tr>${header.map(h => `<th class="px-4 py-3">${escapeHtml(h.trim())}</th>`).join("")}</tr>
            </thead>
            <tbody class="divide-y divide-slate-800/60 font-mono">
              ${rows.map(r => `
                <tr class="hover:bg-slate-900/50 transition">
                  ${r.map(c => `<td class="px-4 py-2.5 whitespace-nowrap">${escapeHtml(c.trim())}</td>`).join("")}
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      </div>
    `;
  },

  copyContent() {
    if (!this.currentDoc) return;
    const textToCopy = this.currentDoc.rawContent || this.currentDoc.url || this.currentDoc.title;
    navigator.clipboard.writeText(textToCopy).then(() => {
      showToast("Sənəd məzmunu kopyalandı!", "success");
    }).catch(() => {
      showToast("Kopyalamaq mümkün olmadı", "warning");
    });
  },

  copySequence(seq) {
    navigator.clipboard.writeText(seq).then(() => {
      showToast("Sekvens ardıcıllığı kopyalandı!", "success");
    });
  },

  toggleFullscreen() {
    const modal = document.getElementById("inAppDocViewerModal");
    if (!modal) return;
    if (!document.fullscreenElement) {
      modal.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  },

  close(triggerHistory = true) {
    const modal = document.getElementById("inAppDocViewerModal");
    if (!modal) return;
    modal.classList.add("hidden");
    document.body.classList.remove("overflow-hidden");
    if (triggerHistory && window.history.state && window.history.state.inAppDocViewer) {
      window.history.back();
    }
  }
};
window.inAppDocViewer = inAppDocViewer;

// ==========================================
// REGISTRATION VIDEO GUIDE CONTROLLER (36 SAN SƏSLİ BƏLƏDÇİ)
// ==========================================
const RegistrationVideoGuide = {
  isPlaying: false,
  currentTime: 0,
  duration: 36, // 36 saniyəlik optimal, səliqəli və yığcam izah
  timerInterval: null,
  isMuted: false,
  isExternalMode: false,
  audioCtx: null,
  lastSpokenStep: null,
  currentAudio: null,
  audioCache: {},

  steps: [
    {
      step: 1,
      timeStart: 0,
      timeEnd: 9,
      audioSrc: "assets/audio/guide/step1.mp3",
      badge: "Addım 1: Şəxsi Məlumatlar",
      title: "1. Şəxsi və Əlaqə Məlumatları",
      subtitle: "Ad, Soyad, Universitet E-poçtu (@wcu.edu.az) və aktiv WhatsApp nömrəsi daxil edilir.",
      narration: "Birinci addım: Şəxsi və əlaqə məlumatları. Zəhmət olmasa ad, soyad, universitet elektron poçtu və əlaqə nömrənizi qeyd edin.",
      mockFields: [
        { label: "Ad və Soyad", value: "Ad, Soyad və Ata adı" },
        { label: "Universitet E-poçtu", value: "ad.soyad@wcu.edu.az" },
        { label: "Əlaqə Nömrəsi (WhatsApp)", value: "+994 50 123 45 67" }
      ]
    },
    {
      step: 2,
      timeStart: 9,
      timeEnd: 18,
      audioSrc: "assets/audio/guide/step2.mp3",
      badge: "Addım 2: Fakültə və İxtisas",
      title: "2. Akademik Təhsil və Status",
      subtitle: "Fakültə ((WCU) - Yüksək Texnologiyalar və Təbiət Elmləri), ixtisas (Biologiya / İT) və təhsil kursu seçilir.",
      narration: "İkinci addım: Təhsil məlumatları. Fakültənizi, ixtisasınızı və təhsil aldığınız kursu qeyd edin.",
      mockFields: [
        { label: "Məktəb / Fakültə", value: "(WCU) - Yüksək Texnologiyalar və Təbiət Elmləri" },
        { label: "İxtisas", value: "Biotexnologiya və Gen mühəndisliyi" },
        { label: "Təhsil Səviyyəsi", value: "Bakalavr - II Kurs" }
      ]
    },
    {
      step: 3,
      timeStart: 18,
      timeEnd: 27,
      audioSrc: "assets/audio/guide/step3.mp3",
      badge: "Addım 3: Səriştə Diaqnostikası",
      title: "3. Proqramlaşdırma və Biologiya Səviyyəsi",
      subtitle: "Python/R təcrübənizi və laboratoriya biliklərinizi qeyd edin (Sıfırdan başlayanlar da qəbul olunur!).",
      narration: "Üçüncü addım: Səriştə səviyyəsi. Proqramlaşdırma və biologiya sahəsində cari biliklərinizi göstərin.",
      mockFields: [
        { label: "Python / Kodlaşdırma", value: "Başlanğıc (Öyrənmək istəyirəm)" },
        { label: "Molekulyar Biologiya", value: "Orta (DNT / mRNT / Zülal bünövrəsi)" },
        { label: "Həftəlik Vaxt", value: "Həftədə 4-6 saat aktiv iştirak" }
      ]
    },
    {
      step: 4,
      timeStart: 27,
      timeEnd: 36,
      audioSrc: "assets/audio/guide/step4.mp3",
      badge: "Addım 4: Təsdiq və Göndərmə",
      title: "4. Tədqiqat Maraqları və Müraciətin Tamamlanması",
      subtitle: "Maraq sahələrinizi seçin və 'Rəsmi Müraciəti Tamamla və Göndər' düyməsinə klikləyin!",
      narration: "Dördüncü addım: Təsdiq və göndərmə. Tədqiqat maraqlarınızı seçərək müraciəti tamamlayın və göndərin.",
      mockFields: [
        { label: "Tədqiqat Marağı", value: "AlphaFold ilə Zülal Dizaynı & RNA-Seq" },
        { label: "İllik Hədəf", value: "WCU Hakaton komandasına qoşulmaq" },
        { label: "Status", value: "✅ Hazırdır: Sədrə yönləndirilir!" }
      ]
    }
  ],

  init() {
    this.renderCurrentFrame();
    this.preloadAudio();
    window.addEventListener("popstate", () => {
      const modal = document.getElementById("inAppDocViewerModal");
      if (modal && !modal.classList.contains("hidden")) {
        inAppDocViewer.close(false);
      }
    });
  },

  preloadAudio() {
    this.audioCache = {};
    this.steps.forEach(s => {
      if (s.audioSrc) {
        try {
          const a = new Audio();
          a.preload = "auto";
          a.src = s.audioSrc;
          this.audioCache[s.step] = a;
        } catch (e) {}
      }
    });
  },

  getCurrentStep() {
    return this.steps.find(s => this.currentTime >= s.timeStart && this.currentTime < s.timeEnd) || this.steps[this.steps.length - 1];
  },

  playChime() {
    if (this.isMuted) return;
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      if (!this.audioCtx) this.audioCtx = new AudioCtx();
      if (this.audioCtx.state === 'suspended') {
        this.audioCtx.resume();
      }
      const now = this.audioCtx.currentTime;
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(587.33, now); // D5
      osc.frequency.exponentialRampToValueAtTime(880, now + 0.12); // A5
      gain.gain.setValueAtTime(0.06, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.28);
      osc.connect(gain);
      gain.connect(this.audioCtx.destination);
      osc.start(now);
      osc.stop(now + 0.28);
    } catch (e) {
      // AudioContext unavailable or restricted
    }
  },

  playStepVoice(step) {
    if (this.isMuted || !this.isPlaying) return;

    if (this.currentAudio) {
      try {
        this.currentAudio.pause();
        this.currentAudio.currentTime = 0;
      } catch (e) {}
    }

    if (step && step.audioSrc) {
      try {
        let audio = this.audioCache[step.step];
        if (!audio) {
          audio = new Audio(step.audioSrc);
          this.audioCache[step.step] = audio;
        }
        audio.currentTime = 0;
        audio.volume = 1.0;
        this.currentAudio = audio;
        const playPromise = audio.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {
            this.speakStepFallback(step);
          });
        }
      } catch (e) {
        this.speakStepFallback(step);
      }
    } else {
      this.speakStepFallback(step);
    }
  },

  speakStepFallback(step) {
    if (this.isMuted || !this.isPlaying || !('speechSynthesis' in window)) return;
    try {
      window.speechSynthesis.cancel();
      const text = step.narration || step.subtitle;
      const utterance = new SpeechSynthesisUtterance(text);
      const voices = window.speechSynthesis.getVoices() || [];
      const azVoice = voices.find(v => v.lang && v.lang.toLowerCase().startsWith('az'));
      const trVoice = voices.find(v => v.lang && v.lang.toLowerCase().startsWith('tr') && v.name && v.name.toLowerCase().includes('male'));
      if (azVoice) {
        utterance.voice = azVoice;
      } else if (trVoice) {
        utterance.voice = trVoice;
      }
      utterance.rate = 1.0;
      utterance.pitch = 0.85;
      window.speechSynthesis.speak(utterance);
    } catch (e) {}
  },

  togglePlay() {
    this.isPlaying = !this.isPlaying;
    const icon = document.getElementById("regVideoPlayIcon");
    if (this.isPlaying) {
      if (icon) icon.className = "fa-solid fa-pause";
      const currentStep = this.getCurrentStep();
      this.lastSpokenStep = currentStep.step;
      this.playChime();
      this.playStepVoice(currentStep);

      this.timerInterval = setInterval(() => {
        this.currentTime += 1;
        if (this.currentTime >= this.duration) {
          this.currentTime = 0;
          this.lastSpokenStep = null;
        }
        this.updateScrubber();
        this.renderCurrentFrame();
      }, 1000);
    } else {
      if (icon) icon.className = "fa-solid fa-play";
      clearInterval(this.timerInterval);
      if (this.currentAudio) {
        try { this.currentAudio.pause(); } catch (e) {}
      }
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    }
  },

  reset() {
    this.currentTime = 0;
    this.lastSpokenStep = null;
    if (this.currentAudio) {
      try {
        this.currentAudio.pause();
        this.currentAudio.currentTime = 0;
      } catch (e) {}
    }
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    this.updateScrubber();
    this.renderCurrentFrame();
    if (this.isPlaying) {
      const step = this.getCurrentStep();
      this.lastSpokenStep = step.step;
      this.playChime();
      this.playStepVoice(step);
    }
  },

  seek(val) {
    this.currentTime = parseInt(val, 10);
    this.updateScrubber();
    const step = this.getCurrentStep();
    if (this.lastSpokenStep !== step.step) {
      this.lastSpokenStep = step.step;
      if (this.isPlaying) {
        this.playChime();
        this.playStepVoice(step);
      }
    }
    this.renderCurrentFrame();
  },

  jumpToStep(stepNum) {
    const s = this.steps[stepNum - 1];
    if (s) {
      this.currentTime = s.timeStart;
      this.lastSpokenStep = s.step;
      this.updateScrubber();
      this.renderCurrentFrame();
      if (this.isPlaying) {
        this.playChime();
        this.playStepVoice(s);
      }
    }
  },

  updateScrubber() {
    const scrubber = document.getElementById("regVideoScrubber");
    if (scrubber) scrubber.value = this.currentTime;
    const timer = document.getElementById("regVideoTimerDisplay");
    if (timer) {
      const curM = String(Math.floor(this.currentTime / 60)).padStart(2, "0");
      const curS = String(this.currentTime % 60).padStart(2, "0");
      const totM = String(Math.floor(this.duration / 60)).padStart(2, "0");
      const totS = String(this.duration % 60).padStart(2, "0");
      timer.innerText = `${curM}:${curS} / ${totM}:${totS}`;
    }
  },

  renderCurrentFrame() {
    const step = this.getCurrentStep();
    const badge = document.getElementById("regVideoStepBadge");
    const subtitle = document.getElementById("regVideoSubtitle");
    const content = document.getElementById("regVideoStepContent");

    if (badge) badge.innerText = step.badge;
    if (subtitle) subtitle.innerText = step.subtitle;

    if (this.isPlaying && this.lastSpokenStep !== step.step) {
      this.lastSpokenStep = step.step;
      this.playChime();
      this.playStepVoice(step);
    }

    if (content) {
      content.innerHTML = `
        <div class="max-w-md mx-auto space-y-3 bg-slate-900/90 p-4 sm:p-5 rounded-2xl border border-teal-500/30 text-left shadow-xl">
          <div class="flex items-center justify-between pb-2 border-b border-slate-800">
            <h5 class="text-xs font-bold text-teal-300">${step.title}</h5>
            <span class="text-[10px] text-amber-400 font-mono font-bold">${Math.round(this.currentTime)} san</span>
          </div>
          <div class="space-y-2">
            ${step.mockFields.map(f => `
              <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-1 p-2 rounded-lg bg-slate-950 border border-slate-800/80 text-[11px]">
                <span class="text-slate-400">${f.label}:</span>
                <span class="text-white font-semibold font-mono truncate">${f.value}</span>
              </div>
            `).join("")}
          </div>
        </div>
      `;
    }
  },

  toggleExternalMode() {
    // Rejim dəyişdirilməsi ləğv edildi
  },

  toggleMute() {
    this.isMuted = !this.isMuted;
    const btn = document.getElementById("regVideoMuteBtn");
    if (btn) {
      btn.innerHTML = this.isMuted ? '<i class="fa-solid fa-volume-xmark text-rose-400"></i>' : '<i class="fa-solid fa-volume-high text-teal-400"></i>';
    }
    if (this.isMuted) {
      if (this.currentAudio) {
        try { this.currentAudio.pause(); } catch (e) {}
      }
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    } else if (this.isPlaying) {
      const step = this.getCurrentStep();
      this.playChime();
      this.playStepVoice(step);
    }
    showToast(this.isMuted ? "Səs bağlandı" : "Səs aktivləşdirildi", "info");
  }
};
window.RegistrationVideoGuide = RegistrationVideoGuide;

function escapeHtml(string) {
  return String(string).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

// Render Curriculum & Roadmap
function initCurriculumView() {
  const container = document.getElementById("curriculumContainer");
  if (!container) return;

  const data = getClubData();
  const modules = data.curriculumModules || [];

  container.innerHTML = modules.map((mod, sIdx) => `
    <div class="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 lg:p-8 space-y-6">
      <div class="flex flex-col md:flex-row md:items-center justify-between pb-4 border-b border-slate-800 gap-2">
        <div>
          <span class="text-xs font-bold uppercase tracking-wider text-teal-400 bg-teal-950/60 px-3 py-1 rounded-full border border-teal-800/50">
            ${mod.semester}
          </span>
          <h3 class="text-xl font-bold text-white mt-2">${mod.phase}</h3>
        </div>
        <span class="text-xs text-slate-400 font-medium flex items-center gap-1.5">
          <i class="fa-regular fa-clock text-teal-400"></i> ${mod.weeks}
        </span>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        ${mod.topics.map((t, idx) => `
          <div class="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-slate-700 transition space-y-2">
            <div class="flex items-center gap-2 text-teal-300 font-semibold text-sm">
              <i class="fa-solid ${t.icon} text-cyan-400"></i>
              <span>${idx + 1}. ${t.title}</span>
            </div>
            <p class="text-xs text-slate-300 leading-relaxed">${t.details}</p>
            <div class="pt-2 text-[11px] text-slate-400 font-mono flex items-center gap-1">
              <span class="text-slate-500">Alətlər:</span> <span class="text-slate-300">${t.tools}</span>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `).join("");
}

// Event Photos Data & Lightbox Logic (TechBrains 2026, Prof. Qərib Mürşüdov Seminarı və Klub Tədbirləri)
const EVENT_GALLERIES = {
  garib: [
    {
      src: "assets/images/events/garib_murshudov_seminar_group.jpg",
      title: "Böyük Kollektiv: Qərbi Kaspi Universiteti və Bioinformatika Klubu",
      caption: "Seminar iştirakçıları, professor-müəllim heyəti, tələbələr və CarboxMol Bioinformatika Klubunun üzvləri Prof. Qərib Mürşüdov ilə xatirə fotosu."
    },
    {
      src: "assets/images/events/garib_murshudov_seminar_president.jpg",
      title: "Klub Sədri və Qonaq Alim",
      caption: "CarboxMol Bioinformatika Klubunun Sədri Süleyman Hacızadə və Kembric Universitetinin professoru, MRC LMB Proqram Rəhbəri Prof. Qərib Mürşüdov."
    },
    {
      src: "assets/images/events/garib_murshudov_seminar_member1.jpg",
      title: "Klub Üzvü və Qərib Müəllim",
      caption: "Elmi seminarın sual-cavab sessiyasında fəal iştirak edən klub üzvümüz, Sədr Süleyman Hacızadə və Prof. Qərib Mürşüdov."
    },
    {
      src: "assets/images/events/garib_murshudov_seminar_member2.jpg",
      title: "Klub Üzvü ilə Görüş",
      caption: "Klub üzvümüz, Prof. Qərib Mürşüdov və Klub Sədri Süleyman Hacızadə elmi müzakirə sonrası xatirə fotosunda."
    }
  ],
  techbrains2026: [
    {
      src: "assets/images/events/techbrains_2026_stage_presentation.jpg",
      title: "TechBrains 2026 — Səhnə Çıxışı və Canlı Məruzə",
      caption: "Klub Sədri və ETN Molekulyar Biologiya İnstitutunun böyük laborantı Süleyman Hacızadə TechBrains 2026 səhnəsində «Hesablama Struktur Biologiyası və CarboxMol» məruzəsini təqdim edərkən."
    },
    {
      src: "assets/images/events/techbrains_2026_speaker_badge.jpg",
      title: "Rəsmi Spiker Nişanı (Spiker 51/100)",
      caption: "Süleyman Hacızadə GOUP Baku Tech Community tərəfindən keçirilən TechBrains 2026 konfransının rəsmi Spiker nişanı ilə."
    },
    {
      src: "assets/images/events/techbrains_2026_conference_hall.jpg",
      title: "ADA Universiteti Konfrans Zalı",
      caption: "TechBrains 2026 beynəlxalq texnologiya konfransı zalında rəsmi spiker xatirə fotosu."
    },
    {
      src: "assets/images/events/techbrains_2026_banner_participants.jpg",
      title: "TechBrains 2026 Rəsmi Banneri Önündə",
      caption: "GOUP Baku Tech Community, CNCF Baku, ADA Universiteti və İnnovasiya və Rəqəmsal İnkişaf Agentliyinin (İRİA) tərəfdaşlığı ilə keçirilən konfransın banneri önündə iştirakçılarla."
    },
    {
      src: "assets/images/events/techbrains_2026_group_campus.jpg",
      title: "Kampusda Qrup Xatirə Fotosu",
      caption: "TechBrains 2026 konfrans iştirakçıları və texnologiya icması üzvləri ilə kampusda xatirə fotosu."
    },
    {
      src: "assets/images/events/techbrains_2026_slide_speaker.jpg",
      title: "Təqdimat Slaydı 269 — BIO / LONGEVITY Spiker Profili",
      caption: "Süleyman Hacızadə: ETN Molekulyar Biologiya İnstitutu (IMB), CarboxMol Bioinformatika Klubu, Carbox (PDB Protonasiya Aşkarlama Alqoritmi) və CarboxMol (3D Protein Vizualizatoru)."
    },
    {
      src: "assets/images/events/techbrains_2026_slide_carboxmol.jpg",
      title: "Təqdimat Slaydı 270 — Hesablama Struktur Biologiyası və CarboxMol",
      caption: "Azərbaycanda Hesablama Struktur Biologiyası və Bioinformatika Ekosistemi: 01 · CarboxMol Klubu, 02 · Carbox Alqoritmi (7,230 PDB ≤ 1.20 Å, ASH/GLH, LBHB) və 03 · CarboxMol 3D Studiya."
    }
  ]
};
const EVENT_PHOTOS = EVENT_GALLERIES.garib;

let currentEventGalleryKey = "garib";
let currentEventPhotoIndex = 0;

function getActiveEventPhotos() {
  return EVENT_GALLERIES[currentEventGalleryKey] || EVENT_GALLERIES.garib;
}

function openEventPhotoModal(index, galleryKey = "garib") {
  currentEventGalleryKey = EVENT_GALLERIES[galleryKey] ? galleryKey : "garib";
  const photos = getActiveEventPhotos();
  const safeIndex = (typeof index === "number" && !isNaN(index)) ? index : 0;
  currentEventPhotoIndex = ((safeIndex % photos.length) + photos.length) % photos.length;
  updateEventPhotoLightbox();
  const modal = document.getElementById("eventPhotoLightboxModal");
  if (!modal) return;
  if (typeof modal.showModal === "function") {
    if (!modal.open) modal.showModal();
  } else {
    modal.classList.remove("hidden");
  }
}
window.openEventPhotoModal = openEventPhotoModal;

function closeEventPhotoModal() {
  const modal = document.getElementById("eventPhotoLightboxModal");
  if (!modal) return;
  if (typeof modal.close === "function") {
    if (modal.open) modal.close();
  } else {
    modal.classList.add("hidden");
  }
}
window.closeEventPhotoModal = closeEventPhotoModal;

function navigateEventPhoto(step) {
  const photos = getActiveEventPhotos();
  currentEventPhotoIndex = (currentEventPhotoIndex + step + photos.length) % photos.length;
  updateEventPhotoLightbox();
}
window.navigateEventPhoto = navigateEventPhoto;

function updateEventPhotoLightbox() {
  const photos = getActiveEventPhotos();
  const item = photos[currentEventPhotoIndex];
  if (!item) return;
  const img = document.getElementById("eventPhotoLightboxImg");
  const title = document.getElementById("eventPhotoLightboxTitle");
  const caption = document.getElementById("eventPhotoLightboxCaption");
  const counter = document.getElementById("eventPhotoLightboxCounter");
  if (img) {
    img.src = item.src;
    img.alt = item.title;
  }
  if (title) title.innerText = item.title;
  if (caption) caption.innerText = item.caption;
  if (counter) counter.innerText = `${currentEventPhotoIndex + 1} / ${photos.length}`;
}

// Klaviatura ilə foto qalereyada keçid (ESC bağlanmasını native <dialog> özü idarə edir)
document.addEventListener("keydown", (e) => {
  const modal = document.getElementById("eventPhotoLightboxModal");
  if (!modal || !modal.open) return;
  if (e.key === "ArrowLeft") {
    e.preventDefault();
    navigateEventPhoto(-1);
  } else if (e.key === "ArrowRight") {
    e.preventDefault();
    navigateEventPhoto(1);
  }
});

// Fallback for browsers without native <dialog closedby="any"> light-dismiss (e.g., Safari)
if (typeof HTMLDialogElement !== "undefined" && !("closedBy" in HTMLDialogElement.prototype)) {
  const outsideDialog = (e, dialog) => {
    const r = dialog.getBoundingClientRect();
    return e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom;
  };
  document.querySelectorAll('dialog[closedby="any"]').forEach((dialog) => {
    let pressedOutside = false;
    dialog.addEventListener("pointerdown", (e) => {
      pressedOutside = outsideDialog(e, dialog);
    });
    dialog.addEventListener("pointerup", (e) => {
      if (pressedOutside && outsideDialog(e, dialog)) dialog.close();
      pressedOutside = false;
    });
  });
}

// Render Events Schedule
function initEventsView() {
  const container = document.getElementById("eventsContainer");
  if (!container) return;

  const data = getClubData();
  const rawEvents = data.events || [];
  const events = rawEvents.filter(ev => ev && !["ev-2", "ev-3", "ev-4", "ev-5"].includes(ev.id));

  if (events.length === 0) {
    container.innerHTML = `
      <div class="col-span-full p-8 rounded-2xl bg-slate-900/60 border border-slate-800 text-center space-y-3">
        <div class="w-12 h-12 rounded-2xl bg-teal-500/10 text-teal-400 flex items-center justify-center mx-auto text-xl">
          <i class="fa-solid fa-calendar-check"></i>
        </div>
        <h4 class="text-white font-bold text-sm">Yaxın Zamanda Keçiriləcək Yeni Tədbirlər</h4>
        <p class="text-slate-400 text-xs max-w-md mx-auto">
          Yaxın zamanda keçiriləcək yeni elmi seminarlar və vörkşoplar Klub Sədri tərəfindən elan olunacaqdır.
        </p>
      </div>
    `;
    return;
  }

  container.innerHTML = events.map(ev => {
    const hasPhotos = Array.isArray(ev.photos) && ev.photos.length > 0;
    const isCompleted = ev.status === "completed" || (ev.badge && ev.badge.includes("Keçirildi"));
    const galleryKey = ev.id === "ev-techbrains-2026" ? "techbrains2026" : "garib";
    const showcaseId = ev.id === "ev-techbrains-2026" ? "techbrains2026Showcase" : "garibSeminarShowcase";

    return `
    <div class="bg-slate-900/80 border ${isCompleted ? 'border-teal-500/50 bg-gradient-to-b from-teal-950/20 to-slate-900/90' : 'border-slate-800'} rounded-2xl p-6 hover:border-teal-500/60 transition flex flex-col justify-between space-y-4 shadow-lg relative overflow-hidden">
      ${isCompleted ? '<div class="absolute top-0 right-0 w-28 h-28 bg-teal-500/10 rounded-full blur-xl pointer-events-none"></div>' : ''}
      <div class="space-y-3">
        <div class="flex items-center justify-between gap-2 flex-wrap">
          <span class="text-xs font-semibold px-2.5 py-1 rounded-full ${isCompleted ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40' : 'bg-teal-500/20 text-teal-300 border border-teal-500/30'}">
            ${isCompleted ? '<i class="fa-solid fa-circle-check mr-1 text-emerald-400"></i>' : ''}${ev.category}
          </span>
          <span class="text-xs font-medium px-2.5 py-0.5 rounded-full ${isCompleted ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40' : 'bg-slate-800 text-amber-300 border border-slate-700'}">
            ${ev.badge}
          </span>
        </div>
        <h4 class="text-base font-bold text-white hover:text-teal-300 transition">${ev.title}</h4>
        ${ev.poster && !hasPhotos ? `
        <a href="${ev.poster}" target="_blank" rel="noopener noreferrer" class="block relative overflow-hidden rounded-xl border border-slate-700 aspect-video bg-[#f3f5f8]">
          <img src="${ev.poster}" alt="${ev.title}" class="w-full h-full object-contain p-1 hover:scale-105 transition duration-300" loading="lazy" />
        </a>
        ` : ''}
        <p class="text-xs text-slate-300 leading-relaxed">${ev.description}</p>
        
        ${ev.report ? `
        <div class="p-3 rounded-xl bg-teal-950/60 border border-teal-500/30 text-[11px] text-teal-200 space-y-1">
          <div class="flex items-center gap-1.5 font-bold text-teal-300">
            <i class="fa-solid fa-comment-dots text-teal-400"></i>
            <span>Tədbir Qeydi:</span>
          </div>
          <p class="leading-relaxed">${ev.report}</p>
        </div>
        ` : ''}

        ${hasPhotos ? `
        <div class="pt-2">
          <div class="flex items-center justify-between text-[11px] text-slate-400 mb-1.5 font-semibold">
            <span class="flex items-center gap-1"><i class="fa-regular fa-images text-teal-400"></i> Fotoreportaj (${ev.photos.length} Foto):</span>
            <button type="button" onclick="document.getElementById('${showcaseId}')?.scrollIntoView({behavior:'smooth'})" class="text-teal-300 hover:underline">Geniş bax</button>
          </div>
          <div class="grid grid-cols-4 gap-1.5">
            ${ev.photos.map((p, idx) => {
              const src = p.src || p;
              const isSlide = String(src).includes('_slide_');
              const fitClass = isSlide
                ? 'object-contain'
                : (String(src).includes('stage_presentation') || String(src).includes('banner_participants')
                  ? 'object-cover object-center'
                  : 'object-cover object-top');
              return `
              <button type="button" onclick="openEventPhotoModal(${idx}, '${galleryKey}')" aria-label="${p.title || 'Tədbir fotosu'}" class="event-card-thumb h-14 w-full p-0 ${isSlide ? 'bg-white' : 'bg-transparent'} rounded-lg overflow-hidden border border-slate-700 hover:border-teal-400 cursor-pointer transition relative group block">
                <img src="${src}" alt="${p.title || 'Foto'}" class="w-full h-full ${fitClass} group-hover:scale-110 transition duration-300" loading="lazy" />
                <div class="absolute inset-0 bg-black/15 group-hover:bg-transparent transition pointer-events-none"></div>
              </button>
              `;
            }).join('')}
          </div>
        </div>
        ` : ''}
      </div>

      <div class="space-y-2 pt-4 border-t border-slate-800/80 text-xs text-slate-400">
        <div class="flex items-center gap-2">
          <i class="fa-regular fa-calendar text-teal-400 w-4"></i>
          <span>${ev.date} (${ev.time})</span>
        </div>
        <div class="flex items-center gap-2">
          <i class="fa-solid fa-location-dot text-rose-400 w-4"></i>
          <span>${ev.location}</span>
        </div>
        <div class="flex items-center gap-2">
          <i class="fa-solid fa-chalkboard-user text-cyan-400 w-4"></i>
          <span class="text-slate-300">${ev.speaker}</span>
        </div>
        ${hasPhotos ? `
        <button type="button" onclick="openEventPhotoModal(0, '${galleryKey}')" class="w-full mt-2 py-2 rounded-xl bg-slate-800 hover:bg-teal-500 hover:text-slate-950 text-teal-300 font-bold transition flex items-center justify-center gap-1.5 text-xs border border-slate-700">
          <i class="fa-regular fa-images"></i> Fotoreportajı Tam Ekranda Aç (${ev.photos.length} Foto)
        </button>
        ` : ''}
      </div>
    </div>
  `}).join("");
}
window.renderEvents = initEventsView;

// Interactive Bio-Tools UI Engine
function initBioToolsView() {
  if (window.BioconductorEngine && typeof window.BioconductorEngine.init === "function") {
    window.BioconductorEngine.init();
  }

  const input = document.getElementById("dnaInput");
  const analyzeBtn = document.getElementById("btnAnalyzeDna");
  const sampleSelect = document.getElementById("sampleSeqSelect");
  const clearBtn = document.getElementById("btnClearDna");

  if (!input || !analyzeBtn) return;

  // Auto analyze initial value
  runAnalysis();

  analyzeBtn.addEventListener("click", runAnalysis);

  input.addEventListener("input", () => {
    // Debounced live calculation
    clearTimeout(window.bioDebounce);
    window.bioDebounce = setTimeout(runAnalysis, 300);
  });

  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      input.value = "";
      runAnalysis();
    });
  }

  if (sampleSelect) {
    sampleSelect.addEventListener("change", (e) => {
      const key = e.target.value;
      if (SAMPLE_SEQUENCES[key]) {
        input.value = SAMPLE_SEQUENCES[key].sequence;
        runAnalysis();
        showToast(`${SAMPLE_SEQUENCES[key].name} yükləndi!`, "success");
      }
    });
  }
}

function runAnalysis() {
  const input = document.getElementById("dnaInput");
  if (!input) return;

  const result = BioSequenceAnalyzer.analyze(input.value);

  const elLength = document.getElementById("resLength");
  const elGc = document.getElementById("resGcPercent");
  const elAt = document.getElementById("resAtPercent");
  const elMw = document.getElementById("resMw");
  const elComp = document.getElementById("resComplement");
  const elRevComp = document.getElementById("resRevComplement");
  const elMrna = document.getElementById("resMrna");
  const elProtein = document.getElementById("resProtein");
  const elCounts = document.getElementById("resCounts");

  if (!result) {
    if (elLength) elLength.innerText = "0 bp";
    if (elGc) elGc.innerText = "0%";
    if (elAt) elAt.innerText = "0%";
    if (elMw) elMw.innerText = "0 g/mol";
    if (elComp) elComp.innerText = "—";
    if (elRevComp) elRevComp.innerText = "—";
    if (elMrna) elMrna.innerText = "—";
    if (elProtein) elProtein.innerText = "—";
    if (elCounts) elCounts.innerHTML = "A: 0 | T: 0 | G: 0 | C: 0";
    return;
  }

  if (elLength) elLength.innerText = `${result.length} bp`;
  if (elGc) elGc.innerText = `${result.gcPercent}%`;
  if (elAt) elAt.innerText = `${result.atPercent}%`;
  if (elMw) elMw.innerText = `${result.molecularWeight} g/mol`;
  if (elComp) elComp.innerText = result.complementary;
  if (elRevComp) elRevComp.innerText = result.reverseComplementary;
  if (elMrna) elMrna.innerText = result.mrna;
  if (elProtein) elProtein.innerText = result.protein;
  if (elCounts) {
    elCounts.innerHTML = `
      <span class="text-emerald-400 font-bold">A:</span> ${result.counts.A} &nbsp;|&nbsp;
      <span class="text-cyan-400 font-bold">T:</span> ${result.counts.T} &nbsp;|&nbsp;
      <span class="text-amber-400 font-bold">G:</span> ${result.counts.G} &nbsp;|&nbsp;
      <span class="text-blue-400 font-bold">C:</span> ${result.counts.C}
    `;
  }
}

// Copy to clipboard helper
function copyTextById(elementId, label = "Mətn") {
  const el = document.getElementById(elementId);
  if (!el) return;
  const text = el.innerText || el.value;
  navigator.clipboard.writeText(text).then(() => {
    showToast(`${label} kopyalandı!`, "success");
  });
}
window.copyTextById = copyTextById;

// Application Form Processing & Profile Photo Selection
let selectedRegistrationPhoto = null;

function handleRegistrationPhotoSelect(event) {
  const file = event.target.files && event.target.files[0];
  const previewBox = document.getElementById("appPhotoPreviewBox");
  if (!file) {
    selectedRegistrationPhoto = null;
    if (previewBox) previewBox.innerHTML = '<i class="fa-solid fa-camera text-sm"></i>';
    return;
  }
  if (!file.type.startsWith("image/")) {
    showToast("Zəhmət olmasa şəkil formatında fayl seçin.", "warning");
    return;
  }
  const reader = new FileReader();
  reader.onload = (e) => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement("canvas");
      const maxSize = 256;
      let w = img.width;
      let h = img.height;
      if (w > h) {
        if (w > maxSize) {
          h = Math.round((h * maxSize) / w);
          w = maxSize;
        }
      } else {
        if (h > maxSize) {
          w = Math.round((w * maxSize) / h);
          h = maxSize;
        }
      }
      canvas.width = w;
      canvas.height = h;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0, w, h);
      selectedRegistrationPhoto = canvas.toDataURL("image/jpeg", 0.82);
      if (previewBox) {
        previewBox.innerHTML = `<img src="${selectedRegistrationPhoto}" class="w-full h-full object-cover rounded-xl" />`;
      }
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
}
window.handleRegistrationPhotoSelect = handleRegistrationPhotoSelect;

function handleRegistrationRoleTypeChange(type) {
  const extraFields = document.getElementById("teacherExtraFields");
  const courseSelect = document.getElementById("appCourse");
  const roleSelect = document.getElementById("appRoleInterest");
  if (type === "teacher") {
    if (extraFields) extraFields.classList.remove("hidden");
    if (courseSelect) {
      courseSelect.innerHTML = `
        <option value="Müəllim / Tədqiqatçı" selected>Müəllim / Tədqiqatçı</option>
        <option value="Dosent / Professor">Dosent / Professor</option>
        <option value="Akademik Mentor">Akademik Mentor</option>
        <option value="Laboratoriya Rəhbəri">Laboratoriya Rəhbəri</option>
        <option value="Doktorantura / PhD">Doktorantura / PhD</option>
      `;
    }
    if (roleSelect) {
      roleSelect.innerHTML = `
        <option value="Akademik Mentor / Tədris Rəhbəri" selected>Akademik Mentor / Tədris Rəhbəri</option>
        <option value="Elmi Tədqiqatçı Müəllim">Elmi Tədqiqatçı Müəllim</option>
        <option value="Laboratoriya Mentoru">Laboratoriya Mentoru</option>
      `;
    }
  } else {
    if (extraFields) extraFields.classList.add("hidden");
    if (courseSelect) {
      courseSelect.innerHTML = `
        <option value="Bakalavr (I kurs)">Bakalavr (I kurs)</option>
        <option value="Bakalavr (II kurs)">Bakalavr (II kurs)</option>
        <option value="Bakalavr (III kurs)">Bakalavr (III kurs)</option>
        <option value="Bakalavr (IV kurs)">Bakalavr (IV kurs)</option>
        <option value="Bakalavr (V kurs)">Bakalavr (V kurs)</option>
        <option value="Magistratura">Magistratura</option>
        <option value="Doktorantura">Doktorantura</option>
      `;
    }
    if (roleSelect) {
      roleSelect.innerHTML = `
        <option value="Aktiv Tələbə / Təlim və Seminar İştirakçısı">Aktiv Tələbə / Təlim və Seminar İştirakçısı</option>
        <option value="Tədqiqatçı / Layihə və Hakaton Komandası Üzvü">Tədqiqatçı / Layihə və Hakaton Komandası Üzvü</option>
        <option value="Təşkilatçı Üzv (Tədbir təşkili, PR, Dizayn və Texniki dəstək)">Təşkilatçı Üzv (Tədbir təşkili, PR, Dizayn, Texniki dəstək)</option>
      `;
    }
  }
}
window.handleRegistrationRoleTypeChange = handleRegistrationRoleTypeChange;

function initApplicationForm() {
  const form = document.getElementById("membershipApplicationForm");
  if (!form) return;

  if (window.ClubSecurity) {
    window.ClubSecurity.registerFormRender("membershipApplicationForm");
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    // 1. Kiber Təhlükəsizlik və Anti-Spam Dərəcə Məhdudiyyəti (Rate Limiting)
    if (window.ClubSecurity) {
      const rateCheck = window.ClubSecurity.checkRateLimit("app_submission", {
        maxAttempts: 3,
        windowMs: 60000,
        lockoutMs: 30000
      });
      if (!rateCheck.allowed) {
        showToast(rateCheck.reason, "error");
        return;
      }

      // 2. Anti-Bot Honeypot və Dwell-Time yoxlanışı
      const hp = document.getElementById("appHoneypot")?.value || "";
      const botCheck = window.ClubSecurity.verifyFormSubmission("membershipApplicationForm", hp);
      if (!botCheck.isHuman) {
        showToast(botCheck.reason, "error");
        return;
      }
    }

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn ? submitBtn.innerHTML : "Müraciəti Göndər";

    const fullName = window.ClubSecurity ? window.ClubSecurity.sanitizeText(document.getElementById("appFullName").value) : document.getElementById("appFullName").value.trim();
    const patronymic = document.getElementById("appPatronymic")?.value.trim() || "";
    const email = document.getElementById("appEmail").value.trim();
    const phone = document.getElementById("appPhone").value.trim();
    const profileUrl = document.getElementById("appProfileUrl")?.value.trim() || "";
    const faculty = document.getElementById("appFaculty").value;
    const major = document.getElementById("appMajor").value.trim();
    const course = document.getElementById("appCourse").value;
    const studyLang = document.getElementById("appStudyLang")?.value || "Azərbaycan bölməsi";
    const gpa = document.getElementById("appGpa")?.value.trim() || "";
    const progSkill = document.querySelector('input[name="progSkill"]:checked')?.value || "Heç bir təcrübəm yoxdur";
    const bioKnowledge = document.getElementById("appBioKnowledge")?.value || "";
    const osType = document.getElementById("appOsType")?.value || "Windows";
    const roleInterest = document.getElementById("appRoleInterest")?.value || "Aktiv Tələbə / İştirakçı";
    const weeklyTime = document.getElementById("appWeeklyTime")?.value || "Həftədə 2–4 saat";
    const motivation = document.getElementById("appMotivation").value.trim();
    const yearGoal = document.getElementById("appYearGoal")?.value.trim() || "";

    // Üzvün daxili panel üçün təyin etdiyi login və şifrə
    let rawUsername = (document.getElementById("appUsername")?.value || "").trim().toLowerCase();
    let rawPassword = (document.getElementById("appPassword")?.value || "").trim();

    if (!rawUsername) {
      rawUsername = fullName.toLowerCase().replace(/[^a-z0-9]/g, "") + Math.floor(10 + Math.random() * 89);
    }
    if (!rawPassword) {
      rawPassword = "wcu" + Math.floor(1000 + Math.random() * 9000);
    }

    if (rawUsername.length < 3) {
      showToast("İstifadəçi adı ən azı 3 simvol olmalıdır.", "warning");
      return;
    }
    if (rawPassword.length < 4) {
      showToast("Giriş şifrəsi ən azı 4 simvol olmalıdır.", "warning");
      return;
    }

    const data = getClubData();
    data.members = data.members || [];
    const isTaken = data.members.some(m => (m.username || "").toLowerCase() === rawUsername);
    if (isTaken) {
      showToast(`"@${rawUsername}" istifadəçi adı artıq tutulub. Zəhmət olmasa başqa login seçin.`, "warning");
      return;
    }

    // Gather checked programming tools
    const tools = [];
    document.querySelectorAll('input[name="toolsCheck"]:checked').forEach(cb => tools.push(cb.value));

    // Gather checked biological databases
    const bioTools = [];
    document.querySelectorAll('input[name="bioToolsCheck"]:checked').forEach(cb => bioTools.push(cb.value));

    // Gather checked research tracks
    const tracks = [];
    document.querySelectorAll('input[name="tracksCheck"]:checked').forEach(cb => tracks.push(cb.value));

    if (!fullName || !email || !major) {
      showToast("Zəhmət olmasa tələb olunan bütün xanaları doldurun.", "warning");
      return;
    }

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin mr-2"></i> Müraciət Sədrə Göndərilir...';
    }

    const regRoleType = document.querySelector('input[name="registrationRoleType"]:checked')?.value || "student";
    const teacherTitle = (document.getElementById("appTeacherTitle")?.value || "").trim();
    const teacherDept = (document.getElementById("appTeacherDepartment")?.value || "").trim();

    const isTeacherRole = regRoleType === "teacher" || 
      (roleInterest && (roleInterest.includes("Müəllim") || roleInterest.includes("Mentor"))) ||
      (course && (course.includes("Müəllim") || course.includes("Dosent") || course.includes("Mentor"))) ||
      (major && (major.includes("müəllimliyi") || major.includes("müəllim")));

    const memberId = "mem-" + Date.now();
    const teacherId = "teacher-" + Date.now();

    const newApp = {
      id: "app-" + Date.now(),
      memberId: memberId,
      teacherId: isTeacherRole ? teacherId : null,
      isTeacher: isTeacherRole,
      fullName: fullName + (patronymic ? ` (${patronymic})` : ""),
      email,
      phone,
      photo: selectedRegistrationPhoto || "",
      profileUrl,
      faculty,
      major,
      course,
      studyLang,
      gpa,
      username: rawUsername,
      password: rawPassword,
      programmingSkill: progSkill,
      tools,
      bioTools,
      bioKnowledge,
      osType,
      researchTracks: tracks,
      weeklyTime,
      roleInterest,
      motivation,
      yearGoal,
      dateApplied: new Date().toISOString().slice(0, 10),
      status: "Gözləyir",
      adminNotes: isTeacherRole
        ? "Sayt qeydiyyat formu vasitəsilə daxil olmuş müəllim müraciəti (Sədr təsdiqi gözləyir)."
        : "Sayt qeydiyyat formu vasitəsilə daxil olmuş tələbə müraciəti (Sədr təsdiqi gözləyir)."
    };

    // Yeni üzv hesabı Sədr əllə "Təsdiq" verənə qədər mütləq "Gözləyir" statusunda qalır (Avtomatik təsdiq YOXDUR!)
    const newMember = {
      id: memberId,
      fullName: fullName + (patronymic ? ` (${patronymic})` : ""),
      email,
      phone,
      photo: selectedRegistrationPhoto || "",
      faculty,
      major,
      course,
      role: isTeacherRole ? "Akademik Mentor / Müəllim" : "Klub Üzvü",
      username: rawUsername,
      password: rawPassword,
      registeredAt: new Date().toISOString().slice(0, 10),
      status: "Gözləyir",
      customTasks: [],
      notes: []
    };

    data.applications = data.applications || [];
    data.applications.unshift(newApp);
    data.approvedAppIds = data.approvedAppIds || [];

    if (isTeacherRole) {
      data.teachers = data.teachers || [];
      data.teacherApplications = data.teacherApplications || [];

      const newTeacher = {
        id: teacherId,
        fullName: fullName + (patronymic ? ` (${patronymic})` : ""),
        title: teacherTitle || "Akademik Mentor & Tədqiqatçı",
        academicDegree: teacherTitle || course || "Müəllim / Mentor",
        university: faculty || "Qərbi Kaspi Universiteti (WCU)",
        faculty: faculty,
        department: teacherDept || major || "Təbiət Elmləri Kafedrası",
        email: email,
        phone: phone,
        username: rawUsername,
        password: rawPassword,
        photo: selectedRegistrationPhoto || "",
        specialties: tracks.length ? tracks : ["Bioinformatika", "Genom Analizi"],
        orcid: profileUrl || "",
        bio: motivation || "CarboxMol Bioinformatika Klubu akademik mentoru.",
        status: "Gözləyir",
        registeredAt: new Date().toISOString().slice(0, 10),
        adminNotes: "Sayt qeydiyyat formu vasitəsilə daxil olmuş müəllim müraciəti."
      };

      const newTeacherApp = {
        id: "teach-app-" + Date.now(),
        teacherId: teacherId,
        ...newTeacher,
        dateApplied: new Date().toISOString().slice(0, 10)
      };

      data.teachers.unshift(newTeacher);
      data.teacherApplications.unshift(newTeacherApp);
    }

    data.members.unshift(newMember);
    saveClubData(data);

    // Qalıcı ehtiyat yaddaşa yaz (Cache təmizlənsə belə müraciət itməsin!)
    try {
      let permApps = JSON.parse(localStorage.getItem("carboxmol_permanent_applications") || "[]");
      if (!permApps.some(p => p.id === newApp.id)) {
        permApps.unshift(newApp);
        localStorage.setItem("carboxmol_permanent_applications", JSON.stringify(permApps));
      }
    } catch (e) {}

    // HƏR BİR ÜZV ÜÇÜN FƏRDİ QALICI VERİLƏNLƏR BAZASININ YARADILMASI (IndexedDB)
    if (window.ClubDatabase) {
      window.ClubDatabase.provisionMember(newMember);
      if (typeof window.ClubDatabase.saveApplication === "function") {
        window.ClubDatabase.saveApplication(newApp);
      }
    }

    // Edge Cloud API & Canlı ntfy Bulud Şini Sinxronizasiyası
    const registrationPayload = {
      action: "REGISTER_STUDENT",
      memberId: memberId,
      username: rawUsername,
      member: newMember,
      application: newApp,
      data: { fullName, email, faculty, major, course },
      timestamp: Date.now()
    };

    if (typeof fetch === "function") {
      fetch("/api/sync", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(registrationPayload)
      }).catch((err) => {
        console.warn("[Cloud Sync] Offline fallback aktivdir:", err);
      });

      // Canlı bulud şininə dərhal yönləndir (yığcam JSON + text/plain CORS preflight-sız, keepalive: true)
      const compactApp = {
        id: newApp.id,
        memberId: newApp.memberId,
        isTeacher: newApp.isTeacher,
        fullName: newApp.fullName,
        email: newApp.email,
        phone: newApp.phone,
        profileUrl: newApp.profileUrl,
        faculty: newApp.faculty,
        major: newApp.major,
        course: newApp.course,
        studyLang: newApp.studyLang,
        gpa: newApp.gpa,
        username: newApp.username,
        password: newApp.password,
        programmingSkill: newApp.programmingSkill,
        tools: newApp.tools,
        bioTools: newApp.bioTools,
        researchTracks: newApp.researchTracks,
        roleInterest: newApp.roleInterest,
        weeklyTime: newApp.weeklyTime,
        motivation: (newApp.motivation || "").slice(0, 350),
        yearGoal: (newApp.yearGoal || "").slice(0, 250),
        dateApplied: newApp.dateApplied,
        status: "Gözləyir"
      };
      const ntfyPayload = {
        action: "REGISTER_STUDENT",
        memberId: memberId,
        username: rawUsername,
        application: compactApp,
        timestamp: Date.now()
      };

      try {
        const ntfyCtrl = typeof AbortController !== "undefined" ? new AbortController() : null;
        const ntfyT = ntfyCtrl ? setTimeout(() => ntfyCtrl.abort(), 1500) : null;
        await fetch("https://ntfy.sh/carboxmol_bioinfo_cloud_sync_v3_secure", {
          method: "POST",
          headers: { "Content-Type": "text/plain; charset=utf-8" },
          body: JSON.stringify(ntfyPayload),
          keepalive: true,
          signal: ntfyCtrl ? ntfyCtrl.signal : undefined
        }).catch(() => {});
        if (ntfyT) clearTimeout(ntfyT);
      } catch (err) {
        console.warn("[ntfy Bus] Göndərilmə gecikməsi:", err);
      }
    }

    // Send Real-time notification to Suleyman Hajizadeh via FormSubmit API (Primary + CC)
    const emailPayload = {
      "Müraciət Növü": isTeacherRole ? "Müəllim / Akademik Mentor Qeydiyyatı" : "Tələbə Üzvlük Qeydiyyatı",
      "Ad, Soyad və Ata Adı": fullName + (patronymic ? ` (${patronymic})` : ""),
      "E-poçt Ünvanı": email,
      "Tələbə E-poçtu": email,
      "Əlaqə Nömrəsi (WhatsApp)": phone,
      "Təyin Edilmiş Login (@username)": "@" + rawUsername,
      "Təyin Edilmiş Şifrə (Klub Sədrinə Açıq)": rawPassword,
      "Profil (LinkedIn/GitHub)": profileUrl || "Qeyd edilməyib",
      "Fakültə və İxtisas": `${faculty} - ${major} (${course})`,
      "Tədris Dili və ÜÖMG": `${studyLang} | GPA: ${gpa || "Qeyd edilməyib"}`,
      "Proqramlaşdırma Səviyyəsi": progSkill,
      "İstifadə Etdiyi Dillər/Alətlər": tools.length ? tools.join(", ") : "Heç biri",
      "Bioloji Verilənlər Bazaları": bioTools.length ? bioTools.join(", ") : "Heç biri",
      "Bioloji Baza Biliyi": bioKnowledge,
      "Əməliyyat Sistemi": osType,
      "Maraqlandığı Tədqiqat İstiqamətləri": tracks.length ? tracks.join(", ") : "Ümumi Bioinformatika",
      "Klubda Maraqlandığı Rol": isTeacherRole ? (teacherTitle || "Akademik Mentor / Müəllim") : roleInterest,
      "Həftəlik Ayıra Biləcəyi Vaxt": weeklyTime,
      "Motivasiya Məktubu": motivation,
      "1 İllik Şəxsi Hədəf": yearGoal || "Qeyd edilməyib",
      "_subject": isTeacherRole ? `🎓 Yeni CarboxMol Müəllim/Mentor Qeydiyyatı: ${fullName} (@${rawUsername})` : `🧬 Yeni CarboxMol Bioinformatika Klubu Üzvlüyü: ${fullName} (@${rawUsername})`,
      "_template": "table",
      "_captcha": "false",
      "_replyto": email,
      "_cc": "suleyman.hacizade1@gmail.com"
    };

    let sentOnline = false;
    if (navigator.onLine) {
      try {
        const res = await fetch("https://formsubmit.co/ajax/suleyman.hacizade.232bioing@wcu.edu.az", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify(emailPayload)
        });
        if (res.ok) sentOnline = true;
      } catch (err) {
        console.warn("FormSubmit notice (offline və ya şəbəkə gecikməsi):", err);
      }
    }

    if (!sentOnline) {
      if (typeof addToOfflineQueue === "function") {
        addToOfflineQueue({ type: "application", data: emailPayload });
      }
      showToast("Müraciət yerli bazaya qeyd edildi və Sədr panelinə sinxronlaşdırıldı.", "info");
    }

    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnText;
    }

    // Reset Form & Photo Preview
    form.reset();
    selectedRegistrationPhoto = null;
    const previewBox = document.getElementById("appPhotoPreviewBox");
    if (previewBox) previewBox.innerHTML = '<i class="fa-solid fa-camera text-sm"></i>';

    // Broadcast across tabs and portals
    if (window.SyncEngine) {
      window.SyncEngine.broadcast("NEW_MEMBER_REGISTERED", { memberId, username: rawUsername });
    }

    // Setup direct WhatsApp alert to Suleyman (+994 70 550 69 07)
    const waBtn = document.getElementById("successWhatsAppBtn");
    if (waBtn) {
      const trackSummary = tracks.length ? tracks.join(", ") : "Bioinformatika";
      const waMsg = `Salam Süleyman bəy! Mən ${fullName}. CarboxMol Bioinformatika Klubuna qeydiyyatdan keçdim.\n\nİstifadəçi adım: @${rawUsername}\nŞifrəm: ${rawPassword}\nİxtisas: ${major} (${course})\nMaraq sahələrim: ${trackSummary}\nTel: ${phone}`;
      waBtn.href = `https://wa.me/994705506907?text=${encodeURIComponent(waMsg)}`;
    }

    // Show congratulation modal with credentials
    const successModal = document.getElementById("appSuccessModal");
    if (successModal) {
      const applicantNameEl = document.getElementById("successApplicantName");
      if (applicantNameEl) applicantNameEl.innerText = fullName;

      const userBadgeEl = document.getElementById("successApplicantUser");
      if (userBadgeEl) userBadgeEl.innerText = "@" + rawUsername;

      const passBadgeEl = document.getElementById("successApplicantPass");
      if (passBadgeEl) passBadgeEl.innerText = rawPassword;

      successModal.classList.remove("hidden");
    } else {
      showToast(`Təbriklər, ${fullName}! Üzvlük qeydiyyatınız tamamlandı və Sədr panelinə göndərildi!`, "success");
    }

    // Refresh president table if active
    if (window.PresidentPortal) {
      PresidentPortal.renderMetrics();
      PresidentPortal.renderApplicationsTable();
      if (PresidentPortal.renderMembersAccountsTable) PresidentPortal.renderMembersAccountsTable();
    }
  });
}

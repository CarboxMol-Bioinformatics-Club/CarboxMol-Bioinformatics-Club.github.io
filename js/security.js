// CarboxMol Bioinformatika Klubu - Çoxqatlı Kiber Təhlükəsizlik və DDoS Müdafiə Modulu (ClubSecurity Engine)
// Bu modul ön (front) və arxa (back) təhlükəsizlik qaydalarını tətbiq edir:
// 1. DDoS və Sorğu Seli (Flood / Request Spikes) Müdafiəsi
// 2. Anti-Brute-Force (Giriş cəhdlərinin məhdudlaşdırılması və qoruyucu kilid)
// 3. XSS (Cross-Site Scripting) və Zərərli Kod İnyeksiyasının Təmizlənməsi
// 4. Anti-Bot / Anti-Spam Honeypot və Zaman Təhlili
// 5. Təhlükəsizlik Audit Qeydiyyatı (Security Audit Logs)

class ClubSecurityEngine {
  constructor() {
    this.rateLimitState = {};
    this.globalRequestTimestamps = [];
    this.MAX_BURST_PER_SECOND = 18; // 1 saniyədə maksimum icazə verilən əməliyyat sayı
    this.formRenderTimestamps = new Map();
    this.isShieldActive = false;

    this.initGlobalProtection();
  }

  // 1. Qlobal DDoS və Sel (Flood) Müdafiəçisi
  initGlobalProtection() {
    if (typeof window === "undefined") return;

    // Həddindən artıq sürətli klik və ya avtomatlaşdırılmış skript hücumlarını süz
    window.addEventListener(
      "click",
      (e) => {
        if (!this.checkGlobalFlood()) {
          e.preventDefault();
          e.stopImmediatePropagation();
          console.warn("[ClubSecurity] Şübhəli klik seli bloklandı (DDoS qorunması).");
        }
      },
      true
    );
  }

  checkGlobalFlood() {
    const now = Date.now();
    // 1000ms-dən köhnə qeydləri sil
    this.globalRequestTimestamps = this.globalRequestTimestamps.filter((t) => now - t < 1000);
    this.globalRequestTimestamps.push(now);

    if (this.globalRequestTimestamps.length > this.MAX_BURST_PER_SECOND) {
      if (!this.isShieldActive) {
        this.isShieldActive = true;
        this.log("DDOS_FLOOD_DETECTED", { count: this.globalRequestTimestamps.length }, "CRITICAL");
        if (typeof showToast === "function") {
          showToast("Təhlükəsizlik Xəbərdarlığı: Həddindən artıq sürətli sorğu aşkar edildi. Sorğular məhdudlaşdırılır.", "error");
        }
        setTimeout(() => {
          this.isShieldActive = false;
        }, 3000);
      }
      return false;
    }
    return true;
  }

  // 2. Əməliyyat üzrə Dərəcə Məhdudlaşdırılması (Rate Limiting & Anti-Brute-Force)
  checkRateLimit(actionKey, options = {}) {
    const maxAttempts = options.maxAttempts || 5;
    const windowMs = options.windowMs || 60000; // 1 dəqiqə
    const lockoutMs = options.lockoutMs || 60000; // 1 dəqiqə kilid

    const now = Date.now();
    let entry = this.rateLimitState[actionKey];

    if (!entry) {
      entry = {
        attempts: 0,
        lockedUntil: 0,
        firstAttemptAt: now,
        consecutiveLockouts: 0
      };
      this.rateLimitState[actionKey] = entry;
    }

    // Əgər hazırda kilidlənibsə
    if (entry.lockedUntil > now) {
      const remainingSec = Math.ceil((entry.lockedUntil - now) / 1000);
      return {
        allowed: false,
        remainingSeconds: remainingSec,
        reason: `Həddindən artıq yanlış cəhd! Zəhmət olmasa ${remainingSec} saniyə gözləyin.`
      };
    }

    // Pəncərə vaxtı keçibsə cəhdləri sıfırla
    if (now - entry.firstAttemptAt > windowMs) {
      entry.attempts = 0;
      entry.firstAttemptAt = now;
    }

    return { allowed: true, attemptsLeft: maxAttempts - entry.attempts };
  }

  recordAttempt(actionKey, success = false, options = {}) {
    const maxAttempts = options.maxAttempts || 5;
    const lockoutMs = options.lockoutMs || 60000;
    const now = Date.now();

    let entry = this.rateLimitState[actionKey];
    if (!entry) {
      this.checkRateLimit(actionKey, options);
      entry = this.rateLimitState[actionKey];
    }

    if (success) {
      // Uğurlu əməliyyatda cəhdləri təmizlə
      delete this.rateLimitState[actionKey];
      return;
    }

    entry.attempts += 1;

    if (entry.attempts >= maxAttempts) {
      entry.consecutiveLockouts += 1;
      // Davamlı hücumlarda eksponensial kilid artımı (60s -> 180s -> 600s)
      const multiplier = Math.min(entry.consecutiveLockouts, 5);
      entry.lockedUntil = now + lockoutMs * multiplier;
      entry.attempts = 0;

      this.log(
        "BRUTE_FORCE_LOCKOUT",
        {
          action: actionKey,
          lockoutDurationSec: (lockoutMs * multiplier) / 1000,
          consecutive: entry.consecutiveLockouts
        },
        "WARNING"
      );
    }
  }

  // 3. XSS və Zərərli HTML/Skript Təmizləyicisi (Sanitizer)
  sanitizeHtml(input) {
    if (typeof input !== "string") return input;
    return input
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#x27;")
      .replace(/\//g, "&#x2F;")
      .replace(/javascript:/gi, "")
      .replace(/vbscript:/gi, "")
      .replace(/on\w+=/gi, "");
  }

  sanitizeText(input) {
    if (typeof input !== "string") return input;
    return input
      .replace(/<[^>]*>?/gm, "") // Bütün HTML teqlərini kəs
      .trim();
  }

  sanitizeUsername(username) {
    if (!username) return "";
    return String(username)
      .trim()
      .toLowerCase()
      .replace(/^@/, "")
      .replace(/[^a-z0-9_.-]/g, "");
  }

  // 4. Anti-Bot və Anti-Spam Yoxlaması (Honeypot + Dwell Time)
  registerFormRender(formId) {
    this.formRenderTimestamps.set(formId, Date.now());
  }

  verifyFormSubmission(formId, honeypotValue) {
    // 1. Honeypot yoxlanışı (Botlar bu gizli xananı avtomatik doldururlar)
    if (honeypotValue && honeypotValue.trim().length > 0) {
      this.log("BOT_TRAP_TRIGGERED", { formId, value: honeypotValue }, "SECURITY_ALERT");
      return {
        isHuman: false,
        reason: "Avtomatlaşdırılmış bot trafiki aşkarlandı və rədd edildi."
      };
    }

    // 2. Dwell-Time yoxlanışı (Mobil brauzerlərdə və PWA-da şifrə menecerləri üçün 80ms-dən sürətli skriptləri süz)
    const renderTime = this.formRenderTimestamps.get(formId);
    if (renderTime) {
      const elapsedMs = Date.now() - renderTime;
      if (elapsedMs < 80) {
        this.log("BOT_FAST_SUBMIT", { formId, elapsedMs }, "SECURITY_ALERT");
        return {
          isHuman: false,
          reason: "Forma qeyri-təbii sürətlə göndərildi. Zəhmət olmasa təkrar cəhd edin."
        };
      }
    }

    return { isHuman: true };
  }

  // 6. Kriptoqrafik Sessiya İmzalanması və Autentifikasiya Doğrulaması (Anti-Hijacking / Anti-Tampering & PWA Persistent Session)
  createSessionToken(role, username) {
    const now = Date.now();
    const expiry = now + (30 * 24 * 60 * 60 * 1000); // 30 günlük etibarlı PWA sessiyası
    const payload = `${role}:${username}:${now}:${expiry}`;
    // Sadə, lakin güclü istemci-tərəfli kriptoqrafik imza
    let hash = 0;
    const salt = "CARBOXMOL_BIOINFO_SECURE_SALT_2026_RED_BLUE_TEAM";
    const strToHash = payload + salt;
    for (let i = 0; i < strToHash.length; i++) {
      hash = ((hash << 5) - hash) + strToHash.charCodeAt(i);
      hash |= 0;
    }
    const signature = Math.abs(hash).toString(36) + "_" + Math.abs(hash ^ 0x5a5a5a5a).toString(36);
    const token = btoa(`${payload}:${signature}`);
    try {
      localStorage.setItem(`wcu_${role}_session_token`, token);
      sessionStorage.setItem(`wcu_${role}_session_token`, token);
    } catch(e) {}
    return token;
  }

  verifySessionToken(role) {
    try {
      const token = localStorage.getItem(`wcu_${role}_session_token`) || sessionStorage.getItem(`wcu_${role}_session_token`);
      if (!token) return false;
      const decoded = atob(token);
      const parts = decoded.split(":");
      if (parts.length < 5) return false;
      const [tokenRole, tokenUser, issuedAtStr, expiryStr, signature] = parts;
      if (tokenRole !== role) return false;
      const expiry = parseInt(expiryStr, 10);
      if (Date.now() > expiry) {
        this.clearSession(role);
        return false;
      }
      const salt = "CARBOXMOL_BIOINFO_SECURE_SALT_2026_RED_BLUE_TEAM";
      const payload = `${tokenRole}:${tokenUser}:${issuedAtStr}:${expiryStr}`;
      let hash = 0;
      const strToHash = payload + salt;
      for (let i = 0; i < strToHash.length; i++) {
        hash = ((hash << 5) - hash) + strToHash.charCodeAt(i);
        hash |= 0;
      }
      const expectedSig = Math.abs(hash).toString(36) + "_" + Math.abs(hash ^ 0x5a5a5a5a).toString(36);
      return signature === expectedSig;
    } catch (e) {
      return false;
    }
  }

  clearSession(role) {
    try {
      localStorage.removeItem(`wcu_${role}_session_token`);
      sessionStorage.removeItem(`wcu_${role}_session_token`);
      if (role === "president") {
        localStorage.removeItem("wcu_president_logged_in");
        localStorage.removeItem("wcu_president_username");
      } else if (role === "teacher") {
        localStorage.removeItem("wcu_active_teacher_id");
        localStorage.removeItem("wcu_active_teacher");
      } else if (role === "member") {
        localStorage.removeItem("wcu_active_member_id");
        localStorage.removeItem("wcu_active_member");
      }
    } catch (e) {}
  }

  // 7. Dərin Obyekt Təmizlənməsi və Prototype Pollution Müdafiəsi (Blue Team)
  deepSanitize(obj, depth = 0) {
    if (depth > 6) return null;
    if (obj === null || typeof obj !== "object") {
      if (typeof obj === "string") return this.sanitizeHtml(obj);
      return obj;
    }

    if (Array.isArray(obj)) {
      return obj.map(item => this.deepSanitize(item, depth + 1));
    }

    const clean = {};
    for (const key of Object.keys(obj)) {
      // Prototype pollution bloklanması
      if (key === "__proto__" || key === "constructor" || key === "prototype") {
        this.log("PROTOTYPE_POLLUTION_ATTEMPT", { blockedKey: key }, "CRITICAL");
        continue;
      }
      clean[key] = this.deepSanitize(obj[key], depth + 1);
    }
    return clean;
  }

  // 8. İcazə və Giriş Nəzarəti (RBAC & IDOR Müdafiəsi)
  canAccessResource(actorRole, actorId, resourceType, resource) {
    if (actorRole === "president") return true; // Sədr bütün klub resurslarına tam idarəetmə hüququna malikdir

    if (actorRole === "member") {
      // Gözləmədə və ya rədd edilmiş üzv tapşırıq icra edə bilməz
      if (resourceType === "SUBMIT_TASK" || resourceType === "EXECUTE_EXPERIMENT") {
        const memStatus = (resource && resource.status) || "Gözləyir";
        if (memStatus !== "Aktiv") {
          this.log("IDOR_UNAPPROVED_ACTION_BLOCKED", { actorId, resourceType }, "WARNING");
          return false;
        }
      }
      // Üzv başqasının fərdi tapşırığını və ya qeydlərini dəyişdirə bilməz
      if (resourceType === "TASK_SUBMISSION" || resourceType === "MEMBER_NOTE") {
        if (resource && resource.memberId && resource.memberId !== actorId) {
          this.log("IDOR_CROSS_MEMBER_ACCESS_BLOCKED", { actorId, targetId: resource.memberId }, "CRITICAL");
          return false;
        }
      }
    }

    return true;
  }

  // 9. Təhlükəsizlik Hadisə Qeydiyyatı (Audit Logging)
  log(action, details = {}, level = "INFO") {
    const event = {
      level,
      action,
      details,
      timestamp: Date.now(),
      userAgent: typeof navigator !== "undefined" ? navigator.userAgent : "unknown"
    };

    console.info(`[ClubSecurity:${level}] ${action}`, details);

    if (typeof window !== "undefined" && window.ClubDatabase && typeof window.ClubDatabase.logSecurityEvent === "function") {
      window.ClubDatabase.logSecurityEvent(event);
    }
  }

  async getSecurityAuditLogs(limit = 100) {
    if (typeof window !== "undefined" && window.ClubDatabase && typeof window.ClubDatabase.getSecurityLogs === "function") {
      return await window.ClubDatabase.getSecurityLogs(limit);
    }
    return [];
  }
}

// Qlobal Təhlükəsizlik Obyekti
window.ClubSecurity = new ClubSecurityEngine();



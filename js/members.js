// CarboxMol Bioinformatika Klubu - Klub Üzvləri Paneli Modulu (Members Hub)

function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

const MembersPortal = {
  // ==========================================
  // ÜZV ŞƏXSİ DASHBOARD VƏ GİRİŞ MENECERİ
  // ==========================================

  renderMemberDashboard() {
    const member = typeof getActiveMember === "function" ? getActiveMember() : null;
    const loginGateway = document.getElementById("memberLoginGateway");
    const activeDashboard = document.getElementById("memberActiveDashboard");

    if (!member) {
      if (loginGateway) loginGateway.classList.remove("hidden");
      if (activeDashboard) activeDashboard.classList.add("hidden");
    } else {
      if (loginGateway) loginGateway.classList.add("hidden");
      if (activeDashboard) activeDashboard.classList.remove("hidden");

      // Set member header info
      const nameEl = document.getElementById("activeMemberName");
      const userEl = document.getElementById("activeMemberUsername");
      const metaEl = document.getElementById("activeMemberMeta");
      const statusEl = document.getElementById("activeMemberStatus");
      const avatarEl = document.getElementById("activeMemberAvatar");
      const removeBtn = document.getElementById("btnRemoveMemberAvatar");

      if (nameEl) nameEl.innerText = member.fullName || "Klub Üzvü";
      if (userEl) userEl.innerText = "@" + (member.username || "uzv");
      if (metaEl) metaEl.innerText = `${member.faculty || ''} • ${member.major || ''} (${member.course || ''})`;
      if (statusEl) statusEl.innerText = member.status || "Aktiv Üzv";

      if (avatarEl) {
        if (member.photo) {
          avatarEl.src = member.photo;
          if (removeBtn) removeBtn.classList.remove("hidden");
        } else {
          avatarEl.src = "favicon.svg";
          if (removeBtn) removeBtn.classList.add("hidden");
        }
      }

      this.renderMemberCustomTasks();
      this.renderMemberNotes();
      this.renderMemberDossier();
    }

    this.renderMembersDirectory();
    this.renderTasks();
    this.renderDiscussions();
    this.renderProgressTracker();
  },

  // ==========================================
  // ÜZV ŞƏKİL İDARƏETMƏSİ VƏ SİNXRONİZASİYA
  // ==========================================

  handleAvatarUpload(event) {
    const file = event.target.files && event.target.files[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      showToast("Zəhmət olmasa şəkil faylı seçin (PNG, JPG, WEBP).", "warning");
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const rawData = e.target.result;
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
        const compressedDataUrl = canvas.toDataURL("image/jpeg", 0.82);

        const active = typeof getActiveMember === "function" ? getActiveMember() : null;
        if (!active) {
          showToast("Zəhmət olmasa əvvəlcə üzv hesabınıza daxil olun.", "warning");
          return;
        }

        const data = getClubData();
        data.members = data.members || [];
        const mem = data.members.find(m => m.id === active.id || m.username === active.username);
        if (mem) {
          mem.photo = compressedDataUrl;
        }
        active.photo = compressedDataUrl;

        // Müraciətlər cədvəlində də fotonu dərhal yenilə ki, Sədr panelində də görünsün
        data.applications = data.applications || [];
        const app = data.applications.find(a => (active.id && a.memberId === active.id) || (active.username && a.username && a.username.toLowerCase() === active.username.toLowerCase()));
        if (app) {
          app.photo = compressedDataUrl;
        }

        saveClubData(data);
        localStorage.setItem("wcu_active_member", JSON.stringify(active));
        if (window.ClubDatabase) {
          window.ClubDatabase.provisionMember(active);
          if (app) window.ClubDatabase.provisionMember(app);
        }

        MembersPortal.renderMemberDashboard();
        if (typeof updateAuthUI === "function") updateAuthUI();
        showToast("Profil şəkliniz uğurla yeniləndi və klub şəbəkəsinə sinxronlaşdırıldı!", "success");

        if (window.SyncEngine) {
          window.SyncEngine.broadcast("MEMBER_PHOTO_UPDATED", {
            memberId: active.id,
            username: active.username,
            photo: compressedDataUrl
          });
        }

        // Bulud bazasına da dərhal göndər
        if (typeof fetch === "function") {
          fetch("/api/sync", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              action: "MEMBER_PHOTO_UPDATED",
              memberId: active.id,
              username: active.username,
              photo: compressedDataUrl,
              timestamp: Date.now()
            })
          }).catch(err => console.warn("[PhotoSync] Cloud error:", err));
        }
      };
      img.src = rawData;
    };
    reader.readAsDataURL(file);
    event.target.value = "";
  },

  removeAvatar() {
    const active = typeof getActiveMember === "function" ? getActiveMember() : null;
    if (!active) return;
    if (!confirm("Profil şəklinizi silmək istədiyinizə əminsiniz?")) return;

    const data = getClubData();
    data.members = data.members || [];
    const mem = data.members.find(m => m.id === active.id || m.username === active.username);
    if (mem) {
      delete mem.photo;
    }
    delete active.photo;

    data.applications = data.applications || [];
    const app = data.applications.find(a => (active.id && a.memberId === active.id) || (active.username && a.username && a.username.toLowerCase() === active.username.toLowerCase()));
    if (app) {
      delete app.photo;
    }

    saveClubData(data);
    localStorage.setItem("wcu_active_member", JSON.stringify(active));
    if (window.ClubDatabase) {
      window.ClubDatabase.provisionMember(active);
      if (app) window.ClubDatabase.provisionMember(app);
    }

    this.renderMemberDashboard();
    if (typeof updateAuthUI === "function") updateAuthUI();
    showToast("Profil şəkli silindi.", "info");

    if (window.SyncEngine) {
      window.SyncEngine.broadcast("MEMBER_PHOTO_UPDATED", {
        memberId: active.id,
        username: active.username,
        photo: ""
      });
    }

    if (typeof fetch === "function") {
      fetch("/api/sync", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "MEMBER_PHOTO_UPDATED",
          memberId: active.id,
          username: active.username,
          photo: "",
          timestamp: Date.now()
        })
      }).catch(err => console.warn("[PhotoSync] Cloud error:", err));
    }
  },

  // ==========================================
  // BÜTÜN KLUB ÜZVLƏRİ VƏ KOMANDA DİREKTORİYASI (MUTUAL VISIBILITY)
  // ==========================================

  renderMembersDirectory() {
    const container = document.getElementById("membersDirectoryGrid");
    const countBadge = document.getElementById("membersDirectoryCount");
    if (!container) return;

    const data = getClubData();
    const members = (data.members || []).filter(m => {
      if (!m || !m.fullName) return false;
      const n = m.fullName.toLowerCase();
      const e = (m.email || "").toLowerCase();
      const u = (m.username || "").toLowerCase();
      return !n.includes("test") && !e.includes("test") && !u.includes("test");
    });
    const active = typeof getActiveMember === "function" ? getActiveMember() : null;

    if (countBadge) {
      countBadge.innerText = `${members.length} Üzv`;
    }

    if (members.length === 0) {
      container.innerHTML = `
        <div class="col-span-full py-10 text-center bg-slate-950/60 rounded-3xl border border-dashed border-slate-800 text-slate-400 space-y-3">
          <div class="w-14 h-14 rounded-2xl bg-teal-950/60 border border-teal-800/60 flex items-center justify-center mx-auto text-teal-400 text-2xl">
            <i class="fa-solid fa-users"></i>
          </div>
          <h4 class="text-base font-bold text-white">Hələlik qeydiyyatdan keçmiş üzv yoxdur</h4>
          <p class="text-xs text-slate-400 max-w-md mx-auto">
            Kluba üzvlük üçün onlayn qeydiyyatdan keçin və profil şəklinizi əlavə edərək burada ilk yerinizi tutun!
          </p>
          <button onclick="navigateTo('register')" class="mt-2 px-4 py-2 rounded-xl bg-teal-600 hover:bg-teal-500 text-white text-xs font-bold transition">
            <i class="fa-solid fa-user-plus mr-1"></i> Kluba Üzvlük Qeydiyyatı
          </button>
        </div>
      `;
      return;
    }

    const teachers = data.teachers || [];
    const mentorHtml = teachers.map(t => `
      <div class="col-span-full bg-gradient-to-r from-indigo-950/60 via-slate-900/90 to-purple-950/50 p-6 rounded-3xl border border-indigo-500/40 shadow-xl relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-5 mb-2">
        <div class="flex items-center gap-4">
          <div class="relative w-16 h-16 rounded-2xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-cyan-400 p-0.5 shadow-lg shrink-0 overflow-hidden">
            <img src="${t.photo || 'https://api.dicebear.com/7.x/identicon/svg?seed=sefanya'}" alt="${escapeHtml(t.fullName)}" class="w-full h-full object-cover rounded-[14px] bg-slate-900" />
          </div>
          <div>
            <div class="flex items-center gap-2 flex-wrap mb-1">
              <span class="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-indigo-500/20 text-indigo-300 border border-indigo-500/40">
                <i class="fa-solid fa-chalkboard-user mr-1"></i> Akademik Mentor & Tədqiqatçı
              </span>
              <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                ${escapeHtml(t.status || 'Aktiv')}
              </span>
            </div>
            <h4 class="text-lg font-black text-white">${escapeHtml(t.fullName)}</h4>
            <div class="text-xs text-indigo-300 font-mono font-bold">@${escapeHtml(t.username)} • ${escapeHtml(t.email || '')}</div>
            <div class="text-[11px] text-slate-400 mt-0.5">${escapeHtml(t.university || 'Western Caspian University')} • ${escapeHtml(t.department || 'Təbiət Elmləri Kafedrası')}</div>
          </div>
        </div>
        <div class="flex flex-wrap items-center gap-2">
          <span class="px-3 py-1.5 rounded-xl bg-slate-900/80 border border-indigo-500/30 text-indigo-300 text-xs font-semibold">
            <i class="fa-solid fa-phone mr-1 text-slate-400"></i> ${escapeHtml(t.phone || '+994 99 350 69 07')}
          </span>
          <span class="px-3 py-1.5 rounded-xl bg-slate-900/80 border border-teal-500/30 text-teal-300 text-xs font-semibold">
            <i class="fa-solid fa-flask-vial mr-1 text-teal-400"></i> ${escapeHtml(Array.isArray(t.specialties) ? t.specialties.join(", ") : (t.specialties || 'Bioinformatika'))}
          </span>
        </div>
      </div>
    `).join("");

    container.innerHTML = mentorHtml + members.map(m => {
      const isMe = active && (active.id === m.id || active.username === m.username);
      const initials = (m.fullName || "Ü")
        .split(" ")
        .map(w => w[0])
        .slice(0, 2)
        .join("")
        .toUpperCase();

      return `
        <div class="bg-slate-950/80 p-5 rounded-3xl border ${isMe ? 'border-teal-400 ring-2 ring-teal-500/20 shadow-teal-950/40' : 'border-slate-800 hover:border-teal-500/40'} transition flex flex-col justify-between space-y-3.5 shadow-xl relative overflow-hidden group">
          ${isMe ? `
            <div class="absolute top-3 right-3 px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-teal-500/20 text-teal-300 border border-teal-500/40">
              Siz (Cari Hesab)
            </div>
          ` : `
            <div class="absolute top-3 right-3 px-2 py-0.5 rounded-full text-[10px] font-bold ${m.status === 'Aktiv' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'}">
              ${escapeHtml(m.status || 'Aktiv')}
            </div>
          `}

          <!-- Üzvün Şəkli və Adı -->
          <div class="flex items-center gap-3.5 pt-1">
            <div class="w-14 h-14 rounded-2xl bg-gradient-to-tr from-teal-500 to-cyan-500 p-0.5 shadow-lg shrink-0 overflow-hidden relative">
              ${m.photo ? `
                <img src="${m.photo}" alt="${escapeHtml(m.fullName)}" class="w-full h-full object-cover rounded-[14px]" />
              ` : `
                <div class="w-full h-full bg-slate-900 rounded-[14px] flex items-center justify-center font-bold text-teal-300 text-sm">
                  ${escapeHtml(initials)}
                </div>
              `}
            </div>

            <div class="min-w-0 pr-12">
              <h5 class="text-sm font-extrabold text-white truncate leading-snug" title="${escapeHtml(m.fullName)}">
                ${escapeHtml(m.fullName)}
              </h5>
              <div class="text-[11px] font-mono font-bold text-cyan-400">@${escapeHtml(m.username || 'uzv')}</div>
              <p class="text-[10px] text-teal-300 font-medium truncate mt-0.5">
                <i class="fa-solid fa-graduation-cap text-teal-400 text-[10px] mr-1"></i>${escapeHtml(m.major || 'Biologiya')} ${m.course ? `(${escapeHtml(m.course)})` : ''}
              </p>
            </div>
          </div>

          <!-- Universiteti və Təhsil Müəssisəsi -->
          <div class="pt-2 border-t border-slate-900 text-[11px] text-slate-300">
            <div class="flex items-center gap-1.5 text-slate-300 truncate font-medium">
              <i class="fa-solid fa-university text-teal-400 text-xs shrink-0"></i>
              <span class="truncate" title="${escapeHtml(m.faculty || 'Qərbi Kaspi Universiteti')}">${escapeHtml(m.faculty || 'Qərbi Kaspi Universiteti')}</span>
            </div>
          </div>

          <!-- Şəxsi Məqsəd və Hədəf (Goal & Motivation) -->
          <div class="p-3 rounded-2xl bg-slate-900/90 border border-slate-800/80 text-[11px] space-y-1">
            <div class="text-[10px] font-bold text-teal-400 uppercase tracking-wider flex items-center gap-1.5">
              <i class="fa-solid fa-bullseye text-teal-400"></i> Şəxsi Məqsəd və Hədəf:
            </div>
            <p class="text-slate-300 italic line-clamp-3 leading-relaxed">
              "${escapeHtml(m.yearGoal || m.motivation || (m.researchTracks && m.researchTracks.length ? m.researchTracks.join(', ') : 'Bioinformatika və genomika üzrə bilikləri dərinləşdirmək.'))}"
            </p>
          </div>
        </div>
      `;
    }).join("");
  },

  // ==========================================
  // ÜZVÜN FƏRDİ TAPŞIRIQLARI (CUSTOM TASKS)
  // ==========================================

  renderMemberCustomTasks() {
    const container = document.getElementById("memberCustomTasksList");
    if (!container) return;

    const member = typeof getActiveMember === "function" ? getActiveMember() : null;
    if (!member) {
      container.innerHTML = `<div class="text-slate-400 text-xs py-4">Giriş edilməyib.</div>`;
      return;
    }

    const data = getClubData();
    // Retrieve member custom tasks from global or member record
    const allCustomTasks = data.memberCustomTasks || [];
    const myTasks = allCustomTasks.filter(t => t.memberId === member.id || t.username === member.username);

    if (myTasks.length === 0) {
      container.innerHTML = `
        <div class="col-span-full py-8 text-center bg-slate-950/60 rounded-2xl border border-dashed border-slate-800 text-slate-400">
          <i class="fa-solid fa-list-check text-2xl text-slate-600 mb-2 block"></i>
          <p class="text-xs">Hələlik heç bir fərdi tapşırıq əlavə etməmisiniz.</p>
          <button onclick="MembersPortal.openCreateCustomTaskModal()" class="mt-2 text-teal-400 hover:text-teal-300 text-xs font-semibold underline">
            + İlk Fərdi Tapşırığınızı Əlavə Edin
          </button>
        </div>
      `;
      return;
    }

    container.innerHTML = myTasks.map(task => {
      const isDone = task.status === "Tamamlandı";
      return `
        <div class="bg-slate-950/80 p-4 rounded-2xl border ${isDone ? 'border-emerald-500/30' : 'border-slate-800'} space-y-3 shadow-lg hover:border-teal-500/40 transition">
          <div class="flex items-start justify-between gap-2">
            <div>
              <span class="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${isDone ? 'bg-emerald-950 text-emerald-300 border border-emerald-800' : 'bg-teal-950 text-teal-300 border border-teal-800'}">
                ${escapeHtml(task.category || 'Fərdi Tədqiqat')}
              </span>
              <h5 class="text-sm font-bold text-white mt-1.5 leading-snug">${escapeHtml(task.title)}</h5>
            </div>
            <span class="px-2 py-0.5 rounded-full text-[10px] font-bold ${isDone ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'}">
              ${isDone ? 'Tamamlandı' : 'İcrada'}
            </span>
          </div>

          ${task.description ? `
            <p class="text-xs text-slate-300 leading-relaxed bg-slate-900/50 p-2.5 rounded-xl border border-slate-800/80">
              ${escapeHtml(task.description)}
            </p>
          ` : ''}

          <div class="flex items-center gap-2 flex-wrap text-[11px] pt-1">
            ${task.docUrl ? `
              <span class="px-2 py-0.5 rounded bg-slate-900 text-teal-300 border border-slate-800 flex items-center gap-1">
                <i class="fa-solid fa-file-code"></i> ${escapeHtml(task.docUrl)}
              </span>
            ` : ''}
            ${task.videoUrl ? `
              <a href="${task.videoUrl}" target="_blank" rel="noopener noreferrer" class="px-2 py-0.5 rounded bg-rose-950/60 text-rose-300 border border-rose-800/60 flex items-center gap-1 hover:underline">
                <i class="fa-solid fa-play"></i> 360p Video
              </a>
            ` : ''}
            <span class="text-[10px] text-slate-500 ml-auto">
              <i class="fa-regular fa-clock mr-1"></i>${task.createdAt || ''}
            </span>
          </div>

          <div class="pt-2 border-t border-slate-800/80 flex items-center justify-between">
            <button onclick="MembersPortal.toggleCustomTaskStatus('${task.id}')" class="px-2.5 py-1 rounded-lg ${isDone ? 'bg-slate-800 text-slate-300 hover:bg-slate-700' : 'bg-emerald-600 hover:bg-emerald-500 text-white'} text-[11px] font-semibold transition">
              ${isDone ? '<i class="fa-solid fa-rotate-left mr-1"></i> İcraya Qaytar' : '<i class="fa-solid fa-check mr-1"></i> Tamamla'}
            </button>
            <button onclick="MembersPortal.deleteCustomTask('${task.id}')" class="p-1 text-slate-500 hover:text-rose-400 transition" title="Sil">
              <i class="fa-regular fa-trash-can"></i>
            </button>
          </div>
        </div>
      `;
    }).join("");
  },

  openCreateCustomTaskModal() {
    const modal = document.getElementById("memberCustomTaskModal");
    if (!modal) return;
    const form = document.getElementById("memberCustomTaskForm");
    if (form) form.reset();
    modal.classList.remove("hidden");
  },

  handleSaveCustomTask(e) {
    if (e) e.preventDefault();
    const member = typeof getActiveMember === "function" ? getActiveMember() : null;
    if (!member) {
      showToast("Zəhmət olmasa əvvəlcə üzv hesabınıza daxil olun.", "warning");
      return;
    }

    const title = (document.getElementById("customTaskTitle")?.value || "").trim();
    const category = document.getElementById("customTaskCategory")?.value || "Fərdi Tədqiqat İşi";
    const status = document.getElementById("customTaskStatus")?.value || "İcrada";
    const description = (document.getElementById("customTaskDescription")?.value || "").trim();
    const docUrl = (document.getElementById("customTaskDoc")?.value || "").trim();
    const videoUrl = (document.getElementById("customTaskVideo")?.value || "").trim();

    if (!title) {
      showToast("Tapşırıq başlığını daxil edin.", "warning");
      return;
    }

    const data = getClubData();
    data.memberCustomTasks = data.memberCustomTasks || [];

    const newTask = {
      id: "ctask-" + Date.now(),
      memberId: member.id,
      memberName: member.fullName,
      username: member.username,
      faculty: member.faculty,
      title,
      category,
      status,
      description,
      docUrl,
      videoUrl,
      createdAt: new Date().toLocaleDateString('az-AZ', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' })
    };

    data.memberCustomTasks.unshift(newTask);
    saveClubData(data);

    document.getElementById("memberCustomTaskModal")?.classList.add("hidden");
    this.renderMemberCustomTasks();
    showToast("Fərdi tapşırığınız uğurla əlavə edildi və Sədr panelinə sinxronlaşdırıldı!", "success");

    // Real-time broadcast
    if (window.SyncEngine) {
      window.SyncEngine.broadcast("CUSTOM_TASK_ADDED", { memberId: member.id, title });
    }
  },

  toggleCustomTaskStatus(taskId) {
    const data = getClubData();
    data.memberCustomTasks = data.memberCustomTasks || [];
    const task = data.memberCustomTasks.find(t => t.id === taskId);
    if (!task) return;

    task.status = task.status === "Tamamlandı" ? "İcrada" : "Tamamlandı";
    saveClubData(data);
    this.renderMemberCustomTasks();
    showToast(`Status yeniləndi: ${task.status}`, "info");

    if (window.SyncEngine) {
      window.SyncEngine.broadcast("CUSTOM_TASK_STATUS", { taskId, status: task.status });
    }
  },

  deleteCustomTask(taskId) {
    if (!confirm("Bu tapşırığı silmək istədiyinizə əminsiniz?")) return;
    const data = getClubData();
    data.memberCustomTasks = (data.memberCustomTasks || []).filter(t => t.id !== taskId);
    saveClubData(data);
    this.renderMemberCustomTasks();
    showToast("Tapşırıq silindi.", "info");

    if (window.SyncEngine) {
      window.SyncEngine.broadcast("CUSTOM_TASK_DELETED", { taskId });
    }
  },

  // ==========================================
  // ÜZVÜN LABORATORİYA VƏ TƏDQİQAT QEYDLƏRİ (LAB NOTES)
  // ==========================================

  renderMemberNotes() {
    const container = document.getElementById("memberNotesList");
    if (!container) return;

    const member = typeof getActiveMember === "function" ? getActiveMember() : null;
    if (!member) {
      container.innerHTML = `<div class="text-slate-400 text-xs py-4">Giriş edilməyib.</div>`;
      return;
    }

    const data = getClubData();
    const allNotes = data.memberNotes || [];
    const myNotes = allNotes.filter(n => n.memberId === member.id || n.username === member.username);

    if (myNotes.length === 0) {
      container.innerHTML = `
        <div class="py-8 text-center bg-slate-950/60 rounded-2xl border border-dashed border-slate-800 text-slate-400">
          <i class="fa-solid fa-book-journal-whills text-2xl text-slate-600 mb-2 block"></i>
          <p class="text-xs">Hələlik laboratoriya qeydiniz yoxdur.</p>
          <button onclick="MembersPortal.openCreateNoteModal()" class="mt-2 text-cyan-400 hover:text-cyan-300 text-xs font-semibold underline">
            + İlk Laboratoriya Qeydinizi Yazın
          </button>
        </div>
      `;
      return;
    }

    container.innerHTML = myNotes.map(note => `
      <div class="bg-slate-950/80 p-4 rounded-2xl border border-slate-800 hover:border-cyan-500/40 transition space-y-2.5 shadow-lg">
        <div class="flex items-start justify-between gap-2">
          <div>
            <span class="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800">
              ${escapeHtml(note.category || 'Hesablama Biologiyası')}
            </span>
            <h5 class="text-sm font-bold text-white mt-1 leading-snug">${escapeHtml(note.title)}</h5>
          </div>
          <button onclick="MembersPortal.deleteNote('${note.id}')" class="p-1 text-slate-500 hover:text-rose-400 transition" title="Qeydi Sil">
            <i class="fa-regular fa-trash-can text-xs"></i>
          </button>
        </div>

        <div class="bg-slate-900/60 p-3 rounded-xl border border-slate-800/80 text-xs text-slate-200 whitespace-pre-wrap font-mono leading-relaxed max-h-48 overflow-y-auto">
          ${escapeHtml(note.content)}
        </div>

        <div class="flex items-center justify-between text-[10px] text-slate-500 pt-1">
          <span><i class="fa-regular fa-calendar-check mr-1"></i>${note.createdAt || ''}</span>
          <span class="text-teal-400/80 font-mono"><i class="fa-solid fa-shield-halved mr-1"></i>Sədrə sinxronlaşdırılıb</span>
        </div>
      </div>
    `).join("");
  },

  openCreateNoteModal() {
    const modal = document.getElementById("memberNoteModal");
    if (!modal) return;
    const form = document.getElementById("memberNoteForm");
    if (form) form.reset();
    modal.classList.remove("hidden");
  },

  handleSaveNote(e) {
    if (e) e.preventDefault();
    const member = typeof getActiveMember === "function" ? getActiveMember() : null;
    if (!member) {
      showToast("Zəhmət olmasa əvvəlcə üzv hesabınıza daxil olun.", "warning");
      return;
    }

    if (window.ClubSecurity) {
      const rateCheck = window.ClubSecurity.checkRateLimit("note_submission", { maxAttempts: 5, lockoutMs: 15000 });
      if (!rateCheck.allowed) {
        showToast(rateCheck.reason, "error");
        return;
      }
    }

    const rawTitle = (document.getElementById("memberNoteTitle")?.value || "").trim();
    const category = document.getElementById("memberNoteCategory")?.value || "Hesablama Biologiyası";
    const rawContent = (document.getElementById("memberNoteContent")?.value || "").trim();

    if (!rawTitle || !rawContent) {
      showToast("Başlıq və məzmun daxil edin.", "warning");
      return;
    }

    const title = window.ClubSecurity ? window.ClubSecurity.sanitizeText(rawTitle) : rawTitle;
    const content = window.ClubSecurity ? window.ClubSecurity.sanitizeHtml(rawContent) : rawContent;

    const data = getClubData();
    data.memberNotes = data.memberNotes || [];

    const newNote = {
      id: "note-" + Date.now(),
      memberId: member.id,
      memberName: member.fullName,
      username: member.username,
      title,
      category,
      content,
      createdAt: new Date().toLocaleDateString('az-AZ', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' })
    };

    data.memberNotes.unshift(newNote);
    saveClubData(data);

    // IndexedDB bazasında daimi saxla
    if (window.ClubDatabase && window.ClubDatabase.db) {
      try {
        const tx = window.ClubDatabase.db.transaction(["notes"], "readwrite");
        tx.objectStore("notes").put(newNote);
      } catch (e) {}
    }

    document.getElementById("memberNoteModal")?.classList.add("hidden");
    this.renderMemberNotes();
    showToast("Laboratoriya qeydiniz saxlanıldı və Sədr panelinə sinxronlaşdırıldı!", "success");

    if (window.SyncEngine) {
      window.SyncEngine.broadcast("MEMBER_NOTE_ADDED", { memberId: member.id, title });
    }
  },

  deleteNote(noteId) {
    if (!confirm("Bu qeydi silmək istədiyinizə əminsiniz?")) return;
    const data = getClubData();
    data.memberNotes = (data.memberNotes || []).filter(n => n.id !== noteId);
    saveClubData(data);
    this.renderMemberNotes();
    showToast("Qeyd silindi.", "info");

    if (window.SyncEngine) {
      window.SyncEngine.broadcast("MEMBER_NOTE_DELETED", { noteId });
    }
  },

  // ==========================================
  // ŞİFRƏNİN DƏYİŞDİRİLMƏSİ
  // ==========================================

  openChangePasswordModal() {
    const modal = document.getElementById("memberChangePasswordModal");
    if (!modal) return;
    const inp = document.getElementById("memberNewPass");
    if (inp) inp.value = "";
    modal.classList.remove("hidden");
  },

  handleChangePassword(e) {
    if (e) e.preventDefault();
    const member = typeof getActiveMember === "function" ? getActiveMember() : null;
    if (!member) return;

    const newPass = (document.getElementById("memberNewPass")?.value || "").trim();
    if (newPass.length < 5) {
      showToast("Şifrə ən azı 5 simvol olmalıdır.", "warning");
      return;
    }

    const data = getClubData();
    data.members = data.members || [];
    const mem = data.members.find(m => m.id === member.id);
    if (mem) {
      mem.password = newPass;
      saveClubData(data);
      document.getElementById("memberChangePasswordModal")?.classList.add("hidden");
      showToast("Şifrəniz uğurla yeniləndi və Sədr panelində sinxronlaşdırıldı!", "success");

      if (window.SyncEngine) {
        window.SyncEngine.broadcast("MEMBER_PASSWORD_CHANGED", { memberId: member.id, username: member.username });
      }
    }
  },

  // ==========================================
  // ÜZV MÜRACİƏT DOSYESİ VƏ GÜNDƏLİK 1 DƏFƏ REDAKTƏ LİMİTİ
  // ==========================================

  getProfileEditLimitStatus(member) {
    if (!member || !member.lastProfileEditedAt) {
      return { allowed: true, hoursLeft: 0, minsLeft: 0, lastEditedStr: "" };
    }

    const lastTime = new Date(member.lastProfileEditedAt).getTime();
    if (isNaN(lastTime)) {
      return { allowed: true, hoursLeft: 0, minsLeft: 0, lastEditedStr: "" };
    }

    const elapsed = Date.now() - lastTime;
    const ONE_DAY_MS = 24 * 60 * 60 * 1000;

    if (elapsed >= ONE_DAY_MS) {
      return { 
        allowed: true, 
        hoursLeft: 0, 
        minsLeft: 0, 
        lastEditedStr: new Date(lastTime).toLocaleString('az-AZ') 
      };
    }

    const remainingMs = ONE_DAY_MS - elapsed;
    const hoursLeft = Math.floor(remainingMs / (1000 * 60 * 60));
    const minsLeft = Math.ceil((remainingMs % (1000 * 60 * 60)) / (1000 * 60));

    return {
      allowed: false,
      hoursLeft,
      minsLeft,
      lastEditedStr: new Date(lastTime).toLocaleString('az-AZ')
    };
  },

  renderMemberDossier() {
    const member = typeof getActiveMember === "function" ? getActiveMember() : null;
    const container = document.getElementById("memberDossierOverviewGrid");
    const limitBadge = document.getElementById("memberDossierLimitBadge");
    if (!member || !container) return;

    const data = getClubData();
    const app = (data.applications || []).find(
      a => (member.id && a.memberId === member.id) ||
           (member.username && a.username && a.username.toLowerCase() === member.username.toLowerCase()) ||
           (member.email && a.email && a.email.toLowerCase() === member.email.toLowerCase())
    ) || {};

    const limit = this.getProfileEditLimitStatus(member);
    if (limitBadge) {
      if (limit.allowed) {
        limitBadge.innerHTML = `
          <span class="px-3 py-1.5 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center gap-1.5 shadow-sm">
            <i class="fa-solid fa-circle-check text-emerald-400"></i> Bu gün redaktə hüququnuz aktivdir (Gündə 1 dəfə)
          </span>
        `;
      } else {
        limitBadge.innerHTML = `
          <span class="px-3 py-1.5 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30 flex items-center gap-1.5 shadow-sm">
            <i class="fa-solid fa-clock-rotate-left text-amber-400"></i> Gündəlik limit dolub • Qalan: ${limit.hoursLeft}s ${limit.minsLeft}d
          </span>
        `;
      }
    }

    const fullName = member.fullName || app.fullName || "Qeyd edilməyib";
    const faculty = member.faculty || app.faculty || "Qeyd edilməyib";
    const major = member.major || app.major || "Qeyd edilməyib";
    const course = member.course || app.course || "Qeyd edilməyib";
    const studyLang = member.studyLang || app.studyLang || "Azərbaycan bölməsi";
    const gpa = member.gpa || app.gpa || "";
    const phone = member.phone || app.phone || "Qeyd edilməyib";
    const email = member.email || app.email || "Qeyd edilməyib";
    const profileUrl = member.profileUrl || app.profileUrl || "";
    const progSkill = member.programmingSkill || app.programmingSkill || "Məlumat daxil edilməyib";
    const tools = (member.tools && member.tools.length) ? member.tools : (app.tools || []);
    const bioTools = (member.bioTools && member.bioTools.length) ? member.bioTools : (app.bioTools || []);
    const bioKnowledge = member.bioKnowledge || app.bioKnowledge || "Məlumat yoxdur";
    const osType = member.osType || app.osType || "Windows";
    const researchTracks = (member.researchTracks && member.researchTracks.length) ? member.researchTracks : (app.researchTracks || []);
    const roleInterest = member.roleInterest || app.roleInterest || "Aktiv Tələbə";
    const weeklyTime = member.weeklyTime || app.weeklyTime || "Həftədə 2–4 saat";
    const motivation = member.motivation || app.motivation || "Motivasiya mətni yazılmayıb.";
    const yearGoal = member.yearGoal || app.yearGoal || "";

    container.innerHTML = `
      <!-- Card 1: Akademik Məlumatlar -->
      <div class="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 sm:p-5 space-y-3 shadow-md hover:border-teal-500/40 transition">
        <div class="flex items-center gap-2 pb-2 border-b border-slate-800">
          <div class="w-7 h-7 rounded-lg bg-teal-500/20 text-teal-400 flex items-center justify-center text-xs">
            <i class="fa-solid fa-graduation-cap"></i>
          </div>
          <h4 class="text-xs font-bold text-white uppercase tracking-wider">Akademik Təhsil</h4>
        </div>
        <div class="space-y-2 text-xs">
          <div>
            <span class="text-slate-400 block text-[11px]">Universitet / İnstitut:</span>
            <span class="text-teal-300 font-semibold break-words-anywhere">${escapeHtml(faculty)}</span>
          </div>
          <div>
            <span class="text-slate-400 block text-[11px]">İxtisas və Kurs:</span>
            <span class="text-white font-medium break-words-anywhere">${escapeHtml(major)} • ${escapeHtml(course)}</span>
          </div>
          <div class="flex items-center justify-between text-slate-300 pt-1">
            <span>Tədris Dili: <strong>${escapeHtml(studyLang)}</strong></span>
            ${gpa ? `<span>GPA: <strong class="text-cyan-400">${escapeHtml(gpa)}</strong></span>` : ''}
          </div>
        </div>
      </div>

      <!-- Card 2: Texniki və Proqramlaşdırma Səriştəsi -->
      <div class="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 sm:p-5 space-y-3 shadow-md hover:border-cyan-500/40 transition">
        <div class="flex items-center gap-2 pb-2 border-b border-slate-800">
          <div class="w-7 h-7 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-xs">
            <i class="fa-solid fa-laptop-code"></i>
          </div>
          <h4 class="text-xs font-bold text-white uppercase tracking-wider">Texniki Səriştə</h4>
        </div>
        <div class="space-y-2 text-xs">
          <div>
            <span class="text-slate-400 block text-[11px]">Proqramlaşdırma Səviyyəsi:</span>
            <span class="text-cyan-300 font-semibold">${escapeHtml(progSkill)}</span>
          </div>
          <div>
            <span class="text-slate-400 block text-[11px]">Bələd Olduğu Dillər & Alətlər:</span>
            <div class="flex flex-wrap gap-1 mt-1">
              ${tools.length ? tools.map(t => `<span class="px-2 py-0.5 rounded-lg bg-teal-50 text-teal-800 border border-teal-200 text-[10px] font-semibold">${escapeHtml(t)}</span>`).join('') : '<span class="text-slate-500">Qeyd edilməyib</span>'}
            </div>
          </div>
          <div class="text-slate-300 pt-1">
            <span>Əməliyyat Sistemi: <strong>${escapeHtml(osType)}</strong></span>
          </div>
        </div>
      </div>

      <!-- Card 3: Bioloji Baza & Tədqiqat Sahələri -->
      <div class="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 sm:p-5 space-y-3 shadow-md hover:border-emerald-500/40 transition">
        <div class="flex items-center gap-2 pb-2 border-b border-slate-800">
          <div class="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs">
            <i class="fa-solid fa-dna"></i>
          </div>
          <h4 class="text-xs font-bold text-white uppercase tracking-wider">Bioinformatika & Tədqiqat</h4>
        </div>
        <div class="space-y-2 text-xs">
          <div>
            <span class="text-slate-400 block text-[11px]">Bioloji Baza Biliyi:</span>
            <span class="text-emerald-300 font-medium">${escapeHtml(bioKnowledge)}</span>
          </div>
          <div>
            <span class="text-slate-400 block text-[11px]">Bioloji Verilənlər Bazaları:</span>
            <div class="flex flex-wrap gap-1 mt-1">
              ${bioTools.length ? bioTools.map(bt => `<span class="px-2 py-0.5 rounded bg-emerald-950/60 text-emerald-300 border border-emerald-800/60 text-[10px] font-medium">${escapeHtml(bt)}</span>`).join('') : '<span class="text-slate-500">Qeyd edilməyib</span>'}
            </div>
          </div>
          <div>
            <span class="text-slate-400 block text-[11px]">İxtisaslaşma İstiqamətləri:</span>
            <div class="flex flex-wrap gap-1 mt-1">
              ${researchTracks.length ? researchTracks.map(rt => `<span class="px-2 py-0.5 rounded bg-teal-950/60 text-teal-300 border border-teal-800/60 text-[10px] font-medium">${escapeHtml(rt)}</span>`).join('') : '<span class="text-slate-500">Ümumi</span>'}
            </div>
          </div>
        </div>
      </div>

      <!-- Card 4: Əlaqə və Klubda İştirak -->
      <div class="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 sm:p-5 space-y-3 shadow-md hover:border-amber-500/40 transition">
        <div class="flex items-center gap-2 pb-2 border-b border-slate-800">
          <div class="w-7 h-7 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center text-xs">
            <i class="fa-solid fa-address-book"></i>
          </div>
          <h4 class="text-xs font-bold text-white uppercase tracking-wider">Əlaqə & İştirak</h4>
        </div>
        <div class="space-y-2 text-xs">
          <div>
            <span class="text-slate-400 block text-[11px]">Əlaqə Nömrəsi (WhatsApp):</span>
            <span class="text-white font-medium">${escapeHtml(phone)}</span>
          </div>
          <div>
            <span class="text-slate-400 block text-[11px]">E-poçt Ünvanı:</span>
            <span class="text-slate-300 font-mono text-[11px] break-words-anywhere">${escapeHtml(email)}</span>
          </div>
          <div>
            <span class="text-slate-400 block text-[11px]">Klub Rolu & Vaxt:</span>
            <span class="text-amber-300 font-medium">${escapeHtml(roleInterest)} • ${escapeHtml(weeklyTime)}</span>
          </div>
          ${profileUrl ? `
          <div class="pt-1">
            <a href="${escapeHtml(profileUrl)}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 underline font-mono text-[11px]">
              <i class="fa-solid fa-arrow-up-right-from-square"></i> Profil Linki (LinkedIn/GitHub)
            </a>
          </div>
          ` : ''}

          <!-- Giriş Məlumatları (Yalnız bu üzvə və Sədrə açıqdır) -->
          <div class="mt-2.5 pt-2 border-t border-slate-800 space-y-1.5 bg-slate-950/40 p-2.5 rounded-xl border border-slate-800/80">
            <div class="flex items-center justify-between text-[11px]">
              <span class="text-slate-400">Giriş Login (@username):</span>
              <span class="font-mono font-bold text-cyan-300">@${escapeHtml(member.username || app.username || '')}</span>
            </div>
            <div class="flex items-center justify-between text-[11px]">
              <span class="text-slate-400">Şəxsi Şifrəniz:</span>
              <span class="font-mono font-bold text-amber-300 bg-amber-950/40 px-2 py-0.5 rounded border border-amber-800/60 select-all">${escapeHtml(member.password || app.password || 'Təyin edilməyib')}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Card 5: Motivasiya Məktubu və 1 İllik Hədəf (Full Width) -->
      <div class="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 sm:p-5 space-y-3 sm:col-span-2 lg:col-span-4 shadow-md">
        <div class="flex items-center gap-2 pb-2 border-b border-slate-800">
          <div class="w-7 h-7 rounded-lg bg-rose-500/20 text-rose-400 flex items-center justify-center text-xs">
            <i class="fa-solid fa-heart"></i>
          </div>
          <h4 class="text-xs font-bold text-white uppercase tracking-wider">Motivasiya və Fərdi Hədəflər</h4>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div>
            <span class="text-slate-400 block text-[11px] mb-1">Klub üçün Motivasiya Məktubunuz:</span>
            <p class="text-slate-200 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800 italic leading-relaxed break-words-anywhere">
              "${escapeHtml(motivation)}"
            </p>
          </div>
          ${yearGoal ? `
          <div>
            <span class="text-slate-400 block text-[11px] mb-1">1 İllik Fərdi Elmi Hədəfiniz:</span>
            <p class="text-amber-200 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800 leading-relaxed break-words-anywhere">
              ${escapeHtml(yearGoal)}
            </p>
          </div>
          ` : `
          <div>
            <span class="text-slate-400 block text-[11px] mb-1">1 İllik Fərdi Elmi Hədəfiniz:</span>
            <p class="text-slate-500 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800 italic leading-relaxed">
              Konkret hədəf daxil edilməyib. "Məlumatları Redaktə Et" düyməsindən əlavə edə bilərsiniz.
            </p>
          </div>
          `}
        </div>
      </div>
    `;
  },

  handleProfileEditPhotoSelect(event) {
    const file = event.target.files && event.target.files[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      showToast("Zəhmət olmasa şəkil faylı seçin (PNG, JPG, WEBP).", "warning");
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
        const compressed = canvas.toDataURL("image/jpeg", 0.82);
        window._tempProfileEditPhoto = compressed;
        
        const previewBox = document.getElementById("mepPhotoPreviewBox");
        if (previewBox) {
          previewBox.innerHTML = `<img src="${compressed}" class="w-full h-full object-cover rounded-xl" />`;
        }
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  },

  openEditProfileModal() {
    const member = typeof getActiveMember === "function" ? getActiveMember() : null;
    if (!member) {
      showToast("Zəhmət olmasa əvvəlcə üzv hesabınıza daxil olun.", "warning");
      return;
    }

    const modal = document.getElementById("memberEditProfileModal");
    if (!modal) return;

    window._tempProfileEditPhoto = member.photo || "";

    const data = getClubData();
    const app = (data.applications || []).find(
      a => (member.id && a.memberId === member.id) ||
           (member.username && a.username && a.username.toLowerCase() === member.username.toLowerCase()) ||
           (member.email && a.email && a.email.toLowerCase() === member.email.toLowerCase())
    ) || {};

    const limit = this.getProfileEditLimitStatus(member);
    const alertBox = document.getElementById("mepEligibilityAlertBox");
    const saveBtn = document.getElementById("btnSaveMemberProfile");
    const form = document.getElementById("memberEditProfileForm");

    if (alertBox) {
      if (limit.allowed) {
        alertBox.innerHTML = `
          <div class="p-3.5 rounded-2xl bg-emerald-950/70 border border-emerald-500/50 text-emerald-300 text-xs flex items-start gap-3 shadow-md">
            <i class="fa-solid fa-circle-check text-emerald-400 text-base shrink-0 mt-0.5"></i>
            <div>
              <strong class="font-bold text-emerald-200">Gündəlik Redaktə Hüququnuz Aktivdir:</strong>
              <p class="mt-0.5 text-slate-300">Bu gün məlumatlarınızı redaktə edə bilərsiniz. Dəyişiklikləri yadda saxladıqdan sonra növbəti redaktə hüququ 24 saat sonra açılacaq. Dəyişikliklər həmçinin Sədr panelində canlı yenilənir.</p>
            </div>
          </div>
        `;
      } else {
        alertBox.innerHTML = `
          <div class="p-3.5 rounded-2xl bg-amber-950/70 border border-amber-500/50 text-amber-300 text-xs flex items-start gap-3 shadow-md">
            <i class="fa-solid fa-clock-rotate-left text-amber-400 text-base shrink-0 mt-0.5"></i>
            <div>
              <strong class="font-bold text-amber-200">Gündəlik Limit Aktivdir (Son redaktə: ${limit.lastEditedStr || 'Bu gün'}):</strong>
              <p class="mt-0.5 text-slate-300">Qaydalara əsasən, məlumatlarınızı gündə ən çox 1 dəfə yeniləyə bilərsiniz. Növbəti redaktə üçün qalan vaxt: <span class="font-bold text-amber-300 underline">${limit.hoursLeft} saat ${limit.minsLeft} dəqiqə</span>. Hal-hazırda yalnız nəzərdən keçirə bilərsiniz.</p>
            </div>
          </div>
        `;
      }
    }

    // Populate inputs
    const setVal = (id, val) => {
      const el = document.getElementById(id);
      if (el) el.value = val || "";
    };

    setVal("mepFullName", member.fullName || app.fullName || "");
    setVal("mepPatronymic", member.patronymic || app.patronymic || "");
    setVal("mepEmail", member.email || app.email || "");
    setVal("mepPhone", member.phone || app.phone || "");
    setVal("mepProfileUrl", member.profileUrl || app.profileUrl || "");
    setVal("mepMajor", member.major || app.major || "");
    setVal("mepCourse", member.course || app.course || "Bakalavr (I kurs)");
    setVal("mepStudyLang", member.studyLang || app.studyLang || "Azərbaycan bölməsi");
    setVal("mepGpa", member.gpa || app.gpa || "");
    setVal("mepBioKnowledge", member.bioKnowledge || app.bioKnowledge || "Güclü biologiya bazam var (Genetika, Molekulyar biologiya)");
    setVal("mepOsType", member.osType || app.osType || "Windows");
    setVal("mepRoleInterest", member.roleInterest || app.roleInterest || "Aktiv Tələbə / Təlim və Seminar İştirakçısı");
    setVal("mepWeeklyTime", member.weeklyTime || app.weeklyTime || "Həftədə 2–4 saat");
    setVal("mepMotivation", member.motivation || app.motivation || "");
    setVal("mepYearGoal", member.yearGoal || app.yearGoal || "");
    setVal("mepNewPassword", "");

    // Set faculty
    const facSelect = document.getElementById("mepFaculty");
    if (facSelect) {
      const targetFac = member.faculty || app.faculty || "(WCU) - Yüksək Texnologiyalar və Təbiət Elmləri Məktəbi";
      facSelect.value = targetFac;
      if (!facSelect.value) {
        for (let opt of facSelect.options) {
          if (opt.value === targetFac || opt.text === targetFac) {
            facSelect.value = opt.value;
            break;
          }
        }
      }
    }

    // Programming skill radio
    const targetProg = member.programmingSkill || app.programmingSkill || "Heç biri (Sıfırdan öyrənmək istəyirəm)";
    document.querySelectorAll('input[name="mepProgSkill"]').forEach(radio => {
      radio.checked = (radio.value === targetProg || radio.value.includes(targetProg.slice(0, 8)));
    });

    // Checkboxes for tools
    const curTools = (member.tools && member.tools.length) ? member.tools : (app.tools || []);
    document.querySelectorAll('input[name="mepToolsCheck"]').forEach(cb => {
      cb.checked = curTools.includes(cb.value);
    });

    // Checkboxes for bioTools
    const curBioTools = (member.bioTools && member.bioTools.length) ? member.bioTools : (app.bioTools || []);
    document.querySelectorAll('input[name="mepBioToolsCheck"]').forEach(cb => {
      cb.checked = curBioTools.includes(cb.value);
    });

    // Checkboxes for researchTracks
    const curTracks = (member.researchTracks && member.researchTracks.length) ? member.researchTracks : (app.researchTracks || []);
    document.querySelectorAll('input[name="mepTracksCheck"]').forEach(cb => {
      cb.checked = curTracks.includes(cb.value);
    });

    // Photo preview
    const previewBox = document.getElementById("mepPhotoPreviewBox");
    if (previewBox) {
      const p = member.photo || app.photo || "";
      if (p) {
        previewBox.innerHTML = `<img src="${p}" class="w-full h-full object-cover rounded-xl" />`;
      } else {
        previewBox.innerHTML = `<i class="fa-solid fa-camera text-sm"></i>`;
      }
    }

    // Control enable/disable state based on daily limit
    if (form) {
      const inputs = form.querySelectorAll("input:not(#mepEmail), select, textarea");
      inputs.forEach(el => {
        el.disabled = !limit.allowed;
      });
      const emailField = document.getElementById("mepEmail");
      if (emailField) emailField.disabled = true;
    }

    if (saveBtn) {
      if (limit.allowed) {
        saveBtn.disabled = false;
        saveBtn.innerHTML = `<i class="fa-solid fa-floppy-disk"></i> Yadda Saxla və Yenilə (Gündə 1 Dəfə)`;
        saveBtn.className = "w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 shadow-lg transition cursor-pointer";
      } else {
        saveBtn.disabled = true;
        saveBtn.innerHTML = `<i class="fa-solid fa-lock"></i> Gündəlik Limit Dolub (${limit.hoursLeft}s ${limit.minsLeft}d)`;
        saveBtn.className = "w-full sm:w-auto px-6 py-2.5 rounded-xl bg-slate-800 text-slate-400 border border-slate-700 font-bold text-xs flex items-center justify-center gap-2 cursor-not-allowed opacity-75";
      }
    }

    modal.classList.remove("hidden");
  },

  closeEditProfileModal() {
    const modal = document.getElementById("memberEditProfileModal");
    if (modal) modal.classList.add("hidden");
  },

  submitProfileEdit(e) {
    if (e) e.preventDefault();
    const member = typeof getActiveMember === "function" ? getActiveMember() : null;
    if (!member) return;

    // Strict Rate Limit Verification (1-per-day limit)
    const limit = this.getProfileEditLimitStatus(member);
    if (!limit.allowed) {
      showToast(`Gündəlik limit dolub! Məlumatları gündə yalnız 1 dəfə yeniləmək olar. Növbəti redaktə üçün ${limit.hoursLeft} saat ${limit.minsLeft} dəqiqə gözləməlisiniz.`, "warning");
      return;
    }

    const fullName = (document.getElementById("mepFullName")?.value || "").trim();
    const patronymic = (document.getElementById("mepPatronymic")?.value || "").trim();
    const phone = (document.getElementById("mepPhone")?.value || "").trim();
    const profileUrl = (document.getElementById("mepProfileUrl")?.value || "").trim();
    const faculty = document.getElementById("mepFaculty")?.value || "";
    const major = (document.getElementById("mepMajor")?.value || "").trim();
    const course = document.getElementById("mepCourse")?.value || "";
    const studyLang = document.getElementById("mepStudyLang")?.value || "Azərbaycan bölməsi";
    const gpa = (document.getElementById("mepGpa")?.value || "").trim();
    const bioKnowledge = document.getElementById("mepBioKnowledge")?.value || "";
    const osType = document.getElementById("mepOsType")?.value || "Windows";
    const roleInterest = document.getElementById("mepRoleInterest")?.value || "";
    const weeklyTime = document.getElementById("mepWeeklyTime")?.value || "";
    const motivation = (document.getElementById("mepMotivation")?.value || "").trim();
    const yearGoal = (document.getElementById("mepYearGoal")?.value || "").trim();
    const newPassword = (document.getElementById("mepNewPassword")?.value || "").trim();

    const progSkill = document.querySelector('input[name="mepProgSkill"]:checked')?.value || "Heç biri (Sıfırdan öyrənmək istəyirəm)";

    const tools = [];
    document.querySelectorAll('input[name="mepToolsCheck"]:checked').forEach(cb => tools.push(cb.value));

    const bioTools = [];
    document.querySelectorAll('input[name="mepBioToolsCheck"]:checked').forEach(cb => bioTools.push(cb.value));

    const tracks = [];
    document.querySelectorAll('input[name="mepTracksCheck"]:checked').forEach(cb => tracks.push(cb.value));

    if (!fullName || !major || !faculty) {
      showToast("Zəhmət olmasa tələb olunan bütün xanaları doldurun.", "warning");
      return;
    }

    if (newPassword && newPassword.length < 4) {
      showToast("Giriş şifrəsi ən azı 4 simvol olmalıdır.", "warning");
      return;
    }

    const editTimestamp = new Date().toISOString();

    const data = getClubData();
    data.members = data.members || [];
    data.applications = data.applications || [];

    // Find and update member
    const memIdx = data.members.findIndex(m => m.id === member.id || (m.username && m.username.toLowerCase() === member.username.toLowerCase()));
    const targetMember = memIdx !== -1 ? data.members[memIdx] : member;

    targetMember.fullName = fullName;
    targetMember.patronymic = patronymic;
    targetMember.phone = phone;
    targetMember.profileUrl = profileUrl;
    targetMember.faculty = faculty;
    targetMember.major = major;
    targetMember.course = course;
    targetMember.studyLang = studyLang;
    targetMember.gpa = gpa;
    targetMember.programmingSkill = progSkill;
    targetMember.tools = tools;
    targetMember.bioTools = bioTools;
    targetMember.bioKnowledge = bioKnowledge;
    targetMember.osType = osType;
    targetMember.researchTracks = tracks;
    targetMember.roleInterest = roleInterest;
    targetMember.weeklyTime = weeklyTime;
    targetMember.motivation = motivation;
    targetMember.yearGoal = yearGoal;
    targetMember.lastProfileEditedAt = editTimestamp;

    if (window._tempProfileEditPhoto) {
      targetMember.photo = window._tempProfileEditPhoto;
    }
    if (newPassword) {
      targetMember.password = newPassword;
    }

    if (memIdx !== -1) {
      data.members[memIdx] = targetMember;
    }

    // Find and update corresponding application record
    const appIdx = data.applications.findIndex(
      a => (targetMember.id && a.memberId === targetMember.id) ||
           (targetMember.username && a.username && a.username.toLowerCase() === targetMember.username.toLowerCase()) ||
           (targetMember.email && a.email && a.email.toLowerCase() === targetMember.email.toLowerCase())
    );

    let targetApp = null;
    if (appIdx !== -1) {
      targetApp = data.applications[appIdx];
      targetApp.fullName = fullName;
      targetApp.patronymic = patronymic;
      targetApp.phone = phone;
      targetApp.profileUrl = profileUrl;
      targetApp.faculty = faculty;
      targetApp.major = major;
      targetApp.course = course;
      targetApp.studyLang = studyLang;
      targetApp.gpa = gpa;
      targetApp.programmingSkill = progSkill;
      targetApp.tools = tools;
      targetApp.bioTools = bioTools;
      targetApp.bioKnowledge = bioKnowledge;
      targetApp.osType = osType;
      targetApp.researchTracks = tracks;
      targetApp.roleInterest = roleInterest;
      targetApp.weeklyTime = weeklyTime;
      targetApp.motivation = motivation;
      targetApp.yearGoal = yearGoal;
      targetApp.lastProfileEditedAt = editTimestamp;
      if (window._tempProfileEditPhoto) targetApp.photo = window._tempProfileEditPhoto;
      if (newPassword) targetApp.password = newPassword;
      data.applications[appIdx] = targetApp;
    } else {
      targetApp = {
        id: "app-" + Date.now(),
        memberId: targetMember.id,
        fullName,
        patronymic,
        email: targetMember.email,
        phone,
        profileUrl,
        photo: targetMember.photo || "",
        faculty,
        major,
        course,
        studyLang,
        gpa,
        username: targetMember.username,
        password: targetMember.password,
        programmingSkill: progSkill,
        tools,
        bioTools,
        bioKnowledge,
        osType,
        researchTracks: tracks,
        roleInterest,
        weeklyTime,
        motivation,
        yearGoal,
        dateApplied: targetMember.registeredAt || new Date().toISOString().slice(0, 10),
        status: targetMember.status || "Gözləyir",
        adminNotes: "",
        lastProfileEditedAt: editTimestamp
      };
      data.applications.unshift(targetApp);
    }

    // Persist to local caches
    saveClubData(data);
    localStorage.setItem("wcu_active_member", JSON.stringify(targetMember));

    if (window.ClubDatabase) {
      window.ClubDatabase.provisionMember(targetMember);
      window.ClubDatabase.provisionMember(targetApp);
    }

    // Sync broadcast to edge and real-time cloud bus
    const syncPayload = {
      action: "UPDATE_MEMBER_DOSSIER",
      memberId: targetMember.id,
      username: targetMember.username,
      member: targetMember,
      application: targetApp,
      timestamp: Date.now()
    };

    if (window.SyncEngine) {
      window.SyncEngine.broadcast("UPDATE_MEMBER_DOSSIER", syncPayload);
    }

    if (typeof fetch === "function") {
      fetch("/api/sync", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(syncPayload)
      }).catch(err => console.warn("API sync error:", err));

      fetch("https://ntfy.sh/carboxmol_bioinfo_cloud_sync_v3_secure/publish", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(syncPayload)
      }).catch(err => console.warn("ntfy publish error:", err));
    }

    this.closeEditProfileModal();
    this.renderMemberDashboard();

    if (window.PresidentPortal && typeof window.PresidentPortal.renderApplicationsTable === "function") {
      window.PresidentPortal.renderApplicationsTable();
      window.PresidentPortal.renderMembersAccountsTable();
    }

    showToast("Müraciət və anket məlumatlarınız uğurla yeniləndi və Sədr panelinə göndərildi! Gündəlik limit aktivləşdirildi (növbəti redaktə 24 saat sonra).", "success");
  },


  // ==========================================
  // MÜZAKİRƏLƏR VƏ JOURNAL CLUB
  // ==========================================

  renderDiscussions() {
    const container = document.getElementById("memberDiscussionsContainer");
    if (!container) return;

    const data = getClubData();
    const discussions = data.discussions || [];

    if (discussions.length === 0) {
      container.innerHTML = `<div class="text-slate-400 text-xs py-4 text-center">Hələlik heç bir müzakirə yoxdur. İlk sualı və ya mövzunu siz başlayın!</div>`;
      return;
    }

    container.innerHTML = discussions.map(d => `
      <div class="bg-slate-900/60 border border-slate-800 rounded-xl p-4 space-y-3 transition hover:border-slate-700">
        <div class="flex items-start justify-between">
          <div class="flex items-center gap-2.5">
            <span class="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-lg border border-slate-700">
              ${d.avatar || '🧬'}
            </span>
            <div>
              <div class="flex items-center gap-2">
                <span class="font-semibold text-white text-sm">${escapeHtml(d.author)}</span>
                <span class="text-[11px] px-2 py-0.5 rounded-full ${
                  d.role === 'Sədr' ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30' : 'bg-teal-500/20 text-teal-300 border border-teal-500/30'
                }">${escapeHtml(d.role)}</span>
              </div>
              <span class="text-[11px] text-slate-400">${d.date}</span>
            </div>
          </div>
        </div>

        <div>
          <h5 class="font-bold text-slate-100 text-sm mb-1">${escapeHtml(d.title)}</h5>
          <p class="text-slate-300 text-xs leading-relaxed">${escapeHtml(d.content)}</p>
        </div>

        ${d.replies && d.replies.length > 0 ? `
          <div class="pl-4 border-l-2 border-slate-800 space-y-2 pt-2">
            ${d.replies.map(r => `
              <div class="bg-slate-950/50 p-2.5 rounded-lg border border-slate-800/80 text-xs">
                <div class="flex items-center justify-between text-slate-400 text-[11px] mb-1">
                  <span class="font-medium text-teal-300">${escapeHtml(r.author)}</span>
                  <span>${r.date}</span>
                </div>
                <p class="text-slate-300">${escapeHtml(r.text)}</p>
              </div>
            `).join('')}
          </div>
        ` : ''}

        <div class="pt-2 flex items-center gap-2">
          <input type="text" id="replyInput_${d.id}" placeholder="Cavab yazın..." class="flex-1 bg-slate-950/80 border border-slate-800 rounded-lg px-3 py-1.5 text-xs text-white focus:outline-none focus:border-teal-500" />
          <button onclick="MembersPortal.addReply('${d.id}')" class="px-3 py-1.5 bg-teal-600/80 hover:bg-teal-500 text-white rounded-lg text-xs font-medium transition">
            Cavabla
          </button>
        </div>
      </div>
    `).join('');
  },

  addDiscussion(title, content) {
    if (!title.trim() || !content.trim()) {
      showToast("Zəhmət olmasa başlıq və mətn daxil edin.", "warning");
      return;
    }

    const data = getClubData();
    data.discussions = data.discussions || [];

    const member = typeof getActiveMember === "function" ? getActiveMember() : null;
    const isPres = typeof isPresidentLoggedIn === "function" && isPresidentLoggedIn();

    const currentUser = isPres ? "Klub Sədri (Süleyman Hacızadə)" : (member ? member.fullName : "Klub Üzvü");
    const currentRole = isPres ? "Sədr" : "Üzv";
    const avatar = isPres ? "👑" : "🧪";

    data.discussions.unshift({
      id: "disc-" + Date.now(),
      author: currentUser,
      role: currentRole,
      avatar: avatar,
      date: new Date().toLocaleTimeString('az-AZ', { hour: '2-digit', minute: '2-digit' }),
      title: title.trim(),
      content: content.trim(),
      replies: []
    });

    saveClubData(data);
    this.renderDiscussions();
    showToast("Müzakirə uğurla dərc olundu!", "success");

    if (window.SyncEngine) {
      window.SyncEngine.broadcast("DISCUSSION_ADDED");
    }
  },

  addReply(discId) {
    const input = document.getElementById("replyInput_" + discId);
    if (!input || !input.value.trim()) return;

    const data = getClubData();
    const disc = (data.discussions || []).find(d => d.id === discId);
    if (!disc) return;

    const member = typeof getActiveMember === "function" ? getActiveMember() : null;
    const isPres = typeof isPresidentLoggedIn === "function" && isPresidentLoggedIn();

    const currentUser = isPres ? "Klub Sədri" : (member ? member.fullName : "Klub Üzvü");
    disc.replies = disc.replies || [];
    disc.replies.push({
      author: currentUser,
      date: new Date().toLocaleTimeString('az-AZ', { hour: '2-digit', minute: '2-digit' }),
      text: input.value.trim()
    });

    saveClubData(data);
    input.value = "";
    this.renderDiscussions();
    showToast("Cavabınız əlavə edildi!", "success");

    if (window.SyncEngine) {
      window.SyncEngine.broadcast("DISCUSSION_REPLY_ADDED");
    }
  },

  // ==========================================
  // BACARIQ VƏ TƏRƏQQİ İZLƏYİCİSİ (CHECKLIST)
  // ==========================================

  renderProgressTracker() {
    const container = document.getElementById("memberChecklistContainer");
    if (!container) return;

    const items = [
      { id: "step1", label: "Klub Sənədləri və Sillabus ilə tanışlıq", defaultChecked: true },
      { id: "step2", label: "Python və Biopython mühitinin quraşdırılması", defaultChecked: true },
      { id: "step3", label: "NCBI və UniProt bazalarından FASTA çəkilməsi", defaultChecked: false },
      { id: "step4", label: "PyMOL ilə 3D zülal vizuallaşdırma laboratoriyası", defaultChecked: false },
      { id: "step5", label: "Journal Club elmi məqalə təhlilində iştirak", defaultChecked: false },
      { id: "step6", label: "Daxili Bio-Data Hakatonuna qoşulmaq", defaultChecked: false }
    ];

    const savedProgress = JSON.parse(localStorage.getItem("wcu_member_progress") || "{}");

    container.innerHTML = items.map(item => {
      const isChecked = savedProgress[item.id] !== undefined ? savedProgress[item.id] : item.defaultChecked;
      return `
        <label class="flex items-center gap-3 p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/80 hover:border-teal-500/40 cursor-pointer transition">
          <input type="checkbox" onchange="MembersPortal.toggleProgress('${item.id}', this.checked)" ${isChecked ? 'checked' : ''} class="w-4 h-4 rounded text-teal-600 focus:ring-teal-500 bg-slate-800 border-slate-700" />
          <span class="text-xs text-slate-200 ${isChecked ? 'line-through text-slate-400' : ''}">${item.label}</span>
        </label>
      `;
    }).join('');

    this.updateProgressBar();
  },

  toggleProgress(id, checked) {
    const savedProgress = JSON.parse(localStorage.getItem("wcu_member_progress") || "{}");
    savedProgress[id] = checked;
    localStorage.setItem("wcu_member_progress", JSON.stringify(savedProgress));
    this.renderProgressTracker();
  },

  updateProgressBar() {
    const savedProgress = JSON.parse(localStorage.getItem("wcu_member_progress") || "{}");
    const total = 6;
    let completed = 0;
    const defaults = { step1: true, step2: true };
    for (let i = 1; i <= total; i++) {
      const key = "step" + i;
      const isDone = savedProgress[key] !== undefined ? savedProgress[key] : (defaults[key] || false);
      if (isDone) completed++;
    }

    const pct = Math.round((completed / total) * 100);
    const bar = document.getElementById("memberProgressBar");
    const text = document.getElementById("memberProgressPercent");
    if (bar) bar.style.width = pct + "%";
    if (text) text.innerText = `${completed}/${total} Tapşırıq (${pct}%)`;
  },

  // ==========================================
  // KLUB TAPŞIRIQLARI VƏ PRAKTİKİ İŞLƏR (MEMBER TASKS)
  // ==========================================

  renderTasks(filterCategory = "all") {
    const container = document.getElementById("memberTasksContainer");
    if (!container) return;

    const data = getClubData();
    let tasks = data.tasks || [];

    if (filterCategory !== "all") {
      tasks = tasks.filter(t => t.category.toLowerCase().includes(filterCategory.toLowerCase()));
    }

    if (tasks.length === 0) {
      container.innerHTML = `
        <div class="col-span-full py-12 text-center text-slate-400 bg-slate-900/40 rounded-2xl border border-slate-800">
          <i class="fa-solid fa-flask-vial text-4xl mb-3 text-slate-500 block"></i>
          Bu kateqoriyada aktiv tapşırıq tapılmadı.
        </div>
      `;
      return;
    }

    const member = typeof getActiveMember === "function" ? getActiveMember() : null;

    if (member) {
      tasks = tasks.filter(t => {
        if (!t.assignedTo || t.assignedTo === "all") return true;
        return t.assignedTo === member.id || t.assignedTo === member.username || (member.email && t.assignedTo === member.email);
      });
    }

    container.innerHTML = tasks.map(task => {
      const subs = task.submissions || [];
      // Əgər aktiv üzv daxil olubsa, onun öz həllini göstər
      const userSub = member ? subs.find(s => s.studentEmail === member.email || s.studentName === member.fullName) : null;
      const isPersonal = task.assignedTo && task.assignedTo !== "all";

      return `
        <div class="glass-panel p-6 rounded-3xl border transition duration-300 flex flex-col justify-between space-y-5 group shadow-lg ${
          isPersonal ? 'bg-gradient-to-b from-amber-950/20 to-slate-900/90 border-amber-500/40 hover:border-amber-400' : 'border-slate-800 hover:border-teal-500/50'
        }">
          <div class="space-y-3.5">
            <div class="flex items-center justify-between gap-2 flex-wrap">
              <span class="text-[11px] font-bold uppercase tracking-wider text-teal-400 px-2.5 py-1 rounded-md bg-teal-950/80 border border-teal-800/60">
                ${escapeHtml(task.category)}
              </span>
              <div class="flex items-center gap-1.5 flex-wrap">
                ${isPersonal ? `
                  <span class="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/50 flex items-center gap-1 shadow-sm">
                    <i class="fa-solid fa-bullseye text-amber-400"></i> 🎯 Fərdi Tapşırıq (Sizin Üçün)
                  </span>
                ` : `
                  <span class="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-teal-500/10 text-teal-300 border border-teal-500/20 flex items-center gap-1">
                    <i class="fa-solid fa-globe text-teal-400"></i> 🌐 Ümumi Klub
                  </span>
                `}
                <span class="text-xs px-2.5 py-0.5 rounded-full font-semibold bg-slate-100 text-slate-700 border border-slate-200">
                  ${escapeHtml(task.difficulty || 'Orta')}
                </span>
              </div>
            </div>

            <h4 class="text-base sm:text-lg font-bold text-white group-hover:text-teal-300 transition leading-snug">
              ${escapeHtml(task.title)}
            </h4>

            <p class="text-xs text-slate-300 leading-relaxed line-clamp-3">
              ${escapeHtml(task.summary)}
            </p>

            <div class="flex items-center gap-4 text-xs text-slate-400 pt-2 border-t border-slate-800/60 flex-wrap">
              <span><i class="fa-regular fa-clock text-amber-400 mr-1.5"></i> Son Tarix: <strong class="text-slate-200">${escapeHtml(task.deadline)}</strong></span>
              <span><i class="fa-solid fa-users text-teal-400 mr-1.5"></i> ${isPersonal ? '<strong class="text-amber-300">🎯 Yalnız Sizin Panelə Təyin Edilib</strong>' : escapeHtml(task.targetGroup || 'Bütün Üzvlər')}</span>
            </div>

            <div class="flex items-center gap-2 flex-wrap pt-1 text-[11px]">
              ${task.document ? `
                <button onclick="event.stopPropagation(); inAppDocViewer.openTaskDoc('${task.id}')" class="px-2.5 py-1 rounded-lg bg-teal-950/80 hover:bg-teal-900 text-teal-300 border border-teal-800 flex items-center gap-1.5 transition font-semibold" title="Sənədi yükləmədən birbaşa saytda aç">
                  <i class="fa-solid fa-file-lines text-teal-400"></i> ${escapeHtml(task.document.name || 'Sənədi Aç')}
                </button>
              ` : ''}
              ${task.imageUrl ? '<span class="px-2.5 py-1 rounded-lg bg-slate-900 text-slate-300 border border-slate-800 flex items-center gap-1.5"><i class="fa-solid fa-image text-cyan-400"></i> Şəkil</span>' : ''}
              ${task.videoUrl ? '<span class="px-2.5 py-1 rounded-lg bg-emerald-950/80 text-emerald-300 border border-emerald-800 flex items-center gap-1.5 font-medium"><i class="fa-solid fa-play text-rose-400"></i> 360p Video (Max 5 dəq)</span>' : ''}
              ${task.starterCode ? '<span class="px-2.5 py-1 rounded-lg bg-slate-900 text-slate-300 border border-slate-800 flex items-center gap-1.5"><i class="fa-solid fa-code text-emerald-400"></i> Kod</span>' : ''}
            </div>
          </div>

          ${userSub ? `
            <div class="bg-slate-900/90 p-3 rounded-2xl border border-slate-800 text-xs space-y-1.5">
              <div class="flex items-center justify-between">
                <span class="text-slate-400">Təhvil Statusu:</span>
                <span class="px-2 py-0.5 rounded text-[11px] font-bold ${
                  (userSub.status || '').includes('Təsdiq') ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                }">${escapeHtml(userSub.status)}</span>
              </div>
              ${userSub.presidentFeedback ? `
                <div class="text-[11px] text-amber-300 bg-amber-950/30 p-2 rounded-lg border border-amber-900/40">
                  <strong>👑 Sədrin Rəyi:</strong> "${escapeHtml(userSub.presidentFeedback)}"
                  ${userSub.grade ? `<span class="block mt-1 font-bold text-teal-300">Qiymət: ${escapeHtml(userSub.grade)}</span>` : ''}
                </div>
              ` : ''}
            </div>
          ` : ''}

          <div class="pt-3 border-t border-slate-800 flex items-center gap-2">
            <button onclick="MembersPortal.viewTaskDetail('${task.id}')" class="flex-1 py-2.5 px-3 rounded-xl bg-teal-600/20 hover:bg-teal-600/30 text-teal-300 border border-teal-500/40 text-xs font-bold flex items-center justify-center gap-1.5 transition">
              <i class="fa-solid fa-circle-info"></i> İzah & Video Bax
            </button>
            <button onclick="MembersPortal.openSubmitModal('${task.id}')" class="py-2.5 px-4 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-400 hover:to-emerald-400 text-slate-950 text-xs font-bold flex items-center justify-center gap-1.5 transition shadow-lg shadow-teal-500/20">
              <i class="fa-solid fa-paper-plane"></i> Təhvil Ver
            </button>
          </div>
        </div>
      `;
    }).join("");
  },

  viewTaskDetail(taskId) {
    const data = getClubData();
    const task = (data.tasks || []).find(t => t.id === taskId);
    if (!task) return;

    const modal = document.getElementById("memberTaskDetailModal");
    const container = document.getElementById("memberTaskDetailContent");
    if (!modal || !container) return;

    container.innerHTML = `
      <div class="space-y-6 text-sm">
        <div class="pb-4 border-b border-slate-800">
          <div class="flex items-center gap-2 mb-2 flex-wrap">
            <span class="text-xs font-bold uppercase tracking-wider text-teal-400 px-2.5 py-1 rounded bg-teal-950 border border-teal-800/60">
              ${escapeHtml(task.category)}
            </span>
            <span class="text-xs px-2.5 py-0.5 rounded-full font-semibold bg-slate-100 text-slate-700 border border-slate-200">
              Çətinlik: ${escapeHtml(task.difficulty || 'Orta')}
            </span>
            <span class="text-xs text-amber-300 ml-auto flex items-center gap-1">
              <i class="fa-regular fa-clock"></i> Son Tarix: <strong>${escapeHtml(task.deadline)}</strong>
            </span>
          </div>
          <h3 class="text-xl sm:text-2xl font-black text-white">${escapeHtml(task.title)}</h3>
          <p class="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">${escapeHtml(task.summary)}</p>
        </div>

        <!-- 1. ATTACHED DOCUMENT (IN-APP ZERO-DOWNLOAD VIEWER) -->
        ${task.document ? `
          <div class="p-4 rounded-2xl bg-slate-950/90 border border-teal-500/40 space-y-3 shadow-lg">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-xl bg-teal-950 border border-teal-800 flex items-center justify-center text-teal-400 text-lg">
                  <i class="fa-solid fa-file-lines"></i>
                </div>
                <div>
                  <div class="flex items-center gap-2">
                    <h5 class="text-xs sm:text-sm font-bold text-white">${escapeHtml(task.document.name || 'Tapşırıq Sənədi')}</h5>
                    <span class="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-teal-950 border border-teal-800 text-teal-300 font-bold">${escapeHtml(task.document.type || 'Sənəd')}</span>
                  </div>
                  <span class="text-[11px] text-slate-400">${task.document.size ? task.document.size + ' • ' : ''}Saytdaxili & PWA Yükləməsiz Baxış</span>
                </div>
              </div>
              <button onclick="inAppDocViewer.openTaskDoc('${task.id}')" class="px-4 py-2.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-teal-500/20 transition transform hover:scale-105">
                <i class="fa-solid fa-eye"></i> Sənədi Aç (Yükləmədən)
              </button>
            </div>
            <p class="text-[11px] text-teal-400/90 flex items-center gap-1.5">
              <i class="fa-solid fa-circle-check text-emerald-400"></i> Bu sənədi yükləmədən birbaşa tətbiq (Web və PWA) daxilində oxuya və istənilən an "Geri Qayıt" işarəsi ilə qayıda bilərsiniz.
            </p>
          </div>
        ` : ''}

        <!-- 2. ATTACHED IMAGE -->
        ${task.imageUrl ? `
          <div class="space-y-2">
            <h4 class="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
              <i class="fa-solid fa-image text-cyan-400"></i> Vizual İzah və Sxem:
            </h4>
            <div class="rounded-2xl overflow-hidden border border-slate-800 bg-slate-950">
              <img src="${task.imageUrl}" alt="${escapeHtml(task.title)}" class="w-full h-56 sm:h-72 object-cover" onerror="this.parentElement.style.display='none'" />
              ${task.imageCaption ? `<div class="p-2.5 text-xs text-slate-400 bg-slate-900/90 text-center italic border-t border-slate-800">${escapeHtml(task.imageCaption)}</div>` : ''}
            </div>
          </div>
        ` : ''}

        <!-- 3. ATTACHED VIDEO (MAX 5 MIN, 360P QUALITY) -->
        ${task.videoEmbed || task.videoUrl ? `
          <div class="space-y-2">
            <div class="flex items-center justify-between flex-wrap gap-2">
              <h4 class="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                <i class="fa-solid fa-play text-rose-400"></i> İzahlı Video Dərslik:
              </h4>
              <span class="text-[10px] px-2.5 py-0.5 rounded-full bg-emerald-950/80 border border-emerald-800 text-emerald-300 font-bold flex items-center gap-1">
                <i class="fa-solid fa-gauge-high"></i> 360p Eko-Format • Maks. 5 Dəqiqə
              </span>
            </div>
            <div class="rounded-2xl overflow-hidden border border-slate-800 bg-black aspect-video w-full max-h-80 mx-auto">
              ${task.videoEmbed ? `
                <iframe src="${task.videoEmbed}${task.videoEmbed.includes('?') ? '&' : '?'}vq=medium" title="${escapeHtml(task.videoTitle || 'Video dərslik')}" class="w-full h-full border-0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              ` : `
                <div class="p-8 text-center flex flex-col items-center justify-center h-full">
                  <i class="fa-brands fa-youtube text-4xl text-rose-500 mb-2"></i>
                  <p class="text-xs text-slate-300 mb-3">${escapeHtml(task.videoTitle || 'Tapşırığın izah videosunu izləyin')}</p>
                  <a href="${task.videoUrl}" target="_blank" rel="noopener noreferrer" class="px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs flex items-center gap-2">
                    <i class="fa-solid fa-up-right-from-square"></i> Videoya YouTube-da Bax (360p)
                  </a>
                </div>
              `}
            </div>
            <div class="flex items-center justify-between text-[11px] text-slate-400">
              <span class="italic">${escapeHtml(task.videoTitle || '360p Video Dərslik')}</span>
              <span class="text-amber-400 text-[10px]"><i class="fa-solid fa-server mr-1"></i> Server optimallaşdırması: 360p eko-format</span>
            </div>
          </div>
        ` : ''}

        <div class="space-y-2">
          <h4 class="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
            <i class="fa-solid fa-list-ol text-teal-400"></i> Addım-addım Təlimat və Tələblər:
          </h4>
          <div class="bg-slate-900/80 p-4 sm:p-5 rounded-2xl border border-slate-800 text-xs sm:text-sm text-slate-200 leading-relaxed whitespace-pre-line space-y-2">
            ${task.instructions || 'Təlimat mətni tezliklə yenilənəcək.'}
          </div>
        </div>

        ${task.starterCode ? `
          <div class="space-y-2">
            <div class="flex items-center justify-between">
              <h4 class="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                <i class="fa-solid fa-code text-emerald-400"></i> Başlanğıc Skript / Kod Şablonu:
              </h4>
              <button onclick="MembersPortal.copyCode('taskStarterCodeBlock')" class="text-xs text-teal-400 hover:text-teal-300 flex items-center gap-1 transition">
                <i class="fa-regular fa-copy"></i> Kopyala
              </button>
            </div>
            <pre class="bg-slate-950 p-4 rounded-2xl border border-slate-800 text-xs font-mono text-slate-200 overflow-x-auto"><code id="taskStarterCodeBlock">${escapeHtml(task.starterCode)}</code></pre>
          </div>
        ` : ''}

        <div class="pt-4 border-t border-slate-800 flex items-center justify-between gap-3 flex-wrap">
          ${task.resourceLink ? `
            <a href="${task.resourceLink}" target="_blank" rel="noopener noreferrer" class="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-teal-300 text-xs font-bold flex items-center gap-2 transition">
              <i class="fa-solid fa-arrow-up-right-from-square"></i> ${task.resourceName || 'Xarici Resursa Keç'}
            </a>
          ` : '<div></div>'}

          <div class="flex items-center gap-2">
            <button onclick="document.getElementById('memberTaskDetailModal').classList.add('hidden')" class="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition">
              Bağla
            </button>
            <button onclick="document.getElementById('memberTaskDetailModal').classList.add('hidden'); MembersPortal.openSubmitModal('${task.id}');" class="px-5 py-2.5 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-400 hover:to-emerald-400 text-slate-950 text-xs font-bold flex items-center gap-2 transition shadow-lg shadow-teal-500/20">
              <i class="fa-solid fa-paper-plane"></i> Həllini Təhvil Ver
            </button>
          </div>
        </div>
      </div>
    `;

    modal.classList.remove("hidden");
  },

  openSubmitModal(taskId) {
    const data = getClubData();
    const task = (data.tasks || []).find(t => t.id === taskId);
    if (!task) return;

    const modal = document.getElementById("memberTaskSubmitModal");
    const titleEl = document.getElementById("taskSubmitModalTitle");
    if (!modal) return;

    document.getElementById("taskSubmitTaskId").value = task.id;
    if (titleEl) titleEl.innerText = "Həlli Təhvil Ver: " + task.title;

    // Əgər aktiv üzv daxil olubsa, form xanalarını avtomatik doldur
    const member = typeof getActiveMember === "function" ? getActiveMember() : null;
    if (member) {
      const nameInput = document.getElementById("taskSubmitStudentName");
      const emailInput = document.getElementById("taskSubmitStudentEmail");
      const facultyInput = document.getElementById("taskSubmitStudentFaculty");

      if (nameInput) nameInput.value = member.fullName || "";
      if (emailInput) emailInput.value = member.email || "";
      if (facultyInput) facultyInput.value = `${member.faculty || ''} - ${member.major || ''} (${member.course || ''})`;
    }

    modal.classList.remove("hidden");
  },

  submitTaskSolution(e) {
    if (e) e.preventDefault();

    if (window.ClubSecurity) {
      const rateCheck = window.ClubSecurity.checkRateLimit("task_submission", { maxAttempts: 5, lockoutMs: 20000 });
      if (!rateCheck.allowed) {
        showToast(rateCheck.reason, "error");
        return;
      }
    }

    const taskId = document.getElementById("taskSubmitTaskId").value;
    const rawStudentName = document.getElementById("taskSubmitStudentName").value.trim();
    const rawStudentEmail = document.getElementById("taskSubmitStudentEmail").value.trim();
    const rawFaculty = document.getElementById("taskSubmitStudentFaculty").value.trim();
    const rawSolutionUrl = document.getElementById("taskSubmitSolutionUrl").value.trim();
    const rawNotes = document.getElementById("taskSubmitNotes").value.trim();
    const rawDocName = document.getElementById("taskSubmitDocName")?.value.trim() || "";
    const rawVideoUrl = document.getElementById("taskSubmitVideoUrl")?.value.trim() || "";

    if (!rawStudentName || !rawStudentEmail || !rawSolutionUrl) {
      showToast("Zəhmət olmasa tələb olunan xanaları doldurun.", "warning");
      return;
    }

    const studentName = window.ClubSecurity ? window.ClubSecurity.sanitizeText(rawStudentName) : rawStudentName;
    const studentEmail = window.ClubSecurity ? window.ClubSecurity.sanitizeText(rawStudentEmail) : rawStudentEmail;
    const studentFaculty = window.ClubSecurity ? window.ClubSecurity.sanitizeText(rawFaculty) : rawFaculty;
    const solutionUrl = window.ClubSecurity ? window.ClubSecurity.sanitizeText(rawSolutionUrl) : rawSolutionUrl;
    const notes = window.ClubSecurity ? window.ClubSecurity.sanitizeHtml(rawNotes) : rawNotes;
    const attachedDocName = window.ClubSecurity ? window.ClubSecurity.sanitizeText(rawDocName) : rawDocName;
    const attachedVideoUrl = window.ClubSecurity ? window.ClubSecurity.sanitizeText(rawVideoUrl) : rawVideoUrl;

    const data = getClubData();
    const task = (data.tasks || []).find(t => t.id === taskId);
    if (!task) return;

    task.submissions = task.submissions || [];
    const newSub = {
      id: "sub-" + Date.now(),
      studentName,
      studentEmail,
      studentFaculty: studentFaculty || "Qərbi Kaspi Universiteti",
      submissionDate: new Date().toLocaleDateString('az-AZ', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' }),
      solutionUrl,
      attachedDocName,
      attachedVideoUrl,
      notes,
      status: "Gözləyir",
      grade: "",
      presidentFeedback: "",
      feedbackDate: ""
    };

    task.submissions.unshift(newSub);
    saveClubData(data);

    // IndexedDB bazasında daimi qeyd et
    if (window.ClubDatabase && window.ClubDatabase.db) {
      try {
        const tx = window.ClubDatabase.db.transaction(["submissions"], "readwrite");
        const store = tx.objectStore("submissions");
        const active = typeof getActiveMember === "function" ? getActiveMember() : null;
        store.put({
          ...newSub,
          memberId: (active && active.id) || "anonymous",
          taskId: taskId
        });
      } catch (e) {}
    }

    // Edge API Sinxronizasiyası
    if (typeof fetch === "function") {
      fetch("/api/sync", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "TASK_SUBMISSION_ADDED",
          taskId,
          submission: newSub,
          studentName,
          solutionUrl
        })
      }).catch(() => {});
    }

    this.renderTasks();
    if (window.PresidentPortal && window.PresidentPortal.renderTasksList) {
      window.PresidentPortal.renderTasksList();
      window.PresidentPortal.renderMetrics();
    }

    document.getElementById("taskSubmitForm").reset();
    document.getElementById("memberTaskSubmitModal").classList.add("hidden");
    showToast("Tapşırığınız uğurla təhvil verildi! Klub Sədri yoxladıqdan sonra rəy bildirəcək.", "success");

    // Real-time broadcast
    if (window.SyncEngine) {
      window.SyncEngine.broadcast("TASK_SUBMISSION_ADDED", { taskId, submission: newSub, studentName });
    }
  },

  copyCode(elementId) {
    const el = document.getElementById(elementId);
    if (!el) return;
    navigator.clipboard.writeText(el.innerText).then(() => {
      showToast("Kod mübadilə buferinə kopyalandı!", "success");
    });
  }
};

window.MembersPortal = MembersPortal;


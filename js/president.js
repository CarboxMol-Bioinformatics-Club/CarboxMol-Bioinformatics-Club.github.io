// CarboxMol Bioinformatika Klubu - Klub Rəhbəri (Sədr) İdarəetmə Paneli Modulu

function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

const PresidentPortal = {
  renderMetrics() {
    const data = getClubData();
    const apps = data.applications || [];
    const members = data.members || [];
    const pending = apps.filter(a => a.status === "Gözləyir").length;
    const approved = apps.filter(a => a.status === "Təsdiqləndi" || a.status === "Qəbul Edildi").length || members.length;
    const eventsCount = (data.events || []).length;

    const tasks = data.tasks || [];
    let totalSubmissions = 0;
    let pendingTaskReviews = 0;
    tasks.forEach(t => {
      (t.submissions || []).forEach(s => {
        totalSubmissions++;
        if (s.status === "Gözləyir") pendingTaskReviews++;
      });
    });

    const elTotal = document.getElementById("metricTotalApps");
    const elPending = document.getElementById("metricPendingApps");
    const elApproved = document.getElementById("metricApprovedMembers");
    const elEvents = document.getElementById("metricEventsCount");

    const elTotalTasks = document.getElementById("metricTotalTasks");
    const elTotalSubs = document.getElementById("metricTotalSubmissions");
    const elPendingSubs = document.getElementById("metricPendingTaskReviews");

    const teachers = data.teachers || [];
    const teacherApps = data.teacherApplications || [];
    const pendingTeachers = teacherApps.filter(a => a.status === "Gözləyir").length;
    const approvedTeachers = teachers.filter(t => t.status === "Aktiv" || t.status === "Təsdiqləndi").length;

    const elTotalTeachers = document.getElementById("metricTotalTeachers");
    const elPendingTeachers = document.getElementById("metricPendingTeachers");

    if (elTotal) elTotal.innerText = Math.max(apps.length, members.length);
    if (elPending) elPending.innerText = pending;
    if (elApproved) elApproved.innerText = approved;
    if (elEvents) elEvents.innerText = eventsCount;

    if (elTotalTasks) elTotalTasks.innerText = tasks.length;
    if (elTotalSubs) elTotalSubs.innerText = totalSubmissions;
    if (elPendingSubs) elPendingSubs.innerText = pendingTaskReviews;

    if (elTotalTeachers) elTotalTeachers.innerText = Math.max(teachers.length, approvedTeachers);
    if (elPendingTeachers) elPendingTeachers.innerText = pendingTeachers;
  },

  currentAppFilterTab: "all",

  setFilterTab(status) {
    this.currentAppFilterTab = status;
    const allPill = document.getElementById("pillFilterAll");
    const pendPill = document.getElementById("pillFilterPending");
    const appPill = document.getElementById("pillFilterApproved");
    const rejPill = document.getElementById("pillFilterRejected");
    const select = document.getElementById("appFilterStatus");
    if (select) select.value = status;

    const baseClass = "px-3 py-1.5 rounded-lg text-xs font-bold transition";
    if (allPill) allPill.className = status === "all" ? `${baseClass} bg-slate-800 text-white border border-slate-700 shadow-sm` : `${baseClass} bg-slate-900 text-slate-400 border border-slate-800 hover:text-white`;
    if (pendPill) pendPill.className = status === "Gözləyir" ? `${baseClass} bg-amber-500/30 text-amber-300 border border-amber-500/60 shadow-sm` : `${baseClass} bg-amber-950/30 text-amber-400/80 border border-amber-900/40 hover:bg-amber-950/50`;
    if (appPill) appPill.className = status === "Təsdiqləndi" ? `${baseClass} bg-emerald-500/30 text-emerald-300 border border-emerald-500/60 shadow-sm` : `${baseClass} bg-slate-900 text-slate-400 border border-slate-800 hover:text-emerald-300`;
    if (rejPill) rejPill.className = status === "Rədd edildi" ? `${baseClass} bg-rose-500/30 text-rose-300 border border-rose-500/60 shadow-sm` : `${baseClass} bg-slate-900 text-slate-400 border border-slate-800 hover:text-rose-300`;

    const q = document.getElementById("appSearchInput")?.value || "";
    this.renderApplicationsTable(status, q);
  },

  renderApplicationsTable(filterStatus = null, searchQuery = "") {
    const container = document.getElementById("presidentAppsTableBody");
    if (!container) return;

    if (filterStatus !== null) {
      this.currentAppFilterTab = filterStatus;
    }
    const currentFilter = this.currentAppFilterTab || "all";

    const data = getClubData();
    const allApps = data.applications || [];

    // Tab counts
    const pendingCount = allApps.filter(a => a.status === "Gözləyir").length;
    const approvedCount = allApps.filter(a => a.status === "Təsdiqləndi" || a.status === "Qəbul Edildi").length;
    const rejectedCount = allApps.filter(a => a.status === "Rədd edildi").length;

    const tabAll = document.getElementById("tabAppCountAll");
    const tabPending = document.getElementById("tabAppCountPending");
    const tabApproved = document.getElementById("tabAppCountApproved");
    const tabRejected = document.getElementById("tabAppCountRejected");

    if (tabAll) tabAll.innerText = allApps.length;
    if (tabPending) tabPending.innerText = pendingCount;
    if (tabApproved) tabApproved.innerText = approvedCount;
    if (tabRejected) tabRejected.innerText = rejectedCount;

    const pendingPill = document.getElementById("pillFilterPending");
    if (pendingPill) {
      if (pendingCount > 0) {
        pendingPill.classList.add("ring-2", "ring-amber-400", "shadow-amber-500/30");
      } else {
        pendingPill.classList.remove("ring-2", "ring-amber-400", "shadow-amber-500/30");
      }
    }

    let apps = [...allApps];

    if (currentFilter !== "all") {
      if (currentFilter === "Təsdiqləndi") {
        apps = apps.filter(a => a.status === "Təsdiqləndi" || a.status === "Qəbul Edildi");
      } else {
        apps = apps.filter(a => a.status === currentFilter);
      }
    }

    if (searchQuery.trim() !== "") {
      const q = searchQuery.toLowerCase();
      apps = apps.filter(a => 
        (a.fullName || "").toLowerCase().includes(q) ||
        (a.email || "").toLowerCase().includes(q) ||
        (a.major || "").toLowerCase().includes(q) ||
        (a.faculty || "").toLowerCase().includes(q)
      );
    }

    // Sort so "Gözləyir" applications appear FIRST at the very top!
    apps.sort((a, b) => {
      if (a.status === "Gözləyir" && b.status !== "Gözləyir") return -1;
      if (a.status !== "Gözləyir" && b.status === "Gözləyir") return 1;
      return 0;
    });

    if (apps.length === 0) {
      container.innerHTML = `
        <tr>
          <td colspan="7" class="text-center py-10 text-slate-400">
            <i class="fa-solid fa-folder-open text-3xl mb-2.5 block text-slate-600"></i>
            <div class="font-bold text-slate-300 text-sm">Heç bir müraciət tapılmadı</div>
            <p class="text-xs text-slate-500 mt-1">E-poçtunuza gələn müraciətləri "E-poçtdan İdxal Et" düyməsi ilə cədvələ əlavə edə bilərsiniz.</p>
          </td>
        </tr>
      `;
      return;
    }

    container.innerHTML = apps.map((app, idx) => {
      const isPending = app.status === "Gözləyir";
      let badgeColor = "bg-amber-500/20 text-amber-300 border-amber-500/40";
      if (app.status === "Təsdiqləndi" || app.status === "Qəbul Edildi") badgeColor = "bg-emerald-500/20 text-emerald-300 border-emerald-500/40";
      if (app.status === "Rədd edildi") badgeColor = "bg-rose-500/20 text-rose-300 border-rose-500/40";

      const rowClass = isPending 
        ? "bg-amber-950/25 border-b border-amber-500/30 border-l-4 border-l-amber-400 hover:bg-amber-950/40" 
        : "border-b border-slate-800/60 hover:bg-slate-800/30";

      return `
        <tr class="${rowClass} transition text-sm">
          <td class="py-3 px-4 text-slate-400 font-mono">
            ${isPending ? '<span class="text-amber-400 font-bold mr-1" title="Sədr Təsdiqi Gözləyir">●</span>' : ''}#${idx + 1}
          </td>
          <td class="py-3 px-4">
            <div class="flex items-center gap-2.5">
              ${app.photo ? `
                <img src="${app.photo}" alt="${app.fullName}" class="w-8 h-8 rounded-lg object-cover border border-teal-500/30 shrink-0" />
              ` : `
                <div class="w-8 h-8 rounded-lg ${isPending ? 'bg-amber-950 border border-amber-600 text-amber-300' : 'bg-slate-900 border border-slate-800 text-slate-500'} flex items-center justify-center text-xs shrink-0">
                  <i class="fa-solid fa-user"></i>
                </div>
              `}
              <div class="min-w-0">
                <div class="font-semibold text-white truncate flex items-center gap-1.5">
                  ${app.fullName}
                  ${isPending ? '<span class="text-[9px] bg-amber-500/30 text-amber-300 px-1.5 py-0.5 rounded font-black tracking-wider uppercase border border-amber-500/40 animate-pulse">Gözləyir</span>' : ''}
                </div>
                <div class="text-xs text-slate-400 truncate">${app.email}</div>
              </div>
            </div>
          </td>
          <td class="py-3 px-4 text-slate-300">
            <div>${app.faculty}</div>
            <div class="text-xs text-teal-400">${app.major} (${app.course})</div>
          </td>
          <td class="py-3 px-4">
            <span class="text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded border border-slate-700">
              ${app.programmingSkill}
            </span>
          </td>
          <td class="py-3 px-4 text-xs text-slate-400">${app.dateApplied || '2026-10-01'}</td>
          <td class="py-3 px-4">
            <span class="px-2.5 py-1 text-xs rounded-full border font-bold ${badgeColor}">
              ${app.status}
            </span>
          </td>
          <td class="py-3 px-4 text-right">
            <div class="inline-flex items-center gap-1">
              <button onclick="PresidentPortal.viewAppDetail('${app.id}')" title="Ətraflı Bax" class="p-1.5 px-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-cyan-400 border border-slate-700 transition text-xs flex items-center gap-1 font-medium">
                <i class="fa-solid fa-eye"></i> <span class="hidden xl:inline">Bax</span>
              </button>
              <button onclick="PresidentPortal.openEditDossierModal('${app.id}', 'application')" title="Müraciət Dossyesini Limitsiz Redaktə Et" class="p-1.5 px-2 rounded-lg bg-cyan-950/80 hover:bg-cyan-900 text-cyan-300 border border-cyan-700 transition text-xs flex items-center gap-1 font-semibold">
                <i class="fa-solid fa-user-pen"></i> <span class="hidden xl:inline">Redaktə</span>
              </button>
              <button onclick="PresidentPortal.updateStatus('${app.id}', 'Təsdiqləndi')" title="Təsdiq Et (Qəbul)" class="p-1.5 px-2.5 rounded-lg ${isPending ? 'bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-slate-950 font-black shadow-md shadow-emerald-500/20' : 'bg-emerald-950/80 hover:bg-emerald-900 text-emerald-400 border border-emerald-800/60 font-semibold'} transition text-xs flex items-center gap-1">
                <i class="fa-solid fa-check"></i> <span class="hidden xl:inline">Təsdiq</span>
              </button>
              <button onclick="PresidentPortal.updateStatus('${app.id}', 'Gözləyir')" title="Gözləmədə Saxla" class="p-1.5 px-2 rounded-lg bg-amber-950/80 hover:bg-amber-900 text-amber-300 border border-amber-800/60 transition text-xs flex items-center gap-1 font-semibold">
                <i class="fa-solid fa-clock"></i> <span class="hidden xl:inline">Gözlət</span>
              </button>
              <button onclick="PresidentPortal.updateStatus('${app.id}', 'Rədd edildi')" title="İmtina Et (Rədd)" class="p-1.5 px-2 rounded-lg bg-rose-950/80 hover:bg-rose-900 text-rose-400 border border-rose-800/60 transition text-xs flex items-center gap-1 font-semibold">
                <i class="fa-solid fa-xmark"></i> <span class="hidden xl:inline">İmtina</span>
              </button>
              <button onclick="PresidentPortal.deleteApplication('${app.id}')" title="Müraciəti Tamamilə Sil" class="p-1.5 px-2 rounded-lg bg-red-950/90 hover:bg-red-900 text-red-400 hover:text-white border border-red-800/80 transition text-xs flex items-center gap-1 font-bold">
                <i class="fa-solid fa-trash-can"></i> <span class="hidden xl:inline">Sil</span>
              </button>
            </div>
          </td>
        </tr>
      `;
    }).join("");
  },

  viewAppDetail(appId) {
    const data = getClubData();
    const app = (data.applications || []).find(a => a.id === appId);
    if (!app) return;

    const modal = document.getElementById("appDetailModal");
    const content = document.getElementById("appDetailContent");
    if (!modal || !content) return;

    content.innerHTML = `
      <div class="space-y-4 text-sm">
        <div class="flex items-center gap-3 pb-3 border-b border-slate-800">
          <div class="w-14 h-14 rounded-2xl bg-gradient-to-tr from-teal-500 to-cyan-500 p-0.5 shrink-0 overflow-hidden">
            ${app.photo 
              ? `<img src="${app.photo}" alt="${app.fullName}" class="w-full h-full object-cover rounded-[14px]" />`
              : `<div class="w-full h-full bg-slate-900 rounded-[14px] flex items-center justify-center text-teal-400 text-lg"><i class="fa-solid fa-user"></i></div>`
            }
          </div>
          <div class="flex-1 min-w-0">
            <h4 class="text-xl font-bold text-white truncate">${app.fullName}</h4>
            <p class="text-teal-400 text-xs">${app.email} • ${app.phone || 'Nömrə qeyd edilməyib'}</p>
          </div>
          <span class="px-3 py-1 text-xs rounded-full border font-medium ${
            app.status === 'Təsdiqləndi' ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30' : 
            app.status === 'Rədd edildi' ? 'bg-rose-500/20 text-rose-300 border-rose-500/30' : 'bg-amber-500/20 text-amber-300 border-amber-500/30'
          }">
            ${app.status}
          </span>
        </div>

        <!-- Login & Password for President -->
        <div class="p-3 bg-amber-950/40 rounded-xl border border-amber-800/60 flex items-center justify-between gap-3 flex-wrap">
          <div class="flex items-center gap-2">
            <span class="text-xs text-amber-300 font-bold"><i class="fa-solid fa-user-lock mr-1"></i> Təyin Edilmiş Login:</span>
            <span class="font-mono text-cyan-300 font-bold bg-slate-950 px-2 py-0.5 rounded text-xs">@${escapeHtml(app.username || 'user')}</span>
          </div>
          <div class="flex items-center gap-2">
            <span class="text-xs text-amber-300 font-bold"><i class="fa-solid fa-key mr-1"></i> Sədrə Açıq Şifrə:</span>
            <span class="font-mono text-amber-300 font-bold bg-slate-950 px-2.5 py-0.5 rounded text-xs select-all border border-amber-500/30">${escapeHtml(app.password || 'Təyin edilməyib')}</span>
          </div>
        </div>

        <div class="grid grid-cols-2 gap-3 bg-slate-900/60 p-3 rounded-lg border border-slate-800">
          <div>
            <span class="text-xs text-slate-400 block">Fakültə:</span>
            <span class="text-white font-medium">${app.faculty}</span>
          </div>
          <div>
            <span class="text-xs text-slate-400 block">İxtisas və Kurs:</span>
            <span class="text-white font-medium">${app.major} (${app.course})</span>
          </div>
          <div>
            <span class="text-xs text-slate-400 block">Tədris Dili & GPA:</span>
            <span class="text-slate-300 font-medium">${app.studyLang || 'Azərbaycan'} ${app.gpa ? `| GPA: ${app.gpa}` : ''}</span>
          </div>
          <div>
            <span class="text-xs text-slate-400 block">Əməliyyat Sistemi:</span>
            <span class="text-slate-300 font-medium">${app.osType || 'Windows'}</span>
          </div>
          <div>
            <span class="text-xs text-slate-400 block">Proqramlaşdırma Səviyyəsi:</span>
            <span class="text-cyan-300 font-medium">${app.programmingSkill}</span>
          </div>
          <div>
            <span class="text-xs text-slate-400 block">İstifadə Etdiyi Alətlər:</span>
            <span class="text-slate-200">${(app.tools && app.tools.length) ? app.tools.join(', ') : 'Qeyd edilməyib'}</span>
          </div>
          <div>
            <span class="text-xs text-slate-400 block">Bioloji Baza Biliyi:</span>
            <span class="text-teal-300 font-medium">${app.bioKnowledge || 'Məlumat yoxdur'}</span>
          </div>
          <div>
            <span class="text-xs text-slate-400 block">Həftəlik Ayıra Biləcəyi Vaxt:</span>
            <span class="text-amber-300 font-medium">${app.weeklyTime || 'Həftədə 2–4 saat'}</span>
          </div>
        </div>

        <div>
          <label class="text-xs font-semibold text-slate-300 block mb-1">Bioloji Bazalarla Təcrübə:</label>
          <p class="text-slate-300 bg-slate-900/40 p-2.5 rounded border border-slate-800 text-xs">${(app.bioTools && app.bioTools.length) ? app.bioTools.join(', ') : (app.bioDbExp || 'Məlumat daxil edilməyib')}</p>
        </div>

        <div>
          <label class="text-xs font-semibold text-slate-300 block mb-1">Maraq Göstərdiyi İstiqamətlər:</label>
          <p class="text-teal-300 bg-slate-900/40 p-2.5 rounded border border-slate-800 text-xs">${(app.researchTracks && app.researchTracks.length) ? app.researchTracks.join(', ') : (app.roleInterest || 'Ümumi Bioinformatika')}</p>
        </div>

        <div>
          <label class="text-xs font-semibold text-slate-300 block mb-1">Profil Linki (LinkedIn/GitHub):</label>
          <p class="text-cyan-400 bg-slate-900/40 p-2 rounded border border-slate-800 text-xs font-mono">
            ${app.profileUrl ? `<a href="${app.profileUrl}" target="_blank" class="hover:underline">${app.profileUrl}</a>` : 'Qeyd edilməyib'}
          </p>
        </div>

        <div>
          <label class="text-xs font-semibold text-slate-300 block mb-1">Motivasiya və Məqsəd:</label>
          <p class="text-slate-200 bg-slate-900/60 p-3 rounded-lg border border-slate-800 italic leading-relaxed text-xs">
            "${app.motivation || 'Motivasiya mətni yazılmayıb.'}"
          </p>
        </div>

        ${app.yearGoal ? `
        <div>
          <label class="text-xs font-semibold text-slate-300 block mb-1">1 İllik Şəxsi Hədəf:</label>
          <p class="text-amber-300 bg-slate-900/60 p-2.5 rounded-lg border border-slate-800 text-xs">
            ${app.yearGoal}
          </p>
        </div>
        ` : ''}

        <div>
          <label class="text-xs font-semibold text-slate-300 block mb-1">Sədrin Qeydi:</label>
          <textarea id="appAdminNotesInput" rows="2" class="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-xs text-white focus:outline-none focus:border-teal-500" placeholder="Üzv haqqında daxili qeyd yazın...">${app.adminNotes || ''}</textarea>
        </div>

        <div class="flex justify-between items-center pt-3 border-t border-slate-800">
          <button onclick="PresidentPortal.saveAdminNotes('${app.id}')" class="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-white rounded text-xs transition">
            <i class="fa-solid fa-floppy-disk mr-1"></i> Qeydi Saxla
          </button>
          <div class="flex items-center gap-2">
            <button onclick="PresidentPortal.updateStatus('${app.id}', 'Təsdiqləndi'); document.getElementById('appDetailModal').classList.add('hidden');" class="px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-semibold transition flex items-center gap-1.5 shadow">
              <i class="fa-solid fa-check"></i> Təsdiq Et
            </button>
            <button onclick="PresidentPortal.updateStatus('${app.id}', 'Gözləyir'); document.getElementById('appDetailModal').classList.add('hidden');" class="px-3.5 py-1.5 bg-amber-600 hover:bg-amber-500 text-white rounded-lg text-xs font-semibold transition flex items-center gap-1.5 shadow">
              <i class="fa-solid fa-clock"></i> Gözlət
            </button>
            <button onclick="PresidentPortal.updateStatus('${app.id}', 'Rədd edildi'); document.getElementById('appDetailModal').classList.add('hidden');" class="px-3.5 py-1.5 bg-rose-600 hover:bg-rose-500 text-white rounded-lg text-xs font-semibold transition flex items-center gap-1.5 shadow">
              <i class="fa-solid fa-xmark"></i> İmtina Et
            </button>
          </div>
        </div>
      </div>
    `;

    modal.classList.remove("hidden");
  },

  saveAdminNotes(appId) {
    const input = document.getElementById("appAdminNotesInput");
    if (!input) return;
    const notes = input.value.trim();

    const data = getClubData();
    const app = (data.applications || []).find(a => a.id === appId);
    if (app) {
      app.adminNotes = notes;
      saveClubData(data);
      showToast("Qeyd uğurla saxlanıldı!", "success");
    }
  },

  updateStatus(appId, newStatus) {
    const data = getClubData();
    const app = (data.applications || []).find(a => a.id === appId);
    if (!app) return;

    app.status = newStatus;
    data.approvedAppIds = data.approvedAppIds || [];
    data.rejectedAppIds = data.rejectedAppIds || [];

    if (newStatus === "Təsdiqləndi") {
      if (!data.approvedAppIds.includes(app.id)) data.approvedAppIds.push(app.id);
      data.rejectedAppIds = data.rejectedAppIds.filter(id => id !== app.id);
      app.approvedAt = new Date().toISOString().slice(0, 10);
      app.approvedBy = "Süleyman Hacızadə (Klub Sədri)";
    } else if (newStatus === "Rədd edildi") {
      if (!data.rejectedAppIds.includes(app.id)) data.rejectedAppIds.push(app.id);
      data.approvedAppIds = data.approvedAppIds.filter(id => id !== app.id);
    } else {
      data.approvedAppIds = data.approvedAppIds.filter(id => id !== app.id);
      data.rejectedAppIds = data.rejectedAppIds.filter(id => id !== app.id);
    }

    try {
      localStorage.setItem("carboxmol_approved_app_ids", JSON.stringify(data.approvedAppIds));
      localStorage.setItem("carboxmol_rejected_app_ids", JSON.stringify(data.rejectedAppIds));
    } catch(e) {}

    data.members = data.members || [];
    let memIdx = data.members.findIndex(m => 
      (app.memberId && m.id === app.memberId) ||
      (m.username && app.username && m.username.toLowerCase() === app.username.toLowerCase()) ||
      (m.email && app.email && m.email.toLowerCase() === app.email.toLowerCase())
    );

    let activeMemberObj = null;

    if (newStatus === "Təsdiqləndi") {
      const isTeacherRole = (app.roleInterest && (app.roleInterest.includes("Müəllim") || app.roleInterest.includes("Mentor"))) ||
        (app.title && (app.title.includes("Müəllim") || app.title.includes("Mentor") || app.title.includes("Dosent") || app.title.includes("PhD"))) ||
        (app.academicDegree && (app.academicDegree.includes("Müəllim") || app.academicDegree.includes("Mentor")));

      const assignedRole = isTeacherRole ? "Akademik Mentor / Müəllim" : (app.role || "Klub Üzvü");

      if (memIdx === -1) {
        const newMember = {
          id: app.memberId || ("mem-" + Date.now()),
          fullName: app.fullName,
          username: app.username || (app.email ? app.email.split("@")[0] : "user"),
          email: app.email,
          phone: app.phone || "",
          photo: app.photo || "",
          password: app.password || ("wcu" + Math.floor(1000 + Math.random() * 9000)),
          role: assignedRole,
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
        data.members.unshift(newMember);
        activeMemberObj = newMember;
        if (window.ClubDatabase) window.ClubDatabase.provisionMember(newMember);
      } else {
        data.members[memIdx].status = "Aktiv";
        if (isTeacherRole) data.members[memIdx].role = "Akademik Mentor / Müəllim";
        activeMemberObj = data.members[memIdx];
        if (window.ClubDatabase) window.ClubDatabase.provisionMember(data.members[memIdx]);
      }

      // Əgər müəllim rolundadırsa, data.teachers və data.teacherApplications reyestrində də aktivləşdir
      if (isTeacherRole) {
        data.teachers = data.teachers || [];
        const tIdx = data.teachers.findIndex(t => 
          (t.id && (t.id === app.memberId || t.id === app.teacherId)) || 
          (t.username && app.username && t.username.toLowerCase() === app.username.toLowerCase()) ||
          (t.email && app.email && t.email.toLowerCase() === app.email.toLowerCase())
        );
        if (tIdx !== -1) {
          data.teachers[tIdx].status = "Aktiv";
        } else {
          data.teachers.unshift({
            id: app.teacherId || app.memberId || ("teacher-" + Date.now()),
            fullName: app.fullName,
            title: app.title || "Akademik Mentor & Tədqiqatçı",
            academicDegree: app.academicDegree || "Müəllim / Mentor",
            university: app.university || "Qərbi Kaspi Universiteti (WCU)",
            faculty: app.faculty || "",
            department: app.department || "",
            email: app.email,
            phone: app.phone || "",
            username: app.username,
            password: app.password,
            photo: app.photo || "",
            specialties: app.tools || ["Bioinformatika"],
            status: "Aktiv",
            registeredAt: app.dateApplied || "2026-10-10",
            approvedAt: new Date().toISOString(),
            approvedBy: "Süleyman Hacızadə (Klub Sədri)"
          });
        }
      }
    } else if (newStatus === "Gözləyir") {
      if (memIdx !== -1) {
        data.members[memIdx].status = "Gözləyir";
        activeMemberObj = data.members[memIdx];
        if (window.ClubDatabase) window.ClubDatabase.provisionMember(data.members[memIdx]);
      }
    } else if (newStatus === "Rədd edildi") {
      if (memIdx !== -1) {
        data.members[memIdx].status = "Rədd edildi";
        activeMemberObj = data.members[memIdx];
        if (window.ClubDatabase) window.ClubDatabase.provisionMember(data.members[memIdx]);
      }
    }

    if (window.ClubDatabase && typeof window.ClubDatabase.saveApplication === "function") {
      window.ClubDatabase.saveApplication(app);
    }

    saveClubData(data);
    this.renderMetrics();
    this.renderApplicationsTable();
    this.renderMembersAccountsTable();

    // Bulud şininə və API-yə canlı status yenilənməsini göndər
    const syncStatusPayload = {
      action: "UPDATE_STATUS",
      appId: app.id,
      status: newStatus,
      application: app,
      member: activeMemberObj,
      timestamp: Date.now()
    };

    if (typeof fetch === "function") {
      fetch("/api/sync", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(syncStatusPayload)
      }).catch(() => {});

      fetch("https://ntfy.sh/carboxmol_bioinfo_cloud_sync_v3_secure/publish", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(syncStatusPayload)
      }).catch(() => {});
    }

    let statusMsg = "müraciəti yeniləndi";
    if (newStatus === "Təsdiqləndi") statusMsg = "təsdiqləndi və hesabı aktivləşdirildi.";
    else if (newStatus === "Gözləyir") statusMsg = "gözləmə statusunda saxlanıldı.";
    else if (newStatus === "Rədd edildi") statusMsg = "müraciətinə imtina edildi və hesabı deaktiv edildi.";

    showToast(`${app.fullName} ${statusMsg}`, newStatus === 'Təsdiqləndi' ? 'success' : (newStatus === 'Gözləyir' ? 'info' : 'warning'));
  },

  approveAllPendingApplications() {
    const data = getClubData();
    const pendingApps = (data.applications || []).filter(a => a.status === "Gözləyir");
    if (pendingApps.length === 0) {
      if (typeof showToast === "function") showToast("Təsdiq gözləyən müraciət yoxdur. Bütün müraciətlər artıq təsdiqlənib!", "info");
      return;
    }
    if (!confirm(`Sistemdə olan bütün ${pendingApps.length} gözləyən müraciəti rəsmi olaraq təsdiqləmək və klub üzvü etmək istəyirsiniz?`)) {
      return;
    }

    data.approvedAppIds = data.approvedAppIds || [];
    data.members = data.members || [];
    const nowIso = new Date().toISOString().slice(0, 10);

    pendingApps.forEach(app => {
      app.status = "Təsdiqləndi";
      app.approvedAt = nowIso;
      app.approvedBy = "Süleyman Hacızadə (Klub Sədri)";
      if (!data.approvedAppIds.includes(app.id)) data.approvedAppIds.push(app.id);
      data.rejectedAppIds = (data.rejectedAppIds || []).filter(id => id !== app.id);

      let memIdx = data.members.findIndex(m =>
        (app.memberId && m.id === app.memberId) ||
        (m.username && app.username && m.username.toLowerCase() === app.username.toLowerCase()) ||
        (m.email && app.email && m.email.toLowerCase() === app.email.toLowerCase())
      );

      if (memIdx === -1) {
        const newMember = {
          id: app.memberId || ("mem-" + Date.now() + Math.random().toString(36).substr(2, 4)),
          fullName: app.fullName,
          username: app.username || (app.email ? app.email.split("@")[0] : "user"),
          email: app.email,
          phone: app.phone || "",
          photo: app.photo || "",
          password: app.password || ("wcu" + Math.floor(1000 + Math.random() * 9000)),
          role: "Klub Üzvü",
          faculty: app.faculty,
          major: app.major,
          course: app.course,
          joinDate: new Date().toLocaleDateString('az-AZ'),
          registeredAt: app.dateApplied || nowIso,
          status: "Aktiv",
          skills: app.tools || ["Python", "Bioinformatika"],
          customTasks: [],
          notes: []
        };
        data.members.unshift(newMember);
        if (window.ClubDatabase && typeof window.ClubDatabase.provisionMember === "function") {
          window.ClubDatabase.provisionMember(newMember);
        }
      } else {
        data.members[memIdx].status = "Aktiv";
        if (app.password && !data.members[memIdx].password) data.members[memIdx].password = app.password;
        if (app.phone && !data.members[memIdx].phone) data.members[memIdx].phone = app.phone;
        if (window.ClubDatabase && typeof window.ClubDatabase.provisionMember === "function") {
          window.ClubDatabase.provisionMember(data.members[memIdx]);
        }
      }
    });

    try {
      localStorage.setItem("carboxmol_approved_app_ids", JSON.stringify(data.approvedAppIds));
      localStorage.setItem("carboxmol_rejected_app_ids", JSON.stringify(data.rejectedAppIds || []));
    } catch(e) {}

    saveClubData(data);
    this.renderMetrics();
    this.renderApplicationsTable();
    this.renderMembersAccountsTable();

    if (typeof showToast === "function") {
      showToast(`✓ Bütün ${pendingApps.length} müraciət uğurla təsdiqləndi və rəsmi üzv edildi!`, "success");
    }
  },

  exportToCSV() {
    const data = getClubData();
    const apps = data.applications || [];
    if (apps.length === 0) {
      showToast("İxrac ediləcək heç bir müraciət yoxdur.", "warning");
      return;
    }

    const headers = [
      "ID", "Ad Soyad", "E-poct", "Telefon", "Profil Link", "Fakulte", "Ixtisas", "Kurs",
      "Tedris Dili", "GPA", "Proqramlasdirma", "Alətlər", "Bioloji Bazalar", "Biologiya Biliyi",
      "Emeliyyat Sistemi", "Maraq Istiqametleri", "Status", "Tarix", "Həftəlik Vaxt", "1 Illik Hədəf", "Motivasiya"
    ];
    const rows = apps.map(a => [
      `"${a.id}"`,
      `"${(a.fullName || '').replace(/"/g, '""')}"`,
      `"${(a.email || '').replace(/"/g, '""')}"`,
      `"${(a.phone || '').replace(/"/g, '""')}"`,
      `"${(a.profileUrl || '').replace(/"/g, '""')}"`,
      `"${(a.faculty || '').replace(/"/g, '""')}"`,
      `"${(a.major || '').replace(/"/g, '""')}"`,
      `"${(a.course || '').replace(/"/g, '""')}"`,
      `"${(a.studyLang || '').replace(/"/g, '""')}"`,
      `"${(a.gpa || '').replace(/"/g, '""')}"`,
      `"${(a.programmingSkill || '').replace(/"/g, '""')}"`,
      `"${((a.tools || []).join(', ')).replace(/"/g, '""')}"`,
      `"${((a.bioTools || []).join(', ') || a.bioDbExp || '').replace(/"/g, '""')}"`,
      `"${(a.bioKnowledge || '').replace(/"/g, '""')}"`,
      `"${(a.osType || '').replace(/"/g, '""')}"`,
      `"${((a.researchTracks || []).join(', ') || a.roleInterest || '').replace(/"/g, '""')}"`,
      `"${(a.status || '').replace(/"/g, '""')}"`,
      `"${(a.dateApplied || '').replace(/"/g, '""')}"`,
      `"${(a.weeklyTime || '').replace(/"/g, '""')}"`,
      `"${(a.yearGoal || '').replace(/"/g, '""')}"`,
      `"${(a.motivation || '').replace(/"/g, '""')}"`
    ]);

    const csvContent = "\uFEFF" + [headers.join(","), ...rows.map(r => r.join(","))].join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `CarboxMol_Bioinformatika_Uzvlük_Muracietleri_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast("CSV faylı uğurla endirildi!", "success");
  },

  generateOfficialLetter(type) {
    const today = new Date().toLocaleDateString('az-AZ', { year: 'numeric', month: 'long', day: 'numeric' });
    let title = "";
    let body = "";

    if (type === "room") {
      title = "Kompüter və Laboratoriya Auditoriyası Ayrılması Barədə";
      body = `
Qərbi Kaspi Universitetinin Tədris və Tələbə İşləri Departamentinə

Bildiririk ki, universitetimiz nəzdində fəaliyyət göstərən "CarboxMol Bioinformatika Klubu" tərəfindən 
növbəti həftə tələbələr üçün "Biopython və Bioloji Verilənlər Bazaları" mövzusunda praktiki 
laboratoriya seminarı nəzərdə tutulmuşdur.

Seminarın yüksək səviyyədə təşkili məqsədilə internet bağlantısı və kompüterlərlə təchiz edilmiş 
1 ədəd auditoriyanın (təxminən 25-30 nəfərlik yer) şənbə günü saat 14:00 - 16:30 aralığında 
klubun istifadəsinə ayrılmasını Sizdən xahiş edirik.

Tarix: ${today}
CarboxMol Bioinformatika Klubu Sədri: Süleyman Mehdi oğlu Hacızadə
Əlaqə: +994 70 550 69 07 | +994 99 350 69 07
E-poçt: suleyman.hacizade.232bioing@wcu.edu.az
      `;
    } else if (type === "speaker") {
      title = "Elmi Ustad Dərsi üçün Rəsmi Spiker Dəvəti";
      body = `
Hörmətli Həmkar / Professor,

Sizi Qərbi Kaspi Universitetinin "CarboxMol Bioinformatika Klubu" tələbələri adından universitetimizdə 
keçiriləcək "Hesablama Genomikası və Müasir Biotexnologiya" seminarında fəxri qonaq və 
məruzəçi kimi çıxış etməyə dəvət edirik.

Çıxışınız tələbələrimizin elmi dünyagörüşünün formalaşmasında və praktiki tədqiqatlara istiqamətlənməsində 
mühüm rol oynayacaqdır. Çıxış formatı (əyani və ya onlayn) və vaxtı Sizin qrafikinizə uyğun 
razılaşdırılacaqdır.

Tarix: ${today}
Dərin hörmətlə,
CarboxMol Bioinformatika Klubu Sədri: Süleyman Mehdi oğlu Hacızadə
Qərbi Kaspi Universiteti
Əlaqə: +994 70 550 69 07 | +994 99 350 69 07
E-poçt: suleyman.hacizade.232bioing@wcu.edu.az
      `;
    } else {
      title = "Semestr Fəaliyyət Hesabatı Təqdimatı";
      body = `
Qərbi Kaspi Universitetinin Rektorluğuna / TGT İdarə Heyətinə

"CarboxMol Bioinformatika Klubu"nun cari semestr üzrə fəaliyyət hesabatını təqdim edirik:
- Təşkil olunmuş praktiki seminar və laboratoriya dərsləri: 5 ədəd;
- Journal Club çərçivəsində təhlil edilmiş beynəlxalq elmi məqalələr: 2 ədəd;
- Qeydiyyatdan keçmiş və fəal iştirak edən klub üzvlərinin sayı: 45 nəfər;
- İştirakçı tələbələrin ixtisasları: Biotexnologiya, Biologiya, Kompüter Mühəndisliyi, İT.

Klubun fəaliyyəti universitetin elmi reytinqinin və fənlərarası tələbə potensialının artırılmasına 
xidmət edir.

Tarix: ${today}
CarboxMol Bioinformatika Klubu Sədri: Süleyman Mehdi oğlu Hacızadə
Əlaqə: +994 70 550 69 07 | +994 99 350 69 07
      `;
    }

    const printWindow = window.open('', '', 'width=800,height=600');
    printWindow.document.write(`
      <html>
        <head>
          <title>${title} - CarboxMol Bioinformatika Klubu</title>
          <style>
            body { font-family: 'Times New Roman', serif; padding: 40px; line-height: 1.6; color: #111; }
            .header { text-align: center; border-bottom: 2px solid #333; padding-bottom: 15px; margin-bottom: 30px; }
            .header h2 { margin: 0; text-transform: uppercase; font-size: 18px; }
            .header h4 { margin: 5px 0; color: #555; font-size: 14px; }
            .content { white-space: pre-wrap; font-size: 15px; }
            .footer { margin-top: 50px; }
          </style>
        </head>
        <body>
          <div class="header">
            <h2>QƏRBİ KASPİ UNİVERSİTETİ</h2>
            <h4>WCU BIOINFORMATICS CLUB (BİOİNFORMATİKA KLUBU)</h4>
            <p><strong>${title}</strong></p>
          </div>
          <div class="content">${body.trim()}</div>
          <script>
            window.onload = function() { window.print(); }
          </script>
        </body>
      </html>
    `);
    printWindow.document.close();
  },

  renderEventsTable() {
    const tbody = document.getElementById("presidentEventsTableBody");
    const badgeCount = document.getElementById("presidentEventsCountBadge");
    if (!tbody) return;

    const data = getClubData();
    const events = (data.events || []).filter(e => e && !["ev-2", "ev-3", "ev-4", "ev-5"].includes(e.id));
    if (badgeCount) {
      badgeCount.textContent = `${events.length} Tədbir`;
    }

    if (events.length === 0) {
      tbody.innerHTML = `
        <tr>
          <td colspan="6" class="py-6 text-center text-slate-500 italic">
            Hazırda heç bir tədbir yoxdur. Yuxarıdakı form vasitəsilə yeni seminar əlavə edə bilərsiniz.
          </td>
        </tr>
      `;
      return;
    }

    tbody.innerHTML = events.map((ev) => {
      const isOfficial = ev.id === "ev-1";
      return `
        <tr class="hover:bg-slate-800/40 transition">
          <td class="py-3 px-3">
            <div class="font-bold text-white flex items-center gap-1.5">
              ${isOfficial ? '<i class="fa-solid fa-star text-amber-400 text-xs" title="Rəsmi Keçirilmiş Əsas Seminar"></i>' : '<i class="fa-solid fa-calendar-check text-teal-400 text-xs"></i>'}
              <span>${escapeHtml(ev.title || "Adsız Tədbir")}</span>
            </div>
            <div class="text-[11px] text-slate-400 line-clamp-1 mt-0.5">${escapeHtml(ev.description || "")}</div>
          </td>
          <td class="py-3 px-3 whitespace-nowrap">
            <span class="px-2 py-0.5 rounded-full text-[10px] font-bold ${isOfficial ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30' : 'bg-teal-500/20 text-teal-300 border border-teal-500/30'}">
              ${escapeHtml(ev.category || "Seminar")}
            </span>
          </td>
          <td class="py-3 px-3 whitespace-nowrap text-slate-300">
            <div><i class="fa-regular fa-calendar text-teal-400 mr-1"></i>${escapeHtml(ev.date || "")}</div>
            <div class="text-[11px] text-slate-400"><i class="fa-regular fa-clock text-slate-500 mr-1"></i>${escapeHtml(ev.time || "")}</div>
          </td>
          <td class="py-3 px-3 text-slate-300">
            <div class="font-semibold text-slate-200"><i class="fa-solid fa-user-tie text-cyan-400 mr-1 text-xs"></i>${escapeHtml(ev.speaker || "Qeyd edilməyib")}</div>
            <div class="text-[11px] text-slate-400"><i class="fa-solid fa-location-dot text-rose-400 mr-1 text-xs"></i>${escapeHtml(ev.location || "WCU")}</div>
          </td>
          <td class="py-3 px-3 whitespace-nowrap">
            <span class="px-2 py-0.5 rounded-full text-[10px] font-bold ${ev.status === 'completed' || isOfficial ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'}">
              ${isOfficial ? 'Keçirildi • Fotoreportaj' : escapeHtml(ev.badge || 'Aktiv')}
            </span>
          </td>
          <td class="py-3 px-3 text-right whitespace-nowrap">
            ${isOfficial ? `
              <span class="text-[11px] text-emerald-400 font-bold px-2.5 py-1 bg-emerald-950/60 rounded-lg border border-emerald-800/60 inline-flex items-center gap-1" title="Qərib Mürşüdov seminarı rəsmi xatirə tədbiri olduğu üçün silinməzdir">
                <i class="fa-solid fa-shield-halved text-xs"></i> Əsas Seminar
              </span>
            ` : `
              <button onclick="PresidentPortal.deleteEvent('${ev.id}')" title="Tədbiri Sil" class="p-1.5 px-2.5 rounded-lg bg-rose-950/80 hover:bg-rose-900 text-rose-300 hover:text-white border border-rose-800/60 transition text-xs inline-flex items-center gap-1 font-bold">
                <i class="fa-solid fa-trash-can text-xs"></i> <span>Sil</span>
              </button>
            `}
          </td>
        </tr>
      `;
    }).join("");
  },

  deleteEvent(eventId) {
    if (eventId === "ev-1") {
      alert("Prof. Qərib Mürşüdov ilə keçirilmiş rəsmi elmi seminar klubun əsas tarixi tədbiri olduğu üçün silinə bilməz.");
      return;
    }
    if (!confirm("Bu tədbiri silmək istədiyinizdən əminsiniz? Bu əməliyyat geri qaytarılmır.")) {
      return;
    }
    const data = getClubData();
    data.events = (data.events || []).filter(e => e && e.id !== eventId);
    saveClubData(data);
    this.renderMetrics();
    this.renderEventsTable();
    if (window.renderEvents) window.renderEvents();
    showToast("Tədbir uğurla silindi!", "success");
  },

  addNewEvent(eventData) {
    const data = getClubData();
    data.events = (data.events || []).filter(e => e && !["ev-2", "ev-3", "ev-4", "ev-5"].includes(e.id));
    if (!data.events.some(e => e.id === "ev-1")) {
      data.events.push(JSON.parse(JSON.stringify(INITIAL_DATA.events[0])));
    }
    data.events.unshift(eventData);
    saveClubData(data);
    this.renderMetrics();
    this.renderEventsTable();
    if (window.renderEvents) window.renderEvents();
    showToast("Yeni tədbir uğurla əlavə edildi!", "success");
  },

  // ==========================================
  // ONLAYN TAPŞIRIQLAR VƏ TƏLƏBƏ İZLƏMƏSİ (TASKS MANAGEMENT)
  // ==========================================

  currentUploadedDoc: null,
  currentUploadedVideo: null,
  currentUploadedImage: null,

  handleDocFileUpload(event) {
    const file = event.target.files && event.target.files[0];
    if (!file) return;

    const docNameInput = document.getElementById("taskModalDocName");
    const previewEl = document.getElementById("taskModalDocPreview");
    const previewNameEl = document.getElementById("taskModalDocPreviewName");
    const previewSizeEl = document.getElementById("taskModalDocPreviewSize");

    const sizeFormatted = file.size < 1024 * 1024
      ? (file.size / 1024).toFixed(1) + " KB"
      : (file.size / (1024 * 1024)).toFixed(2) + " MB";

    const fileName = file.name;
    const ext = fileName.split(".").pop().toLowerCase();

    if (docNameInput && !docNameInput.value.trim()) {
      docNameInput.value = fileName;
    }

    const reader = new FileReader();
    const textExtensions = ["fasta", "fa", "fna", "faa", "txt", "md", "markdown", "csv", "tsv", "json", "pdb", "py", "sh", "yml", "yaml"];
    const isText = textExtensions.includes(ext) || file.type.startsWith("text/");

    if (isText) {
      reader.onload = (e) => {
        PresidentPortal.currentUploadedDoc = {
          name: fileName,
          type: ext || "txt",
          size: sizeFormatted,
          url: "",
          rawContent: e.target.result
        };
        if (previewEl) previewEl.classList.remove("hidden");
        if (previewNameEl) previewNameEl.innerText = fileName;
        if (previewSizeEl) previewSizeEl.innerText = `(${sizeFormatted} • Tətbiqdaxili baxış hazır)`;
        showToast(`"${fileName}" sənədi hazırdır. Tələbələr yükləmədən birbaşa aça biləcək.`, "success");
      };
      reader.readAsText(file);
    } else {
      reader.onload = (e) => {
        PresidentPortal.currentUploadedDoc = {
          name: fileName,
          type: ext || "sənəd",
          size: sizeFormatted,
          url: e.target.result,
          rawContent: ""
        };
        if (previewEl) previewEl.classList.remove("hidden");
        if (previewNameEl) previewNameEl.innerText = fileName;
        if (previewSizeEl) previewSizeEl.innerText = `(${sizeFormatted} • Tətbiqdaxili baxış hazır)`;
        showToast(`"${fileName}" sənədi qoşuldu.`, "success");
      };
      reader.readAsDataURL(file);
    }
  },

  clearSelectedDoc() {
    PresidentPortal.currentUploadedDoc = null;
    const fileInput = document.getElementById("taskModalDocFile");
    if (fileInput) fileInput.value = "";
    const previewEl = document.getElementById("taskModalDocPreview");
    if (previewEl) previewEl.classList.add("hidden");
    const previewNameEl = document.getElementById("taskModalDocPreviewName");
    if (previewNameEl) previewNameEl.innerText = "";
    showToast("Qoşulmuş sənəd ləğv edildi.", "info");
  },

  handleVideoFileUpload(event) {
    const file = event.target.files && event.target.files[0];
    if (!file) return;

    const statusEl = document.getElementById("taskModalVideoFileStatus");
    const videoTitleInput = document.getElementById("taskModalVideoTitle");

    if (statusEl) {
      statusEl.innerHTML = `<span class="text-amber-400 font-semibold"><i class="fa-solid fa-spinner fa-spin"></i> Video təhlil edilir (max 5 dəqiqə, 360p yoxlanışı)...</span>`;
    }

    const videoObjUrl = URL.createObjectURL(file);
    const tempVideo = document.createElement("video");
    tempVideo.preload = "metadata";
    tempVideo.src = videoObjUrl;

    tempVideo.onloadedmetadata = () => {
      URL.revokeObjectURL(videoObjUrl);
      const durationSec = tempVideo.duration || 0;
      const minutes = Math.floor(durationSec / 60);
      const seconds = Math.floor(durationSec % 60);
      const formattedDuration = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

      // Enforce max 5 minutes (300s, with 5s tolerance)
      if (durationSec > 305) {
        showToast(`Video 5 dəqiqədən uzundur (${formattedDuration})! Server zəif olduğu üçün video maksimum 5 dəqiqə olmalıdır.`, "error");
        if (statusEl) {
          statusEl.innerHTML = `<span class="text-rose-400 font-bold"><i class="fa-solid fa-triangle-exclamation"></i> Limit aşıldı: ${formattedDuration} (Maksimum 5:00)</span>`;
        }
        event.target.value = "";
        PresidentPortal.currentUploadedVideo = null;
        return;
      }

      if (videoTitleInput && !videoTitleInput.value.trim()) {
        videoTitleInput.value = file.name.replace(/\.[^/.]+$/, "") + " (360p İzah)";
      }

      const sizeMB = (file.size / (1024 * 1024)).toFixed(2) + " MB";
      PresidentPortal.currentUploadedVideo = {
        name: file.name,
        duration: formattedDuration,
        durationSeconds: durationSec,
        size: sizeMB,
        quality: "360p",
        blob: file
      };

      if (statusEl) {
        statusEl.innerHTML = `<span class="text-emerald-400 font-bold"><i class="fa-solid fa-circle-check"></i> ${escapeHtml(file.name)} (${formattedDuration} • 360p Eko • ${sizeMB})</span>`;
      }
      showToast(`Video qəbul edildi: ${formattedDuration} (360p Server Qənaət Rejimi)`, "success");
    };

    tempVideo.onerror = () => {
      URL.revokeObjectURL(videoObjUrl);
      PresidentPortal.currentUploadedVideo = {
        name: file.name,
        duration: "04:00",
        quality: "360p",
        blob: file
      };
      if (statusEl) {
        statusEl.innerHTML = `<span class="text-emerald-400"><i class="fa-solid fa-circle-check"></i> ${escapeHtml(file.name)} (360p)</span>`;
      }
    };
  },

  handleImageFileUpload(event) {
    const file = event.target.files && event.target.files[0];
    if (!file) return;

    const imgInput = document.getElementById("taskModalImageUrl");
    const captionInput = document.getElementById("taskModalImageCaption");

    const reader = new FileReader();
    reader.onload = (e) => {
      if (imgInput) imgInput.value = e.target.result;
      if (captionInput && !captionInput.value.trim()) {
        captionInput.value = file.name.replace(/\.[^/.]+$/, "");
      }
      showToast("Şəkil yükləndi və tapşırığa əlavə edildi!", "success");
    };
    reader.readAsDataURL(file);
  },

  renderTasksList(filterCategory = "all") {
    const container = document.getElementById("presidentTasksList");
    if (!container) return;

    const data = getClubData();
    let tasks = data.tasks || [];

    if (filterCategory !== "all") {
      tasks = tasks.filter(t => t.category.toLowerCase().includes(filterCategory.toLowerCase()));
    }

    if (tasks.length === 0) {
      container.innerHTML = `
        <div class="col-span-full py-12 text-center text-slate-400 bg-slate-900/40 rounded-2xl border border-slate-800">
          <i class="fa-solid fa-list-check text-4xl mb-3 text-slate-500 block"></i>
          <p class="text-sm">Hələlik heç bir tapşırıq yaradılmayıb və ya bu kateqoriyada tapşırıq yoxdur.</p>
          <button onclick="PresidentPortal.openCreateTaskModal()" class="mt-4 px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs inline-flex items-center gap-2">
            <i class="fa-solid fa-plus"></i> İlk Tapşırığı Əlavə Et
          </button>
        </div>
      `;
      return;
    }

    container.innerHTML = tasks.map(task => {
      const subs = task.submissions || [];
      const approvedCount = subs.filter(s => (s.status || '').includes("Təsdiq")).length;
      const pendingCount = subs.filter(s => s.status === "Gözləyir").length;

      return `
        <div class="glass-panel p-5 sm:p-6 rounded-2xl border border-slate-800 hover:border-amber-500/40 transition duration-300 flex flex-col justify-between space-y-4">
          <div class="space-y-3">
            <div class="flex items-center justify-between gap-2 flex-wrap">
              <span class="text-[11px] font-bold uppercase tracking-wider text-amber-400 px-2.5 py-1 rounded-md bg-amber-950/80 border border-amber-800/60">
                ${task.category}
              </span>
              <div class="flex items-center gap-1.5 flex-wrap">
                ${task.assignedTo && task.assignedTo !== 'all' ? `
                  <span class="text-[11px] px-2.5 py-0.5 rounded-full font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/40 flex items-center gap-1" title="Fərdi olaraq yalnız bu üzvün panelinə göndərilib">
                    <i class="fa-solid fa-bullseye text-amber-400"></i> Fərdi: <strong>${escapeHtml(task.assignedToName || 'Xüsusi Üzv')}</strong>
                  </span>
                ` : `
                  <span class="text-[11px] px-2.5 py-0.5 rounded-full font-medium bg-teal-500/20 text-teal-300 border border-teal-500/30 flex items-center gap-1" title="Bütün klub üzvlərinin panelində görünür">
                    <i class="fa-solid fa-globe text-teal-400"></i> Hamısına (Açıq)
                  </span>
                `}
                <span class="text-xs px-2.5 py-0.5 rounded-full font-semibold ${
                  task.status === 'Aktiv' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' : 'bg-slate-800 text-slate-300'
                }">
                  ${task.status}
                </span>
              </div>
            </div>

            <h4 class="text-base font-bold text-white leading-snug">${escapeHtml(task.title)}</h4>
            <p class="text-xs text-slate-300 line-clamp-2 leading-relaxed">${escapeHtml(task.summary)}</p>

            <div class="flex items-center gap-3 text-xs text-slate-400 pt-1 border-t border-slate-800/60 flex-wrap">
              <span><i class="fa-regular fa-clock text-amber-400 mr-1"></i> Son tarix: <strong class="text-slate-200">${task.deadline}</strong></span>
              <span><i class="fa-solid fa-users-viewfinder text-teal-400 mr-1"></i> ${task.targetGroup || 'Bütün Üzvlər'}</span>
            </div>

            <div class="flex items-center gap-2 flex-wrap pt-1 text-[11px]">
              ${task.document ? `<span class="px-2 py-0.5 rounded bg-teal-950 text-teal-300 border border-teal-800 flex items-center gap-1"><i class="fa-solid fa-file-lines text-teal-400"></i> ${escapeHtml(task.document.name || 'Sənəd')}</span>` : ''}
              ${task.imageUrl ? '<span class="px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700"><i class="fa-solid fa-image text-cyan-400 mr-1"></i> Şəkil</span>' : ''}
              ${task.videoUrl ? `<span class="px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700"><i class="fa-solid fa-video text-rose-400 mr-1"></i> Video (360p • ${task.videoDuration || 'Max 5 dəq'})</span>` : ''}
              ${task.starterCode ? '<span class="px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700"><i class="fa-solid fa-code text-emerald-400 mr-1"></i> Kod</span>' : ''}
            </div>
          </div>

          <div class="pt-3 border-t border-slate-800 space-y-3">
            <div class="flex items-center justify-between text-xs bg-slate-900/80 p-2.5 rounded-xl border border-slate-800">
              <span class="text-slate-400">Tələbə İcrası:</span>
              <div class="flex items-center gap-2">
                <span class="text-slate-200 font-semibold">${subs.length} Təhvil</span>
                ${pendingCount > 0 ? `<span class="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 text-[10px] font-bold border border-amber-500/30">${pendingCount} Baxılmayıb</span>` : ''}
                ${approvedCount > 0 ? `<span class="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-bold border border-emerald-500/30">${approvedCount} Təsdiq</span>` : ''}
              </div>
            </div>

            <div class="flex items-center gap-2">
              <button onclick="PresidentPortal.openTaskSubmissionsModal('${task.id}')" class="flex-1 py-2 px-3 rounded-xl bg-teal-600/20 hover:bg-teal-600/30 text-teal-300 border border-teal-500/40 text-xs font-semibold flex items-center justify-center gap-1.5 transition">
                <i class="fa-solid fa-list-check"></i> İcranı İncələ (${subs.length})
              </button>
              ${task.document ? `
                <button onclick="inAppDocViewer.openTaskDoc('${task.id}')" class="p-2 rounded-xl bg-teal-950/80 hover:bg-teal-900 text-teal-300 border border-teal-800/80 text-xs transition" title="Sənədə Bax (Yükləmədən birbaşa tətbiqdə aç)">
                  <i class="fa-solid fa-file-lines"></i>
                </button>
              ` : ''}
              <button onclick="PresidentPortal.openEditTaskModal('${task.id}')" class="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 text-xs transition" title="Redaktə Et">
                <i class="fa-solid fa-pen-to-square"></i>
              </button>
              <button onclick="PresidentPortal.deleteTask('${task.id}')" class="p-2 rounded-xl bg-rose-950/60 hover:bg-rose-900 text-rose-300 border border-rose-800/60 text-xs transition" title="Sil">
                <i class="fa-solid fa-trash"></i>
              </button>
            </div>
          </div>
        </div>
      `;
    }).join("");
  },

  populateTaskAssignedToOptions(selectedVal = "all") {
    const select = document.getElementById("taskModalAssignedTo");
    if (!select) return;

    const data = getClubData();
    const members = (data.members || []).filter(m => m.status === "Aktiv" || !m.status);

    let html = `<option value="all">🌐 Bütün Klub Üzvlərinə (Hamısına Açıq Ümumi Tapşırıq)</option>`;
    members.forEach(m => {
      const isSelected = (selectedVal === m.id || selectedVal === m.username || selectedVal === m.email) ? "selected" : "";
      const inst = m.faculty || m.major || "WCU";
      html += `<option value="${m.id}" ${isSelected}>👤 ${escapeHtml(m.fullName)} (@${escapeHtml(m.username)}) - ${escapeHtml(inst)}</option>`;
    });

    select.innerHTML = html;
    select.value = selectedVal || "all";
    this.onTaskAssignedToChange(select.value);
  },

  onTaskAssignedToChange(val) {
    const info = document.getElementById("taskModalAssignedInfo");
    if (!info) return;
    if (val === "all") {
      info.innerHTML = `🌐 Bu seçimlə tapşırıq klubun <strong>bütün üzvlərinin</strong> panelində ümumi laboratoriya tapşırığı kimi dərc olunacaq.`;
      info.className = "text-[11px] text-teal-400 italic";
    } else {
      const data = getClubData();
      const target = (data.members || []).find(m => m.id === val || m.username === val);
      const name = target ? target.fullName : "Seçilmiş Üzv";
      info.innerHTML = `🎯 <strong>Fərdi Təyinat:</strong> Bu tapşırıq YALNIZ <strong>${escapeHtml(name)}</strong> şəxsinin üzv panelində xüsusi fərdi nişanla görünəcək və yalnız o təhvil verə biləcək.`;
      info.className = "text-[11px] text-amber-300 font-medium";
    }
  },

  openCreateTaskModal() {
    const modal = document.getElementById("presidentTaskModal");
    const form = document.getElementById("presidentTaskForm");
    const titleEl = document.getElementById("presidentTaskModalTitle");
    if (!modal || !form) return;

    form.reset();
    document.getElementById("taskModalId").value = "";
    this.currentUploadedDoc = null;
    this.currentUploadedVideo = null;
    this.currentUploadedImage = null;

    this.populateTaskAssignedToOptions("all");

    const docPreview = document.getElementById("taskModalDocPreview");
    if (docPreview) docPreview.classList.add("hidden");
    const videoStatus = document.getElementById("taskModalVideoFileStatus");
    if (videoStatus) videoStatus.innerHTML = "";

    if (titleEl) titleEl.innerText = "Yeni Onlayn Tapşırıq Təyin Et";
    modal.classList.remove("hidden");
  },

  openEditTaskModal(taskId) {
    const data = getClubData();
    const task = (data.tasks || []).find(t => t.id === taskId);
    if (!task) return;

    const modal = document.getElementById("presidentTaskModal");
    const titleEl = document.getElementById("presidentTaskModalTitle");
    if (!modal) return;

    this.currentUploadedDoc = task.document || null;
    this.currentUploadedVideo = null;
    this.currentUploadedImage = null;

    this.populateTaskAssignedToOptions(task.assignedTo || "all");

    document.getElementById("taskModalId").value = task.id;
    document.getElementById("taskModalTitle").value = task.title || "";
    document.getElementById("taskModalCategory").value = task.category || "Biopython & Kodlaşdırma";
    document.getElementById("taskModalDifficulty").value = task.difficulty || "Başlanğıc / Orta";
    document.getElementById("taskModalDeadline").value = task.deadline || "";
    document.getElementById("taskModalTargetGroup").value = task.targetGroup || "Bütün Klub Üzvləri";
    document.getElementById("taskModalStatus").value = task.status || "Aktiv";
    document.getElementById("taskModalSummary").value = task.summary || "";
    document.getElementById("taskModalInstructions").value = task.instructions || "";
    document.getElementById("taskModalImageUrl").value = task.imageUrl || "";
    document.getElementById("taskModalImageCaption").value = task.imageCaption || "";
    document.getElementById("taskModalVideoUrl").value = task.videoUrl || "";
    document.getElementById("taskModalVideoTitle").value = task.videoTitle || "";
    document.getElementById("taskModalStarterCode").value = task.starterCode || "";
    document.getElementById("taskModalResourceLink").value = task.resourceLink || "";
    document.getElementById("taskModalResourceName").value = task.resourceName || "";

    // Populate document fields
    const docNameInput = document.getElementById("taskModalDocName");
    const docUrlInput = document.getElementById("taskModalDocUrl");
    const docPreview = document.getElementById("taskModalDocPreview");
    const previewNameEl = document.getElementById("taskModalDocPreviewName");
    const previewSizeEl = document.getElementById("taskModalDocPreviewSize");

    if (task.document) {
      if (docNameInput) docNameInput.value = task.document.name || "";
      if (docUrlInput) docUrlInput.value = task.document.url || "";
      if (docPreview) docPreview.classList.remove("hidden");
      if (previewNameEl) previewNameEl.innerText = task.document.name || "Sənəd";
      if (previewSizeEl) previewSizeEl.innerText = `(${task.document.size || task.document.type || 'Hazır'})`;
    } else {
      if (docNameInput) docNameInput.value = "";
      if (docUrlInput) docUrlInput.value = "";
      if (docPreview) docPreview.classList.add("hidden");
    }

    // Video status
    const videoStatus = document.getElementById("taskModalVideoFileStatus");
    if (videoStatus) {
      if (task.videoDuration || task.videoUrl) {
        videoStatus.innerHTML = `<span class="text-amber-300 font-semibold"><i class="fa-solid fa-clock"></i> ${task.videoDuration || 'Max 5 dəq'} • ${task.videoQuality || '360p Eko'}</span>`;
      } else {
        videoStatus.innerHTML = "";
      }
    }

    if (titleEl) titleEl.innerText = "Tapşırığı Redaktə Et: " + task.title;
    modal.classList.remove("hidden");
  },

  saveTaskFromModal(e) {
    if (e) e.preventDefault();
    const data = getClubData();
    data.tasks = data.tasks || [];

    const taskId = document.getElementById("taskModalId").value;
    const title = document.getElementById("taskModalTitle").value.trim();
    const category = document.getElementById("taskModalCategory").value;
    const difficulty = document.getElementById("taskModalDifficulty").value;
    const deadline = document.getElementById("taskModalDeadline").value.trim();
    const targetGroup = document.getElementById("taskModalTargetGroup").value.trim();
    const status = document.getElementById("taskModalStatus").value;
    const summary = document.getElementById("taskModalSummary").value.trim();
    const instructions = document.getElementById("taskModalInstructions").value.trim();
    const imageUrl = document.getElementById("taskModalImageUrl").value.trim();
    const imageCaption = document.getElementById("taskModalImageCaption").value.trim();
    let videoUrl = document.getElementById("taskModalVideoUrl").value.trim();
    const videoTitle = document.getElementById("taskModalVideoTitle").value.trim();
    const starterCode = document.getElementById("taskModalStarterCode").value;
    const resourceLink = document.getElementById("taskModalResourceLink").value.trim();
    const resourceName = document.getElementById("taskModalResourceName").value.trim();

    // Document processing
    const docName = document.getElementById("taskModalDocName").value.trim();
    const docUrl = document.getElementById("taskModalDocUrl").value.trim();
    let attachedDoc = null;

    if (this.currentUploadedDoc) {
      attachedDoc = {
        ...this.currentUploadedDoc,
        name: docName || this.currentUploadedDoc.name || "Tapşırıq Sənədi"
      };
    } else if (docUrl || docName) {
      const detectedExt = (docName || docUrl).split(".").pop().toLowerCase();
      attachedDoc = {
        name: docName || docUrl.split("/").pop() || "Tapşırıq Sənədi",
        type: detectedExt || "sənəd",
        size: "Bulud Faylı",
        url: docUrl,
        rawContent: ""
      };
    }

    // Video processing with max 5-min and 360p eco-mode
    let videoEmbed = "";
    let videoDuration = "04:30";
    let videoQuality = "360p";

    if (this.currentUploadedVideo) {
      videoDuration = this.currentUploadedVideo.duration || "04:00";
      videoQuality = "360p";
      if (!videoUrl) {
        videoUrl = URL.createObjectURL(this.currentUploadedVideo.blob);
      }
    }

    if (videoUrl) {
      if (videoUrl.includes("youtube.com/watch?v=")) {
        const vid = videoUrl.split("watch?v=")[1].split("&")[0];
        videoEmbed = `https://www.youtube.com/embed/${vid}`;
      } else if (videoUrl.includes("youtu.be/")) {
        const vid = videoUrl.split("youtu.be/")[1].split("?")[0];
        videoEmbed = `https://www.youtube.com/embed/${vid}`;
      } else {
        videoEmbed = videoUrl;
      }
    }

    // Assignment targeting (Hamısına və ya Fərdi Üzvə)
    const assignedTo = (document.getElementById("taskModalAssignedTo") ? document.getElementById("taskModalAssignedTo").value : "all") || "all";
    let assignedToName = "Bütün Klub Üzvləri";
    if (assignedTo !== "all") {
      const assignedMem = (data.members || []).find(m => m.id === assignedTo || m.username === assignedTo);
      assignedToName = assignedMem ? assignedMem.fullName : "Seçilmiş Üzv";
    }

    let finalTask = null;

    if (taskId) {
      const existing = data.tasks.find(t => t.id === taskId);
      if (existing) {
        existing.title = title;
        existing.category = category;
        existing.difficulty = difficulty;
        existing.deadline = deadline;
        existing.targetGroup = targetGroup;
        existing.assignedTo = assignedTo;
        existing.assignedToName = assignedToName;
        existing.status = status;
        existing.summary = summary;
        existing.instructions = instructions;
        existing.imageUrl = imageUrl;
        existing.imageCaption = imageCaption;
        existing.videoUrl = videoUrl;
        existing.videoEmbed = videoEmbed;
        existing.videoTitle = videoTitle || existing.videoTitle;
        existing.videoDuration = (this.currentUploadedVideo ? videoDuration : existing.videoDuration) || "04:30";
        existing.videoQuality = "360p";
        existing.document = attachedDoc || (docName ? existing.document : null);
        existing.starterCode = starterCode;
        existing.resourceLink = resourceLink;
        existing.resourceName = resourceName;
        finalTask = existing;
      }
      showToast("Tapşırıq uğurla yeniləndi və sinxronlaşdırıldı!", "success");
    } else {
      const newTask = {
        id: "task-" + Date.now(),
        title,
        category,
        difficulty,
        deadline,
        targetGroup,
        assignedTo,
        assignedToName,
        status,
        summary,
        instructions,
        imageUrl,
        imageCaption,
        videoUrl,
        videoEmbed,
        videoTitle: videoTitle || `${title} (360p İzahlı Dərslik)`,
        videoDuration,
        videoQuality,
        document: attachedDoc,
        starterCode,
        resourceLink,
        resourceName,
        submissions: []
      };
      data.tasks.unshift(newTask);
      finalTask = newTask;
      showToast("Yeni tapşırıq uğurla dərc edildi və təyin olunmuş üzv panelinə canlı göndərildi!", "success");
    }

    this.currentUploadedDoc = null;
    this.currentUploadedVideo = null;
    this.currentUploadedImage = null;

    saveClubData(data);
    if (window.ClubDatabase) {
      window.ClubDatabase.setSetting("tasks", data.tasks);
    }

    // 1. Cross-Tab & PWA Real-time Broadcast
    if (window.SyncEngine) {
      window.SyncEngine.broadcast(taskId ? "TASK_UPDATED" : "TASK_CREATED", {
        task: finalTask,
        tasks: data.tasks
      });
    }

    // 2. Cloud Serverless & ntfy Bus Real-time Sync
    fetch("/api/sync", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        action: taskId ? "TASK_UPDATED" : "TASK_CREATED",
        task: finalTask,
        tasks: data.tasks
      })
    }).catch(err => console.warn("[PresidentPortal] Task cloud push bildirişi:", err));

    this.renderMetrics();
    this.renderTasksList();
    if (window.MembersPortal && window.MembersPortal.renderTasks) {
      window.MembersPortal.renderTasks();
    }
    if (window.TeacherPortal && window.TeacherPortal.renderMetrics) {
      window.TeacherPortal.renderMetrics();
      if (window.TeacherPortal.renderSubmissions) window.TeacherPortal.renderSubmissions();
    }

    document.getElementById("presidentTaskModal").classList.add("hidden");
  },

  deleteTask(taskId) {
    if (!confirm("Bu tapşırığı və bütün tələbə cavablarını silmək istədiyinizə əminsiniz?")) return;

    const data = getClubData();
    data.tasks = (data.tasks || []).filter(t => t.id !== taskId);
    saveClubData(data);
    if (window.ClubDatabase) {
      window.ClubDatabase.setSetting("tasks", data.tasks);
    }

    // 1. Cross-Tab & PWA Real-time Broadcast
    if (window.SyncEngine) {
      window.SyncEngine.broadcast("TASK_DELETED", { taskId, tasks: data.tasks });
    }

    // 2. Cloud Serverless & ntfy Bus Real-time Sync
    fetch("/api/sync", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        action: "TASK_DELETED",
        taskId,
        tasks: data.tasks
      })
    }).catch(err => console.warn("[PresidentPortal] Task cloud delete bildirişi:", err));

    this.renderMetrics();
    this.renderTasksList();
    if (window.MembersPortal && window.MembersPortal.renderTasks) {
      window.MembersPortal.renderTasks();
    }
    if (window.TeacherPortal && window.TeacherPortal.renderMetrics) {
      window.TeacherPortal.renderMetrics();
      if (window.TeacherPortal.renderSubmissions) window.TeacherPortal.renderSubmissions();
    }
    showToast("Tapşırıq silindi və sinxronlaşdırıldı.", "info");
  },

  openTaskSubmissionsModal(taskId) {
    const data = getClubData();
    const task = (data.tasks || []).find(t => t.id === taskId);
    if (!task) return;

    const modal = document.getElementById("presidentTaskSubmissionsModal");
    const titleEl = document.getElementById("submissionsModalTaskTitle");
    const container = document.getElementById("submissionsModalList");
    if (!modal || !container) return;

    if (titleEl) {
      titleEl.innerText = `${task.title} (${task.category})`;
    }

    const subs = task.submissions || [];
    if (subs.length === 0) {
      container.innerHTML = `
        <div class="py-12 text-center text-slate-400">
          <i class="fa-regular fa-folder-open text-4xl mb-3 text-slate-500 block"></i>
          Hələlik heç bir tələbə bu tapşırıq üzrə həll təhvil verməyib.
        </div>
      `;
    } else {
      container.innerHTML = subs.map((sub, idx) => {
        let badgeClass = "bg-amber-500/20 text-amber-300 border-amber-500/30";
        if ((sub.status || '').includes("Təsdiq")) badgeClass = "bg-emerald-500/20 text-emerald-300 border-emerald-500/30";
        if ((sub.status || '').includes("Təkmil")) badgeClass = "bg-cyan-500/20 text-cyan-300 border-cyan-500/30";

        return `
          <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 space-y-4">
            <div class="flex items-start justify-between gap-3 flex-wrap">
              <div>
                <div class="flex items-center gap-2">
                  <span class="w-7 h-7 rounded-full bg-teal-950 border border-teal-700 flex items-center justify-center text-xs font-bold text-teal-300">
                    #${idx + 1}
                  </span>
                  <h4 class="text-sm font-bold text-white">${sub.studentName}</h4>
                  <span class="text-xs text-teal-400">${sub.studentEmail}</span>
                </div>
                <div class="text-xs text-slate-400 mt-1">
                  ${sub.studentFaculty || 'Qərbi Kaspi Universiteti'} • Təhvil tarixi: ${sub.submissionDate}
                </div>
              </div>

              <div class="flex items-center gap-2">
                ${sub.grade ? `<span class="px-2.5 py-1 rounded-lg bg-teal-500/20 text-teal-300 border border-teal-500/30 text-xs font-bold"><i class="fa-solid fa-award mr-1"></i> ${sub.grade}</span>` : ''}
                <span class="px-3 py-1 rounded-full text-xs font-semibold border ${badgeClass}">
                  ${sub.status || 'Gözləyir'}
                </span>
              </div>
            </div>

            <!-- Student solution link and note -->
            <div class="space-y-2.5 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800/80 text-xs">
              ${sub.solutionUrl ? `
                <div class="flex items-center gap-2">
                  <strong class="text-slate-400">Həll Linki:</strong>
                  <a href="${sub.solutionUrl}" target="_blank" rel="noopener noreferrer" class="text-cyan-400 hover:text-cyan-300 font-mono flex items-center gap-1 underline break-all">
                    ${sub.solutionUrl} <i class="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
                  </a>
                </div>
              ` : ''}
              ${sub.attachedDocName ? `
                <div class="flex items-center gap-2">
                  <strong class="text-slate-400">Tələbənin Qoşduğu Sənəd:</strong>
                  <span class="text-teal-300 font-medium px-2 py-0.5 rounded bg-teal-950 border border-teal-800 text-[11px] flex items-center gap-1.5">
                    <i class="fa-solid fa-file-lines text-teal-400"></i> ${escapeHtml(sub.attachedDocName)}
                  </span>
                </div>
              ` : ''}
              ${sub.attachedVideoUrl ? `
                <div class="flex items-center gap-2">
                  <strong class="text-slate-400">Tələbənin İzah Videosu:</strong>
                  <a href="${sub.attachedVideoUrl}" target="_blank" rel="noopener noreferrer" class="text-rose-400 hover:text-rose-300 flex items-center gap-1 font-mono text-[11px] underline">
                    <i class="fa-solid fa-video"></i> ${escapeHtml(sub.attachedVideoUrl)} (360p)
                  </a>
                </div>
              ` : ''}
              <div>
                <strong class="text-slate-400 block mb-0.5">Tələbənin İzahı və Qeydləri:</strong>
                <p class="text-slate-200 leading-relaxed">${escapeHtml(sub.notes || 'Qeyd yazılmayıb.')}</p>
              </div>
            </div>

            <!-- President Feedback Section -->
            <div class="pt-3 border-t border-slate-800 space-y-3">
              <div class="flex items-center justify-between">
                <label class="text-xs font-bold text-amber-300 flex items-center gap-1.5">
                  <i class="fa-solid fa-crown text-amber-400"></i> Klub Sədrinin İzahı, Rəyi və Qiymətləndirməsi:
                </label>
                ${sub.feedbackDate ? `<span class="text-[10px] text-slate-400">Son qiymətləndirmə: ${sub.feedbackDate}</span>` : ''}
              </div>

              <textarea id="subFeedbackInput_${sub.id}" rows="2" class="w-full bg-slate-950 border border-slate-700 rounded-xl p-2.5 text-xs text-white focus:outline-none focus:border-amber-400 placeholder:text-slate-500" placeholder="Tələbəyə bu tapşırıq üzrə rəyinizi, düzəliş tövsiyələrinizi və elmi izahınızı yazın...">${sub.presidentFeedback || ''}</textarea>

              <div class="flex items-center justify-between gap-3 flex-wrap">
                <div class="flex items-center gap-2 flex-wrap">
                  <input type="text" id="subGradeInput_${sub.id}" value="${sub.grade || ''}" placeholder="Bal (məs: 95/100)" class="bg-slate-950 border border-slate-700 text-xs rounded-lg px-2.5 py-1.5 text-white w-32 focus:outline-none focus:border-amber-400" />
                  
                  <select id="subStatusInput_${sub.id}" class="bg-slate-950 border border-slate-700 text-xs rounded-lg px-2.5 py-1.5 text-white focus:outline-none focus:border-amber-400">
                    <option value="Təsdiqləndi (Əla)" ${sub.status === 'Təsdiqləndi (Əla)' ? 'selected' : ''}>Təsdiqləndi (Əla)</option>
                    <option value="Təkmilləşdirmə tələb olunur" ${sub.status === 'Təkmilləşdirmə tələb olunur' ? 'selected' : ''}>Təkmilləşdirmə tələb olunur</option>
                    <option value="Gözləyir" ${sub.status === 'Gözləyir' ? 'selected' : ''}>Gözləyir</option>
                  </select>
                </div>

                <button onclick="PresidentPortal.saveSubmissionFeedback('${task.id}', '${sub.id}')" class="px-4 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition flex items-center gap-1.5">
                  <i class="fa-solid fa-floppy-disk"></i> Rəyi və Qiyməti Saxla
                </button>
              </div>
            </div>
          </div>
        `;
      }).join("");
    }

    modal.classList.remove("hidden");
  },

  saveSubmissionFeedback(taskId, subId) {
    const feedbackInput = document.getElementById("subFeedbackInput_" + subId);
    const gradeInput = document.getElementById("subGradeInput_" + subId);
    const statusInput = document.getElementById("subStatusInput_" + subId);
    if (!feedbackInput || !statusInput) return;

    const feedback = feedbackInput.value.trim();
    const grade = gradeInput ? gradeInput.value.trim() : "";
    const status = statusInput.value;

    const data = getClubData();
    const task = (data.tasks || []).find(t => t.id === taskId);
    if (!task) return;

    const sub = (task.submissions || []).find(s => s.id === subId);
    if (!sub) return;

    sub.presidentFeedback = feedback;
    sub.grade = grade;
    sub.status = status;
    sub.feedbackDate = new Date().toLocaleString('az-AZ');

    saveClubData(data);
    this.renderMetrics();
    this.renderTasksList();
    if (window.MembersPortal && window.MembersPortal.renderTasks) {
      window.MembersPortal.renderTasks();
    }
    if (window.TeacherPortal && window.TeacherPortal.renderMetrics) {
      window.TeacherPortal.renderMetrics();
      if (window.TeacherPortal.renderSubmissions) window.TeacherPortal.renderSubmissions();
    }

    showToast(`${sub.studentName} üçün rəy və qiymətləndirmə saxlanıldı!`, "success");
    this.openTaskSubmissionsModal(taskId);
  },

  // ==========================================
  // KLUB ÜZVLƏRİ VƏ GİRİŞ HESABLARI (LOGİNLƏR & PAROLLAR)
  // ==========================================

  renderMembersAccountsTable(searchQuery = "") {
    const container = document.getElementById("presidentMembersAccountsTableBody");
    if (!container) return;

    const data = getClubData();
    let members = data.members || [];

    if (searchQuery.trim() !== "") {
      const q = searchQuery.toLowerCase();
      members = members.filter(m =>
        (m.fullName || "").toLowerCase().includes(q) ||
        (m.username || "").toLowerCase().includes(q) ||
        (m.email || "").toLowerCase().includes(q) ||
        (m.major || "").toLowerCase().includes(q)
      );
    }

    if (members.length === 0) {
      container.innerHTML = `
        <tr>
          <td colspan="7" class="text-center py-8 text-slate-400">
            <i class="fa-solid fa-users-slash text-3xl mb-2 text-slate-600 block"></i>
            Hələlik qeydiyyatdan keçmiş üzv yoxdur. Qeydiyyat formasından müraciət edən tələbələrin hesabları və şifrələri burada canlı görünəcək.
          </td>
        </tr>
      `;
      return;
    }

    container.innerHTML = members.map((m, idx) => `
      <tr class="border-b border-slate-800/60 hover:bg-slate-800/30 transition text-xs">
        <td class="py-3 px-4 text-slate-400 font-mono">#${idx + 1}</td>
        <td class="py-3 px-4">
          <div class="flex items-center gap-3">
            <div class="relative w-10 h-10 rounded-xl overflow-hidden bg-slate-900 border border-teal-500/30 shrink-0 shadow-md">
              ${m.photo 
                ? `<img src="${m.photo}" alt="${escapeHtml(m.fullName)}" class="w-full h-full object-cover">`
                : `<div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-teal-900/60 to-cyan-900/60 text-teal-300 font-bold text-xs">${escapeHtml((m.fullName || 'U').charAt(0).toUpperCase())}</div>`
              }
            </div>
            <div class="min-w-0">
              <div class="font-bold text-white flex items-center gap-1.5">
                <span class="truncate">${escapeHtml(m.fullName)}</span>
                ${m.photo ? `<span class="inline-block w-2 h-2 rounded-full bg-emerald-400 shrink-0" title="Profil şəkli aktivdir"></span>` : ''}
              </div>
              <div class="text-[11px] text-teal-400 truncate">${escapeHtml(m.university ? (m.university + (m.major ? ` • ${m.major}` : '')) : (m.faculty ? (m.faculty + (m.major ? ` • ${m.major}` : '')) : (m.major || '')))} ${m.course ? `(${escapeHtml(m.course)})` : ''}</div>
            </div>
          </div>
        </td>
        <td class="py-3 px-4">
          <div class="text-slate-300 font-mono text-[11px]">${escapeHtml(m.email)}</div>
          <div class="text-[11px] text-slate-400">${escapeHtml(m.phone || 'Qeyd edilməyib')}</div>
        </td>
        <td class="py-3 px-4 font-mono font-bold text-cyan-300 bg-slate-950/60 rounded px-2">
          @${escapeHtml(m.username || 'user')}
        </td>
        <td class="py-3 px-4">
          <div class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-amber-950/40 border border-amber-800/60 font-mono text-amber-300 font-bold select-all" title="Klub Sədrinə Açıq Şifrə">
            <i class="fa-solid fa-key text-[10px] text-amber-400"></i>
            <span>${escapeHtml(m.password || 'Təyin edilməyib')}</span>
          </div>
        </td>
        <td class="py-3 px-4">
          <span class="px-2 py-0.5 rounded-full font-bold text-[10px] ${m.status === 'Aktiv' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'}">
            ${escapeHtml(m.status || 'Aktiv')}
          </span>
        </td>
        <td class="py-3 px-4 text-right">
          <div class="inline-flex gap-1.5">
            <button onclick="PresidentPortal.openEditDossierModal('${m.id}', 'member')" title="Üzvün Bütün Məlumatlarını Limitsiz Redaktə Et (Sədr Hüququ)" class="p-1.5 rounded-lg bg-cyan-950/80 hover:bg-cyan-900 text-cyan-300 border border-cyan-700 transition">
              <i class="fa-solid fa-user-pen"></i>
            </button>
            <button onclick="PresidentPortal.openEditMemberPhotoModal('${m.id}')" title="Üzvün Profil Şəklini Yenilə / Dəyiş" class="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-teal-300 border border-slate-700 transition">
              <i class="fa-solid fa-camera"></i>
            </button>
            <button onclick="PresidentPortal.openEditMemberPasswordModal('${m.id}')" title="Şifrəni Dəyiş" class="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-amber-300 border border-slate-700 transition">
              <i class="fa-solid fa-pen-to-square"></i>
            </button>
            <button onclick="PresidentPortal.toggleMemberStatus('${m.id}')" title="Statusu Dəyiş" class="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-teal-300 border border-slate-700 transition">
              <i class="fa-solid fa-arrows-rotate"></i>
            </button>
            <button onclick="PresidentPortal.deleteMember('${m.id}')" title="Sil" class="p-1.5 rounded-lg bg-rose-950/60 hover:bg-rose-900 text-rose-400 border border-rose-800/60 transition">
              <i class="fa-solid fa-trash-can"></i>
            </button>
          </div>
        </td>
      </tr>
    `).join("");
  },

  renderTeachersAccountsTable(filterStatus = "all", searchQuery = "") {
    const container = document.getElementById("presidentTeachersAccountsTableBody");
    if (!container) return;

    const data = getClubData();
    data.deletedTeacherIds = data.deletedTeacherIds || [];
    data.deletedAppIds = data.deletedAppIds || [];

    const delSet = new Set(data.deletedTeacherIds.map(x => String(x).toLowerCase()));
    const delApps = new Set(data.deletedAppIds);

    let teachers = (data.teachers || []).filter(t => 
      !delSet.has(String(t.id).toLowerCase()) &&
      !delSet.has(String(t.username || '').toLowerCase()) &&
      !delSet.has(String(t.email || '').toLowerCase())
    );
    let teacherApps = (data.teacherApplications || []).filter(a => 
      !delApps.has(a.id) &&
      !delSet.has(String(a.id).toLowerCase()) &&
      !delSet.has(String(a.teacherId || '').toLowerCase()) &&
      !delSet.has(String(a.username || '').toLowerCase()) &&
      !delSet.has(String(a.email || '').toLowerCase())
    );

    // Hər bir müəllimi müraciət anketi ilə birləşdir
    let list = teachers.map(t => {
      const app = teacherApps.find(a => a.teacherId === t.id || a.id === t.id || (a.username && t.username && a.username.toLowerCase() === t.username.toLowerCase())) || {};
      return {
        ...t,
        appId: app.id || ("teach-app-" + t.id),
        dateApplied: app.dateApplied || t.registeredAt || "2026-10-10",
        adminNotes: app.adminNotes || t.adminNotes || "",
        specialties: t.specialties || app.specialties || ["Bioinformatika"]
      };
    });

    // Əgər hələ teacher array-ə düşməmiş müraciət varsa onu da əlavə et
    teacherApps.forEach(a => {
      const exists = list.some(item => item.id === a.teacherId || item.id === a.id || (item.username && a.username && item.username.toLowerCase() === a.username.toLowerCase()));
      if (!exists) {
        list.push({
          id: a.teacherId || a.id,
          appId: a.id,
          fullName: a.fullName,
          title: a.title || "Müəllim / Mentor",
          academicDegree: a.academicDegree || "Müəllim",
          university: a.university || "Qərbi Kaspi Universiteti (WCU)",
          faculty: a.faculty || "",
          department: a.department || "",
          email: a.email,
          phone: a.phone || "",
          username: a.username || "teacher",
          password: a.password || "wcuTeacher2026",
          status: a.status === "Təsdiqləndi" ? "Aktiv" : (a.status || "Gözləyir"),
          dateApplied: a.dateApplied || "2026-10-10",
          adminNotes: a.adminNotes || "",
          specialties: a.specialties || ["Bioinformatika"]
        });
      }
    });

    if (filterStatus !== "all") {
      if (filterStatus === "Aktiv") {
        list = list.filter(item => item.status === "Aktiv" || item.status === "Təsdiqləndi");
      } else {
        list = list.filter(item => item.status === filterStatus);
      }
    }

    if (searchQuery.trim() !== "") {
      const q = searchQuery.toLowerCase();
      list = list.filter(t =>
        (t.fullName || "").toLowerCase().includes(q) ||
        (t.username || "").toLowerCase().includes(q) ||
        (t.email || "").toLowerCase().includes(q) ||
        (t.department || "").toLowerCase().includes(q) ||
        (t.title || "").toLowerCase().includes(q)
      );
    }

    if (list.length === 0) {
      container.innerHTML = `
        <tr>
          <td colspan="7" class="text-center py-8 text-slate-400">
            <i class="fa-solid fa-chalkboard-user text-3xl mb-2 text-slate-600 block"></i>
            Heç bir müəllim və ya mentor qeydi tapılmadı. Saytdan müraciət edən müəllimlər burada 'Gözləyir' statusunda görünəcək və Sədr tərəfindən təsdiq ediləcəkdir.
          </td>
        </tr>
      `;
      return;
    }

    container.innerHTML = list.map((t, idx) => {
      const isApproved = t.status === "Aktiv" || t.status === "Təsdiqləndi";
      const isPending = t.status === "Gözləyir";
      const isRejected = t.status === "Rədd edildi";

      let statusBadge = `<span class="px-2 py-0.5 rounded-full font-bold text-[10px] bg-amber-500/20 text-amber-300 border border-amber-500/30 flex items-center gap-1 w-max"><i class="fa-solid fa-clock"></i> Gözləyir (Təsdiq Gözlənilir)</span>`;
      if (isApproved) {
        statusBadge = `<span class="px-2 py-0.5 rounded-full font-bold text-[10px] bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center gap-1 w-max"><i class="fa-solid fa-check"></i> Aktiv (Təsdiqlənib)</span>`;
      } else if (isRejected) {
        statusBadge = `<span class="px-2 py-0.5 rounded-full font-bold text-[10px] bg-rose-500/20 text-rose-300 border border-rose-500/30 flex items-center gap-1 w-max"><i class="fa-solid fa-xmark"></i> Rədd Edildi</span>`;
      }

      return `
        <tr class="border-b border-slate-800/60 hover:bg-slate-800/30 transition text-xs">
          <td class="py-3 px-4 text-slate-400 font-mono">#${idx + 1}</td>
          <td class="py-3 px-4">
            <div class="flex items-center gap-3">
              <div class="relative w-10 h-10 rounded-xl overflow-hidden bg-slate-900 border border-indigo-500/30 shrink-0 shadow-md">
                ${t.photo
                  ? `<img src="${t.photo}" alt="${escapeHtml(t.fullName)}" class="w-full h-full object-cover">`
                  : `<div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-indigo-900/60 to-purple-900/60 text-indigo-300 font-bold text-xs"><i class="fa-solid fa-chalkboard-user"></i></div>`
                }
              </div>
              <div class="min-w-0">
                <div class="font-bold text-white flex items-center gap-1.5">
                  <span class="truncate">${escapeHtml(t.fullName)}</span>
                </div>
                <div class="text-[11px] text-indigo-300 truncate font-semibold">${escapeHtml(t.title || 'Müəllim')}</div>
                <div class="text-[10px] text-slate-400 truncate">${escapeHtml(t.university || 'WCU')} • ${escapeHtml(t.department || '')}</div>
              </div>
            </div>
          </td>
          <td class="py-3 px-4">
            <div class="text-slate-300 font-mono text-[11px]">${escapeHtml(t.email)}</div>
            <div class="text-[11px] text-slate-400">${escapeHtml(t.phone || 'Qeyd edilməyib')}</div>
          </td>
          <td class="py-3 px-4 font-mono font-bold text-indigo-300 bg-slate-950/60 rounded px-2">
            @${escapeHtml(t.username || 'teacher')}
          </td>
          <td class="py-3 px-4">
            <div class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-amber-950/40 border border-amber-800/60 font-mono text-amber-300 font-bold select-all" title="Klub Sədrinə Açıq Şifrə">
              <i class="fa-solid fa-key text-[10px] text-amber-400"></i>
              <span>${escapeHtml(t.password || 'Təyin edilməyib')}</span>
            </div>
          </td>
          <td class="py-3 px-4">
            <div class="space-y-1">
              ${statusBadge}
              <div class="text-[10px] text-slate-500 font-mono">Tarix: ${escapeHtml(t.dateApplied)}</div>
            </div>
          </td>
          <td class="py-3 px-4 text-right">
            <div class="inline-flex gap-1.5 flex-wrap justify-end">
              ${isPending ? `
                <button onclick="PresidentPortal.approveTeacher('${t.id}', '${t.appId}')" title="Müəllimi Təsdiq Et və Girişini Aktivləşdir" class="px-2.5 py-1 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs transition shadow flex items-center gap-1">
                  <i class="fa-solid fa-check"></i> Təsdiq
                </button>
                <button onclick="PresidentPortal.rejectTeacher('${t.id}', '${t.appId}')" title="İmtina Et" class="px-2 py-1 rounded-lg bg-rose-950 hover:bg-rose-900 text-rose-300 border border-rose-700 font-bold text-xs transition">
                  <i class="fa-solid fa-xmark"></i> İmtina
                </button>
              ` : (isApproved ? `
                <button onclick="PresidentPortal.holdTeacher('${t.id}', '${t.appId}')" title="Statusu Gözləməyə Qaytar" class="px-2 py-1 rounded-lg bg-amber-950/80 hover:bg-amber-900 text-amber-300 border border-amber-700 text-xs transition">
                  <i class="fa-solid fa-pause"></i> Gözlət
                </button>
              ` : `
                <button onclick="PresidentPortal.approveTeacher('${t.id}', '${t.appId}')" title="Yenidən Təsdiq Et" class="px-2.5 py-1 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition">
                  <i class="fa-solid fa-rotate-left"></i> Bərpa
                </button>
              `)}
              <button onclick="PresidentPortal.viewTeacherDossier('${t.id}')" title="Tam Dossye və CV-yə Bax" class="p-1.5 rounded-lg bg-indigo-950 hover:bg-indigo-900 text-indigo-300 border border-indigo-700 transition">
                <i class="fa-solid fa-id-card"></i>
              </button>
              <button onclick="PresidentPortal.deleteTeacher('${t.id}', '${t.appId}')" title="Müəllim Hesabını Tam Sil" class="p-1.5 rounded-lg bg-rose-950/60 hover:bg-rose-900 text-rose-400 border border-rose-800/60 transition">
                <i class="fa-solid fa-trash-can"></i>
              </button>
            </div>
          </td>
        </tr>
      `;
    }).join("");
  },

  approveTeacher(teacherId, appId) {
    const data = getClubData();
    data.teachers = data.teachers || [];
    data.teacherApplications = data.teacherApplications || [];

    const t = data.teachers.find(item => item.id === teacherId);
    if (t) {
      t.status = "Aktiv";
      t.approvedAt = new Date().toISOString();
      t.approvedBy = "Süleyman Hacızadə (Klub Sədri)";
    }

    const a = data.teacherApplications.find(item => item.id === appId || item.teacherId === teacherId);
    if (a) {
      a.status = "Təsdiqləndi";
      a.adminNotes = "Sədr tərəfindən rəsmi akademik mentor olaraq təsdiqlənmişdir.";
    }

    saveClubData(data);

    try {
      fetch("/api/sync", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "UPDATE_TEACHER_STATUS",
          teacherId,
          applicationId: appId,
          status: "Aktiv"
        })
      }).catch(() => {});
    } catch (e) {}

    this.renderMetrics();
    this.renderTeachersAccountsTable();

    if (typeof showToast === "function") {
      showToast(`Müəllim ${t ? t.fullName : ''} uğurla TƏSDİQ edildi! Giriş kabineti dərhal aktivləşdirildi.`, "success");
    }
  },

  rejectTeacher(teacherId, appId) {
    const data = getClubData();
    data.teachers = data.teachers || [];
    data.teacherApplications = data.teacherApplications || [];

    const t = data.teachers.find(item => item.id === teacherId);
    if (t) t.status = "Rədd edildi";

    const a = data.teacherApplications.find(item => item.id === appId || item.teacherId === teacherId);
    if (a) {
      a.status = "Rədd edildi";
      a.adminNotes = "Sədr tərəfindən imtina edilmişdir.";
    }

    saveClubData(data);

    try {
      fetch("/api/sync", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "UPDATE_TEACHER_STATUS",
          teacherId,
          applicationId: appId,
          status: "Rədd edildi"
        })
      }).catch(() => {});
    } catch (e) {}

    this.renderMetrics();
    this.renderTeachersAccountsTable();

    if (typeof showToast === "function") {
      showToast("Müəllim müraciəti rədd edildi.", "info");
    }
  },

  holdTeacher(teacherId, appId) {
    const data = getClubData();
    data.teachers = data.teachers || [];
    data.teacherApplications = data.teacherApplications || [];

    const t = data.teachers.find(item => item.id === teacherId);
    if (t) t.status = "Gözləyir";

    const a = data.teacherApplications.find(item => item.id === appId || item.teacherId === teacherId);
    if (a) a.status = "Gözləyir";

    saveClubData(data);

    try {
      fetch("/api/sync", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "UPDATE_TEACHER_STATUS",
          teacherId,
          applicationId: appId,
          status: "Gözləyir"
        })
      }).catch(() => {});
    } catch (e) {}

    this.renderMetrics();
    this.renderTeachersAccountsTable();

    if (typeof showToast === "function") {
      showToast("Müəllim hesabı gözləmə statusuna keçirildi.", "info");
    }
  },

  deleteTeacher(teacherId, appId) {
    if (!confirm("Diqqət! Bu müəllim hesabını və müraciətini tamamilə silmək istədiyinizdən əminsiniz? Sədr qərarı ilə bu hesab sistemdən biryolluq silinəcək.")) return;

    const data = getClubData();
    data.teachers = data.teachers || [];
    data.teacherApplications = data.teacherApplications || [];
    data.deletedTeacherIds = data.deletedTeacherIds || [];
    data.deletedAppIds = data.deletedAppIds || [];

    // teacherId və appId üzrə bazadakı bütün əlaqəli qeydləri tapırıq
    const matchedTeachers = data.teachers.filter(t => 
      t.id === teacherId || 
      t.id === appId || 
      (appId && t.appId === appId) ||
      (teacherId && (t.username || '').toLowerCase() === String(teacherId).toLowerCase())
    );
    const matchedApps = data.teacherApplications.filter(a => 
      a.id === appId || 
      a.id === teacherId || 
      a.teacherId === teacherId || 
      a.teacherId === appId ||
      (teacherId && (a.username || '').toLowerCase() === String(teacherId).toLowerCase())
    );

    const idsToBlock = new Set([teacherId, appId].filter(Boolean).map(x => String(x)));
    const usernamesToBlock = new Set();
    const emailsToBlock = new Set();

    matchedTeachers.forEach(t => {
      if (t.id) idsToBlock.add(String(t.id));
      if (t.username) usernamesToBlock.add(t.username.toLowerCase());
      if (t.email) emailsToBlock.add(t.email.toLowerCase());
    });
    matchedApps.forEach(a => {
      if (a.id) idsToBlock.add(String(a.id));
      if (a.teacherId) idsToBlock.add(String(a.teacherId));
      if (a.username) usernamesToBlock.add(a.username.toLowerCase());
      if (a.email) emailsToBlock.add(a.email.toLowerCase());
    });

    if (typeof teacherId === "string" && !idsToBlock.has(teacherId)) {
      usernamesToBlock.add(teacherId.toLowerCase());
    }

    idsToBlock.forEach(id => {
      if (!data.deletedTeacherIds.includes(id)) data.deletedTeacherIds.push(id);
      if (!data.deletedAppIds.includes(id)) data.deletedAppIds.push(id);
    });
    usernamesToBlock.forEach(u => {
      if (!data.deletedTeacherIds.includes(u)) data.deletedTeacherIds.push(u);
    });
    emailsToBlock.forEach(e => {
      if (!data.deletedTeacherIds.includes(e)) data.deletedTeacherIds.push(e);
    });

    try {
      let storedTombs = JSON.parse(localStorage.getItem("carboxmol_deleted_teacher_ids") || "[]");
      storedTombs = Array.from(new Set([...storedTombs, ...data.deletedTeacherIds]));
      localStorage.setItem("carboxmol_deleted_teacher_ids", JSON.stringify(storedTombs));
    } catch (e) {}

    // Qalıcı tam təmizlənmə
    data.teachers = data.teachers.filter(t => {
      if (idsToBlock.has(String(t.id))) return false;
      if (t.username && usernamesToBlock.has(t.username.toLowerCase())) return false;
      if (t.email && emailsToBlock.has(t.email.toLowerCase())) return false;
      return true;
    });

    data.teacherApplications = data.teacherApplications.filter(a => {
      if (idsToBlock.has(String(a.id)) || (a.teacherId && idsToBlock.has(String(a.teacherId)))) return false;
      if (a.username && usernamesToBlock.has(a.username.toLowerCase())) return false;
      if (a.email && emailsToBlock.has(a.email.toLowerCase())) return false;
      return true;
    });

    // Əgər həmin müəllimin sessiyası aktivdirsə, dərhal sistemdən çıxar
    const activeTeacherId = localStorage.getItem("wcu_active_teacher_id");
    if (activeTeacherId && (idsToBlock.has(String(activeTeacherId)) || usernamesToBlock.has(String(activeTeacherId).toLowerCase()))) {
      localStorage.removeItem("wcu_active_teacher_id");
    }

    saveClubData(data);

    if (window.SyncEngine) {
      window.SyncEngine.broadcast("DELETE_TEACHER", {
        teacherId,
        applicationId: appId,
        deletedTeacherIds: data.deletedTeacherIds
      });
    }

    try {
      fetch("/api/sync", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "DELETE_TEACHER",
          teacherId,
          applicationId: appId,
          deletedTeacherIds: data.deletedTeacherIds
        })
      }).catch(() => {});
    } catch (e) {}

    this.renderMetrics();
    this.renderTeachersAccountsTable();

    if (typeof showToast === "function") {
      showToast("Müəllim hesabı Sədr səlahiyyəti ilə sistemdən biryolluq silindi.", "success");
    }
  },

  viewTeacherDossier(teacherId) {
    const data = getClubData();
    const t = (data.teachers || []).find(item => item.id === teacherId) || {};
    const app = (data.teacherApplications || []).find(item => item.teacherId === teacherId || item.id === teacherId) || {};

    const modal = document.getElementById("teacherDossierModal");
    if (!modal) return;

    const elContent = document.getElementById("teacherDossierModalContent");
    if (elContent) {
      elContent.innerHTML = `
        <div class="space-y-6">
          <div class="flex items-center gap-4 p-4 rounded-2xl bg-slate-900 border border-indigo-500/30">
            <div class="w-16 h-16 rounded-2xl overflow-hidden bg-slate-950 border border-indigo-500/40 flex items-center justify-center shrink-0">
              ${t.photo ? `<img src="${t.photo}" class="w-full h-full object-cover">` : `<i class="fa-solid fa-chalkboard-user text-3xl text-indigo-400"></i>`}
            </div>
            <div>
              <h3 class="text-lg font-bold text-white">${escapeHtml(t.fullName || app.fullName)}</h3>
              <p class="text-xs text-indigo-300 font-semibold">${escapeHtml(t.title || app.title || 'Müəllim')}</p>
              <p class="text-[11px] text-slate-400">${escapeHtml(t.university || app.university || 'WCU')} • ${escapeHtml(t.department || app.department || '')}</p>
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div class="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
              <span class="text-slate-400 block font-semibold">İstifadəçi Adı (Login):</span>
              <span class="font-mono text-cyan-300 font-bold">@${escapeHtml(t.username || app.username)}</span>
            </div>
            <div class="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
              <span class="text-slate-400 block font-semibold">Giriş Şifrəsi:</span>
              <span class="font-mono text-amber-300 font-bold select-all">${escapeHtml(t.password || app.password)}</span>
            </div>
            <div class="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
              <span class="text-slate-400 block font-semibold">E-poçt Ünvanı:</span>
              <span class="font-mono text-slate-200">${escapeHtml(t.email || app.email)}</span>
            </div>
            <div class="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
              <span class="text-slate-400 block font-semibold">Əlaqə Telefonu:</span>
              <span class="text-slate-200">${escapeHtml(t.phone || app.phone || 'Qeyd edilməyib')}</span>
            </div>
            <div class="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-1 sm:col-span-2">
              <span class="text-slate-400 block font-semibold">İxtisası və Tədqiqat Sahəsi:</span>
              <span class="text-teal-300 font-medium">${escapeHtml(Array.isArray(t.specialties) ? t.specialties.join(", ") : (t.specialties || app.specialties || 'Bioinformatika'))}</span>
            </div>
          </div>

          <div class="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1 text-xs">
            <span class="text-slate-400 block font-semibold">Elmi Bioqrafiya və Mesaj:</span>
            <p class="text-slate-200 leading-relaxed">${escapeHtml(t.bio || app.bio || 'Məlumat daxil edilməyib.')}</p>
          </div>

          <div class="p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs flex items-center justify-between">
            <span class="text-slate-400">Hazırkı Status:</span>
            <span class="font-bold ${(t.status === 'Aktiv' || t.status === 'Təsdiqləndi') ? 'text-emerald-400' : 'text-amber-400'}">${escapeHtml(t.status || app.status || 'Gözləyir')}</span>
          </div>
        </div>
      `;
    }

    modal.classList.remove("hidden");
  },

  closeTeacherDossierModal() {
    const modal = document.getElementById("teacherDossierModal");
    if (modal) modal.classList.add("hidden");
  },

  openAddTeacherModal() {
    const modal = document.getElementById("presidentAddTeacherModal");
    if (modal) {
      const f = document.getElementById("presidentAddTeacherForm");
      if (f) f.reset();
      modal.classList.remove("hidden");
    }
  },

  closeAddTeacherModal() {
    const modal = document.getElementById("presidentAddTeacherModal");
    if (modal) modal.classList.add("hidden");
  },

  submitNewTeacherDirectly(e) {
    if (e) e.preventDefault();

    const fullName = (document.getElementById("newTeachFullName")?.value || "").trim();
    const title = (document.getElementById("newTeachTitle")?.value || "").trim();
    const university = (document.getElementById("newTeachUniversity")?.value || "").trim() || "Qərbi Kaspi Universiteti (WCU)";
    const specsVal = (document.getElementById("newTeachSpecialties")?.value || "").trim();
    const email = (document.getElementById("newTeachEmail")?.value || "").trim();
    const phone = (document.getElementById("newTeachPhone")?.value || "").trim();
    const department = (document.getElementById("newTeachDept")?.value || "").trim();
    const username = (document.getElementById("newTeachUsername")?.value || "").trim();
    const password = (document.getElementById("newTeachPassword")?.value || "").trim();
    const bio = (document.getElementById("newTeachBio")?.value || "").trim();

    if (!fullName || !email || !username || !password) {
      if (typeof showToast === "function") showToast("Zəhmət olmasa bütün vacib xanaları doldurun.", "error");
      return;
    }

    const specArray = specsVal ? specsVal.split(",").map(s => s.trim()).filter(Boolean) : ["Bioinformatika", "Genom Analizi"];

    const cleanUsername = typeof ClubSecurity !== "undefined"
      ? ClubSecurity.sanitizeUsername(username)
      : username.toLowerCase().replace(/[^a-z0-9_.-]/g, "");

    const data = getClubData();
    data.teachers = data.teachers || [];
    data.teacherApplications = data.teacherApplications || [];

    const teacherId = "teacher-" + Date.now();
    const newTeacher = {
      id: teacherId,
      fullName: typeof ClubSecurity !== "undefined" ? ClubSecurity.sanitizeText(fullName) : fullName,
      title: title || "Akademik Mentor",
      academicDegree: "Müəllim / Mentor",
      university: university,
      faculty: department || "Təbiət Elmləri",
      department: department || "Təbiət Elmləri Kafedrası",
      email: email,
      phone: phone,
      username: cleanUsername,
      password: password,
      photo: "",
      specialties: specArray,
      officeLocation: "",
      consultationHours: "",
      bio: bio || "CarboxMol Bioinformatika Klubu akademik mentoru.",
      status: "Aktiv",
      registeredAt: new Date().toISOString().split("T")[0],
      approvedAt: new Date().toISOString(),
      approvedBy: "Süleyman Hacızadə (Klub Sədri)"
    };

    data.teachers.unshift(newTeacher);
    data.teacherApplications.unshift({
      id: "teach-app-" + Date.now(),
      teacherId: teacherId,
      fullName: newTeacher.fullName,
      title: newTeacher.title,
      academicDegree: newTeacher.academicDegree,
      university: newTeacher.university,
      faculty: newTeacher.faculty,
      department: newTeacher.department,
      email: newTeacher.email,
      phone: newTeacher.phone,
      username: newTeacher.username,
      password: newTeacher.password,
      status: "Təsdiqləndi",
      dateApplied: newTeacher.registeredAt,
      adminNotes: "Sədr tərəfindən birbaşa əlavə edilmişdir."
    });

    saveClubData(data);

    try {
      fetch("/api/sync", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "REGISTER_TEACHER",
          teacher: newTeacher,
          teacherApplication: data.teacherApplications[0]
        })
      }).catch(() => {});
    } catch (e) {}

    this.closeAddTeacherModal();
    this.renderMetrics();
    this.renderTeachersAccountsTable();

    if (typeof showToast === "function") {
      showToast(`Yeni müəllim (${newTeacher.fullName}) uğurla əlavə edildi və girişi aktivləşdirildi!`, "success");
    }
  },

  openEditMemberPhotoModal(memberId) {
    const data = getClubData();
    const member = (data.members || []).find(m => m.id === memberId);
    if (!member) return;

    // Create a dynamic file input for photo upload
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.style.display = "none";
    document.body.appendChild(input);

    input.onchange = (e) => {
      const file = e.target.files && e.target.files[0];
      if (!file) {
        document.body.removeChild(input);
        return;
      }
      const reader = new FileReader();
      reader.onload = (loadEvt) => {
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

          member.photo = compressed;

          // Müraciətlər cədvəlində də fotonu dərhal yenilə
          data.applications = data.applications || [];
          const app = data.applications.find(a => (member.id && a.memberId === member.id) || (member.username && a.username && a.username.toLowerCase() === member.username.toLowerCase()));
          if (app) {
            app.photo = compressed;
          }

          saveClubData(data);

          // If current logged-in member is this user, update localStorage too
          const active = typeof getActiveMember === "function" ? getActiveMember() : null;
          if (active && (active.id === member.id || active.username === member.username)) {
            active.photo = compressed;
            localStorage.setItem("wcu_active_member", JSON.stringify(active));
          }

          if (window.ClubDatabase) {
            window.ClubDatabase.provisionMember(member);
            if (app) window.ClubDatabase.provisionMember(app);
          }

          PresidentPortal.renderMembersAccountsTable();
          PresidentPortal.renderApplicationsTable();
          if (window.MembersPortal && typeof MembersPortal.renderMembersDirectory === "function") {
            MembersPortal.renderMembersDirectory();
          }
          showToast(`${member.fullName} üçün profil şəkli yeniləndi!`, "success");

          if (window.SyncEngine) {
            window.SyncEngine.broadcast("MEMBER_PHOTO_UPDATED", {
              memberId: member.id,
              username: member.username,
              photo: compressed
            });
          }

          if (typeof fetch === "function") {
            fetch("/api/sync", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                action: "MEMBER_PHOTO_UPDATED",
                memberId: member.id,
                username: member.username,
                photo: compressed,
                timestamp: Date.now()
              })
            }).catch(e => console.warn("[PresidentPortal] Photo sync error:", e));
          }
        };
        img.src = loadEvt.target.result;
      };
      reader.readAsDataURL(file);
      document.body.removeChild(input);
    };

    if (member.photo) {
      const confirmRemove = confirm(`"${member.fullName}" üçün mövcud şəkli silmək istəyirsiniz?\n(Ləğv etsəniz, yeni şəkil seçmək üçün pəncərə açılacaq)`);
      if (confirmRemove) {
        delete member.photo;

        data.applications = data.applications || [];
        const app = data.applications.find(a => (member.id && a.memberId === member.id) || (member.username && a.username && a.username.toLowerCase() === member.username.toLowerCase()));
        if (app) {
          delete app.photo;
        }

        saveClubData(data);
        const active = typeof getActiveMember === "function" ? getActiveMember() : null;
        if (active && (active.id === member.id || active.username === member.username)) {
          delete active.photo;
          localStorage.setItem("wcu_active_member", JSON.stringify(active));
        }

        if (window.ClubDatabase) {
          window.ClubDatabase.provisionMember(member);
          if (app) window.ClubDatabase.provisionMember(app);
        }

        PresidentPortal.renderMembersAccountsTable();
        PresidentPortal.renderApplicationsTable();
        if (window.MembersPortal && typeof MembersPortal.renderMembersDirectory === "function") {
          MembersPortal.renderMembersDirectory();
        }
        showToast(`${member.fullName} üçün şəkil silindi.`, "info");
        if (window.SyncEngine) {
          window.SyncEngine.broadcast("MEMBER_PHOTO_UPDATED", {
            memberId: member.id,
            username: member.username,
            photo: ""
          });
        }
        if (typeof fetch === "function") {
          fetch("/api/sync", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              action: "MEMBER_PHOTO_UPDATED",
              memberId: member.id,
              username: member.username,
              photo: "",
              timestamp: Date.now()
            })
          }).catch(e => console.warn("[PresidentPortal] Photo sync error:", e));
        }
        document.body.removeChild(input);
        return;
      }
    }

    input.click();
  },

  openEditMemberPasswordModal(memberId) {
    const data = getClubData();
    const member = (data.members || []).find(m => m.id === memberId);
    if (!member) return;

    const newPass = prompt(`"${member.fullName}" üçün yeni şifrə təyin edin:`, member.password || "");
    if (newPass && newPass.trim().length >= 4) {
      member.password = newPass.trim();
      saveClubData(data);
      this.renderMembersAccountsTable();
      showToast(`${member.fullName} üçün şifrə yeniləndi!`, "success");
      if (window.SyncEngine) window.SyncEngine.broadcast("MEMBER_PASSWORD_CHANGED", { memberId });
    }
  },

  toggleMemberStatus(memberId) {
    const data = getClubData();
    const member = (data.members || []).find(m => m.id === memberId);
    if (!member) return;

    member.status = member.status === "Aktiv" ? "Gözləyir" : "Aktiv";
    saveClubData(data);
    this.renderMembersAccountsTable();
    showToast(`Status dəyişdirildi: ${member.status}`, "info");
    if (window.SyncEngine) window.SyncEngine.broadcast("MEMBER_STATUS_CHANGED", { memberId });
  },

  deleteApplication(appId) {
    const data = getClubData();
    const app = (data.applications || []).find(a => a.id === appId);
    if (!app) return;

    if (!confirm(`"${app.fullName}" adlı namizədin müraciətini və əlaqəli məlumatlarını sistemdən tamamilə silmək istədiyinizə əminsiniz?`)) return;

    // 1. data.applications-dan sil və Tombstone Reyestrinə daxil et
    data.deletedAppIds = data.deletedAppIds || [];
    if (!data.deletedAppIds.includes(appId)) data.deletedAppIds.push(appId);
    data.applications = (data.applications || []).filter(a => a.id !== appId);

    // 2. data.members-də əlaqəli üzv varsa, onu da sil və Tombstone-a at
    const member = (data.members || []).find(m => 
      m.id === app.memberId || 
      (m.username && app.username && m.username.toLowerCase() === app.username.toLowerCase()) ||
      (m.email && app.email && m.email.toLowerCase() === app.email.toLowerCase())
    );
    const memberId = member ? member.id : null;
    if (memberId) {
      data.deletedMemberIds = data.deletedMemberIds || [];
      if (!data.deletedMemberIds.includes(memberId)) data.deletedMemberIds.push(memberId);
      data.members = (data.members || []).filter(m => m.id !== memberId);
      if (window.ClubDatabase && typeof window.ClubDatabase.deleteMember === "function") {
        window.ClubDatabase.deleteMember(memberId);
      }
    }

    if (window.ClubDatabase && typeof window.ClubDatabase.deleteApplication === "function") {
      window.ClubDatabase.deleteApplication(appId);
    }

    saveClubData(data);
    this.renderApplicationsTable();
    this.renderMembersAccountsTable();
    this.renderMetrics();
    showToast(`"${app.fullName}" müraciəti sistemdən tamamilə silindi!`, "info");

    if (window.SyncEngine) window.SyncEngine.broadcast("APPLICATION_DELETED", { appId, memberId });

    try {
      fetch("/api/sync", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "DELETE_APPLICATION",
          appId,
          memberId,
          timestamp: Date.now()
        })
      }).catch(e => console.warn("Delete application sync warning:", e));

      fetch("https://ntfy.sh/carboxmol_bioinfo_cloud_sync_v3_secure/publish", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "DELETE_APPLICATION",
          appId,
          memberId,
          timestamp: Date.now()
        })
      }).catch(() => {});
    } catch (e) {}
  },

  deleteMember(memberId) {
    const data = getClubData();
    const member = (data.members || []).find(m => m.id === memberId);
    if (!member) return;

    if (!confirm(`"${member.fullName}" üzvünü və əlaqəli bütün müraciət məlumatlarını sistemdən tamamilə silmək istədiyinizə əminsiniz?`)) return;

    data.deletedMemberIds = data.deletedMemberIds || [];
    if (!data.deletedMemberIds.includes(memberId)) data.deletedMemberIds.push(memberId);
    data.members = (data.members || []).filter(m => m.id !== memberId);

    let appId = null;
    data.applications = (data.applications || []).filter(a => {
      if (
        a.memberId === memberId ||
        (a.username && member.username && a.username.toLowerCase() === member.username.toLowerCase()) ||
        (a.email && member.email && a.email.toLowerCase() === member.email.toLowerCase())
      ) {
        appId = a.id;
        return false;
      }
      return true;
    });

    if (appId) {
      data.deletedAppIds = data.deletedAppIds || [];
      if (!data.deletedAppIds.includes(appId)) data.deletedAppIds.push(appId);
    }

    if (window.ClubDatabase) {
      if (typeof window.ClubDatabase.deleteMember === "function") window.ClubDatabase.deleteMember(memberId);
      if (appId && typeof window.ClubDatabase.deleteApplication === "function") window.ClubDatabase.deleteApplication(appId);
    }

    saveClubData(data);
    this.renderMembersAccountsTable();
    this.renderApplicationsTable();
    this.renderMetrics();
    showToast(`"${member.fullName}" üzvü sistemdən silindi.`, "info");

    if (window.SyncEngine) window.SyncEngine.broadcast("MEMBER_DELETED", { memberId, appId });

    try {
      fetch("/api/sync", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "DELETE_MEMBER",
          memberId,
          appId,
          timestamp: Date.now()
        })
      }).catch(e => console.warn("Delete member sync warning:", e));

      fetch("https://ntfy.sh/carboxmol_bioinfo_cloud_sync_v3_secure/publish", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "DELETE_MEMBER",
          memberId,
          appId,
          timestamp: Date.now()
        })
      }).catch(() => {});
    } catch (e) {}
  },


  openEditDossierModal(id, type = "application") {
    const data = getClubData();
    let app = null;
    let member = null;

    if (type === "member") {
      member = (data.members || []).find(m => m.id === id);
      if (member) {
        app = (data.applications || []).find(a => 
          a.memberId === member.id || 
          (a.username && member.username && a.username.toLowerCase() === member.username.toLowerCase()) ||
          (a.email && member.email && a.email.toLowerCase() === member.email.toLowerCase())
        );
      }
    } else {
      app = (data.applications || []).find(a => a.id === id);
      if (app) {
        member = (data.members || []).find(m => 
          m.id === app.memberId || 
          (m.username && app.username && m.username.toLowerCase() === app.username.toLowerCase()) ||
          (m.email && app.email && m.email.toLowerCase() === app.email.toLowerCase())
        );
      }
    }

    const item = app || member;
    if (!item) {
      showToast("Məlumat tapılmadı!", "error");
      return;
    }

    // Clone university/institute options from appFaculty if pedFaculty is empty
    const pedFacultySelect = document.getElementById("pedFaculty");
    const sourceSelect = document.getElementById("appFaculty") || document.getElementById("mepFaculty");
    if (pedFacultySelect && sourceSelect && pedFacultySelect.options.length <= 1) {
      pedFacultySelect.innerHTML = sourceSelect.innerHTML;
    }

    document.getElementById("pedTargetId").value = id;
    document.getElementById("pedTargetType").value = type;
    document.getElementById("pedFullName").value = item.fullName || "";
    document.getElementById("pedEmail").value = item.email || "";
    document.getElementById("pedPhone").value = item.phone || "";
    document.getElementById("pedUsername").value = (item.username || "").replace(/^@/, "");
    document.getElementById("pedPassword").value = item.password || (member ? member.password : "") || "wcu2026";
    if (pedFacultySelect) pedFacultySelect.value = item.faculty || "(WCU) - Yüksək Texnologiyalar və Təbiət Elmləri Məktəbi";
    document.getElementById("pedMajor").value = item.major || "";
    document.getElementById("pedCourse").value = item.course || "III Kurs";
    document.getElementById("pedGpa").value = item.gpa || "";
    document.getElementById("pedStudyLang").value = item.studyLang || "Azərbaycan bölməsi";
    document.getElementById("pedProgrammingSkill").value = item.programmingSkill || "Baza səviyyə (Python)";
    document.getElementById("pedStatus").value = item.status === "Aktiv" ? "Təsdiqləndi" : (item.status || "Gözləyir");
    document.getElementById("pedRoleInterest").value = item.roleInterest || "Aktiv Tələbə / İştirakçı";
    document.getElementById("pedWeeklyTime").value = item.weeklyTime || "Həftədə 4–6 saat";
    document.getElementById("pedAdminNotes").value = item.adminNotes || "";
    document.getElementById("pedMotivation").value = item.motivation || "";

    const modal = document.getElementById("presidentEditDossierModal");
    if (modal) modal.classList.remove("hidden");
  },

  closeEditDossierModal() {
    const modal = document.getElementById("presidentEditDossierModal");
    if (modal) modal.classList.add("hidden");
  },

  deleteFromEditModal() {
    const targetId = document.getElementById("pedTargetId").value;
    const targetType = document.getElementById("pedTargetType").value;
    this.closeEditDossierModal();
    if (targetType === "member") {
      this.deleteMember(targetId);
    } else {
      this.deleteApplication(targetId);
    }
  },

  saveEditDossier(event) {
    if (event) event.preventDefault();

    const targetId = document.getElementById("pedTargetId").value;
    const targetType = document.getElementById("pedTargetType").value;

    const fullName = document.getElementById("pedFullName").value.trim();
    const email = document.getElementById("pedEmail").value.trim().toLowerCase();
    const phone = document.getElementById("pedPhone").value.trim();
    const username = document.getElementById("pedUsername").value.trim().replace(/^@/, "").toLowerCase();
    const password = document.getElementById("pedPassword").value.trim();
    const faculty = document.getElementById("pedFaculty").value;
    const major = document.getElementById("pedMajor").value.trim();
    const course = document.getElementById("pedCourse").value;
    const gpa = document.getElementById("pedGpa").value.trim();
    const studyLang = document.getElementById("pedStudyLang").value;
    const programmingSkill = document.getElementById("pedProgrammingSkill").value;
    const rawStatus = document.getElementById("pedStatus").value;
    const roleInterest = document.getElementById("pedRoleInterest").value;
    const weeklyTime = document.getElementById("pedWeeklyTime").value;
    const adminNotes = document.getElementById("pedAdminNotes").value.trim();
    const motivation = document.getElementById("pedMotivation").value.trim();

    const data = getClubData();
    data.applications = data.applications || [];
    data.members = data.members || [];

    // Find application and member
    let app = null;
    let member = null;

    if (targetType === "member") {
      member = data.members.find(m => m.id === targetId);
      if (member) {
        app = data.applications.find(a => 
          a.memberId === member.id || 
          (a.username && member.username && a.username.toLowerCase() === member.username.toLowerCase()) ||
          (a.email && member.email && a.email.toLowerCase() === member.email.toLowerCase())
        );
      }
    } else {
      app = data.applications.find(a => a.id === targetId);
      if (app) {
        member = data.members.find(m => 
          m.id === app.memberId || 
          (m.username && app.username && m.username.toLowerCase() === app.username.toLowerCase()) ||
          (m.email && app.email && m.email.toLowerCase() === app.email.toLowerCase())
        );
      }
    }

    const appStatus = rawStatus;
    const memberStatus = rawStatus === "Təsdiqləndi" || rawStatus === "Qəbul Edildi" ? "Aktiv" : rawStatus;

    if (app) {
      app.fullName = fullName;
      app.email = email;
      app.phone = phone;
      app.username = username;
      app.password = password;
      app.faculty = faculty;
      app.major = major;
      app.course = course;
      app.gpa = gpa;
      app.studyLang = studyLang;
      app.programmingSkill = programmingSkill;
      app.status = appStatus;
      app.roleInterest = roleInterest;
      app.weeklyTime = weeklyTime;
      app.adminNotes = adminNotes;
      if (motivation) app.motivation = motivation;
      app.lastEditedByAdminAt = new Date().toISOString();
    }

    if (member) {
      member.fullName = fullName;
      member.email = email;
      member.phone = phone;
      member.username = username;
      member.password = password;
      member.faculty = faculty;
      member.major = major;
      member.course = course;
      member.gpa = gpa;
      member.studyLang = studyLang;
      member.programmingSkill = programmingSkill;
      member.status = memberStatus;
      member.roleInterest = roleInterest;
      member.weeklyTime = weeklyTime;
      member.adminNotes = adminNotes;
      if (motivation) member.motivation = motivation;
      member.lastEditedByAdminAt = new Date().toISOString();

      if (window.ClubDatabase && typeof window.ClubDatabase.provisionMember === "function") {
        window.ClubDatabase.provisionMember(member);
      }
    }

    saveClubData(data);
    this.closeEditDossierModal();
    this.renderApplicationsTable();
    this.renderMembersAccountsTable();
    this.renderMetrics();
    showToast(`"${fullName}" məlumatları Sədr tərəfindən uğurla yeniləndi!`, "success");

    // Canlı yayım və bulud sinxronizasiyası
    const syncPayload = {
      action: "UPDATE_MEMBER_DOSSIER",
      application: app,
      member: member,
      timestamp: Date.now()
    };

    if (window.SyncEngine) window.SyncEngine.broadcast("UPDATE_MEMBER_DOSSIER", syncPayload);

    try {
      fetch("/api/sync", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(syncPayload)
      }).catch(e => console.warn("Admin dossier update sync warning:", e));
    } catch (e) {}
  },

  // ==========================================
  // BULUD SİNXRONİZASİYASI (CROSS-DEVICE CLOUD SYNC)
  // ==========================================

  async syncFromCloud(silent = false) {
    const btn = document.getElementById("btnCloudSyncPresident");
    const originalBtnHtml = btn ? btn.innerHTML : "";
    if (btn && !silent) {
      btn.innerHTML = `<i class="fa-solid fa-arrows-rotate fa-spin text-cyan-400 text-sm"></i> Sinxronlaşdırılır...`;
      btn.disabled = true;
    }

    try {
      if (typeof fetch !== "function") return;

      const data = getClubData();
      data.members = data.members || [];
      data.applications = data.applications || [];
      data.deletedAppIds = data.deletedAppIds || [];
      data.deletedMemberIds = data.deletedMemberIds || [];
      let updatedCount = 0;
      let newIncomingNames = [];

      // 1. Edge Serverless Gateway (/api/sync) ilə sinxronizasiya
      try {
        const res = await fetch("/api/sync?action=GET_ALL");
        if (res.ok) {
          const result = await res.json();
          if (result && result.success) {
            // Silinmiş reyestrləri birləşdir
            if (Array.isArray(result.deletedAppIds)) {
              result.deletedAppIds.forEach(id => {
                if (!data.deletedAppIds.includes(id)) data.deletedAppIds.push(id);
              });
            }
            if (Array.isArray(result.deletedMemberIds)) {
              result.deletedMemberIds.forEach(id => {
                if (!data.deletedMemberIds.includes(id)) data.deletedMemberIds.push(id);
              });
            }

            // Silinmiş qeydləri dərhal yerli massivlərdən təmizlə
            data.applications = data.applications.filter(a => !data.deletedAppIds.includes(a.id));
            data.members = data.members.filter(m => !data.deletedMemberIds.includes(m.id));

            // A) Üzvlər
            if (Array.isArray(result.members)) {
              result.members.forEach((serverMem) => {
                if (!serverMem || !serverMem.username) return;
                if (data.deletedMemberIds.includes(serverMem.id)) return;
                const idx = data.members.findIndex(
                  (m) =>
                    m.id === serverMem.id ||
                    (m.username && m.username.toLowerCase() === serverMem.username.toLowerCase()) ||
                    (m.email && serverMem.email && m.email.toLowerCase() === serverMem.email.toLowerCase())
                );
                if (idx === -1) {
                  data.members.unshift(serverMem);
                  updatedCount++;
                  if (window.ClubDatabase) window.ClubDatabase.provisionMember(serverMem);
                } else {
                  // Status qorunması: Əgər lokalda artıq "Aktiv"dirsə, serverdən gələn köhnə statusla əvəz etmə
                  if (data.members[idx].status === "Aktiv" && serverMem.status !== "Aktiv") {
                    serverMem.status = "Aktiv";
                  }
                  if (serverMem.password && !data.members[idx].password) {
                    data.members[idx].password = serverMem.password;
                  }
                  if (serverMem.photo && !data.members[idx].photo) {
                    data.members[idx].photo = serverMem.photo;
                    updatedCount++;
                  }
                }
              });
            }

            // B) Müraciətlər
            if (Array.isArray(result.applications)) {
              result.applications.forEach((serverApp) => {
                if (!serverApp || !serverApp.id) return;
                if (data.deletedAppIds.includes(serverApp.id)) return;
                const idx = data.applications.findIndex(
                  (a) =>
                    a.id === serverApp.id ||
                    (a.username && serverApp.username && a.username.toLowerCase() === serverApp.username.toLowerCase()) ||
                    (a.email && serverApp.email && a.email.toLowerCase() === serverApp.email.toLowerCase())
                );
                if (idx === -1) {
                  if (serverApp.status !== "Təsdiqləndi" && serverApp.status !== "Rədd edildi") {
                    serverApp.status = "Gözləyir";
                  }
                  data.applications.unshift(serverApp);
                  updatedCount++;
                  newIncomingNames.push(serverApp.fullName);
                  if (window.ClubDatabase) window.ClubDatabase.provisionMember(serverApp);
                } else {
                  // Status qorunması: Əgər lokalda artıq "Təsdiqləndi"dirsə, heç vaxt "Gözləyir"ə qaytarma!
                  if (data.applications[idx].status === "Təsdiqləndi") {
                    // Qoru
                  } else if (serverApp.status === "Təsdiqləndi") {
                    data.applications[idx].status = "Təsdiqləndi";
                    updatedCount++;
                  }
                  if (serverApp.photo && !data.applications[idx].photo) {
                    data.applications[idx].photo = serverApp.photo;
                    updatedCount++;
                  }
                }
              });
            }

            // C) Tapşırıqlar
            if (Array.isArray(result.tasks)) {
              data.tasks = data.tasks || [];
              result.tasks.forEach((serverTask) => {
                if (!serverTask || !serverTask.id) return;
                const idx = data.tasks.findIndex(t => t.id === serverTask.id);
                if (idx === -1) {
                  data.tasks.unshift(serverTask);
                  updatedCount++;
                } else {
                  data.tasks[idx] = { ...data.tasks[idx], ...serverTask };
                }
              });
            }
          }
        }
      } catch (errApi) {
        console.warn("[PresidentPortal] /api/sync oxuma bildirişi:", errApi);
      }

      // 2. Canlı ntfy Bulud Şinindən (Real-time Cloud Bus) birbaşa oxu (Yalnız real müraciətlər)
      try {
        window._alreadyNotifiedIncomingAppIds = window._alreadyNotifiedIncomingAppIds || new Set();
        (data.applications || []).forEach(a => { if (a && a.id) window._alreadyNotifiedIncomingAppIds.add(a.id); });

        const isMockOrTest = (item) => {
          if (!item) return true;
          const id = (item.id || "").toLowerCase();
          if (id === "dummy" || id === "prototype-dummy") return true;
          return false;
        };

        const ntfyRes = await fetch("https://ntfy.sh/carboxmol_bioinfo_cloud_sync_v3_secure/json?poll=1");
        if (ntfyRes.ok) {
          const text = await ntfyRes.text();
          const lines = text.trim().split("\n").filter(Boolean);
          lines.forEach((line) => {
            try {
              const parsed = JSON.parse(line);
              let payload = null;
              if (parsed.message) {
                if (typeof parsed.message === "object") payload = parsed.message;
                else if (typeof parsed.message === "string" && parsed.message.trim().startsWith("{")) {
                  try { payload = JSON.parse(parsed.message); } catch (e) {}
                }
              } else if (parsed && typeof parsed === "object") {
                payload = parsed;
              }
              if (!payload) return;

              if (payload && (payload.action === "REGISTER_STUDENT" || payload.action === "REGISTER_MEMBER")) {
                const incomingApp = payload.application;
                const incomingMem = payload.member;
                if (isMockOrTest(incomingApp) || isMockOrTest(incomingMem)) return;

                // Silinmişdirsə bərpa etmə!
                if (incomingApp && data.deletedAppIds.includes(incomingApp.id)) return;
                if (incomingMem && data.deletedMemberIds.includes(incomingMem.id)) return;

                if (incomingApp && incomingApp.id) {
                  // Qalıcı ehtiyat yaddaşa dərhal yaz
                  try {
                    let perm = JSON.parse(localStorage.getItem("carboxmol_permanent_applications") || "[]");
                    if (!perm.some(p => p.id === incomingApp.id)) {
                      perm.unshift(incomingApp);
                      localStorage.setItem("carboxmol_permanent_applications", JSON.stringify(perm));
                    }
                  } catch (e) {}

                  const existingIdx = data.applications.findIndex(
                    (a) =>
                      a.id === incomingApp.id ||
                      (a.username && incomingApp.username && a.username.toLowerCase() === incomingApp.username.toLowerCase()) ||
                      (a.email && incomingApp.email && a.email.toLowerCase() === incomingApp.email.toLowerCase())
                  );
                  if (existingIdx === -1) {
                    // Sədr təsdiqi olana qədər status mütləq "Gözləyir" qalmalıdır!
                    if (incomingApp.status !== "Təsdiqləndi" && incomingApp.status !== "Rədd edildi") {
                      incomingApp.status = "Gözləyir";
                    }
                    data.applications.unshift(incomingApp);
                    updatedCount++;
                    if (!window._alreadyNotifiedIncomingAppIds.has(incomingApp.id)) {
                      newIncomingNames.push(incomingApp.fullName);
                      window._alreadyNotifiedIncomingAppIds.add(incomingApp.id);
                    }
                    if (window.ClubDatabase) window.ClubDatabase.provisionMember(incomingApp);
                  } else {
                    // Əgər mövcuddursa, status Sədr tərəfindən idarə olunur
                    if (data.applications[existingIdx].status === "Gözləyir") {
                      // Gözləyir statusunu qoru
                    }
                  }
                }
                if (incomingMem && incomingMem.username) {
                  const memIdx = data.members.findIndex(
                    (m) =>
                      m.id === incomingMem.id ||
                      (m.username && m.username.toLowerCase() === incomingMem.username.toLowerCase()) ||
                      (m.email && incomingMem.email && m.email.toLowerCase() === incomingMem.email.toLowerCase())
                  );
                  if (memIdx === -1) {
                    if (incomingMem.status !== "Aktiv" && incomingMem.status !== "Rədd edildi") {
                      incomingMem.status = "Gözləyir";
                    }
                    data.members.unshift(incomingMem);
                    if (window.ClubDatabase) window.ClubDatabase.provisionMember(incomingMem);
                  }
                }
              } else if (payload && (payload.action === "DELETE_APPLICATION" || payload.action === "APPLICATION_DELETED")) {
                if (payload.appId) {
                  if (!data.deletedAppIds.includes(payload.appId)) data.deletedAppIds.push(payload.appId);
                  data.applications = data.applications.filter(a => a.id !== payload.appId);
                  updatedCount++;
                }
                if (payload.memberId) {
                  if (!data.deletedMemberIds.includes(payload.memberId)) data.deletedMemberIds.push(payload.memberId);
                  data.members = data.members.filter(m => m.id !== payload.memberId);
                  updatedCount++;
                }
              } else if (payload && (payload.action === "DELETE_MEMBER" || payload.action === "MEMBER_DELETED")) {
                if (payload.memberId) {
                  if (!data.deletedMemberIds.includes(payload.memberId)) data.deletedMemberIds.push(payload.memberId);
                  data.members = data.members.filter(m => m.id !== payload.memberId);
                  updatedCount++;
                }
                if (payload.appId) {
                  if (!data.deletedAppIds.includes(payload.appId)) data.deletedAppIds.push(payload.appId);
                  data.applications = data.applications.filter(a => a.id !== payload.appId);
                  updatedCount++;
                }
              } else if (payload && payload.action === "UPDATE_STATUS" && payload.appId && payload.status) {
                const targetApp = data.applications.find(a => a.id === payload.appId);
                if (targetApp && targetApp.status !== payload.status) {
                  targetApp.status = payload.status;
                  if (payload.status === "Təsdiqləndi") {
                    const targetMem = data.members.find(m => m.id === targetApp.memberId || (m.username && targetApp.username && m.username.toLowerCase() === targetApp.username.toLowerCase()));
                    if (targetMem) targetMem.status = "Aktiv";
                  }
                  updatedCount++;
                }
              }
 else if (payload && payload.action === "MEMBER_PHOTO_UPDATED") {
                const { memberId, username, photo } = payload;
                if (memberId || username) {
                  const m = data.members.find(m => (memberId && m.id === memberId) || (username && m.username && m.username.toLowerCase() === username.toLowerCase()));
                  if (m) { m.photo = photo || ""; updatedCount++; }
                  const a = data.applications.find(a => (memberId && a.memberId === memberId) || (username && a.username && a.username.toLowerCase() === username.toLowerCase()));
                  if (a) { a.photo = photo || ""; updatedCount++; }
                }
              } else if (payload && (payload.action === "UPDATE_MEMBER_DOSSIER" || payload.action === "MEMBER_PROFILE_UPDATED")) {
                const updatedApp = payload.application;
                const updatedMem = payload.member;
                if (updatedApp && updatedApp.id && !isMockOrTest(updatedApp)) {
                  const aIdx = data.applications.findIndex(a => a.id === updatedApp.id || (a.username && updatedApp.username && a.username.toLowerCase() === updatedApp.username.toLowerCase()));
                  const preservedAppPhoto = updatedApp.photo || (aIdx !== -1 ? data.applications[aIdx].photo : "") || "";
                  if (aIdx !== -1) {
                    data.applications[aIdx] = { ...data.applications[aIdx], ...updatedApp, photo: preservedAppPhoto };
                    updatedCount++;
                  } else {
                    data.applications.unshift({ ...updatedApp, photo: preservedAppPhoto });
                    updatedCount++;
                  }
                  if (window.ClubDatabase) window.ClubDatabase.provisionMember(data.applications[aIdx !== -1 ? aIdx : 0]);
                }
                if (updatedMem && updatedMem.username && !isMockOrTest(updatedMem)) {
                  const mIdx = data.members.findIndex(m => m.id === updatedMem.id || (m.username && updatedMem.username && m.username.toLowerCase() === updatedMem.username.toLowerCase()));
                  const preservedMemPhoto = updatedMem.photo || (mIdx !== -1 ? data.members[mIdx].photo : "") || "";
                  if (mIdx !== -1) {
                    data.members[mIdx] = { ...data.members[mIdx], ...updatedMem, photo: preservedMemPhoto };
                    updatedCount++;
                  } else {
                    data.members.unshift({ ...updatedMem, photo: preservedMemPhoto });
                    updatedCount++;
                  }
                  if (window.ClubDatabase) window.ClubDatabase.provisionMember(data.members[mIdx !== -1 ? mIdx : 0]);
                }
              } else if (payload && (payload.action === "TASK_CREATED" || payload.action === "TASK_UPDATED")) {
                if (payload.task && payload.task.id) {
                  data.tasks = data.tasks || [];
                  const tIdx = data.tasks.findIndex(t => t.id === payload.task.id);
                  if (tIdx === -1) {
                    data.tasks.unshift(payload.task);
                    updatedCount++;
                  } else {
                    data.tasks[tIdx] = { ...data.tasks[tIdx], ...payload.task };
                    updatedCount++;
                  }
                }
              } else if (payload && payload.action === "TASK_DELETED" && payload.taskId) {
                data.tasks = data.tasks || [];
                const bLen = data.tasks.length;
                data.tasks = data.tasks.filter(t => t.id !== payload.taskId);
                if (data.tasks.length !== bLen) updatedCount++;
              } else if (payload && payload.action === "TASK_SUBMISSION_ADDED" && payload.taskId && payload.submission) {
                data.tasks = data.tasks || [];
                const targetTask = data.tasks.find(t => t.id === payload.taskId);
                if (targetTask) {
                  targetTask.submissions = targetTask.submissions || [];
                  const sIdx = targetTask.submissions.findIndex(s => s.id === payload.submission.id || (s.studentEmail && s.studentEmail === payload.submission.studentEmail));
                  if (sIdx === -1) targetTask.submissions.push(payload.submission);
                  else targetTask.submissions[sIdx] = { ...targetTask.submissions[sIdx], ...payload.submission };
                  updatedCount++;
                }
              }
            } catch (e) {}
          });
        }
      } catch (errNtfy) {
        console.warn("[PresidentPortal] ntfy oxuma bildirişi:", errNtfy);
      }

      if (updatedCount > 0) {
        saveClubData(data);
        this.renderMetrics();
        this.renderApplicationsTable();
        this.renderMembersAccountsTable();
        this.renderTasksList();
        newIncomingNames = newIncomingNames.filter(n => !n.toLowerCase().includes("test"));
        if (newIncomingNames.length > 0) {
          showToast(`🔔 Yeni müraciət daxil oldu: ${newIncomingNames.join(", ")} (Status: Gözləyir)`, "success");
        } else if (!silent) {
          showToast(`Buluddan ${updatedCount} yeni qeydiyyat/tapşırıq uğurla sinxronlaşdırıldı! (Cəmi: ${data.members.length} üzv)`, "success");
        }
      } else {
        saveClubData(data);
        this.renderMetrics();
        this.renderApplicationsTable();
        this.renderMembersAccountsTable();
        this.renderTasksList();
        if (!silent) {
          showToast(`Məlumatlar bulud mərkəzi ilə tam sinxronlaşdırıldı (Cəmi: ${data.members.length} üzv, ${data.applications.length} müraciət). Bütün PWA və Veb cihazları eyniləşdirildi!`, "success");
        }
      }
    } catch (err) {
      console.warn("[PresidentPortal] syncFromCloud bildirişi:", err);
      if (!silent) {
        showToast("Bulud serveri ilə əlaqə qurula bilmədi (Lokal bazadan istifadə edilir).", "warning");
      }
    } finally {
      if (btn && !silent) {
        btn.innerHTML = originalBtnHtml;
        btn.disabled = false;
      }
    }
  },

  autoSyncTimer: null,

  startAutoSync() {
    if (this.autoSyncTimer) return;
    this.syncFromCloud(true);
    this.autoSyncTimer = setInterval(() => {
      const presSec = document.getElementById("president-portal");
      const isVisible = presSec && !presSec.classList.contains("hidden") && presSec.style.display !== "none";
      if (!document.hidden && navigator.onLine && isVisible) {
        this.syncFromCloud(true);
      }
    }, 15000);
  },

  stopAutoSync() {
    if (this.autoSyncTimer) {
      clearInterval(this.autoSyncTimer);
      this.autoSyncTimer = null;
    }
  },

  // ==========================================
  // YENİ TƏLƏBƏ HESABI & MÜRACİƏT DAXİL EDİLMƏSİ (MODAL)
  // ==========================================

  openAddStudentModal() {
    const modal = document.getElementById("addStudentModal");
    if (!modal) return;
    const form = document.getElementById("addStudentForm");
    if (form) form.reset();
    const passInput = document.getElementById("asPassword");
    if (passInput) passInput.value = "wcu" + Math.floor(100000 + Math.random() * 900000);
    const rawBox = document.getElementById("importEmailRawText");
    if (rawBox) rawBox.value = "";
    modal.classList.remove("hidden");
  },

  openCreateMemberModal() {
    this.openAddStudentModal();
  },

  // ==========================================
  // E-POÇTDAN TƏK VƏ TOPLU İDXAL SİSTEMİ (UNIVERSAL RESILIENT BULK EMAIL PARSER)
  // ==========================================

  parseEmailTextToStudents(rawText) {
    if (!rawText || !rawText.trim()) return [];
    const text = rawText.replace(/\r\n/g, "\n").trim();

    // 1. JSON format yoxlanışı (FormSubmit API və ya birbaşa eksport)
    if ((text.startsWith("[") && text.endsWith("]")) || (text.startsWith("{") && text.endsWith("}"))) {
      try {
        const parsed = JSON.parse(text);
        let items = [];
        if (Array.isArray(parsed)) items = parsed;
        else if (Array.isArray(parsed.data)) items = parsed.data;
        else if (Array.isArray(parsed.submissions)) items = parsed.submissions;
        else if (typeof parsed === "object") items = [parsed];

        if (items.length > 0) {
          const res = items.map(item => this._normalizeStudentObject(item)).filter(s => s && (s.fullName || s.email));
          if (res.length > 0) return res;
        }
      } catch (e) {
        // Normal mətn kimi davam et
      }
    }

    // 2. Çoxlu tələbə müraciət bloklarını bölmək (Delimiters)
    const delimiterRegex = /(?:[-=]{3,}|_{3,}|\*{3,}|(?=🧬\s*Yeni\s*WCU\s*Bioinformatika)|(?=(?:^|\n)\s*(?:Ad,\s*Soyad\s*və\s*Ata\s*Adı|Ad\s*Soyad|Adı,\s*Soyadı)\s*[:=\t]))/gi;
    let rawChunks = text.split(delimiterRegex).map(c => c.trim()).filter(c => c.length > 15);
    if (rawChunks.length === 0) rawChunks = [text];

    const students = [];
    rawChunks.forEach(chunk => {
      const s = this._parseSingleChunk(chunk);
      if (s && (s.fullName || s.email)) students.push(s);
    });

    return students;
  },

  _normalizeStudentObject(obj) {
    if (!obj || typeof obj !== "object") return null;

    // FormSubmit submission obyektləri "form_data" daxilində olur
    const rawData = (obj.form_data && typeof obj.form_data === "object") ? { ...obj, ...obj.form_data } : obj;
    const submittedDate = (obj.submitted_at && obj.submitted_at.date) 
      ? obj.submitted_at.date.slice(0, 10) 
      : (obj.date || new Date().toISOString().slice(0, 10));

    const findVal = (patterns) => {
      for (const p of patterns) {
        for (const k of Object.keys(rawData)) {
          if (p.test(k) && rawData[k] !== undefined && String(rawData[k]).trim() !== "") {
            return String(rawData[k]).trim();
          }
        }
      }
      return "";
    };

    let fullName = findVal([/ad[,\s]*soyad/i, /tam\s*ad/i, /^name$/i, /^fullname$/i, /ad[ıi]/i]);
    let email = findVal([/e-?po[cç]t/i, /^email$/i, /^mail$/i]);
    let phone = findVal([/telefon/i, /n[oö]mr[eə]/i, /^phone$/i, /whatsapp/i]);
    let username = findVal([/login/i, /istifad[eə][cç]i/i, /^username$/i, /^user$/i]);
    let password = findVal([/[sş]ifr[eə]/i, /^password$/i, /^pass$/i]);
    let university = findVal([/universitet/i, /ali\s*m[eə]kt[eə]b/i, /^university$/i, /^school$/i]);
    let facAndMajor = findVal([/fak[uü]lt[eə]\s*v[eə]\s*ixtisas/i, /fak[uü]lt[eə]/i, /^faculty$/i]);
    let major = findVal([/ixtisas/i, /^major$/i]);
    let progSkill = findVal([/proqramla[sş]d[ıi]rma/i, /^programming/i, /^skill/i]);
    let studyLang = findVal([/t[eə]dris\s*dili/i, /dil/i, /^language$/i, /^lang$/i]);
    let motivation = findVal([/motivasiya/i, /m[eə]qs[eə]d/i, /^motivation$/i, /^message$/i]);
    let yearGoal = findVal([/1\s*illik/i, /h[eə]d[eə]f/i, /^goal$/i]);
    let photo = findVal([/photo/i, /avatar/i, /[sş][eə]kil/i]);

    return this._buildStudentResult({
      fullName, email, phone, username, password, university, facAndMajor, major, progSkill, studyLang, motivation, yearGoal, photo, submittedDate
    });
  },

  _parseSingleChunk(chunk) {
    const lines = chunk.split("\n").map(l => l.trim()).filter(Boolean);
    const dict = {};

    const labelMatchers = [
      { key: "fullName", regex: /^(?:Ad,\s*Soyad\s*və\s*Ata\s*Adı|Ad\s*Soyad|Adı,\s*Soyadı|Tam\s*Ad|Ad\s*və\s*Soyad|Name|Full\s*Name)$/i },
      { key: "email", regex: /^(?:Tələbə\s*E-poçtu|E-poçt|Email|E-mail|Mail)$/i },
      { key: "phone", regex: /^(?:Əlaqə\s*Nömrəsi(?:\s*\(WhatsApp\))?|Telefon(?:\s*Nömrəsi)?|Phone|WhatsApp)$/i },
      { key: "username", regex: /^(?:Təyin\s*Edilmiş\s*Login(?:\s*\(@username\))?|Login|İstifadəçi\s*Adı|Username)$/i },
      { key: "password", regex: /^(?:Təyin\s*Edilmiş\s*Şifrə(?:\s*\(Klub\s*Sədrinə\s*Açıq\))?|Şifrə|Password)$/i },
      { key: "university", regex: /^(?:Universitet|Ali\s*Məktəb|Təhsil\s*Müəssisəsi|University)$/i },
      { key: "facAndMajor", regex: /^(?:Fakültə\s*və\s*İxtisas|Fakültə|Faculty)$/i },
      { key: "major", regex: /^(?:İxtisas|Major|İxtisas\s*Adı)$/i },
      { key: "progSkill", regex: /^(?:Proqramlaşdırma\s*Səviyyəsi|Proqramlaşdırma\s*Biliyi|Programming\s*Skill)$/i },
      { key: "studyLang", regex: /^(?:Tədris\s*Dili(?:\s*və\s*ÜÖMG)?|Tədris\s*Dili|Bölmə|Language)$/i },
      { key: "motivation", regex: /^(?:Motivasiya\s*Məktubu|Motivasiya\s*və\s*Məqsəd|Motivasiya|Niyə\s*Qoşulmaq\s*İstəyirsiniz\??|Motivation)$/i },
      { key: "yearGoal", regex: /^(?:1\s*İllik\s*Şəxsi\s*Hədəf|1\s*İllik\s*Hədəf|Klubdan\s*Gözlənti|Hədəf|Goal)$/i }
    ];

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];

      // A) Tab-separated (Gmail/Outlook cədvəli kopyalananda \t ilə yapışır)
      if (line.includes("\t")) {
        const parts = line.split("\t").map(p => p.trim()).filter(Boolean);
        if (parts.length >= 2) {
          const kStr = parts[0];
          const vStr = parts.slice(1).join(" ");
          const match = labelMatchers.find(m => m.regex.test(kStr.replace(/[:=]+$/, "").trim()));
          if (match) {
            dict[match.key] = vStr;
            continue;
          }
        }
      }

      // B) İki nöqtə və ya bərabərdir (Key: Value və ya Key = Value)
      const colonIdx = line.search(/[:=]/);
      if (colonIdx > 0) {
        const kStr = line.slice(0, colonIdx).trim();
        const vStr = line.slice(colonIdx + 1).trim();
        const match = labelMatchers.find(m => m.regex.test(kStr));
        if (match && vStr) {
          dict[match.key] = vStr;
          continue;
        }
      }

      // C) Növbəli sətirlər (Line 1: Field name, Line 2: Value)
      const labelMatch = labelMatchers.find(m => m.regex.test(line.replace(/[:=]+$/, "").trim()));
      if (labelMatch && i + 1 < lines.length) {
        const nextLine = lines[i + 1];
        const nextIsLabel = labelMatchers.some(m => m.regex.test(nextLine.replace(/[:=]+$/, "").trim()));
        if (!nextIsLabel && !nextLine.includes("\t")) {
          dict[labelMatch.key] = nextLine;
          i++; // növbəti sətri ötür
          continue;
        }
      }
    }

    // Əgər e-poçt və ya telefon hələ də tapılmayıbsa, bütün mətni regex ilə süz
    if (!dict.email) {
      const emailM = chunk.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/);
      if (emailM) dict.email = emailM[0];
    }
    if (!dict.phone) {
      const phoneM = chunk.match(/(?:\+?994|0)\s*(?:[1-9][0-9])\s*[\d\s-]{5,9}/);
      if (phoneM) dict.phone = phoneM[0];
    }
    if (!dict.fullName) {
      for (const line of lines) {
        if (!line.includes("@") && !line.includes(":") && !line.includes("=") && !line.includes("\t") && !line.includes("http") && line.split(" ").length >= 2 && line.length < 50) {
          const isLabel = labelMatchers.some(m => m.regex.test(line));
          if (!isLabel) {
            dict.fullName = line;
            break;
          }
        }
      }
    }

    return this._buildStudentResult(dict);
  },

  _buildStudentResult(d) {
    let fullName = d.fullName ? d.fullName.trim() : "";
    let email = d.email ? d.email.trim() : "";
    let phone = d.phone ? d.phone.trim() : "";
    let username = d.username ? d.username.replace(/^@/, "").trim() : "";
    let password = d.password ? d.password.trim() : "";
    let university = d.university ? d.university.trim() : "Qərbi Kaspi Universiteti (WCU)";
    let facAndMajor = d.facAndMajor ? d.facAndMajor.trim() : "";
    let major = d.major ? d.major.trim() : "";
    let progSkill = d.progSkill ? d.progSkill.trim() : "Orta səviyyə (Python)";
    let studyLang = d.studyLang ? d.studyLang.trim() : "Azərbaycan bölməsi";
    let motivation = d.motivation ? d.motivation.trim() : "Bioinformatika klubunda laboratoriya layihələrində fəal iştirak etmək.";
    let yearGoal = d.yearGoal ? d.yearGoal.trim() : motivation;

    if (!fullName && email) {
      const parts = email.split("@")[0].split(/[._]/);
      fullName = parts.map(p => p.charAt(0).toUpperCase() + p.slice(1)).join(" ");
    }

    if (!fullName && !email) return null;
    if (!fullName) fullName = "Bioinformatika Tələbəsi";

    let faculty = "(WCU) - Yüksək Texnologiyalar və Təbiət Elmləri Məktəbi";
    let course = "III Kurs";

    if (facAndMajor) {
      if (facAndMajor.includes("-")) {
        const parts = facAndMajor.split("-");
        faculty = parts[0].trim();
        major = parts.slice(1).join("-").trim();
      } else {
        faculty = facAndMajor;
      }
    }

    if (!major) major = "Biologiya";
    if (major.includes("(") && major.includes(")")) {
      const cMatch = major.match(/\(([^)]+)\)/);
      if (cMatch) course = cMatch[1];
    }

    if (!username) {
      username = fullName.toLowerCase().replace(/[^a-z0-9]/g, "") + Math.floor(10 + Math.random() * 89);
    }

    if (!password) {
      password = "wcu" + Math.floor(100000 + Math.random() * 900000);
    }

    return {
      fullName,
      email: email || `${username}@wcu.edu.az`,
      phone: phone || "",
      username,
      password,
      university,
      faculty,
      major,
      course,
      progSkill,
      studyLang,
      motivation,
      yearGoal,
      dateApplied: d.submittedDate || new Date().toISOString().slice(0, 10),
      photo: d.photo || "",
      status: "Gözləyir"
    };
  },

  openBulkEmailImportModal() {
    const modal = document.getElementById("bulkEmailImportModal");
    if (!modal) return;
    const input = document.getElementById("bulkEmailRawInput");
    if (input) input.value = "";
    const badge = document.getElementById("bulkParsedCountBadge");
    if (badge) {
      badge.innerText = "Hələlik heç bir müraciət aşkar edilməyib";
      badge.className = "text-[11px] font-bold text-slate-400";
    }
    const previewContainer = document.getElementById("bulkParsedPreviewContainer");
    if (previewContainer) previewContainer.classList.add("hidden");
    const commitBtn = document.getElementById("btnCommitBulkImport");
    if (commitBtn) commitBtn.disabled = true;

    // Yadda saxlanılmış FormSubmit API açarını doldur
    const apiKeyInput = document.getElementById("formSubmitApiKeyInput");
    if (apiKeyInput) {
      apiKeyInput.value = localStorage.getItem("wcu_formsubmit_api_key") || "";
    }

    this._parsedBulkStudents = [];
    modal.classList.remove("hidden");

    // Düyməyə basan kimi buluddan və serverdən ən son müraciətləri dərhal gətir
    try {
      this.syncFromCloud(false);
    } catch (e) {
      console.warn("openBulkEmailImportModal sync error:", e);
    }
  },

  async pasteFromClipboard() {
    try {
      const text = await navigator.clipboard.readText();
      const input = document.getElementById("bulkEmailRawInput");
      if (input && text) {
        input.value = text;
        this.handleBulkEmailInputLive();
        this.previewBulkEmailImport();
        showToast("Mətn mübadilə buferindən (Clipboard) uğurla yapışdırıldı!", "success");
      } else {
        showToast("Mübadilə buferi boşdur.", "info");
      }
    } catch (err) {
      showToast("Buferdən oxuma icazəsi verilmədi. Zəhmət olmasa xanaya Ctrl+V / Cmd+V edin.", "warning");
    }
  },

  handleBulkEmailInputLive() {
    const input = document.getElementById("bulkEmailRawInput");
    if (!input) return;
    const text = input.value.trim();
    const students = this.parseEmailTextToStudents(text);
    const badge = document.getElementById("bulkParsedCountBadge");
    if (badge) {
      if (students.length === 0) {
        badge.innerText = text ? "Məlumatlar aşkarlanmadı (formatı yoxlayın)" : "Hələlik heç bir müraciət aşkar edilməyib";
        badge.className = "text-[11px] font-bold text-slate-400";
      } else {
        badge.innerText = `✓ ${students.length} tələbə müraciəti aşkar edildi!`;
        badge.className = "text-[11px] font-bold text-emerald-400";
      }
    }
  },

  previewBulkEmailImport() {
    const input = document.getElementById("bulkEmailRawInput");
    if (!input || !input.value.trim()) {
      showToast("Zəhmət olmasa e-poçt mətnini xanaya yapışdırın.", "warning");
      return;
    }

    const students = this.parseEmailTextToStudents(input.value);
    this._parsedBulkStudents = students;

    const container = document.getElementById("bulkParsedPreviewContainer");
    const list = document.getElementById("bulkPreviewList");
    const countSpan = document.getElementById("bulkPreviewCount");
    const commitBtn = document.getElementById("btnCommitBulkImport");

    if (students.length === 0) {
      showToast("Mətndə heç bir tələbə müraciəti aşkarlanmadı. Formatı yoxlayın.", "warning");
      if (container) container.classList.add("hidden");
      if (commitBtn) commitBtn.disabled = true;
      return;
    }

    if (countSpan) countSpan.innerText = students.length;
    if (commitBtn) commitBtn.disabled = false;
    if (container) container.classList.remove("hidden");

    if (list) {
      list.innerHTML = students.map((s, idx) => `
        <div class="p-3 bg-slate-950/90 rounded-xl border border-slate-800 flex items-center justify-between gap-3 text-xs hover:border-teal-500/40 transition">
          <div class="flex items-center gap-3 min-w-0">
            <div class="w-8 h-8 rounded-lg bg-teal-950 border border-teal-800 flex items-center justify-center font-bold text-teal-300 shrink-0 text-xs">
              #${idx + 1}
            </div>
            <div class="min-w-0">
              <div class="font-extrabold text-white truncate flex items-center gap-2">
                <span>${escapeHtml(s.fullName)}</span>
                <span class="text-[9px] bg-amber-500/20 text-amber-300 px-1.5 py-0.5 rounded font-bold border border-amber-500/30">🟡 Gözləyir</span>
              </div>
              <div class="text-[11px] text-teal-400 truncate">${escapeHtml(s.email)} • @${escapeHtml(s.username)}</div>
              <div class="text-[10px] text-slate-400 truncate">${escapeHtml(s.faculty)} - ${escapeHtml(s.major)} (${escapeHtml(s.course)})</div>
            </div>
          </div>
          <div class="text-right shrink-0">
            <span class="font-mono text-[11px] text-amber-300 bg-slate-900 px-2 py-0.5 rounded border border-amber-500/30 font-bold block">${escapeHtml(s.password)}</span>
            <span class="text-[10px] text-amber-400 font-semibold mt-1 block">Sədr Təsdiqi Gözləyəcək</span>
          </div>
        </div>
      `).join("");
    }

    showToast(`${students.length} tələbə müraciəti uğurla təhlil edildi!`, "success");
  },

  commitBulkEmailImport() {
    const students = this._parsedBulkStudents || [];
    if (students.length === 0) {
      showToast("İdxal ediləcək heç bir tələbə yoxdur.", "warning");
      return;
    }

    const targetStatus = document.getElementById("bulkImportTargetStatus")?.value || "Gözləyir";
    const data = getClubData();
    data.members = data.members || [];
    data.applications = data.applications || [];

    let importedCount = 0;

    students.forEach((s, idx) => {
      const memberId = "mem-" + (Date.now() + idx);
      const appId = "app-" + (Date.now() + idx);

      // Şəkillərin heç vaxt silinməməsi üçün mövcud şəkli qoru
      const existingMem = data.members.find(m => 
        (m.username && m.username.toLowerCase() === s.username.toLowerCase()) ||
        (m.email && m.email.toLowerCase() === s.email.toLowerCase())
      );
      const existingApp = data.applications.find(a => 
        (a.username && a.username.toLowerCase() === s.username.toLowerCase()) ||
        (a.email && a.email.toLowerCase() === s.email.toLowerCase())
      );
      const preservedPhoto = (existingMem && existingMem.photo) || (existingApp && existingApp.photo) || s.photo || "";

      const newMember = {
        id: (existingMem && existingMem.id) || memberId,
        fullName: s.fullName,
        email: s.email,
        phone: s.phone,
        username: s.username,
        password: s.password,
        role: (existingMem && existingMem.role) || "Klub Üzvü",
        university: s.university || (existingMem && existingMem.university) || "Qərbi Kaspi Universiteti (WCU)",
        faculty: s.faculty || (existingMem && existingMem.faculty),
        major: s.major || (existingMem && existingMem.major),
        course: s.course || (existingMem && existingMem.course),
        joinDate: (existingMem && existingMem.joinDate) || new Date().toLocaleDateString('az-AZ'),
        registeredAt: (existingMem && existingMem.registeredAt) || new Date().toISOString().slice(0, 10),
        status: targetStatus === "Təsdiqləndi" ? "Aktiv" : ((existingMem && existingMem.status) || "Gözləyir"),
        photo: preservedPhoto,
        skills: (existingMem && existingMem.skills && existingMem.skills.length > 0) ? existingMem.skills : ["Python", "Bioinformatika"],
        motivation: s.motivation || (existingMem && existingMem.motivation),
        yearGoal: s.yearGoal || (existingMem && existingMem.yearGoal),
        researchTracks: (existingMem && existingMem.researchTracks && existingMem.researchTracks.length > 0) ? existingMem.researchTracks : ["Genom Analizi"],
        customTasks: (existingMem && existingMem.customTasks) || [],
        notes: (existingMem && existingMem.notes) || []
      };

      const newApp = {
        id: (existingApp && existingApp.id) || appId,
        memberId: (existingMem && existingMem.id) || memberId,
        fullName: s.fullName,
        email: s.email,
        phone: s.phone,
        username: s.username,
        password: s.password,
        university: s.university || (existingApp && existingApp.university) || "Qərbi Kaspi Universiteti (WCU)",
        faculty: s.faculty || (existingApp && existingApp.faculty),
        major: s.major || (existingApp && existingApp.major),
        course: s.course || (existingApp && existingApp.course),
        studyLang: s.studyLang || (existingApp && existingApp.studyLang),
        programmingSkill: s.progSkill || (existingApp && existingApp.programmingSkill),
        tools: (existingApp && existingApp.tools) || ["Python", "Biopython"],
        bioTools: (existingApp && existingApp.bioTools) || ["NCBI", "UniProt"],
        researchTracks: (existingApp && existingApp.researchTracks) || ["Genom Analizi"],
        roleInterest: (existingApp && existingApp.roleInterest) || "Aktiv Klub Üzvü",
        weeklyTime: (existingApp && existingApp.weeklyTime) || "Həftədə 4–6 saat",
        motivation: s.motivation || (existingApp && existingApp.motivation),
        yearGoal: s.yearGoal || (existingApp && existingApp.yearGoal),
        dateApplied: (existingApp && existingApp.dateApplied) || new Date().toISOString().slice(0, 10),
        status: targetStatus,
        adminNotes: (existingApp && existingApp.adminNotes) || "E-poçt / FormSubmit sistemindən Sədr tərəfindən idxal edildi.",
        photo: preservedPhoto
      };

      // Müraciət qeydini yenilə və ya əlavə et
      const existingAppIdx = data.applications.findIndex(a => 
        (a.username && a.username.toLowerCase() === s.username.toLowerCase()) ||
        (a.email && a.email.toLowerCase() === s.email.toLowerCase())
      );
      if (existingAppIdx !== -1) {
        const prevApp = data.applications[existingAppIdx];
        data.applications[existingAppIdx] = { 
          ...prevApp, 
          ...newApp, 
          photo: newApp.photo || prevApp.photo || "" 
        };
      } else {
        data.applications.unshift(newApp);
      }

      // Əgər təsdiqlənibsə üzv hesabını da aktiv et, əks halda gözləmədə saxla
      const existingMemIdx = data.members.findIndex(m => 
        (m.username && m.username.toLowerCase() === s.username.toLowerCase()) ||
        (m.email && m.email.toLowerCase() === s.email.toLowerCase())
      );
      if (existingMemIdx !== -1) {
        const prevMem = data.members[existingMemIdx];
        data.members[existingMemIdx] = { 
          ...prevMem, 
          ...newMember, 
          photo: newMember.photo || prevMem.photo || "" 
        };
      } else {
        data.members.unshift(newMember);
      }

      if (window.ClubDatabase) {
        window.ClubDatabase.provisionMember(data.members[existingMemIdx !== -1 ? existingMemIdx : 0]);
        window.ClubDatabase.provisionMember(data.applications[existingAppIdx !== -1 ? existingAppIdx : 0]);
      }

      importedCount++;
    });

    saveClubData(data);

    // Dərhal bulud şlüzünə PUSH et
    if (typeof fetch === "function") {
      fetch("/api/sync", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "SYNC_PUSH",
          members: data.members,
          applications: data.applications,
          tasks: data.tasks || []
        })
      }).catch(e => console.warn("[BulkImport] Cloud sync push error:", e));

      fetch("https://ntfy.sh/carboxmol_bioinfo_cloud_sync_v3_secure/publish", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "SYNC_PUSH",
          membersCount: data.members.length,
          applicationsCount: data.applications.length,
          timestamp: Date.now()
        })
      }).catch(e => console.warn("[BulkImport] ntfy broadcast error:", e));
    }

    this.renderApplicationsTable();
    this.renderMembersAccountsTable();
    this.renderMetrics();
    if (window.MembersPortal && typeof MembersPortal.renderMembersDirectory === "function") {
      MembersPortal.renderMembersDirectory();
    }

    document.getElementById("bulkEmailImportModal")?.classList.add("hidden");
    const statusNote = targetStatus === "Gözləyir" 
      ? "«Gözləyir» statusu ilə Müraciətlər cədvəlinə əlavə edildi. İstədiyiniz tələbənin qarşısındakı «Təsdiq» düyməsinə basaraq qəbul edə bilərsiniz!" 
      : "təsdiqləndi və saytda aktivləşdirildi!";
    showToast(`${importedCount} tələbə müraciəti uğurla sayta daxil edildi və ${statusNote}`, "success");
  },

  // ==========================================
  // FORMSUBMIT BULUDU İLƏ BİRBAŞA İNTEQRASİYA (DIRECT SUBMISSIONS API)
  // ==========================================

  async requestFormSubmitApiKey() {
    const email = "suleyman.hacizade.232bioing@wcu.edu.az";
    showToast("FormSubmit-dən API açarı tələb olunur...", "info");
    try {
      const res = await fetch("/api/sync", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "FORMSUBMIT_REQUEST_KEY", email })
      });
      const data = await res.json();
      if (data.success) {
        showToast("✓ API açarı FormSubmit tərəfindən " + email + " poçtunuza göndərildi! Gələn məktubdakı açarı daxil edin.", "success");
      } else {
        showToast(data.error || "Açar tələb edilərkən xəta baş verdi.", "error");
      }
    } catch (e) {
      showToast("Server xətası: " + e.message, "error");
    }
  },

  async fetchFromFormSubmitApi(manualKey) {
    const keyInput = document.getElementById("formSubmitApiKeyInput");
    const defaultKey = "fbef3c3e5ab53c64b0e0f64b6c56185c97a4d5954882c2383df82583d572bc65";
    const apiKey = (manualKey || (keyInput ? keyInput.value : "") || localStorage.getItem("wcu_formsubmit_api_key") || defaultKey).trim();

    if (keyInput && !keyInput.value) {
      keyInput.value = apiKey;
    }
    localStorage.setItem("wcu_formsubmit_api_key", apiKey);
    showToast("FormSubmit bulud arxivindən müraciətlər çəkilir...", "info");

    try {
      let result = null;

      // 1. Edge Serverless Gateway (/api/sync) vasitəsilə sorğu
      try {
        const res = await fetch("/api/sync", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ action: "FORMSUBMIT_SUBMISSIONS", apiKey })
        });
        if (res.ok) {
          result = await res.json();
        }
      } catch (errGateway) {
        console.warn("Gateway error, trying direct fetch:", errGateway);
      }

      // 2. Birbaşa FormSubmit API sorğusu (Əgər şlüzdən cavab gəlməzsə fallback)
      if (!result || !result.success || !Array.isArray(result.submissions)) {
        try {
          const directRes = await fetch(`https://formsubmit.co/api/get-submissions/${encodeURIComponent(apiKey)}`);
          if (directRes.ok) {
            result = await directRes.json();
          }
        } catch (errDirect) {
          console.warn("Direct FormSubmit fetch notice:", errDirect);
        }
      }

      if (!result || !result.success) {
        showToast(result?.error || result?.message || "FormSubmit-dən məlumat alına bilmədi. Açarı yoxlayın.", "error");
        return;
      }

      const submissions = result.submissions || [];
      if (submissions.length === 0) {
        showToast("FormSubmit arxivində heç bir müraciət tapılmadı.", "info");
        return;
      }

      // Gələn arxiv obyektlərini tələbə müraciətinə çevir
      const parsedStudents = submissions.map(sub => this._normalizeStudentObject(sub)).filter(s => s && (s.fullName || s.email));

      if (parsedStudents.length === 0) {
        showToast("Arxivdəki qeydlər təhlil edilə bilmədi.", "warning");
        return;
      }

      // Xam mətn xanasına da JSON formatında doldur
      const rawInput = document.getElementById("bulkEmailRawInput");
      if (rawInput) rawInput.value = JSON.stringify(submissions, null, 2);

      this._parsedBulkStudents = parsedStudents;
      this.previewBulkEmailImport();
      showToast(`✓ FormSubmit buludundan ${parsedStudents.length} tələbə müraciəti uğurla çəkildi!`, "success");
    } catch (e) {
      showToast("FormSubmit sinxronizasiya xətası: " + e.message, "error");
    }
  },

  // ==========================================
  // TAM EHTİYAT NÜXSƏSİ (JSON BACKUP & RESTORE)
  // ==========================================

  exportFullClubBackup() {
    const data = getClubData();
    const backupObj = {
      app: "CarboxMol Bioinformatics Club",
      version: "1.6.9",
      exportedAt: new Date().toISOString(),
      membersCount: (data.members || []).length,
      applicationsCount: (data.applications || []).length,
      members: data.members || [],
      applications: data.applications || [],
      tasks: data.tasks || []
    };

    const blob = new Blob([JSON.stringify(backupObj, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `wcu_bioinfo_club_backup_${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast("Klubun tam ehtiyat nüsxəsi (.json) kompyuterinizə endirildi!", "success");
  },

  importFullClubBackup(fileInputEl) {
    const file = fileInputEl?.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const backupObj = JSON.parse(e.target.result);
        if (!backupObj.members && !backupObj.applications) {
          showToast("Yanlış fayl formatı! Klub ehtiyat nüsxəsi tapılmadı.", "error");
          return;
        }

        const data = getClubData();
        const incomingMembers = backupObj.members || [];
        const incomingApps = backupObj.applications || [];

        // Birləşdirmə (Merge): Mövcud üzvləri qorumaqla yeniləri əlavə et
        incomingMembers.forEach(im => {
          const idx = (data.members || []).findIndex(m => m.id === im.id || (m.username && m.username === im.username));
          if (idx !== -1) {
            data.members[idx] = { ...data.members[idx], ...im };
          } else {
            data.members.push(im);
          }
        });

        incomingApps.forEach(ia => {
          const idx = (data.applications || []).findIndex(a => a.id === ia.id || (a.email && a.email === ia.email));
          if (idx !== -1) {
            data.applications[idx] = { ...data.applications[idx], ...ia };
          } else {
            data.applications.push(ia);
          }
        });

        if (backupObj.tasks && Array.isArray(backupObj.tasks)) {
          data.tasks = backupObj.tasks;
        }

        saveClubData(data);
        this.renderApplicationsTable();
        this.renderMembersAccountsTable();
        this.renderMetrics();
        this.forcePushAllToCloud();

        showToast(`✓ Ehtiyat nüsxəsi uğurla bərpa edildi: ${incomingMembers.length} üzv, ${incomingApps.length} müraciət!`, "success");
      } catch (err) {
        showToast("JSON faylı oxunarkən xəta: " + err.message, "error");
      }
    };
    reader.readAsText(file);
  },

  // Bütün lokal verilənləri güclə buluda PUSH et (Veb <-> PWA eyniləşdirməsi)
  async forcePushAllToCloud() {
    const data = getClubData();
    const count = (data.members || []).length;
    showToast(`Bütün ${count} üzv və ${data.applications.length} müraciət buluda yüklənir...`, "info");
    try {
      if (typeof fetch === "function") {
        await fetch("/api/sync", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            action: "SYNC_PUSH",
            members: data.members,
            applications: data.applications,
            tasks: data.tasks || []
          })
        });
        await fetch("https://ntfy.sh/carboxmol_bioinfo_cloud_sync_v3_secure/publish", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            action: "SYNC_PUSH",
            membersCount: count,
            timestamp: Date.now()
          })
        });
        showToast(`Uğurlu! Bütün ${count} üzv buluda yükləndi. PWA və digər cihazlar avtomatik eyniləşdirildi!`, "success");
      }
    } catch (e) {
      showToast("Bulud serverinə qoşulma xətası: " + e.message, "warning");
    }
  },

  // Bütün Baza JSON Faylını İxrac Et (Ehtiyat nüsxə)
  exportDatabaseJSON() {
    const data = getClubData();
    const jsonStr = JSON.stringify(data, null, 2);
    const blob = new Blob([jsonStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `wcu_bioinfo_club_database_${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast("Tam verilənlər bazası JSON faylı olaraq kompüterinizə endirildi!", "success");
  },

  // Baza JSON Faylını İdxal Et (PWA və ya başqa cihazda bərpa)
  importDatabaseJSON() {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = ".json,application/json";
    fileInput.onchange = (e) => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = async (evt) => {
        try {
          const imported = JSON.parse(evt.target.result);
          if (!imported || !Array.isArray(imported.members)) {
            showToast("Yanlış fayl formatı. Keçərli JSON bazası seçin.", "warning");
            return;
          }
          saveClubData(imported);
          if (window.ClubDatabase && Array.isArray(imported.members)) {
            for (const m of imported.members) {
              await window.ClubDatabase.provisionMember(m);
            }
          }
          this.renderMetrics();
          this.renderApplicationsTable();
          this.renderMembersAccountsTable();
          this.renderTasksList();
          if (window.MembersPortal && typeof MembersPortal.renderMembersDirectory === "function") {
            MembersPortal.renderMembersDirectory();
          }
          await this.forcePushAllToCloud();
          showToast(`Uğurlu! ${imported.members.length} üzv bərpa edildi və buluda yazıldı!`, "success");
        } catch (err) {
          showToast("JSON faylını oxuyarkən xəta baş verdi: " + err.message, "warning");
        }
      };
      reader.readAsText(file);
    };
    fileInput.click();
  },

  parseAndFillFromEmailText() {
    const rawBox = document.getElementById("importEmailRawText");
    if (!rawBox || !rawBox.value.trim()) {
      showToast("Zəhmət olmasa bildiriş e-poçtunun mətnini xanaya yapışdırın.", "warning");
      return;
    }

    const parsedList = this.parseEmailTextToStudents(rawBox.value);
    if (parsedList.length > 1) {
      showToast(`Mətndə ${parsedList.length} tələbə müraciəti aşkar edildi! 1-ci tələbə formaya yazıldı. Bütün tələbələri birdəfəlik əlavə etmək üçün "E-poçtdan Toplu İdxal" düyməsindən istifadə edin.`, "info");
    }

    const s = parsedList.length > 0 ? parsedList[0] : null;
    if (s) {
      if (s.fullName && document.getElementById("asFullName")) document.getElementById("asFullName").value = s.fullName;
      if (s.email && document.getElementById("asEmail")) document.getElementById("asEmail").value = s.email;
      if (s.phone && document.getElementById("asPhone")) document.getElementById("asPhone").value = s.phone;
      if (s.username && document.getElementById("asUsername")) document.getElementById("asUsername").value = s.username;
      if (s.password && document.getElementById("asPassword")) document.getElementById("asPassword").value = s.password;
      if (s.progSkill && document.getElementById("asProgSkill")) document.getElementById("asProgSkill").value = s.progSkill;
      if (s.motivation && document.getElementById("asMotivation")) document.getElementById("asMotivation").value = s.motivation;
      if (s.faculty && document.getElementById("asFaculty")) document.getElementById("asFaculty").value = s.faculty;
      if (s.major && document.getElementById("asMajor")) document.getElementById("asMajor").value = s.major;
      if (s.studyLang && document.getElementById("asStudyLang")) document.getElementById("asStudyLang").value = s.studyLang;
      showToast("E-poçt məlumatları avtomatik təhlil edildi və form dolduruldu!", "success");
    } else {
      showToast("Məlumatlar avtomatik təhlil edilə bilmədi. Zəhmət olmasa xanaları əl ilə doldurun.", "warning");
    }
  },

  submitNewStudent() {
    const fullName = (document.getElementById("asFullName")?.value || "").trim();
    const email = (document.getElementById("asEmail")?.value || "").trim();
    const phone = (document.getElementById("asPhone")?.value || "").trim();
    let username = (document.getElementById("asUsername")?.value || "").trim().toLowerCase().replace(/^@/, "");
    const password = (document.getElementById("asPassword")?.value || "").trim();
    const status = document.getElementById("asStatus")?.value || "Gözləyir";
    const faculty = (document.getElementById("asFaculty")?.value || "(WCU) - Yüksək Texnologiyalar və Təbiət Elmləri Məktəbi").trim();
    const major = (document.getElementById("asMajor")?.value || "Biologiya (Bakalavr)").trim();
    const progSkill = (document.getElementById("asProgSkill")?.value || "Orta səviyyə (Python)").trim();
    const studyLang = (document.getElementById("asStudyLang")?.value || "Azərbaycan bölməsi").trim();
    const motivation = (document.getElementById("asMotivation")?.value || "Klub Sədri tərəfindən birbaşa daxil edilmiş rəsmi qeydiyyat.").trim();

    if (!fullName || !email || !username || !password) {
      showToast("Zəhmət olmasa tələbənin adını, e-poçtunu, login və şifrəsini doldurun.", "warning");
      return;
    }

    const data = getClubData();
    data.members = data.members || [];
    data.applications = data.applications || [];

    const memberId = "mem-" + Date.now();
    const appId = "app-" + Date.now();

    // 1. Yeni Üzv Hesabı (Official Account)
    const newMember = {
      id: memberId,
      fullName,
      email,
      phone,
      username,
      password,
      role: "Klub Üzvü",
      faculty,
      major,
      course: major.includes("(") ? "" : "Tələbə",
      joinDate: new Date().toLocaleDateString('az-AZ'),
      registeredAt: new Date().toISOString().slice(0, 10),
      status: status === "Təsdiqləndi" ? "Aktiv" : "Gözləyir",
      photo: "",
      skills: ["Python", "Bioinformatika"],
      motivation,
      yearGoal: motivation,
      researchTracks: ["Genom Analizi"],
      customTasks: [],
      notes: []
    };

    // 2. Yeni Müraciət Qeydi (Application Record)
    const newApp = {
      id: appId,
      memberId,
      fullName,
      email,
      phone,
      username,
      password,
      faculty,
      major,
      course: "Tələbə",
      studyLang,
      programmingSkill: progSkill,
      tools: ["Python", "Biopython"],
      bioTools: ["NCBI", "UniProt"],
      researchTracks: ["Genom Analizi"],
      roleInterest: "Aktiv Klub Üzvü",
      weeklyTime: "Həftədə 4–6 saat",
      motivation,
      dateApplied: new Date().toISOString().slice(0, 10),
      status,
      adminNotes: "Sədr tərəfindən daxil edildi."
    };

    // Mövcud təkrarı yoxla
    const existingMemIdx = data.members.findIndex(m => m.username && m.username.toLowerCase() === username);
    if (existingMemIdx !== -1) {
      data.members[existingMemIdx] = { ...data.members[existingMemIdx], ...newMember };
    } else {
      data.members.unshift(newMember);
    }

    const existingAppIdx = data.applications.findIndex(a => a.username && a.username.toLowerCase() === username);
    if (existingAppIdx !== -1) {
      data.applications[existingAppIdx] = { ...data.applications[existingAppIdx], ...newApp };
    } else {
      data.applications.unshift(newApp);
    }

    saveClubData(data);

    // Qalıcı IndexedDB bazasına yaz
    if (window.ClubDatabase) {
      window.ClubDatabase.provisionMember(newMember);
      window.ClubDatabase.provisionMember(newApp);
    }

    // Bulud serverinə və ntfy yayım şininə göndər
    if (typeof fetch === "function") {
      const studentPayload = {
        action: "REGISTER_STUDENT",
        memberId,
        username,
        member: newMember,
        application: newApp,
        timestamp: Date.now()
      };
      fetch("/api/sync", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(studentPayload)
      }).catch((err) => console.warn("Cloud sync error:", err));

      fetch("https://ntfy.sh/carboxmol_bioinfo_cloud_sync_v3_secure/publish", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(studentPayload)
      }).catch((err) => console.warn("ntfy publish error:", err));
    }

    if (window.SyncEngine) {
      window.SyncEngine.broadcast("MEMBER_REGISTERED", { memberId });
    }

    this.renderMetrics();
    this.renderApplicationsTable();
    this.renderMembersAccountsTable();

    document.getElementById("addStudentModal")?.classList.add("hidden");
    showToast(`"${fullName}" üçün rəsmi hesab və müraciət uğurla yaradıldı!`, "success");
  },

  // ==========================================
  // ÜZVLƏRİN FƏRDİ TAPŞIRIQLARI (CANLI SİNXRON)
  // ==========================================

  renderMemberCustomTasks() {
    const container = document.getElementById("presidentMemberCustomTasksContainer");
    if (!container) return;

    const data = getClubData();
    const tasks = data.memberCustomTasks || [];

    if (tasks.length === 0) {
      container.innerHTML = `
        <div class="py-10 text-center bg-slate-950/60 rounded-2xl border border-dashed border-slate-800 text-slate-400">
          <i class="fa-solid fa-flask text-3xl text-slate-600 mb-2 block"></i>
          Hələlik üzvlər tərəfindən heç bir fərdi tapşırıq əlavə edilməyib.
        </div>
      `;
      return;
    }

    container.innerHTML = tasks.map(t => `
      <div class="bg-slate-950/80 p-4 rounded-2xl border border-slate-800 space-y-3 hover:border-teal-500/40 transition shadow-lg">
        <div class="flex items-start justify-between gap-2 flex-wrap">
          <div>
            <div class="flex items-center gap-2">
              <span class="text-xs font-bold text-white">${escapeHtml(t.memberName || 'Üzv')}</span>
              <span class="text-[10px] text-cyan-400 font-mono">@${escapeHtml(t.username || '')}</span>
            </div>
            <span class="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-teal-950 text-teal-300 border border-teal-800 mt-1 inline-block">
              ${escapeHtml(t.category || 'Fərdi Tədqiqat')}
            </span>
          </div>
          <span class="px-2.5 py-0.5 rounded-full text-xs font-bold ${t.status === 'Tamamlandı' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'}">
            ${escapeHtml(t.status || 'İcrada')}
          </span>
        </div>

        <h5 class="text-sm font-bold text-slate-100">${escapeHtml(t.title)}</h5>

        ${t.description ? `
          <p class="text-xs text-slate-300 bg-slate-900/60 p-2.5 rounded-xl border border-slate-800 leading-relaxed">
            ${escapeHtml(t.description)}
          </p>
        ` : ''}

        <div class="flex items-center gap-2 flex-wrap text-[11px] pt-1">
          ${t.docUrl ? `
            <span class="px-2 py-0.5 rounded bg-slate-900 text-teal-300 border border-slate-800 flex items-center gap-1">
              <i class="fa-solid fa-file-code"></i> ${escapeHtml(t.docUrl)}
            </span>
          ` : ''}
          ${t.videoUrl ? `
            <a href="${t.videoUrl}" target="_blank" rel="noopener noreferrer" class="px-2 py-0.5 rounded bg-rose-950/60 text-rose-300 border border-rose-800/60 flex items-center gap-1 hover:underline">
              <i class="fa-solid fa-play"></i> 360p Video
            </a>
          ` : ''}
          <span class="text-[10px] text-slate-500 ml-auto">
            <i class="fa-regular fa-clock mr-1"></i>${t.createdAt || ''}
          </span>
        </div>
      </div>
    `).join("");
  },

  // ==========================================
  // ÜZVLƏRİN LABORATORİYA VƏ TƏDQİQAT QEYDLƏRİ (CANLI SİNXRON)
  // ==========================================

  renderMemberNotes() {
    const container = document.getElementById("presidentMemberNotesContainer");
    if (!container) return;

    const data = getClubData();
    const notes = data.memberNotes || [];

    if (notes.length === 0) {
      container.innerHTML = `
        <div class="py-10 text-center bg-slate-950/60 rounded-2xl border border-dashed border-slate-800 text-slate-400">
          <i class="fa-solid fa-book-journal-whills text-3xl text-slate-600 mb-2 block"></i>
          Hələlik üzvlər tərəfindən laboratoriya qeydi yazılmayıb.
        </div>
      `;
      return;
    }

    container.innerHTML = notes.map(n => `
      <div class="bg-slate-950/80 p-4 rounded-2xl border border-slate-800 hover:border-cyan-500/40 transition space-y-2.5 shadow-lg">
        <div class="flex items-start justify-between gap-2">
          <div>
            <div class="flex items-center gap-2">
              <span class="text-xs font-bold text-white">${escapeHtml(n.memberName || 'Üzv')}</span>
              <span class="text-[10px] text-cyan-400 font-mono">@${escapeHtml(n.username || '')}</span>
            </div>
            <h5 class="text-sm font-bold text-slate-100 mt-1">${escapeHtml(n.title)}</h5>
          </div>
          <span class="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800">
            ${escapeHtml(n.category || 'Hesablama Biologiyası')}
          </span>
        </div>

        <div class="bg-slate-900/60 p-3 rounded-xl border border-slate-800 text-xs text-slate-200 whitespace-pre-wrap font-mono max-h-48 overflow-y-auto leading-relaxed">
          ${escapeHtml(n.content)}
        </div>

        <div class="text-[10px] text-slate-500 flex items-center justify-between pt-1">
          <span><i class="fa-regular fa-calendar-check mr-1"></i>${n.createdAt || ''}</span>
          <span class="text-emerald-400"><i class="fa-solid fa-circle-check mr-1"></i>Canlı sinxron</span>
        </div>
      </div>
    `).join("");
  }
};

window.PresidentPortal = PresidentPortal;

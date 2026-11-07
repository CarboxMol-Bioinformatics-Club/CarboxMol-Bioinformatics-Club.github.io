// CarboxMol Bioinformatika Klubu - Müəllim və Mentor Paneli Modulu (Teacher / Mentor Portal)
// Bu modul akademik müəllimlər və laboratoriya mentorları üçün nəzərdə tutulub:
// 1. Tələbə həllərinin (submissions) yoxlanılması, qiymətləndirilməsi (0-100) və akademik rəy yazılması
// 2. Müəllim elanları, elmi tövsiyələr, sillabus resursları və məsləhət saatlarının dərci
// 3. 15 rəsmi klub üzvünün elmi istiqamətlərinin və inkişafının izlənməsi
// 4. Müəllim profili, elmi dərəcə və əlaqə məlumatlarının idarə olunması

function escapeTeacherHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

const TeacherPortal = {
  currentFilter: "all",
  colleagueSearchQuery: "",
  colleagueUniFilter: "all",

  getActiveTeacher() {
    if (typeof getActiveTeacher === "function") {
      return getActiveTeacher();
    }
    const id = localStorage.getItem("wcu_active_teacher_id");
    if (!id) return null;
    const data = typeof getClubData === "function" ? getClubData() : null;
    if (!data || !Array.isArray(data.teachers)) return null;
    return data.teachers.find(t => t.id === id || t.username === id) || null;
  },

  renderTeacherDashboard() {
    const isPres = typeof isPresidentLoggedIn === "function" && isPresidentLoggedIn();
    const teacher = this.getActiveTeacher();
    const loginGateway = document.getElementById("teacherLoginGateway");
    const activeDashboard = document.getElementById("teacherActiveDashboard");

    if (!teacher && !isPres) {
      if (loginGateway) loginGateway.classList.remove("hidden");
      if (activeDashboard) activeDashboard.classList.add("hidden");
    } else {
      if (loginGateway) loginGateway.classList.add("hidden");
      if (activeDashboard) activeDashboard.classList.remove("hidden");

      // Əgər Sədr kimi baxılırsa və müəllim seçilməyibsə, Sədr nəzarət profilini göstər
      const currentTeacher = teacher || {
        id: "pres-teacher-preview",
        fullName: "Süleyman Hacızadə (Sədr Nəzarəti)",
        title: "Klub Sədri & Elmi Koordinator",
        academicDegree: "Təsisçi & Rəhbər",
        university: "Western Caspian University",
        department: "Təbiət Elmləri və Bioinformatika",
        email: "suleyman.hacizade.232bioing@wcu.edu.az",
        phone: "+994 70 550 69 07",
        username: "suleimanhajizadeh",
        status: "Aktiv",
        officeLocation: "Kompüter və Bio-laboratoriya mərkəzi",
        consultationHours: "Həftəiçi: 10:00 - 18:00",
        bio: "Klub Sədrinin akademik tədris və mentorluq nəzarət rejimi.",
        specialties: ["Bioinformatika", "Struktur Biologiyası", "Genom Analizi"]
      };

      this.renderHeader(currentTeacher);
    }
    this.renderMetrics();
    this.renderSubmissions(this.currentFilter);
    this.renderAnnouncements();
    this.renderColleaguesRoster();
    this.renderStudentsRoster();
    if (window.BioMeetEngine && typeof window.BioMeetEngine.renderPortalMeetings === "function") {
      window.BioMeetEngine.renderPortalMeetings("teacher");
    }
  },

  renderHeader(teacher) {
    const elName = document.getElementById("teacherActiveName");
    const elTitle = document.getElementById("teacherActiveTitle");
    const elMeta = document.getElementById("teacherActiveMeta");
    const elStatus = document.getElementById("teacherActiveStatus");
    const elAvatar = document.getElementById("teacherActiveAvatar");
    const elBio = document.getElementById("teacherActiveBio");
    const elUni = document.getElementById("teacherActiveUniversity");
    const elSpecialties = document.getElementById("teacherActiveSpecialties");
    const elTags = document.getElementById("teacherSpecialtiesContainer");

    if (elName) elName.innerText = teacher.fullName || "Müəllim / Mentor";
    if (elTitle) elTitle.innerText = teacher.title || "Akademik Mentor";
    if (elMeta) {
      elMeta.innerText = `${teacher.university || 'Universitet'} • ${teacher.department || 'Akademik Kafedra'} • @${teacher.username || 'muellim'}`;
    }
    if (elStatus) {
      elStatus.className = "px-2.5 py-0.5 rounded-full text-[10px] font-bold border " +
        (teacher.status === "Aktiv" ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/30" : "bg-amber-500/20 text-amber-300 border-amber-500/30");
      elStatus.innerText = teacher.status === "Aktiv" ? "Aktiv Mentor" : teacher.status;
    }
    if (elAvatar) {
      if (teacher.photo) {
        elAvatar.src = teacher.photo;
      } else {
        elAvatar.src = `https://api.dicebear.com/7.x/identicon/svg?seed=${encodeURIComponent(teacher.username || 'teacher')}`;
      }
    }
    if (elBio) {
      elBio.innerText = teacher.bio || "Bioinformatika sahəsində tələbələrə elmi dəstək və akademik rəhbərlik göstərir.";
    }
    if (elUni) {
      elUni.innerText = teacher.university || "Universitet qeyd edilməyib";
    }
    if (elSpecialties) {
      const specs = Array.isArray(teacher.specialties) ? teacher.specialties.join(", ") : (teacher.specialties || "Bioinformatika");
      elSpecialties.innerText = specs;
    }
    if (elTags) {
      const specs = Array.isArray(teacher.specialties) ? teacher.specialties : ["Bioinformatika", "Genom Analizi"];
      elTags.innerHTML = specs.map(s => `
        <span class="px-2.5 py-1 rounded-lg bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 text-xs font-semibold">
          <i class="fa-solid fa-dna mr-1 text-indigo-400"></i> ${escapeTeacherHtml(s)}
        </span>
      `).join("");
    }
  },

  renderMetrics() {
    const data = typeof getClubData === "function" ? getClubData() : {};
    const members = (data.members || []).filter(m => m.status === "Aktiv" || m.status === "Təsdiqləndi");
    const tasks = data.tasks || [];
    const announcements = data.teacherAnnouncements || [];

    let totalSubmissions = 0;
    let pendingReviews = 0;
    let gradedCount = 0;

    tasks.forEach(t => {
      (t.submissions || []).forEach(s => {
        totalSubmissions++;
        if (s.status === "Qiymətləndirildi") {
          gradedCount++;
        } else {
          pendingReviews++;
        }
      });
    });

    const elTeachers = document.getElementById("teacherMetricTeachers");
    const elStudents = document.getElementById("teacherMetricStudents");
    const elPending = document.getElementById("teacherMetricPending");
    const elGraded = document.getElementById("teacherMetricGraded");
    const elTasks = document.getElementById("teacherMetricTasks");
    const elAnn = document.getElementById("teacherMetricAnnouncements");

    const activeTeachers = (data.teachers || []).filter(t => t.status === "Aktiv" || t.status === "Təsdiqləndi");
    if (elTeachers) elTeachers.innerText = activeTeachers.length || 4;
    if (elStudents) elStudents.innerText = members.length;
    if (elPending) elPending.innerText = pendingReviews;
    if (elGraded) elGraded.innerText = gradedCount;
    if (elTasks) elTasks.innerText = tasks.length;
    if (elAnn) elAnn.innerText = announcements.length;
  },

  renderSubmissions(filter = "all") {
    this.currentFilter = filter;
    const container = document.getElementById("teacherSubmissionsContainer");
    if (!container) return;

    const data = typeof getClubData === "function" ? getClubData() : {};
    const tasks = data.tasks || [];

    // Bütün tələbə həllərini topla
    let submissionsList = [];
    tasks.forEach(task => {
      (task.submissions || []).forEach(sub => {
        submissionsList.push({
          taskId: task.id,
          taskTitle: task.title,
          taskCategory: task.category,
          taskDifficulty: task.difficulty,
          ...sub
        });
      });
    });

    // Filtrləmə
    if (filter === "pending") {
      submissionsList = submissionsList.filter(s => s.status !== "Qiymətləndirildi");
    } else if (filter === "graded") {
      submissionsList = submissionsList.filter(s => s.status === "Qiymətləndirildi");
    }

    // Tarixə görə sırala (ən yeni ən üstdə)
    submissionsList.sort((a, b) => new Date(b.submittedAt || 0) - new Date(a.submittedAt || 0));

    if (submissionsList.length === 0) {
      container.innerHTML = `
        <div class="col-span-full py-12 text-center text-slate-400 bg-slate-900/40 rounded-2xl border border-slate-800">
          <i class="fa-solid fa-clipboard-check text-4xl text-slate-600 mb-3 block"></i>
          <p class="font-bold text-slate-300">Bu kateqoriyada yoxlanılacaq tələbə həlli yoxdur.</p>
          <p class="text-xs text-slate-500 mt-1">Tələbələr tapşırıqları təqdim etdikcə burada dərhal canlı olaraq görünəcəkdir.</p>
        </div>
      `;
      return;
    }

    container.innerHTML = submissionsList.map((sub, idx) => {
      const isGraded = sub.status === "Qiymətləndirildi";
      const gradeBadge = isGraded
        ? `<span class="px-2.5 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-black">
             <i class="fa-solid fa-star text-emerald-400 mr-1"></i> ${sub.grade || 100} / 100 bal
           </span>`
        : `<span class="px-2.5 py-1 rounded-lg bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-bold animate-pulse">
             <i class="fa-solid fa-hourglass-half text-amber-400 mr-1"></i> Yoxlama Gözləyir
           </span>`;

      return `
        <div class="glass-panel p-5 rounded-2xl border border-slate-800 hover:border-indigo-500/40 transition space-y-4 bg-slate-900/70">
          <div class="flex items-start justify-between gap-3">
            <div>
              <span class="text-[10px] font-bold uppercase tracking-wider text-teal-400 px-2 py-0.5 rounded bg-teal-950/80 border border-teal-800/80">
                ${escapeTeacherHtml(sub.taskCategory || 'Bioinformatika')}
              </span>
              <h4 class="text-sm sm:text-base font-bold text-white mt-1.5 leading-snug">
                ${escapeTeacherHtml(sub.taskTitle)}
              </h4>
            </div>
            <div>${gradeBadge}</div>
          </div>

          <!-- Student Info -->
          <div class="flex items-center gap-3 p-2.5 rounded-xl bg-slate-950/80 border border-slate-800/80">
            <div class="w-9 h-9 rounded-lg bg-indigo-950/80 border border-indigo-700/50 flex items-center justify-center text-indigo-300 font-bold text-xs shrink-0">
              <i class="fa-solid fa-user-graduate"></i>
            </div>
            <div class="min-w-0 flex-1">
              <div class="text-xs font-bold text-white truncate">${escapeTeacherHtml(sub.studentName || 'Klub Tələbəsi')}</div>
              <div class="text-[11px] text-slate-400 truncate">${escapeTeacherHtml(sub.studentEmail || '')}</div>
            </div>
            <div class="text-right text-[10px] text-slate-500 shrink-0 font-mono">
              ${sub.submittedAt ? sub.submittedAt.split("T")[0] : '2026-10-12'}
            </div>
          </div>

          <!-- Student Solution Preview -->
          <div class="space-y-1.5">
            <span class="text-[11px] font-semibold text-slate-400 flex items-center gap-1.5">
              <i class="fa-solid fa-code text-cyan-400"></i> Tələbənin Təqdim Etdiyi Kod / Cavab:
            </span>
            <div class="p-3 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-slate-300 max-h-32 overflow-y-auto whitespace-pre-wrap leading-relaxed select-text">
              ${escapeTeacherHtml(sub.solutionCode || sub.answer || sub.notes || 'Həll mətni daxil edilməyib.')}
            </div>
          </div>

          ${isGraded && sub.feedback ? `
            <!-- Existing Teacher Feedback -->
            <div class="p-3 rounded-xl bg-indigo-950/40 border border-indigo-500/30 space-y-1">
              <div class="flex items-center justify-between text-[11px] font-bold text-indigo-300">
                <span><i class="fa-solid fa-comment-dots mr-1"></i> Müəllim Rəyi:</span>
                <span class="text-slate-400 font-normal">${escapeTeacherHtml(sub.reviewedBy || 'Müəllim')}</span>
              </div>
              <p class="text-xs text-slate-200 leading-relaxed">${escapeTeacherHtml(sub.feedback)}</p>
            </div>
          ` : ''}

          <!-- Action Button -->
          <div class="pt-2 border-t border-slate-800/80 flex items-center justify-between gap-2">
            <span class="text-[11px] text-slate-400">
              ${isGraded ? `<i class="fa-solid fa-check-double text-emerald-400 mr-1"></i> Yoxlanılıb` : `<i class="fa-solid fa-clock text-amber-400 mr-1"></i> Rəy verilməlidir`}
            </span>
            <button onclick="TeacherPortal.openGradeModal('${escapeTeacherHtml(sub.taskId)}', '${escapeTeacherHtml(sub.id)}')" class="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white font-bold text-xs shadow-md flex items-center gap-1.5 transition">
              <i class="fa-solid fa-pen-to-square text-xs"></i> ${isGraded ? 'Rəyi Yenilə / Bal Dəyiş' : 'Yoxla və Rəy Yaz'}
            </button>
          </div>
        </div>
      `;
    }).join("");
  },

  openGradeModal(taskId, submissionId) {
    const isPres = typeof isPresidentLoggedIn === "function" && isPresidentLoggedIn();
    const teacher = this.getActiveTeacher();
    if (!teacher && !isPres) {
      if (typeof showToast === "function") {
        showToast("Tələbə həllini qiymətləndirmək üçün zəhmət olmasa müəllim hesabınıza daxil olun.", "warning");
      }
      if (typeof openTeacherLoginModal === "function") openTeacherLoginModal();
      return;
    }

    const data = typeof getClubData === "function" ? getClubData() : {};
    const task = (data.tasks || []).find(t => t.id === taskId);
    if (!task) return;
    const sub = (task.submissions || []).find(s => s.id === submissionId);
    if (!sub) return;

    const modal = document.getElementById("gradeSubmissionModal");
    if (!modal) return;

    const elTaskTitle = document.getElementById("gradeModalTaskTitle");
    const elStudent = document.getElementById("gradeModalStudent");
    const elCode = document.getElementById("gradeModalCode");
    const elGrade = document.getElementById("gradeModalInputScore");
    const elFeedback = document.getElementById("gradeModalInputFeedback");
    const elTaskId = document.getElementById("gradeModalTaskId");
    const elSubId = document.getElementById("gradeModalSubmissionId");

    if (elTaskTitle) elTaskTitle.innerText = task.title;
    if (elStudent) elStudent.innerText = `${sub.studentName || 'Tələbə'} (${sub.studentEmail || ''})`;
    if (elCode) elCode.innerText = sub.solutionCode || sub.answer || sub.notes || 'Həll daxil edilməyib.';
    if (elGrade) elGrade.value = sub.grade !== undefined ? sub.grade : 95;
    if (elFeedback) elFeedback.value = sub.feedback || "Əla elmi yanaşma və düzgün alqoritm. Kod təmiz və standartlara uyğundur.";
    if (elTaskId) elTaskId.value = taskId;
    if (elSubId) elSubId.value = submissionId;

    modal.classList.remove("hidden");
  },

  closeGradeModal() {
    const modal = document.getElementById("gradeSubmissionModal");
    if (modal) modal.classList.add("hidden");
  },

  submitGrade(e) {
    if (e) e.preventDefault();

    const taskId = document.getElementById("gradeModalTaskId")?.value;
    const subId = document.getElementById("gradeModalSubmissionId")?.value;
    const gradeVal = parseInt(document.getElementById("gradeModalInputScore")?.value, 10);
    const feedbackVal = (document.getElementById("gradeModalInputFeedback")?.value || "").trim();

    if (isNaN(gradeVal) || gradeVal < 0 || gradeVal > 100) {
      if (typeof showToast === "function") showToast("Zəhmət olmasa 0 ilə 100 arasında düzgün bal daxil edin.", "error");
      return;
    }

    const data = typeof getClubData === "function" ? getClubData() : null;
    if (!data) return;

    const task = (data.tasks || []).find(t => t.id === taskId);
    if (!task) return;
    const sub = (task.submissions || []).find(s => s.id === subId);
    if (!sub) return;

    const teacher = this.getActiveTeacher() || { fullName: "Klub Müəllimi" };

    // Təhlükəsizlik: XSS filtrasiyası
    const sanitizedFeedback = typeof ClubSecurity !== "undefined" && ClubSecurity.sanitizeText
      ? ClubSecurity.sanitizeText(feedbackVal)
      : feedbackVal.replace(/[<>]/g, "");

    sub.grade = gradeVal;
    sub.feedback = sanitizedFeedback;
    sub.reviewedBy = teacher.fullName;
    sub.reviewedAt = new Date().toISOString();
    sub.status = "Qiymətləndirildi";

    if (typeof saveClubData === "function") {
      saveClubData(data);
    }

    // Bulud sinxronizasiyası
    try {
      fetch("/api/sync", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "TASK_SUBMISSION_ADDED",
          taskId: taskId,
          submission: sub
        })
      }).catch(() => {});
    } catch (err) {}

    this.closeGradeModal();
    this.renderMetrics();
    this.renderSubmissions(this.currentFilter);

    if (typeof showToast === "function") {
      showToast(`Tələbə ${sub.studentName} üçün qiymətləndirmə (${gradeVal}/100) və rəy uğurla yadda saxlanıldı!`, "success");
    }
  },

  renderAnnouncements() {
    const container = document.getElementById("teacherAnnouncementsContainer");
    if (!container) return;

    const data = typeof getClubData === "function" ? getClubData() : {};
    const announcements = data.teacherAnnouncements || [];

    if (announcements.length === 0) {
      container.innerHTML = `
        <div class="col-span-full py-8 text-center text-slate-400 bg-slate-900/40 rounded-2xl border border-slate-800">
          <i class="fa-solid fa-bullhorn text-3xl text-slate-600 mb-2 block"></i>
          <p class="text-xs font-semibold text-slate-300">Hələ heç bir müəllim elanı və ya sillabus resursu dərc edilməyib.</p>
          <button onclick="TeacherPortal.openCreateAnnouncementModal()" class="mt-3 px-3 py-1.5 rounded-xl bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 text-xs font-bold hover:bg-indigo-500/30 transition">
            <i class="fa-solid fa-plus mr-1"></i> İlk Elanı Paylaş
          </button>
        </div>
      `;
      return;
    }

    container.innerHTML = announcements.map(ann => {
      return `
        <div class="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-indigo-500/40 transition space-y-3">
          <div class="flex items-start justify-between gap-2">
            <div>
              <span class="text-[10px] font-bold uppercase tracking-wider text-indigo-400 bg-indigo-950/80 px-2 py-0.5 rounded border border-indigo-800/60">
                ${escapeTeacherHtml(ann.category || 'Müəllim Məsləhəti')}
              </span>
              <h4 class="text-sm font-bold text-white mt-1.5">${escapeTeacherHtml(ann.title)}</h4>
            </div>
            <button onclick="TeacherPortal.deleteAnnouncement('${ann.id}')" class="text-slate-500 hover:text-rose-400 p-1 text-xs transition" title="Elanı Sil">
              <i class="fa-solid fa-trash-can"></i>
            </button>
          </div>

          <p class="text-xs text-slate-300 leading-relaxed">${escapeTeacherHtml(ann.content)}</p>

          <div class="pt-2 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-2 text-[11px]">
            <div class="text-slate-400">
              <i class="fa-solid fa-chalkboard-user text-indigo-400 mr-1"></i> ${escapeTeacherHtml(ann.teacherName || 'Müəllim')}
            </div>
            ${ann.resourceLink ? `
              <a href="${escapeTeacherHtml(ann.resourceLink)}" target="_blank" rel="noopener" class="text-teal-400 hover:text-teal-300 font-bold flex items-center gap-1">
                <i class="fa-solid fa-up-right-from-square text-[10px]"></i> ${escapeTeacherHtml(ann.resourceLabel || 'Resursa Keç')}
              </a>
            ` : ''}
          </div>
        </div>
      `;
    }).join("");
  },

  openCreateAnnouncementModal() {
    const isPres = typeof isPresidentLoggedIn === "function" && isPresidentLoggedIn();
    const teacher = this.getActiveTeacher();
    if (!teacher && !isPres) {
      if (typeof showToast === "function") {
        showToast("Müəllim elanı paylaşmaq üçün zəhmət olmasa hesabınıza daxil olun.", "warning");
      }
      if (typeof openTeacherLoginModal === "function") openTeacherLoginModal();
      return;
    }

    const modal = document.getElementById("teacherAnnouncementModal");
    if (modal) {
      const f = document.getElementById("teacherAnnouncementForm");
      if (f) f.reset();
      modal.classList.remove("hidden");
    }
  },

  closeCreateAnnouncementModal() {
    const modal = document.getElementById("teacherAnnouncementModal");
    if (modal) modal.classList.add("hidden");
  },

  submitAnnouncement(e) {
    if (e) e.preventDefault();

    const title = (document.getElementById("teachAnnTitle")?.value || "").trim();
    const category = document.getElementById("teachAnnCategory")?.value || "Akademik Məsləhət";
    const content = (document.getElementById("teachAnnContent")?.value || "").trim();
    const resourceLink = (document.getElementById("teachAnnLink")?.value || "").trim();
    const resourceLabel = (document.getElementById("teachAnnLabel")?.value || "").trim() || "Elmi Mənbə";

    if (!title || !content) {
      if (typeof showToast === "function") showToast("Zəhmət olmasa elanın başlığını və məzmununu doldurun.", "error");
      return;
    }

    const teacher = this.getActiveTeacher() || { fullName: "Müəllim / Mentor" };
    const data = typeof getClubData === "function" ? getClubData() : null;
    if (!data) return;

    data.teacherAnnouncements = data.teacherAnnouncements || [];

    const newAnn = {
      id: "teach-ann-" + Date.now(),
      teacherId: teacher.id || "teacher-sefanya",
      teacherName: teacher.fullName,
      teacherTitle: teacher.title || "Akademik Mentor",
      title: typeof ClubSecurity !== "undefined" ? ClubSecurity.sanitizeText(title) : title,
      category: category,
      content: typeof ClubSecurity !== "undefined" ? ClubSecurity.sanitizeText(content) : content,
      resourceLink: resourceLink,
      resourceLabel: resourceLabel,
      createdAt: new Date().toISOString().split("T")[0],
      badge: "Yeni"
    };

    data.teacherAnnouncements.unshift(newAnn);
    if (typeof saveClubData === "function") saveClubData(data);

    // Bulud sinxronizasiyası
    try {
      fetch("/api/sync", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "ADD_TEACHER_ANNOUNCEMENT",
          announcement: newAnn
        })
      }).catch(() => {});
    } catch (err) {}

    this.closeCreateAnnouncementModal();
    this.renderMetrics();
    this.renderAnnouncements();

    if (typeof showToast === "function") {
      showToast("Müəllim elanı uğurla dərc edildi və tələbələrə çatdırıldı!", "success");
    }
  },

  deleteAnnouncement(annId) {
    if (!confirm("Bu elanı silmək istədiyinizdən əminsiniz?")) return;

    const data = typeof getClubData === "function" ? getClubData() : null;
    if (!data) return;

    data.teacherAnnouncements = (data.teacherAnnouncements || []).filter(a => a.id !== annId);
    if (typeof saveClubData === "function") saveClubData(data);

    try {
      fetch("/api/sync", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "DELETE_TEACHER_ANNOUNCEMENT",
          announcementId: annId
        })
      }).catch(() => {});
    } catch (err) {}

    this.renderMetrics();
    this.renderAnnouncements();

    if (typeof showToast === "function") showToast("Elan silindi.", "info");
  },

  renderColleaguesRoster(searchQuery = this.colleagueSearchQuery, filterUni = this.colleagueUniFilter) {
    this.colleagueSearchQuery = (searchQuery || "").trim().toLowerCase();
    this.colleagueUniFilter = filterUni || "all";

    const container = document.getElementById("teacherColleaguesContainer");
    const badge = document.getElementById("teacherColleaguesCountBadge");
    if (!container) return;

    const data = typeof getClubData === "function" ? getClubData() : {};
    const currentActiveTeacher = this.getActiveTeacher();
    let teachers = (data.teachers || []).filter(t => t.status === "Aktiv" || t.status === "Təsdiqləndi");

    // Also include any approved teacher from teacherApplications if not yet in teachers list
    if (Array.isArray(data.teacherApplications)) {
      data.teacherApplications.forEach(app => {
        if ((app.status === "Aktiv" || app.status === "Təsdiqləndi") && !teachers.some(t => t.id === app.teacherId || t.id === app.id || (t.username && app.username && t.username.toLowerCase() === app.username.toLowerCase()))) {
          teachers.push({
            id: app.teacherId || app.id,
            fullName: app.fullName,
            title: app.title || "Müəllim / Akademik Mentor",
            academicDegree: app.academicDegree || "Müəllim",
            university: app.university || "Universitet",
            faculty: app.faculty || "",
            department: app.department || app.faculty || "Kafedra",
            email: app.email,
            phone: app.phone,
            username: app.username,
            photo: app.photo || `https://api.dicebear.com/7.x/identicon/svg?seed=${encodeURIComponent(app.username || app.fullName || 'teacher')}`,
            specialties: app.specialties || ["Bioinformatika"],
            bio: app.bio || "",
            status: "Aktiv"
          });
        }
      });
    }

    if (badge) {
      badge.innerText = `${teachers.length} Müəllim`;
    }

    // Filter by university
    if (this.colleagueUniFilter !== "all") {
      teachers = teachers.filter(t => {
        const uni = ((t.university || "") + " " + (t.faculty || "")).toUpperCase();
        if (this.colleagueUniFilter === "WCU") return uni.includes("WCU") || uni.includes("QƏRBİ KASPİ") || uni.includes("WESTERN CASPIAN");
        if (this.colleagueUniFilter === "BDU") return uni.includes("BDU") || uni.includes("BAKI DÖVLƏT") || uni.includes("BAKU STATE");
        if (this.colleagueUniFilter === "Digər") {
          return !uni.includes("WCU") && !uni.includes("QƏRBİ KASPİ") && !uni.includes("WESTERN CASPIAN") && !uni.includes("BDU") && !uni.includes("BAKI DÖVLƏT") && !uni.includes("BAKU STATE");
        }
        return true;
      });
    }

    // Filter by search query
    if (this.colleagueSearchQuery) {
      const q = this.colleagueSearchQuery.replace(/^@/, "").trim();
      const normalize = (str) =>
        (str || "")
          .toLowerCase()
          .replace(/ə/g, "e")
          .replace(/ı/g, "i")
          .replace(/ö/g, "o")
          .replace(/ü/g, "u")
          .replace(/ç/g, "c")
          .replace(/ş/g, "s")
          .replace(/ğ/g, "g");
      const normQ = normalize(q);

      teachers = teachers.filter(t => {
        const name = (t.fullName || "").toLowerCase();
        const uname = (t.username || "").toLowerCase();
        const uni = (t.university || "").toLowerCase();
        const title = (t.title || "").toLowerCase();
        const dept = (t.department || t.faculty || "").toLowerCase();
        const specs = Array.isArray(t.specialties) ? t.specialties.join(" ").toLowerCase() : (t.specialties || "").toLowerCase();
        const email = (t.email || "").toLowerCase();

        const rawMatch = name.includes(q) || uname.includes(q) || uni.includes(q) || title.includes(q) || dept.includes(q) || specs.includes(q) || email.includes(q);
        if (rawMatch) return true;

        const normTarget = normalize(`${name} ${uname} ${uni} ${title} ${dept} ${specs} ${email}`);
        return normTarget.includes(normQ);
      });
    }

    if (teachers.length === 0) {
      container.innerHTML = `
        <div class="col-span-full py-10 text-center text-slate-400 bg-slate-900/40 rounded-2xl border border-slate-800">
          <i class="fa-solid fa-user-slash text-3xl text-slate-600 mb-2 block"></i>
          <p class="font-bold text-slate-300">Axtarışa uyğun müəllim və ya mentor tapılmadı.</p>
          <p class="text-xs text-slate-500 mt-1">Axtarış sözünü dəyişin və ya filtri "Hamısı" seçin.</p>
        </div>
      `;
      return;
    }

    container.innerHTML = teachers.map(t => {
      const isSelf = currentActiveTeacher && (t.id === currentActiveTeacher.id || (t.username && currentActiveTeacher.username && t.username.toLowerCase() === currentActiveTeacher.username.toLowerCase()));
      const avatarSrc = t.photo || `https://api.dicebear.com/7.x/identicon/svg?seed=${encodeURIComponent(t.username || t.fullName || 'teacher')}`;
      const specs = Array.isArray(t.specialties) ? t.specialties : (t.specialties ? [t.specialties] : ["Bioinformatika"]);

      return `
        <div class="glass-panel p-5 rounded-2xl border ${isSelf ? 'border-cyan-500/50 bg-slate-900/90 ring-1 ring-cyan-500/30' : 'border-slate-800 bg-slate-900/70 hover:border-indigo-500/40'} transition flex flex-col justify-between space-y-4 shadow-lg group">
          <div>
            <!-- Header: Avatar, Name, Title, Self Badge -->
            <div class="flex items-start gap-3.5">
              <div class="relative w-14 h-14 rounded-xl bg-gradient-to-tr from-indigo-500 via-cyan-400 to-teal-400 p-0.5 shrink-0 shadow-md">
                <img src="${escapeTeacherHtml(avatarSrc)}" alt="${escapeTeacherHtml(t.fullName)}" class="w-full h-full object-cover rounded-[10px] bg-slate-950" onerror="this.src='https://api.dicebear.com/7.x/identicon/svg?seed=${encodeURIComponent(t.username || 't')}'" />
                <span class="absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-slate-950" title="Aktiv Həmkar"></span>
              </div>
              <div class="min-w-0 flex-1">
                <div class="flex items-center gap-1.5 flex-wrap">
                  <h4 class="text-sm font-extrabold text-white truncate leading-snug group-hover:text-cyan-300 transition">
                    ${escapeTeacherHtml(t.fullName)}
                  </h4>
                  ${isSelf ? '<span class="px-2 py-0.5 rounded-md text-[10px] font-extrabold bg-cyan-500/20 text-cyan-300 border border-cyan-500/40">Siz</span>' : ''}
                </div>
                <p class="text-xs text-indigo-300 font-semibold truncate mt-0.5">${escapeTeacherHtml(t.title || 'Akademik Mentor')}</p>
                <p class="text-[11px] text-slate-400 truncate mt-0.5"><i class="fa-solid fa-building-columns text-[10px] text-slate-500 mr-1"></i>${escapeTeacherHtml(t.university || 'Universitet')}</p>
              </div>
            </div>

            <!-- Department / Faculty -->
            ${t.department || t.faculty ? `
              <div class="mt-3 text-[11px] text-slate-400 bg-slate-950/60 p-2 rounded-lg border border-slate-800/80 flex items-center gap-2">
                <i class="fa-solid fa-microscope text-indigo-400 text-xs shrink-0"></i>
                <span class="truncate">${escapeTeacherHtml(t.department || t.faculty)}</span>
              </div>
            ` : ''}

            <!-- Bio snippet -->
            <p class="mt-2.5 text-xs text-slate-300 leading-relaxed line-clamp-2">
              ${escapeTeacherHtml(t.bio || 'Bioinformatika və molekulyar elmlər üzrə klubun akademik mentoru.')}
            </p>

            <!-- Specialties pills -->
            <div class="flex flex-wrap gap-1 mt-3">
              ${specs.slice(0, 3).map(s => `
                <span class="px-2 py-0.5 rounded-md bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 text-[10px] font-medium">
                  ${escapeTeacherHtml(s)}
                </span>
              `).join('')}
              ${specs.length > 3 ? `<span class="px-1.5 py-0.5 rounded-md bg-slate-800 text-slate-400 text-[10px]">+${specs.length - 3}</span>` : ''}
            </div>
          </div>

          <!-- Actions: BioMeet Call & Email & Profile -->
          <div class="pt-3 border-t border-slate-800/80 flex items-center justify-between gap-2 text-xs">
            <div class="flex items-center gap-1.5">
              ${t.email ? `
                <a href="mailto:${escapeTeacherHtml(t.email)}" class="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 text-xs font-semibold flex items-center gap-1.5 transition" title="E-poçt göndər">
                  <i class="fa-solid fa-envelope text-indigo-400"></i> <span class="hidden sm:inline">E-poçt</span>
                </a>
              ` : ''}
              ${t.phone ? `
                <a href="https://wa.me/${escapeTeacherHtml((t.phone || '').replace(/[^0-9]/g, ''))}" target="_blank" rel="noopener" class="px-2.5 py-1.5 rounded-lg bg-emerald-950/60 hover:bg-emerald-900/80 text-emerald-300 border border-emerald-800/60 text-xs font-semibold flex items-center gap-1.5 transition" title="WhatsApp ilə əlaqə">
                  <i class="fa-brands fa-whatsapp text-emerald-400"></i>
                </a>
              ` : ''}
            </div>

            <button onclick="BioMeetEngine.openScheduleModalFromPortal('teacher', true)" class="px-3 py-1.5 rounded-lg bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 text-white font-bold text-xs flex items-center gap-1.5 shadow transition active:scale-95" title="Birgə BioMeet Görüşü Təşkil Et">
              <i class="fa-solid fa-video text-[10px]"></i> <span>BioMeet</span>
            </button>
          </div>
        </div>
      `;
    }).join("");
  },

  filterColleagues(query) {
    this.renderColleaguesRoster(query, this.colleagueUniFilter);
  },

  filterColleaguesByUni(uni) {
    this.colleagueUniFilter = uni;
    const btnAll = document.getElementById("colleagueFilterBtn-all");
    const btnWCU = document.getElementById("colleagueFilterBtn-WCU");
    const btnBDU = document.getElementById("colleagueFilterBtn-BDU");
    const btnOther = document.getElementById("colleagueFilterBtn-Other");

    [btnAll, btnWCU, btnBDU, btnOther].forEach(b => {
      if (b) {
        b.className = "px-2.5 py-1.5 rounded-lg text-xs font-bold text-slate-400 hover:text-white transition whitespace-nowrap";
      }
    });

    const activeMap = {
      all: btnAll,
      WCU: btnWCU,
      BDU: btnBDU,
      Digər: btnOther
    };
    if (activeMap[uni]) {
      activeMap[uni].className = "px-2.5 py-1.5 rounded-lg text-xs font-bold text-cyan-300 bg-cyan-500/20 transition whitespace-nowrap";
    }

    this.renderColleaguesRoster(this.colleagueSearchQuery, uni);
  },

  filterStudents(searchQuery = "") {
    this.renderStudentsRoster(searchQuery);
  },

  renderStudentsRoster(searchQuery = "") {
    const container = document.getElementById("teacherStudentsRosterTableBody");
    if (!container) return;

    const data = typeof getClubData === "function" ? getClubData() : {};
    let members = (data.members || []).filter(m => m.status === "Aktiv" || m.status === "Təsdiqləndi");

    const badge = document.getElementById("teacherRosterCountBadge");
    if (badge) badge.innerText = `${members.length} Tələbə`;

    if (searchQuery.trim() !== "") {
      const q = searchQuery.toLowerCase();
      members = members.filter(m =>
        (m.fullName || "").toLowerCase().includes(q) ||
        (m.email || "").toLowerCase().includes(q) ||
        (m.major || "").toLowerCase().includes(q) ||
        (m.faculty || "").toLowerCase().includes(q) ||
        (m.username || "").toLowerCase().includes(q)
      );
    }

    if (members.length === 0) {
      container.innerHTML = `<tr><td colspan="5" class="text-center py-6 text-slate-500">Axtarışa uyğun aktiv tələbə tapılmadı.</td></tr>`;
      return;
    }

    container.innerHTML = members.map((mem, idx) => {
      const skills = Array.isArray(mem.skills) ? mem.skills : ["Python", "Genom Analizi"];
      return `
        <tr class="border-b border-slate-100 hover:bg-slate-50/80 transition text-xs">
          <td class="py-3 px-4 font-mono text-slate-500">#${idx + 1}</td>
          <td class="py-3 px-4">
            <div class="flex items-center gap-2.5">
              ${mem.photo ? `
                <img src="${mem.photo}" alt="${escapeTeacherHtml(mem.fullName)}" class="w-7 h-7 rounded-lg object-cover border border-teal-200 shrink-0" />
              ` : `
                <div class="w-7 h-7 rounded-lg bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-800 text-xs shrink-0 font-bold">
                  ${escapeTeacherHtml((mem.fullName || 'T')[0])}
                </div>
              `}
              <div class="min-w-0">
                <div class="font-bold text-slate-900 truncate">${escapeTeacherHtml(mem.fullName)}</div>
                <div class="text-[11px] font-mono text-cyan-700">@${escapeTeacherHtml(mem.username || 'uzv')}</div>
              </div>
            </div>
          </td>
          <td class="py-3 px-4 text-slate-700">
            <div>${escapeTeacherHtml(mem.faculty || 'WCU')}</div>
            <div class="text-[11px] text-teal-700 font-medium">${escapeTeacherHtml(mem.major || 'Biologiya')} (${escapeTeacherHtml(mem.course || 'II Kurs')})</div>
          </td>
          <td class="py-3 px-4">
            <div class="flex flex-wrap gap-1">
              ${skills.slice(0, 2).map(sk => `
                <span class="px-2 py-0.5 rounded-lg bg-teal-50 text-teal-800 border border-teal-200 text-[10px] font-semibold">
                  ${escapeTeacherHtml(sk)}
                </span>
              `).join("")}
            </div>
          </td>
          <td class="py-3 px-4 text-slate-500 font-mono text-[11px]">
            ${escapeTeacherHtml(mem.email || '')}
          </td>
        </tr>
      `;
    }).join("");
  },

  openEditProfileModal() {
    const isPres = typeof isPresidentLoggedIn === "function" && isPresidentLoggedIn();
    const teacher = this.getActiveTeacher();
    if (!teacher && !isPres) {
      if (typeof showToast === "function") {
        showToast("Müəllim profilini redaktə etmək üçün zəhmət olmasa hesabınıza daxil olun.", "warning");
      }
      if (typeof openTeacherLoginModal === "function") openTeacherLoginModal();
      return;
    }
    const currentTeacher = teacher || (typeof getClubData === "function" && getClubData().teachers?.[0]) || null;
    if (!currentTeacher) return;

    const modal = document.getElementById("editTeacherProfileModal");
    if (!modal) return;

    const elTitle = document.getElementById("editTeacherTitle");
    const elUni = document.getElementById("editTeacherUniversity");
    const elUniCustom = document.getElementById("editTeacherUniversityCustom");
    const elUniCustomWrap = document.getElementById("editTeacherUniCustomWrap");
    const elSpecialties = document.getElementById("editTeacherSpecialties");
    const elBio = document.getElementById("editTeacherBio");
    const elOrcid = document.getElementById("editTeacherOrcid");

    if (elTitle) elTitle.value = currentTeacher.title || "";
    if (elUni) {
      const standardUnis = [
        "Qərbi Kaspi Universiteti (WCU)", "Bakı Dövlət Universiteti (BDU)", "Azərbaycan Tibb Universiteti (ATU)",
        "Xəzər Universiteti", "Azərbaycan Dövlət Neft və Sənaye Universiteti (ADNSU)", "ADA Universiteti",
        "Bakı Mühəndislik Universiteti (BMU)", "Bakı Ali Neft Məktəbi (BANM)", "Fransız-Azərbaycan Universiteti (UFAZ)",
        "Azərbaycan Dövlət İqtisad Universiteti (UNEC)", "AMEA / AR ETN Molekulyar Biologiya və Biotexnologiyalar İnstitutu",
        "AR ETN Genetik Ehtiyatlar İnstitutu", "Cambridge University (MRC LMB)"
      ];
      if (standardUnis.includes(currentTeacher.university)) {
        elUni.value = currentTeacher.university;
        if (elUniCustomWrap) elUniCustomWrap.classList.add("hidden");
      } else if (currentTeacher.university) {
        elUni.value = "Digər";
        if (elUniCustom) elUniCustom.value = currentTeacher.university;
        if (elUniCustomWrap) elUniCustomWrap.classList.remove("hidden");
      } else {
        elUni.value = "Qərbi Kaspi Universiteti (WCU)";
        if (elUniCustomWrap) elUniCustomWrap.classList.add("hidden");
      }
    }
    if (elSpecialties) {
      elSpecialties.value = Array.isArray(currentTeacher.specialties) ? currentTeacher.specialties.join(", ") : (currentTeacher.specialties || "");
    }
    if (elBio) elBio.value = currentTeacher.bio || "";
    if (elOrcid) elOrcid.value = currentTeacher.orcid || "";

    modal.classList.remove("hidden");
  },

  closeEditProfileModal() {
    const modal = document.getElementById("editTeacherProfileModal");
    if (modal) modal.classList.add("hidden");
  },

  saveTeacherProfile(e) {
    if (e) e.preventDefault();

    const teacher = this.getActiveTeacher();
    if (!teacher) return;

    const data = typeof getClubData === "function" ? getClubData() : null;
    if (!data) return;

    const tIdx = (data.teachers || []).findIndex(t => t.id === teacher.id);
    if (tIdx === -1) return;

    const titleVal = (document.getElementById("editTeacherTitle")?.value || "").trim();
    let uniVal = (document.getElementById("editTeacherUniversity")?.value || "").trim();
    if (uniVal === "Digər") {
      const customVal = (document.getElementById("editTeacherUniversityCustom")?.value || "").trim();
      if (customVal) uniVal = customVal;
    }
    const specsVal = (document.getElementById("editTeacherSpecialties")?.value || "").trim();
    const bioVal = (document.getElementById("editTeacherBio")?.value || "").trim();
    const orcidVal = (document.getElementById("editTeacherOrcid")?.value || "").trim();

    const specArray = specsVal ? specsVal.split(",").map(s => s.trim()).filter(Boolean) : (data.teachers[tIdx].specialties || ["Bioinformatika"]);

    data.teachers[tIdx].title = typeof ClubSecurity !== "undefined" ? ClubSecurity.sanitizeText(titleVal) : titleVal;
    data.teachers[tIdx].university = typeof ClubSecurity !== "undefined" ? ClubSecurity.sanitizeText(uniVal) : uniVal;
    data.teachers[tIdx].specialties = specArray;
    data.teachers[tIdx].bio = typeof ClubSecurity !== "undefined" ? ClubSecurity.sanitizeText(bioVal) : bioVal;
    data.teachers[tIdx].orcid = typeof ClubSecurity !== "undefined" ? ClubSecurity.sanitizeText(orcidVal) : orcidVal;

    // Müraciət qeydini də yenilə
    const aIdx = (data.teacherApplications || []).findIndex(a => a.teacherId === teacher.id || a.id === teacher.id);
    if (aIdx !== -1) {
      data.teacherApplications[aIdx].title = data.teachers[tIdx].title;
      data.teacherApplications[aIdx].university = data.teachers[tIdx].university;
      data.teacherApplications[aIdx].specialties = data.teachers[tIdx].specialties;
      data.teacherApplications[aIdx].bio = data.teachers[tIdx].bio;
      data.teacherApplications[aIdx].orcid = data.teachers[tIdx].orcid;
    }

    if (typeof saveClubData === "function") saveClubData(data);

    this.closeEditProfileModal();
    this.renderHeader(data.teachers[tIdx]);

    if (typeof showToast === "function") {
      showToast("Müəllim profil məlumatları uğurla yeniləndi!", "success");
    }
  }
};

window.TeacherPortal = TeacherPortal;

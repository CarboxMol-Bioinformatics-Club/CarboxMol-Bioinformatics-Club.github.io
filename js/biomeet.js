// CarboxMol Bioinformatika Klubu - BioMeet Studio & Live Lecture Room Engine
// Canlı Görüntülü, Səsli Dərs Zalı, Ekran Paylaşımı, Ədalətli Görüş Sistemi və Qalıcı Dərs Qeydləri (IndexedDB Recorder Archive)

const BIOMEET_ROOMS = [
  {
    id: "general-lecture",
    name: "Ümumi Elmi Mühazirə Zalı",
    code: "CarboxMol_Bioinformatics_Club_General_Lecture",
    description: "Klubun həftəlik elmi mühazirələri, açılış dərsləri və ümumi tələbə görüşləri.",
    badge: "Əsas Zal",
    badgeColor: "bg-teal-500/20 text-teal-300 border-teal-500/30"
  },
  {
    id: "bioc-lab",
    name: "Bioconductor & Kodlaşdırma Laboratoriyası",
    code: "CarboxMol_Bioinformatics_Club_Bioc_Lab",
    description: "R, Python, Bash, NGS və AlphaFold üzrə praktiki kompüter laboratoriyası və canlı kod paylaşımı.",
    badge: "Praktiki Kod",
    badgeColor: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30"
  },
  {
    id: "guest-seminars",
    name: "Beynəlxalq Alimlər & Qonaq Seminarı",
    code: "CarboxMol_Bioinformatics_Club_Guest_Seminars",
    description: "Dünya şöhrətli alimlər (Prof. Qərib Mürşüdov və s.) ilə onlayn elmi müzakirələr və ustad dərsləri.",
    badge: "Xüsusi Zal",
    badgeColor: "bg-indigo-500/20 text-indigo-300 border-indigo-500/30"
  },
  {
    id: "journal-club",
    name: "Journal Club & Elmi Debat Otağı",
    code: "CarboxMol_Bioinformatics_Club_Journal_Club",
    description: "Nature, Cell, Science jurnallarındakı ən son bioinformatika məqalələrinin müzakirəsi.",
    badge: "Elmi Debat",
    badgeColor: "bg-purple-500/20 text-purple-300 border-purple-500/30"
  }
];

const BioMeetEngine = {
  currentRoom: BIOMEET_ROOMS[0],
  activeStream: null,
  screenStream: null,
  mediaRecorder: null,
  recordedChunks: [],
  isRecording: false,
  recordingType: "video", // "video" or "audio"
  recordingTimerInterval: null,
  recordingSeconds: 0,
  isVideoMuted: false,
  isAudioMuted: false,
  isScreenSharing: false,
  audioContext: null,
  analyser: null,
  animFrameId: null,
  activeMeeting: null,
  recordingsFilter: "all",
  recordingsSearchQuery: "",
  liveSyncHeartbeatInterval: null,
  originalDocTitle: "",
  bannerDismissedMeetingId: null,

  init() {
    this.renderRoomsList();
    this.renderMeetings();
    this.renderRecordingsArchive();
    this.bindEvents();
    this.checkAndSyncLiveMeetingState();
    this.startLiveSyncHeartbeat();
  },

  renderRoomsList() {
    const container = document.getElementById("biomeetRoomsList");
    if (!container) return;

    // Check which rooms currently have a live meeting
    const meetings = this.getMeetings();
    const liveMeetings = meetings.filter(m => m.status === "live");

    container.innerHTML = BIOMEET_ROOMS.map(room => {
      const isSelected = room.id === this.currentRoom.id;
      const liveMeetingInRoom = liveMeetings.find(m => m.roomId === room.id);

      return `
        <button onclick="BioMeetEngine.selectRoom('${room.id}')" class="w-full text-left p-3.5 rounded-2xl border transition flex flex-col gap-1.5 ${isSelected ? 'bg-teal-950/60 border-teal-500/60 text-white shadow-lg' : 'bg-slate-900/80 border-slate-800 hover:border-slate-700 text-slate-300'}">
          <div class="flex items-center justify-between gap-2">
            <span class="font-bold text-xs ${isSelected ? 'text-teal-300' : 'text-white'} flex items-center gap-1.5">
              ${liveMeetingInRoom ? '<span class="w-2 h-2 rounded-full bg-rose-500 animate-ping"></span>' : ''}
              ${room.name}
            </span>
            <div class="flex items-center gap-1">
              ${liveMeetingInRoom ? '<span class="px-1.5 py-0.5 rounded text-[9px] font-extrabold bg-rose-500/20 text-rose-300 border border-rose-500/40">🔴 CANLI</span>' : ''}
              <span class="px-2 py-0.5 rounded text-[10px] font-bold border ${room.badgeColor}">${room.badge}</span>
            </div>
          </div>
          <p class="text-[11px] text-slate-400 line-clamp-2 leading-relaxed">${room.description}</p>
        </button>
      `;
    }).join("");

    const activeRoomTitle = document.getElementById("activeRoomTitle");
    const activeRoomCode = document.getElementById("activeRoomCode");
    if (activeRoomTitle) activeRoomTitle.innerText = this.currentRoom.name;
    if (activeRoomCode) activeRoomCode.innerText = this.currentRoom.code;
  },

  selectRoom(roomId) {
    const r = BIOMEET_ROOMS.find(item => item.id === roomId);
    if (!r) return;
    this.currentRoom = r;
    this.renderRoomsList();
    showToast(`"${r.name}" seçildi!`, "info");
  },

  // ==========================================
  // 1. ƏDALƏTLİ GÖRÜŞ REZERVASİYASI VƏ CƏDVƏL SİSTEMİ (FAIR MEETING SCHEDULING)
  // ==========================================

  getMeetings() {
    if (typeof getClubData === "function") {
      const data = getClubData();
      return Array.isArray(data.meetings) ? data.meetings : [];
    }
    return [];
  },

  renderMeetings() {
    const liveContainer = document.getElementById("liveMeetingsContainer");
    const scheduledContainer = document.getElementById("scheduledMeetingsContainer");
    const liveCountBadge = document.getElementById("liveMeetingsCountBadge");
    const schedCountBadge = document.getElementById("schedMeetingsCountBadge");

    const meetings = this.getMeetings();
    const liveMeetings = meetings.filter(m => m.status === "live");
    const scheduledMeetings = meetings.filter(m => m.status === "scheduled");

    if (liveCountBadge) liveCountBadge.innerText = `${liveMeetings.length} Canlı`;
    if (schedCountBadge) schedCountBadge.innerText = `${scheduledMeetings.length} Planlaşdırılmış`;

    // 1. Canlı Görüşlər
    if (liveContainer) {
      if (liveMeetings.length === 0) {
        liveContainer.innerHTML = `
          <div class="col-span-full p-6 text-center bg-slate-900/60 rounded-2xl border border-slate-800/80 space-y-2">
            <span class="w-3 h-3 rounded-full bg-slate-600 inline-block"></span>
            <p class="text-xs text-slate-400">Hazırda heç bir zalda canlı görüş getmir. İstənilən üzv və ya müəllim yuxarıdakı düymə ilə canlı dərs başlada bilər.</p>
          </div>
        `;
      } else {
        liveContainer.innerHTML = liveMeetings.map(m => `
          <div class="glass-panel p-5 rounded-2xl border border-rose-500/40 bg-gradient-to-br from-slate-900 via-rose-950/20 to-slate-900 shadow-xl space-y-3.5 relative overflow-hidden">
            <div class="flex items-center justify-between gap-2">
              <span class="px-2.5 py-1 rounded-full text-[10px] font-extrabold bg-rose-500/20 text-rose-300 border border-rose-500/50 flex items-center gap-1.5 shadow-sm">
                <span class="w-2 h-2 rounded-full bg-rose-500 animate-ping"></span> İNDİ CANLI
              </span>
              <span class="px-2 py-0.5 rounded-full text-[10px] font-mono bg-slate-800 text-teal-300 border border-slate-700">
                ${m.room}
              </span>
            </div>

            <div class="space-y-1">
              <h4 class="text-sm font-bold text-white line-clamp-2">${m.title}</h4>
              <p class="text-xs text-slate-300 flex items-center gap-1.5">
                <i class="fa-solid fa-chalkboard-user text-teal-400"></i> Moderator: <strong>${m.hostName}</strong>
                <span class="px-1.5 py-0.2 rounded text-[10px] border ${m.hostBadgeColor || 'bg-slate-800 text-slate-300 border-slate-700'}">${m.hostRole || 'Klub'}</span>
              </p>
            </div>

            <p class="text-[11px] text-slate-400 line-clamp-2 leading-relaxed bg-slate-950/60 p-2.5 rounded-xl border border-slate-800/60">${m.agenda || 'Müzakirə və laboratoriya dərsi.'}</p>

            <div class="flex items-center justify-between gap-2 pt-2 border-t border-slate-800/80 text-xs">
              <span class="text-slate-400 flex items-center gap-1 text-[11px]">
                <i class="fa-solid fa-users text-teal-400"></i> <strong>${m.attendeesCount || 1}</strong> / ${m.maxAttendees || 50} nəfər
              </span>
              <div class="flex items-center gap-2">
                <button onclick="BioMeetEngine.joinMeeting('${m.id}')" class="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-extrabold text-xs flex items-center gap-1.5 shadow-md transition transform active:scale-95">
                  <i class="fa-solid fa-door-open"></i> <span>Dərsə Qoşul</span>
                </button>
                <button onclick="BioMeetEngine.copyMeetingInvite('${m.id}')" class="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition" title="Dəvət Linkini Kopyala">
                  <i class="fa-regular fa-copy"></i>
                </button>
              </div>
            </div>
          </div>
        `).join("");
      }
    }

    // 2. Planlaşdırılmış Görüşlər
    if (scheduledContainer) {
      if (scheduledMeetings.length === 0) {
        scheduledContainer.innerHTML = `
          <div class="col-span-full p-6 text-center bg-slate-900/60 rounded-2xl border border-slate-800/80 space-y-2">
            <i class="fa-regular fa-calendar-xmark text-slate-500 text-2xl"></i>
            <p class="text-xs text-slate-400">Gələcək üçün rezerv olunmuş görüş yoxdur. "+ Yeni Görüş Rezervasiya Et" düyməsindən istifadə edin.</p>
          </div>
        `;
      } else {
        scheduledContainer.innerHTML = scheduledMeetings.map(m => `
          <div class="glass-panel p-5 rounded-2xl border border-slate-800 hover:border-slate-700 transition bg-slate-900/60 space-y-3.5">
            <div class="flex items-center justify-between gap-2">
              <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 flex items-center gap-1">
                <i class="fa-regular fa-calendar"></i> ${m.date} • ${m.startTime}
              </span>
              <span class="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-slate-800 text-slate-300 border border-slate-700 truncate max-w-[140px]">
                ${m.room}
              </span>
            </div>

            <div class="space-y-1">
              <h4 class="text-sm font-bold text-white line-clamp-2">${m.title}</h4>
              <p class="text-xs text-slate-400 flex items-center gap-1.5">
                <i class="fa-solid fa-user text-indigo-400"></i> ${m.hostName}
                <span class="px-1.5 py-0.2 rounded text-[10px] border ${m.hostBadgeColor || 'bg-slate-800 text-slate-300 border-slate-700'}">${m.hostRole || 'Üzv'}</span>
              </p>
            </div>

            <p class="text-[11px] text-slate-400 line-clamp-2 leading-relaxed bg-slate-950/60 p-2.5 rounded-xl border border-slate-800/60">${m.agenda || 'Mövzu üzrə seminar və sual-cavab.'}</p>

            <div class="flex items-center justify-between gap-2 pt-2 border-t border-slate-800/80 text-xs">
              <span class="text-slate-400 text-[11px] flex items-center gap-1 font-mono">
                <i class="fa-regular fa-clock text-amber-400"></i> ${m.durationMinutes || 45} dəqiqə
              </span>
              <div class="flex items-center gap-2">
                <button onclick="BioMeetEngine.startScheduledMeeting('${m.id}')" class="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-teal-300 font-bold text-xs flex items-center gap-1 border border-teal-500/30 transition">
                  <i class="fa-solid fa-play text-[10px]"></i> <span>İndi Başlat</span>
                </button>
                <button onclick="BioMeetEngine.copyMeetingInvite('${m.id}')" class="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition" title="Dəvət Linkini Kopyala">
                  <i class="fa-regular fa-copy"></i>
                </button>
              </div>
            </div>
          </div>
        `).join("");
      }
    }
  },

  openScheduleModal(isInstant = false) {
    const modal = document.getElementById("scheduleMeetingModal");
    if (!modal) return;

    const titleEl = document.getElementById("schedModalTitle");
    const isInstantRadio = document.getElementById("schedIsLiveNow");
    const isLaterRadio = document.getElementById("schedIsLater");
    const dateTimeGroup = document.getElementById("schedDateTimeGroup");

    if (titleEl) {
      titleEl.innerText = isInstant ? "🔴 İndi Canlı Görüş Başlat" : "📅 Yeni Dərs və ya Görüş Rezervasiya Et";
    }

    if (isInstantRadio && isLaterRadio) {
      isInstantRadio.checked = isInstant;
      isLaterRadio.checked = !isInstant;
      if (dateTimeGroup) {
        dateTimeGroup.classList.toggle("hidden", isInstant);
      }
    }

    // Pre-fill Host Information based on current auth
    const hostNameInput = document.getElementById("schedHostName");
    const hostRoleSelect = document.getElementById("schedHostRole");

    if (typeof isPresidentLoggedIn === "function" && isPresidentLoggedIn()) {
      if (hostNameInput) hostNameInput.value = "Süleyman Hacızadə";
      if (hostRoleSelect) hostRoleSelect.value = "Klub Sədri";
    } else if (typeof isTeacherLoggedIn === "function" && isTeacherLoggedIn()) {
      const teacher = typeof getActiveTeacher === "function" ? getActiveTeacher() : null;
      if (hostNameInput) hostNameInput.value = teacher ? teacher.fullName : "Akademik Mentor";
      if (hostRoleSelect) hostRoleSelect.value = "Müəllim / Mentor";
    } else if (typeof getActiveMember === "function" && getActiveMember()) {
      const member = getActiveMember();
      if (hostNameInput) hostNameInput.value = member.fullName;
      if (hostRoleSelect) hostRoleSelect.value = "Klub Üzvü";
    }

    // Default Date & Time
    const dateInput = document.getElementById("schedDate");
    const timeInput = document.getElementById("schedTime");
    const now = new Date();
    if (dateInput) {
      dateInput.value = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
    }
    if (timeInput) {
      timeInput.value = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
    }

    modal.classList.remove("hidden");
  },

  closeScheduleModal() {
    const modal = document.getElementById("scheduleMeetingModal");
    if (modal) modal.classList.add("hidden");
  },

  toggleScheduleTime(isLiveNow) {
    const dateTimeGroup = document.getElementById("schedDateTimeGroup");
    if (dateTimeGroup) {
      dateTimeGroup.classList.toggle("hidden", isLiveNow);
    }
  },

  async submitMeeting(e) {
    if (e) e.preventDefault();

    const title = document.getElementById("schedTitle")?.value.trim();
    const roomId = document.getElementById("schedRoomId")?.value;
    const meetingType = document.getElementById("schedMeetingType")?.value;
    const hostName = document.getElementById("schedHostName")?.value.trim();
    const hostRole = document.getElementById("schedHostRole")?.value;
    const isLiveNow = document.getElementById("schedIsLiveNow")?.checked;
    const date = document.getElementById("schedDate")?.value;
    const time = document.getElementById("schedTime")?.value;
    const duration = document.getElementById("schedDuration")?.value || "45";
    const maxAttendees = document.getElementById("schedMaxAttendees")?.value || "50";
    const agenda = document.getElementById("schedAgenda")?.value.trim();

    if (!title || !hostName) {
      showToast("Zəhmət olmasa görüşün mövzusunu və moderator adını doldurun.", "warning");
      return;
    }

    const selectedRoom = BIOMEET_ROOMS.find(r => r.id === roomId) || this.currentRoom;

    // ƏDALƏTLİ TOQQUŞMA YOXLAMASI (Conflict Detection):
    // Eyni otaqda hazırda canlı görüş gedirsə, xəbərdarlıq et
    const existingMeetings = this.getMeetings();
    if (isLiveNow) {
      const activeInRoom = existingMeetings.find(m => m.roomId === selectedRoom.id && m.status === "live");
      if (activeInRoom) {
        showToast(`"${selectedRoom.name}" zalında hazırda "${activeInRoom.title}" dərsi davam edir! Zəhmət olmasa başqa boş otaq seçin və ya fərqli saat təyin edin.`, "error");
        return;
      }
    }

    const codeSuffix = Math.random().toString(36).substring(2, 7).toUpperCase();
    const newMeeting = {
      id: `meet_${Date.now()}`,
      title: title,
      room: selectedRoom.name,
      roomId: selectedRoom.id,
      meetingCode: `WCU-BIO-${codeSuffix}`,
      hostName: hostName,
      hostRole: hostRole || "Klub Üzvü",
      hostBadge: hostRole || "Üzv",
      hostBadgeColor: (hostRole && hostRole.includes("Sədr")) ? "bg-amber-500/20 text-amber-300 border-amber-500/40" : ((hostRole && hostRole.includes("Müəllim")) ? "bg-indigo-500/20 text-indigo-300 border-indigo-500/40" : "bg-teal-500/20 text-teal-300 border-teal-500/40"),
      date: isLiveNow ? "İndi Canlı" : date,
      startTime: isLiveNow ? "Hazırda" : time,
      durationMinutes: parseInt(duration) || 45,
      status: isLiveNow ? "live" : "scheduled",
      attendeesCount: 1,
      maxAttendees: parseInt(maxAttendees) || 50,
      agenda: agenda || "CarboxMol Bioinformatika Klubu elmi tədris sessiyası.",
      allowStudentMic: true,
      isRecorded: true,
      meetingType: meetingType || "Ümumi Mühazirə"
    };

    if (window.ClubDatabase && typeof window.ClubDatabase.saveMeeting === "function") {
      await window.ClubDatabase.saveMeeting(newMeeting);
    } else {
      const data = typeof getClubData === "function" ? getClubData() : null;
      if (data) {
        data.meetings = data.meetings || [];
        data.meetings.unshift(newMeeting);
        if (typeof saveClubData === "function") saveClubData(data);
      }
    }

    this.closeScheduleModal();
    this.renderMeetings();
    this.renderRoomsList();

    if (isLiveNow) {
      this.selectRoom(selectedRoom.id);
      this.activeMeeting = newMeeting;
      this.broadcastLiveMeetingStart(newMeeting);
      showToast(`"${title}" canlı dərsi başladı! Otağa daxil oldunuz.`, "success");
    } else {
      showToast(`Görüş uğurla cədvələ rezervasiya edildi!`, "success");
    }
  },

  joinMeeting(meetingId) {
    this.joinActiveLiveMeeting(meetingId);
  },

  startScheduledMeeting(meetingId) {
    const meetings = this.getMeetings();
    const m = meetings.find(item => item.id === meetingId);
    if (!m) return;

    m.status = "live";
    m.date = "İndi Canlı";
    m.startTime = "Hazırda";

    if (window.ClubDatabase && typeof window.ClubDatabase.saveMeeting === "function") {
      window.ClubDatabase.saveMeeting(m);
    }

    this.selectRoom(m.roomId);
    this.activeMeeting = m;
    this.broadcastLiveMeetingStart(m);
    this.renderMeetings();
    this.renderRoomsList();
    showToast(`"${m.title}" dərsi canlı rejimə keçirildi!`, "success");
  },

  copyMeetingInvite(meetingId) {
    const meetings = this.getMeetings();
    const m = meetings.find(item => item.id === meetingId);
    if (!m) return;

    const url = `${window.location.origin}${window.location.pathname}#biomeet?meeting=${m.id}&code=${m.meetingCode}`;
    const text = `🧬 [CarboxMol Bioinformatika Klubu] Canlı Dərs Dəvəti:\n\nMövzu: ${m.title}\nZal: ${m.room}\nModerator: ${m.hostName}\nVaxt: ${m.date} (${m.startTime})\nLink: ${url}`;

    navigator.clipboard.writeText(text).then(() => {
      showToast("Görüşün rəsmi dəvət linki kopyalandı!", "success");
    }).catch(() => {
      copyText(url, "Görüş Linki");
    });
  },

  // ==========================================
  // 2. QALICI DƏRS VƏ GÖRÜŞ QEYDLƏRİ ARXİVİ (PERSISTENT DATABASE RECORDINGS ARCHIVE)
  // ==========================================

  getRecordings() {
    if (typeof getClubData === "function") {
      const data = getClubData();
      return Array.isArray(data.recordings) ? data.recordings : [];
    }
    return [];
  },

  renderRecordingsArchive(filter = null) {
    if (filter) this.recordingsFilter = filter;
    const container = document.getElementById("recordingsArchiveGrid");
    const countBadge = document.getElementById("recordingsCountBadge");
    if (!container) return;

    let list = this.getRecordings();

    // Filter by type (video / audio)
    if (this.recordingsFilter !== "all") {
      list = list.filter(r => r.type === this.recordingsFilter);
    }

    // Search filter
    if (this.recordingsSearchQuery) {
      const q = this.recordingsSearchQuery.toLowerCase();
      list = list.filter(r => 
        r.title.toLowerCase().includes(q) ||
        r.room.toLowerCase().includes(q) ||
        (r.hostName && r.hostName.toLowerCase().includes(q))
      );
    }

    if (countBadge) countBadge.innerText = `${list.length} Qeyd`;

    // Filter tab buttons active style
    document.querySelectorAll(".rec-filter-btn").forEach(btn => {
      const isMatch = btn.getAttribute("data-filter") === this.recordingsFilter;
      btn.classList.toggle("bg-teal-500", isMatch);
      btn.classList.toggle("text-slate-950", isMatch);
      btn.classList.toggle("bg-slate-800", !isMatch);
      btn.classList.toggle("text-slate-300", !isMatch);
    });

    if (list.length === 0) {
      container.innerHTML = `
        <div class="col-span-full p-10 text-center bg-slate-900/60 rounded-3xl border border-slate-800 space-y-3">
          <i class="fa-solid fa-photo-film text-slate-500 text-3xl"></i>
          <h4 class="text-sm font-bold text-white">Heç bir dərs qeydi tapılmadı</h4>
          <p class="text-xs text-slate-400">Canlı studiyada mühazirə və ya audio qeyd apararaq verilənlər bazasına əlavə edin.</p>
        </div>
      `;
      return;
    }

    container.innerHTML = list.map(rec => {
      const isAudio = rec.type === "audio";
      return `
        <div class="glass-panel p-5 rounded-3xl border border-slate-800 hover:border-teal-500/40 transition bg-slate-900/70 flex flex-col justify-between space-y-4 shadow-xl group">
          <div class="space-y-3">
            
            <!-- Type & Room Badge -->
            <div class="flex items-center justify-between gap-2">
              <span class="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold flex items-center gap-1.5 ${isAudio ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40' : 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'}">
                <i class="fa-solid ${isAudio ? 'fa-microphone-lines' : 'fa-video'}"></i>
                ${isAudio ? 'SƏSLİ PODKAST' : 'VİDEO DƏRS'}
              </span>
              <span class="text-[10px] font-semibold text-slate-400 bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
                ${rec.duration || '00:00:00'}
              </span>
            </div>

            <!-- Title & Room -->
            <div class="space-y-1">
              <h4 class="text-sm font-extrabold text-white group-hover:text-teal-300 transition line-clamp-2">${rec.title}</h4>
              <p class="text-[11px] text-teal-400 font-medium truncate flex items-center gap-1">
                <i class="fa-solid fa-door-open text-[10px]"></i> ${rec.room}
              </p>
            </div>

            <!-- Host & Date -->
            <div class="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800/80 text-[11px] text-slate-300 space-y-1">
              <div class="flex items-center justify-between">
                <span class="text-slate-400">Çıxışçı:</span>
                <span class="font-bold text-white truncate max-w-[160px]">${rec.hostName || 'Klub Sədri / Müəllim'}</span>
              </div>
              <div class="flex items-center justify-between text-slate-400 text-[10px]">
                <span>Tarix: ${rec.date}</span>
                <span class="font-mono text-teal-300">${rec.sizeFormatted || '—'}</span>
              </div>
            </div>

            ${rec.summary ? `<p class="text-[11px] text-slate-400 line-clamp-2 leading-relaxed">${rec.summary}</p>` : ''}

          </div>

          <!-- Actions: Play, Download, Delete -->
          <div class="pt-3 border-t border-slate-800/80 flex items-center justify-between gap-2">
            <button onclick="BioMeetEngine.playRecording('${rec.id}')" class="px-4 py-2 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-400 hover:to-emerald-400 text-slate-950 font-extrabold text-xs flex items-center gap-1.5 shadow-md transition transform active:scale-95">
              <i class="fa-solid fa-play text-xs"></i> <span>İzlə / Dinlə</span>
            </button>

            <div class="flex items-center gap-1.5">
              <button onclick="BioMeetEngine.downloadRecording('${rec.id}')" class="p-2 rounded-xl bg-slate-950 hover:bg-slate-800 text-slate-300 hover:text-white transition border border-slate-800 text-xs" title="Faylı Yüklə (.webm)">
                <i class="fa-solid fa-download text-teal-400"></i>
              </button>
              <button onclick="BioMeetEngine.deleteRecording('${rec.id}')" class="p-2 rounded-xl bg-slate-950 hover:bg-rose-950 text-slate-400 hover:text-rose-300 transition border border-slate-800 text-xs" title="Qeydi Sil">
                <i class="fa-solid fa-trash-can"></i>
              </button>
            </div>
          </div>
        </div>
      `;
    }).join("");
  },

  async playRecording(recId) {
    const list = this.getRecordings();
    const rec = list.find(r => r.id === recId);
    if (!rec) return;

    const modal = document.getElementById("recordingPlayerModal");
    const titleEl = document.getElementById("playerModalTitle");
    const metaEl = document.getElementById("playerModalMeta");
    const videoEl = document.getElementById("playerModalVideo");
    const audioBanner = document.getElementById("playerAudioWaveBanner");
    const downloadBtn = document.getElementById("playerModalDownloadBtn");

    if (!modal || !videoEl) return;

    if (titleEl) titleEl.innerText = rec.title;
    if (metaEl) metaEl.innerText = `${rec.room} • Çıxışçı: ${rec.hostName} • ${rec.date} (${rec.duration})`;

    // Check if Blob is in IndexedDB
    let blob = null;
    if (window.ClubDatabase && typeof window.ClubDatabase.getRecordingBlob === "function") {
      blob = await window.ClubDatabase.getRecordingBlob(recId);
    }

    if (blob) {
      const url = URL.createObjectURL(blob);
      videoEl.src = url;
      if (downloadBtn) {
        downloadBtn.href = url;
        downloadBtn.download = `CarboxMol_Bioinformatics_Club_${rec.roomId}_${rec.id}.webm`;
      }
    } else {
      // Fallback demo sample video/audio
      videoEl.src = "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";
      if (downloadBtn) {
        downloadBtn.href = "#";
        downloadBtn.onclick = () => showToast("Bu arxiv qeydi ilkin nümayiş bazasındadır.", "info");
      }
    }

    if (audioBanner) {
      audioBanner.classList.toggle("hidden", rec.type !== "audio");
    }

    modal.classList.remove("hidden");
    videoEl.play().catch(() => {});
  },

  closeRecordingPlayer() {
    const modal = document.getElementById("recordingPlayerModal");
    const videoEl = document.getElementById("playerModalVideo");
    if (videoEl) {
      videoEl.pause();
      videoEl.src = "";
    }
    if (modal) modal.classList.add("hidden");
  },

  async downloadRecording(recId) {
    const list = this.getRecordings();
    const rec = list.find(r => r.id === recId);
    if (!rec) return;

    let blob = null;
    if (window.ClubDatabase && typeof window.ClubDatabase.getRecordingBlob === "function") {
      blob = await window.ClubDatabase.getRecordingBlob(recId);
    }

    if (blob) {
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `CarboxMol_Bioinformatics_Club_${rec.roomId}_${rec.id}.webm`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      showToast(`"${rec.title}" uğurla kompüterinizə endirildi!`, "success");
    } else {
      showToast(`Qeyd bazadan oxunur... Yükləmə linki yaradıldı.`, "info");
    }
  },

  async deleteRecording(recId) {
    if (!confirm("Bu dərs qeydini verilənlər bazasından silmək istədiyinizə əminsiniz?")) return;

    if (window.ClubDatabase && typeof window.ClubDatabase.deleteRecording === "function") {
      await window.ClubDatabase.deleteRecording(recId);
    } else {
      const data = typeof getClubData === "function" ? getClubData() : null;
      if (data) {
        data.recordings = (data.recordings || []).filter(r => r.id !== recId);
        if (typeof saveClubData === "function") saveClubData(data);
      }
    }

    this.renderRecordingsArchive();
    showToast("Dərs qeydi bazadan silindi.", "info");
  },

  // ==========================================
  // 3. CANLI WEBRTC KAMERA, MİKROFON VƏ EKRAN PAYLAŞIMI
  // ==========================================

  async startCamera() {
    try {
      if (this.activeStream) {
        this.stopCamera();
      }

      let stream = null;
      try {
        stream = await navigator.mediaDevices.getUserMedia({
          video: { width: { ideal: 1280 }, height: { ideal: 720 } },
          audio: true
        });
      } catch (errConstraint) {
        // Fallback 1: standart məhdudiyyətsiz video və audio
        try {
          stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
        } catch (errBoth) {
          // Fallback 2: yalnız mikrofon
          try {
            stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            showToast("Kamera tapılmadı və ya bloklandı, yalnız mikrofon aktivləşdirildi.", "info");
          } catch (errAudio) {
            // Fallback 3: yalnız kamera
            stream = await navigator.mediaDevices.getUserMedia({ video: true });
            showToast("Mikrofon tapılmadı və ya bloklandı, yalnız kamera aktivləşdirildi.", "info");
          }
        }
      }

      if (!stream) throw new Error("Media axını əldə edilmədi.");

      this.activeStream = stream;
      const videoEl = document.getElementById("biomeetVideoPreview");
      if (videoEl) {
        videoEl.srcObject = stream;
        videoEl.play().catch(() => {});
      }

      this.updateStatusPill(true);
      if (stream.getAudioTracks().length > 0) {
        this.initAudioVisualizer(stream);
      }
      showToast("Kamera və mikrofon uğurla aktivləşdirildi!", "success");
    } catch (err) {
      console.warn("Media devices error:", err);
      showToast("Kamera və ya mikrofona icazə verilmədi. Zəhmət olmasa brauzerin URL sətrindəki kilid (🔒) işarəsinə klikləyərək Kamera və Mikrofona 'İcazə ver' (Allow) seçin.", "warning");
    }
  },

  stopCamera() {
    if (this.activeStream) {
      this.activeStream.getTracks().forEach(track => track.stop());
      this.activeStream = null;
    }
    if (this.screenStream) {
      this.screenStream.getTracks().forEach(track => track.stop());
      this.screenStream = null;
    }
    const videoEl = document.getElementById("biomeetVideoPreview");
    if (videoEl) videoEl.srcObject = null;

    if (this.animFrameId) cancelAnimationFrame(this.animFrameId);
    this.updateStatusPill(false);
  },

  toggleVideo() {
    if (!this.activeStream) {
      this.startCamera();
      return;
    }
    const videoTrack = this.activeStream.getVideoTracks()[0];
    if (videoTrack) {
      videoTrack.enabled = !videoTrack.enabled;
      this.isVideoMuted = !videoTrack.enabled;
      const btn = document.getElementById("btnToggleVideo");
      if (btn) {
        btn.classList.toggle("bg-rose-600", this.isVideoMuted);
        btn.classList.toggle("bg-slate-800", !this.isVideoMuted);
        btn.innerHTML = this.isVideoMuted ? '<i class="fa-solid fa-video-slash text-white"></i>' : '<i class="fa-solid fa-video text-teal-400"></i>';
      }
      showToast(this.isVideoMuted ? "Kamera söndürüldü" : "Kamera yandırıldı", "info");
    }
  },

  toggleAudio() {
    if (!this.activeStream) {
      this.startCamera();
      return;
    }
    const audioTrack = this.activeStream.getAudioTracks()[0];
    if (audioTrack) {
      audioTrack.enabled = !audioTrack.enabled;
      this.isAudioMuted = !audioTrack.enabled;
      const btn = document.getElementById("btnToggleAudio");
      if (btn) {
        btn.classList.toggle("bg-rose-600", this.isAudioMuted);
        btn.classList.toggle("bg-slate-800", !this.isAudioMuted);
        btn.innerHTML = this.isAudioMuted ? '<i class="fa-solid fa-microphone-slash text-white"></i>' : '<i class="fa-solid fa-microphone text-teal-400"></i>';
      }
      showToast(this.isAudioMuted ? "Mikrofon səssizləşdirildi" : "Mikrofon aktiv edildi", "info");
    }
  },

  async toggleScreenShare() {
    if (this.isScreenSharing) {
      if (this.screenStream) {
        this.screenStream.getTracks().forEach(t => t.stop());
        this.screenStream = null;
      }
      this.isScreenSharing = false;
      this.startCamera();
      const btn = document.getElementById("btnToggleScreen");
      if (btn) btn.classList.remove("bg-cyan-600");
      showToast("Ekran paylaşımı dayandırıldı.", "info");
      return;
    }

    try {
      const screenStream = await navigator.mediaDevices.getDisplayMedia({
        video: { cursor: "always" },
        audio: true
      });

      this.screenStream = screenStream;
      this.isScreenSharing = true;

      const videoEl = document.getElementById("biomeetVideoPreview");
      if (videoEl) {
        videoEl.srcObject = screenStream;
        videoEl.play();
      }

      const btn = document.getElementById("btnToggleScreen");
      if (btn) btn.classList.add("bg-cyan-600");

      screenStream.getVideoTracks()[0].onended = () => {
        this.toggleScreenShare();
      };

      showToast("Ekran canlı paylaşıldı!", "success");
    } catch (err) {
      console.warn("Screen share error:", err);
      showToast("Ekran paylaşımı ləğv edildi.", "warning");
    }
  },

  // ==========================================
  // 4. CANLI DƏRS YAZMA MÜHƏRRİKİ (MEDIARECORDER & INDEXEDDB ENGINE)
  // ==========================================

  async startRecording(type = "video") {
    if (this.isRecording) return;

    this.ensureLiveMeetingForRoom(this.currentRoom, type === "audio" ? "Səsli Mühazirə (Audio)" : "Görüntülü Dərs (Video & Səs)");

    if (!this.activeStream && !this.screenStream) {
      await this.startCamera();
      if (!this.activeStream) return;
    }

    this.recordingType = type;
    const streamToRecord = this.screenStream || this.activeStream;
    this.recordedChunks = [];

    try {
      let mimeType = "video/webm;codecs=vp8,opus";
      if (type === "audio") {
        mimeType = "audio/webm;codecs=opus";
      }

      if (!MediaRecorder.isTypeSupported(mimeType)) {
        mimeType = type === "audio" ? "audio/webm" : "video/webm";
      }

      const recorder = new MediaRecorder(streamToRecord, { mimeType });
      this.mediaRecorder = recorder;

      recorder.ondataavailable = (e) => {
        if (e.data && e.data.size > 0) {
          this.recordedChunks.push(e.data);
        }
      };

      recorder.onstop = () => {
        this.handleRecordingStopped();
      };

      recorder.start(1000); // chunk every second
      this.isRecording = true;
      this.startRecordingTimer();
      this.updateRecordingUI(true);
      showToast(type === "audio" ? "Səsli dərs yazılması başladı (REC)" : "Görüntülü dərs yazılması başladı (REC)", "success");
    } catch (err) {
      console.error("Recording error:", err);
      showToast("Yazma mühərriki işə düşmədi: " + err.message, "warning");
    }
  },

  stopRecording() {
    if (!this.isRecording || !this.mediaRecorder) return;
    this.mediaRecorder.stop();
    this.isRecording = false;
    this.stopRecordingTimer();
    this.updateRecordingUI(false);
  },

  startRecordingTimer() {
    this.recordingSeconds = 0;
    const timerEl = document.getElementById("recordingTimerBadge");
    if (timerEl) timerEl.innerText = "00:00:00";

    this.recordingTimerInterval = setInterval(() => {
      this.recordingSeconds++;
      const hrs = String(Math.floor(this.recordingSeconds / 3600)).padStart(2, "0");
      const mins = String(Math.floor((this.recordingSeconds % 3600) / 60)).padStart(2, "0");
      const secs = String(this.recordingSeconds % 60).padStart(2, "0");
      if (timerEl) timerEl.innerText = `${hrs}:${mins}:${secs}`;
    }, 1000);
  },

  stopRecordingTimer() {
    if (this.recordingTimerInterval) {
      clearInterval(this.recordingTimerInterval);
      this.recordingTimerInterval = null;
    }
  },

  async handleRecordingStopped() {
    const isAudio = this.recordingType === "audio";
    const mimeType = isAudio ? "audio/webm" : "video/webm";
    const extension = isAudio ? "webm" : "webm";
    const blob = new Blob(this.recordedChunks, { type: mimeType });
    const url = URL.createObjectURL(blob);

    const now = new Date();
    const dateStr = `${now.getFullYear()}_${String(now.getMonth() + 1).padStart(2, '0')}_${String(now.getDate()).padStart(2, '0')}`;
    const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
    const filename = `CarboxMol_Bioinformatics_Club_${this.currentRoom.id}_${dateStr}.${extension}`;

    // Format duration
    const hrs = String(Math.floor(this.recordingSeconds / 3600)).padStart(2, "0");
    const mins = String(Math.floor((this.recordingSeconds % 3600) / 60)).padStart(2, "0");
    const secs = String(this.recordingSeconds % 60).padStart(2, "0");
    const durationFormatted = `${hrs}:${mins}:${secs}`;

    // Format size
    const sizeMB = (blob.size / (1024 * 1024)).toFixed(1);
    const sizeFormatted = `${sizeMB} MB`;

    // Detect user role & name
    let hostName = "Klub Sədri / Müəllim";
    let hostRole = "Klub Rəhbərliyi";
    if (typeof isPresidentLoggedIn === "function" && isPresidentLoggedIn()) {
      hostName = "Süleyman Hacızadə";
      hostRole = "Klub Sədri";
    } else if (typeof isTeacherLoggedIn === "function" && isTeacherLoggedIn()) {
      const teacher = typeof getActiveTeacher === "function" ? getActiveTeacher() : null;
      hostName = teacher ? teacher.fullName : "Akademik Mentor";
      hostRole = "Müəllim / Mentor";
    } else if (typeof getActiveMember === "function" && getActiveMember()) {
      hostName = getActiveMember().fullName;
      hostRole = "Klub Üzvü";
    }

    const currentMeeting = this.activeMeeting;
    const title = currentMeeting ? currentMeeting.title : `${this.currentRoom.name} - Dərs Qeydi`;

    const recMeta = {
      id: `rec_${Date.now()}`,
      title: title,
      room: this.currentRoom.name,
      roomId: this.currentRoom.id,
      meetingCode: currentMeeting ? currentMeeting.meetingCode : this.currentRoom.code,
      hostName: hostName,
      hostRole: hostRole,
      type: this.recordingType,
      duration: durationFormatted,
      sizeFormatted: sizeFormatted,
      date: `${now.getDate()} Oktyabr ${now.getFullYear()}`,
      time: timeStr,
      timestamp: Date.now(),
      tags: [this.currentRoom.badge, isAudio ? "Səsli Podkast" : "Video Dərs", "CarboxMol Bioinformatika Klubu"],
      summary: `${this.currentRoom.name} üzrə canlı dərs və mühazirə qeydi.`
    };

    // 1. ZƏMANƏTLİ QALICI YADDAŞ: IndexedDB və LocalStorage bazasına yaz
    if (window.ClubDatabase && typeof window.ClubDatabase.saveRecording === "function") {
      await window.ClubDatabase.saveRecording(recMeta, blob);
    } else {
      const clubData = typeof getClubData === "function" ? getClubData() : null;
      if (clubData) {
        clubData.recordings = clubData.recordings || [];
        clubData.recordings.unshift(recMeta);
        if (typeof saveClubData === "function") saveClubData(clubData);
      }
    }

    // 2. Arxivi dərhal yenidən render et
    this.renderRecordingsArchive();

    // 3. UI-da pleyer və yükləmə düyməsini aktivləşdir
    const downloadSection = document.getElementById("recordedDownloadSection");
    const downloadBtn = document.getElementById("btnDownloadRecording");
    const previewEl = document.getElementById("recordedPlaybackVideo");

    if (downloadSection) downloadSection.classList.remove("hidden");
    if (previewEl) {
      previewEl.src = url;
      previewEl.load();
    }

    if (downloadBtn) {
      downloadBtn.href = url;
      downloadBtn.download = filename;
    }

    showToast("Dərs qeydi (Video/Audio) həm brauzerin IndexedDB bazasında daimi saxlanıldı, həm də arxivə əlavə edildi!", "success");
  },

  updateRecordingUI(isRec) {
    const badge = document.getElementById("recIndicatorBadge");
    const startVideoBtn = document.getElementById("btnStartRecordVideo");
    const startAudioBtn = document.getElementById("btnStartRecordAudio");
    const stopBtn = document.getElementById("btnStopRecord");

    if (badge) badge.classList.toggle("hidden", !isRec);
    if (startVideoBtn) startVideoBtn.classList.toggle("hidden", isRec);
    if (startAudioBtn) startAudioBtn.classList.toggle("hidden", isRec);
    if (stopBtn) stopBtn.classList.toggle("hidden", !isRec);
  },

  updateStatusPill(isActive) {
    const pill = document.getElementById("biomeetStatusPill");
    if (pill) {
      pill.innerHTML = isActive 
        ? '<span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span><span class="text-emerald-300">Kamera & Mikrofon Aktivdir</span>'
        : '<span class="w-2 h-2 rounded-full bg-slate-500"></span><span class="text-slate-400">Gözləmə Rejimi</span>';
    }
  },

  // 5. CANLI AUDIO WAVEFORM VİZUALİZATORU
  initAudioVisualizer(stream) {
    try {
      const canvas = document.getElementById("biomeetAudioCanvas");
      if (!canvas) return;

      const audioTrack = stream.getAudioTracks()[0];
      if (!audioTrack) return;

      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.audioContext = new AudioContext();
      const source = this.audioContext.createMediaStreamSource(stream);
      this.analyser = this.audioContext.createAnalyser();
      this.analyser.fftSize = 64;
      source.connect(this.analyser);

      const bufferLength = this.analyser.frequencyBinCount;
      const dataArray = new Uint8Array(bufferLength);
      const ctx = canvas.getContext("2d");

      const draw = () => {
        this.animFrameId = requestAnimationFrame(draw);
        this.analyser.getByteFrequencyData(dataArray);

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const barWidth = (canvas.width / bufferLength) * 1.5;
        let x = 0;

        for (let i = 0; i < bufferLength; i++) {
          const barHeight = (dataArray[i] / 255) * canvas.height;
          ctx.fillStyle = `rgba(45, 212, 191, ${dataArray[i] / 255 + 0.2})`;
          ctx.fillRect(x, canvas.height - barHeight, barWidth, barHeight);
          x += barWidth + 2;
        }
      };

      draw();
    } catch (e) {
      console.warn("Audio visualizer error:", e);
    }
  },

  // 6. QRUP KONFRANSI
  launchGroupConference() {
    const iframeContainer = document.getElementById("jitsiConferenceContainer");
    const localStudioContainer = document.getElementById("localStudioContainer");
    const frame = document.getElementById("jitsiMeetingIframe");

    if (!iframeContainer || !frame) return;

    this.stopCamera();

    // Avtomatik olaraq bu zal üçün canlı dərsi təmin et və bütün sayta yayımla
    this.ensureLiveMeetingForRoom(this.currentRoom, "Qrup Konfransı (Video & Audio)");

    const roomCode = encodeURIComponent(this.currentRoom.code);
    frame.src = `https://meet.jit.si/${roomCode}#config.prejoinPageEnabled=false&config.disableDeepLinking=true&interfaceConfig.APP_NAME=WCU+Bioinformatics+Club`;

    if (localStudioContainer) localStudioContainer.classList.add("hidden");
    iframeContainer.classList.remove("hidden");

    showToast(`"${this.currentRoom.name}" qrup konfrans zalına qoşuldunuz!`, "success");
  },

  returnToLocalStudio() {
    const iframeContainer = document.getElementById("jitsiConferenceContainer");
    const localStudioContainer = document.getElementById("localStudioContainer");
    const frame = document.getElementById("jitsiMeetingIframe");

    if (frame) frame.src = "";
    if (iframeContainer) iframeContainer.classList.add("hidden");
    if (localStudioContainer) localStudioContainer.classList.remove("hidden");
  },

  copyRoomLink() {
    const url = `${window.location.origin}${window.location.pathname}#biomeet?room=${this.currentRoom.id}`;
    navigator.clipboard.writeText(url).then(() => {
      showToast("Dərs zalının dəvət linki kopyalandı!", "success");
    }).catch(() => {
      copyText(url, "Dərs Zalı Linki");
    });
  },

  openInNewTab() {
    const roomCode = encodeURIComponent(this.currentRoom.code);
    const jitsiUrl = `https://meet.jit.si/${roomCode}#config.prejoinPageEnabled=false&config.disableDeepLinking=true&interfaceConfig.APP_NAME=WCU+Bioinformatics+Club`;
    window.open(jitsiUrl, "_blank", "noopener,noreferrer");
    showToast(`"${this.currentRoom.name}" yeni pəncərədə açıldı. Kamera və mikrofona icazə verərək birbaşa qoşula bilərsiniz.`, "success");
  },

  // ==========================================
  // 7. BÜTÜN SAYT ÜZRƏ REALTAYM CANLI DƏRS SİNXRONİZASİYASI VƏ QOŞULMA SİSTEMİ
  // ==========================================

  getCurrentHostInfo() {
    let hostName = "Klub Üzvü";
    let hostRole = "Klub Üzvü";
    let hostBadgeColor = "bg-teal-500/20 text-teal-300 border-teal-500/40";

    if (typeof isPresidentLoggedIn === "function" && isPresidentLoggedIn()) {
      hostName = "Süleyman Hacızadə";
      hostRole = "Klub Sədri";
      hostBadgeColor = "bg-amber-500/20 text-amber-300 border-amber-500/40";
    } else if (typeof isTeacherLoggedIn === "function" && isTeacherLoggedIn()) {
      const teacher = typeof getActiveTeacher === "function" ? getActiveTeacher() : null;
      hostName = teacher ? teacher.fullName : "Akademik Mentor";
      hostRole = "Müəllim / Mentor";
      hostBadgeColor = "bg-indigo-500/20 text-indigo-300 border-indigo-500/40";
    } else if (typeof getActiveMember === "function" && getActiveMember()) {
      hostName = getActiveMember().fullName;
      hostRole = "Klub Üzvü";
      hostBadgeColor = "bg-teal-500/20 text-teal-300 border-teal-500/40";
    }
    return { hostName, hostRole, hostBadgeColor };
  },

  getActiveLiveMeeting() {
    const meetings = this.getMeetings();
    const live = meetings.filter(m => m.status === "live");
    if (live.length === 0) return null;
    return live[0];
  },

  checkAndSyncLiveMeetingState() {
    const liveMeeting = this.getActiveLiveMeeting();
    const banner = document.getElementById("globalLiveMeetingBanner");
    const navDot = document.getElementById("navBioMeetPulseDot");
    const navBadge = document.getElementById("navBioMeetLiveBadge");
    const mobileDot = document.getElementById("mobileBioMeetPulseDot");
    const mobileBadge = document.getElementById("mobileBioMeetLiveBadge");

    if (!this.originalDocTitle && document.title && !document.title.includes("[CANLI DƏRS]")) {
      this.originalDocTitle = document.title;
    }

    if (liveMeeting) {
      this.activeMeeting = liveMeeting;

      // 1. Navigation live pulse indicators
      if (navDot) navDot.classList.remove("hidden");
      if (navBadge) navBadge.classList.remove("hidden");
      if (mobileDot) mobileDot.classList.remove("hidden");
      if (mobileBadge) mobileBadge.classList.remove("hidden");

      // 2. Global banner content & visibility (if not dismissed for this meeting id)
      if (banner) {
        if (this.bannerDismissedMeetingId !== liveMeeting.id) {
          banner.classList.remove("hidden");
        }
        const titleEl = document.getElementById("liveBannerTitle");
        const roomEl = document.getElementById("liveBannerRoom");
        const typeEl = document.getElementById("liveBannerType");
        const hostEl = document.getElementById("liveBannerHost");
        const attendeesEl = document.getElementById("liveBannerAttendees");

        if (titleEl) titleEl.innerText = liveMeeting.title || "Canlı Elmi Mühazirə";
        if (roomEl) roomEl.innerText = liveMeeting.room || "Ümumi Elmi Mühazirə Zalı";
        if (typeEl) typeEl.innerText = liveMeeting.meetingType || "Canlı Mühazirə";
        if (hostEl) hostEl.innerText = liveMeeting.hostName || "Klub Rəhbərliyi";
        if (attendeesEl) attendeesEl.innerText = `${liveMeeting.attendeesCount || 1} iştirakçı`;
      }

      // 3. Browser tab title indicator
      const dynamicTitle = `🔴 [CANLI DƏRS] ${liveMeeting.title} — CarboxMol Bioinformatika Klubu`;
      if (document.title !== dynamicTitle) {
        document.title = dynamicTitle;
      }
    } else {
      // Hazırda canlı dərs yoxdur
      if (navDot) navDot.classList.add("hidden");
      if (navBadge) navBadge.classList.add("hidden");
      if (mobileDot) mobileDot.classList.add("hidden");
      if (mobileBadge) mobileBadge.classList.add("hidden");
      if (banner) banner.classList.add("hidden");

      if (this.originalDocTitle && document.title.includes("[CANLI DƏRS]")) {
        document.title = this.originalDocTitle;
      }
    }
  },

  startLiveSyncHeartbeat() {
    if (this.liveSyncHeartbeatInterval) {
      clearInterval(this.liveSyncHeartbeatInterval);
    }
    this.liveSyncHeartbeatInterval = setInterval(() => {
      this.checkAndSyncLiveMeetingState();
    }, 4000);
  },

  playLiveChime() {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      if (ctx.state === "suspended") {
        ctx.resume();
      }

      const now = ctx.currentTime;
      // Ton 1: C5 (523.25 Hz)
      const osc1 = ctx.createOscillator();
      const gain1 = ctx.createGain();
      osc1.type = "sine";
      osc1.frequency.setValueAtTime(523.25, now);
      gain1.gain.setValueAtTime(0.12, now);
      gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
      osc1.connect(gain1);
      gain1.connect(ctx.destination);
      osc1.start(now);
      osc1.stop(now + 0.35);

      // Ton 2: G5 (783.99 Hz)
      const osc2 = ctx.createOscillator();
      const gain2 = ctx.createGain();
      osc2.type = "sine";
      osc2.frequency.setValueAtTime(783.99, now + 0.15);
      gain2.gain.setValueAtTime(0.15, now + 0.15);
      gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.55);
      osc2.connect(gain2);
      gain2.connect(ctx.destination);
      osc2.start(now + 0.15);
      osc2.stop(now + 0.55);
    } catch (e) {
      console.warn("Live chime audio error:", e);
    }
  },

  async broadcastLiveMeetingStart(meeting) {
    if (!meeting) return;
    meeting.status = "live";
    this.activeMeeting = meeting;
    this.bannerDismissedMeetingId = null;

    const payload = {
      type: "LIVE_MEETING_STARTED",
      action: "LIVE_MEETING_STARTED",
      meeting: meeting,
      timestamp: Date.now()
    };

    // 1. Yerli brauzer tabları üçün BroadcastChannel
    if (window.SyncEngine) {
      window.SyncEngine.broadcast("LIVE_MEETING_STARTED", payload);
    }

    // 2. Storage event sinxronizasiyası
    try {
      localStorage.setItem("wcu_live_meeting_sync_event", JSON.stringify(payload));
    } catch (e) {}

    // 3. Bulud SSE / API sinxronizasiyası
    try {
      fetch("/api/sync", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      }).catch(() => {});
    } catch (e) {}

    this.checkAndSyncLiveMeetingState();
  },

  async broadcastLiveMeetingEnd(meetingId) {
    const id = meetingId || (this.activeMeeting ? this.activeMeeting.id : null);
    if (!id) return;

    const meetings = this.getMeetings();
    const target = meetings.find(m => m.id === id);
    if (target) {
      target.status = "finished";
      if (window.ClubDatabase && typeof window.ClubDatabase.saveMeeting === "function") {
        window.ClubDatabase.saveMeeting(target);
      } else {
        const data = typeof getClubData === "function" ? getClubData() : null;
        if (data && typeof saveClubData === "function") saveClubData(data);
      }
    }

    this.activeMeeting = null;

    const payload = {
      type: "LIVE_MEETING_ENDED",
      action: "LIVE_MEETING_ENDED",
      meetingId: id,
      timestamp: Date.now()
    };

    if (window.SyncEngine) {
      window.SyncEngine.broadcast("LIVE_MEETING_ENDED", payload);
    }

    try {
      localStorage.setItem("wcu_live_meeting_sync_event", JSON.stringify(payload));
    } catch (e) {}

    try {
      fetch("/api/sync", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      }).catch(() => {});
    } catch (e) {}

    this.renderMeetings();
    this.renderRoomsList();
    this.checkAndSyncLiveMeetingState();
  },

  broadcastLiveAttendeeJoin(meetingId) {
    if (!meetingId) return;
    const meetings = this.getMeetings();
    const target = meetings.find(m => m.id === meetingId);
    if (target) {
      target.attendeesCount = (target.attendeesCount || 1) + 1;
      if (window.ClubDatabase && typeof window.ClubDatabase.saveMeeting === "function") {
        window.ClubDatabase.saveMeeting(target);
      }
    }

    const payload = {
      type: "LIVE_MEETING_ATTENDEE_JOINED",
      action: "LIVE_MEETING_ATTENDEE_JOINED",
      meetingId: meetingId,
      attendeesCount: target ? target.attendeesCount : 2,
      timestamp: Date.now()
    };

    if (window.SyncEngine) {
      window.SyncEngine.broadcast("LIVE_MEETING_ATTENDEE_JOINED", payload);
    }

    try {
      localStorage.setItem("wcu_live_meeting_sync_event", JSON.stringify(payload));
    } catch (e) {}

    try {
      fetch("/api/sync", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      }).catch(() => {});
    } catch (e) {}

    this.checkAndSyncLiveMeetingState();
  },

  handleLiveSyncEvent(event) {
    if (!event) return;
    const type = event.type || event.action;

    if (type === "LIVE_MEETING_STARTED") {
      const incoming = event.meeting || event.payload?.meeting;
      if (!incoming) return;

      // Yerli verilənlər bazasını yenilə
      const data = typeof getClubData === "function" ? getClubData() : null;
      if (data) {
        data.meetings = data.meetings || [];
        const idx = data.meetings.findIndex(m => m.id === incoming.id);
        if (idx === -1) {
          data.meetings.unshift(incoming);
        } else {
          data.meetings[idx] = { ...data.meetings[idx], ...incoming, status: "live" };
        }
        if (typeof saveClubData === "function") saveClubData(data);
      }

      this.activeMeeting = incoming;
      this.bannerDismissedMeetingId = null;

      // Xoş səsli zəng siqnalı
      this.playLiveChime();

      // Birbaşa dərsə qoşulmaq üçün interaktiv kliklənən Toast bildirişi
      if (typeof showToast === "function") {
        showToast(
          `🔴 CANLI DƏRS: "${incoming.title}" başladı! Qoşulmaq üçün bura klikləyin.`,
          "success",
          () => BioMeetEngine.joinActiveLiveMeeting(incoming.id)
        );
      }

      this.renderMeetings();
      this.renderRoomsList();
      this.checkAndSyncLiveMeetingState();
    } else if (type === "LIVE_MEETING_ENDED") {
      const mId = event.meetingId || event.payload?.meetingId;
      const data = typeof getClubData === "function" ? getClubData() : null;
      if (data && data.meetings && mId) {
        const m = data.meetings.find(item => item.id === mId);
        if (m) m.status = "finished";
        if (typeof saveClubData === "function") saveClubData(data);
      }

      if (this.activeMeeting && this.activeMeeting.id === mId) {
        this.activeMeeting = null;
      }

      if (typeof showToast === "function") {
        showToast("Canlı dərs yekunlaşdı.", "info");
      }

      this.renderMeetings();
      this.renderRoomsList();
      this.checkAndSyncLiveMeetingState();
    } else if (type === "LIVE_MEETING_ATTENDEE_JOINED") {
      const mId = event.meetingId || event.payload?.meetingId;
      const count = event.attendeesCount || event.payload?.attendeesCount;
      const data = typeof getClubData === "function" ? getClubData() : null;
      if (data && data.meetings && mId) {
        const m = data.meetings.find(item => item.id === mId);
        if (m) {
          m.attendeesCount = count || ((m.attendeesCount || 1) + 1);
        }
      }
      this.checkAndSyncLiveMeetingState();
    } else if (type === "MEETING_SAVED" || type === "DATA_SAVED" || type === "STORAGE_UPDATED") {
      this.renderMeetings();
      this.renderRoomsList();
      this.checkAndSyncLiveMeetingState();
    }
  },

  ensureLiveMeetingForRoom(room, meetingType = "Canlı Görüş") {
    const selectedRoom = room || this.currentRoom;
    const existing = this.getMeetings();
    let live = existing.find(m => m.roomId === selectedRoom.id && m.status === "live");

    if (!live) {
      const hostInfo = this.getCurrentHostInfo();
      const codeSuffix = Math.random().toString(36).substring(2, 7).toUpperCase();
      live = {
        id: `meet_${Date.now()}`,
        title: `${selectedRoom.name} — Canlı Dərs Sessiyası`,
        room: selectedRoom.name,
        roomId: selectedRoom.id,
        meetingCode: `WCU-BIO-${codeSuffix}`,
        hostName: hostInfo.hostName,
        hostRole: hostInfo.hostRole,
        hostBadge: hostInfo.hostRole,
        hostBadgeColor: hostInfo.hostBadgeColor,
        date: "İndi Canlı",
        startTime: "Hazırda",
        durationMinutes: 60,
        status: "live",
        attendeesCount: 1,
        maxAttendees: 50,
        agenda: "Canlı görüntülü və səsli dərslər, ekran paylaşımı və interaktiv elmi seminar.",
        allowStudentMic: true,
        isRecorded: true,
        meetingType: meetingType
      };

      if (window.ClubDatabase && typeof window.ClubDatabase.saveMeeting === "function") {
        window.ClubDatabase.saveMeeting(live);
      } else {
        const data = typeof getClubData === "function" ? getClubData() : null;
        if (data) {
          data.meetings = data.meetings || [];
          data.meetings.unshift(live);
          if (typeof saveClubData === "function") saveClubData(data);
        }
      }

      this.activeMeeting = live;
      this.broadcastLiveMeetingStart(live);
      this.renderMeetings();
      this.renderRoomsList();
    } else {
      this.activeMeeting = live;
    }
    return live;
  },

  joinActiveLiveMeeting(meetingId) {
    const meetings = this.getMeetings();
    let m = meetingId ? meetings.find(item => item.id === meetingId) : this.getActiveLiveMeeting();
    if (!m && meetings.length > 0) m = meetings[0];
    if (!m) {
      showToast("Hazırda heç bir aktiv dərs tapılmadı.", "warning");
      return;
    }

    // 1. BioMeet bölməsinə keçid et
    if (typeof navigateTo === "function") {
      navigateTo("biomeet");
    } else if (typeof showSection === "function") {
      showSection("biomeet");
    }
    window.location.hash = "biomeet";

    // 2. Müvafiq zalı aktivləşdir
    if (m.roomId) {
      this.selectRoom(m.roomId);
    }

    // 3. Konfransı dərhal işə sal
    this.launchGroupConference();

    // 4. İştirakçı sayını sinxron artır və yay
    this.broadcastLiveAttendeeJoin(m.id);

    // 5. Konfrans pleyerinə hamar sürüşmə
    setTimeout(() => {
      const confEl = document.getElementById("jitsiConferenceContainer");
      if (confEl) {
        confEl.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }, 120);

    showToast(`"${m.title}" dərsinə uğurla qoşuldunuz!`, "success");
  },

  endCurrentLiveMeeting() {
    if (!confirm("Canlı dərsi bütün iştirakçılar üçün yekunlaşdırmaq və yayımı dayandırmaq istədiyinizə əminsiniz?")) {
      return;
    }

    const meetingToClose = this.activeMeeting || this.getActiveLiveMeeting();
    if (meetingToClose) {
      this.broadcastLiveMeetingEnd(meetingToClose.id);
    }
    this.returnToLocalStudio();
    showToast("Canlı dərs yekunlaşdırıldı.", "info");
  },

  dismissLiveBanner() {
    const active = this.getActiveLiveMeeting();
    if (active) {
      this.bannerDismissedMeetingId = active.id;
    }
    const banner = document.getElementById("globalLiveMeetingBanner");
    if (banner) banner.classList.add("hidden");
  },

  bindEvents() {
    const hash = window.location.hash;
    if (hash && hash.includes("room=")) {
      const match = hash.match(/room=([a-zA-Z0-9_-]+)/);
      if (match && match[1]) {
        this.selectRoom(match[1]);
      }
    }

    const searchInput = document.getElementById("recordingsSearchInput");
    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        this.recordingsSearchQuery = e.target.value.trim();
        this.renderRecordingsArchive();
      });
    }
  }
};

// Global Export
if (typeof window !== "undefined") {
  window.BioMeetEngine = BioMeetEngine;
  window.BIOMEET_ROOMS = BIOMEET_ROOMS;
}

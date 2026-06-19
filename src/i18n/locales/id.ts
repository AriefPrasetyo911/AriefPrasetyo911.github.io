const id = {
  nav: {
    home: "Beranda",
    about: "Tentang",
    work: "Pekerjaan",
    resume: "Resume",
    contact: "Kontak",
  },
  hero: {
    title: "Full Stack Developer · GovTech & Performance Engineering",
    intro: "Halo, saya Arief. Saya seorang",
    typedStrings: ["Fullstack Developer", "Frontend Developer", "Backend Developer", "Freelancer"],
    expertise: "Dengan pengalaman 8+ tahun sebagai Full Stack Developer, saya fokus membangun aplikasi web berskala tinggi yang tidak hanya responsif, tetapi juga aman dan teroptimasi. Spesialisasi saya mencakup ekosistem TypeScript modern—Next.js, Vue 3, Angular, Node.js, Laravel, dan NestJS.",
    experience: "Saya baru-baru ini berkontribusi dalam transformasi digital Pemerintah Provinsi DIY, membangun SPBE GovTech Evaluation System, automation tool berbasis Puppeteer untuk monitoring lalu lintas, serta portal legal JDIH.",
    achievement: "Saya terbukti meningkatkan performa aplikasi hingga 35%, menerapkan keamanan JWT/RBAC, dan memastikan kode tetap bersih serta mudah dipelihara dalam tim Agile.",
    experienceData: {
      years: "8+",
      years_text: "Tahun Pengalaman Kerja",
      projects: "10+",
      projects_text: "Proyek Selesai",
    },
    availableForHire: "Tersedia untuk direkrut",
    profileName: "Arief Budi Prasetyo",
    profileRole: "Fullstack Developer · Integrasi AI",
  },
  about: {
    sectionLabel: "Tentang",
    heading: "Developer yang membangun",
    headingAccent: "produk nyata",
    headingSuffix: "",
    bio: "Saya seorang fullstack developer yang suka membangun hal nyata yang bisa digunakan orang banyak. Saya telah bertahun-tahun bekerja dengan teknologi modern seperti Angular, React, Vue, NestJS, dan Laravel — fokus menulis kode yang bersih, mudah dipelihara, dan benar-benar berkinerja. Saya tidak hanya menulis skrip; saya memecahkan masalah, meningkatkan sistem, dan merilis fitur yang membuat perbedaan.",
    latestFocus: "Fokus terkini",
    focusBadge: "Integrasi AI",
    focusDescription: "Strategi multi-vendor LLM (DeepSeek, Groq, Cerebras, Gemini, Claude) dengan chunked generation dan SSE streaming — dibangun agar berjalan andal di shared hosting.",
  },
  techStack: {
    sectionLabel: "Stack Teknologi",
  },
  "experience": [
    {
      "sectionLabel": "Pengalaman",
    },
    {
      "id": "diskominfo",
      "role": "Software Developer",
      "company": "Dinas Komunikasi dan Informatika Provinsi Yogyakarta",
      "type": "Kontrak",
      "location": "Yogyakarta, Indonesia",
      "period": "Jan 2026 – Sekarang",
      "status": "active",
      "tags": ["TypeScript", "Go", "Next.js", "NuxtJs", "Vue 3", "React", "Tailwind CSS", "Puppeteer", "REST API"],
      "summary": "Membangun dan memelihara arsitektur frontend untuk infrastruktur digital publik Provinsi Yogyakarta di berbagai platform pemerintahan.",
      "highlights": [
        "Sistem Evaluasi SPBE — membangun modul monitoring pengiriman dari nol menggunakan Next.js dan TypeScript, mencakup komputasi skor, state handling, dan integrasi REST API dengan penanganan error lengkap",
        "Otomasi monitoring lalu lintas berbasis AI — membangun tool otomasi Puppeteer yang dikompilasi menjadi executable tanpa dependensi, mencapai konsistensi data 100% selama operasi puncak Lebaran 2026",
        "Portal JDIH — mengembangkan panel admin menggunakan Vue 3 dan Tailwind CSS dengan operasi CRUD responsif, pencarian live, bulk action, dan fitur aksesibilitas khusus"
      ],
      "active": true
    },
    {
      "id": "sinergiedu",
      "role": "Fullstack Developer · Pendiri",
      "company": "SinergiEdu",
      "type": "Produk Sendiri · SaaS",
      "location": "Yogyakarta, Indonesia",
      "period": "2025 – Sekarang",
      "status": "active",
      "tags": ["Laravel", "Vue 3", "Tailwind CSS", "Inertia.js", "AI / LLM", "SSE", "Multi-vendor", "PostgreSQL / MySQL"],
      "summary": "Membangun platform SaaS berbasis AI yang membantu guru-guru Indonesia membuat RPP dan Modul Ajar sesuai standar Kurikulum Merdeka.",
      "highlights": [
        "Merancang integrasi multi-vendor LLM (DeepSeek, Groq, Cerebras, Gemini, Claude) dengan strategi chunked generation",
        "Mengimplementasikan streaming berbasis SSE untuk output AI secara real-time di shared hosting",
        "Mendesain pipeline generasi RPP dan Modul Ajar sesuai standar resmi Kurikulum Merdeka",
        "Saat ini dalam tahap pengembangan akhir — menjelang peluncuran"
      ],
      "active": false
    },
    {
      "id": "champion",
      "role": "Developer",
      "company": "PT. Champion Multikarya Pandhega",
      "type": "Full-time",
      "location": "Yogyakarta, Indonesia",
      "period": "Okt 2025 – Nov 2025",
      "status": "ended",
      "tags": ["PHP 5", "MySQL 5", "Syncthing", "Legacy Systems", "MySQL"],
      "summary": "Memelihara dan meningkatkan sistem korporat legacy untuk menjaga stabilitas infrastruktur bisnis yang kritikal.",
      "highlights": [
        "Merancang dan membangun menu sinkronisasi data baru menggunakan Syncthing untuk transfer dua arah yang andal antar unit bisnis",
        "Memperluas laporan pendapatan harian untuk mencakup seluruh unit bisnis perusahaan, memberikan visibilitas keuangan menyeluruh kepada manajemen untuk pertama kalinya",
        "Mengidentifikasi dan menyelesaikan berbagai bug di sistem internal legacy untuk menjaga kelangsungan operasional"
      ],
      "active": false
    },
    {
      "id": "kaigangames",
      "role": "Full Stack Developer",
      "company": "Kaigangames Entertainment SDN BHD",
      "type": "Full-time",
      "location": "Kuala Lumpur, Malaysia",
      "period": "Jul 2017 – Mei 2025",
      "status": "ended",
      "tags": ["Angular", "Vue 3", "Laravel", "NestJS", "Express.js", "Node.js", "Typescript", "Bootstrap", "MySQL", "JWT", "RBAC"],
      "summary": "Berkontribusi pada berbagai proyek aplikasi web selama 8 tahun, membangun keahlian full-stack sambil memberikan kontribusi teknis yang signifikan dalam tim internasional lintas fungsi.",
      "highlights": [
        "Meningkatkan performa website secara keseluruhan sebesar 35% melalui refactoring kode, optimasi query database, dan peningkatan desain responsif",
        "Membangun solusi full-stack dengan Angular di frontend dan Laravel / Node.js di backend",
        "Mengimplementasikan autentikasi berbasis JWT dan Role-Based Access Control (RBAC) untuk memperkuat keamanan platform",
        "Mengembangkan komponen UI dan modul backend yang dapat digunakan ulang, mengurangi duplikasi kode sebesar 20%",
        "Memimpin pengembangan dan peluncuran landing page produk game dari awal hingga akhir",
        "Berkolaborasi dalam tim Agile/Scrum bersama desainer, QA engineer, dan product owner"
      ],
      "active": false
    },
    {
      "id": "amteklab",
      "role": "Frontend Developer",
      "company": "AmtekLab Software House",
      "type": "Full-time",
      "location": "Yogyakarta, Indonesia",
      "period": "Mei 2016 – Jun 2017",
      "status": "ended",
      "tags": ["HTML5", "CSS3", "JavaScript", "jQuery", "Bootstrap", "Sass / Scss", "Laravel"],
      "summary": "Bertanggung jawab mengkonversi desain UI/UX menjadi halaman web responsif dan interaktif dengan kode yang bersih dan mudah dipelihara.",
      "highlights": [
        "Mengubah wireframe desain UI/UX menjadi halaman web responsif berkualitas tinggi menggunakan HTML5, CSS3, JavaScript, Bootstrap, dan jQuery",
        "Mengkustomisasi komponen Bootstrap dengan Sass untuk styling yang lebih skalabel dan mudah dipelihara",
        "Memastikan kompatibilitas lintas browser, aksesibilitas web, dan optimasi performa di semua perangkat",
        "Mendapatkan pengetahuan backend dasar dengan Laravel, CodeIgniter, dan PHP Native"
      ],
      "active": false
    }
  ],
  "education": [
    {
      "id": "uad",
      "degree": "Sarjana Teknologi Informasi",
      "major": "Pengembangan Web dan Mobile",
      "institution": "Universitas Ahmad Dahlan",
      "location": "Yogyakarta, Indonesia",
      "period": "Agu 2010 – Sep 2015",
      "highlights": [
        "Spesialisasi pengembangan web full-stack dengan pengetahuan teoritis dan aplikasi praktis",
        "Fokus utama: PHP (Native, OOP), Laravel, MySQL, HTML5, CSS3, JavaScript, Bootstrap",
        "Pengetahuan dasar Java dan C++"
      ]
    }
  ],
  "projects": [
    {
      "id": "sinergiedu",
      "name": "SinergiEdu",
      "category": "SaaS · AI",
      "badge": { "label": "SaaS · AI", "kind": "ai" },
      "period": "2025 – Sekarang",
      "status": "active",
      "featured": true,
      "tags": ["Laravel", "Vue 3", "Inertia.js", "Multi-LLM", "SSE"],
      "summary": "Generator RPP berbasis AI untuk guru-guru Indonesia, sesuai standar Kurikulum Merdeka.",
      "description": "Platform SaaS yang dibangun sendiri untuk membantu guru membuat dokumen RPP dan Modul Ajar melalui pipeline multi-vendor LLM (DeepSeek, Groq, Cerebras, Gemini, Claude) dengan chunked generation dan streaming SSE real-time, dirancang untuk berjalan andal di shared hosting.",
      "link": ""
    },
    {
      "id": "spbe",
      "name": "Sistem Evaluasi SPBE",
      "category": "Pemerintahan · Sektor publik",
      "badge": { "label": "Gov · Sektor publik", "kind": "gov" },
      "period": "2026 – Sekarang",
      "status": "active",
      "featured": false,
      "tags": ["Next.js", "TypeScript", "REST API", "Radix UI", "Tailwind CSS"],
      "summary": "Dashboard e-government skala besar untuk melacak indeks transformasi digital (SPBE) di instansi pemerintah Indonesia.",
      "description": "Membangun modul monitoring pengiriman dari nol secara mandiri — termasuk logika penilaian, state management, dan integrasi REST API dengan penanganan error lengkap — di bawah tenggat waktu kepatuhan yang ketat.",
      "link": ""
    },
    {
      "id": "traffic-monitoring",
      "name": "Sistem Otomasi Monitoring Lalu Lintas",
      "category": "Otomasi · Pemerintahan",
      "badge": { "label": "Otomasi", "kind": "default" },
      "period": "2026",
      "status": "ended",
      "featured": false,
      "tags": ["Puppeteer", "Node.js", "Cron Jobs", "PKG"],
      "summary": "Tool otomasi monitoring lalu lintas AI-CCTV untuk operasi Lebaran 2026 Provinsi Yogyakarta.",
      "description": "Otomasi headless browser yang dikompilasi menjadi executable desktop tanpa dependensi untuk staf internal, mencapai konsistensi data 100% di tiga jendela monitoring harian dan menghilangkan kesalahan input manual selama puncak arus mudik.",
      "link": ""
    },
    {
      "id": "jdih",
      "name": "Portal Dokumentasi Hukum JDIH",
      "category": "Pemerintahan · Sektor publik",
      "badge": { "label": "Gov · Sektor publik", "kind": "gov" },
      "period": "2026",
      "status": "ended",
      "featured": false,
      "tags": ["Vue 3", "Tailwind CSS"],
      "summary": "Gerbang informasi hukum terpusat untuk seluruh wilayah DIY.",
      "description": "Mengembangkan panel admin dengan operasi CRUD responsif, pencarian live, bulk action untuk database hukum berskala besar, sistem notifikasi kustom, dan fitur aksesibilitas khusus untuk pengguna disabilitas.",
      "link": ""
    },
    {
      "id": "appraisal-system",
      "name": "Sistem Penilaian Kinerja",
      "category": "Tools Internal · HR",
      "badge": { "label": "Tools Internal", "kind": "default" },
      "period": "2026",
      "status": "ended",
      "featured": false,
      "tags": ["Angular 19", "NestJS", "TypeScript", "REST API", "Swagger", "MySQL", "Bootstrap"],
      "summary": "Sistem penilaian kinerja HR end-to-end untuk evaluasi karyawan yang terstruktur di seluruh organisasi.",
      "description": "Dibangun dengan arsitektur full-stack modern yang menjamin skalabilitas dan kemudahan pemeliharaan jangka panjang, mencakup seluruh siklus evaluasi dari input data hingga pelaporan.",
      "link": ""
    },
    {
      "id": "corporate-website",
      "name": "Konversi Website Korporat",
      "category": "Migrasi · Frontend",
      "badge": { "label": "Migrasi", "kind": "default" },
      "period": "2023",
      "status": "ended",
      "featured": false,
      "tags": ["Angular 15", "Node.js", "Laravel 7", "MySQL", "Bootstrap"],
      "summary": "Memimpin migrasi penuh website perusahaan legacy berbasis Laravel 7 ke stack modern Angular 15 dan Node.js.",
      "description": "Meningkatkan performa frontend, memisahkan arsitektur frontend / backend, dan memungkinkan skalabilitas jangka panjang untuk situs publik perusahaan.",
      "link": ""
    },
    {
      "id": "nareta",
      "name": "Nareta (Kaigangames Narrator)",
      "category": "Studio Game",
      "badge": { "label": "Studio Game", "kind": "default" },
      "period": "2022 – 2023",
      "status": "ended",
      "featured": false,
      "tags": ["Laravel", "Vue 3", "MySQL", "Bootstrap"],
      "summary": "Aplikasi cerita interaktif dengan alur naratif yang dinamis.",
      "description": "Dibangun dengan backend Laravel dan frontend Vue 3, menunjukkan integrasi full-stack dan desain pengalaman konten berbasis pengguna.",
      "link": ""
    },
    {
      "id": "playsimulacra",
      "name": "Playsimulacra",
      "category": "Studio Game",
      "badge": { "label": "Studio Game", "kind": "default" },
      "period": "2020",
      "status": "ended",
      "featured": false,
      "tags": ["Laravel", "MySQL", "Bootstrap"],
      "summary": "Website katalog produk game sebagai etalase publik untuk judul game komersial.",
      "description": "Dibangun untuk performa dan tampilan responsif di berbagai perangkat, berfungsi sebagai etalase resmi untuk peluncuran game.",
      "link": ""
    },
    {
      "id": "world-debt",
      "name": "world-debt",
      "category": "Personal · Visualisasi Data",
      "badge": { "label": "Nuxt 4 · WIP", "kind": "default" },
      "period": "2026",
      "status": "active",
      "featured": false,
      "tags": ["Nuxt 4", "Tailwind v4", "i18n"],
      "summary": "Pelacak visualisasi data utang global dengan dukungan i18n penuh.",
      "description": "Proyek personal yang menarik data dari API World Bank dan IMF untuk memvisualisasikan tren utang global, dibangun sebagai proyek pembelajaran untuk ekosistem Nuxt 4.",
      "link": ""
    }
  ],
  common: {
    submit: "Kirim",
    cancel: "Batal",
  },
} as const;

export default id;

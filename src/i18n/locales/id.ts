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
      "id": "spbe",
      "workplace": "Dinas Komunikasi dan Informatika Provinsi DIY",
      "name": "Sistem Evaluasi SPBE",
      "category": "Pemerintahan · Sektor Publik",
      "badge": { "label": "Gov · Sektor Publik", "kind": "gov" },
      "period": "Mar 2026 – Sekarang",
      "role": "Software Developer",
      "status": "Aktif",
      "featured": false,
      "tags": ["Next.js", "React.js", "TypeScript", "REST API", "Radix UI", "Tailwind CSS"],
      "summary": "Dashboard e-government skala besar untuk melacak indeks transformasi digital (SPBE) di seluruh instansi pemerintah Indonesia — menangani dataset hierarkis yang kompleks, type safety yang ketat, dan manajemen state real-time untuk evaluator daerah di bawah tenggat waktu kepatuhan.",
      "description": "Saya mengembangkan komponen frontend baru, halaman, dan logika monitoring pengajuan end-to-end dari nol sebagai bagian dari proyek pemerintahan yang kritis ini. Secara mandiri, saya mengimplementasikan logika penilaian lengkap yang mencakup penanganan state, komputasi skor, dan alur bersyarat untuk fitur monitoring pengajuan. Sistem ini terintegrasi dengan REST API yang dilengkapi penanganan error dan pemetaan respons, serta validasi form kompleks untuk menjamin integritas data di seluruh alur penilaian. Saya juga mengimplementasikan komponen UI kustom — modal, alur multi-step, dan tampilan skor dinamis — yang mengadaptasi pola yang ada sekaligus memperkenalkan logika interaksi baru untuk data SPBE yang hierarkis. Menerapkan interface TypeScript yang ketat serta useMemo dan useCallback untuk mencegah re-render dan error null-reference selama proses hidrasi data dinamis. Menyelesaikan konflik pointer-events dan z-index antara primitif Radix UI dan modal SweetAlert2, mengembalikan lapisan interaksi yang mulus dan aksesibel. Dibangun dengan Next.js, React.js, TypeScript, Radix UI, dan Tailwind CSS.",
      "link": [
        { "name": "View Demo", "url": "https://link.to" },
        { "name": "View Source Code", "url": "https://link.to" }
      ],
      "repo": "private"
    },
    {
      "id": "traffic-monitoring",
      "workplace": "Dinas Komunikasi dan Informatika Provinsi DIY",
      "name": "Sistem Otomasi Monitoring Lalu Lintas",
      "category": "Pemerintahan · Otomasi",
      "badge": { "label": "Otomasi", "kind": "default" },
      "period": "Feb 2026 – Mar 2026",
      "role": "Software Developer",
      "status": "Selesai",
      "featured": false,
      "tags": ["Puppeteer", "Node.js", "Cron Jobs", "PKG", "JSON Config"],
      "summary": "Alat otomasi headless browser yang dikompilasi menjadi executable desktop tanpa dependensi untuk memantau data lalu lintas AI-CCTV selama arus mudik dan balik Lebaran 2026.",
      "description": "Saya mengembangkan alat otomasi khusus untuk menyederhanakan pengumpulan data lalu lintas untuk arus mudik dan balik Lebaran 2026. Sistem ini dirancang untuk membantu otoritas internal memantau koridor lalu lintas padat melalui portal AI-CCTV provinsi. Implementasi teknis utama meliputi: Otomasi headless browser menggunakan Puppeteer-core, dikompilasi menjadi Executable Desktop (.exe) mandiri dengan utilitas PKG untuk penyebaran tanpa dependensi. Mengintegrasikan sistem Cron Job yang fleksibel yang memungkinkan pengguna menentukan jendela pemantauan spesifik (Pagi, Siang, Sore) untuk menangkap data lalu lintas puncak secara akurat. Membangun sistem konfigurasi berbasis JSON/File untuk mengelola daftar CCTV target dan mengatur durasi pemantauan kustom per kamera. Mengotomatiskan seluruh siklus hidup: autentikasi aman, filter regional, pemilihan CCTV target, penghitungan/analisis terbatas waktu, dan pelaporan data sisi server yang otomatis. Mengoptimalkan otomasi untuk secara otomatis menutup instance browser setelah pelaporan, memastikan konsumsi sumber daya yang rendah pada mesin host. Pendekatan ini menjamin konsistensi data 100% untuk laporan lalu lintas provinsi dengan mengotomatiskan siklus monitoring end-to-end — dari login aman hingga sinkronisasi data sisi server — menghilangkan kesalahan manusia selama puncak lalu lintas liburan yang penuh tekanan.",
      "link": [
        { "name": "View Demo", "url": "https://jogjaprov.go.id/ai-cctv/" },
        { "name": "View Source Code", "url": "https://link.to" }
      ],
      "repo": "private"
    },
    {
      "id": "jdih",
      "workplace": "Dinas Komunikasi dan Informatika Provinsi DIY",
      "name": "Portal Dokumentasi Hukum JDIH",
      "category": "Pemerintahan · Sektor Publik",
      "badge": { "label": "Gov · Sektor Publik", "kind": "gov" },
      "period": "Jan 2026 – Feb 2026",
      "role": "Software Developer",
      "status": "Aktif",
      "featured": false,
      "tags": ["Vue 3", "Tailwind CSS", "Composition API", "REST API"],
      "summary": "Gerbang informasi hukum terpusat untuk seluruh wilayah DIY, mengubah platform menjadi pusat berkinerja tinggi yang menghubungkan warga dengan setiap instansi JDIH di Yogyakarta.",
      "description": "Sebagai Front-End Developer, misi saya adalah mengubah platform ini menjadi gerbang utama dokumentasi hukum di seluruh provinsi. Kami membangun pusat berkinerja tinggi yang menghubungkan warga dengan setiap instansi JDIH di wilayah Yogyakarta. Sorotan utama meliputi: Hub Terpusat yang dirancang sebagai portal utama bagi siapa pun yang mencari info hukum di DIY, Inklusivitas dengan fitur khusus untuk pengguna disabilitas untuk menjamin akses yang setara, Integrasi Mobile yang menyederhanakan promosi dan akses ke aplikasi JDIH Mobile, dan Optimalisasi Performa untuk pengalaman yang lebih cepat dan responsif. Saya bertanggung jawab merancang Panel Admin menggunakan Vue 3, dengan fokus membuat manajemen menjadi intuitif dan efisien. Saya mengimplementasikan operasi CRUD responsif dan Pencarian Langsung untuk penanganan data yang mulus, alat Bulk Action untuk mengelola database hukum berskala besar, dan Sistem Notifikasi kustom untuk menjamin akurasi administratif. Proyek ini merupakan kehormatan untuk menggunakan teknologi guna memperkuat infrastruktur digital Pemprov DIY dan melayani masyarakat dengan lebih baik.",
      "link": [
        { "name": "View Demo", "url": "https://jdih.jogjaprov.go.id" },
        { "name": "View Source Code", "url": "https://link.to" }
      ],
      "repo": "private"
    },
    {
      "id": "appraisal-system",
      "workplace": "Kaigan Games Entertainment SDN BHD",
      "name": "Sistem Penilaian Kinerja Kaigangames",
      "category": "Tools Internal · HR",
      "badge": { "label": "Tools Internal", "kind": "default" },
      "period": "Sep 2024 – May 2025",
      "role": "Fullstack Developer",
      "status": "Selesai",
      "featured": false,
      "tags": ["Angular 19", "NestJS", "TypeScript", "MySQL", "Bootstrap", "REST API"],
      "summary": "Sistem penilaian kinerja HR end-to-end yang menggantikan proses evaluasi manual dengan alur kerja digital terstruktur berbasis peran.",
      "description": "Saya menciptakan sistem ini untuk mempermudah proses penilaian kinerja internal yang sebelumnya dilakukan secara manual. Dibangun dengan Angular 19 sebagai framework frontend dan NestJS sebagai backend, dengan MySQL sebagai database, sistem ini dilengkapi dengan akses pengguna multi-peran (Karyawan, Manajer, Supervisor, HR), manajemen karyawan yang komprehensif, registrasi pengguna dan penetapan peran, penilaian mandiri untuk karyawan, penilaian evaluasi untuk manajer dan supervisor, alur persetujuan HR, statistik grafik di setiap peran pengguna, dan generator PDF untuk dokumen final. Proyek ini menunjukkan arsitektur full-stack modern yang menjamin skalabilitas dan kemudahan pemeliharaan jangka panjang, mencakup seluruh siklus evaluasi dari input data hingga pelaporan.",
      "link": [
        { "name": "View Demo", "url": "https://link.to" },
        { "name": "View Source Code", "url": "https://link.to" }
      ],
      "repo": "private"
    },
    {
      "id": "nullspace-website",
      "workplace": "Kaigan Games Entertainment SDN BHD",
      "name": "Website Nullspace",
      "category": "Studio Game · Website",
      "badge": { "label": "Studio Game", "kind": "default" },
      "period": "Jun 2023 – Sep 2023",
      "role": "Fullstack Developer",
      "status": "Selesai",
      "featured": false,
      "tags": ["Angular 16", "Bootstrap", "i18n", "TypeScript"],
      "summary": "Website promosi untuk proyek game 3D baru Kaigan Games, Nullspace, dengan dukungan internasionalisasi penuh.",
      "description": "Saya membangun website ini untuk memperkenalkan proyek game 3D baru Kaigan Games, Nullspace, menggunakan Angular 16. Website ini saat ini memiliki fitur terjemahan ke bahasa Jepang dan Inggris, menunjukkan implementasi i18n yang tangguh yang memungkinkan studio menjangkau audiens internasional yang lebih luas. Proyek ini menunjukkan pengembangan Angular modern dengan fokus pada internasionalisasi dan presentasi visual untuk industri game.",
      "link": [
        { "name": "View Demo", "url": "https://link.to" },
        { "name": "View Source Code", "url": "https://link.to" }
      ],
      "repo": "private"
    },
    {
      "id": "corporate-website-conversion",
      "workplace": "Kaigan Games Entertainment SDN BHD",
      "name": "Konversi Website Resmi Kaigan Games",
      "category": "Migrasi · Frontend",
      "badge": { "label": "Migrasi", "kind": "default" },
      "period": "Jan 2023 – Mar 2023",
      "role": "Fullstack Developer",
      "status": "Selesai",
      "featured": false,
      "tags": ["Angular 15", "Node.js", "Express", "MySQL", "Bootstrap", "Three.js"],
      "summary": "Migrasi penuh website resmi Kaigan Games dari Laravel 7 ke stack modern Angular 15 dan Node.js.",
      "description": "Saya memimpin konversi lengkap Website Resmi Kaigan Games dari Laravel 7 ke Angular 15. Frontend dibangun dengan Angular 15, Bootstrap 5, Three.js (untuk visualisasi 3D), jQuery, SweetAlert2, dan FontAwesome 5. Backend direstrukturisasi menggunakan Node.js, Express, dan Sequelize untuk penanganan model database dengan MySQL sebagai database. Migrasi ini memisahkan arsitektur frontend dan backend, meningkatkan performa frontend, dan memungkinkan skalabilitas jangka panjang untuk situs publik perusahaan.",
      "link": [
        { "name": "View Demo", "url": "https://link.to" },
        { "name": "View Source Code", "url": "https://link.to" }
      ],
      "repo": "private"
    },
    {
      "id": "nareta",
      "workplace": "Kaigan Games Entertainment SDN BHD",
      "name": "Kaigangames Nareta (Narrator)",
      "category": "Studio Game · Interaktif",
      "badge": { "label": "Studio Game", "kind": "default" },
      "period": "May 2022 – Feb 2023",
      "role": "Fullstack Developer",
      "status": "Dihentikan",
      "featured": false,
      "tags": ["Laravel 8", "Vue 3", "Inertia.js", "Bootstrap", "MySQL"],
      "summary": "Aplikasi narasi interaktif di mana pengguna dapat memainkan dan menciptakan cerita berbasis chat bercabang, terinspirasi dari franchise game 'Simulacra'.",
      "description": "Saya menciptakan Nareta dengan Laravel 8, Inertia.js, dan Vue 3, menggunakan Bootstrap 5 untuk frontend. Di Nareta, Anda dapat memainkan cerita seperti pengalaman chat dan memilih pilihan Anda ketika opsi muncul. Konsep website ini adalah membuat sistem chat mirip dengan franchise 'Simulacra', tetapi pengguna dapat membuat cerita mereka sendiri dengan mengikuti panduan. Pengguna dapat mendaftar dan mengunggah cerita mereka ke website untuk dimainkan oleh pengguna lain. Proyek ini menunjukkan integrasi full-stack dengan fokus pada konten buatan pengguna dan penceritaan interaktif.",
      "link": [
        { "name": "View Demo", "url": "https://link.to" },
        { "name": "View Source Code", "url": "https://link.to" }
      ],
      "repo": "private"
    },
    {
      "id": "al-wildan-website",
      "workplace": "Project Pribadi",
      "name": "Al Wildan International Islamic School",
      "category": "Pendidikan · Website",
      "badge": { "label": "Pendidikan", "kind": "default" },
      "period": "Nov 2020 – Mar 2021",
      "role": "Fullstack Developer",
      "status": "Selesai",
      "featured": false,
      "tags": ["Laravel 7", "Bootstrap", "JavaScript", "MySQL"],
      "summary": "Website manajemen sekolah komprehensif dengan registrasi siswa, dashboard statistik, dan sistem multi-peran pengguna.",
      "description": "Saya membuat website ini menggunakan framework Laravel 7 dari awal. Fitur-fitur yang ada meliputi: registrasi siswa baik dari Indonesia maupun dari luar negeri, statistik siswa (jumlah siswa, jumlah pendaftar, negara asal), slider gambar, menu dropdown dinamis, peran multi-pengguna, dan notifikasi email jika pendaftar diterima. Proyek ini menunjukkan implementasi full-stack yang lengkap yang disesuaikan untuk institusi pendidikan dengan kebutuhan manajemen pengguna yang kompleks.",
      "link": [
        { "name": "View Demo", "url": "https://link.to" },
        { "name": "View Source Code", "url": "https://link.to" }
      ],
      "repo": "private"
    },
    {
      "id": "playsimulacra",
      "workplace": "Kaigan Games Entertainment SDN BHD",
      "name": "Playsimulacra",
      "category": "Studio Game · Etalase",
      "badge": { "label": "Studio Game", "kind": "default" },
      "period": "Jun 2020 – Dec 2020",
      "role": "Fullstack Developer",
      "status": "Selesai",
      "featured": false,
      "tags": ["Laravel 7", "Bootstrap 4", "JavaScript", "MySQL"],
      "summary": "Toko etalase katalog game resmi untuk Kaigan Games, menampilkan semua judul studio dengan pembaruan konten dinamis.",
      "description": "Saya membuat proyek ini menggunakan Laravel 7 dan Bootstrap 4. Playsimulacra berfungsi sebagai 'toko' resmi untuk game-game studio. Di website ini, pengunjung dapat menemukan semua game yang dibuat dari yang pertama hingga rilis terbaru — sehingga data selalu diperbarui setiap kali studio membuat game baru. Proyek ini menunjukkan desain toko etalase yang bersih dan responsif yang dioptimalkan untuk menampilkan produk game.",
      "link": [
        { "name": "View Demo", "url": "https://link.to" },
        { "name": "View Source Code", "url": "https://link.to" }
      ],
      "repo": "private"
    },
    {
      "id": "kaigan-website-old",
      "workplace": "Kaigan Games Entertainment SDN BHD",
      "name": "Website Resmi Kaigan Games (Legacy)",
      "category": "Studio Game · Website",
      "badge": { "label": "Studio Game", "kind": "default" },
      "period": "Agu 2020 – Okt 2020",
      "role": "Fullstack Developer",
      "status": "Selesai",
      "featured": false,
      "tags": ["Laravel 7", "Bootstrap", "JavaScript", "MySQL"],
      "summary": "Implementasi Laravel 7 asli dari website resmi Kaigan Games, dibangun dari awal dengan desain responsif mobile-first.",
      "description": "Saya mengerjakan Website Resmi Kaigan Games selama sekitar 2 bulan. Saya membuat website dari awal dengan versi terbaru Laravel 7. Desain disediakan oleh web designer kami, jadi peran saya adalah mengimplementasikan desain ke dalam kode. Website ini ramah mobile dan responsif sepenuhnya, menunjukkan implementasi frontend yang bersih dan struktur backend Laravel yang solid.",
      "link": [
        { "name": "View Demo", "url": "https://link.to" },
        { "name": "View Source Code", "url": "https://link.to" }
      ],
      "repo": "private"
    },
    {
      "id": "bukufi-mobile",
      "workplace": "Kaigan Games Entertainment SDN BHD",
      "name": "Bukufi Mobile",
      "category": "Mobile · Streaming",
      "badge": { "label": "Aplikasi Mobile", "kind": "default" },
      "period": "Jan 2018 – May 2018",
      "role": "Fullstack Developer",
      "status": "Dihentikan",
      "featured": false,
      "tags": ["Ionic 3", "Angular", "PayPal API", "Laravel", "REST API"],
      "summary": "Aplikasi mobile lintas platform untuk streaming buku dan komik, dibangun dengan Ionic 3 untuk Android dan iOS.",
      "description": "Saya merancang aplikasi mobile lintas platform untuk layanan streaming buku dan komik Bukufi menggunakan framework Ionic 3, menyebarkan build native untuk Android dan iOS dari satu basis kode. Saya mengintegrasikan beberapa API autentikasi pihak ketiga, termasuk Facebook Login dan Google Sign-In, di samping registrasi standar untuk mempermudah onboarding pengguna. Saya mengimplementasikan sistem monetisasi yang aman dengan mengintegrasikan PayPal API untuk menangani pembayaran langganan untuk konten premium. Saya menghubungkan aplikasi mobile ke backend Laravel 5.4 kustom melalui REST API untuk mengelola akun pengguna, streaming konten, dan status pembayaran.",
      "link": [
        { "name": "View Demo", "url": "https://link.to" },
        { "name": "View Source Code", "url": "https://link.to" }
      ],
      "repo": "private"
    },
    {
      "id": "bukufi-web",
      "workplace": "Kaigan Games Entertainment SDN BHD",
      "name": "Bukufi (Versi Website)",
      "category": "Web · Streaming",
      "badge": { "label": "Aplikasi Web", "kind": "default" },
      "period": "Jul 2017 – Mar 2018",
      "role": "Fullstack Developer",
      "status": "Dihentikan",
      "featured": false,
      "tags": ["Laravel 5.4", "Bootstrap 3", "SASS", "PayPal API", "MySQL"],
      "summary": "Platform streaming buku dan komik berbasis web dengan manajemen langganan premium dan integrasi PayPal.",
      "description": "Bukufi adalah platform streaming buku dan komik. Pengunjung dapat membaca buku atau komik dari koleksi, tetapi ada juga konten berbayar premium. Untuk menangani pembayaran, saya menggunakan PayPal API. Untuk memudahkan pengunjung login, saya menyediakan login dengan Facebook dan Google Plus di samping login standar. Bukufi dibangun dengan Laravel 5.4 sebagai backend dan Bootstrap 3 sebagai frontend, dengan kombinasi SASS, JavaScript, dan jQuery. Untuk fitur ke depan, Bukufi akan memungkinkan pengguna terdaftar untuk menerbitkan buku atau komik mereka sendiri, tetapi konten tersebut memerlukan persetujuan administrator sebelum dipublikasikan.",
      "link": [
        { "name": "View Demo", "url": "https://link.to" },
        { "name": "View Source Code", "url": "https://link.to" }
      ],
      "repo": "private"
    },
    {
      "id": "his-hermina",
      "workplace": "AmtekLab Software House",
      "name": "Sistem Informasi Rumah Sakit (HIS) untuk Hermina Group",
      "category": "Kesehatan · Enterprise",
      "badge": { "label": "Enterprise", "kind": "default" },
      "period": "Mei 2016 – Jun 2017",
      "role": "Frontend Programmer",
      "status": "Selesai",
      "featured": false,
      "tags": ["Bootstrap 3", "JavaScript", "jQuery", "SASS", "Frontend"],
      "summary": "Konversi berbasis web dari Sistem Informasi Rumah Sakit berbasis desktop untuk Hermina Group di Jakarta.",
      "description": "HIS ini dikembangkan untuk Hermina Group di Jakarta. Hermina sudah memiliki Sistem Informasi tetapi masih berbasis desktop dan mereka ingin mengonversinya ke berbasis web serta menambahkan beberapa proses baru. Pada proyek ini, saya bekerja sebagai programmer front-end. Tugas saya adalah membuat tata letak baru yang dibutuhkan dalam sistem. Untuk melakukan ini, saya menggunakan Bootstrap 3, JavaScript, jQuery, dan preprosesor SASS untuk menangani data CSS yang kompleks. Proyek ini menunjukkan keahlian frontend dalam migrasi sistem kesehatan skala enterprise.",
      "link": [
        { "name": "View Demo", "url": "https://link.to" },
        { "name": "View Source Code", "url": "https://link.to" }
      ],
      "repo": "private"
    }
  ],
  common: {
    submit: "Kirim",
    cancel: "Batal",
    backHome: "Kembali ke Beranda",
    techStack: "Stack Teknologi",
    links: "Link",
    companyOrganization: "PERUSAHAAN / ORGANISASI",
    period: "PERIODE",
    status: "STATUS",
    category: "KATEGORI",
    role: "PERAN"
  },
} as const;

export default id;

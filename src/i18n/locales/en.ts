const en = {
  nav: {
    home: "Home",
    about: "About",
    work: "Work",
    resume: "Resume",
    contact: "Contact",
  },
  hero: {
    title: "Full Stack Developer · GovTech & Performance Engineering",
    intro: "Hello, I'm Arief. I'm a",
    typedStrings: ["Fullstack Developer", "Frontend Developer", "Backend Developer", "Freelancer"],
    expertise: "With 8+ years of experience as a Full Stack Developer, I focus on building high-scale web applications that are not only responsive but also secure and highly optimized. My specialization covers the modern TypeScript ecosystem—Next.js, Vue 3, Angular, Node.js, Laravel, and NestJS.",
    experience: "I recently contributed to the digital transformation of the Yogyakarta Provincial Government, building the SPBE GovTech Evaluation System, a Puppeteer-based automation tool for traffic monitoring, and the JDIH legal portal.",
    achievement: "I have a proven track record of improving application performance by up to 35%, implementing JWT/RBAC security, and ensuring clean, maintainable code within Agile teams.",
    experienceData: {
      years: "8+",
      years_text: "Years of Experience",
      projects: "10+",
      projects_text: "Projects Completed",
    },
    availableForHire: "Available for hire",
    profileName: "Arief Budi Prasetyo",
    profileRole: "Fullstack Developer · AI Integration",
  },
  about: {
    sectionLabel: "About",
    heading: "Dev who builds",
    headingAccent: "real",
    headingSuffix: "products",
    bio: "I'm a fullstack developer who loves building real things that people can use. I've spent years working with modern technologies like Angular, React, Vue, NestJS, and Laravel — focusing on writing clean, maintainable code that actually performs. I don't just write scripts; I solve problems, improve systems, and ship features that make a difference.",
    latestFocus: "Latest focus",
    focusBadge: "AI Integration",
    focusDescription: "Multi-vendor LLM strategy (DeepSeek, Groq, Cerebras, Gemini, Claude) with chunked generation and SSE streaming — built to run reliably on shared hosting.",
  },
  techStack: {
    sectionLabel: "Tech Stack",
  },
  contactSection: {
    sectionLabel: "Contact",
    title: "Let's build something.",
    subtitle: "Open to freelance projects, long-term contracts, and interesting collaborations.",
    emailLabel: "Email",
    locationLabel: "Location",
    locationValue: "Yogyakarta, Indonesia · Remote OK",
    linkedinLabel: "LinkedIn",
    namePlaceholder: "Your name",
    emailPlaceholder: "Email address",
    subjectPlaceholder: "Subject",
    messagePlaceholder: "Your message...",
    sendButton: "Send message",
    sendingButton: "Sending...",
    errorMessage: "Failed to send. Please try again or email me directly.",
  },
  "experience": [
    {
      "sectionLabel": "Experience",
    },
    {
      "id": "diskominfo",
      "role": "Software Developer",
      "company": "Dinas Komunikasi dan Informatika Provinsi Yogyakarta",
      "type": "Contract",
      "location": "Yogyakarta, Indonesia",
      "period": "Jan 2026 – Present",
      "status": "active",
      "tags": ["TypeScript", "Go", "Next.js", "NuxtJs", "Vue 3", "React", "Tailwind CSS", "Puppeteer", "REST API"],
      "summary": "Built and maintained frontend architecture for Yogyakarta Province's public digital infrastructure across multiple government platforms.",
      "highlights": [
        "SPBE GovTech Evaluation System — independently built the submission monitoring module from scratch using Next.js and TypeScript, covering scoring computation, state handling, and REST API integration with full error handling",
        "AI-powered traffic monitoring automation — engineered a headless Puppeteer automation tool compiled into a zero-dependency desktop executable, achieving 100% data consistency across three daily monitoring windows during Eid 2026 peak operations",
        "JDIH legal documentation portal — developed the admin panel using Vue 3 and Tailwind CSS with responsive CRUD operations, live search, bulk actions, and dedicated accessibility features"
      ],
      "active": true
    },
    {
      "id": "sinergiedu",
      "role": "Fullstack Developer · Founder",
      "company": "Sinergi Digital - SinergiEdu",
      "type": "Self-founded · SaaS",
      "location": "Yogyakarta, Indonesia",
      "period": "2025 – Present",
      "status": "active",
      "tags": ["Laravel", "Vue 3", "Tailwind CSS", "Inertia.js", "AI / LLM", "SSE", "Multi-vendor", "PostgreSQL / MySQL"],
      "summary": "Building an AI-powered SaaS platform that helps Indonesian teachers generate lesson plans and teaching modules aligned with the Kurikulum Merdeka national curriculum.",
      "highlights": [
        "Architecting multi-vendor LLM integration (DeepSeek, Groq, Cerebras, Gemini, Claude) with chunked generation strategy",
        "Implementing SSE-based streaming for real-time AI output on shared hosting infrastructure",
        "Designing RPP and Modul Ajar generation pipeline following official Kurikulum Merdeka standards",
        "Currently in final development stage — pre-launch"
      ],
      "active": false
    },
    {
      "id": "champion",
      "role": "Developer",
      "company": "PT. Champion Multikarya Pandhega",
      "type": "Full-time",
      "location": "Yogyakarta, Indonesia",
      "period": "Oct 2025 – Nov 2025",
      "status": "ended",
      "tags": ["PHP 5", "MySQL 5", "Syncthing", "Legacy Systems", "MySQL"],
      "summary": "Maintained and enhanced legacy corporate systems, ensuring stability of business-critical infrastructure with no modern tooling safety net.",
      "highlights": [
        "Designed and built a new data synchronization menu leveraging Syncthing for reliable two-way transfer across business units",
        "Extended daily revenue reporting to cover all main business units company-wide, giving management full financial visibility for the first time",
        "Systematically resolved multiple bugs across the internal legacy system maintaining operational continuity"
      ],
      "active": false
    },
    {
      "id": "kaigangames",
      "role": "Full Stack Developer",
      "company": "Kaigangames Entertainment SDN BHD",
      "type": "Full-time",
      "location": "Kuala Lumpur, Malaysia",
      "period": "Jul 2017 – May 2025",
      "status": "ended",
      "tags": ["Angular", "Vue 3", "Laravel", "NestJS", "Express.js", "Node.js", "Typescript", "Bootstrap", "MySQL", "JWT", "RBAC"],
      "summary": "Contributed to a wide range of web application projects over 8 years, building expertise across the full stack while delivering meaningful technical contributions in a cross-functional international team.",
      "highlights": [
        "Boosted overall website performance by 35% through code refactoring, database query optimization, and responsive design enhancements",
        "Engineered full-stack solutions with Angular on the frontend and Laravel / Node.js on the backend",
        "Implemented JWT-based authentication and Role-Based Access Control (RBAC), significantly strengthening platform security",
        "Developed reusable UI components and backend modules, reducing code duplication by 20%",
        "Led end-to-end development and launch of a game product landing page integrating strong CTAs that increased conversion rates",
        "Collaborated in Agile/Scrum teams with designers, QA engineers, and product owners"
      ],
      "active": false
    },
    {
      "id": "amteklab",
      "role": "Frontend Developer",
      "company": "AmtekLab Software House",
      "type": "Full-time",
      "location": "Yogyakarta, Indonesia",
      "period": "May 2016 – Jun 2017",
      "status": "ended",
      "tags": ["HTML5", "CSS3", "JavaScript", "jQuery", "Bootstrap", "Sass / Scss", "Laravel"],
      "summary": "Responsible for converting UI/UX designs into fully responsive and interactive web pages, with clean and maintainable code.",
      "highlights": [
        "Translated UI/UX wireframes into high-quality, fully responsive web pages using HTML5, CSS3, JavaScript, Bootstrap, and jQuery",
        "Customized Bootstrap components with Sass for scalable and maintainable styling",
        "Ensured cross-browser compatibility, web accessibility, and performance optimization across all devices",
        "Gained foundational backend knowledge with Laravel, CodeIgniter, and Native PHP"
      ],
      "active": false
    }
  ],
  "education": [
    {
      "id": "uad",
      "degree": "Bachelor of Information Technology",
      "major": "Web and Mobile Development",
      "institution": "Ahmad Dahlan University",
      "location": "Yogyakarta, Indonesia",
      "period": "Aug 2010 – Sep 2015",
      "highlights": [
        "Specialized in full-stack web development with both theoretical knowledge and practical application",
        "Core focus: PHP (Native, OOP), Laravel, MySQL, HTML5, CSS3, JavaScript, Bootstrap",
        "Foundational knowledge of Java and C++"
      ]
    }
  ],
  "projects": [
    {
      "sectionLabel": "Projects"
    },
    {
      "id": "spbe",
      "workplace": "DIY Provincial Communication and Informatics Service",
      "name": "SPBE GovTech Evaluation System",
      "category": "Government · Public Sector",
      "badge": { "label": "Gov · Public Sector", "kind": "gov" },
      "period": "Mar 2026 – Present",
      "role": "Software Developer",
      "status": "Active",
      "featured": false,
      "tags": ["Next.js", "React.js", "TypeScript", "REST API", "Radix UI", "Tailwind CSS"],
      "summary": "Large-scale e-government dashboard tracking digital transformation indices (SPBE) across Indonesian government agencies — handling complex hierarchical datasets, strict type safety, and real-time state management for regional evaluators under compliance deadlines.",
      "description": "I developed new frontend components, pages, and end-to-end submission monitoring logic from scratch as part of this mission-critical government project. I independently implemented complete assessment logic including state handling, scoring computation, and conditional flows for the submission monitoring feature. The system integrates REST API endpoints with full error handling and response mapping, alongside complex form validation to ensure data integrity across the assessment workflow. I also implemented custom UI components — modals, multi-step flows, and dynamic scoring displays — adapting existing patterns while introducing new interaction logic for hierarchical SPBE data. Applied strict TypeScript interfaces and useMemo / useCallback to prevent re-renders and null-reference errors during dynamic data hydration. Resolved pointer-events and z-index conflicts between Radix UI primitives and SweetAlert2 modals, restoring a seamless and accessible interaction layer. Built with Next.js, React.js, TypeScript, Radix UI, and Tailwind CSS.",
      "link": [
        { "name": "View Demo", "url": "https://link.to" },
        { "name": "View Source Code", "url": "https://link.to" }
      ],
      "repo": "private"
    },
    {
      "id": "traffic-monitoring",
      "workplace": "DIY Provincial Communication and Informatics Service",
      "name": "Automated Traffic Monitoring System",
      "category": "Government · Automation",
      "badge": { "label": "Gov · Automation", "kind": "gov" },
      "period": "Feb 2026 – Mar 2026",
      "role": "Software Developer",
      "status": "Ended",
      "featured": false,
      "tags": ["Puppeteer", "Node.js", "Cron Jobs", "PKG", "JSON Config"],
      "summary": "Headless browser automation tool compiled into a zero-dependency desktop executable for monitoring AI-CCTV traffic data during the 2026 Eid (Lebaran) homecoming and return flows.",
      "description": "I developed a specialized automation tool to streamline traffic data collection for the 2026 Eid (Lebaran) Homecoming and Return flows. The system was designed to assist internal authorities in monitoring high-traffic corridors through the provincial AI-CCTV portal. Key technical implementations include: Engineering a headless browser automation using Puppeteer-core, compiled into a standalone Desktop Executable (.exe) using the PKG utility for zero-dependency deployment. Integrated a flexible Cron Job system allowing users to define specific monitoring windows (Morning, Afternoon, Evening) to capture peak traffic data accurately. Built a JSON/File-based configuration system to manage target CCTV lists and set custom monitoring durations per camera. Automated the entire lifecycle: secure authentication, regional filtering, targeted CCTV selection, time-bound counting/analysis, and automated server-side data reporting. Optimized the automation to automatically close browser instances after reporting, ensuring low resource consumption on the host machine. This approach ensured 100% data consistency for provincial traffic reports by automating the end-to-end monitoring lifecycle — from secure login to server-side data synchronization — eliminating human error during high-pressure holiday traffic peaks.",
      "link": [
        { "name": "View Demo", "url": "https://jogjaprov.go.id/ai-cctv/" },
        { "name": "View Source Code", "url": "https://link.to" }
      ],
      "repo": "private"
    },
    {
      "id": "jdih",
      "workplace": "DIY Provincial Communication and Informatics Service",
      "name": "JDIH Legal Documentation Portal",
      "category": "Government · Public Sector",
      "badge": { "label": "Gov · Public Sector", "kind": "gov" },
      "period": "Jan 2026 – Feb 2026",
      "role": "Software Developer",
      "status": "Active",
      "featured": false,
      "tags": ["Vue 3", "Tailwind CSS", "Composition API", "REST API"],
      "summary": "Centralized legal information gateway for the entire DIY region, transforming the platform into a high-performance hub that connects citizens to every JDIH agency within Yogyakarta.",
      "description": "As the Front-End Developer, my mission was to transform this platform into the primary gateway for legal documentation across the entire province. We built a high-performance hub that connects citizens to every JDIH agency within the Yogyakarta region. Key highlights include: Centralized Hub designed as the main portal for anyone searching for legal info in DIY, Inclusivity with dedicated features for users with disabilities to ensure equal access, Mobile Integration streamlining the promotion and access to the JDIH Mobile app, and Performance optimization for a faster, more responsive experience. I was responsible for engineering the Admin Panel using Vue 3, focusing on making management intuitive and efficient. I implemented responsive CRUD operations and Live Search for seamless data handling, Bulk Action tools to manage large legal databases, and a custom Notification System to ensure administrative accuracy. This project was an honor to use technology to strengthen the digital infrastructure of Pemprov DIY and serve the community better.",
      "link": [
        { "name": "View Demo", "url": "https://jdih.jogjaprov.go.id" },
        { "name": "View Source Code", "url": "https://link.to" }
      ],
      "repo": "private"
    },
    {
      "id": "appraisal-system",
      "workplace": "Kaigangames Entertainment SDN BHD",
      "name": "Kaigangames Performance Appraisal System",
      "category": "Internal Tools · HR",
      "badge": { "label": "Internal Tools", "kind": "default" },
      "period": "Sep 2024 – May 2025",
      "role": "Fullstack Developer",
      "status": "Ongoing",
      "featured": false,
      "tags": ["Angular 19", "NestJS", "TypeScript", "MySQL", "Bootstrap", "REST API"],
      "summary": "End-to-end HR performance appraisal system replacing manual evaluation processes with a structured, role-based digital workflow.",
      "description": "I created this system to ease the internal performance appraisal process, which was previously conducted manually. Built with Angular 19 as the front-end framework and NestJS as the backend, with MySQL as the database, the system features multi-role user access (Employee, Manager, Supervisor, HR), comprehensive employee management, user registration and role assignment, self-appraisal for employees, evaluation appraisal for managers and supervisors, HR approval workflow, chart statistics on every user role, and PDF generation for final documents. The project demonstrates a modern full-stack architecture ensuring scalability and long-term maintainability, covering the full evaluation cycle from data input to reporting.",
      "link": [
        { "name": "View Demo", "url": "https://link.to" },
        { "name": "View Source Code", "url": "https://link.to" }
      ],
      "repo": "private"
    },
    {
      "id": "nullspace-website",
      "workplace": "Kaigangames Entertainment SDN BHD",
      "name": "Nullspace Website",
      "category": "Game Studio · Website",
      "badge": { "label": "Game Studio", "kind": "default" },
      "period": "Jun 2023 – Sep 2023",
      "role": "Fullstack Developer",
      "status": "Ended",
      "featured": false,
      "tags": ["Angular 16", "Bootstrap", "i18n", "TypeScript"],
      "summary": "Promotional website for Kaigan Games' new 3D game project, Nullspace, featuring full internationalization support.",
      "description": "I built this website to introduce the new Kaigan Games 3D Game Project, Nullspace, using Angular 16. The website currently features translation support for Japanese and English, demonstrating a robust i18n implementation that allows the studio to reach a broader international audience. This project showcases modern Angular development with a focus on internationalization and visual presentation for the gaming industry.",
      "link": [
        { "name": "View Demo", "url": "https://link.to" },
        { "name": "View Source Code", "url": "https://link.to" }
      ],
      "repo": "private"
    },
    {
      "id": "corporate-website-conversion",
      "workplace": "Kaigangames Entertainment SDN BHD",
      "name": "Kaigan Games Official Website Conversion",
      "category": "Migration · Frontend",
      "badge": { "label": "Migration", "kind": "default" },
      "period": "Jan 2023 – Mar 2023",
      "role": "Fullstack Developer",
      "status": "Ended",
      "featured": false,
      "tags": ["Angular 15", "Node.js", "Express", "MySQL", "Bootstrap", "Three.js"],
      "summary": "Full migration of the Kaigan Games official website from Laravel 7 to a modern Angular 15 and Node.js stack.",
      "description": "I led the complete conversion of the Kaigan Games Official Website from Laravel 7 to Angular 15. The frontend was built with Angular 15, Bootstrap 5, Three.js (for 3D visualizations), jQuery, SweetAlert2, and FontAwesome 5. The backend was restructured using Node.js, Express, and Sequelize for database model handling with MySQL as the database. This migration decoupled the frontend and backend architecture, improved frontend performance, and enabled long-term scalability for the company's public-facing site.",
      "link": [
        { "name": "View Demo", "url": "https://link.to" },
        { "name": "View Source Code", "url": "https://link.to" }
      ],
      "repo": "private"
    },
    {
      "id": "nareta",
      "workplace": "Kaigangames Entertainment SDN BHD",
      "name": "Kaigangames Nareta (Narrator)",
      "category": "Game Studio · Interactive",
      "badge": { "label": "Game Studio", "kind": "default" },
      "period": "May 2022 – Feb 2023",
      "role": "Fullstack Developer",
      "status": "Discontinued",
      "featured": false,
      "tags": ["Laravel 8", "Vue 3", "Inertia.js", "Bootstrap", "MySQL"],
      "summary": "Interactive narrative application where users can play and create branching chat-based stories, inspired by the 'Simulacra' game franchise.",
      "description": "I created Nareta with Laravel 8, Inertia.js, and Vue 3, using Bootstrap 5 for the frontend. In Nareta, you can play stories like a chat experience and choose your choices when options appear. The website concept is to make a chat system similar to the 'Simulacra' franchise, but users can create their own stories by following a guide. Users can register and upload their stories to the website to be played by other users. This project demonstrates full-stack integration with a focus on user-generated content and interactive storytelling.",
      "link": [
        { "name": "View Demo", "url": "https://link.to" },
        { "name": "View Source Code", "url": "https://link.to" }
      ],
      "repo": "private"
    },
    {
      "id": "al-wildan-website",
      "workplace": "Private Project",
      "name": "Al Wildan International Islamic School",
      "category": "Education · Website",
      "badge": { "label": "Education", "kind": "default" },
      "period": "Nov 2020 – Mar 2021",
      "role": "Fullstack Developer",
      "status": "Ended",
      "featured": false,
      "tags": ["Laravel 7", "Bootstrap", "JavaScript", "MySQL"],
      "summary": "Comprehensive school management website with student registration, statistics dashboard, and multi-user role system.",
      "description": "I created the website using the Laravel 7 framework from scratch. The features include: student registration for both domestic and international students, student statistics (number of students, applicants, country of origin), image slider, dynamic dropdown menu, multi-user roles, and email notification when a registrant is accepted. This project showcases a complete full-stack implementation tailored for educational institutions with complex user management needs.",
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
      "category": "Game Studio · Storefront",
      "badge": { "label": "Game Studio", "kind": "default" },
      "period": "Jun 2020 – Dec 2020",
      "role": "Fullstack Developer",
      "status": "Ended",
      "featured": false,
      "tags": ["Laravel 7", "Bootstrap 4", "JavaScript", "MySQL"],
      "summary": "Official game catalog storefront for Kaigan Games, featuring all studio titles with dynamic content updates.",
      "description": "I created this project using Laravel 7 and Bootstrap 4. Playsimulacra acts as the official 'store' for the studio's games. On the website, visitors can find all created games from the very first to the latest release — so the data is always updated every time the studio creates a new game. This project demonstrates a clean, responsive storefront design optimized for showcasing game products.",
      "link": [
        { "name": "View Demo", "url": "https://link.to" },
        { "name": "View Source Code", "url": "https://link.to" }
      ],
      "repo": "private"
    },
    {
      "id": "kaigan-website-old",
      "workplace": "Kaigan Games Entertainment SDN BHD",
      "name": "Kaigan Games Official Website (Legacy)",
      "category": "Game Studio · Website",
      "badge": { "label": "Game Studio", "kind": "default" },
      "period": "Aug 2020 – Oct 2020",
      "role": "Fullstack Developer",
      "status": "Ended",
      "featured": false,
      "tags": ["Laravel 7", "Bootstrap", "JavaScript", "MySQL"],
      "summary": "The original Laravel 7 implementation of the Kaigan Games official website, built from scratch with mobile-first responsive design.",
      "description": "I worked on the Kaigan Games Official Website for approximately 2 months. I created the website from scratch with the latest version of Laravel 7. The design was provided by our web designer, so my role was to implement the design into code. The website is fully mobile-friendly and responsive, demonstrating clean frontend implementation and solid Laravel backend structure.",
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
      "badge": { "label": "Mobile App", "kind": "default" },
      "period": "Jan 2018 – May 2018",
      "role": "Fullstack Developer",
      "status": "Discontinued",
      "featured": false,
      "tags": ["Ionic 3", "Angular", "PayPal API", "Laravel", "REST API"],
      "summary": "Cross-platform mobile application for book and comic streaming, built with Ionic 3 for Android and iOS.",
      "description": "I engineered a cross-platform mobile application for the Bukufi book and comic streaming service using the Ionic 3 framework, deploying native builds for both Android and iOS from a single codebase. I integrated multiple third-party authentication APIs, including Facebook Login and Google Sign-In, alongside standard registration to streamline user onboarding. I implemented a secure monetization system by integrating the PayPal API to handle subscription payments for premium content. I connected the mobile app to a custom Laravel 5.4 backend via a RESTful API to manage user accounts, content streaming, and payment statuses.",
      "link": [
        { "name": "View Demo", "url": "https://link.to" },
        { "name": "View Source Code", "url": "https://link.to" }
      ],
      "repo": "private"
    },
    {
      "id": "bukufi-web",
      "workplace": "Kaigan Games Entertainment SDN BHD",
      "name": "Bukufi (Website Version)",
      "category": "Web · Streaming",
      "badge": { "label": "Web App", "kind": "default" },
      "period": "Jul 2017 – Mar 2018",
      "role": "Fullstack Developer",
      "status": "Discontinued",
      "featured": false,
      "tags": ["Laravel 5.4", "Bootstrap 3", "SASS", "PayPal API", "MySQL"],
      "summary": "Web-based book and comic streaming platform with premium subscription management and PayPal integration.",
      "description": "Bukufi is a book and comic streamer. Visitors can read books or comics from the collection, but there is also premium paid content. To handle payments, I used the PayPal API. To make it easier for visitors to log in, I provided login with Facebook and Google Plus alongside standard login. Bukufi was built with Laravel 5.4 as the backend and Bootstrap 3 as the frontend, with a combination of SASS, JavaScript, and jQuery. For future features, Bukufi will allow registered users to publish their own books or comics, but the content needs administrator approval before publishing.",
      "link": [
        { "name": "View Demo", "url": "https://link.to" },
        { "name": "View Source Code", "url": "https://link.to" }
      ],
      "repo": "private"
    },
    {
      "id": "his-hermina",
      "workplace": "AmtekLab Software House",
      "name": "Hospital Information System (HIS) for Hermina Group",
      "category": "Healthcare · Enterprise",
      "badge": { "label": "Enterprise", "kind": "default" },
      "period": "May 2016 – Jun 2017",
      "role": "Frontend Programmer",
      "status": "Ended",
      "featured": false,
      "tags": ["Bootstrap 3", "JavaScript", "jQuery", "SASS", "Frontend"],
      "summary": "Web-based conversion of the desktop-based Hospital Information System for the Hermina Group in Jakarta.",
      "description": "This HIS was developed for the Hermina Group in Jakarta. Hermina already had an Information System but it was still desktop-based and they wanted to convert it to web-based and add some new processes. On this project, I worked as a front-end programmer. My job was to create the new layouts needed in the system. To do this, I used Bootstrap 3, JavaScript, jQuery, and the SASS preprocessor to handle complex CSS data. This project demonstrates frontend expertise in enterprise-level healthcare system migration.",
      "link": [
        { "name": "View Demo", "url": "https://link.to" },
        { "name": "View Source Code", "url": "https://link.to" }
      ],
      "repo": "private"
    }
  ],
  common: {
    submit: "Submit",
    cancel: "Cancel",
    backHome: "Back to Home",
    techStack: "Tech Stack",
    links: "Links",
    companyOrganization: "COMPANY / ORGANIZATION",
    period: "PERIOD",
    status: "STATUS",
    category: "CATEGORY",
    role: "ROLE"
  },
} as const;

export default en;

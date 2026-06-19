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
      "id": "sinergiedu",
      "name": "SinergiEdu",
      "category": "SaaS · AI",
      "badge": { "label": "SaaS · AI", "kind": "ai" },
      "period": "2025 – Present",
      "status": "active",
      "featured": true,
      "tags": ["Laravel", "Vue 3", "Inertia.js", "Multi-LLM", "SSE"],
      "summary": "AI-powered lesson plan generator for Indonesian teachers, aligned with the Kurikulum Merdeka national curriculum.",
      "description": "A self-founded SaaS platform that helps teachers generate RPP and Modul Ajar documents through a multi-vendor LLM pipeline (DeepSeek, Groq, Cerebras, Gemini, Claude) with chunked generation and real-time SSE streaming, built to run reliably on shared hosting.",
      "link": ""
    },
    {
      "id": "spbe",
      "name": "SPBE GovTech Evaluation System",
      "category": "Government · Public sector",
      "badge": { "label": "Gov · Public sector", "kind": "gov" },
      "period": "2026 – Present",
      "status": "active",
      "featured": false,
      "tags": ["Next.js", "TypeScript", "REST API", "Radix UI", "Tailwind CSS"],
      "summary": "Large-scale e-government dashboard tracking digital transformation indices (SPBE) across Indonesian government agencies.",
      "description": "Independently built the submission monitoring module from scratch — including scoring logic, state management, and REST API integration with full error handling — under strict compliance deadlines.",
      "link": ""
    },
    {
      "id": "traffic-monitoring",
      "name": "Automated Traffic Monitoring System",
      "category": "Automation · Government",
      "badge": { "label": "Automation", "kind": "default" },
      "period": "2026",
      "status": "ended",
      "featured": false,
      "tags": ["Puppeteer", "Node.js", "Cron Jobs", "PKG"],
      "summary": "AI-CCTV traffic monitoring automation tool for Yogyakarta Province's Lebaran 2026 operations.",
      "description": "Headless browser automation compiled into a zero-dependency desktop executable for internal staff, achieving 100% data consistency across three daily monitoring windows and eliminating manual reporting errors during peak holiday traffic.",
      "link": ""
    },
    {
      "id": "jdih",
      "name": "JDIH Legal Documentation Portal",
      "category": "Government · Public sector",
      "badge": { "label": "Gov · Public sector", "kind": "gov" },
      "period": "2026",
      "status": "ended",
      "featured": false,
      "tags": ["Vue 3", "Tailwind CSS"],
      "summary": "Centralized legal information gateway for the entire DIY region.",
      "description": "Developed the admin panel with responsive CRUD operations, live search, bulk action tools for large legal databases, a custom notification system, and dedicated accessibility features ensuring equal access for users with disabilities.",
      "link": ""
    },
    {
      "id": "appraisal-system",
      "name": "Performance Appraisal System",
      "category": "Internal Tools · HR",
      "badge": { "label": "Internal Tools", "kind": "default" },
      "period": "2026",
      "status": "ended",
      "featured": false,
      "tags": ["Angular 19", "NestJS", "TypeScript", "REST API", "Swagger", "MySQL", "Bootstrap"],
      "summary": "End-to-end HR appraisal system enabling structured employee performance evaluation across the organization.",
      "description": "Built with a modern full-stack architecture ensuring scalability and long-term maintainability, covering the full evaluation cycle from data input to reporting.",
      "link": ""
    },
    {
      "id": "corporate-website",
      "name": "Corporate Website Conversion",
      "category": "Migration · Frontend",
      "badge": { "label": "Migration", "kind": "default" },
      "period": "2023",
      "status": "ended",
      "featured": false,
      "tags": ["Angular 15", "Node.js", "Laravel 7", "MySQL", "Bootstrap"],
      "summary": "Led full migration of a legacy Laravel 7 company website to a modern Angular 15 and Node.js stack.",
      "description": "Improved frontend performance, decoupled the frontend / backend architecture, and enabled long-term scalability for the company's public-facing site.",
      "link": ""
    },
    {
      "id": "nareta",
      "name": "Nareta (Kaigangames Narrator)",
      "category": "Game Studio",
      "badge": { "label": "Game Studio", "kind": "default" },
      "period": "2022 – 2023",
      "status": "ended",
      "featured": false,
      "tags": ["Laravel", "Vue 3", "MySQL", "Bootstrap"],
      "summary": "Interactive story application with dynamic narrative flows.",
      "description": "Built on a Laravel backend paired with a Vue 3 frontend, demonstrating full-stack integration and user-driven content experience design.",
      "link": ""
    },
    {
      "id": "playsimulacra",
      "name": "Playsimulacra",
      "category": "Game Studio",
      "badge": { "label": "Game Studio", "kind": "default" },
      "period": "2020",
      "status": "ended",
      "featured": false,
      "tags": ["Laravel", "MySQL", "Bootstrap"],
      "summary": "Game product catalog website serving as the public-facing storefront for a commercial game title.",
      "description": "Built for performance and responsive display across devices, serving as the official storefront for the game's release.",
      "link": ""
    },
    {
      "id": "world-debt",
      "name": "world-debt",
      "category": "Personal · Data Visualization",
      "badge": { "label": "Nuxt 4 · WIP", "kind": "default" },
      "period": "2026",
      "status": "active",
      "featured": false,
      "tags": ["Nuxt 4", "Tailwind v4", "i18n"],
      "summary": "Global debt data visualization tracker with full i18n support.",
      "description": "A personal side project pulling World Bank and IMF APIs to visualize global debt trends, built as a learning project for the Nuxt 4 ecosystem.",
      "link": ""
    }
  ],
  common: {
    submit: "Submit",
    cancel: "Cancel",
  },
} as const;

export default en;

export const portfolioData = {
  personal: {
    name: "Kartikey Yadav",
    title: "Full-Stack Web Developer & DSA Enthusiast",
    subtitle: "B.Tech Computer Science Graduate | MERN Stack | AI/LLM Integrations",
    email: "kartikeyyadav1507@gmail.com",
    phone: "9453071519",
    location: "Noida, India",
    college: "Ajay Kumar Garg Engineering College",
    degree: "B.Tech in Computer Science",
    gradYear: "2026",
    cgpa: "7.85",
    links: {
      github: "https://github.com/yadavkartikey",
      linkedin: "https://www.linkedin.com/in/kartikey-yadav1507",
      leetcode: "https://leetcode.com/u/Kartik_ey/",
      code360: "https://www.naukri.com/code360"
    },
    summary: "I'm a full-stack engineer who enjoys building reliable web applications and tackling challenging algorithmic problems. With hands-on experience across the MERN stack (React, Node.js, Express, MongoDB) and a strong foundation in Data Structures & Algorithms, I focus on shipping software that is performant, resilient, and thoughtfully designed. From shipping features on live projects at TechnoHacks to solving 200+ DSA problems across LeetCode and Code360, I take pride in writing clean, well-tested code and integrating modern engineering workflows."
  },

  roles: [
    "Full-Stack MERN Developer",
    "DSA & Problem Solver (200+ Solved)",
    "React.js Specialist",
    "AI & LLM Integration Explorer"
  ],

  stats: [
    { label: "DSA Questions Solved", value: 200, suffix: "+", icon: "Code2" },
    { label: "Engineering CGPA", value: 7.85, suffix: "", icon: "GraduationCap" },
    { label: "Projects Completed", value: 5, suffix: "+", icon: "Briefcase" },
    { label: "Ninja Dominator League", value: "Code360", suffix: "", icon: "Trophy" }
  ],

  skills: {
    languages: [
      { name: "JavaScript", tag: "Frontend & Backend", icon: "FileCode2" },
      { name: "C++", tag: "DSA & Problem Solving", icon: "Terminal" },
      { name: "Python", tag: "Scripting & Algorithms", icon: "Code" },
      { name: "C", tag: "System Programming", icon: "Cpu" },
      { name: "SQL", tag: "Relational Queries", icon: "Database" }
    ],
    web: [
      { name: "React.js", tag: "Components & State", icon: "Atom" },
      { name: "HTML5 / CSS3", tag: "Responsive Layouts", icon: "Layout" },
      { name: "Tailwind CSS", tag: "Utility-First UI", icon: "Palette" },
      { name: "Node.js", tag: "Backend Runtime", icon: "Server" },
      { name: "Express.js", tag: "RESTful Routing", icon: "Network" },
      { name: "MongoDB", tag: "NoSQL & Cloud Atlas", icon: "Database" }
    ],
    engineering: [
      { name: "Software Development (SDLC)", tag: "Agile & Architecture", icon: "Workflow" },
      { name: "Software Testing", tag: "Unit & Integration Tests", icon: "CheckCircle2" },
      { name: "Debugging & Optimization", tag: "Root Cause Analysis", icon: "Bug" },
      { name: "RESTful APIs", tag: "API Design & Integration", icon: "Send" }
    ],
    ai: [
      { name: "AI Tools Utilization", tag: "Developer Productivity", icon: "Sparkles" },
      { name: "Large Language Models (LLMs)", tag: "API Integrations", icon: "Brain" },
      { name: "Prompt Engineering", tag: "Context Optimization", icon: "Wand2" },
      { name: "RAG Fundamentals", tag: "Vector & Knowledge Search", icon: "Webhook" }
    ],
    coreCS: [
      { name: "Data Structures & Algorithms", tag: "200+ Solved Questions", icon: "Boxes" },
      { name: "Database Management Systems", tag: "Normalization & Indexing", icon: "Database" },
      { name: "Operating Systems", tag: "Memory & Concurrency", icon: "Monitor" },
      { name: "Computer Networks", tag: "TCP/IP & Web Protocols", icon: "Globe" }
    ],
    professional: [
      { name: "Team Collaboration", tag: "Cross-Functional Synergy", icon: "Users" },
      { name: "Task Ownership", tag: "End-to-End Accountability", icon: "Target" },
      { name: "Time Management", tag: "Milestones & Prioritization", icon: "Clock" },
      { name: "Continuous Learning", tag: "Rapid Tech Adoption", icon: "BookOpen" },
      { name: "Receptiveness to Feedback", tag: "Code Reviews & Growth", icon: "MessageSquare" }
    ],
    tools: [
      { name: "Git & GitHub", tag: "Version Control & PRs", icon: "GitBranch" },
      { name: "VS Code", tag: "Development Environment", icon: "Laptop" },
      { name: "React Router", tag: "Client-Side SPA Routing", icon: "Compass" },
      { name: "Browser DevTools", tag: "Network & DOM Profiling", icon: "Wrench" }
    ]
  },

  experience: [
    {
      role: "Web Developer Intern",
      company: "TechnoHacks Solutions Pvt. Ltd.",
      period: "Internship",
      location: "Remote",
      bullets: [
        "Gained hands-on experience in full-stack web development by working on multiple live projects using the MERN stack (MongoDB, Express.js, React.js, Node.js).",
        "Developed responsive and dynamic web applications, implementing RESTful APIs for backend services and creating interactive user interfaces with React.js and custom CSS.",
        "Enhanced proficiency in JavaScript, HTML, and CSS through real-world application development, including integrating external APIs, state management, and client-side routing.",
        "Applied UI/UX design principles to create user-centric interfaces with smooth navigation and responsive layouts.",
        "Strengthened problem-solving abilities by debugging complex issues, optimizing code performance, and ensuring cross-browser compatibility throughout the development lifecycle."
      ],
      technologies: ["React.js", "MongoDB", "Express.js", "Node.js", "REST APIs", "CSS3", "JavaScript"]
    }
  ],

  education: [
    {
      institution: "Ajay Kumar Garg Engineering College, Ghaziabad",
      degree: "B.Tech in Computer Science",
      period: "Nov 2022 – June 2026",
      cgpa: "7.85 / 10.0",
      highlights: [
        "Focus on Data Structures, Algorithms, Systems Architecture, and Database Systems.",
        "Active participant in competitive programming and web development coding challenges."
      ]
    }
  ],

  projects: [
    {
      id: "food-reels",
      title: "Food Reels — MERN Food Discovery Platform",
      category: "Full-Stack Video Discovery",
      shortDesc: "Short-form food reel discovery platform featuring smooth HTML5 video feeds, JWT authentication, and media delivery via ImageKit & Multer.",
      description: "Architected an engaging food discovery web application leveraging modern MERN stack architecture with React 19 and Node.js. Features an Instagram/TikTok-style vertical short-form video feed powered by the HTML5 Video API, secure cookie-based JWT authentication, media storage pipeline with Multer and ImageKit, and RESTful API endpoints for seamless dish discovery and user interactions.",
      highlights: [
        "Built vertical short-form food reel player using React 19 and HTML5 Video API with smooth intersection-based autoplay/pause controls.",
        "Developed secure authentication pipeline using HTTP-only cookies, JSON Web Tokens (JWT), and bcryptjs password hashing.",
        "Implemented high-performance media upload and delivery workflow with Multer, UUID-based indexing, and ImageKit CDN integration.",
        "Designed RESTful Express backend connected to MongoDB via Mongoose with optimized indexing for real-time video feeds."
      ],
      technologies: [
        "React 19",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Mongoose",
        "HTML5 Video API",
        "JWT",
        "ImageKit",
        "Multer",
        "bcryptjs",
        "Axios",
        "Vite"
      ],
      github: "https://github.com/yadavkartikey/Food-Reels----MERN-Food-Discovery-Platform",
      demo: "https://github.com/yadavkartikey/Food-Reels----MERN-Food-Discovery-Platform",
      gradient: "from-amber-500 to-rose-600",
      featured: true
    },
    {
      id: "portfolio-showcase",
      title: "Interactive Engineering Portfolio",
      category: "Modern Web Engineering",
      shortDesc: "High-performance personal developer showcase built with React, Vite, and Tailwind CSS featuring interactive cursor spotlights and recruiter quick-actions.",
      description: "Designed and engineered a production-grade personal engineering portfolio focusing on high aesthetics, sub-second loading speeds, and intuitive recruiter interactions. Built with responsive glassmorphism, dynamic cursor spotlights, an ATS-optimized resume modal drawer, structured project architecture deep-dives, and direct WhatsApp messaging integration.",
      highlights: [
        "Engineered responsive developer showcase using React, Vite, and Tailwind CSS with sub-second initial load times.",
        "Implemented interactive UI elements including custom cursor spotlight, print-optimized resume modal, and animated architecture drawers.",
        "Integrated direct WhatsApp Web API hook and email automation for immediate recruiter outreach and engagement.",
        "Optimized build assets and SEO metadata, ensuring fluid mobile-first responsiveness and high performance scores."
      ],
      technologies: ["React.js", "Vite", "Tailwind CSS", "JavaScript", "HTML5", "CSS3", "Lucide Icons", "Vercel"],
      github: "https://github.com/yadavkartikey/MyPortfolio",
      demo: "https://github.com/yadavkartikey/MyPortfolio",
      gradient: "from-cyan-500 to-blue-600",
      featured: true
    },
    {
      id: "hotel-management",
      title: "Hotel Management Web Application",
      category: "Dashboard & Management System",
      shortDesc: "Interactive hotel management system for administrators to manage bookings, guests, rooms, and payments efficiently.",
      description: "Built a responsive and interactive hotel management system that empowers administrators with real-time dynamic dashboards, complex CRUD operations, room availability tracking, guest reservation flow, and visual analytical charts using Recharts.",
      highlights: [
        "Built responsive and interactive hotel management system for administrator operations.",
        "Created dynamic visual analytics dashboards, payment logs, and booking CRUD interfaces.",
        "Utilized React Query for server state management and React Hook Form for validated forms.",
        "Designed clean and accessible UI using Tailwind CSS and Recharts data visualizations."
      ],
      technologies: ["React.js", "React Router", "Tailwind CSS", "React Query", "React Hook Form", "Recharts"],
      github: "https://github.com/yadavkartikey",
      demo: "https://github.com/yadavkartikey",
      gradient: "from-indigo-500 to-purple-600",
      featured: true
    }
  ],

  achievements: [
    {
      title: "Solved 200+ DSA Questions",
      description: "Demonstrated consistent problem-solving skills across Data Structures & Algorithms topics including Graphs, Trees, Dynamic Programming, and Arrays.",
      badge: "200+ Problems",
      icon: "Code2"
    },
    {
      title: "Ninja Dominator League",
      description: "Achieved Ninja Dominator League status in Code360 by CodingNinjas through competitive coding contests.",
      badge: "Code360 Ninja",
      icon: "Trophy"
    }
  ]
};

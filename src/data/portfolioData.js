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
    summary: "I am Kartikey Yadav, a Computer Science graduate (B.Tech). Confident and detail-oriented, with proficiency in HTML, CSS, JavaScript, and React for building responsive web applications. Strong problem-solving skills in Data Structures and Algorithms (DSA). Experienced in designing and developing responsive web applications for optimal user experience. Seeking a full-time opportunity to apply my skills and expand my expertise in DSA and web development."
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
      { name: "JavaScript", level: 90, icon: "FileCode2" },
      { name: "C++", level: 85, icon: "Terminal" },
      { name: "Python", level: 78, icon: "Code" },
      { name: "C", level: 75, icon: "Cpu" },
      { name: "SQL", level: 82, icon: "Database" }
    ],
    web: [
      { name: "React.js", level: 92, icon: "Atom" },
      { name: "HTML5 / CSS3", level: 95, icon: "Layout" },
      { name: "Tailwind CSS", level: 88, icon: "Palette" },
      { name: "Node.js (basic)", level: 75, icon: "Server" },
      { name: "Express.js (basic)", level: 75, icon: "Network" },
      { name: "MongoDB", level: 80, icon: "Database" }
    ],
    ai: [
      { name: "Large Language Models (LLMs)", level: 82, icon: "Sparkles" },
      { name: "Prompt Engineering", level: 88, icon: "Wand2" },
      { name: "RAG Fundamentals", level: 78, icon: "Brain" },
      { name: "REST API AI Integration", level: 85, icon: "Webhook" }
    ],
    coreCS: [
      { name: "Data Structures & Algorithms", level: 90, icon: "Boxes" },
      { name: "Database Management Systems", level: 85, icon: "Database" },
      { name: "Operating Systems", level: 80, icon: "Monitor" },
      { name: "Computer Networks", level: 78, icon: "Globe" },
      { name: "SDLC & Software Engineering", level: 82, icon: "Workflow" }
    ],
    tools: [
      { name: "Git & GitHub", level: 90, icon: "GitBranch" },
      { name: "VS Code", level: 95, icon: "Laptop" },
      { name: "RESTful APIs", level: 88, icon: "Send" },
      { name: "React Router", level: 90, icon: "Compass" }
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
      id: "mern-project",
      title: "MERN Stack Application",
      category: "Full-Stack Web App",
      shortDesc: "Full-stack application featuring JWT authentication, protected API routes, and cloud persistence with MongoDB Atlas.",
      description: "Architected a full-stack MERN application with a component-based React frontend, RESTful Express.js backend, and MongoDB Atlas for cloud data persistence. Built with secure authentication, modular Express middleware, and seamless Axios async communication.",
      highlights: [
        "Architected full-stack MERN application with React frontend, Express.js backend, and MongoDB Atlas.",
        "Implemented JWT-based authentication, protected API routes, and dynamic client-side routing using React Router.",
        "Designed and consumed RESTful APIs with full CRUD support, integrating Axios for async HTTP communication.",
        "Optimized application performance through efficient MongoDB indexing and modular middleware for error handling."
      ],
      technologies: ["React.js", "CSS", "HTML", "JavaScript", "Node.js", "Express.js", "MongoDB", "JWT", "Axios"],
      github: "https://github.com/yadavkartikey/Food-Delivery-Application-main-1-/tree/main/Food-Delivery-Application-main",
      demo: "https://github.com/yadavkartikey/Food-Delivery-Application-main-1-/tree/main/Food-Delivery-Application-main",
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

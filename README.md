# 🚀 Kartikey Yadav — Personal Animated Portfolio Website

A modern, high-performance, and visually captivating animated personal portfolio website built with **React**, **Vite**, **Tailwind CSS v4**, and **HTML5 Canvas**.

![License](https://img.shields.io/badge/License-MIT-blue.svg)
![React](https://img.shields.io/badge/React-18.x-61DAFB?logo=react)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-v4-06B6D4?logo=tailwindcss)
![Vite](https://img.shields.io/badge/Vite-8.x-646CFF?logo=vite)

---

## 🌟 Overview

This web application serves as the interactive digital resume and project showcase for **Kartikey Yadav**:
- 🎓 **Degree**: B.Tech in Computer Science from **Ajay Kumar Garg Engineering College (AKGEC)** (2022–2026, CGPA: **7.85**)
- 💻 **Specialization**: Full-Stack MERN Stack Developer (MongoDB, Express.js, React.js, Node.js) & AI/LLM Integration Explorer
- 🧠 **Problem Solving**: **200+ Solved DSA Questions** across LeetCode & Ninja Dominator League status on Code360 by CodingNinjas
- 📍 **Location**: **Noida, India**

---

## ✨ Key Features

- 🌌 **Interactive Canvas Particle Backdrop**: Physics-based floating node network reacting to cursor movement (`ParticleBackground.jsx`).
- ⚡ **Dynamic Role Typewriter**: Animated headline cycling through developer roles (`Hero.jsx`).
- 💻 **JSON Profile Widget**: macOS-style developer terminal card presenting key background attributes.
- 🎓 **Academic & CS Foundations**: Spotlight on AKGEC credentials, CGPA 7.85, and a 5-pillar Core CS Grid (DSA, OS, DBMS, Networks, SDLC).
- 💼 **Industry Internship**: Interactive timeline card for **TechnoHacks Solutions Pvt. Ltd.** with expandable achievement points.
- 🛠️ **Filterable Skill Matrix**: Filter skills across *Web Dev, Languages, AI & LLMs, Core CS, and Tools* with animated progress bars.
- 🚀 **Projects Showcase & Architecture Drawer**: Cards for the **MERN Stack Application (Food Delivery)** and **Hotel Management Web App** featuring expandable engineering breakdown drawers.
- 🏆 **Competitive Coding Honors**: Detailed achievements for 200+ solved DSA problems and Code360 Ninja Dominator rank.
- 📄 **Printable & Downloadable Resume Viewer**: Full HTML CV overlay with single-click `window.print()` PDF generator (`ResumeModal.jsx`).
- 📬 **Interactive Contact System**: Direct copy buttons for email (`kartikeyyadav1507@gmail.com`) and phone (`9453071519`), location badge (**Noida, India**), and mailto message handler.

---

## 🔗 Direct Platform & Project Links

- 💼 **LinkedIn Profile**: [linkedin.com/in/kartikey-yadav1507](https://www.linkedin.com/in/kartikey-yadav1507)
- 🐙 **GitHub Profile**: [github.com/yadavkartikey](https://github.com/yadavkartikey)
- 🧩 **LeetCode Profile**: [leetcode.com/u/Kartik_ey](https://leetcode.com/u/Kartik_ey/)
- 🍔 **MERN Stack Project Repository**: [Food Delivery Application Repo](https://github.com/yadavkartikey/Food-Delivery-Application-main-1-/tree/main/Food-Delivery-Application-main)

---

## 📂 Project Architecture

```
MyPortfolio/
├── public/
│   ├── favicon.svg               # Glowing vector SVG logo mark
│   └── favicon.png               # High-res favicon PNG image
├── src/
│   ├── main.jsx                  # DOM root entry point
│   ├── App.jsx                   # Main layout container & modal state manager
│   ├── index.css                 # Base styles, scrollbars & glassmorphic utilities
│   ├── data/
│   │   └── portfolioData.js      # Decoupled single source of truth data object
│   └── components/
│       ├── ParticleBackground.jsx# Interactive HTML5 particle mesh system
│       ├── Navbar.jsx            # Glassmorphic header & scroll tracker
│       ├── Hero.jsx              # Typewriter headline & code spotlight
│       ├── About.jsx             # Profile, AKGEC education & CS core grid
│       ├── Experience.jsx        # TechnoHacks Solutions internship card
│       ├── Skills.jsx            # Filterable skill matrix & progress bars
│       ├── Projects.jsx          # Projects showcase & architecture modal
│       ├── Achievements.jsx      # 200+ DSA solved questions & Code360 rank
│       ├── ResumeModal.jsx       # Printable/downloadable HTML resume view
│       ├── Contact.jsx           # Email/Phone copy triggers & message form
│       ├── Footer.jsx            # Copyright, social links & back-to-top button
│       └── Icons.jsx             # Custom SVG components for GitHub & LinkedIn
├── index.html                    # Entry HTML & favicon links
├── package.json                  # Dependencies & npm scripts
├── postcss.config.js             # PostCSS setup with @tailwindcss/postcss
└── tailwind.config.js            # Custom color palette & keyframe glows
```

---

## 🛠️ Local Development & Build

### Prerequisites
- Node.js (v18.0 or higher)
- npm (v9.0 or higher)

### 1. Clone the repository
```bash
git clone https://github.com/yadavkartikey/MyPortfolio.git
cd MyPortfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run development server
```bash
npm run dev
```
Open [http://localhost:5173/](http://localhost:5173/) in your browser to view the live site.

### 4. Build for production
```bash
npm run build
```
Generates a minified, production-ready output bundle in the `dist/` folder.

---

## 📜 License

This project is open source and available under the [MIT License](LICENSE).

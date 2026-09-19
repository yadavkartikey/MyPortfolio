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
- 🚀 **Projects Showcase & Architecture Drawer**: Cards for **Food Reels — MERN Food Discovery Platform**, **Interactive Engineering Portfolio**, and **Hotel Management Web App** featuring expandable engineering breakdown drawers.
- 🏆 **Competitive Coding Honors**: Detailed achievements for 200+ solved DSA problems and Code360 Ninja Dominator rank.
- 📄 **Printable & Downloadable Resume Viewer**: Full HTML CV overlay with single-click `window.print()` PDF generator (`ResumeModal.jsx`).
- 📬 **Interactive Contact System**: Direct copy buttons for email (`kartikeyyadav1507@gmail.com`) and phone (`9453071519`), location badge (**Noida, India**), and mailto message handler.

---

## 🔗 Direct Platform & Project Links

- 💼 **LinkedIn Profile**: [linkedin.com/in/kartikey-yadav1507](https://www.linkedin.com/in/kartikey-yadav1507)
- 🐙 **GitHub Profile**: [github.com/yadavkartikey](https://github.com/yadavkartikey)
- 🧩 **LeetCode Profile**: [leetcode.com/u/Kartik_ey](https://leetcode.com/u/Kartik_ey/)
- 🎬 **Food Reels Project Repository**: [Food Reels — MERN Food Discovery Platform Repo](https://github.com/yadavkartikey/Food-Reels----MERN-Food-Discovery-Platform)

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

## 🌐 100% Free Deployment Options

### Option 1: Deploy on Vercel (Recommended ⚡)
1. Go to [vercel.com](https://vercel.com/) and sign in with your GitHub account (`yadavkartikey`).
2. Click **"Add New..."** → **"Project"**.
3. Import your **`MyPortfolio`** repository.
4. Keep the default settings (Framework Preset: **Vite**, Build Command: `npm run build`, Output Directory: `dist`).
5. Click **"Deploy"**.
🎉 Your site will be live on a free SSL URL like `https://myportfolio-yadavkartikey.vercel.app`!

---

### Option 2: Deploy on GitHub Pages (Free via GitHub)
1. Push this repository to GitHub (`git push -u origin main`).
2. Go to your GitHub repository **Settings** → **Pages**.
3. Under **Build and deployment** → **Source**, select **GitHub Actions**.
4. Push any new commit to `main`, and the automated `.github/workflows/deploy.yml` workflow will build and deploy your site for free!

---

### Option 3: Deploy on Netlify
1. Go to [netlify.com](https://www.netlify.com/) and sign in with GitHub.
2. Click **"Add new site"** → **"Import an existing project"**.
3. Select **`MyPortfolio`**.
4. Set Build Command: `npm run build` and Publish Directory: `dist`.
5. Click **"Deploy MyPortfolio"**.

---

## 📜 License

This project is open source and available under the [MIT License](LICENSE).


import React from 'react';
import { 
  User, 
  GraduationCap, 
  Award, 
  BookOpen, 
  Boxes, 
  Database, 
  Monitor, 
  Globe, 
  Workflow, 
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const About = () => {
  const csCoreSkills = [
    { title: "Data Structures & Algorithms", icon: Boxes, desc: "Arrays, Trees, Graphs, Dynamic Programming & Optimization" },
    { title: "Database Management Systems", icon: Database, desc: "SQL, NoSQL, MongoDB Atlas, Indexing & Query Optimization" },
    { title: "Operating Systems", icon: Monitor, desc: "Process Management, Threads, Memory Management & Concurrency" },
    { title: "Computer Networks", icon: Globe, desc: "TCP/IP, HTTP/HTTPS, REST Architecture, Network Protocols" },
    { title: "Software Engineering & SDLC", icon: Workflow, desc: "Agile, Modular Design, Version Control & Clean Code" }
  ];

  return (
    <section id="about" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-semibold">
            <User className="w-4 h-4" />
            <span>BACKGROUND & ACADEMICS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            About <span className="text-gradient">Kartikey Yadav</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            A passionate Computer Science graduate dedicated to building high-performance web systems and writing clean algorithms.
          </p>
        </div>

        {/* Top Grid: Bio Summary + Education */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          
          {/* Bio & Professional Summary */}
          <div className="lg:col-span-7 rounded-3xl glass-panel p-8 border border-slate-800/80 relative overflow-hidden group hover:border-cyan-500/40 transition-all duration-300">
            <div className="absolute top-0 right-0 p-8 opacity-5 text-cyan-400 pointer-events-none">
              <User className="w-48 h-48" />
            </div>

            <div className="relative z-10 space-y-6 text-left">
              <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                <Sparkles className="w-6 h-6 text-cyan-400" />
                <span>Professional Profile</span>
              </h3>

              <p className="text-slate-300 leading-relaxed text-base">
                {portfolioData.personal.summary}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-800">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-white">Full-Stack MERN</h4>
                    <p className="text-xs text-slate-400">React, Node, Express, MongoDB</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-white">DSA Problem Solver</h4>
                    <p className="text-xs text-slate-400">200+ Solved Questions</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-white">Responsive UI/UX</h4>
                    <p className="text-xs text-slate-400">Tailwind CSS & Modern Animations</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-white">AI & LLM Concepts</h4>
                    <p className="text-xs text-slate-400">Prompting, RAG & AI API Integration</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Education Spotlight Card */}
          <div className="lg:col-span-5 rounded-3xl glass-panel p-8 border border-slate-800/80 text-left relative overflow-hidden group hover:border-indigo-500/40 transition-all duration-300">
            <div className="relative z-10 space-y-6">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-indigo-500/10 border border-indigo-500/30 text-indigo-300">
                  {portfolioData.education[0].period}
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white">
                  {portfolioData.education[0].degree}
                </h3>
                <p className="text-sm font-medium text-cyan-400 mt-1">
                  {portfolioData.education[0].institution}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 flex items-center justify-between">
                <div>
                  <div className="text-xs text-slate-400 uppercase font-mono tracking-wider">Cumulative GPA</div>
                  <div className="text-2xl font-black text-white">{portfolioData.education[0].cgpa}</div>
                </div>
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 font-bold">
                  AKGEC
                </div>
              </div>

              <ul className="space-y-2 text-xs text-slate-300">
                {portfolioData.education[0].highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* Core Computer Science Foundations Grid */}
        <div className="space-y-6 text-left">
          <div className="flex items-center gap-3">
            <BookOpen className="w-6 h-6 text-cyan-400" />
            <h3 className="text-2xl font-bold text-white">Core Computer Science Fundamentals</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {csCoreSkills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div
                  key={index}
                  className="p-6 rounded-2xl glass-card border border-slate-800/80 hover:border-cyan-500/30 transition-all duration-300 group hover:-translate-y-1"
                >
                  <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-110 group-hover:bg-cyan-500/10 transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {skill.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {skill.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

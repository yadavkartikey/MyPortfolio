import React from 'react';
import { 
  GraduationCap, 
  BookOpen, 
  Boxes, 
  Database, 
  Monitor, 
  Globe, 
  Workflow, 
  CheckCircle2,
  Terminal,
  Cpu,
  Layers,
  Sparkles
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const About = () => {
  const csCoreSkills = [
    { title: "Data Structures & Algorithms", icon: Boxes, desc: "Trees, Graphs, Dynamic Programming, Complexity Analysis & Optimization (200+ Solved)" },
    { title: "Database Systems (DBMS)", icon: Database, desc: "Relational Modeling, Indexing, Schema Normalization & MongoDB Atlas Cloud" },
    { title: "Operating Systems", icon: Monitor, desc: "Process Scheduling, Memory Management, Multi-threading & Concurrency Fundamentals" },
    { title: "Computer Networks", icon: Globe, desc: "TCP/IP, HTTP/HTTPS Protocols, Client-Server Architecture & RESTful Principles" },
    { title: "Software Engineering & SDLC", icon: Workflow, desc: "Agile Sprints, Modular Design, Version Control, Testing & Continuous Improvement" }
  ];

  const engineeringPillars = [
    {
      number: "01",
      title: "Clean Architecture",
      detail: "Building component-driven React interfaces with predictable state, backed by modular Express middleware and optimized MongoDB schemas."
    },
    {
      number: "02",
      title: "Algorithmic Rigor",
      detail: "Leveraging 200+ solved DSA problems in C++ & JavaScript to reason deeply about asymptotic complexity, edge cases, and runtime efficiency."
    },
    {
      number: "03",
      title: "Full-Cycle Reliability",
      detail: "Focusing on the complete engineering cycle: proactive debugging, structured unit testing, cross-browser compatibility, and task ownership."
    }
  ];

  return (
    <section id="about" className="py-24 relative z-10 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-left max-w-3xl mb-14 space-y-2">
          <span className="text-xs font-mono uppercase tracking-wider text-blue-400 font-semibold">
            Background & Engineering Mindset
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About Me
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            A developer who cares about both the high-level architecture and the low-level efficiency of the software I ship.
          </p>
        </div>

        {/* Top Grid: Personal Bio + Education Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12">
          
          {/* Authentic Bio Summary */}
          <div className="lg:col-span-7 rounded-2xl surface-card p-7 border border-white/[0.08] text-left space-y-6">
            <h3 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
              <span>Engineering Journey</span>
            </h3>

            <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
              {portfolioData.personal.summary}
            </p>

            {/* Micro Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-4 border-t border-white/[0.06]">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold text-white">Full-Stack MERN</h4>
                  <p className="text-[11px] text-slate-400">React, Node, Express, MongoDB Atlas</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold text-white">DSA Problem Solver</h4>
                  <p className="text-[11px] text-slate-400">200+ Solved Questions (LeetCode & Code360)</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold text-white">Quality & Testing</h4>
                  <p className="text-[11px] text-slate-400">Unit Testing, Debugging & Profiling</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold text-white">AI Tooling Workflow</h4>
                  <p className="text-[11px] text-slate-400">Copilot, Prompting & AI REST APIs</p>
                </div>
              </div>
            </div>
          </div>

          {/* Education Spotlight Card */}
          <div className="lg:col-span-5 rounded-2xl surface-card p-7 border border-white/[0.08] text-left space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-slate-300">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <span className="px-2.5 py-1 rounded-md text-xs font-mono text-slate-400 bg-white/[0.03] border border-white/[0.06]">
                  {portfolioData.education[0].period}
                </span>
              </div>

              <div>
                <h3 className="text-lg font-bold text-white tracking-tight">
                  {portfolioData.education[0].degree}
                </h3>
                <p className="text-xs font-medium text-slate-400 mt-1">
                  {portfolioData.education[0].institution}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-between">
                <div>
                  <div className="text-[11px] text-slate-500 uppercase font-mono tracking-wider">Cumulative GPA</div>
                  <div className="text-2xl font-black text-white tracking-tight">{portfolioData.education[0].cgpa}</div>
                </div>
                <div className="px-2.5 py-1 rounded-md bg-blue-500/10 text-blue-400 border border-blue-500/20 text-xs font-mono font-semibold">
                  AKGEC
                </div>
              </div>
            </div>

            <ul className="space-y-2 text-xs text-slate-400 pt-3 border-t border-white/[0.06]">
              {portfolioData.education[0].highlights.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="w-1 h-1 rounded-full bg-blue-400 mt-1.5 shrink-0"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* 3 Engineering Pillars (Human Craft Element) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14 text-left">
          {engineeringPillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl surface-card border border-white/[0.08] relative group"
            >
              <div className="font-mono text-xs text-blue-400 font-bold mb-2">
                {pillar.number}
              </div>
              <h4 className="text-base font-bold text-white mb-2 tracking-tight">
                {pillar.title}
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                {pillar.detail}
              </p>
            </div>
          ))}
        </div>

        {/* Core Computer Science Foundations Grid */}
        <div className="space-y-4 text-left">
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-slate-400" />
            <h3 className="text-base font-bold text-white tracking-tight">Academic Computer Science Foundations</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {csCoreSkills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div
                  key={index}
                  className="p-5 rounded-2xl surface-card border border-white/[0.08] text-left"
                >
                  <div className="w-9 h-9 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-slate-300 mb-3">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-semibold text-white mb-1">
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

import React from 'react';
import { 
  User, 
  GraduationCap, 
  BookOpen, 
  Boxes, 
  Database, 
  Monitor, 
  Globe, 
  Workflow, 
  CheckCircle2
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const About = () => {
  const csCoreSkills = [
    { title: "Data Structures & Algorithms", icon: Boxes, desc: "Trees, Graphs, Dynamic Programming, Complexity Analysis & Optimization" },
    { title: "Database Management Systems", icon: Database, desc: "Relational Modeling, Indexing, Schema Design & Cloud Persistence" },
    { title: "Operating Systems", icon: Monitor, desc: "Process Scheduling, Memory Management, Multi-threading & Concurrency" },
    { title: "Computer Networks", icon: Globe, desc: "TCP/IP, HTTP/HTTPS Protocols, DNS & RESTful Architecture" },
    { title: "Software Engineering & SDLC", icon: Workflow, desc: "Agile Methodologies, Modular Design, Version Control & Testing" }
  ];

  return (
    <section id="about" className="py-24 relative z-10 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-left max-w-3xl mb-14 space-y-2">
          <span className="text-xs font-mono uppercase tracking-wider text-blue-400 font-semibold">
            Background & Academics
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About Kartikey Yadav
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            Computer Science graduate focused on building reliable, production-ready software systems and mastering algorithmic problem solving.
          </p>
        </div>

        {/* Top Grid: Bio Summary + Education */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-14">
          
          {/* Bio & Professional Summary */}
          <div className="lg:col-span-7 rounded-2xl surface-card p-7 border border-white/[0.08] text-left space-y-6">
            <h3 className="text-lg font-bold text-white tracking-tight">
              Engineering Profile
            </h3>

            <p className="text-slate-300 leading-relaxed text-sm">
              {portfolioData.personal.summary}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-4 border-t border-white/[0.06]">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold text-white">Full-Stack MERN Architecture</h4>
                  <p className="text-[11px] text-slate-400">React, Node, Express, MongoDB Atlas</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold text-white">Algorithmic Problem Solver</h4>
                  <p className="text-[11px] text-slate-400">200+ Solved Questions (LeetCode & Code360)</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold text-white">Structured Software Testing</h4>
                  <p className="text-[11px] text-slate-400">Unit Testing, Debugging & Profiling</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold text-white">AI Developer Tooling</h4>
                  <p className="text-[11px] text-slate-400">Copilot, Prompting, RAG & AI REST APIs</p>
                </div>
              </div>
            </div>
          </div>

          {/* Education Spotlight Card */}
          <div className="lg:col-span-5 rounded-2xl surface-card p-7 border border-white/[0.08] text-left space-y-6">
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

            <ul className="space-y-2 text-xs text-slate-400">
              {portfolioData.education[0].highlights.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="w-1 h-1 rounded-full bg-blue-400 mt-1.5 shrink-0"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Core Computer Science Foundations Grid */}
        <div className="space-y-4 text-left">
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-slate-400" />
            <h3 className="text-base font-bold text-white tracking-tight">Core Computer Science Foundations</h3>
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

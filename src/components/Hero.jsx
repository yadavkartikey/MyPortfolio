import React from 'react';
import { 
  ArrowUpRight, 
  Code2, 
  Mail, 
  Download, 
  Sparkles, 
  GraduationCap, 
  Trophy, 
  CheckCircle2,
  ExternalLink,
  Layers,
  ChevronRight,
  Database
} from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { portfolioData } from '../data/portfolioData';

export const Hero = ({ onOpenResume, onExploreProjects }) => {
  return (
    <section id="hero" className="relative min-h-[92vh] pt-32 pb-20 flex items-center justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Hero Copy */}
          <div className="lg:col-span-7 space-y-7 text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-mono text-slate-300 tracking-wide">
                Available for Full-Time Software Engineering Roles
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08]">
                Crafting robust full-stack applications & algorithmic solutions.
              </h1>
              <p className="text-lg sm:text-xl text-slate-400 font-normal leading-relaxed max-w-2xl">
                I'm <strong className="text-white font-semibold">Kartikey Yadav</strong>, a Computer Science graduate from <span className="text-slate-200 font-medium">AKGEC (CGPA 7.85)</span> based in <span className="text-slate-200 font-medium">Noida</span>. 
                Focused on scalable <span className="text-blue-400 font-medium">MERN stack</span> architecture, clean software design, and algorithmic problem solving.
              </p>
            </div>

            {/* Tactile Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-1">
              <button
                onClick={() => {
                  const el = document.getElementById('projects');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-950 bg-white hover:bg-slate-200 transition-all duration-200 flex items-center gap-2 shadow-lg shadow-white/5 active:scale-[0.98]"
              >
                <span>View Engineering Projects</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenResume}
                className="px-5 py-3.5 rounded-xl font-semibold text-sm text-slate-300 bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] transition-all duration-200 flex items-center gap-2.5 active:scale-[0.98]"
              >
                <Download className="w-4 h-4 text-slate-400" />
                <span>Download Resume</span>
              </button>
            </div>

            {/* Profile Links Strip */}
            <div className="pt-2 flex items-center gap-3 text-slate-400">
              <a
                href={portfolioData.personal.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-slate-300 hover:text-white hover:border-white/[0.2] transition-colors"
                title="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={portfolioData.personal.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-slate-300 hover:text-white hover:border-white/[0.2] transition-colors"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={portfolioData.personal.links.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 rounded-xl bg-white/[0.03] border border-white/[0.08] text-slate-300 hover:text-white hover:border-white/[0.2] transition-colors flex items-center gap-2 text-xs font-mono font-medium"
                title="LeetCode Profile"
              >
                <Code2 className="w-4 h-4 text-amber-400" />
                <span>LeetCode</span>
              </a>
              <a
                href={`mailto:${portfolioData.personal.email}`}
                className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-slate-300 hover:text-white hover:border-white/[0.2] transition-colors"
                title="Email Kartikey"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Featured Architecture Showcase Card (Replaces the fake developer.json) */}
          <div className="lg:col-span-5">
            <div className="surface-card rounded-2xl p-6 border border-white/[0.08] text-left relative overflow-hidden group">
              
              {/* Header Label */}
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.06]">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-400" />
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400">Featured Architecture</span>
                </div>
                <span className="text-xs font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-500/20 px-2 py-0.5 rounded-md">
                  Active Project
                </span>
              </div>

              {/* Body Content */}
              <div className="py-5 space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    Food Reels — MERN Food Discovery Platform
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    Short-form food reel discovery platform featuring smooth HTML5 video feeds, JWT authentication, and media delivery via ImageKit & Multer.
                  </p>
                </div>

                {/* Tech Highlights */}
                <div className="space-y-2">
                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-start gap-2.5 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <span>Vertical reels player with HTML5 Video API & autoplay controls</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-start gap-2.5 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <span>JWT auth, ImageKit CDN storage & MongoDB indexing</span>
                  </div>
                </div>

                {/* Stack Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {['React 19', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'ImageKit'].map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/[0.03] text-slate-300 border border-white/[0.08]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-white/[0.06]">
                <a
                  href={portfolioData.projects[0].github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-xl font-medium text-xs text-white bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] transition-colors flex items-center justify-center gap-2 group-hover:border-blue-500/40"
                >
                  <Github className="w-4 h-4" />
                  <span>Inspect Code on GitHub</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </div>

            </div>
          </div>

        </div>

        {/* Minimal Metric Strip */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl surface-card border border-white/[0.08] text-left">
            <div className="text-3xl font-extrabold text-white tracking-tight">200+</div>
            <div className="text-xs font-mono text-slate-400 mt-1">DSA Questions Solved</div>
          </div>

          <div className="p-5 rounded-2xl surface-card border border-white/[0.08] text-left">
            <div className="text-3xl font-extrabold text-white tracking-tight">{portfolioData.personal.cgpa}</div>
            <div className="text-xs font-mono text-slate-400 mt-1">B.Tech CS CGPA (AKGEC)</div>
          </div>

          <div className="p-5 rounded-2xl surface-card border border-white/[0.08] text-left">
            <div className="text-3xl font-extrabold text-white tracking-tight">MERN</div>
            <div className="text-xs font-mono text-slate-400 mt-1">Core Tech Stack</div>
          </div>

          <div className="p-5 rounded-2xl surface-card border border-white/[0.08] text-left">
            <div className="text-3xl font-extrabold text-white tracking-tight">Dominator</div>
            <div className="text-xs font-mono text-slate-400 mt-1">Code360 Ninja League</div>
          </div>
        </div>

      </div>
    </section>
  );
};

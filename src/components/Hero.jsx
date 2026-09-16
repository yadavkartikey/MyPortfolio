import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Code2, 
  Mail, 
  Download, 
  Sparkles, 
  GraduationCap, 
  Trophy, 
  Terminal,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import { Github, Linkedin } from './Icons';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolioData';

export const Hero = ({ onOpenResume, onExploreProjects }) => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = portfolioData.roles;

  // Typing effect
  useEffect(() => {
    const fullText = roles[roleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), 1800);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      } else {
        setCurrentText(
          isDeleting
            ? fullText.substring(0, currentText.length - 1)
            : fullText.substring(0, currentText.length + 1)
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex, roles]);

  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden">
      {/* Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Text */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 backdrop-blur-md shadow-lg">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-mono text-slate-300">
                Available for Full-time Opportunities
              </span>
            </div>

            {/* Name & Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-none">
                Hi, I'm <span className="text-gradient">Kartikey Yadav</span>
              </h1>
              <div className="h-10 sm:h-12 flex items-center">
                <p className="text-xl sm:text-2xl font-mono text-cyan-400 font-semibold flex items-center gap-1">
                  <span>{currentText}</span>
                  <span className="w-2.5 h-6 bg-cyan-400 animate-pulse inline-block"></span>
                </p>
              </div>
            </div>

            {/* Bio Summary */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              Computer Science B.Tech graduate from <strong className="text-white">AKGEC</strong>. 
              Specializing in building modern <span className="text-cyan-300 font-medium">MERN stack</span> web applications, 
              solving complex <span className="text-indigo-300 font-medium">DSA challenges (200+ solved)</span>, and building sleek UI/UX experiences.
            </p>

            {/* CTA Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => {
                  const el = document.getElementById('projects');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                  triggerConfetti();
                }}
                className="px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2 group"
              >
                <span>Explore Featured Projects</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => {
                  onOpenResume();
                  triggerConfetti();
                }}
                className="px-6 py-3.5 rounded-xl font-semibold text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2.5"
              >
                <Download className="w-5 h-5 text-cyan-400" />
                <span>Download Resume</span>
              </button>
            </div>

            {/* Social & Platform Quick Links */}
            <div className="pt-4 flex items-center gap-4 text-slate-400">
              <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">Profiles:</span>
              <div className="flex items-center gap-3">
                <a
                  href={portfolioData.personal.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all hover:scale-105"
                  title="GitHub Profile"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={portfolioData.personal.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all hover:scale-105"
                  title="LinkedIn Profile"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={portfolioData.personal.links.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all hover:scale-105 flex items-center gap-1.5"
                  title="LeetCode Profile"
                >
                  <Code2 className="w-5 h-5 text-amber-400" />
                  <span className="text-xs font-mono font-semibold">LeetCode</span>
                </a>
                <a
                  href={`mailto:${portfolioData.personal.email}`}
                  className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all hover:scale-105"
                  title="Email Kartikey"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

          </div>

          {/* Interactive Hero Card Window */}
          <div className="lg:col-span-5">
            <div className="relative group">
              {/* Animated Glow Border */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600 opacity-40 blur-xl group-hover:opacity-70 transition duration-500"></div>
              
              <div className="relative rounded-2xl glass-panel border border-slate-800/80 overflow-hidden shadow-2xl">
                {/* Code Window Header */}
                <div className="px-4 py-3 bg-slate-950/80 border-b border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-500 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block"></span>
                    <span className="ml-2 text-xs font-mono text-slate-400">developer.json</span>
                  </div>
                  <Terminal className="w-4 h-4 text-slate-500" />
                </div>

                {/* Code Window Content */}
                <div className="p-5 font-mono text-sm space-y-3 bg-slate-950/40 leading-relaxed text-slate-300">
                  <div>
                    <span className="text-purple-400">const</span> <span className="text-cyan-300">developer</span> = &#123;
                  </div>
                  <div className="pl-4 space-y-1">
                    <div>
                      <span className="text-slate-400">name:</span> <span className="text-emerald-400">"{portfolioData.personal.name}"</span>,
                    </div>
                    <div>
                      <span className="text-slate-400">education:</span> <span className="text-emerald-400">"B.Tech CS (AKGEC)"</span>,
                    </div>
                    <div>
                      <span className="text-slate-400">cgpa:</span> <span className="text-amber-400">{portfolioData.personal.cgpa}</span>,
                    </div>
                    <div>
                      <span className="text-slate-400">dsaSolved:</span> <span className="text-cyan-400">"200+ Questions"</span>,
                    </div>
                    <div>
                      <span className="text-slate-400">stack:</span> [
                      <span className="text-emerald-400">"MongoDB"</span>, <span className="text-emerald-400">"Express"</span>, <span className="text-emerald-400">"React"</span>, <span className="text-emerald-400">"Node"</span>
                      ],
                    </div>
                    <div>
                      <span className="text-slate-400">skills:</span> [
                      <span className="text-emerald-400">"C++"</span>, <span className="text-emerald-400">"JavaScript"</span>, <span className="text-emerald-400">"Python"</span>, <span className="text-emerald-400">"LLMs"</span>
                      ],
                    </div>
                    <div>
                      <span className="text-slate-400">status:</span> <span className="text-emerald-400">"Ready for Full-Stack Roles"</span>
                    </div>
                  </div>
                  <div>&#125;;</div>
                </div>

                {/* Floating Highlights Inside Card */}
                <div className="p-4 bg-slate-900/60 border-t border-slate-800/80 grid grid-cols-2 gap-3 text-left">
                  <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
                      <Code2 className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">200+ Solved</div>
                      <div className="text-[11px] text-slate-400">DSA Questions</div>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400">
                      <Trophy className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">Code360 Ninja</div>
                      <div className="text-[11px] text-slate-400">Dominator League</div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* Quick Stat Counter Bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <div className="p-5 rounded-2xl glass-panel border border-slate-800/80 text-left hover:border-cyan-500/30 transition-all duration-300">
            <div className="flex items-center justify-between mb-2">
              <span className="text-3xl font-extrabold text-white">200+</span>
              <Code2 className="w-6 h-6 text-cyan-400" />
            </div>
            <p className="text-sm font-medium text-slate-400">DSA Questions Solved</p>
          </div>

          <div className="p-5 rounded-2xl glass-panel border border-slate-800/80 text-left hover:border-indigo-500/30 transition-all duration-300">
            <div className="flex items-center justify-between mb-2">
              <span className="text-3xl font-extrabold text-white">{portfolioData.personal.cgpa}</span>
              <GraduationCap className="w-6 h-6 text-indigo-400" />
            </div>
            <p className="text-sm font-medium text-slate-400">B.Tech CS CGPA (AKGEC)</p>
          </div>

          <div className="p-5 rounded-2xl glass-panel border border-slate-800/80 text-left hover:border-purple-500/30 transition-all duration-300">
            <div className="flex items-center justify-between mb-2">
              <span className="text-3xl font-extrabold text-white">MERN</span>
              <Sparkles className="w-6 h-6 text-purple-400" />
            </div>
            <p className="text-sm font-medium text-slate-400">Full-Stack Tech Stack</p>
          </div>

          <div className="p-5 rounded-2xl glass-panel border border-slate-800/80 text-left hover:border-emerald-500/30 transition-all duration-300">
            <div className="flex items-center justify-between mb-2">
              <span className="text-3xl font-extrabold text-white">Ninja</span>
              <Trophy className="w-6 h-6 text-emerald-400" />
            </div>
            <p className="text-sm font-medium text-slate-400">Dominator League Code360</p>
          </div>
        </div>

      </div>
    </section>
  );
};

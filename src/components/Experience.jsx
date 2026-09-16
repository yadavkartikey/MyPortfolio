import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronRight, Terminal, Layers } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Experience = () => {
  return (
    <section id="experience" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-mono font-semibold">
            <Briefcase className="w-4 h-4" />
            <span>WORK EXPERIENCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Industry <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Hands-on full-stack software development experience on live projects and production web systems.
          </p>
        </div>

        {/* Experience Cards Container */}
        <div className="max-w-4xl mx-auto space-y-8">
          {portfolioData.experience.map((exp, index) => (
            <div
              key={index}
              className="relative rounded-3xl glass-panel p-6 sm:p-8 border border-slate-800/80 text-left hover:border-cyan-500/40 transition-all duration-300 shadow-xl group overflow-hidden"
            >
              {/* Background Ambient Light */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none group-hover:bg-cyan-500/10 transition-colors duration-500" />

              {/* Card Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-cyan-500/20 to-indigo-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0 group-hover:scale-105 transition-transform">
                    <Briefcase className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-base font-semibold text-indigo-400 mt-0.5">
                      {exp.company}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2 sm:flex-col sm:items-end">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-slate-900 border border-slate-800 text-slate-300">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{exp.period}</span>
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs text-slate-400">
                    <MapPin className="w-3.5 h-3.5 text-rose-400" />
                    <span>{exp.location}</span>
                  </span>
                </div>
              </div>

              {/* Bullet Points */}
              <div className="py-6 space-y-3">
                {exp.bullets.map((bullet, bIdx) => (
                  <div key={bIdx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0 mt-0.5">
                      <ChevronRight className="w-3.5 h-3.5" />
                    </div>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {bullet}
                    </p>
                  </div>
                ))}
              </div>

              {/* Technologies Badges Footer */}
              <div className="pt-4 border-t border-slate-800/80">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                  <Layers className="w-4 h-4 text-cyan-400" />
                  <span>Tech Stack Utilized:</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-slate-900/90 text-cyan-300 border border-slate-800 hover:border-cyan-500/40 hover:bg-slate-800 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

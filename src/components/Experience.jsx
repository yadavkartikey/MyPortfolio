import React from 'react';
import { Briefcase, Calendar, MapPin, ChevronRight, Layers } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Experience = () => {
  return (
    <section id="experience" className="py-24 relative z-10 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-left max-w-3xl mb-14 space-y-2">
          <span className="text-xs font-mono uppercase tracking-wider text-blue-400 font-semibold">
            Industry Experience
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Work Experience
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            Hands-on software development experience building web applications and production RESTful backend services.
          </p>
        </div>

        {/* Experience Card */}
        <div className="max-w-4xl space-y-6 text-left">
          {portfolioData.experience.map((exp, index) => (
            <div
              key={index}
              className="rounded-2xl surface-card p-7 border border-white/[0.08]"
            >
              {/* Card Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-white/[0.06]">
                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {exp.role}
                  </h3>
                  <p className="text-sm font-medium text-slate-400 mt-0.5">
                    {exp.company}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono text-slate-300 bg-white/[0.03] border border-white/[0.06]">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>{exp.period}</span>
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs text-slate-500 font-mono">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    <span>{exp.location}</span>
                  </span>
                </div>
              </div>

              {/* Bullet Points */}
              <div className="py-5 space-y-3">
                {exp.bullets.map((bullet, bIdx) => (
                  <div key={bIdx} className="flex items-start gap-3">
                    <span className="w-1 h-1 rounded-full bg-blue-400 mt-2 shrink-0"></span>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {bullet}
                    </p>
                  </div>
                ))}
              </div>

              {/* Technologies Badges Footer */}
              <div className="pt-4 border-t border-white/[0.06]">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[11px] font-mono uppercase text-slate-500 mr-2">Technologies:</span>
                  {exp.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/[0.03] text-slate-300 border border-white/[0.06]"
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

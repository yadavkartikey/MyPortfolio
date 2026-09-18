import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Layers, 
  CheckCircle2, 
  X, 
  Code2, 
  ArrowUpRight
} from 'lucide-react';
import { Github } from './Icons';
import { portfolioData } from '../data/portfolioData';

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-24 relative z-10 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-left max-w-3xl mb-14 space-y-2">
          <span className="text-xs font-mono uppercase tracking-wider text-blue-400 font-semibold">
            Featured Engineering Work
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Projects & Case Studies
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            Full-stack web applications built with scalable architectures, secure authentication, and clean component state management.
          </p>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 text-left">
          {portfolioData.projects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl surface-card border border-white/[0.08] p-7 flex flex-col justify-between space-y-6 hover:border-white/[0.18] transition-all"
            >
              {/* Header */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-mono text-slate-400 bg-white/[0.03] border border-white/[0.06]">
                    {project.category}
                  </span>
                  <div className="flex items-center gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-white/[0.04] text-slate-400 hover:text-white border border-white/[0.08] transition-colors"
                      title="GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white tracking-tight">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  {project.shortDesc}
                </p>
              </div>

              {/* Highlights Summary */}
              <div className="space-y-2.5 py-2">
                {project.highlights.slice(0, 3).map((h, hIdx) => (
                  <div key={hIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{h}</span>
                  </div>
                ))}
              </div>

              {/* Tech Stack Pills */}
              <div className="space-y-2 pt-4 border-t border-white/[0.06]">
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/[0.03] text-slate-300 border border-white/[0.06]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Triggers */}
              <div className="pt-2 flex items-center gap-3">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="flex-1 py-2.5 rounded-xl font-medium text-xs text-slate-200 bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Architecture Deep Dive</span>
                  <Layers className="w-3.5 h-3.5 text-slate-400" />
                </button>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl font-medium text-xs text-slate-950 bg-white hover:bg-slate-200 transition-colors flex items-center gap-1.5"
                >
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Project Detail Modal Drawer */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-2xl rounded-2xl bg-[#0c0e14] border border-white/[0.1] p-6 sm:p-8 max-h-[90vh] overflow-y-auto shadow-2xl text-left space-y-6">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between border-b border-white/[0.08] pb-4">
              <div>
                <span className="px-2.5 py-0.5 rounded-md text-[11px] font-mono text-slate-400 bg-white/[0.04] border border-white/[0.06]">
                  {selectedProject.category}
                </span>
                <h3 className="text-2xl font-bold text-white tracking-tight mt-2">
                  {selectedProject.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 rounded-xl bg-white/[0.04] border border-white/[0.08] text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Description */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">Engineering Overview</h4>
              <p className="text-slate-300 text-sm leading-relaxed">
                {selectedProject.description}
              </p>
            </div>

            {/* Detailed Highlights */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">Architecture & Technical Implementation</h4>
              <div className="space-y-2">
                {selectedProject.highlights.map((item, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <p className="text-xs text-slate-300 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Grid */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">Technologies & Libraries</h4>
              <div className="flex flex-wrap gap-1.5">
                {selectedProject.technologies.map((t, idx) => (
                  <span key={idx} className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/[0.03] border border-white/[0.06] text-slate-300">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Actions */}
            <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between gap-4">
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl font-medium text-xs text-slate-950 bg-white hover:bg-slate-200 flex items-center gap-2"
              >
                <Github className="w-4 h-4" />
                <span>Open GitHub Repository</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2.5 rounded-xl font-medium text-xs text-slate-300 bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.08]"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};

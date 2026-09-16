import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Sparkles, 
  Layers, 
  CheckCircle2, 
  X, 
  Code2, 
  Database, 
  Lock, 
  ShieldCheck, 
  PieChart, 
  Zap 
} from 'lucide-react';
import { Github } from './Icons';
import { portfolioData } from '../data/portfolioData';

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-semibold">
            <FolderGit2 className="w-4 h-4" />
            <span>PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Production-grade web applications built with modern full-stack architectures and clean state management.
          </p>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-left">
          {portfolioData.projects.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-3xl glass-panel border border-slate-800/80 overflow-hidden hover:border-cyan-500/40 transition-all duration-500 shadow-xl flex flex-col"
            >
              {/* Top Visual Banner */}
              <div className={`h-48 bg-gradient-to-r ${project.gradient} p-6 relative flex flex-col justify-between overflow-hidden`}>
                <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-[2px]" />
                <div className="relative z-10 flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-slate-950/80 border border-white/20 text-white">
                    {project.category}
                  </span>
                  <div className="flex items-center gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-slate-950/80 text-white hover:text-cyan-400 transition-colors"
                      title="GitHub Repository"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                <div className="relative z-10">
                  <h3 className="text-2xl font-black text-white group-hover:text-cyan-200 transition-colors">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                <p className="text-slate-300 text-sm leading-relaxed">
                  {project.shortDesc}
                </p>

                {/* Highlights Summary */}
                <div className="space-y-2">
                  {project.highlights.slice(0, 2).map((h, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Pills */}
                <div className="space-y-3 pt-4 border-t border-slate-800">
                  <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">Tech Stack:</div>
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-900 text-slate-300 border border-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Trigger */}
                <div className="pt-2">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="w-full py-3 rounded-xl font-semibold text-sm text-cyan-400 bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-cyan-500/40 transition-all flex items-center justify-center gap-2 group-hover:border-cyan-500/50"
                  >
                    <span>View Architecture & Full Details</span>
                    <Sparkles className="w-4 h-4 text-cyan-400" />
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Project Detail Modal Drawer */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-3xl rounded-3xl glass-panel border border-slate-700 p-6 sm:p-8 max-h-[90vh] overflow-y-auto shadow-2xl text-left space-y-6">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between border-b border-slate-800 pb-4">
              <div>
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                  {selectedProject.category}
                </span>
                <h3 className="text-2xl font-black text-white mt-2">
                  {selectedProject.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Description */}
            <div className="space-y-4">
              <h4 className="text-sm font-mono text-cyan-400 uppercase tracking-wider">Project Overview</h4>
              <p className="text-slate-300 text-sm leading-relaxed">
                {selectedProject.description}
              </p>
            </div>

            {/* Detailed Highlights */}
            <div className="space-y-3">
              <h4 className="text-sm font-mono text-cyan-400 uppercase tracking-wider">Key Engineering Contributions</h4>
              <div className="space-y-2">
                {selectedProject.highlights.map((item, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                    <p className="text-xs text-slate-300 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Grid */}
            <div className="space-y-3">
              <h4 className="text-sm font-mono text-cyan-400 uppercase tracking-wider">Technologies & Libraries</h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.technologies.map((t, idx) => (
                  <span key={idx} className="px-3 py-1.5 rounded-lg text-xs font-mono font-semibold bg-slate-900 border border-slate-800 text-cyan-300">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Actions */}
            <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl font-semibold text-sm text-white bg-slate-900 hover:bg-slate-800 border border-slate-700 flex items-center gap-2"
              >
                <Github className="w-4 h-4 text-cyan-400" />
                <span>GitHub Repository</span>
              </a>

              <button
                onClick={() => setSelectedProject(null)}
                className="px-6 py-2.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-cyan-500 to-indigo-600"
              >
                Close View
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};

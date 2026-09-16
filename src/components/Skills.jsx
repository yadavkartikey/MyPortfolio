import React, { useState } from 'react';
import { 
  Code2, 
  Terminal, 
  FileCode2, 
  Code, 
  Cpu, 
  Database, 
  Atom, 
  Layout, 
  Palette, 
  Server, 
  Network, 
  Sparkles, 
  Wand2, 
  Brain, 
  Webhook, 
  Boxes, 
  Monitor, 
  Globe, 
  Workflow, 
  GitBranch, 
  Laptop, 
  Send, 
  Compass,
  CheckCircle2,
  Filter
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const iconMap = {
    FileCode2, Terminal, Code, Cpu, Database, Atom, Layout, Palette, Server, Network,
    Sparkles, Wand2, Brain, Webhook, Boxes, Monitor, Globe, Workflow, GitBranch, Laptop,
    Send, Compass
  };

  const categories = [
    { id: 'all', label: 'All Skills' },
    { id: 'web', label: 'Web Development' },
    { id: 'languages', label: 'Programming Languages' },
    { id: 'ai', label: 'AI & LLM Concepts' },
    { id: 'coreCS', label: 'Core CS' },
    { id: 'tools', label: 'Tools & Platforms' }
  ];

  const getFilteredSkills = () => {
    if (activeCategory === 'all') {
      return [
        ...portfolioData.skills.web.map(s => ({ ...s, cat: 'Web Dev' })),
        ...portfolioData.skills.languages.map(s => ({ ...s, cat: 'Languages' })),
        ...portfolioData.skills.ai.map(s => ({ ...s, cat: 'AI & LLM' })),
        ...portfolioData.skills.coreCS.map(s => ({ ...s, cat: 'Core CS' })),
        ...portfolioData.skills.tools.map(s => ({ ...s, cat: 'Tools' }))
      ];
    }
    const catData = portfolioData.skills[activeCategory] || [];
    const catLabel = categories.find(c => c.id === activeCategory)?.label || '';
    return catData.map(s => ({ ...s, cat: catLabel }));
  };

  const skillsToDisplay = getFilteredSkills();

  return (
    <section id="skills" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-mono font-semibold">
            <Code2 className="w-4 h-4" />
            <span>TECHNICAL PROFICIENCY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            A comprehensive matrix of technologies, tools, and computer science fundamentals.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-lg shadow-cyan-500/25 scale-105'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {skillsToDisplay.map((skill, index) => {
            const IconComponent = iconMap[skill.icon] || Code2;
            return (
              <div
                key={index}
                className="p-5 rounded-2xl glass-panel border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:bg-cyan-500/10 transition-all">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {skill.name}
                      </h4>
                      <span className="text-[11px] font-mono text-slate-400">
                        {skill.cat}
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-bold text-cyan-400">
                    {skill.level}%
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="w-full h-2 rounded-full bg-slate-900 overflow-hidden p-0.5 border border-slate-800">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-500 transition-all duration-700 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* AI & LLM Spotlight Banner */}
        <div className="mt-12 p-6 rounded-3xl glass-card border border-purple-500/30 flex flex-col sm:flex-row items-center justify-between gap-6 text-left">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 shrink-0">
              <Sparkles className="w-7 h-7 animate-pulse" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">AI & LLM Integration Focus</h3>
              <p className="text-xs text-slate-300 mt-1 max-w-xl">
                Proficient in Large Language Model (LLM) workflows, Prompt Engineering techniques, Retrieval-Augmented Generation (RAG) concepts, and integrating AI endpoints into REST web applications.
              </p>
            </div>
          </div>
          <span className="px-4 py-2 rounded-xl bg-purple-500/20 text-purple-300 border border-purple-500/30 text-xs font-mono font-bold shrink-0">
            Next-Gen Tech
          </span>
        </div>

      </div>
    </section>
  );
};

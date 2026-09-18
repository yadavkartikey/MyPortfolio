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
  Bug,
  Users,
  Target,
  Clock,
  BookOpen,
  MessageSquare,
  Wrench
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const iconMap = {
    FileCode2, Terminal, Code, Cpu, Database, Atom, Layout, Palette, Server, Network,
    Sparkles, Wand2, Brain, Webhook, Boxes, Monitor, Globe, Workflow, GitBranch, Laptop,
    Send, Compass, CheckCircle2, Bug, Users, Target, Clock, BookOpen, MessageSquare, Wrench
  };

  const categories = [
    { id: 'all', label: 'All Competencies' },
    { id: 'web', label: 'Web Development' },
    { id: 'languages', label: 'Languages' },
    { id: 'engineering', label: 'Engineering & Testing' },
    { id: 'ai', label: 'AI & Tools' },
    { id: 'coreCS', label: 'Core CS' },
    { id: 'professional', label: 'Professional & Soft Skills' },
    { id: 'tools', label: 'Developer Tools' }
  ];

  const getFilteredSkills = () => {
    if (activeCategory === 'all') {
      return [
        ...portfolioData.skills.web.map(s => ({ ...s, cat: 'Web Dev' })),
        ...portfolioData.skills.languages.map(s => ({ ...s, cat: 'Languages' })),
        ...portfolioData.skills.engineering.map(s => ({ ...s, cat: 'Engineering' })),
        ...portfolioData.skills.ai.map(s => ({ ...s, cat: 'AI & LLM' })),
        ...portfolioData.skills.coreCS.map(s => ({ ...s, cat: 'Core CS' })),
        ...portfolioData.skills.professional.map(s => ({ ...s, cat: 'Professional' })),
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
            <span>TECHNICAL PROFICIENCY & COMPETENCIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Skills & <span className="text-gradient">Core Capabilities</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            A comprehensive overview of programming stacks, testing practices, AI tools, and engineering competencies.
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 text-left">
          {skillsToDisplay.map((skill, index) => {
            const IconComponent = iconMap[skill.icon] || Code2;
            return (
              <div
                key={index}
                className="p-5 rounded-2xl glass-panel border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-300 group hover:-translate-y-1 flex flex-col justify-between"
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:bg-cyan-500/10 group-hover:border-cyan-500/30 transition-all">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {skill.name}
                      </h4>
                      <span className="text-[11px] font-mono text-slate-500">
                        {skill.cat}
                      </span>
                    </div>
                  </div>
                  
                  {/* Status Indicator Dot */}
                  <span className="relative flex h-2 w-2 mt-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                  </span>
                </div>

                {/* Skill Scope & Focus Tag Badge */}
                <div className="pt-2 border-t border-slate-800/60 flex items-center justify-between">
                  <span className="text-xs font-mono text-cyan-400/90 bg-cyan-950/40 border border-cyan-500/20 px-2.5 py-1 rounded-lg">
                    {skill.tag}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Proficient</span>
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Engineering & AI Quality Spotlight Banner */}
        <div className="mt-12 p-6 rounded-3xl glass-card border border-purple-500/30 flex flex-col sm:flex-row items-center justify-between gap-6 text-left">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 shrink-0">
              <Sparkles className="w-7 h-7 animate-pulse" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Full-Cycle Engineering & AI Integration</h3>
              <p className="text-xs text-slate-300 mt-1 max-w-xl">
                Combining core computer science rigor, structured software testing, proactive debugging, and next-gen AI developer tooling to build scalable, reliable software applications.
              </p>
            </div>
          </div>
          <span className="px-4 py-2 rounded-xl bg-purple-500/20 text-purple-300 border border-purple-500/30 text-xs font-mono font-bold shrink-0">
            Production Ready
          </span>
        </div>

      </div>
    </section>
  );
};

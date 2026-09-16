import React, { useState } from 'react';
import { X, Download, Printer, Copy, Check, Mail, Phone, ExternalLink, GraduationCap, Briefcase, Code2, Award, FileText } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { portfolioData } from '../data/portfolioData';

export const ResumeModal = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopySummary = () => {
    navigator.clipboard.writeText(portfolioData.personal.summary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-4xl rounded-3xl glass-panel border border-slate-700 max-h-[92vh] flex flex-col shadow-2xl overflow-hidden">
        
        {/* Top Header Bar */}
        <div className="px-6 py-4 bg-slate-900 border-b border-slate-800 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Kartikey Yadav — Official Resume</h3>
              <p className="text-xs font-mono text-slate-400">B.Tech Computer Science | Full-Stack Web Developer</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="p-2.5 rounded-xl bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 border border-slate-700 transition-colors flex items-center gap-1.5 text-xs font-semibold"
              title="Print Resume"
            >
              <Printer className="w-4 h-4 text-cyan-400" />
              <span className="hidden sm:inline">Print / Save PDF</span>
            </button>

            <button
              onClick={handleCopySummary}
              className="p-2.5 rounded-xl bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 border border-slate-700 transition-colors flex items-center gap-1.5 text-xs font-semibold"
              title="Copy Summary"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-cyan-400" />}
              <span className="hidden sm:inline">{copied ? 'Copied!' : 'Copy Summary'}</span>
            </button>

            <button
              onClick={onClose}
              className="p-2.5 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 border border-slate-700"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Body (Formatted Printable Document View) */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 bg-slate-950 text-left print:p-0 print:bg-white print:text-black">
          
          {/* Header Contact Block */}
          <div className="border-b border-slate-800 print:border-black pb-6 text-center space-y-3">
            <h1 className="text-3xl font-black text-white print:text-black tracking-tight">Kartikey Yadav</h1>
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-slate-300 print:text-gray-800">
              <a href={`mailto:${portfolioData.personal.email}`} className="flex items-center gap-1 hover:text-cyan-400">
                <Mail className="w-3.5 h-3.5 text-cyan-400 print:hidden" />
                <span>{portfolioData.personal.email}</span>
              </a>
              <span>•</span>
              <a href={`tel:${portfolioData.personal.phone}`} className="flex items-center gap-1 hover:text-cyan-400">
                <Phone className="w-3.5 h-3.5 text-cyan-400 print:hidden" />
                <span>{portfolioData.personal.phone}</span>
              </a>
              <span>•</span>
              <a href={portfolioData.personal.links.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-cyan-400">
                <Linkedin className="w-3.5 h-3.5 text-cyan-400 print:hidden" />
                <span>LinkedIn</span>
              </a>
              <span>•</span>
              <a href={portfolioData.personal.links.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-cyan-400">
                <Github className="w-3.5 h-3.5 text-cyan-400 print:hidden" />
                <span>GitHub</span>
              </a>
            </div>
          </div>

          {/* Summary Section */}
          <div className="space-y-2">
            <h2 className="text-base font-bold uppercase tracking-wider text-cyan-400 print:text-black border-b border-slate-800 print:border-black pb-1">
              Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 print:text-gray-800 leading-relaxed">
              {portfolioData.personal.summary}
            </p>
          </div>

          {/* Experience Section */}
          <div className="space-y-3">
            <h2 className="text-base font-bold uppercase tracking-wider text-cyan-400 print:text-black border-b border-slate-800 print:border-black pb-1">
              Experience
            </h2>
            {portfolioData.experience.map((exp, idx) => (
              <div key={idx} className="space-y-2">
                <div className="flex flex-col sm:flex-row justify-between text-sm font-bold text-white print:text-black">
                  <span>{exp.role} — <span className="text-cyan-300 print:text-gray-900">{exp.company}</span></span>
                  <span className="text-xs font-mono font-normal text-slate-400 print:text-gray-600">{exp.period}</span>
                </div>
                <ul className="list-disc list-inside space-y-1.5 text-xs text-slate-300 print:text-gray-800 leading-relaxed">
                  {exp.bullets.map((b, bIdx) => (
                    <li key={bIdx}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Technical Skills Section */}
          <div className="space-y-3">
            <h2 className="text-base font-bold uppercase tracking-wider text-cyan-400 print:text-black border-b border-slate-800 print:border-black pb-1">
              Technical Skills
            </h2>
            <div className="space-y-1.5 text-xs text-slate-300 print:text-gray-800">
              <div>
                <strong className="text-white print:text-black font-semibold">Languages:</strong> C++, JavaScript, Python, C Lang., SQL
              </div>
              <div>
                <strong className="text-white print:text-black font-semibold">Core CS Skills:</strong> Data Structures & Algorithms (DSA), Operating Systems, Computer Networks, DBMS, SDLC
              </div>
              <div>
                <strong className="text-white print:text-black font-semibold">Web Development:</strong> React.js, Node.js (basic), Express.js (basic), Tailwind CSS, MongoDB, SQL
              </div>
              <div>
                <strong className="text-white print:text-black font-semibold">AI / LLM Concepts:</strong> Large Language Models (LLMs), Prompt Engineering, Retrieval-Augmented Generation (RAG) Fundamentals, REST API Integration with AI Services
              </div>
              <div>
                <strong className="text-white print:text-black font-semibold">Tools & Platforms:</strong> Git, GitHub, VS Code
              </div>
            </div>
          </div>

          {/* Achievements Section */}
          <div className="space-y-2">
            <h2 className="text-base font-bold uppercase tracking-wider text-cyan-400 print:text-black border-b border-slate-800 print:border-black pb-1">
              Achievements
            </h2>
            <ul className="list-disc list-inside space-y-1 text-xs text-slate-300 print:text-gray-800">
              <li>Solved 200+ DSA Questions.</li>
              <li>Achieved Ninja Dominator League in Code360 by CodingNinjas.</li>
            </ul>
          </div>

          {/* Education Section */}
          <div className="space-y-2">
            <h2 className="text-base font-bold uppercase tracking-wider text-cyan-400 print:text-black border-b border-slate-800 print:border-black pb-1">
              Education
            </h2>
            {portfolioData.education.map((edu, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row justify-between text-xs sm:text-sm text-slate-300 print:text-gray-800">
                <div>
                  <strong className="text-white print:text-black block font-semibold">{edu.institution}</strong>
                  <span>{edu.degree} | CGPA: {portfolioData.personal.cgpa}</span>
                </div>
                <span className="font-mono text-slate-400 print:text-gray-600 text-xs">{edu.period}</span>
              </div>
            ))}
          </div>

          {/* Projects Section */}
          <div className="space-y-3">
            <h2 className="text-base font-bold uppercase tracking-wider text-cyan-400 print:text-black border-b border-slate-800 print:border-black pb-1">
              Projects
            </h2>
            {portfolioData.projects.map((proj, idx) => (
              <div key={idx} className="space-y-1.5">
                <div className="flex justify-between text-sm font-bold text-white print:text-black">
                  <span>{proj.title}</span>
                  <span className="text-xs font-mono text-cyan-400 print:text-gray-700">GitHub Repo</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-xs text-slate-300 print:text-gray-800 leading-relaxed">
                  {proj.highlights.map((h, hIdx) => (
                    <li key={hIdx}>{h}</li>
                  ))}
                </ul>
                <div className="text-[11px] text-slate-400 print:text-gray-600 font-mono">
                  Tech Stack: {proj.technologies.join(', ')}
                </div>
              </div>
            ))}
          </div>

          {/* Platform Links */}
          <div className="space-y-2">
            <h2 className="text-base font-bold uppercase tracking-wider text-cyan-400 print:text-black border-b border-slate-800 print:border-black pb-1">
              Platform Links
            </h2>
            <div className="text-xs font-mono text-slate-300 print:text-gray-800 flex gap-4">
              <span>LeetCode</span> | <span>GitHub</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

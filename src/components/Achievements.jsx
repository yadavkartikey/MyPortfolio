import React from 'react';
import { Trophy, Code2, ExternalLink, Award, Sparkles, CheckCircle2, Flame } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Achievements = () => {
  const dsaTopics = [
    { topic: "Data Structures", detail: "Arrays, LinkedLists, Stacks, Queues, Binary Trees, BSTs, Heaps & Graphs" },
    { topic: "Algorithms", detail: "Binary Search, Dynamic Programming, Greedy, Recursion, Backtracking, Sorting & Two Pointers" },
    { topic: "Coding Platforms", detail: "Active on LeetCode & Code360 by CodingNinjas" }
  ];

  return (
    <section id="achievements" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-semibold">
            <Trophy className="w-4 h-4" />
            <span>HONORS & COMPETITIVE PROGRAMMING</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Key <span className="text-gradient">Achievements</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Recognitions in algorithmic problem-solving and coding benchmark leagues.
          </p>
        </div>

        {/* Achievements Main Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mb-12">
          
          {/* 200+ DSA Solved Card */}
          <div className="rounded-3xl glass-panel p-8 border border-slate-800/80 relative overflow-hidden group hover:border-amber-500/40 transition-all duration-300 shadow-xl">
            <div className="absolute top-0 right-0 p-8 opacity-10 text-amber-400 pointer-events-none group-hover:scale-110 transition-transform">
              <Code2 className="w-40 h-40" />
            </div>

            <div className="relative z-10 space-y-6">
              <div className="flex items-center justify-between">
                <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                  <Code2 className="w-7 h-7" />
                </div>
                <span className="px-3.5 py-1.5 rounded-full text-xs font-mono font-bold bg-amber-500/10 border border-amber-500/30 text-amber-300">
                  200+ Solved
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white group-hover:text-amber-300 transition-colors">
                  Solved 200+ DSA Questions
                </h3>
                <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                  Demonstrated analytical consistency and algorithmic proficiency across foundational and advanced Data Structures & Algorithms topics.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400">Platforms: LeetCode & Code360</span>
                <a
                  href={portfolioData.personal.links.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-amber-400 bg-amber-500/10 border border-amber-500/30 hover:bg-amber-500/20 transition-all flex items-center gap-1.5"
                >
                  <span>LeetCode Profile</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Ninja Dominator League Card */}
          <div className="rounded-3xl glass-panel p-8 border border-slate-800/80 relative overflow-hidden group hover:border-emerald-500/40 transition-all duration-300 shadow-xl">
            <div className="absolute top-0 right-0 p-8 opacity-10 text-emerald-400 pointer-events-none group-hover:scale-110 transition-transform">
              <Trophy className="w-40 h-40" />
            </div>

            <div className="relative z-10 space-y-6">
              <div className="flex items-center justify-between">
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <Trophy className="w-7 h-7" />
                </div>
                <span className="px-3.5 py-1.5 rounded-full text-xs font-mono font-bold bg-emerald-500/10 border border-emerald-500/30 text-emerald-300">
                  CodingNinjas League
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                  Ninja Dominator League
                </h3>
                <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                  Achieved top Ninja Dominator League standing in Code360 by CodingNinjas through speed, precision, and accuracy in contest challenges.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400">Issuer: Code360 by CodingNinjas</span>
                <a
                  href={portfolioData.personal.links.code360}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 hover:bg-emerald-500/20 transition-all flex items-center gap-1.5"
                >
                  <span>Code360 Profile</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Topics Breakdown Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {dsaTopics.map((item, idx) => (
            <div key={idx} className="p-5 rounded-2xl glass-card border border-slate-800 flex items-start gap-4">
              <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 shrink-0">
                <Flame className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white mb-1">{item.topic}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

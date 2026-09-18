import React from 'react';
import { Trophy, Code2, ExternalLink, ArrowUpRight, Flame } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Achievements = () => {
  const dsaTopics = [
    { topic: "Data Structures", detail: "Arrays, LinkedLists, Stacks, Queues, Binary Trees, BSTs, Heaps & Graph Traversals" },
    { topic: "Algorithms", detail: "Binary Search, Dynamic Programming, Greedy, Recursion, Backtracking & Two Pointers" },
    { topic: "Competitive Platforms", detail: "Active problem solving on LeetCode & Code360 by CodingNinjas" }
  ];

  return (
    <section id="achievements" className="py-24 relative z-10 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-left max-w-3xl mb-14 space-y-2">
          <span className="text-xs font-mono uppercase tracking-wider text-blue-400 font-semibold">
            Competitive Programming & Honors
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Key Achievements
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            Demonstrated consistency in algorithmic problem-solving and competitive benchmark standings.
          </p>
        </div>

        {/* Achievements Main Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mb-10">
          
          {/* 200+ DSA Solved Card */}
          <div className="rounded-2xl surface-card p-7 border border-white/[0.08] space-y-6">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-amber-400">
                <Code2 className="w-5 h-5" />
              </div>
              <span className="px-2.5 py-1 rounded-md text-xs font-mono text-slate-300 bg-white/[0.03] border border-white/[0.06]">
                200+ Solved
              </span>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                Solved 200+ DSA Questions
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
                Demonstrated analytical consistency and algorithmic proficiency across foundational and advanced Data Structures & Algorithms topics on LeetCode.
              </p>
            </div>

            <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
              <span className="text-xs font-mono text-slate-500">Platform: LeetCode</span>
              <a
                href={portfolioData.personal.links.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 rounded-xl text-xs font-medium text-slate-300 bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] transition-colors flex items-center gap-1.5"
              >
                <span>View Profile</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Ninja Dominator League Card */}
          <div className="rounded-2xl surface-card p-7 border border-white/[0.08] space-y-6">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-emerald-400">
                <Trophy className="w-5 h-5" />
              </div>
              <span className="px-2.5 py-1 rounded-md text-xs font-mono text-slate-300 bg-white/[0.03] border border-white/[0.06]">
                CodingNinjas League
              </span>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                Ninja Dominator League
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
                Achieved top Ninja Dominator League standing in Code360 by CodingNinjas through speed, precision, and accuracy in contest challenges.
              </p>
            </div>

            <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
              <span className="text-xs font-mono text-slate-500">Issuer: Code360</span>
              <a
                href={portfolioData.personal.links.code360}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 rounded-xl text-xs font-medium text-slate-300 bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] transition-colors flex items-center gap-1.5"
              >
                <span>View Profile</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Topics Breakdown Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
          {dsaTopics.map((item, idx) => (
            <div key={idx} className="p-5 rounded-2xl surface-card border border-white/[0.08] space-y-1">
              <h4 className="text-sm font-semibold text-white">{item.topic}</h4>
              <p className="text-xs text-slate-400 leading-relaxed">{item.detail}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

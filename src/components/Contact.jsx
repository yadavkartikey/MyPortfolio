import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Copy, Check, Code2, ArrowUpRight } from 'lucide-react';
import { Github, Linkedin, Whatsapp } from './Icons';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolioData';

export const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(portfolioData.personal.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    confetti({
      particleCount: 60,
      spread: 60,
      origin: { y: 0.7 }
    });

    setSubmitted(true);
    setTimeout(() => {
      const formattedMessage = `Hi Kartikey,\n\nName: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject || 'Portfolio Inquiry'}\n\nMessage:\n${formData.message}`;
      const whatsappUrl = `https://wa.me/919453071519?text=${encodeURIComponent(formattedMessage)}`;
      window.open(whatsappUrl, '_blank');
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 900);
  };

  return (
    <section id="contact" className="py-24 relative z-10 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-left max-w-3xl mb-14 space-y-2">
          <span className="text-xs font-mono uppercase tracking-wider text-blue-400 font-semibold">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let's Connect & Build
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            Have an engineering role, technical opportunity, or project inquiry? Drop a message to start an instant WhatsApp chat directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-left">
          
          {/* Direct Contact Cards Side */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* WhatsApp Quick Chat Card */}
            <a
              href="https://wa.me/919453071519?text=Hi%20Kartikey,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect!"
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl surface-card border border-emerald-500/20 bg-emerald-950/10 flex items-center justify-between hover:border-emerald-500/40 transition-all group"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                  <Whatsapp className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-emerald-400 font-semibold">Instant WhatsApp Chat</div>
                  <div className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">
                    +91 9453071519
                  </div>
                </div>
              </div>
              <span className="px-3 py-1 rounded-md bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 text-xs font-medium">
                Chat Now →
              </span>
            </a>

            {/* Email Card */}
            <div className="p-5 rounded-2xl surface-card border border-white/[0.08] flex items-center justify-between">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-slate-300 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-500">Email Address</div>
                  <a href={`mailto:${portfolioData.personal.email}`} className="text-sm font-bold text-white hover:text-slate-200 transition-colors">
                    {portfolioData.personal.email}
                  </a>
                </div>
              </div>
              <button
                onClick={handleCopyEmail}
                className="p-2 rounded-lg bg-white/[0.04] text-slate-400 hover:text-white border border-white/[0.08]"
                title="Copy Email"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Phone Card */}
            <div className="p-5 rounded-2xl surface-card border border-white/[0.08] flex items-center justify-between">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-slate-300 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-500">Phone Call</div>
                  <a href={`tel:${portfolioData.personal.phone}`} className="text-sm font-bold text-white hover:text-slate-200 transition-colors">
                    +91 {portfolioData.personal.phone}
                  </a>
                </div>
              </div>
              <button
                onClick={handleCopyPhone}
                className="p-2 rounded-lg bg-white/[0.04] text-slate-400 hover:text-white border border-white/[0.08]"
                title="Copy Phone Number"
              >
                {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Location Card */}
            <div className="p-5 rounded-2xl surface-card border border-white/[0.08] flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-slate-300 shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[11px] font-mono text-slate-500">Current Location</div>
                <div className="text-sm font-bold text-white">
                  {portfolioData.personal.location}
                </div>
              </div>
            </div>

            {/* Social Links Matrix */}
            <div className="p-5 rounded-2xl surface-card border border-white/[0.08] space-y-3">
              <div className="text-xs font-mono text-slate-500 uppercase tracking-wider">Connect on Platforms</div>
              <div className="grid grid-cols-3 gap-2.5">
                <a
                  href={portfolioData.personal.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.06] flex flex-col items-center gap-1 hover:border-white/[0.2] transition-all"
                >
                  <Github className="w-4 h-4 text-slate-300" />
                  <span className="text-[11px] font-mono text-slate-400">GitHub</span>
                </a>
                <a
                  href={portfolioData.personal.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.06] flex flex-col items-center gap-1 hover:border-white/[0.2] transition-all"
                >
                  <Linkedin className="w-4 h-4 text-blue-400" />
                  <span className="text-[11px] font-mono text-slate-400">LinkedIn</span>
                </a>
                <a
                  href={portfolioData.personal.links.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.06] flex flex-col items-center gap-1 hover:border-white/[0.2] transition-all"
                >
                  <Code2 className="w-4 h-4 text-amber-400" />
                  <span className="text-[11px] font-mono text-slate-400">LeetCode</span>
                </a>
              </div>
            </div>

          </div>

          {/* Interactive Contact Form Side */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="p-7 rounded-2xl surface-card border border-white/[0.08] space-y-5 relative overflow-hidden">
              {submitted && (
                <div className="absolute inset-0 z-20 bg-[#08090d]/95 backdrop-blur-md flex flex-col items-center justify-center p-6 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center animate-bounce">
                    <Whatsapp className="w-6 h-6 text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Opening WhatsApp Chat...</h3>
                  <p className="text-xs text-slate-400 max-w-sm">
                    Launching WhatsApp directly with your message draft.
                  </p>
                </div>
              )}

              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-white tracking-tight">Direct Message</h3>
                <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
                  <Whatsapp className="w-3.5 h-3.5" />
                  <span>WhatsApp Direct</span>
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-400 uppercase">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.02] border border-white/[0.08] text-white placeholder-slate-600 focus:outline-none focus:border-white/[0.25] transition-colors text-xs"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-400 uppercase">Your Email</label>
                  <input
                    type="email"
                    required
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.02] border border-white/[0.08] text-white placeholder-slate-600 focus:outline-none focus:border-white/[0.25] transition-colors text-xs"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-slate-400 uppercase">Subject</label>
                <input
                  type="text"
                  placeholder="Software Engineering Role / Inquiry"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.02] border border-white/[0.08] text-white placeholder-slate-600 focus:outline-none focus:border-white/[0.25] transition-colors text-xs"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-slate-400 uppercase">Message</label>
                <textarea
                  required
                  rows="4"
                  placeholder="Hi Kartikey, I'd like to discuss..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.02] border border-white/[0.08] text-white placeholder-slate-600 focus:outline-none focus:border-white/[0.25] transition-colors text-xs resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl font-semibold text-xs text-slate-950 bg-white hover:bg-slate-200 transition-colors flex items-center justify-center gap-2"
              >
                <Whatsapp className="w-4 h-4 text-emerald-600" />
                <span>Send via WhatsApp Direct</span>
                <Send className="w-3.5 h-3.5 text-slate-600" />
              </button>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
};

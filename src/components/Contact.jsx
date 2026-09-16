import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Copy, Check, Code2, Sparkles, MessageSquare } from 'lucide-react';
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

    // Trigger confetti
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.7 }
    });

    setSubmitted(true);
    setTimeout(() => {
      const formattedMessage = `Hi Kartikey,\n\nName: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject || 'Portfolio Inquiry'}\n\nMessage:\n${formData.message}`;
      const whatsappUrl = `https://wa.me/919453071519?text=${encodeURIComponent(formattedMessage)}`;
      window.open(whatsappUrl, '_blank');
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-semibold">
            <Whatsapp className="w-4 h-4 text-emerald-400" />
            <span>INSTANT DIRECT MESSAGING</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Let's <span className="text-gradient">Connect & Build</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Have an open opportunity, project inquiry, or technical role? Drop a message to start an instant WhatsApp chat directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-left">
          
          {/* Direct Contact Cards Side */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* WhatsApp Quick Chat Card */}
            <a
              href="https://wa.me/919453071519?text=Hi%20Kartikey,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect!"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-3xl glass-panel border border-emerald-500/30 bg-emerald-950/20 flex items-center justify-between hover:border-emerald-500/60 hover:scale-[1.02] transition-all duration-300 group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0 group-hover:scale-110 transition-transform">
                  <Whatsapp className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-mono text-emerald-400 font-semibold">Instant WhatsApp Chat</div>
                  <div className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
                    +91 9453071519
                  </div>
                </div>
              </div>
              <span className="px-3 py-1.5 rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-semibold">
                Chat Now →
              </span>
            </a>

            {/* Email Card */}
            <div className="p-6 rounded-3xl glass-panel border border-slate-800 flex items-center justify-between hover:border-cyan-500/40 transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400">Email Address</div>
                  <a href={`mailto:${portfolioData.personal.email}`} className="text-base font-bold text-white hover:text-cyan-300 transition-colors">
                    {portfolioData.personal.email}
                  </a>
                </div>
              </div>
              <button
                onClick={handleCopyEmail}
                className="p-2.5 rounded-xl bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800"
                title="Copy Email"
              >
                {copiedEmail ? <Check className="w-5 h-5 text-emerald-400" /> : <Copy className="w-5 h-5" />}
              </button>
            </div>

            {/* Phone Card */}
            <div className="p-6 rounded-3xl glass-panel border border-slate-800 flex items-center justify-between hover:border-indigo-500/40 transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400">Phone Call</div>
                  <a href={`tel:${portfolioData.personal.phone}`} className="text-base font-bold text-white hover:text-indigo-300 transition-colors">
                    +91 {portfolioData.personal.phone}
                  </a>
                </div>
              </div>
              <button
                onClick={handleCopyPhone}
                className="p-2.5 rounded-xl bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800"
                title="Copy Phone Number"
              >
                {copiedPhone ? <Check className="w-5 h-5 text-emerald-400" /> : <Copy className="w-5 h-5" />}
              </button>
            </div>

            {/* Location Card */}
            <div className="p-6 rounded-3xl glass-panel border border-slate-800 flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400 shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs font-mono text-slate-400">Current Location</div>
                <div className="text-base font-bold text-white">
                  {portfolioData.personal.location}
                </div>
              </div>
            </div>

            {/* Social Links Matrix */}
            <div className="p-6 rounded-3xl glass-card border border-slate-800 space-y-4">
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">Connect on Platforms</div>
              <div className="grid grid-cols-3 gap-3">
                <a
                  href={portfolioData.personal.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex flex-col items-center gap-1.5 hover:border-cyan-500/40 hover:scale-105 transition-all"
                >
                  <Github className="w-5 h-5 text-slate-300" />
                  <span className="text-xs font-mono text-slate-400">GitHub</span>
                </a>
                <a
                  href={portfolioData.personal.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex flex-col items-center gap-1.5 hover:border-cyan-500/40 hover:scale-105 transition-all"
                >
                  <Linkedin className="w-5 h-5 text-cyan-400" />
                  <span className="text-xs font-mono text-slate-400">LinkedIn</span>
                </a>
                <a
                  href={portfolioData.personal.links.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex flex-col items-center gap-1.5 hover:border-amber-500/40 hover:scale-105 transition-all"
                >
                  <Code2 className="w-5 h-5 text-amber-400" />
                  <span className="text-xs font-mono text-slate-400">LeetCode</span>
                </a>
              </div>
            </div>

          </div>

          {/* Interactive Contact Form Side */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="p-8 rounded-3xl glass-panel border border-slate-800 space-y-6 shadow-2xl relative overflow-hidden">
              {submitted && (
                <div className="absolute inset-0 z-20 bg-slate-950/90 backdrop-blur-md flex flex-col items-center justify-center p-6 text-center space-y-3">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center animate-bounce">
                    <Whatsapp className="w-8 h-8 text-emerald-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Opening WhatsApp Chat...</h3>
                  <p className="text-sm text-slate-300 max-w-sm">
                    Thank you for reaching out! Your message draft is being launched directly in WhatsApp.
                  </p>
                </div>
              )}

              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold text-white">Send Me a Message</h3>
                <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-medium">
                  <Whatsapp className="w-3.5 h-3.5" />
                  <span>WhatsApp Direct</span>
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-mono text-slate-400 uppercase">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/60 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500 transition-colors text-sm"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono text-slate-400 uppercase">Your Email</label>
                  <input
                    type="email"
                    required
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/60 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500 transition-colors text-sm"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono text-slate-400 uppercase">Subject</label>
                <input
                  type="text"
                  placeholder="Opportunity / Technical Inquiry"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950/60 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500 transition-colors text-sm"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono text-slate-400 uppercase">Message</label>
                <textarea
                  required
                  rows="4"
                  placeholder="Hello Kartikey, I'd like to talk about..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950/60 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500 transition-colors text-sm resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl font-bold text-white bg-gradient-to-r from-emerald-500 via-teal-600 to-cyan-600 hover:from-emerald-400 hover:to-cyan-500 shadow-xl shadow-emerald-500/25 transition-all duration-300 flex items-center justify-center gap-2.5 group"
              >
                <Whatsapp className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                <span>Send via WhatsApp Direct</span>
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
};

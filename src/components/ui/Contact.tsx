"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Send, ArrowRight, Twitter } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 w-full relative">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Connect</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">Interested in working together or have a question? Drop me a message.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 flex flex-col gap-6"
          >
            {/* Email Section */}
            <a
              href="mailto:sharmashubham99745@gmail.com"
              className="glass-card p-6 rounded-2xl flex items-center justify-between group hover:-translate-y-1 transition-all duration-300 border border-white/5 hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(0,240,255,0.15)] relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 to-cyan-500/0 group-hover:from-cyan-500/5 group-hover:to-transparent transition-colors duration-300" />
              <div className="flex items-center gap-5 relative z-10">
                <div className="w-14 h-14 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-black transition-colors duration-300 shadow-inner shadow-cyan-500/20">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-gray-400 text-sm font-medium mb-1 group-hover:text-gray-300 transition-colors">Chat with me</h4>
                  <p className="text-white font-bold text-lg tracking-wide">Email</p>
                </div>
              </div>
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-500 group-hover:border-cyan-500/50 group-hover:bg-cyan-500 group-hover:text-black transition-all duration-300 relative z-10 shadow-[0_0_10px_rgba(0,0,0,0.5)]">
                <ArrowRight size={18} className="-rotate-45 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </div>
            </a>

            {/* LinkedIn Section */}
            <a
              href="https://www.linkedin.com/in/shubham-sharma-352576259"
              target="_blank"
              rel="noreferrer"
              className="glass-card p-6 rounded-2xl flex items-center justify-between group hover:-translate-y-1 transition-all duration-300 border border-white/5 hover:border-[#0A66C2]/50 hover:shadow-[0_0_30px_rgba(10,102,194,0.15)] relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#0A66C2]/0 to-[#0A66C2]/0 group-hover:from-[#0A66C2]/5 group-hover:to-transparent transition-colors duration-300" />
              <div className="flex items-center gap-5 relative z-10">
                <div className="w-14 h-14 rounded-full bg-[#0A66C2]/10 flex items-center justify-center text-[#0A66C2] group-hover:bg-[#0A66C2] group-hover:text-white transition-colors duration-300 shadow-inner shadow-[#0A66C2]/20">
                  <Linkedin size={24} />
                </div>
                <div>
                  <h4 className="text-gray-400 text-sm font-medium mb-1 group-hover:text-gray-300 transition-colors">Connect with me</h4>
                  <p className="text-white font-bold text-lg tracking-wide">LinkedIn</p>
                </div>
              </div>
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-500 group-hover:border-[#0A66C2]/50 group-hover:bg-[#0A66C2] group-hover:text-white transition-all duration-300 relative z-10 shadow-[0_0_10px_rgba(0,0,0,0.5)]">
                <ArrowRight size={18} className="-rotate-45 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </div>
            </a>

            {/* GitHub Section */}
            <a
              href="https://github.com/shubhamsharma39"
              target="_blank"
              rel="noreferrer"
              className="glass-card p-6 rounded-2xl flex items-center justify-between group hover:-translate-y-1 transition-all duration-300 border border-white/5 hover:border-white/50 hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 to-white/0 group-hover:from-white/5 group-hover:to-transparent transition-colors duration-300" />
              <div className="flex items-center gap-5 relative z-10">
                <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-colors duration-300 shadow-inner shadow-white/20">
                  <Github size={24} />
                </div>
                <div>
                  <h4 className="text-gray-400 text-sm font-medium mb-1 group-hover:text-gray-300 transition-colors">Check my code</h4>
                  <p className="text-white font-bold text-lg tracking-wide">GitHub</p>
                </div>
              </div>
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-500 group-hover:border-white/50 group-hover:bg-white group-hover:text-black transition-all duration-300 relative z-10 shadow-[0_0_10px_rgba(0,0,0,0.5)]">
                <ArrowRight size={18} className="-rotate-45 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </div>
            </a>

            {/* X (Twitter) Section */}
            <a
              href="https://x.com/Shubham56114968"
              target="_blank"
              rel="noreferrer"
              className="glass-card p-6 rounded-2xl flex items-center justify-between group hover:-translate-y-1 transition-all duration-300 border border-white/5 hover:border-gray-500/50 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-gray-500/0 to-gray-500/0 group-hover:from-gray-500/10 group-hover:to-transparent transition-colors duration-300" />
              <div className="flex items-center gap-5 relative z-10">
                <div className="w-14 h-14 rounded-full bg-gray-500/10 flex items-center justify-center text-gray-400 group-hover:bg-white group-hover:text-black transition-colors duration-300 shadow-inner shadow-white/10">
                  <Twitter size={24} />
                </div>
                <div>
                  <h4 className="text-gray-400 text-sm font-medium mb-1 group-hover:text-gray-300 transition-colors">Follow my updates</h4>
                  <p className="text-white font-bold text-lg tracking-wide">X </p>
                </div>
              </div>
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-500 group-hover:border-white/50 group-hover:bg-white group-hover:text-black transition-all duration-300 relative z-10 shadow-[0_0_10px_rgba(0,0,0,0.5)]">
                <ArrowRight size={18} className="-rotate-45 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </div>
            </a>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-3"
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 rounded-2xl border border-white/5 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm text-gray-400 font-medium ml-1">Name</label>
                  <input
                    type="text"
                    required
                    className="w-full bg-[#0a0f1c]/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all placeholder:text-gray-600"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-gray-400 font-medium ml-1">Email</label>
                  <input
                    type="email"
                    required
                    className="w-full bg-[#0a0f1c]/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all placeholder:text-gray-600"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm text-gray-400 font-medium ml-1">Subject</label>
                <input
                  type="text"
                  required
                  className="w-full bg-[#0a0f1c]/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all placeholder:text-gray-600"
                  placeholder="Job Opportunity"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-gray-400 font-medium ml-1">Message</label>
                <textarea
                  required
                  rows={4}
                  className="w-full bg-[#0a0f1c]/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all placeholder:text-gray-600 resize-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading || success}
                className="w-full relative overflow-hidden group bg-cyan-500 text-black font-semibold py-4 rounded-lg flex items-center justify-center gap-2 hover:bg-cyan-400 disabled:opacity-70 disabled:cursor-not-allowed transition-all shadow-[0_0_15px_rgba(0,240,255,0.3)]"
              >
                {loading ? (
                  <div className="w-6 h-6 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                ) : success ? (
                  <>Message Sent <Send size={18} /></>
                ) : (
                  <>Send Message <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

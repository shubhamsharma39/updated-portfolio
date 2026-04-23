"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { Menu, X, Download, ExternalLink } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Python", href: "#python" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [pdfUrl, setPdfUrl] = useState("");
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isResumeOpen) {
      fetch("/resume.pdf")
        .then((res) => res.blob())
        .then((blob) => {
          const url = URL.createObjectURL(blob);
          setPdfUrl(url);
        });
    } else {
      if (pdfUrl) URL.revokeObjectURL(pdfUrl);
      setPdfUrl("");
    }
  }, [isResumeOpen]);

  return (
    <>
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 origin-left z-50 rounded-r-full" style={{ scaleX }} />
      <nav className={`fixed top-0 w-full z-40 transition-all duration-300 ${isScrolled ? "glass py-4" : "py-6 bg-transparent"}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold tracking-tighter">
            Dev<span className="text-cyan-400">Ops</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-8 items-center">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors">
                {link.name}
              </Link>
            ))}
            <button
              onClick={() => setIsResumeOpen(true)}
              className="px-5 py-2 rounded-full border border-cyan-500/50 hover:bg-cyan-500/10 text-cyan-400 transition-all text-sm font-medium hover:shadow-[0_0_15px_rgba(0,240,255,0.3)]"
            >
              Resume
            </button>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-gray-300 hover:text-cyan-400 transition-colors" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="absolute top-full left-0 w-full glass border-t border-white/5 flex flex-col items-center py-6 gap-6 md:hidden">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-lg font-medium text-gray-300 hover:text-cyan-400 transition-colors">
                {link.name}
              </Link>
            ))}
            <button
              onClick={() => {
                setIsResumeOpen(true);
                setIsOpen(false);
              }}
              className="px-6 py-2 rounded-full border border-cyan-500/50 hover:bg-cyan-500/10 text-cyan-400 transition-all font-medium"
            >
              Resume
            </button>
          </motion.div>
        )}
      </nav>

      {/* Resume Modal */}
      <AnimatePresence>
        {isResumeOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsResumeOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-5xl h-[85vh] bg-[#0a0a10] border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-4 border-b border-white/10 bg-[#0f0f1a]">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
                  Professional Resume
                </h3>
                <div className="flex items-center gap-3">
                  <a
                    href="/resume.pdf"
                    download="Shubham_Resume.pdf"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-500 text-black text-sm font-bold hover:bg-cyan-400 transition-all active:scale-95"
                  >
                    <Download size={18} />
                    Download
                  </a>
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    className="p-2 rounded-lg hover:bg-white/5 text-gray-400 hover:text-white transition-all"
                    title="Open in new tab"
                  >
                    <ExternalLink size={20} />
                  </a>
                  <button
                    onClick={() => setIsResumeOpen(false)}
                    className="p-2 rounded-lg hover:bg-red-500/20 text-gray-400 hover:text-red-500 transition-all"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>

              {/* PDF Viewer */}
              <div className="flex-1 bg-white/5 relative">
                {pdfUrl ? (
                  <embed
                    src={`${pdfUrl}#view=FitH`}
                    type="application/pdf"
                    className="w-full h-full border-none"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-8 h-8 border-4 border-cyan-500/30 border-t-cyan-500 rounded-full animate-spin" />
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

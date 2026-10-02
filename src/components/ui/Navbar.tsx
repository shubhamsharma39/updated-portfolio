"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { Menu, X, Download, ExternalLink, Github, Linkedin } from "lucide-react";
import Link from "next/link";
import Magnetic from "@/components/ui/Magnetic";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Training", href: "#training" },
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

  const scrollToContact = () => {
    setIsOpen(false);
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/#contact";
    }
  };

  return (
    <>
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 origin-left z-50 rounded-r-full" style={{ scaleX }} />
      <nav
        className={`fixed top-0 w-full z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-[#010314]/90 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/40 py-3.5"
            : "bg-[#010314]/80 backdrop-blur-md border-b border-white/5 py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="text-xl md:text-2xl font-bold tracking-tighter hover:opacity-90 transition-opacity">
            SHUBHAM<span className="text-cyan-400">.OPS</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-5 lg:gap-7 items-center">
            <div className="flex items-center gap-4 lg:gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-xs lg:text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Resume & Hire Me & Social Icons Section */}
            <div className="flex items-center gap-2.5 lg:gap-3 pl-3 border-l border-white/10">
              <Magnetic>
                <button
                  onClick={() => setIsResumeOpen(true)}
                  className="px-3.5 lg:px-4 py-1.5 lg:py-2 rounded-full border border-cyan-500/50 hover:bg-cyan-500/10 text-cyan-400 transition-all text-xs lg:text-sm font-medium hover:shadow-[0_0_12px_rgba(0,240,255,0.25)] cursor-pointer"
                >
                  Resume
                </button>
              </Magnetic>

              <Magnetic>
                <button
                  onClick={scrollToContact}
                  className="px-3.5 lg:px-4 py-1.5 lg:py-2 rounded-full border border-cyan-400 bg-cyan-400/15 text-cyan-300 hover:bg-cyan-400 hover:text-black transition-all text-xs lg:text-sm font-semibold hover:shadow-[0_0_15px_rgba(0,240,255,0.4)] cursor-pointer"
                >
                  Hire Me
                </button>
              </Magnetic>

              {/* GitHub and LinkedIn Icons */}
              <div className="flex items-center gap-2 pl-1 border-l border-white/10">
                <a
                  href="https://github.com/shubhamsharma39"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white hover:scale-110 transition-all p-1"
                  aria-label="GitHub"
                  title="GitHub"
                >
                  <Github size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/in/shubham-sharma-352576259"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white hover:scale-110 transition-all p-1"
                  aria-label="LinkedIn"
                  title="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-gray-300 hover:text-cyan-400 transition-colors" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-full left-0 w-full bg-[#010314]/95 backdrop-blur-2xl border-t border-b border-white/10 flex flex-col items-center py-6 gap-5 md:hidden shadow-2xl"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-base font-medium text-gray-300 hover:text-cyan-400 transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <div className="flex flex-col items-center gap-3 w-48 pt-2 border-t border-white/10">
              <button
                onClick={() => {
                  setIsResumeOpen(true);
                  setIsOpen(false);
                }}
                className="w-full py-2 rounded-full border border-cyan-500/50 hover:bg-cyan-500/10 text-cyan-400 transition-all font-medium text-sm text-center cursor-pointer"
              >
                Resume
              </button>
              <button
                onClick={scrollToContact}
                className="w-full py-2 rounded-full border border-cyan-400 bg-cyan-400/20 text-cyan-300 hover:bg-cyan-400 hover:text-black transition-all font-semibold text-sm text-center shadow-[0_0_12px_rgba(0,240,255,0.3)] cursor-pointer"
              >
                Hire Me
              </button>
            </div>
            <div className="flex items-center gap-5 pt-1">
              <a
                href="https://github.com/shubhamsharma39"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github size={22} />
              </a>
              <a
                href="https://www.linkedin.com/in/shubham-sharma-352576259"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={22} />
              </a>
            </div>
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

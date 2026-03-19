"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Menu, X } from "lucide-react";
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
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
            <a href="/resume.pdf" target="_blank" rel="noreferrer" className="px-5 py-2 rounded-full border border-cyan-500/50 hover:bg-cyan-500/10 text-cyan-400 transition-all text-sm font-medium hover:shadow-[0_0_15px_rgba(0,240,255,0.3)]">
              Resume
            </a>
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
            <a href="/resume.pdf" target="_blank" rel="noreferrer" className="px-6 py-2 rounded-full border border-cyan-500/50 hover:bg-cyan-500/10 text-cyan-400 transition-all font-medium">
              Resume
            </a>
          </motion.div>
        )}
      </nav>
    </>
  );
}

"use client";

import { motion } from "framer-motion";
import { Cloud, Server, Box, GitMerge, Hexagon, Workflow, Code, ShieldCheck, Terminal, Cpu } from "lucide-react";

export default function Hero() {
  const containerVars = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVars = {
    hidden: { opacity: 0, x: -30 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" as any }
    },
  };

  // Tech items for the animation (8 tools total)
  const techStack = [
    { icon: Cloud, label: "AWS", color: "#FF9900", delay: 0.1, pos: "top-0 left-1/2 -translate-x-1/2" },
    { icon: Server, label: "Docker", color: "#2496ED", delay: 0.2, pos: "top-[15%] right-[5%]" },
    { icon: Cpu, label: "Kubernetes", color: "#326CE5", delay: 0.3, pos: "top-1/2 right-0 -translate-y-1/2" },
    { icon: Workflow, label: "CI/CD", color: "#F05032", delay: 0.4, pos: "bottom-[15%] right-[5%]" },
    { icon: GitMerge, label: "Terraform", color: "#7B42BC", delay: 0.5, pos: "bottom-0 left-1/2 -translate-x-1/2" },
    { icon: ShieldCheck, label: "Nginx", color: "#009633", delay: 0.6, pos: "bottom-[15%] left-[5%]" },
    { icon: Terminal, label: "Linux", color: "#FCC624", delay: 0.7, pos: "top-1/2 left-0 -translate-y-1/2" },
    { icon: Code, label: "Python", color: "#3776AB", delay: 0.8, pos: "top-[15%] left-[5%]" },
  ];

  return (
    <section id="about" className="min-h-[90vh] flex items-center justify-center pt-24 pb-12 relative w-full overflow-hidden">

      {/* Background effect ONLY behind About section */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="absolute top-[10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-cyan-500/10 blur-[120px]"
        />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.4 }}
          className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-purple-600/10 blur-[120px]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center z-10 w-full">

        {/* Left Side (Text) */}
        <motion.div
          variants={containerVars}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-6"
        >
          <motion.div variants={itemVars} className="inline-block px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-sm font-medium backdrop-blur-md">
            DevOps Engineer
          </motion.div>

          <motion.h1 variants={itemVars} className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Shubham Sharma</span>
          </motion.h1>

          <div className="text-xl md:text-2xl text-gray-400 font-medium leading-relaxed space-y-3">
            <motion.p variants={itemVars}>
              I build scalable infrastructure and automate
            </motion.p>
            <motion.p variants={itemVars}>
              systems using <span className="text-cyan-300 font-bold drop-shadow-[0_0_8px_rgba(0,240,255,0.6)]">DevOps</span> and <span className="text-[#3776AB] font-bold drop-shadow-[0_0_8px_rgba(55,118,171,0.6)]">Python Automation</span>.
            </motion.p>
            <motion.p variants={itemVars}>
              I specialize in <span className="text-[#ff9900] font-bold drop-shadow-[0_0_8px_rgba(255,153,0,0.6)]">AWS</span>, containerization, and sleek CI/CD pipelines.
            </motion.p>
          </div>

          <motion.div variants={itemVars} className="flex flex-wrap gap-4 pt-6">
            <a href="#projects" className="px-8 py-3 rounded-full bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition-colors shadow-[0_0_20px_rgba(0,240,255,0.4)] hover:scale-105 active:scale-95 duration-200">
              View Projects
            </a>
            <a href="#contact" className="px-8 py-3 rounded-full border border-white/20 hover:bg-white/5 transition-colors font-medium backdrop-blur-md hover:scale-105 active:scale-95 duration-200">
              Contact Me
            </a>
          </motion.div>
        </motion.div>

        {/* Right Side (Tech Stack Animation) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative h-[500px] md:h-[600px] w-full flex items-center justify-center scale-90 md:scale-100"
        >
          {/* Central Infrastructure Core */}
          <motion.div
            animate={{
              boxShadow: ["0 0 20px rgba(0,240,255,0.2)", "0 0 50px rgba(0,240,255,0.4)", "0 0 20px rgba(0,240,255,0.2)"],
              scale: [1, 1.05, 1]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="w-24 h-24 md:w-36 md:h-36 rounded-full border-2 border-cyan-500/50 bg-cyan-500/5 flex items-center justify-center relative z-20 group"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-500/10 to-purple-500/10 animate-pulse" />
            <Hexagon size={48} className="text-cyan-400 drop-shadow-[0_0_15px_rgba(0,240,255,0.5)] group-hover:rotate-180 transition-transform duration-1000" />
            <div className="absolute -bottom-10 text-cyan-500 font-mono text-[10px] md:text-xs tracking-widest opacity-50 group-hover:opacity-100 transition-opacity whitespace-nowrap">INFRASTRUCTURE CORE</div>
          </motion.div>

          {/* Orbiting Tech Items */}
          {techStack.map((tech, i) => (
            <motion.div
              key={tech.label}
              initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: tech.delay, duration: 0.5, type: "spring", stiffness: 100 }}
              className={`absolute ${tech.pos} z-30`}
            >
              <motion.div
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{
                  duration: 4 + i,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.5
                }}
                className="flex flex-col items-center gap-2 group cursor-pointer"
              >
                <div
                  className="w-16 h-16 md:w-20 md:h-20 rounded-2xl glass-card flex items-center justify-center border border-white/10 group-hover:border-white/40 transition-all duration-300 shadow-lg group-hover:scale-110 active:scale-95"
                  style={{ boxShadow: `0 0 15px ${tech.color}20` }}
                >
                  <tech.icon size={32} style={{ color: tech.color }} className="drop-shadow-lg" />
                </div>
                <span className="text-[10px] md:text-xs font-mono text-gray-500 group-hover:text-white transition-colors uppercase tracking-widest bg-gray-900/50 px-2 py-0.5 rounded-full border border-white/5">
                  {tech.label}
                </span>
              </motion.div>
            </motion.div>
          ))}

          {/* Connection Lines (SVG) */}
          <svg className="absolute inset-0 w-full h-full -z-10 opacity-20" viewBox="0 0 400 400">
            <motion.circle
              cx="200" cy="200" r="140"
              fill="none"
              stroke="white"
              strokeWidth="0.5"
              strokeDasharray="4 8"
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            />
            <motion.circle
              cx="200" cy="200" r="100"
              fill="none"
              stroke="cyan"
              strokeWidth="0.5"
              strokeDasharray="2 6"
              animate={{ rotate: -360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            />
          </svg>

          {/* Decorative Background Elements */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 md:w-[28rem] md:h-[28rem] border border-white/5 rounded-full -z-20" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 md:w-[32rem] md:h-[32rem] border border-cyan-500/5 rounded-full blur-[2px] -z-20" />
        </motion.div>

      </div>
    </section>
  );
}

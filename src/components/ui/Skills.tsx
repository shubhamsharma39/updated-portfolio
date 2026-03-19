"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Cloud, GitMerge, Server, Cpu,
  Terminal, ShieldCheck, Box, GitBranch,
  Lock, Database, Workflow, Code, ExternalLink
} from "lucide-react";

const skills = [
  {
    name: "AWS",
    tags: ["EC2", "S3", "IAM", "VPC", "ECR"],
    icon: Cloud,
    color: "#ff9900",
    url: "https://docs.aws.amazon.com/"
  },
  {
    name: "Docker & Compose",
    tags: ["Containers", "Multi-stage", "Orchestration"],
    icon: Server,
    color: "#2496ED",
    url: "https://docs.docker.com/"
  },
  {
    name: "Kubernetes",
    tags: ["Pods", "Services", "Helm", "Kops"],
    icon: Cpu,
    color: "#326CE5",
    url: "https://kubernetes.io/docs/"
  },
  {
    name: "CI/CD",
    tags: ["GitLab CI", "GitHub Actions", "Jenkins"],
    icon: Workflow,
    color: "#A78BFA",
    url: "https://docs.github.com/en/actions"
  },
  {
    name: "Terraform",
    tags: ["IaC", "State Mgmt", "Modules"],
    icon: GitMerge,
    color: "#7B42BC",
    url: "https://developer.hashicorp.com/terraform/docs"
  },
  {
    name: "Nginx + Apache",
    tags: ["Proxy", "Load Balance", "SSL"],
    icon: ShieldCheck,
    color: "#009639",
    url: "https://nginx.org/en/docs/"
  },
  {
    name: "Linux",
    tags: ["Ubuntu", "Bash", "Hardening", "Systems"],
    icon: Terminal,
    color: "#FCC624",
    url: "https://docs.kernel.org/"
  },
  {
    name: "Python",
    tags: ["Automation", "Boto3", "Parsing"],
    icon: Code,
    color: "#3776AB",
    url: "https://docs.python.org/3/"
  },
  {
    name: "Git & GitHub",
    tags: ["Branching", "Actions", "Workflows"],
    icon: GitBranch,
    color: "#F05032",
    url: "https://docs.github.com/"
  },
  {
    name: "SSL & TLS",
    tags: ["Encryption", "Certbot", "OpenSSL"],
    icon: Lock,
    color: "#22D3EE",
    url: "https://letsencrypt.org/docs/"
  },
  {
    name: "Redis",
    tags: ["Caching", "Streams", "Performance"],
    icon: Database,
    color: "#DC2626",
    url: "https://redis.io/docs/"
  },
  {
    name: "MongoDB",
    tags: ["NoSQL", "Atlas", "Aggregation"],
    icon: Box,
    color: "#47A248",
    url: "https://www.mongodb.com/docs/"
  }
];

function SkillCard({ skill, index }: { skill: typeof skills[0], index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.a
      href={skill.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative glass-card p-6 rounded-3xl border border-white/5 overflow-hidden flex flex-col items-start transition-all duration-500 hover:border-white/20 cursor-pointer"
    >
      <div ref={cardRef} className="absolute inset-0 pointer-events-none" />

      {/* Permanent Baseline Glow (Always visible) */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          background: `radial-gradient(circle at center, ${skill.color}, transparent 70%)`
        }}
      />

      {/* Dynamic Cursor Spotlight (Visible on hover) */}
      <div
        className="absolute pointer-events-none inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, ${skill.color}20, transparent 40%)`
        }}
      />

      {/* External Link Icon */}
      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-40 transition-opacity duration-300">
        <ExternalLink size={16} />
      </div>

      {/* Background Icon Decoration */}
      <div className="absolute top-0 right-0 p-4 opacity-[0.03] group-hover:opacity-15 transition-all duration-700 pointer-events-none text-white overflow-hidden">
        <skill.icon
          size={140}
          className="-mr-12 -mt-12 transition-transform duration-1000 group-hover:rotate-6 group-hover:scale-110"
        />
      </div>

      <div className="relative z-10 w-full">
        {/* Header: Icon & Name */}
        <div className="flex items-center gap-4 mb-6">
          <div
            className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-cyan-400/40 transition-all duration-500 group-hover:scale-110 shadow-lg"
            style={{
              boxShadow: isHovered ? `0 10px 25px ${skill.color}30` : `0 5px 15px ${skill.color}10`,
              borderColor: isHovered ? `${skill.color}50` : 'rgba(255,255,255,0.1)'
            }}
          >
            <skill.icon
              className="transition-all duration-500 drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]"
              style={{ color: skill.color, opacity: isHovered ? 1 : 0.8 }}
              size={24}
            />
          </div>
          <h3 className="text-xl font-bold transition-colors group-hover:text-white" style={{ color: isHovered ? 'white' : '#e5e7eb' }}>
            {skill.name}
          </h3>
        </div>

        {/* Tags / Keywords - Colored by default */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {skill.tags.map(tag => (
            <span
              key={tag}
              style={{
                color: isHovered ? 'white' : `${skill.color}dd`,
                borderColor: `${skill.color}30`,
                backgroundColor: isHovered ? `${skill.color}20` : `${skill.color}08`
              }}
              className="text-[10px] uppercase tracking-wider font-bold px-2.5 py-1 rounded-lg border transition-all duration-300 backdrop-blur-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Subtle Bottom Glow Line - Always visible but faint */}
      <div
        className="absolute bottom-0 left-0 h-[2px] transition-all duration-700 ease-out"
        style={{
          width: isHovered ? '100%' : '30%',
          backgroundColor: skill.color,
          boxShadow: `0 0 10px ${skill.color}`,
          opacity: isHovered ? 1 : 0.3
        }}
      />
    </motion.a>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 w-full relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/5 text-cyan-400 text-sm font-medium mb-6"
          >
            Technical Arsenal
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
            Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Expertise</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-xl font-medium leading-relaxed">
            Click on any card to explore the official documentation for my core tech stack.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skills.map((skill, i) => (
            <SkillCard key={skill.name} skill={skill} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

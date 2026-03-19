"use client";

import { 
  Cloud, GitMerge, Server, Cpu, FileJson, 
  Terminal, ShieldCheck, Box, GitBranch, 
  Lock, Database, Workflow, Code
} from "lucide-react";

const skills = [
  { 
    name: "AWS", 
    description: "EC2, S3, IAM, ECR, VPC", 
    icon: Cloud, 
    glow: "group-hover:shadow-[0_0_30px_rgba(255,153,0,0.3)] group-hover:border-[#ff9900]/50" 
  },
  { 
    name: "Docker & Compose", 
    description: "Containerization & Multi-container orchestration", 
    icon: Server, 
    glow: "group-hover:shadow-[0_0_30_rgba(36,150,237,0.3)] group-hover:border-[#2496ED]/50" 
  },
  { 
    name: "Kubernetes", 
    description: "Orchestration, Pods, Services, Helm", 
    icon: Cpu, 
    glow: "group-hover:shadow-[0_0_30px_rgba(50,108,229,0.3)] group-hover:border-[#326CE5]/50" 
  },
  { 
    name: "CI/CD", 
    description: "GitLab CI/CD & GitHub Actions", 
    icon: Workflow, 
    glow: "group-hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] group-hover:border-white/50" 
  },
  { 
    name: "Terraform", 
    description: "Infrastructure as Code & Cloud Provisioning", 
    icon: GitMerge, 
    glow: "group-hover:shadow-[0_0_30px_rgba(123,66,188,0.3)] group-hover:border-[#7B42BC]/50" 
  },
  { 
    name: "Nginx + Apache", 
    description: "Reverse Proxy, Load Balancing & Web Servers", 
    icon: ShieldCheck, 
    glow: "group-hover:shadow-[0_0_30px_rgba(0,150,57,0.3)] group-hover:border-[#009639]/50" 
  },
  { 
    name: "Linux", 
    description: "Bash, Ubuntu, Alpine, System Administration", 
    icon: Terminal, 
    glow: "group-hover:shadow-[0_0_30px_rgba(252,198,36,0.3)] group-hover:border-[#FCC624]/50" 
  },
  { 
    name: "Python", 
    description: "Automation, Scripting & Data Handling", 
    icon: Code, 
    glow: "group-hover:shadow-[0_0_30px_rgba(55,118,171,0.3)] group-hover:border-[#3776AB]/50" 
  },
  { 
    name: "Git & GitHub", 
    description: "Version Control & Branching Workflows", 
    icon: GitBranch, 
    glow: "group-hover:shadow-[0_0_30px_rgba(240,80,50,0.3)] group-hover:border-[#F05032]/50" 
  },
  { 
    name: "SSL & TLS Security", 
    description: "Encrypted Traffic, Certbot & Security Protocols", 
    icon: Lock, 
    glow: "group-hover:shadow-[0_0_30px_rgba(34,211,238,0.3)] group-hover:border-cyan-400/50" 
  },
  { 
    name: "Redis", 
    description: "Caching, Performance & NoSQL Data", 
    icon: Database, 
    glow: "group-hover:shadow-[0_0_30px_rgba(220,38,38,0.3)] group-hover:border-[#DC2626]/50" 
  },
  { 
    name: "MongoDB", 
    description: "NoSQL Database & Document-based Storage", 
    icon: Box, 
    glow: "group-hover:shadow-[0_0_30px_rgba(71,162,72,0.3)] group-hover:border-[#47A248]/50" 
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 w-full relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Expertise</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">Tech stack I use to build scalable infrastructure and reliable deployments.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className={`group glass-card p-6 rounded-2xl border border-white/5 relative overflow-hidden flex flex-col items-start ${skill.glow} transition-all duration-300 hover:-translate-y-1`}
            >
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none text-white overflow-hidden">
                <skill.icon size={120} className="-mr-10 -mt-10 transition-transform duration-300 group-hover:scale-110" />
              </div>
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/10 group-hover:border-cyan-400/30">
                <skill.icon className="text-gray-300 group-hover:text-cyan-400 transition-colors" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-100">{skill.name}</h3>
              <p className="text-gray-400 text-sm leading-relaxed relative z-10">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { ExternalLink, Github, Terminal } from "lucide-react";

const projects = [
  {
    title: "Dockerized React + Nginx App",
    description: "Production-ready Docker environment utilizing multi-stage builds. Implemented Nginx as a reverse proxy with optimized caching policies.",
    tech: ["Docker", "Nginx", "React", "Linux"],
    link: "#",
    github: "#"
  },
  {
    title: "CI/CD Pipeline via GitHub Actions",
    description: "Automated testing, building, and deployment pipeline. Features automated semantic versioning and Slack notifications on build failures.",
    tech: ["GitHub Actions", "Shell", "Docker", "AWS S3"],
    link: "#",
    github: "#"
  },
  {
    title: "Scalable AWS Deployment",
    description: "Cloud infrastructure provisioning for a multi-tier application using EC2 for compute, S3 for static assets, and IAM for security.",
    tech: ["AWS EC2", "AWS S3", "IAM", "VPC"],
    link: "#",
    github: "#"
  },
  {
    title: "Python Automation Engine",
    description: "A suite of Python scripts that monitor server logs, automate backups to S3, and trigger alerts for anomalous resource usage.",
    tech: ["Python", "Boto3", "Cron", "Bash"],
    link: "#",
    github: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 w-full relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Deployments</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">Real-world applications of containerization, CI/CD, and cloud infrastructure.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group rounded-2xl bg-white/[0.02] border border-white/10 overflow-hidden hover:border-cyan-500/30 hover:-translate-y-1 transition-all duration-300"
            >
              {/* Project Mock Visual */}
              <div className="h-48 w-full bg-gradient-to-br from-[#0a0f1c] to-[#010314] relative border-b border-white/5 overflow-hidden flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-500 via-transparent to-transparent group-hover:opacity-40 transition-opacity"></div>
                <Terminal size={48} className="text-gray-500 group-hover:text-cyan-400 transition-colors drop-shadow-[0_0_15px_rgba(0,240,255,0.2)]" />
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3 text-gray-100 group-hover:text-cyan-300 transition-colors">{project.title}</h3>
                <p className="text-gray-400 mb-6 line-clamp-3">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((t) => (
                    <span key={t} className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 border border-white/10 text-cyan-200">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 items-center mt-auto">
                  <a href={project.link} className="flex items-center gap-2 text-sm font-semibold text-white bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 px-4 py-2 rounded-lg transition-colors">
                    <ExternalLink size={16} /> Live Demo
                  </a>
                  <a href={project.github} className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors p-2">
                    <Github size={20} /> Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    role: "DevOps Engineer Intern",
    company: "RipenApps",
    period: "Feb 2026 – Present",
    points: [
      "Deployed and managed scalable applications on AWS (EC2, S3, ECR, IAM) and GCP (Cloud Storage).",
      "Built and configured on-premise infrastructure from scratch, including database setup, SSL configuration, and system-level setup.",
      "Configured Nginx as a reverse proxy for efficient traffic routing and production handling.",
      "Implemented Redis caching, improving application performance and reducing response time.",
      "Containerized applications using Docker for consistent and portable environments.",
      "Designed and automated CI/CD pipelines using GitLab CI/CD.",
      "Troubleshot and managed Linux servers, networking, and deployment issues.",
      "Handled version control and workflows using Git and GitLab."
    ]
  },
  {
    role: "Platform Engineer Intern",
    company: "CYCREW",
    period: "Sep 2025 - Jan 2026",
    points: [
      "Implemented white-labeling solutions via dashboard and API customization, improving branding and user experience.",
      "Engineered CI/CD pipelines using Jenkins and GitHub Actions, reducing deployment time by 40%.",
      "Orchestrated and managed Kubernetes clusters, deploying containerized applications using Docker on AWS (EKS, EC2, S3).",
      "Applied Infrastructure as Code (Terraform) for automated AWS provisioning.",
      "Set up monitoring and observability using Prometheus and Grafana for system performance tracking."
    ]
  },
  {
    role: "Network Engineering Intern",
    company: "BLW",
    period: "Jul 2024 – Aug 2024",
    points: [
      "Configured and optimized network infrastructure using routing and subnetting techniques.",
      "Reduced network latency by 25%, improving performance for cloud-based deployments.",
      "Implemented firewall policies and access controls, enhancing system security and compliance by 30%."
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 w-full relative z-10">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Experience</span>
          </h2>
          <p className="text-gray-400 text-lg">My journey in building and automating infrastructure.</p>
        </div>

        <div className="relative border-l-2 border-cyan-500/20 ml-3 md:ml-6 space-y-12">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="relative pl-8 md:pl-12 group/timeline hover:-translate-y-1 transition-all duration-300"
            >
              {/* Timeline Node */}
              <div className="absolute -left-[11px] top-1.5 w-5 h-5 rounded-full bg-[#010314] border-2 border-cyan-500 group-hover/timeline:shadow-[0_0_15px_rgba(0,240,255,0.8)] transition-shadow duration-300" />

              <div className="glass-card p-6 md:p-8 rounded-2xl border border-white/5 hover:border-cyan-500/30 transition-colors duration-300 relative group overflow-hidden">
                {/* Subtle Hover Gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/0 to-cyan-500/0 group-hover:from-cyan-500/5 group-hover:to-purple-500/5 transition-all duration-500 pointer-events-none" />

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 relative z-10">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-100 group-hover:text-cyan-300 transition-colors">{exp.role}</h3>
                    <div className="flex items-center gap-2 text-cyan-400/80 font-medium mt-1">
                      <Briefcase size={16} />
                      {exp.company}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 text-sm font-mono bg-white/5 px-3 py-1 rounded-full w-fit">
                    <Calendar size={14} />
                    {exp.period}
                  </div>
                </div>

                <ul className="space-y-3 relative z-10">
                  {exp.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-400 leading-relaxed text-sm md:text-base hover:text-gray-300 transition-colors">
                      <span className="text-cyan-500 mt-1.5 text-xs">▹</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

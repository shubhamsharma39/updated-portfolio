"use client";

import { BookOpen, Building2, Calendar, CheckCircle2 } from "lucide-react";

const trainings = [
  {
    title: "DevOps & Cloud Computing Certification",
    institute: "PW Skills (Physics Wallah)",
    location: "Online / Hands-on Industry Training",
    period: "Aug 2024 – June 2025",
    description: "Comprehensive industrial training program focused on modern DevOps practices, cloud infrastructure provisioning, container orchestration, and automated CI/CD workflows.",
    skills: ["AWS", "Docker", "Kubernetes", "Terraform", "CI/CD Pipelines", "Linux & Shell Scripting", "Prometheus & Grafana"],
    points: [
      "Provisioned and managed AWS cloud infrastructure including EC2, S3, IAM, ECR, and VPC configurations.",
      "Built automated CI/CD pipelines using GitHub Actions and GitLab CI/CD for efficient application delivery.",
      "Mastered containerization with Docker and container orchestration using Kubernetes.",
      "Implemented Infrastructure as Code (IaC) principles using Terraform for reproducible environments.",
      "Configured system monitoring, alerting, and observability dashboards using Prometheus and Grafana."
    ]
  }
];

export default function Training() {
  return (
    <section id="training" className="py-24 w-full relative z-10">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-cyan-400 to-purple-500">Training</span>
          </h2>
          <p className="text-gray-400 text-lg">Specialized programs & hands-on skill development</p>
        </div>

        <div className="relative border-l-2 border-amber-500/30 ml-3 md:ml-6 space-y-12">
          {trainings.map((item, idx) => (
            <div
              key={idx}
              className="relative pl-8 md:pl-12 group/timeline hover:-translate-y-1 transition-all duration-300"
            >
              {/* Timeline Node */}
              <div className="absolute -left-[11px] top-1.5 w-5 h-5 rounded-full bg-[#010314] border-2 border-amber-400 group-hover/timeline:shadow-[0_0_15px_rgba(251,191,36,0.8)] transition-shadow duration-300" />

              <div className="glass-card p-6 md:p-8 rounded-2xl border border-white/5 hover:border-amber-400/30 transition-colors duration-300 relative group overflow-hidden">
                {/* Subtle Hover Gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500/0 via-cyan-500/0 to-purple-500/0 group-hover:from-amber-500/5 group-hover:to-cyan-500/5 transition-all duration-500 pointer-events-none" />

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 relative z-10">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-100 group-hover:text-amber-300 transition-colors flex items-center gap-2">
                      <BookOpen size={24} className="text-amber-400" />
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-2 text-amber-300/90 font-medium mt-1">
                      <Building2 size={16} />
                      {item.institute}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 text-sm font-mono bg-white/5 px-3 py-1 rounded-full w-fit border border-amber-500/20">
                    <Calendar size={14} className="text-amber-400" />
                    {item.period}
                  </div>
                </div>

                <p className="text-gray-300 mb-6 text-sm md:text-base leading-relaxed relative z-10 italic">
                  "{item.description}"
                </p>

                {/* Key Skill Badges */}
                <div className="flex flex-wrap gap-2 mb-6 relative z-10">
                  {item.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3 py-1 text-xs font-semibold rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <ul className="space-y-3 relative z-10">
                  {item.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-400 leading-relaxed text-sm md:text-base hover:text-gray-200 transition-colors">
                      <CheckCircle2 size={16} className="text-amber-400 mt-1 flex-shrink-0" />
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

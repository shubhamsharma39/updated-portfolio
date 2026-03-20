"use client";

import { ExternalLink, Github, Code2, Database, Layout, Cloud, Shield, Terminal } from "lucide-react";

const projects = [
  {
    title: "Production-Grade DevOps Pipeline for Todo Application",
    description: "Designed and implemented a production-grade DevOps pipeline for a full-stack Todo application. Containerized services using Docker, automated CI/CD workflows with GitHub Actions, and provisioned scalable infrastructure on AWS using Terraform. Configured deployment automation with Ansible, optimized web serving via Nginx, orchestrated workloads with Kubernetes, and implemented monitoring using Prometheus and Grafana for real-time system observability.",
    tech: ["Linux", "Docker", "GitHub Actions", "AWS", "Ansible", "Nginx", "Terraform", "Kubernetes", "Prometheus", "Grafana"],
    github: "https://github.com/shubhamsharma39/Todos-app",
    icon: <Layout className="w-10 h-10" />,
    image: "/projects/devops_pipeline.png",
    link: ""
  },
  {
    title: "Multi-Tier Bank App with CI/CD",
    description: "Designed and deployed a multi-tier banking application with CI/CD pipeline integration. Automated build, test, and deployment process.",
    tech: ["Linux", "Docker", "GitHub Actions", "AWS", "Nginx"],
    github: "https://github.com/shubhamsharma39/Multi-Tier-BankApp-CI",
    icon: <Shield className="w-10 h-10" />,
    image: "/projects/bank_app.png",
    link: ""
  },
  {
    title: "Terraform Infrastructure Automation",
    description: "Automated cloud infrastructure provisioning using Terraform, following Infrastructure as Code principles.",
    tech: ["Linux", "Terraform", "AWS"],
    github: "https://github.com/shubhamsharma39/terraform-task-",
    icon: <Cloud className="w-10 h-10" />,
    image: "/projects/terraform_infra.png",
    link: ""
  },
  {
    title: "Kubernetes Starter Project",
    description: "Implemented container orchestration using Kubernetes with deployment, services, and scaling configurations.",
    tech: ["Linux", "Kubernetes", "Docker", "YAML"],
    github: "https://github.com/shubhamsharma39/kubestarter",
    icon: <Terminal className="w-10 h-10" />,
    image: "/projects/kubernetes_cluster.png",
    link: ""
  },
  {
    title: "Stock Market Analysis with DevOps Pipeline",
    description: "Developed a Python-based stock market analysis system to process and visualize financial data. Containerized the application using Docker and implemented CI/CD workflows for automated testing and deployment. Deployed and managed the application on AWS infrastructure, ensuring scalability and efficient execution in a production-like environment.",
    tech: ["Linux", "AWS", "Docker", "CI/CD"],
    github: "https://github.com/shubhamsharma39/stock-market-analysis",
    icon: <Database className="w-10 h-10" />,
    image: "/projects/stock_analysis.png",
    link: ""
  },
  {
    title: "Recipedia Application with CI/CD Deployment",
    description: "Built and deployed a dynamic recipe management web application with a focus on DevOps practices. Containerized the application using Docker, automated build and deployment pipelines with GitHub Actions, and deployed on AWS infrastructure to ensure scalability, reliability, and continuous delivery.",
    tech: ["Linux", "AWS", "Docker", "GitHub Actions"],
    github: "https://github.com/shubhamsharma39/Recipedia",
    icon: <Code2 className="w-10 h-10" />,
    image: "/projects/recipedia_app.png",
    link: ""
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 w-full relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Deployments</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Real-world applications of containerization, CI/CD, and cloud infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col md:flex-row rounded-[2rem] bg-white/[0.03] border border-white/10 overflow-hidden hover:border-cyan-500/40 transition-all duration-500"
            >
              {/* Animated Background Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-transparent to-purple-500/0 group-hover:from-cyan-500/5 group-hover:to-purple-500/5 transition-all duration-700 pointer-events-none" />
              
              {/* Project Image Container */}
              <div className="w-full md:w-[45%] h-64 md:h-auto relative overflow-hidden shrink-0">
                <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-transparent z-10 opacity-60 group-hover:opacity-30 transition-opacity duration-500" />
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                
                {/* Floating Icon Badge */}
                <div className="absolute top-6 left-6 z-20 p-3 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10 text-cyan-400 transform -rotate-12 group-hover:rotate-0 transition-transform duration-500">
                  {project.icon}
                </div>
              </div>

              {/* Project Info */}
              <div className="p-8 md:p-10 flex flex-col flex-grow relative z-20">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-gray-100 group-hover:text-cyan-300 transition-colors duration-300 leading-tight">
                    {project.title}
                  </h3>
                </div>
                
                <p className="text-gray-400 mb-8 text-sm md:text-base leading-relaxed line-clamp-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                  {project.tech.map((t) => (
                    <span key={t} className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 hover:bg-cyan-500/20 transition-colors">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 items-center">
                  {project.link && project.link !== "" && project.link !== "#" && (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-semibold text-white bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-xl transition-all duration-300 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transform hover:-translate-y-0.5"
                    >
                      <ExternalLink size={16} /> Live Demo
                    </a>
                  )}
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-white bg-white/5 hover:bg-white/10 px-6 py-3 rounded-xl transition-all duration-300 border border-white/10 hover:border-white/20 transform hover:-translate-y-0.5"
                  >
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

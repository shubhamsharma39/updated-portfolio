"use client";

import { ExternalLink, Award, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const certifications = [
  {
    title: "DevOps Certification",
    provider: "GUVI",
    description: "Completed hands-on DevOps certification covering Docker, CI/CD, cloud fundamentals, and automation practices.",
    link: "/certificates/guvi",
    badge: "Certified"
  },
  {
    title: "Networking Training",
    provider: "BLW",
    description: "Gained practical exposure to networking concepts and workflows.",
    link: "/certificates/blw",
    badge: "Completed"
  },
  {
    title: "DevOps & Cloud Computing Training ",
    provider: "PW Skills",
    description: "Completed structured training focused on DevOps tools, cloud computing, and real-world project implementation.",
    link: "/certificates/pwskills",
    badge: "Completed"
  }
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 w-full relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Certifications & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Training</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
              Validated skills and continuous learning in DevOps, Cloud, and Software Engineering.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative flex flex-col rounded-3xl bg-white/[0.03] border border-white/10 p-8 hover:border-cyan-500/40 transition-all duration-500 overflow-hidden"
            >
              {/* Border Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-transparent to-purple-500/0 group-hover:from-cyan-500/10 group-hover:to-purple-500/10 transition-all duration-700 pointer-events-none" />
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 transform -rotate-6 group-hover:rotate-0 transition-transform duration-500">
                    <Award className="w-8 h-8" />
                  </div>
                  <span className="flex items-center gap-1.5 px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300">
                    <CheckCircle2 size={12} /> {cert.badge}
                  </span>
                </div>

                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-100 group-hover:text-cyan-300 transition-colors duration-300">
                    {cert.title}
                  </h3>
                  <p className="text-cyan-400/80 text-sm font-medium mt-1">
                    {cert.provider}
                  </p>
                </div>

                <p className="text-gray-400 mb-8 text-sm leading-relaxed line-clamp-3">
                  {cert.description}
                </p>

                <div className="mt-auto">
                  <Link
                    href={cert.link}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-white/5 hover:bg-cyan-500 px-6 py-3 rounded-xl transition-all duration-300 border border-white/10 hover:border-cyan-500/50 group/btn"
                  >
                    View Certificate
                    <ExternalLink size={16} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

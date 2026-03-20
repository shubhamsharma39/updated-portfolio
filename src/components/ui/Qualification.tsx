"use client";

import { GraduationCap, School, Calendar } from "lucide-react";

const qualifications = [
  {
    degree: "B.Tech in Computer Science Engineering",
    institution: "Kashi Institute of Technology",
    location: "Varanasi (UP)",
    period: "2021 – 2025",
    description: "Affiliated with AKTU",
  },
  {
    degree: "Higher Secondary (12th Standard)",
    institution: "St. Thomas International School",
    location: "Varanasi (UP)",
    period: "2019 – 2021",
    description: "CBSE Board",
  },
  {
    degree: "High School (10th Standard)",
    institution: "Sant Keena Ram Senior Secondary Public School",
    location: "Robertsganj, Sonbhadra (UP)",
    period: "2017 – 2019",
    description: "CBSE Board",
  }
];

export default function Qualification() {
  return (
    <section id="qualification" className="py-24 w-full relative z-10">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Educational <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-500">Qualification</span>
          </h2>
          <p className="text-gray-400 text-lg">My academic journey</p>
        </div>

        <div className="relative border-l-2 border-purple-500/20 ml-3 md:ml-6 space-y-12">
          {qualifications.map((qual, idx) => (
            <div
              key={idx}
              className="relative pl-8 md:pl-12 group/timeline hover:-translate-y-1 transition-all duration-300"
            >
              {/* Timeline Node */}
              <div className="absolute -left-[11px] top-1.5 w-5 h-5 rounded-full bg-[#010314] border-2 border-purple-500 group-hover/timeline:shadow-[0_0_15px_rgba(168,85,247,0.8)] transition-shadow duration-300" />

              <div className="glass-card p-6 md:p-8 rounded-2xl border border-white/5 hover:border-purple-500/30 transition-colors duration-300 relative group overflow-hidden">
                {/* Subtle Hover Gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/0 to-purple-500/0 group-hover:from-purple-500/5 group-hover:to-cyan-500/5 transition-all duration-500 pointer-events-none" />

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4 relative z-10">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-100 group-hover:text-purple-300 transition-colors">{qual.degree}</h3>
                    <div className="flex items-center gap-2 text-purple-400/80 font-medium mt-1 uppercase tracking-wider text-sm">
                      <School size={16} />
                      {qual.institution}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 text-sm font-mono bg-white/5 px-3 py-1 rounded-full w-fit">
                    <Calendar size={14} />
                    {qual.period}
                  </div>
                </div>

                <div className="relative z-10">
                  <p className="text-gray-400 italic text-sm md:text-base flex items-center gap-2">
                    <span className="text-purple-500 text-lg">🎓</span>
                    {qual.description}
                  </p>
                  <p className="text-gray-500 text-sm mt-2 font-medium">{qual.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

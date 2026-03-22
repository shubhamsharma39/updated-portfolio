"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

const certificatesData: Record<string, { title: string; provider: string; image: string }> = {
  guvi: {
    title: "DevOps Certification",
    provider: "GUVI",
    image: "/assets/certificates/guvi-cert.jpg",
  },
  blw: {
    title: "Networking Training",
    provider: "BLW",
    image: "/assets/certificates/blw-cert.jpg",
  },
  pwskills: {
    title: "DevOps & Cloud Computing Training",
    provider: "PW Skills",
    image: "/assets/certificates/pwskills-cert.jpg",
  },
};

export default function CertificatePage() {
  const params = useParams();
  const id = params?.id as string;
  const certificate = certificatesData[id];

  if (!certificate) {
    return (
      <div className="min-h-screen bg-[#030014] flex flex-col items-center justify-center text-white p-6">
        <h1 className="text-2xl font-bold mb-4">Certificate Not Found</h1>
        <Link 
          href="/" 
          className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
        >
          <ArrowLeft size={20} /> Back to Portfolio
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#030014] text-white flex flex-col items-center py-12 px-6">
      {/* Back Button */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="w-full max-w-5xl mb-8"
      >
        <Link 
          href="/#certifications" 
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300 group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Back to Portfolio
        </Link>
      </motion.div>

      {/* Certificate Content */}
      <div className="flex-grow flex flex-col items-center justify-center w-full max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
            {certificate.title}
          </h1>
          <p className="text-gray-400 text-lg">{certificate.provider}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative w-full rounded-2xl overflow-hidden shadow-2xl shadow-cyan-500/10 border border-white/5 bg-black/40 backdrop-blur-sm"
        >
          <img 
            src={certificate.image} 
            alt={certificate.title}
            className="w-full h-auto object-contain max-h-[80vh] mx-auto"
          />
        </motion.div>
      </div>
    </div>
  );
}

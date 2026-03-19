import Hero from "@/components/ui/Hero";
import Experience from "@/components/ui/Experience";
import Skills from "@/components/ui/Skills";
import Projects from "@/components/ui/Projects";
import PythonSection from "@/components/ui/PythonSection";
import Contact from "@/components/ui/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Experience />
      <Skills />
      <Projects />
      <PythonSection />
      <Contact />
      
      {/* Footer */}
      <footer className="w-full py-8 text-center border-t border-white/5 mt-10 relative z-10 glass">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Shubham Sharma. Built with Next.js & Tailwind CSS.
        </p>
      </footer>
    </>
  );
}

// src/pages/home.tsx
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Experience } from "@/components/experience";
import { Education } from "@/components/education";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { Contact } from "@/components/contact";
import { ScrollToTop } from "@/components/scroll-to-top";

export default function Home() {
  const containerClasses = "container mx-auto px-6";

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-foreground selection:text-background">
      <Navbar />

      <main className="relative z-10">
        <Hero />
        
        <Projects />

        <Experience />

        <Education />

        <Skills />

        <Contact />
      </main>

      <footer className="py-20 border-t border-border/50 bg-background text-center">
        <div className={containerClasses}>
          <h2 className="text-[10px] tracking-[0.5em] uppercase font-bold text-foreground/20 mb-8">
            Bhawanshi Dosi — {new Date().getFullYear()}
          </h2>
          <p className="text-[10px] tracking-[0.2em] uppercase font-bold opacity-40">
            Designed for the future. Built with passion.
          </p>
        </div>
      </footer>

      <ScrollToTop />
    </div>
  );
}
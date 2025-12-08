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
  const sectionClasses = "py-20 md:py-24 lg:py-28";
  const containerClasses = "container mx-auto px-4 md:px-6";
  
  return (
    <div className="min-h-screen bg-background/50 text-foreground overflow-x-hidden selection:bg-primary/20 selection:text-primary">
      <Navbar />
      <main className="relative z-10">
        <section id="home" className={sectionClasses}>
          <Hero />
        </section>
        
        <section id="education" className={`${sectionClasses} bg-background/80 backdrop-blur-sm`}>
          <div className={containerClasses}>
            <Education />
          </div>
        </section>
        
        <section id="projects" className={sectionClasses}>
          <div className={containerClasses}>
            <Projects />
          </div>
        </section>
        
        <section id="experience" className={`${sectionClasses} bg-background/80 backdrop-blur-sm`}>
          <div className={containerClasses}>
            <Experience />
          </div>
        </section>
        
        <section id="skills" className={sectionClasses}>
          <div className={containerClasses}>
            <Skills />
          </div>
        </section>
        
        <section id="contact" className={`${sectionClasses} bg-background/80 backdrop-blur-sm`}>
          <div className={containerClasses}>
            <Contact />
          </div>
        </section>
      </main>
      
      <footer className="py-8 text-center text-sm text-muted-foreground border-t border-border/50 bg-background/80 backdrop-blur-sm">
        <div className={containerClasses}>
          <p>© {new Date().getFullYear()} Bhawanshi Dosi. All rights reserved.</p>
        </div>
      </footer>
      
      <ScrollToTop />
    </div>
  );
}
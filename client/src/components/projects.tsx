import { useRef } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

interface Project {
  title: string;
  description: string;
  link: string;
  image?: string;
  gradient?: string;
}

const projects: Project[] = [
  {
    title: "Shalini Luxe",
    description: "Premium Ecommerce Experience - Curated for the discerning few. A high-end product showcase with a focus on luxury lifestyle and performance electronics.",
    link: "https://shalinitech.netlify.app/",
    image: "/images/projects/shalini-luxe.png",
    gradient: "from-zinc-900 via-zinc-800 to-black"
  },
  {
    title: "Certificate Generator",
    description: "A minimal, nature-inspired certificate studio. Generate professional certificates for LinkedIn and Udemy instantly by filling in details once.",
    link: "https://bhavicertificategenerator.netlify.app/",
    image: "/images/projects/certificate-generator.png",
    gradient: "from-emerald-500/20 to-teal-500/20"
  },
  {
    title: "Revenue Landing Page",
    description: "AI-powered ad optimization platform. Maximize ad revenue by up to 40% with real-time analytics and enterprise-grade security.",
    link: "https://revenue-landingpage.netlify.app/",
    image: "/images/projects/revenue-landing-page.png",
    gradient: "from-blue-600/20 to-indigo-600/20"
  },
  {
    title: "Women's Lifestyle",
    description: "A premium fashion and lifestyle portal featuring curated summer collections and trendy elegance.",
    link: "https://womenslifestyle.netlify.app/",
    image: "/images/projects/womens-lifestyle.png",
    gradient: "from-rose-400/20 to-pink-400/20"
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-32 bg-background border-t border-border/50 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-32"
        >
          <h2 className="text-[10px] tracking-[0.4em] uppercase font-bold text-foreground/40 mb-4">Selected Work</h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">Portfolio</h3>
        </motion.div>

        <div className="space-y-48">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: "easeOut" }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-24 items-center`}
            >
              {/* Cinematic Thumbnail */}
              <div className="relative w-full lg:w-3/5 group">
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <div className="relative aspect-[16/10] oval-mask overflow-hidden bg-muted transition-transform duration-700 group-hover:scale-[1.02] cinematic-shadow">
                    {project.image ? (
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                      />
                    ) : (
                      <div className={`absolute inset-0 bg-gradient-to-tr ${project.gradient || 'from-muted to-background'} flex items-center justify-center p-12 text-center`}>
                         <span className="text-4xl md:text-5xl font-black tracking-[0.2em] text-outline opacity-20 uppercase select-none leading-tight">
                           {project.title}
                         </span>
                         <div className="absolute inset-0 flex items-center justify-center opacity-[0.03]">
                            <span className="text-[120px] font-black tracking-tighter uppercase whitespace-nowrap">
                              {project.title.split(' ')[0]}
                            </span>
                         </div>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-foreground/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </a>
              </div>

              {/* Project Info */}
              <div className="w-full lg:w-2/5">
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <h4 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
                    {project.title}
                  </h4>
                  <p className="text-lg text-foreground/60 leading-relaxed mb-10 max-w-md">
                    {project.description}
                  </p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-4 text-xs tracking-[0.2em] uppercase font-bold border-b border-foreground/20 pb-2 hover:border-foreground transition-colors group"
                  >
                    Launch Case Study
                    <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </a>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

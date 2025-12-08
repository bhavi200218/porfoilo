"use client";

import { motion } from "framer-motion";
import { Briefcase, Code, Cpu, Database, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useState, ReactNode } from 'react';

// Define types
interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string[];
  icon: ReactNode;
  tech: string[];
}

const experiences: ExperienceItem[] = [
  {
    role: "Full Stack Development Intern",
    company: "Internshala Trainings",
    period: "12/2023 - 07/2024",
    description: [
      "Completed comprehensive Full Stack Development internship.",
      "Hands-on with HTML, CSS, JS, React.js, Node.js, Express, MongoDB.",
      "Developed and deployed fully functional web applications.",
      "Collaborated in a team environment working on live projects."
    ],
    icon: <Code className="h-5 w-5" />,
    tech: ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB"]
  },
  {
    role: "Artificial Intelligence Intern",
    company: "CodSoft",
    period: "09/2023 - 10/2023",
    description: [
      "Developed AI and ML models to solve real-world problems.",
      "Implemented algorithms in NLP, computer vision, and data analysis.",
      "Conducted data preprocessing and model optimization."
    ],
    icon: <Cpu className="h-5 w-5" />,
    tech: ["Python", "TensorFlow", "NLP", "Computer Vision"]
  },
  {
    role: "C++ Programming Intern",
    company: "InternPe",
    period: "06/2023 - 07/2023",
    description: [
      "Developed and optimized C++ programs for performance.",
      "Adhered to best practices in C++ development and debugging.",
      "Gained hands-on experience with modern C++ features."
    ],
    icon: <Database className="h-5 w-5" />,
    tech: ["C++", "Data Structures", "Algorithms"]
  },
];

export function Experience() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: 'start',
    skipSnaps: false,
    dragFree: true
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [isHovered, setIsHovered] = useState(false);

  const scrollTo = useCallback((index: number) => {
    if (!emblaApi) return;
    emblaApi.scrollTo(index);
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  // Auto-scroll functionality
  useEffect(() => {
    if (!emblaApi || isHovered) return;

    const autoScroll = setInterval(() => {
      emblaApi.scrollNext();
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(autoScroll);
  }, [emblaApi, isHovered]);

  return (
    <section id="experience" className="py-16 bg-muted/30 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Work Experience</h2>
          <p className="text-muted-foreground/80 max-w-2xl mx-auto">
            My professional journey and the roles that shaped my career.
          </p>
        </motion.div>

        <div 
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -mx-4">
              {experiences.map((exp: ExperienceItem, index: number) => (
                <div key={index} className="flex-[0_0_100%] px-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="group relative h-full flex justify-center"
                  >
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-xl opacity-0 group-hover:opacity-100 blur transition duration-500 group-hover:duration-200" />
                    <div className="relative bg-card/80 backdrop-blur-sm p-6 rounded-xl border border-border hover:border-primary/30 transition-all duration-300 h-full w-full max-w-2xl mx-auto shadow-lg">
                      <div className="flex items-start gap-6">
                        <div className="p-3 rounded-xl bg-primary/10 text-primary mt-1 flex-shrink-0">
                          {exp.icon}
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                            <div>
                              <h3 className="text-lg font-semibold text-foreground">{exp.role}</h3>
                              <p className="text-primary text-sm font-medium">{exp.company}</p>
                            </div>
                            <span className="text-sm text-muted-foreground">{exp.period}</span>
                          </div>
                          
                          <ul className="mt-4 space-y-2">
                            {exp.description.map((item: string, i: number) => (
                              <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm leading-relaxed">
                                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary/70 flex-shrink-0" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      
                      <div className="mt-4 pt-4 border-t border-border/50 flex flex-wrap gap-2">
                        {exp.tech.map((tech: string, i: number) => (
                          <span 
                            key={i}
                            className="text-xs bg-secondary/30 text-foreground/80 px-3 py-1 rounded-full border border-border/30 hover:bg-primary/10 hover:border-primary/30 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-center gap-4 mt-6">
            <button 
              onClick={() => emblaApi?.scrollPrev()}
              className="p-2 rounded-full bg-card border border-border hover:bg-accent transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex items-center gap-2">
              {scrollSnaps.map((_, idx: number) => (
                <button
                  key={idx}
                  onClick={() => scrollTo(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    idx === selectedIndex ? 'bg-primary' : 'bg-border'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
            <button 
              onClick={() => emblaApi?.scrollNext()}
              className="p-2 rounded-full bg-card border border-border hover:bg-accent transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
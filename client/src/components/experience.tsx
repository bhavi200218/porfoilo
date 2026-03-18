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
      "Completed a comprehensive Full Stack Development internship, focusing on both front-end and back-end technologies.",
      "Gained hands-on experience with key technologies including HTML, CSS, JavaScript, React.js, Node.js, Express, and MongoDB.",
      "Developed and deployed fully functional web applications, following best practices in coding, testing, and debugging.",
      "Collaborated in a team environment, working on live projects, and enhancing problem-solving skills.",
      "Strengthened understanding of RESTful APIs, database management, and version control using Git."
    ],
    icon: <Code className="h-5 w-5" />,
    tech: ["React.js", "Node.js", "Express", "MongoDB", "REST API", "Git"]
  },
  {
    role: "Artificial Intelligence Intern",
    company: "CodSoft",
    period: "09/2023 - 10/2023",
    description: [
      "Developed AI and machine learning models to solve real-world problems, enhancing prediction accuracy and performance.",
      "Collaborated with a team to design and implement algorithms in areas such as natural language processing, computer vision, and data analysis.",
      "Conducted data preprocessing, feature engineering, and model optimization to improve system efficiency.",
      "Participated in code reviews, project planning, and documentation, ensuring adherence to best practices in AI development."
    ],
    icon: <Cpu className="h-5 w-5" />,
    tech: ["Python", "TensorFlow", "NLP", "Computer Vision"]
  },
  {
    role: "C++ Programming Intern",
    company: "InternPe",
    period: "06/2023 - 07/2023",
    description: [
      "Developed and optimized C++ programs for various projects, focusing on improving performance and code efficiency.",
      "Collaborated with a team to design, implement, and test software solutions, adhering to best practices in C++ development.",
      "Assisted in debugging and troubleshooting existing codebases, contributing to the resolution of critical software issues.",
      "Gained hands-on experience with modern C++ features and tools, enhancing proficiency in object-oriented programming, data structures, and algorithms."
    ],
    icon: <Database className="h-5 w-5" />,
    tech: ["C++", "OOP", "Data Structures", "Algorithms"]
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-40 bg-background relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10" />
      
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-32 flex justify-between items-end"
        >
          <div>
            <h2 className="text-[10px] tracking-[0.5em] uppercase font-black text-foreground/30 mb-6">Professional Path</h2>
            <h3 className="text-5xl md:text-7xl font-black tracking-tighter leading-none">Experience</h3>
          </div>
          <div className="hidden md:block">
             <span className="text-[100px] font-black opacity-[0.1] select-none leading-none">PATHWAY</span>
          </div>
        </motion.div>

        <div className="space-y-40">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: index * 0.1 }}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 md:gap-24 items-start`}
            >
              <div className="w-full md:w-1/3 relative">
                <div className="absolute -left-4 top-0 w-1 h-full bg-foreground/10 hidden md:block" />
                <span className="text-4xl md:text-6xl font-black tracking-tighter opacity-10 mb-4 block">
                  {exp.period.split(' - ')[0].split('/')[1]}
                </span>
                <h4 className="text-3xl font-black mb-2 tracking-tight">{exp.role}</h4>
                <p className="text-primary font-bold tracking-[0.3em] text-[11px] uppercase">
                  {exp.company}
                </p>
              </div>
              
              <div className="w-full md:w-2/3">
                <div className="space-y-6 mb-12">
                  {exp.description.map((item, i) => (
                    <p key={i} className="text-lg text-foreground/70 leading-relaxed font-medium">
                      {item}
                    </p>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  {exp.tech.map((tech, i) => (
                    <span 
                      key={i}
                      className="text-[10px] tracking-[0.2em] uppercase font-bold border border-foreground/10 px-4 py-2 bg-foreground/[0.03] rounded-sm hover:bg-foreground/5 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
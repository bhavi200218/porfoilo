// src/components/education.tsx
"use client";

import { motion } from "framer-motion";
import { GraduationCap, BookOpen } from "lucide-react";

const education = [
  {
    degree: "Bachelor's of Computer Application",
    institution: "Computer • Ahmedabad, Gujarat",
    year: "07/2024",
  },
  {
    degree: "Senior Secondary",
    institution: "CBSE Board • Banswara, Rajasthan",
    year: "06/2019",
  },
  {
    degree: "Secondary",
    institution: "CBSE Board • Banswara, Rajasthan",
    year: "04/2017",
  },
];

export function Education() {
  return (
    <section id="education" className="py-40 bg-background relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-foreground/5 to-transparent -translate-y-1/2" />
      
      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-40 text-center"
        >
          <h2 className="text-[12px] tracking-[0.8em] uppercase font-black text-primary mb-8">Academic</h2>
          <h3 className="text-6xl md:text-8xl font-black tracking-tighter leading-none">Education Legacy</h3>
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-32">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 md:gap-24`}
            >
              <div className="w-full md:w-1/2 relative group">
                <div className="absolute -inset-4 bg-primary/5 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative p-12 md:p-16 bg-foreground/[0.02] border border-foreground/5 rounded-[4rem] backdrop-blur-3xl overflow-hidden hover:border-primary/20 transition-all duration-700">
                  <span className="text-6xl md:text-8xl font-black absolute -right-4 -top-4 opacity-[0.03] select-none">
                    0{index + 1}
                  </span>
                  <span className="text-sm tracking-[0.4em] font-black text-primary mb-10 block">
                    {edu.year}
                  </span>
                  <h4 className="text-3xl md:text-5xl font-black mb-6 tracking-tighter">
                    {edu.degree}
                  </h4>
                  <p className="text-xl text-foreground/40 font-bold tracking-tight uppercase leading-relaxed max-w-[300px]">
                    {edu.institution}
                  </p>
                </div>
              </div>
              <div className="hidden md:block w-px h-24 bg-foreground/10" />
              <div className="w-full md:w-1/2 flex items-center justify-center">
                 <div className="w-3 h-3 rounded-full bg-primary shadow-[0_0_20px_rgba(var(--primary),0.5)]" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
// src/components/education.tsx
"use client";

import { motion } from "framer-motion";
import { GraduationCap, BookOpen } from "lucide-react";

const education = [
  {
    degree: "Bachelor's of Computer Application",
    institution: "Ahmedabad, Gujarat",
    year: "Graduated",
    icon: <BookOpen className="h-5 w-5" />
  },
  {
    degree: "Senior Secondary",
    institution: "CBSE Board, Banswara, Rajasthan",
    year: "Completed",
    icon: <GraduationCap className="h-5 w-5" />
  },
];

export function Education() {
  return (
    <section id="education" className="py-20 bg-background relative overflow-hidden">
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
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Education</h2>
          <p className="text-muted-foreground/80 max-w-2xl mx-auto">
            My academic journey that laid the foundation for my career.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-linear-to-r from-primary/20 to-blue-500/20 rounded-xl opacity-0 group-hover:opacity-100 blur transition duration-500 group-hover:duration-200" />
              <div className="relative bg-card/70 backdrop-blur-sm p-6 rounded-xl border border-border hover:border-primary/30 transition-all duration-300 h-full">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary mt-1">
                    {edu.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground">{edu.degree}</h3>
                    <p className="text-muted-foreground mt-1">{edu.institution}</p>
                    <span className="inline-block mt-3 text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">
                      {edu.year}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
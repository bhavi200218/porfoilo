import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

const experiences = [
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
  },
];

const education = [
  {
    degree: "Bachelor's of Computer Application",
    institution: "Computer • Ahemdabad , Gujarat",
    year: "Graduated",
  },
  {
    degree: "Senior Secondary",
    institution: "CBSE Board • Banswara, Rajasthan",
    year: "Completed",
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-secondary/30 relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">Experience & Education</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey and academic background that shaped my skills.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience Column */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-xl bg-primary/10 text-primary">
                <Briefcase className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold font-heading">Work Experience</h3>
            </div>

            <div className="space-y-8 relative border-l-2 border-border ml-3 pl-8 md:pl-10 pb-4">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  <span className="absolute -left-[41px] md:-left-[49px] top-0 h-5 w-5 rounded-full border-4 border-background bg-primary" />
                  
                  <div className="glass-card p-6 md:p-8 hover:bg-card/50 transition-colors">
                    <span className="text-sm font-semibold text-primary mb-2 block">{exp.period}</span>
                    <h4 className="text-xl font-bold mb-1">{exp.role}</h4>
                    <h5 className="text-muted-foreground mb-4">{exp.company}</h5>
                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary/50 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-xl bg-primary/10 text-primary">
                <GraduationCap className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold font-heading">Education</h3>
            </div>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-card p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4"
                >
                  <div>
                    <h4 className="text-lg font-bold mb-1">{edu.degree}</h4>
                    <p className="text-muted-foreground">{edu.institution}</p>
                  </div>
                  <span className="text-sm font-semibold px-3 py-1 rounded-full bg-secondary text-secondary-foreground w-fit">
                    {edu.year}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

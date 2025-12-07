import { motion } from "framer-motion";
import { Code2, Database, Layout, Server, GitBranch, Terminal, Languages } from "lucide-react";

const skills = [
  {
    category: "Frontend",
    icon: Layout,
    items: ["HTML5", "CSS3", "JavaScript", "React.js", "Next.js", "Bootstrap", "Tailwind CSS"],
  },
  {
    category: "Backend",
    icon: Server,
    items: ["Node.js", "Express.js"],
  },
  {
    category: "Database",
    icon: Database,
    items: ["MongoDB", "MySQL"],
  },
  {
    category: "Tools & Version Control",
    icon: GitBranch,
    items: ["Git", "GitHub", "VS Code"],
  },
  {
    category: "Programming",
    icon: Code2,
    items: ["C++", "JavaScript", "Python (Basic)"],
  },
  {
    category: "Languages",
    icon: Languages,
    items: ["English", "Hindi"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Abstract decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">Technical Skills</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My technical proficiency and tools I use to build robust applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-0.5 rounded-xl bg-gradient-to-br from-primary/20 via-background to-background hover:from-primary/30 hover:via-background/90 hover:to-background/90 transition-all duration-300 hover:shadow-lg"
            >
              <div className="absolute inset-0.5 rounded-lg bg-background/80 backdrop-blur-sm group-hover:bg-background/90 transition-colors duration-300" />
              <div className="relative z-10 p-6 md:p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-purple-500/20 text-primary ring-1 ring-primary/20 group-hover:ring-primary/40 transition-all duration-300">
                    <skillGroup.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold font-heading text-foreground group-hover:text-primary/90 transition-colors duration-300">
                    {skillGroup.category}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 rounded-md bg-background/70 border border-border/50 text-sm font-medium text-foreground/90 hover:bg-background hover:border-primary/50 hover:text-primary transition-all duration-200 cursor-default shadow-sm"
                    >
                      {item}
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

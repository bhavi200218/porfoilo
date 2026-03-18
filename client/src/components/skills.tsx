import { motion } from "framer-motion";
import { Code2, Database, Layout, Server, GitBranch, Terminal, Languages } from "lucide-react";

const skills = [
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "Tailwind CSS", "Bootstrap", "HTML5", "CSS3", "JavaScript"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "RESTful APIs", "SaaS Architectures"],
  },
  {
    category: "Database",
    items: ["MongoDB", "MySQL", "PostgreSQL"],
  },
  {
    category: "Programming",
    items: ["C++", "Python (Basic)", "Data Structures", "Algorithms"],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "VS Code", "Postman", "Vercel"],
  },
  {
    category: "Languages",
    items: ["English", "Hindi"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-40 bg-background relative border-y border-foreground/5 overflow-hidden">
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary/10 rounded-full blur-[150px]" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-[150px]" />

      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-40 flex flex-col md:flex-row justify-between items-end gap-12"
        >
          <div className="max-w-2xl">
            <h2 className="text-[12px] tracking-[0.8em] uppercase font-black text-primary mb-8">Capabilities</h2>
            <h3 className="text-6xl md:text-8xl font-black tracking-tighter leading-none">Technical Ecosystem</h3>
          </div>
          <p className="text-xl text-foreground/40 font-medium max-w-[300px] leading-relaxed">
             A curated selection of technologies crafted for the modern web.
          </p>
        </motion.div>
 
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skills.map((skillGroup, index) => {
            const icons = [<Layout key="1"/>, <Server key="2"/>, <Database key="3"/>, <Code2 key="4"/>, <Terminal key="5"/>, <Languages key="6"/>];
            return (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`group p-12 bg-foreground/[0.02] border border-foreground/5 rounded-[3rem] backdrop-blur-xl hover:bg-foreground/[0.04] hover:border-primary/20 transition-all duration-700 ${
                  index === 0 || index === 4 ? 'md:col-span-2' : ''
                }`}
              >
                <div className="flex justify-between items-start mb-16">
                   <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-500">
                      {icons[index % icons.length]}
                   </div>
                   <span className="text-[100px] font-black opacity-[0.02] absolute right-8 top-0 group-hover:opacity-[0.04] transition-opacity">
                      {index + 1}
                   </span>
                </div>

                <h4 className="text-[12px] tracking-[0.5em] uppercase font-black mb-10 text-primary">
                  {skillGroup.category}
                </h4>
                
                <div className="flex flex-wrap gap-x-8 gap-y-6">
                  {skillGroup.items.map((item) => (
                    <span
                      key={item}
                      className="text-2xl md:text-3xl font-black tracking-tighter text-foreground/70 hover:text-foreground transition-all flex items-center gap-2 group/item"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/20 group-hover/item:bg-primary transition-colors" />
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

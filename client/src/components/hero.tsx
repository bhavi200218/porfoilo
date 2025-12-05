import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FileDown, Github, Linkedin, Mail } from "lucide-react";
import heroBg from "@assets/generated_images/abstract_modern_dark_tech_background_with_neon_gradients.png";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Background"
          className="w-full h-full object-cover opacity-30 dark:opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Available for Work
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold tracking-tight"
          >
            Hello, I'm <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-400 to-blue-500">
              Bhawanshi Dosi
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed"
          >
            A passionate Full Stack Developer crafting modern, high-performance web applications. 
            Turning complex problems into elegant interface designs.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Button 
              size="lg" 
              className="rounded-full text-base h-12 px-8 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              <FileDown className="mr-2 h-5 w-5" />
              Get Resume
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="rounded-full text-base h-12 px-8 border-primary/20 hover:bg-primary/5"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Contact Me
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center gap-6 pt-8"
          >
            {[
              { icon: Github, href: "#", label: "GitHub" },
              { icon: Linkedin, href: "#", label: "LinkedIn" },
              { icon: Mail, href: "mailto:bhavid2002@gmail.com", label: "Email" },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="text-muted-foreground hover:text-primary transition-colors transform hover:scale-110 duration-200"
                aria-label={social.label}
              >
                <social.icon className="h-6 w-6" />
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FileDown, Github, Linkedin, Mail, Code, Smartphone, Server } from "lucide-react";

export function Hero() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadCV = () => {
    // Create a temporary anchor element
    const link = document.createElement('a');
    link.href = '/cv/BHWANSHI DOSI RESUME.pdf'; // Path to your CV file
    link.download = 'Bhawanshi-Dosi-Resume.pdf'; // This will be the filename when downloaded
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="relative min-h-[70vh] flex items-center justify-center pt-32 pb-8 overflow-hidden bg-linear-to-br from-background to-muted/20">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto space-y-6">

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
          >
            Hi, I'm <span className="text-primary">Bhawanshi Dosi</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed"
          >
            Full-stack developer passionate about creating exceptional digital experiences using modern web technologies.
          </motion.p>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="bg-card p-6 rounded-xl border border-border/50 hover:border-primary/50 transition-all">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                <Code className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Web Development</h3>
              <p className="text-muted-foreground text-sm">Custom websites and web applications built with modern technologies</p>
            </div>

            <div className="bg-card p-6 rounded-xl border border-border/50 hover:border-primary/50 transition-all">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                <Smartphone className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Responsive Design</h3>
              <p className="text-muted-foreground text-sm">Beautiful designs that work perfectly on all devices</p>
            </div>

            <div className="bg-card p-6 rounded-xl border border-border/50 hover:border-primary/50 transition-all">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                <Server className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Backend Solutions</h3>
              <p className="text-muted-foreground text-sm">Robust server-side solutions and API development</p>
            </div>
          </motion.div>

          <motion.div 
            className="flex flex-wrap justify-center gap-4 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button 
              size="lg" 
              className="gap-2"
              onClick={scrollToContact}
            >
              <Mail className="w-4 h-4" />
              Get in Touch
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="gap-2"
              onClick={handleDownloadCV}
            >
              <FileDown className="w-4 h-4" />
              Download CV
            </Button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
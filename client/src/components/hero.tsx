import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FileDown, Mail, Code, Smartphone, Server, MousePointerClick, ArrowRight } from "lucide-react";
import { FloatingElements } from "./floating-elements";
import { useRef } from "react";
import React from "react";

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

  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  return (
    <section 
      ref={targetRef}
      id="home" 
      className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center pt-4 pb-12 overflow-hidden bg-gradient-to-br from-background to-muted/10"
      style={{ perspective: '1000px' }}
    >
      <FloatingElements />
      
      {/* Animated background gradient */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <motion.div 
          className="flex flex-col items-center text-center max-w-5xl mx-auto space-y-6"
          style={{ opacity, y, scale }}
        >

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative inline-block"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-500">Bhawanshi Dosi</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed p-6 rounded-lg border border-border/50 bg-card">
              Crafting exceptional digital experiences with modern web technologies.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 w-full max-w-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {[
              {
                icon: <Code className="w-6 h-6 text-purple-500" />,
                title: "Web Development",
                description: "Custom websites and web applications built with modern technologies",
                color: "from-purple-500/20 to-purple-500/5",
                border: "border-purple-500/20"
              },
              {
                icon: <Smartphone className="w-6 h-6 text-pink-500" />,
                title: "Responsive Design",
                description: "Beautiful designs that work perfectly on all devices",
                color: "from-pink-500/20 to-pink-500/5",
                border: "border-pink-500/20"
              },
              {
                icon: <Server className="w-6 h-6 text-blue-500" />,
                title: "Backend Solutions",
                description: "Robust server-side solutions and API development",
                color: "from-blue-500/20 to-blue-500/5",
                border: "border-blue-500/20"
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className={`rounded-xl border ${item.border} hover:shadow-md transition-all duration-300 group`}
                whileHover={{ y: -5 }}
              >
                <div className="bg-card p-6 rounded-xl h-full">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 mx-auto transition-transform group-hover:scale-110`}>
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <MousePointerClick className="w-4 h-4 text-muted-foreground" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="flex flex-wrap justify-center gap-6 mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative group"
            >
              <Button 
                size="lg" 
                className="relative gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
                onClick={scrollToContact}
              >
                <Mail className="w-4 h-4" />
                Get in Touch
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative group"
            >
              <Button 
                size="lg" 
                variant="outline"
                className="relative gap-2 bg-background/50 backdrop-blur-sm border-2 border-border/50 hover:border-purple-500/50"
                onClick={handleDownloadCV}
              >
                <FileDown className="w-4 h-4" />
                Download CV
              </Button>
            </motion.div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
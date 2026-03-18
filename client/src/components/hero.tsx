import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FileDown, Mail, Code, Smartphone, Server, MousePointerClick, ArrowRight } from "lucide-react";
import { FloatingElements } from "./floating-elements";
import { useRef } from "react";
import React from "react";

export function Hero() {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/cv/BHWANSHI DOSI RESUME.pdf';
    link.download = 'Bhawanshi-Dosi-Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const targetRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={targetRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-20"
    >
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="order-2 lg:order-1"
        >
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ delay: 0.5 }}
            className="text-[10px] tracking-[0.4em] uppercase font-bold mb-6"
          >
            Full Stack Developer Artist
          </motion.p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tighter mb-8 max-w-[12ch]">
            {"Crafting Digital Stories Through Code.".split(" ").map((word, i) => (
              <span key={i} className="inline-block overflow-hidden mr-4">
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-block"
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h1>
          <p className="text-lg md:text-xl text-foreground/60 max-w-lg mb-12 leading-relaxed">
            I'm Bhawanshi Dosi, a developer focused on building immersive, 
            high-performance web experiences that blend art with technology.
          </p>

          <div className="flex items-center gap-12">
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="group flex items-center gap-4 text-xs tracking-[0.2em] uppercase font-bold"
            >
              View Work 
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="h-4 w-4" />
              </motion.div>
            </button>
            <button
              onClick={handleDownloadCV}
              className="text-[10px] tracking-[0.2em] uppercase font-bold border-b border-foreground/20 pb-1 hover:border-foreground transition-colors"
            >
              Resume
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="order-1 lg:order-2 relative flex justify-center lg:justify-end group h-full items-center"
        >
          {/* Layered Branding Background - Centered and Scaleable */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.05] dark:opacity-[0.1] select-none overflow-hidden z-0">
            <h2 className="text-[18vw] font-black tracking-tighter uppercase leading-none transform translate-y-[-5%] mix-blend-difference">
              BHAWANSHI
            </h2>
          </div>

          <div className="relative w-full max-w-[480px] aspect-[4/5] overflow-hidden cinematic-shadow rounded-[3rem] border border-foreground/5 bg-muted z-10">
            <motion.div 
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 3, ease: "easeOut" }}
              className="absolute inset-0"
            >
              <img 
                src="/images/bhawanshi-hero.jpg" 
                alt="Bhawanshi Dosi" 
                className="w-full h-full object-cover grayscale contrast-[1.1] brightness-[1.1] group-hover:grayscale-0 transition-all duration-1000"
              />
              {/* Removed gradient for cleaner light theme appearance */}
            </motion.div>

            {/* Grain & Dust Overlay */}
            <div className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-30 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat" />
            
            {/* Branding Signature Overlay */}
            <div className="absolute inset-x-0 bottom-8 flex flex-col items-center justify-end pointer-events-none">
               <motion.div
                 initial={{ opacity: 0, scale: 0.9 }}
                 animate={{ opacity: 1, scale: 1 }}
                 transition={{ delay: 1.2, duration: 1 }}
                 className="px-6 py-2 bg-background/20 backdrop-blur-xl rounded-full border border-white/20 shadow-2xl"
               >
                 <span className="text-[11px] tracking-[0.5em] uppercase font-black text-white">
                   BHAWANSHI DOSI
                 </span>
               </motion.div>
            </div>
          </div>
          
          {/* Aesthetic Decorative Element */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute -top-12 -right-12 w-48 h-48 border border-foreground/5 rounded-full border-dashed hidden xl:block"
          />
        </motion.div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-12 bg-foreground/20"
        />
      </div>
    </section>
  );
}
import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Moon, Sun, Menu, X, Github, Linkedin, FileDown } from "lucide-react";
import { TypingText } from "./typing-text";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Portfolio", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? "h-16 bg-background/80 backdrop-blur-md border-b border-border/50" : "h-24 bg-transparent"
    }`}>
      <div className="container mx-auto px-6 h-full flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-[0.2em] uppercase text-foreground">
          Bhawanshi Dosi
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-12">
          <div className="flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-[10px] tracking-[0.3em] uppercase font-medium text-foreground/60 hover:text-foreground transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-6">
            {/* Theme Toggle inspired by fsxa.in switch */}
            <div 
              onClick={toggleTheme}
              className="relative w-12 h-6 rounded-full border border-foreground/20 cursor-pointer flex items-center px-1 bg-background transition-colors hover:border-foreground/40"
            >
              <motion.div 
                animate={{ x: theme === "dark" ? 24 : 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className="w-4 h-4 rounded-full bg-foreground"
              />
              <span className={`absolute -top-6 left-0 text-[8px] tracking-[0.2em] uppercase transition-opacity ${theme === "light" ? "opacity-100" : "opacity-30"}`}>Light</span>
              <span className={`absolute -top-6 right-0 text-[8px] tracking-[0.2em] uppercase transition-opacity ${theme === "dark" ? "opacity-100" : "opacity-30"}`}>Dark</span>
            </div>

            <a
              href="https://github.com/bhawanshi2002"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-foreground transition-colors"
            >
              <Github className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-foreground p-2"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-background border-b border-border p-8 md:hidden"
          >
            <div className="flex flex-col space-y-6 items-center">
              {navLinks.map((link) => (
                <Link
                  key={`mobile-${link.name}`}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="text-xs tracking-[0.3em] uppercase font-medium text-foreground/60 hover:text-foreground"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-border w-full flex justify-center gap-8">
                <button onClick={toggleTheme} className="text-[10px] tracking-[0.2em] uppercase">
                  Switch to {theme === "dark" ? "Light" : "Dark"}
                </button>
                <a href="https://github.com/bhawanshi2002" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

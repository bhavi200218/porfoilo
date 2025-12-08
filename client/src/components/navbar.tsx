import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Moon, Sun, Menu, X, Github, Linkedin, FileDown } from "lucide-react";
import { TypingText } from "./typing-text";
import { useTheme } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Education", href: "#education" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
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
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className={`w-full px-4 sm:px-6 lg:px-8 ${
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-border/50" : ""
      }`}>
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="text-2xl font-extrabold text-primary tracking-tight pt-1 hover:opacity-80 transition-opacity">
            Freelancer
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-base font-semibold text-foreground/90 hover:text-primary transition-colors py-1"
              >
                {link.name}
              </Link>
            ))}
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleTheme}
                className="rounded-full h-9 w-9 hover:bg-primary/10 hover:text-primary transition-colors"
              >
                {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
              <a
                href="https://www.linkedin.com/in/bhawanshi-dosi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/80 hover:text-primary transition-colors pt-1"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 md:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="text-foreground/80 hover:text-primary hover:bg-accent/50 h-9 w-9"
              onClick={toggleTheme}
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground focus:outline-none p-1.5 hover:bg-accent/50 rounded-full"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border fixed inset-0 z-40 pt-16 px-4 overflow-y-auto"
          >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="text-lg font-medium py-2 text-foreground/80 hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="flex flex-col gap-4 py-4">
                {navLinks.map((link) => (
                  <a
                    key={`mobile-${link.name}`}
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="text-base font-medium py-2 px-4 -mx-4 text-foreground/80 hover:text-primary hover:bg-accent/50 transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
                <div className="flex items-center gap-4 pt-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={toggleTheme}
                    className="rounded-full hover:bg-primary/10 hover:text-primary transition-colors"
                  >
                    {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                  </Button>
                  <a
                    href="https://www.linkedin.com/in/bhawanshi-dosi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 text-foreground/80 hover:text-primary hover:bg-accent/50 rounded-lg transition-colors text-sm border border-border"
                  >
                    <Linkedin className="h-4 w-4" />
                    <span>Connect on LinkedIn</span>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
    </nav>
  );
}

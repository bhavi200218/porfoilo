import { useRef } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";

import foodAppImg from "@assets/generated_images/modern_food_delivery_app_interface_mockup.png";
import ecommerceImg from "@assets/generated_images/modern_e-commerce_website_interface_mockup.png";
import twitterImg from "@assets/generated_images/social_media_twitter_clone_interface_mockup.png";

const projects = [
  {
    title: "Food App",
    description: "User-friendly restaurant menu app allowing browsing, viewing details, and placing orders seamlessly.",
    image: foodAppImg,
    tags: ["React", "Node.js", "MongoDB", "Express"],
    link: "https://luxury-sprite-39e324.netlify.app/",
  },
  {
    title: "E-commerce Website",
    description: "Full-featured e-commerce platform with product listings, cart functionality, and streamlined checkout.",
    image: ecommerceImg,
    tags: ["React", "Redux", "Stripe", "Firebase"],
    link: "https://illustrious-biscotti-334768.netlify.app/",
  },
  {
    title: "Twitter Clone",
    description: "Custom Twitter page replica with posting, liking, and following features in an intuitive interface.",
    image: twitterImg,
    tags: ["React", "Firebase", "Tailwind CSS"],
    link: "https://stellular-faun-915cd6.netlify.app/",
  },
  {
    title: "Finovate Outsourcing Solutions",
    description: "Professional business outsourcing solutions website with modern design and responsive layout.",
    image: "/finovate.png",
    tags: ["WordPress", "Web Design", "Business Solutions"],
    link: "https://finovateoutsourcingsolutions.com/",
  },
  {
    title: "Tic Tac Toe",
    description: "Interactive game with responsive design, enabling single and two-player modes.",
    image: "https://images.unsplash.com/photo-1668901382969-8c73e450a1f5?auto=format&fit=crop&q=80&w=800",
    tags: ["JavaScript", "Game Dev", "CSS"],
    link: "https://radiant-dodol-53ef05.netlify.app/",
  },
];

export function Projects() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" }, [
    Autoplay({ delay: 4000, stopOnInteraction: false }),
  ]);

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  return (
    <section id="projects" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center mb-16 gap-6"
        >
          <div className="text-center w-full">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">Featured Projects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A selection of projects demonstrating my expertise in frontend and full-stack development.
            </p>
          </div>
          
          <div className="flex gap-2">
            <Button variant="outline" size="icon" onClick={scrollPrev} className="rounded-full hover:bg-primary hover:text-primary-foreground">
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon" onClick={scrollNext} className="rounded-full hover:bg-primary hover:text-primary-foreground">
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </motion.div>

        <div className="overflow-hidden -mx-4 px-4 md:mx-0 md:px-0 py-8" ref={emblaRef}>
          <div className="flex gap-6 md:gap-8 touch-pan-y">
            {projects.map((project, index) => (
              <div className="flex-[0_0_85%] md:flex-[0_0_45%] lg:flex-[0_0_350px] min-w-0" key={index}>
                <motion.div
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="h-full"
                >
                  <Card className="h-full overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 group">
                    <div className="relative h-48 overflow-hidden">
                      <div className="absolute inset-0 bg-linear-to-t from-background/90 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity" />
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    
                    <CardContent className="p-6 flex flex-col h-[calc(100%-12rem)]">
                      <h3 className="text-xl font-bold font-heading mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-3 grow">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag) => (
                          <span key={tag} className="text-xs px-2 py-1 rounded-md bg-secondary text-secondary-foreground font-medium">
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex gap-3 mt-auto">
                        <Button asChild size="sm" className="w-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground">
                          <a href={project.link} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

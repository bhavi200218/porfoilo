import { useRef } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Women's Lifestyle",
    description: "Modern fashion website for women featuring elegant dresses, skirts, and lifestyle products with shopping cart functionality.",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=800",
    link: "https://womenslifestyle.netlify.app/",
  },
  {
    title: "AdPushup Revenue Platform",
    description: "AI-powered ad revenue optimization platform with real-time analytics and Google certification for publishers.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    link: "https://revenue-landingpage.netlify.app/",
  },
  {
    title: "Certificate Generator",
    description: "Professional certificate generation platform with customizable templates and multiple certificate types.",
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&q=80&w=800",
    link: "https://bhavicertificategenerator.netlify.app/",
  },
  {
    title: "Finovate Outsourcing Solutions",
    description: "Professional business outsourcing solutions website with modern design and responsive layout.",
    image: "https://images.unsplash.com/photo-1668901382969-8c73e450a1f5?auto=format&fit=crop&q=80&w=800",
    link: "https://finovateoutsourcingsolutions.com/",
  },
  {
    title: "Food Restaurant App",
    description: "Restaurant menu app with food gallery, categories, and contact form for online ordering.",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800",
    link: "https://luxury-sprite-39e324.netlify.app/",
  },
  {
    title: "Tic Tac Toe Game",
    description: "Interactive two-player tic tac toe game with score tracking and reset functionality.",
    image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&q=80&w=800",
    link: "https://radiant-dodol-53ef05.netlify.app/",
  },
  {
    title: "Twitter Clone",
    description: "Social media platform replica with posting, liking, and following features in modern interface.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&q=80&w=800",
    link: "https://stellular-faun-915cd6.netlify.app/",
  },
];

export function Projects() {
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
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="h-full"
            >
              <Card className="group h-full overflow-hidden border-0 bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-sm hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 relative">
                <div className="relative h-56 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent z-10 opacity-70 group-hover:opacity-40 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-primary/90 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm">
                      Live Project
                    </div>
                  </div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                  />
                </div>
                
                <CardContent className="p-6 flex flex-col h-[calc(100%-14rem)]">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold font-heading group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <div className="w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-5 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="mt-auto">
                    <Button 
                      asChild 
                      className="w-full bg-gradient-to-r from-primary to-primary/80 text-primary-foreground hover:from-primary/90 hover:to-primary/70 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group-hover:shadow-primary/25"
                    >
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        <ExternalLink className="h-4 w-4" /> 
                        <span>View Project</span>
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

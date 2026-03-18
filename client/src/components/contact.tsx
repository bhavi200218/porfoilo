import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

export function Contact() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const loadingToast = toast({
      title: "Sending...",
      description: "Your message is being sent.",
      duration: 2000,
    });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });

      if (!response.ok) throw new Error('Failed to send message');

      toast({
        title: "Message Sent! 🎉",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });

      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    }
  }

  return (
    <section id="contact" className="py-60 bg-background relative overflow-hidden">
      {/* Immersive Cinematic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[180px] opacity-40 animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] opacity-30" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.15] mix-blend-overlay" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="mb-32 text-center"
        >
          <h2 className="text-[12px] tracking-[0.8em] uppercase font-black text-primary/40 mb-8">Connect</h2>
          <h3 className="text-5xl md:text-7xl font-black tracking-tighter leading-tight mb-8">
            Let's Define<br />
            <span className="text-outline-primary text-transparent">the Future Together</span>
          </h3>
          <p className="text-lg text-foreground/40 font-medium max-w-xl mx-auto leading-relaxed">
             Have a visionary project in mind? Let's bring it to life with precision and passion.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-48">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="lg:col-span-12 xl:col-span-5 space-y-24 mb-16 xl:mb-0"
          >
            <div className="group">
              <h4 className="text-[11px] tracking-[0.5em] uppercase font-black text-primary mb-8 group-hover:translate-x-2 transition-transform duration-500">Communication</h4>
              <div className="space-y-4">
                <a href="mailto:bhavid2002@gmail.com" className="block text-3xl md:text-5xl font-black tracking-tighter hover:text-primary transition-all duration-500">
                  bhavid2002@gmail.com
                </a>
                <div className="flex items-center gap-4 text-xl text-foreground/30 font-bold">
                   <MapPin className="w-5 h-5" />
                   <span>Rajasthan, India</span>
                </div>
              </div>
            </div>

            <div className="group">
               <h4 className="text-[11px] tracking-[0.5em] uppercase font-black text-primary mb-8 group-hover:translate-x-2 transition-transform duration-500">Digital Presence</h4>
               <div className="flex flex-wrap gap-12">
                  <a href="https://linkedin.com/in/bhawanshi-dosi" target="_blank" className="text-2xl font-black tracking-tighter hover:text-primary transition-all group/link relative overflow-hidden py-2">
                     LINKEDIN
                     <span className="absolute bottom-0 left-0 w-full h-1 bg-primary transform translate-x-[-101%] group-hover/link:translate-x-0 transition-transform duration-500" />
                  </a>
                  <a href="https://github.com/bhawanshi2002" target="_blank" className="text-2xl font-black tracking-tighter hover:text-primary transition-all group/link relative overflow-hidden py-2">
                     GITHUB
                     <span className="absolute bottom-0 left-0 w-full h-1 bg-primary transform translate-x-[-101%] group-hover/link:translate-x-0 transition-transform duration-500" />
                  </a>
               </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="lg:col-span-12 xl:col-span-7 p-10 md:p-16 bg-foreground/[0.03] border border-foreground/5 rounded-[4rem] backdrop-blur-3xl relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-br from-primary/10 via-transparent to-transparent rounded-[4rem] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -z-10" />
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem className="space-y-6">
                        <FormLabel className="text-[10px] tracking-[0.3em] uppercase font-black text-foreground/30">Identity</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Your Name" 
                            {...field} 
                            className="h-16 bg-transparent border-0 border-b-2 border-foreground/10 rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary transition-all text-xl font-bold placeholder:text-foreground/10" 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="space-y-6">
                        <FormLabel className="text-[10px] tracking-[0.3em] uppercase font-black text-foreground/30">Mailbox</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Your Email" 
                            {...field} 
                            className="h-16 bg-transparent border-0 border-b-2 border-foreground/10 rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary transition-all text-xl font-bold placeholder:text-foreground/10"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem className="space-y-6">
                      <FormLabel className="text-[10px] tracking-[0.3em] uppercase font-black text-foreground/30">Vision</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="What disruptive idea shall we build?"
                          className="min-h-[150px] bg-transparent border-0 border-b-2 border-foreground/10 rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary transition-all text-xl font-bold resize-none placeholder:text-foreground/10 leading-relaxed"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button 
                  type="submit" 
                  className="w-full h-20 bg-foreground text-background hover:bg-primary hover:text-white text-base tracking-[0.5em] uppercase font-black transition-all rounded-[2rem] shadow-xl group/btn overflow-hidden relative"
                >
                  <span className="relative z-10">Initiate Protocol</span>
                  <div className="absolute inset-0 bg-primary transform translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500" />
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>

        <div className="pt-24 border-t border-foreground/5 flex flex-col md:flex-row justify-between items-center gap-12 relative">
           <div className="flex flex-col items-center md:items-start group">
              <span className="text-4xl font-black tracking-tighter group-hover:text-primary transition-colors">BHAWANSHI DOSI</span>
              <div className="flex items-center gap-4 mt-4">
                 <span className="w-12 h-px bg-primary" />
                 <span className="text-[11px] tracking-[0.6em] uppercase font-black text-foreground/30">Designer • Developer • 2026</span>
              </div>
           </div>
           
           <div className="text-center md:text-right max-w-sm">
              <p className="text-[10px] tracking-[0.8em] font-black uppercase text-foreground/20 leading-loose">
                 Architecting digital futures through minimal precision.
              </p>
           </div>
        </div>
      </div>
    </section>
  );
}

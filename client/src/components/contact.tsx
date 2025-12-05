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
/* eslint-disable tailwindcss/no-custom-classname */

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
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      form.reset();
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    }
  }

  return (
    <section 
      id="contact"
      className="py-20 bg-background relative overflow-hidden"
    >
      {/* Abstract decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-foreground">Get In Touch</h2>
          <p className="text-muted-foreground/80 max-w-2xl mx-auto">
            Have a project in mind or want to discuss a new opportunity? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="bg-card/80 backdrop-blur-sm p-8 rounded-2xl border border-border shadow-lg">
              <h3 className="text-2xl font-bold font-heading mb-6 text-foreground">Contact Information</h3>
              <div className="space-y-6">
                <a 
                  href="mailto:bhavid2002@gmail.com" 
                  className="flex items-start gap-4 group hover:bg-accent/50 p-3 rounded-xl transition-colors"
                >
                  <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-foreground">Email</h4>
                    <p className="text-muted-foreground">bhavid2002@gmail.com</p>
                  </div>
                </a>

                <a 
                  href="https://www.google.com/maps/place/Banswara,+Rajasthan" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 group hover:bg-accent/50 p-3 rounded-xl transition-colors"
                >
                  <div className="p-3 rounded-xl bg-secondary/20 text-secondary-foreground group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-foreground">Location</h4>
                    <p className="text-muted-foreground">Banswara, Rajasthan</p>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-card/80 backdrop-blur-sm p-8 rounded-2xl border border-border shadow-lg">
              <h3 className="text-2xl font-bold font-heading mb-6 text-foreground">Send Me a Message</h3>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground">Full Name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Bhavi Dosi" 
                            {...field} 
                            className="bg-background/50 border-border text-foreground placeholder:text-muted-foreground/60 focus-visible:ring-2 focus-visible:ring-primary" 
                          />
                        </FormControl>
                        <FormMessage className="text-destructive" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground">Email</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="bhavidosi@example.com" 
                            {...field} 
                            className="bg-background/50 border-border text-foreground placeholder:text-muted-foreground/60 focus-visible:ring-2 focus-visible:ring-primary"
                          />
                        </FormControl>
                        <FormMessage className="text-destructive" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground">Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="let's connect..."
                            className="min-h-[120px] bg-background/50 border-border text-foreground placeholder:text-muted-foreground/60 focus-visible:ring-2 focus-visible:ring-primary"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-destructive" />
                      </FormItem>
                    )}
                  />
                  <Button 
                    type="submit" 
                    className="w-full gap-2 group bg-linear-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/90 text-primary-foreground font-medium transition-all duration-300 transform hover:scale-[1.02]"
                  >
                    Send Message
                    <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </form>
              </Form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

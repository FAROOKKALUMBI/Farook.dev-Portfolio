import { Mail, Github, Linkedin, Phone, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "kalumbifarook21@gmail.com",
      link: "mailto:kalumbifarook21@gmail.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect on LinkedIn",
      link: "https://www.linkedin.com/in/farook-kalumbi-01158b330?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "View my repositories",
      link: "https://github.com/FAROOKKALUMBI",
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "+265 884 288 849",
      link: "https://wa.me/265884288849",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+265 884 288 849",
      link: "tel:+265884288849",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hey, my name is ${formData.name}. ${formData.message}. You can reach me at ${formData.email}.`;
    window.open(`https://wa.me/265884288849?text=${encodeURIComponent(message)}`, "_blank");
    toast.success("Opening WhatsApp...");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 relative overflow-hidden bg-background">
      {/* Background with Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background animate-fade-in" />
      
      {/* Floating orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-4 animate-slide-up">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            Let's Connect
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Choose your preferred way to get in touch
          </p>
        </div>

        {/* Contact Methods - One per Row */}
        <div className="space-y-4 max-w-3xl mx-auto mb-16">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            
            return (
              <a
                key={index}
                href={method.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-6 p-6 rounded-2xl glass border border-border hover:border-primary/50 transition-all duration-300 hover:scale-[1.02] animate-scale-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-7 h-7 text-primary" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-foreground mb-1">
                    {method.label}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {method.value}
                  </p>
                </div>

                {/* Arrow */}
                <div className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </a>
            );
          })}
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <div className="glass rounded-3xl p-8 border border-border">
            <h2 className="text-3xl font-bold mb-2 text-foreground text-center">
              Send a Message
            </h2>
            <p className="text-muted-foreground text-center mb-8">
              Have a question or want to work together? Send me a message!
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Your Name
                </label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter your full name"
                  required
                  className="glass"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Your Email
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="Enter your email address"
                  required
                  className="glass"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Your Message
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your project or idea..."
                  rows={6}
                  required
                  className="glass resize-none"
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                size="lg"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message via WhatsApp
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

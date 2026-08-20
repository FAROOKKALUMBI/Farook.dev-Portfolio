import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import profileImage from "@/assets/profile.png";

const Landing = () => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-background text-foreground">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_hsl(var(--primary)/0.18),_transparent_55%)]" />
      <div className="absolute -top-32 -right-24 h-72 w-72 rounded-full bg-[radial-gradient(circle,_hsl(var(--accent)/0.4),_transparent_70%)] blur-2xl" />
      <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-[radial-gradient(circle,_hsl(var(--secondary)/0.35),_transparent_70%)] blur-3xl" />

      <div className="relative z-10 px-6 pb-20 pt-28 sm:px-10 lg:px-16">
        <section className="max-w-6xl mx-auto pt-16 grid gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.85fr)] items-center">
          <div className="space-y-6 animate-fade-in">

            <p className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent ">
              About Me
            </p>
            <h1 className="text-4xl md:text-6xl font-bold font-display leading-tight">
              Hi, I am <span className="text-6xl md:text-6xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent ">Farook Kalumbi</span>
            </h1>
            <div className="text-lg md:text-xl text-muted-foreground max-w-7xl leading-relaxed space-y-6">
              <p>
                I’m a <strong className="text-foreground">creative technologist, software developer, graphic designer, and video editor</strong> passionate about combining technology and design to create meaningful digital experiences.
              </p>
              <p>
                My work spans <strong className="text-foreground">software development, system architecture, branding, visual design, and digital media</strong>, with a focus on making solutions simple, engaging, and reliable. I’m also interested in <strong className="text-foreground">cybersecurity and emerging technologies</strong>, constantly exploring new ways to solve real-world problems.
              </p>
              <p>
                Driven by impact, I aim to use technology and creativity to build solutions that <strong className="text-foreground">empower people, businesses, and communities</strong>, especially within the Malawian and African context.
              </p>
              <p>
                This portfolio showcases my <strong className="text-foreground">work, projects, creativity, and growth</strong> as I continue building things that matter.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-primary md:text-lg text-primary-foreground hover:bg-primary/90 rounded-2xl px-8 py-6 glow-hover group"
                >
                  Work with Me
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/projects">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-2xl md:text-lg px-8 py-6 border-primary/30 hover:border-primary hover:bg-primary/10"
                >
                  View Projects
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative w-full max-w-md mx-auto lg:max-w-none flex justify-center items-end animate-fade-in group">
            {/* Soft Ambient Background Glow */}
            <div className="absolute inset-x-4 bottom-2 top-8 rounded-full bg-gradient-to-tr from-primary/25 via-accent/20 to-secondary/20 blur-3xl opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Standalone Cutout Portrait Image with Brush Gradient Bottom Blend */}
            <div className="relative w-full max-w-lg aspect-[4/5] flex items-end justify-center">
              <img
                src={profileImage}
                alt="Farook Kalumbi"
                className="h-full w-auto object-contain object-bottom transition-transform duration-500 group-hover:scale-102 dark:drop-shadow-[0_15px_35px_rgba(0,0,0,0.85)] drop-shadow-[0_15px_25px_rgba(0,0,0,0.2)]"
                style={{
                  maskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 75%, rgba(0,0,0,0.4) 90%, rgba(0,0,0,0) 100%)",
                  WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 75%, rgba(0,0,0,0.4) 90%, rgba(0,0,0,0) 100%)"
                }}
              />
              {/* Soft Brush Fade Blend Layer at bottom */}
              <div className="absolute bottom-0 inset-x-0 h-10 bg-gradient-to-t from-background via-background/50 to-transparent pointer-events-none" />
            </div>
          </div>

        </section>

        <section className="max-w-5xl mx-auto pt-16">
          <div className="rounded-3xl border border-primary/20 p-8 md:p-10 bg-[linear-gradient(135deg,_hsl(var(--primary)/0.5),_hsl(var(--accent)/0.9))]">         
            <h2 className="text-2xl md:text-4xl font-semibold font-display text-white">
              <br></br>Education & Achievements
            </h2>
            <p className="mt-3 md:text-lg text-white/80 max-w-7xl">
              View my full education timeline and certificates on the Education page.
            </p>
            <div className="mt-6">
              <Link to="/education" className="inline-flex">
                <Button size="lg" className="rounded-2xl px-8 py-6 bg-white text-slate-900 hover:bg-white/90">
                  View Education
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto pt-16 grid gap-10 lg:grid-cols-[1fr_1fr] items-center">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-semibold font-display">
              What You Get 
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              You get clean design, practical development, and a mindset that prioritizes clarity. I translate ideas into structured layouts, build interfaces that work across devices, and refine details until everything feels intentional. I’d rather ship something simple and solid than something flashy and confusing.
            </p>
          </div>
          <div className="grid gap-4">
            {[
              { label: "Projects", value: "-" },
              { label: "Happy Clients", value: "-" },
              { label: "Years of work", value: "-" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-border bg-card/70 p-5 flex items-center justify-between"
              >
                <span className="text-muted-foreground">{stat.label}</span>
                <span className="text-2xl font-semibold text-primary">{stat.value}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Landing;

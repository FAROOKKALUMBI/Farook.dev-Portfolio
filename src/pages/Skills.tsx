import { useEffect, useState, useRef } from "react";
import {
  Code,
  Palette,
  Brush,
  Shield,
  Users,
  GraduationCap,
  DollarSign,
  Globe,
  Terminal,
  GitBranch,
  Layout,
  Monitor,
  Smartphone,
  Laptop,
  Database,
  Image,
  Atom,
  Layers,
  Type,
  Target,
  BookOpen,
  Lightbulb,
  TrendingUp,
  PiggyBank,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

interface Skill {
  name: string;
  level: number;
  icon: typeof Code;
  technologies: { name: string; icon?: typeof Code; image?: string }[];
  color: string;
  darkColor: string;
}

const Skills = () => {
  const [visibleSkills, setVisibleSkills] = useState<boolean[]>([]);
  const skillsRef = useRef<HTMLDivElement>(null);

  const skills: Skill[] = [
    {
      name: "Web Programming",
      level: 60,
      icon: Code,
      technologies: [
        { name: "HTML", image: "/skills-icons/pngwing.com.png" },
        { name: "CSS", image: "/skills-icons/pngwing.com (2).png" },
        { name: "JavaScript",image: "/skills-icons/pngwing.com (3).png" },
        { name: "Tailwind CSS",image: "/skills-icons/pngwing.com (4).png" },
        { name: "React", image: "/skills-icons/pngwing.com (11).png" },
        { name: "TypeScript", image: "/skills-icons/pngwing.com (9).png" },
        { name: "GitHub", image: "/skills-icons/pngwing.com (1).png" },
        { name: "MySQL", image: "/skills-icons/pngwing.com (5).png" },
        { name: "PHP", image: "/skills-icons/php.png" },
        { name: "Java", image: "/skills-icons/java.png" },
      ],
      color: "from-blue-400 to-blue-600",
      darkColor: "from-blue-500 to-blue-700",
    },
    {
      name: "UI/UX Design",
      level: 65,
      icon: Palette,
      technologies: [
        { name: "Figma", image: "/skills-icons/figma.png" },
        { name: "Adobe XD", image: "/skills-icons/pngwing.com (12).png" },
      ],
      color: "from-purple-400 to-purple-600",
      darkColor: "from-purple-500 to-purple-700",
    },
    {
      name: "Graphic Design",
      level: 70,
      icon: Brush,
      technologies: [
        { name: "Photoshop", image: "/skills-icons/photoshop.png" },
        { name: "Illustrator", image: "/skills-icons/illustrator.png" },
       
      ],
      color: "from-pink-400 to-pink-600",
      darkColor: "from-pink-500 to-pink-700",
    },
    {
      name: "Cybersecurity",
      level: 55,
      icon: Shield,
      technologies: [
        { name: "Network Security", icon: Globe },
        { name: "Ethical Hacking", icon: Terminal },
        { name: "Vulnerability Testing", icon: Shield },
        { name: "Risk Analysis", icon: Database },
      ],
      color: "from-red-400 to-red-600",
      darkColor: "from-red-500 to-red-700",
    },
    {
      name: "Leadership",
      level: 80,
      icon: Users,
      technologies: [
        { name: "Team Management", icon: Users },
        { name: "Decision Making", icon: Target },
        { name: "Public Speaking", icon: Monitor },
        { name: "Conflict Resolution", icon: Shield },
      ],
      color: "from-amber-400 to-amber-600",
      darkColor: "from-amber-500 to-amber-700",
    },
    {
      name: "Multimedia & Digital Content",
      level: 85,
      icon: Image,
      technologies: [
        { name: "Visual Communication", icon: Palette },
        { name: "Graphic Design", icon: Brush },
        { name: "Digital Media", icon: Monitor },
        { name: "Content Creation", icon: Laptop },
      ],
      color: "from-green-400 to-green-600",
      darkColor: "from-green-500 to-green-700",
    },
    {
      name: "Financial Literacy",
      level: 60,
      icon: DollarSign,
      technologies: [
        { name: "Personal Budgeting", icon: DollarSign },
        { name: "Investments", icon: TrendingUp },
        { name: "Entrepreneurship", icon: Lightbulb },
        { name: "Savings Discipline", icon: PiggyBank },
      ],
      color: "from-emerald-400 to-emerald-600",
      darkColor: "from-emerald-500 to-emerald-700",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Trigger animations when skills come into view
            setTimeout(() => {
              setVisibleSkills(skills.map(() => true));
            }, 200);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const [activeSkill, setActiveSkill] = useState<string | null>(skills[0]?.name ?? null);

  const SkillCard = ({
    skill,
    index,
  }: {
    skill: Skill;
    index: number;
  }) => {
    const [progress, setProgress] = useState(0);
    const Icon = skill.icon;
    const isOpen = activeSkill === skill.name;

    useEffect(() => {
      if (visibleSkills[index]) {
        const timer = setTimeout(() => {
          setProgress(skill.level);
        }, index * 150);
        return () => clearTimeout(timer);
      }
    }, [visibleSkills, index]);

    return (
      <button
        type="button"
        onClick={() => setActiveSkill(isOpen ? null : skill.name)}
        aria-expanded={isOpen}
        className="relative w-full text-left rounded-2xl p-6 hover:scale-[1.02] transition-all duration-500 overflow-hidden border glass"
        style={{ 
          animationDelay: `${index * 0.1}s`,
        }}
      >
        {/* Glow Effect */}
        <div className={`absolute inset-0 opacity-10 bg-gradient-to-r ${skill.darkColor} dark:${skill.darkColor}`} />
        
        <div className="relative z-10 space-y-4">
          {/* Header with Icon and Title */}
          <div className="flex items-center gap-4">
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${skill.color} dark:${skill.darkColor} backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
              <Icon className="w-4 h-4 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-foreground">
                {skill.name}
              </h3>
              <p className="text-xs text-muted-foreground mt-1">
                Tap to view skill set
              </p>
            </div>
            <span className="text-lg font-semibold text-muted-foreground">
              {progress}%
            </span>
            {isOpen ? (
              <ChevronUp className="w-5 h-5 text-muted-foreground" />
            ) : (
              <ChevronDown className="w-5 h-5 text-muted-foreground" />
            )}
          </div>

          {/* Progress Bar */}
          <div className="relative h-2 bg-muted rounded-full overflow-hidden">
            <div 
              className={`absolute top-0 left-0 h-full bg-gradient-to-r ${skill.color} dark:${skill.darkColor} rounded-full transition-all duration-1000 ease-out shadow-lg`}
              style={{ 
                width: `${progress}%`,
              }}
            />
          </div>

          {isOpen && (
            <div className="grid gap-3 grid-cols-2 sm:grid-cols-3">
              {skill.technologies.map((tech) => {
                const TechIcon = tech.icon;
                return (
                  <div
                    key={tech.name}
                    className="flex items-center gap-2 rounded-xl border border-border/60 bg-background/50 px-3 py-2 text-sm text-muted-foreground"
                  >
                    {tech.image ? (
                      <img
                        src={tech.image}
                        alt={tech.name}
                        className="w-6 h-6 object-contain"
                      />
                    ) : (
                      TechIcon && <TechIcon className="w-4 h-4 text-primary" />
                    )}
                    <span>{tech.name}</span>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </button>
    );
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 relative overflow-hidden bg-background">
      {/* Background with Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background animate-fade-in" />
      
      {/* Floating orbs */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />

      <div className="relative z-10 max-w-7xl mx-auto" ref={skillsRef}>
        {/* Header */}
        
          <div className="text-center mb-16 space-y-3 animate-slide-up">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            Skills & Expertise
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
           A comprehensive overview of my professional capabilities</p>
        </div>

        {/* Skills List */}
        <div className="space-y-4 animate-scale-in max-w-2xl mx-auto">
          {skills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>

        {/* Bottom Section - Vibrant Card */}
        <div className="mt-20 animate-fade-in" style={{ animationDelay: "1s" }}>
          <div className="relative rounded-3xl p-12 max-w-4xl mx-auto text-center overflow-hidden border border-primary/20 bg-[linear-gradient(135deg,_hsl(var(--primary)/0.2),_hsl(var(--accent)/0.2))]">
            <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_center,_hsl(var(--foreground)/0.15),_transparent_60%)]" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Continuous Growth
              </h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
                I believe in lifelong learning and continuously expanding my skillset. 
                These metrics represent my current proficiency levels, but I'm always 
                pushing boundaries and exploring new technologies and methodologies 
                to deliver exceptional results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

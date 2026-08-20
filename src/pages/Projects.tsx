import { useSearchParams } from "react-router-dom";
import {
  ExternalLink,
  Github,
  LayoutGrid,
  Palette,
  Camera,
  BookOpen,
  Code,
  FolderKanban,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface Project {
  id: number;
  title: string;
  category: "software" | "photo" | "blog";
  worked: string;
  description: string;
  image?: string;
  link?: string;
  github?: string;
  tags?: string[];
}

// Set your Google Drive PDF view / preview link here
const GOOGLE_DRIVE_PDF_EMBED_URL = "https://drive.google.com";

const Projects = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentCategory = searchParams.get("category") || "all";

  const filter = currentCategory;

  const setFilter = (catId: string) => {
    if (catId === "all") {
      setSearchParams({});
    } else {
      setSearchParams({ category: catId });
    }
  };

  const categories = [
    { id: "all", label: "All Projects", icon: LayoutGrid },
    { id: "software", label: "Software Development", icon: Code },
    { id: "design", label: "Graphic Design Portfolio", icon: Palette },
    { id: "photo", label: "Photo Editing", icon: Camera },
    { id: "blog", label: "Blogs", icon: BookOpen },
  ];

  const projects: Project[] = [
    {
      id: 1,
      title: "Find Consultancy Company",
      category: "software",
      worked: "As Team",
      description:
        "A modern, high-conversion software web platform designed to connect businesses with leading consultancy firms and expert advisory services.",
      image: "/Projects/find.png",
      link: "https://findconsultancycompany.vercel.app/",
      tags: ["Software Development", "Web Platform", "React", "Tailwind CSS"],
    },
    {
      id: 2,
      title: "Software & Tech Publications",
      category: "blog",
      worked: "Solo",
      description:
        "Technical articles, software engineering insights, system design principles, and modern web technology trends.",
      link: "https://github.com/FAROOKKALUMBI",
      tags: ["Software Engineering", "Tech Publications", "Web Trends"],
    },
    {
      id: 3,
      title: "Photo Editing & Retouching Showcase",
      category: "photo",
      worked: "Solo",
      description:
        "Professional color grading, lighting adjustment, and photo editing. (New photos are currently being uploaded one by one).",
      tags: ["Photo Editing", "Color Grading", "Lightroom", "Portrait Edits"],
    },
  ];

  const filteredProjects =
    filter === "all" ? projects : projects.filter((project) => project.category === filter);

  const getCategoryCount = (catId: string) => {
    if (catId === "all") return projects.length;
    if (catId === "design") return 1; // Google Drive PDF Experience
    return projects.filter((p) => p.category === catId).length;
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-background px-4 sm:px-6 pb-20 pt-24 text-foreground">
      {/* Background Glow Orbs */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background animate-fade-in" />
      <div className="absolute left-10 top-20 h-72 w-72 animate-float rounded-full bg-primary/10 blur-3xl -z-10" />
      <div
        className="absolute bottom-20 right-10 h-96 w-96 animate-float rounded-full bg-accent/10 blur-3xl -z-10"
        style={{ animationDelay: "1s" }}
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="mb-12 space-y-4 text-center animate-slide-up">
          <h1 className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-4xl md:text-5xl font-bold text-transparent font-display tracking-tight">
            Featured Projects & Works
          </h1>
          <p className="mx-auto max-w-2xl text-muted-foreground text-base md:text-lg">
            Explore my portfolio across Software Development, Graphic Design Portfolio, Photo Editing, Blogs, and Web Platforms.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="mb-12 flex flex-wrap justify-center gap-2.5 sm:gap-3.5 animate-fade-in">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const count = getCategoryCount(cat.id);
            const active = filter === cat.id;

            return (
              <Button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                variant="ghost"
                className={`
                  relative flex items-center gap-2.5 rounded-2xl px-4 py-2.5 sm:px-5 sm:py-3 font-medium transition-all duration-300 text-sm md:text-base border
                  ${
                    active
                      ? "bg-gradient-to-r from-primary via-accent to-secondary text-primary-foreground border-transparent shadow-lg shadow-primary/25 scale-[1.03]"
                      : "bg-card/70 border-border/80 text-muted-foreground hover:text-foreground hover:border-primary/40 hover:bg-primary/5 backdrop-blur-md"
                  }
                `}
              >
                <Icon className={`w-4 h-4 sm:w-5 sm:h-5 ${active ? "text-primary-foreground" : "text-primary"}`} />
                <span>{cat.label}</span>
                <span
                  className={`ml-1 text-xs px-2 py-0.5 rounded-full font-bold ${
                    active
                      ? "bg-background/25 text-primary-foreground"
                      : "bg-primary/10 text-primary border border-primary/20"
                  }`}
                >
                  {count}
                </span>
              </Button>
            );
          })}
        </div>

        {/* DIRECT FULL-SCREEN GOOGLE DRIVE PDF VIEW EXPERIENCE FOR GRAPHIC DESIGN PORTFOLIO */}
        {filter === "design" ? (
          <div className="w-full h-[82vh] min-h-[550px] rounded-3xl border border-border bg-card/60 overflow-hidden shadow-2xl animate-fade-in">
            <iframe
              src={GOOGLE_DRIVE_PDF_EMBED_URL}
              title="Graphic Design Portfolio Google Drive Document"
              className="w-full h-full border-0"
            />
          </div>
        ) : (
          /* Projects Grid for Other Categories */
          <>
            {filter === "photo" && (
              <div className="mb-10 rounded-3xl border border-accent/30 bg-gradient-to-r from-card/90 via-accent/5 to-card/90 p-6 shadow-xl backdrop-blur-xl animate-fade-in flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="space-y-1 text-center sm:text-left">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/15 text-accent text-xs font-semibold border border-accent/20">
                    <Camera className="w-3.5 h-3.5" />
                    <span>Photo Editing Gallery</span>
                  </div>
                  <h3 className="text-xl font-bold font-display text-foreground">
                    Updating Edits One by One
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Pictures have been cleared. New high-resolution retouches and color-graded portraits are being added.
                  </p>
                </div>
                <div className="inline-flex items-center gap-2 text-xs font-semibold text-accent bg-accent/15 border border-accent/30 px-4 py-2 rounded-xl shrink-0">
                  <Sparkles className="w-4 h-4" />
                  <span>Coming Soon</span>
                </div>
              </div>
            )}

            {filteredProjects.length > 0 ? (
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {filteredProjects.map((project, index) => (
                  <div
                    key={project.id}
                    className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-border/70 bg-card/80 shadow-card transition-all duration-500 hover:border-primary/50 hover:shadow-2xl hover:scale-[1.02] backdrop-blur-xl animate-scale-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {/* Project Banner / Image */}
                    {project.image ? (
                      <div className="relative h-56 w-full overflow-hidden border-b border-border/60 bg-background/80 p-3">
                        <img
                          src={encodeURI(project.image)}
                          alt={project.title}
                          className="h-full w-full rounded-2xl object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                      </div>
                    ) : (
                      <div className="h-44 w-full bg-gradient-to-tr from-primary/10 via-accent/10 to-secondary/10 flex items-center justify-center border-b border-border/60">
                        {project.category === "photo" ? (
                          <Camera className="w-12 h-12 text-accent/50" />
                        ) : (
                          <FolderKanban className="w-12 h-12 text-primary/40" />
                        )}
                      </div>
                    )}

                    <div className="flex-1 space-y-4 p-6 md:p-7 flex flex-col justify-between">
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <span className="rounded-full bg-primary/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary border border-primary/20">
                            {catLabelMap[project.category] || project.category}
                          </span>
                          <span className="rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold text-accent border border-accent/20">
                            {project.worked}
                          </span>
                        </div>

                        <h3 className="text-2xl font-bold font-display text-foreground group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>

                        <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                          {project.description}
                        </p>

                        {project.tags && (
                          <div className="flex flex-wrap gap-1.5 pt-2">
                            {project.tags.map((tag) => (
                              <span
                                key={tag}
                                className="text-xs px-2.5 py-1 rounded-md bg-secondary/10 text-secondary-foreground font-medium border border-border/40"
                              >
                                #{tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Action Links */}
                      <div className="flex flex-wrap gap-3 pt-4 border-t border-border/40">
                        {project.link && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2 text-xs md:text-sm font-semibold text-primary-foreground transition-all duration-300 hover:bg-primary/90 shadow-md shadow-primary/20"
                          >
                            View Project
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        )}
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-xl border border-border px-4 py-2 text-xs md:text-sm font-semibold text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                          >
                            GitHub
                            <Github className="h-4 w-4" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              /* Empty State Card */
              <div className="mx-auto my-12 max-w-2xl rounded-3xl border border-dashed border-primary/40 bg-gradient-to-b from-card/90 to-card/50 p-10 md:p-14 text-center shadow-xl backdrop-blur-2xl animate-fade-in space-y-5">
                <div className="mx-auto w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shadow-inner">
                  <FolderKanban className="w-8 h-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-foreground font-display">
                    {categories.find((c) => c.id === filter)?.label} Showcase Coming Soon
                  </h3>
                  <p className="text-muted-foreground max-w-md mx-auto text-sm md:text-base">
                    New projects and creative works are currently being added to this category. Check back soon for updates!
                  </p>
                </div>
                <Button
                  onClick={() => setFilter("all")}
                  variant="outline"
                  className="rounded-xl border-primary/30 text-primary hover:bg-primary/10 font-semibold px-6"
                >
                  View All Projects
                </Button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

const catLabelMap: Record<string, string> = {
  software: "Software Development",
  design: "Graphic Design Portfolio",
  photo: "Photo Editing",
  blog: "Blog",
};

export default Projects;

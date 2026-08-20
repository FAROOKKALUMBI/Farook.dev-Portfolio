import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Home,
  Mail,
  Code,
  Moon,
  Sun,
  Menu,
  X,
  Briefcase,
  Sparkles,
  GraduationCap,
  ChevronRight,
  ChevronDown,
  LayoutGrid,
  Palette,
  Camera,
  BookOpen,
  ArrowUpRight,
} from "lucide-react";
import { Button } from "./ui/button";
import profileImage from "@/assets/header-profile.png";

const Navigation = () => {
  const [isDark, setIsDark] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Expanded by default on desktop
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);
  const [isMobileProjectsOpen, setIsMobileProjectsOpen] = useState(true);
  const [isProjectsMenuOpen, setIsProjectsMenuOpen] = useState(false);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const location = useLocation();

  useEffect(() => {
    const isDarkMode = localStorage.getItem("theme") === "dark";
    setIsDark(isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    if (newTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const navLinks = [
    { path: "/", icon: Home, label: "Home" },
    { path: "/skills", icon: Code, label: "Skills" },
    { path: "/education", icon: GraduationCap, label: "Education" },
    { path: "/experience", icon: Briefcase, label: "Experience" },
    { path: "/services", icon: Sparkles, label: "Services" },
    { path: "/projects", icon: Briefcase, label: "Projects" },
    { path: "/contact", icon: Mail, label: "Contact" },
  ];

  const projectCategories = [
    {
      path: "/projects?category=all",
      label: "All Projects",
      desc: "Full portfolio collection",
      icon: LayoutGrid,
      color: "text-blue-500 bg-blue-500/10",
    },
    {
      path: "/projects?category=software",
      label: "Software Development",
      desc: "Web apps, platforms & systems",
      icon: Code,
      color: "text-emerald-500 bg-emerald-500/10",
    },
    {
      path: "/projects?category=design",
      label: "Graphic Design Portfolio",
      desc: "PDF catalog & Google Drive",
      icon: Palette,
      color: "text-purple-500 bg-purple-500/10",
    },
    {
      path: "/projects?category=photo",
      label: "Photo Editing",
      desc: "Color grading & retouches",
      icon: Camera,
      color: "text-pink-500 bg-pink-500/10",
    },
    {
      path: "/projects?category=blog",
      label: "Blogs",
      desc: "Technical articles & guides",
      icon: BookOpen,
      color: "text-amber-500 bg-amber-500/10",
    },
  ];

  const isActive = (path: string) => location.pathname === path;
  const currentNav = navLinks.find((l) => l.path === location.pathname) || navLinks[0];

  const handleMouseEnterProjects = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setIsProjectsMenuOpen(true);
  };

  const handleMouseLeaveProjects = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setIsProjectsMenuOpen(false);
    }, 150);
  };

  // Adjust root layout margin for collapsed / expanded sidebar so main content is NEVER covered
  useEffect(() => {
    const updateMargin = () => {
      const mainEl = document.getElementById("main-content-wrapper");
      if (mainEl) {
        if (window.innerWidth >= 768) {
          mainEl.style.marginLeft = isSidebarOpen ? "16rem" : "5rem";
          mainEl.style.width = isSidebarOpen ? "calc(100% - 16rem)" : "calc(100% - 5rem)";
        } else {
          mainEl.style.marginLeft = "0px";
          mainEl.style.width = "100%";
        }
      }
    };
    updateMargin();
    window.addEventListener("resize", updateMargin);
    return () => window.removeEventListener("resize", updateMargin);
  }, [isSidebarOpen, location.pathname]);

  return (
    <>
      {/* Top Header Bar */}
      <header className="fixed top-0 left-0 right-0 z-50 h-16 border-b border-border bg-card/90 backdrop-blur-xl flex items-center justify-between px-4 md:px-6 transition-all duration-300">
        {/* Left Side: Hamburger Toggle Button + Farook.dev Brand + Breadcrumbs */}
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => {
              if (window.innerWidth < 768) {
                setIsMobileDrawerOpen(!isMobileDrawerOpen);
              } else {
                setIsSidebarOpen(!isSidebarOpen);
              }
            }}
            className="rounded-xl hover:bg-primary/10 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            <Menu className="w-5 h-5 text-foreground" />
          </Button>

          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-primary/40 p-0.5 bg-background shadow-md transition-transform duration-300 group-hover:scale-105">
              <img
                src={profileImage}
                alt="Farook Kalumbi"
                className="w-full h-full object-cover object-center rounded-full"
              />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent font-display tracking-tight">
              Farook.dev
            </span>
          </Link>

          {/* Breadcrumbs: Page Name */}
          <div className="hidden sm:flex items-center gap-2 text-sm text-muted-foreground ml-2">
            <ChevronRight className="w-3.5 h-3.5 opacity-50" />
            <span className="font-semibold text-foreground capitalize">
              {currentNav.label}
            </span>
          </div>
        </div>
      </header>

      {/* Desktop Sidebar (Positioned under Header at top-16) */}
      <aside
        className={`fixed left-0 top-16 bottom-0 z-40 hidden md:flex flex-col border-r border-border bg-card/95 backdrop-blur-2xl transition-all duration-300 ease-in-out ${
          isSidebarOpen ? "w-64" : "w-20"
        }`}
      >
        {/* Sidebar Nav Links List */}
        <div className="flex-1 py-6 px-3 space-y-1.5 overflow-y-auto">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const active = isActive(link.path);

            if (link.label === "Projects") {
              return (
                <div
                  key={link.path}
                  className="relative"
                  onMouseEnter={handleMouseEnterProjects}
                  onMouseLeave={handleMouseLeaveProjects}
                >
                  <Link to="/projects">
                    <Button
                      variant="ghost"
                      onClick={() => setIsProjectsMenuOpen(!isProjectsMenuOpen)}
                      className={`w-full flex items-center justify-between gap-3 rounded-xl transition-all duration-200 group ${
                        active
                          ? "bg-primary/15 text-primary font-semibold border-l-4 border-primary shadow-sm"
                          : "hover:bg-primary/5 text-muted-foreground hover:text-foreground"
                      } ${!isSidebarOpen ? "px-0 justify-center" : "px-3.5"}`}
                      title={!isSidebarOpen ? link.label : undefined}
                    >
                      <div className="flex items-center gap-3.5">
                        <Icon className={`w-5 h-5 shrink-0 ${active ? "text-primary" : ""}`} />
                        {isSidebarOpen && (
                          <span className="text-sm font-medium whitespace-nowrap">
                            {link.label}
                          </span>
                        )}
                      </div>
                      {isSidebarOpen && (
                        <ChevronRight
                          className={`w-4 h-4 text-muted-foreground/70 transition-transform duration-300 ${
                            isProjectsMenuOpen ? "rotate-90 text-primary" : "group-hover:translate-x-0.5"
                          }`}
                        />
                      )}
                    </Button>
                  </Link>

                  {/* High-End Animated Side Menu Beside Projects */}
                  {isProjectsMenuOpen && (
                    <div
                      className="absolute left-full top-0 ml-3.5 w-72 p-3 rounded-3xl border border-primary/30 bg-card/95 backdrop-blur-3xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] z-50 animate-in fade-in-0 zoom-in-95 slide-in-from-left-4 duration-200 ease-out space-y-1.5"
                      onMouseEnter={handleMouseEnterProjects}
                      onMouseLeave={handleMouseLeaveProjects}
                    >
                      <div className="px-3 py-2 border-b border-border/60 flex items-center justify-between">
                        <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                          Projects Navigation
                        </span>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary font-semibold border border-primary/20">
                          5 Categories
                        </span>
                      </div>

                      <div className="space-y-1 pt-1">
                        {projectCategories.map((sub) => {
                          const SubIcon = sub.icon;
                          const subCategoryParam = sub.path.split("=")[1];
                          const currentCategoryParam =
                            new URLSearchParams(location.search).get("category") || "all";
                          const isSubActive =
                            location.pathname === "/projects" &&
                            currentCategoryParam === subCategoryParam;

                          return (
                            <Link
                              key={sub.path}
                              to={sub.path}
                              onClick={() => setIsProjectsMenuOpen(false)}
                              className={`group flex items-center justify-between p-2.5 rounded-2xl transition-all duration-200 border ${
                                isSubActive
                                  ? "bg-primary/15 border-primary/40 text-primary font-semibold shadow-sm"
                                  : "border-transparent hover:bg-primary/5 hover:border-primary/20 text-foreground/90"
                              }`}
                            >
                              <div className="flex items-center gap-3">
                                <div
                                  className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${sub.color}`}
                                >
                                  <SubIcon className="w-4 h-4" />
                                </div>
                                <div className="space-y-0.5">
                                  <div className="text-xs font-bold leading-tight group-hover:text-primary transition-colors">
                                    {sub.label}
                                  </div>
                                  <div className="text-[10px] text-muted-foreground line-clamp-1">
                                    {sub.desc}
                                  </div>
                                </div>
                              </div>
                              <ArrowUpRight className="w-3.5 h-3.5 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link key={link.path} to={link.path}>
                <Button
                  variant="ghost"
                  className={`w-full flex items-center justify-start gap-3.5 rounded-xl transition-all duration-200 ${
                    active
                      ? "bg-primary/15 text-primary font-semibold border-l-4 border-primary shadow-sm"
                      : "hover:bg-primary/5 text-muted-foreground hover:text-foreground"
                  } ${!isSidebarOpen ? "px-0 justify-center" : "px-3.5"}`}
                  title={!isSidebarOpen ? link.label : undefined}
                >
                  <Icon className={`w-5 h-5 shrink-0 ${active ? "text-primary" : ""}`} />
                  {isSidebarOpen && (
                    <span className="text-sm font-medium whitespace-nowrap">
                      {link.label}
                    </span>
                  )}
                </Button>
              </Link>
            );
          })}
        </div>

        {/* Sidebar Footer: Theme Toggle Button */}
        <div className="p-3 border-t border-border/60">
          <Button
            variant="ghost"
            onClick={toggleTheme}
            className={`w-full flex items-center justify-start gap-3.5 rounded-xl transition-all duration-200 hover:bg-primary/10 ${
              !isSidebarOpen ? "px-0 justify-center" : "px-3.5"
            }`}
            title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {isDark ? (
              <Sun className="w-5 h-5 text-primary shrink-0" />
            ) : (
              <Moon className="w-5 h-5 text-primary shrink-0" />
            )}
            {isSidebarOpen && (
              <span className="text-sm font-medium whitespace-nowrap">
                {isDark ? "Light Mode" : "Dark Mode"}
              </span>
            )}
          </Button>
        </div>
      </aside>

      {/* Mobile Drawer (Left Slide-Over under top bar) */}
      {isMobileDrawerOpen && (
        <div className="fixed inset-0 z-50 md:hidden bg-black/60 backdrop-blur-sm">
          <div className="absolute left-0 top-0 bottom-0 w-72 max-w-[85vw] bg-card border-r border-border p-6 shadow-2xl flex flex-col justify-between animate-slide-up">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-border">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary/40">
                    <img src={profileImage} alt="Farook Kalumbi" className="w-full h-full object-cover object-center" />
                  </div>
                  <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-display">
                    Farook.dev
                  </span>
                </div>
                <Button variant="ghost" size="icon" onClick={() => setIsMobileDrawerOpen(false)} className="rounded-full">
                  <X className="w-5 h-5" />
                </Button>
              </div>

              <div className="py-6 space-y-2">
                {navLinks.map((link) => {
                  const Icon = link.icon;
                  const active = isActive(link.path);

                  if (link.label === "Projects") {
                    return (
                      <div key={link.path} className="space-y-1">
                        <Button
                          variant="ghost"
                          onClick={() => setIsMobileProjectsOpen(!isMobileProjectsOpen)}
                          className={`w-full justify-between gap-3.5 rounded-xl ${
                            active ? "bg-primary/15 text-primary font-semibold border-l-4 border-primary" : "hover:bg-primary/5"
                          }`}
                        >
                          <div className="flex items-center gap-3.5">
                            <Icon className="w-5 h-5 text-primary" />
                            <span>{link.label}</span>
                          </div>
                          <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isMobileProjectsOpen ? "rotate-180 text-primary" : ""}`} />
                        </Button>
                        {isMobileProjectsOpen && (
                          <div className="pl-4 space-y-1.5 pt-1.5 border-l-2 border-primary/20 ml-4 animate-in fade-in-0 duration-200">
                            {projectCategories.map((sub) => {
                              const SubIcon = sub.icon;
                              return (
                                <Link
                                  key={sub.path}
                                  to={sub.path}
                                  onClick={() => setIsMobileDrawerOpen(false)}
                                >
                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    className="w-full justify-start gap-2.5 text-xs rounded-xl hover:bg-primary/10 text-muted-foreground hover:text-foreground py-2"
                                  >
                                    <SubIcon className="w-3.5 h-3.5 text-primary shrink-0" />
                                    <span>{sub.label}</span>
                                  </Button>
                                </Link>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    );
                  }

                  return (
                    <Link key={link.path} to={link.path} onClick={() => setIsMobileDrawerOpen(false)}>
                      <Button
                        variant="ghost"
                        className={`w-full justify-start gap-3.5 rounded-xl ${
                          active ? "bg-primary/15 text-primary font-semibold border-l-4 border-primary" : "hover:bg-primary/5"
                        }`}
                      >
                        <Icon className="w-5 h-5 text-primary" />
                        <span>{link.label}</span>
                      </Button>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Mobile Drawer Theme Toggle */}
            <div className="pt-4 border-t border-border">
              <Button
                variant="ghost"
                onClick={toggleTheme}
                className="w-full justify-start gap-3.5 rounded-xl hover:bg-primary/10"
              >
                {isDark ? <Sun className="w-5 h-5 text-primary" /> : <Moon className="w-5 h-5 text-primary" />}
                <span>{isDark ? "Light Mode" : "Dark Mode"}</span>
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;

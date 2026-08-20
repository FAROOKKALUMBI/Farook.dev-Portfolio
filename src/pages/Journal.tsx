import { Calendar, BookOpen, Heart } from "lucide-react";
import { useState } from "react";

interface JournalEntry {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  category: "reflection" | "spiritual" | "personal";
}

const Journal = () => {
  const [selectedEntry, setSelectedEntry] = useState<number | null>(null);

  // Placeholder entries - ready for dynamic content
  const entries: JournalEntry[] = [
    {
      id: 1,
      title: "Welcome to My Journal",
      date: "2025-10-21",
      excerpt: "This is where I share my personal reflections, spiritual insights, and life journey.",
      content: "Your journal entries will appear here. This space is dedicated to personal growth, spiritual reflections, and meaningful moments worth remembering.",
      category: "reflection",
    },
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "reflection":
        return "from-primary to-accent";
      case "spiritual":
        return "from-accent to-secondary";
      case "personal":
        return "from-secondary to-primary";
      default:
        return "from-primary to-accent";
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "spiritual":
        return Heart;
      case "reflection":
        return BookOpen;
      default:
        return Calendar;
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 relative overflow-hidden bg-background">
      {/* Background with Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background animate-fade-in" />
      
      {/* Floating orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-4 animate-slide-up">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            Journal & Reflections
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Personal insights, spiritual thoughts, and life's meaningful moments
          </p>
        </div>

        {/* Journal Entries - Vibrant Cards */}
        <div className="space-y-6">
          {entries.map((entry, index) => {
            const CategoryIcon = getCategoryIcon(entry.category);
            const isExpanded = selectedEntry === entry.id;

            return (
              <div
                key={entry.id}
                className={`relative rounded-3xl overflow-hidden transition-all duration-500 animate-scale-in cursor-pointer border border-primary/20 hover:scale-[1.02] ${
                  index % 2 === 0
                    ? "bg-[linear-gradient(140deg,_hsl(var(--primary)/0.12),_hsl(var(--accent)/0.12))]"
                    : "bg-[linear-gradient(140deg,_hsl(var(--accent)/0.12),_hsl(var(--secondary)/0.12))]"
                }`}
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                }}
                onClick={() => setSelectedEntry(isExpanded ? null : entry.id)}
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_top_right,_hsl(var(--foreground)/0.12),_transparent_60%)]" />
                
                {/* Entry Header */}
                <div className="relative z-10 p-8 space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 space-y-3">
                      {/* Category Badge */}
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-primary/15 backdrop-blur-sm flex items-center justify-center">
                          <CategoryIcon className="w-6 h-6 text-primary" />
                        </div>
                        <span className="px-4 py-1.5 text-sm font-semibold rounded-full bg-primary/15 text-primary capitalize backdrop-blur-sm">
                          {entry.category}
                        </span>
                      </div>

                      {/* Title */}
                      <h2 className="text-3xl font-bold text-foreground">
                        {entry.title}
                      </h2>

                      {/* Date */}
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <time className="text-sm font-medium">
                          {new Date(entry.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
                        </time>
                      </div>
                    </div>
                  </div>

                  {/* Excerpt */}
                  <p className="text-lg text-foreground/80 leading-relaxed">
                    {entry.excerpt}
                  </p>

                  {/* Expanded Content */}
                  {isExpanded && (
                    <div className="pt-6 border-t border-border/60 animate-fade-in">
                      <div className="prose prose-lg max-w-none text-foreground/80">
                        <p className="whitespace-pre-wrap leading-relaxed">
                          {entry.content}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Read More Button */}
                  <button className="text-primary font-semibold hover:underline text-sm bg-primary/10 px-4 py-2 rounded-lg hover:bg-primary/20 transition-colors">
                    {isExpanded ? "Show less" : "Read more"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty State */}
        {entries.length === 0 && (
          <div className="text-center py-20 animate-fade-in">
            <BookOpen className="w-24 h-24 mx-auto text-muted-foreground/50 mb-6" />
            <h3 className="text-2xl font-bold text-muted-foreground mb-2">
              No journal entries yet
            </h3>
            <p className="text-muted-foreground">
              Your thoughts and reflections will appear here
            </p>
          </div>
        )}

        {/* Bottom CTA - Vibrant Card */}
        <div className="mt-20 text-center animate-fade-in" style={{ animationDelay: "0.8s" }}>
          <div className="relative rounded-3xl p-12 max-w-3xl mx-auto overflow-hidden border border-primary/20 bg-[linear-gradient(135deg,_hsl(var(--primary)/0.2),_hsl(var(--accent)/0.2))]">
            <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_center,_hsl(var(--foreground)/0.12),_transparent_60%)]" />
            <div className="relative z-10">
              <BookOpen className="w-16 h-16 mx-auto mb-6 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                A Space for Growth
              </h2>
              <p className="text-lg text-foreground/80">
                This journal is a collection of personal reflections, spiritual insights, and life lessons. 
                Each entry represents a moment of growth, contemplation, or inspiration worth preserving.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journal;

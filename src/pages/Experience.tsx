import { Briefcase, Users, Code, Megaphone, FolderGit2 } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Digital Manager",
      organization: "Pamthunzi Safety Net Organisation",
      dates: "2023–Present",
      highlights: [
        "Designed posters, flyers, banners, social media graphics, campaign materials, and other visual assets for organisational programmes and community initiatives.",
        "Developed consistent visual communication materials to strengthen the organisation's public image and communicate projects effectively to donors, partners, beneficiaries, and the wider community.",
        "Created promotional and documentation materials for food and clothing distributions, educational support programmes, youth activities, sports initiatives, and community outreach campaigns.",
        "Collaborated with organisational leadership, project teams, partners, and community stakeholders to translate ideas and project objectives into clear and engaging visual content.",
        "Supported digital communication and awareness campaigns by producing timely content for social media and other communication channels.",
      ],
      relevance:
        "Creativity, visual communication, attention to detail, understanding client and organisational needs, problem solving, teamwork, digital communication, time management, and ability to communicate complex ideas clearly through design.",
      icon: Briefcase,
    },
    {
      title: "Founder & Creative Technologist",
      organization: "Nexiv",
      dates: "2024–Present",
      highlights: [
        "Founded and developed a creative technology brand providing Graphic Design, Branding, UI/UX Design, Web Design, and Digital Marketing services.",
        "Designed and developed digital experiences, websites, brand identities, promotional materials, and visual content for individuals, businesses, and organisations.",
        "Combined web design, UI/UX, and graphic design skills to develop practical digital solutions that address communication and business needs.",
        "Managed projects from initial concept and client requirements through design, development, revisions, and final delivery.",
        "Maintained client communication throughout projects, translating ideas and requirements into functional and visually engaging solutions.",
      ],
      relevance:
        "Creativity, customer service, problem solving, project management, communication, technical skills, adaptability, independent working, teamwork, and ability to understand and deliver on client requirements.",
      icon: Users,
    },
    {
      title: "Software Developer & ICT Project Experience",
      organization: "Software Development & Technology Projects",
      dates: "2023–Present",
      highlights: [
        "Designed and developed web-based applications and digital platforms as part of academic, personal, and organisational technology projects.",
        "Worked with technologies including PHP, Laravel, JavaScript, React.js, TypeScript, MySQL, Supabase, HTML, CSS, and Tailwind CSS.",
        "Designed databases, user interfaces, system structures, and application functionality based on identified user and organisational requirements.",
        "Applied software engineering, object-oriented programming, systems analysis, UI/UX, and database management principles to solve practical problems.",
        "Used Git and GitHub for version control, project management, and collaborative software development.",
        "Continuously researched and adopted new technologies to improve the functionality, usability, and efficiency of digital solutions.",
      ],
      relevance:
        "Analytical thinking, problem solving, technical communication, attention to detail, teamwork, adaptability, logical reasoning, troubleshooting, and ability to learn and apply new technologies.",
      icon: Code,
    },
    {
      title: "Publication & Communications Director",
      organization: "Mzuzu University Muslim Students Association (MUMSA)",
      dates: "2024–Present",
      highlights: [
        "Managed and contributed to the production of digital and visual communication materials for student activities, programmes, announcements, and events.",
        "Designed promotional graphics and publication materials to communicate information effectively to students and the wider university community.",
        "Coordinated communication activities and worked with team members to ensure information was delivered accurately and on time.",
        "Used graphic design, digital media, and communication skills to strengthen the association's visibility and engagement.",
        "Collaborated with other student leaders to plan and promote activities and initiatives.",
      ],
      relevance:
        "Communication, leadership, teamwork, organisation, creativity, information management, stakeholder engagement, and ability to work effectively under deadlines.",
      icon: Megaphone,
    },
    {
      title: "Academic Projects & Practical ICT Experience",
      organization: "Mzuzu University ICT Department",
      dates: "2023–Present",
      highlights: [
        "Implemented full-stack web applications, database structures, and responsive user interfaces as part of degree projects.",
        "Developed web platforms utilizing modern frameworks including React.js, TypeScript, Tailwind CSS, PHP, and Supabase / MySQL databases.",
        "Analyzed user requirements and engineered software solutions emphasizing UI/UX design, data security, and efficient performance.",
      ],
      relevance:
        "Practical ICT application, database engineering, system design, modern frontend & backend development, and academic software rigor.",
      icon: FolderGit2,
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 relative overflow-hidden bg-background text-foreground">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background animate-fade-in" />
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4 animate-slide-up">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            Experience & Leadership
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional roles, creative leadership, and practical software engineering experiences.
          </p>
        </div>

        <div className="grid gap-8">
          {experiences.map((experience) => {
            const Icon = experience.icon;
            return (
              <div
                key={experience.title}
                className="rounded-3xl border border-border/60 bg-card/80 p-6 md:p-8 shadow-card hover:border-primary/40 transition-colors"
              >
                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="space-y-4 flex-1">
                    <div>
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                        <h2 className="text-xl md:text-2xl font-bold text-foreground">
                          {experience.title}
                        </h2>
                        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary/15 text-primary border border-primary/20 self-start sm:self-auto">
                          {experience.dates}
                        </span>
                      </div>
                      <p className="text-sm font-medium text-muted-foreground mt-0.5">
                        {experience.organization}
                      </p>
                    </div>
                    <ul className="space-y-2.5 text-sm text-muted-foreground leading-relaxed">
                      {experience.highlights.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-primary font-bold">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="rounded-2xl border border-primary/20 bg-primary/10 p-4 text-sm text-foreground/90 leading-relaxed">
                      <span className="font-bold text-primary">Relevance to role:</span>{" "}
                      {experience.relevance}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Experience;

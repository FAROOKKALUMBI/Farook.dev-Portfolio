import { useState } from "react";
import { Palette, Image, LayoutPanelTop, Code2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      id: "graphic",
      title: "Graphic Designing",
      description: "Posters, brand assets, and social media visuals with clear hierarchy.",
      Icon: Palette,
    },
    {
      id: "photo",
      title: "Photo Editing",
      description: "Retouching, color correction, and creative photo manipulation.",
      Icon: Image,
    },
    {
      id: "design",
      title: "Web Designing",
      description: "Responsive UI layouts with strong typography and bold visuals.",
      Icon: LayoutPanelTop,
    },
    {
      id: "dev",
      title: "Web Developing",
      description: "Fast, accessible websites built with modern tools and clean code.",
      Icon: Code2,
    },
  ];

  const [activeService, setActiveService] = useState(services[0].id);

  const servicePackages = {
    graphic: {
      title: "Graphic Designing Price List",
      currency: "MWK",
      sections: [
        {
          label: "General Price",
          rows: [
            { name: "Banner Designs", amount: "25,000" },
            { name: "Brochure", amount: "30,000" },
            { name: "Business Cards", amount: "20,000" },
            { name: "Engagement Cards", amount: "15,000" },
            { name: "Flyers", amount: "15,000" },
            { name: "Poster", amount: "15,000" },
            { name: "Save the Date", amount: "15,000" },
            { name: "Social Media Ads", amount: "15,000" },
            { name: "Product Sticker", amount: "20,000" },
            { name: "Wedding Cards", amount: "15,000" },
          ],
        },
        {
          label: "Logo Price",
          rows: [
            { name: "Art & Entertainment", amount: "30,000" },
            { name: "Business", amount: "20,000" },
            { name: "Company", amount: "50,000" },
            { name: "Institution", amount: "75,000" },
            { name: "Organisation", amount: "75,000" },
            { name: "Personal", amount: "20,000" },
            { name: "Photography", amount: "25,000" },
            { name: "Saloon & Beauty Makeup", amount: "25,000" },
          ],
        },
      ],
      note: "We start working after 50% payment is received.",
    },
    photo: {
      title: "Photo Editing Packages",
      currency: "MWK",
      sections: [
        {
          label: "Editing Only (per Number of Photos)",
          rows: [
            { name: "10 Photos", amount: "10,000" },
            { name: "20 Photos", amount: "15,000" },
            { name: "50 Photos", amount: "20,000" },
            { name: "100 Photos", amount: "30,000" },
            { name: "100+ Photos", amount: "Contact for Quote" },
          ]
        },
        {
          label : "Photoshoot And Editing",
          rows: [
            { name: "10 Photos", amount: "15,000" },
            { name: "20 Photos", amount: "20,000" },
            { name: "50 Photos", amount: "30,000" },
            { name: "100 Photos", amount: "40,000" },
            { name: "100+ Photos", amount: "Contact for Quote" },
          ]
        }
      ]
      
    },
    design: {
      title: "Web Designing Packages",
      currency: "MWK",
      sections: [
        {
          label: "UI/UX Design",
          rows: [
            {name: "Single Page Design", amount: "75,000"},
            {name: "Up to 5 Pages Website UI", amount: "150,000"},
            {name: "Up to 10 Pages Website UI", amount: "300,000"},
            {name: "Mobile App UI( 5 Screens)", amount: "500,000"},
            {name: "Custom Design", amount: "Contact for Quote"},
          ]
        },
        {
          label: "Design Extras",
          rows:[
            {name: "Design Revisions", amount: "10,000 per revision"},
            {name: "Additional Page Design", amount: "40,000 per page"},
            {name: "Prototype(Clickable)", amount: "100,000"},
            {name: "Brand Style Guide", amount: "150,000"},
          ],
        },
      ],
      note: "A 50% deposit is required to start the design process, with the remaining balance due upon completion.",
      note2: "Revisions beyond agreed scope are billed separately",
    },
        dev: {
      title: "Web Developing Price List",
      currency: "MWK",
      sections: [
        {
          label: "Website Development",
          rows: [
            { name: "Single Page Website", amount: "250,000" },
            { name: "Up to 5 Pages Website", amount: "450,000" },
            { name: "Up to 10 Pages Website", amount: "750,000" },
            { name: "Custom Web App (Starter)", amount: "1,200,000" },
          ],
        },
        {
          label: "Maintenance & Add-ons",
          rows: [
            { name: "Monthly Maintenance", amount: "100,000" },
            { name: "Content Updates (Per Month)", amount: "70,000" },
            { name: "Performance Optimization", amount: "150,000" },
          ],
        },
      ],
      note: "Hosting and domain costs are paid separately by the client.",
    },

  } as const;

  const activePricing = servicePackages[activeService as keyof typeof servicePackages];

  return (
    <div className="min-h-screen relative overflow-hidden bg-background text-foreground">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_hsl(var(--primary)/0.18),_transparent_55%)]" />
      <div className="relative z-10 px-4 pb-20 pt-28">
        
          <div className="text-center mb-16 space-y-4 animate-slide-up">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            My Services
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
           Each service is tailored to your goals, timeline, and visual identity. I keep
            the process clear so you always know what is happening.
          </p>
        </div>

        <section className="max-w-6xl mx-auto mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <button
              key={service.id}
              type="button"
              onClick={() => setActiveService(service.id)}
              className={`rounded-2xl p-6 border text-left shadow-card transition-all duration-300 ${
                activeService === service.id
                  ? "border-primary/60 bg-[linear-gradient(160deg,_hsl(var(--primary)/0.25),_hsl(var(--accent)/0.2))]"
                  : "border-border bg-card/70 hover:-translate-y-1"
              }`}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-primary/10 text-primary">
                <service.Icon className="w-6 h-6" />
              </div>
              <h3 className="mt-4 text-xl font-semibold">{service.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{service.description}</p>
            </button>
          ))}
        </section>

        <section className="max-w-6xl mx-auto mt-12">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <h2 className="text-3xl md:text-4xl font-semibold font-display">
              {activePricing.title}
            </h2>
            <p className="text-sm text-muted-foreground">
              Tap a service above to switch pricing.
            </p>
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            {activePricing.sections.map((section) => (
              <div
                key={section.label}
                className="rounded-3xl border border-primary/30 bg-[linear-gradient(160deg,_hsl(var(--primary)/0.25),_hsl(var(--secondary)/0.2))] p-6 shadow-card text-foreground"
              >
                <div className="inline-flex items-center rounded-full bg-primary/15 px-4 py-1 text-xs uppercase tracking-[0.2em] text-primary">
                  {section.label}
                </div>
                <div className="mt-4 grid gap-3">
                  <div className="flex justify-between text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    <span>Description</span>
                    <span>Amount</span>
                  </div>
                  {section.rows.map((row) => (
                    <div
                      key={row.name}
                      className="flex items-center justify-between border-b border-primary/20 pb-2 text-sm"
                    >
                      <span>{row.name}</span>
                      <span className="font-semibold text-primary">
                        {row.amount.toLowerCase().includes("contact for quote")
                          ? row.amount
                          : `${activePricing.currency} ${row.amount}`}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
            <div className="rounded-3xl border border-border bg-card/70 p-6 shadow-card">
              <h3 className="text-xl font-semibold">Payment Notes</h3>
              <p className="mt-3 text-sm text-muted-foreground">
                Payment is done through Airtel Money, TNM Mpamba, or NBM.
              </p>
              <div className="mt-4 rounded-2xl border border-primary/30 bg-primary/10 p-4 text-sm text-foreground">
                Note: {activePricing.note}
              </div>
              <Link to="/contact" className="inline-flex mt-6">
                <Button size="lg" className="rounded-2xl px-8 py-6">
                  Request a Quote
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

       {/* <section className="max-w-6xl mx-auto mt-16 rounded-3xl border border-primary/20 bg-card/60 p-8 md:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold font-display">
                3000x3000 Advertising Design
              </h2>
              <p className="mt-3 text-sm text-muted-foreground">
                A square promo visual inspired by your reference. Download the full 3000x3000
                artwork and use it for ads, posts, or print.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="/images/services-ad-3000.svg"
                  download="services-ad-3000.svg"
                  className="inline-flex"
                >
                  <Button size="lg" className="rounded-2xl px-8 py-6">
                    Download Image
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </a>
                <a
                  href="/images/services-ad-3000.svg"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex"
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-2xl px-8 py-6 border-primary/40 text-primary"
                  >
                    Open Full Size
                  </Button>
                </a>
              </div>
            </div>
            <div className="rounded-3xl border border-primary/20 bg-background/40 p-4">
              <img
                src="/images/services-ad-3000.svg"
                alt="Advertising design preview"
                className="w-full rounded-2xl shadow-card"
                loading="lazy"
              />
            </div>
          </div>
        </section> */}

        <section className="max-w-4xl mx-auto mt-16 rounded-3xl border border-primary/20 p-8 md:p-10 bg-[linear-gradient(135deg,_hsl(var(--primary)/0.2),_hsl(var(--accent)/0.15))] text-center">
          <h2 className="text-3xl font-semibold font-display text-white">
            Ready to start your project?
          </h2>
          <p className="mt-3 text-white/80">
            Tell me about your idea and I will send a clear plan for the next steps.
          </p>
          <Link to="/contact" className="inline-flex mt-6">
            <Button size="lg" className="rounded-2xl px-8 py-6 bg-white text-slate-900 hover:bg-white/90">
              Let us talk
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </section>
      </div>
    </div>
  );
};

export default Services;

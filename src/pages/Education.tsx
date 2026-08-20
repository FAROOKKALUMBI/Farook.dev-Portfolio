import { useEffect, useRef, useState } from "react";
import { GraduationCap, Award, X } from "lucide-react";
import * as pdfjsLib from "pdfjs-dist";
import pdfWorker from "pdfjs-dist/build/pdf.worker?url";

const Education = () => {
  const education = [
    {
      level: "Primary School",
      school: "All Angels Primary School",
      years: "2009 - 2014",
      detail: "Foundation studies and early primary education.",
    },
    {
      level: "Primary School",
      school: "Senga Bay L.E.A Primary School",
      years: "2015 - 2017",
      detail: "Primary education and primary school leaving examination.",
    },
    {
      level: "Secondary School",
      school: "Chipoka Secondary School",
      years: "2018 - 2022",
      detail: "Secondary education focused on science, mathematics, and technology.",
    },
    {
      level: "University",
      school: "Mzuzu University",
      years: "2023 - Present",
      detail: "Bachelor Of Science in Information And Communication Technology (ICT)",
      badges: ["Level 3, Sem 2", "Registered", "Continuing"],
    },
  ];

  const certificates = [
    {
      title: "CCNA: Introduction to Networks",
      issuer: "Cisco Networking Academy",
      year: "2026",
      fileName: "CCNA-_Introduction_to_Networks_certificate_bsfas1622-my-mzuni-ac-mw_d58e19f0-916b-401e-8470-bfc938cd28bb.pdf",
    },
    {
      title: "Cyber Threat Management",
      issuer: "Cisco Networking Academy",
      year: "2025",
      fileName: "Cyber_Threat_Management_certificate_bsfas1622-my-mzuni-ac-mw_93e025b4-7ed0-42b0-8291-34ee339aa90b.pdf",
    },
    {
      title: "Ethical Hacker",
      issuer: "Cisco Networking Academy",
      year: "2025",
      fileName: "Ethical_Hacker_certificate_kalumbifarook21-gmail-com_02bc1e3c-e883-4125-95cc-3d321c127f96.pdf",
    },
    {
      title: "Introduction to Cybersecurity",
      issuer: "Cisco Networking Academy",
      year: "2025",
      fileName: "Introduction_to_Cybersecurity_certificate_bsfas1622-my-mzuni-ac-mw_4053064a-1867-4046-8d2d-40b721970e9e.pdf",
    },
    {
      title: "JavaScript Essentials 1",
      issuer: "Cisco Networking Academy",
      year: "2025",
      fileName: "JavaScript_Essentials_1_certificate_kalumbifarook21-gmail-com_d099abaa-c206-4b79-b93e-e15cd8de4382.pdf",
    },
    {
      title: "HTML Essentials",
      issuer: "Cisco Networking Academy",
      year: "2025",
      fileName: "HTML_Essentials_certificate_kalumbifarook21-gmail-com_6b0811b2-a8fe-4639-972f-daa1276ae84e.pdf",
    },
    {
      title: "CSS Essentials",
      issuer: "Cisco Networking Academy",
      year: "2025",
      fileName: "CSS_Essentials_certificate_kalumbifarook21-gmail-com_f3281080-b49c-47fe-9d15-fdb4ef1fccc5.pdf",
    },
    {
      title: "C++ Advanced",
      issuer: "Cisco Networking Academy",
      year: "2025",
      fileName: "C--_Advanced_certificate_bsfas1622-my-mzuni-ac-mw_8a0f6a6c-22be-455e-82a9-4a3c786dba21.pdf",
    },
    {
      title: "Apply AI: Update Your Resume",
      issuer: "Cisco Networking Academy",
      year: "2025",
      fileName: "Apply_AI-_Update_Your_Resume_certificate_kalumbifarook21-gmail-com_f627b3a0-9cb8-474e-8d14-8129055e7e98.pdf",
    },
    {
      title: "Exploring Networking with Cisco Packet Tracer",
      issuer: "Cisco Networking Academy",
      year: "2025",
      fileName: "Exploring_Networking_with_Cisco_Packet_Tracer_certificate_kalumbifarook21-gmail-com_eb50d7a4-4e59-48c4-9aa4-b39756ccab16 (1).pdf",
    },
    {
      title: "Introduction to IoT",
      issuer: "Cisco Networking Academy",
      year: "2025",
      fileName: "Introduction_to_IoT_certificate_bsfas1622-my-mzuni-ac-mw_171f4099-3790-4e87-8630-4c22d9b1a509.pdf",
    },
    {
      title: "Operating Systems Support",
      issuer: "Cisco Networking Academy",
      year: "2025",
      fileName: "Operating_Systems_Support_certificate_bsfas1622-my-mzuni-ac-mw_99c6738d-caec-45a6-bdf6-7a4f921ceb84.pdf",
    },
    {
      title: "English for IT 2",
      issuer: "Cisco Networking Academy",
      year: "2025",
      fileName: "English_for_IT_2_certificate_bsfas1622-my-mzuni-ac-mw_864a6a14-01e1-4df8-b8a3-4de4488ca9f8.pdf",
    },
  ];

  pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorker;

  const isImageFile = (fileName: string) =>
    /\.(png|jpg|jpeg)$/i.test(fileName);

  const certificateUrl = (fileName: string) =>
    encodeURI(`/certificates/${fileName}`);

  const [activeCertificate, setActiveCertificate] = useState<null | {
    title: string;
    issuer: string;
    year: string;
    fileName: string;
  }>(null);

  const PdfCanvas = ({
    fileUrl,
    mode,
  }: {
    fileUrl: string;
    mode: "preview" | "full";
  }) => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      let cancelled = false;
      const container = containerRef.current;
      if (!container) {
        return;
      }

      container.innerHTML = "Loading preview...";

      const render = async () => {
        try {
          const pdf = await pdfjsLib.getDocument(fileUrl).promise;
          const pages =
            mode === "preview"
              ? [1]
              : Array.from({ length: pdf.numPages }, (_, index) => index + 1);

          container.innerHTML = "";

          for (const pageNumber of pages) {
            const page = await pdf.getPage(pageNumber);
            const viewport = page.getViewport({
              scale: mode === "preview" ? 0.6 : 1.1,
            });
            const canvas = document.createElement("canvas");
            const context = canvas.getContext("2d");
            if (!context || cancelled) {
              break;
            }
            canvas.width = viewport.width;
            canvas.height = viewport.height;
            canvas.style.width = "100%";
            canvas.style.height = "auto";
            canvas.style.borderRadius = "12px";
            canvas.style.background = "#ffffff";
            canvas.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.2)";
            await page.render({ canvasContext: context, viewport, canvas }).promise;
            if (cancelled) {
              break;
            }
            container.appendChild(canvas);
          }
        } catch (error) {
          container.innerHTML = "Unable to load PDF preview.";
        }
      };

      render();

      return () => {
        cancelled = true;
      };
    }, [fileUrl, mode]);

    return (
      <div
        ref={containerRef}
        className={
          mode === "preview"
            ? "h-40 overflow-hidden text-sm text-muted-foreground"
            : "grid gap-6"
        }
      />
    );
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-background text-foreground">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_hsl(var(--primary)/0.18),_transparent_55%)]" />
      <div className="relative z-10 px-6 pb-20 pt-28 sm:px-8 lg:px-12">
        <div className="text-center mb-16 space-y-4 animate-slide-up">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            My Education
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            This page will grow with new certifications and milestones as I continue learning.
          </p>
        </div>

        <section className="max-w-5xl mx-auto mt-12 grid gap-6">
          {education.map((item) => (
            <div
              key={`${item.school}-${item.years}`}
              className="rounded-2xl border border-border bg-card/70 p-6 shadow-card hover:border-primary/30 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="mt-1 w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      {item.level}
                    </p>
                    <h3 className="text-xl font-semibold">{item.school}</h3>
                    <p className="text-sm text-primary font-medium">{item.years}</p>
                    <p className="text-sm text-muted-foreground mt-2">{item.detail}</p>
                  </div>
                </div>

                {item.badges && (
                  <div className="flex flex-wrap items-center gap-2 mt-2 sm:mt-0">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/15 text-blue-400 border border-blue-500/30">
                      {item.badges[0]}
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                      {item.badges[1]}
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-teal-500/15 text-teal-400 border border-teal-500/30">
                      {item.badges[2]}
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </section>

        <section className="max-w-5xl mx-auto mt-16 rounded-3xl border border-primary/20 p-8 md:p-10 bg-[linear-gradient(135deg,_hsl(var(--primary)/0.2),_hsl(var(--accent)/0.15))]">
          <div className="flex items-start gap-4">
            <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center text-white">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-4xl font-semibold font-display bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                Certifications and achievements
              </h2>
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {certificates.map((certificate) => (
            <div
              key={certificate.fileName}
              className="rounded-2xl border border-border/60 bg-card/80 p-5 shadow-card"
            >
              <div className="rounded-xl border border-border/60 bg-background/70 overflow-hidden p-3">
                {isImageFile(certificate.fileName) ? (
                  <img
                    src={certificateUrl(certificate.fileName)}
                    alt={certificate.title}
                    className="w-full h-36 object-cover rounded-lg"
                  />
                ) : (
                  <PdfCanvas
                    fileUrl={certificateUrl(certificate.fileName)}
                    mode="preview"
                  />
                )}
              </div>
              <div className="mt-4 space-y-1">
                <h3 className="text-lg font-semibold">{certificate.title}</h3>
                <p className="text-sm text-muted-foreground">{certificate.issuer}</p>
                <p className="text-sm text-primary">{certificate.year}</p>
              </div>
              <button
                type="button"
                onClick={() => setActiveCertificate(certificate)}
                className="mt-3 inline-flex text-sm text-primary hover:underline"
              >
                View certificate
              </button>
            </div>
          ))}
        </section>
      </div>
      {activeCertificate && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative w-full max-w-3xl rounded-2xl border border-border bg-background shadow-card">
            <div className="flex items-center justify-between px-6 py-4 border-b border-border">
              <div>
                <h3 className="text-lg font-semibold">{activeCertificate.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {activeCertificate.issuer} - {activeCertificate.year}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setActiveCertificate(null)}
                className="rounded-full p-2 hover:bg-muted/60"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6">
              {isImageFile(activeCertificate.fileName) ? (
                <img
                  src={certificateUrl(activeCertificate.fileName)}
                  alt={activeCertificate.title}
                  className="w-full max-h-[70vh] object-contain rounded-xl bg-muted"
                />
              ) : (
                <div className="max-h-[70vh] overflow-auto rounded-xl border border-border p-4">
                  <PdfCanvas
                    fileUrl={certificateUrl(activeCertificate.fileName)}
                    mode="full"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Education;

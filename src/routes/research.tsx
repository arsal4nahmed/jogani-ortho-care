import { createFileRoute } from "@tanstack/react-router";
import { Mic, Award, BookOpen, Users, FileText } from "lucide-react";
import { SectionHeading } from "@/components/site/SectionHeading";

export const Route = createFileRoute("/research")({
  head: () => ({
    meta: [
      { title: "Research & Academic Achievements | Dr. Abhinav Jogani" },
      { name: "description", content: "Faculty speaker at APOA Congress 2024, jury member for Orthopaedic Journal of Sports Medicine, and published research in leading orthopedic journals." },
      { property: "og:title", content: "Research & Academic Achievements — Dr. Abhinav Jogani" },
      { property: "og:description", content: "Internationally recognized academic and research contributions in orthopedics." },
      { property: "og:url", content: "/research" },
    ],
    links: [{ rel: "canonical", href: "/research" }],
  }),
  component: ResearchPage,
});

const timeline = [
  {
    year: "2024",
    icon: Mic,
    title: "Faculty Speaker — 23rd APOA Congress",
    desc: "Invited faculty at the Asia Pacific Orthopaedic Association Congress, February–March 2024.",
  },
  {
    year: "2024",
    icon: Award,
    title: "Jury Member — Orthopaedic Journal of Sports Medicine",
    desc: "Serves on the jury panel for the American Academy's Orthopaedic Journal of Sports Medicine.",
  },
  {
    year: "2023",
    icon: Users,
    title: "Table Demonstrator — 1st Nagpur Trauma Course",
    desc: "Led practical demonstrations for 500+ national delegates at the inaugural NTC, April 2023.",
  },
  {
    year: "2019 – 2024",
    icon: BookOpen,
    title: "Published in Journal of Orthopaedic Case Reports",
    desc: "Multiple peer-reviewed publications spanning fracture management and reconstructive techniques.",
  },
  {
    year: "2021",
    icon: FileText,
    title: "Published in Asian Journal of Neurosurgery",
    desc: "Contribution on cervical plating complications and management strategies.",
  },
  {
    year: "Ongoing",
    icon: Users,
    title: "Co-author with Prof. Sumedh Chaudhary",
    desc: "Continuing research collaboration with the Head of Orthopaedics at Government Medical College, Nagpur.",
  },
];

const papers = [
  "Modified Masquelet Technique for segmental bone defects",
  "Giant Cell Tumor — surgical management outcomes",
  "Complex Regional Pain Syndrome (CRPS) after orthopedic trauma",
  "Cervical Plating complications — case series & review",
  "Femur Fractures — fixation techniques and outcomes",
];

function ResearchPage() {
  return (
    <div>
      <section className="bg-gradient-hero py-20 text-primary-foreground md:py-28">
        <div className="mx-auto max-w-4xl px-4 text-center md:px-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-gold">
            Research & Academics
          </div>
          <h1 className="mt-6 font-serif text-4xl font-semibold md:text-6xl">An active voice in orthopedic research.</h1>
          <p className="mt-5 text-base text-primary-foreground/80 md:text-lg">
            Speaking, publishing, and mentoring across India and the Asia Pacific.
          </p>
        </div>
      </section>

      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <SectionHeading eyebrow="Timeline" title="Selected highlights." />
          <div className="relative mt-12 border-l-2 border-gold/30 pl-8">
            {timeline.map((t) => (
              <div key={t.title} className="relative mb-10 last:mb-0">
                <div className="absolute -left-[42px] flex h-10 w-10 items-center justify-center rounded-full bg-gradient-gold text-gold-foreground shadow-soft">
                  <t.icon className="h-5 w-5" />
                </div>
                <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">{t.year}</div>
                  <h3 className="mt-2 font-serif text-xl font-semibold text-primary">{t.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary/50 py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <SectionHeading eyebrow="Selected Publications" title="Notable papers & topics." />
          <ul className="mt-10 grid gap-3 sm:grid-cols-2">
            {papers.map((p) => (
              <li key={p} className="flex items-start gap-3 rounded-xl border border-border bg-card p-5 shadow-soft">
                <FileText className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                <span className="text-sm leading-relaxed text-foreground/85">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

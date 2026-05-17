import { createFileRoute, Link } from "@tanstack/react-router";
import { GraduationCap, Award, BookOpen, HeartHandshake, ArrowRight } from "lucide-react";
import heroDoctor from "@/assets/hero-doctor.jpg";
import { SectionHeading } from "@/components/site/SectionHeading";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Dr. Abhinav Jogani — Orthopedic Surgeon, Nagpur" },
      { name: "description", content: "Meet Dr. Abhinav Dinesh Jogani — MS Orthopedics from KEM Mumbai, DNB, 15+ years of experience in joint replacement & complex trauma surgery in Nagpur." },
      { property: "og:title", content: "About Dr. Abhinav Jogani" },
      { property: "og:description", content: "Patient-first orthopedic care from a KEM Mumbai-trained surgeon." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const credentials = [
  { icon: GraduationCap, title: "M.S. Orthopedics", desc: "King Edward Memorial (KEM) Hospital, Mumbai — among India's most prestigious training institutions." },
  { icon: Award, title: "D.N.B. Orthopedics", desc: "Diplomate of the National Board — a mark of clinical and academic rigor." },
  { icon: BookOpen, title: "Affiliated Researcher", desc: "Continues research collaboration with KEM Hospital & Seth G.S. Medical College, Mumbai." },
  { icon: HeartHandshake, title: "Patient-First Philosophy", desc: "Avoids unnecessary surgeries. Explains every condition in plain language." },
];

function AboutPage() {
  return (
    <div>
      <section className="bg-gradient-hero py-20 text-primary-foreground md:py-28">
        <div className="mx-auto max-w-4xl px-4 text-center md:px-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-gold">
            About the Doctor
          </div>
          <h1 className="mt-6 font-serif text-4xl font-semibold md:text-6xl">Dr. Abhinav Dinesh Jogani</h1>
          <p className="mt-5 text-base text-primary-foreground/80 md:text-lg">
            A nationally recognized orthopedic surgeon, deeply rooted in the Nagpur community.
          </p>
        </div>
      </section>

      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 md:grid-cols-2 md:items-center md:px-6">
          <img src={heroDoctor} alt="Dr. Abhinav Jogani" loading="lazy" width={1536} height={1280} className="aspect-[4/5] w-full rounded-2xl object-cover shadow-elegant" />
          <div>
            <SectionHeading title="Academically accomplished. Genuinely caring." />
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>With over <strong className="text-foreground">15 years of clinical experience</strong>, Dr. Abhinav Jogani is one of central India's most respected orthopedic and joint replacement surgeons.</p>
              <p>He earned his <strong className="text-foreground">M.S. in Orthopedics from K.E.M. Hospital, Mumbai</strong> — a hospital known for shaping India's top clinicians — and went on to complete his <strong className="text-foreground">D.N.B. in Orthopedics</strong>, reinforcing both his surgical precision and academic depth.</p>
              <p>Patients across Nagpur know him for one thing above all: he listens. He explains scans, options, and risks in language anyone can understand, and recommends surgery only when it is genuinely the best path forward.</p>
              <p>Outside the clinic, he hosts a <strong className="text-foreground">free monthly Bone Mineral Density (BMD) camp every Sunday</strong> — a quiet community contribution that reflects who he is.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary/50 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionHeading center eyebrow="Credentials" title="Training and philosophy." />
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {credentials.map((c) => (
              <div key={c.title} className="flex gap-5 rounded-2xl border border-border bg-card p-6 shadow-soft">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-gold text-gold-foreground">
                  <c.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-primary">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center md:px-6">
          <SectionHeading center title="Ready to take the next step?" description="Whether it's a second opinion or a long-awaited surgery — we're here." />
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-6 py-3 text-sm font-semibold text-gold-foreground shadow-gold hover:scale-105">
              Book Appointment <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/services" className="inline-flex items-center gap-2 rounded-full border border-primary/20 px-6 py-3 text-sm font-semibold text-primary hover:bg-primary hover:text-primary-foreground">
              View Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

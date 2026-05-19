import { createFileRoute, Link } from "@tanstack/react-router";
import { Clock, ArrowRight, BookOpen } from "lucide-react";
import { SectionHeading } from "@/components/site/SectionHeading";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Orthopedic Blog & Patient Education | Dr. Abhinav Jogani" },
      { name: "description", content: "Patient-friendly articles on neck, shoulder, elbow, wrist, hip, knee, spine, and foot & ankle conditions by Dr. Abhinav Jogani, Orthopedic Surgeon in Nagpur." },
      { property: "og:title", content: "Orthopedic Blog — Dr. Abhinav Jogani" },
      { property: "og:description", content: "Trusted orthopedic insights, region by region." },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogPage,
});

type Article = { title: string; excerpt: string; readTime: string };
type Region = { id: string; name: string; description: string; articles: Article[] };

const regions: Region[] = [
  {
    id: "neck",
    name: "Neck",
    description: "Cervical spine conditions, posture-related pain, and when to seek a specialist.",
    articles: [
      { title: "Understanding Cervical Spondylosis", excerpt: "Age-related wear of the neck joints — what symptoms to watch for and how it's managed.", readTime: "6 min read" },
      { title: "When Neck Pain Needs a Specialist", excerpt: "Red-flag signs that mean your neck pain is more than muscle strain.", readTime: "4 min read" },
      { title: "Posture & Tech Neck in the Screen Era", excerpt: "Simple daily corrections to undo hours of phone- and laptop-induced strain.", readTime: "5 min read" },
    ],
  },
  {
    id: "shoulder",
    name: "Shoulder",
    description: "From rotator cuff injuries to frozen shoulder and instability.",
    articles: [
      { title: "Rotator Cuff Tears Explained", excerpt: "Causes, symptoms, and the modern arthroscopic options for repair.", readTime: "7 min read" },
      { title: "Frozen Shoulder: A Recovery Roadmap", excerpt: "What to expect during the freezing, frozen, and thawing phases.", readTime: "6 min read" },
      { title: "Shoulder Dislocation: First Aid & Next Steps", excerpt: "What to do in the first hour and why proper follow-up prevents recurrence.", readTime: "5 min read" },
    ],
  },
  {
    id: "elbow",
    name: "Elbow",
    description: "Overuse injuries, nerve entrapments, and traumatic fractures.",
    articles: [
      { title: "Tennis Elbow vs Golfer's Elbow", excerpt: "Two similar names, two different conditions — and how to treat each.", readTime: "5 min read" },
      { title: "Cubital Tunnel Syndrome", excerpt: "When pins and needles in the ring and little finger point to a pinched nerve.", readTime: "6 min read" },
      { title: "Elbow Fracture Recovery", excerpt: "Timelines, physiotherapy milestones, and regaining full range of motion.", readTime: "6 min read" },
    ],
  },
  {
    id: "wrist",
    name: "Wrist",
    description: "Carpal tunnel, sprains, fractures, and tendon disorders of the hand.",
    articles: [
      { title: "Carpal Tunnel Syndrome", excerpt: "Why your hand goes numb at night and the conservative-to-surgical care ladder.", readTime: "6 min read" },
      { title: "Wrist Sprain vs Fracture", excerpt: "How to tell the difference after a fall — and when an X-ray is essential.", readTime: "4 min read" },
      { title: "De Quervain's Tenosynovitis", excerpt: "A common 'mother's wrist' condition — diagnosis and treatment options.", readTime: "5 min read" },
    ],
  },
  {
    id: "hip",
    name: "Hip",
    description: "Joint replacement, avascular necrosis, and soft-tissue hip pain.",
    articles: [
      { title: "Hip Replacement: What to Expect", excerpt: "A step-by-step walkthrough from surgery day to walking pain-free.", readTime: "8 min read" },
      { title: "Avascular Necrosis of the Hip", excerpt: "Early diagnosis can preserve your natural joint — here's what to look for.", readTime: "7 min read" },
      { title: "Managing Hip Bursitis", excerpt: "Lateral hip pain that won't quit — causes, exercises, and injections.", readTime: "5 min read" },
    ],
  },
  {
    id: "knee",
    name: "Knee",
    description: "Ligament injuries, meniscus tears, arthritis, and joint replacement.",
    articles: [
      { title: "ACL Tear: Recovery Timeline", excerpt: "From the moment of injury to returning to sport — month by month.", readTime: "8 min read" },
      { title: "Knee Replacement Demystified", excerpt: "Modern implants, minimally invasive approaches, and rehab expectations.", readTime: "8 min read" },
      { title: "Meniscus Tears: Repair or Trim?", excerpt: "How surgeons decide which tears need fixing and which can be left alone.", readTime: "6 min read" },
    ],
  },
  {
    id: "spine",
    name: "Spine",
    description: "Lumbar and cervical disc disease, sciatica, and stenosis.",
    articles: [
      { title: "Lumbar Disc Herniation", excerpt: "Why most slipped discs heal without surgery — and when they don't.", readTime: "7 min read" },
      { title: "Sciatica: Causes & Treatment", excerpt: "That shooting pain down your leg — understanding the root cause.", readTime: "6 min read" },
      { title: "Spinal Stenosis Explained", excerpt: "A narrowing spinal canal and the modern decompression options available.", readTime: "7 min read" },
    ],
  },
  {
    id: "foot-ankle",
    name: "Foot & Ankle",
    description: "Heel pain, sprains, tendon injuries, and gait-related problems.",
    articles: [
      { title: "Plantar Fasciitis", excerpt: "Heel pain that's worst in the morning — stretches, orthotics, and beyond.", readTime: "5 min read" },
      { title: "Ankle Sprain Grading", excerpt: "Grade I, II, or III? How the severity changes your recovery plan.", readTime: "5 min read" },
      { title: "Achilles Tendon Injuries", excerpt: "From tendinitis to rupture — recognizing the spectrum of injuries.", readTime: "6 min read" },
    ],
  },
];

function BlogPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-hero py-20 text-primary-foreground md:py-28">
        <div className="mx-auto max-w-4xl px-4 text-center md:px-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-gold">
            <BookOpen className="h-3.5 w-3.5" /> Patient Education
          </div>
          <h1 className="mt-6 font-serif text-4xl font-semibold md:text-6xl">Orthopedic Insights & Articles</h1>
          <p className="mt-5 text-base text-primary-foreground/80 md:text-lg">
            Clear, trustworthy answers to the orthopedic questions our patients ask most — organized by body region.
          </p>
        </div>
      </section>

      {/* Sticky category nav */}
      <nav className="sticky top-[73px] z-30 border-b border-border bg-background/90 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <ul className="flex gap-2 overflow-x-auto py-3 scrollbar-hide">
            {regions.map((r) => (
              <li key={r.id} className="shrink-0">
                <a
                  href={`#${r.id}`}
                  className="inline-flex items-center rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium text-foreground/80 transition-colors hover:border-gold hover:bg-gold/10 hover:text-primary"
                >
                  {r.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Sections */}
      {regions.map((region, idx) => (
        <section
          key={region.id}
          id={region.id}
          className={`scroll-mt-32 py-16 md:py-20 ${idx % 2 === 0 ? "bg-background" : "bg-secondary/50"}`}
        >
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <SectionHeading eyebrow={`Region ${String(idx + 1).padStart(2, "0")}`} title={region.name} description={region.description} />
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {region.articles.map((a) => (
                <article
                  key={a.title}
                  className="group flex flex-col rounded-2xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:border-gold/40 hover:shadow-gold"
                >
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                    <Clock className="h-3.5 w-3.5" /> {a.readTime}
                  </div>
                  <h3 className="mt-3 font-serif text-xl font-semibold leading-snug text-primary">{a.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{a.excerpt}</p>
                  <a
                    href="#"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-gold"
                  >
                    Read article <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="bg-gradient-hero py-16 text-primary-foreground md:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center md:px-6">
          <h2 className="font-serif text-3xl font-semibold md:text-4xl">Have a specific concern?</h2>
          <p className="mt-3 text-primary-foreground/80">
            Articles can guide — a consultation can heal. Book a personal appointment with Dr. Jogani.
          </p>
          <Link
            to="/contact"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-gradient-gold px-7 py-3 text-sm font-semibold text-gold-foreground shadow-gold transition-transform hover:scale-105"
          >
            Book a Consultation <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { Clock, ArrowRight, BookOpen } from "lucide-react";
import { SectionHeading } from "@/components/site/SectionHeading";
import { regions } from "@/lib/blog-data";

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

function BlogPage() {
  return (
    <div>
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
                  key={a.slug}
                  className="group flex flex-col rounded-2xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:border-gold/40 hover:shadow-gold"
                >
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                    <Clock className="h-3.5 w-3.5" /> {a.readTime}
                  </div>
                  <h3 className="mt-3 font-serif text-xl font-semibold leading-snug text-primary">{a.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{a.excerpt}</p>
                  <Link
                    to="/blog/$slug"
                    params={{ slug: a.slug }}
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-gold"
                  >
                    Read article <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      ))}

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

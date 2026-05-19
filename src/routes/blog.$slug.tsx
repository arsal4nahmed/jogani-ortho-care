import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Clock, BookOpen, Phone } from "lucide-react";
import { getArticleBySlug, regions, type Article, type Region } from "@/lib/blog-data";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }): { article: Article; region: Region } => {
    const result = getArticleBySlug(params.slug);
    if (!result) throw notFound();
    return result;
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const { article, region } = loaderData;
    return {
      meta: [
        { title: `${article.title} | Dr. Abhinav Jogani` },
        { name: "description", content: article.excerpt },
        { property: "og:title", content: article.title },
        { property: "og:description", content: article.excerpt },
        { property: "og:type", content: "article" },
        { property: "article:section", content: region.name },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="mx-auto max-w-2xl px-6 py-32 text-center">
      <h1 className="font-serif text-3xl font-semibold text-primary">Article not found</h1>
      <p className="mt-3 text-muted-foreground">The article you're looking for doesn't exist.</p>
      <Link to="/blog" className="mt-6 inline-flex items-center gap-2 text-gold hover:underline">
        <ArrowLeft className="h-4 w-4" /> Back to all articles
      </Link>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="mx-auto max-w-2xl px-6 py-32 text-center">
      <h1 className="font-serif text-3xl font-semibold text-primary">Something went wrong</h1>
      <p className="mt-3 text-muted-foreground">{error.message}</p>
    </div>
  ),
  component: ArticlePage,
});

function ArticlePage() {
  const { article, region } = Route.useLoaderData();

  // Related: other articles in the same region
  const related = region.articles.filter((a) => a.slug !== article.slug);

  // Prev / next within the full flattened list
  const flat = regions.flatMap((r) => r.articles.map((a) => ({ ...a, regionName: r.name })));
  const currentIdx = flat.findIndex((a) => a.slug === article.slug);
  const prev = currentIdx > 0 ? flat[currentIdx - 1] : null;
  const next = currentIdx < flat.length - 1 ? flat[currentIdx + 1] : null;

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-hero py-16 text-primary-foreground md:py-24">
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gold transition-colors hover:text-gold/80"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Back to Blog
          </Link>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-gold">
            <BookOpen className="h-3 w-3" /> {region.name}
          </div>
          <h1 className="mt-5 font-serif text-3xl font-semibold leading-tight md:text-5xl">{article.title}</h1>
          <div className="mt-5 flex items-center gap-2 text-sm text-primary-foreground/70">
            <Clock className="h-4 w-4" /> {article.readTime}
          </div>
        </div>
      </section>

      {/* Body */}
      <article className="bg-background py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          <p className="text-lg leading-relaxed text-foreground/90 md:text-xl">{article.intro}</p>

          <div className="mt-10 space-y-10">
            {article.sections.map((s) => (
              <section key={s.heading}>
                <h2 className="font-serif text-2xl font-semibold text-primary md:text-3xl">{s.heading}</h2>
                <p className="mt-4 text-base leading-relaxed text-foreground/85 md:text-lg">{s.body}</p>
              </section>
            ))}
          </div>

          {/* Key takeaway */}
          <div className="mt-12 rounded-2xl border-l-4 border-gold bg-gold/5 p-6 shadow-soft">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Key Takeaway</div>
            <p className="mt-3 text-base leading-relaxed text-foreground/90">{article.takeaway}</p>
          </div>

          {/* Disclaimer */}
          <p className="mt-8 text-xs leading-relaxed text-muted-foreground">
            This article is for general patient education and does not replace a personal medical
            consultation. For diagnosis and treatment, please consult Dr. Jogani or your treating
            orthopedic surgeon.
          </p>
        </div>
      </article>

      {/* CTA */}
      <section className="bg-secondary/50 py-12">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 px-4 text-center md:px-6">
          <h3 className="font-serif text-2xl font-semibold text-primary md:text-3xl">
            Have questions about {region.name.toLowerCase()} pain?
          </h3>
          <p className="max-w-xl text-sm text-muted-foreground">
            Get a personal evaluation from Dr. Abhinav Jogani at his Nagpur clinic.
          </p>
          <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-6 py-2.5 text-sm font-semibold text-gold-foreground shadow-gold transition-transform hover:scale-105"
            >
              Book a Consultation <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="tel:+917066602602"
              className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-background px-6 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              <Phone className="h-4 w-4" /> +91 70666 02602
            </a>
          </div>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="bg-background py-16">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <h3 className="font-serif text-2xl font-semibold text-primary md:text-3xl">
              More on {region.name}
            </h3>
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {related.map((a) => (
                <Link
                  key={a.slug}
                  to="/blog/$slug"
                  params={{ slug: a.slug }}
                  className="group flex flex-col rounded-2xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:border-gold/40 hover:shadow-gold"
                >
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                    <Clock className="h-3.5 w-3.5" /> {a.readTime}
                  </div>
                  <h4 className="mt-3 font-serif text-lg font-semibold leading-snug text-primary">{a.title}</h4>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{a.excerpt}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors group-hover:text-gold">
                    Read article <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Prev / Next */}
      <section className="border-t border-border bg-secondary/30 py-10">
        <div className="mx-auto grid max-w-5xl gap-4 px-4 md:grid-cols-2 md:px-6">
          {prev ? (
            <Link
              to="/blog/$slug"
              params={{ slug: prev.slug }}
              className="group rounded-2xl border border-border bg-card p-5 shadow-soft transition-all hover:border-gold/40"
            >
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gold">
                <ArrowLeft className="h-3.5 w-3.5" /> Previous
              </div>
              <div className="mt-2 font-serif text-base font-semibold text-primary group-hover:text-gold">
                {prev.title}
              </div>
            </Link>
          ) : <div />}
          {next ? (
            <Link
              to="/blog/$slug"
              params={{ slug: next.slug }}
              className="group rounded-2xl border border-border bg-card p-5 shadow-soft transition-all hover:border-gold/40 md:text-right"
            >
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gold md:justify-end">
                Next <ArrowRight className="h-3.5 w-3.5" />
              </div>
              <div className="mt-2 font-serif text-base font-semibold text-primary group-hover:text-gold">
                {next.title}
              </div>
            </Link>
          ) : <div />}
        </div>
      </section>
    </div>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, Calendar, Star, ArrowRight, Bone, Activity, Stethoscope, HeartPulse, Microscope, Footprints, Dna, RotateCw, Quote, MapPin, Clock, Award } from "lucide-react";
import heroDoctor from "@/assets/hero-doctor.jpg";
import consultation from "@/assets/consultation.jpg";
import surgery from "@/assets/surgery.jpg";
import { SectionHeading } from "@/components/site/SectionHeading";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dr. Abhinav Jogani — Best Orthopedic Surgeon in Nagpur" },
      { name: "description", content: "Joint replacement, arthroscopy & complex trauma care by Dr. Abhinav Jogani (MS Orthopedics KEM Mumbai, DNB) in Nagpur. Book your consultation today." },
      { property: "og:title", content: "Dr. Abhinav Jogani — Best Orthopedic Surgeon in Nagpur" },
      { property: "og:description", content: "Restoring Movement. Rebuilding Lives. 15+ years of orthopedic excellence in Nagpur." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const services = [
  { icon: Bone, title: "Complex Trauma Surgery", desc: "Expert management of high-energy fractures and polytrauma." },
  { icon: Activity, title: "Hip & Knee Replacement", desc: "Modern implants, faster recovery, restored mobility." },
  { icon: HeartPulse, title: "Sports Medicine & Arthroscopy", desc: "Keyhole procedures for athletes and active adults." },
  { icon: Stethoscope, title: "Joint Replacement Surgery", desc: "Total and partial joint reconstruction tailored to you." },
  { icon: Microscope, title: "Complex Fracture Management", desc: "Limb salvage and reconstruction with advanced techniques." },
  { icon: Footprints, title: "Foot & Ankle Surgery", desc: "Including metatarsal reconstruction and deformity correction." },
  { icon: Dna, title: "Bone Tumor Management", desc: "Compassionate diagnosis and surgical treatment." },
  { icon: RotateCw, title: "Revision Arthroplasty", desc: "Specialised re-do joint replacement procedures." },
];

const testimonials = [
  { name: "Rakesh", quote: "He does not rush into surgery — he explains everything clearly and gives you the right options." },
  { name: "Priya", quote: "Best orthopedic surgeon I've consulted in Nagpur. Very satisfied with the care and results." },
  { name: "Suresh", quote: "Free BMD camp once a month is a wonderful initiative. Very helpful for our bone health." },
  { name: "Anita", quote: "Consulted for severe knee pain. Treatment was in the right direction and pain gradually reduced." },
];

const affiliations = [
  { name: "Wockhardt Hospital, Nagpur", role: "Orthopedic & Joint Replacement Surgeon" },
  { name: "Orange City Hospital & Research Institute", role: "Consultant Orthopedic Surgeon · 98% Recommended" },
  { name: "Medicure Multispeciality Clinics", role: "Director" },
  { name: "Government Medical College (GMC), Nagpur", role: "Previously, Orthopaedics Dept." },
];

function HomePage() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-hero text-primary-foreground">
        <div className="absolute inset-0 opacity-[0.06] [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:24px_24px]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-20 md:grid-cols-2 md:items-center md:px-6 md:py-28">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-gold">
              <Award className="h-3.5 w-3.5" /> 15+ Years of Excellence
            </div>
            <h1 className="mt-6 font-serif text-4xl font-semibold leading-[1.1] md:text-5xl lg:text-6xl">
              Dr. Abhinav Jogani
            </h1>
            <p className="mt-4 text-sm font-medium tracking-wide text-primary-foreground/80 md:text-base">
              MS Orthopedics (KEM Mumbai) · DNB · Orthopedic & Joint Replacement Surgeon, Nagpur
            </p>
            <p className="mt-6 font-serif text-2xl italic text-gold md:text-3xl">
              Restoring Movement. Rebuilding Lives.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-6 py-3 text-sm font-semibold text-gold-foreground shadow-gold transition-transform hover:scale-105">
                <Calendar className="h-4 w-4" /> Book Appointment
              </Link>
              <a href="tel:+917066602602" className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 bg-primary-foreground/5 px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10">
                <Phone className="h-4 w-4" /> +91 70666 02602
              </a>
            </div>
            <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-primary-foreground/15 bg-primary-foreground/5 px-4 py-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-gold text-gold" />)}
              </div>
              <span className="text-sm text-primary-foreground/90"><span className="font-semibold">5.0</span> · 320+ Google reviews</span>
            </div>
          </div>

          <div className="relative animate-fade-in">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-gold opacity-20 blur-3xl" />
            <img
              src={heroDoctor}
              alt="Dr. Abhinav Jogani, Orthopedic Surgeon"
              width={1536}
              height={1280}
              className="relative aspect-[5/6] w-full rounded-2xl object-cover shadow-elegant"
            />
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="bg-gradient-fade py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 md:grid-cols-2 md:items-center md:px-6">
          <div className="animate-fade-up">
            <img src={consultation} alt="Doctor consulting with patient" loading="lazy" width={1280} height={896} className="aspect-[4/3] w-full rounded-2xl object-cover shadow-soft" />
          </div>
          <div>
            <SectionHeading eyebrow="About the Doctor" title="A patient-first philosophy, backed by world-class training." />
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Dr. Abhinav Dinesh Jogani brings over <strong className="text-foreground">15 years of clinical experience</strong> in orthopedic and joint replacement surgery. He completed his M.S. Orthopedics from the prestigious <strong className="text-foreground">K.E.M. Hospital, Mumbai</strong>, and holds a D.N.B. (Diplomate of National Board) in Orthopedics.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              He continues as an affiliated researcher with KEM Hospital & Seth G.S. Medical College, Mumbai. Known for explaining complex conditions in simple terms, he avoids unnecessary surgeries and runs a <strong className="text-foreground">free monthly BMD camp every Sunday</strong> for community bone health.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { n: "15+", l: "Years Experience" },
                { n: "5,000+", l: "Surgeries" },
                { n: "320+", l: "5★ Reviews" },
              ].map((s) => (
                <div key={s.l} className="rounded-xl border border-border bg-card p-4 text-center shadow-soft">
                  <div className="font-serif text-2xl font-semibold text-primary md:text-3xl">{s.n}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{s.l}</div>
                </div>
              ))}
            </div>
            <Link to="/about" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-gold">
              Learn more about Dr. Jogani <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* AFFILIATIONS */}
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionHeading center eyebrow="Hospital Affiliations" title="Trusted across Nagpur's leading hospitals." />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {affiliations.map((a) => (
              <div key={a.name} className="group rounded-2xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-elegant">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-gold text-gold-foreground">
                  <Stethoscope className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-serif text-lg font-semibold text-primary">{a.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{a.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-secondary/50 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionHeading center eyebrow="Specializations" title="Comprehensive orthopedic care, end to end." description="From elective joint replacement to complex trauma reconstruction — comprehensive expertise under one roof." />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <div key={s.title} className="group rounded-2xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:border-gold/40 hover:shadow-elegant">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/5 text-primary transition-colors group-hover:bg-gradient-gold group-hover:text-gold-foreground">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-serif text-lg font-semibold text-primary">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/services" className="inline-flex items-center gap-2 rounded-full border border-primary/20 px-6 py-3 text-sm font-semibold text-primary hover:bg-primary hover:text-primary-foreground">
              Explore all services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SURGERY VISUAL STRIP */}
      <section className="relative h-[280px] overflow-hidden md:h-[400px]">
        <img src={surgery} alt="Orthopedic surgery in progress" loading="lazy" width={1280} height={896} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/40" />
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <p className="max-w-xl font-serif text-2xl text-primary-foreground md:text-4xl">
              "Surgery is a tool — not always the answer. We use it only when nothing else will give you a better life."
            </p>
            <p className="mt-4 text-sm uppercase tracking-[0.2em] text-gold">— Dr. Abhinav Jogani</p>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionHeading center eyebrow="Patient Stories" title="Trusted by thousands across Nagpur." />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {testimonials.map((t) => (
              <figure key={t.name} className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-soft">
                <Quote className="h-7 w-7 text-gold" />
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground/85">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-6 flex items-center justify-between border-t border-border pt-4">
                  <span className="text-sm font-semibold text-primary">{t.name}</span>
                  <span className="flex">
                    {[...Array(5)].map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-gold text-gold" />)}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* BMD CAMP */}
      <section className="bg-gradient-hero py-20 text-primary-foreground md:py-24">
        <div className="mx-auto max-w-5xl px-4 text-center md:px-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-gold">
            Community Initiative
          </div>
          <h2 className="mt-6 font-serif text-3xl font-semibold md:text-5xl">Free Monthly BMD Camp</h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-primary-foreground/85 md:text-lg">
            Every Sunday of the month, Dr. Jogani hosts a complimentary Bone Mineral Density screening camp — a small step toward stronger bones for the Nagpur community.
          </p>
          <a href="tel:+917066602602" className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-gold px-6 py-3 text-sm font-semibold text-gold-foreground shadow-gold hover:scale-105">
            <Phone className="h-4 w-4" /> Reserve Your Spot
          </a>
        </div>
      </section>

      {/* VISIT */}
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 md:grid-cols-2 md:px-6">
          <div>
            <SectionHeading eyebrow="Visit the Clinic" title="We're here when you need us." />
            <div className="mt-8 space-y-5">
              <div className="flex gap-4">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-gold" />
                <div>
                  <h4 className="font-serif font-semibold text-primary">Address</h4>
                  <p className="mt-1 text-sm text-muted-foreground">Opp. Saraf Chambers, Mount Road, Sadar, Nagpur – 440001</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Phone className="mt-1 h-5 w-5 shrink-0 text-gold" />
                <div>
                  <h4 className="font-serif font-semibold text-primary">Phone</h4>
                  <a href="tel:+917066602602" className="mt-1 block text-sm text-muted-foreground hover:text-primary">+91 70666 02602</a>
                </div>
              </div>
              <div className="flex gap-4">
                <Clock className="mt-1 h-5 w-5 shrink-0 text-gold" />
                <div>
                  <h4 className="font-serif font-semibold text-primary">Timings</h4>
                  <p className="mt-1 text-sm text-muted-foreground">Mon – Sat: 9:30 AM – 10:00 PM<br />Sunday: Closed</p>
                </div>
              </div>
            </div>
            <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90">
              Book Appointment <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="overflow-hidden rounded-2xl border border-border shadow-soft">
            <iframe
              title="Clinic location on Google Maps"
              src="https://www.google.com/maps?q=Saraf+Chambers,+Mount+Road,+Sadar,+Nagpur&output=embed"
              className="h-full min-h-[360px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

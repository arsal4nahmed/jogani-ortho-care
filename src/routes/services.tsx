import { createFileRoute, Link } from "@tanstack/react-router";
import { Bone, Activity, HeartPulse, Stethoscope, Microscope, Footprints, Dna, RotateCw, ArrowRight } from "lucide-react";
import kneeAnatomy from "@/assets/knee-anatomy.jpg";
import { SectionHeading } from "@/components/site/SectionHeading";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Joint Replacement, Arthroscopy & Trauma | Dr. Abhinav Jogani" },
      { name: "description", content: "Hip & knee replacement, arthroscopy, sports medicine, complex trauma, foot & ankle surgery, bone tumor management and revision arthroplasty in Nagpur." },
      { property: "og:title", content: "Orthopedic Services in Nagpur — Dr. Abhinav Jogani" },
      { property: "og:description", content: "Complete orthopedic care: from joint replacement to complex trauma reconstruction." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const services = [
  { icon: Bone, title: "Complex Trauma Surgery", desc: "Stabilisation and reconstruction of high-energy injuries, fractures and polytrauma. Limb-saving expertise when it matters most." },
  { icon: Activity, title: "Hip & Knee Replacement", desc: "Modern implants and minimally invasive techniques for primary total hip and knee arthroplasty with faster recovery." },
  { icon: HeartPulse, title: "Sports Medicine & Arthroscopy", desc: "Keyhole surgery for ACL/PCL tears, meniscus injuries and shoulder instability — getting athletes back in motion." },
  { icon: Stethoscope, title: "Joint Replacement Surgery", desc: "Total and partial replacements tailored to your anatomy, lifestyle and goals." },
  { icon: Microscope, title: "Complex Fracture Management", desc: "Non-union, mal-union and infected fracture reconstruction using advanced techniques including Modified Masquelet." },
  { icon: Footprints, title: "Foot & Ankle Surgery", desc: "Metatarsal reconstruction, deformity correction, and sports-related foot & ankle care." },
  { icon: Dna, title: "Bone Tumor Management", desc: "Compassionate, evidence-based diagnosis and surgical management of benign and malignant bone tumors." },
  { icon: RotateCw, title: "Revision Arthroplasty", desc: "Specialised re-do hip and knee replacement surgery for failed or worn-out implants." },
];

function ServicesPage() {
  return (
    <div>
      <section className="bg-gradient-hero py-20 text-primary-foreground md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 md:grid-cols-2 md:px-6">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-gold">
              Specializations
            </div>
            <h1 className="mt-6 font-serif text-4xl font-semibold md:text-6xl">Comprehensive orthopedic care.</h1>
            <p className="mt-5 max-w-xl text-base text-primary-foreground/80 md:text-lg">
              From elective joint replacement to limb-saving trauma reconstruction — every procedure performed with precision, planning and patient-first judgment.
            </p>
          </div>
          <img src={kneeAnatomy} alt="Knee anatomy" loading="lazy" width={1024} height={1024} className="mx-auto w-full max-w-sm rounded-2xl object-cover shadow-elegant" />
        </div>
      </section>

      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div key={s.title} className="group rounded-2xl border border-border bg-card p-7 shadow-soft transition-all hover:-translate-y-1 hover:border-gold/40 hover:shadow-elegant">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/5 text-primary transition-colors group-hover:bg-gradient-gold group-hover:text-gold-foreground">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-serif text-xl font-semibold text-primary">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary/50 py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center md:px-6">
          <SectionHeading center title="Not sure which service you need?" description="Book a consultation and we'll walk you through the right options for your condition." />
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-gold px-6 py-3 text-sm font-semibold text-gold-foreground shadow-gold hover:scale-105">
            Book Appointment <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import { Phone, MapPin, Clock, MessageCircle } from "lucide-react";
import { SectionHeading } from "@/components/site/SectionHeading";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Book Appointment | Dr. Abhinav Jogani — Nagpur" },
      { name: "description", content: "Book an appointment with Dr. Abhinav Jogani, Orthopedic & Joint Replacement Surgeon in Nagpur. Call +91 70666 02602 or WhatsApp us." },
      { property: "og:title", content: "Book Appointment — Dr. Abhinav Jogani" },
      { property: "og:description", content: "Your first step to a pain-free life starts here." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function CalEmbed() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "consultation" });
      cal("ui", { theme: "light", hideEventTypeDetails: false });
    })();
  }, []);
  return (
    <Cal
      namespace="consultation"
      calLink="drjogani/orthopedic-consultation"
      style={{ width: "100%", minHeight: "600px", overflow: "scroll" }}
      config={{ layout: "month_view" }}
    />
  );
}

function ContactPage() {
  return (
    <div>
      <section className="bg-gradient-hero py-20 text-primary-foreground md:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center md:px-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-gold">
            Book Appointment
          </div>
          <h1 className="mt-6 font-serif text-4xl font-semibold md:text-6xl">Let's get you back in motion.</h1>
          <p className="mt-5 text-base text-primary-foreground/80 md:text-lg">
            Pick a time that works for you — confirmation is instant.
          </p>
        </div>
      </section>

      <section className="bg-background py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 md:grid-cols-5 md:px-6">
          <div className="md:col-span-3">
            <SectionHeading title="Choose your appointment slot" />
            <div className="mt-8 rounded-2xl border border-border shadow-soft overflow-hidden">
              <CalEmbed />
            </div>
            <div className="mt-5">
              <a
                href="https://wa.me/917066602602?text=Hello%20Dr.%20Jogani%2C%20I%27d%20like%20to%20book%20an%20appointment."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#25D366]/30 bg-[#25D366]/10 px-6 py-3 text-sm font-semibold text-[#128C4A] hover:bg-[#25D366]/20"
              >
                <MessageCircle className="h-4 w-4" /> Prefer WhatsApp? Connect instantly
              </a>
            </div>
          </div>

          <aside className="space-y-5 md:col-span-2">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
              <h3 className="font-serif text-lg font-semibold text-primary">Clinic Details</h3>
              <ul className="mt-5 space-y-4 text-sm">
                <li className="flex gap-3"><MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold" /><span className="text-muted-foreground">Opp. Saraf Chambers, Mount Road, Sadar, Nagpur – 440001</span></li>
                <li className="flex gap-3"><Phone className="mt-0.5 h-5 w-5 shrink-0 text-gold" /><a href="tel:+917066602602" className="text-muted-foreground hover:text-primary">+91 70666 02602</a></li>
                <li className="flex gap-3"><Clock className="mt-0.5 h-5 w-5 shrink-0 text-gold" /><span className="text-muted-foreground">Mon – Sat: 9:30 AM – 10:00 PM<br />Sunday: Closed</span></li>
              </ul>
            </div>
            <div className="overflow-hidden rounded-2xl border border-border shadow-soft">
              <iframe
                title="Clinic location"
                src="https://www.google.com/maps?q=Saraf+Chambers,+Mount+Road,+Sadar,+Nagpur&output=embed"
                className="h-[260px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}

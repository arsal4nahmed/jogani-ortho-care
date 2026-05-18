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
      cal("ui", {
        theme: "light",
        styles: { branding: { brandColor: "#b8972a" } },
        hideEventTypeDetails: false,
      });
    })();
  }, []);

  return (
    <Cal
      namespace="consultation"
      calLink="YOUR_CAL_USERNAME/consultation"  // ← replace this
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
          <h1 className="mt-6 font-serif text-4xl font-semibold md:text-5xl">Your first step to a pain-free life starts here.</h1>
          <p className="mt-5 text-base text-primary-foreground/80 md:text-lg">
            Pick a date and time that works for you.
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
}    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check your details");
      return;
    }
    setSubmitting(true);
    const msg = `Hello Dr. Jogani,%0A%0AName: ${encodeURIComponent(parsed.data.name)}%0APhone: ${encodeURIComponent(parsed.data.phone)}%0APreferred date: ${encodeURIComponent(parsed.data.date)}%0AConcern: ${encodeURIComponent(parsed.data.condition)}`;
    setTimeout(() => {
      window.open(`https://wa.me/917066602602?text=${msg}`, "_blank");
      toast.success("Opening WhatsApp to confirm your appointment…");
      setSubmitting(false);
      (e.target as HTMLFormElement).reset();
    }, 300);
  };

  return (
    <div>
      <section className="bg-gradient-hero py-20 text-primary-foreground md:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center md:px-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-gold">
            Book Appointment
          </div>
          <h1 className="mt-6 font-serif text-4xl font-semibold md:text-5xl">Your first step to a pain-free life starts here.</h1>
          <p className="mt-5 text-base text-primary-foreground/80 md:text-lg">
            Share a few details and we'll get back to confirm your visit.
          </p>
        </div>
      </section>

      <section className="bg-background py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 md:grid-cols-5 md:px-6">
          <div className="md:col-span-3">
            <SectionHeading title="Request your appointment" />
            <form onSubmit={onSubmit} className="mt-8 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Full name" name="name" type="text" placeholder="e.g. Ramesh Sharma" />
                <Field label="Phone number" name="phone" type="tel" placeholder="+91 ..." />
              </div>
              <Field label="Preferred date" name="date" type="date" />
              <div>
                <label className="text-sm font-medium text-primary" htmlFor="condition">Condition / Complaint</label>
                <textarea id="condition" name="condition" rows={4} placeholder="Briefly describe your concern…" className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm shadow-soft outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/20" />
              </div>
              <div className="flex flex-wrap gap-3">
                <button type="submit" disabled={submitting} className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-6 py-3 text-sm font-semibold text-gold-foreground shadow-gold transition-transform hover:scale-105 disabled:opacity-60">
                  <Send className="h-4 w-4" /> {submitting ? "Sending…" : "Send Request"}
                </button>
                <a href="https://wa.me/917066602602?text=Hello%20Dr.%20Jogani%2C%20I%27d%20like%20to%20book%20an%20appointment." target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-[#25D366]/30 bg-[#25D366]/10 px-6 py-3 text-sm font-semibold text-[#128C4A] hover:bg-[#25D366]/20">
                  <MessageCircle className="h-4 w-4" /> WhatsApp Quick Connect
                </a>
              </div>
            </form>
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

function Field({ label, name, type, placeholder }: { label: string; name: string; type: string; placeholder?: string }) {
  return (
    <div>
      <label htmlFor={name} className="text-sm font-medium text-primary">{label}</label>
      <input id={name} name={name} type={type} placeholder={placeholder} className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm shadow-soft outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/20" />
    </div>
  );
}

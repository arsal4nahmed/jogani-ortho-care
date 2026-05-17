import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, MapPin, Phone, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-4 md:px-6">
        <div className="md:col-span-2">
          <div className="font-serif text-2xl font-semibold">Dr. Abhinav Jogani</div>
          <p className="mt-1 text-sm text-primary-foreground/70">MS Orthopedics (KEM Mumbai) · DNB</p>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-primary-foreground/80">
            Orthopedic & Joint Replacement Surgeon based in Nagpur. Patient-first care
            backed by 15+ years of clinical and academic excellence.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="https://facebook.com/drabhinavjogani" target="_blank" rel="noreferrer" aria-label="Facebook" className="rounded-full border border-primary-foreground/20 p-2.5 transition-colors hover:bg-gold hover:text-gold-foreground">
              <Facebook className="h-4 w-4" />
            </a>
            <a href="https://instagram.com/drabhinavjogani" target="_blank" rel="noreferrer" aria-label="Instagram" className="rounded-full border border-primary-foreground/20 p-2.5 transition-colors hover:bg-gold hover:text-gold-foreground">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="rounded-full border border-primary-foreground/20 p-2.5 transition-colors hover:bg-gold hover:text-gold-foreground">
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-serif text-lg">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
            <li><Link to="/about" className="hover:text-gold">About</Link></li>
            <li><Link to="/services" className="hover:text-gold">Services</Link></li>
            <li><Link to="/research" className="hover:text-gold">Research</Link></li>
            <li><Link to="/contact" className="hover:text-gold">Book Appointment</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-lg">Visit Clinic</h4>
          <ul className="mt-4 space-y-3 text-sm text-primary-foreground/80">
            <li className="flex gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" /> Opp. Saraf Chambers, Mount Road, Sadar, Nagpur – 440001</li>
            <li className="flex gap-2"><Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" /> <a href="tel:+917066602602" className="hover:text-gold">+91 70666 02602</a></li>
            <li className="flex gap-2"><Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold" /> Mon–Sat: 9:30 AM – 10:00 PM<br />Sunday: Closed</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto max-w-7xl px-4 py-6 text-xs text-primary-foreground/60 md:flex md:items-center md:justify-between md:px-6">
          <p>© {new Date().getFullYear()} Dr. Abhinav Jogani. All rights reserved.</p>
          <p className="mt-2 max-w-2xl md:mt-0 md:text-right">
            Content on this website is for informational purposes only and does not constitute medical advice.
          </p>
        </div>
      </div>
    </footer>
  );
}

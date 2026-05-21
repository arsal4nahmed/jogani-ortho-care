import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import logoHorizontal from "@/assets/logo-horizontal.png";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/research", label: "Research" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
        <Link to="/" className="group flex items-center" aria-label="Dr. Jogani's Bone and Joint Care Center">
          <img
            src={logoHorizontal}
            alt="Dr. Jogani's Bone and Joint Care Center"
            className="h-16 w-auto object-contain"
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
              activeProps={{ className: "text-primary" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <a
          href="tel:+917066602602"
          className="hidden items-center gap-2 rounded-full bg-gradient-gold px-5 py-2.5 text-sm font-semibold text-gold-foreground shadow-gold transition-transform hover:scale-105 md:inline-flex"
        >
          <Phone className="h-4 w-4" /> +91 70666 02602
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="rounded-md p-2 text-primary md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="flex flex-col px-4 py-3">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-3 text-sm font-medium text-foreground/80"
                activeProps={{ className: "text-primary" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
            <a href="tel:+917066602602" className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-gold px-5 py-3 text-sm font-semibold text-gold-foreground">
              <Phone className="h-4 w-4" /> Call +91 70666 02602
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

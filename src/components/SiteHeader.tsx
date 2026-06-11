import { Link } from "@tanstack/react-router";
import { Phone, X } from "lucide-react";
import { useState, useEffect } from "react";
import logo from "@/assets/logo-nas-du-volant.jpg";

const nav = [
  { label: "Formations", to: "/formations" },
  { label: "Inscription", to: "/inscription" },
  { label: "Notre agence", to: "/agence" },
  { label: "Avis", to: "/avis" },
  { label: "Vérifications techniques", to: "/verification-technique" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-border/40 bg-background/90 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 flex h-16 items-center justify-between gap-8">
          <Link to="/" className="flex items-center gap-3 shrink-0" onClick={() => setOpen(false)}>
            <img src={logo} alt="N'as du Volant" width={40} height={40} className="h-9 w-auto rounded-md" />
            <span className="font-display italic text-xl hidden sm:block">N'as du Volant</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6 text-sm">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap"
                activeProps={{ className: "text-foreground font-medium" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>

          <a
            href="tel:+33978802232"
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-red hover:opacity-90 transition-all shrink-0"
          >
            <Phone className="h-4 w-4" /> 09 78 80 22 32
          </a>

          {/* Mobile burger — z-[60] to stay above overlay */}
          <button
            className="relative z-[60] lg:hidden flex flex-col justify-center items-center w-10 h-10 rounded-lg hover:bg-secondary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
          >
            <span
              className={`block h-0.5 w-5 bg-foreground rounded-full transition-all duration-300 ${open ? "rotate-45 translate-y-[3px]" : "-translate-y-[3px]"}`}
            />
            <span
              className={`block h-0.5 w-5 bg-foreground rounded-full transition-all duration-300 ${open ? "opacity-0 scale-x-0" : "opacity-100"}`}
            />
            <span
              className={`block h-0.5 w-5 bg-foreground rounded-full transition-all duration-300 ${open ? "-rotate-45 -translate-y-[3px]" : "translate-y-[3px]"}`}
            />
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile menu panel */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-72 max-w-full bg-background shadow-2xl lg:hidden flex flex-col transition-transform duration-300 ease-in-out ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex items-center justify-between px-6 h-16 border-b border-border shrink-0">
          <span className="font-display italic text-lg">N'as du Volant</span>
          <button
            className="flex items-center justify-center w-9 h-9 rounded-lg hover:bg-secondary transition-colors"
            onClick={() => setOpen(false)}
            aria-label="Fermer le menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-6 py-6 space-y-1">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="flex items-center rounded-xl px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-all"
              activeProps={{ className: "text-foreground font-medium bg-secondary" }}
              onClick={() => setOpen(false)}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="px-6 py-6 border-t border-border shrink-0">
          <a
            href="tel:+33978802232"
            className="flex items-center justify-center gap-2 w-full rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-red hover:opacity-90 transition-all"
            onClick={() => setOpen(false)}
          >
            <Phone className="h-4 w-4" /> 09 78 80 22 32
          </a>
        </div>
      </div>
    </>
  );
}

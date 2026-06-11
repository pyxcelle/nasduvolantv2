import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Clock, Mail, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/agence")({
  head: () => ({
    meta: [
      { title: "Notre agence — N'as du Volant Bron 69500" },
      { name: "description", content: "Retrouvez l'auto-école N'as du Volant au 133 Avenue Franklin Roosevelt, 69500 Bron. Horaires, accès et contact." },
    ],
  }),
  component: Agence,
});

function Agence() {
  return (
    <>
      <section className="py-24 lg:py-32 bg-gradient-hero">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="text-xs tracking-[0.3em] uppercase text-primary">Notre agence</div>
          <h1 className="mt-4 font-display text-5xl lg:text-7xl text-balance max-w-3xl">
            Venez nous <span className="italic text-primary">rencontrer.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Située au cœur de Bron, notre agence est facilement accessible en voiture, en bus ou à pied.
            Un seul moyen de nous contacter : le téléphone.
          </p>
          <a href="tel:+33978802232" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-medium text-primary-foreground shadow-red hover:opacity-90 transition-all">
            <Phone className="h-4 w-4" /> 09 78 80 22 32
          </a>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="rounded-2xl border border-border bg-card p-6 flex gap-4">
              <div className="h-11 w-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Adresse</div>
                <div className="mt-1 font-medium">133 Avenue Franklin Roosevelt</div>
                <div className="text-sm text-muted-foreground">69500 Bron</div>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 flex gap-4">
              <div className="h-11 w-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Téléphone</div>
                <a href="tel:+33978802232" className="mt-1 font-medium hover:text-primary transition-colors">09 78 80 22 32</a>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 flex gap-4">
              <div className="h-11 w-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Email</div>
                <a href="mailto:nasduvolant@gmail.com" className="mt-1 font-medium hover:text-primary transition-colors">nasduvolant@gmail.com</a>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 flex gap-4">
              <div className="h-11 w-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                <Clock className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Horaires d'ouverture</div>
                <div className="mt-2 space-y-1.5 text-sm">
                  {[
                    { j: "Lundi", h: "14h00 – 19h00" },
                    { j: "Mardi", h: "14h00 – 19h00" },
                    { j: "Mercredi", h: "14h00 – 19h00" },
                    { j: "Jeudi", h: "14h00 – 19h00" },
                    { j: "Vendredi", h: "14h00 – 19h00" },
                    { j: "Samedi", h: "10h00 – 12h00" },
                    { j: "Dimanche", h: "Fermé" },
                  ].map((l) => (
                    <div key={l.j} className="flex justify-between gap-4">
                      <span className="font-medium w-24">{l.j}</span>
                      <span className={l.h === "Fermé" ? "text-muted-foreground" : ""}>{l.h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 flex gap-4">
              <div className="h-11 w-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">N° Agrément préfectoral</div>
                <div className="mt-1 font-medium">E2206900220</div>
                <div className="text-xs text-muted-foreground mt-1">SIRET : 911 800 423 00020 · RCS Lyon</div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="overflow-hidden rounded-3xl border border-border h-80 lg:h-96">
              <iframe
                title="Plan N'as du Volant Bron"
                src="https://www.google.com/maps?q=133+Avenue+Franklin+Roosevelt,+69500+Bron&output=embed"
                className="h-full w-full grayscale contrast-125"
                loading="lazy"
              />
            </div>
            <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6">
              <h3 className="font-display text-xl">Comment venir ?</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                L'agence est accessible en transport en commun (TCL), en voiture avec parking à proximité, et à vélo via les pistes cyclables de l'avenue Franklin Roosevelt.
              </p>
              <a
                href="https://www.google.com/maps/dir//133+Avenue+Franklin+Roosevelt,+69500+Bron"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm text-primary hover:underline"
              >
                Itinéraire Google Maps <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

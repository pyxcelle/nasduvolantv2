import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Clock, Mail, Train } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — N'as du Volant Bron" },
      { name: "description", content: "Contactez l'auto-école N'as du Volant à Bron par téléphone : 09 78 80 22 32. 133 Av. Franklin Roosevelt, 69500 Bron." },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <section className="py-24 lg:py-32 bg-gradient-hero">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="text-xs tracking-[0.3em] uppercase text-primary">Contact</div>
          <h1 className="mt-4 font-display text-5xl lg:text-7xl text-balance max-w-3xl">
            Prenons <span className="italic text-primary">la route ensemble.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Une question, un devis, une inscription ? Appelez-nous ou écrivez-nous par email.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="tel:+33978802232" className="inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 text-base font-medium text-primary-foreground shadow-red hover:opacity-90 transition-all">
              <Phone className="h-5 w-5" /> 09 78 80 22 32
            </a>
            <a href="mailto:nasduvolant@gmail.com" className="inline-flex items-center gap-3 rounded-full border border-border px-8 py-4 text-base font-medium hover:bg-secondary transition-colors">
              <Mail className="h-5 w-5" /> nasduvolant@gmail.com
            </a>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            {[
              { icon: MapPin, t: "Adresse", v: "133 Av. Franklin Roosevelt\n69500 Bron" },
              { icon: Phone, t: "Téléphone", v: "09 78 80 22 32" },
              { icon: Mail, t: "Email", v: "nasduvolant@gmail.com" },
              { icon: Clock, t: "Horaires d'ouverture", v: "Lundi au vendredi : 14h00 – 19h00\nSamedi : 10h00 – 12h00\nDimanche : Fermé" },
            ].map((b) => (
              <div key={b.t} className="rounded-2xl border border-border bg-card p-6 flex gap-4">
                <div className="h-11 w-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <b.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{b.t}</div>
                  <div className="mt-1 whitespace-pre-line text-sm leading-relaxed">{b.v}</div>
                </div>
              </div>
            ))}
            <div className="rounded-2xl border border-primary/30 bg-primary/5 p-6">
              <p className="text-sm text-muted-foreground leading-relaxed">
                <span className="font-medium text-foreground">Contactez-nous :</span> par téléphone pour une réponse immédiate, ou par email si vous préférez nous écrire.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a href="tel:+33978802232" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-red hover:opacity-90 transition-all">
                  <Phone className="h-4 w-4" /> Appeler maintenant
                </a>
                <a href="mailto:nasduvolant@gmail.com" className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium hover:bg-secondary transition-colors">
                  <Mail className="h-4 w-4" /> Envoyer un email
                </a>
              </div>
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl border border-border h-[480px]">
            <iframe
              title="Plan N'as du Volant"
              src="https://www.google.com/maps?q=133+Av.+Franklin+Roosevelt,+69500+Bron&output=embed"
              className="h-full w-full grayscale contrast-125"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
              <Train className="h-5 w-5" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Accès</div>
              <h2 className="font-display text-2xl">Comment venir</h2>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="text-xs uppercase tracking-[0.2em] text-primary mb-3">Tram</div>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p><span className="font-medium text-foreground">T2 & T5</span> — Arrêt <span className="font-medium text-foreground">Desgenettes</span> (3 min à pied) ou <span className="font-medium text-foreground">Bron Hôtel de Ville</span> (5 min à pied)</p>
              </div>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="text-xs uppercase tracking-[0.2em] text-primary mb-3">Bus</div>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p><span className="font-medium text-foreground">Lignes 24, 79, C17</span> — Arrêts sur l'avenue Franklin Roosevelt à quelques pas de l'agence</p>
              </div>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="text-xs uppercase tracking-[0.2em] text-primary mb-3">Voiture & vélo</div>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>Parking disponible à proximité. Pistes cyclables sur l'avenue Franklin Roosevelt. Vélos en libre-service (Vélo'v) dans le quartier.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

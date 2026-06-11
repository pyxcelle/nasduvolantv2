import { createFileRoute } from "@tanstack/react-router";
import { Check, Sparkles } from "lucide-react";

export const Route = createFileRoute("/tarifs")({
  head: () => ({
    meta: [
      { title: "Tarifs — Formules permis B, AAC, Code · N'as du Volant" },
      { name: "description", content: "Découvrez nos tarifs transparents : forfait code, permis B, AAC et heures supplémentaires. Auto-école à Bron." },
      { property: "og:title", content: "Tarifs · N'as du Volant" },
      { property: "og:description", content: "Forfaits permis B, AAC et code à Bron. Tarifs clairs, sans frais cachés." },
    ],
  }),
  component: Tarifs,
});

const plans = [
  {
    name: "Code",
    price: "190",
    sub: "Forfait théorique seul",
    features: ["Inscription en préfecture", "Accès en ligne illimité 6 mois", "Cours en salle hebdomadaires", "Présentation à l'examen ETG"],
  },
  {
    name: "Permis B — 20h",
    price: "1 290",
    sub: "La formule complète",
    featured: true,
    features: ["Inscription + livret", "Forfait code complet", "20h de conduite", "Examens blancs", "Présentation pratique"],
  },
  {
    name: "Conduite Accompagnée",
    price: "1 390",
    sub: "AAC dès 15 ans",
    features: ["Forfait code complet", "20h de conduite", "2 rendez-vous pédagogiques", "Livret d'apprentissage", "Présentation à l'examen"],
  },
];

const extras = [
  { l: "Heure de conduite supplémentaire", p: "48 €" },
  { l: "Heure boîte automatique", p: "52 €" },
  { l: "Présentation à l'examen pratique", p: "80 €" },
  { l: "Stage code intensif (3 jours)", p: "120 €" },
  { l: "Évaluation initiale", p: "Offerte" },
  { l: "Frais de dossier", p: "Inclus" },
];

function Tarifs() {
  return (
    <>
      <section className="py-24 lg:py-36 bg-gradient-hero">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="text-xs tracking-[0.3em] uppercase text-primary">Tarifs</div>
          <h1 className="mt-4 font-display text-5xl lg:text-7xl max-w-3xl text-balance">
            Des prix clairs, <span className="italic text-primary">sans surprise.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Tout est inclus dans nos forfaits. Possibilité de paiement en 3 ou 4 fois sans frais.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid gap-6 lg:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.name}
              className={
                "relative rounded-3xl p-8 lg:p-10 border " +
                (p.featured ? "bg-gradient-red text-primary-foreground border-primary shadow-red lg:scale-105" : "bg-card border-border shadow-card")
              }
            >
              {p.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 rounded-full bg-ink px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-primary border border-primary/50">
                  <Sparkles className="h-3 w-3" /> Le plus choisi
                </div>
              )}
              <h3 className="font-display text-2xl">{p.name}</h3>
              <div className={"mt-1 text-xs uppercase tracking-[0.2em] " + (p.featured ? "opacity-80" : "text-muted-foreground")}>{p.sub}</div>
              <div className="mt-8 flex items-end gap-2">
                <div className="font-display text-6xl">{p.price}</div>
                <div className="pb-2 text-lg">€</div>
              </div>
              <ul className={"mt-8 space-y-3 text-sm " + (p.featured ? "" : "")}>
                {p.features.map((f) => (
                  <li key={f} className="flex gap-2.5">
                    <Check className={"h-4 w-4 mt-0.5 shrink-0 " + (p.featured ? "" : "text-primary")} />
                    {f}
                  </li>
                ))}
              </ul>
              <p className="mt-10 text-xs text-muted-foreground italic">
                Tarifs indicatifs — contactez-nous pour un devis personnalisé.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-ink">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <h2 className="font-display text-3xl lg:text-4xl text-balance">À la carte</h2>
          <div className="mt-10 rounded-3xl border border-border bg-card divide-y divide-border overflow-hidden">
            {extras.map((e) => (
              <div key={e.l} className="flex items-center justify-between px-6 py-5">
                <div className="text-sm">{e.l}</div>
                <div className="font-display text-xl text-primary">{e.p}</div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs text-muted-foreground">
            * Tarifs indicatifs susceptibles d'évoluer. Contactez-nous pour un devis personnalisé.
          </p>
        </div>
      </section>
    </>
  );
}

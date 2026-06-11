import { createFileRoute } from "@tanstack/react-router";
import { FileText, User, CreditCard, Phone, CheckCircle2, ArrowRight, AlertCircle } from "lucide-react";

export const Route = createFileRoute("/inscription")({
  head: () => ({
    meta: [
      { title: "Inscription — Documents à fournir · N'as du Volant Bron" },
      { name: "description", content: "Documents nécessaires pour s'inscrire à l'auto-école N'as du Volant à Bron. Appelez-nous au 09 78 80 22 32." },
    ],
  }),
  component: Inscription,
});

const dossiers = [
  {
    icon: User,
    title: "Pièce d'identité",
    items: [
      "Carte nationale d'identité en cours de validité",
      "OU passeport en cours de validité",
      "OU titre de séjour en cours de validité",
    ],
  },
  {
    icon: FileText,
    title: "Justificatif de domicile",
    items: [
      "Facture EDF, gaz, internet ou téléphone fixe de moins de 3 mois",
      "OU quittance de loyer de moins de 3 mois",
      "OU avis d'imposition ou de non-imposition",
      "Pour les moins de 18 ans : justificatif au nom des parents + attestation d'hébergement",
    ],
  },
  {
    icon: CreditCard,
    title: "Photo d'identité",
    items: [
      "2 photos d'identité récentes (format 35x45 mm)",
      "Fond clair, visage dégagé, expression neutre",
      "Conformes aux normes ANTS (pas de photos Instagram ou selfies)",
    ],
  },
  {
    icon: FileText,
    title: "Numéro NEPH",
    items: [
      "Numéro d'Enregistrement Préfectoral Harmonisé",
      "À obtenir sur le site de l'ANTS (ants.gouv.fr) avant votre inscription",
      "Gratuit, délivré en ligne en quelques jours",
      "Obligatoire pour l'inscription aux examens du code et du permis",
    ],
  },
];

function Inscription() {
  return (
    <>
      <section className="py-24 lg:py-32 bg-gradient-hero">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="text-xs tracking-[0.3em] uppercase text-primary">Inscription</div>
          <h1 className="mt-4 font-display text-5xl lg:text-7xl text-balance max-w-3xl">
            Prêt à démarrer ? <span className="italic text-primary">Voici ce qu'il faut.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Rassemblez ces documents et appelez-nous pour convenir d'un rendez-vous d'inscription.
            L'évaluation de départ est obligatoire avant de commencer la formation.
          </p>
          <a href="tel:+33978802232" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-medium text-primary-foreground shadow-red hover:opacity-90 transition-all">
            Appeler pour s'inscrire <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-2">
            {dossiers.map((d) => (
              <div key={d.title} className="rounded-3xl border border-border bg-card p-8">
                <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                  <d.icon className="h-6 w-6" />
                </div>
                <h2 className="mt-5 font-display text-2xl">{d.title}</h2>
                <ul className="mt-5 space-y-3">
                  {d.items.map((item) => (
                    <li key={item} className="flex gap-2.5 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />{item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-3xl border border-primary/30 bg-primary/5 p-8">
            <div className="flex gap-4 items-start">
              <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                <AlertCircle className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-display text-xl">Évaluation de départ obligatoire</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  Conformément à l'article L213-2 du Code de la route, une évaluation de départ est obligatoire avant de commencer la formation à la conduite. Elle se déroule en agence avec votre moniteur, dure environ 50 minutes, et permet de déterminer le nombre d'heures de conduite dont vous aurez besoin avant de passer l'examen pratique. Cette évaluation ne peut pas être réalisée par l'élève lui-même.
                </p>
                <a href="tel:+33978802232" className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-red hover:opacity-90 transition-all">
                  <Phone className="h-4 w-4" /> Prendre rendez-vous
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-3xl border border-border bg-card p-8">
            <h3 className="font-display text-2xl">Pour les mineurs (moins de 18 ans)</h3>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              L'inscription d'un mineur nécessite la présence et la signature d'un représentant légal (père, mère ou tuteur légal) le jour de l'inscription. Le représentant légal devra également fournir sa propre pièce d'identité.
            </p>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              Pour la conduite accompagnée (AAC), l'accompagnateur devra être titulaire du permis B depuis au moins 5 ans, ne pas avoir fait l'objet d'une suspension de permis dans les 5 dernières années, et être présent au rendez-vous préalable avec le moniteur.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

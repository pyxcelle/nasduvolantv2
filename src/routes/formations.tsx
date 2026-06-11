import { createFileRoute, Link } from "@tanstack/react-router";
import { Car, GraduationCap, BookOpen, RefreshCw, Clock, CheckCircle2, ArrowRight, Zap, Users } from "lucide-react";

export const Route = createFileRoute("/formations")({
  head: () => ({
    meta: [
      { title: "Formations — Permis B, AAC, Boîte Auto, Code · N'as du Volant Bron" },
      { name: "description", content: "Toutes nos formations : Permis B, boîte automatique, conduite accompagnée, conduite supervisée, perfectionnement et code en ligne. Auto-école N'as du Volant à Bron." },
    ],
  }),
  component: Formations,
});

const formations = [
  {
    icon: Car,
    slug: "permis-b",
    title: "Permis B",
    sub: "Boîte manuelle · Dès 17 ans",
    desc: "La formation classique pour conduire les véhicules de tourisme. Après une évaluation initiale obligatoire permettant de déterminer le nombre d'heures nécessaires, vous bénéficiez d'un suivi personnalisé : cours de code, heures de conduite sur véhicule à double commande, bilans réguliers et présentation à l'examen pratique.",
    points: [
      "Évaluation de départ obligatoire (article L213-2 du Code de la route)",
      "Code en ligne et en salle, accès illimité",
      "20 heures de conduite minimum",
      "Bilan et examen blanc avant la présentation",
      "Accompagnement à l'épreuve pratique",
    ],
    duration: "3 à 6 mois",
    age: "Dès 17 ans",
  },
  {
    icon: Zap,
    slug: "boite-automatique",
    title: "Permis B — Boîte automatique",
    sub: "Permis B78 · Moins de contraintes",
    desc: "Vous souhaitez passer votre permis sur un véhicule à boîte automatique ? C'est une option de plus en plus choisie, particulièrement adaptée aux personnes qui souhaitent se concentrer sur la conduite sans se soucier des changements de vitesses. La formation se déroule sur un minimum de 13 heures sur véhicule à boîte automatique. Le permis obtenu est assorti de la mention B78, qui vous autorise à conduire uniquement des véhicules à boîte automatique — sauf à suivre ensuite la formation B78 vers B pour lever cette restriction.",
    points: [
      "Évaluation de départ obligatoire",
      "13 heures de conduite minimum sur boîte automatique",
      "Code en ligne et en salle inclus",
      "Permis assorti de la mention B78",
      "Possibilité de lever la restriction avec la formation B78→B",
    ],
    duration: "2 à 4 mois",
    age: "Dès 17 ans",
  },
  {
    icon: GraduationCap,
    slug: "conduite-accompagnee",
    title: "Conduite Accompagnée (AAC)",
    sub: "Apprentissage Anticipé · Dès 15 ans",
    desc: "L'apprentissage anticipé de la conduite (AAC) permet de commencer sa formation dès 15 ans aux côtés d'un accompagnateur agréé. Cette formule est reconnue pour améliorer sensiblement les résultats à l'examen et permet de réduire la période probatoire du permis de 3 à 2 ans. La conduite avec l'accompagnateur se déroule sur une durée d'au moins un an et 3 000 km minimum, ponctuée de rendez-vous pédagogiques obligatoires avec votre moniteur.",
    points: [
      "Démarrage dès 15 ans",
      "Évaluation de départ obligatoire",
      "1 rendez-vous préalable avec l'accompagnateur",
      "2 rendez-vous pédagogiques obligatoires",
      "1 an minimum · 3 000 km minimum",
      "Période probatoire réduite à 2 ans",
      "Passage de l'examen dès 17 ans et demi",
    ],
    duration: "12 à 24 mois",
    age: "Dès 15 ans",
  },
  {
    icon: Users,
    slug: "conduite-supervisee",
    title: "Conduite Supervisée",
    sub: "Dès 18 ans · Pratiquer avant ou après l'examen",
    desc: "La conduite supervisée permet à tout candidat majeur (18 ans minimum), ayant validé sa formation initiale (code + 20 h de conduite minimum avec attestation AFFI), de conduire avec un accompagnateur de son choix pour accumuler de l'expérience avant — ou après un échec à — l'épreuve pratique. Plus souple que l'AAC, elle n'impose ni durée ni kilométrage minimum. L'accompagnateur doit être titulaire du permis B depuis au moins 5 ans. L'accord préalable écrit de votre assureur est obligatoire (sans surprime). Durant la conduite, le disque « conduite accompagnée » doit être apposé à l'arrière du véhicule.",
    points: [
      "Accessible dès 18 ans, après validation de la formation initiale (AFFI)",
      "Code de la route en poche et 20 h de conduite minimum effectuées",
      "Accord écrit de l'assureur obligatoire (extension de garantie, sans surprime)",
      "Accompagnateur titulaire du permis B depuis 5 ans minimum",
      "Aucune durée ni distance minimale imposée",
      "Disque « conduite accompagnée » à apposer à l'arrière du véhicule",
      "Possible aussi en cas d'échec à l'épreuve pratique, sans délai",
    ],
    duration: "Jusqu'à l'examen",
    age: "Dès 18 ans",
  },
  {
    icon: RefreshCw,
    slug: "perfectionnement",
    title: "Perfectionnement",
    sub: "Permis obtenu · Reprise après interruption",
    desc: "Vous possédez déjà votre permis B mais vous n'avez pas conduit depuis un moment et vous souhaitez reprendre confiance au volant ? Nos sessions de perfectionnement sont faites pour vous. Que ce soit après une longue interruption, pour vous sentir plus à l'aise en ville, sur autoroute ou pour maîtriser des manœuvres précises, nous adaptons chaque session à vos besoins. Chaque cours commence par un bilan pour cibler les points à travailler.",
    points: [
      "Réservé aux conducteurs déjà titulaires du permis B",
      "Idéal après une longue interruption de conduite",
      "Bilan de conduite personnalisé en début de session",
      "Travail ciblé : ville, autoroute, créneaux, demi-tour",
      "Heures à la carte, sans engagement",
    ],
    duration: "À la carte",
    age: "Permis B requis",
  },
  {
    icon: BookOpen,
    slug: "code-en-ligne",
    title: "Code en ligne",
    sub: "Smartphone, ordinateur ou tablette · 24h/24",
    desc: "Révisez votre code de la route quand vous voulez, où vous voulez, sur tous vos appareils numériques. Notre plateforme en ligne vous donne accès à des séries thématiques, des séries pédagogiques et des séries examen conformes à la dernière réforme. Vos résultats et les thèmes sur lesquels vous avez des lacunes sont visibles en temps réel pour cibler vos révisions efficacement.",
    points: [
      "Accès sur smartphone, ordinateur ou tablette",
      "Séries thématiques, pédagogiques et examens blancs",
      "Conforme à la dernière réforme de l'ETG",
      "Suivi de progression en temps réel",
      "Disponible 24h/24, 7j/7",
    ],
    duration: "3 à 6 mois",
    age: "Dès 15 ans",
  },
];

function Formations() {
  return (
    <>
      <section className="relative py-28 lg:py-40 bg-gradient-hero overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="text-xs tracking-[0.3em] uppercase text-primary">Formations</div>
          <h1 className="mt-4 font-display text-5xl lg:text-7xl max-w-3xl text-balance">
            Le parcours qui <span className="italic text-primary">vous ressemble.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            De la première leçon à l'examen, nous adaptons chaque formation à votre rythme,
            vos objectifs et votre emploi du temps. Appelez-nous pour construire ensemble votre parcours.
          </p>
          <a href="tel:+33978802232" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-medium text-primary-foreground shadow-red hover:opacity-90 transition-all">
            Nous appeler pour s'inscrire <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid gap-8 lg:grid-cols-2">
          {formations.map((f) => (
            <article key={f.title} className="group rounded-3xl border border-border bg-card p-8 lg:p-10 hover:border-primary/50 transition-all shadow-card">
              <div className="flex items-start justify-between gap-6">
                <div className="h-14 w-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                  <f.icon className="h-7 w-7" />
                </div>
                <div className="text-right text-xs">
                  <div className="inline-flex items-center gap-1.5 text-muted-foreground"><Clock className="h-3 w-3" />{f.duration}</div>
                  <div className="mt-1 text-primary">{f.age}</div>
                </div>
              </div>
              <h2 className="mt-6 font-display text-3xl">{f.title}</h2>
              <div className="mt-1 text-xs tracking-[0.2em] uppercase text-muted-foreground">{f.sub}</div>
              <p className="mt-5 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              <ul className="mt-6 grid gap-2.5">
                {f.points.map((p) => (
                  <li key={p} className="flex gap-2.5 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />{p}
                  </li>
                ))}
              </ul>
              <a href="tel:+33978802232" className="mt-8 inline-flex items-center gap-2 text-sm text-primary group-hover:gap-3 transition-all">
                Nous appeler pour s'inscrire <ArrowRight className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="py-20 bg-ink">
        <div className="mx-auto max-w-4xl px-6 lg:px-10 text-center">
          <h2 className="font-display text-4xl lg:text-5xl text-balance">
            Une question sur <span className="italic text-primary">votre formation ?</span>
          </h2>
          <p className="mt-4 text-muted-foreground">Notre équipe vous répond par téléphone et construit avec vous le parcours idéal.</p>
          <a href="tel:+33978802232" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-medium text-primary-foreground shadow-red">
            09 78 80 22 32 <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </>
  );
}

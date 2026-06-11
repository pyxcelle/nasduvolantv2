import { createFileRoute } from "@tanstack/react-router";
import { Wrench, CheckCircle2, ArrowRight, Phone, AlertCircle, Download, FileText, Eye } from "lucide-react";

export const Route = createFileRoute("/verification-technique")({
  head: () => ({
    meta: [
      { title: "Vérifications techniques — N'as du Volant Bron" },
      { name: "description", content: "Préparez-vous aux vérifications techniques de l'examen du permis B. Banque officielle de questions du Ministère de l'Intérieur. Auto-école N'as du Volant à Bron." },
    ],
  }),
  component: VerificationTechnique,
});

const categories = [
  {
    cat: "Vérifications intérieures (VI)",
    desc: "Questions posées à bord du véhicule, moteur allumé ou éteint. L'inspecteur vous demande de montrer ou d'actionner une commande.",
    items: [
      "Réglage de la hauteur des feux",
      "Rétroviseur intérieur en position « nuit »",
      "Essuie-glaces avant (position la plus rapide)",
      "Voyant de pression insuffisante d'huile moteur",
      "Dégivrage de la lunette arrière + voyant correspondant",
      "Voyant de défaillance du système de freinage (rouge)",
      "Commande de réglage du volant",
      "Recyclage de l'air intérieur",
      "Désactivation de l'airbag passager avant",
      "Régulateur / limiteur de vitesse",
      "Feux de détresse",
      "Feux de brouillard arrière + voyant correspondant",
      "Voyant de température du liquide de refroidissement",
      "Voyant de défaut de batterie",
      "Voyant de ceinture de sécurité non bouclée",
      "Voyant de mauvaise fermeture de portière",
      "Voyant de baisse de pression d'un pneumatique",
      "Réglage de l'appui-tête conducteur",
      "Commande d'avertisseur sonore",
      "Désembuage pare-brise",
      "Feux de route + voyant correspondant",
      "Indicateur de niveau de carburant",
      "Attaches Isofix",
      "Présence de l'éthylotest",
      "Présence du certificat d'immatriculation",
      "Présence de l'attestation d'assurance + vignette",
      "Présence du gilet de haute visibilité",
      "Présence du constat amiable",
    ],
  },
  {
    cat: "Vérifications extérieures (VE)",
    desc: "Questions posées à l'extérieur ou sous le capot. L'inspecteur vous demande de montrer ou de vérifier un élément du véhicule.",
    items: [
      "Niveau du liquide lave-glace (bocal sous capot)",
      "État du flanc d'un pneumatique",
      "Plaques d'immatriculation (état + propreté)",
      "Niveau du liquide de frein (entre mini et maxi)",
      "État des balais d'essuie-glace",
      "Clignotants côté trottoir (état + fonctionnement)",
      "Feux de brouillard arrière (état + fonctionnement)",
      "Feux de détresse avant et arrière",
      "Feux de route (état + fonctionnement)",
      "Feux de croisement (état + fonctionnement)",
      "Feux de stop (avec assistance accompagnateur)",
      "Feux de recul (avec assistance accompagnateur)",
      "Feux de position avant et arrière",
      "Feux diurnes (état + fonctionnement)",
      "Éclairage de la plaque d'immatriculation arrière",
      "Dispositifs réfléchissants",
      "Niveau d'huile moteur (jauge)",
      "Emplacement de la batterie",
      "Liquide de refroidissement (bocal sous capot)",
      "Témoin d'usure sur le flanc d'un pneumatique",
      "Trappe à carburant / bouchon",
      "Gicleurs de lave-glace avant",
      "Changement d'ampoule à l'avant du véhicule",
      "Changement d'ampoule à l'arrière du véhicule",
      "Sécurité enfant sur portière arrière",
      "Pression préconisée des pneus (plaque indicative)",
      "Essuie-glace arrière",
      "Ouverture / fermeture du capot + verrouillage",
      "Ouverture / fermeture du coffre + verrouillage",
      "Présence du triangle de pré-signalisation",
    ],
  },
  {
    cat: "Questions sécurité routière (QSER)",
    desc: "Une question de sécurité routière est associée à chaque vérification. Elle porte sur l'utilisation, le risque ou la réglementation liée à l'élément vérifié.",
    items: [
      "Pourquoi régler la hauteur des feux ? (ne pas éblouir)",
      "Pourquoi utiliser du liquide lave-glace spécial en hiver ? (éviter le gel)",
      "Pression des pneus : où la trouver ? (plaque portière, notice, trappe carburant)",
      "Fréquence de vérification des pneus : chaque mois + avant long trajet",
      "Quel est le risque d'un niveau de liquide de frein insuffisant ? (perte d'efficacité)",
      "Triangle de pré-signalisation : à 30 m, pas sur autoroute",
      "Clignotement plus rapide = une ampoule défectueuse",
      "Taux d'alcoolémie en permis probatoire = 0,2 g/l (0 verre)",
      "Constat amiable : à transmettre à l'assureur dans les 5 jours",
      "Voyant rouge = anomalie/danger · voyant orange = élément important",
      "Désactiver l'airbag passager = enfant dos à la route",
      "Sécurité enfant enclenchée = portière ouvrable de l'extérieur seulement",
      "Enfant sur siège passager avant : dès 10 ans",
      "Aquaplanage = film d'eau entre pneu et chaussée = perte de contrôle",
    ],
  },
  {
    cat: "Questions premiers secours (1ers secours)",
    desc: "Des notions élémentaires de premiers secours sont également évaluées lors de l'examen pratique.",
    items: [
      "Numéros d'urgence : 15 (SAMU), 18 (pompiers), 112 (Europe)",
      "Arrêt cardiaque : ALERTER – MASSER – DÉFIBRILLER (DAE)",
      "PLS (Position Latérale de Sécurité) : victime inconsciente qui respire",
      "Perte de connaissance : ne répond pas, ne réagit pas, mais respire",
      "Hémorragie : appuyer fortement avec tissu propre sur la plaie",
      "Vérifier la respiration : ventre/poitrine qui se soulèvent + air à l'expiration",
      "Gilet haute visibilité : avant de quitter le véhicule",
      "DAE : se déclenche uniquement en cas d'arrêt cardiaque (sans risque)",
      "Alerter les secours : numéro appelant + nature + localisation précise",
      "Raccrocher : uniquement quand le correspondant l'autorise",
      "SAIP : 3 cycles de sirène = Signal National d'Alerte, signal continu = fin d'alerte",
      "Dégagement d'urgence : danger réel, immédiat, non contrôlable — exceptionnel",
      "Formation premiers secours possible dès 10 ans",
    ],
  },
];

function VerificationTechnique() {
  return (
    <>
      <section className="py-24 lg:py-32 bg-gradient-hero">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="text-xs tracking-[0.3em] uppercase text-primary">Vérifications techniques</div>
          <h1 className="mt-4 font-display text-5xl lg:text-7xl text-balance max-w-3xl">
            Maîtrisez votre <span className="italic text-primary">véhicule.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Lors de l'examen pratique, l'inspecteur vous posera des questions sur les vérifications techniques du véhicule, la sécurité routière et les premiers secours. Voici tout ce que vous devez savoir — avec la banque officielle complète du Ministère de l'Intérieur à télécharger.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/banque-questions-examen-permis-b.pdf"
              download="banque-questions-examen-permis-b.pdf"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-medium text-primary-foreground shadow-red hover:opacity-90 transition-all"
            >
              <Download className="h-4 w-4" /> Télécharger le PDF officiel
            </a>
            <a
              href="/banque-questions-examen-permis-b.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-4 text-sm font-medium hover:bg-secondary transition-colors"
            >
              <Eye className="h-4 w-4" /> Ouvrir en ligne
            </a>
            <a href="tel:+33978802232" className="inline-flex items-center gap-2 rounded-full border border-primary text-primary px-7 py-4 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors">
              <Phone className="h-4 w-4" /> Nous appeler
            </a>
          </div>
        </div>
      </section>

      {/* PDF embed + download card */}
      <section className="py-16">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <div className="text-xs tracking-[0.3em] uppercase text-primary mb-3">Document officiel</div>
          <h2 className="font-display text-3xl lg:text-4xl mb-2">Banque de questions <span className="italic text-primary">Ministère de l'Intérieur</span></h2>
          <p className="text-sm text-muted-foreground mb-8">41 pages · Source officielle DSR/BRPCE 2018 · Vérifications techniques, sécurité routière, premiers secours</p>
          <div className="flex flex-wrap gap-3 mb-10">
            <a
              href="/banque-questions-examen-permis-b.pdf"
              download="banque-questions-examen-permis-b.pdf"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-red hover:opacity-90 transition-all"
            >
              <Download className="h-4 w-4" /> Télécharger le PDF
            </a>
            <a
              href="/banque-questions-examen-permis-b.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-medium hover:bg-secondary transition-colors"
            >
              <Eye className="h-4 w-4" /> Ouvrir dans un nouvel onglet
            </a>
          </div>
          <div className="rounded-3xl overflow-hidden border border-border shadow-card" style={{ height: "700px" }}>
            <iframe
              src="/banque-questions-examen-permis-b.pdf#toolbar=0&navpanes=0&scrollbar=1&view=FitH"
              className="w-full h-full border-0"
              title="Banque officielle de questions — Ministère de l'Intérieur"
            >
              <div className="flex flex-col items-center justify-center h-full gap-5 p-12 text-center">
                <div className="h-16 w-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                  <FileText className="h-8 w-8" />
                </div>
                <p className="text-sm text-muted-foreground">Votre navigateur ne supporte pas la lecture de PDF intégrée.</p>
                <a
                  href="/banque-questions-examen-permis-b.pdf"
                  download
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition-all"
                >
                  <Download className="h-4 w-4" /> Télécharger le PDF
                </a>
              </div>
            </iframe>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">

          <div className="mb-12 rounded-3xl border border-primary/30 bg-primary/5 p-8 flex gap-5">
            <div className="h-11 w-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
              <AlertCircle className="h-5 w-5" />
            </div>
            <div>
              <h2 className="font-display text-2xl">Comment ça se passe à l'examen ?</h2>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                L'inspecteur vous posera <strong className="text-foreground">2 questions</strong> : une vérification intérieure (VI) et une extérieure (VE), chacune accompagnée d'une question de sécurité routière (QSER) ou de premiers secours. Ces questions sont tirées de la banque officielle ci-dessus. Chez N'as du Volant, vos moniteurs vous entraînent à y répondre avec méthode dès le début de votre formation.
              </p>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {categories.map((v) => (
              <div key={v.cat} className="rounded-3xl border border-border bg-card p-8">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                    <Wrench className="h-5 w-5" />
                  </div>
                  <h2 className="font-display text-xl">{v.cat}</h2>
                </div>
                <p className="text-xs text-muted-foreground mb-5 leading-relaxed">{v.desc}</p>
                <ul className="space-y-2.5">
                  {v.items.map((item) => (
                    <li key={item} className="flex gap-2.5 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />{item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-3xl bg-ink p-10 text-center">
            <h2 className="font-display text-3xl lg:text-4xl">
              On vous prépare <span className="italic text-primary">à tout.</span>
            </h2>
            <p className="mt-4 text-muted-foreground max-w-lg mx-auto text-sm leading-relaxed">
              Les vérifications techniques, la sécurité routière et les premiers secours font partie intégrante de nos cours. Vous arrivez à l'examen en connaissant votre véhicule de A à Z.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-4">
              <a
                href="/banque-questions-examen-permis-b.pdf"
                download
                className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-4 text-sm font-medium hover:bg-secondary transition-colors"
              >
                <Download className="h-4 w-4" /> Télécharger le PDF officiel
              </a>
              <a href="tel:+33978802232" className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-medium text-primary-foreground shadow-red hover:opacity-90 transition-all">
                <Phone className="h-4 w-4" /> 09 78 80 22 32 <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

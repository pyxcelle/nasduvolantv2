import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/mentions-legales")({
  head: () => ({
    meta: [
      { title: "Mentions légales — N'as du Volant Bron" },
      { name: "description", content: "Mentions légales de l'auto-école N'as du Volant, 133 Av. Franklin Roosevelt, 69500 Bron." },
    ],
  }),
  component: MentionsLegales,
});

function MentionsLegales() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <div className="text-xs tracking-[0.3em] uppercase text-primary">Informations légales</div>
        <h1 className="mt-4 font-display text-5xl text-balance">Mentions légales</h1>
        <div className="mt-12 space-y-10 text-sm text-muted-foreground leading-relaxed">
          <div>
            <h2 className="font-display text-2xl text-foreground mb-4">1. Éditeur du site</h2>
            <p><strong className="text-foreground">Dénomination :</strong> N'AS DU VOLANT</p>
            <p><strong className="text-foreground">Forme juridique :</strong> SAS</p>
            <p><strong className="text-foreground">SIRET :</strong> 911 800 423 00020 · RCS Lyon</p>
            <p><strong className="text-foreground">N° agrément préfectoral :</strong> E2206900220</p>
            <p><strong className="text-foreground">Adresse :</strong> 133 Avenue Franklin Roosevelt, 69500 Bron</p>
            <p><strong className="text-foreground">Téléphone :</strong> 09 78 80 22 32</p>
          </div>
          <div>
            <h2 className="font-display text-2xl text-foreground mb-4">2. Propriété intellectuelle</h2>
            <p>L'ensemble du contenu de ce site est la propriété exclusive de N'AS DU VOLANT et est protégé par les lois françaises et internationales relatives à la propriété intellectuelle. Toute reproduction ou représentation, totale ou partielle, est interdite sans autorisation écrite préalable.</p>
          </div>
          <div>
            <h2 className="font-display text-2xl text-foreground mb-4">3. Protection des données (RGPD)</h2>
            <p>Ce site ne collecte aucune donnée personnelle via un formulaire. Le seul moyen de contact est le téléphone au <strong className="text-foreground">09 78 80 22 32</strong>.</p>
            <p className="mt-3">Conformément au RGPD (UE 2016/679) et à la loi Informatique et Libertés du 6 janvier 1978, vous disposez d'un droit d'accès, de rectification, d'effacement et d'opposition. Pour l'exercer, contactez-nous par téléphone ou courrier. En cas de réclamation : <a href="https://www.cnil.fr" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">www.cnil.fr</a>.</p>
          </div>
          <div>
            <h2 className="font-display text-2xl text-foreground mb-4">4. Cookies</h2>
            <p>Ce site utilise uniquement des cookies techniques nécessaires à son fonctionnement. Aucun cookie publicitaire ou de tracking n'est déposé sans votre consentement, conformément aux recommandations de la CNIL.</p>
          </div>
          <div>
            <h2 className="font-display text-2xl text-foreground mb-4">5. Obligations légales — Auto-école</h2>
            <p>N'AS DU VOLANT est un établissement agréé par la préfecture, conformément aux articles L.213-1 et suivants du Code de la route et à l'arrêté du 8 janvier 2001 relatif à l'exploitation des établissements d'enseignement de la conduite. Les tarifs sont affichés conformément à l'arrêté du 27 mars 1985.</p>
          </div>
          <div>
            <h2 className="font-display text-2xl text-foreground mb-4">6. Médiation de la consommation</h2>
            <p>En cas de litige non résolu, vous pouvez recourir à un médiateur de la consommation (articles L.611-1 et suivants du Code de la consommation) ou à la plateforme européenne : <a href="https://ec.europa.eu/consumers/odr" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">ec.europa.eu/consumers/odr</a>.</p>
          </div>
          <div>
            <h2 className="font-display text-2xl text-foreground mb-4">7. Droit applicable</h2>
            <p>Ce site et ses mentions légales sont soumis au droit français. Les tribunaux français sont seuls compétents en cas de litige.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

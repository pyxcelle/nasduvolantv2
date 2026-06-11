import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Car, BookOpen, GraduationCap, Sparkles, CheckCircle2, Star } from "lucide-react";
import hero from "@/assets/hero-driving.jpg";
import lesson from "@/assets/lesson.jpg";
import student from "@/assets/student-success.jpg";
import voiture from "@/assets/voiture.png";
import { fetchGooglePlacesData, type PlacesData } from "@/lib/googlePlaces";

// URLs Google Places avec le Place ID officiel
const GOOGLE_REVIEWS_URL = "https://search.google.com/local/reviews?placeid=ChIJF2sXKTjB9EcR6ty4qnkxDlw";
const GOOGLE_WRITE_REVIEW_URL = "https://search.google.com/local/writereview?placeid=ChIJF2sXKTjB9EcR6ty4qnkxDlw";

export const Route = createFileRoute("/")({
  loader: async () => {
    const placesData = await fetchGooglePlacesData();
    return { placesData };
  },
  head: () => ({
    meta: [
      { title: "N'as du Volant — Auto-école à Bron · Permis B, AAC, Code" },
      { name: "description", content: "Auto-école familiale à Bron. Permis B, conduite accompagnée et code de la route. Formation sûre et sur-mesure." },
      { property: "og:title", content: "N'as du Volant — Auto-école à Bron" },
      { property: "og:description", content: "Pour une formation sûre et sur-mesure à Bron (69500)." },
    ],
  }),
  component: Home,
});

function Home() {
  const { placesData } = Route.useLoaderData();
  const ratingDisplay = placesData.rating.toFixed(1).replace(".", ",") + "/5";
  const reviewsDisplay = placesData.userRatingsTotal.toLocaleString("fr-FR");

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 opacity-50">
          <img src={hero} alt="" className="h-full w-full object-cover" width={1600} height={1100} />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10 pt-24 pb-32 lg:pt-40 lg:pb-52">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs tracking-[0.2em] uppercase text-primary">
              <Sparkles className="h-3 w-3" /> Auto-école · Bron 69500
            </div>
            <h1 className="mt-8 font-display text-5xl sm:text-6xl lg:text-8xl leading-[0.95] text-balance">
              Apprenez à conduire <span className="italic text-primary">comme un as.</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed">
              Permis B, conduite accompagnée, code de la route — une équipe humaine,
              des moniteurs diplômés d'État, et un suivi sur-mesure à chaque virage.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="tel:+33978802232" className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-medium text-primary-foreground shadow-red hover:opacity-90 transition-all">
                Nous appeler
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <Link to="/formations" className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-4 text-sm font-medium hover:bg-secondary transition-colors">
                Nos formations
              </Link>
            </div>
            <div className="mt-16 grid grid-cols-2 gap-8 max-w-sm">
              {[
                { v: ratingDisplay, l: "Note Google" },
                { v: reviewsDisplay, l: "Avis Google" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-display text-3xl lg:text-4xl text-primary">{s.v}</div>
                  <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FORMATIONS */}
      <section className="relative py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-16">
            <div>
              <div className="text-xs tracking-[0.3em] uppercase text-primary">Nos formations</div>
              <h2 className="mt-3 font-display text-4xl lg:text-6xl text-balance max-w-2xl">
                Un parcours <span className="italic">pour chaque conducteur.</span>
              </h2>
            </div>
            <Link to="/formations" className="text-sm text-muted-foreground hover:text-primary inline-flex items-center gap-2">
              Voir toutes les formations <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {[
              { icon: Car, title: "Permis B", desc: "La formation classique dès 17 ans. Théorie, conduite, examen — accompagnés du début à la fin.", tag: "Le plus demandé" },
              { icon: GraduationCap, title: "Conduite accompagnée", desc: "AAC dès 15 ans. Plus d'expérience, plus de sérénité, et une réussite supérieure à l'examen.", tag: "Dès 15 ans" },
              { icon: BookOpen, title: "Code de la route", desc: "Cours en salle, accès en ligne illimité, examens blancs. Validez votre code en toute confiance.", tag: "En illimité" },
            ].map((f) => (
              <div key={f.title} className="group relative rounded-2xl border border-border bg-card p-8 hover:border-primary/50 transition-all shadow-card">
                <div className="absolute top-6 right-6 text-[10px] tracking-[0.2em] uppercase text-primary">{f.tag}</div>
                <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <f.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 font-display text-2xl">{f.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                <Link to="/formations" className="mt-6 inline-flex items-center gap-2 text-sm text-primary">
                  En savoir plus <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPLIT EDITORIAL */}
      <section className="relative py-28 bg-ink overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid gap-16 lg:grid-cols-2 items-center">
          <div className="relative">
            <img src={lesson} alt="Cours de conduite chez N'as du Volant" loading="lazy" width={1400} height={1000} className="rounded-2xl shadow-card" />
            <div className="absolute -bottom-6 -right-6 rounded-2xl bg-primary p-6 text-primary-foreground shadow-red max-w-xs hidden sm:block">
              <div className="font-display text-3xl italic">+10 ans</div>
              <div className="text-xs uppercase tracking-wider mt-1 opacity-90">d'expérience à Bron</div>
            </div>
          </div>
          <div>
            <div className="text-xs tracking-[0.3em] uppercase text-primary">L'auto-école</div>
            <h2 className="mt-3 font-display text-4xl lg:text-5xl text-balance">
              Une école familiale, <span className="italic">une exigence de pro.</span>
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Chez N'as du Volant, on connaît chaque élève par son prénom. Nos moniteurs
              diplômés d'État construisent un parcours unique, à votre rythme, avec une
              pédagogie bienveillante et sans jugement.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                "Moniteurs diplômés d'État, formés en continu",
                "Véhicules récents, climatisés, équipés double commande",
                "Suivi personnalisé et planning flexible 6j/7",
                "Tarifs transparents, sans frais cachés",
              ].map((p) => (
                <li key={p} className="flex gap-3 text-sm">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <Link to="/agence" className="mt-10 inline-flex items-center gap-2 rounded-full border border-primary text-primary px-6 py-3 text-sm hover:bg-primary hover:text-primary-foreground transition-colors">
              Voir notre agence <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* VOITURE */}
      <section className="py-20 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="rounded-3xl overflow-hidden relative bg-ink">
            <img
              src={voiture}
              alt="Véhicule de l'auto-école N'as du Volant"
              loading="lazy"
              className="w-full h-72 sm:h-96 object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent flex items-end p-8 sm:p-12">
              <div>
                <div className="text-xs uppercase tracking-[0.3em] text-primary mb-2">Notre véhicule</div>
                <p className="font-display text-2xl sm:text-3xl text-white text-balance max-w-xs">
                  Pour une formation <span className="italic text-primary">sûre et sur-mesure.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TÉMOIGNAGES */}
      <section className="py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="text-xs tracking-[0.3em] uppercase text-primary">Ils ont eu leur permis</div>
          <h2 className="mt-3 font-display text-4xl lg:text-6xl max-w-3xl text-balance">
            "Une équipe en or, <span className="italic">un permis du premier coup.</span>"
          </h2>
          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {[
              { n: "Melik S.", q: "Franchement, un grand merci à toute N'as du Volant. Ils ont toujours été là pour moi, ils m'ont soutenu du début à la fin et m'ont redonné confiance chaque fois que j'en avais besoin. Grâce à eux, j'ai enfin eu mon permis. Une super équipe, je recommande fortement !" },
              { n: "Client vérifié", q: "Auto-école avec des monitrices qui donnent envie d'aller conduire ! Très arrangeantes niveau créneaux et hyper rapides pour trouver des dates de permis. Je recommande à 100%." },
              { n: "Client vérifié", q: "Une excellente auto-école ! Toute l'équipe est très professionnelle, bienveillante et à l'écoute. Des monitrices pédagogues et patientes qui m'ont vraiment mis en confiance. Je recommande vivement !" },
            ].map((t) => (
              <figure key={t.n} className="rounded-2xl border border-border bg-card p-8">
                <div className="flex gap-1 text-primary">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                </div>
                <blockquote className="mt-4 font-display text-xl italic text-balance">"{t.q}"</blockquote>
                <figcaption className="mt-6 text-sm text-muted-foreground">— {t.n}</figcaption>
              </figure>
            ))}
          </div>
          <div className="mt-10 text-center">
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
            >
              Voir tous nos avis Google <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* COMMENT VENIR */}
      <section className="py-20 bg-ink">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="text-xs tracking-[0.3em] uppercase text-primary">Accès</div>
          <h2 className="mt-3 font-display text-4xl lg:text-5xl text-balance">
            Comment <span className="italic">venir nous voir ?</span>
          </h2>
          <p className="mt-4 text-muted-foreground">133 Av. Franklin Roosevelt, 69500 Bron</p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: "🚌",
                title: "Bus",
                lines: ["Ligne 24 — arrêt Franklin Roosevelt", "Ligne 79 — arrêt Franklin Roosevelt", "Ligne C17 — arrêt Franklin Roosevelt"],
              },
              {
                icon: "🚊",
                title: "Tramway",
                lines: ["T2 — arrêt Bron Bruyères ou Jet d'Eau - Mendès France", "T5 — arrêt à proximité"],
              },
              {
                icon: "🚆",
                title: "Train",
                lines: ["Ligne C26 (réseau TCL) — gare Bron"],
              },
            ].map((m) => (
              <div key={m.title} className="rounded-2xl border border-border bg-card p-8">
                <div className="text-3xl">{m.icon}</div>
                <h3 className="mt-4 font-display text-2xl">{m.title}</h3>
                <ul className="mt-4 space-y-2">
                  {m.lines.map((l) => (
                    <li key={l} className="flex gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />{l}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=133+Avenue+Franklin+Roosevelt,+69500+Bron"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-primary text-primary px-6 py-3 text-sm hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Itinéraire Google Maps <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src={student} alt="" className="h-full w-full object-cover opacity-20" loading="lazy" width={1200} height={1400} />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/50" />
        </div>
        <div className="relative mx-auto max-w-4xl px-6 lg:px-10 text-center">
          <h2 className="font-display text-5xl lg:text-7xl text-balance">
            Prêt à prendre <span className="italic text-primary">le volant ?</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Contactez-nous directement par téléphone ou passez nous voir au 133 Av. Franklin Roosevelt à Bron.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a href="tel:+33978802232" className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-medium text-primary-foreground shadow-red">
              Nous appeler <ArrowRight className="h-4 w-4" />
            </a>
            <Link to="/inscription" className="inline-flex items-center gap-2 rounded-full border border-border px-8 py-4 text-sm">
              S'inscrire
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart, Users, Award, ArrowRight } from "lucide-react";
import lesson from "@/assets/lesson.jpg";

export const Route = createFileRoute("/a-propos")({
  head: () => ({
    meta: [
      { title: "L'auto-école — N'as du Volant à Bron" },
      { name: "description", content: "Une auto-école familiale à Bron, des moniteurs diplômés d'État et une pédagogie bienveillante. Découvrez l'équipe N'as du Volant." },
      { property: "og:title", content: "L'auto-école N'as du Volant — Bron" },
      { property: "og:description", content: "Une équipe humaine, une formation sur-mesure à Bron (69500)." },
    ],
  }),
  component: APropos,
});

function APropos() {
  return (
    <>
      <section className="py-24 lg:py-36 bg-gradient-hero">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <div className="text-xs tracking-[0.3em] uppercase text-primary">L'auto-école</div>
            <h1 className="mt-4 font-display text-5xl lg:text-7xl text-balance">
              Une équipe humaine, <span className="italic text-primary">un cap commun.</span>
            </h1>
            <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
              N'as du Volant, c'est avant tout une auto-école de quartier à Bron, où chaque
              élève est accueilli, écouté et accompagné. Notre mission : vous transmettre
              les clés d'une conduite sûre, autonome et respectueuse — pour la vie.
            </p>
          </div>
          <div className="relative">
            <img src={lesson} alt="Équipe N'as du Volant" loading="lazy" width={1400} height={1000} className="rounded-3xl shadow-card" />
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid gap-8 lg:grid-cols-3">
          {[
            { icon: Heart, title: "Bienveillance", desc: "Pas de jugement, pas de pression. On apprend mieux en confiance — c'est notre conviction." },
            { icon: Users, title: "Esprit familial", desc: "Une petite équipe soudée, qui connaît chaque élève par son prénom et son histoire." },
            { icon: Award, title: "Exigence pro", desc: "Moniteurs diplômés d'État, formés en continu, et un suivi pédagogique de haut niveau." },
          ].map((v) => (
            <div key={v.title} className="rounded-3xl border border-border bg-card p-8 shadow-card">
              <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                <v.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 font-display text-2xl">{v.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 bg-ink">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <div className="text-xs tracking-[0.3em] uppercase text-primary">L'équipe</div>
          <h2 className="mt-3 font-display text-4xl lg:text-5xl text-balance">Vos moniteurs.</h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { n: "Nadia", r: "Directrice & monitrice", q: "Fondatrice de l'école, +10 ans d'expérience." },
              { n: "Thomas", r: "Moniteur diplômé d'État", q: "Spécialiste conduite urbaine et autoroute." },
              { n: "Sami", r: "Moniteur diplômé d'État", q: "Pédagogue, expert AAC et perfectionnement." },
            ].map((p) => (
              <div key={p.n} className="rounded-2xl border border-border bg-card p-6">
                <div className="h-16 w-16 rounded-full bg-gradient-red flex items-center justify-center font-display text-2xl text-primary-foreground">
                  {p.n[0]}
                </div>
                <div className="mt-4 font-display text-xl">{p.n}</div>
                <div className="text-xs uppercase tracking-wider text-primary mt-1">{p.r}</div>
                <p className="mt-3 text-sm text-muted-foreground">{p.q}</p>
              </div>
            ))}
          </div>
          <Link to="/contact" className="mt-14 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-red">
            Venir nous rencontrer <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}

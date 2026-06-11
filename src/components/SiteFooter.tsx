import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Clock, Mail } from "lucide-react";
import logo from "@/assets/logo-nas-du-volant.jpg";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-ink relative overflow-hidden">
      <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 grid gap-12 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3">
            <img src={logo} alt="N'as du Volant" width={64} height={64} className="h-14 w-auto rounded-md" />
            <div>
              <div className="font-display italic text-2xl">N'as du Volant</div>
              <div className="text-[10px] tracking-[0.3em] text-muted-foreground uppercase mt-1">Auto-école · Bron 69500</div>
            </div>
          </div>
          <p className="mt-6 max-w-md text-sm text-muted-foreground leading-relaxed">
            Auto-école familiale à Bron. Permis B, boîte automatique, conduite accompagnée, code de la route — un accompagnement humain avec des moniteurs diplômés d'État. N° agrément : E2206900220.
          </p>
        </div>
        <div>
          <div className="text-xs tracking-[0.3em] uppercase text-primary mb-5">Navigation</div>
          <ul className="space-y-3 text-sm">
            <li><Link to="/formations" className="hover:text-primary transition-colors">Formations</Link></li>
            <li><Link to="/inscription" className="hover:text-primary transition-colors">Inscription</Link></li>
            <li><Link to="/agence" className="hover:text-primary transition-colors">Notre agence</Link></li>
            <li><Link to="/avis" className="hover:text-primary transition-colors">Avis Google</Link></li>
            <li><Link to="/verification-technique" className="hover:text-primary transition-colors">Vérifications techniques</Link></li>
            <li><Link to="/mentions-legales" className="hover:text-primary transition-colors">Mentions légales</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-xs tracking-[0.3em] uppercase text-primary mb-5">Contact</div>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-2"><MapPin className="h-4 w-4 mt-0.5 text-primary shrink-0" />133 Av. Franklin Roosevelt, 69500 Bron</li>
            <li className="flex gap-2"><Phone className="h-4 w-4 mt-0.5 text-primary shrink-0" /><a href="tel:+33978802232" className="hover:text-primary transition-colors">09 78 80 22 32</a></li>
            <li className="flex gap-2"><Mail className="h-4 w-4 mt-0.5 text-primary shrink-0" /><a href="mailto:nasduvolant@gmail.com" className="hover:text-primary transition-colors">nasduvolant@gmail.com</a></li>
            <li className="flex gap-2 items-start"><Clock className="h-4 w-4 mt-0.5 text-primary shrink-0" /><span className="text-xs leading-relaxed">Lun : 14h–19h · Mar–Ven : 10h–12h, 14h–19h · Sam : 9h–12h</span></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} N'as du Volant — Auto-école de Bron · SIRET 911 800 423 00020 · RCS Lyon</div>
          <div className="font-display italic">Pour une formation sûre <span className="text-primary">et sur-mesure</span></div>
        </div>
      </div>
    </footer>
  );
}

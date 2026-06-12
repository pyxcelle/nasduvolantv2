import { useQuery } from "@tanstack/react-query";

export interface GoogleRatingData {
  rating: string;        // ex: "4,9"
  ratingRaw: number;     // ex: 4.9
  count: number;         // ex: 247
  reviewUrl: string;     // lien direct formulaire avis Google
  mapsUrl: string;       // lien page Google Maps
  fallback?: boolean;    // true si l'API a échoué et qu'on utilise les valeurs de secours
}

export function useGoogleRating() {
  return useQuery<GoogleRatingData>({
    queryKey: ["google-rating"],
    queryFn: async () => {
      const res = await fetch("/api/google-rating");
      if (!res.ok) throw new Error("Erreur récupération note Google");
      return res.json() as Promise<GoogleRatingData>;
    },
    // Revalider toutes les heures (cohérent avec le cache CDN)
    staleTime: 1000 * 60 * 60,
    // Garder les données précédentes pendant 24h si le réseau échoue
    gcTime: 1000 * 60 * 60 * 24,
    // Ne pas retenter trop agressivement si l'API est down
    retry: 1,
  });
}

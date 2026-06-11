import { createServerFn } from "@tanstack/react-start";

const PLACE_ID = "ChIJF2sXKTjB9EcR6ty4qnkxDlw";

export type PlacesData = {
  rating: number;
  userRatingsTotal: number;
};

export const fetchGooglePlacesData = createServerFn({ method: "GET" }).handler(
  async () => {
    // Accès à la clé API via les variables d'environnement Cloudflare Workers
    // Déclarée dans wrangler.jsonc comme variable : GOOGLE_PLACES_API_KEY
    // ou via `wrangler secret put GOOGLE_PLACES_API_KEY`
    const apiKey =
      typeof process !== "undefined"
        ? process.env.GOOGLE_PLACES_API_KEY
        : // @ts-expect-error - Cloudflare Workers env
          (globalThis as Record<string, unknown>).GOOGLE_PLACES_API_KEY;

    if (!apiKey) {
      // Fallback si pas de clé configurée
      return { rating: 4.9, userRatingsTotal: 233 } satisfies PlacesData;
    }

    try {
      const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=rating,user_ratings_total&key=${apiKey}`;
      const res = await fetch(url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const json = (await res.json()) as {
        status: string;
        result?: { rating?: number; user_ratings_total?: number };
      };

      if (json.status !== "OK" || !json.result) {
        return { rating: 4.9, userRatingsTotal: 233 } satisfies PlacesData;
      }

      return {
        rating: json.result.rating ?? 4.9,
        userRatingsTotal: json.result.user_ratings_total ?? 233,
      } satisfies PlacesData;
    } catch {
      // Fallback gracieux sur les valeurs codées en dur
      return { rating: 4.9, userRatingsTotal: 233 } satisfies PlacesData;
    }
  },
);

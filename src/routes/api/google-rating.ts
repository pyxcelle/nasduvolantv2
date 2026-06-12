import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

// Place ID de "N'as du Volant" - 133 Av. Franklin Roosevelt, 69500 Bron
// Pour retrouver/vérifier ce Place ID : https://developers.google.com/maps/documentation/javascript/examples/places-placeid-finder
// Ou via : https://www.google.com/maps/search/N'as+du+Volant+133+Franklin+Roosevelt+Bron -> clic sur l'établissement -> l'URL contient le Place ID
const PLACE_ID = "ChIJF2sXKTjB9EcR6ty4qnkxDlw";

// Variable d'environnement Cloudflare Workers :
// Ajoutez dans wrangler.jsonc : "vars": { "GOOGLE_PLACES_API_KEY": "votre_clé" }
// Ou via le dashboard Cloudflare Workers > Settings > Environment Variables (recommandé pour les secrets)

interface Env {
  GOOGLE_PLACES_API_KEY?: string;
}

export const Route = createFileRoute("/api/google-rating")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const env = (request as Request & { env?: Env }).env ?? {};
        const apiKey = env.GOOGLE_PLACES_API_KEY;

        if (!apiKey) {
          return new Response(
            JSON.stringify({ error: "GOOGLE_PLACES_API_KEY non configurée" }),
            {
              status: 500,
              headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
              },
            },
          );
        }

        try {
          // API Places (New) - champs rating et userRatingCount uniquement (SKU gratuit)
          const url = `https://places.googleapis.com/v1/places/${PLACE_ID}?fields=rating,userRatingCount&key=${apiKey}`;

          const response = await fetch(url, {
            headers: {
              "X-Goog-FieldMask": "rating,userRatingCount",
            },
          });

          if (!response.ok) {
            throw new Error(`Google API error: ${response.status}`);
          }

          const data = (await response.json()) as {
            rating?: number;
            userRatingCount?: number;
          };

          const rating = data.rating ?? 4.9;
          const userRatingCount = data.userRatingCount ?? 0;

          return new Response(
            JSON.stringify({
              rating: rating.toFixed(1).replace(".", ","),
              ratingRaw: rating,
              count: userRatingCount,
              // Lien direct pour laisser un avis Google (s'ouvre directement sur le formulaire)
              reviewUrl: `https://search.google.com/local/writereview?placeid=${PLACE_ID}`,
              mapsUrl: `https://www.google.com/maps/place/?q=place_id:${PLACE_ID}`,
            }),
            {
              headers: {
                "Content-Type": "application/json",
                // Cache 1h côté CDN Cloudflare pour limiter les appels API
                "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
                "Access-Control-Allow-Origin": "*",
              },
            },
          );
        } catch (error) {
          console.error("Google Places API error:", error);
          // Fallback avec les valeurs connues — le site reste fonctionnel
          return new Response(
            JSON.stringify({
              rating: "4,9",
              ratingRaw: 4.9,
              count: 233,
              reviewUrl: `https://search.google.com/local/writereview?placeid=${PLACE_ID}`,
              mapsUrl: `https://www.google.com/maps/place/?q=place_id:${PLACE_ID}`,
              fallback: true,
            }),
            {
              headers: {
                "Content-Type": "application/json",
                "Cache-Control": "public, s-maxage=300",
                "Access-Control-Allow-Origin": "*",
              },
            },
          );
        }
      },
    },
  },
});

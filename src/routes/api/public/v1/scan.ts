import { createFileRoute } from "@tanstack/react-router";
import { scanPrompt } from "@/lib/shield";

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "content-type, x-shield-key",
};

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { ...CORS, "content-type": "application/json" } });

// Public, stateless scan endpoint: returns only the analysis of the caller's own input.
export const Route = createFileRoute("/api/public/v1/scan")({
  server: {
    handlers: {
      OPTIONS: async () => new Response(null, { status: 204, headers: CORS }),
      POST: async ({ request }) => {
        let body: unknown;
        try {
          body = await request.json();
        } catch {
          return json({ error: "Body must be JSON: { \"prompt\": string }" }, 400);
        }
        const prompt = (body as { prompt?: unknown })?.prompt;
        if (typeof prompt !== "string" || !prompt.trim()) return json({ error: "Field 'prompt' (string) is required" }, 400);
        if (prompt.length > 20000) return json({ error: "Prompt exceeds 20,000 characters" }, 413);
        const r = scanPrompt(prompt);
        return json(
          { verdict: r.verdict, score: r.score, tier: r.tier, findings: r.findings, sanitized: r.sanitized, latency_ms: r.latencyMs },
          r.verdict === "block" ? 403 : 200,
        );
      },
    },
  },
});

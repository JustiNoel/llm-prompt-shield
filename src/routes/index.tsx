import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Zap, Brain, KeyRound, Fingerprint, Gauge, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteHeader, SiteFooter } from "@/components/site/SiteHeader";
import { ScanPanel } from "@/components/site/ScanPanel";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PromptShield — Stop prompt injection before it reaches your LLM" },
      { name: "description", content: "Inline gateway that blocks jailbreaks, system prompt leaks and instruction overrides in milliseconds, before they reach your model." },
      { property: "og:title", content: "PromptShield — Prompt injection defense for LLM apps" },
      { property: "og:description", content: "A two-tier inspection gateway: sub-5ms pattern checks, deep semantic analysis only when needed." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const LAYERS = [
  { icon: Fingerprint, title: "Pattern & signature", text: "30+ known jailbreak signatures, override phrases and chat-template control tokens.", tag: "Tier 1 · <5ms" },
  { icon: Lock, title: "De-obfuscation", text: "Decodes base64, strips zero-width characters and normalises unicode tricks before matching.", tag: "Tier 1 · <5ms" },
  { icon: Brain, title: "Semantic intent", text: "Vector similarity against a curated index of injection attempts catches novel phrasing.", tag: "Tier 2 · ~40ms" },
  { icon: KeyRound, title: "Canary tokens", text: "Hidden markers in your system prompt reveal leaks the moment they appear in traffic.", tag: "Tier 2 · ~40ms" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background bg-canvas">
      <SiteHeader />
      <main>
        <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-16 lg:grid-cols-2 lg:pt-24">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground shadow-soft">
              <span className="h-1.5 w-1.5 rounded-full bg-success" /> Inline LLM firewall
            </span>
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.1] tracking-tight md:text-6xl">
              Stop prompt injection <span className="text-gradient">before it reaches your model.</span>
            </h1>
            <p className="mt-5 max-w-lg text-lg text-muted-foreground">
              PromptShield sits between your users and your LLM. Obvious attacks are dropped in milliseconds; only ambiguous prompts get deep analysis.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-gradient-primary shadow-elegant">
                <Link to="/playground">Try the playground <ArrowRight className="ml-1 h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/docs">Read the docs</Link>
              </Button>
            </div>
            <dl className="mt-10 grid max-w-md grid-cols-3 gap-6">
              {[["<5ms", "fast-path check"], ["4", "defense layers"], ["90%+", "never hit NLP"]].map(([v, l]) => (
                <div key={l}>
                  <dt className="text-2xl font-bold">{v}</dt>
                  <dd className="text-xs text-muted-foreground">{l}</dd>
                </div>
              ))}
            </dl>
          </div>
          <ScanPanel compact />
        </section>

        <section className="border-y border-border bg-card py-20">
          <div className="mx-auto max-w-6xl px-5">
            <h2 className="text-3xl font-bold tracking-tight">Two tiers. Four layers. One fast answer.</h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">Cheap checks run first, so the heavy analysis is reserved for the small share of prompts that really need it.</p>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {LAYERS.map((l) => (
                <div key={l.title} className="rounded-2xl border border-border bg-background p-6 transition-shadow hover:shadow-elegant">
                  <l.icon className="h-6 w-6 text-primary" />
                  <h3 className="mt-4 font-semibold">{l.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{l.text}</p>
                  <span className="mt-4 inline-block rounded-md bg-accent px-2 py-0.5 font-mono text-xs text-accent-foreground">{l.tag}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-20">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Drop-in, model-agnostic</h2>
              <p className="mt-3 text-muted-foreground">Point your existing OpenAI, Anthropic or local-model client at the PromptShield gateway. No SDK rewrite.</p>
              <ul className="mt-6 space-y-3 text-sm">
                {[[Zap, "Rate limiting and API-key checks at the edge"], [Gauge, "Live dashboard of blocked attacks and latency"], [Lock, "Sanitized prompts or hard 403 — your policy"]].map(([I, t]) => {
                  const Icon = I as typeof Zap;
                  return (
                    <li key={t as string} className="flex items-center gap-3"><Icon className="h-4 w-4 text-primary" /> {t as string}</li>
                  );
                })}
              </ul>
            </div>
            <pre className="overflow-x-auto rounded-2xl border border-border bg-card p-6 font-mono text-sm shadow-soft">
{`const res = await fetch(
  "https://llm-prompt-shield.lovable.app/api/public/v1/scan",
  {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ prompt: userInput }),
  },
);
const { verdict, sanitized } = await res.json();
if (verdict === "block") throw new Error("Blocked");`}
            </pre>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

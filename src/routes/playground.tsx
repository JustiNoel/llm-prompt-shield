import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/site/SiteHeader";
import { ScanPanel } from "@/components/site/ScanPanel";

export const Route = createFileRoute("/playground")({
  head: () => ({
    meta: [
      { title: "Playground — PromptShield" },
      { name: "description", content: "Test jailbreaks, system prompt leaks and obfuscated injections against the PromptShield pipeline live." },
      { property: "og:title", content: "PromptShield Playground" },
      { property: "og:description", content: "Paste any prompt and see which defense layer catches it, and how fast." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Playground,
});

function Playground() {
  return (
    <div className="min-h-screen bg-background bg-canvas">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-5 py-14">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Injection playground</h1>
        <p className="mt-3 text-muted-foreground">
          Pick a sample attack or write your own. You'll see the verdict, the layer that decided it, and the cleaned-up prompt.
        </p>
        <div className="mt-8">
          <ScanPanel />
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

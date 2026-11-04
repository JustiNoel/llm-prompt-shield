import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Activity, ShieldAlert, Timer, KeyRound, Copy } from "lucide-react";
import { toast } from "sonner";
import { SiteHeader, SiteFooter } from "@/components/site/SiteHeader";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "Dashboard — PromptShield" },
      { name: "description", content: "Monitor inspected requests, blocked injections, latency and API keys in one place." },
      { property: "og:title", content: "PromptShield Dashboard" },
      { property: "og:description", content: "Security analytics for your LLM traffic." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Dashboard,
});

// Sample data until live traffic is connected.
const HOURLY = [42, 55, 38, 61, 80, 74, 92, 120, 134, 118, 140, 156, 149, 162, 171, 158, 144, 130, 112, 96, 88, 71, 60, 48];
const VECTORS = [
  { name: "Instruction override", pct: 38 },
  { name: "Jailbreak persona", pct: 24 },
  { name: "System prompt leak", pct: 17 },
  { name: "Obfuscated payload", pct: 13 },
  { name: "Roleplay bypass", pct: 8 },
];
const EVENTS = [
  { time: "08:41:12", verdict: "block", rule: "instruction_override", tier: 1, ms: 2.1, src: "chat-widget" },
  { time: "08:40:57", verdict: "allow", rule: "—", tier: 2, ms: 36.4, src: "support-bot" },
  { time: "08:40:31", verdict: "review", rule: "intent_similarity", tier: 2, ms: 41.8, src: "chat-widget" },
  { time: "08:39:50", verdict: "block", rule: "base64_payload", tier: 1, ms: 3.0, src: "api" },
  { time: "08:39:12", verdict: "block", rule: "system_prompt_leak", tier: 1, ms: 2.4, src: "support-bot" },
  { time: "08:38:44", verdict: "allow", rule: "—", tier: 1, ms: 1.8, src: "api" },
] as const;

const VC: Record<string, string> = {
  allow: "bg-success/10 text-success",
  review: "bg-warning/15 text-warning",
  block: "bg-destructive/10 text-destructive",
};

function Dashboard() {
  const [filter, setFilter] = useState<"all" | "block" | "review" | "allow">("all");
  const [keys, setKeys] = useState([{ id: "ps_live_a8f9…3c21", created: "Oct 12, 2026" }]);
  const max = Math.max(...HOURLY);
  const events = useMemo(() => EVENTS.filter((e) => filter === "all" || e.verdict === filter), [filter]);

  const newKey = () => {
    const raw = "ps_live_" + Array.from(crypto.getRandomValues(new Uint8Array(12)), (b) => b.toString(16).padStart(2, "0")).join("");
    setKeys((k) => [{ id: raw.slice(0, 12) + "…" + raw.slice(-4), created: "Just now" }, ...k]);
    navigator.clipboard?.writeText(raw);
    toast.success("New API key copied to clipboard");
  };

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-5 py-10">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Security overview</h1>
            <p className="text-sm text-muted-foreground">Last 24 hours · sample data</p>
          </div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Activity, label: "Requests inspected", value: "2,568" },
            { icon: ShieldAlert, label: "Injections blocked", value: "184", sub: "7.2% of traffic" },
            { icon: Timer, label: "P95 added latency", value: "11.4 ms" },
            { icon: KeyRound, label: "Resolved at Tier 1", value: "91%" },
          ].map((s) => (
            <div key={s.label} className="rounded-2xl border border-border bg-card p-5 shadow-soft">
              <s.icon className="h-5 w-5 text-primary" />
              <div className="mt-3 text-2xl font-bold">{s.value}</div>
              <div className="text-xs text-muted-foreground">{s.label}{s.sub ? ` · ${s.sub}` : ""}</div>
            </div>
          ))}
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          <div className="rounded-2xl border border-border bg-card p-5 shadow-soft lg:col-span-2">
            <h2 className="font-semibold">Requests per hour</h2>
            <div className="mt-6 flex h-44 items-end gap-1">
              {HOURLY.map((v, i) => (
                <div key={i} className="flex-1 rounded-t bg-gradient-primary opacity-80 transition-opacity hover:opacity-100" style={{ height: `${(v / max) * 100}%` }} title={`${v} requests`} />
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-border bg-card p-5 shadow-soft">
            <h2 className="font-semibold">Attack vectors</h2>
            <ul className="mt-5 space-y-4">
              {VECTORS.map((v) => (
                <li key={v.name} className="text-sm">
                  <div className="flex justify-between"><span>{v.name}</span><span className="font-mono text-muted-foreground">{v.pct}%</span></div>
                  <div className="mt-1.5 h-2 rounded-full bg-muted"><div className="h-2 rounded-full bg-gradient-primary" style={{ width: `${v.pct}%` }} /></div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-border bg-card shadow-soft">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border p-5">
            <h2 className="font-semibold">Audit log</h2>
            <div className="flex gap-1 rounded-lg bg-muted p-1">
              {(["all", "block", "review", "allow"] as const).map((f) => (
                <button key={f} onClick={() => setFilter(f)} className={cn("rounded-md px-3 py-1 text-xs capitalize", filter === f ? "bg-card font-medium shadow-soft" : "text-muted-foreground")}>
                  {f}
                </button>
              ))}
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="text-left text-xs text-muted-foreground">
                <tr>{["Time", "Verdict", "Rule", "Tier", "Latency", "Source"].map((h) => <th key={h} className="px-5 py-3 font-medium">{h}</th>)}</tr>
              </thead>
              <tbody>
                {events.map((e, i) => (
                  <tr key={i} className="border-t border-border">
                    <td className="px-5 py-3 font-mono text-xs">{e.time}</td>
                    <td className="px-5 py-3"><Badge className={cn("border-0 capitalize", VC[e.verdict])}>{e.verdict}</Badge></td>
                    <td className="px-5 py-3 font-mono text-xs">{e.rule}</td>
                    <td className="px-5 py-3">{e.tier}</td>
                    <td className="px-5 py-3 font-mono text-xs">{e.ms} ms</td>
                    <td className="px-5 py-3 text-muted-foreground">{e.src}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-border bg-card p-5 shadow-soft">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold">API keys</h2>
            <Button size="sm" onClick={newKey} className="bg-gradient-primary">Generate key</Button>
          </div>
          <ul className="mt-4 divide-y divide-border">
            {keys.map((k) => (
              <li key={k.id} className="flex items-center justify-between py-3 text-sm">
                <span className="flex items-center gap-2 font-mono"><Copy className="h-3.5 w-3.5 text-muted-foreground" />{k.id}</span>
                <span className="text-xs text-muted-foreground">{k.created}</span>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

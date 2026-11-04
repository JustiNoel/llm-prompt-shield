import { useState } from "react";
import { ShieldAlert, ShieldCheck, ShieldQuestion, Zap, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { scanPrompt, SAMPLE_ATTACKS, type ScanResult } from "@/lib/shield";
import { cn } from "@/lib/utils";

const VERDICT = {
  allow: { label: "Safe — forwarded to LLM", icon: ShieldCheck, cls: "text-success bg-success/10 border-success/30" },
  review: { label: "Suspicious — flagged for review", icon: ShieldQuestion, cls: "text-warning bg-warning/10 border-warning/40" },
  block: { label: "Blocked — injection detected", icon: ShieldAlert, cls: "text-destructive bg-destructive/10 border-destructive/30" },
};

const SEV: Record<string, string> = {
  low: "bg-muted text-muted-foreground",
  medium: "bg-warning/15 text-warning",
  high: "bg-destructive/10 text-destructive",
  critical: "bg-destructive text-destructive-foreground",
};

export function ScanPanel({ compact = false }: { compact?: boolean }) {
  const [prompt, setPrompt] = useState(SAMPLE_ATTACKS[0].prompt);
  const [result, setResult] = useState<ScanResult | null>(null);

  const run = (p = prompt) => setResult(scanPrompt(p));

  return (
    <div className="rounded-2xl border border-border bg-card p-5 shadow-soft">
      <div className="mb-3 flex flex-wrap gap-2">
        {SAMPLE_ATTACKS.slice(0, compact ? 4 : undefined).map((s) => (
          <button
            key={s.label}
            onClick={() => {
              setPrompt(s.prompt);
              run(s.prompt);
            }}
            className="rounded-full border border-border bg-secondary px-3 py-1 text-xs text-secondary-foreground transition-colors hover:border-primary/40 hover:text-primary"
          >
            {s.label}
          </button>
        ))}
      </div>
      <Textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        rows={compact ? 3 : 6}
        className="resize-none font-mono text-sm"
        placeholder="Paste a user prompt to inspect…"
        aria-label="Prompt to scan"
      />
      <div className="mt-3 flex items-center justify-between">
        <span className="text-xs text-muted-foreground">{prompt.length} chars</span>
        <Button onClick={() => run()} className="bg-gradient-primary shadow-elegant">
          Scan prompt
        </Button>
      </div>

      {result && <ResultView result={result} compact={compact} />}
    </div>
  );
}

function ResultView({ result, compact }: { result: ScanResult; compact: boolean }) {
  const v = VERDICT[result.verdict];
  const Icon = v.icon;
  return (
    <div className="mt-5 space-y-4 border-t border-border pt-5">
      <div className={cn("flex items-center justify-between rounded-xl border px-4 py-3", v.cls)}>
        <div className="flex items-center gap-2 font-semibold">
          <Icon className="h-5 w-5" /> {v.label}
        </div>
        <span className="font-mono text-sm">risk {result.score}</span>
      </div>
      <div className="grid grid-cols-2 gap-3 text-sm">
        <div className="rounded-lg bg-muted px-3 py-2">
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            {result.tier === 1 ? <Zap className="h-3.5 w-3.5" /> : <Brain className="h-3.5 w-3.5" />} Decided at
          </div>
          <div className="font-semibold">{result.tier === 1 ? "Tier 1 · fast patterns" : "Tier 2 · semantic"}</div>
        </div>
        <div className="rounded-lg bg-muted px-3 py-2">
          <div className="text-xs text-muted-foreground">Added latency</div>
          <div className="font-mono font-semibold">{result.latencyMs} ms</div>
        </div>
      </div>
      {result.findings.length > 0 ? (
        <ul className="space-y-2">
          {result.findings.map((f, i) => (
            <li key={i} className="flex items-start justify-between gap-3 rounded-lg border border-border px-3 py-2 text-sm">
              <div>
                <div className="font-mono text-xs text-muted-foreground">{f.layer} · {f.rule}</div>
                <div>{f.detail}</div>
              </div>
              <Badge className={cn("shrink-0 border-0 capitalize", SEV[f.severity])}>{f.severity}</Badge>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-sm text-muted-foreground">No injection signals found.</p>
      )}
      {!compact && result.verdict !== "allow" && (
        <div>
          <div className="mb-1 text-xs font-medium text-muted-foreground">Sanitized output</div>
          <pre className="whitespace-pre-wrap rounded-lg bg-muted p-3 font-mono text-xs">{result.sanitized}</pre>
        </div>
      )}
    </div>
  );
}

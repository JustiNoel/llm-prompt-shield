import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

export function CodeBlock({ code, className }: { code: string; className?: string }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    toast.success("Copied to clipboard");
    setTimeout(() => setCopied(false), 1500);
  };
  return (
    <div className={cn("relative", className)}>
      <button
        onClick={copy}
        aria-label="Copy code"
        className="absolute right-3 top-3 rounded-md border border-border bg-background/80 p-1.5 text-muted-foreground transition-colors hover:text-foreground"
      >
        {copied ? <Check className="h-4 w-4 text-success" /> : <Copy className="h-4 w-4" />}
      </button>
      <pre className="overflow-x-auto p-5 pr-14 font-mono text-sm">{code}</pre>
    </div>
  );
}

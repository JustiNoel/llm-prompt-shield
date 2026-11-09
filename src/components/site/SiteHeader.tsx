import { Link } from "@tanstack/react-router";
import logo from "@/assets/shield-logo.png.asset.json";
import { Button } from "@/components/ui/button";

const NAV = [
  { to: "/playground", label: "Playground" },
  { to: "/dashboard", label: "Dashboard" },
  { to: "/docs", label: "Docs" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 glass">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link to="/" className="flex items-center gap-2 font-bold tracking-tight">
          <img src={logo.url} alt="PromptShield logo" className="h-9 w-9 rounded-lg border border-border object-cover shadow-soft" />
          PromptShield
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground font-medium" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <Button asChild size="sm" className="bg-gradient-primary shadow-elegant">
          <Link to="/playground">Test a prompt</Link>
        </Button>
      </div>
      <nav className="flex justify-center gap-1 border-t border-border/60 py-1 md:hidden">
        {NAV.map((n) => (
          <Link key={n.to} to={n.to} className="px-3 py-1.5 text-sm text-muted-foreground" activeProps={{ className: "text-foreground font-medium" }}>
            {n.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 py-8 text-sm text-muted-foreground md:flex-row">
        <p>© 2026 PromptShield. Inline prompt-injection defense for LLM apps.</p>
        <div className="flex gap-5">
          <Link to="/docs" className="hover:text-foreground">Docs</Link>
          <Link to="/playground" className="hover:text-foreground">Playground</Link>
          <Link to="/dashboard" className="hover:text-foreground">Dashboard</Link>
        </div>
      </div>
    </footer>
  );
}

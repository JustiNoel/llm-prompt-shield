import type { CSSProperties } from "react";
import { createFileRoute } from "@tanstack/react-router";
import capturedCSS from "../styles/site.css?raw";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [{ title: "PromptShield — LLM Prompt Injection Defense" }] }),
  staticData: { importedDocument: { html: { "lang": "en" }, body: { "data-site-import-responsive-incomplete": "scroll" } } },
  component: Index,
});

function Index() {
  return (
    <>
      <style>{capturedCSS}</style>
      <nav className="items-center bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#070b14cc] flex justify-between left-0 fixed right-0 top-0 z-100 [backdrop-filter:blur(20px)] [border-bottom:1px_solid_rgba(26,42,69,0.6)]">
        <div className="items-center flex gap-[0.6rem]">
          <div className="nav-logo-icon items-center [background:linear-gradient(135deg,var(--teal),#0096ff)] rounded-[8px] flex justify-center">🛡</div>
          <div className="nav-logo-text font-extrabold">Prompt<span className="text-(--teal)">Shield</span></div>
        </div>
        <div className="nav-links items-center flex gap-8"><a className="text-[0.85rem] no-underline [transition:color_0.2s]" href="#layers">How it Works</a><a className="text-[0.85rem] no-underline [transition:color_0.2s]" href="#usecases">Use Cases</a><a className="text-[0.85rem] no-underline [transition:color_0.2s]" href="#pricing">Pricing</a><a className="text-[0.85rem] no-underline [transition:color_0.2s]" href="/docshtml-53d5ff2ab416f88c">Docs</a><a className="text-[0.85rem] no-underline [transition:color_0.2s]" href="/dashboardhtml-ecf7c69981b0bce1">Dashboard</a></div>
        <a className="nav-cta bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--teal) rounded-[8px] text-black text-[0.85rem] font-bold no-underline transition-opacity duration-200" href="/docs" target="_blank">Try the API →</a>
      </nav>
      <ImportedSectionStopPromptInjectionBeforeIt />
      <div className="bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--surface) flex gap-0 justify-center overflow-hidden [border-bottom:1px_solid_var(--border)] [border-top:1px_solid_var(--border)]">
        <div className="stat-item flex-1 max-w-[220px] text-center [border-right:1px_solid_var(--border)]">
          <div className="text-(--teal) text-[2rem] font-extrabold">4</div>
          <div className="stat-lbl text-(--muted) text-[0.75rem]">Defense Layers</div>
        </div>
        <div className="stat-item flex-1 max-w-[220px] text-center [border-right:1px_solid_var(--border)]">
          <div className="text-(--teal) text-[2rem] font-extrabold">30+</div>
          <div className="stat-lbl text-(--muted) text-[0.75rem]">Attack Patterns</div>
        </div>
        <div className="stat-item flex-1 max-w-[220px] text-center [border-right:1px_solid_var(--border)]">
          <div className="text-(--teal) text-[2rem] font-extrabold">&lt;2s</div>
          <div className="stat-lbl text-(--muted) text-[0.75rem]">Avg Response Time</div>
        </div>
        <div className="stat-item border-r-current flex-1 max-w-[220px] text-center [border-right:1px_solid_var(--border)] [border-right-style:none] [border-right-width:medium]">
          <div className="text-(--teal) text-[2rem] font-extrabold">100%</div>
          <div className="stat-lbl text-(--muted) text-[0.75rem]">API Coverage</div>
        </div>
      </div>
      <ImportedSection4LayersOfDefense />
      <ImportedSectionWhoNeedsPromptShield />
      <ImportedSectionSimpleHonestPricing />
      <section className="[background:linear-gradient(135deg,rgba(0,212,170,0.05),rgba(0,150,255,0.05))] text-center [border-bottom:1px_solid_var(--border)] [border-top:1px_solid_var(--border)]">
        <div className="section-inner max-w-[1100px] text-center">
          <div className="section-label text-(--teal) text-[0.72rem] tracking-[0.15em] uppercase justify-center flex">Get Started</div>
          <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-extrabold tracking-[-0.02em]">Your LLM is exposed.<br />Fix it in minutes.</h2>
          <p className="section-sub text-[#e2eaf799] text-[1rem] leading-[1.7] max-w-[520px]" style={{ margin: "1rem auto 2rem" }}>PromptShield integrates with any LLM backend. One API call. Full protection.</p>
          <div className="flex flex-wrap gap-4 justify-center"><a className="btn-primary bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--teal) rounded-[10px] text-black text-[0.95rem] font-bold no-underline duration-200" href="/docs" target="_blank">View Live API</a><a className="btn-secondary bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-transparent text-[0.95rem] font-semibold no-underline duration-200" href="/docshtml-53d5ff2ab416f88c">Read the Docs</a></div>
        </div>
      </section>
      <footer className="items-center text-(--muted) flex text-[0.78rem] justify-between [border-top:1px_solid_var(--border)]">
        <div className="items-center flex gap-[0.6rem]">
          <div className="nav-logo-icon items-center [background:linear-gradient(135deg,var(--teal),#0096ff)] rounded-[8px] flex justify-center" style={{ width: "24px", height: "24px", fontSize: "0.75rem" }}>🛡</div>
          <div className="nav-logo-text font-extrabold" style={{ fontSize: "0.9rem" }}>Prompt<span className="text-(--teal)">Shield</span></div>
        </div>
        <div className="[color:var(--muted)] [font-size:0.75rem]">Built by Noel · Kenya 🇰🇪</div>
        <div className="flex gap-6"><a className="no-underline" href="https://github.com/JustiNoel/LLM-Prompt-Injection" target="_blank">GitHub</a><a className="no-underline" href="/docshtml-53d5ff2ab416f88c">Docs</a><a className="no-underline" href="/dashboardhtml-ecf7c69981b0bce1">Dashboard</a><a className="no-underline" href="/docs" target="_blank">API</a></div>
      </footer>
    </>
  );
}

function ImportedSectionStopPromptInjectionBeforeIt() {
  return (
    <section className="hero items-center flex flex-col justify-center min-h-screen text-center">
      <div className="hero-badge items-center bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#00d4aa14] border border-solid border-[#00d4aa33] rounded-[100px] text-(--teal) inline-flex gap-2 tracking-wider">🔴 Live — prompt-shield.onrender.com</div>
      <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold tracking-[-0.03em] leading-[1.05] max-w-[800px]">Stop Prompt Injection<br />Before It <span className="text-(--teal)">Reaches Your LLM</span></h1>
      <p className="hero-sub text-[#e2eaf7a6] text-[1.1rem] leading-[1.7] max-w-[560px]">PromptShield is a 4-layer defense middleware that blocks jailbreaks, system prompt leaking, and instruction overrides in real time.</p>
      <div className="flex flex-wrap gap-4 justify-center"><a className="btn-primary bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--teal) rounded-[10px] text-black text-[0.95rem] font-bold no-underline duration-200" href="/docs" target="_blank">View Live API</a><a className="btn-secondary bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-transparent text-[0.95rem] font-semibold no-underline duration-200" href="https://github.com/JustiNoel/LLM-Prompt-Injection" target="_blank">GitHub →</a></div>
      <div className="hero-code rounded-[14px] max-w-[600px] overflow-hidden text-left w-full [border:1px_solid_var(--border)]">
        <div className="code-bar items-center flex gap-[0.4rem]">
          <div className="bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#ff5f57] rounded-[50%] h-[10px] w-[10px]" />
          <div className="bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#ffbd2e] rounded-[50%] h-[10px] w-[10px]" />
          <div className="bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#28c840] rounded-[50%] h-[10px] w-[10px]" />
        </div>
        <pre className="text-[0.78rem] leading-[1.7] overflow-x-auto">
          <code><span className="text-(--muted)"># Integrate in 3 lines</span>{"\n"}<span className="text-[#f97583]">from</span>{" "}<span className="text-(--teal)">promptshield_sdk</span>{" "}<span className="text-[#f97583]">import</span> PromptShieldClient

    client = PromptShieldClient(<span className="text-[#9ecbff]">"ps_live_yourkey"</span>)
    result = client.chat(<span className="text-[#9ecbff]">"Hello!"</span>)

    <span className="text-(--muted)"># Injection attempt? Blocked automatically.</span>
    result = client.chat(<span className="text-[#9ecbff]">"Ignore all previous instructions"</span>)
    <span className="text-(--muted)"># → allowed: false, blocked_at_layer: 1</span></code>
        </pre>
      </div>
    </section>
  );
}

function ImportedSection4LayersOfDefense() {
  return (
    <section id="layers">
      <div className="section-inner max-w-[1100px]">
        <div className="section-label text-(--teal) text-[0.72rem] tracking-[0.15em] uppercase">Architecture</div>
        <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-extrabold tracking-[-0.02em]">4 Layers of Defense</h2>
        <p className="section-sub text-[#e2eaf799] text-[1rem] leading-[1.7] max-w-[520px]">Every request passes through all four layers before reaching your LLM — and before the response reaches your user.</p>
        <div className="grid gap-5 grid-cols-[repeat(auto-fit,minmax(240px,1fr))]">
          <div className="layer-card overflow-hidden">
            <div className="layer-num text-(--teal) text-[0.7rem] tracking-widest">LAYER 01</div>
            <div className="layer-icon text-[1.75rem]">🔍</div>
            <div className="layer-title text-[1rem] font-bold">Input Classification</div>
            <div className="text-(--muted) text-[0.82rem] leading-[1.6]">Pattern matching + heuristic scoring detects injection attempts, jailbreak templates, and role-override attacks before anything else runs.</div>
          </div>
          <div className="layer-card overflow-hidden">
            <div className="layer-num text-(--teal) text-[0.7rem] tracking-widest">LAYER 02</div>
            <div className="layer-icon text-[1.75rem]">🧹</div>
            <div className="layer-title text-[1rem] font-bold">Context Sanitization</div>
            <div className="text-(--muted) text-[0.82rem] leading-[1.6]">Strips prompt delimiters, neutralizes override phrases, removes encoded payloads, and wraps input in safe boundaries.</div>
          </div>
          <div className="layer-card overflow-hidden">
            <div className="layer-num text-(--teal) text-[0.7rem] tracking-widest">LAYER 03</div>
            <div className="layer-icon text-[1.75rem]">🔐</div>
            <div className="layer-title text-[1rem] font-bold">Prompt Integrity</div>
            <div className="text-(--muted) text-[0.82rem] leading-[1.6]">HMAC-signs and verifies your system prompt hasn't been tampered with. Catches structural violations before the LLM call.</div>
          </div>
          <div className="layer-card overflow-hidden">
            <div className="layer-num text-(--teal) text-[0.7rem] tracking-widest">LAYER 04</div>
            <div className="layer-icon text-[1.75rem]">👁</div>
            <div className="layer-title text-[1rem] font-bold">Output Monitoring</div>
            <div className="text-(--muted) text-[0.82rem] leading-[1.6]">Scans LLM responses for jailbreak success signals, system prompt leakage, PII exposure, and harmful content patterns.</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ImportedSectionWhoNeedsPromptShield() {
  return (
    <section className="[background:var(--surface)]" style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" } as CSSProperties} id="usecases">
      <div className="section-inner max-w-[1100px]">
        <div className="section-label text-(--teal) text-[0.72rem] tracking-[0.15em] uppercase">Use Cases</div>
        <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-extrabold tracking-[-0.02em]">Who Needs PromptShield?</h2>
        <p className="section-sub text-[#e2eaf799] text-[1rem] leading-[1.7] max-w-[520px]">Any application that exposes an LLM to user input is vulnerable. PromptShield protects them all.</p>
        <div className="grid gap-5 grid-cols-[repeat(auto-fit,minmax(300px,1fr))]">
          <div className="use-card bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--surface) rounded-[14px] [border:1px_solid_var(--border)]">
            <div className="use-icon text-[1.5rem]">🏦</div>
            <div className="use-title text-[1rem] font-bold">Fintechs &amp; Banks</div>
            <div className="text-(--muted) text-[0.82rem] leading-[1.6]">AI chatbots handling financial queries are prime targets. PromptShield prevents data extraction and unauthorized instruction execution.</div>
          </div>
          <div className="use-card bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--surface) rounded-[14px] [border:1px_solid_var(--border)]">
            <div className="use-icon text-[1.5rem]">🏥</div>
            <div className="use-title text-[1rem] font-bold">Healthtech</div>
            <div className="text-(--muted) text-[0.82rem] leading-[1.6]">Patient-facing AI tools must never leak sensitive data. Layer 4 output monitoring catches PII before it reaches users.</div>
          </div>
          <div className="use-card bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--surface) rounded-[14px] [border:1px_solid_var(--border)]">
            <div className="use-icon text-[1.5rem]">📚</div>
            <div className="use-title text-[1rem] font-bold">EdTech Platforms</div>
            <div className="text-(--muted) text-[0.82rem] leading-[1.6]">AI tutors deployed to students are easily manipulated. PromptShield blocks attempts to bypass content guidelines.</div>
          </div>
          <div className="use-card bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--surface) rounded-[14px] [border:1px_solid_var(--border)]">
            <div className="use-icon text-[1.5rem]">🏢</div>
            <div className="use-title text-[1rem] font-bold">Enterprise AI</div>
            <div className="text-(--muted) text-[0.82rem] leading-[1.6]">Internal copilots with access to sensitive company data need strong prompt security. Self-host with Docker for full control.</div>
          </div>
          <div className="use-card bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--surface) rounded-[14px] [border:1px_solid_var(--border)]">
            <div className="use-icon text-[1.5rem]">🛒</div>
            <div className="use-title text-[1rem] font-bold">E-commerce Bots</div>
            <div className="text-(--muted) text-[0.82rem] leading-[1.6]">Customer service AIs can be manipulated into giving unauthorized discounts or leaking pricing logic. Not anymore.</div>
          </div>
          <div className="use-card bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--surface) rounded-[14px] [border:1px_solid_var(--border)]">
            <div className="use-icon text-[1.5rem]">🏛</div>
            <div className="use-title text-[1rem] font-bold">Government &amp; NGOs</div>
            <div className="text-(--muted) text-[0.82rem] leading-[1.6]">Public-facing AI tools in sensitive contexts need audit trails and compliance-ready logging. PromptShield delivers both.</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ImportedSectionSimpleHonestPricing() {
  return (
    <section id="pricing">
      <div className="section-inner max-w-[1100px]">
        <div className="section-label text-(--teal) text-[0.72rem] tracking-[0.15em] uppercase">Pricing</div>
        <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-extrabold tracking-[-0.02em]">Simple, Honest Pricing</h2>
        <p className="section-sub text-[#e2eaf799] text-[1rem] leading-[1.7] max-w-[520px]">Start free. Scale as you grow. Enterprise self-hosting available.</p>
        <div className="grid gap-5 grid-cols-[repeat(auto-fit,minmax(260px,1fr))] max-w-[900px]">
          <div className="price-card bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--surface) rounded-[14px] [border:1px_solid_var(--border)] [transition:border-color_0.2s]">
            <div className="price-plan text-(--muted) text-[0.75rem] tracking-widest uppercase">Starter</div>
            <div className="price-amount text-[2.2rem] font-extrabold">Free</div>
            <div className="text-(--muted) text-[0.8rem]">During beta</div>
            <ul className="price-features flex flex-col gap-[0.6rem] list-none">
              <li className="items-center flex text-[0.82rem] gap-2">1 API key</li>
              <li className="items-center flex text-[0.82rem] gap-2">60 requests/min</li>
              <li className="items-center flex text-[0.82rem] gap-2">All 4 defense layers</li>
              <li className="items-center flex text-[0.82rem] gap-2">Audit logs (last 1000)</li>
              <li className="items-center flex text-[0.82rem] gap-2">Community support</li>
            </ul>
            <a className="price-btn bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--teal-dim) border border-solid border-site-import-border rounded-[8px] text-(--teal) block text-[0.85rem] font-bold text-center no-underline duration-200" href="/docs" target="_blank">Get Started</a>
          </div>
          <div className="price-card bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--surface) border-(--teal)! rounded-[14px] relative [border:1px_solid_var(--border)] [transition:border-color_0.2s]">
            <div className="featured-badge bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--teal) rounded-tl-none rounded-tr-none rounded-br-[6px] rounded-bl-[6px] text-black text-[0.65rem] font-bold left-1/2 tracking-wider absolute -top-px [transform:translateX(-50%)]">MOST POPULAR</div>
            <div className="price-plan text-(--muted) text-[0.75rem] tracking-widest uppercase">Professional</div>
            <div className="price-amount text-[2.2rem] font-extrabold">$99<span className="[font-size:1rem] [font-weight:400]">/mo</span></div>
            <div className="text-(--muted) text-[0.8rem]">Billed monthly</div>
            <ul className="price-features flex flex-col gap-[0.6rem] list-none">
              <li className="items-center flex text-[0.82rem] gap-2">10 API keys</li>
              <li className="items-center flex text-[0.82rem] gap-2">Custom rate limits</li>
              <li className="items-center flex text-[0.82rem] gap-2">All 4 defense layers</li>
              <li className="items-center flex text-[0.82rem] gap-2">Full audit trail</li>
              <li className="items-center flex text-[0.82rem] gap-2">Dashboard access</li>
              <li className="items-center flex text-[0.82rem] gap-2">Email support</li>
            </ul>
            <a className="price-btn bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--teal) border border-solid border-site-import-border border-current! rounded-[8px] border-none! text-black block text-[0.85rem] font-bold text-center no-underline duration-200 [border-image:none] [border-width:medium]!" href="mailto:justinoel254@gmail.com">Contact Us</a>
          </div>
          <div className="price-card bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--surface) rounded-[14px] [border:1px_solid_var(--border)] [transition:border-color_0.2s]">
            <div className="price-plan text-(--muted) text-[0.75rem] tracking-widest uppercase">Enterprise</div>
            <div className="price-amount text-[2.2rem] font-extrabold">Custom</div>
            <div className="text-(--muted) text-[0.8rem]">Annual license</div>
            <ul className="price-features flex flex-col gap-[0.6rem] list-none">
              <li className="items-center flex text-[0.82rem] gap-2">Unlimited API keys</li>
              <li className="items-center flex text-[0.82rem] gap-2">Self-hosted (Docker)</li>
              <li className="items-center flex text-[0.82rem] gap-2">Custom aggression tuning</li>
              <li className="items-center flex text-[0.82rem] gap-2">SLA guarantee</li>
              <li className="items-center flex text-[0.82rem] gap-2">Dedicated support</li>
              <li className="items-center flex text-[0.82rem] gap-2">Compliance reporting</li>
            </ul>
            <a className="price-btn bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--teal-dim) border border-solid border-site-import-border rounded-[8px] text-(--teal) block text-[0.85rem] font-bold text-center no-underline duration-200" href="mailto:justinoel254@gmail.com">Talk to Us</a>
          </div>
        </div>
      </div>
    </section>
  );
}

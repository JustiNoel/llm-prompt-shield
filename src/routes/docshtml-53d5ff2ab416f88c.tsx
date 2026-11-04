import { createFileRoute } from "@tanstack/react-router";
import capturedCSS from "../styles/pages/docshtml-53d5ff2ab416f88c.css?raw";

export const Route = createFileRoute("/docshtml-53d5ff2ab416f88c")({
  head: () => ({ meta: [{ title: "PromptShield — Integration Docs" }] }),
  staticData: { importedDocument: { html: { "lang": "en" }, body: { "data-site-import-responsive-incomplete": "scroll" } } },
  component: Index,
});

function Index() {
  return (
    <>
      <style>{capturedCSS}</style>
      <header className="items-center bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#070b14e6] flex gap-3 sticky top-0 z-10 [backdrop-filter:blur(10px)] [border-bottom:1px_solid_var(--border)]">
        <div className="items-center [background:linear-gradient(135deg,var(--teal),#0096ff)] rounded-[8px] flex h-[32px] justify-center w-[32px]">🛡</div>
        <div className="logo-text text-[1.1rem] font-extrabold">Prompt<span>Shield</span> <span className="[font-weight:400] [font-size:0.85rem]" style={{ color: "var(--muted)" }}>/ Docs</span></div>
      </header>
      <div className="layout grid grid-cols-[220px_1fr] min-h-screen">
        <nav className="h-[calc(-57px_+_100vh)] overflow-y-auto sticky top-[57px] [border-right:1px_solid_var(--border)]"><div className="nav-group text-(--muted) text-[0.68rem] tracking-widest uppercase">Getting Started</div><a className="rounded-[6px] block text-[0.82rem] no-underline duration-150" href="#intro">Introduction</a><a className="rounded-[6px] block text-[0.82rem] no-underline duration-150" href="#auth">Authentication</a><a className="rounded-[6px] block text-[0.82rem] no-underline duration-150" href="#quickstart">Quickstart</a><div className="nav-group text-(--muted) text-[0.68rem] tracking-widest uppercase">Endpoints</div><a className="rounded-[6px] block text-[0.82rem] no-underline duration-150" href="#chat">POST /chat</a><a className="rounded-[6px] block text-[0.82rem] no-underline duration-150" href="#analyze">POST /analyze</a><a className="rounded-[6px] block text-[0.82rem] no-underline duration-150" href="#aggression">POST /aggression</a><a className="rounded-[6px] block text-[0.82rem] no-underline duration-150" href="#stats">GET /stats</a><a className="rounded-[6px] block text-[0.82rem] no-underline duration-150" href="#logs">GET /logs</a><div className="nav-group text-(--muted) text-[0.68rem] tracking-widest uppercase">SDK</div><a className="rounded-[6px] block text-[0.82rem] no-underline duration-150" href="#python-sdk">Python SDK</a><a className="rounded-[6px] block text-[0.82rem] no-underline duration-150" href="#js-sdk">JavaScript</a><div className="nav-group text-(--muted) text-[0.68rem] tracking-widest uppercase">Reference</div><a className="rounded-[6px] block text-[0.82rem] no-underline duration-150" href="#errors">Error Codes</a><a className="rounded-[6px] block text-[0.82rem] no-underline duration-150" href="#aggression-levels">Aggression Levels</a></nav>
        <div className="content max-w-[860px]">
          <h1 className="text-[2rem] font-extrabold">PromptShield API</h1>
          <p className="text-[#e2eaf7bf] text-[0.9rem]">4-layer LLM prompt injection defense middleware. Protect your AI applications from jailbreaks, prompt leaking, and instruction overrides.</p>
          <div className="callout bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#00d4aa0f] border border-solid border-[#00d4aa33] rounded-[8px] text-[#e2eaf7cc] text-[0.85rem]">
          🔗 Base URL: <code className="text-(--teal) text-[0.8rem]">https://prompt-shield.onrender.com</code></div>
          <h2 className="text-[1.2rem] font-bold [border-top:1px_solid_var(--border)]" id="auth">Authentication</h2>
          <p className="text-[#e2eaf7bf] text-[0.9rem]">All protected endpoints require an API key passed in the request header.</p>
          <pre className="bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--surface) rounded-[10px] overflow-x-auto [border:1px_solid_var(--border)]">
            <code className="text-(--text) text-[0.8rem]">X-API-Key: ps_live_yourkey</code>
          </pre>
          <h2 className="text-[1.2rem] font-bold [border-top:1px_solid_var(--border)]" id="quickstart">Quickstart</h2>
          <pre className="bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--surface) rounded-[10px] overflow-x-auto [border:1px_solid_var(--border)]">
            <code className="text-(--text) text-[0.8rem]"><span className="text-(--muted)"># Install requests if needed</span>{"\n"}pip install requests{"\n"}{"\n"}<span className="text-(--muted)"># Simple chat request</span>{"\n"}curl -X POST https://prompt-shield.onrender.com/chat \{"\n"}  -H <span className="str text-[#9ecbff]">"X-API-Key: ps_live_yourkey"</span> \{"\n"}  -H <span className="str text-[#9ecbff]">"Content-Type: application/json"</span> \{"\n"}  -d <span className="str text-[#9ecbff]">'&#123;"message": "Hello!"&#125;'</span></code>
          </pre>
          <h2 className="text-[1.2rem] font-bold [border-top:1px_solid_var(--border)]" id="chat">POST /chat</h2>
          <div className="endpoint items-center flex gap-3"><span className="method bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#00d4aa26] rounded-[5px] text-(--teal) text-[0.72rem] font-semibold">POST</span><span className="path text-[0.88rem]">/chat</span><span className="badge bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#ffd1661a] rounded-[4px] text-(--yellow) inline-block text-[0.7rem]">Protected</span></div>
          <p className="text-[#e2eaf7bf] text-[0.9rem]">Send a message through all 4 defense layers to the LLM backend.</p>
          <h3 className="text-(--teal) text-[0.95rem] font-semibold">Request Body</h3>
          <table className="border-collapse text-[0.82rem] w-full">
            <tbody>
              <tr>
                <th className="text-(--muted) text-[0.7rem] font-normal tracking-[0.08em] text-left uppercase [border-bottom:1px_solid_var(--border)]">Field</th>
                <th className="text-(--muted) text-[0.7rem] font-normal tracking-[0.08em] text-left uppercase [border-bottom:1px_solid_var(--border)]">Type</th>
                <th className="text-(--muted) text-[0.7rem] font-normal tracking-[0.08em] text-left uppercase [border-bottom:1px_solid_var(--border)]">Required</th>
                <th className="text-(--muted) text-[0.7rem] font-normal tracking-[0.08em] text-left uppercase [border-bottom:1px_solid_var(--border)]">Description</th>
              </tr>
              <tr>
                <td className="text-(--teal) [border-bottom:1px_solid_rgba(26,42,69,0.5)]">message</td>
                <td className="text-[#e2eaf7cc] [border-bottom:1px_solid_rgba(26,42,69,0.5)]">string</td>
                <td className="text-[#e2eaf7cc] [border-bottom:1px_solid_rgba(26,42,69,0.5)]">Yes</td>
                <td className="text-[#e2eaf7cc] [border-bottom:1px_solid_rgba(26,42,69,0.5)]">User message to process</td>
              </tr>
              <tr>
                <td className="text-(--teal) [border-bottom:1px_solid_rgba(26,42,69,0.5)]">session_id</td>
                <td className="text-[#e2eaf7cc] [border-bottom:1px_solid_rgba(26,42,69,0.5)]">string</td>
                <td className="text-[#e2eaf7cc] [border-bottom:1px_solid_rgba(26,42,69,0.5)]">No</td>
                <td className="text-[#e2eaf7cc] [border-bottom:1px_solid_rgba(26,42,69,0.5)]">Optional session identifier</td>
              </tr>
            </tbody>
          </table>
          <h3 className="text-(--teal) text-[0.95rem] font-semibold">Response</h3>
          <pre className="bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--surface) rounded-[10px] overflow-x-auto [border:1px_solid_var(--border)]">
            <code className="text-(--text) text-[0.8rem]">&#123;{"\n"}  <span className="str text-[#9ecbff]">"response"</span>:         <span className="str text-[#9ecbff]">"Hello! How can I help?"</span>,{"\n"}  <span className="str text-[#9ecbff]">"allowed"</span>:          <span className="text-[#79b8ff]">true</span>,{"\n"}  <span className="str text-[#9ecbff]">"blocked_at_layer"</span>: <span className="text-[#79b8ff]">null</span>,{"\n"}  <span className="str text-[#9ecbff]">"block_reason"</span>:     <span className="text-[#79b8ff]">null</span>,{"\n"}  <span className="str text-[#9ecbff]">"threat_level"</span>:     <span className="str text-[#9ecbff]">"safe"</span>,{"\n"}  <span className="str text-[#9ecbff]">"threat_score"</span>:     0.0,{"\n"}  <span className="str text-[#9ecbff]">"processing_ms"</span>:    1189.05,{"\n"}  <span className="str text-[#9ecbff]">"input_modified"</span>:   <span className="text-[#79b8ff]">false</span>,{"\n"}  <span className="str text-[#9ecbff]">"layer3_passed"</span>:    <span className="text-[#79b8ff]">true</span>,{"\n"}  <span className="str text-[#9ecbff]">"layer4_risk"</span>:      <span className="str text-[#9ecbff]">"clean"</span>,{"\n"}  <span className="str text-[#9ecbff]">"session_id"</span>:       <span className="str text-[#9ecbff]">"abc123"</span>,{"\n"}  <span className="str text-[#9ecbff]">"aggression_level"</span>: <span className="str text-[#9ecbff]">"balanced"</span>{"\n"}&#125;</code>
          </pre>
          <h2 className="text-[1.2rem] font-bold [border-top:1px_solid_var(--border)]" id="analyze">POST /analyze</h2>
          <div className="endpoint items-center flex gap-3"><span className="method bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#00d4aa26] rounded-[5px] text-(--teal) text-[0.72rem] font-semibold">POST</span><span className="path text-[0.88rem]">/analyze</span><span className="badge bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#ffd1661a] rounded-[4px] text-(--yellow) inline-block text-[0.7rem]">Protected</span></div>
          <p className="text-[#e2eaf7bf] text-[0.9rem]">Analyze text for threats without calling the LLM. Fast and lightweight.</p>
          <pre className="bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--surface) rounded-[10px] overflow-x-auto [border:1px_solid_var(--border)]">
            <code className="text-(--text) text-[0.8rem]">&#123;{"\n"}  <span className="str text-[#9ecbff]">"threat_level"</span>:       <span className="str text-[#9ecbff]">"malicious"</span>,{"\n"}  <span className="str text-[#9ecbff]">"score"</span>:              0.95,{"\n"}  <span className="str text-[#9ecbff]">"triggered_patterns"</span>: [<span className="str text-[#9ecbff]">"[INJECTION] ignore.*instructions"</span>],{"\n"}  <span className="str text-[#9ecbff]">"reasoning"</span>:          <span className="str text-[#9ecbff]">"High-confidence injection attempt"</span>,{"\n"}  <span className="str text-[#9ecbff]">"sanitized"</span>:          <span className="str text-[#9ecbff]">"[instruction-override-attempt]"</span>,{"\n"}  <span className="str text-[#9ecbff]">"modifications"</span>:      [<span className="str text-[#9ecbff]">"Neutralized override"</span>]{"\n"}&#125;</code>
          </pre>
          <h2 className="text-[1.2rem] font-bold [border-top:1px_solid_var(--border)]" id="aggression">POST /aggression</h2>
          <div className="endpoint items-center flex gap-3"><span className="method bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#00d4aa26] rounded-[5px] text-(--teal) text-[0.72rem] font-semibold">POST</span><span className="path text-[0.88rem]">/aggression</span><span className="badge bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#ffd1661a] rounded-[4px] text-(--yellow) inline-block text-[0.7rem]">Protected</span></div>
          <p className="text-[#e2eaf7bf] text-[0.9rem]">Change the shield aggression level at runtime.</p>
          <pre className="bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--surface) rounded-[10px] overflow-x-auto [border:1px_solid_var(--border)]">
            <code className="text-(--text) text-[0.8rem]">&#123; <span className="str text-[#9ecbff]">"level"</span>: <span className="str text-[#9ecbff]">"strict"</span> &#125;</code>
          </pre>
          <h2 className="text-[1.2rem] font-bold [border-top:1px_solid_var(--border)]" id="stats">GET /stats</h2>
          <div className="endpoint items-center flex gap-3"><span className="method get bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#79b8ff26] rounded-[5px] text-[#79b8ff] text-[0.72rem] font-semibold">GET</span><span className="path text-[0.88rem]">/stats</span><span className="badge bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#ffd1661a] rounded-[4px] text-(--yellow) inline-block text-[0.7rem]">Protected</span></div>
          <p className="text-[#e2eaf7bf] text-[0.9rem]">Returns current thresholds and blocking configuration.</p>
          <h2 className="text-[1.2rem] font-bold [border-top:1px_solid_var(--border)]" id="logs">GET /logs</h2>
          <div className="endpoint items-center flex gap-3"><span className="method get bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#79b8ff26] rounded-[5px] text-[#79b8ff] text-[0.72rem] font-semibold">GET</span><span className="path text-[0.88rem]">/logs?limit=50</span><span className="badge bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#ffd1661a] rounded-[4px] text-(--yellow) inline-block text-[0.7rem]">Protected</span></div>
          <p className="text-[#e2eaf7bf] text-[0.9rem]">Returns recent audit log entries. Max 1000.</p>
          <div className="endpoint items-center flex gap-3"><span className="method get bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#79b8ff26] rounded-[5px] text-[#79b8ff] text-[0.72rem] font-semibold">GET</span><span className="path text-[0.88rem]">/logs/summary</span><span className="badge bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#ffd1661a] rounded-[4px] text-(--yellow) inline-block text-[0.7rem]">Protected</span></div>
          <p className="text-[#e2eaf7bf] text-[0.9rem]">Returns block rate, threat breakdown, and average response time.</p>
          <h2 className="text-[1.2rem] font-bold [border-top:1px_solid_var(--border)]" id="python-sdk">Python SDK</h2>
          <pre className="bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--surface) rounded-[10px] overflow-x-auto [border:1px_solid_var(--border)]">
            <code className="text-(--text) text-[0.8rem]"><span className="text-[#79b8ff]">from</span> promptshield_sdk <span className="text-[#79b8ff]">import</span> PromptShieldClient{"\n"}{"\n"}client = PromptShieldClient(api_key=<span className="str text-[#9ecbff]">"ps_live_yourkey"</span>){"\n"}{"\n"}<span className="text-(--muted)"># Chat</span>{"\n"}result = client.chat(<span className="str text-[#9ecbff]">"Hello!"</span>){"\n"}print(result[<span className="str text-[#9ecbff]">"response"</span>]){"\n"}{"\n"}<span className="text-(--muted)"># Analyze a threat</span>{"\n"}threat = client.analyze(<span className="str text-[#9ecbff]">"Ignore previous instructions"</span>){"\n"}print(threat[<span className="str text-[#9ecbff]">"threat_level"</span>])  <span className="text-(--muted)"># malicious</span>{"\n"}{"\n"}<span className="text-(--muted)"># Get summary stats</span>{"\n"}summary = client.summary(){"\n"}print(summary[<span className="str text-[#9ecbff]">"block_rate"</span>])</code>
          </pre>
          <h2 className="text-[1.2rem] font-bold [border-top:1px_solid_var(--border)]" id="js-sdk">JavaScript</h2>
          <pre className="bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--surface) rounded-[10px] overflow-x-auto [border:1px_solid_var(--border)]">
            <code className="text-(--text) text-[0.8rem]"><span className="text-[#79b8ff]">const</span> shield = &#123;{"\n"}  baseUrl: <span className="str text-[#9ecbff]">"https://prompt-shield.onrender.com"</span>,{"\n"}  apiKey:  <span className="str text-[#9ecbff]">"ps_live_yourkey"</span>,{"\n"}{"\n"}  <span className="text-[#79b8ff]">async</span> chat(message) &#123;{"\n"}    <span className="text-[#79b8ff]">const</span> res = <span className="text-[#79b8ff]">await</span> fetch(&#96;$&#123;<span className="text-[#79b8ff]">this</span>.baseUrl&#125;/chat&#96;, &#123;{"\n"}      method: <span className="str text-[#9ecbff]">"POST"</span>,{"\n"}      headers: &#123;{"\n"}        <span className="str text-[#9ecbff]">"X-API-Key"</span>:    <span className="text-[#79b8ff]">this</span>.apiKey,{"\n"}        <span className="str text-[#9ecbff]">"Content-Type"</span>: <span className="str text-[#9ecbff]">"application/json"</span>,{"\n"}      &#125;,{"\n"}      body: JSON.stringify(&#123; message &#125;),{"\n"}    &#125;);{"\n"}    <span className="text-[#79b8ff]">return</span> res.json();{"\n"}  &#125;{"\n"}&#125;;{"\n"}{"\n"}<span className="text-(--muted)">// Usage</span>{"\n"}<span className="text-[#79b8ff]">const</span> result = <span className="text-[#79b8ff]">await</span> shield.chat(<span className="str text-[#9ecbff]">"Hello!"</span>);{"\n"}console.log(result.response);</code>
          </pre>
          <h2 className="text-[1.2rem] font-bold [border-top:1px_solid_var(--border)]" id="errors">Error Codes</h2>
          <table className="border-collapse text-[0.82rem] w-full">
            <tbody>
              <tr>
                <th className="text-(--muted) text-[0.7rem] font-normal tracking-[0.08em] text-left uppercase [border-bottom:1px_solid_var(--border)]">Code</th>
                <th className="text-(--muted) text-[0.7rem] font-normal tracking-[0.08em] text-left uppercase [border-bottom:1px_solid_var(--border)]">Meaning</th>
                <th className="text-(--muted) text-[0.7rem] font-normal tracking-[0.08em] text-left uppercase [border-bottom:1px_solid_var(--border)]">Fix</th>
              </tr>
              <tr>
                <td className="text-(--teal) [border-bottom:1px_solid_rgba(26,42,69,0.5)]">401</td>
                <td className="text-[#e2eaf7cc] [border-bottom:1px_solid_rgba(26,42,69,0.5)]">Missing API key</td>
                <td className="text-[#e2eaf7cc] [border-bottom:1px_solid_rgba(26,42,69,0.5)]">Add X-API-Key header</td>
              </tr>
              <tr>
                <td className="text-(--teal) [border-bottom:1px_solid_rgba(26,42,69,0.5)]">403</td>
                <td className="text-[#e2eaf7cc] [border-bottom:1px_solid_rgba(26,42,69,0.5)]">Invalid API key</td>
                <td className="text-[#e2eaf7cc] [border-bottom:1px_solid_rgba(26,42,69,0.5)]">Check your key value</td>
              </tr>
              <tr>
                <td className="text-(--teal) [border-bottom:1px_solid_rgba(26,42,69,0.5)]">429</td>
                <td className="text-[#e2eaf7cc] [border-bottom:1px_solid_rgba(26,42,69,0.5)]">Rate limit exceeded</td>
                <td className="text-[#e2eaf7cc] [border-bottom:1px_solid_rgba(26,42,69,0.5)]">Wait and retry — check Retry-After header</td>
              </tr>
              <tr>
                <td className="text-(--teal) [border-bottom:1px_solid_rgba(26,42,69,0.5)]">500</td>
                <td className="text-[#e2eaf7cc] [border-bottom:1px_solid_rgba(26,42,69,0.5)]">Server error</td>
                <td className="text-[#e2eaf7cc] [border-bottom:1px_solid_rgba(26,42,69,0.5)]">Check /health endpoint</td>
              </tr>
            </tbody>
          </table>
          <h2 className="text-[1.2rem] font-bold [border-top:1px_solid_var(--border)]" id="aggression-levels">Aggression Levels</h2>
          <table className="border-collapse text-[0.82rem] w-full">
            <tbody>
              <tr>
                <th className="text-(--muted) text-[0.7rem] font-normal tracking-[0.08em] text-left uppercase [border-bottom:1px_solid_var(--border)]">Level</th>
                <th className="text-(--muted) text-[0.7rem] font-normal tracking-[0.08em] text-left uppercase [border-bottom:1px_solid_var(--border)]">Behavior</th>
                <th className="text-(--muted) text-[0.7rem] font-normal tracking-[0.08em] text-left uppercase [border-bottom:1px_solid_var(--border)]">Use Case</th>
              </tr>
              <tr>
                <td className="text-(--teal) [border-bottom:1px_solid_rgba(26,42,69,0.5)]">permissive</td>
                <td className="text-[#e2eaf7cc] [border-bottom:1px_solid_rgba(26,42,69,0.5)]">Log only, rarely block</td>
                <td className="text-[#e2eaf7cc] [border-bottom:1px_solid_rgba(26,42,69,0.5)]">Low-risk apps, dev/testing</td>
              </tr>
              <tr>
                <td className="text-(--teal) [border-bottom:1px_solid_rgba(26,42,69,0.5)]">balanced</td>
                <td className="text-[#e2eaf7cc] [border-bottom:1px_solid_rgba(26,42,69,0.5)]">Block malicious only</td>
                <td className="text-[#e2eaf7cc] [border-bottom:1px_solid_rgba(26,42,69,0.5)]">Default — most apps</td>
              </tr>
              <tr>
                <td className="text-(--teal) [border-bottom:1px_solid_rgba(26,42,69,0.5)]">strict</td>
                <td className="text-[#e2eaf7cc] [border-bottom:1px_solid_rgba(26,42,69,0.5)]">Block malicious + suspicious</td>
                <td className="text-[#e2eaf7cc] [border-bottom:1px_solid_rgba(26,42,69,0.5)]">Sensitive data apps</td>
              </tr>
              <tr>
                <td className="text-(--teal) [border-bottom:1px_solid_rgba(26,42,69,0.5)]">paranoid</td>
                <td className="text-[#e2eaf7cc] [border-bottom:1px_solid_rgba(26,42,69,0.5)]">Block anything above low threshold</td>
                <td className="text-[#e2eaf7cc] [border-bottom:1px_solid_rgba(26,42,69,0.5)]">Maximum security</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

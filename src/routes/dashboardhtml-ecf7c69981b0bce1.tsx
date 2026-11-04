import { createFileRoute } from "@tanstack/react-router";
import capturedCSS from "../styles/pages/dashboardhtml-ecf7c69981b0bce1.css?raw";

export const Route = createFileRoute("/dashboardhtml-ecf7c69981b0bce1")({
  head: () => ({ meta: [{ title: "PromptShield — Dashboard" }] }),
  staticData: { importedDocument: { html: { "lang": "en" }, body: { "data-site-import-responsive-incomplete": "scroll" } } },
  component: Index,
});

function Index() {
  return (
    <>
      <style>{capturedCSS}</style>
      <header className="items-center bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#070b14d9] flex justify-between sticky top-0 z-10 [backdrop-filter:blur(10px)] [border-bottom:1px_solid_var(--border)]">
        <div className="items-center flex gap-3">
          <div className="items-center [background:linear-gradient(135deg,var(--teal),#0096ff)] rounded-[8px] flex text-[1.1rem] h-[36px] justify-center w-[36px]">🛡</div>
          <div className="text-[1.2rem] font-extrabold tracking-[-0.02em]">Prompt<span className="text-(--teal)">Shield</span></div>
        </div>
        <div className="items-center flex gap-4"><input className="api-input bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--surface) text-(--text) text-[0.75rem] outline-none w-[300px] [transition:border-color_0.2s]" id="apiKey" type="password" placeholder="Enter your X-API-Key..." /><button className={"btn bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--teal) border-current rounded-[8px] border-none text-black cursor-pointer font-[family-name:Syne,sans-serif] font-bold transition-opacity duration-200 [border-image:none] [border-width:medium] [&:hover]:opacity-85"}>Connect</button><button className={"btn bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-transparent rounded-[8px] text-(--teal) cursor-pointer font-[family-name:Syne,sans-serif] font-bold transition-opacity duration-200 [border:1px_solid_var(--teal)] [border-image:none] [&:hover]:opacity-85"}>Auto Refresh</button></div>
      </header>
      <main className="max-w-[1400px]">
        <div className="status-bar items-center text-(--muted) flex text-[0.8rem] gap-[0.6rem]">
          <div className="bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--muted) rounded-[50%] h-[8px] w-[8px] [transition:background_0.3s]" id="statusDot" />
          <span id="statusText">Enter your API key to connect</span>
        </div>
        <div className="error-msg bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-[#ff4d6d14] border border-solid border-[#ff4d6d33] rounded-[8px] text-(--red) hidden text-[0.8rem]" id="errorMsg" />
        <div className="text-(--muted) text-center hidden" id="loading">
          <p>Fetching data from PromptShield...</p>
        </div>
        <div className="stats-grid gap-4 grid-cols-[repeat(auto-fit,minmax(200px,1fr))]" style={{ display: "none" }} id="statsGrid">
          <div className={"stat-card overflow-hidden [&:hover]:[transform:translateY(-2px)]"}>
            <div className="stat-label text-(--muted) text-[0.72rem] tracking-widest uppercase">Total Requests</div>
            <div className="stat-value text-(--teal) text-[2.2rem] font-extrabold leading-none" id="totalReqs">—</div>
            <div className="text-(--muted) text-[0.75rem]">Since last deploy</div>
          </div>
          <div className={"stat-card overflow-hidden [&:hover]:[transform:translateY(-2px)]"}>
            <div className="stat-label text-(--muted) text-[0.72rem] tracking-widest uppercase">Allowed</div>
            <div className="stat-value text-(--teal) text-[2.2rem] font-extrabold leading-none" id="allowedReqs">—</div>
            <div className="text-(--muted) text-[0.75rem]">Passed all layers</div>
          </div>
          <div className={"stat-card overflow-hidden [&:hover]:[transform:translateY(-2px)]"}>
            <div className="stat-label text-(--muted) text-[0.72rem] tracking-widest uppercase">Blocked</div>
            <div className="stat-value text-(--red) text-[2.2rem] font-extrabold leading-none" id="blockedReqs">—</div>
            <div className="text-(--muted) text-[0.75rem]">Threats stopped</div>
          </div>
          <div className={"stat-card overflow-hidden [&:hover]:[transform:translateY(-2px)]"}>
            <div className="stat-label text-(--muted) text-[0.72rem] tracking-widest uppercase">Block Rate</div>
            <div className="stat-value text-(--yellow) text-[2.2rem] font-extrabold leading-none" id="blockRate">—</div>
            <div className="text-(--muted) text-[0.75rem]">Of all requests</div>
          </div>
          <div className={"stat-card overflow-hidden [&:hover]:[transform:translateY(-2px)]"}>
            <div className="stat-label text-(--muted) text-[0.72rem] tracking-widest uppercase">Avg Response</div>
            <div className="stat-value text-[2.2rem] font-extrabold leading-none" id="avgMs">—</div>
            <div className="text-(--muted) text-[0.75rem]">Milliseconds</div>
          </div>
          <div className={"stat-card overflow-hidden [&:hover]:[transform:translateY(-2px)]"}>
            <div className="stat-label text-(--muted) text-[0.72rem] tracking-widest uppercase">Threats Found</div>
            <div className="stat-value text-(--red) text-[2.2rem] font-extrabold leading-none" id="threatsFound">—</div>
            <div className="text-(--muted) text-[0.75rem]">Suspicious + malicious</div>
          </div>
        </div>
        <div className="threat-section bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--surface) rounded-[12px] [border:1px_solid_var(--border)] hidden" id="threatSection">
          <div className="section-title text-(--muted) text-[0.8rem] tracking-widest uppercase">Threat Breakdown</div>
          <div className="flex flex-col gap-3">
            <div className="items-center flex gap-4">
              <span className="threat-name text-(--teal) text-[0.8rem] w-[80px]">Safe</span>
              <div className="bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--border) rounded-[4px] flex-1 h-[8px] overflow-hidden">
                <div className="bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--teal) rounded-[4px] h-full [transition:width_0.8s_cubic-bezier(0.4,0,0.2,1)] w-[0%]" id="barSafe" />
              </div>
              <span className="threat-count text-(--muted) text-[0.8rem] text-right w-[40px]" id="countSafe">0</span>
            </div>
            <div className="items-center flex gap-4">
              <span className="threat-name text-(--yellow) text-[0.8rem] w-[80px]">Suspicious</span>
              <div className="bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--border) rounded-[4px] flex-1 h-[8px] overflow-hidden">
                <div className="bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--yellow) rounded-[4px] h-full [transition:width_0.8s_cubic-bezier(0.4,0,0.2,1)] w-[0%]" id="barSuspicious" />
              </div>
              <span className="threat-count text-(--muted) text-[0.8rem] text-right w-[40px]" id="countSuspicious">0</span>
            </div>
            <div className="items-center flex gap-4">
              <span className="threat-name text-(--red) text-[0.8rem] w-[80px]">Malicious</span>
              <div className="bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--border) rounded-[4px] flex-1 h-[8px] overflow-hidden">
                <div className="bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--red) rounded-[4px] h-full [transition:width_0.8s_cubic-bezier(0.4,0,0.2,1)] w-[0%]" id="barMalicious" />
              </div>
              <span className="threat-count text-(--muted) text-[0.8rem] text-right w-[40px]" id="countMalicious">0</span>
            </div>
          </div>
        </div>
        <div className="logs-section bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-(--surface) rounded-[12px] [border:1px_solid_var(--border)] hidden" id="logsSection">
          <div className="logs-header items-center flex justify-between">
            <div className="section-title text-(--muted) text-[0.8rem] tracking-widest uppercase" style={{ margin: "0px" }}>Recent Audit Trail</div>
            <button className={"btn bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-transparent rounded-[8px] text-(--teal) cursor-pointer font-[family-name:Syne,sans-serif] font-bold transition-opacity duration-200 [border:1px_solid_var(--teal)] [border-image:none] [&:hover]:opacity-85"} style={{ fontSize: "0.75rem", padding: "0.35rem 0.9rem" }}>↻ Refresh</button>
          </div>
          <table className="log-table border-collapse w-full">
            <thead>
              <tr>
                <th className="text-(--muted) text-[0.7rem] font-normal tracking-[0.08em] text-left uppercase [border-bottom:1px_solid_var(--border)]">Timestamp</th>
                <th className="text-(--muted) text-[0.7rem] font-normal tracking-[0.08em] text-left uppercase [border-bottom:1px_solid_var(--border)]">Session</th>
                <th className="text-(--muted) text-[0.7rem] font-normal tracking-[0.08em] text-left uppercase [border-bottom:1px_solid_var(--border)]">API Key</th>
                <th className="text-(--muted) text-[0.7rem] font-normal tracking-[0.08em] text-left uppercase [border-bottom:1px_solid_var(--border)]">Endpoint</th>
                <th className="text-(--muted) text-[0.7rem] font-normal tracking-[0.08em] text-left uppercase [border-bottom:1px_solid_var(--border)]">Threat</th>
                <th className="text-(--muted) text-[0.7rem] font-normal tracking-[0.08em] text-left uppercase [border-bottom:1px_solid_var(--border)]">Score</th>
                <th className="text-(--muted) text-[0.7rem] font-normal tracking-[0.08em] text-left uppercase [border-bottom:1px_solid_var(--border)]">Status</th>
                <th className="text-(--muted) text-[0.7rem] font-normal tracking-[0.08em] text-left uppercase [border-bottom:1px_solid_var(--border)]">Layer Blocked</th>
                <th className="text-(--muted) text-[0.7rem] font-normal tracking-[0.08em] text-left uppercase [border-bottom:1px_solid_var(--border)]">Ms</th>
              </tr>
            </thead>
            <tbody id="logsBody" />
          </table>
        </div>
      </main>
    </>
  );
}

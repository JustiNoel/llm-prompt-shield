# Observation ledger — prompt-shield.onrender.com (/)

## Source exploration (route /)
- Desktop 1280x1800: document scroll, docHeight 4691. No inner scroll containers.
- Phone 390x844: document scroll, docHeight 6755.
- Nav: fixed, no class change on scroll (top == after scroll). No hamburger — nav-links simply cramp on phone (faithful to source).
- Sections: hero, #layers, #usecases, #pricing, cta-section, footer. All present.
- No video/canvas/media on the page; no popups, dropdowns, or carousels.
- Nav links: #layers, #usecases, #pricing, docs.html, dashboard.html, Try the API → https://prompt-shield.onrender.com/docs
- Footer links: GitHub (github.com/JustiNoel/LLM-Prompt-Injection), docs.html, dashboard.html, API → https://prompt-shield.onrender.com/docs
- Hero CTA: "View Live API" → https://prompt-shield.onrender.com/docs; "GitHub →" → github.com/JustiNoel/LLM-Prompt-Injection
- Pricing CTAs: "Get Started" → /docs; "Contact Us"/"Talk to Us" → mailto:justinoel254@gmail.com
- Screenshots: /tmp/browser/promptshield/screenshots/src_{desktop,phone}_{top,bottom,backtop}.png

## Preview verification (localhost:8080/)
- Sections all present and visible at desktop and phone; docHeight desktop 4691 == source 4691; phone 6607 vs source 6755 (close).
- Anchor nav: click "How it Works" scrolls to #layers (scrollY 1841 desktop, 1156 phone). Pass.
- Bottom: footer fully visible at wheel-scroll bottom on both layouts. Pass.
- Console errors: none.
- Fixed after repair batch 1: hero code block newlines were collapsed by JSX into one truncated line; re-added explicit {"\n"} between lines. Verified: pre code innerText renders 8 lines with syntax colors, matches source. Pass.
- Screenshots: /tmp/browser/promptshield/screenshots/prev_{desktop,phone}_{top,bottom}.png, fixed_code_desktop.png

## Unimported pages (links kept on preview origin, pages not imported)
- /docshtml-53d5ff2ab416f88c (source docs.html) — nav "Docs", footer "Docs", "Read the Docs" CTA
- /dashboardhtml-ecf7c69981b0bce1 (source dashboard.html) — nav "Dashboard", footer "Dashboard"
- /docs (API docs, opens in new tab on source) — "Try the API", "View Live API", footer "API"

## Status
- All 5 main sections visible with media at both layouts: pass.
- Primary controls (nav anchors, CTAs, footer links): pass (destinations preserved; unimported pages listed above).
- Build: OK. No static fallbacks. No motion gaps (page has none).

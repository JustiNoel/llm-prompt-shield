# Make PromptShield’s public scanner credible

## Goal
Make the public demo useful to security teams by aligning its input checks with the repository’s Python middleware, adding the original strength presets, and clearly distinguishing implemented checks from layers that need an LLM gateway.

## Work
- Port the original Layer 1 classification and Layer 2 sanitization behavior into the shared TypeScript scanner, with explicit Permissive, Balanced, Strict, and Paranoid policies.
- Show the selected policy, actual scan timing, findings, sanitization changes, and the status of Layers 3–4 in the playground; support the same options and response contract in the public scan API.
- Remove unsupported claims about vector search, request forwarding, rate limiting, live analytics, API-key management, and measured latency from the company-facing pages; mark dashboard sample data as unavailable/demo.
- Update integration examples to explain allow/review/block handling and that scan-only calls do not forward prompts to an LLM.
- Add tests for the four presets, classification, sanitization, and API input limits/response behavior where existing test patterns support it.

## Technical details
- Keep scanning pure and shared in `src/lib/shield.ts`; preserve the Python source as the reference rather than claiming its Layers 3–4 are already active online.
- No credentials, persistent user data, or live LLM provider calls will be introduced in this pass.

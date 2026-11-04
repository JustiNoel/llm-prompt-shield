<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Architecture
- Prompt scanning logic lives in `src/lib/shield.ts` as a pure function (tier 1 patterns, tier 2 semantic) so UI and tests share one engine; a real backend gateway should replace it behind the same result shape.
- Pages are native React routes using semantic tokens from `src/styles.css`; no imported/captured HTML or raw CSS.

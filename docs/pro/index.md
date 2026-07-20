---
title: PGSync Pro
hide:
  - toc
---

<div class="pgpro-hero" markdown>
<div class="pgpro-hero__text" markdown>

# PGSync Pro

Real-time **semantic & hybrid search** for PostgreSQL — that only re-embeds
when *meaning* changes.

[:material-tag: See pricing](../pricing/index.md){ .md-button .md-button--primary }
[:material-play-circle: See how it works](../how-it-works/index.md){ .md-button }

Your database stays the source of truth — PGSync Pro keeps a fresh vector index
in lock-step, and only pays to embed when *meaning* actually changes. Built on
PGSync, which syncs **PostgreSQL, MySQL and MariaDB** to Elasticsearch /
OpenSearch.

</div>
<div class="pgpro-flow">
<svg viewBox="0 0 780 620" role="img" aria-labelledby="flow-t flow-d" preserveAspectRatio="xMidYMid meet">
  <title id="flow-t">PGSync Pro data flow</title>
  <desc id="flow-d">PostgreSQL streams changes through PGSync and PGSync Pro into Elasticsearch, in real time.</desc>
  <defs>
    <radialGradient id="pg-halo" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#0e9bb8" stop-opacity="0.30"/>
      <stop offset="70%" stop-color="#0c1120" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="pg-card" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#18223c"/>
      <stop offset="100%" stop-color="#0f1626"/>
    </linearGradient>
    <linearGradient id="g1" gradientUnits="userSpaceOnUse" x1="390" y1="135" x2="565" y2="310">
      <stop offset="0%" stop-color="#5b93c9"/><stop offset="100%" stop-color="#8593ff"/>
    </linearGradient>
    <linearGradient id="g2" gradientUnits="userSpaceOnUse" x1="565" y1="310" x2="390" y2="485">
      <stop offset="0%" stop-color="#8593ff"/><stop offset="100%" stop-color="#22d3ee"/>
    </linearGradient>
    <linearGradient id="g3" gradientUnits="userSpaceOnUse" x1="390" y1="485" x2="215" y2="310">
      <stop offset="0%" stop-color="#22d3ee"/><stop offset="100%" stop-color="#2fd3b5"/>
    </linearGradient>
    <filter id="pg-soft" x="-80%" y="-80%" width="260%" height="260%">
      <feGaussianBlur stdDeviation="11"/>
    </filter>
  </defs>

  <rect x="0" y="0" width="780" height="620" rx="22" fill="#0c1120"/>
  <rect x="0" y="0" width="780" height="620" rx="22" fill="url(#pg-halo)"/>

  <!-- base ring -->
  <circle cx="390" cy="310" r="175" fill="none" stroke="#25314c" stroke-width="1.5" stroke-opacity="0.7"/>

  <!-- glow behind PGSync Pro (bottom) -->
  <circle cx="390" cy="485" r="66" fill="#22d3ee" opacity="0.16" filter="url(#pg-soft)"/>

  <!-- flow arcs: streaming dashes -->
  <g fill="none" stroke-width="2.6" stroke-linecap="round">
    <path d="M390 135 A175 175 0 0 1 565 310" stroke="url(#g1)" stroke-dasharray="5 8"><animate attributeName="stroke-dashoffset" values="26;0" dur="1.1s" repeatCount="indefinite"/></path>
    <path d="M565 310 A175 175 0 0 1 390 485" stroke="url(#g2)" stroke-dasharray="5 8"><animate attributeName="stroke-dashoffset" values="26;0" dur="1.1s" repeatCount="indefinite"/></path>
    <path d="M390 485 A175 175 0 0 1 215 310" stroke="url(#g3)" stroke-dasharray="5 8"><animate attributeName="stroke-dashoffset" values="26;0" dur="1.1s" repeatCount="indefinite"/></path>
  </g>
  <!-- traveling pulses -->
  <g fill="#e8fbff">
    <circle r="3.2"><animateMotion dur="2.4s" repeatCount="indefinite" path="M390 135 A175 175 0 0 1 565 310"/></circle>
    <circle r="3.2"><animateMotion dur="2.4s" begin="0.5s" repeatCount="indefinite" path="M565 310 A175 175 0 0 1 390 485"/></circle>
    <circle r="3.2"><animateMotion dur="2.4s" begin="1.0s" repeatCount="indefinite" path="M390 485 A175 175 0 0 1 215 310"/></circle>
  </g>

  <!-- centre caption -->
  <g text-anchor="middle" font-family="'Roboto Mono', monospace">
    <text x="390" y="304" fill="#7f8aa6" font-size="12" letter-spacing="3">REAL-TIME</text>
    <text x="390" y="324" fill="#5c6580" font-size="11">in lock-step</text>
  </g>

  <g font-family="'Roboto', system-ui, sans-serif">
    <!-- PostgreSQL (top) -->
    <circle cx="390" cy="135" r="48" fill="url(#pg-card)" stroke="#5b93c9" stroke-opacity="0.5"/>
    <g transform="translate(366,111) scale(2)"><path fill="#7fb2e0" d="M23.56 14.723a.5.5 0 0 0-.057-.12q-.21-.395-1.007-.231c-1.654.34-2.294.13-2.526-.02 1.342-2.048 2.445-4.522 3.041-6.83.272-1.05.798-3.523.122-4.73a1.6 1.6 0 0 0-.15-.236C21.693.91 19.8.025 17.51.001c-1.495-.016-2.77.346-3.116.479a10 10 0 0 0-.516-.082 8 8 0 0 0-1.312-.127c-1.182-.019-2.203.264-3.05.84C8.66.79 4.729-.534 2.296 1.19.935 2.153.309 3.873.43 6.304c.041.818.507 3.334 1.243 5.744q.69 2.26 1.433 3.582.83 1.493 1.714 1.79c.448.148 1.133.143 1.858-.729a56 56 0 0 1 1.945-2.206c.435.235.906.362 1.39.377v.004a11 11 0 0 0-.247.305c-.339.43-.41.52-1.5.745-.31.064-1.134.233-1.146.811a.6.6 0 0 0 .091.327c.227.423.922.61 1.015.633 1.335.333 2.505.092 3.372-.679-.017 2.231.077 4.418.345 5.088.221.553.762 1.904 2.47 1.904q.375.001.829-.094c1.782-.382 2.556-1.17 2.855-2.906.15-.87.402-2.875.539-4.101.017-.07.036-.12.057-.136 0 0 .07-.048.427.03l.044.007.254.022.015.001c.847.039 1.911-.142 2.531-.43.644-.3 1.806-1.033 1.595-1.67M2.37 11.876c-.744-2.435-1.178-4.885-1.212-5.571-.109-2.172.417-3.683 1.562-4.493 1.837-1.299 4.84-.54 6.108-.13l-.01.01C6.795 3.734 6.843 7.226 6.85 7.44c0 .082.006.199.016.36.034.586.1 1.68-.074 2.918-.16 1.15.194 2.276.973 3.089q.12.126.252.237c-.347.371-1.1 1.193-1.903 2.158-.568.682-.96.551-1.088.508-.392-.13-.813-.587-1.239-1.322-.48-.839-.963-2.032-1.415-3.512m6.007 5.088a1.6 1.6 0 0 1-.432-.178c.089-.039.237-.09.483-.14 1.284-.265 1.482-.451 1.915-1 .099-.127.211-.27.367-.443a.4.4 0 0 0 .074-.13c.17-.151.272-.11.436-.042.156.065.308.26.37.475.03.102.062.295-.045.445-.904 1.266-2.222 1.25-3.168 1.013m2.094-3.988-.052.14c-.133.357-.257.689-.334 1.004-.667-.002-1.317-.288-1.81-.803-.628-.655-.913-1.566-.783-2.5.183-1.308.116-2.447.08-3.059l-.013-.22c.296-.262 1.666-.996 2.643-.772.446.102.718.406.83.928.585 2.704.078 3.83-.33 4.736a9 9 0 0 0-.23.546m7.364 4.572q-.024.266-.062.596l-.146.438a.4.4 0 0 0-.018.108c-.006.475-.054.649-.115.87-.064.229-.135.488-.18 1.057-.11 1.414-.878 2.227-2.417 2.556-1.515.325-1.784-.496-2.02-1.221a7 7 0 0 0-.078-.227c-.215-.586-.19-1.412-.157-2.555.016-.561-.025-1.901-.33-2.646q.006-.44.019-.892a.4.4 0 0 0-.016-.113 2 2 0 0 0-.044-.208c-.122-.428-.42-.786-.78-.935-.142-.059-.403-.167-.717-.087.067-.276.183-.587.309-.925l.053-.142c.06-.16.134-.325.213-.5.426-.948 1.01-2.246.376-5.178-.237-1.098-1.03-1.634-2.232-1.51-.72.075-1.38.366-1.709.532a6 6 0 0 0-.196.104c.092-1.106.439-3.174 1.736-4.482a4 4 0 0 1 .303-.276.35.35 0 0 0 .145-.064c.752-.57 1.695-.85 2.802-.833q.616.01 1.174.081c1.94.355 3.244 1.447 4.036 2.383.814.962 1.255 1.931 1.431 2.454-1.323-.134-2.223.127-2.68.78-.992 1.418.544 4.172 1.282 5.496.135.242.252.452.289.54.24.583.551.972.778 1.256.07.087.138.171.189.245-.4.116-1.12.383-1.055 1.717-.013.156-.043.447-.084.815-.046.208-.07.46-.1.766m.89-1.621c-.04-.832.27-.919.597-1.01l.135-.041a1 1 0 0 0 .134.103c.57.376 1.583.421 3.007.134-.202.177-.519.4-.953.601-.41.19-1.096.333-1.747.364-.72.034-1.086-.08-1.173-.151m.57-9.271c-.006.35-.054.669-.105 1.001-.055.358-.112.728-.127 1.177-.014.436.04.89.093 1.33.107.887.216 1.8-.207 2.701a4 4 0 0 1-.188-.385 8 8 0 0 0-.325-.617c-.616-1.104-2.057-3.69-1.32-4.744.38-.543 1.342-.566 2.179-.463m.228 7.013-.085-.107-.035-.044c.726-1.2.584-2.387.457-3.439-.052-.432-.1-.84-.088-1.222.013-.407.066-.755.118-1.092.064-.415.13-.844.111-1.35a.6.6 0 0 0 .012-.19c-.046-.486-.6-1.938-1.73-3.253a7.8 7.8 0 0 0-2.688-2.04A9.3 9.3 0 0 1 17.62.746c2.052.046 3.675.814 4.824 2.283a1 1 0 0 1 .067.1c.723 1.356-.276 6.275-2.987 10.54m-8.816-6.116c-.025.18-.31.423-.621.423a1 1 0 0 1-.081-.006.8.8 0 0 1-.506-.315c-.046-.06-.12-.178-.106-.285a.22.22 0 0 1 .093-.149c.118-.089.352-.122.61-.086.316.044.642.193.61.418m7.93-.411c.011.08-.049.2-.153.31a.72.72 0 0 1-.408.223 1 1 0 0 1-.075.005c-.293 0-.541-.234-.56-.371-.024-.177.264-.31.56-.352.298-.042.612.009.636.185"/></g>
    <text x="390" y="52" text-anchor="middle" fill="#eef2fb" font-size="17" font-weight="700">PostgreSQL</text>
    <text x="390" y="70" text-anchor="middle" fill="#8a95af" font-size="11.5">your source of truth</text>

    <!-- PGSync (right) -->
    <circle cx="565" cy="310" r="48" fill="url(#pg-card)" stroke="#8593ff" stroke-opacity="0.5"/>
    <g stroke="#aeb8ff" stroke-width="2.2" fill="#aeb8ff" stroke-linecap="round">
      <line x1="552" y1="304" x2="574" y2="304"/>
      <path d="M574 299 L580 304 L574 309 Z" stroke="none"/>
      <line x1="578" y1="316" x2="556" y2="316"/>
      <path d="M556 311 L550 316 L556 321 Z" stroke="none"/>
    </g>
    <text x="625" y="306" text-anchor="start" fill="#eef2fb" font-size="17" font-weight="700">PGSync</text>
    <text x="625" y="324" text-anchor="start" fill="#8a95af" font-size="11.5">change data capture</text>

    <!-- Elasticsearch (left) -->
    <circle cx="215" cy="310" r="48" fill="url(#pg-card)" stroke="#2fd3b5" stroke-opacity="0.5"/>
    <g transform="translate(191,286) scale(2)"><path fill="#4fddc0" d="M13.394 0C8.683 0 4.609 2.716 2.644 6.667h15.641a4.77 4.77 0 0 0 3.073-1.11c.446-.375.864-.785 1.247-1.243l.001-.002A11.97 11.97 0 0 0 13.394 0M1.804 8.889a12 12 0 0 0 0 6.222h14.7a3.111 3.111 0 1 0 0-6.222zm.84 8.444C4.61 21.283 8.684 24 13.395 24c3.701 0 7.011-1.677 9.212-4.312l-.001-.002a10 10 0 0 0-1.247-1.243 4.77 4.77 0 0 0-3.073-1.11z"/></g>
    <text x="155" y="306" text-anchor="end" fill="#eef2fb" font-size="17" font-weight="700">Elasticsearch</text>
    <text x="155" y="324" text-anchor="end" fill="#8a95af" font-size="11.5">search by meaning</text>

    <!-- PGSync Pro (bottom, hero) -->
    <circle cx="390" cy="485" r="50" fill="url(#pg-card)" stroke="#22d3ee" stroke-opacity="0.9" stroke-width="1.6"/>
    <path d="M390 470 C391.6 481 393.6 483 404.5 485 C393.6 487 391.6 489 390 500 C388.4 489 386.4 487 375.5 485 C386.4 483 388.4 481 390 470 Z" fill="#5ee7f5"/>
    <text x="390" y="560" text-anchor="middle" fill="#ffffff" font-size="18" font-weight="700">PGSync Pro</text>
    <text x="390" y="578" text-anchor="middle" fill="#7fd7e6" font-size="11.5">embeddings · change-guard</text>
  </g>
</svg>
</div>
</div>

---

## What you get

<div class="grid cards" markdown>

-   :material-clock-fast:{ .lg .middle } **Always fresh**

    ---

    Vectors stay in sync with your database via CDC. No nightly reindex jobs, no
    stale search results.

-   :material-shield-key:{ .lg .middle } **The change-guard**

    ---

    Re-embed only when the embedded text changes. Unrelated column updates are
    free — the moat, and your bill.

-   :material-vector-combine:{ .lg .middle } **Semantic + hybrid**

    ---

    Vector kNN fused with keyword BM25 (reciprocal rank fusion) — the best of
    meaning and exact match.

-   :material-server-security:{ .lg .middle } **Runs in your infra**

    ---

    Local `sentence-transformers` embeddings mean text never leaves your
    environment. OpenAI / Cohere / Voyage optional.

-   :material-robot-happy:{ .lg .middle } **Agent-ready (MCP)**

    ---

    An MCP server exposes search to Claude Desktop, Claude Code, or your own
    agent — retrieval over live data.

-   :material-check-decagram:{ .lg .middle } **Preflight checks**

    ---

    `pgsync-pro validate` verifies your schema and connections before indexing —
    catching mistakes with actionable errors.

</div>

PGSync and django-pgsync stay free and MIT forever. Pro adds the semantic layer
on top — the same `schema.json` and CLI, plus an `embedding` block.

---

<div align="center" markdown>

**Next:** see the whole pipeline animated, then the plans.

[:material-play-circle: How it works](../how-it-works/index.md){ .md-button .md-button--primary }
[:material-tag: See pricing](../pricing/index.md){ .md-button }

</div>

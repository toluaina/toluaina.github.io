---
title: Pricing
---

<div align="center" markdown>

# Pricing

Simple, per-organization pricing. Start free, upgrade when you need search that
understands *meaning*. No per-seat counting.

</div>

---

<div class="grid cards" markdown>

-   ### Community

    ---

    **Free** · MIT

    The sync engine. Real-time PostgreSQL / MySQL / MariaDB →
    Elasticsearch / OpenSearch, forever.

    - Change data capture
    - Denormalized documents
    - Django integration
    - Community support

    [:material-github: Get it on GitHub](https://github.com/toluaina/pgsync){ .md-button }

-   ### Pro

    ---

    **$49 / month** · billed annually, per organization
    <br><small>or **$59 / month**, billed monthly — cancel anytime</small>

    Everything semantic, self-serve. Install from a private index the moment you
    subscribe.

    - Semantic + hybrid search
    - The change-guard economics
    - Every embedding provider
    - MCP agent server
    - Email support & all updates

    [:material-rocket-launch: Get PGSync Pro](mailto:tolu@pgsync.com?subject=PGSync%20Pro){ .md-button .md-button--primary }

</div>

<small>:material-star-four-points: **Founding price** — the first teams lock
**$49/mo for life**. Launch pricing; the list price rises as we add features.</small>

<small>Need an SLA, air-gapped install, or procurement review?
[Talk to us about a custom plan](mailto:tolu@pgsync.com?subject=PGSync%20Pro%20custom%20plan).</small>

??? note "Compare all features"

    | | Community | Pro |
    |---|:--:|:--:|
    | Real-time change-data-capture sync | ✓ | ✓ |
    | Postgres / MySQL / MariaDB → Elasticsearch / OpenSearch | ✓ | ✓ |
    | Denormalized nested documents | ✓ | ✓ |
    | Django integration | ✓ | ✓ |
    | **Semantic (vector) search** | — | ✓ |
    | **Hybrid search** (kNN + BM25) | — | ✓ |
    | **Change-guard** — re-embed only when meaning changes | — | ✓ |
    | On-device embeddings (local / FastEmbed) | — | ✓ |
    | Hosted embeddings (OpenAI / Cohere / Voyage) | — | ✓ |
    | MCP server for AI agents | — | ✓ |
    | Zero-downtime model reindex | — | ✓ |
    | Search dashboard & reference demo | — | ✓ |
    | Product updates & new features | — | ✓ |
    | Support | Community | Email · business-day |

---

## How buying works

:material-numeric-1-circle:{ .lg .middle } **Subscribe** — check out in a minute.
Per-organization subscription, monthly or annual — no per-seat counting.

:material-numeric-2-circle:{ .lg .middle } **Get your token** — we issue a private
package-index credential to your inbox automatically.

:material-numeric-3-circle:{ .lg .middle } **Install** —

```bash
pip install pgsync-pro       # from your private index
pgsync-pro validate --config schema.json
pgsync-pro bootstrap --config schema.json
```

It's the same `schema.json` and CLI you already know from PGSync — Pro just adds
an `embedding` block.

<div align="center" markdown>

---

**Questions about licensing, cancelling, or your data?**

[:material-frequently-asked-questions: Read the FAQ](../pro/faq.md){ .md-button .md-button--primary }
[:material-email: Talk to us](mailto:tolu@pgsync.com?subject=PGSync%20Pro){ .md-button }

</div>

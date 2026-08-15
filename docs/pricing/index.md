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

    **$29 / month** · billed annually, per organization
    <br><small>or **$39 / month**, billed monthly, cancel anytime</small>
    <br><small>:material-tag: Launch pricing, rises as we add features</small>

    Everything semantic, self-serve. Install from a private index the moment you
    subscribe.

    - Semantic + hybrid search
    - The change-guard economics
    - Every embedding provider
    - MCP agent server
    - Email support & all updates

    [:material-rocket-launch: Get PGSync Pro](https://buy.polar.sh/polar_cl_OaZCuL1ePBerK2Y8hfHPZMPhOZEayiCJ7BeZU129pqk){ .md-button .md-button--primary }

</div>

??? note "Compare all features"

    | | Community | Pro |
    |---|:--:|:--:|
    | Real-time change-data-capture sync | ✓ | ✓ |
    | Postgres / MySQL / MariaDB → Elasticsearch / OpenSearch | ✓ | ✓ |
    | Denormalized nested documents | ✓ | ✓ |
    | Django integration | ✓ | ✓ |
    | **Semantic (vector) search** |  | ✓ |
    | **Hybrid search** (kNN + BM25) |  | ✓ |
    | **Change-guard**, re-embed only when meaning changes |  | ✓ |
    | On-device embeddings (local / FastEmbed) |  | ✓ |
    | Hosted embeddings (OpenAI / Cohere / Voyage) |  | ✓ |
    | MCP server for AI agents |  | ✓ |
    | Zero-downtime model reindex |  | ✓ |
    | Search dashboard & reference demo |  | ✓ |
    | Product updates & new features |  | ✓ |
    | Support | Community | Email · business-day |

---

## How buying works

:material-numeric-1-circle:{ .lg .middle } **Subscribe**, check out in a minute.
Per-organization subscription, monthly or annual, no per-seat counting.

:material-numeric-2-circle:{ .lg .middle } **Get your token**, we issue a private
package-index credential to your inbox automatically.

:material-numeric-3-circle:{ .lg .middle } **Install**:

```bash
pip install pgsync-pro       # from your private index
pgsync-pro validate --config schema.json
pgsync-pro bootstrap --config schema.json
```

It's the same `schema.json` and CLI you already know from PGSync, Pro just adds
an `embedding` block.

<div align="center" markdown>

---

**Questions about licensing, cancelling, or your data?**

[:material-frequently-asked-questions: Read the FAQ](../pro/faq.md){ .md-button .md-button--primary }
[:material-email: Talk to us](#){ .md-button .eml data-u="tolu" data-d="pgsync.com" data-s="PGSync Pro" }

</div>

---

<div align="center" markdown>

## PGSync ClickHouse

Real-time **PostgreSQL → ClickHouse** sync. Mirror a table for free; pay only for
denormalized wide tables. [Learn more](../clickhouse/index.md).

</div>

<div class="grid cards" markdown>

-   ### Mirror

    ---

    **Free**

    One PostgreSQL table → one ClickHouse `ReplacingMergeTree` table, in real time.

    - Versioned upserts + tombstone deletes
    - Full native type mapping + `<table>_live` view
    - Exactly-once on replay

    [:material-book-open-variant: Get started](../clickhouse/index.md){ .md-button }

-   ### Denormalized

    ---

    **$19 / month** · billed annually, per organization
    <br><small>or **$24 / month**, billed monthly, cancel anytime</small>
    <br><small>:material-tag: Launch pricing, rises as we add features</small>

    A whole relational tree → one wide ClickHouse table.

    - One-to-one children flattened into typed columns
    - One-to-many as native `Array(Tuple(...))`
    - Recursive grandchild folding + per-table engine control
    - Email support & all updates

    [:material-rocket-launch: Get PGSync ClickHouse](https://buy.polar.sh/polar_cl_6gXbcYmmlC4IKUCYNHgCT01R6KFS5cWdmMW7w2F5UWk){ .md-button .md-button--primary }

</div>

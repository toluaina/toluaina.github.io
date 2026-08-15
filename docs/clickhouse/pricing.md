---
title: PGSync ClickHouse, pricing
---

<div align="center" markdown>

# PGSync ClickHouse pricing

Real-time **PostgreSQL → ClickHouse** sync. Mirror a table for free; pay only for
denormalized wide tables. Per-organization pricing, no per-seat counting.
[Learn more](index.md).

</div>

---

<div class="grid cards" markdown>

-   ### Mirror

    ---

    **Free**

    One PostgreSQL table → one ClickHouse `ReplacingMergeTree` table, in real time.

    - Versioned upserts + tombstone deletes
    - Full native type mapping + `<table>_live` view
    - Exactly-once on replay

    [:material-book-open-variant: Get started](index.md){ .md-button }

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

---

## How buying works

:material-numeric-1-circle:{ .lg .middle } **Subscribe**, check out in a minute.
Per-organization subscription, monthly or annual, no per-seat counting.

:material-numeric-2-circle:{ .lg .middle } **Get your token**, we issue a private
package-index credential to your inbox automatically.

:material-numeric-3-circle:{ .lg .middle } **Install**:

```bash
pip install pgsync-clickhouse-pro --extra-index-url <your private index URL>
pgsync-clickhouse validate  --config schema.json
pgsync-clickhouse bootstrap --config schema.json
```

The pro package registers itself with the `pgsync-clickhouse` CLI, so pointing
your `schema.json` at a multi-table tree turns on denormalized mode. Same CLI,
same schema, no code changes.

<div align="center" markdown>

---

**Questions about licensing, cancelling, or your data?**

[:material-frequently-asked-questions: Read the FAQ](faq.md){ .md-button .md-button--primary }
[:material-email: Talk to us](#){ .md-button .eml data-u="tolu" data-d="pgsync.com" data-s="PGSync ClickHouse" }

Looking for semantic and hybrid search? See
[PGSync Pro pricing](../pro/pricing.md).

</div>

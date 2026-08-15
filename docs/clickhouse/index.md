---
title: PGSync ClickHouse
hide:
  - toc
---

<div class="pgch-hero" markdown>
<div class="pgch-hero__text" markdown>

# PGSync ClickHouse

Real-time **PostgreSQL → ClickHouse** that keeps an analytics store in lock-step
with your database, with **no ETL**.

<div class="hero-actions hero-actions--fill" markdown>
[:material-tag: Pricing](../pricing/index.md){ .md-button .md-button--primary }
[:material-rocket-launch: Get started](#get-started){ .md-button }
[:material-database-arrow-right: Query examples](#query-clickhouse){ .md-button }
</div>

Your database stays the source of truth. Every insert, update and delete streams
into ClickHouse in real time off the Postgres write-ahead log, landing on
`ReplacingMergeTree` so the latest row always wins and deletes tombstone cleanly.
Built on [PGSync](../index.md); the same `schema.json` and CLI.

</div>
<div class="pgch-flow">
<svg viewBox="0 0 620 578" role="img" aria-labelledby="chf-t chf-d" preserveAspectRatio="xMidYMid meet">
  <title id="chf-t">PGSync ClickHouse data flow</title>
  <desc id="chf-d">PostgreSQL streams changes through PGSync ClickHouse into ClickHouse in real time.</desc>
  <defs>
    <linearGradient id="ch-card" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#18223c"/>
      <stop offset="100%" stop-color="#0f1626"/>
    </linearGradient>
    <linearGradient id="ch-wire1" gradientUnits="userSpaceOnUse" x1="310" y1="150" x2="310" y2="256">
      <stop offset="0%" stop-color="#5b93c9"/><stop offset="100%" stop-color="#22d3ee"/>
    </linearGradient>
    <linearGradient id="ch-wire2" gradientUnits="userSpaceOnUse" x1="310" y1="360" x2="310" y2="466">
      <stop offset="0%" stop-color="#22d3ee"/><stop offset="100%" stop-color="#ffcf34"/>
    </linearGradient>
    <filter id="ch-soft" x="-60%" y="-60%" width="220%" height="220%">
      <feGaussianBlur stdDeviation="9"/>
    </filter>
  </defs>

  <rect x="0" y="0" width="620" height="578" rx="22" fill="#0b1120"/>

  <!-- connectors with directional arrowheads: Postgres -> PGSync -> ClickHouse -->
  <line x1="310" y1="150" x2="310" y2="246" stroke="url(#ch-wire1)" stroke-width="4" stroke-linecap="round" stroke-dasharray="10 12">
    <animate attributeName="stroke-dashoffset" values="44;0" dur="1.4s" repeatCount="indefinite"/>
  </line>
  <path d="M300,242 L320,242 L310,256 Z" fill="#22d3ee"/>
  <text x="332" y="206" fill="#8296bb" font-family="Roboto Mono, monospace" font-size="12">WAL changes</text>

  <line x1="310" y1="360" x2="310" y2="456" stroke="url(#ch-wire2)" stroke-width="4" stroke-linecap="round" stroke-dasharray="10 12">
    <animate attributeName="stroke-dashoffset" values="44;0" dur="1.4s" repeatCount="indefinite"/>
  </line>
  <path d="M300,452 L320,452 L310,466 Z" fill="#ffcf34"/>
  <text x="332" y="416" fill="#8296bb" font-family="Roboto Mono, monospace" font-size="12">upserts · tombstones</text>

  <!-- PostgreSQL -->
  <g>
    <rect x="150" y="54" width="320" height="96" rx="16" fill="#2f6fb0" opacity="0.18" filter="url(#ch-soft)"/>
    <rect x="150" y="54" width="320" height="96" rx="16" fill="url(#ch-card)" stroke="#2f6fb0" stroke-opacity="0.55"/>
    <rect x="150" y="54" width="6" height="96" rx="3" fill="#4f8fd0"/>
    <text x="182" y="94" fill="#e8eefc" font-family="Roboto, sans-serif" font-size="22" font-weight="700">PostgreSQL</text>
    <text x="182" y="122" fill="#9fb2d4" font-family="Roboto Mono, monospace" font-size="13">source of truth · WAL</text>
  </g>

  <!-- PGSync ClickHouse -->
  <g>
    <rect x="150" y="256" width="320" height="104" rx="16" fill="#22d3ee" opacity="0.16" filter="url(#ch-soft)"/>
    <rect x="150" y="256" width="320" height="104" rx="16" fill="url(#ch-card)" stroke="#22d3ee" stroke-opacity="0.55"/>
    <rect x="150" y="256" width="6" height="104" rx="3" fill="#22d3ee"/>
    <text x="182" y="296" fill="#e8eefc" font-family="Roboto, sans-serif" font-size="21" font-weight="700">PGSync ClickHouse</text>
    <text x="182" y="322" fill="#9fb2d4" font-family="Roboto Mono, monospace" font-size="13">real-time CDC · exactly-once</text>
    <text x="182" y="342" fill="#7f93b8" font-family="Roboto Mono, monospace" font-size="12">mirror · denormalize</text>
  </g>

  <!-- ClickHouse -->
  <g>
    <rect x="150" y="466" width="320" height="96" rx="16" fill="#ffcf34" opacity="0.20" filter="url(#ch-soft)"/>
    <rect x="150" y="466" width="320" height="96" rx="16" fill="url(#ch-card)" stroke="#ffcf34" stroke-opacity="0.65"/>
    <rect x="150" y="466" width="6" height="96" rx="3" fill="#ffcf34"/>
    <text x="182" y="506" fill="#fff2c4" font-family="Roboto, sans-serif" font-size="22" font-weight="700">ClickHouse</text>
    <text x="182" y="534" fill="#c9b783" font-family="Roboto Mono, monospace" font-size="13">ReplacingMergeTree · &lt;table&gt;_live</text>
  </g>
</svg>
</div>
</div>

---

!!! example "Query live Postgres data with ClickHouse SQL"

    No ETL job, no nightly batch. A change committed in Postgres shows up in
    ClickHouse in real time, on a `ReplacingMergeTree` where the newest row wins
    and deletes disappear. Read the clean, deduplicated state straight from a
    companion `<table>_live` view:

    ```sql
    SELECT count() FROM book_live;
    ```

## Two modes

<div class="grid cards" markdown>

-   ### :material-table: Mirror (free)

    ---

    One PostgreSQL table → one ClickHouse table, in real time.

    - Versioned upserts + tombstone deletes on `ReplacingMergeTree`
    - Full native type mapping (Decimal, `DateTime64` UTC, arrays, …)
    - A companion `<table>_live` view: clean, deduplicated, no `FINAL` gymnastics
    - Exactly-once on replay (keyed on the source WAL LSN)

-   ### :material-table-merge-cells: Denormalized (paid)

    ---

    A whole relational tree → one wide ClickHouse table.

    - One-to-one children **flattened** into typed columns
    - One-to-many children as native **`Array(Tuple(...))`** (query with `ARRAY JOIN`)
    - Grandchildren fold recursively; a child change re-emits the parent
    - Per-table engine control (`PARTITION BY` / `ORDER BY` / TTL / settings)

</div>

## What you get

<div class="grid cards" markdown>

-   :material-sync:{ .lg .middle } **Real-time, no ETL**

    ---

    Changes stream off the Postgres WAL and land in ClickHouse continuously, with
    no batch jobs and no orchestration to babysit.

-   :material-check-decagram:{ .lg .middle } **Correct by construction**

    ---

    `ReplacingMergeTree(_version, _is_deleted)` keeps the latest row and
    tombstones deletes; a `<table>_live` view hides the mechanics.

-   :material-table-merge-cells:{ .lg .middle } **Native denormalization**

    ---

    Fold a relational tree into one wide table: flattened columns and native
    `Array(Tuple(...))`, queryable with `ARRAY JOIN`. No JSON wrangling.

-   :material-backup-restore:{ .lg .middle } **Exactly-once on replay**

    ---

    `_version` is the source WAL LSN, so a crash-replay can't duplicate rows or
    resurrect deletes.

-   :material-tune:{ .lg .middle } **Per-table engine control**

    ---

    `PARTITION BY` / `ORDER BY` / TTL / settings per table, straight from your
    `schema.json`, to tune ClickHouse without leaving the config.

-   :material-git:{ .lg .middle } **The PGSync you know**

    ---

    Same `schema.json`, same CLI, same WAL/trigger change capture, with a
    ClickHouse sink instead of Elasticsearch.

</div>

## Get started

=== "Mirror (free)"

    ```bash
    pip install pgsync-clickhouse
    pgsync-clickhouse -c examples/book.json --bootstrap   # slot + ClickHouse table
    pgsync-clickhouse -c examples/book.json --daemon      # keep it live
    ```

=== "Denormalized (paid)"

    ```bash
    # from your private index (token emailed on subscribe):
    pip install pgsync-clickhouse-pro --extra-index-url https://TOKEN@HOST/simple/
    pgsync-clickhouse -c examples/book_denormalized.json --bootstrap
    pgsync-clickhouse -c examples/book_denormalized.json --daemon
    ```

The `pgsync-clickhouse-pro` package adds denormalized mode on top of the free
base: same command, one wide table instead of a mirror.

## Query ClickHouse

```sql
-- easiest: the companion _live view already applies FINAL + tombstone filter
SELECT title, isbn FROM book_live LIMIT 5;

-- denormalized: flattened one-to-one + native nested-array explode
SELECT title, publisher_name, a.name AS author
FROM book_wide FINAL ARRAY JOIN authors AS a
WHERE _is_deleted = 0;
```

---

<div align="center" markdown>

**Ready to keep ClickHouse in sync with Postgres?**

<div class="hero-actions" markdown>
[:material-tag: See pricing](../pricing/index.md){ .md-button .md-button--primary }
[:material-star-four-points: PGSync Pro](../pro/index.md){ .md-button }
</div>

</div>

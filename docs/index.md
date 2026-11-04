---
title: PGSync
hide:
  - navigation
  - toc
---

<div class="home-hero" markdown>
<div class="home-hero__text" markdown>

<a class="home-pill" href="clickhouse/"><b>New</b> PGSync ClickHouse: stream Postgres into ClickHouse :material-arrow-right:</a>

# Your relational data, searchable in real time.

<p class="home-hero__lede">Real-time data synchronization from <strong>PostgreSQL</strong>, <strong>MySQL</strong>, and <strong>MariaDB</strong> to <strong>Elasticsearch</strong> and <strong>OpenSearch</strong>, continuously and transactionally.</p>

<div class="hero-actions" markdown>
[Get started :material-arrow-right:](getting-started/setup.md){ .md-button .md-button--primary }
[Live demo](https://demo.pgsync.com){ .md-button target="_blank" rel="noopener" }
[:material-github: GitHub](https://github.com/toluaina/pgsync){ .md-button }
</div>

<div class="home-install"><span>$</span> pip install pgsync</div>

</div>
<div class="home-hero__code" markdown>

=== "schema.json"

    ```json
    {
      "table": "book",
      "columns": ["isbn", "title"],
      "children": [
        { "table": "author", "columns": ["name"] }
      ]
    }
    ```

=== "Document"

    ```json
    {
      "isbn": "9788374950978",
      "title": "Kafka on the Shore",
      "author": ["Haruki Murakami", "Philip Gabriel"]
    }
    ```

</div>
</div>

<div class="home-flow">
  <span class="home-flow__group"><span>PostgreSQL</span><span>MySQL</span><span>MariaDB</span></span>
  <span class="home-arrow" aria-hidden="true">→</span>
  <strong>PGSync</strong>
  <span class="home-arrow" aria-hidden="true">→</span>
  <span class="home-flow__group"><span>Elasticsearch</span><span>OpenSearch</span><span>ClickHouse</span></span>
</div>

## What is PGSync?

PGSync is a **lightweight middleware** that captures changes from your relational database and writes structured, denormalized documents to your search cluster.

Define your **document schema once** in JSON, and PGSync handles change capture, ordering, and delivery automatically, no custom ETL code required.

<div class="grid cards home-features" markdown>

-   :material-sync:{ .lg .middle } **Change Data Capture**

    ---

    Automatically captures INSERT, UPDATE, and DELETE using logical replication

-   :material-lightning-bolt:{ .lg .middle } **Low Overhead**

    ---

    Minimal impact on database performance

-   :material-shield-check:{ .lg .middle } **Fault Tolerant**

    ---

    Resumes from last checkpoint after crashes

-   :material-file-tree:{ .lg .middle } **Nested Documents**

    ---

    Transform relational data into deeply nested JSON

</div>

## Quick Start

<div class="termy">

```console
$ pip install pgsync
---> 100%
Successfully installed pgsync
```

</div>

Define your schema in JSON:

```json title="schema.json"
{
  "database": "mydb",
  "index": "books",
  "nodes": {
    "table": "book",
    "children": [{ "table": "author" }]
  }
}
```

Then start syncing:

<div class="termy">

```console
$ pgsync --config schema.json --daemon
```

</div>

## The PGSync family

PGSync is free and open source. **PGSync Pro** adds real-time semantic & hybrid
search; **PGSync ClickHouse** streams your data into ClickHouse for real-time
analytics. Same `schema.json`, same CLI.

<div class="grid cards" markdown>

-   :material-database-sync:{ .lg .middle } **PGSync · Community**

    ---

    Free & MIT. Real-time sync from PostgreSQL / MySQL / MariaDB to
    Elasticsearch / OpenSearch, change data capture, denormalized documents,
    and the Django integration.

    [:material-rocket-launch: Get started](getting-started/setup.md)

-   :material-brain:{ .lg .middle } **PGSync · Pro**

    ---

    Everything in Community, plus **semantic & hybrid search** that re-embeds
    only when meaning changes, hosted embedding providers, and an MCP server for
    AI agents.

    [:material-star-four-points: Explore PGSync Pro](pro/index.md)

-   :material-database-arrow-right:{ .lg .middle } **PGSync · ClickHouse**

    ---

    Real-time **PostgreSQL → ClickHouse** for analytics. **Mirror** a table free,
    or **denormalize** a whole relational tree into one wide table (paid), on
    `ReplacingMergeTree`, always fresh.

    [:material-database-arrow-right: Explore PGSync ClickHouse](clickhouse/index.md)

</div>

<p>PGSync is supported by <a href="https://www.digitalocean.com/?utm_medium=opensource&utm_source=pgsync" rel="sponsored noopener noreferrer">DigitalOcean</a>.</p>
<p>
  <a href="https://www.digitalocean.com/?utm_medium=opensource&utm_source=pgsync" rel="sponsored noopener noreferrer">
    <img
      src="https://opensource.nyc3.cdn.digitaloceanspaces.com/attribution/assets/SVG/DO_Logo_horizontal_blue.svg"
      alt="DigitalOcean"
      width="201"
      loading="lazy"
      decoding="async"
    >
  </a>
</p>

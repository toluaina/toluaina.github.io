---
title: PGSync
hide:
  - navigation
  - toc
---

<div class="home-hero" markdown>
<div class="home-hero__text" markdown>

<a class="home-pill" href="clickhouse/"><b>New</b> PGSync ClickHouse: stream Postgres into ClickHouse :material-arrow-right:</a>

# Search your relational data by meaning, in real time.

<p class="home-hero__lede">PGSync keeps <strong>Elasticsearch</strong> and <strong>OpenSearch</strong> in sync with <strong>PostgreSQL</strong>, <strong>MySQL</strong> and <strong>MariaDB</strong>. <strong>PGSync Semantic</strong> lets your users search by meaning, with hybrid keyword ranking, and re-embeds a document only when its meaning changes.</p>

<div class="hero-actions" markdown>
[Explore Semantic :material-arrow-right:](pro/index.md){ .md-button .md-button--primary }
[Try the live demo](https://demo.pgsync.com){ .md-button target="_blank" rel="noopener" }
[:material-github: Open source](https://github.com/toluaina/pgsync){ .md-button }
</div>

<div class="home-install"><span>$</span> pip install pgsync</div>

</div>
<div class="home-hero__code" markdown>

=== "Search"

    ```json
    // query: "a rebellion against a watchful state"
    {
      "title": "Nineteen Eighty-Four",
      "author": ["George Orwell"]
    }
    ```

=== "schema.json"

    ```json
    {
      "table": "book",
      "columns": ["isbn", "title", "description"],
      "children": [
        { "table": "author", "columns": ["name"] }
      ]
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

## One sync engine, four products

<div class="grid cards home-features home-products" markdown>

-   :material-magnify:{ .lg .middle } **PGSync Semantic**

    <span class="home-tag">From $29/mo</span>

    Semantic and hybrid search on your own data. Embeddings update only when the meaning changes. Includes an MCP server for AI agents.

    [Explore Semantic :material-arrow-right:](pro/index.md)

-   :material-sync:{ .lg .middle } **PGSync**

    <span class="home-tag">Free, MIT</span>

    The open-source sync engine. Nested JSON documents in Elasticsearch and OpenSearch, kept in sync in real time.

    [Get started :material-arrow-right:](getting-started/setup.md)

-   :material-chart-box-outline:{ .lg .middle } **PGSync ClickHouse**

    <span class="home-tag">Mirror free, from $19/mo</span>

    Stream Postgres into ClickHouse. Mirror one table, or flatten a whole tree into one wide table.

    [Explore ClickHouse :material-arrow-right:](clickhouse/index.md)

-   :material-language-python:{ .lg .middle } **django-pgsync**

    <span class="home-tag">Free, open source</span>

    Declare search indexes from your Django models. PGSync catches every write, also the ones that skip signals.

    [Django integration :material-arrow-right:](django/index.md)

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

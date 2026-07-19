---
title: PGSync
hide:
  - toc
---

<p align="center">
  <a href="https://pgsync.com">
    <img src="assets/images/logo-no-background.svg#only-dark" alt="PGSync" width="300">
    <img src="assets/images/logo-no-background-dark.svg#only-light" alt="PGSync" width="300">
  </a>
</p>

<p align="center">
  <a href="https://codecov.io/gh/toluaina/pgsync" target="_blank">
    <img src="https://codecov.io/gh/toluaina/pgsync/branch/main/graph/badge.svg?token=cvQzYkz6CV" alt="Coverage">
  </a>
  <a href="https://badge.fury.io/py/pgsync" target="_blank">
    <img src="https://badge.fury.io/py/pgsync.svg" alt="Package version">
  </a>
  <a href="https://pypi.org/project/pgsync/" target="_blank">
    <img src="https://img.shields.io/pypi/pyversions/pgsync" alt="Python versions">
  </a>
  <a href="https://github.com/toluaina/pgsync" target="_blank">
    <img src="https://img.shields.io/github/stars/toluaina/pgsync?style=social" alt="GitHub stars">
  </a>
</p>

<div align="center" markdown>

Real-time data synchronization from **PostgreSQL**, **MySQL**, and **MariaDB** to **Elasticsearch** and **OpenSearch**—continuously and transactionally.

<div class="hero-actions" markdown>

[:material-rocket-launch: Get Started](getting-started/setup.md){ .md-button .md-button--primary }
[:material-github: GitHub](https://github.com/toluaina/pgsync){ .md-button }
[:material-package-variant: PyPI](https://pypi.org/project/pgsync/){ .md-button }
[:material-docker: Docker](https://hub.docker.com/r/toluaina1/pgsync){ .md-button }
[:simple-digitalocean: DigitalOcean](https://marketplace.digitalocean.com/apps/pgsync?utm_medium=opensource&utm_source=pgsync){ .md-button }

</div>

</div>

!!! tip "New · PGSync Pro"
    Real-time **semantic & hybrid search** on top of PGSync — vectors kept fresh
    by change data capture, re-embedded only when *meaning* changes.
    [Explore PGSync Pro :material-arrow-right:](pro/index.md)

---

## What is PGSync?

PGSync is a **lightweight middleware** that captures changes from your relational database and writes structured, denormalized documents to your search cluster.

Define your **document schema once** in JSON, and PGSync handles change capture, ordering, and delivery automatically—no custom ETL code required.

<div class="grid cards" markdown>

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

---

## Quick Start

<div class="termy">

```console
$ pip install pgsync
---> 100%
Successfully installed pgsync
```

</div>

Define your schema in JSON:

```json
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

---

## Editions

PGSync is free and open source. **PGSync Pro** builds on it to add real-time
semantic and hybrid search — with change-guard economics that keep it
affordable at scale.

<div class="grid cards" markdown>

-   :material-database-sync:{ .lg .middle } **PGSync · Community**

    ---

    Free & MIT. Real-time sync from PostgreSQL / MySQL / MariaDB to
    Elasticsearch / OpenSearch — change data capture, denormalized documents,
    and the Django integration.

    [:material-rocket-launch: Get started](getting-started/setup.md)

-   :material-brain:{ .lg .middle } **PGSync · Pro**

    ---

    Everything in Community, plus **semantic & hybrid search** that re-embeds
    only when meaning changes, hosted embedding providers, and an MCP server for
    AI agents.

    [:material-star-four-points: Explore PGSync Pro](pro/index.md)

</div>

---

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

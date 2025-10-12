---
title: PGSync
hide:
  - toc
---

<p align="center">
  <a href="https://pgsync.com">
    <img src="assets/images/logo-no-background.svg" alt="PGSync" width="280">
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
</p>

<div align="center" markdown>

PGSync keeps **PostgreSQL**/**MySQL**/**MariaDB** as your source of truth and publishes **denormalized documents** to **Elasticsearch/OpenSearch**—continuously and transactionally.

[Get started](getting-started/installation.md){ .md-button .md-button--primary }
[GitHub](https://github.com/toluaina/pgsync){ .md-button }
[PyPI](https://pypi.org/project/pgsync/){ .md-button }
[Docker](https://hub.docker.com/r/toluaina1/pgsync){ .md-button }

</div>

---

## What is PGSync?

PGSync is a lightweight middleware that captures changes from PostgreSQL/MySQL/MariaDB and writes structured documents to your search cluster. Describe your **document schema** once (in JSON) and PGSync takes care of change capture, ordering, and delivery—no custom ETL code.

- Transactionally consistent output (only committed writes; commit order preserved)
- Low overhead on PostgreSQL/MySQL/MariaDB 
- Flexible mapping from relational data to nested documents

---

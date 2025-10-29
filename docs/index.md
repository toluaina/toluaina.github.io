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

PGSync keeps **PostgreSQL**/**MySQL**/**MariaDB** as your source of truth and publishes **denormalized documents** to **Elasticsearch/OpenSearch** continuously and transactionally.


:material-github:{ aria-hidden="true" } [GitHub](https://github.com/toluaina/pgsync){ target=_blank rel="noopener" } •
:material-package-variant:{ aria-hidden="true" } [PyPI](https://pypi.org/project/pgsync/){ target=_blank rel="noopener" } •
:material-docker:{ aria-hidden="true" } [Docker](https://hub.docker.com/r/toluaina1/pgsync){ target=_blank rel="noopener" }


</div>

---

## What is PGSync?

PGSync is a lightweight middleware that captures changes from PostgreSQL/MySQL/MariaDB and writes structured documents to your search cluster. Describe your **document schema** once (in JSON) and PGSync takes care of change capture, ordering, and delivery—no custom ETL code.

- Transactionally consistent output (only committed writes; commit order preserved)
- Low overhead on PostgreSQL/MySQL/MariaDB 
- Flexible mapping from relational data to nested documents

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

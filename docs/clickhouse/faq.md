---
title: PGSync ClickHouse FAQ
---

# PGSync ClickHouse FAQ

Common questions about PGSync ClickHouse: the free mirror tier, the paid
denormalized add-on, and running it. Can't find an answer?
[Email us](#){ .eml data-u="tolu" data-d="pgsync.com" data-s="PGSync ClickHouse question" }.

## The product

**What is PGSync ClickHouse?**
Real-time change data capture from **PostgreSQL to ClickHouse**. It reads the
Postgres WAL and keeps a ClickHouse table in step with it on `ReplacingMergeTree`,
with no ETL jobs and no nightly batch. See [how it works](how-it-works.md).

**How is it different from PGSync (open-core)?**
PGSync (MIT) syncs to Elasticsearch / OpenSearch. PGSync ClickHouse is a
**ClickHouse sink** for the same engine (the same `schema.json`, the same CLI,
the same change capture), writing to ClickHouse instead.

**What's free and what's paid?**
**Mirror mode is free:** one PostgreSQL table → one ClickHouse table.
**Denormalized mode is paid:** fold a whole relational tree into one wide table
(one-to-one children flattened into typed columns, one-to-many as native
`Array(Tuple(...))`). It ships as the separate `pgsync-clickhouse-pro` package.

**Why not PeerDB / ClickPipes / Debezium?**
Those are separate pipelines or managed services. PGSync ClickHouse reuses the
PGSync you already know (the same `schema.json` and CDC), runs **in your own
infrastructure**, and gives you **native denormalization** into wide ClickHouse
tables, keyed on the WAL position, so each change lands exactly once.

**Do I need Redis?**
Not in WAL streaming mode. The default trigger mode uses Redis as a queue; WAL
mode reads the replication slot directly.

## Pricing & billing

**How much is it?**
**Mirror mode is free.** Denormalized mode is **$19/mo billed annually** (or
$24/mo billed monthly), per organization. Launch pricing; see the
[pricing page](pricing.md).

**What is an "organization"?**
One legal entity and the infrastructure it operates (subsidiaries that it fully owns
are included). Separate legal entities, or clients you resell to, are not covered.

**Do I pay per user?**
No. You pay one flat subscription per organization for the denormalized add-on.

**Is there a free trial?**
**Mirror mode is the free tier:** use it for as long as you like. Upgrade to the
denormalized add-on when you need wide tables; you can cancel the plan at any time.

**What happens when I cancel?**
Your last installed version keeps working. It does not contact our servers, and it
does not stop on a set date. You stop receiving updates and we revoke your
private package index token, so you can no
longer install or upgrade the paid package. **Mirror mode stays free.**

## Installation & use

**How do I install it?**

```bash
pip install pgsync-clickhouse            # mirror: free, from PyPI
# denormalized (paid): install the add-on from your private index token
pip install pgsync-clickhouse-pro --extra-index-url <your private index URL>
```

Keep the token out of shell history; use `PIP_EXTRA_INDEX_URL` or `pip.conf`.

**What do I need running first?**
PostgreSQL with `wal_level = logical` and your data, and a **ClickHouse**
instance reachable from where PGSync runs. That's it.

**Which ClickHouse versions are supported?**
Any recent ClickHouse. The sink only relies on the `ReplacingMergeTree` engine
family, which has been available for years.

**Does my data leave my infrastructure?**
No. PGSync ClickHouse runs in your environment; data flows only from your
Postgres to your ClickHouse.

## Data & operations

**How are updates and deletes handled?**
An update is an append with a higher `_version` (the source WAL position) that
wins under `FINAL`. A delete writes a tombstone that the `<table>_live` view
filters out. You always read clean, current state.

**Does each change land exactly once?**
Yes. `_version` is the WAL LSN, so if a change is applied again after a crash, it
re-inserts an identical row that `ReplacingMergeTree` collapses, with no
duplicates and no resurrected deletes.

**What about schema changes?**
Add the column to your source and to `schema.json`, then re-run `--bootstrap`.
The ClickHouse table is reconciled additively (`ALTER TABLE ADD COLUMN`).

**Can I control the ClickHouse engine and partitioning?**
Yes. An optional `clickhouse` block in `schema.json` sets `ORDER BY`,
`PARTITION BY`, `TTL` and engine settings per table. (Note: `PARTITION BY` must be
derivable from the primary key, because a delete writes a tombstone that holds only the primary key.)

<div align="center" markdown>

---

[:material-tag: See pricing](pricing.md){ .md-button .md-button--primary }
[:material-email: Talk to us](#){ .md-button .eml data-u="tolu" data-d="pgsync.com" data-s="PGSync ClickHouse" }

</div>

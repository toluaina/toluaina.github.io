---
title: How it works
hide:
  - toc
---

<div align="center" markdown>

# How PGSync ClickHouse works

From Postgres rows to a live analytics table, the whole pipeline one step at a
time. No ETL jobs, no nightly batch.

</div>

---

## The pipeline

<div class="grid cards" markdown>

-   :material-numeric-1-circle:{ .lg .middle } **Your Postgres tables**

    ---

    Your database stays the source of truth. Nothing changes about how your
    application writes to it: inserts, updates and deletes happen as normal.

-   :material-numeric-2-circle:{ .lg .middle } **PGSync captures every change**

    ---

    Committed changes are read straight from the PostgreSQL **write-ahead log**
    (logical decoding), in commit order, transactionally, with a checkpoint so a
    crash resumes exactly where it left off.

-   :material-numeric-3-circle:{ .lg .middle } **Versioned rows land in ClickHouse**

    ---

    Each change is an **append** to a `ReplacingMergeTree`: an upsert carries a
    `_version` (the source WAL position); a delete writes a **tombstone**. The
    newest `_version` always wins, with no updates-in-place and no races.

-   :material-numeric-4-circle:{ .lg .middle } **Query the clean, live state**

    ---

    A companion **`<table>_live` view** applies `FINAL` + the tombstone filter for
    you, so you read the current, deduplicated state with plain SQL, and the
    ReplacingMergeTree mechanics stay out of your way.

</div>

## What lands in ClickHouse

A row committed in Postgres becomes a **versioned append**: the latest version
wins under `FINAL`, and deletes tombstone cleanly:

```sql
-- one book, then a price change, then a delete: all appended, newest wins
INSERT INTO book VALUES ('1984', 'Nineteen Eighty-Four', 14.99, /*_version*/ 100, /*_is_deleted*/ 0);
INSERT INTO book VALUES ('1984', 'Nineteen Eighty-Four', 12.99, /*_version*/ 140, 0);  -- price update
INSERT INTO book VALUES ('1984', '', 0,                          /*_version*/ 180, 1);  -- delete (tombstone)

-- you never write the above; PGSync does. You just read the live view:
SELECT title, price FROM book_live;      -- clean, deduplicated, tombstone-free
```

`_version` is the source **WAL LSN**, so re-applying a change (a crash-replay)
re-inserts an identical row that `ReplacingMergeTree` collapses: **exactly-once**,
with no duplicates and no resurrected deletes.

## Denormalized mode: one wide table

Add children to your `schema.json` and PGSync ClickHouse folds a whole relational
tree into **one wide table**: one-to-one children **flattened** into typed
columns, one-to-many children as native **`Array(Tuple(...))`**, with no JSON
wrangling and queryable with `ARRAY JOIN`.

=== "schema.json"

    ```json
    {
      "database": "book", "index": "book_wide",
      "nodes": {
        "table": "book",
        "columns": ["isbn", "title", "price"],
        "children": [
          { "table": "publisher", "relationship": { "variant": "object", "type": "one_to_one" } },
          { "table": "author", "label": "authors",
            "relationship": { "variant": "object", "type": "one_to_many" } }
        ]
      }
    }
    ```

=== "the wide table"

    ```sql
    -- publisher flattened into typed columns; authors as a native nested array
    SELECT title, publisher_name, a.name AS author
    FROM book_wide FINAL ARRAY JOIN authors AS a
    WHERE _is_deleted = 0;
    ```

A change to a *child* row (a new author, a renamed publisher) re-emits the parent,
so the wide row stays in sync automatically.

---

<div align="center" markdown>

**Same `schema.json`, same CLI, a ClickHouse sink instead of Elasticsearch.**

<div class="hero-actions" markdown>
[:material-tag: See pricing](../pricing/index.md){ .md-button .md-button--primary }
[:material-database-arrow-right: PGSync ClickHouse](index.md){ .md-button }
[:material-frequently-asked-questions: FAQ](faq.md){ .md-button }
</div>

</div>

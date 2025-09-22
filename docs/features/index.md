# Features

PGSync focuses on reliability, low overhead, and clean documents for search.

## Highlights

- **PostgreSQL 9.6+** — works with any PostgreSQL database (version 9.6 or later).
- **Low overhead** — negligible impact on database performance.
- **Transactional consistency** — only committed writes are indexed; inserts, updates, and deletes are applied in commit order.
- **Fault tolerant & resumable** — no data loss on crashes or network interruptions; processing resumes from the last checkpoint.
- **Native JSON path** — returns data directly as PostgreSQL JSON for speed.
- **Composite keys** — supports composite primary and foreign keys.
- **Deeply nested documents** — supports arbitrary depth of related entities (tables with long chains of relationships).
- **JSON field extraction** — extract JSON fields from a table into separate fields in the resulting document.
- **Customizable document structure** — tailor documents to your index and query needs.

## Details

### Consistency
- Only committed transactions appear in Elasticsearch/OpenSearch.
- Operation order (insert → update → delete) is preserved based on commit order.

### Reliability
- Designed to avoid data loss if a process crashes or the network drops.
- Recovery resumes from the last successful checkpoint.

### Data modeling
- Composite **primary** and **foreign** keys supported.
- Arbitrary-depth relationships (one-to-one, one-to-many, through tables).
- Extract and map PostgreSQL JSON fields to top-level document fields.

### Performance
- Builds documents directly from PostgreSQL JSON to minimize transformation overhead.

### Compatibility
- PostgreSQL **9.6 or later**.
- Outputs to **Elasticsearch**/**OpenSearch**.

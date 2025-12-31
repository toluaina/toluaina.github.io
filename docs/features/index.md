# Features

PGSync focuses on reliability, low overhead, and clean documents for search.

## Highlights

| Feature | Description |
|---------|-------------|
| :material-database-check: **Multi-Database Support** | Works with PostgreSQL (9.6+), MySQL (5.7+), or MariaDB (10.5+) |
| :material-lightning-bolt: **Low Overhead** | Negligible impact on database performance |
| :material-sync: **Transactional Consistency** | Only committed writes indexed; operations applied in commit order |
| :material-shield-check: **Fault Tolerant** | No data loss on crashes; resumes from last checkpoint |
| :material-code-json: **Native JSON Path** | Returns data directly as PostgreSQL JSON for speed |
| :material-key-chain: **Composite Keys** | Supports composite primary and foreign keys |
| :material-file-tree: **Deeply Nested Documents** | Arbitrary depth of related entities supported |
| :material-cog: **Customizable Structure** | Tailor documents to your index and query needs |

## Details

### :material-check-circle: Consistency
- Only committed transactions appear in Elasticsearch/OpenSearch
- Operation order (insert → update → delete) is preserved based on commit order

### :material-shield: Reliability
- Designed to avoid data loss if a process crashes or the network drops
- Recovery resumes from the last successful checkpoint

### :material-database: Data Modeling
- Composite **primary** and **foreign** keys supported
- Arbitrary-depth relationships (one-to-one, one-to-many, through tables)
- Extract and map PostgreSQL JSON fields to top-level document fields

### :material-speedometer: Performance
- Builds documents directly from PostgreSQL JSON to minimize transformation overhead

### :material-check-all: Compatibility

| Database/Service | Minimum Version |
|------------------|-----------------|
| :simple-postgresql: PostgreSQL | **9.6+** |
| :simple-mysql: MySQL | **5.7+** |
| :simple-mariadb: MariaDB | **10.5+** |
| :simple-elasticsearch: Elasticsearch | **6.3.1+** |
| :simple-opensearch: OpenSearch | **1.3.7+** |

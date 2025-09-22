# Requirements

PGSync has a small set of runtime dependencies. Versions shown are **minimum supported**.

## Minimum versions

| Component | Version (min) | Notes |
|---|---:|---|
| Python | **3.9+** | Use a virtual environment for isolation. |
| PostgreSQL | **9.6+** | Network access to the database required. |
| Redis **or** Valkey | **Redis 3.1.0+** **or** **Valkey 7.2.0+** | Choose one key-value store. |
| Elasticsearch **or** OpenSearch | **Elasticsearch 6.3.1+** **or** **OpenSearch 1.3.7+** | Choose one search backend. |
| SQLAlchemy (Python) | **1.3.4+** | Installed as a Python dependency. |

## Choose your search backend

=== "Elasticsearch"
    - Version **6.3.1+**
    - Ensure the cluster is reachable from where PGSync runs.

    **Quick check**
    ```bash
    curl -s http://localhost:9200 | jq .
    # or
    elasticsearch --version
    ```

=== "OpenSearch"
    - Version **1.3.7+**
    - Ensure the cluster is reachable from where PGSync runs.

    **Quick check**
    ```bash
    curl -s http://localhost:9200 | jq .
    # or
    opensearch --version
    ```

## Quick checks

Verify the basics on the host that will run PGSync:

```bash
python3 --version
psql --version
redis-cli --version      # or: valkey-cli --version
```

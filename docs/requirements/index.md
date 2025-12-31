# Requirements

PGSync has a small set of runtime dependencies.

## Overview

| Component | Minimum Version | Required |
|-----------|-----------------|----------|
| :simple-python: **Python** | 3.9+ | Yes |

### Source Database (choose one)

| Option | Minimum Version |
|--------|-----------------|
| :simple-postgresql: PostgreSQL | 9.6+ |
| :simple-mysql: MySQL | 5.7+ |
| :simple-mariadb: MariaDB | 10.5+ |

### Search Backend (choose one)

| Option | Minimum Version |
|--------|-----------------|
| :simple-elasticsearch: Elasticsearch | 6.3.1+ |
| :simple-opensearch: OpenSearch | 1.3.7+ |

### Key-Value Store (choose one)

| Option | Minimum Version |
|--------|-----------------|
| :simple-redis: Redis | 3.1.0+ |
| :material-key-variant: Valkey | 7.2.0+ |

---

## Configuration

### Database Driver

=== ":simple-postgresql: PostgreSQL"

    ```bash
    export PG_DRIVER=psycopg2
    ```

    ??? example "Verify installation"
        ```python
        import psycopg2
        print("psycopg2 OK")
        ```

=== ":simple-mysql: MySQL / :simple-mariadb: MariaDB"

    ```bash
    export PG_DRIVER=pymysql
    ```

    ??? example "Verify installation"
        ```python
        import pymysql
        print("PyMySQL OK")
        ```

### Search Backend

=== ":simple-elasticsearch: Elasticsearch"

    Ensure the cluster is reachable from where PGSync runs.

    ```bash
    curl -s http://localhost:9200 | jq .
    ```

=== ":simple-opensearch: OpenSearch"

    Ensure the cluster is reachable from where PGSync runs.

    ```bash
    curl -s http://localhost:9200 | jq .
    ```

---

## Verify Installation

Run these commands to verify your environment:

```bash
# Python
python3 --version

# Database client
psql --version          # PostgreSQL
mysql --version         # MySQL/MariaDB

# Key-value store
redis-cli --version     # Redis
valkey-cli --version    # Valkey
```

!!! tip "Virtual Environment"
    Always use a virtual environment to isolate PGSync dependencies:
    ```bash
    python3 -m venv venv
    source venv/bin/activate
    pip install pgsync
    ```

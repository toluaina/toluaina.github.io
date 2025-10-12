# Requirements

PGSync has a small set of runtime dependencies. Versions shown are **minimum supported**.

## Minimum versions

|  | Component | Version (min) | Notes |
|---:|---|---:|---|
| :simple-python: | Python | **3.9+** | Use a virtual environment for isolation. |
| :simple-postgresql: :simple-mysql: :simple-mariadb: | PostgreSQL or MySQL or MariaDB | **PostgreSQL 12+** • **MySQL 5.7+** • **MariaDB 10.5+** | Use any one SQL database. Network access required; JSON/JSONB support recommended. |
| :simple-redis: :material-key-variant: | Redis **or** Valkey | **Redis 3.1.0+** **or** **Valkey 7.2.0+** | Choose one key-value store. |
| :simple-elasticsearch::simple-opensearch: | Elasticsearch **or** OpenSearch | **Elasticsearch 6.3.1+** **or** **OpenSearch 1.3.7+** | Choose one search backend. |
| :simple-sqlalchemy: | SQLAlchemy (Python) | **1.3.4+** | Installed as a Python dependency. |


## Select your database driver

=== ":simple-postgresql:{ .tab-icon .icon-postgresql } PostgreSQL"
    Set the driver to psycopg2.

    ```bash
    export PG_DRIVER=psycopg2
    # Windows (PowerShell):
    # $env:PG_DRIVER = "psycopg2"
    ```

    **Quick check**
    ```bash
    import os
    print("PG_DRIVER =", os.getenv("PG_DRIVER"))
    import psycopg2
    print("psycopg2 import OK")
    ```

=== ":simple-mariadb:{ .tab-icon .icon-mariadb } MariaDB / :simple-mysql:{ .tab-icon } MySQL"
    Set the driver to PyMySQL.

    ```bash
    export PG_DRIVER=pymysql
    # Windows (PowerShell):
    # $env:PG_DRIVER = "pymysql"
    ```

    **Quick check**
    ```bash
    import os
    print("PG_DRIVER =", os.getenv("PG_DRIVER"))
    import pymysql
    print("PyMySQL import OK")
    ```

    !!! tip
    This only selects the Python DB driver; your connection URL/envs stay the same.
    Supported databases: PostgreSQL 9.6+, MySQL 8.0+, MariaDB 10.3+.



## Choose your search backend

=== ":simple-elasticsearch:{ .tab-icon .icon-elasticsearch } Elasticsearch"
    - Version **6.3.1+**
    - Ensure the cluster is reachable from where PGSync runs.

    **Quick check**
    ```bash
    curl -s http://localhost:9200 | jq .
    # or
    elasticsearch --version
    ```

=== ":simple-opensearch:{ .tab-icon .icon-opensearch } OpenSearch"
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

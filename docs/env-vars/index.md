# :material-cog: Environment Variables

PGSync uses the [dotenv](https://github.com/theskumar/python-dotenv) module for reading environment variables from a `.env` file.

```bash title=".env"
PG_HOST=localhost
PG_USER=postgres
PG_PASSWORD=secret
ELASTICSEARCH_HOST=localhost
```

Or set them manually:

```bash
export PG_HOST=localhost
export ELASTICSEARCH_HOST=localhost
pgsync -c schema.json
```

---

## General

| Variable | Default | Description |
|----------|---------|-------------|
| `SCHEMA` | | Path to the application schema config |
| `CHECKPOINT_PATH` | | Path to store the checkpoint file |
| `QUERY_CHUNK_SIZE` | 10000 | Records to fetch per database query |
| `POLL_TIMEOUT` | 0.1 | Poll interval (reduce to increase throughput) |
| `POLL_INTERVAL` | 0.1 | Polling interval for polling mode |
| `POLLING` | False | Enable polling mode |
| `WAL` | False | WAL consumer mode |
| `REPLICATION_SLOT_CLEANUP_INTERVAL` | 180.0 | Replication slot cleanup interval (seconds) |
| `LOG_INTERVAL` | 0.5 | Stdout log interval (seconds) |
| `NUM_WORKERS` | 2 | Number of workers for handling events |
| `USE_ASYNC` | False | Enable experimental async mode |

---

## :simple-postgresql: Database

| Variable | Default | Description |
|----------|---------|-------------|
| `PG_HOST` | localhost | Database host |
| `PG_PORT` | 5432 | Database port |
| `PG_USER` | | Database username (superuser) |
| `PG_PASSWORD` | | Database password |
| `PG_DRIVER` | | Driver: `psycopg2` (PostgreSQL) or `pymysql` (MySQL/MariaDB) |
| `PG_SSLMODE` | | SSL mode: `disable`, `allow`, `prefer`, `require`, `verify-ca`, `verify-full` |
| `PG_SSLROOTCERT` | | Path to CA certificate file |

---

## :simple-elasticsearch: Elasticsearch / OpenSearch

### Connection

| Variable | Default | Description |
|----------|---------|-------------|
| `ELASTICSEARCH_SCHEME` | http | Protocol (`http` or `https`) |
| `ELASTICSEARCH_HOST` | localhost | Host address |
| `ELASTICSEARCH_PORT` | 9200 | Port |
| `ELASTICSEARCH_USER` | | Username |
| `ELASTICSEARCH_PASSWORD` | | Password |
| `ELASTICSEARCH_TIMEOUT` | 10 | Request timeout (seconds) |

### SSL/TLS

| Variable | Default | Description |
|----------|---------|-------------|
| `ELASTICSEARCH_USE_SSL` | False | Enable SSL |
| `ELASTICSEARCH_VERIFY_CERTS` | True | Verify SSL certificates |
| `ELASTICSEARCH_SSL_SHOW_WARN` | False | Show SSL verification warnings |
| `ELASTICSEARCH_CA_CERTS` | | Path to CA certs |
| `ELASTICSEARCH_CLIENT_CERT` | | PEM formatted client certificate |
| `ELASTICSEARCH_CLIENT_KEY` | | PEM formatted client key |

### Performance

| Variable | Default | Description |
|----------|---------|-------------|
| `ELASTICSEARCH_CHUNK_SIZE` | 2000 | Documents to index per batch |
| `ELASTICSEARCH_MAX_CHUNK_BYTES` | 104857600 | Max request size (bytes, default 100MB) |
| `ELASTICSEARCH_THREAD_COUNT` | 4 | Threadpool size for bulk requests |
| `ELASTICSEARCH_QUEUE_SIZE` | 4 | Task queue size |
| `ELASTICSEARCH_STREAMING_BULK` | False | Enable streaming bulk indexing |

### Retry & Error Handling

| Variable | Default | Description |
|----------|---------|-------------|
| `ELASTICSEARCH_MAX_RETRIES` | 0 | Max retries on `429` errors |
| `ELASTICSEARCH_INITIAL_BACKOFF` | 2 | Initial retry backoff (seconds) |
| `ELASTICSEARCH_MAX_BACKOFF` | 600 | Max retry backoff (seconds) |
| `ELASTICSEARCH_RAISE_ON_EXCEPTION` | True | Propagate exceptions |
| `ELASTICSEARCH_RAISE_ON_ERROR` | True | Raise `BulkIndexError` on failures |

### AWS

| Variable | Default | Description |
|----------|---------|-------------|
| `ELASTICSEARCH_AWS_HOSTED` | False | Using AWS managed service |
| `ELASTICSEARCH_AWS_REGION` | | AWS region |

### API Key Authentication

| Variable | Default | Description |
|----------|---------|-------------|
| `ELASTICSEARCH_API_KEY_ID` | | API Key ID |
| `ELASTICSEARCH_API_KEY` | | API Key |

---

## :simple-redis: Redis / Valkey

| Variable | Default | Description |
|----------|---------|-------------|
| `REDIS_CHECKPOINT` | False | Store checkpoint in Redis instead of filesystem |
| `REDIS_SCHEME` | redis | Connection scheme |
| `REDIS_HOST` | localhost | Host address |
| `REDIS_PORT` | 6379 | Port |
| `REDIS_DB` | 0 | Database number |
| `REDIS_USER` | | Username |
| `REDIS_AUTH` | | Password |
| `REDIS_SOCKET_TIMEOUT` | 5 | Socket timeout (seconds) |
| `REDIS_POLL_INTERVAL` | 0.01 | Poll interval |
| `REDIS_READ_CHUNK_SIZE` | 1000 | Items to read per batch |
| `REDIS_WRITE_CHUNK_SIZE` | 1000 | Items to write per batch |

---

## :material-chart-line: Logging & Monitoring

| Variable | Default | Description |
|----------|---------|-------------|
| `CONSOLE_LOGGING_HANDLER_MIN_LEVEL` | | Log level: `DEBUG`, `INFO`, `WARNING`, `ERROR`, `CRITICAL` |
| `CUSTOM_LOGGING` | | Path to custom logging configuration file |
| `FORMAT_WITH_COMMAS` | True | Comma formatted logging output |

### New Relic

| Variable | Default | Description |
|----------|---------|-------------|
| `NEW_RELIC_ENVIRONMENT` | | Environment name |
| `NEW_RELIC_APP_NAME` | | Application name |
| `NEW_RELIC_LOG_LEVEL` | | Log level |
| `NEW_RELIC_LICENSE_KEY` | | License key |

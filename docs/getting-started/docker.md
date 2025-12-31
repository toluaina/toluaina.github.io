# Docker

## Running with Docker

**1. Pull the Docker image:**

```bash
docker pull toluaina1/pgsync:latest
```

**2. Run the container:**

```bash
docker run --rm -it \
  -e REDIS_CHECKPOINT=true \
  -e REDIS_HOST=<redis_host_address> \
  -e PG_URL=postgres://<username>:<password>@<postgres_host>/<database> \
  -e ELASTICSEARCH_URL=http://<elasticsearch_host>:9200 \
  -v "$(pwd)/schema.json:/app/schema.json" \
  toluaina1/pgsync:latest -c schema.json -d -b
```

## Environment Variables

Replace the placeholders with your values. See the full list of [environment variables](../env-vars/index.md).

| Placeholder | Description |
|-------------|-------------|
| `<redis_host_address>` | Address of the Redis/Valkey server (e.g., `host.docker.internal` for local Docker) |
| `<username>` | PostgreSQL username |
| `<password>` | PostgreSQL password |
| `<postgres_host>` | Host address for PostgreSQL (e.g., `host.docker.internal`) |
| `<database>` | Name of PostgreSQL database |
| `<elasticsearch_host>` | Address of Elasticsearch/OpenSearch (e.g., `host.docker.internal`) |

First, you need to bootstrap the database.

##### Running with Docker (Using Image Repository)

To start all services with Docker, follow these steps:

1. Pull the Docker image:

  ```
  $ docker pull toluaina1/pgsync:latest
  ```

2. Run the container:

  ```
  $ docker run --rm -it \
  -e REDIS_CHECKPOINT=true \
  -e REDIS_HOST=<redis_host_address> \
  -e PG_URL=postgres://<username>:<password>@<postgres_host>/<database> \
  -e ELASTICSEARCH_URL=http://<elasticsearch_host>:9200 \
  -v "$(pwd)/schema.json:/app/schema.json" \
  toluaina1/pgsync:latest -c schema.json -d -b
  ```

Environment variable placeholders - full list [here](https://pgsync.com/env-vars):

- redis_host_address — Address of the Redis/Valkey server (e.g., host.docker.internal for local Docker setup)
- username — PostgreSQL username
- password — PostgreSQL password
- postgres_host — Host address for PostgreSQL instance (e.g., host.docker.internal)
- database — Name of PostgreSQL database
- elasticsearch_host — Address of Elasticsearch/OpenSearch instance (e.g., host.docker).

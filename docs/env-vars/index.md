PGSync uses the [dotenv](https://github.com/theskumar/python-dotenv) module for reading a .env file.
You can declare environment variables in a .env file located at the root of your application.

Alternatively, you can set environment variables manually.
e.g 

<div class="termy">
```console
$ export PG_USER=kermit-the-frog
$ export PG_USER=localhost
$ export PG_PORT=5432
$ export PG_PASSWORD=******
```
</div>

PGSync provides the following environment variables:


| **Environment variable**     | **Default** | **Description**                  |
| ---------------------------- | ----------- | -------------------------------- |
| `SCHEMA`                     |             | Path to the application schema config |
| `QUERY_CHUNK_SIZE`           | 10000       | Database query chunk size (how many records to fetch at a time) |
| `POLL_TIMEOUT`               | 0.1         | Poll db interval (consider reducing this duration to increase throughput) |
| `REPLICATION_SLOT_CLEANUP_INTERVAL`        | 3600.0 | Replication slot cleanup interval (in secs) |
| `ELASTICSEARCH_SCHEME`       | http        | Elasticsearch protocol |
| `ELASTICSEARCH_HOST`         | localhost   | Elasticsearch host |
| `ELASTICSEARCH_PORT`         | 9200        | Elasticsearch port |
| `ELASTICSEARCH_USER`         |             | Elasticsearch user |
| `ELASTICSEARCH_PASSWORD`     |             | Elasticsearch password |
| `ELASTICSEARCH_TIMEOUT`      | 10          | Increase this if you are getting read request timeouts |
| `ELASTICSEARCH_CHUNK_SIZE`   | 2000        | Elasticsearch index chunk size (how many documents to index at a time) |
| `ELASTICSEARCH_MAX_CHUNK_BYTES`   | 104857600 | The maximum size of the Elasticsearch request in bytes (default: 100MB) |
| `ELASTICSEARCH_THREAD_COUNT`   | 4        | The size of the threadpool to use for Elasticsearch bulk requests |
| `ELASTICSEARCH_QUEUE_SIZE`   | 4        | The size of the task queue between the main thread (producing chunks to send) and the processing threads |
| `ELASTICSEARCH_VERIFY_CERTS` | True        | Verify Elasticsearch SSL certificates |
| `PG_HOST`                    | localhost   | Postgres database host |
| `PG_USER`                    |             | Postgres database username (superuser) |
| `PG_PORT`                    | 5432        | Postgres database port |
| `PG_PASSWORD`                |             | Postgres database user password |
| `PG_SSLMODE`                 |             | Postgres SSL TCP/IP connection mode ('disable', 'allow', 'prefer', 'require', 'verify-ca' or 'verify-full') |
| `PG_SSLROOTCERT`             |             | The name of a file containing SSL certificate authority (CA) certificate(s) |
| `REDIS_HOST`                 | localhost   | Redis server host |
| `REDIS_PORT`                 | 6379        | Redis server port |
| `REDIS_DB`                   | 0           | Redis database |
| `REDIS_AUTH`                 |             | Redis password |
| `REDIS_CHUNK_SIZE`           | 1000        | Number of items to read from Redis at a time |
| `REDIS_SOCKET_TIMEOUT`       | 5           | Redis socket connection timeout |
| `NEW_RELIC_ENVIRONMENT`      |             | New Relic environment name |
| `NEW_RELIC_APP_NAME`         |             | New Relic application name |
| `NEW_RELIC_LOG_LEVEL`        |             | Sets the level of detail of messages sent to the log file |
| `NEW_RELIC_LICENSE_KEY`      |             | New Relic license key |

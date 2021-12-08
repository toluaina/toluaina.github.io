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
$ export ELASTICSEARCH_HOST=loalhost
$ export ELASTICSEARCH_PORT=9200
```
</div>

PGSync provides the following environment variables:


| **Environment variable**     | **Default** | **Description**                  |
| ---------------------------- | ----------- | -------------------------------- |
| `SCHEMA`                     |             | Path to the application schema config |
| `CHECKPOINT_PATH`            |             | Path to store the checkpoint file |
| `QUERY_CHUNK_SIZE`           | 10000       | Database query chunk size (how many records to fetch at a time) |
| `POLL_TIMEOUT`               | 0.1         | Poll db interval (consider reducing this duration to increase throughput) |
| `REPLICATION_SLOT_CLEANUP_INTERVAL`        | 180.0 | Replication slot cleanup interval (in secs) |
| `ELASTICSEARCH_SCHEME`       | http        | Elasticsearch protocol |
| `ELASTICSEARCH_HOST`         | localhost   | Elasticsearch host |
| `ELASTICSEARCH_PORT`         | 9200        | Elasticsearch port |
| `ELASTICSEARCH_USER`         |             | Elasticsearch user |
| `ELASTICSEARCH_PASSWORD`     |             | Elasticsearch password |
| `ELASTICSEARCH_TIMEOUT`      | 10          | Increase this if you are getting read request timeouts |
| `ELASTICSEARCH_CHUNK_SIZE`   | 2000        | Elasticsearch index chunk size (how many documents to index at a time) |
| `ELASTICSEARCH_MAX_CHUNK_BYTES`   | 104857600 | The maximum size of the Elasticsearch request in bytes (default: 100MB) |
| `ELASTICSEARCH_THREAD_COUNT` | 4           | The size of the threadpool to use for Elasticsearch bulk requests |
| `ELASTICSEARCH_QUEUE_SIZE`   | 4           | The size of the task queue between the main thread (producing chunks to send) and the processing threads |
| `ELASTICSEARCH_VERIFY_CERTS` | True        | Verify Elasticsearch SSL certificates |
| `ELASTICSEARCH_USE_SSL`      | False       | Turn on SSL |
| `ELASTICSEARCH_SSL_SHOW_WARN`| False       | Show warnings about ssl certs verification |
| `ELASTICSEARCH_CA_CERTS`     |             | Path to CA certs on disk |
| `ELASTICSEARCH_CLIENT_CERT`  |             | PEM formatted SSL client certificate |
| `ELASTICSEARCH_CLIENT_KEY`   |             | PEM formatted SSL client key |
| `ELASTICSEARCH_AWS_REGION`   |             | Elasticsearch AWS Region for fully managed services |
| `ELASTICSEARCH_AWS_HOSTED`   | False       | Elasticsearch fully managed service |
| `ELASTICSEARCH_STREAMING_BULK`  | False       | Elasticsearch streaming bulk index |
| `ELASTICSEARCH_MAX_RETRIES`  | 0       | The maximum number of times a document will be retried when `429` is received|
| `ELASTICSEARCH_INITIAL_BACKOFF` | 2       | The number of seconds we should wait before the first retry |
| `ELASTICSEARCH_MAX_BACKOFF`  | 600       | The maximum number of seconds a retry will wait |
| `ELASTICSEARCH_RAISE_ON_EXCEPTION`  | True   | if ``False`` then don't propagate exceptions from call to elasticsearch |
| `ELASTICSEARCH_RAISE_ON_ERROR`  | True       | raise ``BulkIndexError`` containing errors (as `.errors`) from the execution of the last chunk when some occur |
| `ELASTICSEARCH_API_KEY_ID`  |       | Elasticsearch API Key ID |
| `ELASTICSEARCH_API_KEY`  |       | Elasticsearch API Key |
| `PG_HOST`                    | localhost   | Postgres database host |
| `PG_USER`                    |             | Postgres database username (superuser) |
| `PG_PORT`                    | 5432        | Postgres database port |
| `PG_PASSWORD`                |             | Postgres database user password |
| `PG_SSLMODE`                 |             | Postgres SSL TCP/IP connection mode ('disable', 'allow', 'prefer', 'require', 'verify-ca' or 'verify-full') |
| `PG_SSLROOTCERT`             |             | The name of a file containing SSL certificate authority (CA) certificate(s) |
| `REDIS_SCHEME`               | redis       | Redis connection scheme |
| `REDIS_HOST`                 | localhost   | Redis server host |
| `REDIS_PORT`                 | 6379        | Redis server port |
| `REDIS_DB`                   | 0           | Redis database |
| `REDIS_AUTH`                 |             | Redis password |
| `REDIS_CHUNK_SIZE`           | 1000        | Number of items to read from Redis at a time |
| `REDIS_SOCKET_TIMEOUT`       | 5           | Redis socket connection timeout |
| `REDIS_POLL_INTERVAL`        | 0.01        | Redis poll interval |
| `NEW_RELIC_ENVIRONMENT`      |             | New Relic environment name |
| `NEW_RELIC_APP_NAME`         |             | New Relic application name |
| `NEW_RELIC_LOG_LEVEL`        |             | Sets the level of detail of messages sent to the log file |
| `NEW_RELIC_LICENSE_KEY`      |             | New Relic license key |

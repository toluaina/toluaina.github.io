# Running PGSync

## Bootstrap

First, you need to bootstrap the database. This is a one-time operation that:

- Creates pgsync triggers
- Creates the logical replication slot

```bash
bootstrap --config /path/to/schema.json
```

## Running Modes

There are two modes of running PGSync:

- **Daemon mode** - runs continuously
- **Non-daemon mode** - runs a single pass and stops

=== "Daemon"

    ```bash
    pgsync --config /path/to/schema.json --daemon
    ```

=== "Non-daemon"

    ```bash
    pgsync --config /path/to/schema.json
    ```

!!! info
    You can also specify the schema config as an environment variable `SCHEMA` and omit it in the commands above. The next section describes how to provide connection parameters via environment variables.
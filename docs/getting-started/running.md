First, you need to bootstrap the database.

This is a one-time operation that:

 - Creates pgsync triggers
 - Creates the logical replication slot

  ```
  bootstrap --config /path/to/schema.json
  ```

There are two modes of running PGSync

 - Daemon mode (runs continuously forever)
 - Non-daemon mode (runs a single pass and stops)

=== "Daemon"

    ```
    pgsync --config /optional/path/to/schema.json --daemon
    ```

=== "Non-daemon"

    ```
    pgsync --config /optional/path/to/schema.json
    ```

!!! info
    You can also specify the schema config as an environment variable **SCHEMA** and omit it in the command(s) above.
    The next section describes how to provide connection parameters via environment variables.
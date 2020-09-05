First, you need to bootstrap the database.

This is a one-time operation that:

 - Creates pgsync triggers
 - Creates the logical replication slot

  ```
  bootstrap --config /path/to/schema.json
  ```

There are two modes of running PGSync

 - daemon mode (runs continuously forever)
 - non-daemon mode (runs a single pass and stops)

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
    The next section describes how to specify connection parameters via environment variables.
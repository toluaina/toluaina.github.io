PGSync supports the following command arguments 


| **Command argument**     | **short form** | **Description**                  |
| ---------------------------- | ----------- | -------------------------------- |
| `--config`                     |    `-c`         | Path to the application schema config |
| `--daemon`                     |    `-d`         | Flag to run pgsync as a daemon. Omit this to run in a single pass |
| `--verbose`                     |    `-v`         | Turn on verbosity |
| `--host`                     |    `-h`         | PG_HOST override |
| `--password`                     |            | Prompt for database password |
| `--port`                     |    `-p`          | Prompt for database password |
| `--user`                     |    `-u`          | PG_USER override |
| `--version`                     |            | Show version info |
| `--analyze`                     |    `-a`          | Analyse database |
| `--nthreads_polldb`                     |    `-n`          | Number of threads to spawn for poll db |
| `--sslrootcert`                     |            | PG_SSLROOTCERT override |
| `--sslmode`                     |            | PG_SSLMODE override ("allow", "disable", "prefer", "require", "verify-ca" or "verify-full") |
| `--polling`                     |            | Use polling mode |
| `--bootstrap`                     |    `-b`         | First bootstrap before running pgsync process |
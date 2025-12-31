# Setup

=== ":simple-postgresql: Self Hosted"

    **1. Ensure database user is a superuser** (required to query replication slots):

    ```sql
    SELECT usename FROM pg_user WHERE usesuper = true
    ```

    **2. Enable logical decoding** in [postgres.conf](https://www.postgresql.org/docs/current/config-setting.html):

    ```ini
    wal_level = logical
    ```

    **3. Configure replication slots** in [postgres.conf](https://www.postgresql.org/docs/current/config-setting.html):

    ```ini
    max_replication_slots = 1
    ```

    !!! tip "Restart Required"
        After changing `postgres.conf`, restart PostgreSQL for changes to take effect.

=== ":material-aws: AWS RDS/Aurora"

    **1. Grant superuser privileges:**

    ```sql
    GRANT rds_superuser TO <username>
    ```

    **2. Enable logical replication** via parameter groups. See [AWS documentation](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraPostgreSQL.Replication.Logical.html).

!!! warning "Prevent Log Growth"
    On cloud infrastructure, replication slots can cause WAL logs to grow indefinitely. Set a ceiling using [max_slot_wal_keep_size](https://www.postgresql.org/docs/13/runtime-config-replication.html):

    ```ini
    max_slot_wal_keep_size = 100GB
    ```

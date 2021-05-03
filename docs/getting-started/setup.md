# Setup

=== "Non-AWS"
    - Ensure Postgres database user is a superuser (this is required to query replication slots)
      ```
       SELECT usename FROM pg_user WHERE usesuper = true
      ```
    - Enable logical decoding in [postgres.conf](https://www.postgresql.org/docs/current/config-setting.html)

      ```
      wal_level = logical
      ```

    - Ensure there is at least one replication slot defined in [postgres.conf](https://www.postgresql.org/docs/current/config-setting.html)
      ```
      max_replication_slots = 1
      ```

=== "AWS"
    - Ensure Postgres database user is a superuser
    ```
    GRANT rds_superuser TO <username>
    ```
    - Enable **logical_replication** by using the parameter group settings described [here](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraPostgreSQL.Replication.Logical.html)

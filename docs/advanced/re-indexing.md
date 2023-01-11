Re-indexing involves:

- Deleting the Elasticsearch/OpenSearch index
  ```
  curl -X DELETE <protocol>://<hostname>:<port>/<index>
  ```
- Deleting the checkpoint file.
  This is a hidden file which is a concatenation of the database name and the index name
  ```
  rm .<database name>_<index name>
  ```
- Then re-run pgsync
  ```
  pgsync -c /path/to/schema.json
  ```

!!! info
    If any new tables were added or removed from the schema, you should re-run `bootstrap` first.
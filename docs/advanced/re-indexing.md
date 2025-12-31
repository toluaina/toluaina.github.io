# Re-indexing

Re-indexing rebuilds your Elasticsearch/OpenSearch index from scratch. Follow these steps:

**1. Delete the Elasticsearch/OpenSearch index:**

```bash
curl -X DELETE <protocol>://<hostname>:<port>/<index>
```

**2. Delete the checkpoint file:**

The checkpoint is a hidden file named as a concatenation of the database name and index name:

```bash
rm .<database_name>_<index_name>
```

**3. Re-run PGSync:**

```bash
pgsync -c /path/to/schema.json
```

!!! info
    If any tables were added or removed from the schema, run `bootstrap` first before re-indexing.
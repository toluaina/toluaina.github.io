# Multiple Schemas in a Single Config

You can declare multiple schemas in the same config file to sync multiple tables into different Elasticsearch/OpenSearch indices.

```JSON
[
    {
        "database": "book",
        "index": "book_index",
        "nodes": {
            "table": "book"
        }
    },
    {
        "database": "book",
        "index": "author_index",
        "nodes": {
            "table": "author"
        }
    }
]
```

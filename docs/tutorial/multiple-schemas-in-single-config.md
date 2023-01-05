We can declare multiple schemas in the same config. 
This can be useful for syncing multiple tables into different Elasticsearch/Opensearch indices.

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

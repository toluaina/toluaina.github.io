We can declare multiple schemas in the same config. 
This can be useful for syncing multiple tables into different Elasticsearch indices.

```JSON
[
    {
        "database": "book",
        "index": "book_index",
        "node": {
            "table": "book"
        }
    },
    {
        "database": "book",
        "index": "author_index",
        "node": {
            "table": "author"
        }
    }
]
```

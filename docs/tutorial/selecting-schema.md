# Selecting Schema

Postgres supports having multiple schemas in the same database. You can select an alternative schema using the node `schema` attribute.

The default schema is the `public` schema.


```JSON
[
    {
        "database": "book",
        "index": "book",
        "nodes": {
            "table": "book",
            "schema": "my_book_library",
            "columns": [
                "isbn",
                "title"
            ]
        }
    }
]
```

Transform nodes allow you to change the output of the document type

### `rename`

We can simply define this [JSON](https://jsonapi.org) schema.

```JSON
[
    {
        "database": "book",
        "index": "book",
        "nodes": {
            "table": "book",
            "columns": [
                "isbn",
                "title"
            ],
            "transform": {
                "rename": {
                    "isbn": "book_isbn",
                    "title": "book_title"
                }
            }
        }
    }
]
```

To get this document structure in [Elasticsearch](https://www.elastic.co/products/elastic-stack)

```JSON
[
    {
        "book_isbn": "9785811243570",
        "book_title": "Charlie and the chocolate factory"
    },
    {
        "book_isbn": "9788374950978",
        "book_title": "Kafka on the Shore"
    },
    {
        "book_isbn": "9781471331435",
        "book_title": "1984"
    }
]
```

### `mapping`

You can specify the data type for an Elasticsearch field in the schema.

You can find the list of supported data types [here](https://www.elastic.co/guide/en/elasticsearch/reference/current/sql-data-types.html)

```JSON
[
    {
        "database": "book",
        "index": "book",
        "node": {
            "table": "book",
            "columns": [
                "isbn",
                "title"
            ],
            "transform": {
                "mapping": {
                    "isbn": "long",
                    "title": "keyword"
                }
            }
        }
    }
]
```

### `concat`

You can concatenate multiple columns into a single field with an optional delimiter.

```JSON
[
    {
        "database": "book",
        "index": "book",
        "node": {
            "table": "book",
            "columns": [
                "title",
                "firstname",
                "lastname"
            ],
            "transform": {
                "concat": {
                    "columns": ["title", "firstname", "lastname"],
                    "destination": "fullname",
                    "delimiter": "-"
                }
            }
        }
    }
]
```

# Transform Nodes

Transform nodes allow you to change the output of the document type.

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

To get this document structure in [Elasticsearch](https://www.elastic.co/products/elastic-stack)/[OpenSearch](https://opensearch.org/)

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

You can specify the data type for an Elasticsearch/OpenSearch field in the schema.

You can find the list of supported data types [here](https://www.elastic.co/guide/en/elasticsearch/reference/current/sql-data-types.html)

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
                "mapping": {
                    "id": {
                        "type": "long"
                    },
                    "isbn": {
                        "type": "long"
                    },
                    "title": {
                        "type": "keyword"
                    }
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
        "nodes": {
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

### `replace`

The replace transform allows you to find and replace substrings within field values. It supports:

- **Simple string replacements**: Replace a single substring with another
- **Multiple replacements per field**: Apply several replacements to the same field
- **Nested fields**: Target fields within nested objects
- **Lists of strings**: Automatically applies replacements to each item in a list

```JSON
[
    {
        "database": "book",
        "index": "book",
        "nodes": {
            "table": "book",
            "columns": [
                "code",
                "publisher"
            ],
            "transform": {
                "replace": {
                    "code": {
                        "-": "=",
                        "_": " "
                    },
                    "publisher": {
                        "name": {
                            "Inc.": "Incorporated"
                        }
                    }
                },
                "rename": {
                    "code": "product_code"
                }
            }
        }
    }
]
```

!!! note "Transform Order"
    Transforms are applied in the following order: **replace → rename → concat**. This ensures you can use original field names in your replace config before they get renamed.

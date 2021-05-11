Schema definition file

```JSON
[
    {
        "database": "<Postgres database name>",
        "index": "<Elasticsearch index name>",
        "setting": "<Elasticsearch setting>",
        "plugins": ["<Plugin A>", "<Plugin B>"...],
        "pipeline": "<pipeline>",
        "routing": "<routing>",
        "nodes": {
            "table": "<root table name>",
            "schema": "<schema name>",
            "columns": [
                "<column 1>",
                "<column 2>",
                ...
            ],
            "children": [
                {
                    "table": "<child table name>",
                    "columns": [
                        "<column 1>",
                        "<column 2>",
                        ...
                    ],
                    "label": "<document label name>",
                    "relationship": {
                        "variant": "object" | "scalar",
                        "type": "one_to_one" | "one_to_many",
                        "through_tables": [
                            "<through table name>"
                        ]
                    },
                    "children": [],
                    "transform": {
                        "rename": {
                            "<old column 1>": "<new column 1>",
                            "<old column 2>": "<new column 2>",
                            ...
                        },
                        "mapping": {
                            "<new column 1>": {"<data type>"},
                            "<new column 2>": {"<data type>"},
                            ...
                        },
                        "concat": {
                            "columns": ["column 1", "column 2" ...],
                            "destination": "<new column 1>",
                            "delimiter": "<char>"
                        }
                    }
                },
                ...
            ]
        }
    }
]
```


## Document and node structure:

### `database`
This is the database name

### `index`
An optional Elasticsearch index (defaults to database name)

### `nodes`
An object node describing the Elasticsearch document

### `setting`
Elasticsearch setting configuration
    ```JSON
    {
        "setting": {
            "analysis": {
                "analyzer": {
                    "ngram_analyzer": {
                        "filter": [
                            "lowercase"
                        ],
                        "type": "custom",
                        "tokenizer": "ngram_tokenizer"
                    }
                },
                "tokenizer": {
                    "ngram_tokenizer": {
                        "token_chars": [
                            "letter",
                            "digit",
                            "punctuation",
                            "symbol"
                        ],
                        "min_gram": "9",
                        "type": "nGram",
                        "max_gram": "10"
                    }
                }
            }
        }
    }
    ```

### `table`
Node table name

### `schema`
An optional Postgres table schema (defaults to public)

### `label`
An optional node name in Elasticsearch (defaults to table name)

### `columns`
An optional list of columns to display. This can be omitted in which case it selects all
columns.

### `children`
An optional list of child nodes if any.
This has the same structure as a parent node.

### `relationship`
Describes the relationship between parent and child.

- #### `variant`
variant can be `object` or `scalar`

    - #### `object`

        ```JSON
        {
            "name": "Oxford Press",
            "id": 1,
            "is_active": false
        }
        ```

    - #### `scalar`

        ```JSON
        ["Haruki Murakami", "Philip Gabriel"]
        ```

- #### `type`
type can be `one_to_one` or `one_to_many` depending on the relationship type between 
parent and child

- #### `through_tables`
This is the intermediate table that connects the parent to the child


### `transform`

This allows transforming some node properties.
For now, the only operation supported is the `rename` transform.

- #### `rename`
rename a node column

    ```JSON
        "rename": {
            "<old column name 1>": "<new column name 1>",
            "<old column name 2>": "<new column name 2>",
        }
    ```

- #### `mapping`
Specify Elasticsearch mapping

    ```JSON
        "mapping": {
             "book_id": {
                "type": "long"
            },
            "book_isbn": {
                "type": "long",
                "fields":{
                    "ngram": {
                        "type": "text",
                        "analyzer": "ngram_analyzer",
                        "search_analyzer": "ngram_analyzer",
                        "fielddata": true
                    }
                }
            }
        }
    ```

### `pipeline`
Optional injest [pipeline](https://www.elastic.co/guide/en/elasticsearch/reference/current/ingest.html)


### `routing`
Optional [routing](https://www.elastic.co/guide/en/elasticsearch/reference/current/mapping-routing-field.html) field


!!! info
    Changing the schema effectively changes the structure of the document in Elasticsearch 
    and this requires re-indexing Elasticsearch.

    See the advanced section on re-indexing on how-to.
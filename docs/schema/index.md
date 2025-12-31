# :material-file-code: Schema Definition

The schema file defines how to map your database tables to Elasticsearch/OpenSearch documents.

## Basic Example

```json
[
  {
    "database": "mydb",
    "index": "books",
    "nodes": {
      "table": "book",
      "columns": ["isbn", "title"],
      "children": [
        {
          "table": "author",
          "columns": ["name"]
        }
      ]
    }
  }
]
```

??? abstract "Full Schema Reference"
    ```json
    [
      {
        "database": "<database name>",
        "index": "<index name>",
        "setting": { },
        "plugins": ["<Plugin A>", "<Plugin B>"],
        "pipeline": "<pipeline>",
        "routing": "<routing>",
        "nodes": {
          "table": "<table name>",
          "schema": "<schema name>",
          "columns": ["<column 1>", "<column 2>"],
          "label": "<label>",
          "children": [
            {
              "table": "<child table>",
              "columns": ["<column>"],
              "label": "<label>",
              "relationship": {
                "variant": "object | scalar",
                "type": "one_to_one | one_to_many",
                "through_tables": ["<junction table>"]
              },
              "transform": {
                "rename": { },
                "mapping": { },
                "concat": { }
              }
            }
          ]
        }
      }
    ]
    ```

---

## Root Properties

| Property | Required | Description |
|----------|----------|-------------|
| `database` | Yes | Database name |
| `index` | No | Elasticsearch/OpenSearch index name (defaults to database name) |
| `nodes` | Yes | Root node defining the document structure |
| `plugins` | No | List of plugins to apply |
| `pipeline` | No | Elasticsearch [ingest pipeline](https://www.elastic.co/guide/en/elasticsearch/reference/current/ingest.html) |
| `routing` | No | Elasticsearch [routing field](https://www.elastic.co/guide/en/elasticsearch/reference/current/mapping-routing-field.html) |
| `setting` | No | Elasticsearch index settings |

??? example "Index Settings"
    ```json
    {
      "setting": {
        "analysis": {
          "analyzer": {
            "ngram_analyzer": {
              "filter": ["lowercase"],
              "type": "custom",
              "tokenizer": "ngram_tokenizer"
            }
          },
          "tokenizer": {
            "ngram_tokenizer": {
              "token_chars": ["letter", "digit"],
              "min_gram": "2",
              "max_gram": "10",
              "type": "ngram"
            }
          }
        }
      }
    }
    ```

---

## Node Properties

| Property | Required | Description |
|----------|----------|-------------|
| `table` | Yes | Database table name |
| `schema` | No | Database schema (defaults to `public`) |
| `columns` | No | Columns to include (defaults to all) |
| `label` | No | Field name in output document (defaults to table name) |
| `children` | No | Child nodes (nested documents) |
| `transform` | No | Transform operations |
| `relationship` | No | Relationship configuration (for child nodes) |

---

## Relationship

Defines how parent and child nodes are related.

| Property | Values | Description |
|----------|--------|-------------|
| `variant` | `object`, `scalar` | Output format |
| `type` | `one_to_one`, `one_to_many` | Relationship cardinality |
| `through_tables` | `["table_name"]` | Junction tables for many-to-many |

### Variant Examples

=== "object"
    Returns the full object:
    ```json
    {
      "author": {
        "id": 1,
        "name": "George Orwell"
      }
    }
    ```

=== "scalar"
    Returns only the value(s):
    ```json
    {
      "author": ["George Orwell", "Aldous Huxley"]
    }
    ```

---

## Transform

Transform operations modify the output document.

### `rename`

Rename columns in the output:

```json
"transform": {
  "rename": {
    "isbn": "book_isbn",
    "title": "book_title"
  }
}
```

### `mapping`

Specify Elasticsearch field mappings:

```json
"transform": {
  "mapping": {
    "isbn": { "type": "keyword" },
    "title": { "type": "text" },
    "price": { "type": "float" }
  }
}
```

### `concat`

Concatenate columns into a new field:

```json
"transform": {
  "concat": {
    "columns": ["first_name", "last_name"],
    "destination": "full_name",
    "delimiter": " "
  }
}
```

---

!!! warning "Re-indexing Required"
    Changing the schema changes the document structure. You must [re-index](../advanced/re-indexing.md) after schema changes.

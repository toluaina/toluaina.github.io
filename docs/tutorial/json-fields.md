# JSON Fields

PGSync supports Postgres JSON and JSONB operators.
This allows you to extract data within JSON fields.

These operators are defined [here](https://www.postgresql.org/docs/current/functions-json.html)

For example, given a Postgres JSON field called `doc`

```JSON
{
    "a": {
        "b": {
            "c": [0, 1, 2, 3, 4]
        }
    },
    "x": [
        {
            "y": 0,
            "z": 5
        },
        {
            "y": 1,
            "z": 6
        }
    ]
}
```


To extract the fourth element of the `{a, b, c}` path, define this schema

```JSON
[
    {
        "database": "book",
        "index": "book",
        "nodes": {
            "table": "book",
            "schema": "my_book_library",
            "columns": [
                "doc#>{a,b,c}->4"
            ]
        }
    }
]
```


We can define this JSON schema, to get the first array element of field `x`.

```JSON
[
    {
        "database": "book",
        "index": "book",
        "nodes": {
            "table": "book",
            "schema": "my_book_library",
            "columns": [
                "doc->x->0"
            ]
        }
    }
]
```

!!! info
    `doc` is the field name in the database

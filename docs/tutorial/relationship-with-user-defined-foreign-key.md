# Relationship with User-Defined Foreign Key

You can specify the relationship foreign key as a property on the `relationship`.

```JSON
[
    {
        "database": "book",
        "index": "book",
        "nodes": {
            "table": "book",
            "children": [
                {
                    "table": "author",
                    "columns": [
                        "id",
                        "name"
                    ],
                    "relationship": {
                        "variant": "object",
                        "type": "one_to_one",
                        "foreign_key": {
                            "child": ["id"],
                            "parent": ["parent_id"]
                        }
                    },
                }
            ]
        }
    }
]
```

You can specify the relationship foreign keys explicitly as a `relationship` property.

```JSON
[
    {
        "database": "book",
        "index": "book",
        "nodes": [
            {
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
        ]
    }
]
```

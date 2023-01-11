Plugins allow you to alter a document right before indexing.

This can be useful for applying transformations to documents 
and offers greater flexibility.

Although this comes with some level of development.

Plugins are currently supported only in the Python Language.

For example, imagine you had a user profile database with `firstname` and 
`lastname` fields and generating the Elasticsearch/OpenSearch doc below.

```JSON
{
    "firstname": "feng",
    "lastname": "shui"
}
```

we can create a plugin to add a `fullname` field to the document 
right before indexing. 


Create a "plugins" directory and add it to your `PYTHONPATH`.

The `PYTHONPATH` should contain the path to the "plugins" directory excluding 
the "plugins" directory itself.

e.g:

`export PYTHONPATH=$PYTHONPATH:/path/to/myplugindir`

Make sure you have created an empty init module inside the "plugins" directory
i.e `plugins/__init__.py`


Create a plugin module - fullnameplugin.py inside the "plugins" directory and 
add the code below:

```
from pgsync import plugin


class FullnamePlugin(plugin.Plugin):
    name = 'Fullname'

    def transform(self, doc, **kwargs):

        firstname = doc['firstname'] 
        lastname = doc['lastname'] 
        doc['fullname'] = f'{firstname}{lastname}'

        return doc
```

Your plugins directory layout should look like this:

- `plugins/fullnameplugin.py`
- `plugins/__init__.py`


Then simply activate the plugin by adding it to the list of plugins in the schema.json


```JSON
[
    {
        "database": "users",
        "index": "users",
        "plugins": ["Fullname"],
        "nodes": {
            "table": "profile"
        }
    }
]
```


To get this document in Elasticsearch/OpenSearch

```JSON
{
    "firstname": "feng",
    "lastname": "shui",
    "fullname": "feng shui"
}
```


!!! info
    Plugin names are case sensitive
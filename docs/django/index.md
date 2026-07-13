# :material-language-python: Django integration

[django-pgsync](https://github.com/toluaina/django-pgsync) is the official
Django integration for PGSync. Declare search indexes from your Django
models — no hand-written schema JSON — and let PGSync keep
Elasticsearch/OpenSearch in sync with your database.

```bash
pip install django-pgsync            # includes pgsync
pip install "django-pgsync[celery]"  # with Celery beat support
```

Requires Python 3.10+, Django 4.2+ and PostgreSQL.

---

## Why not signals?

Signal-based indexers hook into the ORM, so anything that bypasses
`Model.save()` silently never reaches your index. django-pgsync uses
PGSync's change data capture, which watches the **database** instead:

| Write path | Signal-based indexers | django-pgsync |
|------------|:---------------------:|:-------------:|
| `instance.save()` / `delete()` | :material-check: | :material-check: |
| `queryset.update()` / `delete()` | :material-close: | :material-check: |
| `bulk_create()` / `bulk_update()` | :material-close: | :material-check: |
| Cascade deletes | :material-close: | :material-check: |
| Raw SQL / data migrations | :material-close: | :material-check: |
| Writes from other services | :material-close: | :material-check: |

---

## Quick start

### 1. Register the app

```python title="settings.py"
INSTALLED_APPS = [
    # ...
    "django_pgsync",
]

PGSYNC = {
    "MODE": "polling",  # "polling" (default) | "event" | "wal"
    "ELASTICSEARCH_URL": "http://localhost:9200",
}
```

Database credentials are read from `DATABASES["default"]` automatically.
Every other `PGSYNC` key is passed through to PGSync as an
[environment setting](../env-vars/index.md).

### 2. Declare an index

```python title="<app>/search_indexes.py"
from django_pgsync import PGSyncIndex, Nested
from .models import Author, Book, Publisher, Rating

class BookIndex(PGSyncIndex):
    model = Book
    index = "books"
    fields = ["isbn", "title", "description"]
    children = [
        Nested(Rating, fields=["value"], label="ratings"),      # one_to_many
        Nested(Publisher, fields=["name"], label="publisher"),  # one_to_one
        Nested(Author, fields=["name"], label="authors"),       # M2M through
    ]
```

Relationships are inferred from model metadata: foreign keys, one-to-one
fields, and many-to-many through tables. Each committed change lands in
the index as a denormalized nested document:

```json
{
  "isbn": "9780441172719",
  "title": "Dune",
  "description": "Politics, religion and giant sandworms.",
  "authors": [{"name": "Frank Herbert"}],
  "ratings": [{"value": 5}, {"value": 5}, {"value": 4}],
  "publisher": {"name": "Chilton Books"}
}
```

### 3. Bootstrap and run

```bash
python manage.py pgsync_schema      # inspect generated schema JSON
python manage.py pgsync_bootstrap   # one-time setup for the mode
python manage.py pgsync_pull        # one-shot sync, then exit
python manage.py pgsync_status      # verify rows == documents
python manage.py pgsync_daemon      # continuous sync (systemd etc.)
```

---

## Run modes

| Mode | How it works | Postgres requirements |
|------|--------------|-----------------------|
| `polling` (default) | Periodic forward pass | **None beyond read access** — works on read-only and managed clusters |
| `event` | Triggers + `pg_notify` + replication slot | `wal_level=logical`, slot rights, triggers |
| `wal` | Streams the logical replication slot | `wal_level=logical`, slot rights |

!!! tip "Why polling is the default"

    Polling needs no superuser-level database settings — ideal for hosted
    Postgres (RDS, Cloud SQL, Supabase) where you may not control
    `wal_level`. When you control the database, `wal` gives the lowest
    overhead real-time sync.

!!! warning "Root deletes in polling mode"

    Deleting a root row leaves a stale document in the index — there is
    no delete record to observe. Child-row deletes are fine since the
    parent document is rebuilt. If you hard-delete root rows, use
    `wal`/`event` mode or a soft-delete flag.

---

## Celery beat

Schedule periodic sync without a dedicated daemon process:

```python title="settings.py"
CELERY_BEAT_SCHEDULE = {
    "pgsync-pull": {
        "task": "django_pgsync.tasks.pgsync_pull",
        "schedule": 15.0,
    },
}
```

A cache lock prevents overlapping runs — ticks that fire while a pull is
still in flight simply skip, so short intervals are safe. With
[django-celery-beat](https://django-celery-beat.readthedocs.io/) the
schedule is editable in the Django admin.

---

## Learn more

- [django-pgsync on GitHub](https://github.com/toluaina/django-pgsync) —
  source, issues and a runnable
  [example project](https://github.com/toluaina/django-pgsync/tree/main/example)
- [django-pgsync on PyPI](https://pypi.org/project/django-pgsync/)
- [Schema definition](../schema/index.md) — the PGSync schema that
  `pgsync_schema` generates for you

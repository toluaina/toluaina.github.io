# Terminal Monitor

Use `--monitor` (or `-m`) to see the sync events in your terminal while PGSync runs. The monitor replaces the usual status line with a full-screen panel. The panel redraws up to 4 times each second. If no value changes, it redraws one time each second.

Press `?` in the monitor to see the help.

## Quick start

Install the optional `rich` dependency:

```bash
pip install 'pgsync[monitor]'
```

Run PGSync with `--monitor`:

=== "Trigger mode"

    ```bash
    pgsync --config schema.json --daemon --monitor
    ```

=== "WAL mode"

    ```bash
    pgsync --config schema.json --wal --monitor
    ```

<div class="monitor-screen" markdown>

```text
╭─ pgsync 8.0.0 ── ● healthy ── up 12m34s ── 14:32:08 ───────────────────────────────────────╮
│ PIPELINE  1 index                                                                          │
│ index  mode     xlog         db  redis  slot lag    sent  opensearch  checkpoint  age      │
│ ─────────────────────────────────────────────────────────────────────────────────────      │
│ book   trigger     0  1,204,883  312 ↑  1.2 MB ↓  98,412   1,204,611      884212   2s      │
│                                                                                            │
│ THROUGHPUT  last 30s                                                                       │
│ events  ▅▇▄▆▇█▃▃▇▅▇▅▄▇▇▇▇▆▄▅▄▇▆▃▃▄▃▅▃▇  842/s  peak 894  last event  0s ago                │
│ docs    ▇▇▄▅▆▆▇▇▅▆▇▇▅▅▆▇▆▅█▇▃▇▄▃▃▃▅▄▄▇  611/s  peak 693  errors      0                     │
│                                                                                            │
│ BY TABLE  4 tables                                                                         │
│ table               INSERT  UPDATE  DELETE  TRUNCATE                                       │
│ ────────────────────────────────────────────────────                                       │
│ public.book          4,102  12,880     211         0                                       │
│ public.author          380   1,044       9         0                                       │
│ public.book_author     912       0     140         0                                       │
│ public.publisher        12      88       0         0                                       │
│                                                                                            │
│ MESSAGES                                                                                   │
│ 14:31:27  WARNING  opensearch: POST http://localhost:9200/_bulk [status:429]  ×14          │
│                                                                                            │
│ LIVE EVENTS                                                                                │
│ 14:32:07.912  UPDATE    public.book         id=48121                    xmin=884212  title │
│ 14:32:07.905  INSERT    public.book_author  book_id=3150 author_id=679  xmin=884212        │
│ 14:32:07.871  DELETE    public.book         id=11007                    xmin=884210        │
│ 14:32:07.840  UPDATE    public.author       id=553                      xmin=884209  name  │
│ 14:32:07.802  INSERT    public.book         id=48990                    xmin=884208        │
│ 14:32:07.744  INSERT    public.audit_log    id=7781                     xmin=884206  skip… │
╰─ q quit · p pause · f filter · d details · ? help ─────────────────────────────────────────╯
```

</div>

In a color terminal, each operation has a color: INSERT is green, UPDATE is yellow, DELETE is red, and TRUNCATE is magenta.

!!! warning "Use an interactive terminal"
    Do not use `--monitor` in Docker, systemd, or with output to a file. The monitor needs an interactive terminal. Use the usual status line in these environments.

## Supported modes

| Mode | Supported | Note |
|------|-----------|------|
| `--daemon` (trigger mode) | Yes | |
| `--daemon --consumer` | Yes | |
| `--daemon --producer` | Yes | The event list stays empty. The consumer process shows the events. |
| `--wal` | Yes | |
| `--polling` | No | |
| MySQL / MariaDB | No | PGSync always uses polling mode for MySQL and MariaDB. |
| `--analyze` | No | |

If you use `--monitor` in a mode that is not supported, PGSync stops with a usage error. PGSync also stops with a usage error in these conditions:

- `rich` is not installed.
- The output is not an interactive terminal.

## Header

The header shows the PGSync version, the health, the time since start (`up`), and the clock. The health is one of these values:

| Health | Color | Condition |
|--------|-------|-----------|
| `errors` | Red | PGSync logged an error in the last 60 seconds. |
| `checkpoint stale` | Yellow | Events arrive, but the checkpoint has not changed for more than 60 seconds. |
| `slot lag` | Yellow | The replication slot is 100 MB or more behind. |
| `backlog` | Yellow | The Redis queue has 1,000 events or more. |
| `healthy` | Green | None of the conditions above is true. |

If more than one condition is true, the header shows the first value in the table.

## Sections

| Section | Content |
|---------|---------|
| **Pipeline** | One row for each index in the schema config. See [Pipeline columns](#pipeline-columns). |
| **Progress** | The initial sync and the catch-up. This section shows only while one of them runs. See [Progress](#progress). |
| **Throughput** | Events each second and documents each second for the last 30 seconds, with the highest value (`peak`). Also the time since the last event, and the number of errors. In a narrow terminal, the history is shorter, and the heading shows the number of seconds. |
| **By table** | The number of `INSERT`, `UPDATE`, `DELETE`, and `TRUNCATE` events for each table. The busiest table is at the top. If there are too many tables, the last row shows the number of the other tables, for example `… 31 more tables`. |
| **Messages** | The last 4 different warnings and errors. If a message repeats, it moves to the top and shows a count, for example `×14`. This section shows only when there is a message. |
| **Live events** | The most recent change events. The newest event is at the top. The list fills the free rows of the terminal. Press `f` to show the events of one table. The heading shows the selected table and `paused`. |

The **errors** count includes each log record at level `ERROR` or `CRITICAL`.

### Pipeline columns

If a column has no value for all the indices, the monitor does not show the column. For example, in WAL mode without Redis, the `db` and `redis` columns do not show.

| Column | Meaning |
|--------|---------|
| `index` | The index. If the database has a different name, the column shows `database:index`. |
| `mode` | `WAL`, `trigger`, `trigger producer`, or `trigger consumer`. |
| `xlog` | The number of change events that PGSync read from the replication slot. |
| `db` | The number of trigger notifications that PGSync received from the database. This column shows only in trigger mode. |
| `redis` | The number of events in the Redis queue. PGSync reads this value one time each second. The value is yellow at 1,000 events or more, and red at 10,000 events or more. |
| `slot lag` | The bytes of WAL that the replication slot has not confirmed. PGSync reads this value one time each 5 seconds. The value is yellow at 100 MB or more, and red at 1 GB or more. The value is `-` if PGSync cannot read it (for example, on a standby). |
| `sent` | The number of documents that PGSync sent to the search engine since start. |
| `opensearch` or `elasticsearch` | The number of documents in the index. PGSync reads this value one time each 10 seconds. The column name is the name of the engine. If the indices use different engines, the column name is `indexed`. |
| `checkpoint` | The last checkpoint (a transaction ID). The value is `-` if there is no checkpoint. |
| `age` | The time since the checkpoint last changed. The value is red if events arrive, but the checkpoint has not changed for more than 60 seconds. |

An arrow follows the `redis` and `slot lag` values:

| Arrow | Meaning |
|-------|---------|
| `↑` (yellow) | The value increases. For `redis`, the monitor compares the value with the value 5 seconds before. For `slot lag`, the monitor compares the last 2 values. |
| `↓` (green) | The value decreases. |
| No arrow | The value does not change, or there are not sufficient values. |

### Live events

Each row in **Live events** shows these items:

- The time of the event, in milliseconds.
- The operation and the table, as `schema.table`.
- The primary key values. PGSync gets the primary key columns from the schema tree. If PGSync cannot find them, it shows the first column of the row.
- The transaction ID (`xmin`). Events that PGSync reads from the replication slot at startup, or in WAL mode, do not have this value.
- The changed columns. This item shows only for an `UPDATE` event that has the old row values. In WAL mode, the old row has only the replica identity columns. Thus, the changed columns show only if the table has `REPLICA IDENTITY FULL`.
- The word `skipped`, in dim text, if the table is not in the schema (for example, a table that has a trigger but no node). PGSync does not sync these events.

## Progress

The **Progress** section shows two types of rows:

```text
PROGRESS
initial sync  book  ━━━━━━━━━━━━━━━━━━━━━━━━  27.1%  81,428 / ~300,011  11,250/s  eta 19s
catch-up      book  ━━━━━━━━━━━━━━━━━━━━━━━━  24.0%  1,200 / 5,000
```

- **initial sync:** PGSync reads all the rows of the root table, because there is no checkpoint. The row shows the documents sent, the estimated total, the rate, and the estimated time to the end (`eta`). The total comes from the Postgres planner estimate (`pg_class.reltuples`), so it is approximate (`~`). The percentage stays below 100% until the scan ends. If there is no estimate (for example, before the first `ANALYZE`), the row shows only the count and the rate. When the scan ends, the row shows `done` and the total time for 10 seconds.
- **catch-up:** PGSync reads the changes that occurred while it was stopped. The row disappears 5 seconds after the last update.

## Event details

Press `d` to see all the columns of the newest event. If you selected a table with `f`, the view shows the newest event of that table. The view is a snapshot: new events do not change it. Press `d` again for a new snapshot of the newest event.

```text
EVENT DETAILS  d or esc to close
14:32:07.912  UPDATE  public.book  id=48121  xmin=884212
column  old       new
───────────────────────
id      48121     48121
title   'Dune'    'Dune (2nd ed)'
price   9.99      12.5
```

- For an `UPDATE`, the view shows the old and the new values. A changed column has a yellow name, a red old value, and a green new value.
- For an `INSERT`, the view shows the new values. For a `DELETE`, the view shows the old values.
- If the terminal is too short, the last row shows the number of the other columns, for example `… 12 more columns`.
- In trigger mode, the trigger sends only the primary key and foreign key columns. Thus, the view shows only these columns, and a note shows below the table. To see all the columns, use WAL mode.

## Keys

| Key | Action |
|-----|--------|
| ++q++ | Stop PGSync. This key does the same thing as ++ctrl+c++. |
| ++p++ | Pause the event list, or start it again. The counters continue while the list is paused. |
| ++f++ | Show the events of one table. Each press selects the next table, from the busiest table to the quietest. After the last table, the list shows all tables again. |
| ++d++ | Show the details of the newest event, or close the details. See [Event details](#event-details). |
| ++"?"++ | Show the help, or close it. The help shows the keys, the health values, the column meanings, and the operation colors. |
| ++esc++ | Close the details or the help, and show the event list. |

When the details or the help show, the **By table** and **Live events** sections do not show.

## Stop

Press ++q++ or ++ctrl+c++ to stop PGSync. PGSync stops immediately, also while it waits for a slow query or for a lock in the database:

- PGSync cancels the running query on the server. Then it closes the monitor and prints `Aborted!`.
- In `--daemon` mode, PGSync does not wait for its worker threads.
- In `--wal` mode with more than one entry in the schema config, a running query can delay the stop until the query ends.

This behavior is the same with and without `--monitor`.

## Colors

Set `MONITOR_THEME` to select a color theme:

| Theme | Use |
|-------|-----|
| `default` | Bright colors for a dark terminal background. |
| `light` | Darker colors for a light terminal background. |
| `classic` | The 16 terminal colors. Your terminal theme decides how they look. |
| `mono` | No color. The monitor uses only bold and dim text. |

The `default` and `light` themes use exact colors (hex values), so they look the same in all terminals. If your terminal cannot show these colors, the monitor uses the nearest color that the terminal can show.

Set `MONITOR_COLORS` to change single colors. Write a comma-separated list of `role=style` items:

```bash
MONITOR_THEME=light MONITOR_COLORS="border=magenta,insert=bold #00ff00" \
  pgsync --config schema.json --daemon --monitor
```

A style is a [rich style](https://rich.readthedocs.io/en/stable/style.html), for example `red`, `bright_cyan`, `#ff8800`, or `bold #ff8800`. An empty style removes the color. These are the roles:

| Role | Where the monitor uses it |
|------|---------------------------|
| `border` | The panel border. |
| `accent` | The Redis queue, the events sparkline, and the progress bars. |
| `docs` | The documents sparkline and the `sent` column. |
| `ok` | `healthy`, a decreasing value (`↓`), `done`, and a new value in the details. |
| `warn` | A warning, an increasing value (`↑`), and a changed column in the details. |
| `alert` | An error, and an old value in the details. |
| `track` | The empty part of a progress bar. |
| `insert`, `update`, `delete`, `truncate` | The operation names. |

If the theme, a role, or a style is not valid, PGSync stops with a usage error. If the `NO_COLOR` environment variable is set, the monitor shows no color.

## Notes

- **Logs:** while the monitor is on, PGSync removes the console log handlers. Log records at `WARNING` and above go to the **Messages** section. Log handlers that write to a file do not change. When the monitor stops, PGSync puts the console log handlers back.
- **Console output:** while the monitor is on, PGSync discards the text that it writes to stdout, for example the schema tree, the status line, and the elapsed time. The monitor shows the same information. Text written to stderr goes to the **Messages** section.
- **Errors:** if PGSync stops because of an error, the monitor closes first. Then the error prints in the terminal.
- **Many schemas:** if the schema config has more than one entry, the **Pipeline** section has one row for each entry. The other sections show the events of all entries together.
- **Separate processes:** if you run the producer and the consumer as separate processes, each process shows its own monitor.
- **Terminal size:** the event list uses all the free rows of the terminal. Make the terminal taller to see more events. The monitor keeps the last 200 events. If the terminal is very short, the event list shows 1 event.
- **Narrow terminal:** if a row of the event list is too long, the monitor cuts the changed columns first, and then the table name and the primary key. A cut value ends with `…`. The time, the operation, and `xmin` always show in full. The throughput history and the progress bars also become shorter. The monitor works best with 80 columns or more.
- **Network reads:** a separate thread reads the Redis queue, the slot lag, and the index count. A slow server does not stop the screen.
- **Slot lag:** the slot lag compares the slot to the current WAL position of the whole Postgres server. Writes to other databases on the same server also add to the lag, until PGSync confirms its next transaction.

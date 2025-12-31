# :material-console: Command Arguments

## Usage

```bash
pgsync [OPTIONS]
```

---

## Core

| Argument | Short | Description |
|----------|-------|-------------|
| `--config` | `-c` | Path to the schema config file |
| `--daemon` | `-d` | Run continuously (omit for single pass) |
| `--bootstrap` | `-b` | Bootstrap database before syncing |
| `--verbose` | `-v` | Enable verbose output |
| `--version` | | Show version info |

---

## Database Connection

| Argument | Short | Description |
|----------|-------|-------------|
| `--host` | `-h` | Override `PG_HOST` |
| `--port` | `-p` | Override `PG_PORT` |
| `--user` | `-u` | Override `PG_USER` |
| `--password` | | Prompt for database password |

### SSL

| Argument | Description |
|----------|-------------|
| `--sslmode` | SSL mode: `disable`, `allow`, `prefer`, `require`, `verify-ca`, `verify-full` |
| `--sslrootcert` | Override `PG_SSLROOTCERT` |

---

## Modes

| Argument | Short | Description |
|----------|-------|-------------|
| `--polling` | | Use polling mode instead of logical replication |
| `--wal` | `-w` | WAL consumer mode (no Redis required) |
| `--nthreads_polldb` | `-n` | Number of threads for polling |
| `--analyze` | `-a` | Analyze database schema |

---

## Examples

**First-time setup:**
```bash
pgsync --config schema.json --bootstrap
```

**Run as daemon:**
```bash
pgsync -c schema.json --daemon
```

**Single sync pass:**
```bash
pgsync -c schema.json
```

**With database credentials:**
```bash
pgsync -c schema.json -h localhost -u postgres --password -d
```

**Polling mode with threads:**
```bash
pgsync -c schema.json --polling -n 4 -d
```

**WAL consumer mode:**
```bash
pgsync -c schema.json --wal -d
```

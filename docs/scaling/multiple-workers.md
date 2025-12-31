# Multiple Workers

Increase throughput by running one or more consumers for the same target schema.

## How It Works

**1. Run a single producer process:**

```bash
pgsync -c schema.json --producer
```

**2. Run one or more consumer processes** (each in a separate process or machine):

```bash
pgsync -c schema.json --consumer
pgsync -c schema.json --consumer
pgsync -c schema.json --consumer
```

This setup allows multiple consumers to work in parallel, improving overall throughput.

## Increasing Worker Threads

You can also increase the number of workers used for handling requests:

```bash
pgsync -c schema.json -n 4
pgsync -c schema.json --consumer -n 6
```

!!! info
    The `-n` argument does not apply in producer-only mode (`pgsync -c schema.json --producer`).

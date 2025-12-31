# Parallel Sync

Parallel Sync significantly improves sync speed by utilizing multiple CPUs/threads. It is particularly useful in environments with high network latency, where PostgreSQL, Elasticsearch/OpenSearch, and PGSync servers run on different networks.

## Why Use Parallel Sync?

In distributed setups, slow request/response times during database queries can limit sync performance. Even with server-side cursors, delays in fetching the next batch of records can bottleneck the process.

Parallel Sync addresses this by running an initial high-speed, parallel sync to populate Elasticsearch/OpenSearch in one iteration. After this, a regular PGSync process can continue to run as a daemon for ongoing sync.

## How It Works

PGSync leverages PostgreSQL's internal `ctid` system column, which uniquely identifies rows based on their position in a table (page and row number).

- The sync process paginates records using `ctid`, distributing work evenly across available CPUs/threads
- Each worker thread processes a "chunk" of data in parallel, using efficient filtered queries based on page and row numbers
- Bulk inserts to Elasticsearch/OpenSearch are executed concurrently, maximizing throughput

## Execution Modes

Parallel Sync supports multiple execution modes to match your system's architecture and performance needs.

```bash
parallel_sync -c schema.json -m multiprocess
```

**Available Modes:**

| Mode | Description |
|------|-------------|
| `synchronous` | Runs in single-threaded, sequential mode (baseline behavior) |
| `multithreaded` | Uses multiple threads within a single process for parallel sync |
| `multiprocess` | Spawns multiple processes to perform sync in parallel |
| `multithreaded_async` | Combines multithreading with asynchronous I/O for improved concurrency |
| `multiprocess_async` | Combines multiple processes with asynchronous I/O for maximum parallelism and efficiency |

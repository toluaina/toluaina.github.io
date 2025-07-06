Increasing throughput with multiple consumers.

You can increase throughput by running one or more consumers for the same target schema.

How it works:

1. First, run a single producer process:
```
pgsync -c schema.json --producer
```

2. Then, run one or more consumer processes (each in a separate process or machine):

```
pgsync -c schema.json --consumer
pgsync -c schema.json --consumer
pgsync -c schema.json --consumer
```


This setup allows multiple consumers to work in parallel, improving overall throughput.

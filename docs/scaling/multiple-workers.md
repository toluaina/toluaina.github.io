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


Additionally, you can increase the number of workers used for handling requests.

```
pgsync -c schema.json -n 4
pgsync -c schema.json --consumer -n 6
```

!!! info
    The -n argument does not apply in the producer only mode.
    i.e with:
    ```pgsync -c schema.json --producer```

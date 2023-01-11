# PGSync

<p align="center">
    <em>Postgres to Elasticsearch/OpenSearch sync</em>
</p>
<p align="center">
    <a href="https://codecov.io/gh/toluaina/pgsync" target="_blank">
        <img src="https://codecov.io/gh/toluaina/pgsync/branch/main/graph/badge.svg?token=cvQzYkz6CV" alt="Coverage">
    </a>
    <a href="https://badge.fury.io/py/pgsync" target="_blank">
        <img src="https://badge.fury.io/py/pgsync.svg" alt="Package version">
    </a>
    <a href="https://pypi.org/project/pgsync" target="_blank">
        <img src="https://img.shields.io/pypi/pyversions/pgsync" alt="Python versions">
    </a>
</p>


PGSync is a middleware for syncing data from Postgres to Elasticsearch/OpenSearch. 
It allows you to keep Postgres as your source of truth and expose 
structured denormalized documents in Elasticsearch/OpenSearch.

Simply describe your document structure or schema in JSON and PGSync will 
continuously capture changes in your data and load it into Elasticsearch/OpenSearch without 
writing any code. PGSync transforms your relational data into a structured 
document format.

It allows you to take advantage of the expressive power and scalability of 
Elasticsearch/OpenSearch directly from Postgres. You don’t have to write complex queries 
and transformation pipelines. PGSync is lightweight, fast and flexible.

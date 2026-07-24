---
title: PGSync Pro — FAQ
---

# PGSync Pro — FAQ

Common questions about buying, licensing, and running PGSync Pro. Can't find an
answer? [Email us](#){ .eml data-u="tolu" data-d="pgsync.com" data-s="PGSync Pro — question" }.

## The product

**How is Pro different from open-core PGSync?**
PGSync (MIT) does the real-time change-data-capture sync to Elasticsearch /
OpenSearch. Pro adds **semantic + hybrid search**, the **change-guard economics**,
the embedding providers, the MCP agent server, and the search dashboard. See the
[full comparison](../pricing/index.md).

**Why not just build it on pgvector myself?**
You can — and you'll then own the change-data-capture, the denormalization, the
re-embedding logic, the provider integrations, and the database × engine
compatibility matrix forever. Pro is cheaper than the engineering weeks to build
and maintain that, and it keeps your data in your own infrastructure.

**Why not a hosted vector DB (Pinecone / Weaviate / Qdrant) or Algolia?**
Those are separate services your data is copied into, priced by usage that grows
with scale. PGSync Pro keeps your database as the source of truth, runs in your
infra, and embeddings can run on-device — nothing leaves your environment.

## Pricing & billing

**How much is it?**
**$49/mo billed annually**, or **$59/mo month-to-month**, per organization.
Launch pricing — the list price rises as we add features.

**What is an "organization"?**
One legal entity and the infrastructure it operates (wholly-owned subsidiaries
included). Separate legal entities, or clients you resell to, are not covered. If
in doubt, ask — we're reasonable.

**Is it per-seat?**
No. One flat per-organization subscription — use it across your team and
infrastructure, no seat counting.

**Is there a free trial?**
No free trial. Evaluate with the open-core engine, the reference demo, and the
docs; the **monthly plan is cancel-anytime**, so you can start for a single month
with no long commitment.

**Do you offer refunds?**
No refunds — the monthly, cancel-anytime plan is the low-commitment option
instead. (Statutory consumer rights, where they apply, are honored.)

**What happens when I cancel?**
Your last installed version keeps working — no phone-home, no time-bomb. You stop
receiving updates, new versions, and support, and your private-index token is
revoked so you can no longer install or upgrade.

**Can I switch monthly ↔ annual, or upgrade later?**
Yes, through the billing portal; changes are prorated.

## Installation & use

**How do I install it?**
After subscribing you receive a private-index install token and install with
`pip install "pgsync-pro[local,demo]" --extra-index-url <your private index URL>`.
Keep the token out of shell history — use `PIP_EXTRA_INDEX_URL` or `pip.conf`.

**What do I need running first?**
PostgreSQL (or MySQL / MariaDB) with your data, and a search engine —
Elasticsearch, or OpenSearch with the k-NN plugin — reachable at
`ELASTICSEARCH_URL` (set `OPENSEARCH=true` for OpenSearch). PGSync Pro syncs
*into* your existing engine; it doesn't install one. Native vector search (kNN)
uses the engine's own vector index where available and falls back to backend
cosine otherwise.

**Can I use the token in CI and multiple environments?**
Yes — one token covers your organization's dev, CI, and production installs.
Don't publish it; if it leaks, tell us and we'll rotate it.

**Do I need a kNN-capable search engine?**
For production, yes (OpenSearch ships the plugin bundled; Elasticsearch 8+ is
native). For evaluation, Pro can rank vectors without one.

## Data & privacy

**Does my data leave my infrastructure?**
With the default local / FastEmbed providers, **no** — text is embedded on-device
and nothing leaves your environment. If you opt into a hosted provider
(OpenAI / Cohere / Voyage), only the fields you choose to embed are sent to that
provider, under their terms.

**Do you collect telemetry?**
No. PGSync Pro sends us no usage data. See our [Privacy Policy](../privacy.md).

**Can I get a DPA?**
Yes, on request — and because embeddings run in your infrastructure, it's a
short, favorable document.

<div align="center" markdown>

---

[:material-tag: See pricing](../pricing/index.md){ .md-button .md-button--primary }
[:material-email: Talk to us](#){ .md-button .eml data-u="tolu" data-d="pgsync.com" data-s="PGSync Pro" }

</div>

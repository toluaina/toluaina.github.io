---
title: Pricing
hide:
  - toc
---

<div align="center" markdown>

# Pricing

Simple, per-organization pricing. Start free, upgrade when you need search that
understands *meaning*.

</div>

---

<div class="grid cards" markdown>

-   ### Community

    ---

    **Free** · MIT

    The sync engine. Real-time PostgreSQL / MySQL / MariaDB →
    Elasticsearch / OpenSearch, forever.

    - Change data capture
    - Denormalized documents
    - Django integration
    - Community support

    [:material-github: Get it on GitHub](https://github.com/toluaina/pgsync){ .md-button }

-   ### Pro

    ---

    **$99 / month** · billed annually, per organization

    Everything semantic, self-serve. Install from a private index the moment you
    subscribe.

    - Semantic + hybrid search
    - The change-guard economics
    - Every embedding provider
    - MCP agent server
    - Email support & all updates

    [:material-rocket-launch: Start a free trial](mailto:tolu@pgsync.com?subject=PGSync%20Pro%20trial){ .md-button .md-button--primary }

-   ### Enterprise

    ---

    **Custom** · invoiced

    For teams running search on the critical path.

    - Everything in Pro
    - Priority support & SLA
    - Onboarding & architecture review
    - Private index / air-gapped install
    - Security & procurement review

    [:material-email: Talk to us](mailto:tolu@pgsync.com?subject=PGSync%20Pro%20Enterprise){ .md-button }

</div>

<small>Prices are indicative during launch. A 14-day trial is available — no card
up front.</small>

---

## How buying works

<div class="grid cards" markdown>

-   :material-numeric-1-circle:{ .lg .middle } **Subscribe**

    ---

    Check out in a minute. Per-organization annual subscription — no per-seat
    counting.

-   :material-numeric-2-circle:{ .lg .middle } **Get your token**

    ---

    We issue a private package-index credential to your inbox automatically.

-   :material-numeric-3-circle:{ .lg .middle } **Install**

    ---

    ```bash
    pip install pgsync-pro       # from your private index
    pgsync-pro validate --config schema.json
    pgsync-pro bootstrap --config schema.json
    ```

</div>

It's the same `schema.json` and CLI you already know from PGSync — Pro just adds
an `embedding` block.

---

## FAQ

**Is my data safe?**
With the default local provider, text is embedded on your own machines and never
leaves your environment. PGSync Pro runs entirely in your infrastructure — no
vendor-hosted component, no telemetry.

**What am I licensed for?**
A per-organization commercial subscription: use it across your own
infrastructure, no redistribution. Full terms in the license agreement.

**What happens if I cancel?**
The software keeps running; you stop receiving updates and new installs from the
private index when the subscription lapses.

**Do I need a kNN-capable search engine?**
For production, yes (OpenSearch ships the plugin bundled; Elasticsearch 8+ is
native). For evaluation, Pro can rank vectors without one.

<div align="center" markdown>

---

### Keep your search fresh — without re-embedding the world.

[:material-rocket-launch: Start a free trial](mailto:tolu@pgsync.com?subject=PGSync%20Pro%20trial){ .md-button .md-button--primary }
[:material-book-open-variant: Why PGSync Pro](../pro/index.md){ .md-button }

</div>

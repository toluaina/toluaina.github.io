---
title: Thank you
hide:
  - navigation
  - toc
---

# Thank you — you're in :material-party-popper:

Your **PGSync Pro** subscription is active.

**Check your inbox** — we're sending your license token and install
instructions. It usually arrives within a few minutes. Once you have it:

```bash
pip install "pgsync-pro[local]" --extra-index-url <your private index URL>
pgsync-pro init      # scaffold the starter + demo, then read README.md
```

Nothing after a few minutes? Email <span class="eml" data-u="tolu" data-d="pgsync.com">tolu at pgsync dot com</span> and we'll
sort it out — include your reference below.

[:material-book-open-variant: Read the docs](pro/index.md){ .md-button .md-button--primary }
[:material-email: Contact support](#){ .md-button .eml data-u="tolu" data-d="pgsync.com" data-s="PGSync Pro — support" }

<small id="order-ref" style="display:block;margin-top:1.5rem;opacity:.6"></small>

<script>
  const id = new URLSearchParams(location.search).get("checkout_id");
  if (id) document.getElementById("order-ref").textContent = "Reference: " + id;
</script>

---
title: How it works
hide:
  - toc
---

<div align="center" markdown>

# How PGSync Pro works

From relational rows to search-by-meaning — the whole pipeline, one step at a time.

</div>

<div class="pl" id="pl">
  <div class="pl-steps" id="pl-steps">
    <span class="pl-line" aria-hidden="true"></span>
    <span class="pl-packet" id="pl-packet" aria-hidden="true"></span>
    <button class="pl-step is-active" data-i="0"><span class="pl-num">1</span> Your tables</button>
    <button class="pl-step" data-i="1"><span class="pl-num">2</span> Assemble</button>
    <button class="pl-step" data-i="2"><span class="pl-num">3</span> Document</button>
    <button class="pl-step" data-i="3"><span class="pl-num">4</span> Embed</button>
    <button class="pl-step" data-i="4"><span class="pl-num">5</span> Search</button>
  </div>
  <div class="pl-progress" aria-hidden="true"><span class="pl-fill" id="pl-fill"></span></div>

  <div class="pl-stage">

    <div class="pl-panel is-active" data-i="0">
      <p class="pl-cap">You already have normalized tables, split across joins.</p>
      <div class="pl-tables">
        <div class="pl-table">
          <div class="pl-th">book</div>
          <div class="pl-tr"><span>isbn</span><span>1984</span></div>
          <div class="pl-tr"><span>title</span><span>Nineteen Eighty-Four</span></div>
          <div class="pl-tr"><span>genre</span><span>dystopian</span></div>
          <div class="pl-tr"><span>price</span><span>14.99</span></div>
        </div>
        <div class="pl-table">
          <div class="pl-th">author</div>
          <div class="pl-tr"><span>name</span><span>George Orwell</span></div>
        </div>
      </div>
    </div>

    <div class="pl-panel" data-i="1">
      <p class="pl-cap">PGSync writes the SQL that stitches them into one document — automatically.</p>
      <pre class="pl-code"><span class="k">SELECT</span> jsonb_build_object(
    <span class="s">'title'</span>,       book.title,
    <span class="s">'description'</span>, book.description,
    <span class="s">'genre'</span>,       book.genre,
    <span class="s">'author'</span>,      jsonb_agg(author.name)
)
<span class="k">FROM</span> book
<span class="k">JOIN</span> book_authors <span class="k">ON</span> book_authors.book_isbn = book.isbn
<span class="k">JOIN</span> author       <span class="k">ON</span> author.id = book_authors.author_id
<span class="k">GROUP BY</span> book.isbn;</pre>
    </div>

    <div class="pl-panel" data-i="2">
      <p class="pl-cap">One denormalized search document, kept fresh by change data capture.</p>
      <pre class="pl-code"><span class="p">{</span>
    <span class="key">"title"</span>:       <span class="s">"Nineteen Eighty-Four"</span>,
    <span class="key">"description"</span>: <span class="s">"A clerk secretly rebels against a Party</span>
                   <span class="s">that watches every citizen…"</span>,
    <span class="key">"genre"</span>:       <span class="s">"dystopian"</span>,
    <span class="key">"author"</span>:      <span class="p">[</span> <span class="s">"George Orwell"</span> <span class="p">]</span>
<span class="p">}</span></pre>
    </div>

    <div class="pl-panel" data-i="3">
      <p class="pl-cap">The text that carries meaning becomes a vector.</p>
      <div class="pl-embed-src">title · description · genre · author</div>
      <div class="pl-flow-down"><span></span></div>
      <div class="pl-vec">[ 0.021, −0.104, 0.087, 0.033, −0.061, 0.112, −0.047, … ]<span class="pl-dim">384-dim</span></div>
      <p class="pl-note">Edit the <b>price</b> and the cached vector is reused — <b>zero cost</b>. Edit the
      <b>description</b> and exactly <b>one</b> embedding regenerates. That's the change-guard.</p>
    </div>

    <div class="pl-panel" data-i="4">
      <p class="pl-cap">Users search by <em>meaning</em> — not keywords.</p>
      <div class="pl-query">“a rebellion against a watchful state”</div>
      <div class="pl-flow-down"><span></span><em>embed · nearest neighbour</em></div>
      <div class="pl-result">
        <div class="pl-result-title">Nineteen Eighty-Four</div>
        <div class="pl-result-meta">George Orwell · dystopian · similarity <b>0.71</b></div>
        <span class="pl-pill">matched on meaning</span>
      </div>
    </div>

  </div>
</div>

<div align="center" markdown>

Not a single word of the query appears in the book — yet it ranks first.

[:material-tag: See pricing](../pricing/index.md){ .md-button .md-button--primary }
[:material-book-open-variant: Why PGSync Pro](../pro/index.md){ .md-button }

</div>

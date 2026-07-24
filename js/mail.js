// Anti-harvesting: the email address is never written in the static HTML.
// Markup carries only split parts, e.g.
//   <a class="eml" data-u="tolu" data-d="pgsync.com" data-s="Subject">Email us</a>
//   <span class="eml" data-u="tolu" data-d="pgsync.com">tolu at pgsync dot com</span>
// This assembles the real mailto: link at runtime for humans.
(function () {
  function mailto(el) {
    var u = el.getAttribute("data-u");
    var d = el.getAttribute("data-d");
    if (!u || !d) return null;
    var s = el.getAttribute("data-s");
    return "mailto:" + u + "@" + d + (s ? "?subject=" + encodeURIComponent(s) : "");
  }
  function build() {
    document.querySelectorAll(".eml").forEach(function (el) {
      if (el.dataset.done) return;
      var href = mailto(el);
      if (!href) return;
      el.dataset.done = "1";
      if (el.tagName === "A") {
        el.setAttribute("href", href);
      } else {
        // render the address as a clickable link, replacing the fallback text
        var a = document.createElement("a");
        a.href = href;
        a.textContent = el.getAttribute("data-u") + "@" + el.getAttribute("data-d");
        el.textContent = "";
        el.appendChild(a);
      }
    });
  }
  // Click-time guarantee: even if build() never ran (load order, JS error,
  // instant-nav timing, or a bundle that doesn't replay document$), assemble
  // the mailto on click so an `.eml` button is NEVER a dead "#".
  document.addEventListener(
    "click",
    function (e) {
      var el = e.target && e.target.closest ? e.target.closest("a.eml") : null;
      if (!el) return;
      var cur = el.getAttribute("href");
      if (cur && cur.indexOf("mailto:") === 0) return; // already wired — let it go
      var href = mailto(el);
      if (!href) return;
      e.preventDefault();
      el.setAttribute("href", href);
      window.location.href = href;
    },
    true // capture, so we run before the instant-nav router
  );
  // Pre-wire on load (nice for hover/copy + non-anchor spans) and again after
  // each instant navigation. build() is idempotent via the data-done guard, so
  // running it from several triggers is safe.
  if (document.readyState !== "loading") build();
  else document.addEventListener("DOMContentLoaded", build);
  if (window.document$ && typeof window.document$.subscribe === "function") {
    window.document$.subscribe(build);
  }
})();

// Anti-harvesting: the email address is never written in the static HTML.
// Markup carries only split parts, e.g.
//   <a class="eml" data-u="tolu" data-d="pgsync.com" data-s="Subject">Email us</a>
//   <span class="eml" data-u="tolu" data-d="pgsync.com">tolu at pgsync dot com</span>
// This assembles the real mailto: link at runtime for humans.
(function () {
  function build() {
    document.querySelectorAll(".eml").forEach(function (el) {
      if (el.dataset.done) return;
      var u = el.getAttribute("data-u");
      var d = el.getAttribute("data-d");
      if (!u || !d) return;
      el.dataset.done = "1";
      var addr = u + "@" + d;
      var s = el.getAttribute("data-s");
      var href = "mailto:" + addr + (s ? "?subject=" + encodeURIComponent(s) : "");
      if (el.tagName === "A") {
        el.setAttribute("href", href);
      } else {
        // render the address as a clickable link, replacing the fallback text
        var a = document.createElement("a");
        a.href = href;
        a.textContent = addr;
        el.textContent = "";
        el.appendChild(a);
      }
    });
  }
  // Material/zensical instant navigation re-emits document$ on each page.
  if (window.document$ && typeof window.document$.subscribe === "function") {
    window.document$.subscribe(build);
  } else if (document.readyState !== "loading") {
    build();
  } else {
    document.addEventListener("DOMContentLoaded", build);
  }
})();

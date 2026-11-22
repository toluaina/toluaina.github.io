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
  // A mailto: link does nothing useful for a visitor with no mail app (for
  // example a webmail user), so each email link also gets a copy button.
  var COPY_ICON =
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 21H8V7h11m0-2H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2m-3-4H4a2 2 0 0 0-2 2v14h2V3h12V1Z"/></svg>';
  var DONE_ICON =
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 7 9 19l-5.5-5.5 1.41-1.41L9 16.17 19.59 5.59 21 7Z"/></svg>';

  function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text);
    }
    // Fallback for browsers without the async clipboard API
    return new Promise(function (resolve, reject) {
      var ta = document.createElement("textarea");
      ta.value = text;
      ta.setAttribute("readonly", "");
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      var ok = false;
      try { ok = document.execCommand("copy"); } catch (err) { ok = false; }
      document.body.removeChild(ta);
      ok ? resolve() : reject();
    });
  }

  function addCopyButton(el) {
    var address = el.getAttribute("data-u") + "@" + el.getAttribute("data-d");
    var isButton = el.classList.contains("md-button");
    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = isButton ? "eml-copy md-button" : "eml-copy eml-copy--inline";
    btn.setAttribute("aria-label", "Copy email address");
    var label = isButton ? '<span class="eml-copy__label">Copy email</span>' : "";
    var status = '<span class="eml-copy__status" role="status"></span>';
    btn.innerHTML = COPY_ICON + label + status;
    btn.addEventListener("click", function () {
      var statusEl = btn.querySelector(".eml-copy__status");
      var labelEl = btn.querySelector(".eml-copy__label");
      copyText(address).then(
        function () {
          btn.classList.add("is-copied");
          btn.querySelector("svg").outerHTML = DONE_ICON;
          if (labelEl) labelEl.textContent = "Copied";
          statusEl.textContent = "Copied " + address;
          clearTimeout(btn._reset);
          btn._reset = setTimeout(function () {
            btn.classList.remove("is-copied");
            btn.querySelector("svg").outerHTML = COPY_ICON;
            if (labelEl) labelEl.textContent = "Copy email";
            statusEl.textContent = "";
          }, 2000);
        },
        function () {
          // Copy is blocked: show the address so the visitor can select it
          if (labelEl) labelEl.textContent = address;
          statusEl.textContent = address;
        }
      );
    });
    el.insertAdjacentElement("afterend", btn);
  }

  function build() {
    document.querySelectorAll(".eml").forEach(function (el) {
      if (el.dataset.done) return;
      var href = mailto(el);
      if (!href) return;
      el.dataset.done = "1";
      if (el.tagName === "A") {
        el.setAttribute("href", href);
        addCopyButton(el);
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
      if (cur && cur.indexOf("mailto:") === 0) return; // already wired, so let it go
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

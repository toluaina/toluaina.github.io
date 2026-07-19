function setupTermynal() {
    document.querySelectorAll(".use-termynal").forEach(node => {
        node.style.display = "block";
        new Termynal(node, {
            lineDelay: 500
        });
    });
    const progressLiteralStart = "---> 100%";
    const promptLiteralStart = "$ ";
    const customPromptLiteralStart = "# ";
    const termynalActivateClass = "termy";
    let termynals = [];

    function createTermynals() {
        document
            .querySelectorAll(`.${termynalActivateClass} .highlight`)
            .forEach(node => {
                const text = node.textContent;
                const lines = text.split("\n");
                const useLines = [];
                let buffer = [];
                function saveBuffer() {
                    if (buffer.length) {
                        let isBlankSpace = true;
                        buffer.forEach(line => {
                            if (line) {
                                isBlankSpace = false;
                            }
                        });
                        dataValue = {};
                        if (isBlankSpace) {
                            dataValue["delay"] = 0;
                        }
                        if (buffer[buffer.length - 1] === "") {
                            // A last single <br> won't have effect
                            // so put an additional one
                            buffer.push("");
                        }
                        const bufferValue = buffer.join("<br>");
                        dataValue["value"] = bufferValue;
                        useLines.push(dataValue);
                        buffer = [];
                    }
                }
                for (let line of lines) {
                    if (line === progressLiteralStart) {
                        saveBuffer();
                        useLines.push({
                            type: "progress"
                        });
                    } else if (line.startsWith(promptLiteralStart)) {
                        saveBuffer();
                        const value = line.replace(promptLiteralStart, "").trimEnd();
                        useLines.push({
                            type: "input",
                            value: value
                        });
                    } else if (line.startsWith("// ")) {
                        saveBuffer();
                        const value = "💬 " + line.replace("// ", "").trimEnd();
                        useLines.push({
                            value: value,
                            class: "termynal-comment",
                            delay: 0
                        });
                    } else if (line.startsWith(customPromptLiteralStart)) {
                        saveBuffer();
                        const promptStart = line.indexOf(promptLiteralStart);
                        if (promptStart === -1) {
                            console.error("Custom prompt found but no end delimiter", line)
                        }
                        const prompt = line.slice(0, promptStart).replace(customPromptLiteralStart, "")
                        let value = line.slice(promptStart + promptLiteralStart.length);
                        useLines.push({
                            type: "input",
                            value: value,
                            prompt: prompt
                        });
                    } else {
                        buffer.push(line);
                    }
                }
                saveBuffer();
                const div = document.createElement("div");
                node.replaceWith(div);
                const termynal = new Termynal(div, {
                    lineData: useLines,
                    noInit: true,
                    lineDelay: 500
                });
                termynals.push(termynal);
            });
    }

    function loadVisibleTermynals() {
        termynals = termynals.filter(termynal => {
            if (termynal.container.getBoundingClientRect().top - innerHeight <= 0) {
                termynal.init();
                return false;
            }
            return true;
        });
    }
    window.addEventListener("scroll", loadVisibleTermynals);
    createTermynals();
    loadVisibleTermynals();
}

setupTermynal();

// Persistent "PGSync Pro" CTA in the header — the always-visible jump from the
// Community docs to the commercial offering. Injected here because zensical
// has no Material header override. A MutationObserver re-adds it after instant
// navigation swaps the header.
(function () {
  function injectProCTA() {
    var inner = document.querySelector(".md-header__inner");
    if (!inner || inner.querySelector(".pgsync-pro-cta")) return;
    var cta = document.createElement("a");
    cta.className = "pgsync-pro-cta";
    cta.href = "/pro/";
    cta.setAttribute("title", "PGSync Pro — semantic & hybrid search");
    cta.innerHTML =
      '<span class="pgsync-pro-cta__spark" aria-hidden="true">✦</span>' +
      'PGSync&nbsp;<span class="pgsync-pro-cta__pro">Pro</span>';
    var source = inner.querySelector(".md-header__source");
    if (source) inner.insertBefore(cta, source);
    else inner.appendChild(cta);
  }
  function boot() {
    injectProCTA();
    var header = document.querySelector(".md-header");
    if (header) new MutationObserver(injectProCTA).observe(header, { childList: true, subtree: true });
  }
  if (document.readyState !== "loading") boot();
  else document.addEventListener("DOMContentLoaded", boot);
})();

// How-it-works animated pipeline: auto-advance the steps, clickable, robust to
// instant navigation (a MutationObserver re-inits when the element appears).
(function () {
  // per-step accent, matching the circular diagram: postgres, pgsync, pgsync,
  // pgsync-pro, elasticsearch.
  var COLORS = ["#7fb2e0", "#aeb8ff", "#9db4f2", "#5ee7f5", "#4fddc0"];
  // per-step hold; the two code-dense steps (SQL, JSON) get longer to read.
  var DURATIONS = ["4.6s", "6.6s", "6.6s", "5.2s", "5.2s"];
  function initPipeline() {
    var pl = document.getElementById("pl");
    if (!pl || pl.dataset.init) return;
    pl.dataset.init = "1";
    var steps = [].slice.call(pl.querySelectorAll(".pl-step"));
    var panels = [].slice.call(pl.querySelectorAll(".pl-panel"));
    var packet = pl.querySelector("#pl-packet");
    var fill = pl.querySelector("#pl-fill");
    var i = 0;
    var packetTimer;
    function movePacket() {
      var s = steps[i];
      if (packet && s) packet.style.left = (s.offsetLeft + s.offsetWidth / 2) + "px";
    }
    // show the pulse, glide it to the active step, then fade it out on arrival
    // so the dot never rests on top of the pill label.
    function pulsePacket() {
      if (!packet) return;
      packet.style.opacity = "1";
      movePacket();
      clearTimeout(packetTimer);
      packetTimer = setTimeout(function () { packet.style.opacity = "0"; }, 650);
    }
    function show(n) {
      i = (n + panels.length) % panels.length;
      pl.style.setProperty("--pl-accent", COLORS[i] || "#00d0e0");
      pl.style.setProperty("--pl-dur", DURATIONS[i] || "4.6s");
      steps.forEach(function (s, k) { s.classList.toggle("is-active", k === i); });
      panels.forEach(function (p, k) { p.classList.toggle("is-active", k === i); });
      pulsePacket();
      // restart the progress bar; its animationend drives the next step, so
      // pausing it on hover (CSS) pauses advancement too.
      if (fill) { fill.style.animation = "none"; void fill.offsetWidth; fill.style.animation = ""; }
    }
    if (fill) fill.addEventListener("animationend", function () { show(i + 1); });
    steps.forEach(function (s) {
      s.addEventListener("click", function () { show(+s.dataset.i); });
    });
    window.addEventListener("resize", movePacket);
    show(0);
  }
  if (document.readyState !== "loading") initPipeline();
  else document.addEventListener("DOMContentLoaded", initPipeline);
  new MutationObserver(initPipeline).observe(document.body, { childList: true, subtree: true });
})();

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

// How-it-works animated pipeline: auto-advance the steps, clickable, robust to
// instant navigation (a MutationObserver re-inits when the element appears).
(function () {
  // per-step accent in muted graphite tones: postgres, pgsync, pgsync,
  // pgsync-pro, elasticsearch.
  var COLORS = ["#8fa3bf", "#a3b4c8", "#b4c3d6", "#9db8ac", "#c9d3e0"];
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
      pl.style.setProperty("--pl-accent", COLORS[i] || "#8fa3bf");
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

// Home hero panel: cycle schema.json, Monitor and Search. A click on a tab
// stops the cycle. If the visitor turns off motion, the tabs stay static.
(function () {
  var DURATIONS = { "schema.json": 5000, "Monitor": 7000, "Search": 6500 };
  var BARS = "▁▂▃▄▅▆▇█";
  var EVENTS = [
    ["UPDATE", "public.book  id=1949  description"],
    ["UPDATE", "public.book  id=48121  title"],
    ["INSERT", "public.book_author  book_id=3150"],
    ["UPDATE", "public.author  id=553  name"],
    ["INSERT", "public.book  id=48990"],
    ["DELETE", "public.book  id=11007"],
    ["INSERT", "public.book  id=48991"],
    ["UPDATE", "public.publisher  id=12  name"]
  ];
  function evRow(time, op, text) {
    return "<div><span>" + time + "</span><span class=\"op-" + op.toLowerCase() + "\">" +
      op + "</span><span>" + text + "</span></div>";
  }
  var MONITOR =
    '<div class="hero-mon" role="img" aria-label="PGSync terminal monitor">' +
    '<div class="hero-mon__bar"><b>pgsync 8.0.0</b><span><span class="hero-mon__ok">●</span> healthy</span><span>up 12m34s</span></div>' +
    '<div class="hero-mon__body">' +
    '<div class="hero-mon__stats"><span>book · trigger</span><span>sent <b data-mon="sent">98,412</b></span><span>slot lag <b>1.2 MB</b></span></div>' +
    '<div><div class="hero-mon__sec">THROUGHPUT · last 30s</div>' +
    '<div class="hero-mon__row"><span>events</span><span class="hero-mon__spark" data-mon="spark-e">▅▇▄▆▇█▃▃▇▅▇▅▄▇▇▇▇▆▄▅▄▇▆▃▃▄▃▅▃▇</span><b data-mon="rate-e">842/s</b></div>' +
    '<div class="hero-mon__row"><span>docs</span><span class="hero-mon__spark" data-mon="spark-d">▇▇▄▅▆▆▇▇▅▆▇▇▅▅▆▇▆▅█▇▃▇▄▃▃▃▅▄▄▇</span><b data-mon="rate-d">611/s</b></div></div>' +
    '<div><div class="hero-mon__sec">LIVE EVENTS</div><div class="hero-mon__events" data-mon="events">' +
    evRow("14:32:07.912", "UPDATE", "public.book  id=1949  description") +
    evRow("14:32:07.905", "INSERT", "public.book_author  book_id=3150") +
    evRow("14:32:07.871", "DELETE", "public.book  id=11007") +
    evRow("14:32:07.840", "UPDATE", "public.author  id=553  name") +
    evRow("14:32:07.802", "INSERT", "public.book  id=48990") +
    '</div></div></div>' +
    '<div class="hero-mon__bar"><span>q quit</span><span>p pause</span><span>f filter</span><span>? help</span></div>' +
    '</div>';
  function initHero() {
    var set = document.querySelector(".home-hero__code .tabbed-set");
    if (!set || set.dataset.init) return;
    set.dataset.init = "1";
    var inputs = [].slice.call(set.querySelectorAll(":scope > input"));
    var labels = [].slice.call(set.querySelectorAll(".tabbed-labels > label"));
    var blocks = [].slice.call(set.querySelectorAll(".tabbed-content > .tabbed-block"));
    // Markdown cannot hold raw HTML inside a tab, so the Monitor tab has a
    // text snapshot. Replace it with the styled monitor.
    labels.forEach(function (l, k) {
      var snap = blocks[k] && blocks[k].querySelector(".highlight");
      if (l.textContent.trim() !== "Monitor" || !snap) return;
      var div = document.createElement("div");
      div.innerHTML = MONITOR;
      snap.replaceWith(div.firstChild);
    });
    if (window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    var bar = document.createElement("span");
    bar.className = "hero-cycle-bar";
    set.querySelector(".tabbed-labels").appendChild(bar);
    var i = 0, cycling = true, visible = true, current = "", monTimer, typeTimer;
    // Hide the theme underline while the progress bar shows the active tab
    set.classList.add("is-cycling");

    function lineSpans(block) {
      return [].slice.call(block.querySelectorAll("code > span[id]"));
    }
    function revealLines(spans) {
      spans.forEach(function (s, k) {
        s.style.visibility = "";
        s.classList.remove("hero-line-in");
        void s.offsetWidth;
        s.style.animationDelay = (k * 70) + "ms";
        s.classList.add("hero-line-in");
      });
    }

    // Monitor: shift the throughput bars and add one live event at each tick
    var mon = set.querySelector(".hero-mon");
    var sent = 98412, n = 0, ms = 0;
    function part(name) { return mon.querySelector('[data-mon="' + name + '"]'); }
    function shift(el) {
      var v = Math.floor(Math.random() * 6) + 2;
      el.textContent = el.textContent.slice(1) + BARS[v];
      return v;
    }
    function monTick() {
      if (!document.body.contains(set)) return stopMon();
      part("rate-e").textContent = (700 + shift(part("spark-e")) * 25) + "/s";
      part("rate-d").textContent = (500 + shift(part("spark-d")) * 18) + "/s";
      sent += 40 + Math.floor(Math.random() * 30);
      part("sent").textContent = sent.toLocaleString("en-US");
      var e = EVENTS[n++ % EVENTS.length];
      ms += 37 + Math.floor(Math.random() * 60);
      var s = 8 + Math.floor(ms / 1000);
      var time = "14:" + (32 + Math.floor(s / 60)) + ":" + String(s % 60 + 100).slice(1) + "." +
        String(ms % 1000 + 1000).slice(1);
      var tmp = document.createElement("div");
      tmp.innerHTML = evRow(time, e[0], e[1]);
      var row = tmp.firstChild;
      row.className = "is-new";
      var list = part("events");
      list.insertBefore(row, list.firstChild);
      while (list.children.length > 5) list.removeChild(list.lastChild);
    }
    function startMon() { if (!monTimer && visible && mon) monTimer = setInterval(monTick, 420); }
    function stopMon() { clearInterval(monTimer); monTimer = null; }

    // Search: type the query, then show the result
    function typeQuery(block) {
      var comment = block.querySelector(".c1");
      if (!comment) return;
      var full = comment.dataset.full || (comment.dataset.full = comment.textContent);
      var head = '// query: "', rest = full.slice(head.length), k = 0;
      var spans = lineSpans(block).slice(1);
      spans.forEach(function (s) { s.style.visibility = "hidden"; });
      var caret = document.createElement("span");
      caret.className = "hero-caret";
      comment.textContent = head;
      comment.after(caret);
      typeTimer = setInterval(function () {
        if (++k <= rest.length) { comment.textContent = head + rest.slice(0, k); return; }
        clearInterval(typeTimer);
        caret.remove();
        revealLines(spans);
      }, 45);
    }
    function stopType() {
      clearInterval(typeTimer);
      set.querySelectorAll(".hero-caret").forEach(function (c) { c.remove(); });
      set.querySelectorAll(".c1[data-full]").forEach(function (c) { c.textContent = c.dataset.full; });
      set.querySelectorAll("code > span[id]").forEach(function (s) { s.style.visibility = ""; });
    }

    function enter(k) {
      stopMon(); stopType();
      var name = current = labels[k].textContent.trim();
      if (name === "Monitor") startMon();
      else if (name === "Search") typeQuery(blocks[k]);
      else revealLines(lineSpans(blocks[k]));
      return name;
    }
    function show(k) {
      i = k % inputs.length;
      // No change event: an automatic step must not save a tab choice
      inputs[i].checked = true;
      var name = enter(i);
      bar.style.left = labels[i].offsetLeft + "px";
      bar.style.width = labels[i].offsetWidth + "px";
      bar.style.setProperty("--hero-dur", (DURATIONS[name] || 6000) + "ms");
      bar.classList.remove("is-running");
      void bar.offsetWidth;
      bar.classList.add("is-running");
    }
    bar.addEventListener("animationend", function () { if (cycling) show(i + 1); });
    labels.forEach(function (l, k) {
      l.addEventListener("click", function (ev) {
        if (!ev.isTrusted) return;
        cycling = false;
        bar.remove();
        set.classList.remove("is-cycling");
        enter(k);
      });
    });
    // Pause the cycle and the monitor when the hero is off screen or the
    // browser tab is hidden
    function setVisible(v) {
      visible = v && !document.hidden;
      bar.classList.toggle("is-paused", !visible);
      if (!visible) stopMon();
      else if (current === "Monitor") startMon();
    }
    var onScreen = true;
    if ("IntersectionObserver" in window) {
      new IntersectionObserver(function (entries) {
        onScreen = entries[0].isIntersecting;
        setVisible(onScreen);
      }).observe(set);
    }
    document.addEventListener("visibilitychange", function () { setVisible(onScreen); });
    show(0);
  }
  if (document.readyState !== "loading") initHero();
  else document.addEventListener("DOMContentLoaded", initHero);
  new MutationObserver(initHero).observe(document.body, { childList: true, subtree: true });
})();

// Monitor page preview: color the operations, then move the throughput bars
// and add live events while the preview is on screen.
(function () {
  var BARS = "▁▂▃▄▅▆▇█";
  var EVENTS = [
    ["UPDATE", "public.book", "id=1949", "description"],
    ["INSERT", "public.book_author", "book_id=3151 author_id=12", ""],
    ["UPDATE", "public.author", "id=553", "name"],
    ["INSERT", "public.book", "id=48991", ""],
    ["DELETE", "public.book_author", "book_id=2210 author_id=41", ""],
    ["UPDATE", "public.book", "id=48121", "title"],
    ["UPDATE", "public.publisher", "id=12", "name"],
    ["INSERT", "public.book", "id=48992", ""]
  ];
  // The preview starts at 14:32:08, after 12m34s of uptime
  function clock(s) {
    s += 8;
    return "14:" + (32 + Math.floor(s / 60)) + ":" + String(s % 60 + 100).slice(1);
  }
  function esc(s) { return s.replace(/&/g, "&amp;").replace(/</g, "&lt;"); }
  // The code font has no box or bar symbols, so the browser draws them with
  // a fallback font that is a little wider. Find these symbols, then put each
  // one in a box that is exactly one cell wide.
  var wide = null;
  function measure(code, chars) {
    var probe = document.createElement("span");
    probe.style.cssText = "position:absolute;visibility:hidden;white-space:pre";
    code.appendChild(probe);
    function cell(c) { probe.textContent = c.repeat(20); return probe.getBoundingClientRect().width / 20; }
    var zero = cell("0"), found = "";
    Array.from(new Set(chars.replace(/[\x00-\x7f]/g, ""))).forEach(function (c) {
      if (Math.abs(cell(c) - zero) > 0.001) found += c;
    });
    probe.remove();
    wide = found ? new RegExp("[" + found + "]", "g") : null;
  }
  function fmt(t) {
    t = esc(t);
    return wide ? t.replace(wide, '<span class="mono-cell">$&</span>') : t;
  }
  function skip(t) {
    var k = t.indexOf("skip…");
    if (k < 0) return fmt(t);
    return fmt(t.slice(0, k)) + '<span class="op-skip">' + fmt("skip…") + "</span>" + fmt(t.slice(k + 5));
  }
  // Write a line again and keep the anchor that Zensical puts in each line
  function write(span, text) {
    var a = span.querySelector("a");
    var m = text.match(/^(│ \S{12}  )(INSERT|UPDATE|DELETE|TRUNCATE)\b/);
    var html = m ? fmt(m[1]) + '<span class="op-' + m[2].toLowerCase() + '">' + m[2] + "</span>" +
      skip(text.slice(m[0].length)) : skip(text);
    span.innerHTML = (a ? a.outerHTML : "") + html + "\n";
  }
  function initScreen() {
    var code = document.querySelector(".monitor-screen code");
    if (!code || code.dataset.init) return;
    code.dataset.init = "1";
    var lines = [].slice.call(code.querySelectorAll(":scope > span[id]"));
    var text = lines.map(function (l) { return l.textContent.replace(/\n$/, ""); });
    var first = text.findIndex(function (t) { return /LIVE EVENTS/.test(t); }) + 1;
    var last = text.findIndex(function (t, k) { return k >= first && t.charAt(0) === "╰"; });
    if (first < 1 || last < first) return;
    // Measure after the web font loads, then write every line one time
    (document.fonts ? document.fonts.ready : Promise.resolve()).then(function () {
      measure(code, text.join("") + BARS + "…");
      lines.forEach(function (l, k) { write(l, text[k]); });
      if (window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      animate(code, lines, text, first, last);
    });
  }
  function animate(code, lines, text, first, last) {

    var width = text[first].length, n = 0, ms = 0, xmin = 884212, secs = 754, timer;
    function spark(k, base, step) {
      var m = text[k].match(/^(│ \S+\s+)(\S{30})(\s+)(\d+)\/s/);
      if (!m) return;
      var v = Math.floor(Math.random() * 6) + 2;
      var rate = String(base + v * step);
      text[k] = m[1] + m[2].slice(1) + BARS[v] + m[3] + rate + text[k].slice(m[0].length - 2);
      write(lines[k], text[k]);
    }
    var ev = text.findIndex(function (t) { return /^│ events /.test(t); });
    var dc = text.findIndex(function (t) { return /^│ docs /.test(t); });
    function tick() {
      if (!document.body.contains(code)) return clearInterval(timer);
      if (ev > 0) spark(ev, 700, 25);
      if (dc > 0) spark(dc, 500, 18);
      // Clock and uptime in the header, one step each second
      ms += 600;
      if (ms >= 1000) {
        ms -= 1000; secs++;
        text[0] = text[0]
          .replace(/up \d+m\d\ds/, "up " + Math.floor(secs / 60) + "m" + String(secs % 60 + 100).slice(1) + "s")
          .replace(/14:\d\d:\d\d/, clock(secs - 754));
        write(lines[0], text[0]);
      }
      var e = EVENTS[n++ % EVENTS.length];
      var jitter = Math.floor(Math.random() * Math.min(99, 999 - ms));
      xmin += 1 + Math.floor(Math.random() * 3);
      var row = "│ " + clock(secs - 754) + "." + String(ms + jitter + 1000).slice(1) + "  " +
        e[0].padEnd(10) + e[1].padEnd(20) + e[2].padEnd(28) + ("xmin=" + xmin).padEnd(13) + e[3];
      // Cut a long row with an ellipsis, as the real monitor does
      if (row.length > width - 2) row = row.slice(0, width - 3) + "…";
      row = row.padEnd(width - 1) + "│";
      text.splice(first, 0, row);
      text.splice(last, 1);
      for (var k = first; k < last; k++) write(lines[k], text[k]);
    }
    function run(on) {
      clearInterval(timer);
      if (on && !document.hidden) timer = setInterval(tick, 600);
    }
    var onScreen = false;
    if ("IntersectionObserver" in window) {
      new IntersectionObserver(function (entries) {
        onScreen = entries[0].isIntersecting;
        run(onScreen);
      }).observe(code);
    }
    document.addEventListener("visibilitychange", function () { run(onScreen); });
  }
  if (document.readyState !== "loading") initScreen();
  else document.addEventListener("DOMContentLoaded", initScreen);
  new MutationObserver(initScreen).observe(document.body, { childList: true, subtree: true });
})();

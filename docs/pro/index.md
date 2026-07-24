---
title: PGSync Pro
hide:
  - toc
---

<div class="pgpro-hero" markdown>
<div class="pgpro-hero__text" markdown>

# PGSync Pro

Real-time **semantic & hybrid search** for PostgreSQL — that only re-embeds
when *meaning* changes.

[:material-tag: See pricing](../pricing/index.md){ .md-button .md-button--primary }
[:material-play-circle: See how it works](../how-it-works/index.md){ .md-button }

Your database stays the source of truth — PGSync Pro keeps a fresh vector index
in lock-step, and only pays to embed when *meaning* actually changes. Built on
PGSync, which syncs **PostgreSQL, MySQL and MariaDB** to Elasticsearch /
OpenSearch.

</div>
<div class="pgpro-flow">
<svg viewBox="0 0 780 620" role="img" aria-labelledby="flow-t flow-d" preserveAspectRatio="xMidYMid meet">
  <title id="flow-t">PGSync Pro data flow</title>
  <desc id="flow-d">PostgreSQL streams changes through PGSync and PGSync Pro into Elasticsearch, in real time.</desc>
  <defs>
    <radialGradient id="pg-halo" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#0e9bb8" stop-opacity="0.30"/>
      <stop offset="70%" stop-color="#0c1120" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="pg-card" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#18223c"/>
      <stop offset="100%" stop-color="#0f1626"/>
    </linearGradient>
    <linearGradient id="g1" gradientUnits="userSpaceOnUse" x1="390" y1="135" x2="565" y2="310">
      <stop offset="0%" stop-color="#5b93c9"/><stop offset="100%" stop-color="#8593ff"/>
    </linearGradient>
    <linearGradient id="g2" gradientUnits="userSpaceOnUse" x1="565" y1="310" x2="390" y2="485">
      <stop offset="0%" stop-color="#8593ff"/><stop offset="100%" stop-color="#22d3ee"/>
    </linearGradient>
    <linearGradient id="g3" gradientUnits="userSpaceOnUse" x1="390" y1="485" x2="215" y2="310">
      <stop offset="0%" stop-color="#22d3ee"/><stop offset="100%" stop-color="#2fd3b5"/>
    </linearGradient>
    <filter id="pg-soft" x="-80%" y="-80%" width="260%" height="260%">
      <feGaussianBlur stdDeviation="11"/>
    </filter>
  </defs>

  <rect x="0" y="0" width="780" height="620" rx="22" fill="#0c1120"/>
  <rect x="0" y="0" width="780" height="620" rx="22" fill="url(#pg-halo)"/>

  <!-- base ring -->
  <circle cx="390" cy="310" r="175" fill="none" stroke="#25314c" stroke-width="1.5" stroke-opacity="0.7"/>

  <!-- glow behind PGSync Pro (bottom) -->
  <circle cx="390" cy="485" r="66" fill="#22d3ee" opacity="0.16" filter="url(#pg-soft)"/>

  <!-- flow arcs: streaming dashes -->
  <g fill="none" stroke-width="2.6" stroke-linecap="round">
    <path d="M390 135 A175 175 0 0 1 565 310" stroke="url(#g1)" stroke-dasharray="5 8"><animate attributeName="stroke-dashoffset" values="26;0" dur="1.1s" repeatCount="indefinite"/></path>
    <path d="M565 310 A175 175 0 0 1 390 485" stroke="url(#g2)" stroke-dasharray="5 8"><animate attributeName="stroke-dashoffset" values="26;0" dur="1.1s" repeatCount="indefinite"/></path>
    <path d="M390 485 A175 175 0 0 1 215 310" stroke="url(#g3)" stroke-dasharray="5 8"><animate attributeName="stroke-dashoffset" values="26;0" dur="1.1s" repeatCount="indefinite"/></path>
  </g>
  <!-- traveling pulses -->
  <g fill="#e8fbff">
    <circle r="3.2"><animateMotion dur="2.4s" repeatCount="indefinite" path="M390 135 A175 175 0 0 1 565 310"/></circle>
    <circle r="3.2"><animateMotion dur="2.4s" begin="0.5s" repeatCount="indefinite" path="M565 310 A175 175 0 0 1 390 485"/></circle>
    <circle r="3.2"><animateMotion dur="2.4s" begin="1.0s" repeatCount="indefinite" path="M390 485 A175 175 0 0 1 215 310"/></circle>
  </g>

  <!-- centre caption -->
  <g text-anchor="middle" font-family="'Roboto Mono', monospace">
    <text x="390" y="304" fill="#7f8aa6" font-size="12" letter-spacing="3">REAL-TIME</text>
    <text x="390" y="324" fill="#5c6580" font-size="11">in lock-step</text>
  </g>

  <g font-family="'Roboto', system-ui, sans-serif">
    <!-- Source DB (top) — cycles PostgreSQL / MySQL / MariaDB -->
    <circle cx="390" cy="135" r="48" fill="url(#pg-card)" stroke="#5b93c9" stroke-opacity="0.5"/>
    <g opacity="0" transform="translate(366,111) scale(2)"><animate attributeName="opacity" values="0;1;1;0;0" keyTimes="0;0.02;0.31;0.35;1" dur="9s" begin="0s" repeatCount="indefinite"/><path fill="#7fb2e0" d="M23.56 14.723a.5.5 0 0 0-.057-.12q-.21-.395-1.007-.231c-1.654.34-2.294.13-2.526-.02 1.342-2.048 2.445-4.522 3.041-6.83.272-1.05.798-3.523.122-4.73a1.6 1.6 0 0 0-.15-.236C21.693.91 19.8.025 17.51.001c-1.495-.016-2.77.346-3.116.479a10 10 0 0 0-.516-.082 8 8 0 0 0-1.312-.127c-1.182-.019-2.203.264-3.05.84C8.66.79 4.729-.534 2.296 1.19.935 2.153.309 3.873.43 6.304c.041.818.507 3.334 1.243 5.744q.69 2.26 1.433 3.582.83 1.493 1.714 1.79c.448.148 1.133.143 1.858-.729a56 56 0 0 1 1.945-2.206c.435.235.906.362 1.39.377v.004a11 11 0 0 0-.247.305c-.339.43-.41.52-1.5.745-.31.064-1.134.233-1.146.811a.6.6 0 0 0 .091.327c.227.423.922.61 1.015.633 1.335.333 2.505.092 3.372-.679-.017 2.231.077 4.418.345 5.088.221.553.762 1.904 2.47 1.904q.375.001.829-.094c1.782-.382 2.556-1.17 2.855-2.906.15-.87.402-2.875.539-4.101.017-.07.036-.12.057-.136 0 0 .07-.048.427.03l.044.007.254.022.015.001c.847.039 1.911-.142 2.531-.43.644-.3 1.806-1.033 1.595-1.67M2.37 11.876c-.744-2.435-1.178-4.885-1.212-5.571-.109-2.172.417-3.683 1.562-4.493 1.837-1.299 4.84-.54 6.108-.13l-.01.01C6.795 3.734 6.843 7.226 6.85 7.44c0 .082.006.199.016.36.034.586.1 1.68-.074 2.918-.16 1.15.194 2.276.973 3.089q.12.126.252.237c-.347.371-1.1 1.193-1.903 2.158-.568.682-.96.551-1.088.508-.392-.13-.813-.587-1.239-1.322-.48-.839-.963-2.032-1.415-3.512m6.007 5.088a1.6 1.6 0 0 1-.432-.178c.089-.039.237-.09.483-.14 1.284-.265 1.482-.451 1.915-1 .099-.127.211-.27.367-.443a.4.4 0 0 0 .074-.13c.17-.151.272-.11.436-.042.156.065.308.26.37.475.03.102.062.295-.045.445-.904 1.266-2.222 1.25-3.168 1.013m2.094-3.988-.052.14c-.133.357-.257.689-.334 1.004-.667-.002-1.317-.288-1.81-.803-.628-.655-.913-1.566-.783-2.5.183-1.308.116-2.447.08-3.059l-.013-.22c.296-.262 1.666-.996 2.643-.772.446.102.718.406.83.928.585 2.704.078 3.83-.33 4.736a9 9 0 0 0-.23.546m7.364 4.572q-.024.266-.062.596l-.146.438a.4.4 0 0 0-.018.108c-.006.475-.054.649-.115.87-.064.229-.135.488-.18 1.057-.11 1.414-.878 2.227-2.417 2.556-1.515.325-1.784-.496-2.02-1.221a7 7 0 0 0-.078-.227c-.215-.586-.19-1.412-.157-2.555.016-.561-.025-1.901-.33-2.646q.006-.44.019-.892a.4.4 0 0 0-.016-.113 2 2 0 0 0-.044-.208c-.122-.428-.42-.786-.78-.935-.142-.059-.403-.167-.717-.087.067-.276.183-.587.309-.925l.053-.142c.06-.16.134-.325.213-.5.426-.948 1.01-2.246.376-5.178-.237-1.098-1.03-1.634-2.232-1.51-.72.075-1.38.366-1.709.532a6 6 0 0 0-.196.104c.092-1.106.439-3.174 1.736-4.482a4 4 0 0 1 .303-.276.35.35 0 0 0 .145-.064c.752-.57 1.695-.85 2.802-.833q.616.01 1.174.081c1.94.355 3.244 1.447 4.036 2.383.814.962 1.255 1.931 1.431 2.454-1.323-.134-2.223.127-2.68.78-.992 1.418.544 4.172 1.282 5.496.135.242.252.452.289.54.24.583.551.972.778 1.256.07.087.138.171.189.245-.4.116-1.12.383-1.055 1.717-.013.156-.043.447-.084.815-.046.208-.07.46-.1.766m.89-1.621c-.04-.832.27-.919.597-1.01l.135-.041a1 1 0 0 0 .134.103c.57.376 1.583.421 3.007.134-.202.177-.519.4-.953.601-.41.19-1.096.333-1.747.364-.72.034-1.086-.08-1.173-.151m.57-9.271c-.006.35-.054.669-.105 1.001-.055.358-.112.728-.127 1.177-.014.436.04.89.093 1.33.107.887.216 1.8-.207 2.701a4 4 0 0 1-.188-.385 8 8 0 0 0-.325-.617c-.616-1.104-2.057-3.69-1.32-4.744.38-.543 1.342-.566 2.179-.463m.228 7.013-.085-.107-.035-.044c.726-1.2.584-2.387.457-3.439-.052-.432-.1-.84-.088-1.222.013-.407.066-.755.118-1.092.064-.415.13-.844.111-1.35a.6.6 0 0 0 .012-.19c-.046-.486-.6-1.938-1.73-3.253a7.8 7.8 0 0 0-2.688-2.04A9.3 9.3 0 0 1 17.62.746c2.052.046 3.675.814 4.824 2.283a1 1 0 0 1 .067.1c.723 1.356-.276 6.275-2.987 10.54m-8.816-6.116c-.025.18-.31.423-.621.423a1 1 0 0 1-.081-.006.8.8 0 0 1-.506-.315c-.046-.06-.12-.178-.106-.285a.22.22 0 0 1 .093-.149c.118-.089.352-.122.61-.086.316.044.642.193.61.418m7.93-.411c.011.08-.049.2-.153.31a.72.72 0 0 1-.408.223 1 1 0 0 1-.075.005c-.293 0-.541-.234-.56-.371-.024-.177.264-.31.56-.352.298-.042.612.009.636.185"/></g>
    <g opacity="0" transform="translate(366,111) scale(2)"><animate attributeName="opacity" values="0;1;1;0;0" keyTimes="0;0.02;0.31;0.35;1" dur="9s" begin="3s" repeatCount="indefinite"/><path fill="#7fd0dd" d="M16.405 5.501c-.115 0-.193.014-.274.033v.013h.014c.054.104.146.18.214.273.054.107.1.214.154.32l.014-.015c.094-.066.14-.172.14-.333-.04-.047-.046-.094-.08-.14-.04-.067-.126-.1-.18-.153zM5.77 18.695h-.927a51 51 0 0 0-.27-4.41h-.008l-1.41 4.41H2.45l-1.4-4.41h-.01a73 73 0 0 0-.195 4.41H0q.083-2.95.41-5.53h1.15l1.335 4.064h.008l1.347-4.064h1.095q.363 3.024.428 5.53zm4.017-4.08q-.567 3.069-1.492 4.46-.723 1.074-1.583 1.073-.228 0-.566-.138v-.494q.166.026.386.026.402 0 .647-.222.295-.27.295-.605 0-.233-.23-.944L6.23 14.615h.91l.727 2.36q.247.804.205 1.123.6-1.598.835-3.483zm12.325 4.08h-2.63v-5.53h.885v4.85h1.745zm-3.32.135-1.016-.5q.136-.113.255-.25.649-.76.648-2.253 0-2.745-2.155-2.746-1.056 0-1.65.697-.646.762-.646 2.245-.001 1.459.574 2.14.524.615 1.583.615.396 0 .725-.098l1.325.772.36-.622zM15.5 17.588q-.337-.541-.337-1.736 0-2.09 1.27-2.09.666 0 .977.5.336.543.336 1.723 0 2.107-1.27 2.108-.667 0-.978-.5zm-1.658-.425q0 .706-.516 1.156-.514.45-1.384.45c-.543 0-1.064-.172-1.573-.515l.237-.476q.656.329 1.19.328.498 0 .783-.22a.75.75 0 0 0 .3-.615c0-.33-.23-.61-.648-.845-.388-.213-1.163-.657-1.163-.657-.422-.307-.632-.636-.632-1.177q0-.674.47-1.085.471-.416 1.22-.415.769 0 1.4.41l-.213.476a2.7 2.7 0 0 0-1.064-.23q-.425 0-.654.206a.69.69 0 0 0-.248.524c0 .328.234.61.666.85.393.215 1.187.67 1.187.67.433.305.648.63.648 1.168zm9.382-5.852c-.535-.014-.95.04-1.297.188-.1.04-.26.04-.274.167.055.053.063.14.11.214.08.134.218.313.346.407q.208.167.427.31c.26.16.555.255.81.416.145.094.293.213.44.313.073.05.12.14.214.172v-.02c-.046-.06-.06-.147-.105-.214-.067-.067-.134-.127-.2-.193a3.2 3.2 0 0 0-.695-.675c-.214-.146-.682-.35-.77-.595l-.013-.014c.146-.013.32-.066.46-.106.227-.06.435-.047.67-.106q.16-.042.32-.094v-.06c-.12-.12-.21-.283-.334-.395a9 9 0 0 0-1.104-.823c-.21-.134-.476-.22-.697-.334-.08-.04-.214-.06-.26-.127-.12-.146-.19-.34-.275-.514a18 18 0 0 1-.547-1.163c-.12-.262-.193-.523-.34-.763-.69-1.137-1.437-1.826-2.586-2.5-.247-.14-.543-.2-.856-.274-.167-.008-.334-.02-.5-.027-.11-.047-.216-.174-.31-.235-.38-.24-1.364-.76-1.644-.072-.18.434.267.862.422 1.082.115.153.26.328.34.5.047.116.06.235.107.356.106.294.207.622.347.897.073.14.153.287.247.413.054.073.146.107.167.227-.094.136-.1.334-.154.5-.24.757-.146 1.693.194 2.25.107.166.362.534.703.393.3-.12.234-.5.32-.835.02-.08.007-.133.048-.187v.015c.094.188.188.367.274.555.206.328.566.668.867.895.16.12.287.328.487.402v-.02h-.015c-.043-.058-.1-.086-.154-.133a3.5 3.5 0 0 1-.35-.4 9 9 0 0 1-.747-1.218c-.11-.21-.202-.436-.29-.643-.04-.08-.04-.2-.107-.24-.1.146-.247.273-.32.453-.127.288-.14.642-.188 1.01-.027.007-.014 0-.027.014-.214-.052-.287-.274-.367-.46-.2-.475-.233-1.238-.06-1.785.047-.14.247-.582.167-.716-.042-.127-.174-.2-.247-.303a2.5 2.5 0 0 1-.24-.427c-.16-.374-.24-.788-.414-1.162-.08-.173-.22-.354-.334-.513-.127-.18-.267-.307-.368-.52-.033-.073-.08-.194-.027-.274.014-.054.042-.075.094-.09.088-.072.335.022.422.062.247.1.455.194.662.334.094.066.195.193.315.226h.14c.214.047.455.014.655.073.355.114.675.28.962.46a5.95 5.95 0 0 1 2.085 2.286c.08.154.115.295.188.455.14.33.313.663.455.982.14.315.275.636.476.897.1.14.502.213.682.286.133.06.34.115.46.188.23.14.454.3.67.454.11.076.443.243.463.378"/></g>
    <g opacity="0" transform="translate(366,111) scale(2)"><animate attributeName="opacity" values="0;1;1;0;0" keyTimes="0;0.02;0.31;0.35;1" dur="9s" begin="6s" repeatCount="indefinite"/><path fill="#d6ab7d" d="M23.157 4.412c-.676.284-.79.31-1.673.372-.65.045-.757.057-1.212.209-.75.246-1.395.75-2.02 1.59-.296.398-1.249 1.913-1.249 1.988 0 .057-.65.998-.915 1.32-.574.713-1.08 1.079-2.14 1.59-.77.36-1.224.524-4.102 1.477-1.073.353-2.133.738-2.367.864-.852.449-1.515 1.036-2.203 1.938-1.003 1.32-.972 1.313-3.042.947a12 12 0 0 0-.675-.063c-.644-.05-1.023.044-1.332.334L0 17.193l.177.088c.094.05.353.234.561.398.215.17.461.347.55.391.088.044.17.088.183.101s-.089.17-.228.353c-.435.581-.593.871-.574 1.048.019.164.032.17.43.17.517-.006.826-.056 1.261-.208.65-.233 2.058-.94 2.784-1.4.776-.5 1.717-.998 1.956-1.042.082-.02.354-.07.594-.114.58-.107 1.464-.095 2.587.05.108.013.373.045.6.064.227.025.43.057.454.076.026.012.474.037.998.056.934.026 1.104.007 1.3-.189.126-.133.385-.631.498-.985.209-.643.417-.921.366-.492-.113.966-.322 1.692-.713 2.411-.259.499-.663 1.092-.934 1.395-.322.347-.315.36.088.315.619-.063 1.471-.397 2.096-.82.827-.562 1.647-1.691 2.19-3.03.107-.27.22-.22.183.083-.013.094-.038.315-.057.498l-.031.328.353-.202c.833-.48 1.414-1.262 2.127-2.884.227-.518.877-2.922 1.073-3.976a10 10 0 0 1 .271-1.042c.127-.429.196-.555.48-.858.183-.19.625-.555.978-.808.72-.505.953-.75 1.187-1.205.208-.417.284-1.13.132-1.357-.132-.202-.284-.196-.763.006"/></g>
    <text opacity="0" x="390" y="52" text-anchor="middle" fill="#eef2fb" font-size="17" font-weight="700">PostgreSQL<animate attributeName="opacity" values="0;1;1;0;0" keyTimes="0;0.02;0.31;0.35;1" dur="9s" begin="0s" repeatCount="indefinite"/></text>
    <text opacity="0" x="390" y="52" text-anchor="middle" fill="#eef2fb" font-size="17" font-weight="700">MySQL<animate attributeName="opacity" values="0;1;1;0;0" keyTimes="0;0.02;0.31;0.35;1" dur="9s" begin="3s" repeatCount="indefinite"/></text>
    <text opacity="0" x="390" y="52" text-anchor="middle" fill="#eef2fb" font-size="17" font-weight="700">MariaDB<animate attributeName="opacity" values="0;1;1;0;0" keyTimes="0;0.02;0.31;0.35;1" dur="9s" begin="6s" repeatCount="indefinite"/></text>
    <text x="390" y="70" text-anchor="middle" fill="#8a95af" font-size="11.5">your source of truth</text>

    <!-- PGSync (right) -->
    <circle cx="565" cy="310" r="48" fill="url(#pg-card)" stroke="#8593ff" stroke-opacity="0.5"/>
    <g stroke="#aeb8ff" stroke-width="2.2" fill="#aeb8ff" stroke-linecap="round">
      <line x1="552" y1="304" x2="574" y2="304"/>
      <path d="M574 299 L580 304 L574 309 Z" stroke="none"/>
      <line x1="578" y1="316" x2="556" y2="316"/>
      <path d="M556 311 L550 316 L556 321 Z" stroke="none"/>
    </g>
    <text x="625" y="306" text-anchor="start" fill="#eef2fb" font-size="17" font-weight="700">PGSync</text>
    <text x="625" y="324" text-anchor="start" fill="#8a95af" font-size="11.5">change data capture</text>

    <!-- Search engine (left) — cross-fades Elasticsearch / OpenSearch -->
    <circle cx="215" cy="310" r="48" fill="url(#pg-card)" stroke="#2fd3b5" stroke-opacity="0.5"/>
    <g opacity="0" transform="translate(191,286) scale(2)"><animate attributeName="opacity" values="0;1;1;0;0" keyTimes="0;0.03;0.47;0.5;1" dur="9s" begin="0s" repeatCount="indefinite"/><path fill="#4fddc0" d="M13.394 0C8.683 0 4.609 2.716 2.644 6.667h15.641a4.77 4.77 0 0 0 3.073-1.11c.446-.375.864-.785 1.247-1.243l.001-.002A11.97 11.97 0 0 0 13.394 0M1.804 8.889a12 12 0 0 0 0 6.222h14.7a3.111 3.111 0 1 0 0-6.222zm.84 8.444C4.61 21.283 8.684 24 13.395 24c3.701 0 7.011-1.677 9.212-4.312l-.001-.002a10 10 0 0 0-1.247-1.243 4.77 4.77 0 0 0-3.073-1.11z"/></g>
    <g opacity="0" transform="translate(191,286) scale(2)"><animate attributeName="opacity" values="0;1;1;0;0" keyTimes="0;0.03;0.47;0.5;1" dur="9s" begin="4.5s" repeatCount="indefinite"/><path fill="#6fb0ec" d="M23.152 8.813a.85.85 0 0 0-.849.848c0 6.982-5.66 12.642-12.642 12.642a.849.849 0 0 0 0 1.697C17.581 24 24 17.58 24 9.661a.85.85 0 0 0-.848-.848M18.03 14.25c.816-1.331 1.606-3.106 1.45-5.59C19.16 3.513 14.497-.392 10.095.03 8.372.197 6.602 1.601 6.76 4.118c.068 1.093.603 1.738 1.473 2.234.828.473 1.891.772 3.097 1.11 1.456.41 3.145.87 4.444 1.827 1.556 1.147 2.62 2.476 2.257 4.961m-16.56-9C.653 6.581-.136 8.356.02 10.84c.321 5.147 4.983 9.052 9.385 8.629 1.723-.166 3.492-1.57 3.335-4.087-.068-1.093-.603-1.738-1.473-2.234-.828-.473-1.891-.772-3.097-1.11-1.456-.41-3.145-.87-4.444-1.827C2.17 9.064 1.106 7.735 1.47 5.25"/></g>
    <text opacity="0" x="155" y="306" text-anchor="end" fill="#eef2fb" font-size="17" font-weight="700">Elasticsearch<animate attributeName="opacity" values="0;1;1;0;0" keyTimes="0;0.03;0.47;0.5;1" dur="9s" begin="0s" repeatCount="indefinite"/></text>
    <text opacity="0" x="155" y="306" text-anchor="end" fill="#eef2fb" font-size="17" font-weight="700">OpenSearch<animate attributeName="opacity" values="0;1;1;0;0" keyTimes="0;0.03;0.47;0.5;1" dur="9s" begin="4.5s" repeatCount="indefinite"/></text>
    <text x="155" y="324" text-anchor="end" fill="#8a95af" font-size="11.5">search by meaning</text>

    <!-- PGSync Pro (bottom, hero) -->
    <circle cx="390" cy="485" r="50" fill="url(#pg-card)" stroke="#22d3ee" stroke-opacity="0.9" stroke-width="1.6"/>
    <path d="M390 470 C391.6 481 393.6 483 404.5 485 C393.6 487 391.6 489 390 500 C388.4 489 386.4 487 375.5 485 C386.4 483 388.4 481 390 470 Z" fill="#5ee7f5"/>
    <text x="390" y="560" text-anchor="middle" fill="#ffffff" font-size="18" font-weight="700">PGSync Pro</text>
    <text x="390" y="578" text-anchor="middle" fill="#7fd7e6" font-size="11.5">embeddings · change-guard</text>
  </g>
</svg>
</div>
</div>

---

## What you get

<div class="grid cards" markdown>

-   :material-clock-fast:{ .lg .middle } **Always fresh**

    ---

    Vectors stay in sync with your database via CDC. No nightly reindex jobs, no
    stale search results.

-   :material-shield-key:{ .lg .middle } **The change-guard**

    ---

    Re-embed only when the embedded text changes. Unrelated column updates are
    free — and easy on your embedding bill.

-   :material-vector-combine:{ .lg .middle } **Semantic + hybrid**

    ---

    Vector kNN fused with keyword BM25 (reciprocal rank fusion) — the best of
    meaning and exact match.

-   :material-server-security:{ .lg .middle } **Runs in your infra**

    ---

    Local `sentence-transformers` embeddings mean text never leaves your
    environment. OpenAI / Cohere / Voyage optional.

-   :material-robot-happy:{ .lg .middle } **Agent-ready (MCP)**

    ---

    An MCP server exposes search to Claude Desktop, Claude Code, or your own
    agent — retrieval over live data.

-   :material-check-decagram:{ .lg .middle } **Preflight checks**

    ---

    `pgsync-pro validate` verifies your schema and connections before indexing —
    catching mistakes with actionable errors.

</div>

PGSync and django-pgsync stay free and MIT forever. Pro adds the semantic layer
on top — the same `schema.json` and CLI, plus an `embedding` block.

---

<div align="center" markdown>

**Next:** see the whole pipeline animated, then the plans.

[:material-play-circle: How it works](../how-it-works/index.md){ .md-button .md-button--primary }
[:material-tag: See pricing](../pricing/index.md){ .md-button }

</div>

# Freshi Healthy Fusion — SIGNATURE

- Slug: freshi-healthy-fusion
- Live: https://freshi-healthy-fusion.vercel.app
- Repo: https://github.com/semajzandrews/freshi-healthy-fusion (private)
- Business: juice bar / healthy food, 313 Glenwood Ave, Bloomfield NJ 07003 · 4.5★ Google (56 reviews) · phone (973) 707-2135 → tap-to-call is the primary mobile CTA
- Built: 07-04-2026 · batch: Bloomfield Center #1

## Design fingerprint
- Palette: warm cream (#fbf3e2) base, citrus (#ffa62b), mango (#ffc94d), leaf (#b8d94a), berry (#ff9d8a), near-black ink (#1c1a12) — LIGHT theme (contract: distinct from six-points dark / spa dusk)
- Signature move (ONE per site): scroll-driven background color morph — page bg lerps hue between color-block sections via one CSS var + rAF (BgMorph.tsx); prefers-reduced-motion snaps instead of lerping
- Skeleton: color-block architecture — full-width alternating hue blocks, one product family each (01 cold-pressed → 02 smoothies → 03 bowls → 04 wraps), oversized Khand display type, cut-out-style blob-masked product photography with hard offset shadows. Menu is typographic blocks, NOT cards, NOT editorial list.
- Sections: video hero → 4 menu color blocks → produce strip (static 5-tile grid, no marquee) → About (+IG CTA) → Map/Visit → footer
- Fixed call pill: full "Call the bar" pill on desktop, collapses to 46px icon circle on phones, number in aria-label (ARSENAL §13)
- Menu integrity: representative categories only — no fabricated named products or prices ("walk in or call for today's full board and prices")

## Arsenal Manifest
- Primary medium: video + photography — juice bar sells color and freshness; a slow-motion blend loop is the category in one shot (Bloomfield's diverse walk-in clientele)
- Video considered: yes — used: yes — Mixkit 48342 "Blended fruit juice in slow motion" hero loop, 720p+360p pair, poster fallback, frame visually verified [BUILD_RULES §7]
- Media used (all self-hosted in public/, no hotlinks) — each file referenced in EXACTLY ONE slot, gate below:
  - video — Mixkit id 48342 — slow-motion berry blend in blender — hero loop (verified 206 ranged curl, frame extracted + eyeballed)
  - photo — Pexels 1233319 — three fresh juice carafes on wood — Cold-pressed block (banked new, contact-sheet verified)
  - photo — Pexels 8181545 — colorful smoothie mason jars — Smoothies block (library claim juice/smoothie)
  - photo — Pexels 14167805 — acai bowl, berries + granola top-down — Bowls block (banked new, verified)
  - photo — Pexels 36285423 — crisp lettuce close-up — Wraps & bites block (library claim produce/leafy-greens)
  - photo — Pexels 38044473 — crate of oranges — produce strip (library claim produce/oranges)
  - photo — Pexels 1998893 — bowl of strawberries — produce strip (library claim produce/strawberries)
  - photo — Pexels 1337825 — watermelon juice on red — produce strip (banked new, verified)
  - photo — Pexels 863998 — acai bowl black bowl, coconut — produce strip (banked new, verified)
  - photo — Pexels 17612826 — green smoothie tall glass — produce strip (library claim juice/smoothie)
  - photo — Pexels 7656388 — three smoothies on wooden shelf — About column (library claim juice/smoothie)
  - photo — Pexels 8215110 — tropical juices + pineapple outdoors — About column (library claim juice/smoothie)
  - Spare claimed but NOT shipped: Pexels 37681139 (produce/mango) — contact sheet showed unripe green mangoes on a tree; off-appetite, left on shelf
  - All banked + verified in image-library registry under freshi-healthy-fusion
- Candidates rejected at contact-sheet verification: 1292862 (tea cup), 1346155 (water glass), 3323682 + 4021983 (read as cocktails)
- Motion / WebGL technique: IntersectionObserver reveal (custom cubic-bezier rise) + Lenis smooth scroll + rAF background-lerp signature — all custom to brand, no library defaults, no marquee/drag-row/pinned-horizontal
- Custom icons: original juice-drop-in-circle favicon (inline data-URI SVG, citrus + leaf) — license: original work — single source: yes (favicon only; phone glyph is a plain inline path)
- Fontshare pairing: Khand (display, condensed) + Alpino (body) — first use across the registry, self-hosted woff2
- GPU-verified: n/a — no shader/WebGL (2D + video only, per bundle doctrine)

## Image-uniqueness gate (pre-ship, REQUIRED)
- `grep -rhoE '/img/[0-9]+\.jpg' src | sort | uniq -c` → 11 image refs, every count == 1. PASS (07-04-2026).

## Email enrichment (recon)
- Public business email: NONE FOUND (searched Facebook/Instagram/Yelp/web 07-04-2026)
- Verified-exact socials: Instagram @freshihealthyfusion (shown on site), Facebook page id 116794098026048 (exists; not linked on site — handle-less numeric page)
- Upsell intel: business is live on Seamless/Grubhub (id 5084864), Uber Eats and Postmates — ordering-platform dependence = future direct-ordering upsell

## Verification
- Prod build: clean static export, all pages prerendered (`npm run build` PASS; vercel prebuilt deploy)
- Live checks (curl on prod HTML): hero copy, 4 menu blocks, tel: links, IG link, map output=embed, video sources, bysemaj footer — all present; lang="en"
- Mobile: no fixed-width >375px; all type clamp(); call pill 46px circle on phones; map gets 3/4 portrait aspect + min 360px on phones
- Map: keyless Google output=embed (Ramos pattern) + light citrus ::after tint (no iframe filter) — verify on live in real Chrome per doctrine
- Facts on site: only verified lead data (name, address, phone, 4.5★/56 reviews, verified IG). No invented hours, no fabricated menu items/prices.

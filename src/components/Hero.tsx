import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section id="top" data-bg="#fbf3e2" className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/video/poster.jpg"
        preload="metadata"
      >
        <source src="/video/48342-720.mp4" type="video/mp4" media="(min-width: 640px)" />
        <source src="/video/48342-360.mp4" type="video/mp4" />
      </video>
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(251,243,226,1) 0%, rgba(251,243,226,0.55) 26%, rgba(28,26,18,0.18) 70%)",
        }}
        aria-hidden
      />
      <div className="relative mx-auto w-full max-w-6xl px-4 pb-14 pt-32 sm:px-6 sm:pb-20">
        <Reveal>
          <p className="kicker mb-3 text-ink">
            Juice bar · 313 Glenwood Ave, Bloomfield NJ
          </p>
          <h1 className="text-[clamp(3.4rem,13vw,9.5rem)]">
            Drink your
            <br />
            <span className="text-leaf-deep">colors.</span>
          </h1>
        </Reveal>
        <Reveal delay={140}>
          <div className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-4">
            <p className="max-w-md text-ink-soft">
              Cold-pressed juices, blended smoothies, fruit bowls and fresh wraps —
              made loud, bright and healthy in Bloomfield.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#menu"
                className="display rounded-full bg-citrus px-6 py-2.5 text-base text-ink transition-transform hover:scale-105"
              >
                See the menu
              </a>
              <p className="display text-base text-ink">
                ★ 4.5 <span className="font-body text-sm font-normal text-ink-soft">· 56 Google reviews</span>
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

import Reveal from "./Reveal";

const COLOR_LETTERS = [
  "text-citrus-deep",
  "text-mango-deep",
  "text-leaf-deep",
  "text-berry-deep",
];

export default function Hero() {
  return (
    <section
      id="top"
      data-bg="#fbf3e2"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-24"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-4 pb-14 sm:px-6 md:grid-cols-[1.15fr_0.85fr] md:gap-12">
        <div>
          <Reveal>
            <p className="kicker mb-4 text-ink">
              Juice bar · 313 Glenwood Ave, Bloomfield NJ
            </p>
            <h1 className="text-[clamp(3.6rem,10.5vw,8.5rem)] leading-[0.92]">
              Drink your
              <br />
              <span aria-label="colors.">
                {"colors.".split("").map((ch, i) => (
                  <span key={i} aria-hidden className={COLOR_LETTERS[i % COLOR_LETTERS.length]}>
                    {ch}
                  </span>
                ))}
              </span>
            </h1>
          </Reveal>
          <Reveal delay={140}>
            <div className="mt-7 flex flex-wrap items-center gap-x-8 gap-y-4">
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
                  ★ 4.5{" "}
                  <span className="font-body text-sm font-normal text-ink-soft">
                    · 56 Google reviews
                  </span>
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* blend cam — the video, framed instead of full-bleed */}
        <Reveal delay={220}>
          <div className="relative">
            <div aria-hidden className="absolute -inset-3 -rotate-2 rounded-[2rem] bg-leaf" />
            <div className="relative overflow-hidden rounded-[1.6rem] border-4 border-ink/10">
              <video
                className="aspect-[4/5] h-full w-full object-cover md:aspect-[3/4]"
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
              <p className="display absolute bottom-3 left-4 rounded-full bg-ink/70 px-4 py-1 text-sm uppercase tracking-wider text-cream">
                ● The blend cam
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

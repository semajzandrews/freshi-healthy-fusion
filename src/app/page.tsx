import Image from "next/image";
import BgMorph from "@/components/BgMorph";
import CallPill from "@/components/CallPill";
import CallOrText from "@/components/CallOrText";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import SmoothScroll from "@/components/SmoothScroll";

import { site } from "@/lib/site";

const ADDRESS = "313 Glenwood Ave, Bloomfield, NJ 07003";

// COLOR-BLOCK ARCHITECTURE: each full-width block owns one product family.
// The page background morphs to the block's hue as it scrolls into view (BgMorph).
const BLOCKS = [
  {
    id: "cold-pressed",
    bg: "#ffa62b",
    n: "01",
    title: "Cold-pressed juices",
    body: "Fruit and greens pressed slow so nothing good gets cooked out. Citrus-bright, beet-deep, ginger-hot — pressed fresh, poured cold.",
    img: "/img/1233319.jpg",
    alt: "Three carafes of fresh-pressed juice in red, orange and citrus tones on a wooden table",
    cut: "cutout",
  },
  {
    id: "smoothies",
    bg: "#ffc94d",
    n: "02",
    title: "Blended smoothies",
    body: "Whole fruit in a cup. Thick, cold and loud with color — blended to order, sweetened by the fruit itself.",
    img: "/img/8181545.jpg",
    alt: "Row of colorful smoothies in mason jars, green through orange to deep berry red",
    cut: "cutout-alt",
  },
  {
    id: "bowls",
    bg: "#ff9d8a",
    n: "03",
    title: "Fruit & blended bowls",
    body: "Thick blends you eat with a spoon, piled with fresh fruit, granola and coconut. Breakfast, lunch or the good kind of dessert.",
    img: "/img/14167805.jpg",
    alt: "Acai bowl topped with raspberries, blueberries, granola and mint",
    cut: "cutout",
  },
  {
    id: "wraps",
    bg: "#b8d94a",
    n: "04",
    title: "Wraps & fresh bites",
    body: "The healthy-food half of the fusion — crisp greens and fresh-made bites to go with whatever you're sipping.",
    img: "/img/36285423.jpg",
    alt: "Close-up of crisp fresh lettuce leaves",
    cut: "cutout-alt",
  },
];

const STRIP = [
  { img: "/img/38044473.jpg", alt: "Crate of fresh oranges" },
  { img: "/img/1998893.jpg", alt: "Bowl of ripe strawberries" },
  { img: "/img/1337825.jpg", alt: "Watermelon juice with a fresh watermelon slice" },
  { img: "/img/863998.jpg", alt: "Acai bowl with raspberries, blueberries and coconut" },
  { img: "/img/17612826.jpg", alt: "Bright green smoothie in a tall glass" },
];

export default function Home() {
  return (
    <main className="flex-1">
      <SmoothScroll />
      <BgMorph />
      <Nav />
      <CallPill />
      <Hero />

      {/* MENU — typographic color blocks, one product family each */}
      <section id="menu">
        {BLOCKS.map((b, i) => (
          <div key={b.id} id={b.id} data-bg={b.bg} className="px-4 py-20 sm:px-6 sm:py-28">
            <div
              className={`mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2 ${
                i % 2 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              <Reveal>
                <div className={`relative mx-auto aspect-[4/5] w-full max-w-[26rem] ${b.cut}`}>
                  <Image
                    src={b.img}
                    alt={b.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 90vw, 26rem"
                  />
                </div>
              </Reveal>
              <div>
                <Reveal>
                  <p className="display text-[clamp(3rem,9vw,6rem)] text-ink/25">{b.n}</p>
                  <h2 className="mt-1 text-[clamp(2.6rem,8vw,5.2rem)]">{b.title}</h2>
                </Reveal>
                <Reveal delay={140}>
                  <p className="mt-5 max-w-md text-lg text-ink/80">{b.body}</p>
                </Reveal>
              </div>
            </div>
          </div>
        ))}
        <p className="mx-auto max-w-6xl px-4 pb-4 text-sm text-ink-soft sm:px-6">
          Menu shown by family — walk in or call for today&apos;s full board and prices.
        </p>
      </section>

      {/* Fresh strip */}
      <section data-bg="#fbf3e2" className="px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="kicker mb-6">Straight from the produce</p>
          </Reveal>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
            {STRIP.map((s, i) => (
              <Reveal key={s.img} delay={i * 90} className={i === 4 ? "col-span-2 sm:col-span-1" : ""}>
                <div className="relative aspect-square overflow-hidden rounded-xl">
                  <Image src={s.img} alt={s.alt} fill className="object-cover" sizes="(max-width: 640px) 45vw, 20vw" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" data-bg="#fbf3e2" className="px-4 py-20 sm:px-6 sm:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
          <div>
            <Reveal>
              <p className="kicker mb-3">About</p>
              <h2 className="text-[clamp(2.2rem,6vw,3.6rem)]">
                Healthy, but make it <span className="text-citrus-deep">Bloomfield.</span>
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-6 text-ink/80">
                Freshi Healthy Fusion is Bloomfield&apos;s neighborhood juice bar on Glenwood
                Ave — the fusion is right there in the name: fresh juice culture meets
                healthy food you actually crave.
              </p>
              <p className="mt-4 text-ink/80">
                Rated 4.5 stars across 56 Google reviews by the neighbors who keep coming
                back. Walk in, point at a color, walk out better.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <CallOrText variant="inline" />
                <a
                  href="https://www.instagram.com/freshihealthyfusion/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="display rounded-full border-2 border-ink px-6 py-2.5 text-base transition-transform hover:scale-105"
                >
                  @freshihealthyfusion
                </a>
              </div>
            </Reveal>
          </div>
          <div className="grid grid-cols-2 items-end gap-4">
            <Reveal>
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
                <Image
                  src="/img/7656388.jpg"
                  alt="Three fruit smoothies with berries and kiwi on a wooden shelf"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 45vw, 22vw"
                />
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl sm:mb-10">
                <Image
                  src="/img/8215110.jpg"
                  alt="Tropical fruit juices with a fresh pineapple and apples outdoors"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 45vw, 22vw"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Visit */}
      <section id="visit" data-bg="#ffc94d" className="px-4 py-20 sm:px-6 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="kicker mb-3">Visit</p>
            <h2 className="text-[clamp(2.2rem,6vw,3.6rem)]">Find the fresh.</h2>
            <p className="mt-4 max-w-md text-ink/80">
              313 Glenwood Ave, Bloomfield, NJ 07003 — right in the neighborhood.
              Call ahead and it&apos;s waiting for you.
            </p>
          </Reveal>
          <Reveal delay={140}>
            <div
              className="map-frame mt-10 rounded-2xl max-sm:aspect-[3/4] max-sm:min-h-[360px] max-sm:h-auto"
              style={{ height: "clamp(360px, 38vw, 440px)" }}
            >
              <iframe
                title={`Freshi Healthy Fusion location — ${ADDRESS}`}
                src="https://www.google.com/maps?q=313+Glenwood+Ave,+Bloomfield,+NJ+07003&z=16&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Footer */}
      <footer data-bg="#fbf3e2" className="border-t border-[var(--hairline)] px-4 py-10 sm:px-6">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <p className="display text-2xl">
              Freshi
              <span className="ml-1.5 inline-block h-2.5 w-2.5 rounded-full bg-leaf align-middle" aria-hidden />
            </p>
            <p className="mt-2 text-sm text-ink-soft">{ADDRESS}</p>
            <p className="text-sm text-ink-soft">
              <a href={site.phoneHref} className="hover:text-ink">
                {site.phone}
              </a>
              {" · "}
              <a
                href="https://www.instagram.com/freshihealthyfusion/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-ink"
              >
                Instagram
              </a>
            </p>
          </div>
          <p className="text-sm text-ink-soft">
            built by{" "}
            <a
              href="https://bysemaj.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-ink underline underline-offset-4"
            >
              bysemaj.com
            </a>
          </p>
        </div>
      </footer>
    </main>
  );
}

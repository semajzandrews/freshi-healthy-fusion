"use client";

import { useEffect, useState } from "react";
import CallOrText from "./CallOrText";

const LINKS = [
  { href: "#menu", label: "Menu" },
  { href: "#about", label: "About" },
  { href: "#visit", label: "Visit" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-cream/85 shadow-[0_1px_0_var(--hairline)] backdrop-blur-md" : ""
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <a href="#top" className="display text-2xl leading-none tracking-wide">
          Freshi
          <span className="ml-1.5 inline-block h-2.5 w-2.5 rounded-full bg-leaf align-middle" aria-hidden />
        </a>
        <div className="flex items-center gap-5 sm:gap-7">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="kicker hidden text-ink-soft transition-colors hover:text-ink sm:inline"
            >
              {l.label}
            </a>
          ))}
          <CallOrText />
        </div>
      </nav>
    </header>
  );
}

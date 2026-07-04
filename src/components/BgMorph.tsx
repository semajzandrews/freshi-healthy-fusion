"use client";

// SIGNATURE MOVE (one per site): scroll-driven background color morph.
// The page background smoothly interpolates hue between color-block sections
// as you scroll. Sections carry data-bg="#hex"; this lerps between consecutive
// section colors based on scroll position. Pure rAF + one CSS variable — cheap.

import { useEffect } from "react";

function hexToRgb(hex: string): [number, number, number] {
  const h = hex.replace("#", "");
  return [
    parseInt(h.slice(0, 2), 16),
    parseInt(h.slice(2, 4), 16),
    parseInt(h.slice(4, 6), 16),
  ];
}

export default function BgMorph() {
  useEffect(() => {
    const root = document.documentElement;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let stops: { top: number; rgb: [number, number, number] }[] = [];

    const measure = () => {
      stops = Array.from(document.querySelectorAll<HTMLElement>("[data-bg]")).map((el) => ({
        top: el.getBoundingClientRect().top + window.scrollY,
        rgb: hexToRgb(el.dataset.bg as string),
      }));
      stops.sort((a, b) => a.top - b.top);
    };

    const paint = () => {
      if (!stops.length) return;
      // anchor: color fully arrives when the section top reaches 45% of viewport
      const y = window.scrollY + window.innerHeight * 0.45;
      let a = stops[0];
      let b = stops[0];
      for (let i = 0; i < stops.length; i++) {
        if (stops[i].top <= y) {
          a = stops[i];
          b = stops[i + 1] ?? stops[i];
        }
      }
      let t = 0;
      if (b.top !== a.top) t = Math.min(1, Math.max(0, (y - a.top) / (b.top - a.top)));
      if (reduced) t = t < 0.5 ? 0 : 1;
      const c = a.rgb.map((v, i) => Math.round(v + (b.rgb[i] - v) * t));
      root.style.setProperty("--page-bg", `rgb(${c[0]}, ${c[1]}, ${c[2]})`);
    };

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        paint();
        ticking = false;
      });
    };
    const onResize = () => {
      measure();
      paint();
    };

    measure();
    paint();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);
  return null;
}

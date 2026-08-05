"use client";

// PHONE DOCTRINE — Call OR Text, never call-only.
// Plenty of the lunch crowd will never dial but will happily text an order in.
// Display is always (973) 707-2135; every href is E.164 out of lib/phone.
//
// Freshi treatment: the trigger is one of the site's rounded-full display pills,
// and the popover borrows the cut-out language — cream card, 2px ink outline,
// hard offset shadow, citrus wash on hover. Root class is `cot`, never `wrap`.

import { useEffect, useRef, useState } from "react";
import { telHref, smsHref, formatPhone } from "@/lib/phone";
import { site } from "@/lib/site";

function PhoneIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z"
        fill="currentColor"
      />
    </svg>
  );
}

function MessageIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

type Props = {
  variant?: "pill" | "inline";
  /** pill only — visual weight of the trigger */
  tone?: "ink" | "outline";
  /** pill only — open the popover upward (for the fixed bottom-right button) */
  drop?: "down" | "up";
  /** pill only — hide the number on small screens (nav / fixed button) */
  collapse?: boolean;
  label?: string;
  className?: string;
};

const PRETTY = formatPhone(site.phoneDigits);
const TEL = telHref(site.phoneDigits);
const SMS = smsHref(site.phoneDigits, site.smsBody);

export default function CallOrText({
  variant = "pill",
  tone = "ink",
  drop = "down",
  collapse = false,
  label,
  className = "",
}: Props) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  if (variant === "inline") {
    return (
      <div className={`flex flex-wrap gap-3 ${className}`}>
        <a
          href={TEL}
          className="display inline-flex items-center gap-2 rounded-full bg-ink px-6 py-2.5 text-base text-cream transition-transform hover:scale-105"
        >
          <PhoneIcon size={15} /> Call {PRETTY}
        </a>
        <a
          href={SMS}
          className="display inline-flex items-center gap-2 rounded-full border-2 border-ink px-6 py-2.5 text-base transition-transform hover:scale-105"
        >
          <MessageIcon size={15} /> Text your order
        </a>
      </div>
    );
  }

  const trigger =
    tone === "outline"
      ? "border-2 border-ink text-ink"
      : "bg-ink text-cream";

  return (
    <div className={`relative ${className}`} ref={rootRef}>
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="menu"
        aria-label={`Call or text ${site.name} at ${PRETTY}`}
        onClick={() => setOpen((v) => !v)}
        className={`display flex h-[46px] items-center justify-center gap-2 rounded-full px-4 text-sm leading-none transition-transform hover:scale-105 ${trigger} ${
          collapse ? "w-[46px] sm:w-auto sm:px-5" : "px-5"
        }`}
      >
        <PhoneIcon size={17} />
        <span className={collapse ? "hidden sm:inline" : "inline"}>
          {label ?? PRETTY}
        </span>
      </button>

      <div
        role="menu"
        data-open={open}
        className={`absolute right-0 z-[60] w-[17rem] rounded-[1.6rem_1.1rem_1.6rem_1.1rem] border-2 border-ink bg-cream p-1.5 shadow-[0.45rem_0.45rem_0_rgba(28,26,18,0.92)] transition duration-200 ${
          drop === "up" ? "bottom-[calc(100%+0.7rem)]" : "top-[calc(100%+0.7rem)]"
        } ${
          open
            ? "pointer-events-auto scale-100 opacity-100"
            : "pointer-events-none translate-y-1 scale-95 opacity-0"
        }`}
      >
        <a
          href={TEL}
          role="menuitem"
          onClick={() => setOpen(false)}
          className="flex items-start gap-3 rounded-[1.2rem] px-3.5 py-3 transition-colors hover:bg-citrus/35"
        >
          <span className="mt-0.5 text-leaf-deep">
            <PhoneIcon size={18} />
          </span>
          <span>
            <span className="kicker block">Call the bar</span>
            <span className="mt-1 block text-sm text-ink-soft">{PRETTY}</span>
          </span>
        </a>
        <a
          href={SMS}
          role="menuitem"
          onClick={() => setOpen(false)}
          className="flex items-start gap-3 rounded-[1.2rem] px-3.5 py-3 transition-colors hover:bg-leaf/40"
        >
          <span className="mt-0.5 text-citrus-deep">
            <MessageIcon size={18} />
          </span>
          <span>
            <span className="kicker block">Text your order</span>
            <span className="mt-1 block text-sm text-ink-soft">
              Send it ahead, grab it on your way
            </span>
          </span>
        </a>
      </div>
    </div>
  );
}

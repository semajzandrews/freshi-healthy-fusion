// Fixed tap-to-call — the mobile money button (ARSENAL §13).
// Full pill on desktop; collapses to a ~46px icon circle on phones,
// number kept in the aria-label.
export default function CallPill() {
  return (
    <a
      href="tel:+19737072135"
      aria-label="Call Freshi Healthy Fusion at (973) 707-2135"
      className="fixed bottom-5 right-5 z-50 flex h-[46px] w-[46px] items-center justify-center rounded-full bg-leaf-deep text-cream shadow-lg transition-transform hover:scale-105 sm:w-auto sm:gap-2.5 sm:px-6"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z"
          fill="currentColor"
        />
      </svg>
      <span className="display hidden text-sm leading-none sm:inline">Call the bar</span>
    </a>
  );
}

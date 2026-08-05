"use client";

// Fixed tap-to-order — the mobile money button (ARSENAL §13).
// Call OR Text: half this crowd would rather send the order than say it out loud.
// Collapses to a ~46px icon circle on phones; popover opens upward.
import CallOrText from "./CallOrText";

export default function CallPill() {
  return (
    <CallOrText
      drop="up"
      collapse
      className="fixed bottom-5 right-5 z-50"
    />
  );
}

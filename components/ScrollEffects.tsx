"use client";

import { useEffect } from "react";

/**
 * Global scroll-driven polish: fades/slides [data-reveal] elements into
 * view once, and staggers any [data-bar] children inside a revealed
 * element (used by the DevOps pipeline progress bars). Mirrors the
 * behavior of the original Design Component's componentDidMount.
 */
export default function ScrollEffects() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));

    if (reduceMotion) {
      els.forEach((el) => el.classList.add("is-visible"));
      document.querySelectorAll<HTMLElement>("[data-bar]").forEach((b) => b.classList.add("is-visible"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          el.classList.add("is-visible");
          io.unobserve(el);
          const bars = Array.from(el.querySelectorAll<HTMLElement>("[data-bar]"));
          bars.forEach((bar, i) => {
            setTimeout(() => bar.classList.add("is-visible"), 120 + i * 140);
          });
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return null;
}

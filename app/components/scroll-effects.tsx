import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

export function ScrollEffects() {
  useEffect(() => {
    const lenis = new Lenis({
      anchors: { duration: 0.9, offset: -84 },
      autoRaf: true,
      duration: 1.05,
      respectReducedMotion: true,
      smoothWheel: true,
      stopInertiaOnNavigate: true,
    });

    const root = document.documentElement;
    root.classList.add("has-scroll-reveal");

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reducedMotion.matches) {
      return () => {
        root.classList.remove("has-scroll-reveal");
        lenis.destroy();
      };
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("is-visible", entry.isIntersecting);
        });
      },
      { rootMargin: "0px 0px -9%", threshold: 0.08 },
    );

    document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((element) => {
      observer.observe(element);
    });

    return () => {
      root.classList.remove("has-scroll-reveal");
      observer.disconnect();
      lenis.destroy();
    };
  }, []);

  return null;
}

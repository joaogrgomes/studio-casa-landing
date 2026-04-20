import { useEffect } from "react";

export function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");

    // Immediately reveal anything already above the fold so content is
    // never permanently hidden if the observer fires before scroll begins.
    els.forEach((el) => {
      if (el.getBoundingClientRect().top < window.innerHeight) {
        el.classList.add("is-visible");
      }
    });

    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    els.forEach((el) => {
      if (!el.classList.contains("is-visible")) io.observe(el);
    });

    // Hard fallback: reveal everything after 1.5 s in case the observer stalls.
    const timer = setTimeout(() => {
      document.querySelectorAll<HTMLElement>(".reveal:not(.is-visible)").forEach(
        (el) => el.classList.add("is-visible")
      );
    }, 1500);

    return () => {
      io.disconnect();
      clearTimeout(timer);
    };
  }, []);
}

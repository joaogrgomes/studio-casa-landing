import { useEffect } from "react";

export function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");

    // Always make every element visible immediately.
    // Content must never start hidden — IntersectionObserver is purely
    // additive enhancement and cannot be the gatekeeper for visibility.
    els.forEach((el) => el.classList.add("is-visible"));
  }, []);
}

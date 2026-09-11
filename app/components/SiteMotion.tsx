"use client";

import { useEffect, useRef } from "react";

export function SiteMotion() {
  const progressRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = document.documentElement;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    root.classList.add("motion-ready");

    const revealItems = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8%" },
    );

    for (const item of revealItems) observer.observe(item);

    let frame = 0;
    const updateScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        const progress = max > 0 ? window.scrollY / max : 0;
        progressRef.current?.style.setProperty("--scroll-progress", String(progress));
        frame = 0;
      });
    };

    const updatePointer = (event: PointerEvent) => {
      cursorRef.current?.style.setProperty("transform", `translate3d(${event.clientX}px, ${event.clientY}px, 0)`);
      root.style.setProperty("--pointer-x", `${event.clientX}px`);
      root.style.setProperty("--pointer-y", `${event.clientY}px`);
    };

    const heroVisual = document.querySelector<HTMLElement>(".hero-visual");
    const tiltHero = (event: PointerEvent) => {
      if (!heroVisual || reducedMotion) return;
      const bounds = heroVisual.getBoundingClientRect();
      const x = (event.clientX - bounds.left) / bounds.width - 0.5;
      const y = (event.clientY - bounds.top) / bounds.height - 0.5;
      heroVisual.style.setProperty("--tilt-x", `${y * -2.2}deg`);
      heroVisual.style.setProperty("--tilt-y", `${x * 2.2}deg`);
    };
    const resetHero = () => {
      heroVisual?.style.setProperty("--tilt-x", "0deg");
      heroVisual?.style.setProperty("--tilt-y", "0deg");
    };

    window.addEventListener("scroll", updateScroll, { passive: true });
    window.addEventListener("pointermove", updatePointer, { passive: true });
    heroVisual?.addEventListener("pointermove", tiltHero, { passive: true });
    heroVisual?.addEventListener("pointerleave", resetHero);
    updateScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", updateScroll);
      window.removeEventListener("pointermove", updatePointer);
      heroVisual?.removeEventListener("pointermove", tiltHero);
      heroVisual?.removeEventListener("pointerleave", resetHero);
      if (frame) window.cancelAnimationFrame(frame);
      root.classList.remove("motion-ready");
    };
  }, []);

  return (
    <>
      <div className="scroll-progress" ref={progressRef} aria-hidden="true" />
      <div className="ambient-cursor" ref={cursorRef} aria-hidden="true" />
    </>
  );
}

"use client";

import { useEffect } from "react";

export function SiteMotion() {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("motion-ready");

    const items = [...document.querySelectorAll<HTMLElement>(".reveal, .stagger, .review-sheet, .draw-now")];
    const observer = new IntersectionObserver(
      entries =>
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0.12, rootMargin: "0px 0px -6%" }
    );
    items.forEach(item => observer.observe(item));

    const sections = [...document.querySelectorAll<HTMLElement>("section[id]")];
    const navLinks = [...document.querySelectorAll<HTMLAnchorElement>(".nav-links a")];
    let frame = 0;
    const update = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        root.classList.toggle("has-scrolled", window.scrollY > 40);
        const current = sections.reduce(
          (active, section) => (window.scrollY >= section.offsetTop - 220 ? section.id : active),
          "home"
        );
        navLinks.forEach(link => link.classList.toggle("active", link.hash === `#${current}`));
        frame = 0;
      });
    };
    window.addEventListener("scroll", update, { passive: true });
    update();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", update);
      if (frame) cancelAnimationFrame(frame);
      root.classList.remove("motion-ready", "has-scrolled");
    };
  }, []);
  return null;
}

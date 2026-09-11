/* eslint-disable jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/no-noninteractive-tabindex */
"use client";

import { useRef } from "react";

type Testimonial = { quote: string; source: string };

export function TestimonialCarousel({ items }: { items: Testimonial[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const drag = useRef({ active: false, startX: 0, left: 0, moved: false });
  const move = (direction: number) =>
    trackRef.current?.scrollBy({ left: direction * (trackRef.current.clientWidth * 0.5), behavior: "smooth" });

  return (
    <div className="carousel-shell">
      <div
        className="testi-track"
        ref={trackRef}
        tabIndex={0}
        role="region"
        aria-label="Customer testimonials"
        onKeyDown={event => {
          if (event.key === "ArrowLeft") move(-1);
          if (event.key === "ArrowRight") move(1);
        }}
        onPointerDown={event => {
          const track = trackRef.current;
          if (!track) return;
          drag.current = { active: true, startX: event.clientX, left: track.scrollLeft, moved: false };
          track.setPointerCapture(event.pointerId);
          track.classList.add("is-dragging");
        }}
        onPointerMove={event => {
          const track = trackRef.current;
          if (!track || !drag.current.active) return;
          track.scrollLeft = drag.current.left - (event.clientX - drag.current.startX);
          if (Math.abs(event.clientX - drag.current.startX) > 4) drag.current.moved = true;
        }}
        onPointerUp={event => {
          const track = trackRef.current;
          if (!track) return;
          drag.current.active = false;
          track.releasePointerCapture(event.pointerId);
          track.classList.remove("is-dragging");
        }}
        onPointerCancel={() => {
          drag.current.active = false;
          trackRef.current?.classList.remove("is-dragging");
        }}
      >
        {items.map((item, index) => (
          <article className="note" key={item.source}>
            <span className="q-idx">MT-{String(index + 1).padStart(2, "0")}</span>
            <span className="q-mark" aria-hidden="true">&ldquo;</span>
            <p>{item.quote}</p>
            <div className="attr">
              <span aria-hidden="true" className="q-seal">✓</span>
              <span className="st">{item.source}</span>
            </div>
          </article>
        ))}
      </div>
      <div className="carousel-controls">
        <span>Drag, swipe, or use arrow keys</span>
        <div>
          <button type="button" onClick={() => move(-1)} aria-label="Previous testimonials">←</button>
          <button type="button" onClick={() => move(1)} aria-label="Next testimonials">→</button>
        </div>
      </div>
    </div>
  );
}

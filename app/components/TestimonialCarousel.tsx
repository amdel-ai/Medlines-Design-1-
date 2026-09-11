"use client";

import { useRef } from "react";

type Testimonial = { quote: string; source: string; tone: string };

export function TestimonialCarousel({ items }: { items: Testimonial[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef({ active: false, startX: 0, scrollLeft: 0 });
  const move = (direction: number) => { const track = trackRef.current; if (track) track.scrollBy({ left: direction * track.clientWidth * 0.72, behavior: "smooth" }); };
  return <div className="carousel-shell"><div className="testimonial-track" ref={trackRef}
    onPointerDown={(event) => { const track = trackRef.current; if (!track) return; dragRef.current = { active: true, startX: event.clientX, scrollLeft: track.scrollLeft }; track.setPointerCapture(event.pointerId); track.classList.add("is-dragging"); }}
    onPointerMove={(event) => { const track = trackRef.current; if (!track || !dragRef.current.active) return; track.scrollLeft = dragRef.current.scrollLeft - (event.clientX - dragRef.current.startX); }}
    onPointerUp={(event) => { const track = trackRef.current; if (!track) return; dragRef.current.active = false; track.releasePointerCapture(event.pointerId); track.classList.remove("is-dragging"); }}
    onPointerCancel={() => { dragRef.current.active = false; trackRef.current?.classList.remove("is-dragging"); }}>
    {items.map((item) => <article className={`quote-card ${item.tone}`} key={item.source}><div className="quote-mark">“</div><p>{item.quote}</p><div className="quote-source"><span className="source-dot"></span><strong>{item.source}</strong></div></article>)}
  </div><div className="carousel-controls"><span>Drag or swipe to read more</span><div><button type="button" onClick={() => move(-1)} aria-label="Previous testimonials">←</button><button type="button" onClick={() => move(1)} aria-label="Next testimonials">→</button></div></div></div>;
}

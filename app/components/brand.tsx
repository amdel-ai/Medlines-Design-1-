import type { ReactNode } from "react";

/* ---------- Small inline icons (utility only) ---------- */
export function ArrowUR({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

export function Check({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m4 12.5 5 5L20 6.5" />
    </svg>
  );
}

/* ---------- Brand lockup (one consistent mark) ---------- */
export function Brand({ onBlue = false }: { onBlue?: boolean }) {
  return (
    <span className={`brand${onBlue ? " on-blue" : ""}`}>
      <span className="brand-chip" aria-hidden="true">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/icon.png" alt="" width={24} height={24} />
      </span>
      <span className="brand-word">
        <strong>MEDLINES</strong>
        <small>TRANSCRIPTION</small>
      </span>
    </span>
  );
}

/* ---------- Primitives ---------- */
export function DocMeta({ children, onBlue = false, className = "" }: { children: ReactNode; onBlue?: boolean; className?: string }) {
  return <span className={`doc-meta${onBlue ? " on-blue" : ""} ${className}`}>{children}</span>;
}

export function InkNote({ children, tone, className = "" }: { children: ReactNode; tone?: "coral" | "green"; className?: string }) {
  return <span className={`ink-note ${tone ?? ""} ${className}`} aria-hidden="true">{children}</span>;
}

export function Eyebrow({ idx, children, onBlue = false }: { idx: string; children: ReactNode; onBlue?: boolean }) {
  return <p className={`eyebrow${onBlue ? " on-blue" : ""}`} data-idx={idx}>{children}</p>;
}

export function Stamp({ children, tone = "green", className = "", drop = false }: { children: ReactNode; tone?: "green" | "coral" | "cobalt"; className?: string; drop?: boolean }) {
  return (
    <span className={`stamp ${tone} ${drop ? "stamp-drop" : ""} ${className}`} role="img" aria-label={typeof children === "string" ? children : undefined}>
      {tone !== "coral" && <Check />}
      {children}
    </span>
  );
}

/* ---------- Buttons ---------- */
type BtnVariant = "primary" | "secondary" | "light" | "ghost-light";
export function PaperButton({ children, variant = "primary", type = "button" }: { children: ReactNode; variant?: BtnVariant; type?: "button" | "submit" }) {
  const contact = { "data-contact": true } as const;
  if (variant === "primary" || variant === "light") {
    return (
      <button className={`btn${variant === "light" ? " btn-light" : ""}`} type={type} {...(type === "button" ? contact : {})}>
        <span className="btn-tab" aria-hidden="true"><ArrowUR /></span>
        <span className="btn-label">{children}</span>
      </button>
    );
  }
  const cls = variant === "ghost-light" ? "btn btn-ghost-light" : "btn btn-secondary";
  return (
    <button className={cls} type={type} {...(type === "button" ? contact : {})}>
      {children}
      <ArrowUR className="inline-arrow" />
    </button>
  );
}

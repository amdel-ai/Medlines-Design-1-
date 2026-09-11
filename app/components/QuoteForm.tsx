"use client";

import { FormEvent, useEffect, useRef } from "react";

export function ContactSheet() {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const open = (event: MouseEvent) => {
      const trigger = (event.target as HTMLElement).closest<HTMLElement>("[data-contact]");
      if (!trigger) return;
      event.preventDefault();
      dialogRef.current?.showModal();
    };
    document.addEventListener("click", open);
    return () => document.removeEventListener("click", open);
  }, []);

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent("Medlines Transcription quote / free trial request");
    const body = encodeURIComponent(`Name: ${data.get("name")}\nPractice / Business: ${data.get("practice")}\nEmail: ${data.get("email")}\nPhone: ${data.get("phone")}\nService needed: ${data.get("service")}\n\n${data.get("message")}`);
    window.location.href = `mailto:service@medlinesmtb.com?subject=${subject}&body=${body}`;
  };

  return <dialog className="contact-sheet" ref={dialogRef}>
    <button className="sheet-backdrop" type="button" onClick={() => dialogRef.current?.close()} aria-label="Close contact form" />
    <div className="sheet-panel">
      <button className="sheet-close" type="button" onClick={() => dialogRef.current?.close()} aria-label="Close contact form">×</button>
      <div className="form-heading"><span>Let&apos;s get started</span><strong>Tell us about your practice.</strong><p>A short note is all we need. Your email app will prepare the request for you.</p></div>
      <form className="quote-form" onSubmit={submit}>
        <div className="form-row"><label><span>Name</span><input name="name" type="text" placeholder="Jane Smith" autoComplete="name" required /></label><label><span>Business / Practice Name</span><input name="practice" type="text" placeholder="Your practice" autoComplete="organization" /></label></div>
        <div className="form-row"><label><span>Email</span><input name="email" type="email" placeholder="jane@practice.com" autoComplete="email" required /></label><label><span>Phone</span><input name="phone" type="tel" placeholder="(555) 000-0000" autoComplete="tel" /></label></div>
        <label><span>Service Needed</span><select name="service" defaultValue="Medical Transcription"><option>Medical Transcription</option><option>Medicolegal Transcription</option><option>Transcription Technology</option></select></label>
        <label><span>Message</span><textarea name="message" rows={4} placeholder="Tell us a little about your transcription needs." /></label>
        <button className="button" type="submit">Request a Quote <span aria-hidden="true">↗</span></button>
      </form>
    </div>
  </dialog>;
}

"use client";

import type { FormEvent } from "react";

export function QuoteForm() {
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent("Medlines quote / free trial request");
    const body = encodeURIComponent(
      `Name: ${data.get("name")}\nEmail: ${data.get("email")}\nPractice: ${data.get("practice")}\nService: ${data.get("service")}\n\n${data.get("message")}`,
    );
    window.location.href = `mailto:service@medlinesmtb.com?subject=${subject}&body=${body}`;
  };

  return (
    <form className="quote-form" onSubmit={submit}>
      <div className="form-heading"><span>Let’s get started</span><strong>Tell us about your practice.</strong></div>
      <div className="form-row">
        <label><span>Your name</span><input name="name" type="text" placeholder="Jane Smith" required /></label>
        <label><span>Work email</span><input name="email" type="email" placeholder="jane@practice.com" required /></label>
      </div>
      <div className="form-row">
        <label><span>Practice name</span><input name="practice" type="text" placeholder="Your practice" /></label>
        <label><span>Interested in</span><select name="service" defaultValue="Transcription & Billing"><option>Transcription &amp; Billing</option><option>Transcription</option><option>Billing</option><option>Free Trial</option></select></label>
      </div>
      <label><span>How can we help?</span><textarea name="message" rows={3} placeholder="Tell us a little about your workflow." /></label>
      <div className="form-actions">
        <button className="button button-light" type="submit">Request a Quote <span>↗</span></button>
        <a className="button button-glass" href="mailto:service@medlinesmtb.com?subject=Free%20Trial">Free Trial</a>
      </div>
    </form>
  );
}

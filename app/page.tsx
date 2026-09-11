/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
import type { Metadata } from "next";
import Image from "next/image";
import { QuoteForm } from "./components/QuoteForm";
import { SiteMotion } from "./components/SiteMotion";
import { TestimonialCarousel } from "./components/TestimonialCarousel";

export const metadata: Metadata = {
  title: "Medlines Transcription | Human-Verified Medical Transcription",
  description: "AI-assisted, human-verified medical and medicolegal transcription with next-morning standard turnaround and direct EMR/EHR integration.",
};

const testimonials = [
  { quote: "Radiology reports go to our customers next day — many times faster — with Medlines. We could not run our business without their services.", source: "Radiology Office, New York, NY", tone: "blue" },
  { quote: "Zero human resources are now spent on transcription. Medlines saves us thousands of dollars every month.", source: "Surgical Multispecialty Group, Los Angeles, CA", tone: "lilac" },
  { quote: "Medlines perfectly transcribes my reports, and even the longest ones are ready the next morning. I love how much easier and more enjoyable my IME work has become.", source: "Physician, IME, Portland", tone: "peach" },
  { quote: "Medlines covers all our transcription needs and EMR interface requirements. We rely on them completely, and they don't let us down.", source: "Hospital, Calcasieu, LA", tone: "mint" },
  { quote: "For over 12 years, Medlines has transcribed our patient reports with perfect quality, turnaround, and responsiveness to special requests. Tremendous value and real cost savings for our business.", source: "Physical Rehabilitation & Therapy Clinic, Houston, TX", tone: "blue" },
];

const comparisonRows = [
  ["Accuracy", "Degrades with accents, noise & complex terms", "Human-verified on every document"],
  ["Medical terminology", "Hallucinates plausible-but-wrong terms", "Certified MTs catch and correct every term"],
  ["Human review", "None — no one in the loop", "Every word, read by a trained MT"],
  ["Turnaround", "Instant, but unreliable", "A few hours to next morning — reliably"],
  ["Cost", "Cheap upfront, costly in errors", "Low, thanks to our automated backend"],
  ["Customization", "One-size-fits-all output", "Templates & formats built around your account"],
  ["EMR / EHR", "Limited or manual", "Direct interface into your systems"],
  ["Who owns the error?", "You do.", "We own the accuracy."],
];

const services = [
  { code: "MT", eyebrow: "Clinical documentation", title: "Medical Transcription", items: ["S.O.A.P. notes", "History & Physical", "Radiology reports", "Consultations", "Discharge summaries"] },
  { code: "ML", eyebrow: "Complex casework", title: "Medicolegal Transcription", items: ["Workers' compensation documentation", "Independent Medical Evaluations (IME)", "Qualified Medical Evaluations (QME)", "Medical expert testimony", "Medical records review"] },
  { code: "TX", eyebrow: "A connected workflow", title: "Transcription Technology", items: ["Toll-free call-in dictation system", "iPhone & Android dictation apps", "Cloud-based patient document storage", "Direct interface with EMR/EHR systems", "Custom templates and forms for your practice"] },
];

const turnaround = [
  ["Next Morning", "Next-business-morning standard turnaround"],
  ["4-Hour Rush", "Same-day, 4-hour rush when you need it"],
  ["Scheduled Batch", "Scheduled batch reporting for high-volume practices"],
  ["Direct EMR/EHR", "Direct EMR/EHR integration — documents land where they belong, automatically"],
];

function Brand({ footer = false }: { footer?: boolean }) {
  return <span className={`brand-lockup${footer ? " footer-lockup" : ""}`}><span className="brand-mark" aria-hidden="true"><Image src="/logo.png" alt="" width={2048} height={698} /></span><span className="brand-words"><strong>MEDLINES</strong><small>TRANSCRIPTION</small></span></span>;
}

function Eyebrow({ children }: { children: React.ReactNode }) { return <p className="eyebrow">{children}</p>; }

export default function Home() {
  return (
    <main>
      <SiteMotion />
      <header className="site-header"><div className="nav-shell">
        <a className="brand" href="#home" aria-label="Medlines Transcription home"><Brand /></a>
        <nav className="desktop-nav" aria-label="Main navigation"><a href="#home">Home</a><a href="#difference">The Difference</a><a href="#about">About</a><a href="#services">Services</a><a href="#turnaround">Turnaround</a><a href="#testimonials">Testimonials</a><a href="#contact">Contact</a></nav>
        <a className="button button-small nav-cta" href="#contact">Start Your Free Trial <span>↗</span></a>
        <details className="mobile-menu"><summary aria-label="Open navigation"><span></span><span></span><span></span></summary><div className="mobile-menu-panel"><a href="#home">Home</a><a href="#difference">The Difference</a><a href="#about">About</a><a href="#services">Services</a><a href="#turnaround">Turnaround</a><a href="#testimonials">Testimonials</a><a href="#contact">Contact</a><a className="button" href="#contact">Start Your Free Trial</a></div></details>
      </div></header>

      <section className="hero section-shell" id="home">
        <div className="hero-glow glow-lilac"></div><div className="hero-glow glow-blue"></div><div className="hero-glow glow-peach"></div>
        <div className="hero-copy reveal"><div className="hero-pill"><span></span>AI for speed. Humans for accuracy.</div><h1>Medical Transcription That&apos;s <em>Accurate to the Last Word</em></h1><p className="hero-lead">For nearly twenty years, physicians have trusted Medlines to turn dictation into flawless documentation. AI makes us fast. Our team of <strong>40+ certified medical transcriptionists</strong> makes us accurate — because in a medical record, one wrong word is one word too many.</p><div className="hero-buttons"><a className="button" href="#contact">Request a Quote <span>↗</span></a><a className="button button-secondary" href="#contact">Start Your Free Trial</a></div><p className="trust-line">HIPAA-compliance certified <i>·</i> Next-morning standard turnaround <i>·</i> 4-hour rush available</p></div>
        <div className="hero-visual reveal delay-1" aria-label="Human-verified transcription workflow"><span className="visual-topline">Every document, human-verified</span><div className="workflow-card main-workflow"><div className="workflow-head"><div><p>Final document</p><h2>Quality review complete</h2></div><span className="status-pill">Ready</span></div><div className="document-line"><span>AI draft</span><i></i><b>Fast first pass</b></div><div className="document-line"><span>MT review</span><i></i><b>Human judgment</b></div><div className="document-line final-line"><span>Delivered</span><i></i><b>Accurate record</b></div><div className="verified-bar"><span>✓</span><div><strong>Human-Verified</strong><small>Every word reviewed by a trained MT</small></div></div></div><div className="floating-card hipaa-card"><span className="float-icon mint">✓</span><div><strong>HIPAA Certified</strong><small>Protected at every step</small></div></div><div className="floating-card team-card"><span className="float-icon lilac">40+</span><div><strong>Certified MTs</strong><small>Real people. Real judgment.</small></div></div><div className="floating-card since-card"><span className="float-icon peach">05</span><div><strong>Since 2005</strong><small>Trusted for nearly 20 years</small></div></div><div className="floating-card rush-card"><span className="float-icon blue">4h</span><div><strong>Rush Available</strong><small>Same-day turnaround</small></div></div></div>
      </section>

      <section className="problem section-shell reveal" id="difference"><div className="problem-copy"><Eyebrow>The Problem</Eyebrow><h2>“Perfectly spelled.<br/><em>Completely wrong.</em>”</h2><h3>That&apos;s the hidden danger of AI-only transcription.</h3><p>Voice-to-text software looks flawless in a demo. But drop it into a real clinic — with accents, cross-talk, background noise, and dense clinical terminology — and it starts to <em>guess</em>. It swaps <em>hypertension</em> for <em>hypotension</em>. It inserts a medication that was never dictated. It produces a sentence that reads cleanly and means something entirely different.</p><strong className="danger-line">The spelling is perfect. The medicine is dangerous.</strong><p>With no human in the loop, that error goes straight into the patient&apos;s chart. It&apos;s why practices try the cheap AI tools — and why they come back to Medlines.</p></div><div className="error-card"><div className="error-card-head"><span>Clinical note review</span><b>Context check</b></div><p>Patient presents with a history of</p><div className="term wrong"><span>AI heard</span><strong>hypotension</strong><i>Perfect spelling</i></div><div className="versus">vs.</div><div className="term right"><span>Physician said</span><strong>hypertension</strong><i>Correct medicine</i></div><div className="reviewed"><b>✓ Human review caught the error</b><span>Verified before delivery</span></div></div></section>

      <section className="who" id="about"><div className="section-shell who-grid reveal"><div><Eyebrow>Who We Are</Eyebrow><h2>Old-school medical transcription, boosted by AI — not replaced by it.</h2></div><div className="who-copy"><p>Established in <strong>2005</strong>, Medlines is a team of <strong>40+ human-trained, certified medical transcriptionists</strong>. We&apos;re not an algorithm with a friendly name. We&apos;re people who know medicine, know your account, and read every word before it reaches you.</p><p>We use AI — and we use it heavily — to work faster and keep our prices low. But every letter, every template, every document passes under a trained human eye before delivery. That&apos;s the entire point: <strong>the speed of AI, the judgment of a professional MT.</strong></p><p>The result is documentation that&apos;s fast, affordable, and — where it actually counts — right.</p></div><div className="workflow-equation"><div><span>01</span><b>AI</b><small>Speed & automation</small></div><i>+</i><div><span>02</span><b>Certified MT</b><small>Review & judgment</small></div><i>=</i><div className="equation-result"><span>✓</span><b>Accurate final document</b><small>Ready for the chart</small></div></div></div></section>

      <section className="comparison section-shell reveal" aria-labelledby="comparison-title"><div className="center-heading"><Eyebrow>The Difference</Eyebrow><h2 id="comparison-title">AI-Only Software vs.<br/>Medlines Transcription</h2></div><div className="comparison-table" role="table" aria-label="AI-only software compared with Medlines Transcription"><div className="comparison-header" role="row"><span role="columnheader">What matters</span><span role="columnheader">AI-Only Voice-to-Text</span><span role="columnheader">Medlines Transcription</span></div>{comparisonRows.map(([label, ai, medlines], index) => <div className="comparison-row" role="row" key={label} style={{"--delay": `${index * 55}ms`} as React.CSSProperties}><strong role="rowheader">{label}</strong><span data-label="AI-Only Voice-to-Text">{ai}</span><span className="medlines-cell" data-label="Medlines Transcription"><b>✓</b>{medlines}</span></div>)}</div><p className="comparison-closing">The software is cheap. <strong>Being wrong is expensive.</strong></p></section>

      <section className="human-touch"><div className="section-shell reveal"><div className="human-heading"><Eyebrow>Why the Human Touch Wins</Eyebrow><h2>AI-only tools are accurate <em>some</em> of the time. In medical records, <em>some of the time</em> isn&apos;t good enough.</h2></div><div className="human-grid"><div className="human-copy"><p>A misheard dosage. A confused abbreviation. A term that&apos;s spelled immaculately but simply isn&apos;t what the physician said. These aren&apos;t edge cases — they&apos;re everyday failures of software that has no idea what it doesn&apos;t know.</p><p>Our MTs do. They catch the hallucination the machine can&apos;t see, apply the context the machine doesn&apos;t have, and deliver a record you can sign without second-guessing. Same account, familiar faces, personal attention — people who learn how <em>you</em> dictate and how <em>your</em> practice runs.</p><strong>That&apos;s the old-school part. The AI just makes it faster.</strong></div><div className="human-cards"><article><span>HC</span><div><b>Human Context</b><small>Understanding beyond the words</small></div></article><article><span>MJ</span><div><b>Medical Judgment</b><small>Terminology checked by trained MTs</small></div></article><article><span>AF</span><div><b>Account Familiarity</b><small>Your templates, preferences and voice</small></div></article><article><span>PA</span><div><b>Personal Attention</b><small>Real people behind every record</small></div></article></div></div></div></section>

      <section className="services" id="services"><div className="section-shell reveal"><div className="section-heading"><div><Eyebrow>Our Services</Eyebrow><h2>Everything your dictation needs.<br/>Nothing it doesn&apos;t.</h2></div><p>Three focused service groups, tailored around the way your practice works.</p></div><div className="service-grid">{services.map((service, index) => <article className="service-card" data-card={`0${index + 1}`} key={service.title} style={{"--delay": `${index * 90}ms`} as React.CSSProperties}><div className="service-card-head"><span className="service-icon">{service.code}</span><div><small>{service.eyebrow}</small><h3>{service.title}</h3></div></div><ul>{service.items.map(item => <li key={item}><span>✓</span>{item}</li>)}</ul></article>)}</div></div></section>

      <section className="turnaround section-shell reveal" id="turnaround"><div className="turnaround-heading"><Eyebrow>Speed, Without the Compromise</Eyebrow><h2>Built to keep pace with your day.</h2></div><div className="timeline">{turnaround.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><div className="timeline-dot"></div><h3>{title}</h3><p>{text}</p></article>)}</div><p className="turnaround-close">Fast enough to keep up with your day. <strong>Accurate enough to trust with your charts.</strong></p></section>

      <section className="testimonials" id="testimonials"><div className="section-shell reveal"><div className="testimonial-heading"><div><Eyebrow>Customer Success</Eyebrow><h2>Trusted behind the scenes.</h2></div><p>Real words from medical teams who count on Medlines every day.</p></div><TestimonialCarousel items={testimonials} /></div></section>

      <section className="final-section section-shell" id="contact"><div className="final-cta reveal"><div className="cta-orb cta-orb-one"></div><div className="cta-orb cta-orb-two"></div><div className="cta-content"><Image className="cta-icon" src="/icon.png" alt="" aria-hidden="true" width={1536} height={1536}/><Eyebrow>See the Human Difference</Eyebrow><h2>Try the AI. Then come back to the humans.</h2><p>Most practices do. Start with a <strong>free trial</strong> and a <strong>no-obligation quote</strong>, and see the difference a human-reviewed record makes — delivered as fast as the software, and accurate in a way software can&apos;t match.</p><div className="cta-buttons"><a className="button button-light" href="#quote-form">Request a Quote <span>↗</span></a><a className="button button-glass" href="#quote-form">Start Your Free Trial</a></div><small>No long-term commitment. Just faster, cleaner, more accurate documentation from day one.</small></div><QuoteForm /></div></section>

      <footer><div className="footer-shell"><a className="brand footer-brand" href="#home" aria-label="Medlines Transcription home"><Brand footer /></a><div className="footer-tagline"><strong>Old-school medical transcription. Boosted by AI.</strong><span>Our systems are HIPAA-compliance certified.</span></div><address><a href="tel:18885265675">(888) 526-5675</a><span>1317 Edgewater Drive, Suite 2968, Orlando, FL 32804</span><a href="mailto:service@medlinesmtb.com">service@medlinesmtb.com</a></address><a className="back-top" href="#home" aria-label="Back to top">↑</a></div></footer>
    </main>
  );
}

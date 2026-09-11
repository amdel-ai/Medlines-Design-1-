import type { Metadata } from "next";
import { ContactSheet } from "./components/QuoteForm";
import { SiteMotion } from "./components/SiteMotion";
import { TestimonialCarousel } from "./components/TestimonialCarousel";
import { Brand, DocMeta, Eyebrow, InkNote, PaperButton, Stamp, Check } from "./components/brand";
import {
  HeroScene, WorkflowLine, IconDictation, IconAIDraft, IconReview, IconRecord,
  EphHuman, EphAI, EphAccount, SvcMedical, SvcLegal, SvcTech, NoteArrow,
} from "./components/illustrations";

export const metadata: Metadata = {
  title: "Medlines Transcription | Human-Verified Medical Transcription",
  description:
    "AI-assisted, human-verified medical and medicolegal transcription with next-morning standard turnaround and direct EMR/EHR integration.",
};

const navLinks = [
  ["#home", "Home"], ["#difference", "Difference"], ["#about", "About"],
  ["#services", "Services"], ["#turnaround", "Turnaround"], ["#testimonials", "Testimonials"],
];

const testimonials = [
  { quote: "Radiology reports go to our customers next day — many times faster — with Medlines. We could not run our business without their services.", source: "Radiology Office, New York, NY" },
  { quote: "Zero human resources are now spent on transcription. Medlines saves us thousands of dollars every month.", source: "Surgical Multispecialty Group, Los Angeles, CA" },
  { quote: "Medlines perfectly transcribes my reports, and even the longest ones are ready the next morning. I love how much easier and more enjoyable my IME work has become.", source: "Physician, IME, Portland" },
  { quote: "Medlines covers all our transcription needs and EMR interface requirements. We rely on them completely, and they don't let us down.", source: "Hospital, Calcasieu, LA" },
  { quote: "For over 12 years, Medlines has transcribed our patient reports with perfect quality, turnaround, and responsiveness to special requests. Tremendous value and real cost savings for our business.", source: "Physical Rehabilitation & Therapy Clinic, Houston, TX" },
];

const comparisonRows: [string, string, string][] = [
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
  {
    cls: "medical", num: "SVC-01", tag: "S.O.A.P.", eyebrow: "Clinical documentation",
    title: "Medical Transcription", Illo: SvcMedical,
    items: ["S.O.A.P. notes", "History & Physical", "Radiology reports", "Consultations", "Discharge summaries"],
  },
  {
    cls: "legal", num: "SVC-02", tag: "IME / QME", eyebrow: "Complex casework",
    title: "Medicolegal Transcription", Illo: SvcLegal,
    items: ["Workers' compensation documentation", "Independent Medical Evaluations (IME)", "Qualified Medical Evaluations (QME)", "Medical expert testimony", "Medical records review"],
  },
  {
    cls: "tech", num: "SVC-03", tag: "EMR / EHR", eyebrow: "A connected workflow",
    title: "Transcription Technology", Illo: SvcTech,
    items: ["Toll-free call-in dictation system", "iPhone & Android dictation apps", "Cloud-based patient document storage", "Direct interface with EMR/EHR systems", "Custom templates and forms for your practice"],
  },
];

const workflow = [
  { n: "01", label: "Dictation", note: "speed", Icon: IconDictation, meta: "VOICE" },
  { n: "02", label: "AI Draft", note: "context", Icon: IconAIDraft, meta: "DRAFT" },
  { n: "03", label: "Human MT Review", note: "judgment", Icon: IconReview, meta: "REVIEW" },
  { n: "04", label: "Final Record", note: "verified", Icon: IconRecord, meta: "FINAL" },
];

const ephemera = [
  { kind: "01 · Human", title: "40+ certified medical transcriptionists", Illo: EphHuman },
  { kind: "02 · AI", title: "AI for speed.", Illo: EphAI },
  { kind: "03 · Account knowledge", title: "People who know your account.", Illo: EphAccount },
];

/* ============================================================ */

function Nav() {
  return (
    <header className="site-header">
      <div className="nav-strip">
        <a className="nav-brand" href="#home" aria-label="Medlines Transcription home"><Brand /></a>
        <nav className="nav-links" aria-label="Main navigation">
          {navLinks.map(([href, label]) => <a key={href} href={href}>{label}</a>)}
        </nav>
        <span className="nav-divider" aria-hidden="true" />
        <span className="nav-cta"><PaperButton>Start Free Trial</PaperButton></span>
        <details className="mobile-menu">
          <summary aria-label="Open navigation"><span /><span /></summary>
          <div className="mobile-panel">
            {navLinks.slice(1).map(([href, label]) => <a key={href} href={href}>{label}</a>)}
            <PaperButton>Start Your Free Trial</PaperButton>
          </div>
        </details>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="grid-blue-overlay" aria-hidden="true" />
      <div className="hero-canvas grid-paper grain">
        <span className="reg-mark reg-tl" aria-hidden="true" />
        <span className="reg-mark reg-tr" aria-hidden="true" />
        <span className="reg-mark reg-bl" aria-hidden="true" />
        <span className="reg-mark reg-br" aria-hidden="true" />

        <div className="hero-corner tl">
          <DocMeta>DOC / MT&#8209;2005</DocMeta>
          <DocMeta>PAGE 01 / 09</DocMeta>
        </div>
        <div className="hero-corner tr">
          <DocMeta>Medlines Transcription</DocMeta>
          <DocMeta>Review System</DocMeta>
        </div>
        <div className="hero-corner bl">
          <DocMeta><Check className="mini-check" /> HIPAA / VERIFIED</DocMeta>
        </div>

        <div className="hero-main hero-seq">
          <p className="hero-tagline"><span className="dot" aria-hidden="true" />AI for speed. Humans for accuracy.</p>
          <h1>
            Medical Transcription That&apos;s <span className="hl">Accurate</span> to the Last Word
          </h1>
          <p className="hero-body">
            For nearly twenty years, physicians have trusted Medlines to turn dictation into flawless
            documentation. AI makes us fast. Our team of <strong>40+ certified medical transcriptionists</strong> makes
            us accurate — because in a medical record, one wrong word is one word too many.
          </p>
          <div className="hero-actions">
            <PaperButton>Request a Quote</PaperButton>
            <PaperButton variant="secondary">Start Your Free Trial</PaperButton>
          </div>
          <div className="hero-trust">
            <span>HIPAA-compliance certified</span><i className="sep" />
            <span>Next-morning standard turnaround</span><i className="sep" />
            <span>4-hour rush available</span>
          </div>
          <div className="hero-anno" aria-hidden="true">
            <InkNote>human reviewed</InkNote>
            <NoteArrow />
          </div>
        </div>

        <div className="hero-illo-wrap"><HeroScene className="hero-illo" /></div>

        <div className="hero-strip">
          <DocMeta>VOICE → AI DRAFT → HUMAN REVIEW → <b>FINAL RECORD</b></DocMeta>
          <Stamp tone="green">Human Verified</Stamp>
        </div>
      </div>
    </section>
  );
}

function Problem() {
  return (
    <section className="section problem" id="difference">
      <div className="grid-paper" aria-hidden="true" />
      <div className="wrap">
        <div className="problem-grid">
          <div className="problem-copy reveal">
            <Eyebrow idx="02">The Problem</Eyebrow>
            <h2>&ldquo;Perfectly spelled.<br /><em>Completely wrong.</em>&rdquo;</h2>
            <h3>That&apos;s the hidden danger of AI-only transcription.</h3>
            <p>
              Voice-to-text software looks flawless in a demo. But drop it into a real clinic — with accents,
              cross-talk, background noise, and dense clinical terminology — and it starts to <em>guess</em>. It swaps{" "}
              <em>hypertension</em> for <em>hypotension</em>. It inserts a medication that was never dictated. It
              produces a sentence that reads cleanly and means something entirely different.
            </p>
            <p>
              With no human in the loop, that error goes straight into the patient&apos;s chart. It&apos;s why practices
              try the cheap AI tools — and why they come back to Medlines.
            </p>
          </div>

          <div className="review-sheet reveal" aria-label="Clinical note under review">
            <span className="paper-tab">CLINICAL NOTE</span>
            <div className="review-head">
              <strong>History &amp; Physical</strong>
              <DocMeta>DRAFT / 08:42</DocMeta>
            </div>
            <div className="review-wave wave-anim" aria-hidden="true">
              {[16, 30, 20, 46, 60, 26, 70, 40, 22, 54, 34, 18, 44, 28].map((h, i) => (
                <i key={i} style={{ height: h }} />
              ))}
            </div>
            <p className="review-line">
              Patient presents with a history of{" "}
              <span className="tok-wrong">hypotension<span className="strike" /></span>.
            </p>
            <div className="review-correction">
              <span className="arrow-up" aria-hidden="true">↳</span>
              <DocMeta>Human correction</DocMeta>
              <span className="corr-word">hypertension</span>
            </div>
            <div className="review-foot">
              <DocMeta>DOC 04 · PAGE 01/05</DocMeta>
              <Stamp tone="green">Human Verified</Stamp>
            </div>
          </div>
        </div>

        <div className="problem-closing reveal">
          <div className="grid-blue" aria-hidden="true" />
          <h3>The spelling is perfect.<br /><em>The medicine is dangerous.</em></h3>
        </div>
      </div>
    </section>
  );
}

function WhoWeAre() {
  return (
    <section className="section who" id="about">
      <div className="grid-paper" aria-hidden="true" />
      <div className="wrap">
        <div className="page-turn reveal"><DocMeta>Chapter 03</DocMeta><span className="rule" /><DocMeta>Who We Are</DocMeta></div>
        <div className="spread reveal">
          <div className="spread-page left">
            <Eyebrow idx="03">Who We Are</Eyebrow>
            <h2>Old-school medical transcription, boosted by AI — not replaced by it.</h2>
            <span className="spread-corner"><DocMeta>EST. 2005</DocMeta></span>
          </div>
          <div className="spread-page right body-copy">
            <p>
              Established in <strong>2005</strong>, Medlines is a team of <strong>40+ human-trained, certified medical
              transcriptionists</strong>. We&apos;re not an algorithm with a friendly name. We&apos;re people who know
              medicine, know your account, and read every word before it reaches you.
            </p>
            <p>
              We use AI — and we use it heavily — to work faster and keep our prices low. But every letter, every
              template, every document passes under a trained human eye before delivery. That&apos;s the entire point:{" "}
              <strong>the speed of AI, the judgment of a professional MT.</strong>
            </p>
            <p>The result is documentation that&apos;s fast, affordable, and — where it actually counts — right.</p>
          </div>
        </div>

        <div className="ephemera stagger reveal">
          {ephemera.map(({ kind, title, Illo }) => (
            <article className="ephemera-card" key={kind}>
              <span className="clip" aria-hidden="true" />
              <span className="kind">{kind}</span>
              <Illo className="card-illo" />
              <h3>{title}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Difference() {
  return (
    <section className="section difference">
      <div className="grid-blue" aria-hidden="true" />
      <div className="wrap">
        <div className="diff-head reveal">
          <Eyebrow idx="04" onBlue>The Difference</Eyebrow>
          <h2>AI-Only Software vs.<br />Medlines Transcription</h2>
        </div>
        <div className="diff-sheets">
          <div className="diff-col ai reveal" aria-label="AI-only voice-to-text">
            <div className="diff-col-head">
              <div><h3>AI-Only Voice-to-Text</h3><DocMeta>Unverified · No human in the loop</DocMeta></div>
              <Stamp tone="coral">Flagged</Stamp>
            </div>
            {comparisonRows.map(([label, ai]) => (
              <div className="diff-row" key={label}>
                <span className="mark" aria-hidden="true">✕</span>
                <span className="r-text"><span className="r-key">{label}</span>{ai}</span>
              </div>
            ))}
          </div>
          <div className="diff-col med reveal" aria-label="Medlines Transcription">
            <div className="diff-col-head">
              <div><h3>Medlines Transcription</h3><DocMeta>Human-verified · Certified MTs</DocMeta></div>
              <Stamp tone="green">Verified</Stamp>
            </div>
            {comparisonRows.map(([label, , med]) => (
              <div className="diff-row" key={label}>
                <span className="mark" aria-hidden="true"><Check /></span>
                <span className="r-text"><span className="r-key">{label}</span>{med}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="diff-closing reveal">
          <h3>The software is cheap.<br />Being <em>wrong</em> is expensive.</h3>
        </div>
      </div>
    </section>
  );
}

function HumanTouch() {
  return (
    <section className="section human">
      <div className="grid-paper" aria-hidden="true" />
      <div className="wrap">
        <div className="human-intro reveal">
          <div>
            <Eyebrow idx="05">Why the Human Touch Wins</Eyebrow>
            <h2>
              AI-only tools are accurate <em>some</em> of the time. In medical records, <em>some of the time</em> isn&apos;t
              good enough.
            </h2>
          </div>
          <div className="body">
            <p>
              A misheard dosage. A confused abbreviation. A term that&apos;s spelled immaculately but simply isn&apos;t
              what the physician said. These aren&apos;t edge cases — they&apos;re everyday failures of software that has
              no idea what it doesn&apos;t know.
            </p>
            <p>
              Our MTs do. They catch the hallucination the machine can&apos;t see, apply the context the machine
              doesn&apos;t have, and deliver a record you can sign without second-guessing. Same account, familiar faces,
              personal attention — people who learn how <em>you</em> dictate and how <em>your</em> practice runs.
            </p>
            <strong>That&apos;s the old-school part. The AI just makes it faster.</strong>
          </div>
        </div>

        <div className="workflow reveal">
          <WorkflowLine className="workflow-line" />
          <div className="workflow-steps">
            {workflow.map(({ n, label, note, Icon, meta }) => (
              <article className="wf-step" key={n}>
                <div className="wf-node"><Icon className="wf-icon" /></div>
                <DocMeta>{n} · {meta}</DocMeta>
                <b>{label}</b>
                <InkNote className="wf-note">{note}</InkNote>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="section services" id="services">
      <div className="grid-paper" aria-hidden="true" />
      <div className="wrap">
        <div className="services-head reveal">
          <div>
            <Eyebrow idx="06">Our Services</Eyebrow>
            <h2>Everything your dictation needs.<br />Nothing it doesn&apos;t.</h2>
          </div>
          <p>Three focused service groups, tailored around the way your practice works.</p>
        </div>
        <div className="desk stagger reveal">
          {services.map(({ cls, num, tag, eyebrow, title, items, Illo }) => (
            <article className={`svc ${cls}`} key={title}>
              <span className="svc-tab">{tag}</span>
              <DocMeta>{num} · {eyebrow}</DocMeta>
              <h3>{title}</h3>
              <Illo className="svc-illo" />
              <div className="rule" />
              <ul>
                {items.map(item => (
                  <li key={item}>
                    <Check className="li-check" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Speed() {
  return (
    <section className="section speed" id="turnaround">
      <div className="blueprint" aria-hidden="true" />
      <div className="wrap">
        <div className="speed-head reveal">
          <Eyebrow idx="07" onBlue>Speed, Without the Compromise</Eyebrow>
          <h2>SPEED,<br />WITHOUT THE<br /><em>COMPROMISE</em></h2>
        </div>
        <div className="timing">
          <article className="timing-big reveal">
            <span className="cap">Rush available</span>
            <span className="huge">04<small>HRS</small></span>
            <p>Same-day, 4-hour rush when you need it.</p>
          </article>
          <div className="timing-col stagger reveal">
            <article className="timing-cell">
              <span className="cap">Standard</span>
              <strong>Next Morning</strong>
              <p>Next-business-morning standard turnaround.</p>
            </article>
            <article className="timing-cell">
              <span className="cap">Volume</span>
              <strong>Scheduled Batch</strong>
              <p>Scheduled batch reporting for high-volume practices.</p>
            </article>
            <article className="timing-cell">
              <span className="cap">Connected</span>
              <strong>Direct EMR / EHR</strong>
              <p>Direct EMR/EHR integration — documents land where they belong, automatically.</p>
            </article>
          </div>
        </div>
        <p className="speed-close reveal">
          Fast enough to keep up with your day.<br />
          <strong>Accurate enough to trust with your charts.</strong>
        </p>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="section testimonials" id="testimonials">
      <div className="grid-paper" aria-hidden="true" />
      <div className="wrap">
        <div className="testi-head reveal">
          <div>
            <Eyebrow idx="08">Customer Success</Eyebrow>
            <h2>Trusted behind the scenes.</h2>
          </div>
          <p>Real words from medical teams who count on Medlines every day.</p>
        </div>
        <div className="reveal"><TestimonialCarousel items={testimonials} /></div>
      </div>
    </section>
  );
}

function Closing() {
  return (
    <section className="section closing" id="contact">
      <div className="grid-blue" aria-hidden="true" />
      <div className="signoff reveal">
        <div className="grid-paper" aria-hidden="true" />
        <Stamp tone="green" className="stamp-tr stamp-drop">Human Verified</Stamp>
        <div className="signoff-inner">
          <Eyebrow idx="09">See the Human Difference</Eyebrow>
          <h2><span className="light">Try the AI.</span><br />Then come back to the <em>humans.</em></h2>
          <p>
            Most practices do. Start with a <strong>free trial</strong> and a <strong>no-obligation quote</strong>, and
            see the difference a human-reviewed record makes — delivered as fast as the software, and accurate in a way
            software can&apos;t match.
          </p>
          <div className="cta-buttons">
            <PaperButton>Request a Quote</PaperButton>
            <PaperButton variant="secondary">Start Your Free Trial</PaperButton>
          </div>
          <small>No long-term commitment. Just faster, cleaner, more accurate documentation from day one.</small>
        </div>
        <div className="signoff-note" aria-hidden="true"><NoteArrow flip /><InkNote>sign here</InkNote></div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="grid-blue" aria-hidden="true" />
      <div className="footer-main wrap">
        <div className="footer-col brand-col">
          <Brand onBlue />
          <p>Old-school medical transcription. Boosted by AI.</p>
        </div>
        <div className="footer-col">
          <h4>Navigate</h4>
          <nav aria-label="Footer navigation">
            {navLinks.slice(1).map(([href, label]) => <a key={href} href={href}>{label}</a>)}
          </nav>
        </div>
        <div className="footer-col">
          <h4>Contact</h4>
          <address>
            <a href="tel:18885265675">(888) 526-5675</a>
            <a href="mailto:service@medlinesmtb.com">service@medlinesmtb.com</a>
            <span>1317 Edgewater Drive, Suite 2968<br />Orlando, FL 32804</span>
          </address>
        </div>
      </div>
      <div className="footer-bottom wrap">
        <span>Our systems are HIPAA-compliance certified.</span>
        <a href="#home">Back to top ↑</a>
      </div>
      <div className="footer-word" aria-hidden="true">MEDLINES</div>
    </footer>
  );
}

export default function Home() {
  return (
    <main>
      <SiteMotion />
      <Nav />
      <Hero />
      <Problem />
      <WhoWeAre />
      <Difference />
      <HumanTouch />
      <Services />
      <Speed />
      <Testimonials />
      <Closing />
      <Footer />
      <ContactSheet />
    </main>
  );
}

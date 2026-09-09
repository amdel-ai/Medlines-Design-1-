import type { Metadata } from "next";
import Image from "next/image";
import { QuoteForm } from "./components/QuoteForm";
import { TestimonialCarousel } from "./components/TestimonialCarousel";

export const metadata: Metadata = {
  title: "Medlines — Medical Transcription & Billing",
  description:
    "HIPAA-certified medical transcription and billing from a dedicated U.S.-based team.",
};

const testimonials = [
  {
    quote:
      "Medlines performs all our billing, coding and collections work, this substantially reduces our office staffing and cost of operation.",
    source: "Orthopedic Clinic, Killeen TX",
    tone: "blue",
  },
  {
    quote:
      "Radiology reports go to our customers next day, many times faster with Medlines. We could not run our business without their services.",
    source: "Radiology Office, New York, NY",
    tone: "lilac",
  },
  {
    quote:
      "Zero human resource is now spent on transcription. Medlines saves us thousands of dollars every month.",
    source: "Surgical Multispecialty Group, Los Angeles, CA",
    tone: "peach",
  },
  {
    quote:
      "Medlines perfectly transcribes my reports and even the longest reports are ready next morning! I love how easy and more enjoyable my IME work has become.",
    source: "Physician IME, Portland, OR",
    tone: "mint",
  },
  {
    quote:
      "Medlines covers all our transcription needs and EMR interface requirements. We rely on them completely and they don't let us down.",
    source: "Hospital, Calcasieu, LA",
    tone: "blue",
  },
  {
    quote:
      "For over 12 years Medlines has been transcribing our patient reports with perfect quality, turnaround and responsiveness to special requests. Their service delivers tremendous value and cost savings to our business.",
    source: "Physical Rehab, Houston, TX",
    tone: "lilac",
  },
  {
    quote:
      "Medlines takes care of all aspects of our revenue cycle, we have relied on their experience for over 7 years and they don’t let us down.",
    source: "Occupational Medicine, Grapevine, TX",
    tone: "peach",
  },
  {
    quote:
      "Medlines identifies, researches, and resolves issues, they continue working claims and denials to completion, this is key to higher collections.",
    source: "Orthopedic & Spine, Greenville, SC",
    tone: "mint",
  },
  {
    quote:
      "Medlines performs appeals of denied and low paid claims this relieves us of extra effort and raises our revenue significantly.",
    source: "Pain Medicine, Hallandale Beach, FL",
    tone: "blue",
  },
];

const Icon = ({ children }: { children: React.ReactNode }) => (
  <span className="icon" aria-hidden="true">{children}</span>
);

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <div className="nav-shell">
          <a className="brand" href="#home" aria-label="Medlines home">
            <Image src="/logo.png" alt="Medlines Transcription & Billing" width={2048} height={698} priority />
          </a>
          <nav className="desktop-nav" aria-label="Main navigation">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#testimonials">Testimonials</a>
            <a href="#contact">Contact</a>
          </nav>
          <div className="nav-actions">
            <div className="mini-contact">
              <a href="tel:18885265675">(888) 526-5675</a>
              <a href="mailto:service@medlinesmtb.com">service@medlinesmtb.com</a>
            </div>
            <a className="button button-small" href="mailto:service@medlinesmtb.com?subject=Request%20a%20Quote">Request a Quote <span>↗</span></a>
          </div>
          <details className="mobile-menu">
            <summary aria-label="Open navigation"><span></span><span></span><span></span></summary>
            <div className="mobile-menu-panel">
              <a href="#home">Home</a><a href="#about">About</a><a href="#services">Services</a>
              <a href="#testimonials">Testimonials</a><a href="#contact">Contact</a>
              <a className="button" href="mailto:service@medlinesmtb.com?subject=Request%20a%20Quote">Request a Quote</a>
            </div>
          </details>
        </div>
      </header>

      <section className="hero section-shell" id="home">
        <div className="hero-glow glow-lilac"></div>
        <div className="hero-glow glow-blue"></div>
        <div className="hero-glow glow-peach"></div>
        <div className="hero-copy">
          <div className="eyebrow"><span className="pulse-dot"></span> Trusted medical operations partner</div>
          <h1>Medical Transcription &amp; Billing You Can <em>Actually Rely On</em></h1>
          <p className="hero-lead">Since 2005, Medlines has helped physicians and administrators cut costs, eliminate paperwork backlogs, and get paid faster — with HIPAA-certified transcription and billing handled by a dedicated U.S.-based team.</p>
          <div className="hero-buttons">
            <a className="button" href="mailto:service@medlinesmtb.com?subject=Request%20a%20Quote">Request a Quote <span>↗</span></a>
            <a className="button button-secondary" href="mailto:service@medlinesmtb.com?subject=Start%20My%20Free%20Trial">Start Your Free Trial</a>
          </div>
          <div className="trust-row" aria-label="Medlines trust points">
            <span><b>✓</b> HIPAA-Certified</span>
            <span><b>✓</b> Since 2005</span>
            <span><b>✓</b> U.S.-Based Team</span>
          </div>
        </div>

        <div className="hero-visual" aria-label="Medlines service overview">
          <div className="visual-topline"><span>Practice operations</span></div>
          <div className="workflow-card main-workflow">
            <div className="workflow-head">
              <div><p>Today’s workflow</p><h2>Clear work. Faster results.</h2></div>
              <span className="status-pill">On track</span>
            </div>
            <div className="service-progress">
              <div className="progress-icon blue-icon">T</div>
              <div className="progress-copy"><strong>Transcription</strong><span>Reports in quality review</span></div>
              <div className="progress-number">98<span>%</span></div>
            </div>
            <div className="progress-track"><span></span></div>
            <div className="service-progress billing-progress">
              <div className="progress-icon coral-icon">B</div>
              <div className="progress-copy"><strong>Billing</strong><span>Claims ready to submit</span></div>
              <span className="claims-count">24 claims</span>
            </div>
          </div>
          <div className="floating-card hipaa-card">
            <div className="shield-mark">✓</div><div><strong>HIPAA Certified</strong><span>Protected at every step</span></div>
          </div>
          <div className="floating-card team-card">
            <div className="avatar-stack"><span>M</span><span>L</span><span>+</span></div>
            <div><strong>Dedicated team</strong><span>U.S.-based support</span></div>
          </div>
          <div className="floating-card since-card"><strong>20+</strong><span>years of<br/>quiet excellence</span></div>
        </div>
      </section>

      <section className="about section-shell" id="about">
        <div className="section-label">01 · Who we are</div>
        <div className="about-grid">
          <div>
            <p className="kicker">About Us</p>
            <h2>A reliable extension of your practice.</h2>
          </div>
          <div className="about-card">
            <p>For nearly two decades, Medlines has quietly done the unglamorous work that keeps medical practices running: transcribing every report accurately, submitting every claim correctly, and following up until it&apos;s paid. We built our name not by being the biggest transcription and billing company, but by being the one practices trust most. Our Transcription, Billing, Quality Assurance, and IT teams work as an extension of your office. Every process we run is HIPAA-compliance certified.</p>
            <div className="chip-row"><span>Since 2005</span><span>HIPAA-Compliant</span><span>Dedicated Support</span><span>Faster Collections</span></div>
          </div>
        </div>
      </section>

      <section className="services" id="services">
        <div className="section-shell">
          <div className="section-heading">
            <div><div className="section-label">02 · What we do</div><p className="kicker">Our Services</p></div>
            <h2>One expert partner.<br/>Two critical workflows.</h2>
          </div>
          <div className="service-grid">
            <article className="service-card transcription-card">
              <div className="service-card-head"><Icon>Tx</Icon><div><span>Accurate. Prompt. Secure.</span><h3>Transcription</h3></div></div>
              <p>Medical Transcription (S.O.A.P., history &amp; physicals, radiology reports, consultations, discharge summaries) · Medicolegal Transcription (workers&apos; comp, IME/QME, expert testimony, records review) · Transcription Technology (toll-free dictation, iPhone/Android apps, cloud storage, EMR/EHR interface, custom templates)</p>
              <div className="service-tags"><span>S.O.A.P.</span><span>IME / QME</span><span>EMR / EHR</span></div>
            </article>
            <article className="service-card billing-card">
              <div className="service-card-head"><Icon>$</Icon><div><span>Complete revenue cycle care.</span><h3>Billing</h3></div></div>
              <p>Claims Processing (eligibility verification, daily claims entry, correction/resubmission, payment posting) · Billing Team (dedicated manager, phone/email support, QC) · Patient Accounting (registration, payment posting, AR management, custom reporting) · Insurance Follow-Up (secondary billing, denial management, appeals) · Turnaround (next-morning standard, same-day 4-hr rush, batch scheduling)</p>
              <div className="service-tags"><span>Claims</span><span>AR Management</span><span>Appeals</span></div>
            </article>
          </div>
        </div>
      </section>

      <section className="benefits section-shell">
        <div className="center-heading"><div className="section-label">03 · The difference</div><p className="kicker">Why Choose Us</p><h2>Less admin. More momentum.</h2></div>
        <div className="benefit-grid">
          <article><div className="benefit-top"><Icon>0h</Icon><span>01</span></div><h3>Zero hours spent on transcription.</h3><p>Your documentation workflow is handled from dictation through delivery.</p><div className="benefit-visual"><span></span><span></span><span></span></div></article>
          <article><div className="benefit-top"><Icon>✓</Icon><span>02</span></div><h3>Fewer denied claims.</h3><p>Focused follow-up and quality control keep claims moving forward.</p><div className="benefit-visual claim-visual"><i>✓</i><span></span><span></span></div></article>
          <article><div className="benefit-top"><Icon>↗</Icon><span>03</span></div><h3>Faster collections.</h3><p>Clean submissions and persistent follow-up support healthier cash flow.</p><div className="benefit-chart"><i></i><i></i><i></i><i></i></div></article>
        </div>
      </section>

      <section className="testimonials" id="testimonials">
        <div className="section-shell">
          <div className="testimonial-heading">
            <div><div className="section-label">04 · In their words</div><p className="kicker">Customer Success</p><h2>Trusted behind the scenes.</h2></div>
            <p>Real results from medical teams who count on Medlines every day.</p>
          </div>
          <TestimonialCarousel items={testimonials} />
        </div>
      </section>

      <section className="final-section section-shell" id="contact">
        <div className="final-cta">
          <div className="cta-orb cta-orb-one"></div><div className="cta-orb cta-orb-two"></div>
          <div className="cta-content">
            <Image className="cta-icon" src="/icon.png" alt="" aria-hidden="true" width={1536} height={1536} />
            <p>Request your free trial today.</p>
            <h2>Ready to See What a Real Transcription and Billing Partner Looks Like?</h2>
          </div>
          <QuoteForm />
        </div>
      </section>

      <footer>
        <div className="footer-shell">
          <a className="brand footer-brand" href="#home" aria-label="Medlines home"><Image src="/logo.png" alt="Medlines Transcription & Billing" width={2048} height={698} /></a>
          <p><a href="tel:18885265675">(888) 526-5675</a> <span>·</span> 1317 Edgewater Drive, Suite 2968, Orlando FL 32804 <span>·</span> <a href="mailto:service@medlinesmtb.com">service@medlinesmtb.com</a></p>
          <a className="back-top" href="#home" aria-label="Back to top">↑</a>
        </div>
      </footer>
    </main>
  );
}

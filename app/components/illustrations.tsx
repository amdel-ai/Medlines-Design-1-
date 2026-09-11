/* ============================================================
   MEDLINES illustration language — cobalt ink + paper.
   One illustrator: navy outlines (#07172F), cobalt fills
   (#0759D9 / #0547B5 / steel #4d7fd6), paper fills, sparse
   coral (error) + green (verified) + marker (highlight).
   All decorative → aria-hidden.
   ============================================================ */

const INK = "#07172F";
const COBALT = "#0759D9";
const DEEP = "#0547B5";
const STEEL = "#4d7fd6";
const SKY = "#DCE9FF";
const PAPER = "#FBF8EE";
const WARM = "#F4EFDF";
const CORAL = "#F26A45";
const GREEN = "#278A67";
const MARKER = "#F5C84B";

/* ---------------- HERO SCENE ---------------- */
export function HeroScene({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 560 560" fill="none" aria-hidden="true"
      preserveAspectRatio="xMidYMid meet" role="img">
      <defs>
        <clipPath id="winClip"><rect x="34" y="44" width="210" height="196" rx="8" /></clipPath>
      </defs>
      <g stroke={INK} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">

        {/* ---- back wall: window + skyline ---- */}
        <rect x="34" y="44" width="210" height="196" rx="8" fill={SKY} />
        <g clipPath="url(#winClip)">
          <ellipse cx="86" cy="86" rx="26" ry="12" fill={PAPER} stroke="none" />
          <ellipse cx="120" cy="78" rx="18" ry="9" fill={PAPER} stroke="none" />
          <rect x="52" y="150" width="34" height="90" fill={DEEP} stroke="none" />
          <rect x="90" y="116" width="30" height="124" fill={COBALT} stroke="none" />
          <rect x="126" y="168" width="40" height="72" fill={DEEP} stroke="none" />
          <rect x="170" y="130" width="30" height="110" fill={COBALT} stroke="none" />
          <rect x="204" y="176" width="30" height="64" fill={DEEP} stroke="none" />
          <g fill={SKY} stroke="none" opacity=".8">
            <rect x="96" y="128" width="6" height="8" /><rect x="108" y="128" width="6" height="8" />
            <rect x="96" y="146" width="6" height="8" /><rect x="108" y="146" width="6" height="8" />
            <rect x="176" y="144" width="6" height="8" /><rect x="188" y="144" width="6" height="8" />
            <rect x="176" y="162" width="6" height="8" /><rect x="188" y="162" width="6" height="8" />
          </g>
        </g>
        <rect x="34" y="44" width="210" height="196" rx="8" fill="none" />
        <path d="M139 44v196M34 140h210" strokeWidth="2.2" />

        {/* ---- pinned notes upper-right ---- */}
        <g transform="rotate(-5 404 102)">
          <rect x="366" y="56" width="78" height="94" rx="3" fill={PAPER} />
          <path d="M380 82h50M380 96h38M380 110h50M380 124h30" stroke={COBALT} strokeWidth="2.4" />
          <circle cx="405" cy="56" r="5" fill={CORAL} />
        </g>
        <g transform="rotate(5 490 120)">
          <rect x="452" y="72" width="74" height="92" rx="3" fill={WARM} />
          <path d="M466 118l9 9 15-18" stroke={GREEN} strokeWidth="3" />
          <path d="M466 96h44M466 140h32" stroke={COBALT} strokeWidth="2.4" />
          <circle cx="489" cy="72" r="5" fill={COBALT} />
        </g>

        {/* ---- desk ---- */}
        <rect x="64" y="336" width="14" height="200" fill={WARM} />
        <rect x="486" y="336" width="14" height="200" fill={WARM} />
        <rect x="20" y="320" width="520" height="18" rx="3" fill="#e7d9b8" />
        <path d="M20 320h520" strokeWidth="1.6" stroke={PAPER} />

        {/* ---- monitor (AI draft) ---- */}
        <ellipse cx="438" cy="320" rx="34" ry="7" fill="#cddcf5" />
        <rect x="430" y="284" width="16" height="38" fill="#cddcf5" />
        <rect x="336" y="150" width="176" height="140" rx="10" fill={COBALT} />
        <polyline points="352,196 362,182 372,206 382,168 392,214 402,178 412,200 422,188 432,196 494,196"
          stroke="#fff" strokeWidth="2.6" />
        <g stroke="none">
          <rect x="352" y="220" width="150" height="7" rx="3" fill="#ffffff" opacity=".9" />
          <rect x="352" y="234" width="120" height="7" rx="3" fill="#ffffff" opacity=".7" />
          <rect x="352" y="248" width="140" height="7" rx="3" fill={MARKER} />
          <rect x="352" y="262" width="92" height="7" rx="3" fill="#ffffff" opacity=".7" />
        </g>
        {/* keyboard */}
        <rect x="350" y="300" width="150" height="16" rx="4" fill={SKY} />
        <path d="M362 308h126" stroke={COBALT} strokeWidth="2" opacity=".6" />

        {/* ---- transcript page under human review ---- */}
        <g transform="rotate(-5 288 290)">
          <rect x="232" y="250" width="112" height="80" rx="4" fill={PAPER} />
          <rect x="244" y="262" width="54" height="7" rx="2" fill={DEEP} stroke="none" />
          <path d="M244 282h86M244 296h58" stroke={COBALT} strokeWidth="2.4" />
          <path d="M244 310h40" stroke={CORAL} strokeWidth="3" />
          <path d="M242 313l42-6" stroke={CORAL} strokeWidth="2" />
          <path d="M298 306l7 7 12-14" stroke={GREEN} strokeWidth="3" />
        </g>

        {/* ---- coffee + plant ---- */}
        <g>
          <rect x="250" y="300" width="22" height="20" rx="3" fill={PAPER} />
          <path d="M272 305c8 0 8 10 0 10" fill="none" strokeWidth="2.2" />
          <path d="M256 294c-2-5 4-6 2-11M264 294c-2-5 4-6 2-11" strokeWidth="1.8" stroke={COBALT} opacity=".7" />
        </g>
        <g>
          <path d="M500 322l6-26h26l6 26z" fill={SKY} />
          <path d="M519 296c-2-18-16-22-24-20 2 14 12 20 24 20zM519 296c2-16 14-20 22-18-2 13-11 19-22 18z" fill={COBALT} stroke="none" />
          <path d="M519 296v-30" strokeWidth="2" stroke={DEEP} />
        </g>

        {/* ---- chair + human ---- */}
        <rect x="92" y="298" width="122" height="224" rx="30" fill={SKY} />
        <path d="M153 300v210" strokeWidth="1.8" opacity=".5" />
        {/* shoulders / back */}
        <path d="M104 512c0-96 14-150 49-150s49 54 49 150z" fill={STEEL} />
        {/* arm reaching to keyboard */}
        <path d="M192 372c46-8 118-24 158-58l10 12c-40 40-116 60-160 66z" fill={STEEL} />
        <circle cx="356" cy="320" r="12" fill={STEEL} />
        {/* neck + head */}
        <rect x="140" y="288" width="26" height="26" fill={STEEL} />
        <circle cx="153" cy="262" r="33" fill={STEEL} />
        <circle cx="153" cy="230" r="14" fill={DEEP} />
        {/* headphones */}
        <path d="M120 258a33 33 0 0 1 66 0" strokeWidth="4" />
        <rect x="112" y="252" width="14" height="24" rx="5" fill={INK} stroke="none" />
        <rect x="180" y="252" width="14" height="24" rx="5" fill={INK} stroke="none" />
      </g>
    </svg>
  );
}

/* ---------------- WORKFLOW ICONS ---------------- */
function iconProps() {
  return { fill: "none", stroke: INK, strokeWidth: 2.4, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
}

export function IconDictation({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 72 72" role="img" aria-hidden="true" {...iconProps()}>
      <rect x="30" y="14" width="12" height="26" rx="6" fill={COBALT} stroke={INK} />
      <path d="M22 34a14 14 0 0 0 28 0M36 48v8M28 58h16" />
      <path d="M8 36c4-8 4 8 8 0M56 36c4-8 4 8 8 0" stroke={COBALT} />
    </svg>
  );
}

export function IconAIDraft({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 72 72" role="img" aria-hidden="true" {...iconProps()}>
      <rect x="20" y="20" width="32" height="32" rx="7" fill={SKY} stroke={INK} />
      <path d="M28 32h16M28 40h11" stroke={COBALT} />
      <path d="M36 8v8M36 56v8M8 36h8M56 36h8M16 16l6 6M56 16l-6 6M16 56l6-6M56 56l-6-6" strokeWidth="2" />
    </svg>
  );
}

export function IconReview({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 72 72" role="img" aria-hidden="true" {...iconProps()}>
      <rect x="16" y="12" width="34" height="44" rx="5" fill={PAPER} stroke={INK} />
      <path d="M24 24h18M24 32h18M24 40h10" stroke={COBALT} />
      <circle cx="46" cy="46" r="13" fill={WARM} stroke={INK} />
      <path d="M40 46l4 4 8-9" stroke={GREEN} strokeWidth="3" />
    </svg>
  );
}

export function IconRecord({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 72 72" role="img" aria-hidden="true" {...iconProps()}>
      <rect x="18" y="12" width="36" height="48" rx="5" fill={COBALT} stroke={INK} />
      <path d="M27 26h18M27 34h18M27 42h12" stroke="#fff" />
      <circle cx="48" cy="48" r="11" fill="#fff" stroke={INK} />
      <path d="M43 48l4 4 7-8" stroke={GREEN} strokeWidth="3" />
    </svg>
  );
}

/* Connector line for the workflow (draws in) */
export function WorkflowLine({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 1000 40" fill="none" preserveAspectRatio="none" aria-hidden="true">
      <path className="draw-path" style={{ ["--len" as string]: "980" }}
        d="M20 20 H980" stroke={COBALT} strokeWidth="2.5" strokeLinecap="round" strokeDasharray="6 8" />
      <g fill={COBALT}>
        <path d="M312 20l-11-6v12z" /><path d="M562 20l-11-6v12z" /><path d="M812 20l-11-6v12z" />
      </g>
    </svg>
  );
}

/* ---------------- EPHEMERA (Who We Are) ---------------- */
export function EphHuman({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 120" fill="none" role="img" aria-hidden="true">
      <g stroke={INK} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        <rect x="30" y="16" width="96" height="88" rx="5" fill={PAPER} />
        <path d="M44 36h68M44 50h68M44 64h50" stroke={COBALT} />
        <path d="M44 78h38" stroke={CORAL} strokeWidth="3" />
        <path d="M110 44l22-10 8 8-22 24-12 3 3-12z" fill={WARM} />
        <path d="M110 79l6 6 10-12" stroke={GREEN} strokeWidth="3" />
      </g>
    </svg>
  );
}

export function EphAI({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 120" fill="none" role="img" aria-hidden="true">
      <g stroke={INK} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20,50 32,34 44,66 56,26 68,60 80,44 92,50" stroke={COBALT} />
        <path d="M96 50h16" stroke={COBALT} />
        <path d="M116 44l8-6 8 6" />
        <rect x="118" y="24" width="62" height="72" rx="5" fill={SKY} />
        <path d="M130 44h38M130 58h38M130 72h24" stroke={DEEP} />
      </g>
    </svg>
  );
}

export function EphAccount({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 120" fill="none" role="img" aria-hidden="true">
      <g stroke={INK} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M28 40h40l8-10h50a6 6 0 0 1 6 6v54a6 6 0 0 1-6 6H34a6 6 0 0 1-6-6z" fill={WARM} />
        <rect x="86" y="20" width="34" height="16" rx="4" fill={COBALT} stroke={INK} />
        <path d="M44 60h84M44 74h60" stroke={COBALT} />
        <circle cx="150" cy="78" r="4" fill={GREEN} stroke="none" />
      </g>
    </svg>
  );
}

/* ---------------- SERVICE ILLUSTRATIONS ---------------- */
export function SvcMedical({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 240 150" fill="none" role="img" aria-hidden="true">
      <g stroke={INK} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        <rect x="42" y="30" width="118" height="108" rx="6" fill={PAPER} transform="rotate(-4 101 84)" />
        <rect x="70" y="18" width="118" height="112" rx="6" fill="#fff" />
        <path d="M86 40h86M86 56h86M86 72h60" stroke={COBALT} />
        <path d="M86 88h70" stroke={MARKER} strokeWidth="7" strokeLinecap="butt" opacity=".85" />
        <path d="M86 88h86" stroke={COBALT} />
        <path d="M86 104h50" stroke={COBALT} />
      </g>
    </svg>
  );
}

export function SvcLegal({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 240 150" fill="none" role="img" aria-hidden="true">
      <g stroke={INK} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        <rect x="48" y="34" width="150" height="100" rx="7" fill={SKY} />
        <rect x="48" y="34" width="60" height="20" rx="6" fill={COBALT} stroke={INK} />
        <rect x="70" y="52" width="110" height="74" rx="5" fill={PAPER} />
        <path d="M84 70h82M84 84h82M84 98h54" stroke={COBALT} />
        <circle cx="158" cy="104" r="16" fill={WARM} stroke={INK} />
        <path d="M150 104l6 6 10-12" stroke={GREEN} strokeWidth="3" />
      </g>
    </svg>
  );
}

export function SvcTech({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 240 150" fill="none" role="img" aria-hidden="true">
      <g stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" fill="none">
        <rect x="18" y="60" width="18" height="34" rx="9" fill="rgba(255,255,255,.16)" stroke="#fff" />
        <path d="M14 82a13 13 0 0 0 26 0M27 95v10M20 108h14" />
        <polyline points="52,78 60,66 68,90 76,60 84,88 92,72 100,78" stroke={SKY} />
        <path d="M108 78h10" />
        <path d="M150 62a18 18 0 0 1 2 36h-30a15 15 0 0 1-2-30 20 20 0 0 1 30-6z" fill="rgba(255,255,255,.12)" />
        <path d="M170 80h14" />
        <rect x="188" y="54" width="42" height="52" rx="5" fill="rgba(255,255,255,.14)" />
        <path d="M198 70h22M198 82h22M198 94h14" stroke={SKY} />
      </g>
    </svg>
  );
}

/* ---------------- HAND-DRAWN ARROW ANNOTATION ---------------- */
export function NoteArrow({ className, flip = false }: { className?: string; flip?: boolean }) {
  return (
    <svg className={`note-arrow ${className ?? ""}`} viewBox="0 0 120 80" fill="none" aria-hidden="true"
      style={flip ? { transform: "scaleX(-1)" } : undefined}>
      <path d="M8 12c30 4 58 20 70 46" stroke={COBALT} strokeWidth="2.4" strokeLinecap="round" />
      <path d="M78 58l2-18M78 58l-16-6" stroke={COBALT} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

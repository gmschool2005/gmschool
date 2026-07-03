import { useEffect, useRef, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import {
  Award, BookOpen, Users, MapPin, Star,
  GraduationCap, Heart, Flame, ArrowUp,
  ChevronDown, ChevronLeft, ChevronRight, Bell,
} from "lucide-react";

/* ══════════════════════════════════════════════════
   HOOKS
══════════════════════════════════════════════════ */

/** Fires once when element enters viewport */
function useReveal(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

/** Magnetic pull toward cursor (desktop only) */
function useMagnetic(strength = 0.2) {
  const ref = useRef<HTMLAnchorElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(hover:none)").matches) return;
    const move = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${(e.clientX - r.left - r.width / 2) * strength}px`);
      el.style.setProperty("--my", `${(e.clientY - r.top - r.height / 2) * strength}px`);
    };
    const leave = () => { el.style.setProperty("--mx", "0px"); el.style.setProperty("--my", "0px"); };
    el.addEventListener("mousemove", move);
    el.addEventListener("mouseleave", leave);
    return () => { el.removeEventListener("mousemove", move); el.removeEventListener("mouseleave", leave); };
  }, [strength]);
  return ref;
}

/** One-time splash sequence: draw crest → hold → gates open */
function useSplash() {
  const [phase, setPhase] = useState<"idle" | "show" | "open" | "done">("idle");
  useEffect(() => {
    const seen = sessionStorage.getItem("gmSplashSeen");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (seen || reduced) { setPhase("done"); return; }
    setPhase("show");
    const t1 = setTimeout(() => setPhase("open"), 1250);
    const t2 = setTimeout(() => {
      setPhase("done");
      sessionStorage.setItem("gmSplashSeen", "1");
    }, 2050);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);
  return phase;
}

/* ══════════════════════════════════════════════════
   ANIMATED COUNTER
══════════════════════════════════════════════════ */
function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [n, setN] = useState(0);
  const { ref, visible } = useReveal(0.4);
  useEffect(() => {
    if (!visible) return;
    const dur = 1400;
    const start = performance.now();
    const raf = (t: number) => {
      const pct = Math.min((t - start) / dur, 1);
      const ease = pct === 1 ? 1 : 1 - Math.pow(2, -10 * pct);
      setN(Math.round(ease * target));
      if (pct < 1) requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }, [visible, target]);
  return <span ref={ref}>{n.toLocaleString()}{suffix}</span>;
}

/* ══════════════════════════════════════════════════
   REVEAL WRAPPER
══════════════════════════════════════════════════ */
function Reveal({
  children, delay = 0, from = "up", className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  from?: "up" | "left" | "right" | "none";
  className?: string;
}) {
  const { ref, visible } = useReveal();
  const dirClass = from === "left" ? "from-left" : from === "right" ? "from-right" : "";
  return (
    <div
      ref={ref}
      className={`gs-reveal ${dirClass} ${visible ? "visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* ══════════════════════════════════════════════════
   IMAGE WITH FALLBACK
══════════════════════════════════════════════════ */
function SchoolImg({ src, alt, fallback }: { src: string; alt: string; fallback: string }) {
  const svg = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Crect fill='%230F1C3F' width='400' height='400'/%3E%3Ctext x='50%25' y='50%25' fill='%23C9971C' font-size='15' font-family='Georgia' text-anchor='middle' dy='.35em'%3E${encodeURIComponent(fallback)}%3C/text%3E%3C/svg%3E`;
  return (
    <img
      src={src} alt={alt} loading="lazy" draggable={false}
      style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
      onError={(e) => { (e.target as HTMLImageElement).src = svg; }}
    />
  );
}

/* ══════════════════════════════════════════════════
   MAGNETIC CTA LINK
══════════════════════════════════════════════════ */
function MagneticLink({ to, children, variant = "primary" }: { to: string; children: React.ReactNode; variant?: "primary" | "ghost" }) {
  const ref = useMagnetic();
  return <Link ref={ref} to={to} className={variant === "primary" ? "gs-btn-primary" : "gs-btn-ghost"}>{children}</Link>;
}

/* ══════════════════════════════════════════════════
   CREST — the school badge, reused in splash + hero
══════════════════════════════════════════════════ */
function Crest({ size = 96, animated = false, className = "" }: { size?: number; animated?: boolean; className?: string }) {
  return (
    <svg
      viewBox="0 0 120 140" width={size} height={size}
      className={`gs-crest ${animated ? "gs-crest-animated" : ""} ${className}`}
      fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
    >
      <path d="M60 3 L64 12 L60 10 L56 12 Z" fill="currentColor" opacity="0.9" />
      <path className="gs-crest-shield" d="M60 6 L111 24 V63 C111 100 88 121 60 134 C32 121 9 100 9 63 V24 Z" stroke="currentColor" strokeWidth="2.5" />
      <path className="gs-crest-shield-inner" d="M60 17 L100 32 V63 C100 92 82 109 60 120 C38 109 20 92 20 63 V32 Z" stroke="currentColor" strokeWidth="1" opacity="0.45" />
      <line x1="26" y1="49" x2="94" y2="49" stroke="currentColor" strokeWidth="1" opacity="0.4" />
      <text x="60" y="45" textAnchor="middle" fontFamily="Fraunces, Georgia, serif" fontSize="25" fontWeight="700" fill="currentColor">GM</text>
      <text x="60" y="97" textAnchor="middle" fontFamily="'IBM Plex Mono', monospace" fontSize="8.5" letterSpacing="2" fill="currentColor" opacity="0.85">EST. 2005</text>
    </svg>
  );
}

/* ══════════════════════════════════════════════════
   SPLASH — school-gate reveal, once per session
══════════════════════════════════════════════════ */
function Splash({ phase }: { phase: "idle" | "show" | "open" | "done" }) {
  if (phase === "done" || phase === "idle") return null;
  return (
    <div className={`gs-splash ${phase === "open" ? "is-open" : ""}`} aria-hidden="true">
      <div className="gs-splash-panel gs-splash-panel-top" />
      <div className="gs-splash-panel gs-splash-panel-bottom" />
      <div className="gs-splash-emblem">
        <Crest size={104} animated />
        <div className="gs-splash-tag">Strive for Excellence</div>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════
   SCROLL PROGRESS BAR
══════════════════════════════════════════════════ */
function ScrollProgress() {
  const [w, setW] = useState(0);
  useEffect(() => {
    const fn = () => {
      const h = document.documentElement;
      setW(h.scrollHeight - h.clientHeight > 0 ? (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100 : 0);
    };
    window.addEventListener("scroll", fn, { passive: true });
    fn();
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return <div className="gs-scroll-progress" style={{ width: `${w}%` }} />;
}

/* ══════════════════════════════════════════════════
   BACK TO TOP
══════════════════════════════════════════════════ */
function BackToTop() {
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const fn = () => setVis(window.scrollY > 600);
    window.addEventListener("scroll", fn, { passive: true });
    fn();
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return (
    <button type="button" aria-label="Back to top"
      className={`gs-back-to-top ${vis ? "visible" : ""}`}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
      <ArrowUp size={20} />
    </button>
  );
}

/* ══════════════════════════════════════════════════
   HERO TITLE — word-by-word
══════════════════════════════════════════════════ */
function HeroTitle() {
  const line1 = ["Where", "Every", "Child's"];
  const line2 = ["Future", "is", "Forged"];
  return (
    <h1 className="gs-hero-title">
      {line1.map((w, i) => (
        <span key={w} className="word" style={{ animationDelay: `${1.9 + i * 0.12}s` }}>{w} </span>
      ))}
      <br />
      {line2.map((w, i) => (
        <span key={w} className="word gold-word" style={{ animationDelay: `${2.26 + i * 0.12}s` }}>{w} </span>
      ))}
    </h1>
  );
}

/* ══════════════════════════════════════════════════
   SECTION HEADER
══════════════════════════════════════════════════ */
function SectionHeader({ label, title, centered = true }: { label: string; title: React.ReactNode; centered?: boolean }) {
  return (
    <Reveal from="none">
      <div className={`gs-section-head ${centered ? "centered" : ""}`}>
        <div className="gs-section-label">{label}</div>
        <div className="gs-gold-bar" />
        <h2 className="gs-section-title">{title}</h2>
      </div>
    </Reveal>
  );
}

/* ══════════════════════════════════════════════════
   STAT TICKET
══════════════════════════════════════════════════ */
function StatTicket({ icon, value, suffix, label, delay }: { icon: React.ReactNode; value: number; suffix: string; label: string; delay: number }) {
  const { ref, visible } = useReveal(0.25);
  return (
    <div ref={ref} className={`gs-stat-ticket ${visible ? "pop-in" : ""}`} style={{ animationDelay: `${delay}ms` }}>
      <div className="gs-stat-icon">{icon}</div>
      <div className="gs-stat-number"><Counter target={value} suffix={suffix} /></div>
      <div className="gs-stat-label">{label}</div>
    </div>
  );
}

/* ══════════════════════════════════════════════════
   GALLERY DECK — swipeable stack of memory cards
══════════════════════════════════════════════════ */
type DeckItem = { src: string; caption: string; tag: string };

function GalleryDeck({ items }: { items: DeckItem[] }) {
  const [index, setIndex] = useState(0);
  const [drag, setDrag] = useState(0);
  const [dragging, setDragging] = useState(false);
  const startX = useRef(0);
  const len = items.length;

  const go = useCallback((dir: 1 | -1) => {
    setIndex((i) => (i + dir + len) % len);
  }, [len]);

  const onDown = (e: React.PointerEvent) => {
    setDragging(true);
    startX.current = e.clientX;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };
  const onMove = (e: React.PointerEvent) => {
    if (!dragging) return;
    setDrag(e.clientX - startX.current);
  };
  const endDrag = () => {
    if (Math.abs(drag) > 64) go(drag < 0 ? 1 : -1);
    setDrag(0);
    setDragging(false);
  };

  return (
    <div className="gs-deck">
      <div className="gs-deck-stage">
        {items.map((item, i) => {
          const offset = (i - index + len) % len;
          if (offset > 2) return null;
          const isTop = offset === 0;
          const style: React.CSSProperties = isTop
            ? {
                transform: `translateX(${drag}px) rotate(${drag / 24}deg)`,
                transition: dragging ? "none" : "transform 0.5s cubic-bezier(0.22,1,0.36,1)",
                zIndex: 10,
              }
            : {
                transform: `translateY(${offset * 12}px) scale(${1 - offset * 0.05})`,
                zIndex: 10 - offset,
                opacity: offset === 2 ? 0.45 : 0.8,
              };
          return (
            <div
              key={item.src + i}
              className={`gs-deck-card ${isTop ? "is-top" : ""}`}
              style={style}
              onPointerDown={isTop ? onDown : undefined}
              onPointerMove={isTop ? onMove : undefined}
              onPointerUp={isTop ? endDrag : undefined}
              onPointerCancel={isTop ? endDrag : undefined}
            >
              <SchoolImg src={item.src} alt={item.caption} fallback={item.caption} />
              <div className="gs-deck-caption">
                <span className="gs-deck-tag">{item.tag}</span>
                <span className="gs-deck-title">{item.caption}</span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="gs-deck-controls">
        <button type="button" aria-label="Previous photo" className="gs-deck-btn" onClick={() => go(-1)}>
          <ChevronLeft size={19} />
        </button>
        <div className="gs-deck-dots">
          {items.map((_, i) => (
            <span key={i} className={`gs-deck-dot ${i === index ? "active" : ""}`} />
          ))}
        </div>
        <button type="button" aria-label="Next photo" className="gs-deck-btn" onClick={() => go(1)}>
          <ChevronRight size={19} />
        </button>
      </div>
      <p className="gs-deck-hint">Swipe, drag, or tap the arrows to explore campus life</p>
    </div>
  );
}

/* ══════════════════════════════════════════════════
   MAIN PAGE
══════════════════════════════════════════════════ */
export default function OurSchool() {
  const splashPhase = useSplash();

  const stats = [
    { icon: <GraduationCap size={26} />, value: 700, suffix: "+", label: "Students Enrolled" },
    { icon: <Users size={26} />,         value: 30,  suffix: "+", label: "Qualified Faculty" },
    { icon: <Award size={26} />,         value: 21,  suffix: "+", label: "Years of Excellence" },
    { icon: <Star size={26} />,          value: 100, suffix: "%", label: "Board Pass Rate" },
  ];

  const values = [
    { icon: <BookOpen size={22} />, title: "Academic Excellence", desc: "Rigorous CBSE curriculum blended with experiential learning, ensuring every student reaches their full potential." },
    { icon: <Heart size={22} />, title: "Holistic Development", desc: "Sports, arts, music, and cultural activities alongside academics — because a complete education shapes character." },
    { icon: <Flame size={22} />, title: "Inspired Teaching", desc: "Our educators ignite curiosity, not just deliver lessons. Every classroom is a space where questions are celebrated." },
    { icon: <Users size={22} />, title: "Inclusive Community", desc: "Children from all backgrounds learn together, building empathy, respect, and a sense of shared purpose." },
  ];

  const milestones = [
    { year: "2005", title: "School Founded", desc: "Established with a vision to bring quality English-medium education to Chanaptia." },
    { year: "2024", title: "Permitted by Bihar Govt.", desc: "QR CODE NO.: 2031025202376130436/2023" },
    { year: "2024", title: "New Campus Block", desc: "Inaugurated expanded infrastructure — science labs, computer lab, and smart classrooms." },
  ];

  const gallery: DeckItem[] = [
    { src: "/images/gallery/img41.jpg", caption: "Morning Assembly", tag: "Everyday" },
    { src: "/images/gallery/img25.jpg", caption: "In the Classroom", tag: "Academics" },
    { src: "/images/gallery/img26.jpg", caption: "Young Scholars", tag: "Students" },
    { src: "/images/gallery/img27.jpg", caption: "Hands-on Learning", tag: "Classroom" },
    { src: "/images/gallery/img30.jpg", caption: "Sports Day", tag: "Activities" },
    { src: "/images/gallery/img23.jpg", caption: "Our Campus", tag: "Chanaptia" },
  ];

  return (
    <div className="gs-page">
      <Splash phase={splashPhase} />
      <ScrollProgress />
      <BackToTop />

      {/* ══ HERO — full-bleed photo, badge headline ══ */}
      <section className="gs-hero-full">
        <div className="gs-hero-bg">
          <SchoolImg src="/images/gallery/img23.jpg" alt="G. M. English School campus" fallback="G. M. English School" />
          <div className="gs-hero-scrim" />
        </div>

        <div className="gs-hero-watermark"><Crest size={340} /></div>

        <div className="gs-hero-content">
          <div className="gs-eyebrow" style={{ animationDelay: "1.6s" }}>
            <MapPin size={11} /> Chanaptia, West Champaran, Bihar
          </div>
          <HeroTitle />
          <p className="gs-hero-subtitle">
            G. M. English School has been building scholars, leaders, and
            compassionate citizens since 2005 — right in the heart of Bihar.
          </p>
          <div className="gs-hero-buttons">
            <MagneticLink to="/contact" variant="primary">Enroll Today →</MagneticLink>
            <MagneticLink to="/about/principal-message" variant="ghost">Meet Our Principal</MagneticLink>
          </div>
        </div>

        <a href="#stats" className="gs-scroll-cue" aria-label="Scroll to explore">
          <span className="gs-scroll-cue-line" />
          <ChevronDown size={16} />
        </a>
      </section>

      {/* ══ STATS — admit-card ticket strip ══ */}
      <section id="stats" className="gs-stats">
        <div className="gs-stats-strip">
          {stats.map((s, i) => (
            <StatTicket key={s.label} icon={s.icon} value={s.value} suffix={s.suffix} label={s.label} delay={i * 100} />
          ))}
        </div>
      </section>

      {/* ══ GALLERY — swipeable memory-card deck ══ */}
      <section className="gs-gallery">
        <SectionHeader label="Campus Life · Swipe to Browse" title={<>Glimpses of <em>G. M. English School</em></>} />
        <GalleryDeck items={gallery} />
      </section>

      {/* ══ STORY — ruled-paper narrative ══ */}
      <section className="gs-story">
        <div className="gs-story-grid">
          <Reveal from="left">
            <div className="gs-story-paper">
              <div className="gs-section-label">Our Story</div>
              <div className="gs-gold-bar" />
              <h2 className="gs-section-title">A School Built on<br /><em>Belief in Every Child</em></h2>
              <p className="gs-body-text">
                G.M. English School, Chiran Chowk, Chanpatia, was originally founded in 2005 as a branch of
                Gyan Mandir Shikshan Sansthan — an institution established in 1986 with the vision of providing
                quality education to society.
              </p>
              <p className="gs-body-text">
                The school was established to meet the growing demand for English-medium education in the region.
                Since its inception, G.M. English School has been committed to fostering academic excellence,
                discipline, and strong moral values among its students.
              </p>
              <p className="gs-body-text">
                Guided by its motto, <strong>"Strive for Excellence,"</strong> the school continues to nurture
                confident, responsible, and successful individuals.
              </p>
            </div>
          </Reveal>

          <Reveal from="right" delay={120}>
            <div className="gs-story-photo">
              <SchoolImg src="/images/gallery/img7.jpg" alt="Campus" fallback="School Campus" />
            </div>
            <div className="gs-quote">
              <p className="gs-quote-text">
                "We don't just educate students — we build the future of our community, one child at a time."
              </p>
              <div className="gs-quote-author">
                
                <div>
                  <div className="gs-quote-name">School Principal</div>
                  <div className="gs-quote-role">G. M. English School, Chanaptia</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══ VALUES — uniform-badge pillars ══ */}
      <section className="gs-values">
        <SectionHeader label="What We Stand For" title={<>Four Pillars of <em>G. M. Education</em></>} />
        <div className="gs-badge-grid">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 90}>
              <div className="gs-badge-card">
                <div className="gs-badge-icon">{v.icon}</div>
                <div className="gs-badge-title">{v.title}</div>
                <div className="gs-badge-desc">{v.desc}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ══ TIMELINE — school register ledger ══ */}
      <section className="gs-timeline">
        <SectionHeader label="Our Journey" title={<>Milestones That Shaped <em>Who We Are</em></>} />
        <div className="gs-ledger">
          {milestones.map((m, i) => (
            <Reveal key={m.title} delay={i * 100}>
              <div className="gs-ledger-row">
                <div className="gs-ledger-year">{m.year}</div>
                <div className="gs-ledger-dot" />
                <div className="gs-ledger-body">
                  <div className="gs-ledger-title">{m.title}</div>
                  <div className="gs-ledger-desc">{m.desc}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ══ CTA — the admission bell ══ */}
      <section className="gs-cta">
        <Reveal from="none">
          <div className="gs-cta-inner">
            <div className="gs-cta-bell"><Bell size={26} /></div>
            <h2 className="gs-cta-title">Ready to Join Our Family?</h2>
            <p className="gs-cta-sub">Admissions for 2025–26 are now open. Give your child the education they deserve.</p>
            <div className="gs-cta-buttons">
              <MagneticLink to="/contact" variant="primary">Apply for Admission</MagneticLink>
              <MagneticLink to="/admission/process" variant="ghost">Learn the Process</MagneticLink>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}

import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Award, BookOpen, Users, MapPin, Star, GraduationCap, Heart, Flame } from "lucide-react";

/* ─── ANIMATION HOOK ─────────────────────────────────── */
function useReveal(threshold = 0.15) {
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

/* ─── ANIMATED COUNTER ───────────────────────────────── */
function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const { ref, visible } = useReveal(0.3);
  useEffect(() => {
    if (!visible) return;
    let start = 0;
    const step = Math.ceil(target / 60);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(start);
    }, 24);
    return () => clearInterval(timer);
  }, [visible, target]);
  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

/* ─── REVEAL WRAPPER ─────────────────────────────────── */
function Reveal({
  children,
  delay = 0,
  direction = "up",
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
  className?: string;
}) {
  const { ref, visible } = useReveal();
  const transforms: Record<string, string> = {
    up: "translateY(36px)",
    left: "translateX(-36px)",
    right: "translateX(36px)",
    none: "none",
  };
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : transforms[direction],
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

/* ─── IMAGE WITH FALLBACK ────────────────────────────── */
function SchoolImg({ src, alt, fallbackText }: { src: string; alt: string; fallbackText: string }) {
  const color = fallbackText.includes("Building") ? "%231B2E6B"
    : fallbackText.includes("Student") ? "%23991B1B"
      : fallbackText.includes("Classroom") ? "%23C9971C"
        : fallbackText.includes("Campus") ? "%231B2E6B"
          : "%231B2E6B";
  const textColor = fallbackText.includes("Classroom") ? "%230F1C3F" : "%23C9971C";
  const fallbackSvg = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Crect fill='${color}' width='400' height='400'/%3E%3Ctext x='50%25' y='50%25' fill='${textColor}' font-size='16' font-family='Georgia' text-anchor='middle' dy='.35em'%3E${encodeURIComponent(fallbackText)}%3C/text%3E%3C/svg%3E`;
  return (
    <img
      src={src}
      alt={alt}
      style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
      onError={(e) => { (e.target as HTMLImageElement).src = fallbackSvg; }}
    />
  );
}

/* ─── MAIN PAGE ──────────────────────────────────────── */
export default function OurSchool() {
  const stats = [
    { icon: <GraduationCap size={28} />, value: 700, suffix: "+", label: "Students Enrolled" },
    { icon: <Users size={28} />, value: 30, suffix: "+", label: "Qualified Faculty" },
    { icon: <Award size={28} />, value: 21, suffix: "+", label: "Years of Excellence" },
    { icon: <Star size={28} />, value: 100, suffix: "%", label: "Board Pass Rate" },
  ];

  const values = [
    { icon: <BookOpen size={24} />, title: "Academic Excellence", desc: "Rigorous CBSE curriculum blended with experiential learning, ensuring every student reaches their full potential." },
    { icon: <Heart size={24} />, title: "Holistic Development", desc: "Sports, arts, music, and cultural activities run alongside academics — because a complete education shapes character." },
    { icon: <Flame size={24} />, title: "Inspired Teaching", desc: "Our educators ignite curiosity, not just deliver lessons. Every classroom is a space where questions are celebrated." },
    { icon: <Users size={24} />, title: "Inclusive Community", desc: "Children from all backgrounds learn together, building empathy, respect, and a sense of shared purpose." },
  ];

  const milestones = [
    { year: "2005", title: "School Founded", desc: "Established with a vision to bring quality English-medium education to Chanaptia." },
    { year: "2024", title: "Permitted by Bihar Govt.", desc: " QR CODE NO. : 2031025202376130436/2023" },
    { year: "2024", title: "New Campus Block", desc: "Inaugurated the expanded infrastructure — science labs, computer lab, and smart class." },
  ];

  return (
    <div className="gs-page">

      {/* ── HERO ─────────────────────────────────────── */}
      <section className="gs-hero">
        <svg className="gs-hero-watermark" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="96" stroke="#C9971C" strokeWidth="4" />
          <circle cx="100" cy="100" r="80" stroke="#C9971C" strokeWidth="1.5" strokeDasharray="6 4" />
          <circle cx="100" cy="100" r="60" stroke="#ffffff" strokeWidth="1" />
          <path d="M100 20 L108 50 L100 44 L92 50 Z" fill="#C9971C" />
          <path d="M100 180 L108 150 L100 156 L92 150 Z" fill="#C9971C" />
          <path d="M20 100 L50 108 L44 100 L50 92 Z" fill="#C9971C" />
          <path d="M180 100 L150 108 L156 100 L150 92 Z" fill="#C9971C" />
        </svg>
        <div className="gs-hero-glow" />

        <div className="mx-auto max-w-7xl">
          <div className="grid gap-14 items-center lg:grid-cols-2">

            {/* LEFT */}
            <Reveal direction="left">
              <div className="gs-eyebrow">
                <MapPin size={11} />
                Chanaptia, West Champaran, Bihar
              </div>
              <h1 className="gs-hero-title">
                Where Every Child's<br />
                <span>Future is Forged</span>
              </h1>
              <p className="gs-hero-subtitle">
                G. M. English School has been building scholars, leaders, and
                compassionate citizens since 2005 — right in the heart of Bihar.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to="/contact" className="gs-btn-primary">Enroll Today →</Link>
                <Link to="/about/principal-message" className="gs-btn-ghost">Meet Our Principal</Link>
              </div>
            </Reveal>

            {/* RIGHT — MOSAIC */}
            <Reveal direction="right" delay={150}>
              <div className="gs-mosaic-wrap">
                <div
                  className="gs-mosaic"
                  style={{ border: "3px solid rgba(201,151,28,0.4)" }}
                >
                  <div className="gs-mosaic-main">
                    <SchoolImg src="/images/gallery/img7.JPG" alt="School building" fallbackText="School Building" />
                  </div>
                  <div>
                    <SchoolImg src="/images/gallery/img7.JPG" alt="Students learning" fallbackText="Students" />
                  </div>
                  <div>
                    <SchoolImg src="/images/gallery/img7.JPG" alt="Modern classroom" fallbackText="Classroom" />
                  </div>
                </div>
                <div className="gs-mosaic-badge">
                  Est. 2005
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── STATS BAND ───────────────────────────────── */}
      <section className="gs-stats">
        <div className="mx-auto max-w-7xl grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 80}>
              <div className="gs-stat-card">
                <div className="gs-stat-icon">{s.icon}</div>
                <div className="gs-stat-number">
                  <Counter target={s.value} suffix={s.suffix} />
                </div>
                <div className="gs-stat-label">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── CAMPUS GALLERY SLIDER ───────────────────────── */}
      <section className="gs-gallery-slider">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <div className="gs-section-label">Campus Life</div>
            <div className="gs-gold-bar mx-auto mt-3 mb-5" />
            <h2 className="gs-section-title">
              Glimpses of <em>G. M. English School</em>
            </h2>
          </div>

          <div className="slider-container">
            <div className="slider-track">
              {[
                "/images/gallery/img7.JPG",
                "/images/gallery/img7.JPG",
                "/images/gallery/img7.JPG",
                "/images/gallery/img7.JPG",
                "/images/gallery/img7.JPG",
                "/images/gallery/img7.JPG",
                "/images/gallery/img7.JPG",  
              ].map((img, index) => (
                <div key={index} className="slider-card">
                  <img
                    src={img}
                    alt={`Gallery ${index + 1}`}
                    className="slider-image"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── STORY ────────────────────────────────────── */}
      <section className="gs-story">
        <div className="mx-auto max-w-7xl grid gap-16 items-center lg:grid-cols-2">

          <Reveal direction="left">
            <div className="gs-section-label">Our Story</div>
            <div className="gs-gold-bar" />
            <h2 className="gs-section-title">
              A School Built on<br /><em>Belief in Every Child</em>
            </h2>
            <p className="gs-body-text">
              G.M. English School, Chiran Chowk, Chanpatia, was originally founded in 2005 as a branch of Gyan Mandir Shikshan Sansthan, an educational institution established in 1986 with the vision of providing quality education to society.
            </p>
            <p className="gs-body-text">
              The school was established to meet the growing demand for English-medium education in the region. Since its inception, G.M. English School has been committed to fostering academic excellence, discipline, and strong moral values among its students.
            </p>
            <p className="gs-body-text">
              Guided by its motto, "Strive for Excellence," the school continues to nurture confident, responsible, and successful individuals while remaining dedicated to serving the community through quality education.
            </p>
          </Reveal>

          <Reveal direction="right" delay={100}>
            <div
              className="rounded-2xl overflow-hidden mb-6"
              style={{ border: "3px solid rgba(201,151,28,0.3)", boxShadow: "0 24px 64px rgba(27,46,107,0.15)" }}
            >
              <div style={{ height: 320 }}>
                <SchoolImg src="/images/gallery/img7.JPG" alt="School campus" fallbackText="School Campus" />
              </div>
            </div>

            <div className="gs-quote">
              <p className="gs-quote-text">
                "We don't just educate students — we build the future of our community, one child at a time."
              </p>
              <div className="gs-quote-author">
                <div className="gs-quote-avatar">
                  <SchoolImg src="/images/gallery/img7.JPG" alt="Principal" fallbackText="Principal" />
                </div>
                <div>
                  <div className="gs-quote-name">School Principal</div>
                  <div className="gs-quote-role">G. M. English School, Chanaptia</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── VALUES ───────────────────────────────────── */}
      <section className="gs-values">
        <div className="mx-auto max-w-7xl">
          <Reveal direction="none">
            <div className="text-center mb-14">
              <div className="gs-section-label">What We Stand For</div>
              <div className="gs-gold-bar mx-auto mt-3 mb-5" />
              <h2 className="gs-section-title">Four Pillars of <em>G. M. Education</em></h2>
            </div>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 80}>
                <div className="gs-value-card">
                  <div className="gs-value-icon">{v.icon}</div>
                  <div className="gs-value-title">{v.title}</div>
                  <div className="gs-value-desc">{v.desc}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIMELINE ─────────────────────────────────── */}
      <section className="gs-timeline">
        <div className="mx-auto max-w-7xl">
          <Reveal direction="none">
            <div className="text-center mb-14">
              <div className="gs-section-label">Our Journey</div>
              <div className="gs-gold-bar mx-auto mt-3 mb-5" />
              <h2 className="gs-section-title">Milestones That Shaped <em>Who We Are</em></h2>
            </div>
          </Reveal>

          <div className="gs-timeline-track">
            {milestones.map((m, i) => (
              <Reveal key={m.year} delay={i * 60} direction={i % 2 === 0 ? "left" : "right"}>
                <div className="gs-timeline-item">
                  <div className="gs-timeline-dot" />
                  <div className="gs-timeline-content">
                    <div className="gs-timeline-year">{m.year}</div>
                    <div className="gs-timeline-title">{m.title}</div>
                    <div className="gs-timeline-desc">{m.desc}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────── */}
      <section className="gs-cta">
        <Reveal direction="none">
          <div className="mx-auto max-w-xl">
            <h2 className="gs-cta-title">Ready to Join Our Family?</h2>
            <p className="gs-cta-sub">
              Admissions for 2025–26 are now open. Give your child the education they deserve.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link to="/contact" className="gs-btn-primary">Apply for Admission</Link>
              <Link to="/admission/process" className="gs-btn-ghost">Learn the Process</Link>
            </div>
          </div>
        </Reveal>
      </section>

    </div>
  );
}

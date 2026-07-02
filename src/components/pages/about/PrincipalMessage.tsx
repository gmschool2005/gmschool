import { useState } from "react";
import { Link } from "react-router-dom";
const VALUES = [
  { icon: "📖", title: "Academic Excellence", desc: "We cultivate curiosity and a love of learning through rigorous, thoughtful education." },
  { icon: "🤝", title: "Character & Integrity", desc: "Honesty, respect, and responsibility are the pillars we build every student upon." },
  { icon: "🌱", title: "Holistic Growth", desc: "Sports, arts, and community service shape well-rounded human beings, not just scholars." },
  { icon: "🔥", title: "Strive for Excellence", desc: "Our motto is not a slogan — it is a daily commitment from every student and teacher." },
];

export default function PrincipalMessage() {
  const [expanded, setExpanded] = useState(false);

  const shortMessage = `A person without education is just like a flower without fragrance. So, a man should study well and shine bright. Society praises good work and behavior. Our school is dedicated to the same. We highlight the institution's commitment to holistic education and vision for students' growth. Our aim is not merely the collection of facts but the process of preparing a child for the journey of life.`;
  const fullMessage = `${shortMessage}

G.M. English School is committed to stimulating an environment where each and every student is encouraged to discover their unique potential. We focus on the all-round development of each child.`;

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl space-y-8">

        {/* Eyebrow */}
        <div className="flex items-center gap-3">
          <span className="w-8 h-px bg-[#c9a832]" />
          <p className="text-xs font-bold uppercase tracking-widest text-[#c9a832]">
            From the desk of
          </p>
          <span className="flex-1 h-px bg-slate-200" />
        </div>

        {/* Hero row — photo + name */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
          {/* Avatar */}
          <img
            src="/images/gallery/principal.jpg"
            alt="Principal"
            className="h-32 w-32 flex-shrink-0 rounded-3xl object-cover object-top border-4 border-white shadow-xl"
          />

          <div className="text-center sm:text-left">
            <h1 className="text-2xl font-bold text-[#0a2463] leading-tight">
              Principal's Message
            </h1>
            <p className="text-base font-semibold text-slate-700 mt-1">Mr. Rameshwar Singh</p>
            <p className="text-sm text-slate-500">Principal, G.M. English School — Chanaptia</p>

            {/* Credential badges */}
            <div className="flex flex-wrap justify-center sm:justify-start gap-2 mt-3">
              {["B.Ed.", "B.Sc.", "30+ Years Experience"].map((b) => (
                <span
                  key={b}
                  className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#e8eef7] text-[#0a2463]"
                >
                  {b}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Gold divider */}
        <div className="flex items-center gap-3">
          <span className="flex-1 h-px bg-slate-200" />
          <span className="w-2 h-2 rotate-45 bg-[#c9a832]" />
          <span className="flex-1 h-px bg-slate-200" />
        </div>

        {/* Message body */}
        <div className="bg-white border border-slate-200 rounded-2xl px-6 py-7 sm:px-8 space-y-5">
          {/* Opening quote accent */}
          <p
            className="text-5xl font-serif text-[#c9a832] leading-none select-none"
            aria-hidden="true"
          >
            "
          </p>

          <div
            className="text-slate-700 leading-8 text-base space-y-5"
            style={{ fontFamily: "Georgia, serif" }}
          >
            {(expanded ? fullMessage : shortMessage)
              .split("\n\n")
              .filter(Boolean)
              .map((para, i) => (
                <p key={i}>{para}</p>
              ))}
          </div>

          {/* Read more / less */}
          <button
            onClick={() => setExpanded((v) => !v)}
            className="mt-2 text-sm font-semibold text-[#0a2463] underline underline-offset-4 decoration-[#c9a832] hover:text-[#c9a832] transition-colors"
          >
            {expanded ? "Show less ↑" : "Read full message ↓"}
          </button>

          {/* Signature */}
          <div className="pt-4 border-t border-slate-100 flex items-end justify-between">
            <div>
              <p
                className="text-xl text-[#0a2463]"
                style={{ fontFamily: "'Segoe Script', 'Brush Script MT', cursive", letterSpacing: "0.02em" }}
              >
                Rameshwar Singh
              </p>
              <p className="text-xs text-slate-400 mt-1">Principal, G.M. English School</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-slate-400">Academic Year</p>
              <p className="text-sm font-bold text-[#0a2463]">2026 – 27</p>
            </div>
          </div>
        </div>

        {/* Core values */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-1 h-4 rounded-full bg-[#c9a832]" />
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#0a2463]">
              Our core values
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {VALUES.map((v) => (
              <div
                key={v.title}
                className="bg-white border border-slate-200 rounded-xl px-5 py-4 flex gap-4 items-start"
              >
                <span className="text-2xl flex-shrink-0 mt-0.5">{v.icon}</span>
                <div>
                  <p className="text-sm font-bold text-[#0a2463]">{v.title}</p>
                  <p className="text-sm text-slate-500 mt-0.5 leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact strip */}
        <div className="bg-[#0a2463] rounded-2xl px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-white font-bold text-sm">Have a question for the principal?</p>
            <p className="text-blue-300 text-xs mt-0.5">Reach out via the school office</p>
          </div>
          <div className="flex gap-3">
            <Link to="/contact">
              <span className="text-xs font-semibold px-4 py-2 rounded-full bg-white text-[#0a2463]">
                📞 Write to office
              </span>
            </Link>

          </div>
        </div>

      </div>
    </div>
  );
}

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

import { MapPin, Phone, Mail, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  const quickLinks = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about/our-school" },
    { label: "Academics", path: "/academics/curriculum" },
    { label: "Admissions", path: "/admission/process" },
    { label: "Achievements", path: "/achievements/awards" },
    { label: "Gallery", path: "/gallery/photos" },
    { label: "Contact", path: "#contact" },
  ];

  const importantLinks = [
    { label: "CBSE Official Website", href: "https://cbse.gov.in" },
    { label: "NCERT", href: "https://ncert.nic.in" },
    { label: "Mandatory Disclosure", href: "/about/mandatory-information" },
    { label: "Fee Structure", href: "/admission/fee-structure" },
    { label: "Apply Online", href: "/admission/apply-online" },
  ];

  const socials = [
    { icon: <FaFacebookF size={16} />, href: "#", hoverBg: "#1877F2", label: "Facebook" },
    { icon: <FaInstagram size={16} />, href: "#", hoverBg: "#E1306C", label: "Instagram" },
    { icon: <FaYoutube size={16} />, href: "#", hoverBg: "#FF0000", label: "YouTube" },
    { icon: <FaXTwitter size={16} />, href: "#", hoverBg: "#000000", label: "X / Twitter" },
    { icon: <FaLinkedinIn size={16} />, href: "#", hoverBg: "#0A66C2", label: "LinkedIn" },
  ];

  return (
    <>
      <style>{`
        .footer-link {
          position: relative;
          display: inline-block;
          transition: color 0.2s;
        }
        .footer-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 1.5px;
          background: #C9971C;
          transition: width 0.25s ease;
        }
        .footer-link:hover::after { width: 100%; }
        .footer-link:hover { color: #C9971C !important; }

        .social-btn {
          width: 38px;
          height: 38px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.12);
          color: #cbd5e1;
          transition: all 0.22s ease;
          cursor: pointer;
        }
        .social-btn:hover {
          transform: translateY(-3px);
          border-color: transparent;
          color: #fff;
        }

        .footer-divider {
          height: 1px;
          background: linear-gradient(to right, transparent, #C9971C44, #C9971C, #C9971C44, transparent);
        }
      `}</style>

      <footer style={{ background: '#0F1C3F', color: '#e2e8f0' }}>

        {/* GOLD TOP ACCENT */}
        <div className="footer-divider" />

        {/* MAIN CONTENT */}
        <div className="mx-auto max-w-7xl px-6 py-14">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

            {/* SCHOOL INFO */}
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-3 mb-5">
                <div
                  style={{
                    width: 60,
                    height: 60,
                    overflow: 'hidden',
                    border: '2.5px solid #C9971C',
                    flexShrink: 0,
                    background: '#1B2E6B',
                  }}
                >
                  <img
                    src="/images/logo.jpeg"
                    alt="G.M. English School"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div>
                  <h2
                    className="text-base font-extrabold leading-snug"
                    style={{ color: '#fff', fontFamily: 'Georgia, serif' }}
                  >
                    G. M. English School
                  </h2>
                  <p className="text-xs font-semibold tracking-widest uppercase mt-0.5" style={{ color: '#C9971C' }}>
                    Chanaptia, Bihar
                  </p>
                  <p className="text-xs font-semibold tracking-widest uppercase mt-0.5" style={{ color: '#C9971C' }}>
                    Estd.- 2005
                  </p>
                </div>
              </div>

              <p className="text-sm leading-relaxed" style={{ color: '#94a3b8' }}>
                Dedicated to nurturing young minds with quality education, discipline, and values — shaping tomorrow's leaders in the heart of Bihar.
              </p>

              {/* AFFILIATION BADGE */}
              <div
                className="mt-5 inline-flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-semibold"
                style={{ background: 'rgba(201,151,28,0.12)', border: '1px solid rgba(201,151,28,0.3)', color: '#C9971C' }}
              >
                ✦ CBSE Affiliated School
              </div>
            </div>

            {/* CONTACT */}
            <div>
              <h3
                className="mb-5 text-sm font-bold uppercase tracking-widest"
                style={{ color: '#C9971C', letterSpacing: '0.12em' }}
              >
                Contact Us
              </h3>

              <div className="space-y-4 text-sm" style={{ color: '#94a3b8' }}>
                <div className="flex items-start gap-3">
                  <MapPin size={16} className="mt-0.5 flex-shrink-0" style={{ color: '#C9971C' }} />
                  <p className="leading-relaxed">
                    Near Solar Plant, Ward No. 06,<br />
                    Chiran Chowk to Pakdihar Road,<br />
                    Chanpatia, Bihar – 845449
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <Phone size={16} className="flex-shrink-0" style={{ color: '#C9971C' }} />
                  <a href="tel:8789429097" className="footer-link" style={{ color: '#94a3b8' }}>
                    +91 87894 29097
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Mail size={16} className="flex-shrink-0" style={{ color: '#C9971C' }} />
                  <a href="mailto:info@gmenglishschool.com" className="footer-link" style={{ color: '#94a3b8' }}>
                    schoolgmenglish@gmail.com
                  </a>
                </div>
              </div>

              {/* SOCIAL ICONS */}
              <div className="mt-6">
                <p className="mb-3 text-xs font-semibold uppercase tracking-wider" style={{ color: '#64748b' }}>
                  Follow Us
                </p>
                <div className="flex gap-2 flex-wrap">
                  {socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      aria-label={s.label}
                      className="social-btn"
                      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = s.hoverBg; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.07)'; }}
                    >
                      {s.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* QUICK LINKS */}
            <div>
              <h3
                className="mb-5 text-sm font-bold uppercase tracking-widest"
                style={{ color: '#C9971C', letterSpacing: '0.12em' }}
              >
                Quick Links
              </h3>
              <ul className="space-y-2.5">
                {quickLinks.map((link) => (
                  <li key={link.label} className="flex items-center gap-2">
                    <span style={{ color: '#C9971C', fontSize: 10 }}>▸</span>
                    <Link
                      to={link.path}
                      className="footer-link text-sm"
                      style={{ color: '#94a3b8' }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* IMPORTANT LINKS */}
            <div>
              <h3
                className="mb-5 text-sm font-bold uppercase tracking-widest"
                style={{ color: '#C9971C', letterSpacing: '0.12em' }}
              >
                Important Links
              </h3>
              <ul className="space-y-2.5">
                {importantLinks.map((link) => (
                  <li key={link.label} className="flex items-center gap-2">
                    <ExternalLink size={11} style={{ color: '#C9971C', flexShrink: 0 }} />
                    <a
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="footer-link text-sm"
                      style={{ color: '#94a3b8' }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* MAP */}
          <div
            className="mt-12 overflow-hidden rounded-2xl"
            style={{ border: '1px solid rgba(201,151,28,0.25)', boxShadow: '0 0 0 1px rgba(255,255,255,0.04)' }}
          >
            <iframe
              title="G.M English School Location"
              src="https://www.google.com/maps?q=26.9506533,84.5429507&z=17&t=k&output=embed"
              width="100%"
              height="300"
              loading="lazy"
              allowFullScreen
              style={{ display: 'block' }}
            />
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="footer-divider" />
        <div style={{ background: '#080F22' }}>
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-4 text-center text-xs md:flex-row" style={{ color: '#475569' }}>
            <p>
              © {new Date().getFullYear()} G. M. English School, Chanaptia. All Rights Reserved.
            </p>
            <p>
              Designed & Developed with <span style={{ color: '#B91C1C' }}>♥</span> for Quality Education
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

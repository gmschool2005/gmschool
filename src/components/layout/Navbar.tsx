import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, Phone, Mail, Clock } from "lucide-react";

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState("");
    const [mobileDropdown, setMobileDropdown] = useState("");

    const [scrolled, setScrolled] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Close dropdown on outside click
    useEffect(() => {
        const handler = (e: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setOpenDropdown("");
            }
        };
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, []);

    const menuItems = [
        {
            title: "About Us",
            items: [
                { name: "Principal's Message", path: "/about/principal-message" },
                { name: "Mission & Vision", path: "/about/mission-vision" },
                { name: "Our Team", path: "/about/our-team" },
                { name: "Mandatory Information", path: "/about/mandatory-information" },
            ],
        },
        {
            title: "Academics",
            items: [
                { name: "School Timing", path: "/academics/school-timing" },
                { name: "Primary", path: "/academics/primary" },
                { name: "Middle School", path: "/academics/middle-school" },
                { name: "Curriculum", path: "/academics/curriculum" },
                { name: "Activities", path: "/academics/activities" },
            ],
        },
        {
            title: "Admission",
            items: [
                { name: "Admission Process", path: "/admission/process" },
                { name: "Fee Structure", path: "/admission/fee-structure" },
                { name: "Apply Online", path: "/admission/apply-online" },
            ],
        },
        {
            title: "Achievements",
            items: [
                { name: "CBSE Class-X", path: "/achievements/cbse-class-x" },
                { name: "Awards", path: "/achievements/awards" },
                { name: "Alumni", path: "/achievements/alumni" },
            ],
        },
        {
            title: "Gallery",
            items: [
                { name: "Sports Day", path: "/gallery/sports-day" },
                { name: "Annual Function", path: "/gallery/annual-function" },
            ],
        },
    ];

    return (
        <>
            <style>{`
                .nav-dropdown-item {
                    position: relative;
                    transition: all 0.2s ease;
                }
                .nav-dropdown-item::before {
                    content: '';
                    position: absolute;
                    left: 0;
                    top: 50%;
                    transform: translateY(-50%);
                    width: 3px;
                    height: 0;
                    background: #C9971C;
                    border-radius: 2px;
                    transition: height 0.2s ease;
                }
                .nav-dropdown-item:hover::before {
                    height: 60%;
                }
                .mobile-menu-enter {
                    animation: slideDown 0.25s ease-out forwards;
                }
                @keyframes slideDown {
                    from { opacity: 0; transform: translateY(-8px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .top-bar-scroll {
                    overflow: hidden;
                }
            `}</style>

            {/* TOP INFO BAR */}
            <div className="top-bar-scroll" style={{ background: '#1B2E6B' }}>
                <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-2">
                    <div className="flex items-center gap-6 text-xs text-blue-100">
                        <span className="flex items-center gap-1.5">
                            <Clock size={12} className="text-yellow-400" />
                            Mon–Sat: 7:30 AM – 2:30 PM
                        </span>
                        <span className="hidden sm:flex items-center gap-1.5">
                            <Phone size={12} className="text-yellow-400" />
                            +91 87894 29097
                        </span>
                        <span className="hidden md:flex items-center gap-1.5">
                            <Mail size={12} className="text-yellow-400" />
                            schoolgmenglish@gmail.com
                        </span>
                    </div>


                </div>
            </div>

            {/* MAIN NAVBAR */}
            <header
                className="sticky top-0 z-50 transition-all duration-300"
                style={{
                    background: '#ffffff',
                    borderBottom: scrolled ? '3px solid #C9971C' : '3px solid #e2e8f0',
                    boxShadow: scrolled ? '0 4px 24px rgba(27,46,107,0.10)' : 'none',
                }}
            >
                <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3">

                    {/* LOGO */}
                    <Link to="/" className="flex items-center gap-3 group">
                        <div
                            className="flex-shrink-0 transition-transform duration-300 group-hover:scale-105"
                            style={{
                                width: 80,
                                height: 80,
                            }}
                        >
                            <img
                                src="/images/logo.jpeg"
                                alt="G.M. English School Logo"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'contain',
                                }}
                                onError={(e) => {
                                    (e.target as HTMLImageElement).style.display = 'none';
                                }}
                            />
                        </div>

                        <div>
                            <h1
                                className="text-2xl font-extrabold leading-tight tracking-wide"
                                style={{ color: '#B91C1C', fontFamily: 'Georgia, serif' }}
                            >
                                G. M. English School
                            </h1>
                            <p
                                className="text-xs font-semibold tracking-widest uppercase"
                                style={{ color: '#C9971C', letterSpacing: '0.12em' }}
                            >
                                Strive for Excellence • Chanaptia
                            </p>
                        </div>
                    </Link>

                    {/* DESKTOP MENU */}
                    <div ref={dropdownRef} className="hidden items-center gap-1 lg:flex">
                        <Link
                            to="/"
                            className="rounded-lg px-4 py-2 text-sm font-semibold transition-all duration-200 hover:bg-blue-50"
                            style={{ color: '#1B2E6B' }}
                        >
                            Home
                        </Link>

                        {menuItems.map((menu) => (
                            <div
                                key={menu.title}
                                className="relative"
                                onMouseEnter={() => setOpenDropdown(menu.title)}
                                onMouseLeave={() => setOpenDropdown("")}
                            >
                                <button
                                    className="flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-semibold transition-all duration-200 hover:bg-blue-50"
                                    style={{ color: openDropdown === menu.title ? '#C9971C' : '#1B2E6B' }}
                                >
                                    {menu.title}
                                    <ChevronDown
                                        size={14}
                                        className="transition-transform duration-200"
                                        style={{ transform: openDropdown === menu.title ? 'rotate(180deg)' : 'rotate(0deg)' }}
                                    />
                                </button>

                                {openDropdown === menu.title && (
                                    <div
                                        className="absolute left-0 top-full mt-1 w-60 rounded-xl py-2"
                                        style={{
                                            background: '#fff',
                                            border: '1px solid #e2e8f0',
                                            boxShadow: '0 16px 48px rgba(27,46,107,0.15)',
                                            animation: 'slideDown 0.18s ease-out forwards',
                                            borderTop: '3px solid #C9971C',
                                        }}
                                    >
                                        {menu.items.map((item) => (
                                            <Link
                                                key={item.path}
                                                to={item.path}
                                                className="nav-dropdown-item block px-5 py-2.5 text-sm transition-all duration-200 hover:bg-amber-50 pl-5"
                                                style={{ color: '#1B2E6B' }}
                                                onClick={() => setOpenDropdown("")}
                                            >
                                                {item.name}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}



                        <Link
                            to="/contact"
                            className="ml-3 rounded-lg px-5 py-2 text-sm font-bold transition-all duration-200 hover:brightness-110 hover:shadow-lg"
                            style={{
                                background: 'linear-gradient(135deg, #B91C1C, #991B1B)',
                                color: '#fff',
                                boxShadow: '0 2px 8px rgba(185,28,28,0.3)',
                            }}
                        >
                            Contact Us
                        </Link>
                    </div>

                    {/* MOBILE HAMBURGER */}
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="flex items-center justify-center rounded-lg p-2 transition-colors lg:hidden"
                        style={{ color: '#1B2E6B', background: mobileOpen ? '#EFF6FF' : 'transparent' }}
                        aria-label="Toggle menu"
                    >
                        {mobileOpen ? <X size={26} /> : <Menu size={26} />}
                    </button>
                </nav>

                {/* MOBILE MENU */}
                {mobileOpen && (
                    <div
                        className="mobile-menu-enter border-t lg:hidden"
                        style={{ borderColor: '#C9971C', background: '#fff' }}
                    >
                        <div className="px-5 py-4 space-y-1">
                            <Link
                                to="/"
                                className="block rounded-lg px-4 py-3 text-sm font-semibold transition-colors hover:bg-blue-50"
                                style={{ color: '#1B2E6B' }}
                                onClick={() => setMobileOpen(false)}
                            >
                                Home
                            </Link>

                            {menuItems.map((menu) => (
                                <div key={menu.title}>
                                    <button
                                        className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-sm font-semibold transition-colors hover:bg-blue-50"
                                        style={{ color: mobileDropdown === menu.title ? '#C9971C' : '#1B2E6B' }}
                                        onClick={() =>
                                            setMobileDropdown(mobileDropdown === menu.title ? "" : menu.title)
                                        }
                                    >
                                        {menu.title}
                                        <ChevronDown
                                            size={16}
                                            className="transition-transform duration-200"
                                            style={{ transform: mobileDropdown === menu.title ? 'rotate(180deg)' : 'rotate(0deg)' }}
                                        />
                                    </button>

                                    {mobileDropdown === menu.title && (
                                        <div
                                            className="ml-4 mb-1 rounded-lg overflow-hidden"
                                            style={{ borderLeft: '3px solid #C9971C', background: '#FAFBFF' }}
                                        >
                                            {menu.items.map((item) => (
                                                <Link
                                                    key={item.path}
                                                    to={item.path}
                                                    className="block px-4 py-2.5 text-sm transition-colors hover:bg-amber-50"
                                                    style={{ color: '#374151' }}
                                                    onClick={() => {
                                                        setTimeout(() => {
                                                            setMobileOpen(false);
                                                            setMobileDropdown("");
                                                        }, 200);
                                                    }}
                                                >
                                                    {item.name}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}



                            <div className="pt-2">
                                <Link
                                    to="/contact"
                                    className="block rounded-lg px-4 py-3 text-center text-sm font-bold transition-all hover:brightness-110"
                                    style={{ background: 'linear-gradient(135deg, #B91C1C, #991B1B)', color: '#fff' }}
                                    onClick={() => setMobileOpen(false)}
                                >
                                    Contact Us
                                </Link>
                            </div>

                            <div className="mt-6 flex justify-center border-t pt-5">
                                <img
                                    src="/images/logo.jpeg"
                                    alt="G.M. English School Logo"
                                    className="h-24 w-auto object-contain opacity-90"
                                />
                            </div>
                        </div>

                    </div>

                )}


            </header>
        </>
    );
}

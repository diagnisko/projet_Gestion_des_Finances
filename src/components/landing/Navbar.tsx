import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0b1120]/90 backdrop-blur-xl border-b border-white/5 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-linear-to-br from-[#3b82f6] to-[#2563eb] flex items-center justify-center shadow-lg shadow-[#3b82f6]/20">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 12L6 8L9 10L13 5" stroke="#0b1120" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="13" cy="5" r="1.5" fill="#0b1120"/>
            </svg>
          </div>
          <span className="font-display font-800 text-[1.15rem] tracking-tight text-white">
            Finance<span className="text-[#3b82f6]">Flow</span>
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {[
            { label: "Fonctionnalités", href: "#features" },
            { label: "Comment ça marche", href: "#how" },
            { label: "Témoignages", href: "#testimonials" },
          ].map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-sm text-[#8899bb] hover:text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/login"
            className="text-sm text-[#8899bb] hover:text-white transition-colors duration-200 px-4 py-2"
          >
            Connexion
          </Link>
          <Link
            to="/register"
            className="text-sm font-medium bg-[#c2410c] text-white px-5 py-2.5 rounded-lg hover:bg-[#9a3412] transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
          >
            Commencer gratuitement
          </Link>
        </div>

        {/* Mobile burger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span className={`block w-5 h-0.5 bg-white transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-5 h-0.5 bg-white transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-0.5 bg-white transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#111827] border-t border-white/5 px-6 py-4 flex flex-col gap-4">
          {[
            { label: "Fonctionnalités", href: "#features" },
            { label: "Comment ça marche", href: "#how" },
            { label: "Témoignages", href: "#testimonials" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-[#8899bb] hover:text-white transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="border-t border-white/5 pt-4 flex flex-col gap-3">
            <Link to="/login" className="text-sm text-center text-[#8899bb] hover:text-white transition-colors">
              Connexion
            </Link>
            <Link
              to="/register"
              className="text-sm font-medium text-center bg-[#c2410c] text-white px-5 py-2.5 rounded-lg"
            >
              Commencer gratuitement
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
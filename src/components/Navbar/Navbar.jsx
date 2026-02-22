import { useState, useEffect } from "react";
import "./Navbar.css";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

const navLinks = [
  { label: "about", href: "#about" },
  { label: "projects", href: "#projects" },
  { label: "certifications", href: "#certifications" },
  { label: "devlog", href: "#devlog" },
  { label: "notes", href: "#notes" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      setScrolled(current > 100);
      setHidden(current > lastScroll && current > 100);
      setLastScroll(current);

      // Active section detection
      const sections = navLinks.map((l) => l.label);
      for (const section of [...sections].reverse()) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(section);
          return;
        }
      }
      setActiveSection("");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <nav
      className={`navbar ${scrolled ? "navbar--scrolled" : ""} ${hidden ? "navbar--hidden" : ""}`}
    >
      <div className="navbar__inner">
        <a href="#" className="navbar__logo">
          SE<span className="text-accent">.</span>
        </a>

        <ul className="navbar__links">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className={
                  activeSection === link.label ? "navbar__link--active" : ""
                }
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#contact" className="navbar__cta">
              contact
            </a>
          </li>
        </ul>

        <div className="navbar__right">
          <ThemeToggle />
          <button
            className="navbar__burger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`burger-line ${menuOpen ? "open" : ""}`} />
            <span className={`burger-line ${menuOpen ? "open" : ""}`} />
            <span className={`burger-line ${menuOpen ? "open" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`navbar__mobile ${menuOpen ? "navbar__mobile--open" : ""}`}
      >
        <ul className="navbar__mobile-links">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={
                  activeSection === link.label ? "navbar__link--active" : ""
                }
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="navbar__mobile-cta"
            >
              contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

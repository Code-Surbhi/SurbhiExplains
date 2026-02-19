import { useState, useEffect } from "react";
import "./Navbar.css";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      setScrolled(current > 100);
      if (current > lastScroll && current > 100) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      setLastScroll(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <nav
      className={`navbar ${scrolled ? "navbar--scrolled" : ""} ${hidden ? "navbar--hidden" : ""}`}
    >
      <div className="navbar__inner">
        {/* Logo */}
        <a href="#" className="navbar__logo">
          SE<span className="text-accent">.</span>
        </a>

        {/* Desktop Links */}
        <ul className="navbar__links">
          <li>
            <a href="#about">about</a>
          </li>
          <li>
            <a href="#projects">projects</a>
          </li>
          <li>
            <a href="#certifications">certifications</a>
          </li>
          <li>
            <a href="#notes">notes</a>
          </li>
          <li>
            <a href="#devlog">devlog</a>
          </li>
          <li>
            <a href="#contact" className="navbar__cta">
              contact
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
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

      {/* Mobile Dropdown */}
      <div
        className={`navbar__mobile ${menuOpen ? "navbar__mobile--open" : ""}`}
      >
        <ul className="navbar__mobile-links">
          <li>
            <a href="#about" onClick={() => setMenuOpen(false)}>
              about
            </a>
          </li>
          <li>
            <a href="#projects" onClick={() => setMenuOpen(false)}>
              projects
            </a>
          </li>
          <li>
            <a href="#certifications" onClick={() => setMenuOpen(false)}>
              certifications
            </a>
          </li>
          <li>
            <a href="#devlog" onClick={() => setMenuOpen(false)}>
              devlog
            </a>
          </li>
          <li>
            <a href="#notes" onClick={() => setMenuOpen(false)}>
              notes
            </a>
          </li>
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

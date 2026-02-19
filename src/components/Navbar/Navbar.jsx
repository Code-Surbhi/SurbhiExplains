import { useState, useEffect } from "react";
import "./Navbar.css";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;

      // Add background after 100px
      setScrolled(current > 100);

      // Hide on scroll down, show on scroll up
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

        {/* Links */}
        <ul className="navbar__links">
          <li>
            <a href="#about">about</a>
          </li>
          <li>
            <a href="#projects">projects</a>
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
      </div>
    </nav>
  );
}

export default Navbar;

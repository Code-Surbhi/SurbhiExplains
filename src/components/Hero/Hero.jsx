import { useState, useEffect } from "react";
import "./Hero.css";

const TAGLINE =
  "I build cloud infrastructure, document everything, and make the complex feel approachable.";
const TYPING_SPEED = 28; // ms per character — slower = more elegant
const START_DELAY = 800; // ms before typing begins

function Hero() {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    // Delay before starting
    const startTimer = setTimeout(() => {
      setStarted(true);
    }, START_DELAY);
    return () => clearTimeout(startTimer);
  }, []);

  useEffect(() => {
    if (!started) return;
    if (displayed.length >= TAGLINE.length) return;

    const timer = setTimeout(() => {
      setDisplayed(TAGLINE.slice(0, displayed.length + 1));
    }, TYPING_SPEED);

    return () => clearTimeout(timer);
  }, [started, displayed]);

  return (
    <section className="hero">
      <div className="hero__inner">
        {/* Left Column */}
        <div className="hero__content">
          <p className="label hero__label">
            Cloud Engineer · AWS Certified · Building in Public
          </p>

          <h1 className="hero__name">
            Surbhi
            <br />
            <span className="hero__name--accent">Explains.</span>
          </h1>

          <p className="hero__tagline">
            {displayed}
            {displayed.length < TAGLINE.length && (
              <span className="hero__cursor">|</span>
            )}
          </p>

          <div
            className={`hero__actions ${displayed.length === TAGLINE.length ? "hero__actions--visible" : ""}`}
          >
            <a href="#projects" className="btn btn--primary">
              View My Work
            </a>
            <a href="#devlog" className="btn btn--ghost">
              Read the Devlog →
            </a>
            <a
              href="/resume/surbhi-singh-resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="btn btn--resume"
            >
              Resume ↓
            </a>
          </div>
        </div>

        {/* Right Column — Dot Grid */}
        <div className="hero__visual" aria-hidden="true">
          <div className="dot-grid" />
          <div className="hero__badge">
            <span className="font-mono">Currently building</span>
            <span className="hero__badge-title">surbhiexplains.com</span>
          </div>
        </div>
      </div>

      {/* Bottom Rule */}
      <div className="hero__rule" />
    </section>
  );
}

export default Hero;

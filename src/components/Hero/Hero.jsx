import "./Hero.css";

function Hero() {
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
            I build cloud infrastructure, document everything, and make the
            complex feel approachable.
          </p>

          <div className="hero__actions">
            <a href="#projects" className="btn btn--primary">
              View My Work
            </a>
            <a href="#devlog" className="btn btn--ghost">
              Read the Devlog →
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

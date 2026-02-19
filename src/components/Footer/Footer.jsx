import "./Footer.css";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__left">
          <span className="footer__logo font-mono">
            SE<span className="text-accent">.</span>
          </span>
          <p className="footer__tagline">
            Surbhi Explains — Cloud Engineering & Building in Public
          </p>
        </div>

        <div className="footer__right">
          <div className="footer__links">
            <a
              href="https://github.com/Code-Surbhi"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://www.youtube.com/@SurbhiExplains"
              target="_blank"
              rel="noreferrer"
            >
              YouTube
            </a>
            <a
              href="https://www.linkedin.com/in/surbhi-singh-472596281"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://substack.com/@surbhiexplains"
              target="_blank"
              rel="noreferrer"
            >
              Substack
            </a>
            <a
              href="https://x.com/surbhiexplains"
              target="_blank"
              rel="noreferrer"
            >
              X
            </a>
            <a
              href="https://leetcode.com/u/surbhi_code/"
              target="_blank"
              rel="noreferrer"
            >
              LeetCode
            </a>
          </div>
          <p className="footer__copy">
            © {year} Surbhi Singh. Designed & built by me.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

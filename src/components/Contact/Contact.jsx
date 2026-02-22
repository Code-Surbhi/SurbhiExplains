import { useState } from "react";
import "./Contact.css";
import useScrollReveal from "../../hooks/useScrollReveal";

const socials = [
  {
    platform: "GitHub",
    handle: "@Code-Surbhi",
    url: "https://github.com/Code-Surbhi",
    description: "Code, projects, commits",
  },
  {
    platform: "YouTube",
    handle: "@SurbhiExplains",
    url: "https://www.youtube.com/@SurbhiExplains",
    description: "Devlogs & tutorials",
  },
  {
    platform: "LinkedIn",
    handle: "surbhi-singh",
    url: "https://www.linkedin.com/in/surbhi-singh-472596281",
    description: "Professional network",
  },
  {
    platform: "Substack",
    handle: "@surbhiexplains",
    url: "https://substack.com/@surbhiexplains",
    description: "Notes & writing",
  },
  {
    platform: "X / Twitter",
    handle: "@surbhiexplains",
    url: "https://x.com/surbhiexplains",
    description: "Thoughts in public",
  },
  {
    platform: "LeetCode",
    handle: "@surbhi_code",
    url: "https://leetcode.com/u/surbhi_code/",
    description: "Problem solving",
  },
];

const EMAIL = "code.surbhi1712@gmail.com";

function Contact() {
  const [ref, isVisible] = useScrollReveal();
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      className={`contact reveal ${isVisible ? "visible" : ""}`}
      id="contact"
      ref={ref}
    >
      <div className="contact__inner">
        <div className="contact__header">
          <p className="label">Get in Touch</p>
          <h2 className="contact__title">
            Let's connect and
            <br />
            <span
              className="text-accent font-display"
              style={{ fontStyle: "italic" }}
            >
              build something.
            </span>
          </h2>
        </div>

        <div className="contact__email-block">
          <p className="contact__email-label font-mono">Reach me directly</p>
          <div className="contact__email-row">
            <a href={`mailto:${EMAIL}`} className="contact__email">
              {EMAIL}
            </a>
            <button
              className={`contact__copy-btn ${copied ? "contact__copy-btn--copied" : ""}`}
              onClick={handleCopy}
              aria-label="Copy email address"
              title="Copy email"
            >
              {copied ? "✓ copied" : "copy"}
            </button>
          </div>
          <p className="contact__availability">
            Open to cloud engineering internships, collaborations, and
            conversations about tech.
          </p>
        </div>

        <div className="contact__socials">
          <p className="label contact__socials-label">Find me on</p>
          <div className="contact__socials-grid">
            {socials.map((social) => (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className="social-card"
              >
                <div className="social-card__top">
                  <span className="social-card__platform">
                    {social.platform}
                  </span>
                  <span className="social-card__arrow">→</span>
                </div>
                <span className="social-card__handle">{social.handle}</span>
                <span className="social-card__description">
                  {social.description}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

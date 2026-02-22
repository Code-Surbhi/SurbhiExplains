import { useState } from "react";
import "./Devlog.css";
import useScrollReveal from "../../hooks/useScrollReveal";

const entries = [
  {
    id: "001",
    featured: true,
    date: "Feb 2026",
    tag: "The Making of surbhiexplains.com",
    title: "From Idea to URL — Building SurbhiExplains",
    excerpt:
      "From my first messy sketch to a live domain, I’m sharing the real story of how I brought this space to life. I’m navigating the late-night breakthroughs and the 'why isn't this working?' lows of modern web development in real-time. No fluff, no filters just my authentic journey from behind the screen as I learn, build, and grow.",
    // readTime: "5 min read",
    link: null,
  },
  {
    id: "002",
    featured: false,
    date: "Feb 2026",
    tag: "AWS",
    title: "I deployed my first AWS project : CloudCost",
    excerpt:
      "CloudCost Sentinel is a full-stack, event-driven monitoring system designed to prevent accidental AWS credit exhaustion for students and startups. The project integrates AWS Cost Explorer with a React frontend to provide real-time cost intelligence, proactive forecasting, and SNS-based alerts.",
    // readTime: "4 min read",
    link: null,
  },
  // {
  //   id: "003",
  //   featured: false,
  //   date: "Feb 2026",
  //   tag: "AWS",
  //   title: "Deploying to AWS S3 + CloudFront for the first time",
  //   excerpt:
  //     "Free tier, custom domain, SSL certificate. A step-by-step account of everything that confused me and the exact commands that worked.",
  //   // readTime: "7 min read",
  //   link: null,
  // },
];

// Dynamically build tags from entries
const allTags = ["All", ...new Set(entries.map((e) => e.tag))];

function DevlogCard({ entry }) {
  return (
    <article
      className={`devlog-card ${entry.featured ? "devlog-card--featured" : ""}`}
    >
      <div className="devlog-card__meta">
        <span className="label">{entry.tag}</span>
        <span className="devlog-card__date">{entry.date}</span>
      </div>

      <div className="devlog-card__number">{entry.id}</div>
      <h3 className="devlog-card__title">{entry.title}</h3>
      <p className="devlog-card__excerpt">{entry.excerpt}</p>

      <div className="devlog-card__footer">
        <span className="devlog-card__readtime">{entry.readTime}</span>
        {entry.link ? (
          <a href={entry.link} className="devlog-card__link">
            Read entry →
          </a>
        ) : (
          <span className="devlog-card__soon">Coming soon</span>
        )}
      </div>
    </article>
  );
}

function Devlog() {
  const [ref, isVisible] = useScrollReveal();
  const [activeTag, setActiveTag] = useState("All");

  const filtered =
    activeTag === "All" ? entries : entries.filter((e) => e.tag === activeTag);

  // Only show featured card when viewing All
  const featured =
    activeTag === "All" ? filtered.find((e) => e.featured) : null;
  const rest =
    activeTag === "All" ? filtered.filter((e) => !e.featured) : filtered;

  return (
    <section
      className={`devlog reveal ${isVisible ? "visible" : ""}`}
      id="devlog"
      ref={ref}
    >
      <div className="devlog__inner">
        <div className="devlog__header">
          <p className="label">Building in Public</p>
          <div className="devlog__header-row">
            <h2 className="devlog__title">Devlog</h2>
            <p className="devlog__description">
              Raw, honest entries about what I'm building, what broke, and what
              I learned.
            </p>
          </div>
        </div>

        {/* Category Filter Buttons */}
        <div className="devlog__filters">
          {allTags.map((tag) => (
            <button
              key={tag}
              className={`devlog__filter-btn ${activeTag === tag ? "devlog__filter-btn--active" : ""}`}
              onClick={() => setActiveTag(tag)}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Featured Entry — only when All is selected */}
        {featured && <DevlogCard entry={featured} />}

        {/* Remaining Entries */}
        {rest.length > 0 ? (
          <div className="devlog__grid">
            {rest.map((entry) => (
              <DevlogCard key={entry.id} entry={entry} />
            ))}
          </div>
        ) : (
          <p className="devlog__empty font-mono">
            ◌ No entries in this category yet — coming soon.
          </p>
        )}

        <div className="devlog__cta">
          <p
            className="font-mono"
            style={{
              fontSize: "var(--text-small)",
              color: "var(--text-disabled)",
            }}
          >
            More entries coming as I build →
          </p>
        </div>
      </div>
    </section>
  );
}

export default Devlog;

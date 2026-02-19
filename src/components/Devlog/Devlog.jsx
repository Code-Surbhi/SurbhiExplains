import "./Devlog.css";

const entries = [
  {
    id: "001",
    featured: true,
    date: "Feb 2026",
    tag: "Design & Engineering",
    title: "Building my design system before writing a single component",
    excerpt:
      "Most people jump straight into code. I spent an entire session defining colors, typography, and spacing tokens before touching a single JSX file — and it changed everything about how the site feels.",
    readTime: "5 min read",
    link: null,
  },
  {
    id: "002",
    featured: false,
    date: "Feb 2026",
    tag: "React",
    title: "What I learned building my first real React component",
    excerpt:
      "The Hero section taught me more about layout thinking than any tutorial ever did. Here's exactly what broke and how I fixed it.",
    readTime: "4 min read",
    link: null,
  },
  {
    id: "003",
    featured: false,
    date: "Feb 2026",
    tag: "AWS",
    title: "Deploying to AWS S3 + CloudFront for the first time",
    excerpt:
      "Free tier, custom domain, SSL certificate. A step-by-step account of everything that confused me and the exact commands that worked.",
    readTime: "7 min read",
    link: null,
  },
];

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
  const featured = entries.find((e) => e.featured);
  const rest = entries.filter((e) => !e.featured);

  return (
    <section className="devlog" id="devlog">
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

        {/* Featured Entry */}
        <DevlogCard entry={featured} />

        {/* Remaining Entries */}
        <div className="devlog__grid">
          {rest.map((entry) => (
            <DevlogCard key={entry.id} entry={entry} />
          ))}
        </div>

        {/* Bottom CTA */}
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

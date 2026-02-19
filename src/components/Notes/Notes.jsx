import "./Notes.css";

const notes = [
  {
    id: "001",
    status: "coming-soon",
    category: "AWS",
    title: "IAM — Identity & Access Management, Explained Simply",
    description:
      "Users, roles, policies, and permissions. Everything I wish someone had explained to me in plain English before I touched the AWS console.",
    pdf: "/notes/Surbhi_Resume (1).pdf",
  },
  {
    id: "002",
    status: "coming-soon",
    category: "Cloud Concepts",
    title: "The Difference Between Regions, AZs, and Edge Locations",
    description:
      "A visual breakdown of AWS global infrastructure — why it matters for real architecture decisions.",
    pdf: null,
  },
  {
    id: "003",
    status: "coming-soon",
    category: "DevOps",
    title: "What a CI/CD Pipeline Actually Does — Step by Step",
    description:
      "From git push to production. How automated pipelines work and why every engineer needs to understand them.",
    pdf: null,
  },
  {
    id: "004",
    status: "coming-soon",
    category: "React",
    title: "useState vs useEffect — When to Use Which",
    description:
      "The two hooks I use most. A practical, no-fluff guide based on what I actually ran into while building this site.",
    pdf: null,
  },
];

function NoteCard({ note }) {
  return (
    <article className="note-card">
      <div className="note-card__header">
        <span className="label">{note.category}</span>
        <span className="note-card__id font-mono">{note.id}</span>
      </div>
      <h3 className="note-card__title">{note.title}</h3>
      <p className="note-card__description">{note.description}</p>
      <div className="note-card__footer">
        {note.pdf ? (
          <a
            href={note.pdf}
            target="_blank"
            rel="noreferrer"
            className="note-card__link"
          >
            Read Notes → PDF
          </a>
        ) : (
          <span className="note-card__status">◌ coming soon</span>
        )}
      </div>
    </article>
  );
}

function Notes() {
  return (
    <section className="notes" id="notes">
      <div className="notes__inner">
        <div className="notes__header">
          <p className="label">Knowledge Base</p>
          <div className="notes__header-row">
            <h2 className="notes__title">Notes</h2>
            <p className="notes__description">
              Things I've learned, simplified and written down. For me. For you.
              For anyone starting out.
            </p>
          </div>
        </div>

        <div className="notes__grid">
          {notes.map((note) => (
            <NoteCard key={note.id} note={note} />
          ))}
        </div>

        <div className="notes__substack">
          <p
            className="font-mono"
            style={{
              fontSize: "var(--text-small)",
              color: "var(--text-secondary)",
            }}
          >
            Full notes will also be published on
          </p>
          <a
            href="https://substack.com/@surbhiexplains"
            target="_blank"
            rel="noreferrer"
            className="notes__substack-link"
          >
            Substack → surbhiexplains
          </a>
        </div>
      </div>
    </section>
  );
}

export default Notes;

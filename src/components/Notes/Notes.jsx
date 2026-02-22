import { useState } from "react";
import "./Notes.css";
import useScrollReveal from "../../hooks/useScrollReveal";

const notes = [
  {
    id: "001",
    category: "Java",
    title: "My Java Notes — Everything I Wish I Knew Before Starting",
    description:
      "A comprehensive guide to Java fundamentals, OOP concepts, and practical tips based on my learning journey. Perfect for beginners looking to get started with Java.",
    pdf: null,
  },
  {
    id: "002",
    category: "AWS Labs Notes (coming soon)",
    title: "Your all in one guide to AWS Labs",
    description:
      "A comprehensive guide to AWS Labs, covering key concepts, architecture diagrams, and simplified explanations for each lab in the AWS Learning Path. Perfect for anyone looking to master AWS through hands-on practice.",
    pdf: null,
  },
  // {
  //   id: "003",
  //   category: "DevOps",
  //   title: "What a CI/CD Pipeline Actually Does — Step by Step",
  //   description:
  //     "From git push to production. How automated pipelines work and why every engineer needs to understand them.",
  //   pdf: null,
  // },
  // {
  //   id: "004",
  //   category: "Web Development",
  //   title: "useState vs useEffect — When to Use Which",
  //   description:
  //     "The two hooks I use most. A practical, no-fluff guide based on what I actually ran into while building this site.",
  //   pdf: null,
  // },
];

// Dynamically build category list from notes
const allCategories = ["All", ...new Set(notes.map((n) => n.category))];

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
  const [ref, isVisible] = useScrollReveal();
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? notes
      : notes.filter((n) => n.category === activeCategory);

  return (
    <section
      className={`notes reveal ${isVisible ? "visible" : ""}`}
      id="notes"
      ref={ref}
    >
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

        {/* Category Filter Buttons */}
        <div className="notes__filters">
          {allCategories.map((cat) => (
            <button
              key={cat}
              className={`notes__filter-btn ${activeCategory === cat ? "notes__filter-btn--active" : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Notes Grid */}
        <div className="notes__grid">
          {filtered.length > 0 ? (
            filtered.map((note) => <NoteCard key={note.id} note={note} />)
          ) : (
            <p className="notes__empty font-mono">
              ◌ No notes in this category yet — coming soon.
            </p>
          )}
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

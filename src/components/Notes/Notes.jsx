import { useState, useRef } from "react";
import "./Notes.css";
import useScrollReveal from "../../hooks/useScrollReveal";

// ─────────────────────────────────────────────
// DATA — Add your notes here
// For simple notes (no parts): set parts: null
// For multi-part notes: add chapters with parts
// Each part can have: pdf (string|null), youtube (string|null)
// ─────────────────────────────────────────────
const notes = [
  {
    id: "001",
    category: "AWS Labs",
    title: "Your All-in-One Guide to AWS Labs",
    description:
      "Broken into bite-sized parts by topic. Read at your own pace, watch the explanation, download what you need.",
    parts: [
      {
        chapter: "Chapter 1 — Development with AWS Services",
        items: [
          {
            num: "P01",
            title: "Access & Tour AWS Console",
            pdf: "notes/AWS_Labs/Domain 1 LAB DVA.pdf",
            youtube: null,
          },
          {
            num: "P02",
            title: "Introduction to Simple Storage Service",
            pdf: "",
            youtube: null,
          },
        ],
      },
    ],
    pdf: null,
    youtube: null,
  },
  {
    id: "002",
    category: "AWS Theory",
    title: "AWS Theory Notes - Core Concepts Explained Simply",
    description:
      "A collection of concise notes covering the fundamental concepts of AWS services.",
    parts: null,
    pdf: null,
    youtube: null,
  },
  {
    id: "003",
    category: "System Design",
    title: "System Design Notes : Simplified Concepts.",
    description:
      "A beginner-friendly collection of notes covering essential system design concepts and patterns",
    parts: [
      {
        chapter: "Chapter 1 — AWS Services",
        items: [
          {
            num: "P01",
            title: "S3 Durability Explained",
            pdf: "notes/System_Design/01_SD_s3_durability.pdf",
            youtube: null,
          },
          {
            num: "P02",
            title: "Lambda Explained",
            pdf: "",
            youtube: null,
          },
        ],
      },
    ],
    pdf: null,
    youtube: null,
  },
  {
    id: "004",
    category: "Java",
    title: "My Java Notes : Everything I Wish I Knew Before Starting",
    description:
      "A comprehensive guide to Java fundamentals, OOP concepts, and practical tips based on my learning journey. Perfect for beginners looking to get started with Java.",
    parts: [
      {
        chapter: "Chapter 1 — Core Java",
        items: [
          {
            num: "P01",
            title: "Java Explained",
            pdf: "notes/Java/Java.pdf",
            youtube: null,
          },
          // {
          //   num: "P02",
          //   title: "Multithreading Explained",
          //   pdf: "",
          //   youtube: null,
          // },
          // {
          //   num: "P03",
          //   title: "",
          //   pdf: "",
          //   youtube: null,
          // },
        ],
      },
    ],
    pdf: null,
    youtube: null,
  },
  // ── Example of a note WITH chapters — uncomment and fill in when ready ──
  // {
  //   id: "003",
  //   category: "AWS Labs Notes",
  //   title: "Your All-in-One Guide to AWS Labs",
  //   description: "Broken into bite-sized parts by topic.",
  //   parts: [
  //     {
  //       chapter: "Chapter 1 — Core Services",
  //       items: [
  //         { num: "P01", title: "IAM & S3 — Identity and Storage", pdf: "/notes/aws-p01.pdf", youtube: "https://youtu.be/YOUR_VIDEO_ID" },
  //         { num: "P02", title: "EC2 — Virtual Machines on AWS",   pdf: "/notes/aws-p02.pdf", youtube: null },
  //         { num: "P03", title: "VPC — Networking & Subnets",      pdf: null,                  youtube: null },
  //       ],
  //     },
  //     {
  //       chapter: "Chapter 2 — Delivery & DNS",
  //       items: [
  //         { num: "P04", title: "CloudFront — Global CDN",    pdf: "/notes/aws-p04.pdf", youtube: "https://youtu.be/YOUR_VIDEO_ID" },
  //         { num: "P05", title: "Route 53 — DNS Routing",     pdf: null,                  youtube: null },
  //       ],
  //     },
  //   ],
  // },
];

// Dynamically build category list
const allCategories = ["All", ...new Set(notes.map((n) => n.category))];

// ─────────────────────────────────────────────
// PART ITEM
// ─────────────────────────────────────────────
function PartItem({ part }) {
  const hasPdf = !!part.pdf;
  const hasYt = !!part.youtube;
  const hasNeither = !hasPdf && !hasYt;

  return (
    <li className="part-item" data-title={part.title.toLowerCase()}>
      <div className="part-item__left">
        <span className="part-item__num font-mono">{part.num}</span>
        <span className="part-item__title">{part.title}</span>
      </div>
      <div className="part-item__actions">
        {hasPdf && (
          <a
            href={part.pdf}
            target="_blank"
            rel="noreferrer"
            className="part-btn part-btn--pdf"
          >
            PDF →
          </a>
        )}
        {hasYt && (
          <a
            href={part.youtube}
            target="_blank"
            rel="noreferrer"
            className="part-btn part-btn--yt"
          >
            ▶ Watch
          </a>
        )}
        {hasPdf && !hasYt && (
          <span className="part-btn part-btn--soon">◌ video soon</span>
        )}
        {hasNeither && (
          <span className="part-btn part-btn--soon">◌ coming soon</span>
        )}
      </div>
    </li>
  );
}

// ─────────────────────────────────────────────
// CHAPTER
// ─────────────────────────────────────────────
function Chapter({ chapter, defaultOpen }) {
  const [open, setOpen] = useState(defaultOpen || false);

  return (
    <div className={`chapter ${open ? "chapter--open" : ""}`}>
      <button className="chapter__header" onClick={() => setOpen(!open)}>
        <div className="chapter__header-left">
          <span className="chapter__arrow">▶</span>
          <span className="chapter__name font-mono">{chapter.chapter}</span>
        </div>
        <span className="chapter__count font-mono">
          {chapter.items.length} parts
        </span>
      </button>
      <ul className="chapter__list">
        {chapter.items.map((part) => (
          <PartItem key={part.num} part={part} />
        ))}
      </ul>
    </div>
  );
}

// ─────────────────────────────────────────────
// MULTI-PART DRAWER
// ─────────────────────────────────────────────
function PartsDrawer({ parts }) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);
  const totalParts = parts.reduce((acc, ch) => acc + ch.items.length, 0);

  const filtered = query.trim()
    ? parts
        .map((ch) => ({
          ...ch,
          items: ch.items.filter((p) =>
            p.title.toLowerCase().includes(query.toLowerCase()),
          ),
        }))
        .filter((ch) => ch.items.length > 0)
    : parts;

  const noResults = query.trim() && filtered.length === 0;

  return (
    <>
      <button
        className={`parts-toggle ${open ? "parts-toggle--open" : ""}`}
        onClick={() => {
          setOpen(!open);
          if (!open) setTimeout(() => inputRef.current?.focus(), 200);
        }}
      >
        <span className="parts-toggle__left">
          <span>View All Parts</span>
          <span className="parts-toggle__count font-mono">
            {totalParts} parts
          </span>
        </span>
        <span className="parts-toggle__arrow">▾</span>
      </button>

      <div className={`drawer ${open ? "drawer--open" : ""}`}>
        {/* Search */}
        <div className="drawer__search">
          <span className="drawer__search-icon">⌕</span>
          <input
            ref={inputRef}
            className="drawer__search-input font-mono"
            type="text"
            placeholder="Search parts..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          {query && (
            <button
              className="drawer__search-clear font-mono"
              onClick={() => setQuery("")}
            >
              ✕
            </button>
          )}
        </div>

        {/* Chapters */}
        {!noResults ? (
          filtered.map((chapter, i) => (
            <Chapter
              key={chapter.chapter}
              chapter={chapter}
              defaultOpen={i === 0}
            />
          ))
        ) : (
          <p className="drawer__no-results font-mono">
            ◌ No parts match "{query}"
          </p>
        )}
      </div>
    </>
  );
}

// ─────────────────────────────────────────────
// NOTE CARD
// ─────────────────────────────────────────────
function NoteCard({ note }) {
  const hasMultipleParts = note.parts && note.parts.length > 0;

  return (
    <article className="note-card">
      <div className="note-card__body">
        <div className="note-card__top">
          <span className="label">{note.category}</span>
          <span className="note-card__id font-mono">{note.id}</span>
        </div>
        <h3 className="note-card__title">{note.title}</h3>
        <p className="note-card__description">{note.description}</p>
      </div>

      {hasMultipleParts ? (
        <PartsDrawer parts={note.parts} />
      ) : (
        <div className="note-card__footer">
          {note.pdf ? (
            <div className="note-card__actions">
              <a
                href={note.pdf}
                target="_blank"
                rel="noreferrer"
                className="part-btn part-btn--pdf"
              >
                PDF →
              </a>
              {note.youtube && (
                <a
                  href={note.youtube}
                  target="_blank"
                  rel="noreferrer"
                  className="part-btn part-btn--yt"
                >
                  ▶ Watch
                </a>
              )}
            </div>
          ) : (
            <span className="note-card__status font-mono">◌ coming soon</span>
          )}
        </div>
      )}
    </article>
  );
}

// ─────────────────────────────────────────────
// NOTES SECTION
// ─────────────────────────────────────────────
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
            </p>
          </div>
        </div>

        {/* Category Filters */}
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

import { useState, useEffect, useRef } from "react";
import "./CommandPalette.css";

const commands = [
  { label: "Go to About", section: "about", description: "My story" },
  {
    label: "Go to Experience",
    section: "experience",
    description: "Where I've worked",
  },
  {
    label: "Go to Education",
    section: "education",
    description: "Chitkara University",
  },
  {
    label: "Go to Projects",
    section: "projects",
    description: "What I've built",
  },
  {
    label: "Go to Certifications",
    section: "certifications",
    description: "AWS credentials",
  },
  {
    label: "Go to Devlog",
    section: "devlog",
    description: "Building in public",
  },
  { label: "Go to Notes", section: "notes", description: "Study notes" },
  { label: "Go to Contact", section: "contact", description: "Get in touch" },
];

function CommandPalette({ isOpen, onClose }) {
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);
  const [selected, setSelected] = useState(0);

  const filtered = commands.filter(
    (c) =>
      c.label.toLowerCase().includes(query.toLowerCase()) ||
      c.description.toLowerCase().includes(query.toLowerCase()),
  );

  useEffect(() => {
    if (isOpen) {
      setQuery("");
      setSelected(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  useEffect(() => {
    setSelected(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  const handleSelect = (command) => {
    const el = document.getElementById(command.section);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    onClose();
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelected((prev) => Math.min(prev + 1, filtered.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelected((prev) => Math.max(prev - 1, 0));
    } else if (e.key === "Enter") {
      if (filtered[selected]) handleSelect(filtered[selected]);
    } else if (e.key === "Escape") {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="palette-overlay" onClick={onClose}>
      <div
        className="palette"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={handleKeyDown}
      >
        {/* Search input */}
        <div className="palette__search">
          <span className="palette__search-icon font-mono">⌘</span>
          <input
            ref={inputRef}
            className="palette__input font-mono"
            placeholder="Type a section name..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <span className="palette__esc font-mono" onClick={onClose}>
            esc
          </span>
        </div>

        {/* Divider */}
        <div className="palette__divider" />

        {/* Results */}
        <ul className="palette__list">
          {filtered.length > 0 ? (
            filtered.map((cmd, i) => (
              <li
                key={cmd.section}
                className={`palette__item ${selected === i ? "palette__item--selected" : ""}`}
                onClick={() => handleSelect(cmd)}
                onMouseEnter={() => setSelected(i)}
              >
                <span className="palette__item-label">{cmd.label}</span>
                <span className="palette__item-desc font-mono">
                  {cmd.description}
                </span>
              </li>
            ))
          ) : (
            <li className="palette__empty font-mono">
              No results for "{query}"
            </li>
          )}
        </ul>

        {/* Footer hint */}
        <div className="palette__footer">
          <span className="font-mono">↑↓ navigate</span>
          <span className="font-mono">↵ select</span>
          <span className="font-mono">esc close</span>
        </div>
      </div>
    </div>
  );
}

export default CommandPalette;

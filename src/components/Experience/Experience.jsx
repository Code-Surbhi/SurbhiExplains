import "./Experience.css";
import useScrollReveal from "../../hooks/useScrollReveal";

const experiences = [
  {
    id: "01",
    type: "Summer Internship",
    role: "Software Engineering Intern",
    company: "Quark Software",
    location: "Mohali, India",
    duration: "June 2025",
    description:
      "Worked on production-level development across frontend and backend using Angular, Node.js, and Express. Implemented OAuth-based authentication, built scalable features, and focused on security, performance, and UI/UX. Learned how professional teams collaborate under real deadlines and developed a strong production mindset.",
    stack: [
      "Angular",
      "TypeScript",
      "Node.js",
      "Express.js",
      "OAuth 2.0",
      "REST APIs",
      "Secure API Design",
    ],
    current: false,
  },
  {
    id: "02",
    type: "Community Role",
    role: "Cloud Team Member",
    company: "Google Developer Groups On Campus",
    location: "Chitkara University, Punjab",
    duration: "Sep 2025 — Present",
    description:
      "Part of the Cloud team at GDG On Campus Chitkara University. Co-facilitated the Google Cloud Study Jam – Gen AI Edition, supporting 120+ learners through doubt-solving sessions, beginner-friendly resources, and progress tracking. Contributed to the campus achieving Tier 1 status for the 3rd consecutive year with 100+ achievers.",
    stack: [
      "Google Cloud",
      "Gen AI",
      "Community Building",
      "Event Facilitation",
      "Teaching",
    ],
    current: true,
  },
];

function ExperienceCard({ exp }) {
  return (
    <article className={`exp-card ${exp.current ? "exp-card--current" : ""}`}>
      <div className="exp-card__left">
        <span className="exp-card__duration font-mono">{exp.duration}</span>
        <span className="exp-card__type label">{exp.type}</span>
      </div>

      <div className="exp-card__line">
        <div className="exp-card__dot" />
        <div className="exp-card__connector" />
      </div>

      <div className="exp-card__right">
        <div className="exp-card__header">
          <h3 className="exp-card__role">{exp.role}</h3>
          {exp.current && (
            <span className="exp-card__current-badge font-mono">● current</span>
          )}
        </div>

        <p className="exp-card__company font-mono">
          {exp.company}
          <span className="exp-card__location"> · {exp.location}</span>
        </p>

        <p className="exp-card__description">{exp.description}</p>

        <div className="exp-card__stack">
          {exp.stack.map((tech) => (
            <span key={tech} className="exp-card__tag font-mono">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

function Experience() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section
      className={`experience reveal ${isVisible ? "visible" : ""}`}
      id="experience"
      ref={ref}
    >
      <div className="experience__inner">
        <div className="experience__header">
          <p className="label">Work History</p>
          <div className="experience__header-row">
            <h2 className="experience__title">Experience</h2>
            <p className="experience__subtitle">
              Where I've worked, what I've built, what I've learned.
            </p>
          </div>
        </div>

        <div className="experience__list">
          {experiences.map((exp) => (
            <ExperienceCard key={exp.id} exp={exp} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;

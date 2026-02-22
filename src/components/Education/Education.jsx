import "./Education.css";
import useScrollReveal from "../../hooks/useScrollReveal";

const education = [
  {
    id: "01",
    degree: "Bachelor of Engineering",
    field: "Computer Science",
    institution: "Chitkara University",
    location: "Punjab, India",
    duration: "2023 — 2027",
    description:
      "Currently in my 3rd year, focusing on cloud computing, software engineering, and AI. Building real projects alongside coursework and maintaining a strong academic record.",
    achievements: ["CGPA 9.06 / 10"],
    current: true,
  },
];

function EducationCard({ edu }) {
  return (
    <article className={`edu-card ${edu.current ? "edu-card--current" : ""}`}>
      <div className="edu-card__left">
        <span className="edu-card__duration font-mono">{edu.duration}</span>
        {edu.current && (
          <span className="edu-card__current font-mono">● enrolled</span>
        )}
      </div>

      <div className="edu-card__line">
        <div className="edu-card__dot" />
        <div className="edu-card__connector" />
      </div>

      <div className="edu-card__right">
        <div className="edu-card__header">
          <h3 className="edu-card__degree">{edu.degree}</h3>
          <span className="edu-card__field font-mono">{edu.field}</span>
        </div>

        <p className="edu-card__institution font-mono">
          {edu.institution}
          <span className="edu-card__location"> · {edu.location}</span>
        </p>

        <p className="edu-card__description">{edu.description}</p>

        {edu.achievements && edu.achievements.length > 0 && (
          <ul className="edu-card__achievements">
            {edu.achievements.map((item) => (
              <li key={item} className="edu-card__achievement">
                <span className="edu-card__achievement-dot">→</span>
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}

function Education() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section
      className={`education reveal ${isVisible ? "visible" : ""}`}
      id="education"
      ref={ref}
    >
      <div className="education__inner">
        <div className="education__header">
          <p className="label">Academic Background</p>
          <div className="education__header-row">
            <h2 className="education__title">Education</h2>
            <p className="education__subtitle">
              {/* anything here will go on side of heading */}
            </p>
          </div>
        </div>

        <div className="education__list">
          {education.map((edu) => (
            <EducationCard key={edu.id} edu={edu} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;

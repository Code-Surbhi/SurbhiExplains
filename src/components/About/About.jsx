import "./About.css";
import useScrollReveal from "../../hooks/useScrollReveal";

const facts = [
  { label: "Status", value: "Student & Builder" },
  { label: "Focus", value: "Cloud Engineering" },
  { label: "Certifications", value: "AWS CCP · AWS AI Practitioner" },
  { label: "Interests", value: "Cloud · DevOps · AI · Teaching" },
  { label: "Currently", value: "Building in public" },
  { label: "Goal", value: "Cloud Engineer who ships and explains" },
];

function About() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section
      className={`about reveal ${isVisible ? "visible" : ""}`}
      id="about"
      ref={ref}
    >
      <div className="about__inner">
        <p className="label about__label">About</p>

        <div className="about__grid">
          <div className="about__narrative">
            <h2 className="about__title">
              I'm a student who decided
              <br />
              to{" "}
              <span
                className="text-accent font-display"
                style={{ fontStyle: "italic" }}
              >
                stop waiting
              </span>{" "}
              to be ready.
            </h2>

            <div className="about__body">
              <p>
                I'm Surbhi — a cloud engineering student, AWS certified
                practitioner, and someone who believes the best way to learn is
                to build everything in public and document every step along the
                way.
              </p>
              <p>
                I'm fascinated by how infrastructure works at scale — how the
                cloud enables teams to build faster, fail safely, and ship with
                confidence. Cloud architecture, DevOps automation, and AI on AWS
                are the areas I'm diving deepest into right now.
              </p>
              <p>
                But here's the thing — I don't just want to learn quietly. I
                want to explain things. I want other students, especially women
                entering tech, to see that you don't need to have it all figured
                out. You just need to start building and share the journey
                honestly.
              </p>
              <p className="about__closing">
                That's what this site is. A live document of becoming.
              </p>
            </div>
          </div>

          <div className="about__facts">
            <div className="about__facts-inner">
              <p className="label about__facts-label">Quick Facts</p>
              <ul className="about__facts-list">
                {facts.map((fact) => (
                  <li key={fact.label} className="about__fact">
                    <span className="about__fact-label">{fact.label}</span>
                    <span className="about__fact-value">{fact.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

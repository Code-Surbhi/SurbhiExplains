import "./About.css";
import useScrollReveal from "../../hooks/useScrollReveal";

const facts = [
  { label: "Status", value: "Student & Builder" },
  { label: "Focus", value: "Cloud Engineering" },
  { label: "Certifications", value: "AWS CCP · AWS AI Practitioner" },
  { label: "Interests", value: "Cloud · DevOps · AI · Teaching" },
  { label: "Currently", value: "Overwhelmed but too curious to stop" },
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
          {/* Left — Narrative */}
          <div className="about__narrative">
            <h2 className="about__title">
              Not your average tech girl.
              <br />
              <span
                className="text-accent font-display"
                style={{ fontStyle: "italic" }}
              >
                Cloud is where i belong, and I'm here to explain why.
              </span>
            </h2>

            <div className="about__body">
              <p>
                I didn’t expect a simple AWS lab to change anything. It was
                supposed to be just another task to complete but somewhere along
                the way, I got hooked. Watching cloud services connect, seeing
                infrastructure come alive, realizing you could build something
                real from nothing, it all clicked for me. I kept exploring long
                after the lab ended.
              </p>
              <p>
                Then I did something that scared me. I booked the AWS Cloud
                Practitioner exam before I felt fully ready. That decision
                pushed me harder than I had ever studied before, and when I
                passed with a strong score, something shifted. It wasn’t just a
                certification. It was proof that I was capable of more than I
                thought.
              </p>
              <p>
                I kept going. I earned the AWS AI Practitioner certification
                next, and now I’m working toward the AWS Certified Developer
                Associate. The journey feels bigger than exams though. It’s
                about growing into someone who builds, learns, and keeps showing
                up even when things feel difficult.
              </p>
              <p>
                Most days, I feel overwhelmed. There’s always something new to
                learn, another concept to understand, another idea I want to
                build. But I’ve realized that feeling overwhelmed often means
                you’re growing. I’ve learned to embrace it. That’s why I build
                in public, document what I’m learning, and share the imperfect
                middle stages instead of only the polished results.
              </p>
              <p className="about__closing">
                If you’re a student wondering whether you belong in tech, you
                do. Start before you feel ready. Learn out loud. Let your
                progress be messy and real. That’s exactly what this website is
                about.
              </p>
            </div>
          </div>

          {/* Right — Facts */}
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

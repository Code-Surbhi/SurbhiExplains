import "./About.css";
import useScrollReveal from "../../hooks/useScrollReveal";

const facts = [
  { label: "Status", value: "Student & Builder" },
  { label: "Focus", value: "Cloud Engineering · Java Backend" },
  { label: "Certifications", value: "AWS CCP · AWS AI Practitioner" },
  { label: "Interests", value: "Cloud · DevOps · Java · AI" },
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
                I didn't expect a simple AWS lab to change anything. It was
                supposed to be just another task to complete but somewhere along
                the way, I got hooked. Watching cloud services connect, seeing
                infrastructure come alive, realizing you could build something
                real from nothing, it all clicked for me. I kept exploring long
                after the lab ended.
              </p>
              <p>
                Around the same time, Java started making sense in a way it
                hadn't before. Not just the syntax, but the thinking behind it.
                OOP, Spring Boot, REST APIs, microservices, Kafka. I realized
                that cloud and backend development aren't separate paths. They
                converge. The best engineers understand both: how the code is
                written and where it runs.
              </p>
              <p>
                So I went all in on both. I passed the AWS Cloud Practitioner
                exam before I felt ready, then the AWS AI Practitioner. I've
                completed courses in Core Java, Spring Boot, Microservices with
                Docker and Kubernetes, Apache Kafka, and DevOps fundamentals.
                Each one added a new layer to how I see systems not just as
                services on a console, but as distributed applications that need
                to be built, deployed, and scaled thoughtfully.
              </p>
              <p>
                Most days I feel overwhelmed. There's always another concept to
                understand, another service to explore, another idea to build.
                But I've learned that overwhelmed and growing are often the same
                thing. So I build in public, document what I'm learning, and
                share the messy middle instead of only the polished results.
              </p>
              <p className="about__closing">
                If you're a student wondering whether you belong in tech — you
                do. Pick a direction, go deep, and start before you feel ready.
                That's exactly what this site is.
              </p>
            </div>
          </div>

          {/* Right — Photo + Facts */}
          <div className="about__right">
            {/* Style C — Tilted photo with ghost accent border */}
            <div className="about__photo-wrap">
              <div className="about__photo-ghost" />
              <div className="about__photo-frame">
                <img
                  src="/surbhi.jpg"
                  alt="Surbhi Singh — Cloud Engineering Student"
                  className="about__photo-img"
                />
              </div>
            </div>

            {/* Quick Facts */}
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

import "./Certifications.css";
import useScrollReveal from "../../hooks/useScrollReveal";

const certifications = [
  {
    id: "01",
    status: "earned",
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    year: "August 31, 2025",
    code: "CLF-C02",
    description:
      "Foundational understanding of AWS Cloud concepts, services, security, architecture, pricing, and support.",
    verifyLink:
      "https://www.credly.com/badges/9cd07000-4d33-4bdf-a0ae-9454433be763/public_url",
    badge: "/badges/aws-ccp.png",
  },
  {
    id: "02",
    status: "earned",
    title: "AWS Certified AI Practitioner",
    issuer: "Amazon Web Services",
    year: "January 5, 2026",
    code: "AIF-C01",
    description:
      "Core concepts of AI, ML, and generative AI on AWS : including responsible AI practices and real-world use cases.",
    verifyLink:
      "https://www.credly.com/badges/54fbb3b9-e1b0-4546-be9e-f41adfe24ef1/public_url",
    badge: "/badges/aws-ai.png",
  },
  {
    id: "03",
    status: "in-progress",
    title: "AWS Certified Developer Associate",
    issuer: "Amazon Web Services",
    year: "Target 2026",
    code: "DVA-C02",
    description:
      "Validates proficiency in designing, developing, deploying, and debugging secure, cloud-native applications using core AWS services, APIs, and CI/CD pipelines.",
    verifyLink: null,
    badge: null,
  },
];

function CertCard({ cert }) {
  return (
    <div className="cert-flip">
      <div className="cert-flip__inner">
        {/* FRONT */}
        <article
          className={`cert-card cert-flip__front ${cert.status === "in-progress" ? "cert-card--progress" : ""}`}
        >
          <div className="cert-card__header">
            <span className="label">Credential {cert.id}</span>
            <span
              className={`cert-card__status ${cert.status === "earned" ? "cert-card__status--earned" : "cert-card__status--progress"}`}
            >
              {cert.status === "earned" ? "✓ earned" : "◌ pursuing"}
            </span>
          </div>

          <div className="cert-card__code">{cert.code}</div>
          <h3 className="cert-card__title">{cert.title}</h3>
          <p className="cert-card__description">{cert.description}</p>

          <div className="cert-card__footer">
            <span className="cert-card__issuer">{cert.issuer}</span>
            <span className="cert-card__year">{cert.year}</span>
          </div>

          {cert.status === "earned" && (
            <p className="cert-card__hint font-mono">hover to see badge →</p>
          )}
        </article>

        {/* BACK */}
        <div className="cert-flip__back">
          {cert.badge ? (
            <>
              <div className="cert-flip__back-content">
                <img
                  src={cert.badge}
                  alt={`${cert.title} badge`}
                  className="cert-flip__badge"
                />
                <p className="cert-flip__back-title font-mono">{cert.code}</p>
                <p className="cert-flip__back-name">{cert.title}</p>
              </div>
              {cert.verifyLink && (
                <a
                  href={cert.verifyLink}
                  target="_blank"
                  rel="noreferrer"
                  className="cert-flip__verify"
                >
                  Verify on Credly →
                </a>
              )}
            </>
          ) : (
            <div className="cert-flip__back-content">
              <div className="cert-flip__pursuing">◌</div>
              <p className="cert-flip__back-title font-mono">{cert.code}</p>
              <p className="cert-flip__back-name">In Progress</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function Certifications() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section
      className={`certifications reveal ${isVisible ? "visible" : ""}`}
      id="certifications"
      ref={ref}
    >
      <div className="certifications__inner">
        <div className="certifications__header">
          <p className="label">Credentials</p>
          <h2 className="certifications__title">Certifications</h2>
          <p className="certifications__subtitle">
            Formal validation of cloud and AI knowledge.
          </p>
        </div>

        <div className="certifications__grid">
          {certifications.map((cert) => (
            <CertCard key={cert.id} cert={cert} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;

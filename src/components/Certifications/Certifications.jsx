import "./Certifications.css";

const certifications = [
  {
    id: "01",
    status: "earned",
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    year: "August 2025",
    code: "CLF-C02",
    description:
      "Foundational understanding of AWS Cloud concepts, services, security, architecture, pricing, and support.",
    verifyLink:
      "https://www.credly.com/badges/9cd07000-4d33-4bdf-a0ae-9454433be763/public_url",
  },
  {
    id: "02",
    status: "earned",
    title: "AWS Certified AI Practitioner",
    issuer: "Amazon Web Services",
    year: "January 2026",
    code: "AIF-C01",
    description:
      "Core concepts of AI, ML, and generative AI on AWS — including responsible AI practices and real-world use cases.",
    verifyLink:
      "https://www.credly.com/badges/54fbb3b9-e1b0-4546-be9e-f41adfe24ef1/public_url",
  },
  {
    id: "03",
    status: "in-progress",
    title: "AWS Certified Developer Associate",
    issuer: "Amazon Web Services",
    year: "Target 2025",
    code: "SAA-C03",
    description:
      "Designing distributed systems and architecting resilient, high-performing solutions on AWS.",
    verifyLink: null,
  },
];

function CertCard({ cert }) {
  return (
    <article
      className={`cert-card ${cert.status === "in-progress" ? "cert-card--progress" : ""}`}
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

      {cert.verifyLink && (
        <a
          href={cert.verifyLink}
          target="_blank"
          rel="noreferrer"
          className="cert-card__verify"
        >
          Verify credential →
        </a>
      )}
    </article>
  );
}

function Certifications() {
  return (
    <section className="certifications" id="certifications">
      <div className="certifications__inner">
        <div className="certifications__header">
          <p className="label">Credentials</p>
          <h2 className="certifications__title">Certifications</h2>
          <p className="certifications__subtitle">
            Formal validation of cloud and AI knowledge — with more in progress.
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

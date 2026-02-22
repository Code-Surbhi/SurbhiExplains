import "./Projects.css";
import useScrollReveal from "../../hooks/useScrollReveal";

const tooltips = {
  React: "UI component framework",
  Vite: "Lightning-fast build tool",
  "React Router": "Client-side routing + 404 handling",
  CSS3: "Custom design system — no frameworks",
  "AWS S3": "Static file hosting on AWS",
  CloudFront: "AWS CDN — global edge delivery",
  ACM: "Free SSL certificate from AWS",
  IAM: "AWS identity and access management",
  "GitHub Actions": "CI/CD automation pipeline",
  "GoDaddy DNS": "Domain name routing",
  YAML: "Workflow configuration language",
  "Node.js": "JavaScript runtime",
  npm: "Package manager",
  "AWS CodeDeploy": "AWS automated deployment service",
  DevOps: "Development and operations practices",
};

const projects = [
  {
    id: "01",
    featured: true,
    status: "live",
    title: "surbhiexplains.com",
    description:
      "React and Vite frontend with a hand-crafted CSS design system, deployed on AWS using S3 static hosting, CloudFront CDN, and ACM SSL. CI/CD pipeline built with GitHub Actions. Every component, hook, and pixel written from scratch.",
    stack: [
      "React",
      "Vite",
      "React Router",
      "CSS3",
      "AWS S3",
      "CloudFront",
      "ACM",
      "IAM",
      "GitHub Actions",
      "GoDaddy DNS",
    ],
    link: "https://surbhiexplains.com",
    github: "https://github.com/Code-Surbhi/SurbhiExplains",
  },
  {
    id: "02",
    featured: false,
    status: "in-progress",
    title: "AWS Cloud Project",
    description:
      "Exploring core AWS services hands-on — IAM, EC2, S3, and VPC networking. Documenting architecture decisions and lessons learned publicly.",
    stack: ["AWS S3", "IAM", "CloudFront"],
    link: null,
    github: null,
  },
  // {
  //   id: "03",
  //   featured: false,
  //   status: "live",
  //   title: "GitHub Actions CI/CD Pipeline",
  //   description:
  //     "Automated deployment pipeline that deploys surbhiexplains.com on every git push — no manual uploads ever. GitHub Actions builds the React site, syncs it to AWS S3 with smart cache headers, and invalidates CloudFront automatically. Full deployment completes in under 30 seconds.",
  //   stack: [
  //     "GitHub Actions",
  //     "YAML",
  //     "AWS S3",
  //     "CloudFront",
  //     "IAM",
  //     "Node.js",
  //     "npm",
  //   ],
  //   link: "https://www.surbhiexplains.com",
  //   github: "https://github.com/Code-Surbhi/SurbhiExplains",
  // },
];

function ProjectCard({ project }) {
  return (
    <article
      className={`project-card ${project.featured ? "project-card--featured" : ""}`}
    >
      <div className="project-card__header">
        <span className="label">Project {project.id}</span>
        <span
          className={`project-card__status project-card__status--${project.status}`}
        >
          {project.status === "live" ? "● live" : "◌ in progress"}
        </span>
      </div>

      <h3 className="project-card__title">{project.title}</h3>
      <p className="project-card__description">{project.description}</p>

      <div className="project-card__stack">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="project-card__tag"
            data-tooltip={tooltips[tech] || tech}
          >
            {tech}
          </span>
        ))}
      </div>

      {(project.link || project.github) && (
        <div className="project-card__links">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="project-card__link"
            >
              View Site →
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="project-card__link project-card__link--ghost"
            >
              GitHub →
            </a>
          )}
        </div>
      )}
    </article>
  );
}

function Projects() {
  const [ref, isVisible] = useScrollReveal();
  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section
      className={`projects reveal ${isVisible ? "visible" : ""}`}
      id="projects"
      ref={ref}
    >
      <div className="projects__inner">
        <div className="projects__header">
          <p className="label">Selected Work</p>
          <h2 className="projects__title">Projects</h2>
        </div>

        <ProjectCard project={featured} />

        <div className="projects__grid">
          {rest.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;

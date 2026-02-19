import "./Projects.css";
import useScrollReveal from "../../hooks/useScrollReveal";

const projects = [
  {
    id: "01",
    featured: true,
    status: "live",
    title: "surbhiexplains.com",
    description:
      "My personal engineering brand — designed from scratch with a custom design system, built in React with Vite, and deployed on AWS using S3 static hosting, CloudFront CDN, and ACM SSL. Every visual decision was intentional. Every commit is public.",
    stack: ["React", "Vite", "AWS S3", "CloudFront", "ACM", "Route 53"],
    link: "https://surbhiexplains.com",
    github: "https://github.com/yourusername/surbhiexplains",
  },
  {
    id: "02",
    featured: false,
    status: "in-progress",
    title: "AWS Cloud Project",
    description:
      "Exploring core AWS services hands-on — IAM, EC2, S3, and VPC networking. Documenting architecture decisions and lessons learned publicly.",
    stack: ["AWS", "IAM", "EC2", "S3", "VPC"],
    link: null,
    github: null,
  },
  {
    id: "03",
    featured: false,
    status: "in-progress",
    title: "CI/CD Pipeline",
    description:
      "Building an automated deployment pipeline to understand how code moves from a developer's laptop to production. Learning GitHub Actions and AWS CodeDeploy.",
    stack: ["GitHub Actions", "AWS CodeDeploy", "DevOps"],
    link: null,
    github: null,
  },
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
          <span key={tech} className="project-card__tag">
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

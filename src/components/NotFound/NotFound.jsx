import "./NotFound.css";

function NotFound() {
  return (
    <section className="notfound">
      <div className="notfound__inner">

        <div className="notfound__code">404</div>

        <div className="notfound__content">
          <p className="label notfound__label">Page Not Found</p>
          <h1 className="notfound__title">
            You found a<br />
            <span className="text-accent font-display" style={{ fontStyle: "italic" }}>
              dead end.
            </span>
          </h1>
          <p className="notfound__description">
            This page doesn't exist — but the rest of the site does.
            Head back and keep exploring.
          </p>

          <div className="notfound__actions">
            <a href="/" className="btn btn--primary">
              Back to Home
            </a>
            <a href="/#projects" className="btn btn--ghost">
              View Projects →
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default NotFound;

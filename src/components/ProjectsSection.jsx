import Button from './Button.jsx'
import Container from './Container.jsx'

function ProjectsSection({ projects }) {
  return (
    <section
      className="section projects"
      id="projects"
      aria-labelledby="projects-title"
      tabIndex="-1"
    >
      <Container>
        <div className="section-heading">
          <div>
            <p className="eyebrow">Selected work</p>
            <h2 id="projects-title">Projects, briefly.</h2>
          </div>
          <p>
            Concise summaries of completed work and projects currently in development.
          </p>
        </div>

        <div className="project-list">
          {projects.map((project, index) => (
            <article
              className={`project-summary project-summary--${project.status}`}
              id={project.slug}
              aria-labelledby={`${project.slug}-title`}
              tabIndex="-1"
              key={project.slug}
            >
              <div className="project-summary__intro">
                <div>
                  <p className="project-summary__meta">
                    <span className="project-summary__number">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    {project.category}
                    <span
                      className={`project-summary__status project-summary__status--${project.status}`}
                    >
                      {project.statusLabel}
                    </span>
                  </p>
                  <h3 id={`${project.slug}-title`}>{project.title}</h3>
                  <p className="project-summary__subtitle">{project.subtitle}</p>
                  <p className="project-summary__description">{project.description}</p>
                  {(project.liveUrl || project.readmeUrl) && (
                    <div className="button-row project-summary__actions">
                      {project.readmeUrl && (
                        <Button href={project.readmeUrl} variant="secondary">
                          GitHub README
                        </Button>
                      )}
                      {project.liveUrl && <Button href={project.liveUrl}>Live project</Button>}
                    </div>
                  )}
                </div>

                {project.image && project.liveUrl ? (
                  <a
                    className="project-summary__image"
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open the live ${project.title} application in a new tab`}
                  >
                    <img
                      src={project.image}
                      width={project.imageWidth}
                      height={project.imageHeight}
                      loading="lazy"
                      decoding="async"
                      alt={project.imageAlt}
                    />
                  </a>
                ) : (
                  project.currentFocus && (
                    <div className="project-summary__progress">
                      <p>{project.currentFocus.label}</p>
                      <strong>{project.currentFocus.title}</strong>
                      <span>{project.currentFocus.description}</span>
                      <ol aria-label="Current data foundation workflow">
                        {project.currentFocus.flow.map((step) => (
                          <li key={step}>{step}</li>
                        ))}
                      </ol>
                    </div>
                  )
                )}
              </div>

              <div
                className={`project-summary__details${
                  project.metrics?.length ? '' : ' project-summary__details--single'
                }`}
              >
                {project.metrics?.length > 0 && (
                  <div>
                    <p className="project-summary__label">Selected evidence</p>
                    <dl className="project-summary__metrics">
                      {project.metrics.map((metric) => (
                        <div key={metric.label}>
                          <dt>{metric.value}</dt>
                          <dd>{metric.label}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                )}

                <div>
                  <p className="project-summary__label">
                    {project.highlightsLabel || 'What I built'}
                  </p>
                  <ul className="project-summary__highlights">
                    {project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                  </ul>
                </div>
              </div>

              <div className="project-summary__footer">
                <ul className="project-summary__stack" aria-label={`${project.title} technology stack`}>
                  {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
                </ul>
                <p className="project-summary__note">
                  <strong>Responsible use:</strong> {project.responsibleUse}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default ProjectsSection

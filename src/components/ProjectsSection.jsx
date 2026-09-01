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
            <p className="eyebrow">01 · Selected work</p>
            <h2 id="projects-title">Work that shows the full process.</h2>
          </div>
          <p>
            From a real question and raw data to tested analysis, interpretable models and a
            usable analytical product.
          </p>
        </div>

        <div className="project-list">
          {projects.map((project) => (
            <article
              className="project-case-study"
              id={project.slug}
              aria-labelledby={`${project.slug}-title`}
              tabIndex="-1"
              key={project.slug}
            >
              <header className="project-case-study__header">
                <p className="project-case-study__meta">
                  <span>Featured project</span>
                  <span>{project.category} · {project.year}</span>
                </p>
                <div className="project-case-study__lead">
                  <div className="project-case-study__copy">
                    <h3 id={`${project.slug}-title`}>{project.title}</h3>
                    <p className="project-case-study__subtitle">{project.subtitle}</p>
                    <p className="project-case-study__summary">{project.summary}</p>
                    <div className="button-row project-case-study__actions" aria-label="Project links">
                      <Button href={project.liveUrl}>Live project</Button>
                      <Button href={project.readmeUrl} variant="secondary">
                        View case study / GitHub
                      </Button>
                    </div>
                  </div>

                  <a
                    className="project-case-study__image"
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
                    <span className="project-case-study__image-action" aria-hidden="true">
                      Open live project <span>↗</span>
                    </span>
                  </a>
                </div>

                <dl className="project-case-study__facts">
                  <div><dt>Focus</dt><dd>{project.focus}</dd></div>
                  <div><dt>Data</dt><dd>{project.dataSource}</dd></div>
                  <div><dt>Methods</dt><dd>{project.methods}</dd></div>
                </dl>
              </header>

              <section
                className="project-case-study__findings"
                aria-labelledby={`${project.slug}-findings`}
              >
                <p className="project-case-study__label">Key findings</p>
                <h4 className="sr-only" id={`${project.slug}-findings`}>Key findings</h4>
                <dl>
                  {project.findings.map((finding) => (
                    <div key={finding.label}>
                      <dt>{finding.value}</dt>
                      <dd>{finding.label}</dd>
                    </div>
                  ))}
                </dl>
              </section>

              <section
                className="project-case-study__context"
                aria-label={`${project.title} analytical context`}
              >
                <div>
                  <p className="project-case-study__label">Business question</p>
                  <h4 id={`${project.slug}-question`}>{project.businessQuestion}</h4>
                </div>
                <div>
                  <p className="project-case-study__label">Decision relevance</p>
                  <p>{project.decisionRelevance}</p>
                </div>
              </section>

              <section
                className="project-case-study__delivered"
                aria-labelledby={`${project.slug}-delivered`}
              >
                <div>
                  <p className="project-case-study__label">What I delivered</p>
                  <h4 className="sr-only" id={`${project.slug}-delivered`}>What I delivered</h4>
                  <ul>
                    {project.deliverables.map((deliverable) => (
                      <li key={deliverable}>{deliverable}</li>
                    ))}
                  </ul>
                </div>

                <details className="project-case-study__technical">
                  <summary>Technical details</summary>
                  <ul>
                    {project.technicalDetails.map((detail) => <li key={detail}>{detail}</li>)}
                  </ul>
                </details>
              </section>

              <div className="project-case-study__footer">
                <ul
                  className="project-case-study__stack"
                  aria-label={`${project.title} technology stack`}
                >
                  {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
                </ul>
                <p className="project-case-study__note">
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

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
            <h2 id="projects-title">Featured case study</h2>
          </div>
          <p>
            An end-to-end analysis demonstrating how I move from raw data and statistical
            investigation to validated models, clear findings and an accessible analytical
            product.
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
                  <span>{project.category}</span>
                  <span className="project-case-study__status">{project.statusLabel}</span>
                </p>
                <h3 id={`${project.slug}-title`}>{project.title}</h3>
                <p className="project-case-study__subtitle">{project.subtitle}</p>
              </header>

              <div className="project-case-study__overview">
                <section aria-labelledby={`${project.slug}-question`}>
                  <p className="project-case-study__label">Business question</p>
                  <h4 id={`${project.slug}-question`}>{project.businessQuestion}</h4>
                </section>
                <section aria-labelledby={`${project.slug}-summary`}>
                  <p className="project-case-study__label">Project summary</p>
                  <h4 className="sr-only" id={`${project.slug}-summary`}>Project summary</h4>
                  <p>{project.summary}</p>
                </section>
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
              </a>

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
                className="project-case-study__relevance"
                aria-labelledby={`${project.slug}-relevance`}
              >
                <p className="project-case-study__label">Decision relevance</p>
                <h4 className="sr-only" id={`${project.slug}-relevance`}>Decision relevance</h4>
                <p>{project.decisionRelevance}</p>
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
                <div className="button-row project-case-study__actions" aria-label="Project links">
                  <Button href={project.liveUrl}>View live application</Button>
                  <Button href={project.readmeUrl} variant="secondary">
                    Read case study on GitHub
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default ProjectsSection

import Button from './Button.jsx'
import Container from './Container.jsx'

function ProjectsSection({ projects }) {
  return (
    <section className="case-study" id="work" aria-labelledby="work-title" tabIndex="-1">
      <Container>
        <div className="section-intro">
          <p className="kicker">Selected case study</p>
          <div>
            <h2 id="work-title">One project, presented in depth.</h2>
            <p>
              A complete view of the question, analytical process, findings, and the decisions the
              evidence can support.
            </p>
          </div>
        </div>

        {projects.map((project) => (
          <article className="project" id={project.slug} key={project.slug}>
            <header className="project__hero">
              <div className="project__copy">
                <p className="project__meta">{project.category} / {project.year}</p>
                <h3>{project.title}</h3>
                <p className="project__subtitle">{project.subtitle}</p>
                <div className="project__actions">
                  <Button href={project.liveUrl}>Explore live project</Button>
                  <Button href={project.readmeUrl} variant="secondary">Read the full case study</Button>
                </div>
              </div>

              <a
                className="project__preview"
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
                <span>Live application <span aria-hidden="true">↗</span></span>
              </a>
            </header>

            <section className="project__summary" aria-labelledby={`${project.slug}-summary`}>
              <p className="project-label">Executive summary</p>
              <p className="project__summary-copy" id={`${project.slug}-summary`}>
                {project.executiveSummary}
              </p>
              <dl className="project__facts">
                <div><dt>Role</dt><dd>{project.role}</dd></div>
                <div><dt>Data</dt><dd>{project.dataSource}</dd></div>
                <div><dt>Scope</dt><dd>{project.scope}</dd></div>
                <div><dt>Output</dt><dd>{project.output}</dd></div>
              </dl>
            </section>

            <section className="project__question">
              <p className="project-label">The business question</p>
              <blockquote>{project.businessQuestion}</blockquote>
            </section>

            <section className="project__process" aria-labelledby={`${project.slug}-process`}>
              <div className="project__section-heading">
                <p className="project-label">Method</p>
                <div>
                  <h4 id={`${project.slug}-process`}>From raw data to a usable analytical product.</h4>
                  <ul className="tag-list" aria-label="Technology used">
                    {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
                  </ul>
                </div>
              </div>

              <ol className="process-list">
                {project.process.map((step) => (
                  <li key={step.number}>
                    <span>{step.number}</span>
                    <h5>{step.title}</h5>
                    <p>{step.description}</p>
                  </li>
                ))}
              </ol>
            </section>

            <section className="project__results" aria-labelledby={`${project.slug}-results`}>
              <div className="results__heading">
                <p className="project-label">What the analysis found</p>
                <h4 id={`${project.slug}-results`}>Key findings</h4>
              </div>
              <dl className="results-grid">
                {project.findings.map((finding) => (
                  <div key={finding.label}>
                    <dt>{finding.value}</dt>
                    <dd>{finding.label}</dd>
                  </div>
                ))}
              </dl>
              <div className="results__interpretation">
                <div>
                  <p className="project-label">Interpretation</p>
                  <p>{project.interpretation}</p>
                </div>
                <div>
                  <p className="project-label">Model validation</p>
                  <ul>
                    {project.modelResults.map((result) => <li key={result}>{result}</li>)}
                  </ul>
                </div>
              </div>
            </section>

            <section className="project__decisions" aria-labelledby={`${project.slug}-decisions`}>
              <div className="project__section-heading">
                <p className="project-label">Business value</p>
                <h4 id={`${project.slug}-decisions`}>Recommendations and next steps</h4>
              </div>
              <div className="decision-grid">
                <div>
                  <h5>Recommendations</h5>
                  <ol>
                    {project.recommendations.map((item) => <li key={item}>{item}</li>)}
                  </ol>
                </div>
                <div>
                  <h5>Next steps</h5>
                  <ol>
                    {project.nextSteps.map((item) => <li key={item}>{item}</li>)}
                  </ol>
                </div>
              </div>
              <p className="project__responsible"><strong>Responsible use.</strong> {project.responsibleUse}</p>
            </section>

            <footer className="project__footer">
              <p>See the analysis in context, or review the implementation and documentation.</p>
              <div className="project__actions">
                <Button href={project.liveUrl}>Explore live project</Button>
                <Button href={project.readmeUrl} variant="secondary">View on GitHub</Button>
              </div>
            </footer>
          </article>
        ))}
      </Container>
    </section>
  )
}

export default ProjectsSection

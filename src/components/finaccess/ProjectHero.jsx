import Button from '../Button.jsx'
import Container from '../Container.jsx'

function ProjectHero({ project }) {
  return (
    <header className="project-hero project-section">
      <Container>
        <div className="project-hero__topline">
          <p className="eyebrow">Featured case study</p>
          <span>Portfolio proof of concept</span>
        </div>
        <div className="project-hero__grid">
          <div>
            <h2 id="project-title">{project.title}</h2>
            <p className="project-hero__subtitle">{project.subtitle}</p>
          </div>
          <div className="project-hero__summary">
            <p>{project.description}</p>
            <div className="button-row">
              <Button href={project.liveUrl}>Launch project</Button>
              <Button href={project.githubUrl} variant="secondary">Source</Button>
            </div>
          </div>
        </div>
        <div className="project-hero__tags" aria-label="Project disciplines">
          <span>Analysis</span>
          <span>Machine learning</span>
          <span>Explainable AI</span>
          <span>Product development</span>
        </div>
      </Container>
    </header>
  )
}

export default ProjectHero

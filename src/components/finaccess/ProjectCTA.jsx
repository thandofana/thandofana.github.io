import Button from '../Button.jsx'
import Container from '../Container.jsx'

function ProjectCTA({ project }) {
  return (
    <section className="project-cta project-section" aria-labelledby="project-cta-title">
      <Container>
        <div>
          <p className="project-kicker">Explore the project</p>
          <h3 id="project-cta-title">See FinAccess in action.</h3>
        </div>
        <div className="button-row">
          <Button href={project.liveUrl}>Launch live project</Button>
          <Button href={project.githubUrl} variant="secondary">View source on GitHub</Button>
        </div>
      </Container>
    </section>
  )
}

export default ProjectCTA

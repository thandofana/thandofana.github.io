import { workflow } from '../../data/finaccess.js'
import Container from '../Container.jsx'

function ProjectWorkflow() {
  return (
    <section className="project-section" aria-labelledby="workflow-title">
      <Container>
        <div className="project-section__heading project-section__heading--split">
          <div>
            <p className="project-kicker">02 · Workflow</p>
            <h3 id="workflow-title">From raw evidence to a deployed application.</h3>
          </div>
          <p>
            A controlled, end-to-end process connects the analytical work to a usable product.
          </p>
        </div>
        <ol className="workflow-grid">
          {workflow.map((step, index) => (
            <li key={step}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <p>{step}</p>
            </li>
          ))}
        </ol>
        <p className="project-note">The original project was completed through 13 controlled, validated phases.</p>
      </Container>
    </section>
  )
}

export default ProjectWorkflow

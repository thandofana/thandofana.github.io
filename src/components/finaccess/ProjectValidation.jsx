import { validation } from '../../data/finaccess.js'
import Container from '../Container.jsx'

function ProjectValidation() {
  return (
    <section className="project-section validation-section" aria-labelledby="validation-title">
      <Container>
        <div className="project-section__heading project-section__heading--split">
          <div>
            <p className="project-kicker">09 · Project validation</p>
            <h3 id="validation-title">Evidence beyond model scores.</h3>
          </div>
          <p>
            The final release gate covered data science, backend behaviour, rendered routes,
            executed notebooks, the public deployment, and production dependencies.
          </p>
        </div>
        <dl className="validation-grid">
          {validation.map((item) => (
            <div key={item.label}>
              <dt>{item.value}</dt>
              <dd>{item.label}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  )
}

export default ProjectValidation

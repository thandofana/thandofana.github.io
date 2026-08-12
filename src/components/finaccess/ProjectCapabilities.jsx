import { demonstratedCapabilities } from '../../data/finaccess.js'
import Container from '../Container.jsx'

function ProjectCapabilities() {
  return (
    <section className="section project-capabilities" aria-labelledby="capabilities-title">
      <Container>
        <div className="section-heading">
          <div>
            <p className="eyebrow">What this project demonstrates</p>
            <h2 id="capabilities-title">An end-to-end data-science workflow.</h2>
          </div>
          <p>From raw survey data and statistical evidence through two deployed, explainable models.</p>
        </div>
        <ul>
          {demonstratedCapabilities.map((capability, index) => (
            <li key={capability}><span>{String(index + 1).padStart(2, '0')}</span>{capability}</li>
          ))}
        </ul>
      </Container>
    </section>
  )
}

export default ProjectCapabilities

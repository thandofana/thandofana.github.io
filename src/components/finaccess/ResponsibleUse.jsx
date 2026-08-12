import { limitations } from '../../data/finaccess.js'
import Container from '../Container.jsx'

function ResponsibleUse() {
  return (
    <section className="project-section project-section--surface" aria-labelledby="responsible-title">
      <Container>
        <div className="responsible-grid">
          <div>
            <p className="project-kicker">10 · Responsible use</p>
            <h3 id="responsible-title">Clear about what the system can—and cannot—claim.</h3>
          </div>
          <ul>
            {limitations.map((limitation) => <li key={limitation}>{limitation}</li>)}
          </ul>
        </div>
      </Container>
    </section>
  )
}

export default ResponsibleUse

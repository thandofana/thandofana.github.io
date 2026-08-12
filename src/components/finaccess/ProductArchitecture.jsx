import { architecture, technologyStack } from '../../data/finaccess.js'
import Container from '../Container.jsx'

function ProductArchitecture() {
  return (
    <section className="project-section project-section--surface" aria-labelledby="architecture-title">
      <Container>
        <div className="project-section__heading project-section__heading--split">
          <div>
            <p className="project-kicker">07 · Product</p>
            <h3 id="architecture-title">Not only a notebook project.</h3>
          </div>
          <p>The analytical work is served through a validated API and responsive web interface.</p>
        </div>
        <ol className="architecture-flow" aria-label="FinAccess product architecture">
          {architecture.map((node, index) => (
            <li key={node}>
              <span>{node}</span>
              {index < architecture.length - 1 && <i aria-hidden="true">↓</i>}
            </li>
          ))}
        </ol>
        <div className="technology-grid">
          {technologyStack.map((group) => (
            <div key={group.category}>
              <h4>{group.category}</h4>
              <p>{group.items.join(' · ')}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default ProductArchitecture

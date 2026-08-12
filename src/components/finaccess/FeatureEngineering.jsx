import { featureEngineering } from '../../data/finaccess.js'
import Container from '../Container.jsx'

function FeatureEngineering() {
  return (
    <section className="project-section project-section--surface" aria-labelledby="features-title">
      <Container>
        <div className="feature-grid">
          <div>
            <p className="project-kicker">03 · Feature engineering</p>
            <h3 id="features-title">Designed to prevent leakage and preserve meaning.</h3>
            <p>
              The two outcomes use intentionally different predictor sets, with transformations
              kept interpretable and reproducible at inference time.
            </p>
          </div>
          <ul>
            {featureEngineering.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
      </Container>
    </section>
  )
}

export default FeatureEngineering

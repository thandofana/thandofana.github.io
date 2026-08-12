import { models } from '../../data/finaccess.js'
import Container from '../Container.jsx'

function ModelResults() {
  return (
    <section className="project-section project-section--surface" aria-labelledby="models-title">
      <Container>
        <div className="project-section__heading">
          <p className="project-kicker">05 · Models</p>
          <h3 id="models-title">Two outcomes. Two independent pipelines.</h3>
          <p>
            Logistic Regression, Decision Tree, Random Forest, and Gradient Boosting were
            evaluated independently for each outcome before protected-holdout testing.
          </p>
        </div>
        <div className="model-grid">
          {models.map((model) => (
            <article className="model-card" key={model.label}>
              <p className="model-card__label">{model.label}</p>
              <p className="model-card__selected">{model.selected}</p>
              <div className="model-card__headline-metrics">
                {model.metrics.slice(0, 2).map(([label, value]) => (
                  <div key={label}>
                    <span>{label}</span>
                    <strong>{value}</strong>
                  </div>
                ))}
              </div>
              <dl className="model-card__details">
                <div><dt>Mean CV ROC-AUC</dt><dd>{model.cvRocAuc}</dd></div>
                <div><dt>Protected holdout</dt><dd>{model.holdout} respondents</dd></div>
                <div><dt>Bootstrap ROC-AUC interval</dt><dd>{model.interval}</dd></div>
                {model.metrics.slice(2).map(([label, value]) => (
                  <div key={label}><dt>{label}</dt><dd>{value}</dd></div>
                ))}
              </dl>
              <p className="model-card__note">{model.note}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default ModelResults

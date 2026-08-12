import Container from '../Container.jsx'

function Explainability() {
  return (
    <section className="project-section" aria-labelledby="explainability-title">
      <Container>
        <div className="explainability-grid">
          <div>
            <p className="project-kicker">06 · Explainability</p>
            <h3 id="explainability-title">More than a classification.</h3>
          </div>
          <div>
            <p>
              Tree SHAP explains the Gradient Boosting pipeline and Linear SHAP explains the
              Logistic Regression pipeline. Each live result includes a prediction, supporting
              probability, and five important model-derived factors for each outcome.
            </p>
            <div className="factor-stack" aria-hidden="true">
              <span style={{ '--factor-width': '88%' }} />
              <span style={{ '--factor-width': '70%' }} />
              <span style={{ '--factor-width': '54%' }} />
              <span style={{ '--factor-width': '38%' }} />
              <span style={{ '--factor-width': '24%' }} />
            </div>
            <p className="project-note">
              SHAP contributions describe model behaviour relative to a model baseline; they are
              not causal explanations or financial eligibility determinations.
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Explainability

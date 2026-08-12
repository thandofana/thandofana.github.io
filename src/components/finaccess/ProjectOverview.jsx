import { datasetFacts, projectQuestions } from '../../data/finaccess.js'
import Container from '../Container.jsx'

function ProjectOverview() {
  return (
    <section className="project-section project-section--surface" aria-labelledby="overview-title">
      <Container>
        <div className="project-section__heading">
          <p className="project-kicker">01 · Problem</p>
          <h3 id="overview-title">Understanding unequal financial access.</h3>
          <p>
            Financial access affects how people save, receive payments, manage shocks,
            and participate in the wider economy. FinAccess examines how access varies
            across demographic, socioeconomic, and digital characteristics.
          </p>
        </div>
        <div className="question-grid">
          {projectQuestions.map((item) => (
            <article className="question-card" key={item.label}>
              <span>{item.label}</span>
              <p>{item.question}</p>
            </article>
          ))}
        </div>
        <div className="dataset-panel">
          <div>
            <p className="dataset-panel__label">Dataset</p>
            <h4>World Bank Global Findex Eswatini microdata</h4>
            <p>Survey reference <code>SWZ_2024_FINDEX_v02_M</code></p>
          </div>
          <dl>
            {datasetFacts.map((fact) => (
              <div key={fact.label}>
                <dt>{fact.value}</dt>
                <dd>{fact.label}</dd>
              </div>
            ))}
          </dl>
        </div>
        <p className="project-note">The analysis identifies associations, not causal effects.</p>
      </Container>
    </section>
  )
}

export default ProjectOverview

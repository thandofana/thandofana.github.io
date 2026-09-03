import CaseStudySection from './CaseStudySection.jsx'

const summaryItems = [
  ['Business Problem', 'businessProblem'],
  ['Headline Result / Impact', 'headlineResult'],
  ['Recommendation / Next Action', 'recommendation'],
]

function ExecutiveSummary({ summary }) {
  return (
    <CaseStudySection id="executive-summary" title="Executive Summary">
      <div className="executive-summary">
        {summaryItems.map(([label, key]) => (
          <article key={key}>
            <h3>{label}</h3>
            <p>{summary[key]}</p>
          </article>
        ))}
      </div>
    </CaseStudySection>
  )
}

export default ExecutiveSummary

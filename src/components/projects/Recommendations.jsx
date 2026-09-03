import CaseStudySection from './CaseStudySection.jsx'

function Recommendations({ recommendations }) {
  return (
    <CaseStudySection id="recommendations" number="05" title="Business Recommendations">
      <ol className="recommendations-list">
        {recommendations.map((recommendation, index) => (
          <li key={recommendation.title}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <div>
              <h3>{recommendation.title}</h3>
              <p>{recommendation.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </CaseStudySection>
  )
}

export default Recommendations

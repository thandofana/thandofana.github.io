import CaseStudySection from './CaseStudySection.jsx'

function MethodologyFlow({ methodology }) {
  return (
    <CaseStudySection id="methodology" number="02" title="Methodology">
      <p className="case-study-section__introduction">{methodology.introduction}</p>
      <ol className="methodology-flow">
        {methodology.steps.map((step, index) => (
          <li key={step.title}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <div>
              <strong>{step.title}</strong>
              <p>{step.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </CaseStudySection>
  )
}

export default MethodologyFlow

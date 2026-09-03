import CaseStudySection from './CaseStudySection.jsx'

function ResultsGallery({ results }) {
  return (
    <CaseStudySection id="results" number="04" title="Results" className="case-study-section--results">
      <div className="results-list">
        {results.map((result, index) => (
          <article className="result-entry" key={result.title}>
            <p className="result-entry__number">{String(index + 1).padStart(2, '0')}</p>
            <h3>{result.title}</h3>
            {result.visuals?.length > 0 && (
              <div className="result-entry__visuals">
                {result.visuals.map((visual) => (
                  <figure className="result-entry__visual" key={visual.imageAlt}>
                    <img
                      src={visual.image}
                      width={visual.imageWidth}
                      height={visual.imageHeight}
                      loading="lazy"
                      decoding="async"
                      alt={visual.imageAlt}
                    />
                    {visual.caption && <figcaption>{visual.caption}</figcaption>}
                  </figure>
                ))}
              </div>
            )}
            {result.metrics?.length > 0 && (
              <dl className="result-metrics">
                {result.metrics.map((metric) => (
                  <div key={metric.label}>
                    <dt>{metric.value}</dt>
                    <dd>{metric.label}</dd>
                  </div>
                ))}
              </dl>
            )}
            <p className="result-entry__interpretation">{result.interpretation}</p>
          </article>
        ))}
      </div>
    </CaseStudySection>
  )
}

export default ResultsGallery

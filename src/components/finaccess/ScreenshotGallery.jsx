import dashboardOverview from '../../assets/finaccess/dashboard-overview.png'
import assessmentInterface from '../../assets/finaccess/assessment-interface.png'
import assessmentResults from '../../assets/finaccess/assessment-results.png'
import Container from '../Container.jsx'

const screenshots = [
  {
    number: '01',
    title: 'Dashboard overview',
    image: dashboardOverview,
    alt: 'FinAccess overview dashboard showing the 43.1% financial-inclusion estimate, 50.4% mobile-money estimate, respondent total, and two validated models',
  },
  {
    number: '02',
    title: 'Assessment interface',
    image: assessmentInterface,
    alt: 'FinAccess assessment interface with a three-step profile form for demographic, connectivity, and phone-use characteristics',
  },
  {
    number: '03',
    title: 'Prediction results',
    image: assessmentResults,
    alt: 'FinAccess result screen showing separate financial-inclusion and mobile-money predictions with probabilities and model factors',
  },
]

function ScreenshotGallery() {
  return (
    <section className="project-section" aria-labelledby="screenshots-title">
      <Container>
        <div className="project-section__heading">
          <p className="project-kicker">08 · Application</p>
          <h3 id="screenshots-title">The analysis, made usable.</h3>
          <p>
            One profile is validated once, scored by both pipelines, and returned with two
            natural-language answers, probabilities, and model-derived factors.
          </p>
        </div>
        <div className="screenshot-grid">
          {screenshots.map((screenshot) => (
            <figure key={screenshot.number}>
              <div className="screenshot-frame">
                <a
                  href={screenshot.image}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${screenshot.title} at full size in a new tab`}
                >
                  <img
                    src={screenshot.image}
                    width="1440"
                    height="1050"
                    loading="lazy"
                    decoding="async"
                    alt={screenshot.alt}
                  />
                </a>
              </div>
              <figcaption>
                <span>{screenshot.number}</span>
                <strong>{screenshot.title}</strong>
                <a
                  className="screenshot-grid__open"
                  href={screenshot.image}
                  target="_blank"
                  rel="noreferrer"
                >
                  Open full size ↗
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default ScreenshotGallery

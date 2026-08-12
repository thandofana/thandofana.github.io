import { keyFindings } from '../../data/finaccess.js'
import socioeconomicFigure from '../../assets/finaccess/socioeconomic-patterns.png'
import digitalFigure from '../../assets/finaccess/digital-access-patterns.png'
import Container from '../Container.jsx'

function KeyFindings() {
  return (
    <section className="project-section project-section--ink" aria-labelledby="findings-title">
      <Container>
        <div className="project-section__heading project-section__heading--split">
          <div>
            <p className="project-kicker">04 · Evidence</p>
            <h3 id="findings-title">What the data showed.</h3>
          </div>
          <p>
            Survey weights were used for population estimates while unweighted sample counts
            were retained for transparency.
          </p>
        </div>
        <div className="finding-grid finding-grid--metrics">
          {keyFindings.map((finding) => (
            <article key={finding.label}>
              <p className="finding-grid__value">{finding.value}</p>
              <h4>{finding.label}</h4>
              <p>{finding.description}</p>
            </article>
          ))}
        </div>
        <div className="evidence-figures">
          <figure>
            <a
              className="figure-link"
              href={socioeconomicFigure}
              target="_blank"
              rel="noreferrer"
              aria-label="Open the socioeconomic patterns figure at full size in a new tab"
            >
              <img
                src={socioeconomicFigure}
                width="3099"
                height="1287"
                loading="lazy"
                decoding="async"
                alt="Bar charts comparing financial inclusion and mobile-money adoption across education, income, and workforce groups"
              />
            </a>
            <figcaption>
              <span>Socioeconomic patterns · Survey-weighted rates</span>
              <a href={socioeconomicFigure} target="_blank" rel="noreferrer">
                Open full size ↗<span className="sr-only"> (opens in a new tab)</span>
              </a>
            </figcaption>
          </figure>
          <figure>
            <a
              className="figure-link"
              href={digitalFigure}
              target="_blank"
              rel="noreferrer"
              aria-label="Open the digital-access patterns figure at full size in a new tab"
            >
              <img
                src={digitalFigure}
                width="3101"
                height="1287"
                loading="lazy"
                decoding="async"
                alt="Bar charts comparing financial inclusion and mobile-money adoption by internet use, phone ownership, and phone type"
              />
            </a>
            <figcaption>
              <span>Digital-access patterns · Survey-weighted rates</span>
              <a href={digitalFigure} target="_blank" rel="noreferrer">
                Open full size ↗<span className="sr-only"> (opens in a new tab)</span>
              </a>
            </figcaption>
          </figure>
        </div>
        <p className="statistical-note">
          Seven of eight pre-specified associations remained statistically significant after
          false-discovery-rate adjustment for each outcome; gender did not.
        </p>
      </Container>
    </section>
  )
}

export default KeyFindings

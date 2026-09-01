import { certifications, education, experience } from '../data/background.js'
import Container from './Container.jsx'

function BackgroundSection() {
  return (
    <section className="background section" id="background" aria-labelledby="background-title" tabIndex="-1">
      <Container>
        <div className="section-intro">
          <p className="kicker">Background</p>
          <div>
            <h2 id="background-title">Experience, education, and continued learning.</h2>
            <p>A practical foundation for analytical work that is rigorous, useful, and clearly communicated.</p>
          </div>
        </div>

        <div className="background-list">
          <article>
            <p className="background-list__type">Experience</p>
            <div>
              <h3>{experience.role}</h3>
              <p className="background-list__meta">{experience.organisation}</p>
              <p>{experience.description}</p>
            </div>
          </article>
          <article>
            <p className="background-list__type">Education</p>
            <div>
              <h3>{education.qualification}</h3>
              <p className="background-list__meta">{education.institution} / {education.status}</p>
            </div>
          </article>
          <article>
            <p className="background-list__type">Certificates</p>
            <div className="certificate-list">
              {certifications.map((certification) => (
                <a key={certification.name} href={certification.certificateUrl} target="_blank" rel="noreferrer">
                  <span>
                    <strong>{certification.name}</strong>
                    <small>{certification.issuer} / <time dateTime={certification.dateTime}>{certification.date}</time></small>
                  </span>
                  <span aria-hidden="true">↗</span>
                  <span className="sr-only"> (opens certificate PDF in a new tab)</span>
                </a>
              ))}
            </div>
          </article>
        </div>
      </Container>
    </section>
  )
}

export default BackgroundSection

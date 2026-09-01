import { certifications, education, experience } from '../data/background.js'
import Container from './Container.jsx'

function BackgroundSection() {
  return (
    <section
      className="section background"
      id="background"
      aria-labelledby="background-title"
      tabIndex="-1"
    >
      <Container>
        <div className="section-heading">
          <div>
            <p className="eyebrow">04 · Experience &amp; education</p>
            <h2 id="background-title">Education and experience, put to work.</h2>
          </div>
          <p>
            Academic study, practical experience, and professional training shaping my data work.
          </p>
        </div>

        <div className="background-list">
          <article className="background-entry">
            <div className="background-entry__meta">
              <span>01</span>
              <p>Experience</p>
            </div>
            <div>
              <h3>{experience.role}</h3>
              <p className="background-entry__organisation">{experience.organisation}</p>
              <p className="background-entry__description">{experience.description}</p>
            </div>
          </article>

          <article className="background-entry">
            <div className="background-entry__meta">
              <span>02</span>
              <p>Education</p>
            </div>
            <div>
              <h3>{education.qualification}</h3>
              <p className="background-entry__organisation">{education.institution}</p>
              <p className="background-entry__description">{education.status}</p>
            </div>
          </article>
        </div>

        <section className="credentials" aria-labelledby="credentials-title">
          <div>
            <p className="background-card__label">Professional learning</p>
            <h3 id="credentials-title">Analytics certifications</h3>
          </div>
          <ul className="credential-list">
            {certifications.map((certification) => (
              <li key={certification.name}>
                <div>
                  <strong>{certification.name}</strong>
                  <span>
                    {certification.issuer} ·{' '}
                    <time dateTime={certification.dateTime}>{certification.date}</time>
                  </span>
                </div>
                <a
                  className="credential-list__link"
                  href={certification.certificateUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`View the ${certification.name} certificate PDF in a new tab`}
                >
                  View certificate <span aria-hidden="true">↗</span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </Container>
    </section>
  )
}

export default BackgroundSection
